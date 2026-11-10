import { chromium } from "playwright";
import { PNG } from "pngjs";
import { mkdir,writeFile } from "node:fs/promises";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const base="http://127.0.0.1:8123/design/hero/prototypes/hero-4s-k-views/";
const url=base+"ARAL_home_contour_2A_visible_comparison_preview.html?t=4.8";
const folder="review-output/contour-visible";
await mkdir(folder,{recursive:true});
const errors=[],checks=[],screens=[],metrics=[];
function check(yes,msg){checks.push({pass:!!yes,msg});if(!yes)errors.push(msg)}
function diff(a,b){
 const A=PNG.sync.read(a),B=PNG.sync.read(b);
 if(A.width!==B.width||A.height!==B.height)throw Error("Screenshot dimension mismatch");
 let pixels=0, strong=0, channels=0,max=0;
 for(let i=0;i<A.data.length;i+=4){
   const d=Math.abs(A.data[i]-B.data[i])+Math.abs(A.data[i+1]-B.data[i+1])+Math.abs(A.data[i+2]-B.data[i+2]);
   channels+=d;
   if(d>=6)pixels++;
   if(d>=21)strong++;
   if(d>max)max=d;
 }
 return {width:A.width,height:A.height,changedPixels:pixels,noticeablePixels:strong,meanRgbDelta:channels/(A.width*A.height*3),maxRgbDelta:max};
}
for(const width of [1440,1024,768,390]){
 const touch=width<=768;
 const context=await browser.newContext({viewport:{width,height:900},hasTouch:touch,isMobile:touch,deviceScaleFactor:1,reducedMotion:"reduce"});
 const page=await context.newPage(),problems=[],http=[];
 page.on("pageerror",e=>problems.push(e.message));
 page.on("response",r=>{if(r.status()>=400&&r.url().includes("/assets/aral-contour"))http.push(r.status()+": "+r.url())});
 await page.goto(url,{waitUntil:"domcontentloaded"});
 await page.waitForTimeout(800);
 const beforeData=async()=>page.evaluate(()=>{
 const featured=document.querySelector("#featured");
 const hero=document.querySelector(".aral-hero");
 const r=featured.getBoundingClientRect();
 return {mode:document.body.dataset.contourMode,
  cardCount:document.querySelectorAll("#featured .product-card--minimal").length,
  borders:document.querySelectorAll(".aral-hbg-border").length,
  magnetics:document.querySelectorAll("[data-magnetic]").length,
  heroTime:document.querySelector(".aral-scene")?.dataset.time,
  bg:getComputedStyle(featured,"::before").backgroundImage,
  lowerBg:getComputedStyle(featured,"::after").backgroundImage,
  featuredRect:[r.x,r.y,r.width,r.height],
  heroRect:[hero.getBoundingClientRect().x,hero.getBoundingClientRect().y,hero.getBoundingClientRect().width,hero.getBoundingClientRect().height],
  overflow:document.documentElement.scrollWidth-innerWidth};
 });
 let after=await beforeData();
 check(after.mode==="after",width+": new visible waves are enabled by default");
 check(after.bg.includes("aral-contour-stream-product-visible.svg"),width+": new SVG stroke opacity applied to product section");
 check(after.cardCount===4&&after.borders===7&&after.magnetics===4,width+": approved 4 product cards, 7 hover tiles and 4 magnetic buttons remain");
 check(after.heroTime==="4.80",width+": original final HERO frame at 4.8s");
 check(after.overflow<=3,width+": no horizontal scroll");
 const oldButton=page.locator('button[data-contour-choice="before"]');
 const newButton=page.locator('button[data-contour-choice="after"]');
 await oldButton.click();
 let before=await beforeData();
 check(before.mode==="before"&&before.bg.includes("aral-contour-stream-product.svg"),width+": before toggle restores original SVG");
 const first=await page.locator("#featured").screenshot({animations:"disabled"});
 const firstPath=folder+"/ARAL-before-"+width+".png";
 await writeFile(firstPath,first);screens.push(firstPath);
 await newButton.click();
 after=await beforeData();
 check(after.mode==="after",width+": after toggle restores higher-contrast lines");
 check(JSON.stringify(before.featuredRect)===JSON.stringify(after.featuredRect),width+": card section position and size identical");
 check(JSON.stringify(before.heroRect)===JSON.stringify(after.heroRect),width+": HERO geometry identical");
 const second=await page.locator("#featured").screenshot({animations:"disabled"});
 const secondPath=folder+"/ARAL-after-"+width+".png";
 await writeFile(secondPath,second);screens.push(secondPath);
 const delta=diff(first,second);
 metrics.push({width,...delta});
 check(delta.changedPixels>900,width+": actual pixels differ visibly in product section ("+delta.changedPixels+" changed)");
 if(width===1440){
  const full=folder+"/ARAL-contour-visible-full-1440.png";
  await page.screenshot({path:full,fullPage:true,animations:"disabled"});screens.push(full);
 }
 check(!problems.length,width+": no JS errors: "+problems.join("; "));
 check(!http.length,width+": SVG assets load: "+http.join("; "));
 await context.close();
}
await browser.close();
const result={status:errors.length?"FAIL":"PASS",total:checks.length,errors,checks,metrics,screens};
await writeFile(folder+"/report.json",JSON.stringify(result,null,2));
console.log(JSON.stringify({status:result.status,checks:result.total,failures:errors,metrics,screens},null,2));
if(errors.length)process.exitCode=1;