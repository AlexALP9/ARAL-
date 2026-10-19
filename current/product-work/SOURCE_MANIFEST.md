# ARAL product data — source manifest

Репозиторий: `AlexALP9/ARAL-`

## 1. Технический MASTER

- `current/master/ARAL_PRODUCT_MASTER_v1.2.json`
- `current/master/ARAL_PRODUCT_MASTER_v1.2.md`

Роль:
- главный технический источник проекта;
- product/SKU mapping;
- PDS/SDS provenance;
- validation/publication statuses;
- разделение `public_product_data` и `internal_source_data`.

Не редактировать без отдельного решения о новой версии MASTER.

## 2. Content layer

- `current/content/ARAL_CONTENT_LAYER_v1.2.json`
- `current/content/ARAL_CONTENT_LAYER_v1.2.md`

Роль:
- descriptions;
- application;
- advantages;
- storage и другой подготовленный текст.

Не использовать как fallback для технических Performance-полей.

## 3. PDS acceptance

- `current/content/ARAL_PDS_ACCEPTANCE_MAP_v1.md`

Роль:
- принятые документы;
- решения по идентичности/соответствию;
- статус использования PDS.

## 4. Public catalog

- `current/catalog/ARAL_PUBLIC_CATALOG_v1.json`
- `current/catalog/ARAL_PUBLIC_CATALOG_v1.md`
- `current/catalog/ARAL_PUBLIC_CATALOG_INTEGRITY_REPORT_v1.md`

Роль:
- публичный слой данных;
- не использовать internal данные как fallback.

## 5. Media

- `current/media/ARAL_PUBLIC_MEDIA_MAP.json`
- `current/media/ARAL_PRODUCTION_MEDIA_MAP_v1.json`
- `current/media/ARAL_MEDIA_MANIFEST.json`
- `media/production/`

Правило:
точное соединение `internal_id + SKU + volume`.
Нельзя автоматически подставлять похожую упаковку.

## 6. Рабочая таблица

- `current/product-work/ARAL_PRODUCT_WORKING_TABLE_v1.csv`

Назначение:
- добавлять official product URLs;
- B2B/B2C purchase links;
- notes;
- conflicts;
- last_checked;
- action_required.

Рабочая таблица не имеет права молча переписывать MASTER.

## 7. Runtime сайта

- `catalog.json`

Это runtime catalog. Использовать для проверки интеграции, но не как authority для исправления MASTER.

## Приоритет

1. Пользовательский ассортимент: товар / commercial name / SKU / package.
2. MASTER: состояние данных проекта.
3. Официальный принятый PDS: технические характеристики.
4. Официальный SDS: отдельный safety source.
5. CONTENT_LAYER: редакционный контент.
6. Реальные изображения: визуальная идентичность.
7. Коммерческие страницы: purchase links.

## Статусы ссылок

Для новых ссылок использовать:
- `VERIFIED`
- `REVIEW_REQUIRED`
- `BROKEN`
- `ARCHIVED`

Для `purchase_link_type`:
- `DIRECT_PRODUCT`
- `CATEGORY`
- `HOMEPAGE`
- `MISSING`

## Ручной бинарный файл

Если нужен исходный Excel, вручную загрузить:
`ARAL_catalog_final.xlsx`
в:
`current/product-work/ARAL_catalog_final.xlsx`
