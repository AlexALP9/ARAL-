# ARAL — тест трёх позиций

**Дата проверки: 11.10.2026. Статус: частичный результат, требуется ручная проверка.**

Обработаны только три названия из сообщения. Утверждённая таблица и журнал 2026 отсутствуют: сверка с ними не выполнена. Новые позиции в каталог не добавлялись, исходные значения не исправлялись. У всех трёх позиций `manual_review = true`.

Основной источник: [msdspds.aral.com](https://msdspds.aral.com/). Главная страница недоступна (403/ошибка доступа). Дополнительный официальный источник: [Aral Lubricants](https://www.aral-lubricants.de/). Последняя версия во всей базе не подтверждена; ниже приведены наиболее поздние найденные даты с сохранением рынка и языка. Даты взяты из документов.

| Исходная позиция | Название и SAE | Результат |
|---|---|---|
| Aral EcoTronic F 5W-20 | Точное совпадение | Найдены PDS и SDS; расхождения между редакциями |
| Aral Turboral (Extra) 10W-40 | SAE совпадает; Extra отсутствует | Точное соответствие не подтверждено, перенос данных заблокирован |
| Aral Turboral (Plus) 15W-40 | SAE совпадает; Plus отсутствует | Точное соответствие не подтверждено, перенос данных заблокирован |

## EcoTronic F 5W-20

Официальное Product Name: **Aral EcoTronic F 5W-20**. SAE: **5W-20**.

Наиболее поздний найденный PDS: **20.05.2021, Germany, немецкий**; номер редакции не указан. Другой найденный PDS: **19.08.2013, Europe & Africa, английский**. Эти региональные редакции не объявлены взаимозаменяемыми.

SDS: **04.06.2024, версия 12, Germany**, немецкий и английский; предыдущая дата **17.11.2022**; код продукта **468246-DE04**.

Ниже — краткое русское изложение разделов PDS; исходные формулировки доступны по отдельным ссылкам на PDF.

- **Description:** Моторное масло по технологии Aral Synthese для бензиновых Ford EcoBoost; заявлены защита от износа и возможность экономии топлива.
- **Application:** Ford EcoBoost с требованием WSS-M2C948-B; многие другие бензиновые Ford с WSS-M2C913-B, WSS-M2C913-C или WSS-M2C925-B, кроме Ka, Focus ST и Focus RS. Также двигатели с требованием API SN / ILSAC GF-5 либо предыдущих категорий и SAE 5W-20.
- **Advantages:** защита от износа, свойства при холодном запуске, экономия топлива.
- **Performance / API / ILSAC:** в немецком PDS — API SN, ILSAC GF-5 и соответствие Ford WSS-M2C948-B; в английском — только соответствие Ford.
- **ACEA:** не указано.
- **OEM approvals:** явно обозначенный официальный допуск не указан. Ford WSS-M2C948-B сохранён отдельно как заявление Meets.

### Все Typical Characteristics из обеих найденных редакций PDS

| Показатель | Метод | Единицы как в источнике | PDS DE 2021 | PDS EN 2013 |
|---|---|---|---|---|
| Плотность при 15 °C | ASTM D1298 | g/ml | 0.847 | 0.847 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 43.5 | 43.51 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 8.2 | 8.2 |
| Индекс вязкости | ASTM D2270 | None | 166 | 166 |
| Динамическая вязкость CCS при −30 °C (5W) | ASTM D5293 | mPa.s (cP) | 3450 | 3450 |
| Вязкость HTHS при 150 °C | ASTM D4683 | cP | 2.6 | 2.6 |
| Температура застывания | ASTM D97 | °C | -45 | -45 |
| Температура вспышки PMCC | ASTM D93 | °C | 210 | 210 |
| Внешний вид | Visual | - | Не указан | Clear & Bright |

`None` у индекса вязкости — обозначение отсутствия единицы в самом PDS. Исходная точность 43.5 и 43.51 сохранена. Характеристики являются типичными, не гарантированными пределами.

### Отдельные свойства SDS, раздел 9

| Показатель | Значение SDS | Сопоставление с PDS |
|---|---|---|
| Вязкость 40 °C | 43.51 mm²/s | Отличается от 43.5 в немецком PDS |
| Вязкость 100 °C | 7.5–9.3 mm²/s | Диапазон включает 8.2 |
| Плотность 15 °C | <1000 kg/m³ (<1 g/cm³) | Предел совместим с 0.847 g/ml |
| Вспышка, закрытый тигель | >185 °C, Pensky-Martens ASTM D 93 | Предел совместим с 210 °C |
| Температура застывания | −45 °C | Совпадает |

Методы в SDS для приведённых вязкостей, плотности и температуры застывания не указаны; они не заимствованы из PDS. Это отдельная выборка свойств SDS, а не таблица Typical Characteristics.

Изображение: [ссылка с официальной страницы](https://www.aral-lubricants.de/fileadmin/user_upload/Aral_Lubes/Aral-Schmierstoffe/Products/Large/15f455.jpg). Ссылка найдена, загрузить и визуально подтвердить содержимое изображения не удалось.

## Turboral: конфликт названий

В официальных документах найдены **Aral Turboral 10W-40** и **Aral Turboral 15W-40**. Они не приняты как замена исходных позиций с Extra и Plus. Description, Application, Advantages, Performance, API, ACEA, OEM approvals, Typical Characteristics и изображения для исходных позиций оставлены пустыми.

Документы ниже с пометкой «конфликт» служат только для проверки имени. Они не создают дополнительные продукты каталога.

## Реестр документов — PDS и SDS раздельно

Оригиналы PDF не сохранены: прямое скачивание завершилось ошибками HTTPS. Сохранены URL, даты, версии и отдельные JSON-карточки в document_records/PDS и document_records/SDS. Извлечение выполнено по доступному веб-представлению PDF; визуальная проверка страниц не удалась.

| ID / документ | Тип | Дата | Версия | Рынок / язык | Связь с исходной позицией |
|---|---|---|---|---|---|
| [ECO-PDS-DE-20210520](https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf) | PDS | 2021-05-20 | Не указана | Germany / de | Точное имя и SAE |
| [ECO-PDS-EN-20130819](https://www.aral-lubricants.de/en/aral-schmierstoffe/aral-engine-oils/engine-oils-for-passenger-cars?cHash=08cb88d70bca2ce1711b0a19ad997f1d&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_europe_%26_africa_english_pdb_468246.pdf) | PDS | 2013-08-19 | Не указана | Europe & Africa / en | Точное имя и SAE |
| [ECO-SDS-DE-20240604](https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=3616531cf5304ece397eb239c57a4d89&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german-de_sdb_468246.pdf) | SDS | 2024-06-04 | 12 | Germany / de | Точное имя и SAE |
| [ECO-SDS-EN-20240604](https://www.aral-lubricants.de/en/aral-schmierstoffe/aral-engine-oils/engine-oils-for-passenger-cars?cHash=b434dea5f4676562cf1cbca03d956c74&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_english-gb_sdb_468246.pdf) | SDS | 2024-06-04 | 12 | Germany / en | Точное имя и SAE |
| [T10-CANDIDATE-PDS-20250324](https://www.aral-lubricants.de/en/datasheets/fleet?cHash=49ab2c66bdffa0ab0fe9c88d7eed6f56&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_turboral_10w-40_global_english_pdb_467759.pdf) | PDS | 2025-03-24 | Не указана | Global / en | Конфликт имени, не применять |
| [T10-CANDIDATE-SDS-20260402](https://www.aral-lubricants.de/en/datasheets/fleet?cHash=69b832f8bebef4fb7ac8f530b06b1211&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_turboral_10w-40_germany_english-gb_sdb_467759.pdf) | SDS | 2026-04-02 | 13.02 | Germany / en | Конфликт имени, не применять |
| [T15-CANDIDATE-PDS-20250327](https://www.aral-lubricants.de/en/aral-schmierstoffe/aral-engine-oils/engine-oils-for-heavy-trucks?cHash=dc2619b05b7012b889bb85d3935327ba&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_turboral_15w-40_global_english_pdb_467736.pdf) | PDS | 2025-03-27 | Не указана | Global / en | Конфликт имени, не применять |
| [T15-CANDIDATE-SDS-20251009](https://www.aral-lubricants.de/en/datasheets/fleet?cHash=7e52060dc02651993c863618bd7f660f&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_turboral_15w-40_germany_english-gb_sdb_467736.pdf) | SDS | 2025-10-09 | 15 | Germany / en | Конфликт имени, не применять |
| [T10-CANDIDATE-SDS-HU-20250912](https://msdspds.aral.com/ussds/amersdsf.nsf/Files/A7B97DE4BA9C72BC80258D0600527ECC/%24File/3212940.pdf) | SDS | 2025-09-12 | 2 | Hungary / hu | Конфликт имени, не применять |
| [T15-CANDIDATE-SDS-HU-20251009](https://msdspds.aral.com/ussds/amersdsf.nsf/Files/3D1070D02FE9CD7180258D1F00528251/%24File/3223389.pdf) | SDS | 2025-10-09 | 5 | Hungary / hu | Конфликт имени, не применять |

SDS Germany и Hungary — разные региональные документы. Номера 15 и 5 либо 13.02 и 2 не означают универсальную последовательность редакций. Для точных названий Turboral с Extra/Plus последняя версия не установлена.

## Журнал ручной проверки

**R01 — missing_inputs** (`manual_review = true`)

Утверждённая таблица и журнал 2026 не предоставлены. Поиск в текущей рабочей папке не обнаружил исходных файлов. Ссылка на msdspds.aral.com не содержит пользовательских таблиц. Сверка строк, артикулов и показателей не выполнена.

**R02 — source_access_and_recency** (`manual_review = true`)

Основной портал msdspds.aral.com вернул 403/ошибку доступа. Прямое сохранение PDF также не удалось из-за ошибок HTTPS. Даты извлечены из доступных документов, а не из дат индексации поисковиком. Полнота поиска и последняя версия во всей базе не подтверждены.

**R03 — market_unconfirmed** (`manual_review = true`)

Рынок и язык SDS не заданы. Germany DE/EN сохранены как найденные версии, а не как автоматически выбранные документы для рынка пользователя. Версии разных рынков нельзя ранжировать только по номеру.

**R04 — numeric_difference** (`manual_review = true`)

PDS DE 20.05.2021: вязкость при 40 °C 43.5 mm²/s. PDS EN 19.08.2013 и SDS 04.06.2024: 43.51 mm²/s. Возможное округление не признано доказанным; значения не исправлены и не объединены.

**R05 — specification_presence_difference** (`manual_review = true`)

PDS DE 20.05.2021 и продуктовая веб-страница указывают API SN и ILSAC GF-5. PDS EN 19.08.2013 не содержит этих категорий в Performance, только Ford WSS-M2C948-B. Отсутствие записи не означает отрицания соответствия; документы разных рынков и дат сохранены раздельно.

**R06 — representation_difference** (`manual_review = true`)

PDS: вязкость при 100 °C 8.2 mm²/s, плотность 0.847 g/ml, вспышка 210 °C. SDS: соответственно 7.5–9.3 mm²/s, <1000 kg/m³ (<1 g/cm³), >185 °C. Диапазоны совместимы с PDS, но это разные формы данных; SDS не подменяет Typical Characteristics. Внешний вид есть в EN PDS и отсутствует в DE PDS.

**R07 — claim_not_approval** (`manual_review = true`)

Ford WSS-M2C948-B указан как Meets. Это заявление о соответствии, а не явно обозначенный OEM approval. WSS-M2C913-B/C и WSS-M2C925-B описывают область применения и не перенесены в OEM approvals.

**R08 — name_mismatch** (`manual_review = true`)

Запрошено Aral Turboral (Extra) 10W-40; в найденных официальных PDS/SDS — Aral Turboral 10W-40. SAE совпадает; Extra отсутствует. Официальное подтверждение тождества не найдено. Документы являются только свидетельством расхождения; их показатели не присвоены исходной позиции.

**R09 — name_mismatch** (`manual_review = true`)

Запрошено Aral Turboral (Plus) 15W-40; в найденных официальных PDS/SDS — Aral Turboral 15W-40. SAE совпадает; Plus отсутствует. Официальное подтверждение тождества не найдено. Документы являются только свидетельством расхождения; их показатели не присвоены исходной позиции.

## Что необходимо для завершения теста

1. Предоставить утверждённую номенклатуру и журнал 2026 как файлы либо прямые ссылки на таблицы.
2. Указать нужный рынок и язык SDS.
3. Разрешить конфликт Extra/Plus на основании официального подтверждения соответствия; до этого замена запрещена.
4. Подтвердить актуальность через основной портал и сохранить оригиналы PDF при восстановлении доступа.

Остальные товары не обрабатывались. Переход к ним не выполнен.