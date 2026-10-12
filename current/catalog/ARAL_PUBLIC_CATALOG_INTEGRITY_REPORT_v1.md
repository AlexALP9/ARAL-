# ARAL PUBLIC CATALOG v1 — проверка целостности

Дата проверки: 2026-10-12T15:53:28.494940+00:00

Каталог — отдельная публичная проекция замороженных источников. Новые исследования, выбор PDS и изменения технической базы не выполнялись.

## Контрольные показатели

| Показатель | Значение |
| --- | --- |
| products_total | 17 |
| sku_variants_total | 47 |
| missing_products | 0 |
| extra_products | 0 |
| duplicate_products | 0 |
| missing_SKU | 0 |
| duplicate_SKU | 0 |
| orphan_variants | 0 |
| missing_images | 0 |
| orphan_images | 0 |
| missing_media_mappings | 0 |
| orphan_media_mappings | 0 |
| image_mapping_changes | 0 |
| duplicate_image_paths | 0 |
| commercial_name_changes | 0 |
| category_changes | 0 |
| SAE_changes | 0 |
| package_size_changes | 0 |
| technical_publication_violations | 0 |
| technical_value_changes | 0 |
| internal_fields_exposed | 0 |
| unexpected_content_changes | 0 |
| non_production_image_paths | 0 |
| expected_count_errors | 0 |
| source_files_modified | 0 |

**integrity_errors = 0**

MASTER_modified = false

CONTENT_modified = false

MEDIA_modified = false

internal_id unchanged; commercial_name unchanged; SAE unchanged; SKU unchanged; package_size unchanged.

## Правила публичной проекции

- Технические значения скопированы исключительно из public_product_data. Внутренние статусы прочитаны только для ограничений публикации и аудита; внутренние API/ACEA/OEM/физические значения не используются как fallback.
- SAE ARAL-008: в public_product_data нет отдельного SAE. Значение 0W-30 сохранено как точная часть уже публичного commercial_name, чтобы выполнить требование неизменности коммерческой идентичности. Это не восстановление заблокированного Performance из internal_source_data. При аудите значение отдельно сопоставлено с идентификацией MASTER. Для ARAL-017 SAE остаётся null.
- official_approval, meets, recommended_for, application_reference и performance_level остаются раздельными. Значения claim_type сохранены. У ILSAC GF-5 EcoTronic F исходный claim_type отсутствует: тип не придуман, запись остаётся в other.
- Значения и написание спецификаций, включая VW 5 01 01 у BlueTronic II, не исправлялись. Названия и значения физических характеристик сохранены из публичной ветви MASTER без пересчётов.
- Используется только preferred_content_document_id, уже закреплённый MASTER. Проверен SHA-256 CONTENT_LAYER из каждой публичной ссылки MASTER. Разные редакции не смешиваются.
- Пустые content/technical-поля означают отсутствие опубликованных данных, а не отсутствие свойств или доказанную несовместимость. Утверждения о полноте технической карточки не добавлены.
- Все пути изображений в JSON относятся к /media/production/. Для размещения на сайте этот URL-префикс должен соответствовать существующей папке media/production. Сайт в этой задаче не создавался.
- Структура products[] и variants[] не ограничена 17 товарами. Числа 17/47 используются только как контроль данного выпуска.

## Исключения и ограничения публикации

ARAL-008 SuperTronic E: technical = {}; текстовые технические блоки не опубликованы, поскольку MASTER не предоставляет публичную ссылку на контент и запрещает техническую публикацию. Ни ACEA C2, ни ACEA A5/B5 не выбрана как правильная. Товар, коммерческий SAE, три SKU и изображения сохранены.

ARAL-014 MegaTurboral LA: Performance опубликован из публичной ветви MASTER. Typical Characteristics не опубликованы: physical_properties_status = manual_review. KV100 и Pour Point не подменены данными SDS. Описание и преимущества не содержат спорных численных физических значений.

ARAL-017 Silikatfrei G12: technical = {}; контент кандидата не опубликован. SKU 90837, фасовка и изображение сохранены. Изображение не меняет identity/performance/physical статусы.

- ARAL-005, content.application: Application принятого EN-контента называет Fiat 9.55535-S1 одобрением; MASTER разрешает только Meets. Блок целиком не опубликован, формулировка не исправлена.
- ARAL-012, content.application: Application принятой редакции содержит API SP / ILSAC GF-6, тогда как текущие публичные поля MASTER — API SQ / ILSAC GF-7. Исторический блок не использован для текущей применимости; обратная совместимость здесь не исследовалась и не отрицается.
- ARAL-013, content.application: Application контента описывает Low SAPS, тогда как public performance.application_references MASTER явно содержит «не Low SAPS». Блок не опубликован; источник и технический статус не изменены.

Эти пропуски — фильтрация публичного экспорта, а не исправление источников или разрешение конфликтов. Если нужен полный текст Application для ARAL-005/012/013, потребуется отдельно утвердить совместимый публичный блок; в этой задаче новый текст не создавался.

## Названия Extra / Plus

commercial_name во всех записях строго равен MASTER. Только в копиях текстовых блоков выполнена точная подстановка коммерческого названия вместо названия PDS. Остальные символы перевода не изменены. Это необходимо, чтобы название PDS не становилось публичным альтернативным названием; оригинальный CONTENT_LAYER сохранён без изменений.

| Товар | Блок | Исходное имя в тексте | Публичное имя | Замен |
| --- | --- | --- | --- | --- |
| ARAL-015 | description | Aral Turboral 10W-40 | Aral ExtraTurboral SAE 10W-40 | 1 |
| ARAL-015 | application | Aral Turboral 10W-40 | Aral ExtraTurboral SAE 10W-40 | 1 |
| ARAL-016 | description | Aral Turboral 15W-40 | Aral масло Turboral (Plus) 15W-40 | 1 |

SKU 22003 / 20 L использует утверждённое production-изображение. manual_visual_hold не создавался.

## Источники контента по товарам

| internal_id | Принятый документ | Результат |
| --- | --- | --- |
| ARAL-001 | wepp-dcrgw2 | Принятый перевод; блоки сохранены. |
| ARAL-002 | bpxe-9ar8eu | Принятый перевод; блоки сохранены. |
| ARAL-003 | wepp-dav4bq | Принятый перевод; блоки сохранены. |
| ARAL-004 | wepp-dejrb4 | Принятый перевод; блоки сохранены. |
| ARAL-005 | wepp-dea9dl | Принятый перевод; Application исключён. |
| ARAL-006 | wepp-ch72wf | Принятый перевод; блоки сохранены. |
| ARAL-007 | wepp-d6fpfv | Принятый перевод; блоки сохранены. |
| ARAL-008 | — | Не опубликован: отсутствует разрешённая публичная ссылка MASTER на контент. |
| ARAL-009 | wepp-dh9j8d | Принятый перевод; блоки сохранены. |
| ARAL-010 | wepp-df3s57 | Принятый перевод; блоки сохранены. |
| ARAL-011 | wepp-dbd8r2 | Принятый перевод; блоки сохранены. |
| ARAL-012 | wepp-d8te3h | Принятый перевод; Application исключён. |
| ARAL-013 | wepp-df4c8c | Принятый перевод; Application исключён. |
| ARAL-014 | wepp-df4cev | Принятый перевод; блоки сохранены. |
| ARAL-015 | aral_turboral_10w-40_germany_german_pdb_467759 | Принятый перевод; блоки сохранены. |
| ARAL-016 | aral_turboral_15w-40_germany_german_pdb_467736 | Принятый перевод; блоки сохранены. |
| ARAL-017 | — | Не опубликован: отсутствует разрешённая публичная ссылка MASTER на контент. |

## Полная сверка вариантов

| internal_id | commercial_name | SAE | SKU | Фасовка | Production image |
| --- | --- | --- | --- | --- | --- |
| ARAL-001 | Aral BlueTronic II 10W-40 | 10W-40 | 15F073 | 208 L | /media/production/ARAL-001_15F073_208L.jpg |
| ARAL-001 | Aral BlueTronic II 10W-40 | 10W-40 | 15F076 | 1 L | /media/production/ARAL-001_15F076_1L.jpg |
| ARAL-001 | Aral BlueTronic II 10W-40 | 10W-40 | 15F078 | 4 L | /media/production/ARAL-001_15F078_4L.jpg |
| ARAL-001 | Aral BlueTronic II 10W-40 | 10W-40 | 15F471 | 5 L | /media/production/ARAL-001_15F471_5L.jpg |
| ARAL-002 | Aral EcoTronic F 5W-20 | 5W-20 | 25094 | 4 L | /media/production/ARAL-002_25094_4L.jpg |
| ARAL-003 | Aral HighTronic 5W-40 | 5W-40 | 20637 | 1 L | /media/production/ARAL-003_20637_1L.jpg |
| ARAL-003 | Aral HighTronic 5W-40 | 5W-40 | 20632 | 208 L | /media/production/ARAL-003_20632_208L.jpg |
| ARAL-003 | Aral HighTronic 5W-40 | 5W-40 | 20634 | 4 L | /media/production/ARAL-003_20634_4L.jpg |
| ARAL-003 | Aral HighTronic 5W-40 | 5W-40 | 20635 | 5 L | /media/production/ARAL-003_20635_5L.jpg |
| ARAL-004 | Aral HighTronic F 5W-30 | 5W-30 | 10332 | 1 L | /media/production/ARAL-004_10332_1L.jpg |
| ARAL-004 | Aral HighTronic F 5W-30 | 5W-30 | 10333 | 208 L | /media/production/ARAL-004_10333_208L.jpg |
| ARAL-004 | Aral HighTronic F 5W-30 | 5W-30 | 10334 | 4 L | /media/production/ARAL-004_10334_4L.jpg |
| ARAL-005 | Aral HighTronic J 5W-30 | 5W-30 | 20198 | 1 L | /media/production/ARAL-005_20198_1L.jpg |
| ARAL-005 | Aral HighTronic J 5W-30 | 5W-30 | 20190 | 208 L | /media/production/ARAL-005_20190_208L.jpg |
| ARAL-005 | Aral HighTronic J 5W-30 | 5W-30 | 20194 | 4 L | /media/production/ARAL-005_20194_4L.jpg |
| ARAL-005 | Aral HighTronic J 5W-30 | 5W-30 | 20191 | 60 L | /media/production/ARAL-005_20191_60L.jpg |
| ARAL-006 | Aral HighTronic M 5W-40 | 5W-40 | 21407 | 1 L | /media/production/ARAL-006_21407_1L.jpg |
| ARAL-006 | Aral HighTronic M 5W-40 | 5W-40 | 156EC2 | 208 L | /media/production/ARAL-006_156EC2_208L.jpg |
| ARAL-006 | Aral HighTronic M 5W-40 | 5W-40 | 21404 | 4 L | /media/production/ARAL-006_21404_4L.jpg |
| ARAL-007 | Aral HighTronic R 5W-30 | 5W-30 | 16008 | 1 L | /media/production/ARAL-007_16008_1L.jpg |
| ARAL-007 | Aral HighTronic R 5W-30 | 5W-30 | 16004 | 4 L | /media/production/ARAL-007_16004_4L.jpg |
| ARAL-008 | Aral SuperTronic E 0W-30 | 0W-30 | 10508 | 1 L | /media/production/ARAL-008_10508_1L.jpg |
| ARAL-008 | Aral SuperTronic E 0W-30 | 0W-30 | 10502 | 208 L | /media/production/ARAL-008_10502_208L.jpg |
| ARAL-008 | Aral SuperTronic E 0W-30 | 0W-30 | 10504 | 4 L | /media/production/ARAL-008_10504_4L.jpg |
| ARAL-009 | Aral SuperTronic G 0W-40 | 0W-40 | 15A8A | 1 L | /media/production/ARAL-009_15A8A_1L.jpg |
| ARAL-009 | Aral SuperTronic G 0W-40 | 0W-40 | 15A8AD | 4 L | /media/production/ARAL-009_15A8AD_4L.jpg |
| ARAL-010 | Aral SuperTronic K 5W-30 | 5W-30 | 15DBCC | 1 L | /media/production/ARAL-010_15DBCC_1L.jpg |
| ARAL-010 | Aral SuperTronic K 5W-30 | 5W-30 | 15DBC5 | 20 L | /media/production/ARAL-010_15DBC5_20L.jpg |
| ARAL-010 | Aral SuperTronic K 5W-30 | 5W-30 | 15DBCE | 4 L | /media/production/ARAL-010_15DBCE_4L.jpg |
| ARAL-010 | Aral SuperTronic K 5W-30 | 5W-30 | 15F477 | 5 L | /media/production/ARAL-010_15F477_5L.jpg |
| ARAL-011 | Aral SuperTronic Longlife III 0W-30 | 0W-30 | 15F474 | 1 L | /media/production/ARAL-011_15F474_1L.jpg |
| ARAL-011 | Aral SuperTronic Longlife III 0W-30 | 0W-30 | 160EC7 | 5 L | /media/production/ARAL-011_160EC7_5L.jpg |
| ARAL-012 | Aral SuperTronic Longlife IV FE 0W-20 | 0W-20 | 15F45F | 1 L | /media/production/ARAL-012_15F45F_1L.webp |
| ARAL-012 | Aral SuperTronic Longlife IV FE 0W-20 | 0W-20 | 15F460 | 5 L | /media/production/ARAL-012_15F460_5L.webp |
| ARAL-013 | Aral MegaTurboral 10W-40 | 10W-40 | 23937 | 208 L | /media/production/ARAL-013_23937_208L.jpg |
| ARAL-013 | Aral MegaTurboral 10W-40 | 10W-40 | 13932 | 20 L | /media/production/ARAL-013_13932_20L.jpg |
| ARAL-013 | Aral MegaTurboral 10W-40 | 10W-40 | 10625 | 5 L | /media/production/ARAL-013_10625_5L.webp |
| ARAL-014 | Aral MegaTurboral LA 10W-40 | 10W-40 | 1620 | 20 L | /media/production/ARAL-014_1620_20L.jpg |
| ARAL-014 | Aral MegaTurboral LA 10W-40 | 10W-40 | 11289 | 208 L | /media/production/ARAL-014_11289_208L.jpg |
| ARAL-015 | Aral ExtraTurboral SAE 10W-40 | 10W-40 | 11190 | 208 L | /media/production/ARAL-015_11190_208L.jpg |
| ARAL-015 | Aral ExtraTurboral SAE 10W-40 | 10W-40 | 22003 | 20 L | /media/production/ARAL-015_22003_20L.webp |
| ARAL-015 | Aral ExtraTurboral SAE 10W-40 | 10W-40 | 22004 | 5 L | /media/production/ARAL-015_22004_5L.jpg |
| ARAL-015 | Aral ExtraTurboral SAE 10W-40 | 10W-40 | 2682 | 60 L | /media/production/ARAL-015_2682_60L.jpg |
| ARAL-016 | Aral масло Turboral (Plus) 15W-40 | 15W-40 | 22119 | 208 L | /media/production/ARAL-016_22119_208L.jpg |
| ARAL-016 | Aral масло Turboral (Plus) 15W-40 | 15W-40 | 11281 | 20 L | /media/production/ARAL-016_11281_20L.webp |
| ARAL-016 | Aral масло Turboral (Plus) 15W-40 | 15W-40 | 14047 | 60 L | /media/production/ARAL-016_14047_60L.jpg |
| ARAL-017 | Aral Silikatfrei G12 | — | 90837 | 1 L | /media/production/ARAL-017_90837_1L.jpg |

## Проверка media

Проверены 47 назначений и 47 существующих production-файлов. Ключ каждой связи — internal_id + SKU; фасовка сопоставлена с MASTER. Обнаружены 42 JPG и 5 WebP.

orphan_images означает файлы папки media/production без назначения в каталоге; исходники и тестовые папки не считаются orphan. Ссылки на тестовые папки не экспортированы. Общие изображения бочек допустимы: отдельные файлы SKU могут иметь одинаковые bytes; это не утверждение о видимой продуктовой этикетке.

## Неизменность источников

До и после сборки сравнены SHA-256 233 существовавших файлов: MASTER, CONTENT_LAYER, реестры/отчёты media и все файлы media. Изменённых файлов: 0. Изображения не открывались для перезаписи, не конвертировались и не перекодировались.

| Источник | Путь | SHA-256 до и после |
| --- | --- | --- |
| ARAL_PRODUCT_MASTER_v1.2.json | C:\Users\Shevc\Documents\Codex\2026-10-11\aral-https-msdspds-aral-com-1\outputs\ARAL_PRODUCT_MASTER_v1.2.json | 9982b9d5b37bd5d3cc281ae8dabc10da4c1913f25b08b359c87aa708067b0c94 |
| ARAL_CONTENT_LAYER_v1.2.json | C:\Users\Shevc\Documents\Codex\2026-10-11\aral-https-msdspds-aral-com-1\outputs\ARAL_CONTENT_LAYER_v1.2.json | d6cea271243b68f9db286afaf5a3c83672c657c953e5c57621e6c5ed8353e25a |
| ARAL_PRODUCTION_MEDIA_MAP_v1.json | C:\Users\Shevc\OneDrive\Документы\ChatGPT\ARAL\ARAL_PRODUCTION_MEDIA_MAP_v1.json | 305a3ecade1fc6a398e53c4247b1e2c187945b02edbc027b64374b98014cac2e |
| ARAL_PRODUCTION_MEDIA_REPORT_v1.md | C:\Users\Shevc\OneDrive\Документы\ChatGPT\ARAL\ARAL_PRODUCTION_MEDIA_REPORT_v1.md | c360dcff6eabf8c9c87b1345e089e920964ef9e8704a6fb2038cb8a18a32814b |

## Границы проверки

integrity_errors считает ошибки переноса, связей, типов утверждений, доступа к закрытым полям и изменения источников. Нулевое значение не означает, что исторические технические вопросы источников решены. Они исключены из публичных полей и перечислены выше.

JSON и Markdown содержат один публичный набор данных; внутренние сведения присутствуют только в данном отчёте. MASTER и CONTENT_LAYER не копировались и не редактировались.
