const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const base = process.env.ARAL_BASE || 'http://127.0.0.1:8123/';
const home = 'design/hero/prototypes/hero-4s-k-views/ARAL_home_employer_feedback_r8_preview.html';
const company = 'index-employer-feedback-r8-preview.html';
const section = s => 'pages/'+s+'-employer-feedback-r8-preview.html';
const catalog = section('products');
const pages = [
  [home,'Главная — ARAL'],[company+'#company','О бренде — ARAL'],[company+'#interesting','Интересное — ARAL'],
  [section('partners'),'Сотрудничество — ARAL'],[section('drivers'),'Для автомобилистов — ARAL'],
  [section('advantages'),'Преимущества ARAL'],[section('contacts'),'Где купить — ARAL'],
  [catalog+'#/catalog','Каталог продукции — ARAL'],[catalog+'#/compare','Сравнение масел — ARAL'],
  [catalog+'#/product/ARAL-008','Aral SuperTronic E 0W-30 — ARAL'],
  [catalog+'#/product/ARAL-016','Aral масло Turboral (Plus) 15W-40 — ARAL']
];
async function run(width,browser) {
  const context = await browser.newContext({viewport:{width,height:900},hasTouch:width<=768});
  const page = await context.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  async function ready(){
    if((await page.title()).includes('External Content Notice')) await page.getByRole('button',{name:'Open the page'}).click();
    await page.waitForFunction(()=>document.body?.dataset.feedbackPreview==='r8');
  }
  try {
    for(const [path,title] of pages){
      await page.goto(new URL(path,base).href);
      await ready();
      await page.waitForFunction(t=>document.title===t,title,{timeout:7000});
      const issues=await page.evaluate(()=>{
        const ids=[...document.querySelectorAll('[id]')].map(el=>el.id);
        const issues=ids.filter((id,i)=>ids.indexOf(id)!==i);
        for(const button of document.querySelectorAll('[aria-controls]')){
          for(const id of button.getAttribute('aria-controls').split(/\s+/)) if(!document.getElementById(id)) issues.push('missing '+id);
        }
        for(const a of document.querySelectorAll('a[href]')){
          if(!a.getBoundingClientRect().width)continue;
          const u=new URL(a.href);
          if(u.origin===location.origin && u.pathname.endsWith('.html') && !u.pathname.includes('r8')) issues.push('obsolete '+u.pathname);
        }
        if(document.documentElement.scrollWidth>innerWidth+2) issues.push('overflow');
        return issues;
      });
      assert.deepEqual(issues,[],path+' '+issues.join(', '));
      const cards=page.locator('a.card-link');
      for(const card of await cards.all()){
        await card.scrollIntoViewIfNeeded();
        assert(await card.evaluate(el=>{
          const r=el.getBoundingClientRect();
          return [0.08,0.5,0.92].every(k=>{
            const x=r.left+r.width*k, y=r.top+r.height*k;
            return document.elementFromPoint(x,y)?.closest('a')===el;
          });
        }),path+' card surface '+await card.getAttribute('aria-label'));
      }
      if(path===home){
        const actions=page.locator('.aral-hero .actions a');
        assert.equal(await actions.count(),1);
        assert.equal((await actions.innerText()).replace('↗','').trim(),'Смотреть каталог');
        assert((await actions.getAttribute('href')).includes('products-employer-feedback-r8'));
        assert.equal(await cards.count(),4);
        for (const card of await page.locator('.audience-tile').all()){
          const url=await card.getAttribute('href');
          await card.click({position:{x:22,y:22}});
          await ready();assert.equal(page.url(),new URL(url,new URL(home,base)).href);
          await page.goBack();await ready();
        }
      }
      if(path===company+'#company'){
        assert.equal((await page.locator('#view-company h1').innerText()).trim(),'О бренде');
        const btn=page.locator('[data-year="1998"]');
        assert.equal(await btn.getAttribute('aria-expanded'),'true');
        assert.equal(await page.locator('#event-year').innerText(),'1998');
        assert.equal(await page.locator('#event-title').innerText(),'ARAL выходит в интернет');
        assert(await page.locator('#year-detail').isVisible());
        const next=page.locator('[data-year="1924"]');
        await next.focus();await page.keyboard.press('Enter');
        assert.equal(await page.locator('#event-year').innerText(),'1924');
        assert.equal(await btn.getAttribute('aria-expanded'),'false');
        await page.keyboard.press('Space');assert(await page.locator('#year-detail').isHidden());
        assert(await page.locator('.nav-toggle').evaluateAll(buttons=>buttons.every(b=>document.getElementById(b.getAttribute('aria-controls'))===b.closest('header').querySelector('nav'))));
      }
      if(path===section('partners')){
        const heads=await page.evaluate(()=>Array.from(document.querySelectorAll('main h1, main h2'),h=>h.textContent));
        assert.deepEqual(heads.slice(0,4),['ARAL для профессиональных закупок','36 точек. Один центр заказа.','Свяжитесь с отделом оптовых продаж','Продукция ARAL для вашего бизнеса']);
        await page.locator('#aral-partners-geography [data-view="spb"]').click();
        assert.equal(await page.locator('#aral-partners-geography [data-view="spb"]').getAttribute('aria-selected'),'true');
      }
      if(path.includes('/product/')){
        const link=page.locator('.document-slot').first().getByRole('link');
        const pdf=await context.request.get(await link.evaluate(a=>a.href));
        assert.equal(pdf.status(),200);assert((await pdf.body()).subarray(0,5).equals(Buffer.from('%PDF-')));
      }
    }
    assert.deepEqual(errors,[]);console.log(width+' px: '+pages.length+' routes passed');
  } finally {await context.close()}
}
(async()=>{
  const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH});
  try {
    const results=await Promise.allSettled([1440,1024,768,390].map(w=>run(w,browser)));
    for(const r of results) if(r.status==='rejected'){console.error(r.reason);process.exitCode=1}
  } finally {await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
