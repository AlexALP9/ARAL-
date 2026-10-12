# ARAL — распределение задач по ИИ, промты и файлы

## Главная схема

Использовать ИИ не параллельно без координации, а по ролям:

| Инструмент | Главная роль | Что он НЕ должен делать |
|---|---|---|
| ChatGPT / основной чат | Архитектор проекта, редактор требований, единая точка правды | Не собирать массовые данные вручную с защищённых сайтов, если это лучше сделать в Work mode |
| ChatGPT Work | Браузерный сбор данных, исследование сайтов, массовая номенклатура/PDS, скриншоты | Не менять утверждённые решения без отдельной пометки |
| Figma / Figma AI | Дизайн-система, макеты, компоненты, прототипы | Не выдумывать товарные характеристики, отзывы, адреса и партнёров |
| Perplexity | Внешняя проверка, поиск официальных источников, сравнительное исследование | Не использовать как финальный источник товарных допусков, если есть официальный PDS |
| Codex | Реализация frontend/data layer/import scripts/tests после Figma и технического решения | Не фиксировать стек до аудита хостинга |
| DeepSeek | Независимый аудит архитектуры и кода, поиск слабых мест | Не использовать как главный источник данных о товарах |
| VS Code | Рабочая среда разработки | Это не отдельная нейросеть; использовать вместе с Codex/ручной проверкой |

---

# Этап 1. Сбор данных — ChatGPT Work

## 1A. Номенклатура ARAL

**Куда:** ChatGPT Work  
**Прикрепить:**
- `MASTER_TZ_ARAL.md`
- `WORK_MODE_TASKS_AND_LINKS.md`

**Ссылка:**
https://centravtomasel.ru/search?pcode=aral

**Промт:**

> Работай по MASTER_TZ_ARAL.md как по главному ТЗ. Открой https://centravtomasel.ru/search?pcode=aral и собери полную актуальную номенклатуру ARAL. Пройди все страницы и ленивую загрузку. Для каждого товара зафиксируй точное название, URL карточки, категорию, фасовку/варианты, изображение или URL изображения и другие реально показанные поля. Ничего не выдумывай. Результат сохрани в XLSX/CSV и Markdown-отчёт. Добавь поля `needs_pds_match`, `source_url`, `checked_at`. Отдельно перечисли неоднозначные или дублирующиеся позиции.

**Выход:** `ARAL_catalog_raw.xlsx`

---

## 1B. Техлисты PDS

**Куда:** ChatGPT Work  
**Прикрепить:**
- `MASTER_TZ_ARAL.md`
- `ARAL_catalog_raw.xlsx` из предыдущей задачи
- `references/10_BlueTronic_5W40_techsheet_example.pdf`

**Ссылка:**
https://msdspds.aral.com/

**Промт:**

> Для каждой позиции из ARAL_catalog_raw.xlsx найди на https://msdspds.aral.com/ актуальный английский Product Data Sheet. Не угадывай совпадение по похожему названию. Для каждого подтверждённого совпадения сохрани: официальное название, URL/PDF, язык, дату/версию документа, Description, Performance. Дополнительно извлеки Application, Advantages и Typical Characteristics, если они есть. Description переведи на русский технически точно, без маркетинговых выдумок. Обозначения SAE/API/ACEA/OEM не изменяй. Для неоднозначных совпадений создай отдельный список `manual_review`. Скачай PDF-файлы в отдельную папку и создай итоговый XLSX.

**Выход:** `ARAL_catalog_enriched.xlsx` + папка `PDS/`

---

## 1C. Терминология ARAL Germany

**Куда:** ChatGPT Work  
**Прикрепить:**
- `MASTER_TZ_ARAL.md`

**Ссылка:**
https://www.aral-lubricants.de/en/

**Промт:**

> Проанализируй официальный ARAL Lubricants Germany только как источник официальной терминологии, продуктовой логики и структуры. Собери категории, продуктовые серии, passenger cars / commercial vehicles terminology, структуру product page, approvals/specifications, downloads/documents, Oil Finder и поиск партнёров. Создай словарь EN→RU и таблицу рекомендуемых русских терминов. Не переписывай дизайн и не добавляй маркетинговые свойства от себя.

**Выход:** `ARAL_TERMINOLOGY_EN_RU.md`

---

## 1D. Где купить

**Куда:** ChatGPT Work  
**Прикрепить:**
- `MASTER_TZ_ARAL.md`

**Промт:**

> Собери только подтверждённые актуальные точки и каналы покупки ARAL из предоставленных источников: собственные магазины, партнёры, Яндекс Карты, доставка по России, OZON. Для каждой точки сохрани: название, тип, город, адрес, телефон, часы, URL карты и URL сайта. Если ранее встречалось число 16 магазинов — перепроверь его, не считай его постоянной константой. Не добавляй предполагаемые точки. Отдельно пометь отсутствующие или требующие ручного подтверждения поля.

**Выход:** `ARAL_where_to_buy.xlsx`

---

# Этап 2. Исследование референсов — ChatGPT Work + Perplexity

## 2A. Kärcher

**Куда:** ChatGPT Work  
**Прикрепить:**
- `MASTER_TZ_ARAL.md`
- `FIGMA_BRANCH_BRIEF.md`

**Ссылка:**
https://www.kaercher.com/us/en/

**Промт:**

> Изучи только UX-механику разделения Home & Garden / Commercial: где пользователь выбирает направление, как меняется навигация, CTA, возврат между ветками и единый бренд. Сделай 6–10 скриншотов ключевых состояний. В конце предложи адаптацию для ARAL: «Для бизнеса» / «Для автомобиля». Не копируй визуальный дизайн.

---

## 2B. LIQUI MOLY

**Куда:** ChatGPT Work  
**Прикрепить:**
- `MASTER_TZ_ARAL.md`
- `references/01_LIQUI_MOLY_hero_reference.png`
- `references/07_Approved_main_hero_reference.png`

**Ссылка:**
https://www.liqui-moly.com/en/

**Промт:**

> Разбери LIQUI MOLY по двум задачам: 1) hero — композиция текст/продукт, whitespace, поиск, быстрые сценарии, slider/progress; 2) каталог — фильтры, карточки, Product Finder и работа с большим ассортиментом. Сравни с утверждённым hero ARAL. Выведи таблицу «механика → что переносим → что не переносим». Не копируй тексты и брендинг.

---

## 2C. STIHL

**Куда:** ChatGPT Work  
**Прикрепить:**
- `MASTER_TZ_ARAL.md`
- `references/02_STIHL_megamenu_reference.png`
- `references/03_STIHL_catalog_reference.png`

**Ссылки:**
https://www.stihlusa.com/en  
https://www.stihlusa.com/en/professional

**Промт:**

> Проанализируй STIHL по трём направлениям: mega-menu и его анимация; каталог/фильтры/promo badges; Professional/Pro Tips and Guides. Сделай скриншоты закрытого и открытого меню, каталога и B2B-контента. Опиши hover/click, active states, колонки, motion и структуру. В конце адаптируй только механику для ARAL: магазины, СТО, оптовики, автопарки, обучение и помощь продажам.

---

## 2D. RAVENOL

**Куда:** ChatGPT Work  
**Прикрепить:**
- `MASTER_TZ_ARAL.md`

**Ссылка:**
https://ravenol.ru/

**Промт:**

> Рассматривай RAVENOL только как функциональный, а не главный визуальный референс. Изучи подбор продукта, каталог, формы сотрудничества/обратной связи и поиск точек продаж. Сделай скриншоты. Предложи для ARAL две формы сотрудничества — для юрлиц и физлиц — и объясни назначение каждого поля.

---

## 2E. Внешняя проверка исследований

**Куда:** Perplexity  
**Прикрепить:**
- `MASTER_TZ_ARAL.md` при возможности

**Промт:**

> Проведи независимую проверку архитектуры сайта ARAL из приложенного ТЗ. Используй только свежие официальные или первичные источники. Проверь, соответствует ли выбранная UX-модель современным монобрендовым B2B+B2C сайтам в automotive/lubricants/industrial сегменте. Не предлагай EON EV и не меняй утверждённый hero/compare. Найди 5–8 сильных примеров только для недостающих решений: mega-menu, масштабируемый каталог, B2B knowledge hub, product comparison, store locator. Для каждого дай URL, конкретную механику и зачем она ARAL. Отдельно пометь факты и субъективные рекомендации.

**Использование результата:** только как второй взгляд; утверждённые решения не заменять автоматически.

---

# Этап 3. Дизайн — Figma

## 3A. Старт новой Figma-ветки

**Куда:** Figma / Figma AI  
**Прикрепить обязательно:**
- `MASTER_TZ_ARAL.md`
- `FIGMA_BRANCH_BRIEF.md`
- `references/01_LIQUI_MOLY_hero_reference.png`
- `references/02_STIHL_megamenu_reference.png`
- `references/03_STIHL_catalog_reference.png`
- `references/04_Dark_scroll_storytelling_reference.png`
- `references/05_Dark_logos_testimonials_reference.png`
- `references/06_Layered_cards_reference.png`
- `references/07_Approved_main_hero_reference.png`
- `references/08_Approved_comparison_reference.png`

**Не прикреплять как основные:**
- `09_Working_fullpage_concept_dense.png`
- рабочие плотные варианты, кроме случая анализа ошибок.

**Промт:**

> Создай отдельную дизайн-ветку монобрендового сайта ARAL строго по MASTER_TZ_ARAL.md и FIGMA_BRANCH_BRIEF.md. Не меняй решения со статусом [УТВЕРЖДЕНО]. Визуальный приоритет: 07_Approved_main_hero_reference.png и 08_Approved_comparison_reference.png. Kärcher использовать для разделения «Для бизнеса / Для автомобиля», LIQUI MOLY — для воздуха и hero, STIHL — для mega-menu и каталога, тёмные automotive-референсы — для scroll storytelling, cursor, logos/testimonials, layered cards — только для teaser-продуктов. EON EV не использовать. Не уплотняй интерфейс: если блок перегружен, увеличивай whitespace и сокращай вторичный текст. Сначала сделай foundations и components, затем desktop 1440–1600, потом mobile 390/430 и prototype flows. Все неподтверждённые данные обозначай placeholder. Не выдумывай допуски, цены, отзывы, партнёров и адреса.

---

## 3B. Что просить у Figma поэтапно

После первого промта выполнять последовательно:

**Промт Foundations:**

> На основе ТЗ создай Foundations: сетка, spacing scale, typography tokens для кириллицы, ARAL-compatible color roles без выдумывания официальных HEX до brand guide, radius, shadows, icon rules, motion tokens. Покажи desktop/mobile grid.

**Промт Components:**

> Создай component library с variants для Header, Mega-menu, Search, Buttons, Product card, Promo badge, Filters, Compare button, Compare tray, Compare table, Tabs, B2B card, Testimonial, Logo marquee item, Store locator card, Forms, Drawer, Footer. Для интерактивных компонентов добавь default/hover/active/focus/disabled/loading/selected states.

**Промт Screens:**

> Собери desktop экраны: Главная, mega-menu open, Каталог, Каталог с фильтром, Product detail, Compare, Для автомобиля, Для бизнеса, Сотрудничество, О бренде, Где купить, Search results, 404. Затем mobile: Главная, меню, каталог/фильтры, карточка товара, сравнение, форма, где купить.

**Промт Prototype:**

> Собери кликабельный прототип ключевых сценариев: mega-menu, выбор «Для бизнеса / Для автомобиля», teaser product cards, добавление к сравнению → tray → compare page, catalog filters, mobile menu и store locator. Motion должен быть умеренным и поддерживать prefers-reduced-motion на уровне требований разработке.

---

# Этап 4. Контент и редактура — ChatGPT

## 4A. Русские тексты карточек

**Куда:** ChatGPT основной чат  
**Прикрепить:**
- `MASTER_TZ_ARAL.md`
- `ARAL_catalog_enriched.xlsx`
- конкретные PDS при проверке спорных товаров
- `ARAL_TERMINOLOGY_EN_RU.md`

**Промт:**

> Работай только по данным из приложенного каталога и PDS. Для каждого товара подготовь русскую карточку: официальное название, краткое клиентское описание, технический Description, Performance/допуски, применение, преимущества и короткий SEO-description. Не добавляй свойств, которых нет в источнике. SAE/API/ACEA/OEM сохраняй без изменений. Если данных недостаточно — ставь [НУЖНО УТОЧНИТЬ], а не дополняй от себя. Стиль: профессиональный, понятный B2B/B2C, без штампов вроде «непревзойдённое качество».

---

# Этап 5. Архитектура разработки — Codex

## 5A. До получения хостинга

**Куда:** Codex  
**Прикрепить:**
- `MASTER_TZ_ARAL.md`
- `ARAL_catalog_enriched.xlsx`
- экспорт/спеки из Figma после утверждения

**Промт:**

> Изучи MASTER_TZ_ARAL.md и Figma handoff. Пока не фиксируй production stack, потому что параметры хостинга ещё не подтверждены. Сначала спроектируй нейтральную техническую архитектуру: маршруты, компонентную структуру, product data schema, compare state, filters, search model, PDS document links, import pipeline и responsive behavior. Подготовь ADR с 2–3 возможными вариантами реализации, зависимыми от будущих параметров хостинга. Никаких выдуманных API.

---

## 5B. После получения параметров хостинга

**Куда:** Codex  
**Прикрепить:**
- `MASTER_TZ_ARAL.md`
- Figma handoff/export
- `ARAL_catalog_enriched.xlsx`
- данные хостинга
- ADR из предыдущей задачи

**Промт:**

> На основе ТЗ, утверждённого Figma-handoff и параметров хостинга выбери production stack из ранее предложенных вариантов и реализуй проект поэтапно. Приоритет: component-based architecture, structured product data, 100+ товаров без хардкода, compare до 4 товаров с persistence, SEO-friendly routes, accessibility, reduced motion, responsive images, lazy loading, import script для XLSX/CSV, PDS links, filters и store locator. После каждого этапа запускай lint/typecheck/tests/build и не переходи дальше при ошибках. Не публикуй production без отдельного подтверждения.

---

# Этап 6. Независимый аудит — DeepSeek

## 6A. Аудит архитектуры до кода

**Куда:** DeepSeek  
**Прикрепить:**
- `MASTER_TZ_ARAL.md`
- ADR от Codex

**Промт:**

> Проведи независимый технический аудит архитектуры ARAL. Не перепроектируй продукт с нуля. Найди только риски, пропуски и ненужную сложность в: data model, масштабировании каталога до 100+, compare, фильтрах, search, PDS workflow, responsive, accessibility, SEO, performance и обновлении данных. Для каждого замечания дай severity: critical/high/medium/low и конкретное исправление. Не предлагай менять утверждённый UX без технической причины.

## 6B. Code review

**Куда:** DeepSeek  
**Прикрепить:**
- zip/repo snapshot или ключевые файлы реализации
- `MASTER_TZ_ARAL.md`

**Промт:**

> Проведи code review реализации ARAL против MASTER_TZ_ARAL.md. Ищи: расхождения с ТЗ, хардкод данных, проблемы типов, responsive, accessibility, state management, compare persistence, filter URL state, SEO, performance, security/forms. Не переписывай весь проект; выдай приоритетный список исправлений с файлами/участками кода.

---

# Этап 7. VS Code

VS Code использовать как рабочую среду, а не как отдельный ИИ.

Хранить рядом:
- репозиторий;
- `/docs/MASTER_TZ_ARAL.md`;
- `/docs/ADR.md`;
- `/data/ARAL_catalog_enriched.xlsx` или экспорт JSON;
- `/public/docs/pds/`;
- Figma handoff/spec;
- checklist QA.

Codex использовать прямо на репозитории, чтобы изменения были видны и проверяемы через git diff.

---

# Рекомендуемый порядок запуска

1. **Work:** номенклатура.
2. **Work:** PDS и обогащение данных.
3. **Work:** ARAL Germany terminology.
4. **Work:** Kärcher / LIQUI MOLY / STIHL / RAVENOL audits.
5. **Perplexity:** независимый research-check.
6. **Figma:** foundations → components → screens → prototype.
7. **ChatGPT:** финальная редактура контента на реальных PDS.
8. **Work:** хостинг audit, когда будут данные.
9. **Codex:** technical architecture → implementation.
10. **DeepSeek:** independent review.
11. **Codex:** fixes + QA.
12. Только после отдельного подтверждения — production deploy.

---

# Какие файлы где использовать кратко

| Файл | Work | Figma | Perplexity | Codex | DeepSeek |
|---|---:|---:|---:|---:|---:|
| MASTER_TZ_ARAL.md | ✅ | ✅ | ✅ | ✅ | ✅ |
| WORK_MODE_TASKS_AND_LINKS.md | ✅ | необязательно | — | — | — |
| FIGMA_BRANCH_BRIEF.md | ✅ для design-research | ✅ | — | ✅ как контекст | — |
| 01_LIQUI_MOLY_hero_reference.png | research | ✅ | — | — | — |
| 02_STIHL_megamenu_reference.png | research | ✅ | — | — | — |
| 03_STIHL_catalog_reference.png | research | ✅ | — | — | — |
| 04_Dark_scroll_storytelling_reference.png | — | ✅ | — | — | — |
| 05_Dark_logos_testimonials_reference.png | — | ✅ | — | — | — |
| 06_Layered_cards_reference.png | — | ✅ | — | — | — |
| 07_Approved_main_hero_reference.png | ✅ | ✅ приоритет | — | ✅ handoff context | — |
| 08_Approved_comparison_reference.png | ✅ | ✅ приоритет | — | ✅ handoff context | ✅ при UX audit |
| 10_BlueTronic_5W40_techsheet_example.pdf | ✅ PDS example | optional | — | data example | — |
| ARAL_catalog_raw.xlsx | ✅ | optional | — | later | — |
| ARAL_catalog_enriched.xlsx | ✅ | ✅ для real content | — | ✅ | ✅ audit |
| Figma handoff/export | — | source | — | ✅ | ✅ |
| Hosting info | ✅ audit | — | — | ✅ | ✅ |