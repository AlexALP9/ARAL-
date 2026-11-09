import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const base='http://127.0.0.1:8123/design/hero/prototypes/hero-4s-k-views/ARAL_home_magnetic_buttons_preview.html';
const out='review-output/magnetic';
await mkdir(out,{recursive:true});
const report={checks:[],screens:[],failures:[]};
function ok(cond,message){report.checks.push({ok:Boolean(cond),message});if(!cond)report.failures.push(message)}
const buttons=[
 ['hero-primary','../../../../pages/drivers-08.html','/pages/drivers-08.html'],
 ['hero-secondary','../../../../pages/products-r15.html#/catalog','/pages/products-r15.html#/catalog'],
 ['b2b-primary','../../../../pages/partners-11.html','/pages/partners-11.html']
];
const state=async(el)=>el.evaluate(n=>{
 const c=getComputedStyle(n),m=new DOMMatrix(c.transform);
 return {tx:m.m41,ty:m.m42,scale:m.a,transform:c.transform,outline:c.outlineStyle};
});
for(const width of [1440,1024,768,390]){
 const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1,hasTouch:width<=768,reducedMotion:'no-preference'});
 const errors=[],http=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400)http.push(r.status()+' '+r.url())});
 await page.goto(base+'?t=4.8',{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(1150);
 const stats=await page.evaluate(async()=>{
  for(const img of document.images)img.loading='eager';
  await Promise.all([...document.images].map(img=>img.decode().catch(()=>{})));
  return {buttons:document.querySelectorAll('[data-magnetic]').length,cards:document.querySelectorAll('.product-card--minimal').length,
    frame:document.querySelector('.aral-scene')?.dataset.time,
    over:document.documentElement.scrollWidth-innerWidth,
    broken:[...document.images].filter(x=>!x.complete||x.naturalWidth===0).map(x=>x.src)};
 });
 ok(stats.buttons===3,width+': exactly three real ARAL CTA links are magnetic');
 ok(stats.cards===4,width+': four existing revision 15 product cards remain');
 ok(stats.frame==='4.80',width+': HERO keeps its exact final 4.80-second frame');
 ok(stats.over<=3,width+': no horizontal overflow ('+stats.over+'px)');
 ok(stats.broken.length===0,width+': real photo assets decode');
 ok(errors.length===0,width+': no JavaScript errors ('+errors.join('; ')+')');
 ok(http.length===0,width+': no HTTP errors ('+http.join('; ')+')');
 for(const [name,href] of buttons){
  const link=page.locator('[data-magnetic="'+name+'"]');
  ok(await link.count()===1,width+': '+name+' CTA exists');
  ok((await link.getAttribute('href'))===href,width+': '+name+' keeps original link and text');
 }
 if(width>=1024){
  for(const [name] of buttons){
   const link=page.locator('[data-magnetic="'+name+'"]');
   await link.scrollIntoViewIfNeeded();
   const box=await link.boundingBox();
   await page.mouse.move(box.x+box.width*.82,box.y+box.height*.65);
   await page.waitForTimeout(690);
   const m=await state(link);
   ok(Math.hypot(m.tx,m.ty)>1.5,width+': '+name+' attracts the cursor proportionally');
   ok(Math.abs(m.tx)<=10.3&&Math.abs(m.ty)<=10.3,width+': '+name+' stays in the 10px displacement cap');
   if(width===1440&&name==='hero-primary'){
    await page.screenshot({path:out+'/ARAL-magnetic-hero-hover-1440.png',fullPage:false,animations:'allow'});
    const center=await link.boundingBox();
    await page.mouse.move(center.x+center.width/2,center.y+center.height/2);
    await page.mouse.down();await page.waitForTimeout(140);
    const press=await state(link);
    ok(press.scale<.998&&press.scale>.95,'mouse press gives small tactile scale');
    await page.mouse.up();
   }
   await page.mouse.move(1,1);await page.waitForTimeout(1000);
   const reset=await state(link);
   ok(Math.abs(reset.tx)<.6&&Math.abs(reset.ty)<.6,width+': '+name+' returns by spring with no lingering motion');
  }
 } else {
  for(const [name] of buttons){
   const link=page.locator('[data-magnetic="'+name+'"]');
   const computed=await state(link);
   ok(computed.transform==='none',width+': '+name+' movement disabled for touch');
  }
 }
 // Real link navigation. A moving link must still be click-targetable.
 for(const [name,href,final] of buttons){
  const link=page.locator('[data-magnetic="'+name+'"]');
  await link.scrollIntoViewIfNeeded();
  await link.click();
  ok(page.url().includes(final),width+': '+name+' remains clickable and navigates correctly');
  await page.goto(base+'?t=4.8',{waitUntil:'domcontentloaded'});
 }
 const hero=page.locator('[data-magnetic="hero-primary"]');
 await hero.focus();
 const focus=await hero.evaluate(n=>getComputedStyle(n).outlineStyle);
 ok(focus!=='none',width+': keyboard focus remains visible');
 await page.screenshot({path:out+'/ARAL-magnetic-home-'+width+'px.png',fullPage:true,animations:'disabled'});
 report.screens.push({width,file:out+'/ARAL-magnetic-home-'+width+'px.png'});
 await page.close();
}
const reduced=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
await reduced.goto(base+'?t=4.8',{waitUntil:'domcontentloaded'});
const target=reduced.locator('[data-magnetic="hero-primary"]');await target.hover();await reduced.waitForTimeout(500);
const m=await state(target);
ok(m.transform==='none','prefers-reduced-motion disables magnetic translation entirely');
await reduced.close();await browser.close();
report.status=report.failures.length?'FAIL':'PASS';
await writeFile(out+'/test-results.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({status:report.status,checks:report.checks.length,failures:report.failures,screens:report.screens},null,2));
if(report.failures.length)process.exitCode=1;