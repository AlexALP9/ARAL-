import {chromium} from "playwright";
import {mkdir,writeFile} from "node:fs/promises";
const B="http://127.0.0.1:8123/design/hero/prototypes/hero-4s-k-views/";
const ORIGINAL=B+"ARAL_home_markup_preview.html?t=4.8";
const REVIEW=B+"ARAL_home_hero_centered_preview.html?t=4.8";
const DIR="review-output/hero-centered";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
await mkdir(DIR,{recursive:true});
const errors=[],checks=[],screens=[],measurements=[];
function check(cond,name){checks.push({ok:!!cond,name});if(!cond)errors.push(name)}
const rects=async p=>p.evaluate(()=>{
 function rect(q){const e=document.querySelector(q);if(!e)return null;const r=e.getBoundingClientRect();return{x:r.x,y:r.y,left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:r.width,height:r.height}}
 return {
  hero:rect(".aral-hero"),copy:rect(".aral-hero .aral-copy"),title:rect("#hero-title"),
  description:rect(".aral-hero .description"),
  actions:rect(".aral-hero .actions"),scene:rect(".aral-hero .aral-scene"),
  header:rect(".home-nav"),featured:rect("#featured"),
  overflow:document.documentElement.scrollWidth-innerWidth,
  cards:document.querySelectorAll("#featured .product-card--minimal").length,
  hbg:document.querySelectorAll(".aral-hbg-border").length,
  magnetic:document.querySelectorAll("[data-magnetic]").length,
  time:document.querySelector(".aral-scene")?.dataset.time,
  photos:[...document.querySelectorAll(".aral-scene img")].map(el=>el.getAttribute("src"))
 }
});
for(const width of [1440,1024,768,390]){
 const isTouch=width<=768;
 const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1,isMobile:isTouch,hasTouch:isTouch});
 const old=await context.newPage(),page=await context.newPage();
 const pageErr=[];
 page.on("pageerror",e=>pageErr.push(e.message));
 await old.goto(ORIGINAL,{waitUntil:"domcontentloaded"});
 await page.goto(REVIEW,{waitUntil:"domcontentloaded"});
 await page.waitForTimeout(700);
 const a=await rects(old),b=await rects(page);
 const r={width,baseline:a,preview:b};
 measurements.push(r);
 check(b.cards===4&&b.hbg===7&&b.magnetic===4,width+": approved cards, borders, magnetic CTAs preserved");
 check(JSON.stringify(a.photos)===JSON.stringify(b.photos),width+": all original HERO photo paths unchanged");
 check(b.time==="4.80",width+": HERO at original final 4.8s frame");
 check(b.overflow<=Math.max(3,a.overflow+2),width+": no additional horizontal overflow ("+b.overflow+" vs "+a.overflow+")");
 check(b.actions?.top>=b.description?.bottom-2,width+": button row follows description without overlap");
 check(b.title?.top>=b.hero?.top-3,width+": title inside HERO");
 check(b.actions?.bottom<=b.hero?.bottom+2,width+": buttons inside HERO");
 check(b.title?.width>0&&b.description?.width>0,width+": text has visible width");
 if(width>=1101){
  check(b.copy.left<a.copy.left+40,width+": copy not pushed right off center");
  check(b.scene.left<a.scene.left,width+": right product column moved closer to copy");
  check(b.title.top>a.title.top+15,width+": title lowered toward product group");
 }
 if(width===390){
  check(Math.abs(b.title.left-a.title.left)<2,width+": mobile x positioning unchanged");
  check(Math.abs(b.title.top-a.title.top)<2,width+": mobile y positioning unchanged");
 }
 check(!pageErr.length,width+": no JS exceptions: "+pageErr.join("; "));
 const snap=DIR+"/ARAL-HERO-centered-"+width+".png";
 await page.locator(".aral-hero").screenshot({path:snap,animations:"disabled"});
 screens.push(snap);
 if(width===1440||width===390){
  const full=DIR+"/ARAL-fullpage-centered-"+width+".png";
  await page.screenshot({path:full,fullPage:true,animations:"disabled"});
  screens.push(full);
 }
 await old.close();await page.close();await context.close();
}
const summary={status:errors.length?"FAIL":"PASS",checks:checks.length,failures:errors,screens,measurements};
await writeFile(DIR+"/results.json",JSON.stringify(summary,null,2));
console.log(JSON.stringify({status:summary.status,checks:summary.checks,failures:errors,screens,measurements:measurements.map(v=>({width:v.width,oldTitle:{x:v.baseline.title.x,y:v.baseline.title.y},newTitle:{x:v.preview.title.x,y:v.preview.title.y},oldScene:{x:v.baseline.scene.x},newScene:{x:v.preview.scene.x},overflow:v.preview.overflow}))},null,2));
await browser.close();
if(errors.length)process.exitCode=1;