
import asyncio
import aiohttp
import json
import os
import sys
from datetime import datetime

# Path adjustment
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from config import SUPABASE_URL, SUPABASE_KEY

FLAG_LOG = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "logs", "flagged_questions.jsonl"))
OUTPUT_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "raporlar", "borderline_report.json"))

def _headers():
    return {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json"
    }

async def fetch_questions_by_flag(flag: str, session: aiohttp.ClientSession):
    url = f"{SUPABASE_URL}/rest/v1/questions?quality_flag=eq.{flag}&select=id,question,explanation,lesson,unit"
    async with session.get(url, headers=_headers()) as resp:
        resp.raise_for_status()
        return await resp.json()

async def fetch_questions_by_ids(ids: list, session: aiohttp.ClientSession):
    # Split into chunks to avoid long URLs
    chunk_size = 100
    all_data = []
    for i in range(0, len(ids), chunk_size):
        chunk = ids[i:i+chunk_size]
        id_filter = ",".join(chunk)
        url = f"{SUPABASE_URL}/rest/v1/questions?id=in.({id_filter})&select=id,question,explanation,lesson,unit"
        async with session.get(url, headers=_headers()) as resp:
            resp.raise_for_status()
            all_data.extend(await resp.json())
    return all_data

async def main():
    print(f"Starting Borderline Export at {datetime.now().isoformat()}")
    
    # 1. Load winners from log
    print(f"Reading log: {FLAG_LOG}")
    winner_map = {}
    if os.path.exists(FLAG_LOG):
        with open(FLAG_LOG, "r", encoding="utf-8") as f:
            for line in f:
                try:
                    data = json.loads(line)
                    # We store the latest mapping if multiple exist
                    if "id" in data and "winner_id" in data:
                        winner_map[data["id"]] = data["winner_id"]
                except:
                    continue
    print(f"Found {len(winner_map)} mappings in log.")

    async with aiohttp.ClientSession() as session:
        # 2. Fetch borderline questions
        print("Fetching borderline questions from Supabase...")
        borderline_qs = await fetch_questions_by_flag("borderline_kopya", session)
        print(f"Fetched {len(borderline_qs)} borderline questions.")

        # 3. Collect winner IDs needed
        winner_ids = set()
        for q in borderline_qs:
            wid = winner_map.get(q["id"])
            if wid:
                winner_ids.add(wid)
        
        # 4. Fetch winner details
        print(f"Fetching {len(winner_ids)} winner questions from Supabase...")
        winners_data = await fetch_questions_by_ids(list(winner_ids), session)
        winners_dict = {w["id"]: w for w in winners_data}

        # 5. Assemble report
        report = []
        for q in borderline_qs:
            wid = winner_map.get(q["id"])
            winner = winners_dict.get(wid)
            
            report.append({
                "borderline_question": {
                    "id": q["id"],
                    "lesson": q["lesson"],
                    "unit": q["unit"],
                    "question": q["question"],
                    "explanation": q["explanation"]
                },
                "counterpart_question": {
                    "id": winner["id"] if winner else wid,
                    "lesson": winner["lesson"] if winner else "Unknown",
                    "unit": winner["unit"] if winner else "Unknown",
                    "question": winner["question"] if winner else "Winner info not found in DB",
                    "explanation": winner["explanation"] if winner else ""
                } if wid else None
            })

        # 6. Save report
        os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
        with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
            json.dump(report, f, ensure_ascii=False, indent=2)
        
        print(f"\nSUCCESS: Report saved to {OUTPUT_PATH}")
        print(f"Total entries: {len(report)}")

if __name__ == "__main__":
    asyncio.run(main())
