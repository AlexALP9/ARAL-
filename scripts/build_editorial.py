#!/usr/bin/env python3
"""Build the approved seven-page editorial layer for static GitHub Pages.

Original page sources are immutable and remain under src/pages/.
Production copies inject a base URL for media/editorial/ paths, but do not
reword, reconstruct or modify approved design/content.
"""
from pathlib import Path
import re

root=Path(__file__).resolve().parents[1]
dest=root/'_site/pages'
dest.mkdir(parents=True,exist_ok=True)
mapping={
 'company-interesting-v8.html':'company-interesting-v8.html',
 'products-r15.html':'products-r15.html',
 'drivers-08.html':'drivers-08.html',
 'partners-11.html':'partners-11.html',
 'advantages-04.html':'advantages-04.html',
 'contacts-03.html':'contacts-03.html',
}
for source,out in mapping.items():
 raw=(root/'src/pages'/source).read_text(encoding='utf-8')
 if not re.search(r'<head\b',raw,re.I): raise ValueError(f'Missing head in {source}')
 raw=re.sub(r'(<head\b[^>]*>)',r'\1<base href="../">',raw,count=1,flags=re.I)
 (dest/out).write_text(raw,encoding='utf-8')
 assert (dest/out).is_file()
print(f'Built {len(mapping)} approved source documents representing 7 navigation pages')
