"""
backfill_bi_encoder.py — stem_embedding + explanation_embedding backfill

Üretim hattı (smart_audit_pipeline → find_duplicates) bu İKİ sütuna dayanır:
  stem_embedding         = embed(question)
  explanation_embedding  = embed(explanation)
Model: text-embedding-3-large @ 1536d (shared.py'deki üretim yazımıyla BİREBİR aynı).

⚠️ Eski backfill_embeddings.py yalnızca `embedding` sütununu (text-embedding-3-small ile)
dolduruyordu; bi-encoder sütunlarını HİÇ doldurmuyordu. Bu araç o boşluğu kapatır.

Kullanım:
    python scripts/tools/backfill_bi_encoder.py --lesson Radyoloji --unit "Ünite 1 - ..."
    python scripts/tools/backfill_bi_encoder.py --lesson Radyoloji        # tüm ders
    python scripts/tools/backfill_bi_encoder.py                            # tüm DB (eksikler)
    python scripts/tools/backfill_bi_encoder.py --dry-run
"""
import os, sys, json, time, asyncio, argparse, urllib.parse
from datetime import datetime
import aiohttp

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from config import SUPABASE_URL, SUPABASE_KEY, OPENAI_API_KEY

try:
    from openai import OpenAI
    _oa = OpenAI(api_key=OPENAI_API_KEY) if OPENAI_API_KEY else None
except ImportError:
    _oa = None

if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding="utf-8")
    except: pass

EMBED_MODEL = "text-embedding-3-large"
TARGET_DIM  = 1536
BATCH       = 100
SEM_LIMIT   = 10

_H = {"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"}
_HP = {**_H, "Content-Type": "application/json", "Prefer": "return=minimal"}


async def fetch_missing(session, lesson=None, unit=None):
    """stem_embedding IS NULL olan satırları çeker (lesson/unit filtreli)."""
    rows, off = [], 0
    while True:
        params = ("select=id,question,explanation&limit=100&offset=%d"
                  "&stem_embedding=is.null") % off
        if lesson:
            params += f"&lesson=eq.{urllib.parse.quote(lesson)}"
        if unit:
            params += f"&unit=eq.{urllib.parse.quote(unit)}"
        url = f"{SUPABASE_URL}/rest/v1/questions?{params}"
        async with session.get(url, headers=_H) as resp:
            resp.raise_for_status()
            batch = await resp.json()
        rows += batch
        print(f"   Eksik bulunan: {len(rows):,}...", end="\r")
        if len(batch) < 100:
            break
        off += 100
    print(f"\n✅ {len(rows):,} soru bi-encoder embedding bekliyor.")
    return rows


def embed(texts):
    texts = [t if (t and t.strip()) else " " for t in texts]
    for attempt in range(5):
        try:
            r = _oa.embeddings.create(model=EMBED_MODEL, input=texts, dimensions=TARGET_DIM)
            return [d.embedding for d in r.data]
        except Exception as e:
            if "429" in str(e) or "rate" in str(e).lower():
                time.sleep(30); continue
            raise
    raise RuntimeError("OpenAI embedding başarısız")


async def patch(session, sem, qid, stem_emb, exp_emb, dry):
    if dry:
        return True
    url = f"{SUPABASE_URL}/rest/v1/questions?id=eq.{qid}"
    payload = {"stem_embedding": stem_emb, "explanation_embedding": exp_emb}
    async with sem:
        for attempt in range(3):
            try:
                async with session.patch(url, headers=_HP, json=payload) as resp:
                    if resp.status in (200, 204):
                        return True
                    if resp.status < 500:
                        print(f"\n   ❌ {qid}: HTTP {resp.status} {await resp.text()}")
                        return False
            except aiohttp.ClientError:
                pass
            await asyncio.sleep(2 ** attempt)
    return False


async def run(lesson, unit, dry):
    if not _oa:
        print("❌ OPENAI_API_KEY eksik."); sys.exit(1)
    sem = asyncio.Semaphore(SEM_LIMIT)
    ok = err = 0
    t0 = time.time()
    print(f"\n{'='*56}\n  Bi-Encoder Backfill — {EMBED_MODEL} @ {TARGET_DIM}d")
    print(f"  Hedef: stem_embedding + explanation_embedding")
    print(f"  Mod: {'DRY-RUN' if dry else 'YAZMA'}  Ders: {lesson or 'TÜMÜ'}  Ünite: {unit or '—'}\n{'='*56}\n")

    async with aiohttp.ClientSession() as session:
        rows = await fetch_missing(session, lesson, unit)
        if not rows:
            print("Güncellenecek soru yok."); return
        nb = (len(rows) + BATCH - 1) // BATCH
        for bi, i in enumerate(range(0, len(rows), BATCH), 1):
            chunk = rows[i:i+BATCH]
            try:
                stem_embs = embed([q.get("question", "") for q in chunk])
                exp_embs  = embed([q.get("explanation", "") for q in chunk])
            except Exception as e:
                print(f"\n❌ Batch {bi} embedding hatası: {e}"); err += len(chunk); continue
            res = await asyncio.gather(*[
                patch(session, sem, chunk[k]["id"], stem_embs[k], exp_embs[k], dry)
                for k in range(len(chunk))
            ])
            ok += sum(1 for x in res if x); err += sum(1 for x in res if not x)
            eta = (time.time()-t0)/bi*(nb-bi)
            print(f"Batch {bi}/{nb} | ✅ {ok} ❌ {err} | ETA {eta/60:.1f}dk", end="\r")
            if bi < nb: await asyncio.sleep(0.5)
    print(f"\n\n✅ Tamam: {ok} yazıldı, {err} hata, {(time.time()-t0)/60:.1f}dk")
    if ok and not dry:
        print(f"💰 Tahmini maliyet: ~${ok*2*300/1_000_000*0.13:.4f} (3-large)")


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--lesson", default=None)
    p.add_argument("--unit", default=None)
    p.add_argument("--dry-run", action="store_true")
    a = p.parse_args()
    asyncio.run(run(a.lesson, a.unit, a.dry_run))


if __name__ == "__main__":
    main()
