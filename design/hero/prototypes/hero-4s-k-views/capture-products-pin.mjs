import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const url='http://127.0.0.1:8123/pages/products-r15.html#/catalog';
const out='review-output/catalog-pin';
await mkdir(out,{recursive:true});
const checks=[],failures=[],screenshots=[];
function verify(ok,label){checks.push({ok:Boolean(ok),label});if(!ok)failures.push(label)}
for(const width of [1440,1024,768,390]){
 const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1,hasTouch:width<=768,reducedMotion:'no-preference'});
 const runtime=[],http=[];
 page.on('pageerror',e=>runtime.push(e.message));
 page.on('response',r=>{if(r.status()>=400)http.push(r.status()+' '+r.url())});
 await page.goto(url,{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(700);
 const cards=page.locator('#cards .product-card--minimal');
 const count=await cards.count();
 verify(count===17,width+': all 17 approved product cards render ('+count+')');
 verify(await cards.first().locator('.pin-perspective').count()===1,width+': 3D pin markup renders with each card');
 const bounds=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth}));
 verify(bounds.overflow<=3,width+': no horizontal overflow '+bounds.overflow);
 const first=cards.first();
 await first.scrollIntoViewIfNeeded();
 await page.waitForTimeout(400);
 if(width>=1024){
   await first.hover();
   await page.waitForTimeout(750);
   const s=await first.evaluate(n=>({
      transform:getComputedStyle(n).transform,
      opacity:Number(getComputedStyle(n.querySelector('.pin-perspective')).opacity),
      animation:getComputedStyle(n.querySelector('.pin-wave')).animationPlayState,
      label:n.querySelector('.pin-label').getBoundingClientRect().top,
      panel:n.closest('#cards').getBoundingClientRect().top,
      second:n.nextElementSibling?.getBoundingClientRect().left,
      right:n.getBoundingClientRect().right
   }));
   verify(s.transform!=='none'&&s.opacity>.8,width+': perspective and pin label active on hover');
   verify(s.animation==='running',width+': 3D pin rings animate');
   verify(s.label>=s.panel-8,width+': 3D pin label has top clearance');
   verify(s.right<s.second+5,width+': card stays separated from adjacent items');
   await page.screenshot({path:out+'/ARAL-products-pin-'+width+'-hover.png',fullPage:false,animations:'allow'});
   await page.mouse.move(2,2);
   await page.waitForTimeout(720);
   const off=await first.evaluate(n=>Number(getComputedStyle(n.querySelector('.pin-perspective')).opacity));
   verify(off<.2,width+': hover effect clears on pointer leave');
 } else {
   const passive=await first.evaluate(n=>getComputedStyle(n.querySelector('.pin-perspective')).display==='none');
   verify(passive,width+': touch screen disables decorative hover layers');
 }
 const button=first.locator('[data-compare]');
 await button.click();
 const ids=await page.evaluate(()=>{try{return JSON.parse(localStorage.getItem('aralProductsV13Compare')||'[]')}catch{return[]}});
 verify(ids.includes('ARAL-001'),width+': compare stores product in shared revision 15 key');
 verify(page.url().includes('#/catalog'),width+': compare does not open product detail');
 if(width<=800){
   await page.locator('#openFilters').click();
   verify(await page.locator('#filtersPanel').evaluate(n=>n.classList.contains('drawer-open')),width+': mobile filter drawer opens');
 }
 await page.locator('#saeFilter').selectOption({index:1});
 const filtered=await cards.count();
 verify(filtered>0&&filtered<17,width+': SAE filter operates after 3D pin is added');
 verify(await cards.first().locator('.pin-perspective').count()===1,width+': pin survives dynamic filtering');
 await page.locator('#saeFilter').selectOption('');
 if(width<=800){
   await page.locator('#applyFilters').click();
   verify(await page.locator('#filtersPanel').evaluate(n=>!n.classList.contains('drawer-open')),width+': mobile filter drawer closes');
 }
 await first.scrollIntoViewIfNeeded();
 await first.focus();
 const focus=await first.evaluate(n=>getComputedStyle(n).outlineStyle);
 verify(focus!=='none',width+': keyboard focus remains visible');
 if(width===390||width===768)await page.screenshot({path:out+'/ARAL-products-pin-'+width+'-touch.png',fullPage:false,animations:'disabled'});
 await first.press('Enter');
 verify(page.url().includes('#/product/ARAL-001'),width+': card Enter opens existing product detail route');
 verify(runtime.length===0,width+': no JavaScript errors '+runtime.join(', '));
 verify(http.length===0,width+': no failed resources '+http.join(', '));
 screenshots.push({width,mode:width>=1024?'hover':'touch'});
 await page.close();
}
const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
await page.goto(url,{waitUntil:'domcontentloaded'});
const card=page.locator('#cards .product-card--minimal').first();
await card.hover();await page.waitForTimeout(200);
const reduced=await card.evaluate(n=>{
  const a=getComputedStyle(n.querySelector('.pin-wave')).animationName;
  const t=getComputedStyle(n).transform;
  return {animation:a,transform:t};
});
verify(reduced.animation==='none','prefers-reduced-motion disables pin-wave animation');
verify(reduced.transform==='none','prefers-reduced-motion disables card motion');
await page.close();await browser.close();
const report={status:failures.length?'FAIL':'PASS',checks,failures,screenshots};
await writeFile(out+'/test-results.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({status:report.status,totalChecks:checks.length,failures,screenshots},null,2));
if(failures.length)process.exitCode=1;