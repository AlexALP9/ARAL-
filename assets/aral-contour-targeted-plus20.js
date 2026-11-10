/* ARAL targeted wave comparison; separate preview only, no library required. */
(()=>{"use strict";
 const body=document.body;
 if(!body.hasAttribute("data-aral-targeted-review")||document.querySelector(".aral-contour-compare"))return;
 const panel=document.createElement("aside");
 panel.className="aral-contour-compare";
 panel.setAttribute("aria-label","Сравнение двух зон фона ARAL");
 panel.innerHTML='<span class="aral-contour-compare-label">Волны · 2 зоны</span>'+
  '<button type="button" data-contour-choice="before" aria-pressed="false">До</button>'+
  '<button type="button" data-contour-choice="after" aria-pressed="true">После +20%</button>';
 body.append(panel);
 function toggle(mode){
   if(mode!=="before"&&mode!=="after")mode="after";
   body.dataset.contourMode=mode;
   for(const b of panel.querySelectorAll("[data-contour-choice]"))
     b.setAttribute("aria-pressed",String(b.dataset.contourChoice===mode));
 }
 toggle(new URLSearchParams(location.search).get("contour")||"after");
 panel.addEventListener("click",e=>{
   const button=e.target.closest?.("[data-contour-choice]");
   if(button)toggle(button.dataset.contourChoice);
 });
 window.ARALContourTargetedPreview=Object.freeze({version:"2A-two-zones-plus20",areas:["audiences","where"],toggle});
})();
