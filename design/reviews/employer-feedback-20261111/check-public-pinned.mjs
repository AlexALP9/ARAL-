import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';

// Validate the exact externally hosted URL shared for review, not localhost.
// The branch-based githack URL is intentionally avoided because its cache is mutable.
const ref = process.env.ARAL_PUBLIC_REF || 'e113116ced44b2b27713c37701f41c365bb1847e';
const url = `https://raw.githack.com/AlexALP9/ARAL-/${ref}/design/hero/prototypes/hero-4s-k-views/ARAL_home_employer_feedback_r1_preview.html`;
const dir = 'review-output/employer-feedback-r1/public';
mkdirSync(dir,{recursive:true});
const errors = [];
const results = [];
function check(value,message){ results.push({ok:!!value,message}); console.log((value?'PASS ':'FAIL ')+message);if(!value)errors.push(message); }
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
try {
  const context=await browser.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1});
  const page=await context.newPage();
  page.on('pageerror',e=>errors.push('Browser JavaScript error: '+String(e)));
  let response;
  for(let retry=0;retry<3;retry++){
    try{
      response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000});
      if(await page.locator('#compareShortcut').count())break;
    }catch(error){ if(retry===2)throw error; }
    await page.waitForTimeout(2000);
  }
  check(response?.ok()===true,'public preview returns HTTP success');
  check((await page.locator('#hero-title').textContent())?.trim()==='ARAL Немецкое наследие','public preview has approved HERO heading');
  const compare=page.locator('#compareShortcut');
  const catalog=page.locator('.home-catalog-cta');
  check(await compare.getAttribute('data-magnetic')==='header-compare','public compare button has magnetic opt-in');
  check(await catalog.getAttribute('data-magnetic')==='header-catalog','public catalog button has magnetic opt-in');
  await page.waitForFunction(()=>window.ARALMagneticButtons?.initialized===true,null,{timeout:15000});
  check(await page.evaluate(()=>window.ARALMagneticButtons?.initialized===true),'public magnetic engine initialized');
  const [comp,cat]=await Promise.all([compare,catalog].map(el=>el.evaluate(node=>{const s=getComputedStyle(node);return{bg:s.backgroundColor,fg:s.color,font:s.fontSize}})));
  check(comp.bg===cat.bg&&comp.fg===cat.fg,'public compare button has same high-contrast colors as catalog');
  const image=page.locator('header .aral-preview-brand img');
  await image.evaluate(async el=>{try{await el.decode()}catch{}});
  check(await image.evaluate(el=>el.complete&&el.naturalWidth>0),'public ARAL logo loads successfully');
  async function magnet(el,label){
    const r=await el.boundingBox();
    await page.mouse.move(2,110);
    await page.waitForTimeout(260);
    await page.mouse.move(r.x+r.width*.76,r.y+r.height*.72,{steps:6});
    await page.waitForTimeout(620);
    const v=await el.evaluate(node=>({x:Number.parseFloat(node.style.getPropertyValue('--mag-x')||'0'),y:Number.parseFloat(node.style.getPropertyValue('--mag-y')||'0')}));
    check(Math.abs(v.x)+Math.abs(v.y)>.12&&Math.max(Math.abs(v.x),Math.abs(v.y))<=5.2,`public ${label} follows mouse with 5px limit`);
    await page.mouse.move(2,110);
    await page.waitForTimeout(620);
    const rest=await el.evaluate(node=>({x:Number.parseFloat(node.style.getPropertyValue('--mag-x')||'0'),y:Number.parseFloat(node.style.getPropertyValue('--mag-y')||'0')}));
    check(Math.abs(rest.x)<.4&&Math.abs(rest.y)<.4,`public ${label} springs back`);
  }
  await magnet(compare,'Compare');
  await magnet(catalog,'Catalog');
  await page.screenshot({path:dir+'/public-header-1440.png',clip:{x:0,y:0,width:1440,height:105}});
  await page.setViewportSize({width:390,height:844});
  const mobile=await page.locator('header .aral-preview-brand img').evaluate(el=>el.complete&&el.naturalWidth>0);
  check(mobile,'public logo also works at mobile viewport');
  await page.screenshot({path:dir+'/public-header-390.png',clip:{x:0,y:0,width:390,height:105}});
  await context.close();
} catch(error){errors.push('Fatal: '+String(error));console.error(error)}
finally {await browser.close()}
writeFileSync(dir+'/report.json',JSON.stringify({url,results,errors},null,2));
console.log(JSON.stringify({url,total:results.length,errors},null,2));
if(errors.length)process.exitCode=1;
