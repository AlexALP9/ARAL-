import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
const domain='http://127.0.0.1:8123/design/hero/prototypes/hero-4s-k-views/';
const cases=[['gradient','home-product-cards-gradient-preview.html'],['pin','home-product-cards-3d-pin-preview.html']];
const widths=[1440,1024,768,390];
const out='review-output/animation-previews';
await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const report={checks:[],screenshots:[],errors:[]};
function check(ok,label){report.checks.push({ok:!!ok,label});if(!ok)report.errors.push(label);}
for(const item of cases){
 const variant=item[0],file=item[1];
 for(const width of widths){
  const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1,hasTouch:width<=768,reducedMotion:'no-preference'});
  const errors=[],badHttp=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)badHttp.push(r.status()+' '+r.url());});
  await page.goto(domain+file+'?t=4.8',{waitUntil:'domcontentloaded'});
  await page.waitForTimeout(2000);
  const initial=await page.evaluate(async()=>{
   for(const im of document.images)im.loading='eager';
   await Promise.all([...document.images].map(i=>i.decode().catch(()=>null)));
   return {
    cards:document.querySelectorAll('#featured .product-card--minimal').length,
    ids:[...document.querySelectorAll('#featured [data-product-open]')].map(n=>n.dataset.productOpen),
    noOverflow:document.documentElement.scrollWidth-innerWidth<4,
    imageErrors:[...document.images].filter(im=>!im.complete||im.naturalWidth===0).map(im=>im.src),
    hero:document.querySelector('.aral-scene')?.dataset.time
   };
  });
  check(initial.cards===4,variant+' '+width+': 4 approved cards');
  check(initial.ids.join(',')==='ARAL-003,ARAL-010,ARAL-012,ARAL-015',variant+' '+width+': correct product IDs');
  check(initial.noOverflow,variant+' '+width+': no page horizontal overflow');
  check(initial.imageErrors.length===0,variant+' '+width+': all original photos load');
  check(initial.hero==='4.80',variant+' '+width+': HERO frozen at 4.8 seconds');
  check(errors.length===0,variant+' '+width+': no runtime exceptions: '+errors.join('; '));
  check(badHttp.length===0,variant+' '+width+': no failing resources: '+badHttp.join('; '));
  const first=page.locator('#featured .product-card--minimal').first();
  const grid=page.locator('#featured .home-cards');
  await first.scrollIntoViewIfNeeded();
  if(width>=1024){
   const rects=await page.locator('#featured .product-card--minimal').evaluateAll(nodes=>nodes.map(n=>{const x=n.getBoundingClientRect();return {x:x.x,y:x.y,right:x.right,bottom:x.bottom};}));
   const before=await page.evaluate((type)=>{
    const n=document.querySelector('#featured .product-card--minimal');
    return type==='gradient'?getComputedStyle(n,'::after').opacity:getComputedStyle(n).transform;
   },variant);
   await first.hover();
   await page.waitForTimeout(800);
   const after=await page.evaluate((type)=>{
    const n=document.querySelector('#featured .product-card--minimal');
    if(type==='gradient')return {opacity:Number(getComputedStyle(n,'::after').opacity),state:getComputedStyle(n,'::after').animationPlayState};
    return {transform:getComputedStyle(n).transform,layer:Number(getComputedStyle(n.querySelector('.pin-perspective')).opacity)};
   },variant);
   if(variant==='gradient')check(after.opacity>=.8&&after.state==='running',variant+' '+width+': moving gradient border activates on hover');
   else check(after.layer>=.8&&after.transform!==before,variant+' '+width+': 3D perspective and pin layers activate');
   await grid.screenshot({path:out+'/'+variant+'-'+width+'-hover.png',animations:'allow'});
   // Cards do not push grid or overlap adjacent hit targets.
   const rectsAfter=await page.locator('#featured .product-card--minimal').evaluateAll(nodes=>nodes.map(n=>{const x=n.getBoundingClientRect();return {x:x.x,y:x.y,right:x.right,bottom:x.bottom};}));
   check(rectsAfter[0].right<rectsAfter[1].x+4,variant+' '+width+': no intersecting adjacent card targets');
   await page.mouse.move(4,4);
   await page.waitForTimeout(720);
   const restored=await page.evaluate(type=>{
    const n=document.querySelector('#featured .product-card--minimal');
    return type==='gradient'?Number(getComputedStyle(n,'::after').opacity):Number(getComputedStyle(n.querySelector('.pin-perspective')).opacity);
   },variant);
   check(restored<.2,variant+' '+width+': effect disappears when pointer leaves');
  }else{
   check(await page.locator('#featured .compare-add').first().isVisible(),variant+' '+width+': compare action remains available on touch layout');
   const isNone=await page.evaluate(type=>{
    const n=document.querySelector('#featured .product-card--minimal');
    return type==='gradient'?getComputedStyle(n,'::after').display==='none':getComputedStyle(n.querySelector('.pin-perspective')).display==='none';
   },variant);
   check(isNone,variant+' '+width+': decorative effects disabled on touch');
  }
  // Use full-page screenshots without hover to verify matching content/layout.
  await page.screenshot({path:out+'/'+variant+'-'+width+'-full.png',fullPage:true,animations:'disabled'});
  if(width===1440){
   await first.locator('.compare-add').click();
   const stored=await page.evaluate(()=>JSON.parse(localStorage.getItem('aralProductsV13Compare')||'[]'));
   check(stored.includes('ARAL-003'),variant+': compare button persists shared catalog key');
   check((await page.locator('#homeCompareCount').innerText())==='1',variant+': compare counter updates');
   check(page.url().includes(file),variant+': compare does not open detail page');
   await first.focus();
   const outline=await first.evaluate(n=>getComputedStyle(n).outlineStyle);
   check(outline!=='none',variant+': keyboard focus visible');
   await page.keyboard.press('Enter');
   await page.waitForURL('**/pages/products-r15.html#/product/ARAL-003',{timeout:6000});
   check(page.url().includes('/pages/products-r15.html#/product/ARAL-003'),variant+': keyboard opens existing detail page');
  }
  report.screenshots.push({variant,width});
  await page.close();
 }
 // Reduced-motion must halt decorative motion.
 const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
 await page.goto(domain+file+'?t=4.8',{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(1000);
 await page.locator('#featured .product-card--minimal').first().hover();
 const reduced=await page.evaluate(type=>{
  const n=document.querySelector('#featured .product-card--minimal');
  return type==='gradient'?getComputedStyle(n,'::after').animationName==='none':getComputedStyle(n.querySelector('.pin-wave')).animationName==='none';
 },variant);
 check(reduced,variant+': prefers-reduced-motion stops effect animation');
 await page.close();
}
await browser.close();
report.status=report.errors.length===0?'PASS':'FAIL';
await writeFile('review-output/animation-previews/test-results.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({status:report.status,checks:report.checks.length,failures:report.errors,screenshots:report.screenshots},null,2));
if(report.errors.length)process.exitCode=1;