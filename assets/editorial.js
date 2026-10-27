'use strict';
/**
 * Approved editorial pages live as isolated versioned documents.
 * The host owns navigation while each approved document owns its styles/scripts.
 * Catalog and product detail remain in the core application.
 */
window.ARAL_EDITORIAL = (() => {
  const routes = Object.freeze({
    company:{file:'company-interesting-v8.html',hash:'company',title:'Компания'},
    interesting:{file:'company-interesting-v8.html',hash:'interesting',title:'Интересное'},
    advantages:{file:'advantages-04.html',title:'Преимущества ARAL'},
    partners:{file:'partners-11.html',title:'Для партнёров'},
    drivers:{file:'drivers-08.html',title:'Для водителей'},
    contacts:{file:'contacts-03.html',title:'Контакты'},
    'products-design':{file:'products-r15.html',title:'Продукция · утверждённая редакция'}
  });
  const links=[['company','Компания'],['catalog','Каталог'],['drivers','Для водителей'],['partners','Для партнёров'],['advantages','Преимущества'],['interesting','Интересное'],['contacts','Контакты']];
  let observer;
  function render(name,target){
    const page=routes[name]; if(!page)return false;
    if(observer){observer.disconnect();observer=null}
    const nav=links.map(([key,label])=>'<a href="#/'+key+'"'+(key===name?' aria-current="page"':'')+'>'+label+'</a>').join('');
    target.innerHTML='<section class="approved-shell"><div class="approved-shell-heading wrap"><span class="kicker">ARAL / УТВЕРЖДЁННЫЕ МАТЕРИАЛЫ</span><h1>'+page.title+'</h1><nav aria-label="Разделы ARAL">'+nav+'</nav></div><iframe class="approved-frame" id="approved-frame" title="ARAL — '+page.title+'" loading="eager"></iframe></section>';
    const frame=target.querySelector('#approved-frame');
    frame.addEventListener('load',()=>{
      try {
        const doc=frame.contentDocument;if(!doc)return;
        const measure=()=>{const h=Math.max(doc.documentElement.scrollHeight,doc.body?.scrollHeight||0,550);frame.style.height=h+'px'};
        measure(); if(observer)observer.disconnect();observer=new ResizeObserver(measure);observer.observe(doc.body||doc.documentElement);
        // Editorial snippets can contain links back to the main app.
        doc.querySelectorAll('[data-host-route]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();location.hash='#/'+link.dataset.hostRoute}));
      } catch(e){console.warn('Unable to measure editorial frame',e)}
    });
    frame.src='./pages/'+encodeURIComponent(page.file)+(page.hash?'#'+page.hash:'');
    return true;
  }
  return Object.freeze({render,routes});
})();
