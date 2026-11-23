import {chromium} from "playwright";
import {mkdir,writeFile} from "node:fs/promises";
const base="http://127.0.0.1:8123/design/hero/prototypes/hero-4s-k-views/";
const oldUrl=base+"ARAL_home_hero_centered_preview.html?t=4.8";
const newUrl=base+"ARAL_home_contour_2A_plus20_preview.html?t=4.8";
const dir="review-output/contour-plus20";
await mkdir(dir,{recursive:true});
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const checks=[],errors=[],screens=[],measures=[];
const check=(yes,message)=>{checks.push({ok:!!yes,message});if(!yes)errors.push(message)};
const selectors=["#audiences","#featured","#b2b","#where"];
const info=async page=>page.evaluate((selectors)=>{
 const choose=(s)=>document.querySelector(s);
 const opacity=(sel,pseudo="::before")=>Number(getComputedStyle(choose(sel),pseudo).opacity);
 const rect=(sel)=>{const r=choose(sel).getBoundingClientRect();return{x:r.x,y:r.y,width:r.width,height:r.height}};
 return {
  waves:selectors.map(sel=>opacity(sel)),
  under:opacity("#featured","::after"),
  featureBackground:getComputedStyle(choose("#featured")).backgroundImage,
  contourImages:selectors.map(sel=>getComputedStyle(choose(sel),"::before").backgroundImage),
  waveAnimations:selectors.map(sel=>getComputedStyle(choose(sel),"::before").animationName),
  titleText:choose("#hero-title")?.textContent,
  heroTime:choose(".aral-scene")?.dataset.time,
  cards:document.querySelectorAll("#featured .product-card--minimal").length,
  magnetic:document.querySelectorAll("[data-magnetic]").length,
  hbg:document.querySelectorAll(".aral-hbg-border").length,
  links:[...document.querySelectorAll("a[href]")].map(a=>[a.textContent.trim(),a.getAttribute("href")]),
  assets:[...document.querySelectorAll(".aral-scene img")].map(a=>a.getAttribute("data-product")||a.className),
  overflow:document.documentElement.scrollWidth-innerWidth,
  title:rect("#hero-title"),featured:rect("#featured")
 };
},selectors);
const near=(x,y)=>Math.abs(x-y)<.008;
for(const width of [1440,1024,768,390]){
 const ctx=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1,hasTouch:width<=768,isMobile:width<=768});
 const old=await ctx.newPage(),current=await ctx.newPage(),pageErrors=[];
 current.on("pageerror",e=>pageErrors.push(e.message));
 await Promise.all([old.goto(oldUrl,{waitUntil:"domcontentloaded"}),current.goto(newUrl,{waitUntil:"domcontentloaded"})]);
 await current.waitForTimeout(800);
 const [a,b]=await Promise.all([info(old),info(current)]);
 measures.push({width,oldWaveOpacity:a.waves,newWaveOpacity:b.waves,oldUnder:a.under,newUnder:b.under,overflow:b.overflow});
 for(let i=0;i<selectors.length;i++){
  const expected=Math.min(1,a.waves[i]*1.2);
  check(near(expected,b.waves[i]),width+": "+selectors[i]+" opacity exactly +20% ("+a.waves[i]+" -> "+b.waves[i]+")");
 }
 check(near(Math.min(1,a.under*1.2),b.under),width+": featured lower line opacity +20%");
 check(a.featureBackground!==b.featureBackground,width+": gentle featured highlight brighter");
 check(JSON.stringify(a.contourImages)===JSON.stringify(b.contourImages),width+": same original SVG backgrounds");
 check(JSON.stringify(a.waveAnimations)===JSON.stringify(b.waveAnimations),width+": same wave animation");
 check(JSON.stringify(a.links)===JSON.stringify(b.links),width+": existing links/text unchanged");
 check(JSON.stringify(a.assets)===JSON.stringify(b.assets),width+": original product objects unchanged");
 check(b.heroTime==="4.80",width+": HERO freezes at 4.8s");
 check(b.cards===4&&b.hbg===7&&b.magnetic===4,width+": four products, seven border effects, four magnetic CTAs");
 check(Math.abs(a.title.x-b.title.x)<1&&Math.abs(a.title.y-b.title.y)<1,width+": HERO geometry unchanged");
 check(Math.abs(a.featured.height-b.featured.height)<1,width+": product layout unchanged");
 check(b.overflow<=Math.max(3,a.overflow+2),width+": no new horizontal overflow");
 check(!pageErrors.length,width+": no JavaScript exceptions "+pageErrors.join("; "));
 const shot=dir+"/ARAL-2A-plus20-"+width+".png";
 await current.screenshot({path:shot,fullPage:true,animations:"disabled"});
 screens.push(shot);
 if(width===1440){const crop=dir+"/ARAL-2A-plus20-featured-1440.png";await current.locator("#featured").screenshot({path:crop,animations:"disabled"});screens.push(crop)}
 await old.close();await current.close();await ctx.close();
}
const reduced=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:"reduce"});
const page=await reduced.newPage();await page.goto(newUrl,{waitUntil:"domcontentloaded"});
const name=await page.locator("#featured").evaluate(el=>getComputedStyle(el,"::before").animationName);
check(name==="none","reduced motion disables wave animation");
await reduced.close();await browser.close();
const report={status:errors.length?"FAIL":"PASS",total:checks.length,failures:errors,checks,screens,measures};
await writeFile(dir+"/report.json",JSON.stringify(report,null,2));
console.log(JSON.stringify({status:report.status,checks:report.total,failures:errors,measures,screens},null,2));
if(errors.length)process.exitCode=1;