import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const base='http://127.0.0.1:8123/';
const links=[
 ['Главная','design/hero/prototypes/hero-4s-k-views/ARAL_home_contour_2A_preview.html?t=4.8'],
 ['Каталог','pages/products-r15-contour-2A-preview.html#/catalog']
];
const out='review-output/contour-2A';
await mkdir(out,{recursive:true});
const checks=[],failures=[],screens=[];
function check(ok,msg){checks.push({ok:!!ok,msg});if(!ok)failures.push(msg)}
for(const width of [1440,1024,768,390]){
 const touch=width<=768;
 const ctx=await browser.newContext({viewport:{width,height:900},hasTouch:touch,isMobile:touch,deviceScaleFactor:1,reducedMotion:'no-preference'});
 const page=await ctx.newPage(),errors=[],brokenHttp=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400)brokenHttp.push(r.status()+' '+r.url())});
 for(const [name,path] of links){
  await page.goto(base+path,{waitUntil:'domcontentloaded'});
  await page.waitForTimeout(1050);
  const result=await page.evaluate(async(name)=>{
   for(const img of document.images)img.loading='eager';
   await Promise.all([...document.images].map(img=>img.decode().catch(()=>null)));
   const target=name==='Главная'?document.querySelector('#featured'):document.querySelector('#assortment');
   const wave=getComputedStyle(target,'::before');
   return {
    enabled:document.body.classList.contains('aral-contour-preview'),
    wave:wave.backgroundImage,waveContent:wave.content,waveOpacity:parseFloat(wave.opacity),
    orbit:getComputedStyle(target,'::before').animationName,
    width:document.documentElement.scrollWidth-innerWidth,
    cards:document.querySelectorAll('#featured .product-card--minimal').length,
    catalogCards:document.querySelectorAll('#cards .product-card--minimal').length,
    hoverTargets:document.querySelectorAll('.aral-hbg-target > .aral-hbg-border').length,
    magnetic:document.querySelectorAll('[data-magnetic]').length,
    heroTime:document.querySelector('.aral-scene')?.dataset.time,
    lostImages:[...document.images].filter(img=>!img.complete||!img.naturalWidth).map(img=>img.src)
   };
  },name);
  check(result.enabled,width+' '+name+': contour preview is enabled');
  check(result.wave.includes('aral-contour-stream'),width+' '+name+': real SVG contours are in computed background');
  check(result.waveOpacity>0&&result.waveContent!=='none',width+' '+name+': visible SVG wave layer');
  check(!result.lostImages.length,width+' '+name+': all original images load');
  if(name==='Главная'){
   check(result.cards===4,width+': same four existing homepage products');
   check(result.hoverTargets===7,width+': seven approved information tile animations retained');
   check(result.magnetic===4,width+': four magnetic links retained');
   check(result.heroTime==='4.80',width+': original HERO 4.8s final frame preserved');
   check(result.width<=3,width+': no horizontal overflow on homepage: '+result.width);
   check((await page.locator('a.home-catalog-cta').getAttribute('href')).includes('products-r15-contour-2A-preview.html'),width+': catalog nav goes to matching preview');
  }else{
   check(result.catalogCards===17,width+': catalog still renders 17 products');
   // Compare against unchanged current catalog: the 1024px baseline is already wider by 47px.
   const baseline=await ctx.newPage();
   await baseline.goto(base+'pages/products-r15.html#/catalog',{waitUntil:'domcontentloaded'});
   const orig=await baseline.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
   check(result.width<=orig+2,width+': no added catalog overflow ('+result.width+' vs '+orig+')');
   await baseline.close();
  }
  if(touch)check(result.orbit==='none',width+' '+name+': contour animation disabled on touch');
  const shot=out+'/'+(name==='Главная'?'home':'catalog')+'-'+width+'.png';
  await page.screenshot({path:shot,fullPage:true,animations:'disabled'});
  screens.push(shot);
  if(width===1440&&name==='Главная'){
   await page.locator('#featured').screenshot({path:out+'/featured-products-focus-1440.png',animations:'disabled'});
   await page.locator('#where').screenshot({path:out+'/purchase-section-1440.png',animations:'disabled'});
   screens.push(out+'/featured-products-focus-1440.png',out+'/purchase-section-1440.png');
  }
 }
 check(!errors.length,width+': no JavaScript exceptions: '+errors.join('; '));
 check(!brokenHttp.length,width+': no HTTP errors: '+brokenHttp.join('; '));
 await ctx.close();
}
const reduced=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
const page=await reduced.newPage();await page.goto(base+links[0][1],{waitUntil:'domcontentloaded'});
check(await page.locator('#featured').evaluate(n=>getComputedStyle(n,'::before').animationName==='none'),
 'Reduced-motion disables all contour animation');
await reduced.close();await browser.close();
const report={status:failures.length?'FAIL':'PASS',checks,failures,screens};
await writeFile(out+'/test-results.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({status:report.status,checks:checks.length,failures,screens},null,2));
if(failures.length)process.exitCode=1;