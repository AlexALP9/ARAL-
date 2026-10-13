'use strict';
(function(){
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const escapeHTML = (v) => String(v==null?'':v).replace(/[&<>"']/g,(c)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const cats = {'PKW':'Легковые автомобили','Truck':'Грузовой транспорт','Coolant':'Охлаждающие жидкости'};
  const groups = {'PKW':'ЛЕГКОВЫЕ','Truck':'ГРУЗОВЫЕ','Coolant':'ОХЛАЖДЕНИЕ'};
  const catalogURL='./catalog.json';
  const brandURL='https://msdspds.aral.com/';
  const b2bURL='https://skladspk.ru/';
  const b2cURL='https://centravtomasel.ru/';
  let products=[], activeCategory='all', activeSAE='', activeSearch='', audience='b2b';
  let compared=[];
  try { const saved=JSON.parse(localStorage.getItem('aral-compare-v1')||'[]'); compared=Array.isArray(saved)?saved.slice(0,4):[]; } catch(_){}
  const main=$('#content'), homeHTML=main.innerHTML;
  function pathImg(v){return v&&v.image?'./'+v.image.replace(/^\/+/,''):'./assets/favicon.svg'}
  function preferred(p){return p.variants.find(v=>v.volume==='4 L'||v.volume==='5 L')||p.variants[0]}
  function cleanText(s){return s==null||s===''?'—':escapeHTML(s)}
  function toast(s){const e=$('#toast');e.textContent=s;e.style.display='block';clearTimeout(toast.timer);toast.timer=setTimeout(()=>e.style.display='none',2800)}
  function persist(){try{localStorage.setItem('aral-compare-v1',JSON.stringify(compared))}catch(_){}$('#compare-num').textContent=compared.length}
  function section(eyebrow,title,intro){return '<div class="page-intro"><span class="kicker">'+eyebrow+'</span><h1>'+title+'</h1><p>'+intro+'</p></div>'}
  function wrapper(s){return '<div class="page"><div class="wrap">'+s+'</div></div>'}
  function productHref(p){return '#/product/'+encodeURIComponent(p.internal_id)}
  function card(p){
    const v=preferred(p),active=compared.includes(p.internal_id);
    return '<article class="product-card"><a href="'+productHref(p)+'" class="product-thumb"><span class="product-category">'+escapeHTML(groups[p.category]||p.category)+'</span><img loading="lazy" src="'+escapeHTML(pathImg(v))+'" alt="'+escapeHTML(p.commercial_name+' '+v.volume)+'"></a><div class="product-body"><h3><a href="'+productHref(p)+'">'+escapeHTML(p.commercial_name)+'</a></h3><div class="product-meta">'+(p.sae?'SAE '+escapeHTML(p.sae)+' · ':'')+p.variants.length+' SKU</div><div class="product-actions"><a href="'+productHref(p)+'">Подробнее ↗</a><button class="compare-btn '+(active?'active':'')+'" type="button" data-compare="'+escapeHTML(p.internal_id)+'" aria-label="Сравнить '+escapeHTML(p.commercial_name)+'">'+(active?'✓ Выбрано':'+ Сравнить')+'</button></div></div></article>'
  }
  function home(){
    main.innerHTML=homeHTML;
    $('#featured').innerHTML=products.length?products.filter(p=>p.category!=='Coolant').slice(0,4).map(card).join(''):'<p>Каталог недоступен. Обновите страницу.</p>';
  }
  function renderCatalog(){
    const saes=[...new Set(products.map(p=>p.sae).filter(Boolean))].sort();
    main.innerHTML=wrapper(section('ПРОДУКЦИЯ / ARAL','Каталог <em>продуктов.</em>','Выбирайте моторные масла и технические жидкости по области применения, вязкости и артикулу. Весь каталог связан с разрешёнными к публикации данными.')+
      '<div class="filters"><div class="category-tabs" role="group" aria-label="Категория">'+
      [['all','Все товары'],['PKW','Для легковых'],['Truck','Грузовые масла'],['Coolant','Охлаждение']].map(([v,label])=>'<button type="button" data-cat="'+v+'" class="'+(v===activeCategory?'active':'')+'">'+label+'</button>').join('')+
      '</div><div class="filter-row"><input id="product-search" type="search" aria-label="Поиск продукта" placeholder="Название, SAE или SKU…" value="'+escapeHTML(activeSearch)+'"><select id="sae-select" aria-label="Вязкость SAE"><option value="">Любая вязкость</option>'+
      saes.map(s=>'<option value="'+escapeHTML(s)+'" '+(s===activeSAE?'selected':'')+'>'+escapeHTML(s)+'</option>').join('')+'</select><span class="count" id="filtered-count"></span></div></div><div id="products-grid" class="card-grid"></div><p class="disclaimer">В отсутствие опубликованной спецификации не следует предполагать совместимость. Цены и наличие на этом сайте не публикуются.</p>');
    $$('[data-cat]').forEach(b=>b.addEventListener('click',()=>{activeCategory=b.dataset.cat;$$('[data-cat]').forEach(t=>t.classList.toggle('active',t===b));filterCatalog()}));
    $('#product-search').addEventListener('input',e=>{activeSearch=e.target.value;filterCatalog()});
    $('#sae-select').addEventListener('change',e=>{activeSAE=e.target.value;filterCatalog()});
    filterCatalog();
  }
  function filterCatalog(){
    const term=activeSearch.toLowerCase().trim();
    const shown=products.filter(p=>(activeCategory==='all'||p.category===activeCategory)&&(!activeSAE||p.sae===activeSAE)&&(!term||(p.commercial_name+' '+(p.sae||'')+' '+p.variants.map(v=>v.sku).join(' ')).toLowerCase().includes(term)));
    const grid=$('#products-grid'); if(!grid)return;
    grid.innerHTML=shown.length?shown.map(card).join(''):'<div class="empty no-results"><h3>Ничего не найдено</h3><p>Измените запрос или выберите другую категорию.</p><button type="button" class="btn btn-blue" id="clear-filters">Сбросить фильтры</button></div>';
    $('#filtered-count').textContent='Найдено: '+shown.length;
    const reset=$('#clear-filters');if(reset)reset.addEventListener('click',()=>{activeCategory='all';activeSAE='';activeSearch='';renderCatalog()});
  }
  function dataRow(k,v){return '<tr><th scope="row">'+escapeHTML(k)+'</th><td>'+v+'</td></tr>'}
  function safeEntries(v){return Array.isArray(v)?v:[]}
  function termEntries(values){return safeEntries(values).map(v=>escapeHTML(typeof v==='string'?v:v.text)).join('<br>')}
  function performanceRows(p){
    const t=(p.technical||{}).performance||{};
    const labels=[['API','api'],['ACEA','acea'],['Официальные одобрения','official_approvals'],['Соответствует требованиям (Meets)','meets'],['Рекомендуется для','recommended_for'],['Ссылки на применение','application_references'],['Уровни характеристик','performance_levels'],['Прочие сведения','other']];
    return labels.filter(pair=>safeEntries(t[pair[1]]).length).map(([label,key])=>dataRow(label,termEntries(t[key]))).join('');
  }
  function typicalRows(p){
    return safeEntries((p.technical||{}).typical_characteristics).map(x=>'<tr><th scope="row">'+escapeHTML(x.characteristic)+'</th><td>'+cleanText(x.value)+(x.unit?' '+escapeHTML(x.unit):'')+'</td><td>'+cleanText(x.method)+'</td></tr>').join('');
  }
  function detailSection(title,content,opened=false){return '<details '+(opened?'open':'')+'><summary>'+escapeHTML(title)+'</summary><div class="details-content">'+content+'</div></details>'}
  function renderProduct(id){
    const p=products.find(p=>p.internal_id===id);
    if(!p){main.innerHTML=wrapper('<div class="empty"><h3>Товар не найден</h3><p>Вернитесь к каталогу.</p><a class="btn btn-blue" href="#/catalog">Каталог ↗</a></div>');return}
    const c=p.content||{}, variant=p.variants[0], pr=performanceRows(p), typical=typicalRows(p);
    const advantages=safeEntries(c.advantages);
    const blocks=detailSection('Описание',c.description?'<p>'+escapeHTML(c.description)+'</p>':'<p>Описание пока не опубликовано.</p>',true)
      +detailSection('Применение',c.application?'<p>'+escapeHTML(c.application)+'</p>':'<p>Подтверждённое описание применения пока не опубликовано. Сверьтесь с требованиями производителя техники.</p>')
      +detailSection('Преимущества',advantages.length?'<ul>'+advantages.map(x=>'<li>'+escapeHTML(x)+'</li>').join('')+'</ul>':'<p>Подтверждённые преимущества не опубликованы.</p>')
      +detailSection('Спецификации и допуски',pr?'<table class="data-table"><tbody>'+pr+'</tbody></table>':'<p>Технические утверждения не разрешены к публикации для этой позиции.</p>')
      +detailSection('Типовые характеристики',typical?'<table class="data-table"><thead><tr><th>Характеристика</th><th>Значение</th><th>Метод</th></tr></thead><tbody>'+typical+'</tbody></table>':'<p>Публичные физические характеристики для этой позиции отсутствуют.</p>')
      +(c.storage?detailSection('Хранение','<p>'+escapeHTML(c.storage)+'</p>'):'');
    main.innerHTML=wrapper('<a class="back-link" href="#/catalog">← Вернуться в каталог</a><div class="product-detail-top"><div class="detail-image"><img id="detail-photo" src="'+escapeHTML(pathImg(variant))+'" alt="'+escapeHTML(p.commercial_name+' '+variant.volume)+'"></div><div class="detail-copy"><span class="kicker">'+escapeHTML(groups[p.category]||p.category)+' / '+escapeHTML(p.internal_id)+'</span><h1>'+escapeHTML(p.commercial_name)+'</h1><p>'+escapeHTML(c.description?c.description.split('\n')[0]:'Варианты фасовки и подтверждённые технические сведения.')+'</p><div class="tags">'+(p.sae?'<span>SAE '+escapeHTML(p.sae)+'</span>':'')+'<span>'+escapeHTML(cats[p.category]||p.category)+'</span><span>'+p.variants.length+' SKU</span></div><div class="detail-label">ДОСТУПНЫЕ ФАСОВКИ</div><div class="variants">'+p.variants.map((v,i)=>'<button type="button" data-variant="'+escapeHTML(v.sku)+'" class="variant-btn '+(i===0?'active':'')+'" aria-pressed="'+(i===0?'true':'false')+'">'+escapeHTML(v.volume)+'</button>').join('')+'</div><div id="selected-sku" class="sku-info">Артикул: '+escapeHTML(variant.sku)+'</div><div class="detail-actions"><a class="btn btn-blue" href="#/where">Где купить ↗</a><button type="button" class="compare-btn '+(compared.includes(id)?'active':'')+'" data-compare="'+escapeHTML(id)+'">'+(compared.includes(id)?'✓ Выбрано':'+ Сравнить')+'</button></div><p class="disclaimer">Точные ссылки на SKU в магазинах пока не подтверждены. Уточняйте цену и наличие у продавца.</p></div></div><div class="details">'+blocks+'</div><p class="disclaimer">Первичный источник: <a class="text-link" href="'+brandURL+'" target="_blank" rel="noopener noreferrer">ARAL PDS ↗</a>. Отсутствующие значения не дополнялись из внутренних или архивных данных.</p>');
    $$('[data-variant]').forEach(b=>b.addEventListener('click',()=>{
      const v=p.variants.find(v=>v.sku===b.dataset.variant);if(!v)return;
      $('#detail-photo').src=pathImg(v);$('#detail-photo').alt=p.commercial_name+' '+v.volume;
      $('#selected-sku').textContent='Артикул: '+v.sku;
      $$('[data-variant]').forEach(x=>{const active=x===b;x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active))});
    }));
  }
  function compareValue(p,k){
    const pr=(p.technical||{}).performance||{};
    if(k==='category')return escapeHTML(cats[p.category]||p.category);
    if(k==='sae')return cleanText(p.sae);
    if(k==='volumes')return p.variants.map(v=>escapeHTML(v.volume)).join(', ');
    if(k==='description')return cleanText((p.content||{}).description);
    return termEntries(pr[k])||'—';
  }
  function renderCompare(){
    const chosen=compared.map(id=>products.find(p=>p.internal_id===id)).filter(Boolean);
    let body=section('СЕРВИС / ARAL','Сравнение <em>масел.</em>','Сопоставьте до четырёх продуктов по подтверждённым сведениям. Отсутствующие значения не заполняются предположениями.');
    if(!chosen.length){body+='<div class="empty"><h3>Список сравнения пока пуст</h3><p>Откройте каталог и нажмите «+ Сравнить» у интересующих позиций.</p><a href="#/catalog" class="btn btn-blue">Перейти в каталог ↗</a></div>'}
    else {
      const rows=[['Категория','category'],['SAE','sae'],['API','api'],['ACEA','acea'],['Официальные одобрения','official_approvals'],['Соответствует (Meets)','meets'],['Рекомендуется для','recommended_for'],['Уровни характеристик','performance_levels'],['Фасовки','volumes'],['Описание','description']];
      body+='<div class="action-group" style="margin-bottom:25px"><button type="button" class="minor-btn" id="reset-compare">Очистить сравнение</button><button class="minor-btn" type="button" id="print-compare">Печать</button></div><div class="compare-scroll"><table class="compare-table"><tbody><tr><th scope="col">Продукт</th>'+
      chosen.map(p=>'<td><a href="'+productHref(p)+'"><img src="'+escapeHTML(pathImg(preferred(p)))+'" alt=""><span>'+escapeHTML(p.commercial_name)+'</span></a><br><button class="minor-btn" type="button" data-remove="'+escapeHTML(p.internal_id)+'">Убрать ×</button></td>').join('')+'</tr>'+
      rows.map(([label,key])=>'<tr><th scope="row">'+label+'</th>'+chosen.map(p=>'<td>'+compareValue(p,key)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div><p class="disclaimer">«—» означает отсутствие опубликованной информации, а не отсутствие допусков или характеристик.</p>';
    }
    main.innerHTML=wrapper(body);
    const reset=$('#reset-compare');if(reset)reset.addEventListener('click',()=>{compared=[];persist();renderCompare()});
    const print=$('#print-compare');if(print)print.addEventListener('click',()=>window.print());
  }
  function renderBrand(){main.innerHTML=wrapper(section('ARAL / БРЕНД','Точность <em>в каждой детали.</em>','Каталог ARAL объединяет линейку смазочных материалов для легкового и коммерческого транспорта. Здесь важны не громкие заявления, а прослеживаемость официальной информации.')+
    '<div class="columns"><div class="brand-visual">ARAL</div><div><span class="kicker">ИНФОРМАЦИОННЫЙ ПОДХОД</span><h2>Выбор опирается на факты</h2><p>Технические характеристики опубликованы только в рамках утверждённого публичного набора данных. Официальные одобрения производителей разделены с формулировками «соответствует требованиям» и справочными характеристиками.</p><p>Для выбора продукта проверяйте инструкции производителя автомобиля и актуальные технические документы ARAL.</p><a href="#/catalog" class="btn btn-blue">Изучить продукты ↗</a></div></div>')}
  function renderBusiness(){
    const sectors=[['01','Магазины и сети','Подбор номенклатуры, материалы для торговой точки, помощь продавцам.'],['02','СТО и сервисы','Техническая информация, консультации, выбор подтверждённых спецификаций.'],['03','Оптовые компании','Профессиональный каталог, разные фасовки, закупки через Склад СПК.'],['04','Автопарки','Масла для коммерческого транспорта, доступ к документации, работа с менеджером.']];
    const services=['Обучение продавцов','POS-материалы','Технические консультации','Помощь с ассортиментом','Персональный менеджер','Брендирование магазина'];
    main.innerHTML=wrapper(section('B2B / ПАРТНЁРАМ','Развивайте бизнес <em>вместе с ARAL.</em>','Решения для магазинов автозапчастей, СТО, дистрибьюторов и корпоративных автопарков. Изучите ассортимент и перейдите к оптовому партнёру.')+
    '<div class="business-numbers"><div><strong>70%</strong><span>ориентир проекта на B2B</span></div><div><strong>47</strong><span>текущих SKU</span></div><div><strong>1</strong><span>подтверждённый оптовый канал</span></div></div>'+
    '<span class="kicker">ОТРАСЛЕВЫЕ РЕШЕНИЯ</span><h2 style="font-size:38px">Для профессиональных задач</h2><div class="business-grid">'+sectors.map(x=>'<article><span>'+x[0]+'</span><h3>'+x[1]+'</h3><p>'+x[2]+'</p></article>').join('')+'</div>'+
    '<div class="space-top"><span class="kicker">ПАРТНЁРСКАЯ ПОДДЕРЖКА</span><h2 style="font-size:37px">Инструменты для продаж</h2><div class="simple-list">'+services.map(x=>'<div>'+x+' <span>↗</span></div>').join('')+'</div></div>'+
    '<div class="cta-box"><div><h2>Обсудите оптовые поставки</h2><p>Переходите на сайт Склад СПК для актуальных контактов, наличия и коммерческих условий. На сайте ARAL цены и остатки не размещаются.</p></div><a href="'+b2bURL+'" class="btn btn-yellow" target="_blank" rel="noopener noreferrer">Склад СПК ↗</a></div>');
  }
  function renderDrivers(){main.innerHTML=wrapper(section('B2C / АВТОВЛАДЕЛЬЦАМ','Правильный выбор <em>начинается с данных.</em>','Сравнивайте опубликованные характеристики и изучайте доступные фасовки. Подбор по марке и модели автомобиля в текущую версию не включён.')+
   '<div class="three-step"><article><span class="kicker">ШАГ 01</span><h3>Проверьте руководство</h3><p>Найдите требования производителя автомобиля к вязкости и допускам.</p></article><article><span class="kicker">ШАГ 02</span><h3>Сопоставьте масла</h3><p>В каталоге доступны фильтры и сравнение до четырёх продуктов.</p></article><article><span class="kicker">ШАГ 03</span><h3>Выберите продавца</h3><p>Перейдите в розничный канал и уточните наличие и цену.</p></article></div>'+
   '<div class="cta-box"><div><h2>Выберите масло ARAL</h2><p>Подробные характеристики и подтверждённые спецификации доступны в карточках.</p></div><a class="btn btn-yellow" href="#/catalog">К каталогу ↗</a></div>')}
  function renderWhere(){
    const b2b=audience==='b2b';
    main.innerHTML=wrapper(section('ПОКУПКА / КАНАЛЫ','Где купить <em>ARAL.</em>','Для бизнеса и автовладельцев действуют разные маршруты. Адреса точек и партнёров появятся только после сверки с подтверждёнными источниками.')+
      '<div class="where-tabs" role="group" aria-label="Способ покупки"><button type="button" data-audience="b2b" class="'+(b2b?'active':'')+'">Для бизнеса</button><button type="button" data-audience="b2c" class="'+(!b2b?'active':'')+'">Для автомобиля</button></div>'+
      '<div class="where-box"><div><span class="kicker">'+(b2b?'ОПТОВЫЕ ПОСТАВКИ':'РОЗНИЧНАЯ ПОКУПКА')+'</span><h2>'+(b2b?'Склад СПК':'Центр АвтоМасел / Автовсячина')+'</h2><p>'+(b2b?'Оптовый ассортимент, коммерческие условия и консультации для корпоративных клиентов.':'Розничный канал покупки ARAL. Сведения о конкретных магазинах и сервисной точке OSTVIN требуют отдельного подтверждения.')+'</p></div><a class="btn btn-blue" href="'+(b2b?b2bURL:b2cURL)+'" target="_blank" rel="noopener noreferrer">Перейти на сайт ↗</a></div>'+
      '<div class="map-placeholder"><div><strong>Карта в подготовке</strong><p>Здесь будут только реальные проверенные адреса. Условные точки не публикуем.</p></div></div>');
    $$('[data-audience]').forEach(b=>b.addEventListener('click',()=>{audience=b.dataset.audience;renderWhere()}));
  }
  function renderContacts(){main.innerHTML=wrapper(section('СВЯЗЬ / КОНТАКТЫ','Связаться <em>с нами.</em>','Выберите канал обращения. Телефоны и адреса не опубликованы до подтверждения действующих реквизитов.')+
    '<div class="contact-cards"><article><span class="kicker">ДЛЯ БИЗНЕСА</span><h2>Оптовые вопросы</h2><p>Склад СПК — информация об ассортименте, условиях закупки и сотрудничестве.</p><a class="btn btn-blue" href="'+b2bURL+'" target="_blank" rel="noopener noreferrer">Склад СПК ↗</a></article><article><span class="kicker">ДЛЯ АВТОВЛАДЕЛЬЦЕВ</span><h2>Розничные покупки</h2><p>Центр АвтоМасел / Автовсячина — по вопросам розничного приобретения продукции.</p><a class="btn btn-blue" href="'+b2cURL+'" target="_blank" rel="noopener noreferrer">Розничный сайт ↗</a></article></div><p class="disclaimer">Форма заявки, прямые телефоны, адреса и email требуют подтверждённых данных и согласованного маршрута обработки заявок.</p>')}
  function route(){
    const value=decodeURIComponent((location.hash||'#/').replace(/^#\/?/,'')).replace(/^\/+/,'');
    const [name,arg]=value.split('/');
    switch(name){
      case 'catalog':renderCatalog();break;
      case 'product':renderProduct(arg);break;
      case 'compare':renderCompare();break;
      case 'brand':renderBrand();break;
      case 'business':renderBusiness();break;
      case 'drivers':renderDrivers();break;
      case 'where':renderWhere();break;
      case 'contacts':renderContacts();break;
      default:home();
    }
    $$('#menu a').forEach(a=>a.classList.toggle('current',a.getAttribute('href')==='#/'+name));
    $('#menu').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');
    const titles={catalog:'Каталог',product:'Продукт',compare:'Сравнение',brand:'О бренде',business:'Для бизнеса',drivers:'Для автомобиля',where:'Где купить',contacts:'Контакты'};
    document.title=(titles[name]||'Масла для бизнеса и автомобиля')+' | ARAL';
    window.scrollTo(0,0);
  }
  document.addEventListener('click',e=>{
    const add=e.target.closest('[data-compare]');
    if(add){
      const id=add.dataset.compare;
      if(compared.includes(id)){compared=compared.filter(x=>x!==id);toast('Удалено из сравнения')}
      else if(compared.length>=4){toast('Можно сравнить не более четырёх товаров');return}
      else{compared.push(id);toast('Добавлено в сравнение')}
      persist();
      const name=(location.hash||'#/').split('/')[1]||'';
      if(name==='catalog')filterCatalog();
      else if(name==='product')renderProduct(decodeURIComponent((location.hash||'').split('/').pop()));
      else if(name==='compare')renderCompare();
      else home();
    }
    const remove=e.target.closest('[data-remove]');
    if(remove){compared=compared.filter(x=>x!==remove.dataset.remove);persist();renderCompare()}
  });
  $('#menu-toggle').addEventListener('click',()=>{
    const menu=$('#menu');const open=menu.classList.toggle('open');$('#menu-toggle').setAttribute('aria-expanded',String(open));
  });
  window.addEventListener('hashchange',route);
  persist();
  fetch(catalogURL).then(r=>{if(!r.ok)throw new Error('Ошибка каталога '+r.status);return r.json()}).then(data=>{
    if(!Array.isArray(data.products))throw new Error('Некорректная структура');
    products=data.products;route();
  }).catch(err=>{console.error('ARAL',err);products=[];route();toast('Не удалось загрузить каталог. Попробуйте обновить страницу')});
})();