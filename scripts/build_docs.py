#!/usr/bin/env python3
"""Assemble local ARAL passport PDFs for GitHub Pages.

This script does not modify product MASTER or technical claims. Explicit
approved local PDF paths win; official manufacturer links are fallbacks.
Unavailable PDFs are omitted from available.json so downloads never 404.
"""
import hashlib
import json
import re
import shutil
import sys
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCES = ROOT / "docs" / "sources.json"
SITE = ROOT / "_site"
OUT = SITE / "docs"
MAX_BYTES = 15 * 1024 * 1024
ALLOWED_HOSTS = {"www.aral-lubricants.de", "aral-lubricants.de", "msdspds.aral.com"}
EXPECTED = {str(x).zfill(3) for x in range(1, 18)}


def pdf_valid(payload):
    return payload.startswith(b"%PDF-") and b"%%EOF" in payload[-4096:] and len(payload) > 1000


def fetch_pdf(url):
    parsed = urllib.parse.urlsplit(url)
    if parsed.scheme != "https" or parsed.hostname not in ALLOWED_HOSTS:
        return None
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; ARAL-docs-build/1.0)", "Accept": "application/pdf"})
    try:
        with urllib.request.urlopen(req, timeout=22) as res:
            final = urllib.parse.urlsplit(res.geturl())
            if final.scheme != "https" or final.hostname not in ALLOWED_HOSTS:
                return None
            content = res.read(MAX_BYTES + 1)
            if len(content) > MAX_BYTES or not pdf_valid(content):
                return None
            return content
    except Exception as exc:
        print("Official PDF could not be fetched:", type(exc).__name__, file=sys.stderr)
        return None


def main():
    data = json.loads(SOURCES.read_text(encoding="utf-8"))
    products = data["products"]
    assert len(products) == 17
    output = {}
    for item in products:
        pid = item["internal_id"]
        assert re.fullmatch(r"ARAL-\\d{3}", pid), pid
        entry = {}
        for kind in ("pds", "sds"):
            # PDS for a product blocked by frozen MASTER must remain blocked;
            # SDS safety files may still be made available separately.
            if not item.get("publication", {}).get(kind, False):
                continue
            definition = item["documents"][kind]
            destination = OUT / kind / f"{pid}.pdf"
            source = ROOT / "docs" / kind / f"{pid}.pdf"
            pdf = None
            if source.is_file():
                blob = source.read_bytes()
                if pdf_valid(blob):
                    ref_sha = definition.get("uploaded_sha256")
                    if ref_sha and hashlib.sha256(blob).hexdigest() != ref_sha:
                        print("Local PDF hash mismatch:", pid, kind, file=sys.stderr)
                    else:
                        pdf = blob
                else:
                    print("Not a valid PDF:", source, file=sys.stderr)
            elif definition.get("source_url"):
                pdf = fetch_pdf(definition["source_url"])
            if pdf is not None:
                destination.parent.mkdir(parents=True, exist_ok=True)
                destination.write_bytes(pdf)
                entry[kind] = f"./docs/{kind}/{pid}.pdf"
                print(f"Published {pid} {kind.upper()} ({len(pdf)} bytes)")
        output[pid] = entry
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "available.json").write_text(
        json.dumps({"version": 1, "products": output}, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    counts = {k: sum(k in v for v in output.values()) for k in ("pds", "sds")}
    print("ARAL PDF build:", counts, "Missing files hidden from UI.")


if __name__ == "__main__":
    main()
