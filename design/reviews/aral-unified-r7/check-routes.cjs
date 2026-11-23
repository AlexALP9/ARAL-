const {chromium} = require('playwright');
const {createHash} = require('node:crypto');
const {mkdirSync, writeFileSync} = require('node:fs');
const {join} = require('node:path');
const base = process.env.ARAL_BASE || 'http://127.0.0.1:8123/';
const output = process.env.ARAL_QA_OUTPUT || 'review-output/aral-r7';
const home = 'design/hero/prototypes/hero-4s-k-views/ARAL_home_employer_feedback_r7_preview.html';
const company = 'index-employer-feedback-r7-preview.html';
const pagePath = name => 'pages/' + name + '-employer-feedback-r7-preview.html';
const catalog = pagePath('products');
const routes = [home, company+'#company', company+'#interesting', ...['drivers','advantages','partners','contacts'].map(pagePath),
    catalog+'#/catalog', catalog+'#/compare', ...Array.from({length:16}, (_,i)=>catalog+'#/product/ARAL-'+String(i+1).padStart(3,'0'))];
const failures = new Set(), local = new Set(), external = new Set(), heldPhotos = new Set(), documents = [], widths = [];
const browserOptions = {headless:true, executablePath:process.env.CHROME_PATH};

async function run() {
    mkdirSync(output, {recursive:true});
    const browser = await chromium.launch(browserOptions);
    try {
        for (const width of [1440,1024,768,390]) {
            const ctx = await browser.newContext({viewport:{width,height:900},hasTouch:width<=768});
            const page = await ctx.newPage();
            let route, views=0, images=0;
            const fail = msg => failures.add(width+' '+route+' '+msg);
            page.on('pageerror',e=>fail(e.message));
            page.on('response',r=>{if(r.status()>=400) fail(r.status()+' '+r.url())});
            page.on('requestfailed',r=>{if(r.failure()?.errorText!=='net::ERR_ABORTED') fail(r.failure()?.errorText+' '+r.url())});
            for (route of routes) {
                await page.goto(base+route,{waitUntil:'load'});
                await page.waitForFunction(()=>document.body.dataset.feedbackPreview==='r7');
                if (route.includes('/product/')) {
                    await page.locator('.item-id').filter({hasText:route.split('/').pop()}).waitFor();
                    await page.locator('#buyChooserBtn').click();
                    await page.locator('#purchaseChooser').waitFor();
                    for(const variant of await page.locator('[data-variant]').all()){
                        const sku=await variant.getAttribute('data-variant');
                        await variant.click();
                        if(!(await page.locator('#skuText').innerText()).includes(sku)) fail('SKU '+sku);
                        const img=page.locator('#detailStage img');
                        if(await img.count()) {
                            if(!await img.evaluate(async i=>{try{await i.decode();return i.naturalWidth>0}catch{return false}})) fail('SKU image '+sku);
                        } else if((await page.locator('#detailStage').innerText()).includes('ожидает сверки')) heldPhotos.add(sku);
                        else fail('missing SKU image '+sku);
                    }
                }
                if (route.endsWith('/compare')) await page.locator('.compare-title').waitFor();
                const audit = await page.evaluate(async()=>{
                    const imgs=[...document.images].filter(i=>i.getAttribute('src') && i.getBoundingClientRect().width>0);
                    const bad=[];
                    for(const i of imgs) { i.loading='eager'; try{await i.decode()}catch{bad.push(i.currentSrc.slice(0,240))} }
                    return {bad,count:imgs.length,wide:document.documentElement.scrollWidth-innerWidth,
                        links:[...document.querySelectorAll('a[href]')].filter(a=>a.getBoundingClientRect().width).map(a=>a.href)};
                });
                images+=audit.count;
                for(const src of audit.bad) fail('image '+src);
                if(audit.wide>2) fail('overflow '+audit.wide);
                for(const link of audit.links) {
                    if(link.startsWith(base)) {
                        local.add(link.slice(base.length));
                        if(new URL(link).pathname.endsWith('.html') && !new URL(link).pathname.includes('r7')) fail('old route '+link.slice(base.length));
                    } else if(/^https?:/.test(link)) external.add(link);
                }
                if (/ARAL-(008|016)$/.test(route)){
                    const id=route.split('/').pop();
                    const anchor=page.locator('.document-slot').first().getByRole('link');
                    const href=await anchor.getAttribute('href');
                    const policy=await page.evaluate(id=>window.ARALApprovedPdsR7[id],id);
                    const target=new URL(href,page.url()).href;
                    const [response] = await Promise.all([
                        ctx.waitForEvent('response',{predicate:r=>r.url()===target && r.request().isNavigationRequest(),timeout:12000}),
                        anchor.click()
                    ]);
                    const r=await ctx.request.get(target);
                    const data=await r.body(), sha=createHash('sha256').update(data).digest('hex');
                    if(response.status()!==200 || r.status()!==200 || !r.headers()['content-type']?.includes('application/pdf')
                       || data.subarray(0,5).toString()!=='%PDF-' || sha!==policy.sha256) fail('PDS '+id);
                    documents.push({width,id,sha,bytes:data.length,status:response.status()});
                    for(const popup of ctx.pages()) if(popup!==page) await popup.close();
                }
                views++;
            }
            widths.push({width,views,images});
            console.log(JSON.stringify(widths.at(-1)));
            if(width===1440){
                for (const path of [...local]) {
                    const url=new URL(path,base);
                    const r=await ctx.request.get(url.href);
                    if(!r.ok()) fail('link '+path+' '+r.status());
                    if(url.hash && !url.hash.startsWith('#/')){
                        await page.goto(url.href,{waitUntil:'load'});
                        const found=await page.evaluate(id=>!!document.getElementById(id)||!!document.getElementsByName(id).length,decodeURIComponent(url.hash.slice(1)));
                        if(!found && !['#company','#interesting'].includes(url.hash)) fail('missing anchor '+path);
                    }
                }
            }
            await ctx.close();
        }
    } finally {
        await browser.close();
        const report={widths,documents,local:[...local].sort(),external:[...external].sort(),heldPhotos:[...heldPhotos],failures:[...failures]};
        writeFileSync(join(output,'routes.json'),JSON.stringify(report,null,2));
        console.log('failures',report.failures);
        if(failures.size) process.exitCode=1;
    }
}
run().catch(e=>{console.error(e);process.exitCode=1});
