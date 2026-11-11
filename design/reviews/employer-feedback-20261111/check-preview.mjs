import {chromium} from 'playwright';
import {mkdirSync,writeFileSync} from 'node:fs';
const URL='http://127.0.0.1:8123/';
const dir='review-output/employer-feedback-r1';
mkdirSync(dir,{recursive:true});
const home='design/hero/prototypes/hero-4s-k-views/ARAL_home_employer_feedback_r1_preview.html';
const product='pages/products-employer-feedback-r1-preview.html#/catalog';
const contacts='pages/contacts-employer-feedback-r1-preview.html#contacts-sites';
const errs=[];let checks=0;
function check(cond,msg){checks++;if(!cond){errs.push(msg);console.error('FAIL',msg)}else console.log('PASS',msg)}
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
try{
 const context=await browser.newContext({viewport:{width:1440,height:920},deviceScaleFactor:1});
 const page=await context.newPage();
 const pageErrors=[];
 page.on('pageerror',e=>pageErrors.push(String(e)));
 await page.goto(URL+home,{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(900);
 check((await page.locator('#hero-title').textContent()).includes('Немецкое наследие'),'provisional headline in HERO');
 check(await page.locator('header.home-nav nav#home-menu a').count()===5,'five top menu links');
 check(await page.locator('.aral-preview-brand img').count()===1,'real logo embedded');
 const logo=await page.locator('.aral-preview-brand img').evaluate(el=>({complete:el.complete,naturalWidth:el.naturalWidth}));
 check(logo.complete&&logo.naturalWidth>0,'logo is decoded');
 check(await page.locator('.product-card.product-card--minimal').count()===4,'four unchanged featured cards');
 check(await page.locator('#play').count()===1,'HERO replay controls preserved');
 check(await page.locator('[data-aral-targeted-review]').count()===1,'2A +20% wave mode preserved');
 await page.screenshot({path:dir+'/01-home-desktop.png',fullPage:true});
 // route annotations
 await page.goto(URL+home+'?review=links',{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(450);
 const highlighted=await page.locator('main a.aral-review-route,.aral-global-footer a.aral-review-route').count();
 check(highlighted>=3,'review mode marks driver/interesting route links');
 await page.screenshot({path:dir+'/02-route-inspection.png',fullPage:false});
 // catalog and vehicle segments
 await page.goto(URL+product,{waitUntil:'domcontentloaded'});
 await page.waitForSelector('[data-vehicle="PKW"]');
 check(await page.locator('[data-vehicle]').count()===2,'two prominent vehicle categories');
 check(await page.locator('[data-cat="Coolant"]').count()===0,'no coolant filter');
 const initial=await page.locator('[data-product-open]').count();
 check(initial===16,'catalog shows sixteen motor oils; found '+initial);
 check(!await page.locator('main').innerText().then(s=>/Silikatfrei|антифриз|охлаждающ/i.test(s)),'no coolant in public catalog text');
 await page.locator('[data-vehicle="PKW"]').click();
 const passenger=await page.locator('[data-product-open]').count();
 check(passenger===12,'passenger filter shows twelve oils; found '+passenger);
 check(await page.locator('[data-vehicle="PKW"]').getAttribute('aria-pressed')==='true','passenger button visually selected');
 await page.locator('[data-vehicle="Truck"]').click();
 const trucks=await page.locator('[data-product-open]').count();
 check(trucks===4,'truck filter shows four oils; found '+trucks);
 await page.screenshot({path:dir+'/03-catalog-trucks.png',fullPage:true});
 await page.goto(URL+'pages/products-employer-feedback-r1-preview.html#/product/ARAL-017',{waitUntil:'domcontentloaded'});
 check((await page.locator('main').innerText()).includes('Товар не найден'),'hidden coolant product not publicly routable');
 // Contacts
 await page.goto(URL+contacts,{waitUntil:'domcontentloaded'});
 await page.waitForSelector('.aral-online-pending');
 check(await page.locator('.aral-online-pending').count()===1,'ARAL online card present');
 check((await page.locator('.aral-online-pending').innerText()).includes('Купить ARAL online'),'correct e-commerce label');
 check(await page.locator('a.aral-online-pending').count()===0,'no invented outbound Ozon URL');
 await page.screenshot({path:dir+'/04-contacts-online.png',fullPage:true});
 // Mobile header
 await page.setViewportSize({width:390,height:844});
 await page.goto(URL+home,{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(350);
 check(!(await page.locator('#home-menu').isVisible()),'mobile menu initially collapsed');
 await page.locator('.home-menu-toggle').click();
 check(await page.locator('#home-menu').isVisible(),'mobile menu opens');
 check(await page.locator('#home-menu a').count()===5,'mobile menu still has 5 sections');
 await page.screenshot({path:dir+'/05-mobile-menu.png',fullPage:false});
 // Logo interaction reloads home
 await page.locator('.home-menu-toggle').click();
 await page.locator('.home-brand').click();
 check(page.url().includes('ARAL_home_employer_feedback_r1_preview.html'),'logo returns to reviewed home');
 check((await page.locator('#hero-title').innerText()).includes('Немецкое наследие'),'HERO present on logo navigation');
 check(pageErrors.length===0,'no unhandled JavaScript page errors: '+pageErrors.slice(0,3).join('; '));
 await context.close();
}catch(error){errs.push('Fatal: '+String(error));console.error(error)}finally{await browser.close()}
writeFileSync(dir+'/report.json',JSON.stringify({checks,failures:errs},null,2));
console.log(JSON.stringify({checks,failures:errs},null,2));
if(errs.length)process.exitCode=1;
