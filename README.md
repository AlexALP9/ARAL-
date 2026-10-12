# ARAL

Рабочий репозиторий проекта монобрендового сайта ARAL.

## Статус переноса
- Найдено в ChatGPT Project: **118** файлов/артефактов.
- Текстовые слои, отчёты, ТЗ, промты и архивные версии перенесены и структурированы.
- В репозитории сейчас **55 файлов**.
- Бинарные исходники (XLSX/PDF/DOCX/ZIP/изображения) перечислены в `PROJECT_FILE_INVENTORY.md`; часть из них требует ручной загрузки из-за ограничения текущего GitHub-коннектора на прямой raw-byte перенос из Project Files.
- Текущий production/public слой, созданный локально в Codex/Work, отсутствует в Project Files и перечислен в `MISSING_FILES.md`.

## Текущий проект
- 17 продуктов
- 47 SKU / вариантов фасовки
- `current/master/` — frozen technical source of truth
- `current/content/` — актуальный content layer
- `current/media/` — текущие доступные media manifests/maps/reports
- `current/catalog/` — место для production/public catalog после загрузки недостающих файлов
- `archive/` — старые версии
- `research/` — исследования и PDS-материалы
- `design/` — ТЗ, ветки, Figma briefs, workflow/prompts

## Ключевые правила
- `ARAL_PRODUCT_MASTER_v1.2` — **FROZEN / READ ONLY**.
- Не подменять отсутствующие актуальные production/public файлы старыми версиями.
- Для Figma/frontend использовать `ARAL_PUBLIC_CATALOG_v1` + `ARAL_PRODUCTION_MEDIA_MAP_v1` + `media/production/`, когда они будут добавлены.
- Медиа-одобрение не меняет технический статус продукта.

## Навигация
- `PROJECT_FILE_INVENTORY.md` — полный список Project Files и статус переноса.
- `MISSING_FILES.md` — чего не хватает для полного handoff в Figma/frontend.
- `SECURITY_NOTES.md` — заметки по публичному репозиторию.
