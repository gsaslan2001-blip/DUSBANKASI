"""
Pedodonti Cikmis Sorular - NotebookLM MCP Import Scripti v2
============================================================
Kullanim:
  $env:PYTHONUTF8="1"; python scripts/import_cikmis_pedo.py --list
  $env:PYTHONUTF8="1"; python scripts/import_cikmis_pedo.py --unit "SUT VE SUREKLI DISLERIN SURMESI" --dry-run
  $env:PYTHONUTF8="1"; python scripts/import_cikmis_pedo.py --dry-run
  $env:PYTHONUTF8="1"; python scripts/import_cikmis_pedo.py
  $env:PYTHONUTF8="1"; python scripts/import_cikmis_pedo.py --start 3
"""

import os, sys, asyncio, re, argparse, json, socket
sys.path.insert(0, os.path.dirname(__file__))
from config import MCP_URL, RETRY_BACKOFF, MAX_RETRIES
from shared import deploy_to_supabase, get_existing_units
import urllib.request

if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding="utf-8")
    except: pass

CIKMIS_NOTEBOOK_ID = "7a7b09f5-bdb7-4d4c-bd37-06e367bd2377"
LESSON_NAME = "Pedodonti Cikmis"

UNITS = [
    "SUT VE SUREKLI DIS EMBRIYOLOJISI",
    "SUT VE SUREKLI DISLERIN SURMESI",
    "DISLERIN GELISIM ANOMALILERI",
    "COCUKLARDA KAPANIS ILISKILERI VE OKLUZAL REHBERLIK",
    "CURUK PROFLAKSISINDE FLORIDLER",
    "CURUK RISKI VE CURUK AKTIVITESI TAYIN YONTEMLERI",
    "DENTISYONDA CURUK ETIYOLOJISI YAYILIMI SINIFLANDIRILMASI VE TESHISI",
    "BESLENME VE CURUK ARASINDAKI ILISKILER",
    "FISSUR ORTUCULER",
    "SUT DISI PULPA HASTALARINDA TESHIS VE TEDAVI",
    "GENC SUREKLI DISLERDE ENDODONTIK TEDAVILER",
    "DIS VE DESTEK DOKU YARALANMALARININ SINIFLANDIRILMASI",
    "COCUKLARDA GORULEN PERIODONTAL HASTALIKLAR",
    "COCUKLARDA SISTEMIK HASTALIKLARIN AGIZ ICI BULGULARI",
    "COCUKLUK DONEMI HASTALIKLARININ AGIZ ICI BELIRTILERI",
    "COCUK DIS HEKIMLIGINDE LOKAL ANESTEZI",
    "SEDASYON VE GENEL ANESTEZI",
    "SUT DISLERININ MORFOLOJIK VE HISTOLOJIK OZELLIKLERI",
    "MINE, DENTIN VE PULPANIN YAPISAL OZELLIKLERI",
    "COCUK DIS HEKIMLIGINDE KULLANILAN RESTORATIF MATERYALLER",
    "ENGELLI COCUKLARDA DENTAL YAKLASIMLAR",
    "ORAL PATOLOJI",
]

LOG_DIR = os.path.join(os.path.dirname(__file__), "logs")
os.makedirs(LOG_DIR, exist_ok=True)


# ────────────────── MCP CLIENT ──────────────────

class NotebookLMMCPClient:
    def __init__(self, mcp_url=None):
        self.mcp_url = mcp_url or MCP_URL
        self.session_id = None

    async def __aenter__(self):
        _, self.session_id = self._post({
            "jsonrpc": "2.0", "id": 1, "method": "initialize",
            "params": {"protocolVersion": "2024-11-05", "capabilities": {},
                       "clientInfo": {"name": "cikmis-import", "version": "2.0"}}
        })
        self._post({"jsonrpc": "2.0", "method": "notifications/initialized"})
        return self

    async def __aexit__(self, *_): return False

    def _post(self, payload):
        data = json.dumps(payload).encode("utf-8")
        headers = {"Content-Type": "application/json",
                   "Accept": "application/json, text/event-stream"}
        if self.session_id:
            headers["Mcp-Session-Id"] = self.session_id
        req = urllib.request.Request(self.mcp_url, data=data, headers=headers)
        with urllib.request.urlopen(req, timeout=600) as resp:
            sid = resp.headers.get("Mcp-Session-Id")
            raw = resp.read().decode("utf-8")
            ct  = resp.headers.get("Content-Type", "")
            if "text/event-stream" in ct:
                body = {}
                for line in raw.splitlines():
                    if line.startswith("data:"):
                        s = line[5:].strip()
                        if s:
                            try: body = json.loads(s); break
                            except: pass
                return body, sid
            return (json.loads(raw) if raw.strip() else {}), sid

    async def query(self, notebook_id: str, prompt: str) -> str:
        resp, _ = self._post({
            "jsonrpc": "2.0", "id": 200, "method": "tools/call",
            "params": {"name": "notebook_query_start",
                       "arguments": {"notebook_id": notebook_id, "query": prompt}}
        })
        if "error" in resp:
            raise Exception(f"Query error: {resp['error']}")
        sc = resp.get("result", {}).get("structuredContent", {})
        qid = sc.get("query_id")
        if not qid: raise Exception(f"No query_id: {sc}")
        for _ in range(600):
            await asyncio.sleep(3.0)
            st, _ = self._post({
                "jsonrpc": "2.0", "id": 201, "method": "tools/call",
                "params": {"name": "notebook_query_status",
                           "arguments": {"query_id": qid}}
            })
            ssc = st.get("result", {}).get("structuredContent", {})
            s = ssc.get("status")
            if s == "completed":
                return (ssc.get("result") or {}).get("answer", "")
            if s in ("error", "failed"):
                raise Exception(f"Failed: {ssc.get('error') or ssc}")
        raise Exception("Timeout 30min")

    def server_info(self):
        r, _ = self._post({"jsonrpc": "2.0", "id": 50, "method": "tools/call",
                            "params": {"name": "server_info", "arguments": {}}})
        return (r.get("result", {}).get("structuredContent", {}) or {})


# ────────────────── PARSER ──────────────────
# Format (gercek NLM yaniti):
#   **16. Soru kok... (DUS 2022 Orijinal)** [1]
#   A) Secenek A
#   B) ...
#   E) ...
#   **Dogru Cevap: A** [1]
#   **Aciklama:** Metin [2].
#
# Sorunlar (v1'de hata verdiren):
#   - Turkce karakterler: Dogru/Aciklama icin regex [gG] / [cC] yanlis
#   - Atif sayilari: [1] [2] temizlenmeli
#   - Secenekler arasi / doğru cevap oncesi lookahead Turkce char icermeli

def _clean(text: str) -> str:
    """** ve atif sayilarini [N] temizle."""
    text = re.sub(r"\s*\[cite:\s*\d+\]", "", text, flags=re.IGNORECASE)
    text = re.sub(r"\s*\[\d+\]", "", text)   # [1] [2] ...
    text = re.sub(r"\*+", "", text)           # ** kalintilari
    return text.strip()

def parse_cikmis_response(text: str) -> list:
    """
    NotebookLM yanitini parse eder.
    Donus: [{"question":str, "options":{A..E}, "correctAnswer":str, "explanation":str}]
    """
    # Soruyu her **NN. oncesinden bol
    blocks = re.split(r"(?=\*\*\d+[\.\-\)]\s)", text)

    questions = []
    for block in blocks:
        block = block.strip()
        if not block:
            continue

        # ── Soru koku ──────────────────────────────────────────────
        # Match starting with **\d+... up to the first option (A)
        opt_a_m = re.search(r"(?:^|\n)\s*\*?\*?A[\)\}\]\-\.]\s*", block)
        if not opt_a_m:
            continue

        stem_raw = block[:opt_a_m.start()]
        # Remove the leading question number marker: e.g. **1. Soru 325** or **10. **
        stem_raw = re.sub(r"^\*\*\d+[\.\-\)]\s*(?:Soru\s*\d+\s*\*?\*?)?", "", stem_raw.strip(), flags=re.IGNORECASE)
        stem = _clean(stem_raw)

        # Orijinal / DUS / ilkbahar / sonbahar etiketi temizle
        stem = re.sub(
            r"\s*\((?:DUS\s*\d*|[^\)]*\d{4})\s*Orijinal\)",
            "", stem, flags=re.IGNORECASE
        )
        stem = _clean(stem)
        if not stem:
            continue

        # ── Secenekler ─────────────────────────────────────────────
        opts = {}
        for ltr in "ABCDE":
            ltr_pat = ltr
            if ltr == "D":
                ltr_pat = "[DO□▢]"
            elif ltr == "E":
                ltr_pat = "[E]"

            m = re.search(
                rf"(?:^|\n)\s*\*?\*?({ltr_pat})[\)\}}\]\-\.\s]\s*(.*?)(?=\n\s*\*?\*?[A-Ea-eO□▢][\)\}}\]\-\.\s]|\n\s*\*?\*?Do[gğ]ru|\n\s*\*?\*?Cevap|\n\s*\*?\*?A[çc]ıklama|\Z)",
                block, re.DOTALL | re.IGNORECASE
            )
            if m:
                opts[ltr] = _clean(m.group(2))
            else:
                opts[ltr] = ""

        # ── Dogru cevap ────────────────────────────────────────────
        ca_m = re.search(r"(?:Do[gğ]ru\s+)?Cevap\s*:\s*\*?\*?\s*([A-E])", block, re.IGNORECASE)
        if not ca_m:
            continue
        correct = ca_m.group(1).upper()

        # ── Aciklama ───────────────────────────────────────────────
        expl_m = re.search(
            r"(?:A[çc]ıklama|Not)\s*:\s*\*?\*?\s*([\s\S]+?)(?=\n\s*\*?\*?\d+[\.\-\)]|\Z)",
            block, re.IGNORECASE
        )
        explanation = _clean(expl_m.group(1)) if expl_m else ""

        # ── Gecerlilik kontrolu ────────────────────────────────────
        if len([v for v in opts.values() if v]) < 2:
            continue

        # 5 sik yoksa eksikleri bos birak
        for ltr in "ABCDE":
            opts.setdefault(ltr, "")

        questions.append({
            "question": stem,
            "options": opts,
            "correctAnswer": correct,
            "explanation": explanation,
        })

    return questions


# ────────────────── UNITE ISLEME ──────────────────

PROMPT_TEMPLATE = (
    '"{unit}" alt basligi altindaki tum orijinal etiketli sorulari '
    "soru siklar dogru cevap ve aciklamasi ile listele"
)


async def process_unit(client, unit: str, dry_run: bool = False) -> int:
    print(f"\n{'='*60}")
    print(f"UNITE: {unit}")
    print(f"{'='*60}")

    prompt = PROMPT_TEMPLATE.format(unit=unit)
    print(f"   Prompt: {prompt[:90]}...")

    answer = ""
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            answer = await asyncio.wait_for(
                client.query(CIKMIS_NOTEBOOK_ID, prompt), timeout=600
            )
            break
        except Exception as e:
            print(f"   Deneme {attempt}/{MAX_RETRIES}: {e}")
            if attempt < MAX_RETRIES:
                w = RETRY_BACKOFF[attempt - 1] if attempt - 1 < len(RETRY_BACKOFF) else 60
                print(f"   {w}s bekleniyor...")
                await asyncio.sleep(w)
            else:
                print("   Tum denemeler tukendi.")
                return 0

    safe = re.sub(r"[^\w]", "_", unit)[:40]
    log_path = os.path.join(LOG_DIR, f"cikmis_pedo_{safe}.txt")
    try:
        with open(log_path, "w", encoding="utf-8") as f:
            f.write(f"Unite: {unit}\nNotebook: {CIKMIS_NOTEBOOK_ID}\n\n--- YANIT ---\n")
            f.write(answer or "(bos)")
    except Exception as e:
        print(f"   Log hatasi: {e}")

    if not answer or not answer.strip():
        print("   Bos yanit.")
        return 0

    questions = parse_cikmis_response(answer)
    print(f"   Parse: {len(questions)} soru")

    if not questions:
        print("   Hic soru parse edilemedi.")
        print(f"   Ham yanit (ilk 400 kr): {answer[:400]}")
        return 0

    for i, q in enumerate(questions[:3], 1):
        print(f"   {i}. {q['question'][:75]}... -> {q['correctAnswer']}")
    if len(questions) > 3:
        print(f"   ... +{len(questions)-3} soru")

    if dry_run:
        print(f"   DRY-RUN: {len(questions)} soru yazilmadi.")
        # Tam listeyi goster
        print("   --- Tum sorular ---")
        for i, q in enumerate(questions, 1):
            print(f"   {i:2d}. [{q['correctAnswer']}] {q['question'][:70]}")
        return len(questions)

    deploy_to_supabase(questions, LESSON_NAME, unit, quality_flag="cikmis")
    return len(questions)


# ────────────────── MAIN ──────────────────

async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--unit",  type=str)
    parser.add_argument("--start", type=int, default=0)
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--list",  action="store_true")
    args = parser.parse_args()

    if args.list:
        for i, u in enumerate(UNITS): print(f"  {i:2d}. {u}")
        return

    print(f"MCP: {MCP_URL}")
    try:
        host = MCP_URL.split("//")[1].split(":")[0]
        port = int(MCP_URL.split(":")[2].split("/")[0])
        s = socket.socket(); s.settimeout(3); s.connect((host, port)); s.close()
        print(f"   OK ({host}:{port})")
    except Exception as e:
        print(f"   MCP baglanilamadi: {e}\n   start_notebooklm_mcp.bat'i calistir!")
        sys.exit(1)

    units_to_process = [args.unit] if args.unit else UNITS[args.start:]
    print(f"Unite: {len(units_to_process)} | Lesson: {LESSON_NAME} | {'DRY-RUN' if args.dry_run else 'CANLI'}")

    try:
        existing = get_existing_units(LESSON_NAME)
        if existing:
            for u, c in existing.items(): print(f"  Mevcut {u}: {c} soru")
        else:
            print(f"'{LESSON_NAME}' yok, yeni olusturulacak.")
    except Exception as e:
        print(f"Supabase durum alinamadi: {e}")
    print()

    async with NotebookLMMCPClient() as client:
        try:
            info = client.server_info()
            print(f"Auth: {info.get('auth_status','?')}")
        except Exception as e:
            print(f"server_info: {e}")

        total = 0
        for i, unit in enumerate(units_to_process):
            print(f"\n[{i+1}/{len(units_to_process)}]", end=" ")
            n = await process_unit(client, unit, dry_run=args.dry_run)
            total += n
            if i < len(units_to_process) - 1:
                print("   10s ara...")
                await asyncio.sleep(10)

    print(f"\n{'='*60}")
    print(f"TAMAMLANDI — {total} soru yazildi | Lesson: {LESSON_NAME}")
    print(f"{'='*60}")


if __name__ == "__main__":
    asyncio.run(main())
