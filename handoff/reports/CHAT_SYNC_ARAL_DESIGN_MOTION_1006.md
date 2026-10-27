# CHAT SYNC — ARAL DESIGN / FIGMA / HERO / MOTION

**CHAT_KEY:** `ARAL_DESIGN_MOTION_1006`  
**Дата аудита:** 2026-10-22  
**Репозиторий:** `AlexALP9/ARAL-`  
**Базовая ветка:** `main`  
**Рабочая ветка:** `sync/chat-aral-design-motion-1006`  
**main tree SHA на старте аудита:** `ff14ac5b87c617c6c73fe2b55c8b63ffbad2ff31`

## Назначение чата
Черновое и последующее уточнение требований к монобрендовому сайту ARAL: структура, B2B/B2C, визуальные референсы, motion, инструменты разработки и исходная брендовая листовка.

## Правило приоритета
1. Последнее явное пользовательское решение.
2. `HERO/03_ARAL_HERO_4S_ANIMATION_PROMPT.md` для Hero motion.
3. `design/briefs/ARAL_DECISION_LOG_v1.0.md`.
4. `design/briefs/MASTER_TZ_ARAL_v1.0_FINAL_DRAFT.md`.
5. Рабочие design branches / reference prompts.
6. Ранние сообщения и исходные листовки только как DRAFT/reference.

Frozen MASTER, PUBLIC CATALOG, PDS/SDS и код сайта в рамках этой синхронизации не изменяются.

# 1. Карта статусов

## APPROVED

### HERO motion
Актуальная спецификация уже присутствует:
- `HERO/03_ARAL_HERO_4S_ANIMATION_PROMPT.md`
- Git blob SHA: `8c376a4c03586d71980530797ee05e08a203ad02`

Последнее подтверждённое решение:
- длительность около 4 секунд;
- экстремально крупный план главной 1L канистры;
- отъезд + подъём камеры;
- краткий акцент на крышке;
- переход к этикетке / полной канистре;
- ещё две 1L раскрываются веером;
- в основной композиции ровно 3 × 1L;
- только в конце: 20L слева, 5L справа, 208L бочка по центру сзади;
- светлый холодный studio/premium background;
- только реальные product images;
- запрещено изменять упаковку, этикетки, логотипы и пропорции;
- 2D/2.5D приоритетнее тяжёлого WebGL;
- обязательный `prefers-reduced-motion`.

Рабочий prompt:
- `HERO/04_WORK_PROMPT_ARAL_HERO_4S.md`
- Git blob SHA: `2cc34faaee7d1bdfc4a726280a597b6f1ec63e44`

### Разделение аудитории
Утверждено по логике Kärcher:
- «Для бизнеса»
- «Для автомобиля»

Файл:
- `design/branches/set_2/01_ARAL_структура_B2B_B2C.md`
- Git blob SHA: `5dd06371e0e2fd4409661257560e051fe5cb95ff`

Приоритет аудитории из MASTER:
- B2B ≈ 70%;
- B2C ≈ 30%.

### Визуальный язык
Утверждённое направление:
- LIQUI MOLY — светлый premium / product focus / whitespace / сильный hero;
- STIHL — UX architecture / mega-menu / catalog / B2B;
- Kärcher — только логика разделения аудиторий;
- EON EV — REJECTED полностью.

Файл:
- `design/branches/set_2/02_ARAL_визуальный_язык_и_референсы.md`
- Git blob SHA: `717a3b6261c4c3ff4baaee5323163fee7e47722a`

### Mega-menu
Утверждено:
- полноширинная панель;
- hover/click desktop;
- `+` / caret → active state;
- раскрытие сверху вниз;
- ориентир 250–350 ms;
- при смене разделов shell может оставаться открытым;
- mobile = fullscreen/large drawer + accordion;
- структура должна выдерживать 100+ товаров.

Файл:
- `design/branches/set_2/03_ARAL_меню_и_навигация.md`
- Git blob SHA: `3a97e3190842179fa90c667d24b7174ac65f0f35`

### Каталог и product cards
Утверждено по направлению:
- светлая минималистичная сетка;
- filters desktop слева;
- сортировка;
- 3–4 карточки в ряд;
- много whitespace;
- ограниченные содержательные badges;
- масштабирование 50+ → 100+ без смены основной структуры;
- каждый товар имеет отдельную Product Detail страницу.

Текущие источники:
- `design/branches/set_2/04_ARAL_каталог_карточки_акции.md`
- `design/briefs/MASTER_TZ_ARAL_v1.0_FINAL_DRAFT.md`

Product Detail:
- desktop = sections;
- mobile = accordion;
- официальный packshot / data только из утверждённых источников;
- Compare CTA;
- Buy CTA;
- документы / Performance / Description по принятой модели.

### Цвет / типографика / композиция
Утверждены принципы, но НЕ утверждены точные brand tokens:
- ARAL blue;
- white;
- dark navy;
- light gray;
- небольшие жёлтые акценты;
- современный sans-serif;
- высокая читаемость кириллицы;
- крупные заголовки;
- короткие строки;
- много воздуха;
- реальный продукт как главный визуальный объект.

**Точные HEX и официальный шрифт остаются MISSING/TBD до brand guide.**

## DRAFT

- ранний `HERO/01_HERO_LIQUI_MOLY_STYLE_PROMPT.md` — полезен как общий visual reference, но больше не является главным Hero motion prompt;
- `HERO/02_INTEGRATE_HERO_INTO_EXISTING_SITE_PROMPT.md` — integration draft, не разрешение менять production;
- конкретный React/Vite/GSAP stack из ранней переписки — архитектурный кандидат, но не утверждён до характеристик хостинга;
- отзывы / partner logo block — только рабочее направление до реальных данных;
- точные цвета/шрифты;
- Oil Finder / подбор по автомобилю.

## REJECTED

- EON EV как визуальный референс;
- тяжёлый футуристический AI-look;
- neon / постоянный glassmorphism;
- AI-generated product packshots как источник истины;
- изменение текста этикеток/логотипов/формы упаковки;
- NOMAD как основной визуальный стиль.

## SUPERSEDED

- ранняя идея aral.az / RAVENOL / NOMAD как основных комплексных визуальных ориентиров заменена системой LIQUI MOLY + STIHL + Kärcher;
- ранняя лёгкая Hero-анимация из `HERO/01...` заменена конкретной 4s motion sequence из `HERO/03...`.

# 2. Уникальные исходники этого чата

## ARAL leaflet page 01
Предлагаемый путь:
`design/source-materials/ARAL_leaflet_page_01.jpg`

- SHA-256: `2931fe9cd94ba5a6822048fa12aaa448d61891a0a02604b5ce0c3112504e1a4e`
- размер: 217070 bytes
- статус: DRAFT SOURCE / visual-historical reference
- exact binary duplicate внутри текущего chat context обнаружен под другим локальным именем; загружать только одну копию.

## ARAL leaflet page 02
Предлагаемый путь:
`design/source-materials/ARAL_leaflet_page_02.jpg`

- SHA-256: `1f9de894e7c0cf3a04f54ee2d6987fe4b6e5d37505be48d57370f8dda0150780`
- размер: 208358 bytes
- статус: DRAFT SOURCE / visual-historical reference

Обе страницы нельзя использовать как source of truth по текущим Performance / PDS / SKU / фасовкам. Для технических значений действует frozen MASTER + принятые PDS/SDS.

# 3. Уже присутствует в GitHub — повторно не загружать

- `design/briefs/MASTER_TZ_ARAL_v1.0_FINAL_DRAFT.md`
- `design/briefs/ARAL_DECISION_LOG_v1.0.md`
- `design/briefs/ARAL_SITEMAP_WIREFRAME_v1.md`
- `design/briefs/FIGMA_BRANCH_BRIEF.md`
- `design/branches/set_2/01_ARAL_структура_B2B_B2C.md`
- `design/branches/set_2/02_ARAL_визуальный_язык_и_референсы.md`
- `design/branches/set_2/03_ARAL_меню_и_навигация.md`
- `design/branches/set_2/04_ARAL_каталог_карточки_акции.md`
- `design/branches/set_2/05_ARAL_анимации_и_интерактив.md`
- `HERO/01_HERO_LIQUI_MOLY_STYLE_PROMPT.md`
- `HERO/02_INTEGRATE_HERO_INTO_EXISTING_SITE_PROMPT.md`
- `HERO/03_ARAL_HERO_4S_ANIMATION_PROMPT.md`
- `HERO/04_WORK_PROMPT_ARAL_HERO_4S.md`

# 4. Missing source materials

Следующие файлы упоминаются в актуальных design/HERO документах, но отсутствуют в фактической `main`:

- `HERO/ARAL_HERO_4S_STORYBOARD.jpg`
- `references/01_LIQUI_MOLY_hero_reference.png`
- `references/02_STIHL_megamenu_reference.png`
- `references/03_STIHL_catalog_reference.png`
- `references/04_Dark_scroll_storytelling_reference.png`
- `references/05_Dark_logos_testimonials_reference.png`
- `references/06_Layered_cards_reference.png`
- `references/07_Approved_main_hero_reference.png`
- `references/08_Approved_comparison_reference.png`

**Решение:** MISSING_SOURCE. Не генерировать замены и не восстанавливать по памяти.

Также в GitHub не обнаружена точная ссылка на реальный Figma design file. `FIGMA_BRANCH_BRIEF.md` — это бриф, а не Figma-прототип. Поэтому статический PNG или Markdown нельзя выдавать за Figma.

# 5. Figma status

**Точная Figma URL:** MISSING / не обнаружена в материалах этого чата и в фактических файлах GitHub.

Если позднее будет предоставлена реальная Figma URL/fileKey, её нужно добавить в отчёт отдельным commit без подмены статическим изображением.

# 6. Изменения, подготовленные в рабочей ветке

### Изменено
`HERO/README.md`
- добавлены явные статусы APPROVED / DRAFT / SUPERSEDED;
- `03_ARAL_HERO_4S_ANIMATION_PROMPT.md` зафиксирован как актуальный Hero motion source of truth;
- `04...` отмечен как рабочий prototype prompt;
- storyboard отмечен MISSING_SOURCE;
- production integration не разрешена автоматически.

### Добавлено
`design/source-materials/README.md`
- manifest двух уникальных листовок;
- SHA-256;
- размеры;
- правила использования;
- запрет считать листовки technical source of truth.

### Не изменялось
- `index.html`
- `assets/app.js`
- `assets/style.css`
- `catalog.json`
- `current/master/*`
- `current/content/*`
- `current/catalog/*`
- `current/media/*`

# 7. Требуется ручная бинарная загрузка

Текущий connector path не получает локальные JPG bytes из conversation runtime как input GitHub write-action.

Подготовлены пути:
- `design/source-materials/ARAL_leaflet_page_01.jpg`
- `design/source-materials/ARAL_leaflet_page_02.jpg`

После ручной загрузки обязательно проверить SHA-256 против значений выше.

# 8. Конфликты / решения пользователя

1. Нужны оригинальные отсутствующие `references/01…08`, если пользователь хочет сохранить их как реальные бинарные референсы.
2. Нужен оригинальный `HERO/ARAL_HERO_4S_STORYBOARD.jpg`, если storyboard должен храниться в GitHub.
3. Нужна точная Figma URL/fileKey, если существует рабочий интерактивный прототип.
4. Точные brand colors/fonts нельзя утверждать без официального brand guide.
5. Production Hero не менять в рамках этого PR.

# 9. Результат

Чат синхронизирован как DESIGN / FIGMA / HERO / MOTION источник без изменения frozen технических слоёв и без изменения кода сайта.
