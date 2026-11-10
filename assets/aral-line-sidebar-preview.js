/* ARAL LineSidebar — vanilla JS adaptation of React Bits distance-based effect.
 * Smooth falloff p*p*(3-2*p), frame-rate independent exponential easing,
 * original links left intact. 24 targeted anchors on the homepage.
 */
(()=>{
  'use strict';
  if(window.ARALLineSidebarPreview?.installed)return;
  const script=document.currentScript;
  const root=script?.dataset.siteRoot||'';
  const aliases=[
    ['ARAL_home_contour_2A_footer_preview.html','ARAL_home_line_sidebar_preview.html'],
    ['products-r15-contour-2A-footer-preview.html','products-r15-line-sidebar-preview.html'],
    ['index-footer-preview.html','index-line-sidebar-preview.html'],
    ['drivers-08-footer-preview.html','drivers-08-line-sidebar-preview.html'],
    ['partners-11-footer-preview.html','partners-11-line-sidebar-preview.html'],
    ['advantages-04-footer-preview.html','advantages-04-line-sidebar-preview.html'],
    ['contacts-03-footer-preview.html','contacts-03-line-sidebar-preview.html']
  ];
  const stableLinks=()=>[...document.querySelectorAll('a[href]')];
  for(const a of stableLinks()){
    let href=a.getAttribute('href');
    if(!href||/^(https?:|mailto:|tel:|#)/i.test(href))continue;
    for(const [oldName,newName] of aliases){
      if(href.includes(oldName))href=href.replaceAll(oldName,newName);
    }
    a.setAttribute('href',href);
  }
  const groups=[];
  // Scope link groups to the existing approved layout, not the global nav.
  const specs=[
    ['#audiences .audience-tile__body',':scope > a',false],
    ['#featured .section-header',':scope > a.navcta',false],
    ['#about .brand-copy',':scope > a.navcta',false],
    ['#technology .tech-story__copy',':scope > a.tech-link',false],
    ['#b2b > p',':scope > a.navcta',false],
    ['#where .purchase-card',':scope > a',false],
    ['.aral-global-footer .af-lead',':scope > a',false],
    ['.aral-global-footer .af-links',':scope > a',true],
    ['.aral-global-footer .af-news',':scope > a.af-teaser',false],
    ['.aral-global-footer .af-contact',':scope > a',false],
    ['.aral-global-footer .af-bottom',':scope > a',false]
  ];
  let count=0, indexedCount=0;
  for(const [groupSelector,linkSelector,indexed] of specs){
    for(const host of document.querySelectorAll(groupSelector)){
      const links=[...host.querySelectorAll(linkSelector)].filter(a=>a.tagName==='A');
      if(!links.length)continue;
      const entries=links.map((link,i)=>{
        link.classList.add('aral-line-link');
        if(link.closest('.aral-global-footer'))link.classList.add('aral-line-footer-link');
        if(link.classList.contains('af-teaser'))link.classList.add('aral-line-article');
        if(indexed){
          link.classList.add('aral-line-indexed');
          link.dataset.aralLineIndex=String(i+1).padStart(2,'0');
          indexedCount++;
        }
        const span=document.createElement('span');
        span.className='aral-line-content';
        while(link.firstChild)span.appendChild(link.firstChild);
        link.appendChild(span);
        link.style.setProperty('--aral-line-x','0px');
        link.style.setProperty('--aral-line-effect','0');
        link.style.setProperty('--aral-line-marker-scale','.5');
        count++;
        return {link,effect:0,target:0,focus:false};
      });
      const group={host,entries};
      groups.push(group);
      host.addEventListener('pointermove',e=>{
        if(!enabled()||e.pointerType!=='mouse')return;
        for(const entry of entries){
          const rect=entry.link.getBoundingClientRect();
          const y=rect.top+rect.height/2;
          const dy=Math.abs(e.clientY-y);
          // Horizontal proximity only matters outside the link's unchanged hit area.
          const dx=Math.max(0,rect.left-e.clientX,e.clientX-rect.right);
          const distance=Math.hypot(dy,dx*.85);
          const p=Math.max(0,1-distance/100);
          entry.target=p*p*(3-2*p);
        }
        schedule();
      },{passive:true});
      host.addEventListener('pointerleave',()=>{
        for(const entry of entries)entry.target=0;
        schedule();
      },{passive:true});
      host.addEventListener('focusin',e=>{
        const a=e.target.closest?.('a.aral-line-link');
        const target=entries.find(entry=>entry.link===a);
        if(target){target.focus=true;schedule()}
      });
      host.addEventListener('focusout',e=>{
        const a=e.target.closest?.('a.aral-line-link');
        const target=entries.find(entry=>entry.link===a);
        if(target){target.focus=false;schedule()}
      });
    }
  }
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const pointer=matchMedia('(hover: hover) and (pointer: fine)');
  const enabled=()=>pointer.matches&&!reduced.matches&&!document.hidden;
  let raf=0,last=0;
  function stop(){
    if(raf)cancelAnimationFrame(raf);
    raf=0;last=0;
    for(const group of groups)for(const entry of group.entries){
      entry.effect=0;entry.target=0;
      entry.link.style.setProperty('--aral-line-x','0px');
      entry.link.style.setProperty('--aral-line-effect','0');
      entry.link.style.setProperty('--aral-line-marker-scale','.5');
    }
  }
  function tick(now){
    raf=0;
    if(!enabled()){stop();return}
    const dt=Math.min(Math.max(0,(now-(last||now))/1000),.05);
    last=now;
    const k=1-Math.exp(-dt/.12);
    let moving=false;
    for(const group of groups)for(const e of group.entries){
      if(!e.link.isConnected)continue;
      const target=Math.max(e.target,e.focus?1:0);
      const next=e.effect+(target-e.effect)*k;
      e.effect=Math.abs(target-next)<.0015?target:next;
      // 8px for text CTAs, 6px for grouped footer nav, 4px for contact data.
      const cap=e.link.closest('.af-contact')?4:e.link.closest('.aral-global-footer')?6:8;
      e.link.style.setProperty('--aral-line-x',(cap*e.effect).toFixed(2)+'px');
      e.link.style.setProperty('--aral-line-effect',e.effect.toFixed(4));
      e.link.style.setProperty('--aral-line-marker-scale',(.5+.5*e.effect).toFixed(4));
      if(Math.abs(target-e.effect)>.0015)moving=true;
    }
    if(moving)raf=requestAnimationFrame(tick);
    else last=0;
  }
  function schedule(){if(enabled()&&!raf)raf=requestAnimationFrame(tick)}
  reduced.addEventListener('change',()=>!enabled()?stop():schedule());
  pointer.addEventListener('change',()=>!enabled()?stop():schedule());
  document.addEventListener('visibilitychange',()=>!enabled()?stop():schedule());
  window.addEventListener('blur',()=>{for(const group of groups)for(const e of group.entries)e.target=0;schedule()});
  window.ARALLineSidebarPreview=Object.freeze({installed:true,count,indexedCount,groups:groups.length,maxShift:8,radius:100,smoothing:120});
})();