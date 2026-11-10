/* Shared ARAL footer preview. Existing 7 source pages remain untouched. */
(()=>{'use strict';
 if(window.ARALFooterPreview?.installed)return;
 const base=document.currentScript?.dataset.siteRoot||'';
 const pages={
  HOME:'design/hero/prototypes/hero-4s-k-views/ARAL_home_contour_2A_footer_preview.html',
  COMPANY:'index-footer-preview.html#company',
  CATALOG:'pages/products-r15-contour-2A-footer-preview.html#/catalog',
  DRIVERS:'pages/drivers-08-footer-preview.html',
  PARTNERS:'pages/partners-11-footer-preview.html',
  ADVANTAGES:'pages/advantages-04-footer-preview.html',
  INTERESTING:'index-footer-preview.html#interesting',
  CONTACTS:'pages/contacts-03-footer-preview.html'
 };
 let markup="<div class=\"af-inner\"><div class=\"af-layout\">\n<section aria-label=\"О бренде ARAL\"><div class=\"af-identity\"><span class=\"af-diamond\" aria-hidden=\"true\"><span>ARAL</span></span><strong class=\"af-wordmark\">ARAL</strong></div>\n<p class=\"af-kicker\">Немецкая история · с 1898 года</p>\n<p class=\"af-claim\">Одна из самых узнаваемых марок Германии.</p>\n<p class=\"af-lead\">ARAL — моторные масла и технические жидкости. <a href=\"https://www.aral.de/de/global/retail/ueber-aral/wer-wir-sind.html\" target=\"_blank\" rel=\"noopener noreferrer\">Об известности бренда ↗</a></p></section>\n<nav aria-label=\"Разделы сайта\" class=\"af-nav\"><h2 class=\"af-title\">Разделы</h2><div class=\"af-links\">\n<a href=\"@@HOME@@\">Главная</a><a href=\"@@COMPANY@@\">О бренде</a><a href=\"@@CATALOG@@\">Продукция ARAL</a>\n<a href=\"@@DRIVERS@@\">Для водителей</a><a href=\"@@PARTNERS@@\">Для партнёров</a>\n<a href=\"@@ADVANTAGES@@\">Преимущества</a><a href=\"@@CONTACTS@@\">Где купить</a></div></nav>\n<section aria-label=\"Материалы и анонсы\"><h2 class=\"af-title\">Материалы и анонсы</h2><div class=\"af-news\">\n<a class=\"af-teaser\" href=\"@@INTERESTING@@\"><small>Интересное</small><span>5W-30 или 5W-40: в чём разница?</span></a>\n<a class=\"af-teaser\" href=\"@@CATALOG@@\"><small>Каталог</small><span>Ассортимент, характеристики и фасовки масел ARAL</span></a>\n<a class=\"af-teaser\" href=\"https://msdspds.aral.com/\" target=\"_blank\" rel=\"noopener noreferrer\"><small>Техническая информация</small><span>Документация на продукцию PDS / SDS ↗</span></a>\n</div></section>\n<section aria-label=\"Контактные данные\"><h2 class=\"af-title\">Контакты и сотрудничество</h2><div class=\"af-contact\">\n<p>Оптовые обращения · Склад СПК</p><a href=\"tel:+74951011235\">+7 (495) 101-12-35</a>\n<a href=\"mailto:info@skladspk.ru\">info@skladspk.ru</a><a href=\"@@CONTACTS@@\">Магазины и точки продаж</a>\n<a class=\"af-cta\" href=\"@@PARTNERS@@\">Для партнёров <span aria-hidden=\"true\">↗</span></a>\n</div></section></div>\n<div class=\"af-bottom\"><p>ARAL · Информационный HTML-прототип для согласования</p><a href=\"@@CONTACTS@@\">Адреса и контакты</a></div></div>";
 for(const [key,path] of Object.entries(pages))markup=markup.replaceAll('@@'+key+'@@',base+path);
 const footers=[...document.querySelectorAll('footer')];
 for(const el of footers){
  el.className='aral-global-footer';
  el.setAttribute('aria-label','Подвал сайта ARAL');
  el.innerHTML=markup;
 }
 window.ARALFooterPreview=Object.freeze({installed:true,footers:footers.length});
})();