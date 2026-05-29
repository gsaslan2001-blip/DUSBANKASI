import sys
import os
import asyncio
import aiohttp
import re

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "lib")))
from db_layer import batch_flag

REPORT_PATH = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\raporlar\özel akış\Radyoloji\silinecekler.txt"
LOG_PATH = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\logs\radyoloji_flagged.jsonl"

UUID_PATTERN = re.compile(r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", re.IGNORECASE)

# Patterns for ELIMINATED IDs — handles both plain and backtick-wrapped formats:
# Section 1: "**Silinen Soru ID:** `uuid`"
# Section 2: "**Elenen ID:** uuid"  or  "Elenen ID: uuid"
ELENEN_PATTERNS = [
    re.compile(
        r"(?:Elenen|Silinen)\s+(?:Soru\s+)?ID[:\*\s`]+([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})",
        re.IGNORECASE
    ),
]

async def main():
    with open(REPORT_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    # Collect all eliminated IDs
    eliminated_ids = set()
    for pattern in ELENEN_PATTERNS:
        for match in pattern.finditer(content):
            eliminated_ids.add(match.group(1).strip().lower())

    print(f"Toplam {len(eliminated_ids)} adet elenecek soru ID'si tespit edildi:")
    for qid in sorted(eliminated_ids):
        print(f"  {qid}")

    if not eliminated_ids:
        print("Hiç ID bulunamadı!")
        return

    items = [
        {
            "id": qid,
            "flag_type": "kavramsal_kopya",
            "reason": "Radyoloji Gemini audit raporu - silinecekler.txt",
            "text": "",
            "explanation": "",
            "winner_id": ""
        }
        for qid in eliminated_ids
    ]

    os.makedirs(os.path.dirname(LOG_PATH), exist_ok=True)

    print(f"\nSupabase'e {len(items)} soru işaretleniyor...")
    ok, errors = await batch_flag("Radyoloji", items, LOG_PATH)
    print(f"\nTamamlandi: Basarili={ok}, Hatali={errors}")
    print(f"Log: {LOG_PATH}")

if __name__ == "__main__":
    asyncio.run(main())
