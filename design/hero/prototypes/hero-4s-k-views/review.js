'use strict';
(()=>{
const scene=document.querySelector('.aral-scene'),camera=scene.querySelector('.camera');
const products=Object.fromEntries([...scene.querySelectorAll('[data-product]')].map(n=>[n.dataset.product,n]));
const slider=document.querySelector('#time'),readout=document.querySelector('#readout'),phase=document.querySelector('#phase');
const reduce=matchMedia('(prefers-reduced-motion: reduce)'),mobile=matchMedia('(max-width:700px)');let raf=0,autoStarted=false;
const DURATION=4.8,TIME_SCALE=1.2;
const params=new URLSearchParams(location.search),fixed=params.has('t')?Number(params.get('t')):null;
if(params.get('scene')==='1')document.body.classList.add('scene-only');
const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>{x=clamp(x);return x*x*(3-2*x)},mix=(a,b,p)=>a+(b-a)*p;
// Single continuous dolly: no stop/start easing at intermediate storyboard marks.
function cameraAt(t){
 const u=clamp(t/4),e=1-Math.pow(1-u,3),s=1+4.2*Math.pow(1-u,3);
 const focus=69+4.5*e,target=50+23.5*e;
 return {s,x:0,y:target-62-s*(focus-62),r:-12*Math.pow(1-clamp(t/1.6),3)};
}
// Gentle opening 2.5D turn; no photograph replacement or label crossfade.
function orbitAt(t){return 1-smooth(t/.85)}
function drawMain(t){
 const main=products['main-1l'],p=reduce.matches?0:orbitAt(t);
 main.style.setProperty("--opening",p);
 main.dataset.view='original-front';main.dataset.orbit=String(7*p);
 document.querySelector('#orbit-readout').value=p?'K В· РїСЂР°РІР°СЏ Р±РѕРєРѕРІР°СЏ РіСЂР°РЅСЊ':'РќРµРїСЂРµСЂС‹РІРЅС‹Р№ РѕС‚СЉРµР·Рґ В· РёСЃС…РѕРґРЅР°СЏ K';
}
function draw(seconds){const elapsed=Math.max(0,Math.min(DURATION,seconds));let t=Math.round(elapsed/TIME_SCALE*1e9)/1e9;const k=cameraAt(t),travel=mobile.matches?.78:1;camera.style.transform=`translate(${k.x*travel}%,${k.y*travel}%) rotate(${k.r}deg) scale(${1+(k.s-1)*travel})`;
 products['main-1l'].style.opacity='1';
 drawMain(t);
 for(const [name,sign,start] of [['second-1l',1,2.3],['third-1l',-1,2.42]]){const p=smooth((t-start)/(3-start));products[name].style.opacity=String(p);products[name].style.transform=`translate(${sign*(1-p)*82}%,${(1-p)*4}%) scale(${.96+.04*p})`;}
 for(const [name,sign] of [['pack-20l',1],['pack-5l',-1],['barrel',0]]){const p=smooth((t-3.4)/.6);products[name].style.opacity=String(p);products[name].style.transform=`translate(${sign*(1-p)*18}%,${(1-p)*(name==='barrel'?12:5)}%) scale(${.97+.03*p})`;}
 slider.value=elapsed.toFixed(2);readout.value=elapsed.toFixed(2)+' СЃ';phase.textContent=t<.5?'РњР°РєСЂРѕ: РіР»Р°РІРЅР°СЏ 1L':t<1.5?'РџРѕРґСЉС‘Рј РєР°РґСЂР°: РїР»РµС‡Рѕ Рё РєСЂС‹С€РєР°':t<2.3?'РћС‚СЉРµР·Рґ Рє С„СЂРѕРЅС‚Р°Р»СЊРЅРѕРјСѓ product shot':t<3?'Р’РµРµСЂРЅРѕРµ СЂР°СЃРєСЂС‹С‚РёРµ 3 Г— 1L':t<3.4?'РџР°СѓР·Р°: СЂРѕРІРЅРѕ 3 Г— 1L':t<4?'Р¤РёРЅР°Р»СЊРЅРѕРµ СЂР°СЃРєСЂС‹С‚РёРµ 20L + 5L + Р±РѕС‡РєРё':'Р¤РёРЅР°Р»СЊРЅР°СЏ РєРѕРјРїРѕР·РёС†РёСЏ: 6 СѓРїР°РєРѕРІРѕРє';
 scene.dataset.time=elapsed.toFixed(2);
}
function stop(){cancelAnimationFrame(raf);raf=0}function play(){stop();if(reduce.matches){draw(DURATION);return}const start=performance.now();const tick=now=>{const t=Math.min(DURATION,(now-start)/1000);draw(t);if(t<DURATION)raf=requestAnimationFrame(tick);else {raf=0;parallax();}};draw(0);raf=requestAnimationFrame(tick)}
document.querySelector('#play').onclick=play;document.querySelector('#final').onclick=()=>{stop();draw(DURATION)};slider.oninput=()=>{stop();draw(Number(slider.value))};
for(const t of [0,.8,1.6,2.3,2.6,3,3.4,4].map(t=>t*TIME_SCALE)){const b=document.createElement('button');b.textContent=(Number.isInteger(t*10)?t.toFixed(1):String(t))+' СЃ';b.onclick=()=>{stop();draw(t)};document.querySelector('#keyframes').append(b)}
function parallax(x=0,y=0){const enabled=!reduce.matches&&!mobile.matches&&Number(scene.dataset.time)<DURATION;for(const [name,depth] of [['barrel',.35],['pack-20l',.5],['pack-5l',.5],['second-1l',.8],['third-1l',.8]]){const dx=enabled?x*4*depth:0,dy=enabled?y*2*depth:0;products[name].style.translate=name==='barrel'?`calc(-50% + ${dx}px) ${dy}px`:`${dx}px ${dy}px`;}}
scene.addEventListener('pointermove',event=>{const b=scene.getBoundingClientRect();parallax((event.clientX-b.left)/b.width*2-1,(event.clientY-b.top)/b.height*2-1)});scene.addEventListener('pointerleave',()=>parallax());
reduce.addEventListener('change',()=>{stop();parallax();draw(DURATION)});mobile.addEventListener('change',()=>{parallax();draw(Number(slider.value))});document.addEventListener('visibilitychange',()=>{if(document.hidden&&fixed===null){stop();draw(DURATION)}});
const loadedPhotos=new Map();
const objectUrls=[];
async function resolveSvgPhoto(img){
 const svgUrl=new URL(img.getAttribute('src'),location.href);
 if(!svgUrl.pathname.endsWith('.svg')){await img.decode();return;}
 if(!loadedPhotos.has(svgUrl.href))loadedPhotos.set(svgUrl.href,(async()=>{
  const response=await fetch(svgUrl);if(!response.ok)throw new Error('SVG '+response.status);
  const doc=new DOMParser().parseFromString(await response.text(),'image/svg+xml');
  if(doc.querySelector('parsererror'))throw new Error('Invalid SVG');
  await Promise.all([...doc.querySelectorAll('image')].map(async node=>{
   const href=node.getAttribute('href');if(href.startsWith('data:'))return;
   const asset=await fetch(new URL(href,svgUrl));if(!asset.ok)throw new Error('Photo '+asset.status);
   const data=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;asset.blob().then(blob=>reader.readAsDataURL(blob),reject);});
   node.setAttribute('href',data);
  }));
  const url=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(doc.documentElement)],{type:'image/svg+xml'}));objectUrls.push(url);return url;
 })());
 img.src=await loadedPhotos.get(svgUrl.href);await img.decode();
}
window.addEventListener('pagehide',()=>{stop();objectUrls.forEach(url=>URL.revokeObjectURL(url))});
draw(fixed!==null&&Number.isFinite(fixed)?fixed:reduce.matches?DURATION:0);Promise.all([...scene.querySelectorAll('img')].map(resolveSvgPhoto).concat((async()=>{const side=new Image();side.src='assets/k-views/K_side.png';await side.decode();})())).then(()=>{scene.classList.add('ready');if(fixed!==null&&Number.isFinite(fixed))draw(fixed);else if(!document.hidden&&!autoStarted){autoStarted=true;play();}else draw(DURATION)}).catch(()=>{phase.textContent='РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ С„РѕС‚РѕРіСЂР°С„РёРё вЂ” РїСЂРѕСЃРјРѕС‚СЂ РѕСЃС‚Р°РЅРѕРІР»РµРЅ';});
})();
