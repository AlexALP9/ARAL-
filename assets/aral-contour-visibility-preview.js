/* Contour 2A before/after visual comparison. No change to real page content. */
(()=>{
"use strict";
const body=document.body;
if(!body.classList.contains("aral-contour-preview")||document.querySelector(".aral-contour-compare"))return;
const el=document.createElement("aside");
el.className="aral-contour-compare";
el.setAttribute("aria-label","Сравнение фоновых волн ARAL");
el.innerHTML='<span class="aral-contour-compare-label">Волны 2A</span>'+
'<button type="button" data-contour-choice="before" aria-pressed="false">До</button>'+
'<button type="button" data-contour-choice="after" aria-pressed="true">После</button>';
body.append(el);
const options=new Set(["before","after"]);
function setMode(mode) {
 if(!options.has(mode))mode="after";
 body.dataset.contourMode=mode;
 for(const b of el.querySelectorAll("button[data-contour-choice]"))
  b.setAttribute("aria-pressed",String(b.dataset.contourChoice===mode));
}
setMode(new URLSearchParams(location.search).get("contour")||"after");
el.addEventListener("click",e=>{
 const b=e.target.closest("button[data-contour-choice]");
 if(b)setMode(b.dataset.contourChoice);
});
window.ARALContourComparison=Object.freeze({version:"2A-contrast-review",modes:["before","after"]});
})();