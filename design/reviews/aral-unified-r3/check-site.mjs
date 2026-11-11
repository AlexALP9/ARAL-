import {chromium} from 'playwright';
import {mkdirSync,writeFileSync} from 'node:fs';
const root='http://127.0.0.1:8123/';
const dir='review-output/aral-r3';mkdirSync(dir,{recursive:true});
const pages={
 home:'design/hero/prototypes/hero-4s-k-views/ARAL_home_employer_feedback_r3_preview.html',
 company:'index-employer-feedback-r3-preview.html#company',
 products:'pages/products-employer-feedback-r3-preview.html#/catalog',
 contacts:'pages/contacts-employer-feedback-r3-preview.html#contacts-stores',
 partners:'pages/partners-employer-feedback-r3-preview.html',
 advantages:'pages/advantages-employer-feedback-r3-preview.html',
 drivers:'pages/drivers-employer-feedback-r3-preview.html',
 interesting:'index-employer-feedback-r3-preview.html#interesting'
};
let count=0;const errors=[];const check=(yes,msg)=>{count++;console.log((yes?'PASS ':'FAIL ')+msg);if(!yes)errors.push(msg)};
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
try {
 for(const width of [1440,1024,768,390]){
  const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1});
  const page=await context.newPage();
  const pageErrors=[];
  page.on('pageerror',e=>pageErrors.push(String(e)));
  for(const [name,path] of Object.entries(pages)){
   const response=await page.goto(root+path,{waitUntil:'domcontentloaded'});
   await page.waitForTimeout(250);
   check(response?.ok()===true,`${width} ${name}: route loads`);
   check(await page.locator('body[data-feedback-preview="r3"]').count()===1,`${width} ${name}: full R3 scripts initialized`);
   check(await page.locator('header a.aral-preview-brand img').evaluate(el=>el.complete&&el.naturalWidth>0),`${width} ${name}: real brand logo decoded`);
   check(await page.locator('.aral-global-footer .aral-r3-driver-cta').count()===1,`${width} ${name}: motorists footer CTA present`);
   check(await page.locator('.aral-review-toggle').count()===0,`${width} ${name}: no debug floating button`);
   check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),`${width} ${name}: no horizontal overflow`);
   if(name==='home'){
    check((await page.locator('#hero-title').textContent()).trim()==='ARAL Немецкое наследие',`${width} home: approved headline`);
    check(await page.locator('#audiences .aral-r3-dot-link').count()===2,`${width} home: leading dots on photo cards`);
    check(await page.locator('.product-card.product-card--minimal').count()===4,`${width} home: four product cards`);
    check(await page.locator('#compareShortcut[data-magnetic="header-compare"]').count()===1,`${width} home: magnetic compare`);
    check((await page.locator('#homeCompareCount').evaluate(el=>getComputedStyle(el).backgroundColor))==='rgba(0, 0, 0, 0)',`${width} home: no yellow count pill`);
   }
   if(name==='products'){
    check(await page.locator('[data-vehicle]').count()===2,`${width} catalog: vehicle switches`);
    check((await page.locator('.aral-vehicle-chooser').innerText()).includes('Легковые автомобили'),`${width} catalog: passenger choice`);
    check(!(await page.locator('.aral-vehicle-chooser').innerText()).includes('Быстрый выбор'),`${width} catalog: prompt removed`);
    check(!(await page.locator('.aral-vehicle-chooser').innerText()).includes('Выбрать'),`${width} catalog: redundant label removed`);
    check(await page.locator('[data-product-open]').count()===16,`${width} catalog: sixteen oils`);
    await page.locator('[data-vehicle="Truck"]').click();
    check(await page.locator('[data-product-open]').count()===4,`${width} catalog: truck filter works`);
    await page.goto(root+'pages/products-employer-feedback-r3-preview.html#/product/ARAL-010',{waitUntil:'domcontentloaded'});
    await page.waitForTimeout(250);
    check(await page.locator('.document-slots').count()===1,`${width} product: source document cards remain`);
    check(!(await page.locator('main').innerText()).includes('Дополнения из PDS требуют'),`${width} product: service PDS disclaimer absent`);
   }
   if(name==='contacts'){
    check(await page.locator('.aral-online-pending').count()===1,`${width} contacts: pending Ozon card preserved`);
    check(await page.locator('.contacts-sites-grid small').allTextContents().then(a=>a.includes('SKLAD SPK')&&a.includes('CENTR AVTOMASEL')&&a.includes('ONLINE')),`${width} contacts: revised site captions`);
    check(!(await page.locator('.cc-detail').innerText()).includes(' / Контакты магазина'),`${width} contacts: duplicate location label removed`);
   }
  }
  await page.goto(root+pages.home,{waitUntil:'domcontentloaded'});
  await page.screenshot({path:`${dir}/home-${width}.png`,fullPage:false});
  check(pageErrors.length===0,`${width}: no JS page exceptions: ${pageErrors.slice(0,2).join('; ')}`);
  await context.close();
 }
} catch(e){errors.push('FATAL '+String(e));console.error(e)}
finally{await browser.close()}
writeFileSync(dir+'/report.json',JSON.stringify({count,errors},null,2));
console.log(JSON.stringify({count,errors},null,2));
if(errors.length)process.exitCode=1;
