"""
DUS BANKASI — Parallel Exhaustive Pipeline v1 (Multi-Hesap / Multi-Port)
=========================================================================
Mimari:
  Her Google hesabi = ayri MCP sunucusu = ayri port
  Her port = ayri NotebookLMMCPClient instance'i
  Tum uniteler asyncio.gather() ile TAM PARALEL calisir

Kullanim:
  # 2 hesap, 2 farkli PDF, paralel
  python scripts/notebooklm_mcp_parallel.py ^
    --servers "3000:gs.aslan2001@gmail.com:notebook-a,3001:dtfurkankurt@gmail.com:notebook-b" ^
    --input "C:/path/pdf1.pdf" "C:/path/pdf2.pdf" --lesson Fizyoloji

  # Dry-run test
  python scripts/notebooklm_mcp_parallel.py ^
    --servers "3000:hesap1:notebook-a,3001:hesap2:notebook-b" ^
    --input "pdf1.pdf" "pdf2.pdf" --lesson Fizyoloji --dry-run
"""

import os
import sys
import asyncio
import re
import argparse
import urllib.request
import json
import uuid
from pathlib import Path
from datetime import datetime

sys.path.insert(0, os.path.dirname(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "tools"))

from config import (
    RETRY_BACKOFF, MAX_RETRIES,
    COOLDOWN_BETWEEN_UNITS, PROMPT_CHAR_LIMIT,
    MAX_BATCHES_PER_UNIT, SATURATION_THRESHOLD,
    MIN_ACCEPTED_PER_BATCH, INTER_BATCH_COOLDOWN,
)
from shared import (
    extract_json, deploy_to_supabase, get_existing_units,
    get_questions_for_unit,
    classify_error, RetryableError, AuthError, FatalError,
)
from smart_audit_pipeline import run_audit

# ─── MCP CLIENT (NotebookLMMCPClient'in thread-safe kopyasi) ───

class MCPClient:
    """Tek bir MCP sunucusuna bagli istemci. Her port/hesap icin ayri instance."""
    def __init__(self, mcp_url: str, label: str):
        self.mcp_url = mcp_url
        self.label = label       # orn: "hesap1:3000"
        self.session_id = None

    async def __aenter__(self):
        payload = {
            "jsonrpc": "2.0", "id": 1, "method": "initialize",
            "params": {
                "protocolVersion": "2024-11-05",
                "capabilities": {},
                "clientInfo": {"name": "python-parallel", "version": "1.0"}
            }
        }
        res, self.session_id = self._post(payload)
        self._post({"jsonrpc": "2.0", "method": "notifications/initialized"})
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        return False

    def _post(self, payload):
        data = json.dumps(payload).encode('utf-8')
        headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/event-stream'
        }
        if self.session_id:
            headers['Mcp-Session-Id'] = self.session_id
        req = urllib.request.Request(self.mcp_url, data=data, headers=headers)
        with urllib.request.urlopen(req, timeout=600) as response:
            sess_id = response.headers.get('Mcp-Session-Id')
            raw = response.read().decode()
            content_type = response.headers.get('Content-Type', '')
            if 'text/event-stream' in content_type:
                json_body = {}
                for line in raw.splitlines():
                    if line.startswith("data:"):
                        data_str = line[5:].strip()
                        if data_str:
                            try:
                                json_body = json.loads(data_str)
                                break
                            except:
                                pass
                return json_body, sess_id
            else:
                if not raw.strip():
                    return {}, sess_id
                return json.loads(raw), sess_id

    # ─── Auth ───
    def check_auth(self) -> bool:
        """MCP server_info ile auth kontrolu."""
        try:
            r, _ = self._post({
                "jsonrpc": "2.0", "id": 50, "method": "tools/call",
                "params": {"name": "server_info", "arguments": {}}
            })
            status = (r.get("result", {}).get("structuredContent", {}) or {}).get("auth_status")
            if status == "configured":
                return True
            if status == "stale":
                # Refresh dene
                self._post({
                    "jsonrpc": "2.0", "id": 51, "method": "tools/call",
                    "params": {"name": "refresh_auth", "arguments": {}}
                })
                # Canli test
                r2, _ = self._post({
                    "jsonrpc": "2.0", "id": 52, "method": "tools/call",
                    "params": {"name": "notebook_get",
                               "arguments": {"notebook_id": "dummy-check"}}
                })
                res = r2.get("result", {}) or {}
                sc = res.get("structuredContent", {}) or {}
                return (not res.get("isError")) and sc.get("status") == "success"
            return False
        except Exception:
            return False

    def refresh_auth(self):
        try:
            self._post({
                "jsonrpc": "2.0", "id": 51, "method": "tools/call",
                "params": {"name": "refresh_auth", "arguments": {}}
            })
        except:
            pass

    # ─── Sources ───
    def list_sources(self, notebook_id):
        resp, _ = self._post({
            "jsonrpc": "2.0", "id": 110, "method": "tools/call",
            "params": {"name": "notebook_get",
                       "arguments": {"notebook_id": notebook_id}},
        })
        sc = resp.get("result", {}).get("structuredContent", {})
        return [(s.get("id"), s.get("title", "")) for s in sc.get("sources", [])]

    def add_source_file(self, notebook_id, file_path, wait=True, wait_timeout=1500):
        p = Path(file_path)
        resp, _ = self._post({
            "jsonrpc": "2.0", "id": 100, "method": "tools/call",
            "params": {"name": "source_add", "arguments": {
                "notebook_id": notebook_id,
                "source_type": "file",
                "file_path": str(p),
                "title": p.stem,
                "wait": bool(wait),
                "wait_timeout": float(wait_timeout),
            }},
        })
        if "error" in resp:
            raise Exception(f"{self.label}: Yukleme hatasi: {resp['error']}")
        sc = resp.get("result", {}).get("structuredContent", {})
        if sc.get("status") not in (None, "success"):
            raise Exception(f"{self.label}: Yukleme basarisiz: {sc}")
        # Source ID'yi bul
        for sid, title in self.list_sources(notebook_id):
            if p.stem.lower() in (title or "").lower():
                return sid
        return p.stem

    def delete_source(self, notebook_id, source_id):
        self._post({
            "jsonrpc": "2.0", "id": 120, "method": "tools/call",
            "params": {"name": "source_delete",
                       "arguments": {"source_id": source_id, "confirm": True}},
        })

    # ─── Chat ───
    def ask(self, notebook_id, prompt):
        """Senkron sorgu: start → status polling."""
        args = {"notebook_id": notebook_id, "query": prompt}
        resp, _ = self._post({
            "jsonrpc": "2.0", "id": 200, "method": "tools/call",
            "params": {"name": "notebook_query_start", "arguments": args},
        })
        if "error" in resp:
            raise Exception(f"{self.label}: Chat hatasi: {resp['error']}")
        sc = resp.get("result", {}).get("structuredContent", {})
        query_id = sc.get("query_id")
        if not query_id:
            raise Exception(f"{self.label}: query_id alinamadi: {sc}")

        for _ in range(600):
            import time
            time.sleep(3.0)
            st, _ = self._post({
                "jsonrpc": "2.0", "id": 201, "method": "tools/call",
                "params": {"name": "notebook_query_status",
                           "arguments": {"query_id": query_id}},
            })
            ssc = st.get("result", {}).get("structuredContent", {})
            status = ssc.get("status")
            if status == "completed":
                data = ssc.get("result", {}) or {}
                return data.get("answer", "")
            if status in ("error", "failed"):
                raise Exception(f"{self.label}: Sorgu hatasi: {ssc.get('error') or ssc}")
        raise Exception(f"{self.label}: Sorgu zaman asimi (30dk)")


# ─── ORTAK PROMTLAR (birebir ayni) ───

PROMPT_ANCHOR = r"""SEN BİR TARAMA MOTORU VE KONSEPT EKSTRAKTÖRÜSÜN.
Görevin soru üretmek, özet yazmak veya çalışma planı sunmak DEĞİL; metindeki tıbbi/klinik kavramları doğrudan listelemektir.

HAYIR, PROTOTİP VEYA PLAN YAZMA. GİRİŞ CÜMLESİ KURMA.
METNE DOĞRUDAN 1. MADDEDEN BAŞLA.

Bu kaynağı satır satır tara. İçerdiği her bağımsız test edilebilir kavramı
(terim, enzim, patoloji, hücre, kural, mekanizma, istisna, sayısal değer, tablo satırı, sendrom, ilaç, reseptör)
numaralı liste halinde alt alta yaz.

KURALLAR:
- Benzer görünen iki kavram (ör: Karyoliz / Karyoreksis) → her biri AYRI satır.
- Her satır MAX 12 kelime. Açıklama yapma, sadece kavram adını/kısa tanımını yaz.
- Sentez, yorum veya klinik bağlantı YAPMA.
- Sadece bu kaynakta bulunan kavramları listele, dış bilgi YASAK.
- Tablolardaki her satırı ayrı kavram olarak say.

Listeleme tamamlandıktan sonra şunu yaz:
TOPLAM_KAVRAM = <sayı>
"""

PROMPT_BATCH_1 = r"""Sistem ayarlarındaki Master Prompt kuralları aynen geçerlidir.

Lütfen o ayarlardaki TÜM kalite kurallarına, <analiz> protokolüne ve spesifik JSON çıktısına harfiyen uyarak, sadece sana verdiğim bu kaynaktan ilk 30 soruluk ağırlık merkezleri (Batch 1, 2, 3) setini üret.
"""

PROMPT_CHUNK_TEMPLATE = r"""ÇAPA MODU — Batch {BATCH_NUM}

Aşağıdaki kavramları birincil test nesnesi olarak sorgula. Her kavram en az bir sorunun BİRİNCİL konusu olmalı. Listedeki tüm kavramları kapsamaya çalış:

{KAVRAM_LISTESI}

Master Prompt kuralları (JSON formatı, zorluk dağılımı, analiz protokolü) aynen geçerlidir.
"""

CHUNK_SIZE = 25
LOG_DIR = os.path.join(os.path.dirname(__file__), "logs")
os.makedirs(LOG_DIR, exist_ok=True)


# ─── YARDIMCI FONKSIYONLAR (birebir ayni) ───

def parse_anchor_response(text):
    if not text or not text.strip():
        return [], 0
    lines = []
    for line in text.split('\n'):
        line = line.strip()
        if re.match(r'^\d+[\.)\-]\s+', line):
            concept = re.sub(r'^\d+[\.)\-]\s+', '', line).strip()
            if concept and len(concept) > 2:
                lines.append(concept)
    total_match = re.search(r'TOPLAM_KAVRAM\s*=\s*(\d+)', text)
    reported_total = int(total_match.group(1)) if total_match else len(lines)
    return lines, reported_total


def classify_anchors(anchors, questions):
    if not anchors:
        return [], []
    if not questions:
        return [], list(anchors)
    stem_corpus = ""
    for q in questions:
        stem = (q.get("question", "") or "").lower()
        stem_corpus += " " + stem
    covered = []
    uncovered = []
    for anchor in anchors:
        words = [w.lower() for w in anchor.split() if len(w) >= 3]
        if not words:
            uncovered.append(anchor)
            continue
        match_count = sum(1 for w in words if w in stem_corpus)
        match_ratio = match_count / len(words)
        if match_ratio >= 0.60:
            covered.append(anchor)
        else:
            uncovered.append(anchor)
    return covered, uncovered


def chunk_list(lst, size):
    for i in range(0, len(lst), size):
        yield lst[i:i + size]


def check_saturation(text):
    if not text:
        return False
    return "DOYGUNLUK" in text.upper()


# ─── TEK UNITE ISLEME (senkron, bir MCP client + bir notebook_id) ───

def process_unit(client: MCPClient, notebook_id: str, lesson: str, unit_name: str,
                 file_path: str, dry_run: bool = False) -> bool:
    """Tek bir uniter. Client senkron cagrilarla calisir."""
    label = client.label
    print(f"\n{'='*60}")
    print(f"🔬 [{label}] EXHAUSTIVE: {unit_name}")
    print(f"📂 Kaynak: {file_path}")
    print(f"📓 Notebook: {notebook_id}")
    print(f"{'='*60}")

    source_id = None
    total_produced = 0
    batch_results = []

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            # ─── Cleanup ───
            try:
                existing = client.list_sources(notebook_id)
                if existing:
                    print(f"   [{label}] 🧹 {len(existing)} kaynak temizleniyor...")
                    for sid, stitle in existing:
                        try:
                            client.delete_source(notebook_id, sid)
                            print(f"      ✓ silindi: {stitle}")
                        except Exception as de:
                            print(f"      ⚠ silinemedi ({stitle}): {de}")
            except Exception as cleanup_err:
                print(f"   [{label}] ⚠️ Cleanup: {cleanup_err}")

            # ─── PDF Yukle ───
            print(f"   [{label}] 📤 Kaynak yukleniyor...")
            source_id = client.add_source_file(notebook_id, file_path, wait=True, wait_timeout=1500)
            print(f"   [{label}] ✅ Kaynak hazir: {source_id}")

            # ─── FAZ 0: Capalama ───
            print(f"\n   [{label}] 📌 FAZ 0: Kavram Capalama")
            anchor_res = client.ask(notebook_id, PROMPT_ANCHOR)
            anchors, total_concepts = parse_anchor_response(anchor_res)
            print(f"   [{label}] 📌 Capalama: {total_concepts} kavram (parse: {len(anchors)})")

            if not anchors:
                print(f"   [{label}] ⚠️ Capalama basarisiz.")
                return False

            # Capa log
            try:
                with open(os.path.join(LOG_DIR, f"anchor_{unit_name}_{label}.txt"), 'w', encoding='utf-8') as f:
                    f.write(f"Toplam: {total_concepts}\nParse: {len(anchors)}\n\n")
                    for i, a in enumerate(anchors, 1):
                        f.write(f"{i}. {a}\n")
            except:
                pass

            # ─── FAZ 1: DB Kontrol ───
            session_qs = get_questions_for_unit(lesson, unit_name)
            initial_db_count = len(session_qs)
            print(f"   [{label}] 📥 Supabase: {initial_db_count} soru")

            already_covered, remaining_anchors = classify_anchors(anchors, session_qs)
            print(f"   [{label}] 📊 {len(already_covered)} sorgulanmis / {len(remaining_anchors)} kalan")

            # ─── FAZ 2: Batch 1 ───
            batch_num = 0
            consecutive_dry = 0

            if initial_db_count == 0:
                batch_num = 1
                print(f"\n   ┌─ BATCH 1/{MAX_BATCHES_PER_UNIT} ────")
                res = client.ask(notebook_id, PROMPT_BATCH_1)
                new_questions = extract_json(res) or []
                print(f"   │  📦 {len(new_questions)} soru")

                try:
                    with open(os.path.join(LOG_DIR, f"exhaust_{unit_name}_{label}_batch1.txt"), 'w', encoding='utf-8') as f:
                        f.write(f"Batch: 1 (Master)\nQuestions: {len(new_questions)}\n\n--- ANSWER ---\n")
                        f.write(res or '(empty)')
                except:
                    pass

                if new_questions:
                    session_qs.extend(new_questions)
                    total_produced += len(new_questions)
                    if not dry_run:
                        deploy_to_supabase(new_questions, lesson, unit_name)
                    covered_now, remaining_anchors = classify_anchors(anchors, session_qs)
                    print(f"   │  📊 {len(covered_now)}/{len(anchors)} capa")
                    batch_results.append((1, len(new_questions), "OK"))
                else:
                    consecutive_dry += 1
                    batch_results.append((1, 0, "BOS"))
                print(f"   └──────────────────")

            # ─── FAZ 3: Dilim bazli ───
            if remaining_anchors and consecutive_dry < SATURATION_THRESHOLD:
                chunks = list(chunk_list(remaining_anchors, CHUNK_SIZE))
                print(f"\n   [{label}] 🎯 {len(remaining_anchors)} capa → {len(chunks)} dilim")

                for chunk_idx, chunk in enumerate(chunks):
                    if consecutive_dry >= SATURATION_THRESHOLD:
                        break
                    if batch_num >= MAX_BATCHES_PER_UNIT:
                        break

                    batch_num += 1
                    print(f"\n   ┌─ BATCH {batch_num}/{MAX_BATCHES_PER_UNIT} (Dilim {chunk_idx+1}/{len(chunks)}) ────")
                    print(f"   │  {len(chunk)} kavram")

                    kavram_str = "\n".join(f"- {c}" for c in chunk)
                    prompt = PROMPT_CHUNK_TEMPLATE.replace("{BATCH_NUM}", str(batch_num))
                    prompt = prompt.replace("{KAVRAM_LISTESI}", kavram_str)

                    res = client.ask(notebook_id, prompt)

                    if check_saturation(res):
                        print(f"   │  🏁 DOYGUNLUK")
                        batch_results.append((batch_num, 0, "DOYGUNLUK"))
                        break

                    new_questions = extract_json(res) or []
                    print(f"   │  📦 {len(new_questions)} soru")

                    try:
                        log_path = os.path.join(LOG_DIR, f"exhaust_{unit_name}_{label}_batch{batch_num}.txt")
                        with open(log_path, 'w', encoding='utf-8') as f:
                            f.write(f"Batch: {batch_num}\nChunk: {chunk_idx+1}/{len(chunks)}\n")
                            f.write(f"Targets: {len(chunk)}\nQuestions: {len(new_questions)}\n\n--- TARGETS ---\n")
                            for c in chunk:
                                f.write(f"- {c}\n")
                            f.write(f"\n--- ANSWER ---\n")
                            f.write(res or '(empty)')
                    except:
                        pass

                    if not new_questions:
                        consecutive_dry += 1
                        batch_results.append((batch_num, 0, "BOS"))
                        print(f"   └──────────────────")
                        import time; time.sleep(INTER_BATCH_COOLDOWN)
                        continue

                    consecutive_dry = 0
                    session_qs.extend(new_questions)
                    total_produced += len(new_questions)

                    if dry_run:
                        print(f"   │  🧪 DRY-RUN")
                    else:
                        deploy_to_supabase(new_questions, lesson, unit_name)

                    chunk_covered, _ = classify_anchors(chunk, new_questions)
                    print(f"   │  🎯 Dilim: {len(chunk_covered)}/{len(chunk)}")

                    total_covered, total_remaining = classify_anchors(anchors, session_qs)
                    print(f"   │  📊 Genel: {len(total_covered)}/{len(anchors)} ✅, kalan: {len(total_remaining)}")

                    batch_results.append((batch_num, len(new_questions), "OK"))
                    print(f"   └──────────────────")

                    if len(total_remaining) == 0:
                        print(f"\n   [{label}] 🎯 TUM CAPALAR SORGULANMIS!")
                        break

                    import time; time.sleep(INTER_BATCH_COOLDOWN)

            # ─── FAZ 4: Rapor ───
            final_covered, final_uncovered = classify_anchors(anchors, session_qs)
            print(f"\n   {'='*50}")
            print(f"   [{label}] 📊 RAPOR: {unit_name}")
            print(f"   {'='*50}")
            print(f"   Capa               : {len(anchors)}")
            print(f"   Sorgulanmis        : {len(final_covered)} ✅")
            print(f"   Sorgulanmamis      : {len(final_uncovered)} ⏳")
            if anchors:
                print(f"   Kapsam             : {len(final_covered)/len(anchors)*100:.1f}%")
            print(f"   Toplam uretilen    : {total_produced} soru")
            for bn, prod, st in batch_results:
                print(f"     Batch {bn}: {prod} → {st}")

            try:
                with open(os.path.join(LOG_DIR, f"uncovered_{unit_name}_{label}.txt"), 'w', encoding='utf-8') as f:
                    f.write(f"Unit: {unit_name}\nAnchors: {len(anchors)}\n")
                    f.write(f"Covered: {len(final_covered)}\nRemaining: {len(final_uncovered)}\n\n")
                    for i, a in enumerate(final_uncovered, 1):
                        f.write(f"{i}. {a}\n")
            except:
                pass

            print(f"   {'='*50}")
            return True

        except Exception as e:
            classified = classify_error(e)
            if isinstance(classified, AuthError):
                print(f"   [{label}] 🔐 Auth: {e}")
                if client.check_auth():
                    continue
                raise FatalError(str(e))
            elif isinstance(classified, RetryableError):
                backoff = RETRY_BACKOFF[min(attempt - 1, len(RETRY_BACKOFF) - 1)]
                print(f"   [{label}] 🔄 Hata ({attempt}/{MAX_RETRIES}): {e}")
                if attempt < MAX_RETRIES:
                    print(f"   [{label}] ⏳ {backoff}s...")
                    import time; time.sleep(backoff)
                else:
                    print(f"   [{label}] 🚫 Maks deneme.")
            else:
                print(f"   [{label}] ❌ Hata: {e}")
                if attempt >= MAX_RETRIES:
                    print(f"   [{label}] 🚫 Atlaniyor.")

        finally:
            if source_id:
                try:
                    client.delete_source(notebook_id, source_id)
                except:
                    pass

    return False


# ─── SUNUCU YAPILANDIRMASI ───

def parse_servers(server_arg: str):
    """
    --servers format: "PORT:LABEL:NOTEBOOK_ID,PORT:LABEL:NOTEBOOK_ID,..."
    Ornek: "3000:hesap1:ntbk-id-1,3001:hesap2:ntbk-id-2"
    """
    servers = []
    for part in server_arg.split(","):
        part = part.strip()
        pieces = part.split(":")
        if len(pieces) < 2:
            raise ValueError(f"Gecersiz sunucu: '{part}'. Format: PORT:LABEL[:NOTEBOOK_ID]")
        port = int(pieces[0])
        label = pieces[1]
        notebook_id = pieces[2] if len(pieces) > 2 else None
        servers.append({"port": port, "label": label, "notebook_id": notebook_id})
    return servers


def _natural_sort_key(f: Path):
    m = re.search(r'\d+', f.name)
    return int(m.group()) if m else 999


def resolve_inputs(paths):
    resolved = []
    for p in paths:
        path = Path(p)
        if path.is_dir():
            files = [f for f in path.iterdir() if f.suffix.lower() in (".pdf", ".md")]
            files.sort(key=_natural_sort_key)
            resolved.extend(files)
        elif path.is_file() and path.suffix.lower() in (".pdf", ".md"):
            resolved.append(path)
        else:
            print(f"   ⚠️ Atlandi: {p}")
    return resolved


# ─── ANA FONKSIYON ───

def main():
    parser = argparse.ArgumentParser(description="DUS Bankasi — Parallel Exhaustive v1")
    parser.add_argument("--servers", required=True,
                        help="MCP sunuculari: PORT:LABEL:NOTEBOOK_ID,PORT:LABEL:NOTEBOOK_ID,...")
    parser.add_argument("--input", nargs="+", required=True,
                        help="PDF/klasor hedefleri. Her sunucu sirasiyla bir dosya alir.")
    parser.add_argument("--lesson", required=True, help="Ders adi")
    parser.add_argument("--dry-run", action="store_true", help="Supabase'e yazmadan test")
    parser.add_argument("--no-audit", dest="audit", action="store_false", default=True,
                        help="Kalite denetimini atla")
    args = parser.parse_args()

    print("\n" + "=" * 60)
    print("🚀 DUS PARALEL OTOMASYON (Multi-Hesap / Multi-Port)")
    print(f"   Mod: {'🧪 DRY-RUN' if args.dry_run else '🔴 CANLI'}")
    print(f"   Dilim: {CHUNK_SIZE} kavram/batch")
    print("=" * 60)

    # Sunuculari coz
    servers = parse_servers(args.servers)
    print(f"\n📡 Sunucular ({len(servers)}):")
    for s in servers:
        nid = s["notebook_id"] or "(otomatik)"
        print(f"   :{s['port']} → {s['label']} ({nid})")

    # Input'lari coz
    files = resolve_inputs(args.input)
    if not files:
        print("❌ Islenebilir PDF/MD bulunamadi.")
        return

    print(f"\n📂 {len(files)} dosya, {len(servers)} sunucu")

    # Dosya-sunucu eslestirmesi
    assignments = []
    for i, f in enumerate(files):
        s = servers[i % len(servers)]
        assignments.append((f, s))

    print(f"\n📋 Gorev dagilimi:")
    for f, s in assignments:
        print(f"   [{s['label']}] → {f.name}")

    # Tum MCP istemcilerini baslat
    clients = {}
    for s in servers:
        url = f"http://127.0.0.1:{s['port']}/mcp"
        clients[s['label']] = MCPClient(url, s['label'])

    # Her istemciyi initialize et
    print(f"\n🔌 MCP sunucularina baglaniliyor...")
    initialized = []
    for label, client in clients.items():
        try:
            async def _init():
                async with client:
                    return True
            import asyncio
            success = asyncio.run(_init())
            if success:
                auth_ok = client.check_auth()
                if not auth_ok:
                    print(f"   ⚠️ [{label}] Auth sorunu!")
                initialized.append((label, client, auth_ok))
                print(f"   ✅ [{label}] baglandi (auth: {'OK' if auth_ok else 'SORUN'})")
        except Exception as e:
            print(f"   ❌ [{label}] Baglanti hatasi: {e}")

    if not initialized:
        print("❌ Hicbir MCP sunucusuna baglanilamadi.")
        return

    # Not defteri ID'lerini belirle
    for s in servers:
        if not s["notebook_id"]:
            print(f"\n⚠️ [{s['label']}] NOTBOOK_ID belirtilmedi!")
            print(f"   Lutfen --servers parametresinde PORT:LABEL:NOTEBOOK_ID formatini kullan.")
            print(f"   Mevcut notebook'lari listelemek icin: nlm notebook list")
            return

    # PARALEL CALISTIR
    print(f"\n{'='*60}")
    print(f"🚀 PARALEL URETIM BASLIYOR ({len(assignments)} gorev)")
    print(f"{'='*60}")

    import concurrent.futures
    with concurrent.futures.ThreadPoolExecutor(max_workers=len(initialized)) as executor:
        futures = {}
        for f, s in assignments:
            client = clients[s['label']]
            unit_name = f.stem
            future = executor.submit(
                process_unit, client, s['notebook_id'],
                args.lesson, unit_name, str(f), args.dry_run
            )
            futures[future] = (s['label'], unit_name)

        results = {}
        for future in concurrent.futures.as_completed(futures):
            label, unit_name = futures[future]
            try:
                success = future.result()
                results[f"{label}:{unit_name}"] = success
                status = "✅" if success else "❌"
                print(f"\n   [{label}] {status} {unit_name} tamamlandi.")
            except Exception as e:
                results[f"{label}:{unit_name}"] = False
                print(f"\n   ❌ [{label}] {unit_name} hata: {e}")

    print(f"\n{'='*60}")
    print(f"📊 TOPLU RAPOR")
    print(f"{'='*60}")
    ok = sum(1 for v in results.values() if v)
    fail = sum(1 for v in results.values() if not v)
    print(f"   Basarili: {ok}")
    print(f"   Basarisiz: {fail}")
    for key, val in results.items():
        print(f"     {'✅' if val else '❌'} {key}")
    print(f"\n🎉 TAMAMLANDI!")


if __name__ == "__main__":
    if sys.platform == "win32":
        try: sys.stdout.reconfigure(encoding='utf-8')
        except: pass
    main()
