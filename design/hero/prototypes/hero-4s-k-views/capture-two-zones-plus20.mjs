import { chromium } from "playwright";
import { PNG } from "pngjs";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
const dir="review-output/two-zone-waves20";
mkdirSync(dir,{recursive:true});
const url="http://127.0.0.1:8123/design/hero/prototypes/hero-4s-k-views/ARAL_home_waves_two_zones_plus20_preview.html?t=4.8";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const passes=[],errors=[],screens=[],metrics=[];
function test(ok,name){passes.push({ok:!!ok,name});if(!ok)errors.push(name)}
function delta(first,second){
 const a=PNG.sync.read(first),b=PNG.sync.read(second);
 if(a.width!==b.width||a.height!==b.height)throw Error("Different screenshot dimensions");
 let different=0,pronounced=0;
 for(let i=0;i<a.data.length;i+=4){
  const d=Math.abs(a.data[i]-b.data[i])+Math.abs(a.data[i+1]-b.data[i+1])+Math.abs(a.data[i+2]-b.data[i+2]);
  if(d>6)different++;if(d>24)pronounced++;
 }
 return {pixels:different,pronounced,width:a.width,height:a.height};
}
for(const [part,ref] of [["home","aral-contour-stream-home"],["product","aral-contour-stream-product"]]){
 const a=readFileSync("assets/"+ref+"-visible.svg","utf8");
 const b=readFileSync("assets/"+ref+"-targeted20.svg","utf8");
 const paths=s=>[...s.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)].map(m=>m[1]);
 test(JSON.stringify(paths(a))===JSON.stringify(paths(b)),part+": all SVG path geometry unchanged");
 const strokes=s=>[...s.matchAll(/stroke-width="([^"]+)"/g)].map(m=>m[1]);
 test(JSON.stringify(strokes(a))===JSON.stringify(strokes(b)),part+": all stroke widths unchanged");
 test(a!==b,part+": original and more contrasting blue SVG differ");
}
for(const width of [1440,1024,768,390]){
 const touch=width<=768;
 const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1,hasTouch:touch,isMobile:touch,reducedMotion:"reduce"});
 const page=await context.newPage(),exceptions=[],missing=[];
 page.on("pageerror",e=>exceptions.push(e.message));
 page.on("response",r=>{if(r.status()>=400&&r.url().includes("aral-contour"))missing.push(r.url())});
 await page.goto(url,{waitUntil:"networkidle"});
 await page.addStyleTag({content:".aral-contour-compare{visibility:hidden!important}"});
 const numbers=await page.evaluate(()=>({
  cards:document.querySelectorAll("#featured .product-card--minimal").length,
  magnetic:document.querySelectorAll("[data-magnetic]").length,
  hover:document.querySelectorAll(".aral-hbg-border").length,
  footer:document.querySelectorAll(".aral-global-footer").length,
  hero:document.querySelector(".aral-scene")?.dataset.time,
  overflow:document.documentElement.scrollWidth-innerWidth,
  toggle:!!window.ARALContourTargetedPreview
 }));
 test(numbers.toggle,width+": review switch available");
 test(numbers.cards===4&&numbers.magnetic===4&&numbers.hover===7,width+": existing product and button animations retained");
 test(numbers.footer===1,width+": original unified footer present");
 test(numbers.hero==="4.80",width+": original 4.8-second HERO preserved");
 test(numbers.overflow<=3,width+": no additional horizontal scrolling");
 for(const [selector,oldOpacity,newOpacity,variant] of [
  ["#audiences",width<=640?.264:.468,width<=640?.317:.562,"home"],
  ["#where",width<=640?.300:.564,width<=640?.360:.677,"product"]
 ]){
  await page.evaluate(()=>window.ARALContourTargetedPreview.toggle("before"));
  const before=await page.locator(selector).evaluate(el=>{
   const css=getComputedStyle(el,"::before"),r=el.getBoundingClientRect();
   return {opacity:Number(css.opacity),background:css.backgroundImage,rect:[r.x+scrollX,r.y+scrollY,r.width,r.height]};
  });
  const oldShot=await page.locator(selector).screenshot({animations:"disabled"});
  const oldPath=dir+"/"+width+"-"+variant+"-before.png";writeFileSync(oldPath,oldShot);screens.push(oldPath);
  await page.evaluate(()=>window.ARALContourTargetedPreview.toggle("after"));
  const after=await page.locator(selector).evaluate(el=>{
   const css=getComputedStyle(el,"::before"),r=el.getBoundingClientRect();
   return {opacity:Number(css.opacity),background:css.backgroundImage,rect:[r.x+scrollX,r.y+scrollY,r.width,r.height]};
  });
  const newShot=await page.locator(selector).screenshot({animations:"disabled"});
  const newPath=dir+"/"+width+"-"+variant+"-after.png";writeFileSync(newPath,newShot);screens.push(newPath);
  const diff=delta(oldShot,newShot);
  metrics.push({width,section:selector,beforeOpacity:before.opacity,afterOpacity:after.opacity,...diff});
  test(Math.abs(before.opacity-oldOpacity)<.005&&Math.abs(after.opacity-newOpacity)<.005,width+" "+selector+": exact +20% external intensity");
  test(before.background.includes("visible.svg")&&after.background.includes("targeted20.svg"),width+" "+selector+": new contrast SVG replaces prior line art");
  test(JSON.stringify(before.rect)===JSON.stringify(after.rect),width+" "+selector+": no section layout shift");
  test(diff.pixels>250,width+" "+selector+": pixel-level contrast difference is rendered ("+diff.pixels+" pixels)");
 }
 if(width===1440||width===390){
  const full=dir+"/ARAL-home-two-zone-plus20-"+width+".png";
  await page.screenshot({path:full,fullPage:true,animations:"disabled"});
  screens.push(full);
 }
 test(!exceptions.length,width+": no JavaScript errors: "+exceptions.join(";"));
 test(!missing.length,width+": wave resources load: "+missing.join(";"));
 await context.close();
}
await browser.close();
const result={status:errors.length?"FAIL":"PASS",total:passes.length,errors,metrics,screens};
writeFileSync(dir+"/report.json",JSON.stringify({...result,passes},null,2));
console.log(JSON.stringify(result,null,2));
if(errors.length)process.exitCode=1;