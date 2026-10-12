# ARAL Turboral — история названий и связь семи SKU

**Проверено 11.10.2026. Исследованы только две заданные коммерческие позиции.**

Ваши товары и принадлежность SKU приняты как факт по вашей номенклатуре. Отсутствие внешнего совпадения не означает, что товара у вас нет.

**Вывод:** ExtraTurboral SAE 10W-40 и PlusTurboral SAE 15W-40 были официальными историческими названиями. Каталог февраля 2013 прямо показывает переход к Turboral соответствующей вязкости. Однако история имени не доказывает ни неизменность масла, ни соответствие каждого вашего SKU нынешней упаковке и PDS. Для полной связи обеих коммерческих позиций: **confidence = medium, manual_review = true**. Характеристики не перенесены.

## Хронология доказательств

- **Сентябрь 2006 — H06:** брошюра ARAL, Art. No. P50011, с названиями ExtraTurboral и PlusTurboral; MultiTurboral указан отдельно. Это документ изготовителя в сторонней републикации.
- **Февраль 2013 — H13:** каталог ARAL AL-00122, 02/13/V2, обозначает оба названия как прежние; для 15W-40 указаны PlusTurboral и MultiTurboral. Документ также говорит об усовершенствовании линейки с XMF. Точная дата переименования не установлена.
- **Май 2014 — H14:** под Turboral 10W-40 перечислены 22003 / 20 л и 22004 / 5 л. Под Turboral 15W-40 для 208/20 л перечислены 22010/22013, а не ваши 22119/11281. Это различие идентификаторов, не доказательство разных масел.
- **Январь 2024 — C24:** каталог с официального домена ARAL содержит нынешние названия, новые артикулы и EAN. Текущая официальная страница NOW подтверждает соответствующие фасовки.

Архивные документы служат основным доказательством истории; магазины — только дополнительным доказательством артикулов. Копии 2006/2013/2014 размещены не на домене изготовителя. Даты определены по выходным данным, не по дате поисковой индексации. High ниже относится только к истории названий; общая оценка соответствия остаётся medium.

## Aral Turboral (Extra) 10W-40

| Поле | Результат |
|---|---|
| `commercial_name` | Aral Turboral (Extra) 10W-40 |
| `official_current_name` | Aral Turboral 10W-40 |
| `official_historical_name` | Aral ExtraTurboral SAE 10W-40 |
| `our_skus` | 11190, 22003, 22004, 2682 |
| `confidence` | medium |
| `manual_review` | true |
| `historical_name_confidence` | high |
| `characteristics_transfer_allowed` | false |

Официальное прежнее название продуктовой линии; запись Turboral (Extra) — коммерческая форма совмещения нынешнего и прежнего имени.

`official_current_name` — установленный преемник продуктовой линии; поле не означает одобренную замену всех SKU.

**matching_evidence[]**

- Брошюра ARAL сентября 2006 года содержит ExtraTurboral SAE 10W-40 как самостоятельное официальное название. Источники: H06.
- Каталог ARAL февраля 2013 года прямо называет ExtraTurboral SAE 10W-40 прежним именем Turboral SAE 10W-40. Источники: H13.
- Каталог мая 2014 года относит 22003 (20 л) и 22004 (5 л) к Turboral SAE 10W-40. Источники: H14.
- Официальный каталог 2024 и текущая страница подтверждают Turboral 10W-40 с современными артикулами; DOK/TTO дополнительно связывают 22003 с 15BCD2. Источники: C24, NOW, R22003, R22003B.

**conflicting_evidence[]**

- Исторический API CH-4/SJ в брошюре 2006 отличается от API CI-4/SL в PDS 24.03.2025. Преемственность названия не доказывает неизменность редакции или формулы. Источники: H06, T10-CANDIDATE-PDS-20250324.
- 11190 у одного продавца означает 208 л, у другого 205 л; официальный cross-reference 11190 → современный артикул не найден. Источники: R11190, R11190B.
- 2682 указан как артикул магазина; статус номера изготовителя не доказан. В официальных каталогах для 60 л встречаются 22001 (2014) и 15BCD4 (2024), но таблицы замены с 2682 нет. Источники: R2682, H14, C24.

## Aral Turboral (Plus) 15W-40

| Поле | Результат |
|---|---|
| `commercial_name` | Aral Turboral (Plus) 15W-40 |
| `official_current_name` | Aral Turboral 15W-40 |
| `official_historical_name` | Aral PlusTurboral SAE 15W-40 |
| `our_skus` | 22119, 11281, 14047 |
| `confidence` | medium |
| `manual_review` | true |
| `historical_name_confidence` | high |
| `characteristics_transfer_allowed` | false |

Официальное прежнее название; каталог 2013 объединяет в преемственности PlusTurboral и MultiTurboral. Запись Turboral (Plus) — коммерческое сохранение старого имени.

`official_current_name` — установленный преемник продуктовой линии; поле не означает одобренную замену всех SKU.

**matching_evidence[]**

- Брошюра ARAL сентября 2006 содержит PlusTurboral SAE 15W-40 и отдельно MultiTurboral SAE 15W-40. Название Plus не является только изобретением продавцов. Источники: H06.
- Оглавление каталога ARAL февраля 2013 прямо связывает Turboral SAE 15W-40 с прежними PlusTurboral и MultiTurboral. Источники: H13.
- Текущая официальная страница и каталог 2024 подтверждают название Turboral 15W-40. Источники: C24, NOW.
- 22119 встречается у продавцов как Turboral и Plus Turboral 15W-40, 208 л; 11281 — как PlusTurboral 15W-40, 20 л. Это вспомогательные связи. Источники: R22119, R22119B, R11281, R11281B.

**conflicting_evidence[]**

- В брошюре 2006 PlusTurboral имеет API CI-4/SJ и ограничение применения в бензиновых двигателях; текущий PDS 27.03.2025 содержит API CI-4/SL. Характеристики разных лет не взаимозаменяемы автоматически. Источники: H06, T15-CANDIDATE-PDS-20250327.
- Каталог 2013 указывает двух предшественников, а не простую взаимозаменяемость всех старых фасовок и составов. Источники: H13.
- Официальные номера 2014 для 208/20 л — 22010/22013; в каталоге 2024 — 15BC61/15BC5E. Связки с 22119 и 11281 в первичном документе не найдены. Источники: H14, C24.
- 14047 принят как ваш SKU, но релевантного внешнего подтверждения названия, фасовки или кода производителя не найдено. Это пробел доказательства, не утверждение об ошибке вашей номенклатуры.

## Можно ли однозначно связать наши SKU с текущими продуктами?

**Пока нет для всей семёрки.** Для 22003 и 22004 историческая связь с Turboral 10W-40 надёжно подтверждается каталогом. Связь с текущими артикулами и применимость нынешнего PDS к вашим запасам требует дополнительного подтверждения.

Все номера в колонке «Современная фасовка для проверки» — кандидаты по линии и объёму, не утверждённые замены. Фасовки взяты из найденных источников; вы их пока не подтвердили.

| Наш SKU | Найденная связь / объём | Современная фасовка для проверки | Confidence текущей связи | Пробел или конфликт |
|---|---|---|---|---|
| 11190 | ExtraTurboral / Turboral 10W-40 у продавцов; 205/208 л | 15BCD3; EAN 4008177148606 | low | Расхождение 205/208 л; нет документа замены номера. |
| 22003 | Turboral SAE 10W-40 в каталоге 2014; 20 л | 15BCD2; EAN 4008177148590 | medium | Исторический номер установлен; прямая связь с новым номером есть лишь у продавцов. Партия вашего товара не установлена. |
| 22004 | Turboral SAE 10W-40 в каталоге 2014; 5 л | 15F45C; EAN 4008177182402 | medium | Совпадают линия и фасовка; официальная таблица замены старого номера на текущий не найдена. |
| 2682 | Turboral 10W-40 у OIL-STORE; 60 л | 15BCD4; EAN 4008177148613 | low | Может быть локальным артикулом продавца; происхождение номера не установлено. |
| 22119 | Turboral / Plus Turboral 15W-40 у продавцов; 208 л | 15BC61; EAN 4008177148217 | low | Старый/локальный номер не связан с текущим номером документом изготовителя. |
| 11281 | PlusTurboral 15W-40 у продавцов; 20 л | 15BC5E; EAN 4008177148194 | low | Подтверждена лишь торговая связь с прежним названием; официальная связь с текущей редакцией отсутствует. |
| 14047 | Только принадлежность к продукту по сообщению пользователя; объём неизвестен | Не определена | low | Внешняя идентификация не найдена; фасовку и текущий номер не предполагаем. |

## Непроверенные источники и ограничения

- Журнал 2026 и строки исходной таблицы с EAN, кодом изготовителя и партией не предоставлены. Пользовательские SKU приняты как существующие позиции; их отсутствие в интернете не означает отсутствие товара.
- Датированные старые PDS/SDS непосредственно под ExtraTurboral и PlusTurboral не найдены в доступной выдаче. Их нельзя заменить каталогом: историческое доказательство здесь — именно каталоги и брошюра.
- Архивы 2006/2013/2014 — копии документов с указанием ARAL как автора на сторонних хостах; оригинальные файлы этих редакций на доменах ARAL/BP/Castrol не найдены. Визуальная проверка PDF через screenshot не удалась; использован извлечённый текст.
- Поиск изображений и карточек упаковок не дал проверенного фото, на котором одновременно читаются один из заданных SKU, название, SAE и идентификатор партии/EAN. Фотографии продавцов не приняты как доказательство связи SKU.

Нынешние PDS/SDS из предыдущего теста сохранены в реестре источников. Они подтверждают нынешнее Product Name, но не содержат доказанного перехода от каждого заданного фасовочного SKU. Старые каталоги не переименованы в PDS/SDS.

Доказательств, что Extra/Plus являются отдельными нынешними параллельными продуктами, не найдено. При этом старые продукты/редакции нельзя считать химически тождественными нынешним: менялись заявленные спецификации и область применения. Скобочная запись вашей номенклатуры сохранена.

## Что позволит закрыть manual_review

- Строки журнала 2026: SKU, EAN, артикул изготовителя/поставщика, фасовка, дата поступления и партия.
- Фото передней/задней этикетки, EAN и кода партии ваших единиц товара, особенно 11190, 2682 и 14047.
- Официальная таблица смены артикулов либо подтверждение изготовителя для связи старых/локальных SKU с текущими.

## Реестр источников

**H06** — [ARAL At a Glance; Aral Aktiengesellschaft; Art. No. P50011](https://www.yumpu.com/en/document/view/42078878/at-a-glance)

Тип: manufacturer_authored_brochure_third_party_copy. Дата документа: 2006-09. Место: Printed p.11; publication date in imprint.

**H13** — [ARAL Product Catalogue; AL-00122; 02/13/V2](https://gplubs.weebly.com/uploads/1/3/6/1/13614238/aral.pdf)

Тип: manufacturer_authored_catalog_third_party_copy. Дата документа: 2013-02. Место: PDF p.2 index; p.6 product tables; p.11 imprint.

**H14** — [ARAL Produktkatalog; Stand PDF: Mai 2014](https://www.energie-berg.de/fileadmin/user_upload/dokumente/kataloge/140604_ARA-Produktkatalog2014_deutsch_ES_RZ.pdf)

Тип: manufacturer_authored_catalog_third_party_copy. Дата документа: 2014-05. Место: Printed/PDF p.10; imprint p.20.

**H00** — [ARAL Motorenöle für Nutzfahrzeuge (undated extract)](https://www.zahradnik.com/schmierstoffe/downloads.html?file=files/kunde/inhalt/Schmierstoffe/Downloads/motorenoele-nutzfahrzeuge.pdf)

Тип: branded_catalog_extract_third_party_copy. Дата документа: не установлена / веб-страница. Место: PDF p.1.

**C24** — [ARAL Produktkatalog V1 Januar 2024](https://www.aral-lubricants.de/fileadmin/user_upload/Aral_Lubes/Aral-Services/Bibliothek/pdf/ARAL_Produktkatalog_V1Januar_2024.pdf)

Тип: manufacturer_document_official_host. Дата документа: 2024-01. Место: PDF pp.10–11.

**NOW** — [ARAL Motorenöle LKW](https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-lkw)

Тип: manufacturer_current_web_page. Дата документа: не установлена / веб-страница. Место: Turboral 10W-40 and 15W-40 blocks.

**R11190** — [ВсеИнструменты — 11190, Turboral /Extra/, 208 л](https://www.vseinstrumenti.ru/product/maslo-aral-turboral-extra-10w-40-208l-11190-1616493/)

Тип: retailer_auxiliary. Дата документа: не установлена / веб-страница. Место: карточка товара / блок с артикулом.

**R11190B** — [Drom — объявление ExtraTurboral 11190, 205 л](https://baza.drom.ru/chemistry/motoroil/%2B/Aral/?viscosity%5B%5D=10W-40)

Тип: marketplace_auxiliary. Дата документа: не установлена / веб-страница. Место: карточка товара / блок с артикулом.

**R2682** — [OIL-STORE — Turboral 10W-40, 60 л, артикул 2682](https://oil-store.ru/masla-i-smazki/motornye-masla/gruzovoj-transport/motornoe-maslo-aral-turboral-10w-40-60l/)

Тип: retailer_auxiliary. Дата документа: не установлена / веб-страница. Место: карточка товара / блок с артикулом.

**R22119** — [Rubilon — Turboral 15W-40, 208 л, 22119](https://www.rubcom.kz/goods/311470930-motornoye_maslo_aral_turboral_15w_40_208_l)

Тип: retailer_auxiliary. Дата документа: не установлена / веб-страница. Место: карточка товара / блок с артикулом.

**R22119B** — [OILX — Plus Turboral 15W-40, 208 л, 22119](https://oilx.org/klassifikatsiya-acea/e5/)

Тип: retailer_auxiliary. Дата документа: не установлена / веб-страница. Место: карточка товара / блок с артикулом.

**R11281** — [Partline — PlusTurboral 15W-40, 20 л, 11281](https://www.partline.com.ua/oil?nal=0&page1=19)

Тип: retailer_auxiliary. Дата документа: не установлена / веб-страница. Место: карточка товара / блок с артикулом.

**R11281B** — [AvtoTO — PlusTurboral, 11281](https://www.avtoto.ru/catalogs/oil/motornoe-maslo/struktura-mineralnoe/)

Тип: retailer_auxiliary. Дата документа: не установлена / веб-страница. Место: карточка товара / блок с артикулом.

**R22003** — [DOK — 15BCD2 и альтернативный артикул 22003](https://dok.ua/art-motornoe-maslo-aral-turboral-10w-40-polusinteticheskoe-21996709/21996711)

Тип: retailer_auxiliary. Дата документа: не установлена / веб-страница. Место: карточка товара / блок с артикулом.

**R22003B** — [TTO — 15BCD2 и альтернативный артикул 22003](https://tto.com.ua/ru/product/motornoe-maslo-aral-15bcd2/p197634)

Тип: retailer_auxiliary. Дата документа: не установлена / веб-страница. Место: карточка товара / блок с артикулом.

**RPLUS** — [Motoröle — указаны прежние названия PlusTurboral/MultiTurboral](https://www.motoroele.at/aral-turboral-15w-40-motoroel-20l-kanister)

Тип: retailer_auxiliary. Дата документа: не установлена / веб-страница. Место: карточка товара / блок с артикулом.

**T10-CANDIDATE-PDS-20250324** — [PDS Aral Turboral 10W-40](https://www.aral-lubricants.de/en/datasheets/fleet?cHash=49ab2c66bdffa0ab0fe9c88d7eed6f56&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_turboral_10w-40_global_english_pdb_467759.pdf)

Тип: manufacturer_document_official_host. Дата документа: 2025-03-24. Место: Reviewed in preceding test; product name and document code, not packaging SKU.

**T10-CANDIDATE-SDS-20260402** — [SDS Aral Turboral 10W-40](https://www.aral-lubricants.de/en/datasheets/fleet?cHash=69b832f8bebef4fb7ac8f530b06b1211&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_turboral_10w-40_germany_english-gb_sdb_467759.pdf)

Тип: manufacturer_document_official_host. Дата документа: 2026-04-02. Место: Reviewed in preceding test; product name and document code, not packaging SKU.

**T15-CANDIDATE-PDS-20250327** — [PDS Aral Turboral 15W-40](https://www.aral-lubricants.de/en/aral-schmierstoffe/aral-engine-oils/engine-oils-for-heavy-trucks?cHash=dc2619b05b7012b889bb85d3935327ba&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_turboral_15w-40_global_english_pdb_467736.pdf)

Тип: manufacturer_document_official_host. Дата документа: 2025-03-27. Место: Reviewed in preceding test; product name and document code, not packaging SKU.

**T15-CANDIDATE-SDS-20251009** — [SDS Aral Turboral 15W-40](https://www.aral-lubricants.de/en/datasheets/fleet?cHash=7e52060dc02651993c863618bd7f660f&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_turboral_15w-40_germany_english-gb_sdb_467736.pdf)

Тип: manufacturer_document_official_host. Дата документа: 2025-10-09. Место: Reviewed in preceding test; product name and document code, not packaging SKU.
