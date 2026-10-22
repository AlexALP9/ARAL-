'use strict';
(()=>{
const scene=document.querySelector('.aral-scene'),camera=scene.querySelector('.camera');
const products=Object.fromEntries([...scene.querySelectorAll('[data-product]')].map(n=>[n.dataset.product,n]));
const slider=document.querySelector('#time'),readout=document.querySelector('#readout'),phase=document.querySelector('#phase');
const reduce=matchMedia('(prefers-reduced-motion: reduce)'),mobile=matchMedia('(max-width:700px)');let raf=0;
const params=new URLSearchParams(location.search),fixed=params.has('t')?Number(params.get('t')):null;
if(params.get('scene')==='1')document.body.classList.add('scene-only');
const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>{x=clamp(x);return x*x*(3-2*x)},mix=(a,b,p)=>a+(b-a)*p;
// Camera roll is in-plane. Orbit degrees below are an artistic control, not calibrated photogrammetry.
const keys=[{t:0,s:5.3,x:0,y:-69,r:-17},{t:.5,s:5.6,x:0,y:-6,r:-9},{t:1,s:5,x:0,y:-10,r:-4},{t:1.5,s:2.2,x:0,y:-28,r:-1},{t:2.3,s:1.6,x:0,y:-18,r:0},{t:3,s:1.35,x:0,y:-12,r:0},{t:3.4,s:1.35,x:0,y:-12,r:0},{t:4,s:1,x:0,y:0,r:0}];
function cameraAt(t){let i=keys.findIndex(k=>k.t>=t);if(i<=0)return keys[0];const a=keys[i-1],b=keys[i],p=smooth((t-a.t)/(b.t-a.t));return {s:mix(a.s,b.s,p),x:mix(a.x,b.x,p),y:mix(a.y,b.y,p),r:mix(a.r,b.r,p)}}
function orbitAt(t){return t<.55?0:t<.78?smooth((t-.55)/.23):t<.95?1:t<1.18?1-smooth((t-.95)/.23):0}
function drawMain(t){const p=reduce.matches?0:orbitAt(t),main=products['main-1l'];
 main.style.setProperty('--front-alpha',1-p);main.style.setProperty('--right-alpha',p);
 // One light path, driven by the same timeline in both views and the reflected copy.
 const light=reduce.matches?0:Math.sin(Math.PI*clamp(t/1.3));
 main.style.setProperty('--glint-alpha',(.18*light).toFixed(4));main.style.setProperty('--glint-position',`${100-100*clamp(t/1.3)}%`);
 main.style.setProperty('--shadow-x',`${(1.5*p).toFixed(3)}px`);main.style.setProperty('--shadow-width',(1+.05*p).toFixed(4));main.style.setProperty('--reflection-alpha',(.12-.015*p).toFixed(4));
 main.dataset.orbit=(p*7).toFixed(2);main.dataset.view=p===0?'front':p===1?'34-right':'crossfade';
 document.querySelector('#orbit-readout').value=`Орбита ${(p*7).toFixed(1)}° · ${p===0?'front':p===1?'¾ right':'кросс-фейд'}`;
}
function draw(t){t=Math.max(0,Math.min(4,t));const k=cameraAt(t),travel=mobile.matches?.78:1;camera.style.transform=`translate(${k.x*travel}%,${k.y*travel}%) rotate(${k.r}deg) scale(${1+(k.s-1)*travel})`;
 products['main-1l'].style.opacity='1';
 drawMain(t);
 for(const [name,sign,start] of [['second-1l',1,2.3],['third-1l',-1,2.42]]){const p=smooth((t-start)/(3-start));products[name].style.opacity=String(p);products[name].style.transform=`translate(${sign*(1-p)*82}%,${(1-p)*4}%) scale(${.96+.04*p})`;}
 for(const [name,sign] of [['pack-20l',1],['pack-5l',-1],['barrel',0]]){const p=smooth((t-3.4)/.6);products[name].style.opacity=String(p);products[name].style.transform=`translate(${sign*(1-p)*18}%,${(1-p)*(name==='barrel'?12:5)}%) scale(${.97+.03*p})`;}
 slider.value=t.toFixed(2);readout.value=t.toFixed(2)+' с';phase.textContent=t<.5?'Макро: главная 1L':t<1.5?'Подъём кадра: плечо и крышка':t<2.3?'Отъезд к фронтальному product shot':t<3?'Веерное раскрытие 3 × 1L':t<3.4?'Пауза: ровно 3 × 1L':t<4?'Финальное раскрытие 20L + 5L + бочки':'Финальная композиция: 6 упаковок';
 scene.dataset.time=t.toFixed(2);
}
function stop(){cancelAnimationFrame(raf);raf=0}function play(){stop();if(reduce.matches){draw(4);return}const start=performance.now();const tick=now=>{const t=Math.min(4,(now-start)/1000);draw(t);if(t<4)raf=requestAnimationFrame(tick)};draw(0);raf=requestAnimationFrame(tick)}
document.querySelector('#play').onclick=play;document.querySelector('#final').onclick=()=>{stop();draw(4)};slider.oninput=()=>{stop();draw(Number(slider.value))};
for(const t of [0,.5,.665,.85,1.065,1.5,2.3,3,3.4,4]){const b=document.createElement('button');b.textContent=(Number.isInteger(t*10)?t.toFixed(1):String(t))+' с';b.onclick=()=>{stop();draw(t)};document.querySelector('#keyframes').append(b)}
function parallax(x=0,y=0){const enabled=!reduce.matches&&!mobile.matches;for(const [name,depth] of [['barrel',.35],['pack-20l',.5],['pack-5l',.5],['second-1l',.8],['third-1l',.8]]){const dx=enabled?x*4*depth:0,dy=enabled?y*2*depth:0;products[name].style.translate=name==='barrel'?`calc(-50% + ${dx}px) ${dy}px`:`${dx}px ${dy}px`;}}
scene.addEventListener('pointermove',event=>{const b=scene.getBoundingClientRect();parallax((event.clientX-b.left)/b.width*2-1,(event.clientY-b.top)/b.height*2-1)});scene.addEventListener('pointerleave',()=>parallax());
reduce.addEventListener('change',()=>{stop();parallax();draw(4)});mobile.addEventListener('change',()=>{parallax();draw(Number(slider.value))});document.addEventListener('visibilitychange',()=>{if(document.hidden&&fixed===null){stop();draw(4)}});
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
draw(fixed!==null&&Number.isFinite(fixed)?fixed:reduce.matches?4:0);Promise.all([...scene.querySelectorAll('img')].map(resolveSvgPhoto)).then(()=>{scene.classList.add('ready');if(fixed!==null&&Number.isFinite(fixed))draw(fixed);else if(!document.hidden)play();else draw(4)}).catch(error=>{stop();phase.textContent="Не удалось загрузить фото. Запустите HTTP-сервер из корня репозитория.";scene.dataset.loadError=String(error)});
})();
