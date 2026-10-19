# ARAL product work — source index

Эта папка — рабочая точка входа для обычных ChatGPT-сессий, которые продолжают вести товарную базу ARAL через подключённый GitHub.

## Рабочая таблица

- `current/product-work/ARAL_PRODUCT_WORKING_TABLE_v1.csv`
  - 47 SKU-строк;
  - одна строка = один SKU / фасовка;
  - содержит товарные данные, media mapping, PDS/SDS, технические статусы, поля ссылок, конфликтов и action_required;
  - это рабочий слой, а не замена техническому MASTER.

## Канонические источники в репозитории

Технический authority:
- `current/master/ARAL_PRODUCT_MASTER_v1.2.json`
- `current/master/ARAL_PRODUCT_MASTER_v1.2.md`

Content layer:
- `current/content/ARAL_CONTENT_LAYER_v1.2.json`
- `current/content/ARAL_CONTENT_LAYER_v1.2.md`

PDS acceptance:
- `current/content/ARAL_PDS_ACCEPTANCE_MAP_v1.md`

Public catalog:
- `current/catalog/ARAL_PUBLIC_CATALOG_v1.json`
- `current/catalog/ARAL_PUBLIC_CATALOG_v1.md`
- `current/catalog/ARAL_PUBLIC_CATALOG_INTEGRITY_REPORT_v1.md`

Media:
- `current/media/ARAL_PUBLIC_MEDIA_MAP.json`
- `current/media/ARAL_PRODUCTION_MEDIA_MAP_v1.json`
- `current/media/ARAL_MEDIA_MANIFEST.json`
- `media/production/`

Runtime site catalog:
- `catalog.json`
- это runtime-артефакт сайта, а не технический authority.

Подробный порядок источников:
- `current/product-work/SOURCE_MANIFEST.md`

## Приоритет данных

1. Пользовательский ассортимент определяет товары, коммерческие названия, SKU и фасовки.
2. Frozen MASTER определяет текущие технические/publication статусы проекта.
3. Принятый официальный PDS определяет API/ACEA/OEM/typical characteristics.
4. Официальный SDS хранится отдельно как safety-source.
5. CONTENT_LAYER определяет подготовленный текст, но не заменяет технические поля.
6. Точная фотография продукта/SKU подтверждает визуальное соответствие, но не переписывает MASTER.
7. Retail/B2B страницы — коммерческие ссылки, не технические источники.

## Правило конфликтов

Никогда не заменять подтверждённое значение молча.

Сначала фиксировать:
- current value;
- new value;
- source;
- likely reason;
- recommended action.

После этого ждать решения пользователя.

## Известный конфликт для контроля

`ARAL-003 / SKU 20634 / 4 L`:
текущее фото показывает ACEA A3/B4 и MB 229.3/229.5, а текущий MASTER — ACEA C3 и MB-Approval 229.31/229.51.

Статус:
`IMAGE_LABEL_CONFLICT`.

Не менять технические данные MASTER по фотографии; требуется подходящее изображение 4 L для текущей технической версии.

## Старт нового обычного чата

Использовать:
- `current/product-work/CHAT_PROMPT_PRODUCT_TABLE.md`

Если GitHub подключён, основные материалы повторно прикладывать не нужно.

## РУЧНОЙ ШАГ — только если нужен исходный Excel

Локальный файл `ARAL_catalog_final.xlsx` сейчас не добавлен в GitHub автоматически. Его размер около 12 MB, а доступный GitHub-коннектор в этом чате надёжно пишет текстовые файлы, но не принимает локальный бинарный XLSX напрямую.

Если нужно, чтобы новый чат/разработчик имел именно исходный Excel, загрузить вручную в:

`current/product-work/ARAL_catalog_final.xlsx`

Для обычной работы со ссылками и проверками это не блокер: `ARAL_PRODUCT_WORKING_TABLE_v1.csv` + canonical JSON/MD уже находятся в GitHub.
