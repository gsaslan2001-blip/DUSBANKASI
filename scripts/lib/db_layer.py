"""
db_layer.py — Supabase Veri Erişim Katmanı (Async)
Tüm ağ I/O buradan geçer. İş mantığı içermez.
"""
import json
import asyncio
import aiohttp
import urllib.parse
from datetime import datetime
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from config import SUPABASE_URL, SUPABASE_KEY

# Eşzamanlı Supabase isteği limiti (rate limit koruması)
_SEMAPHORE_LIMIT = 10

def create_session() -> aiohttp.ClientSession:
    """DNS çözümleme hatalarını (ARES_ECONNREFUSED) önlemek için aiodns (c-ares) yerine 
    ThreadedResolver zorlayarak bir ClientSession döndürür."""
    from aiohttp.resolver import ThreadedResolver
    connector = aiohttp.TCPConnector(resolver=ThreadedResolver())
    return aiohttp.ClientSession(connector=connector)



def _headers(extra: dict = None) -> dict:
    base = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
    }
    if extra:
        base.update(extra)
    return base


async def fetch_all_questions(
    lesson: str,
    session: aiohttp.ClientSession,
    unit: str = None,
) -> list:
    """Dersin (opsiyonel olarak tek bir ünitenin) tüm sorularını pagine ederek
    async olarak çeker. Retry mekanizması eklendi.

    unit verilirse sunucu tarafında `unit=eq.<unit>` filtresi uygulanır → yalnızca
    o ünitenin soruları çekilir (daha az veri transferi, daha küçük O(N²) tarama)."""
    all_rows = []
    limit, offset = 250, 0 # Safely reduced limit to avoid 500 timeouts
    scope = f"'{lesson}' / '{unit}'" if unit else f"'{lesson}'"
    print(f"[db] {scope} soruları çekiliyor...")

    unit_filter = f"&unit=eq.{urllib.parse.quote(unit)}" if unit else ""

    async def fetch_page(off):
        params = (
            f"select=id,lesson,unit,question,explanation,correct_answer,quality_flag,"
            f"option_a,option_b,option_c,option_d,option_e"
            f"&limit={limit}&offset={off}"
            f"&lesson=eq.{urllib.parse.quote(lesson)}"
            f"{unit_filter}"
        )
        url = f"{SUPABASE_URL}/rest/v1/questions?{params}"
        
        # Retry logic: 3 deneme
        for attempt in range(3):
            try:
                async with session.get(url, headers=_headers()) as resp:
                    if resp.status == 500 and attempt < 2:
                        print(f"\n  ⚠️ Supabase 500 hatası, yeniden deneniyor ({attempt+1}/3)...")
                        await asyncio.sleep(2 * (attempt + 1))
                        continue
                    resp.raise_for_status()
                    return await resp.json()
            except Exception as e:
                if attempt == 2: raise e
                await asyncio.sleep(1)
        return []

    while True:
        batch = await fetch_page(offset)
        if not batch:
            break
        all_rows.extend(batch)
        print(f"  Çekildi: {len(all_rows):,}...", end="\r")
        if len(batch) < limit:
            break
        offset += limit

    before = len(all_rows)
    all_rows = [q for q in all_rows if q.get("quality_flag") != "reviewed_keep"]
    skipped = before - len(all_rows)
    print(f"\n  {len(all_rows):,} soru hazır (reviewed_keep atlandı: {skipped}).")
    return all_rows


async def patch_quality_flag(
    qid: str,
    flag_value: str,
    session: aiohttp.ClientSession,
    semaphore: asyncio.Semaphore,
) -> bool:
    """Tek sorunun quality_flag alanını async PATCH ile günceller."""
    url = f"{SUPABASE_URL}/rest/v1/questions?id=eq.{qid}"
    payload = {"quality_flag": flag_value}
    async with semaphore:
        async with session.patch(
            url,
            headers=_headers({"Content-Type": "application/json", "Prefer": "return=minimal"}),
            json=payload,
        ) as resp:
            resp.raise_for_status()
            return True


async def delete_question(
    qid: str,
    session: aiohttp.ClientSession,
    semaphore: asyncio.Semaphore,
) -> bool:
    """Tek soruyu async DELETE ile kaldırır."""
    url = f"{SUPABASE_URL}/rest/v1/questions?id=eq.{qid}"
    async with semaphore:
        async with session.delete(url, headers=_headers()) as resp:
            resp.raise_for_status()
            return True


async def batch_flag(lesson: str, items: list, log_path: str) -> tuple[int, int]:
    """
    Listedeki tüm soruları paralel olarak işaretler.
    item['flag_type'] kullanılır; yoksa 'kavramsal_kopya' varsayılan.
    Döndürür: (başarılı, hatalı)
    """
    sem = asyncio.Semaphore(_SEMAPHORE_LIMIT)
    ts = datetime.now().isoformat()
    ok = 0
    errors = 0

    async with create_session() as session:

        async def _flag_one(item: dict):
            nonlocal ok, errors
            qid = item["id"]
            try:
                await patch_quality_flag(qid, item.get("flag_type", "kavramsal_kopya"), session, sem)
                ok += 1
            except Exception as e:
                errors += 1
                _log_event(log_path, {
                    "event": "flag_error", "ts": ts, "id": qid, "error": str(e)
                })

        tasks = [_flag_one(item) for item in items]
        await asyncio.gather(*tasks)

    with open(log_path, "a", encoding="utf-8") as f:
        for item in items:
            f.write(json.dumps({
                "flagged_at": ts,
                "lesson": lesson,
                "id": item["id"],
                "question": item.get("text", ""),
                "explanation": item.get("explanation", ""),
                "reason": item.get("reason", ""),
                "winner_id": item.get("winner_id", ""),
            }, ensure_ascii=False) + "\n")

    return ok, errors


async def batch_delete(lesson: str, items: list, log_path: str) -> tuple[int, int]:
    """
    Listedeki tüm soruları paralel olarak siler.
    Döndürür: (başarılı, hatalı)
    """
    sem = asyncio.Semaphore(_SEMAPHORE_LIMIT)
    ts = datetime.now().isoformat()
    ok = 0
    errors = 0

    async with create_session() as session:

        async def _delete_one(item: dict):
            nonlocal ok, errors
            qid = item["id"]
            try:
                await delete_question(qid, session, sem)
                ok += 1
            except Exception as e:
                errors += 1
                _log_event(log_path, {
                    "event": "delete_error", "ts": ts, "id": qid, "error": str(e)
                })

        tasks = [_delete_one(item) for item in items]
        await asyncio.gather(*tasks)

    with open(log_path, "a", encoding="utf-8") as f:
        for item in items:
            f.write(json.dumps({
                "deleted_at": ts,
                "lesson": lesson,
                "id": item["id"],
                "question": item.get("text", ""),
                "explanation": item.get("explanation", ""),
                "reason": item.get("reason", ""),
                "winner_id": item.get("winner_id", ""),
            }, ensure_ascii=False) + "\n")

    return ok, errors


def _log_event(path: str, event: dict):
    try:
        with open(path, "a", encoding="utf-8") as f:
            f.write(json.dumps(event, ensure_ascii=False) + "\n")
    except Exception:
        pass
