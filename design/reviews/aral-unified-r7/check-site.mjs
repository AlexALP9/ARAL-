import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright');
import {mkdirSync,writeFileSync} from 'node:fs';
const root=process.env.ARAL_BASE || 'http://127.0.0.1:8123/';
const dir=process.env.ARAL_QA_OUTPUT || 'review-output/aral-r7';mkdirSync(dir,{recursive:true});
const pages={
 home:'design/hero/prototypes/hero-4s-k-views/ARAL_home_employer_feedback_r7_preview.html',
 company:'index-employer-feedback-r7-preview.html#company',
 products:'pages/products-employer-feedback-r7-preview.html#/catalog',
 contacts:'pages/contacts-employer-feedback-r7-preview.html#contacts-stores',
 partners:'pages/partners-employer-feedback-r7-preview.html',
 advantages:'pages/advantages-employer-feedback-r7-preview.html',
 drivers:'pages/drivers-employer-feedback-r7-preview.html',
 interesting:'index-employer-feedback-r7-preview.html#interesting'
};
let count=0;const errors=[];const check=(yes,msg)=>{count++;console.log((yes?'PASS ':'FAIL ')+msg);if(!yes)errors.push(msg)};
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH});
try {
 for(const width of [1440,1024,768,390]){
  const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1});
  const page=await context.newPage();
  const pageErrors=[];
  page.on('pageerror',e=>pageErrors.push(String(e)));
  for(const [name,path] of Object.entries(pages)){
   const response=await page.goto(root+path,{waitUntil:'domcontentloaded'});
   await page.waitForTimeout(500);
   check(response?.ok()===true,`${width} ${name}: route loads`);
   check(await page.locator('body[data-feedback-preview="r7"]').count()===1,`${width} ${name}: R7 scripts initialized`);
   check(await page.locator('header a.aral-preview-brand img').evaluate(el=>el.complete&&el.naturalWidth>0&&el.naturalHeight>0&&el.currentSrc.includes('aral-logo-supplied-r6.png')),`${width} ${name}: real brand logo decoded`);
   if(name==='company'||name==='interesting')console.log('R5 FOOTER DIAGNOSTIC '+name+' '+JSON.stringify(await page.evaluate(()=>[...document.querySelectorAll('footer')].map(f=>({className:f.className,hidden:!!f.closest('[hidden]'),ctas:f.querySelectorAll('.af-contact .af-cta').length,r3:f.querySelectorAll('.aral-r7-driver-cta').length})))));
   check(await page.locator('.aral-global-footer .aral-r7-driver-cta').count()>=1,`${width} ${name}: motorists footer CTA present`);
   const foot=page.locator('.aral-global-footer:visible').first();
   const ctas=foot.locator('.af-contact a.af-cta');
   check(await ctas.count()===2,`${width} ${name}: precisely two footer actions`);
   const actionMetrics=await ctas.evaluateAll(els=>els.map(el=>{const r=el.getBoundingClientRect(),ps=getComputedStyle(el,'::before');return {text:el.textContent.trim(),width:r.width,height:r.height,marker:ps.content}}));
   check(actionMetrics.length===2&&Math.abs(actionMetrics[0].width-actionMetrics[1].width)<=1&&Math.abs(actionMetrics[0].height-actionMetrics[1].height)<=1,`${width} ${name}: footer buttons aligned and equally sized`);
   check(actionMetrics.every(x=>x.marker==='none'||x.marker==='normal')&&actionMetrics.map(x=>x.text).join('|')==='Для партнёров|Для автомобилистов',`${width} ${name}: clean button labels, no dots or arrows`);
   const news=foot.locator('.af-news a.af-teaser');
   const newsMetrics=await news.evaluateAll(els=>els.map(el=>({marker:getComputedStyle(el,'::before').content,left:getComputedStyle(el).borderLeftWidth,txt:el.textContent.trim()})));
   check(newsMetrics.length===3&&newsMetrics.every(x=>(x.marker==='none'||x.marker==='normal')&&Math.abs(parseFloat(x.left)-2)<.5),`${width} ${name}: original three editorial links with one tidy blue rule each`);
   const labels=await news.locator('small').allTextContents();
   check(labels.map(s=>s.trim()).join('|')==='Интересное|Каталог|Техническая информация',`${width} ${name}: all three original editorial headings restored`);
   check(await news.nth(2).getAttribute('href').then(h=>h?.includes('msdspds.aral.com')),`${width} ${name}: original PDS/SDS destination preserved`);
   check(await news.nth(2).innerText().then(s=>s.includes('Документация на продукцию PDS / SDS')),`${width} ${name}: original PDS/SDS visible caption preserved`);
   check(await ctas.evaluateAll(els=>els.every(e=>e.hasAttribute('data-magnetic')&&e.classList.contains('aral-r7-footer-cta'))),`${width} ${name}: both footer CTAs connected to shared magnetic engine`);
   check(await page.evaluate(()=>window.ARALMagneticButtons?.initialized===true),`${width} ${name}: magnetic engine initialized on this page`);
   check(await foot.locator('a.aral-r7-driver-cta').getAttribute('href').then(h=>h?.includes('drivers-employer-feedback-r7-preview.html')),`${width} ${name}: motorists link remains inside R7`);
   check(await page.locator('.aral-review-toggle').count()===0,`${width} ${name}: no debug floating button`);
   
   if(width===1024&&name==='products')console.log('CATALOG OVERFLOW '+JSON.stringify(await page.evaluate(()=>({
     innerWidth,bodyWidth:document.body.scrollWidth,documentWidth:document.documentElement.scrollWidth,
     offenders:[...document.querySelectorAll('*')].map(el=>({tag:el.tagName,cls:String(el.className).slice(0,80),right:Math.round(el.getBoundingClientRect().right),left:Math.round(el.getBoundingClientRect().left),scroll:el.scrollWidth,client:el.clientWidth})).filter(x=>x.right>innerWidth+3&&x.left<innerWidth+150).sort((a,b)=>b.right-a.right).slice(0,20)
   }))));
   check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),`${width} ${name}: no horizontal overflow`);
   
   if(width===1440&&name==='home'){
    const asset=await page.evaluate(async()=>{
      const r=await fetch(new URL('../../../../assets/aral-logo-supplied-r6.png',location.href));
      const b=await r.arrayBuffer();const x=new Uint8Array(b);
      const sig=[137,80,78,71,13,10,26,10].every((v,i)=>x[i]===v);
      return {status:r.status,length:x.length,signature:sig};
    });
    check(asset.status===200&&asset.length>1800&&asset.signature,'user-supplied logo binary is served as real PNG with expected signature');
   }

   if(name==='home'){
    check(await page.locator('.aral-contour-compare').count()===0,`${width} home: obsolete waves comparison panel removed`);
    check(await page.locator('body').getAttribute('data-contour-mode')==='after',`${width} home: approved +20% waves remain active`);
    check((await page.locator('#hero-title').textContent()).trim()==='ARAL Немецкое наследие',`${width} home: approved headline`);
    check(await page.locator('#audiences .aral-r3-dot-link').count()===2,`${width} home: leading dots on photo cards`);
    check(await page.locator('#audiences .aral-r3-dot-link').evaluateAll(els=>els.length===2&&els.every(e=>!e.textContent.includes('↗')&&getComputedStyle(e,'::before').content!=='none')), `${width} home: leading dots present and trailing arrow text gone`);
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
    await page.goto(root+'pages/products-employer-feedback-r7-preview.html#/product/ARAL-010',{waitUntil:'domcontentloaded'});
    await page.waitForTimeout(250);
    check(await page.locator('.document-slots').count()===1,`${width} product: source document cards remain`);
    await page.goto(root+'pages/products-employer-feedback-r7-preview.html#/product/ARAL-001',{waitUntil:'domcontentloaded'});
    await page.waitForTimeout(280);
    check((await page.locator('main').innerText()).includes('MB-Approval 229.3'),`${width} ARAL-001: Mercedes 229.3 printed`);
    const mbCheck=await page.evaluate(()=>{
      const title=[...document.querySelectorAll('main th')].find(e=>e.textContent.includes('Официальные одобрения'));
      return !!title&&title.parentElement.textContent.includes('MB-Approval 229.3');
    });
    check(mbCheck,`${width} ARAL-001: MB 229.3 is under official approvals, not merely Meets`);
    check(!(await page.locator('main').innerText()).includes('Дополнения из PDS требуют'),`${width} product: service PDS disclaimer absent`);
   }
   if(name==='contacts'){
    check(await page.locator('a.aral-online-live[href^="https://www.ozon.ru/seller/avtovsyachina/brand/aral-84979894/"]').count()===1,`${width} contacts: real Ozon shopping link connected`);
    check(await page.locator('.contacts-sites-grid small').allTextContents().then(a=>a.includes('SKLAD SPK')&&a.includes('CENTR AVTOMASEL')&&a.includes('ONLINE')),`${width} contacts: revised site captions`);
    check(!(await page.locator('.cc-detail').innerText()).includes(' / Контакты магазина'),`${width} contacts: duplicate location label removed`);
   }
  }
  await page.goto(root+pages.home,{waitUntil:'domcontentloaded'});
  await page.screenshot({path:`${dir}/home-${width}.png`,fullPage:false});
  await page.locator('.aral-global-footer:visible').first().screenshot({path:`${dir}/footer-${width}.png`});
  
  if(width===1440){
   const foot=page.locator('.aral-global-footer:visible').first();
   const actions=foot.locator('.af-contact a.af-cta');
   for(const [index,name] of ['Partners','Motorists'].entries()){
    const button=actions.nth(index);
    await button.scrollIntoViewIfNeeded();
    await page.mouse.move(2,2);
    await page.waitForTimeout(220);
    const r=await button.boundingBox();
    await page.mouse.move(r.x+r.width*.74,r.y+r.height*.71,{steps:6});
    await page.waitForTimeout(650);
    const m=await button.evaluate(el=>({x:parseFloat(el.style.getPropertyValue('--mag-x')||'0'),y:parseFloat(el.style.getPropertyValue('--mag-y')||'0'),shadow:getComputedStyle(el).boxShadow}));
    check(Math.abs(m.x)+Math.abs(m.y)>.12&&Math.abs(m.x)<=5.2&&Math.abs(m.y)<=5.2,`1440 ${name}: footer button follows mouse with bounded 5px attraction`);
    check(m.shadow.includes('rgba')&&!m.shadow.includes('none'),`1440 ${name}: footer button glows on hover`);
    await page.mouse.move(2,2);
    await page.waitForTimeout(650);
    const rest=await button.evaluate(el=>({x:parseFloat(el.style.getPropertyValue('--mag-x')||'0'),y:parseFloat(el.style.getPropertyValue('--mag-y')||'0')}));
    check(Math.abs(rest.x)<.4&&Math.abs(rest.y)<.4,`1440 ${name}: magnetic button springs back`);
   }
  }
check(pageErrors.length===0,`${width}: no JS page exceptions: ${pageErrors.slice(0,2).join('; ')}`);
  await context.close();
 }
} catch(e){errors.push('FATAL '+String(e));console.error(e)}
finally{await browser.close()}
writeFileSync(dir+'/report.json',JSON.stringify({count,errors},null,2));
console.log(JSON.stringify({count,errors},null,2));
if(errors.length)process.exitCode=1;
