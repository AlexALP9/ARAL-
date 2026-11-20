import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const BASE='http://127.0.0.1:8123/';
const HOME=BASE+'design/hero/prototypes/hero-4s-k-views/ARAL_home_magnetic_buttons_preview.html?t=4.8';
const checks=[],failures=[],screens=[];
const root='review-output/magnetic/pages';
await mkdir(root,{recursive:true});
const check=(v,msg)=>{checks.push({ok:!!v,msg});if(!v)failures.push(msg)};
const components=[
 {path:'pages/products-r15.html#/catalog',count:2,selector:'main [data-magnetic]',id:'products'},
 {path:'pages/partners-11.html',count:2,selector:'[data-magnetic]',id:'partners'},
 {path:'index.html#interesting',count:6,selector:'.story-toggle[data-magnetic]',id:'articles'}
];
const motion=async el=>el.evaluate(n=>{
 const t=getComputedStyle(n).transform;if(t==='none')return {x:0,y:0,raw:t};
 const m=new DOMMatrix(t);return{x:m.m41,y:m.m42,raw:t};
});
for(const width of [1440,1024,768,390]){
 const touch=width<=768;
 const context=await browser.newContext({viewport:{width,height:900},hasTouch:touch,isMobile:touch,deviceScaleFactor:1,reducedMotion:'no-preference'});
 const page=await context.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(HOME,{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(350);
 check(await page.locator('[data-magnetic]').count()===4,width+': four home CTA links including header catalog');
 check(await page.locator('[data-magnetic="header-catalog"]').getAttribute('href')==='../../../../pages/products-r15.html#/catalog',width+': header catalog destination remains unchanged');
 const api=await page.evaluate(()=>window.ARALMagneticButtons);
 check(api?.initialized&&api.maxShift===5&&api.strength===.17,width+': gentler 5px magnetic script loaded');
 if(!touch){
  const a=page.locator('[data-magnetic="hero-primary"]'),b=page.locator('[data-magnetic="hero-secondary"]');
  await a.scrollIntoViewIfNeeded();
  const ra=await a.boundingBox(),rb=await b.boundingBox();
  await page.mouse.move(ra.x+ra.width*.83,ra.y+ra.height*.62);
  await page.waitForTimeout(700);
  const m=await motion(a);
  check(Math.hypot(m.x,m.y)>.7&&Math.abs(m.x)<5.3&&Math.abs(m.y)<5.3,width+': first CTA attracts within 5px');
  await page.mouse.move((ra.x+ra.width+rb.x)/2,ra.y+ra.height*.5);
  await page.waitForTimeout(700);
  const overlap=await page.evaluate(()=>{
   const a=document.querySelector('[data-magnetic="hero-primary"]').getBoundingClientRect();
   const b=document.querySelector('[data-magnetic="hero-secondary"]').getBoundingClientRect();
   return a.right-b.left;
  });
  check(overlap<=1,width+': neighboring CTA separation, overlap='+overlap);
  await page.mouse.move(1,1);await page.waitForTimeout(900);
  const a0=await motion(a),b0=await motion(b);
  check(Math.hypot(a0.x,a0.y)<.4&&Math.hypot(b0.x,b0.y)<.4,width+': both CTAs spring back');
 }else{
  const m=await motion(page.locator('[data-magnetic="hero-primary"]'));
  check(m.raw==='none',width+': touch motion disabled');
 }
 await page.screenshot({path:root+'/home-'+width+'.png',fullPage:true,animations:'disabled'});
 screens.push({width,type:'home'});
 for(const item of components){
  await page.goto(BASE+item.path,{waitUntil:'domcontentloaded'});
  await page.waitForTimeout(360);
  const all=page.locator(item.selector);
  check(await all.count()===item.count,width+': '+item.id+' has '+item.count+' magnetic elements');
  if(item.id==='products'){
   check(await page.locator('a[data-magnetic="products-catalog"]').getAttribute('href')==='#assortment',width+': catalog link preserved');
   check(await page.locator('a[data-magnetic="products-guide"]').getAttribute('href')==='#howto',width+': guide link preserved');
  }
  if(item.id==='partners'){
   const hrefs=await all.evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')));
   check(hrefs.every(h=>h==='https://skladspk.ru/contacts'),width+': partner target preserved');
  }
  if(item.id==='articles'){
   check(await page.locator('.story-toggle[data-magnetic][type="button"]').count()===6,width+': six native article buttons');
   const first=all.first();
   await first.scrollIntoViewIfNeeded();if(touch)await first.tap();else await first.click();
   check(await first.getAttribute('aria-expanded')==='true',width+': article expands');
   if(touch)await first.tap();else await first.click();
   check(await first.getAttribute('aria-expanded')==='false',width+': article collapses');
   await page.waitForTimeout(700); // let the approved article scroll animation settle
  }
  if(!touch){
   const first=all.first();await first.scrollIntoViewIfNeeded();
   const r=await first.boundingBox();
   await page.mouse.move(r.x+r.width*.82,r.y+r.height*.55);
   await page.waitForTimeout(700);
   const m=await motion(first);
   check(Math.abs(m.x)<=5.3&&Math.abs(m.y)<=5.3&&Math.hypot(m.x,m.y)>.5,width+': '+item.id+' gentle hover ('+m.x+','+m.y+','+m.raw+')');
   await page.mouse.move(1,1);await page.waitForTimeout(900);
   const back=await motion(first);
   check(Math.hypot(back.x,back.y)<.4,width+': '+item.id+' spring return');
  }else{
   const m=await motion(all.first());check(Math.abs(m.x)<.2&&Math.abs(m.y)<.2,width+': '+item.id+' no touch displacement ('+m.raw+')');
  }
  if([1440,390].includes(width)){
   await page.screenshot({path:root+'/'+item.id+'-'+width+'.png',fullPage:true,animations:'disabled'});
   screens.push({width,type:item.id});
  }
 }
 check(errors.length===0,width+': no JavaScript exceptions '+errors.join('; '));
 await context.close();
}
const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
const page=await context.newPage();await page.goto(HOME,{waitUntil:'domcontentloaded'});
await page.locator('[data-magnetic="hero-primary"]').hover();await page.waitForTimeout(650);
check((await motion(page.locator('[data-magnetic="hero-primary"]'))).raw==='none','reduced motion disables translation');
await context.close();await browser.close();
const report={status:failures.length?'FAIL':'PASS',checks,failures,screens};
await writeFile(root+'/results.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({status:report.status,count:checks.length,failures,screens},null,2));
if(failures.length)process.exitCode=1;