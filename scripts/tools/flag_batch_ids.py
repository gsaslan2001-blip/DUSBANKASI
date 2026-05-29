import sys, os, asyncio
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "lib")))
# pyrefly: ignore [missing-import]
from db_layer import batch_flag

IDS = """db27ca3c-287a-4e3d-a8e4-9921506a32c6
c04c2a08-c1cb-436f-9591-4bb089968aa9
2e69e995-d468-4dfa-b69a-37e6ec1660ec
57684c1d-eb42-4380-9dcc-76faa1092b02
0319cc8e-45fb-4617-93a8-a4f377f3970c
cc60b985-40fa-4e2f-8b28-cc619b80d93d
"""

LOG_PATH = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\logs\batch_flagged.jsonl"

async def main():
    ids = [i.strip() for i in IDS.strip().splitlines() if i.strip()]
    print(f"Toplam {len(ids)} ID flaglenecek...")
    
    items = [{"id": qid, "flag_type": "kavramsal_kopya", "reason": "Manuel eleme - Gemini audit raporu", "text": "", "explanation": "", "winner_id": ""} for qid in ids]
    
    os.makedirs(os.path.dirname(LOG_PATH), exist_ok=True)
    ok, errors = await batch_flag("", items, LOG_PATH)
    print(f"Tamamlandi: Basarili={ok}, Hatali={errors}")
    print(f"Log: {LOG_PATH}")

if __name__ == "__main__":
    asyncio.run(main())
