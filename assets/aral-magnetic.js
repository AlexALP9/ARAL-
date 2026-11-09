/* ARAL shared Magnetic Button — no React. Active CTA only; 5px cap; spring return.
   Stable, untransformed hit box prevents chasing the pointer. */
(()=>{'use strict';
if(window.ARALMagneticButtons?.initialized)return;
const strength=.17,cap=5,radius=22,deadzone=6;
const fine=matchMedia('(hover:hover) and (pointer:fine)');
const reduced=matchMedia('(prefers-reduced-motion:reduce)');
const allow=()=>fine.matches&&!reduced.matches;
const clamp=(n,a,b)=>Math.max(a,Math.min(n,b));
const states=new Map();let raf=0,stamp=0,active=null;
const mouse={valid:false,x:0,y:0};
function state(el){let s=states.get(el);if(!s){s={el,x:0,y:0,vx:0,vy:0,scale:1,vs:0,down:false};states.set(el,s)}return s}
function rect(el){const s=state(el),r=el.getBoundingClientRect();return {l:r.left-s.x,t:r.top-s.y,r:r.right-s.x,b:r.bottom-s.y,cx:(r.left+r.right)/2-s.x,cy:(r.top+r.bottom)/2-s.y}}
function distance(r){return Math.hypot(Math.max(r.l-mouse.x,0,mouse.x-r.r),Math.max(r.t-mouse.y,0,mouse.y-r.b))}
function select(){
 if(!mouse.valid||!allow())return null;
 const a=[];
 for(const el of document.querySelectorAll('[data-magnetic]')){
  const r=rect(el);if(r.l>=r.r||r.t>=r.b)continue;
  const d=distance(r);if(d<=radius)a.push({el,d,c:Math.hypot(r.cx-mouse.x,r.cy-mouse.y)});
 }
 a.sort((x,y)=>x.d-y.d||x.c-y.c);
 if(!a.length)return null;
 if(a.length>1&&a[0].d>0&&a[1].d-a[0].d<deadzone)return null;
 return a[0].el;
}
function goal(s){
 if(s.el!==active||!mouse.valid)return [0,0];
 const r=rect(s.el),d=distance(r);
 if(d>=radius)return [0,0];
 const u=1-d/radius,k=u*u*(3-2*u);
 return [clamp((mouse.x-r.cx)*strength*k,-cap,cap),clamp((mouse.y-r.cy)*strength*k,-cap,cap)];
}
function integrate(s,k,target,dt){
 const v=k==='scale'?'vs':'v'+k;
 s[v]=(s[v]+(target-s[k])*.075*dt)*Math.pow(.66,dt);
 s[k]+=s[v]*dt;
 if(Math.abs(target-s[k])<.012&&Math.abs(s[v])<.012){s[k]=target;s[v]=0}
 return Math.abs(s[k]-target)>.012||Math.abs(s[v])>.012;
}
function queue(){if(!raf&&allow())raf=requestAnimationFrame(tick)}
function tick(t){
 raf=0;if(!allow()){reset();return}
 const dt=Math.max(.5,Math.min(1.7,(t-(stamp||t))/16.67));stamp=t;
 let moving=false;
 for(const [el,s] of states){
  if(!el.isConnected){states.delete(el);continue}
  const [gx,gy]=goal(s);
  const x=integrate(s,'x',gx,dt),y=integrate(s,'y',gy,dt),scale=integrate(s,'scale',s.down?.986:1,dt);
  el.style.setProperty('--mag-x',s.x.toFixed(3)+'px');
  el.style.setProperty('--mag-y',s.y.toFixed(3)+'px');
  el.style.setProperty('--mag-scale',s.scale.toFixed(4));
  if(x||y||scale)moving=true;
 }
 if(moving)raf=requestAnimationFrame(tick);else stamp=0;
}
function reset(){
 if(raf)cancelAnimationFrame(raf);raf=stamp=0;mouse.valid=false;active=null;
 for(const s of states.values()){
  Object.assign(s,{x:0,y:0,vx:0,vy:0,scale:1,vs:0,down:false});
  s.el.style.setProperty('--mag-x','0px');s.el.style.setProperty('--mag-y','0px');s.el.style.setProperty('--mag-scale','1')
 }
}
document.addEventListener('pointermove',e=>{
 if(!allow()||!['mouse','pen'].includes(e.pointerType))return;
 mouse.x=e.clientX;mouse.y=e.clientY;mouse.valid=true;active=select();queue()
},{passive:true});
document.addEventListener('pointerdown',e=>{
 if(!allow())return;
 const el=e.target.closest?.('[data-magnetic]');if(!el)return;
 state(el).down=true;active=el;queue()
},{passive:true});
const release=e=>{
 const el=e.target.closest?.('[data-magnetic]');
 if(el)state(el).down=false;else for(const s of states.values())s.down=false;
 queue()
};
document.addEventListener('pointerup',release,{passive:true});
document.addEventListener('pointercancel',release,{passive:true});
document.addEventListener('pointerout',e=>{if(!e.relatedTarget){mouse.valid=false;active=null;queue()}},{passive:true});
window.addEventListener('blur',()=>{mouse.valid=false;active=null;for(const s of states.values())s.down=false;queue()});
window.addEventListener('scroll',()=>{if(mouse.valid){active=select();queue()}},{passive:true});
window.addEventListener('resize',()=>{if(mouse.valid){active=select();queue()}},{passive:true});
fine.addEventListener('change',()=>allow()?queue():reset());
reduced.addEventListener('change',()=>allow()?queue():reset());
window.ARALMagneticButtons=Object.freeze({initialized:true,strength,maxShift:cap,radius});
})();