/* ARAL isolated background palette preview. Five gradient orbs + slow pointer glow.
   Existing site scripts, typography, navigation and product images are unchanged. */
(()=>{"use strict";
const body=document.body;
if(!body.classList.contains("aral-gradient-preview")||body.querySelector(".aral-gradient-field"))return;
const field=document.createElement("div");
field.className="aral-gradient-field";
field.setAttribute("aria-hidden","true");
field.innerHTML='<span class="aral-orb o1"></span><span class="aral-orb o2"></span>'+
'<span class="aral-orb o3"></span><span class="aral-orb o4"></span><span class="aral-orb o5"></span>'+
'<span class="aral-cursor"></span>';
body.prepend(field);
const menu=document.createElement("aside");
menu.className="aral-gradient-controls";
menu.setAttribute("aria-label","Черновик фона ARAL");
menu.innerHTML='<details><summary>Фон ARAL · палитра</summary>'+
'<div class="choices" role="group" aria-label="Варианты фона">'+
'<button type="button" data-theme="frost">Лёд</button>'+
'<button type="button" data-theme="blue">Фирменный</button>'+
'<button type="button" data-theme="vivid">Ярче</button></div>'+
'<small>Изменения только в черновике. Сохраняются при переходе между страницами.</small></details>';
body.append(menu);
const valid=new Set(["frost","blue","vivid"]);
function setTheme(name){
 if(!valid.has(name))name="blue";
 body.dataset.aralGradientTheme=name;
 menu.querySelectorAll("button[data-theme]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.theme===name)));
 try{localStorage.setItem("aral-gradient-preview-theme",name)}catch{}
}
let selected="blue";
try{selected=localStorage.getItem("aral-gradient-preview-theme")||selected}catch{}
setTheme(selected);
menu.addEventListener("click",e=>{const b=e.target.closest("button[data-theme]");if(b)setTheme(b.dataset.theme)});
const reduce=matchMedia("(prefers-reduced-motion:reduce)"),fine=matchMedia("(pointer:fine)");
let raf=0,x=0,y=0,tx=0,ty=0;
const enabled=()=>!reduce.matches&&fine.matches&&innerWidth>680&&!document.hidden;
function reset(){
 if(raf)cancelAnimationFrame(raf);raf=0;
 x=y=tx=ty=0;
 field.style.setProperty("--pointer-x","0px");
 field.style.setProperty("--pointer-y","0px");
}
function tick(){
 raf=0;if(!enabled()){reset();return}
 x+=(tx-x)*.09;y+=(ty-y)*.09;
 field.style.setProperty("--pointer-x",x.toFixed(2)+"px");
 field.style.setProperty("--pointer-y",y.toFixed(2)+"px");
 if(Math.abs(tx-x)>.4||Math.abs(ty-y)>.4)raf=requestAnimationFrame(tick);
}
document.addEventListener("pointermove",e=>{
 if(!enabled()||e.pointerType!=="mouse")return;
 tx=(e.clientX/innerWidth-.5)*130;ty=(e.clientY/innerHeight-.5)*130;
 if(!raf)raf=requestAnimationFrame(tick);
},{passive:true});
document.addEventListener("visibilitychange",()=>{if(document.hidden)reset()});
reduce.addEventListener("change",()=>{if(reduce.matches)reset()});
fine.addEventListener("change",()=>{if(!fine.matches)reset()});
window.ARALGradientPreview=Object.freeze({version:1,orbCount:5,palettes:["frost","blue","vivid"]});
})();