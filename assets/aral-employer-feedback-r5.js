/* ARAL employer-feedback R5. Runs only on independently named preview HTML copies. Use a verified ARAL logo SVG; the old embedded raster was malformed and did not decode. */
(()=>{'use strict';
 const script=document.currentScript;
 const ROOT=new URL(script?.dataset.feedbackRoot||'./',document.baseURI);
 const to=p=>new URL(p,ROOT).href;
 const routes={
  home:to('design/hero/prototypes/hero-4s-k-views/ARAL_home_employer_feedback_r5_preview.html'),
  company:to('index-employer-feedback-r5-preview.html#company'),
  products:to('pages/products-employer-feedback-r5-preview.html#/catalog'),
  drivers:to('pages/drivers-employer-feedback-r5-preview.html'),
  partners:to('pages/partners-employer-feedback-r5-preview.html'),
  advantages:to('pages/advantages-employer-feedback-r5-preview.html'),
  interesting:to('index-employer-feedback-r5-preview.html#interesting'),
  contacts:to('pages/contacts-employer-feedback-r5-preview.html#contacts-stores')
 };
 const linkMapping=[
 ['index-employer-feedback-r4-preview.html',to('index-employer-feedback-r5-preview.html')],
 ['pages/products-employer-feedback-r4-preview.html',to('pages/products-employer-feedback-r5-preview.html')],
 ['pages/contacts-employer-feedback-r4-preview.html',to('pages/contacts-employer-feedback-r5-preview.html')],
 ['pages/drivers-employer-feedback-r4-preview.html',to('pages/drivers-employer-feedback-r5-preview.html')],
 ['pages/partners-employer-feedback-r4-preview.html',to('pages/partners-employer-feedback-r5-preview.html')],
 ['pages/advantages-employer-feedback-r4-preview.html',to('pages/advantages-employer-feedback-r5-preview.html')],
 ['index-employer-feedback-r3-preview.html',to('index-employer-feedback-r5-preview.html')],
 ['pages/products-employer-feedback-r3-preview.html',to('pages/products-employer-feedback-r5-preview.html')],
 ['pages/contacts-employer-feedback-r3-preview.html',to('pages/contacts-employer-feedback-r5-preview.html')],
 ['pages/drivers-employer-feedback-r3-preview.html',to('pages/drivers-employer-feedback-r5-preview.html')],
 ['pages/partners-employer-feedback-r3-preview.html',to('pages/partners-employer-feedback-r5-preview.html')],
 ['pages/advantages-employer-feedback-r3-preview.html',to('pages/advantages-employer-feedback-r5-preview.html')],
 ['index-employer-feedback-r1-preview.html',to('index-employer-feedback-r5-preview.html')],
 ['pages/products-employer-feedback-r1-preview.html',to('pages/products-employer-feedback-r5-preview.html')],
 ['pages/drivers-employer-feedback-r1-preview.html',to('pages/drivers-employer-feedback-r5-preview.html')],
 ['pages/partners-employer-feedback-r1-preview.html',to('pages/partners-employer-feedback-r5-preview.html')],
 ['pages/advantages-employer-feedback-r1-preview.html',to('pages/advantages-employer-feedback-r5-preview.html')],
 ['pages/contacts-employer-feedback-r1-preview.html',to('pages/contacts-employer-feedback-r5-preview.html')],
 ['design/hero/prototypes/hero-4s-k-views/ARAL_home_contour_2A_footer_preview.html',routes.home],
 ['design/hero/prototypes/hero-4s-k-views/ARAL_home_markup_preview.html',routes.home],
 ['index-footer-preview.html',routes.company],
 ['index-markup-preview.html',routes.company],
 ['pages/products-r15-contour-2A-footer-preview.html',routes.products],
 ['pages/products-r15-markup-preview.html',routes.products],
 ['pages/drivers-08-footer-preview.html',routes.drivers],
 ['pages/drivers-08-markup-preview.html',routes.drivers],
 ['pages/partners-11-footer-preview.html',routes.partners],
 ['pages/partners-11-markup-preview.html',routes.partners],
 ['pages/advantages-04-footer-preview.html',routes.advantages],
 ['pages/advantages-04-markup-preview.html',routes.advantages],
 ['pages/contacts-03-footer-preview.html',routes.contacts],
 ['pages/contacts-03-markup-preview.html',routes.contacts],
 ];
 const menu=[
  ['Продукция',routes.products,'products'],
  ['О бренде',routes.company,'company'],
  ['Где купить',routes.contacts,'contacts'],
  ['Сотрудничество',routes.partners,'partners'],
  ['Преимущества ARAL',routes.advantages,'advantages']
 ];
 function rewriteInternalLinks(){
  const rootPath=ROOT.pathname;
  document.querySelectorAll('a[href]').forEach(a=>{
   const raw=a.getAttribute('href');
   if(!raw||raw.startsWith('#')||/^(?:mailto:|tel:|javascript:)/i.test(raw))return;
   let old;try{old=new URL(raw,document.baseURI)}catch{return}
   if(old.origin!==ROOT.origin||!old.pathname.startsWith(rootPath))return;
   for(const [from,target] of linkMapping){
    if(old.pathname.endsWith('/'+from)){
     const u=new URL(target);
     if(old.hash)u.hash=old.hash;
     a.href=u.href;return;
    }
   }
  });
 }
 function installHeader(){
  const headers=[...document.querySelectorAll('header.home-nav,header.site-header,header.nav')];
  headers.forEach(header=>{
   const brand=header.querySelector('a.home-brand,a.brand');
   if(brand){
    brand.href=routes.home;brand.setAttribute('aria-label','ARAL — на главную с HERO-анимацией');
    brand.classList.add('aral-preview-brand');
    brand.innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Aral_Logo.svg" alt="Логотип ARAL" width="58" height="58" decoding="async">';
   }
   const nav=header.querySelector('nav.home-menu,nav.navlinks,nav.menu');
   if(!nav)return;
   const path=location.pathname;
   const current=path.includes('products-')?'products':path.includes('partners-')?'partners':path.includes('advantages-')?'advantages':path.includes('contacts-')?'contacts':path.includes('index-employer-')?'company':null;
   nav.setAttribute('aria-label','Основные разделы ARAL');
   nav.innerHTML='<span class="aral-preview-pill" aria-hidden="true"></span>'+menu.map(([name,url,key])=>'<a data-aral-nav="'+key+'" href="'+url+'"'+(current===key?' aria-current="page"':'')+'>'+name+'</a>').join('');
   const pill=nav.querySelector('.aral-preview-pill');
   const links=[...nav.querySelectorAll('a')];
   const active=nav.querySelector('[aria-current="page"]');
   const mobile=()=>matchMedia('(max-width:900px)').matches;
   function move(el){
    if(mobile()||!el){pill.style.opacity='0';return}
    const nr=nav.getBoundingClientRect(),ar=el.getBoundingClientRect();
    pill.style.width=ar.width+'px';
    pill.style.transform='translate('+Math.round(ar.left-nr.left)+'px,-50%)';
    pill.style.opacity='1';
   }
   links.forEach(a=>{
    a.addEventListener('mouseenter',()=>move(a));
    a.addEventListener('focus',()=>move(a));
   });
   nav.addEventListener('mouseleave',()=>move(active));
   nav.addEventListener('focusout',e=>{if(!nav.contains(e.relatedTarget))move(active)});
   window.addEventListener('resize',()=>move(active));
   requestAnimationFrame(()=>move(active));
  });
 }
 function hideCoolantPublicReferences(){
  const obsolete=/Silikatfrei\s*G12|охлаждающ(?:ие|ая|их)\s+жидкост(?:и|ь|ей)|антифриз/iu;
  document.querySelectorAll('.mini,.part-benefit').forEach(el=>{
   if(obsolete.test(el.textContent||'')){
    if(el.classList.contains('mini'))el.remove();
    else{
     const p=el.querySelector('p');
     if(p) p.textContent='В каталоге представлены масла для легковых автомобилей и грузового транспорта. Ассортимент можно отфильтровать по типу транспорта и техническим характеристикам.';
    }
   }
  });
  document.querySelectorAll('p').forEach(p=>{
    if(/Для Aral Silikatfrei G12/.test(p.textContent||''))p.remove();
  });
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const textNodes=[];while(walker.nextNode())textNodes.push(walker.currentNode);
  for(const t of textNodes){
   if(!t.parentElement||['SCRIPT','STYLE','NOSCRIPT'].includes(t.parentElement.tagName))continue;
   const old=t.nodeValue||'';
   const next=old
    .replace(/(?:,\s*)?и технические жидкости/giu,'')
    .replace(/,\s*охлаждающие жидкости/giu,'')
    .replace(/и одну охлаждающую жидкость/giu,'')
    .replace(/17 продуктов для формирования закупочного перечня/giu,'16 моторных масел для формирования закупочного перечня');
   if(next!==old)t.nodeValue=next;
  }
 }
 function makeRouteInspection(){
  const btn=document.createElement('button');
  btn.className='aral-review-toggle';btn.type='button';btn.textContent='Показать пути к скрытым разделам';btn.setAttribute('aria-pressed','false');
  document.body.appendChild(btn);
  function mark(){
   let n=0;
   document.querySelectorAll('main a[href],.aral-global-footer a[href]').forEach(a=>{
    if(a.classList.contains('aral-review-toggle'))return;
    let u;try{u=new URL(a.href)}catch{return}
    let category=u.pathname.includes('drivers-employer-feedback-')?'ДЛЯ ВОДИТЕЛЕЙ':u.hash==='#interesting'?'ИНТЕРЕСНОЕ':null;
    if(!category)return;
    n++;a.classList.add('aral-review-route');a.dataset.aralReviewTip=category+' · '+n;
   });
   return n;
  }
  mark();
  function update(on){
   document.body.classList.toggle('aral-review-links-on',on);
   btn.setAttribute('aria-pressed',String(on));
   btn.textContent=on?'Скрыть подсветку переходов':'Показать пути к скрытым разделам';
  }
  btn.addEventListener('click',()=>update(!document.body.classList.contains('aral-review-links-on')));
  update(new URLSearchParams(location.search).get('review')==='links');
 }
 function setDotLink(el){
  if(!el||el.classList.contains('aral-r3-dot-link'))return;
  el.classList.add('aral-r3-dot-link');
  el.querySelectorAll('[aria-hidden="true"]').forEach(n=>{if(n.textContent?.trim()==='↗')n.remove()});
  const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  for(const n of nodes){if(n.nodeValue?.includes('↗'))n.nodeValue=n.nodeValue.replace(/\\s*↗/g,'')}
 }
 function applyR5ContentReview(){
  document.querySelectorAll('#audiences .audience-tile__body a').forEach(setDotLink);
  for(const foot of document.querySelectorAll('.aral-global-footer')){
   const lead=foot.querySelector('.af-lead');
   if(lead){const link=lead.querySelector('a');if(link){lead.replaceChildren(link);setDotLink(link)}}
   // Retain all original editorial teasers: Интересное, Каталог, Техническая информация (PDS / SDS).
   foot.querySelectorAll('.af-news .af-teaser').forEach(link=>link.classList.remove('aral-r3-dot-link'));
   const contact=foot.querySelector('.af-contact');
   const partner=contact?.querySelector('a.af-cta:not(.aral-r5-driver-cta)');
   if(partner){
    partner.classList.remove('aral-r3-dot-link');
    partner.textContent='Для партнёров';
    partner.classList.add('aral-r5-footer-cta');
    partner.setAttribute('data-magnetic','footer-partners');
    let driver=contact.querySelector('a.aral-r5-driver-cta');
    if(!driver){
     driver=document.createElement('a');
     driver.className='af-cta aral-r5-driver-cta';
     partner.insertAdjacentElement('afterend',driver);
    }
    driver.href=routes.drivers;
    driver.classList.remove('aral-r3-dot-link');
    driver.textContent='Для автомобилистов';
    driver.classList.add('aral-r5-footer-cta');
    driver.setAttribute('data-magnetic','footer-motorists');
   }
  }
  document.querySelector('.aral-contour-compare')?.remove();
 }
 function install(){
  rewriteInternalLinks();
  installHeader();
  hideCoolantPublicReferences();
  applyR5ContentReview();
  if(new URLSearchParams(location.search).get('review')==='links')makeRouteInspection();
  setTimeout(applyR5ContentReview,0);
  document.body.dataset.feedbackPreview='r5';
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
})();
