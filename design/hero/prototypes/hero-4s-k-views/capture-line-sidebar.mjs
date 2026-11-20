import {chromium} from "playwright";
import {mkdir,writeFile} from "node:fs/promises";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const base="http://127.0.0.1:8123/";
const routes=[
 ["home","design/hero/prototypes/hero-4s-k-views/ARAL_home_line_sidebar_preview.html?t=4.8"],
 ["catalog","pages/products-r15-line-sidebar-preview.html#/catalog"],
 ["company","index-line-sidebar-preview.html#company"],
 ["drivers","pages/drivers-08-line-sidebar-preview.html"],
 ["partners","pages/partners-11-line-sidebar-preview.html"],
 ["advantages","pages/advantages-04-line-sidebar-preview.html"],
 ["contacts","pages/contacts-03-line-sidebar-preview.html"]
];
const report={checks:[],failures:[],screens:[]},dir="review-output/line-sidebar";
await mkdir(dir,{recursive:true});
function ok(value,label){report.checks.push({ok:!!value,label});if(!value)report.failures.push(label)}
const value=async el=>el.evaluate(n=>({effect:Number(getComputedStyle(n).getPropertyValue("--aral-line-effect")),transform:getComputedStyle(n.querySelector(".aral-line-content")).transform}));
for(const width of [1440,1024,768,390]){
 const touch=width<=768;
 const ctx=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1,hasTouch:touch,isMobile:touch,reducedMotion:"no-preference"});
 const page=await ctx.newPage(),errors=[],http=[];
 page.on("pageerror",e=>errors.push(e.message));
 page.on("response",r=>{if(r.status()>=400)http.push(r.status()+" "+r.url())});
 const paths=width===1440||width===390?routes:[routes[0],routes[1],routes[2]];
 for(const [name,path] of paths){
  await page.goto(base+path,{waitUntil:"domcontentloaded"});
  await page.waitForTimeout(650);
  const info=await page.evaluate(()=>({
   preview:window.ARALLineSidebarPreview,
   footer:document.querySelectorAll(".aral-global-footer").length,
   links:[...document.querySelectorAll(".aral-global-footer")].filter(n=>n.getBoundingClientRect().width>0).map(n=>n.querySelectorAll(".aral-line-link").length),
   overflow:document.documentElement.scrollWidth-innerWidth,
   cards:document.querySelectorAll("#featured .product-card--minimal").length,
   magnetic:document.querySelectorAll("[data-magnetic]").length,
   hbg:document.querySelectorAll(".aral-hbg-target>.aral-hbg-border").length,
   hero:document.querySelector(".aral-scene")?.dataset.time
  }));
  ok(info.preview?.installed,width+" "+name+": shared LineSidebar controller initialized");
  ok(info.links.every(n=>n===16),width+" "+name+": 16 footer text links have behavior");
  ok(info.preview?.maxShift===8&&info.preview?.radius===100,width+" "+name+": restrained tuning 8px radius 100px");
  if(name==="home"){
   ok(info.preview.count===24,width+": precisely 24 eligible homepage and footer links");
   ok(info.cards===4&&info.hbg===7&&info.magnetic===4,width+": previous cards, seven border effects and four magnetic CTAs unchanged");
   ok(info.hero==="4.80",width+": original 4.8s HERO frame still frozen");
   const link=page.locator("#where .purchase-card a.aral-line-link").first();
   ok((await link.getAttribute("href")).includes("contacts-03-line-sidebar-preview.html"),width+": retail CTA keeps correct preview destination");
   await link.scrollIntoViewIfNeeded();
   if(!touch){
    const box=await link.boundingBox();
    await page.mouse.move(box.x+Math.min(box.width-4,box.width*.8),box.y+box.height*.5);
    await page.waitForTimeout(650);
    const v=await value(link);
    const m=new DOMMatrix(v.transform);
    ok(v.effect>.65&&m.m41>3&&m.m41<=8.2,width+": retail link shifts smoothly without moving anchor clickable box");
    await page.mouse.move(1,1);await page.waitForTimeout(780);
    const back=await value(link);
    ok(back.effect<.03,width+": retail CTA returns fully");
    const footer=page.locator(".aral-global-footer");
    await footer.scrollIntoViewIfNeeded();
    const nav=page.locator(".aral-global-footer .af-links .aral-line-link");
    ok(await nav.count()===7,width+": 7 footer navigation entries indexed");
    const second=nav.nth(2);const rect=await second.boundingBox();
    await page.mouse.move(rect.x+rect.width*.5,rect.y+rect.height/2);
    await page.waitForTimeout(650);
    const active=await value(second),near=await value(nav.nth(3));
    ok(active.effect>.7,width+": footer focused link activates");
    ok(near.effect>0,width+": LineSidebar affects neighboring footer link by proximity");
    await page.mouse.move(1,1);await page.waitForTimeout(800);
    ok((await value(second)).effect<.03,width+": footer links ease back to rest");
   }else{
    ok((await value(link)).transform==="none",width+": no link translation on touch");
   }
   const hrefs=await page.locator(".aral-global-footer .af-contact a").evaluateAll(nodes=>nodes.map(n=>n.getAttribute("href")));
   ok(hrefs.some(h=>h==="tel:+74951011235")&&hrefs.some(h=>h==="mailto:info@skladspk.ru"),width+": tel and mail actions preserved");
   if(width===1440||width===390){
    await footerOrBottom(page);
    const shot=dir+"/home-"+width+".png";await page.screenshot({path:shot,fullPage:true,animations:"disabled"});report.screens.push(shot);
    const footshot=dir+"/footer-"+width+".png";await page.locator(".aral-global-footer").screenshot({path:footshot,animations:"disabled"});report.screens.push(footshot);
   }
  }
  if(name==="catalog"){
   ok(await page.locator("#cards .product-card--minimal").count()===17,width+": catalog still renders 17 products");
  }
  if(name==="company"){
   ok(await page.locator(".aral-global-footer").count()===7,width+": SPA keeps footer for each of seven route panels");
   const visible=page.locator("#view-company footer .aral-line-link");
   ok(await visible.count()===16,width+": visible SPA panel has sixteen animated footer links");
  }
  if(width===1440||width===390){
   if(name!=="home"&&(name==="catalog"||name==="company")){
    const shot=dir+"/"+name+"-"+width+".png";
    await page.screenshot({path:shot,fullPage:true,animations:"disabled"});report.screens.push(shot);
   }
  }
 }
 ok(errors.length===0,width+": no JS errors "+errors.join("; "));
 // Ignore unrelated external service HTTP failures, require our shared JS/CSS files load.
 const keyFailures=http.filter(s=>s.includes("aral-line-sidebar-preview"));
 ok(keyFailures.length===0,width+": shared LineSidebar resources accessible "+keyFailures.join("; "));
 await ctx.close();
}
const reduced=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:"reduce"});
const page=await reduced.newPage();
await page.goto(base+routes[0][1],{waitUntil:"domcontentloaded"});
const l=page.locator("#where .purchase-card a.aral-line-link").first();
await l.hover();await page.waitForTimeout(500);
ok((await value(l)).transform==="none","Reduced motion: link text remains stationary");
await reduced.close();await browser.close();
report.status=report.failures.length?"FAIL":"PASS";
await writeFile(dir+"/results.json",JSON.stringify(report,null,2));
console.log(JSON.stringify({status:report.status,count:report.checks.length,failures:report.failures,screens:report.screens},null,2));
if(report.failures.length)process.exitCode=1;
async function footerOrBottom(p){await p.locator(".aral-global-footer").scrollIntoViewIfNeeded();}