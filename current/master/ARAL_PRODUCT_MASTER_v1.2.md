# ARAL PRODUCT MASTER v1.2

Основа: MASTER v1.1. Применены только изменения, разрешённые текущим заданием пользователя. Повторного поиска PDS/SDS и нового исследования не проводилось. Файлы v1.1, CONTENT_LAYER и карта принятия PDS сохранены без изменений.

## Итоговая таблица

| ID | Коммерческое название | SKU | Identity | Performance | Physical | Content | Technical publication |
|---|---|---:|---|---|---|---|---|
| ARAL-001 | Aral BlueTronic II 10W-40 | 4 | verified | review_note | review_note | complete | true |
| ARAL-002 | Aral EcoTronic F 5W-20 | 1 | verified | verified | review_note | complete | true |
| ARAL-003 | Aral HighTronic 5W-40 | 4 | verified | verified | review_note | complete | true |
| ARAL-004 | Aral HighTronic F 5W-30 | 3 | verified | verified | review_note | complete | true |
| ARAL-005 | Aral HighTronic J 5W-30 | 4 | verified | review_note | review_note | complete | true |
| ARAL-006 | Aral HighTronic M 5W-40 | 3 | verified | verified | review_note | complete | true |
| ARAL-007 | Aral HighTronic R 5W-30 | 2 | verified | verified | verified | complete | true |
| ARAL-008 | Aral SuperTronic E 0W-30 | 3 | verified | manual_review | review_note | complete | false |
| ARAL-009 | Aral SuperTronic G 0W-40 | 2 | verified | verified | review_note | complete | true |
| ARAL-010 | Aral SuperTronic K 5W-30 | 4 | verified | review_note | review_note | complete | true |
| ARAL-011 | Aral SuperTronic Longlife III 0W-30 | 2 | verified | review_note | review_note | complete | true |
| ARAL-012 | Aral SuperTronic Longlife IV FE 0W-20 | 2 | verified | verified | review_note | complete | true |
| ARAL-013 | Aral MegaTurboral 10W-40 | 3 | verified | verified | review_note | complete | true |
| ARAL-014 | Aral MegaTurboral LA 10W-40 | 2 | verified | verified | manual_review | complete | true |
| ARAL-015 | Aral ExtraTurboral SAE 10W-40 | 4 | user_confirmed | verified | verified | complete | true |
| ARAL-016 | Aral масло Turboral (Plus) 15W-40 | 3 | user_confirmed | verified | verified | complete | true |
| ARAL-017 | Aral Silikatfrei G12 | 1 | manual_review | manual_review | manual_review | unavailable | false |

## Контроль изменений относительно v1.1

- ARAL-001—ARAL-014: изменён только блок content — завершённый статус и ссылка на соответствующую запись CONTENT_LAYER v1.2 вместо устаревшего краткого текста. Main PDS, SDS, Performance, Typical Characteristics, SKU, фасовки и все технические статусы идентичны v1.1.
- ARAL-015—ARAL-016: применены точные коммерческие названия пользователя; identity=user_confirmed; назначены подтверждённые DE PDS; перенесены спецификации и типичные значения только из этих документов; Performance и Physical=verified; техническая публикация разрешена. Прежние выводы об идентичности сохранены как история в provenance, а не как действующие блокировки.
- ARAL-017: content=unavailable; добавлена отдельная user_provided_manual_reference. Технические поля, кандидатные материалы и блокировки не изменены.
- Итоговые счётчики, версия схемы, правила связи CONTENT и перечень источников пересчитаны.

**Контроль названий:** утверждённые пользователем названия соблюдены. Относительно старого файла v1.1 изменены ровно две строки:

| ID | Было в v1.1 | Стало по заданию пользователя |
|---|---|---|
| ARAL-015 | Aral Turboral (Extra) 10W-40 | Aral ExtraTurboral SAE 10W-40 |
| ARAL-016 | Aral Turboral (Plus) 15W-40 | Aral масло Turboral (Plus) 15W-40 |

Все остальные коммерческие названия сохранены. Названия из PDF не назначены публичными именами или aliases. У Extra/Plus official_name и current_line_name оставлены пустыми; исходное название PDF хранится только в provenance.

**Контроль ассортимента:** все 47 SKU и обе копии коммерческих данных (internal/public) содержательно идентичны v1.1; фасовки не изменены.

**Контроль CONTENT:** 16 complete означает полноту отдельного принятого контентного слоя. Тексты старых редакций не заменяют текущие API/ACEA/OEM и не получают автоматического разрешения публикации. Прежние краткие тексты доступны в неизменённом v1.1.

## Карточки MASTER

### ARAL-001 — Aral BlueTronic II 10W-40

Категория: PKW; SAE: 10W-40.

| SKU | Фасовка | Источник |
|---|---|---|
| 15F073 | 208 L | user_assortment |
| 15F076 | 1 L | user_assortment |
| 15F078 | 4 L | user_assortment |
| 15F471 | 5 L | user_assortment |

Identity: **verified**; Performance: **review_note**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-001; контентная редакция: wepp-dcrgw2.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=8485c0156e39da4cee8b8f48a8546696&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf",
  "date": "2025-11-03",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf",
  "status": "selected_main",
  "document_key_code": "470643",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0428f4325b4c17798e477f6ef1362e36&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_bluetronic_ii_10w-40_germany_german-de_sdb_470643.pdf",
  "date": "2026-01-22",
  "market": "Germany",
  "language": "de",
  "version": "5",
  "product_code": "470643-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SP"
  ],
  "acea": [
    "A3/B4"
  ],
  "official_approvals": [
    {
      "claim_original": "MB-Approval 229.3",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=8485c0156e39da4cee8b8f48a8546696&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [
    {
      "claim_original": "Meets - Fiat 9.55535-D2",
      "claim_type": "meets",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=8485c0156e39da4cee8b8f48a8546696&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "recommended_for": [],
  "other": [],
  "api_claim_original": "API SP",
  "acea_claim_original": "ACEA A3/B4",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [],
  "performance_levels": [
    {
      "claim_original": "VW 5 01 01 / 505 00",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=8485c0156e39da4cee8b8f48a8546696&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.864 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 14.3 |
| Динамическая вязкость CCS при −25 °C | ASTM D5293 | mPa.s (cP) | 6280 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 96.6 |
| Индекс вязкости | ASTM D2270 | — | 151 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -39 |
| Температура вспышки, PMCC | ASTM D93 | °C | 200 |
| Сульфатная зольность | ASTM D874 | % wt | 1.2 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- SDS пишет Blue Tronic II раздельно; SAE и документный код 470643 совпадают — орфографическое различие.
- PDS/SDS: KV100 14.3 входит в 13.8–16.3 mm²/s; плотность 0.864 g/ml согласуется с <1000 kg/m³. KV40 96.6 против 89.8 mm²/s и Pour Point −39 против −42 °C различаются: не объявлены округлением и не подменены. Типичные PDS-показатели сохранены; причина междокументной разницы не установлена.
- VW 5 01 01 сохранено в исходном написании PDS; нормализация в VW 501 01 не выполнена.
- Performance из PDS; сохранено нетипичное написание VW 5 01 01 без автоматической правки. Физические значения PDS/SDS различаются.

### ARAL-002 — Aral EcoTronic F 5W-20

Категория: PKW; SAE: 5W-20.

| SKU | Фасовка | Источник |
|---|---|---|
| 25094 | 4 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-002; контентная редакция: bpxe-9ar8eu.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf",
  "date": "2021-05-20",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf",
  "status": "selected_main",
  "document_key_code": null,
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=3616531cf5304ece397eb239c57a4d89&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german-de_sdb_468246.pdf",
  "date": "2024-06-04",
  "market": "Germany",
  "language": "de",
  "version": "12",
  "product_code": "468246-DE04",
  "access_status": "previously_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SN"
  ],
  "acea": [],
  "official_approvals": [],
  "meets": [
    {
      "claim_original": "Meets - Ford WSS-M2C948-B",
      "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf",
      "claim_type": "meets"
    }
  ],
  "recommended_for": [],
  "application_references": [
    {
      "claim_original": "Ford WSS-M2C913-B",
      "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf",
      "claim_type": "application_reference"
    },
    {
      "claim_original": "Ford WSS-M2C913-C",
      "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf",
      "claim_type": "application_reference"
    },
    {
      "claim_original": "Ford WSS-M2C925-B",
      "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf",
      "claim_type": "application_reference"
    }
  ],
  "performance_levels": [],
  "other": [
    {
      "claim_original": "ILSAC GF-5",
      "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D1298 | g/ml | 0.847 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 43.5 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 8.2 |
| Индекс вязкости | ASTM D2270 | — | 166 |
| Динамическая вязкость CCS при −30 °C (5W) | ASTM D5293 | mPa.s (cP) | 3450 |
| Вязкость HTHS при 150 °C | ASTM D4683 | cP | 2.6 |
| Температура застывания | ASTM D97 | °C | -45 |
| Температура вспышки PMCC | ASTM D93 | °C | 210 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- Точное имя и SAE 5W-20 подтверждены; замена на 0W-20 запрещена.
- В 2013 PDS API/ILSAC не указаны; отсутствие записи не отрицает Performance DE 2021. Ford 948-B остаётся Meets.
- KV40: DE 2021 43.5, EN 2013/SDS 43.51 mm²/s. Сохранено различие представления/редакций; причина округления не доказана. Диапазоны SDS для KV100, плотности и вспышки совместимы с PDS.
- Утверждённая номенклатура пользователя: SKU 25094 — 4 L; источник user_assortment.

### ARAL-003 — Aral HighTronic 5W-40

Категория: PKW; SAE: 5W-40.

| SKU | Фасовка | Источник |
|---|---|---|
| 20637 | 1 L | user_assortment |
| 20632 | 208 L | user_assortment |
| 20634 | 4 L | user_assortment |
| 20635 | 5 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-003; контентная редакция: wepp-dav4bq.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
  "date": "2024-11-08",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
  "status": "selected_main",
  "document_key_code": "467316",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=d8881dd1b94f7bafdc79e387cd081177&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german-de_sdb_467316.pdf",
  "date": "2026-04-08",
  "market": "Germany",
  "language": "de",
  "version": "3.04",
  "product_code": "467316-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "CF",
    "SN"
  ],
  "acea": [
    "C3"
  ],
  "official_approvals": [
    {
      "claim_original": "MB-Approval 229.31/ 229.51",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [
    {
      "claim_original": "Meets Fiat 9.55535-S2, Ford WSS-M2C917-A, MB-226.5",
      "claim_type": "meets",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "recommended_for": [],
  "other": [],
  "api_claim_original": "API CF/SN",
  "acea_claim_original": "ACEA C3",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [],
  "performance_levels": [
    {
      "claim_original": "GMdexos2™ supersedes GM-LL-B-025 and GM-LL-A-025",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "OPEL OV 040 1547-D40",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Porsche A40",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Renault RN 0700 / RN 0710",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "VW 505 00/ 505 01",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.849 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 13.5 |
| Динамическая вязкость CCS при −30 °C | ASTM D5293 | mPa.s (cP) | 5875 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 79 |
| Индекс вязкости | ASTM D2270 | — | 174 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -42 |
| Сульфатная зольность | ASTM D874 | % wt | 0.8 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- SDS 2026: KV100 13.8–16.34 mm²/s; немецкий PDS 13.5 выходит за диапазон. Английский PDS 14.0 согласуется с SDS. Автоматический выбор формулы не сделан.
- Performance DE/Global согласован; основной DE PDS новее на день. Reference согласуется с перечисленными значениями; это не чтение журнала.

### ARAL-004 — Aral HighTronic F 5W-30

Категория: PKW; SAE: 5W-30.

| SKU | Фасовка | Источник |
|---|---|---|
| 10332 | 1 L | user_assortment |
| 10333 | 208 L | user_assortment |
| 10334 | 4 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-004; контентная редакция: wepp-dejrb4.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf",
  "date": "2025-03-06",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf",
  "status": "selected_main",
  "document_key_code": "456182",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=add807b47040db44b3008baf86597def&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german-de_sdb_456182.pdf",
  "date": "2025-12-09",
  "market": "Germany",
  "language": "de",
  "version": "17.01",
  "product_code": "456182-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SP",
    "CF"
  ],
  "acea": [
    "A5/B5"
  ],
  "official_approvals": [],
  "meets": [
    {
      "claim_original": "Meets Ford WSS-M2C913-A/ B/ C/ D",
      "claim_type": "meets",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "recommended_for": [
    {
      "claim_original": null,
      "reference": "Ford diesel engines",
      "claim_type": "recommended_for",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf",
      "source_section": "Beschreibung"
    }
  ],
  "other": [
    {
      "claim_original": "ILSAC GF-6",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "api_claim_original": "API SP/CF",
  "acea_claim_original": "ACEA A5/B5",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [
    {
      "claim_original": null,
      "reference": "ACEA A1/B1; ACEA A5/B5; Ford, Volvo, Jaguar, Land Rover",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf",
      "source_section": "Beschreibung (отдельного Application нет)"
    }
  ],
  "performance_levels": []
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.85 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 9.7 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 55 |
| Индекс вязкости | ASTM D2270 | — | 162 |
| Динамическая вязкость CCS при −30 °C | ASTM D5293 | mPa.s (cP) | 4750 |
| Вязкость HTHS при 150 °C | ASTM D4741 | cP | 2.96 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -42 |
| Температура вспышки, PMCC | ASTM D93 | °C | 204 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- SDS: KV100 9.8–11.2 против DE PDS 9.7; KV40 58 против 55; Pour Point −33 против −42 °C. В Performance только Meets Ford, не OEM approval.
- Performance согласован; Ford остаётся Meets. Opel OV0401547-D40 не добавлен. DE/Global физические таблицы одной даты сохранены отдельно.

### ARAL-005 — Aral HighTronic J 5W-30

Категория: PKW; SAE: 5W-30.

| SKU | Фасовка | Источник |
|---|---|---|
| 20198 | 1 L | user_assortment |
| 20190 | 208 L | user_assortment |
| 20194 | 4 L | user_assortment |
| 20191 | 60 L | user_assortment |

Identity: **verified**; Performance: **review_note**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-005; контентная редакция: wepp-dea9dl.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=fe22a203db6bba42c3a3924948fb7743&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf",
  "date": "2025-02-26",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf",
  "status": "selected_main",
  "document_key_code": "466947",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://msdspds.aral.com/ussds/amersdsf.nsf/Files/41575EA6F7CB553380258D9A00264DC5/%24File/3259434.pdf",
  "date": "2026-02-06",
  "market": "Hungary",
  "language": "hu",
  "version": "7",
  "product_code": "466947-DE04",
  "access_status": "official_url_search_index_excerpt_only"
}
```

**Performance / Specifications:**

```json
{
  "api": [],
  "acea": [
    "C2"
  ],
  "official_approvals": [
    {
      "claim_original": "PSA Approval B71 2290",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=fe22a203db6bba42c3a3924948fb7743&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [
    {
      "claim_original": "Meets Fiat 9.55535-S1",
      "claim_type": "meets",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=fe22a203db6bba42c3a3924948fb7743&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "recommended_for": [],
  "other": [],
  "api_claim_original": null,
  "acea_claim_original": "ACEA C2",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [
    {
      "claim_original": null,
      "reference": "Бензиновые и дизельные двигатели; сажевые фильтры",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=fe22a203db6bba42c3a3924948fb7743&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf",
      "source_section": "Beschreibung (отдельного Application нет)"
    }
  ],
  "performance_levels": []
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.849 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 9.5 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 51 |
| Индекс вязкости | ASTM D2270 | — | 172 |
| Динамическая вязкость CCS при −30 °C | ASTM D5293 | mPa.s (cP) | 4100 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -39 |
| Сульфатная зольность | ASTM D874 | % wt | 0.56 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- PDS DE/EN совпадают по общим строкам; только EN дополнительно содержит вспышку 220 °C ASTM D93. Она оставлена в отдельной редакции.
- EN Application употребляет approved рядом с Fiat, но раздел Performance явно говорит Meets Fiat 9.55535-S1. В массив OEM approvals Fiat не перенесён.
- Венгерский SDS 466947-DE04: KV40 60.3 против 51 mm²/s PDS; это не округление. KV100 9.5 входит в 9.3–12.44; Pour Point −39 совпадает. Региональный SDS не заменяет немецкий PDS и не подтверждает формулу конкретной упаковки.
- SDS найден на официальном домене через индекс; полное прямое открытие не удалось. Рынок HU не следует автоматически использовать как SDS для иной страны.
- В EN Application Fiat упомянут как approved, но Performance явно Meets. Для публикации Fiat только Meets; физические различия HU SDS отдельно.

### ARAL-006 — Aral HighTronic M 5W-40

Категория: PKW; SAE: 5W-40.

| SKU | Фасовка | Источник |
|---|---|---|
| 21407 | 1 L | user_assortment |
| 156EC2 | 208 L | user_assortment |
| 21404 | 4 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-006; контентная редакция: wepp-ch72wf.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
  "date": "2022-08-10",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
  "status": "selected_main",
  "document_key_code": "467457",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=c15d553ca1730685cd59eb7b1d9af9d6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german-de_sdb_467457.pdf",
  "date": "2026-04-09",
  "market": "Germany",
  "language": "de",
  "version": "13",
  "product_code": "467457-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SP"
  ],
  "acea": [
    "A3/B4"
  ],
  "official_approvals": [
    {
      "claim_original": "MB-Approval 226.5/ 229.3/ 229.5",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [],
  "recommended_for": [],
  "other": [],
  "api_claim_original": "API SP",
  "acea_claim_original": "ACEA A3/B4",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [
    {
      "claim_original": null,
      "reference": "Mercedes-Benz; AMG; Brabus; VW",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
      "source_section": "Beschreibung (отдельного Application нет)"
    }
  ],
  "performance_levels": [
    {
      "claim_original": "BMW Longlife-01",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Porsche A40",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Renault RN 0700 / RN 0710",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "VW 502 00/ 505 00",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0,8519 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 12,9 |
| Динамическая вязкость CCS при −30 °C | ASTM D5293 | mPa.s (cP) | 6000 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 70 |
| Индекс вязкости | ASTM D2270 | — | 188 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -45 |
| Температура вспышки, PMCC | ASTM D93 | °C | 213 |
| Сульфатная зольность | ASTM D874 | % wt | 1,2 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- Performance согласован; DE/Global PDS одной даты. Основной DE; физические таблицы не смешаны.

### ARAL-007 — Aral HighTronic R 5W-30

Категория: PKW; SAE: 5W-30.

| SKU | Фасовка | Источник |
|---|---|---|
| 16008 | 1 L | user_assortment |
| 16004 | 4 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **verified**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-007; контентная редакция: wepp-d6fpfv.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=1fe8cdd97481044e39c25f99584b68e0&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf",
  "date": "2024-06-21",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf",
  "status": "selected_main",
  "document_key_code": "466927",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://msdspds.aral.com/ussds/amersdsf.nsf/Files/DC12B86E54D42D9F80258DAB005800B2/%24File/3264125.pdf",
  "date": "2026-02-26",
  "market": "Hungary",
  "language": "hu",
  "version": "7",
  "product_code": "466927-BE02",
  "access_status": "official_url_search_index_excerpt_only"
}
```

**Performance / Specifications:**

```json
{
  "api": [],
  "acea": [
    "C4"
  ],
  "official_approvals": [
    {
      "claim_original": "MB-Approval 226.51",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=1fe8cdd97481044e39c25f99584b68e0&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [],
  "recommended_for": [],
  "other": [],
  "api_claim_original": null,
  "acea_claim_original": "ACEA C4",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [
    {
      "claim_original": null,
      "reference": "ACEA C4; Renault; DPF",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=1fe8cdd97481044e39c25f99584b68e0&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf",
      "source_section": "Beschreibung (отдельного Application нет)"
    }
  ],
  "performance_levels": [
    {
      "claim_original": "Renault RN 0720",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=1fe8cdd97481044e39c25f99584b68e0&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.850 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 12.2 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 71 |
| Индекс вязкости | ASTM D2270 | — | 171 |
| Динамическая вязкость CCS при −30 °C | ASTM D5293 | mPa.s (cP) | 6200 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -45 |
| Температура вспышки, PMCC | ASTM D93 | °C | 238 |
| Сульфатная зольность | ASTM D874 | % wt | 0.5 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- Общие показатели DE и Global/EN PDS совпадают; немецкий документ на день новее. Найден HU SDS, но раздел 9 недоступен.
- SDS найден на официальном домене через индекс; полное прямое открытие не удалось. Рынок HU не следует автоматически использовать как SDS для иной страны.
- Performance и общие физические строки двух PDS совпадают. Section 9 HU SDS не извлечён: verified относится к PDS, не к полноте SDS.

### ARAL-008 — Aral SuperTronic E 0W-30

Категория: PKW; SAE: 0W-30.

| SKU | Фасовка | Источник |
|---|---|---|
| 10508 | 1 L | user_assortment |
| 10502 | 208 L | user_assortment |
| 10504 | 4 L | user_assortment |

Identity: **verified**; Performance: **manual_review**; Physical: **review_note**; technical_publication_allowed: **false**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-008; контентная редакция: wepp-djce7p.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf",
  "date": "2025-06-02",
  "market": "Global",
  "language": "en",
  "document_key": "aral_supertronic_e_0w-30_global_english_pdb_463348.pdf",
  "status": "selected_main",
  "document_key_code": "463348",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://msdspds.aral.com/ussds/amersdsf.nsf/Files/2276ECF64B17A03480258D5D00791DEB/%24File/3244703.pdf",
  "date": "2025-12-10",
  "market": "Hungary",
  "language": "hu",
  "version": "1.03",
  "product_code": "463348-DE01",
  "access_status": "official_url_search_index_excerpt_only"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SP"
  ],
  "acea": [
    "C2"
  ],
  "api_claim_original": "API SP",
  "acea_claim_original": "ACEA C2",
  "official_approvals": [],
  "meets": [],
  "recommended_for": [
    {
      "claim_original": "strongly recommended for use in Volvo vehicles",
      "claim_type": "recommended_for",
      "source_section": "Application",
      "source_url": "https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf"
    }
  ],
  "other": [],
  "application_references": [
    {
      "claim_original": "ACEA A5/B5",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf",
      "source_section": "Description / Application"
    }
  ],
  "performance_levels": []
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.8420 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 10.6 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 56.9 |
| Индекс вязкости | ASTM D2270 | — | 180 |
| Динамическая вязкость CCS при −35 °C | ASTM D5293 | mPa.s (cP) | 5685 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -42 |
| Температура вспышки, PMCC | ASTM D93 | °C | 209 |
| Сульфатная зольность | ASTM D874 | % wt | 0.6 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- Новая EN редакция 2025-06-02 сохранена как источник с конфликтом; старую DE 2021-05-20 не заменял молча. HU SDS: KV100 9.55–10 не включает EN PDS 10.6 mm²/s.
- SDS найден на официальном домене через индекс; полное прямое открытие не удалось. Рынок HU не следует автоматически использовать как SDS для иной страны.
- Внутри выбранного PDS: ACEA C2 в Performance против A5/B5 в Application. Физические редакции разных дат и рынков сохранены отдельно.

**Сохранённые неразрешённые вопросы:**

```json
[
  {
    "field": "ACEA Performance vs Application",
    "pds_value": "Performance: ACEA C2",
    "other_value": "Description/Application: ACEA A5/B5",
    "pds_url": "https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf",
    "other_source_url": "https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf",
    "reason": "Несогласованность внутри EN PDS 2025-06-02; применимость нельзя автоматически определить.",
    "resolution": null
  },
  {
    "field": "Performance edition",
    "pds_value": "API SP; ACEA C2",
    "other_value": "API SL/CF; ACEA A5/B5",
    "pds_url": "https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf",
    "other_source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=80614e0f24eec2af3c9384c3d0a3a9e1&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_germany_german_pdb_463348.pdf",
    "reason": "DE 2021 и EN 2025 имеют разные Performance и характеристики; преемственность состава не установлена.",
    "resolution": null
  }
]
```

### ARAL-009 — Aral SuperTronic G 0W-40

Категория: PKW; SAE: 0W-40.

| SKU | Фасовка | Источник |
|---|---|---|
| 15A8A | 1 L | user_assortment |
| 15A8AD | 4 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-009; контентная редакция: wepp-dh9j8d.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=89b904a8c0f9dd2d43f8aae5e3bf8b5e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf",
  "date": "2025-11-03",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf",
  "status": "selected_main",
  "document_key_code": "469294",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```
