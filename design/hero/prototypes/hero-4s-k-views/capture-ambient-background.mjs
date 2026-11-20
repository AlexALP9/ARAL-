import {chromium} from "playwright";
import {mkdir,writeFile} from "node:fs/promises";
const base="http://127.0.0.1:8123/";
const home="design/hero/prototypes/hero-4s-k-views/ARAL_home_animated_background_preview.html";
const routes=[
 ["Главная",home],
 ["Компания/Интересное","index-animated-background-preview.html#company"],
 ["Продукция","pages/products-r15-animated-background-preview.html#/catalog"],
 ["Для водителей","pages/drivers-08-animated-background-preview.html"],
 ["Для партнёров","pages/partners-11-animated-background-preview.html"],
 ["Преимущества","pages/advantages-04-animated-background-preview.html"],
 ["Контакты","pages/contacts-03-animated-background-preview.html"]
];
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const out="review-output/aral-ambient";
await mkdir(out,{recursive:true});
const report={checks:[],failures:[],shots:[]};
const check=(ok,label)=>{report.checks.push({ok:!!ok,label});if(!ok)report.failures.push(label)};
for(const width of [1440,1024,768,390]){
 const touch=width<=768,context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1,hasTouch:touch,isMobile:touch,reducedMotion:"no-preference"});
 const page=await context.newPage(),errors=[],badHttp=[];
 page.on("pageerror",e=>errors.push(e.message));
 page.on("response",r=>{if(r.status()>=400)badHttp.push(r.status()+" "+r.url())});
 const list=(width===1440||width===390)?routes:[routes[0],routes[2]];
 for(let i=0;i<list.length;i++){
  const [name,path]=list[i];
  await page.goto(base+path,{waitUntil:"domcontentloaded"});
  await page.waitForTimeout(480);
  const result=await page.evaluate(()=>({
   orbs:document.querySelectorAll(".aral-gradient-field .aral-orb").length,
   body:document.body.classList.contains("aral-gradient-preview"),
   backdrop:getComputedStyle(document.querySelector(".aral-gradient-field")).backgroundImage,
   theme:document.body.dataset.aralGradientTheme,
   controls:document.querySelectorAll(".aral-gradient-controls button[data-theme]").length,
   overflow:document.documentElement.scrollWidth-innerWidth,
   disabled:getComputedStyle(document.querySelector(".aral-gradient-field .aral-orb")).animationName==="none",
   products:document.querySelectorAll("#featured .product-card--minimal").length,
   magnetic:document.querySelectorAll("[data-magnetic]").length
  }));
  check(result.body&&result.orbs===5,width+" "+name+": five ambient orbs mounted");
  check(result.backdrop.includes("linear-gradient"),width+" "+name+": ARAL blue/ice gradient renders");
  check(result.controls===3,width+" "+name+": 3 palette choices");
  if(name==="Продукция"&&width===1024){
   // Existing approved product catalog has 47px overflow at this breakpoint.
   // The background preview must NOT increase it. Preserve the approved source.
   const original=await context.newPage();
   await original.goto(base+"pages/products-r15.html#/catalog",{waitUntil:"domcontentloaded"});
   const baseline=await original.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
   check(result.overflow<=baseline+1,width+" catalog: no additional overflow versus unchanged baseline ("+result.overflow+" vs "+baseline+"px)");
   await original.close();
  }else{
   check(result.overflow<=3,width+" "+name+": no horizontal scroll ("+result.overflow+"px)");
  }
  if(touch)check(result.disabled,width+" "+name+": mobile orbs are static");
  if(path===home){
   check(result.products===4&&result.magnetic===4,width+" home: four products and magnetic CTA retained");
   check(await page.locator(".aral-hbg-target > .aral-hbg-border").count()===7,width+" home: seven approved border gradients retained");
   const final=await page.evaluate(()=>document.querySelector(".aral-scene")?.dataset.time);
   if(width===1440){await page.waitForTimeout(5700);check(await page.evaluate(()=>document.querySelector(".aral-scene")?.dataset.time)==="4.80","HERO finishes at 4.8s and holds");}
  }
  if(path.includes("products-r15"))check(await page.locator("#cards .product-card--minimal").count()===17,width+" catalog: 17 approved products retained");
  if(path.startsWith("index-"))check(await page.locator('.story-toggle[data-magnetic]').count()===6,width+" company/interesting: six article controls retained");
  if(width===1440||name==="Главная"){
   const clean=name.replace(/[/ ]/g,"-").replace(/[^а-яА-ЯёЁ\w-]/g,"");
   const file=out+"/"+width+"-"+clean+".png";
   await page.screenshot({path:file,fullPage:true,animations:"disabled"});
   report.shots.push(file);
  }
 }
 // Verify palette choices persist across page navigation.
 await page.goto(base+home,{waitUntil:"domcontentloaded"});
 await page.locator(".aral-gradient-controls summary").click();
 await page.locator('button[data-theme="vivid"]').click();
 check(await page.evaluate(()=>document.body.dataset.aralGradientTheme)==="vivid",width+": palette selection works");
 await page.goto(base+"pages/products-r15-animated-background-preview.html#/catalog",{waitUntil:"domcontentloaded"});
 check(await page.evaluate(()=>document.body.dataset.aralGradientTheme)==="vivid",width+": palette persists across pages");
 check(errors.length===0,width+": no JS errors "+errors.join("; "));
 check(badHttp.length===0,width+": no HTTP errors "+badHttp.join("; "));
 await context.close();
}
const reduced=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:"reduce"});
const page=await reduced.newPage();await page.goto(base+home,{waitUntil:"domcontentloaded"});
check(await page.locator(".aral-orb.o1").evaluate(n=>getComputedStyle(n).animationName)==="none","Reduced motion disables ambient animation");
await reduced.close();
await browser.close();
report.status=report.failures.length?"FAIL":"PASS";
await writeFile(out+"/qa-results.json",JSON.stringify(report,null,2));
console.log(JSON.stringify({status:report.status,checks:report.checks.length,failures:report.failures,shots:report.shots},null,2));
if(report.failures.length)process.exitCode=1;