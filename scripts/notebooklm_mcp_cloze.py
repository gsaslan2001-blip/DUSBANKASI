"""
DUS BANKASI — Anki Cloze Kart Üretim Pipeline'ı v1 (Çapa=Kart) via MCP HTTP
=============================================================================
Mimari (notebooklm_mcp_exhaust.py'nin Pinecone hedefli klonu):
  FAZ 0: Kavram Çapalama → Kaynaktaki tüm test edilebilir kavramları listeler
  FAZ 1: Pinecone'dan mevcut kartları çek, kapsam sınıfla
  FAZ 2: Her dilim YENİ conversation'la gönderilir. Prompt: Cloze v3.0 + kavram listesi.
  FAZ 3: Post-batch analiz → kapsam güncelle, kalan kavramları hedefle.
  FAZ 4: Doygunluk kontrolü + final rapor.

Hedef: Pinecone `anki` index (3072-dim OpenAI embedding)
Çıktı: Anki TSV formatında cloze deletion kartları

Kullanım:
  python scripts/notebooklm_mcp_cloze.py --file "konu.pdf" --lesson Endodonti --unit "Kök Kanal Anatomisi" --dry-run
  python scripts/notebooklm_mcp_cloze.py --file "konu.pdf" --lesson Fizyoloji --unit "Kalp Fizyolojisi"
  python scripts/notebooklm_mcp_cloze.py --dir "C:/PDFler/Endodonti" --lesson Endodonti
"""

import os
import sys
import asyncio
import re
import argparse
import json
from pathlib import Path
from datetime import datetime

# ─── Modül yolu ───
sys.path.insert(0, os.path.dirname(__file__))

from config import (
    NOTEBOOK_ID, MCP_URL, RETRY_BACKOFF, MAX_RETRIES,
    COOLDOWN_BETWEEN_UNITS, PROMPT_CHAR_LIMIT,
    CLOZE_MAX_BATCHES, CLOZE_SATURATION_THRESHOLD,
    CLOZE_MIN_CARDS_PER_BATCH, INTER_BATCH_COOLDOWN,
    LOG_DIR as _LOG_DIR,
)
from cloze_shared import (
    PROMPT_ANCHOR, build_cloze_prompt, build_cloze_uncovered_prompt,
    parse_anchor_response, classify_anchors_pinecone,
    parse_cloze_response, deploy_cards_to_pinecone,
    get_existing_card_texts, get_namespace_count,
    chunk_list, check_saturation,
    lesson_to_namespace, save_cloze_tsv,
    consolidate_unit_tsv,
    _dump_raw_response,
)

# ═══════════════════════════════════════════════
#  HATA SINIFLANDIRMASI (shared.py ile uyumlu)
# ═══════════════════════════════════════════════

class RetryableError(Exception):
    pass

class AuthError(Exception):
    pass

class DataError(Exception):
    pass

class FatalError(Exception):
    pass


def classify_error(e):
    msg = str(e).lower()
    if "502" in msg or "503" in msg or "504" in msg or "timeout" in msg or "connection" in msg:
        return RetryableError(str(e))
    elif "401" in msg or "403" in msg or "authentication" in msg:
        return AuthError(str(e))
    elif "json" in msg or "parse" in msg or "decode" in msg:
        return DataError(str(e))
    elif "not found" in msg or "invalid" in msg:
        return FatalError(str(e))
    return RetryableError(str(e))


if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass

LOG_DIR = os.path.join(os.path.dirname(__file__), "logs")
os.makedirs(LOG_DIR, exist_ok=True)


# ═══════════════════════════════════════════════
#  NOTEBOOKLM MCP İSTEMCİ (exhaust.py ile AYNI)
# ═══════════════════════════════════════════════

import urllib.request


class NotebookLMMCPClient:
    def __init__(self, mcp_url=None):
        self.mcp_url = mcp_url or MCP_URL
        self.session_id = None

    async def __aenter__(self):
        payload = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "initialize",
            "params": {
                "protocolVersion": "2024-11-05",
                "capabilities": {},
                "clientInfo": {"name": "python-cloze", "version": "1.0"}
            }
        }
        res, self.session_id = self._post(payload)
        self._post({
            "jsonrpc": "2.0",
            "method": "notifications/initialized"
        })
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

    @property
    def sources(self):
        outer = self

        class SourcesNamespace:
            async def list(self, notebook_id):
                resp, _ = outer._post({
                    "jsonrpc": "2.0", "id": 110, "method": "tools/call",
                    "params": {"name": "notebook_get",
                               "arguments": {"notebook_id": notebook_id}},
                })
                sc = resp.get("result", {}).get("structuredContent", {})

                class _Src:
                    def __init__(self, sid, title):
                        self.id = sid
                        self.title = title
                return [_Src(s.get("id"), s.get("title", "")) for s in sc.get("sources", [])]

            async def add_file(self, notebook_id, file_path, wait=True, wait_timeout=1500):
                p = Path(file_path)
                print(f"      [MCP] Kaynak yükleniyor: {p.name} ...")
                resp, _ = outer._post({
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
                    raise Exception(f"Yükleme hatası: {resp['error']}")
                sc = resp.get("result", {}).get("structuredContent", {})
                if sc.get("status") not in (None, "success", ""):
                    raise Exception(f"Yükleme başarısız: {sc}")

                # Tam eşleşme önce, ardından parçalı eşleşme
                sid = None
                stem_lower = p.stem.lower()
                sources = await self.list(notebook_id)
                for s in sources:
                    if (s.title or "").lower() == stem_lower:          # tam eşleşme
                        sid = s.id
                        break
                if not sid:
                    for s in sources:
                        if stem_lower in (s.title or "").lower():      # parçalı eşleşme
                            sid = s.id
                            break

                if not sid:
                    raise Exception(
                        f"Kaynak yüklendi ancak ID bulunamadı. "
                        f"Mevcut başlıklar: {[s.title for s in sources]}"
                    )

                class MockSource:
                    def __init__(self, source_id):
                        self.id = source_id
                return MockSource(sid)

            async def delete(self, notebook_id, source_id):
                outer._post({
                    "jsonrpc": "2.0", "id": 120, "method": "tools/call",
                    "params": {"name": "source_delete",
                               "arguments": {"source_id": source_id, "confirm": True}},
                })

        return SourcesNamespace()

    @property
    def chat(self):
        outer = self

        class ChatNamespace:
            async def ask(self, notebook_id, prompt, conversation_id=None):
                args = {"notebook_id": notebook_id, "query": prompt}
                if conversation_id:
                    args["conversation_id"] = conversation_id

                resp, _ = outer._post({
                    "jsonrpc": "2.0", "id": 200, "method": "tools/call",
                    "params": {"name": "notebook_query_start", "arguments": args},
                })
                if "error" in resp:
                    raise Exception(f"Chat hatası: {resp['error']}")
                sc = resp.get("result", {}).get("structuredContent", {})
                query_id = sc.get("query_id")
                if not query_id:
                    raise Exception(f"query_id alınamadı: {sc}")

                for _ in range(600):
                    await asyncio.sleep(3.0)
                    st, _ = outer._post({
                        "jsonrpc": "2.0", "id": 201, "method": "tools/call",
                        "params": {"name": "notebook_query_status",
                                   "arguments": {"query_id": query_id}},
                    })
                    ssc = st.get("result", {}).get("structuredContent", {})
                    status = ssc.get("status")
                    if status == "completed":
                        data = ssc.get("result", {}) or {}

                        class MockAnswer:
                            def __init__(self, answer_text, conv_id):
                                self.answer = answer_text
                                self.conversation_id = conv_id
                        return MockAnswer(data.get("answer", ""),
                                          data.get("conversation_id"))
                    if status in ("error", "failed"):
                        raise Exception(f"Sorgu hatası: {ssc.get('error') or ssc}")

                raise Exception("Sorgu zaman aşımı (status polling 30dk)")

        return ChatNamespace()

    async def refresh_auth(self):
        print("   🔄 MCP sunucusu üzerinden auth yenilemesi deneniyor...")
        resp, _ = self._post({
            "jsonrpc": "2.0",
            "id": 51,
            "method": "tools/call",
            "params": {"name": "refresh_auth", "arguments": {}}
        })
        sc = resp.get("result", {}).get("structuredContent", {})
        return sc.get("status") == "success"


async def ensure_auth(client, allow_interactive: bool = True) -> bool:
    """MCP HTTP sunucusu üzerinden auth durumunu kontrol eder."""

    def _status():
        r, _ = client._post({
            "jsonrpc": "2.0", "id": 50, "method": "tools/call",
            "params": {"name": "server_info", "arguments": {}}
        })
        return (r.get("result", {}).get("structuredContent", {}) or {}).get("auth_status")

    def _live_check():
        try:
            r, _ = client._post({
                "jsonrpc": "2.0", "id": 53, "method": "tools/call",
                "params": {"name": "notebook_get",
                           "arguments": {"notebook_id": NOTEBOOK_ID}}
            })
            res = r.get("result", {}) or {}
            sc = res.get("structuredContent", {}) or {}
            return (not res.get("isError")) and sc.get("status") == "success"
        except Exception:
            return False

    try:
        status = _status()
        if status == "configured":
            return True

        if status == "stale":
            print("   🔄 Auth stale — MCP refresh_auth ile yenileniyor...")
            try:
                client._post({
                    "jsonrpc": "2.0", "id": 51, "method": "tools/call",
                    "params": {"name": "refresh_auth", "arguments": {}}
                })
            except Exception as re:
                print(f"   ⚠️ refresh_auth çağrısı hata verdi: {re}")
            new_status = _status()
            if new_status == "configured":
                print("   ✅ Auth yenilendi.")
                return True
            if _live_check():
                print(f"   ⚠️ auth_status='{new_status}' raporlandı AMA canlı notebook_get başarılı — devam ediliyor.")
                return True
            print(f"   ❌ Refresh + canlı test başarısız (status={new_status}).")

        print(
            "❌ NotebookLM MCP oturumu yapılandırılmamış"
            f" (auth_status={status}).\n"
            "   Bir kerelik interaktif login gerek (tarayıcı açılır, Google'a giriş):\n"
            "   uvx --from git+https://github.com/jacob-bd/notebooklm-mcp-cli.git nlm login --force"
        )
        return False
    except Exception as e:
        print(f"❌ MCP sunucusuna bağlanılamadı: {e}")
        return False


# ═══════════════════════════════════════════════
#  ANA İŞLEM: TEK ÜNİTE CLOZE KART ÜRETİMİ
# ═══════════════════════════════════════════════

CHUNK_SIZE = 25     # Her dilimde hedeflenecek kavram sayısı

# F2-03: Dosya adı için güvenli string üret
def _safe_filename(s: str, max_len: int = 60) -> str:
    """Windows'ta geçersiz karakterleri temizle + uzunluk sınırla."""
    s = re.sub(r'[<>:"/\\|?*\x00-\x1f]', '_', s)
    s = s.strip('. ')
    return s[:max_len] if len(s) > max_len else s

# F2-01: Checkpoint/resume yardımcıları
def _load_progress(lesson: str) -> set:
    """Tamamlanan ünite isimlerini yükle."""
    progress_path = os.path.join(LOG_DIR, f"{lesson}_progress.json")
    if os.path.exists(progress_path):
        try:
            with open(progress_path, "r", encoding="utf-8") as f:
                return set(json.load(f).get("completed", []))
        except Exception:
            pass
    return set()

def _save_progress(lesson: str, completed_units: set):
    """Tamamlanan üniteleri kaydet."""
    progress_path = os.path.join(LOG_DIR, f"{lesson}_progress.json")
    try:
        with open(progress_path, "w", encoding="utf-8") as f:
            json.dump({"completed": list(completed_units)}, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"   ⚠️ Progress kaydedilemedi: {e}")


async def process_unit_cloze(client, lesson, unit_name, file_path, dry_run=False):
    """Tek bir üniteyi Çapa=Kart modunda işler — Pinecone hedefli."""
    print(f"\n{'='*60}")
    print(f"🃏 CLOZE KART ÜRETİMİ: {unit_name}")
    print(f"📂 Kaynak: {file_path}")
    print(f"📚 Ders: {lesson}")
    print(f"{'='*60}")

    namespace = lesson_to_namespace(lesson)
    print(f"📦 Pinecone namespace: {namespace}")

    if not await ensure_auth(client):
        raise FatalError(f"Auth yenilenemedi, {unit_name} atlandı.")

    source = None
    total_produced = 0
    batch_results = []

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            # ─── 0. Temizlik (F2-04: 3 deneme retry, başarısızsa FatalError) ───
            for cleanup_attempt in range(3):
                try:
                    existing = await client.sources.list(NOTEBOOK_ID)
                    if not existing:
                        break
                    for s in existing:
                        try:
                            await client.sources.delete(NOTEBOOK_ID, s.id)
                            print(f"      ✓ silindi: {s.title}")
                        except Exception as de:
                            print(f"      ⚠ silinemedi ({s.title}): {de}")
                    remaining = await client.sources.list(NOTEBOOK_ID)
                    if not remaining:
                        break
                    print(f"   ⚠️ Cleanup turu {cleanup_attempt+1}: {len(remaining)} kaynak hâlâ var...")
                    await asyncio.sleep(5)
                except Exception as ce:
                    print(f"   ⚠️ Cleanup hata (deneme {cleanup_attempt+1}/3): {ce}")
                    await asyncio.sleep(5)
            else:
                raise FatalError(f"Notebook temizlenemedi ({unit_name}). Manuel temizlik gerekiyor.")

            # ─── PDF Yükle ───
            print(f"   📤 Kaynak yükleniyor ve indeksleniyor...")
            source = await asyncio.wait_for(
                client.sources.add_file(NOTEBOOK_ID, file_path, wait=True, wait_timeout=1500),
                timeout=1600
            )
            print(f"   ✅ Kaynak hazır: {source.id}")

            # ─── FAZ 0: Kavram Çapalama ───
            print(f"\n   📌 FAZ 0: Kavram Çapalama")
            anchor_res = await asyncio.wait_for(
                client.chat.ask(NOTEBOOK_ID, PROMPT_ANCHOR),
                timeout=600
            )
            anchors, total_concepts = parse_anchor_response(anchor_res.answer)
            print(f"   📌 Çapalama tamamlandı: {total_concepts} kavram (parse: {len(anchors)})")

            if not anchors:
                print(f"   ⚠️ Çapalama başarısız — ünite atlanıyor.")
                return False

            # Çapa logunu kaydet (F2-03: güvenli dosya adı)
            safe_unit = _safe_filename(unit_name)
            try:
                anchor_log = os.path.join(LOG_DIR, f"cloze_anchor_{safe_unit}.txt")
                with open(anchor_log, 'w', encoding='utf-8') as f:
                    f.write(f"Toplam: {total_concepts}\nParse: {len(anchors)}\n\n")
                    for i, a in enumerate(anchors, 1):
                        f.write(f"{i}. {a}\n")
            except:
                pass

            # ─── FAZ 1: Pinecone kapsam kontrolü ───
            print(f"\n   📊 FAZ 1: Pinecone kapsam kontrolü")
            print(f"   📥 Pinecone'dan '{namespace}' namespace'teki kartlar çekiliyor...")
            existing_texts = get_existing_card_texts(namespace)
            print(f"   📥 Mevcut kart sayısı: {len(existing_texts)}")

            already_covered, remaining_anchors = classify_anchors_pinecone(anchors, existing_texts)
            print(f"   📊 Başlangıç durumu: {len(already_covered)} kapsanmış / {len(remaining_anchors)} kalan")

            # ─── FAZ 2: Chunk bazlı cloze kart üretimi ───
            batch_num = 0
            consecutive_dry = 0
            all_cards = []  # Tüm üretilen kartlar (session boyunca)

            if remaining_anchors:
                chunks = list(chunk_list(remaining_anchors, CHUNK_SIZE))
                print(f"\n   🎯 FAZ 2: {len(remaining_anchors)} kalan kavram → {len(chunks)} dilim ({CHUNK_SIZE}'lik)")

                for chunk_idx, chunk in enumerate(chunks):
                    if consecutive_dry >= CLOZE_SATURATION_THRESHOLD:
                        print(f"   ⚠️ Doygunluk eşiği ({CLOZE_SATURATION_THRESHOLD} ardışık boş). Durduruluyor.")
                        break

                    if batch_num >= CLOZE_MAX_BATCHES:
                        print(f"   ⚠️ Maks batch limiti ({CLOZE_MAX_BATCHES}). Durduruluyor.")
                        break

                    batch_num += 1
                    print(f"\n   ┌─ BATCH {batch_num}/{CLOZE_MAX_BATCHES} (Dilim {chunk_idx + 1}/{len(chunks)}) ────")
                    print(f"   │  Hedef kavramlar: {len(chunk)} adet")

                    prompt = build_cloze_prompt(chunk, lesson=lesson, unit=unit_name)
                    print(f"   │  Prompt: {len(prompt)} char")
                    print(f"   │  🧠 NotebookLM'e gönderiliyor...")

                    res = await asyncio.wait_for(
                        client.chat.ask(NOTEBOOK_ID, prompt),
                        timeout=600
                    )

                    if check_saturation(res.answer):
                        print(f"   │  🏁 Model DOYGUNLUK bildirdi.")
                        batch_results.append((batch_num, 0, "DOYGUNLUK"))
                        break

                    cards = parse_cloze_response(res.answer)

                    if not cards:
                        # Parse başarısız → recovery'ye yaz, esnek parse dene
                        print(f"   │  ⚠️ TSV parse başarısız, ham yanıt kaydediliyor...")
                        _dump_raw_response(res.answer)

                    print(f"   │  📦 Üretilen: {len(cards)} kart")

                    # Log (F2-03: güvenli dosya adı)
                    try:
                        log_path = os.path.join(LOG_DIR, f"cloze_{safe_unit}_batch{batch_num}.txt")
                        with open(log_path, 'w', encoding='utf-8') as f:
                            f.write(f"Batch: {batch_num}\nChunk: {chunk_idx + 1}/{len(chunks)}\n")
                            f.write(f"Targets: {len(chunk)}\nCards: {len(cards)}\n\n")
                            f.write("--- TARGETS ---\n")
                            for c in chunk:
                                f.write(f"- {c}\n")
                            f.write("\n--- ANSWER ---\n")
                            f.write(res.answer or '(empty)')
                    except:
                        pass

                    if not cards:
                        consecutive_dry += 1
                        ans_len = len(res.answer) if res.answer else 0
                        print(f"   │  ⚠️ 0 kart (answer={ans_len} char, boş: {consecutive_dry}/{CLOZE_SATURATION_THRESHOLD})")
                        batch_results.append((batch_num, 0, "BOŞ"))
                        print(f"   └──────────────────────────────────────")
                        await asyncio.sleep(INTER_BATCH_COOLDOWN)
                        continue

                    # Pinecone'a yaz
                    wrote = deploy_cards_to_pinecone(cards, lesson, unit_name, namespace=namespace, dry_run=dry_run)
                    total_produced += wrote
                    all_cards.extend(cards)

                    # F2-02: Düşük verimli batch → dry saydır
                    if wrote < CLOZE_MIN_CARDS_PER_BATCH:
                        consecutive_dry += 1
                        print(f"   │  ⚠️ Düşük verim ({wrote} kart < eşik {CLOZE_MIN_CARDS_PER_BATCH}): {consecutive_dry}/{CLOZE_SATURATION_THRESHOLD}")
                    else:
                        consecutive_dry = 0

                    # TSV dökümü
                    if cards and not dry_run:
                        try:
                            save_cloze_tsv(cards, lesson, unit_name)
                        except Exception as tsv_err:
                            print(f"   ⚠️ TSV kaydedilemedi: {tsv_err}")

                    # Kapsam güncelle
                    # Yeni eklenen kart metinlerini existing_texts'e ekle
                    new_texts = [c["vektorlenecek_metin"] for c in cards]
                    existing_texts.extend(new_texts)

                    total_covered, total_remaining = classify_anchors_pinecone(anchors, existing_texts)
                    print(f"   │  📊 Genel: {len(total_covered)}/{len(anchors)} kavram ✅, kalan: {len(total_remaining)}")

                    batch_results.append((batch_num, len(cards), "OK"))
                    print(f"   └──────────────────────────────────────")

                    if len(total_remaining) == 0:
                        print(f"\n   🎯 TÜM {len(anchors)} KAVRAM KARTLAŞTIRILDI!")
                        break

                    await asyncio.sleep(INTER_BATCH_COOLDOWN)

            # ─── FAZ 3: Nihai Rapor ───
            final_covered, final_uncovered = classify_anchors_pinecone(anchors, existing_texts)
            print(f"\n   {'='*50}")
            print(f"   📊 ÜNİTE RAPORU (İLK TUR): {unit_name}")
            print(f"   {'='*50}")
            print(f"   Çapalanan kavram       : {len(anchors)}")
            print(f"   Kartlaştırılmış kavram : {len(final_covered)} ✅")
            print(f"   Kapsanmayan kavram     : {len(final_uncovered)} ⏳")
            if anchors:
                print(f"   Kapsam oranı           : {len(final_covered)/len(anchors)*100:.1f}%")
            print(f"   Üretim turları         : {batch_num}")
            print(f"   Toplam üretilen kart   : {total_produced}")

            for bn, produced, status in batch_results:
                print(f"     Batch {bn}: {produced} kart → {status}")

            # ─── FAZ 4: Uncovered temizleme turları ───
            if final_uncovered and batch_num < CLOZE_MAX_BATCHES:
                print(f"\n   {'='*50}")
                print(f"   🔄 FAZ 4: {len(final_uncovered)} kapsanmayan kavram için ek turlar")
                print(f"   {'='*50}")

                remaining = list(final_uncovered)
                uncovered_batch_num = 0

                while remaining and batch_num < CLOZE_MAX_BATCHES:
                    chunk = remaining[:CHUNK_SIZE]
                    remaining = remaining[CHUNK_SIZE:]
                    batch_num += 1
                    uncovered_batch_num += 1

                    print(f"\n   ┌─ FAZ4 BATCH {uncovered_batch_num} (Dilim: {len(chunk)} kavram) ────")
                    print(f"   │  Hedef: {len(chunk)} kavram")

                    prompt = build_cloze_uncovered_prompt(chunk, lesson=lesson, unit=unit_name)
                    print(f"   │  Prompt: {len(prompt)} char")
                    print(f"   │  🧠 NotebookLM'e gönderiliyor...")

                    res = await asyncio.wait_for(
                        client.chat.ask(NOTEBOOK_ID, prompt),
                        timeout=600
                    )

                    # FAZ 4'te DOYGUNLUK sinyali dinlenmez — her kavram zorunlu
                    if check_saturation(res.answer):
                        print(f"   │  ⚠️ Model DOYGUNLUK bildirdi — yine de karta bakılıyor.")

                    cards = parse_cloze_response(res.answer)

                    if not cards:
                        print(f"   │  ⚠️ TSV parse başarısız, esnek parse deneniyor...")
                        _dump_raw_response(res.answer)

                    print(f"   │  📦 Üretilen: {len(cards)} kart")

                    # Log
                    try:
                        log_path = os.path.join(LOG_DIR, f"cloze_{_safe_filename(unit_name)}_faz4_batch{uncovered_batch_num}.txt")
                        with open(log_path, 'w', encoding='utf-8') as f:
                            f.write(f"Batch: {batch_num} (FAZ 4 - Uncovered)\n")
                            f.write(f"Targets: {len(chunk)}\nCards: {len(cards)}\n\n")
                            f.write("--- TARGETS ---\n")
                            for c in chunk:
                                f.write(f"- {c}\n")
                            f.write("\n--- ANSWER ---\n")
                            f.write(res.answer or '(empty)')
                    except:
                        pass

                    if not cards:
                        print(f"   │  ⚠️ 0 kart — atlanıyor")
                        batch_results.append((batch_num, 0, "FAZ4_BOŞ"))
                        print(f"   └──────────────────────────────────────")
                        await asyncio.sleep(INTER_BATCH_COOLDOWN)
                        continue

                    # Pinecone'a yaz
                    wrote = deploy_cards_to_pinecone(cards, lesson, unit_name, namespace=namespace, dry_run=dry_run)
                    total_produced += wrote
                    all_cards.extend(cards)

                    # TSV dökümü
                    if cards and not dry_run:
                        try:
                            save_cloze_tsv(cards, lesson, unit_name)
                        except Exception as tsv_err:
                            print(f"   ⚠️ TSV kaydedilemedi: {tsv_err}")

                    # Kapsam güncelle
                    new_texts = [c["vektorlenecek_metin"] for c in cards]
                    existing_texts.extend(new_texts)

                    # remaining'den kapsananları çıkar
                    covered_now, _ = classify_anchors_pinecone(remaining, existing_texts)
                    remaining = [a for a in remaining if a not in covered_now]

                    total_covered_check, total_remaining_check = classify_anchors_pinecone(anchors, existing_texts)
                    print(f"   │  📊 Genel: {len(total_covered_check)}/{len(anchors)} kavram ✅, kalan: {len(total_remaining_check)}")
                    batch_results.append((batch_num, len(cards), "FAZ4_OK"))
                    print(f"   └──────────────────────────────────────")

                    if not remaining:
                        print(f"\n   🎯 FAZ 4: TÜM KAVRAMLAR KARTLAŞTIRILDI!")
                        break

                    await asyncio.sleep(INTER_BATCH_COOLDOWN)

                if remaining:
                    print(f"\n   ⏳ FAZ 4 sonrası hâlâ {len(remaining)} kapsanmayan kavram (batch limiti aşıldı).")

            # ─── Nihai Rapor ───
            post_covered, post_uncovered = classify_anchors_pinecone(anchors, existing_texts)
            print(f"\n   {'='*50}")
            print(f"   📊 NİHAİ DURUM: {unit_name}")
            print(f"   {'='*50}")
            print(f"   Çapalanan kavram       : {len(anchors)}")
            print(f"   Kartlaştırılmış kavram : {len(post_covered)} ✅")
            print(f"   Kapsanmayan kavram     : {len(post_uncovered)} ⏳")
            if anchors:
                print(f"   Son kapsam oranı       : {len(post_covered)/len(anchors)*100:.1f}%")
            print(f"   Toplam üretim turu     : {batch_num}")
            print(f"   Toplam üretilen kart   : {total_produced}")

            for bn, produced, status in batch_results:
                print(f"     Batch {bn}: {produced} kart → {status}")

            if post_uncovered:
                print(f"\n   ⏳ KAPSANMAYAN ({len(post_uncovered)}):")
                for i, a in enumerate(post_uncovered[:25], 1):
                    print(f"      {i}. {a}")
                if len(post_uncovered) > 25:
                    print(f"      ...ve {len(post_uncovered) - 25} kavram daha")

            # Uncovered log
            try:
                uncovered_log = os.path.join(LOG_DIR, f"cloze_uncovered_{_safe_filename(unit_name)}.txt")
                with open(uncovered_log, 'w', encoding='utf-8') as f:
                    f.write(f"Ünite: {unit_name}\nDers: {lesson}\n")
                    f.write(f"Kapsanan: {len(post_covered)}\nKalan: {len(post_uncovered)}\n\n")
                    for i, a in enumerate(post_uncovered, 1):
                        f.write(f"{i}. {a}\n")
            except:
                pass

            # TSV konsolidasyonu
            if not dry_run and total_produced > 0:
                try:
                    merged = consolidate_unit_tsv(lesson, unit_name)
                    if merged:
                        print(f"\n   📦 MERGED TSV: {merged}")
                except Exception as merge_err:
                    print(f"   ⚠️ MERGED TSV oluşturulamadı: {merge_err}")

            print(f"   {'='*50}")
            return True

        except Exception as e:
            classified = classify_error(e)

            if isinstance(classified, AuthError):
                print(f"   🔐 Auth hatası: {e}")
                if await ensure_auth(client):
                    continue
                raise FatalError(str(e))

            elif isinstance(classified, RetryableError):
                backoff = RETRY_BACKOFF[min(attempt - 1, len(RETRY_BACKOFF) - 1)]
                print(f"   🔄 Hata (deneme {attempt}/{MAX_RETRIES}): {e}")
                if attempt < MAX_RETRIES:
                    print(f"   ⏳ {backoff}s bekleniyor...")
                    await asyncio.sleep(backoff)
                else:
                    print(f"   🚫 Maks deneme aşıldı. Ünite atlanıyor.")
            else:
                print(f"   ❌ Hata: {e}")
                if attempt >= MAX_RETRIES:
                    print(f"   🚫 Ünite atlanıyor.")

        finally:
            if source and getattr(source, 'id', None):
                try:
                    await client.sources.delete(NOTEBOOK_ID, source.id)
                except Exception as del_err:
                    print(f"   ⚠️ Source silme: {del_err}")

    return False


# ═══════════════════════════════════════════════
#  TOPLU İŞLEME (Dizin)
# ═══════════════════════════════════════════════

def _natural_sort_key(f: Path):
    m = re.search(r'\d+', f.name)
    return int(m.group()) if m else 999


def _resolve_inputs(paths):
    resolved = []
    for p in paths:
        path = Path(p)
        if path.is_dir():
            files = [f for f in path.iterdir() if f.suffix.lower() in (".pdf", ".md")]
            files.sort(key=_natural_sort_key)
            if not files:
                print(f"   ⚠️ Klasörde PDF/MD yok: {path}")
            resolved.extend(files)
        elif path.is_file() and path.suffix.lower() in (".pdf", ".md"):
            resolved.append(path)
        else:
            print(f"   ⚠️ Atlandı (PDF/MD değil ya da bulunamadı): {p}")
    return resolved


def _derive_unit_name(file_path: Path) -> str:
    """Dosya adından ünite adı türetir."""
    stem = file_path.stem
    # "01-Ünite Adı" / "1 - Ünite Adı" → "Ünite Adı"
    stem = re.sub(r'^\d+[\s\-_]+', '', stem)
    stem = stem.replace('_', ' ').strip()
    return stem


# ═══════════════════════════════════════════════
#  CLI
# ═══════════════════════════════════════════════

async def main_async(args):
    if args.dir:
        files = _resolve_inputs([args.dir])
        if not files:
            print("❌ Dizinde PDF/MD bulunamadı.")
            return 1
        print(f"📂 {len(files)} dosya bulundu.")
    elif args.file:
        p = Path(args.file)
        if not p.exists():
            print(f"❌ Dosya bulunamadı: {args.file}")
            return 1
        files = [p]
    else:
        print("❌ --file veya --dir belirtilmeli.")
        return 1

    if not args.lesson:
        print("❌ --lesson zorunlu.")
        return 1

    # Pinecone namespace kontrolü
    ns = lesson_to_namespace(args.lesson)
    print(f"📦 Hedef namespace: {ns}")
    existing_count = get_namespace_count(ns)
    print(f"📊 Mevcut vektör sayısı: {existing_count}")

    async with NotebookLMMCPClient() as client:
        for i, file_path in enumerate(files):
            unit_name = args.unit if args.unit else _derive_unit_name(file_path)
            print(f"\n{'#' * 60}")
            print(f"# [{i + 1}/{len(files)}] {unit_name}")
            print(f"# Dosya: {file_path}")
            print(f"{'#' * 60}")

            try:
                success = await process_unit_cloze(
                    client, args.lesson, unit_name, str(file_path),
                    dry_run=args.dry_run
                )
                if not success and not args.dry_run:
                    print(f"   ⚠️ {unit_name} başarısız — sonraki üniteye geçiliyor.")
            except FatalError as e:
                print(f"   🚫 Kritik hata: {e}. Pipeline durduruluyor.")
                return 1

            # Birimler arası bekleme
            if i < len(files) - 1:
                print(f"\n   ⏳ {COOLDOWN_BETWEEN_UNITS}s birimler arası bekleme...")
                await asyncio.sleep(COOLDOWN_BETWEEN_UNITS)

    # Final Pinecone durumu
    final_count = get_namespace_count(ns)
    print(f"\n{'='*60}")
    print(f"✅ Pipeline tamamlandı. Pinecone '{ns}' namespace: {existing_count} → {final_count} vektör")
    if final_count > existing_count:
        print(f"   +{final_count - existing_count} yeni kart eklendi.")
    print(f"{'='*60}")

    return 0


def main():
    parser = argparse.ArgumentParser(
        description="Anki Cloze Kart Üretim Pipeline'ı (Çapa=Kart v1)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Örnekler:
  python scripts/notebooklm_mcp_cloze.py --file "konu.pdf" --lesson Endodonti --dry-run
  python scripts/notebooklm_mcp_cloze.py --file "konu.pdf" --lesson Fizyoloji --unit "Kalp Fizyolojisi"
  python scripts/notebooklm_mcp_cloze.py --dir "C:/PDFler/Endodonti" --lesson Endodonti
        """
    )
    parser.add_argument("--file", help="Tek PDF/MD dosyası")
    parser.add_argument("--dir", help="PDF/MD içeren klasör")
    parser.add_argument("--lesson", required=True, help="Ders adı (örn: Endodonti, Fizyoloji)")
    parser.add_argument("--unit", help="Ünite adı (belirtilmezse dosya adından türetilir)")
    parser.add_argument("--dry-run", action="store_true", help="Pinecone'a yazma, sadece üret ve göster")
    args = parser.parse_args()

    return asyncio.run(main_async(args))


if __name__ == "__main__":
    sys.exit(main())
