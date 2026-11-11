/* ARAL employer-feedback R1. Runs only on independently named preview HTML copies. The approved logo is embedded as PNG data to avoid SVG MIME/security failures on preview hosts. */
(()=>{'use strict';
 const script=document.currentScript;
 const ROOT=new URL(script?.dataset.feedbackRoot||'./',document.baseURI);
 const to=p=>new URL(p,ROOT).href;
 const routes={
  home:to('design/hero/prototypes/hero-4s-k-views/ARAL_home_employer_feedback_r1_preview.html'),
  company:to('index-employer-feedback-r1-preview.html#company'),
  products:to('pages/products-employer-feedback-r1-preview.html#/catalog'),
  drivers:to('pages/drivers-employer-feedback-r1-preview.html'),
  partners:to('pages/partners-employer-feedback-r1-preview.html'),
  advantages:to('pages/advantages-employer-feedback-r1-preview.html'),
  interesting:to('index-employer-feedback-r1-preview.html#interesting'),
  contacts:to('pages/contacts-employer-feedback-r1-preview.html#contacts-stores')
 };
 const linkMapping=[
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
    brand.innerHTML='<img src="data:image/png;base64,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" alt="Логотип ARAL" width="58" height="58" decoding="sync">';
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
 function install(){
  rewriteInternalLinks();
  installHeader();
  hideCoolantPublicReferences();
  makeRouteInspection();
  document.body.dataset.feedbackPreview='r1';
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
})();
