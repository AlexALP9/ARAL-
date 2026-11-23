import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const base='http://127.0.0.1:8123/';
const pageUrl=base+'design/hero/prototypes/hero-4s-k-views/ARAL_home_hover_border_gradient_preview.html?t=4.8';
const folder='review-output/hover-border-gradient';
await mkdir(folder,{recursive:true});
const checks=[],failures=[],screens=[];
const check=(value,label)=>{checks.push({ok:!!value,label});if(!value)failures.push(label)};
for(const width of [1440,1024,768,390]){
 const touch=width<=768;
 const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1,hasTouch:touch,isMobile:touch,reducedMotion:'no-preference'});
 const page=await context.newPage();const errors=[],http=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400)http.push(r.status()+' '+r.url())});
 await page.goto(pageUrl,{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(1250);
 const state=await page.evaluate(async()=>{
  for(const i of document.images)i.loading='eager';
  await Promise.all([...document.images].map(i=>i.decode().catch(()=>null)));
  return {
   panels:document.querySelectorAll('.aral-hbg-target > .aral-hbg-border').length,
   cards:document.querySelectorAll('#featured .product-card--minimal').length,
   magnetic:document.querySelectorAll('[data-magnetic]').length,
   hero:document.querySelector('.aral-scene')?.dataset.time,
   overflow:document.documentElement.scrollWidth-innerWidth,
   missing:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)
  }
 });
 check(state.panels===7,width+': exactly 7 gradient borders, no other blocks');
 check(state.cards===4,width+': all 4 existing product cards preserved');
 check(state.magnetic===4,width+': all magnetic CTAs unchanged');
 check(state.hero==='4.80',width+': original HERO final frame remains at 4.8s');
 check(state.overflow<=3,width+': no horizontal overflow '+state.overflow+'px');
 check(!state.missing.length,width+': all original photographs present');
 for(const [id,n] of [['audiences',2],['where',2],['b2b',3]]){
  const cards=page.locator('#'+id+' .aral-hbg-target');
  check(await cards.count()===n,width+': '+id+' has '+n+' effected tiles');
  const tile=cards.first();
  await tile.scrollIntoViewIfNeeded();
  if(!touch){
   const box=await tile.boundingBox();
   await page.mouse.move(box.x+box.width/2,box.y+box.height/2);
   await page.waitForTimeout(700);
   const data=await tile.evaluate(n=>{
    const b=n.querySelector('.aral-hbg-border');
    return {opacity:Number(getComputedStyle(b,'::after').opacity),
      orbit:getComputedStyle(b,'::before').animationPlayState,
      gradient:getComputedStyle(b,'::before').backgroundImage,
      hit:getComputedStyle(b).pointerEvents}
   });
   check(data.opacity>.92,width+': '+id+' colored outline expands on hover');
   check(data.orbit==='paused',width+': '+id+' border highlight pauses during hover');
   check(data.gradient.includes('conic-gradient'),width+': '+id+' moving border geometry');
   check(data.hit==='none',width+': '+id+' overlay does not intercept clicks');
   if(width===1440){
    const shot=folder+'/ARAL-HoverBorder-'+id+'-1440px.png';
    await page.screenshot({path:shot,animations:'allow'});
    screens.push(shot);
   }
   await page.mouse.move(2,2);await page.waitForTimeout(650);
   const after=await tile.evaluate(n=>Number(getComputedStyle(n.querySelector('.aral-hbg-border'),'::after').opacity));
   check(after<.12,width+': '+id+' outline fades out after mouse leaves');
  } else {
   const idle=await tile.evaluate(n=>getComputedStyle(n.querySelector('.aral-hbg-border'),'::before').animationName);
   check(idle==='none',width+': '+id+' orbit is disabled on touch');
  }
 }
 check(!errors.length,width+': no page errors '+errors.join('; '));
 check(!http.length,width+': no failed asset requests '+http.join('; '));
 // Links on tiles are unchanged; decorative overlay must not capture a tap/click.
 const route=page.locator('#where .aral-hbg-target a').first();
 check((await route.getAttribute('href'))==='../../../../pages/contacts-03.html',width+': retail CTA URL preserved');
 await route.click();
 check(page.url().includes('/pages/contacts-03.html'),width+': click through retail tile works');
 await page.goto(pageUrl,{waitUntil:'domcontentloaded'});
 check(await page.locator('#b2b .support-card a').count()===0,width+': support info tiles not turned into buttons');
 const pic=folder+'/ARAL-Home-HoverBorder-'+width+'px.png';
 await page.screenshot({path:pic,fullPage:true,animations:'disabled'});
 screens.push(pic);
 await context.close();
}
const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
const page=await context.newPage();await page.goto(pageUrl,{waitUntil:'domcontentloaded'});
check(await page.locator('#where .aral-hbg-border').first().evaluate(n=>getComputedStyle(n,'::before').animationName==='none'),'reduced motion disables orbital animation');
await context.close();await browser.close();
const report={status:failures.length?'FAIL':'PASS',checks,failures,screens};
await writeFile(folder+'/results.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({status:report.status,checkCount:checks.length,failures,screens},null,2));
if(failures.length)process.exitCode=1;