import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const site='http://127.0.0.1:8123/design/hero/prototypes/hero-4s-k-views/home-integration-preview.html';
const out='review-output/screenshots';
await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const report={source:'PR #9 / home-integration-preview.html',screens:[],checks:[],warnings:[]};
let failures=[];
const assert=(ok,message)=>{report.checks.push({ok,message});if(!ok)failures.push(message);};
for(const width of [1440,1024,768,390]){
 const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1,reducedMotion:'no-preference'});
 const errors=[],responses=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400)responses.push(r.status()+' '+r.url())});
 // t=4.8 renders the exact original animation's frozen final frame for reproducible screenshots.
 await page.goto(site+'?t=4.8',{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(2000);
 const stats=await page.evaluate(async()=>{
  for(const img of document.querySelectorAll('img'))img.loading='eager';
  await Promise.all([...document.querySelectorAll('img')].map(img=>img.decode().catch(()=>null)));
  return {sceneReady:document.querySelector('.aral-scene')?.classList.contains('ready'),
    frame:document.querySelector('.aral-scene')?.dataset.time,
    cards:document.querySelectorAll('.product-card--minimal').length,
    sections:document.querySelectorAll('main section').length,
    broken:[...document.images].filter(img=>!img.complete||img.naturalWidth===0).map(img=>img.currentSrc||img.src),
    overflow:document.documentElement.scrollWidth-innerWidth};
 });
 assert(stats.sceneReady&&stats.frame==='4.80',width+': HERO loads and ends at 4.80s');
 assert(stats.cards===4,width+': four original catalogue cards');
 assert(stats.broken.length===0,width+': all HTML photographs decode ('+stats.broken.join(',')+')');
 assert(stats.overflow<=3,width+': no horizontal overflow ('+stats.overflow+'px)');
 assert(errors.length===0,width+': no JS page errors ('+errors.join('; ')+')');
 assert(responses.length===0,width+': no HTTP errors ('+responses.join('; ')+')');
 if(width<=880){
  const toggle=page.locator('.home-menu-toggle');
  await toggle.click();
  assert(await toggle.getAttribute('aria-expanded')==='true',width+': mobile menu opens');
  assert(await page.locator('#home-menu a').first().isVisible(),width+': mobile navigation visible');
  await page.keyboard.press('Escape');
  assert(await toggle.getAttribute('aria-expanded')==='false',width+': Escape closes mobile menu');
 }
 const screenshot=path.join(out,'ARAL-home-'+width+'px.png');
 await page.screenshot({path:screenshot,fullPage:true,animations:'disabled'});
 report.screens.push({width,file:screenshot,height:await page.evaluate(()=>document.documentElement.scrollHeight),...stats});
 if(width===1440){
  await page.locator('[data-compare]').first().click();
  assert((await page.locator('#homeCompareCount').innerText()).trim()==='1','Compare: count updates');
  assert((await page.evaluate(()=>JSON.parse(localStorage.getItem('aralProductsV13Compare')||'[]'))).includes('ARAL-003'),'Compare: stored under revision 15 key');
  await page.locator('[data-product-open="ARAL-003"]').click({position:{x:30,y:30}});
  assert(page.url().includes('pages/products-r15.html#/product/ARAL-003'),'Product card: opens existing product detail URL');
 }
 await page.close();
}
// Run a separate live-timing check; screenshots themselves use t=4.8 to guarantee the final frame.
const autoplay=await browser.newPage({viewport:{width:1024,height:850},reducedMotion:'no-preference'});
await autoplay.goto(site,{waitUntil:'domcontentloaded'});
await autoplay.waitForTimeout(5900);
const last=await autoplay.evaluate(()=>({scene:document.querySelector('.aral-scene')?.dataset.time,ready:document.querySelector('.aral-scene')?.classList.contains('ready')}));
assert(last.ready&&last.scene==='4.80','Autoplay: plays once and holds still at 4.80 seconds');
await autoplay.close();
await browser.close();
report.status=failures.length?'FAIL':'PASS';
report.failures=failures;
await writeFile('review-output/visual-report.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
if(failures.length)process.exitCode=1;