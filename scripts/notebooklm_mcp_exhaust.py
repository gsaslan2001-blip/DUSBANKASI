"""
DUS BANKASI — Exhaustive Coverage Pipeline v3 (Çapa=Soru) via MCP HTTP
========================================================================
Mimari:
  FAZ 0: Kavram Çapalama → Kaynaktaki tüm test edilebilir kavramları listeler
  FAZ 1: Python kavramları 25'lik dilimlere böler
  FAZ 2: Her dilim YENİ conversation'la gönderilir. Prompt kısa:
         sadece kavram listesi. Master Prompt zaten kalite kurallarını halleder.
  FAZ 3: Post-batch analiz → hangi çapalar sorgulandı?
  FAZ 4: Kalan çapalar bir sonraki dilime eklenir. Tüm çapalar bitene kadar.

Kullanım:
  python scripts/notebooklm_mcp_exhaust.py --file "konu.pdf" --lesson Fizyoloji --dry-run
  python scripts/notebooklm_mcp_exhaust.py --file "konu.pdf" --lesson Fizyoloji --unit DENEME
"""

import os
import sys
import asyncio
import re
import argparse
import subprocess
import urllib.request
import json
from pathlib import Path
from datetime import datetime

# ─── Modül yolu ───
sys.path.insert(0, os.path.dirname(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "tools"))

from config import (
    NOTEBOOK_ID, RETRY_BACKOFF, MAX_RETRIES,
    COOLDOWN_BETWEEN_UNITS, PROMPT_CHAR_LIMIT,
    MAX_BATCHES_PER_UNIT, SATURATION_THRESHOLD,
    MIN_ACCEPTED_PER_BATCH, INTER_BATCH_COOLDOWN,
)
from shared import (
    extract_json, deploy_to_supabase, get_existing_units,
    get_questions_for_unit,
    classify_error, RetryableError, AuthError, FatalError,
)

import difflib
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "tools"))
from smart_audit_pipeline import run_audit


# ═══════════════════════════════════════════════
#  NOTEBOOKLM MCP ISTEMCI TANIMI
# ═══════════════════════════════════════════════

class NotebookLMMCPClient:
    def __init__(self, mcp_url=None):
        self.mcp_url = mcp_url or os.environ.get("MCP_URL", "http://127.0.0.1:3000/mcp")
        self.session_id = None
        
    async def __aenter__(self):
        # initialize ile MCP bağlantısını başlat
        payload = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "initialize",
            "params": {
                "protocolVersion": "2024-11-05",
                "capabilities": {},
                "clientInfo": {"name": "python-exhaust", "version": "1.0"}
            }
        }
        res, self.session_id = self._post(payload)
        
        # notifications/initialized gönder
        self._post({
            "jsonrpc": "2.0",
            "method": "notifications/initialized"
        })

        # jacob-bd: notebook kaydı/seçimi gerekmez — araçlar notebook_id'yi doğrudan alır.
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        # stateless streamable-http: kapatılacak kalıcı oturum yok.
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
                """notebook_get ile mevcut kaynakları döner (her biri .id ve .title)."""
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
                """PDF/dosyayı NotebookLM'e doğrudan yükler (source_add, type=file)."""
                p = Path(file_path)
                print(f"      [MCP] Kaynak yükleniyor (file): {p.name} ...")
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
                if sc.get("status") not in (None, "success"):
                    raise Exception(f"Yükleme başarısız: {sc}")

                # Source id'yi notebook_get'ten başlık eşleşmesiyle bul (en güvenilir yol).
                sid = None
                for s in await self.list(notebook_id):
                    if p.stem.lower() in (s.title or "").lower():
                        sid = s.id
                        break

                class MockSource:
                    def __init__(self, source_id):
                        self.id = source_id
                return MockSource(sid or p.stem)

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
                """Asenkron sorgu: start → status polling. Soket açık kalmadığı için
                60-120sn süren cevaplarda bile timeout/kopma yaşanmaz."""
                args = {"notebook_id": notebook_id, "query": prompt}
                if conversation_id:
                    args["conversation_id"] = conversation_id

                # 1) Sorguyu başlat → anında query_id döner.
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

                # 2) Tamamlanana kadar poll et (~30 dk üst sınır).
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
        print("   🔄 MCP sunucusu üzerinden headless auth yenilemesi (refresh_auth) deneniyor...")
        resp, _ = self._post({
            "jsonrpc": "2.0",
            "id": 51,
            "method": "tools/call",
            "params": {
                "name": "refresh_auth",
                "arguments": {}
            }
        })
        sc = resp.get("result", {}).get("structuredContent", {})
        if sc.get("status") == "success":
            return True
        print(f"   ⚠️ refresh_auth başarısız: {sc.get('message') or sc}")
        return False


async def ensure_auth(client, allow_interactive: bool = True) -> bool:
    """MCP HTTP sunucusu üzerinden auth durumunu kontrol eder.
    `auth_status` flag'i bazen yanlış raporlanır (login taze ama sunucu 'stale' der);
    bu yüzden stale durumunda refresh_auth dener, hâlâ stale ise **canlı API testi**
    (notebook_get) ile gerçek auth durumunu doğrular. Yalnızca gerçekten çağrı
    yapamadığında interaktif `nlm login` ister."""

    def _status():
        r, _ = client._post({
            "jsonrpc": "2.0", "id": 50, "method": "tools/call",
            "params": {"name": "server_info", "arguments": {}}
        })
        return (r.get("result", {}).get("structuredContent", {}) or {}).get("auth_status")

    def _live_check():
        """Gerçek API çağrısıyla auth çalışıyor mu test et (notebook_get)."""
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

        # Stale: refresh_auth dene, sonra canlı test ile gerçek durumu doğrula
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
            # Status hâlâ stale: yanlış flag olabilir, canlı API testi yap
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


if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding='utf-8')
    except: pass

LOG_DIR = os.path.join(os.path.dirname(__file__), "logs")
os.makedirs(LOG_DIR, exist_ok=True)

# Her dilimde modele gönderilecek kavram sayısı
CHUNK_SIZE = 25


# ═══════════════════════════════════════════════
#  PROMPTLAR — KISA ve ÖNCÜL
# ═══════════════════════════════════════════════

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

# İlk batch: Master Prompt'un kendi ağırlık merkezleri
PROMPT_BATCH_1 = r"""Sistem ayarlarındaki Master Prompt kuralları aynen geçerlidir.

Lütfen o ayarlardaki TÜM kalite kurallarına, <analiz> protokolüne ve spesifik JSON çıktısına harfiyen uyarak, sadece sana verdiğim bu kaynaktan ilk 30 soruluk ağırlık merkezleri (Batch 1, 2, 3) setini üret.
"""

# Sonraki batch'ler: SADECE kavram listesi + minimal yönerge
# Master Prompt zaten tüm format/kalite kurallarını hallediyor
PROMPT_CHUNK_TEMPLATE = r"""ÇAPA MODU — Batch {BATCH_NUM}

Aşağıdaki kavramları birincil test nesnesi olarak sorgula. Her kavram en az bir sorunun BİRİNCİL konusu olmalı. Listedeki tüm kavramları kapsamaya çalış:

{KAVRAM_LISTESI}

Master Prompt kuralları (JSON formatı, zorluk dağılımı, analiz protokolü) aynen geçerlidir.
"""


# ═══════════════════════════════════════════════
#  ÇAPA PARSE & ANALİZ
# ═══════════════════════════════════════════════

def parse_anchor_response(text):
    """Çapa yanıtından kavram listesi ve toplam sayı çıkarır."""
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
    """
    Her çapayı YALNIZCA soruların KÖKLERİ üzerinden kontrol eder.
    Açıklama (explanation) ve şıklar (option_a..e) SAYILMAZ — bir çapa ancak
    DOĞRUDAN bir sorunun KÖKÜNDE soruluyorsa "sorgulanmış" sayılır.
    """
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
    """Listeyi belirli boyutta dilimlere ayırır."""
    for i in range(0, len(lst), size):
        yield lst[i:i + size]


def check_saturation(response_text):
    """Model 'DOYGUNLUK' bildirdi mi kontrol eder."""
    if not response_text:
        return False
    return "DOYGUNLUK" in response_text.upper()


# ═══════════════════════════════════════════════
#  ANA İŞLEM: TEK ÜNİTE EXHAUSTIVE v3
# ═══════════════════════════════════════════════

async def process_unit_exhaustive(client, lesson, unit_name, file_path, dry_run=False, uncovered_only=False, concept_file=None):
    """Tek bir üniteyi Çapa=Soru modunda işler."""
    print(f"\n{'='*60}")
    print(f"🔬 EXHAUSTIVE v3: {unit_name}")
    print(f"📂 Kaynak: {file_path}")
    print(f"{'='*60}")

    # Her ünite başında auth kontrol et
    if not await ensure_auth(client):
        raise FatalError(f"Auth yenilenemedi, {unit_name} atlandı.")

    source = None
    total_produced = 0
    batch_results = []

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            # ─── 0. Temizlik: ünite TEK kaynak olmalı (eski PDF kontaminasyonunu önler) ───
            try:
                existing = await client.sources.list(NOTEBOOK_ID)
                if existing:
                    print(f"   🧹 {len(existing)} mevcut kaynak temizleniyor...")
                    for s in existing:
                        try:
                            await client.sources.delete(NOTEBOOK_ID, s.id)
                            print(f"      ✓ silindi: {s.title}")
                        except Exception as de:
                            print(f"      ⚠ silinemedi ({s.title}): {de}")
            except Exception as cleanup_err:
                print(f"   ⚠️ Cleanup uyarısı: {cleanup_err}")

            print(f"   📤 Kaynak yükleniyor ve indeksleniyor...")
            source = await asyncio.wait_for(
                client.sources.add_file(NOTEBOOK_ID, file_path, wait=True, wait_timeout=1500),
                timeout=1600
            )
            print(f"   ✅ Kaynak hazır: {source.id}")

            # ─── FAZ 0: Kavram Çapalama ───
            if concept_file:
                print(f"\n   📌 FAZ 0: Kavramlar dosyadan yükleniyor ({concept_file})")
                if not os.path.exists(concept_file):
                    print(f"   ❌ Kavram dosyası bulunamadı: {concept_file}")
                    return False
                
                with open(concept_file, 'r', encoding='utf-8') as f:
                    concept_content = f.read()
                
                anchors, total_concepts = parse_anchor_response(concept_content)
                print(f"   📌 Kavramlar yüklendi: {total_concepts} kavram (parse: {len(anchors)})")
            elif uncovered_only:
                print(f"\n   📌 FAZ 0 ATLANDI: Kapsanmayan kavramlar log dosyasından yükleniyor...")
                uncovered_file = os.path.join(LOG_DIR, f"uncovered_{unit_name}.txt")
                if not os.path.exists(uncovered_file):
                    print(f"   ⚠️ Kapsanmayan kavram dosyası yok ({uncovered_file}). Ünite atlanıyor.")
                    return True
                
                with open(uncovered_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                anchors = []
                for line in content.split('\n'):
                    line = line.strip()
                    if re.match(r'^\d+\.\s+', line):
                        anchors.append(re.sub(r'^\d+\.\s+', '', line))
                
                if not anchors:
                    print("   ℹ️ Bu ünitede kapsanmayan kavram yok.")
                    return True
                
                total_concepts = len(anchors)
                print(f"   📌 {total_concepts} hedef kavram dosyadan yüklendi.")
            else:
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

                # Çapa logunu kaydet
                try:
                    with open(os.path.join(LOG_DIR, f"anchor_{unit_name}.txt"), 'w', encoding='utf-8') as f:
                        f.write(f"Toplam: {total_concepts}\nParse: {len(anchors)}\n\n")
                        for i, a in enumerate(anchors, 1):
                            f.write(f"{i}. {a}\n")
                except:
                    pass

            # ─── FAZ 1: Mevcut DB ile çapa kontrolü ───
            session_qs = get_questions_for_unit(lesson, unit_name)
            initial_db_count = len(session_qs)
            print(f"   📥 Supabase'de mevcut: {initial_db_count} soru")

            # Zaten sorgulanmış çapaları hesapla
            already_covered, remaining_anchors = classify_anchors(anchors, session_qs)
            print(f"   📊 Başlangıç durumu: {len(already_covered)} sorgulanmış / {len(remaining_anchors)} kalan")

            # ─── FAZ 2: Batch 1 — Master Prompt'un doğal ağırlık merkezleri ───
            batch_num = 0
            consecutive_dry = 0

            # uncovered_only modunda Batch 1'i TAMAMEN ATLA —
            # kavramlar log dosyasından yüklendi, doğrudan FAZ 3'e geç.
            if not uncovered_only and initial_db_count == 0:
                batch_num = 1
                print(f"\n   ┌─ BATCH 1/{MAX_BATCHES_PER_UNIT} (Ağırlık Merkezleri) ────")
                print(f"   │  Master Prompt ile ilk 30 soru üretiliyor...")

                res = await asyncio.wait_for(
                    client.chat.ask(NOTEBOOK_ID, PROMPT_BATCH_1),
                    timeout=600
                )

                new_questions = extract_json(res.answer) or []
                print(f"   │  📦 Üretilen: {len(new_questions)} soru")

                # Log
                try:
                    with open(os.path.join(LOG_DIR, f"exhaust_{unit_name}_batch1.txt"), 'w', encoding='utf-8') as f:
                        f.write(f"Batch: 1 (Master)\nQuestions: {len(new_questions)}\n\n--- ANSWER ---\n")
                        f.write(res.answer or '(empty)')
                except:
                    pass

                if new_questions:
                    session_qs.extend(new_questions)
                    total_produced += len(new_questions)

                    if dry_run:
                        print(f"   │  🧪 DRY-RUN: {len(new_questions)} soru yazılmadı.")
                    else:
                        deploy_to_supabase(new_questions, lesson, unit_name)

                    # Post-batch çapa durumu
                    covered_now, remaining_anchors = classify_anchors(anchors, session_qs)
                    print(f"   │  📊 {len(covered_now)}/{len(anchors)} çapa sorgulandı, kalan: {len(remaining_anchors)}")
                    batch_results.append((1, len(new_questions), "OK"))
                else:
                    consecutive_dry += 1
                    batch_results.append((1, 0, "BOŞ"))

                print(f"   └──────────────────────────────────────")

            # ─── FAZ 3: Dilim bazlı üretim (kalan çapaları hedefle) ───
            if remaining_anchors and consecutive_dry < SATURATION_THRESHOLD:
                chunks = list(chunk_list(remaining_anchors, CHUNK_SIZE))
                print(f"\n   🎯 FAZ 3: {len(remaining_anchors)} kalan çapa → {len(chunks)} dilim ({CHUNK_SIZE}'lik)")

                for chunk_idx, chunk in enumerate(chunks):
                    if consecutive_dry >= SATURATION_THRESHOLD:
                        print(f"   ⚠️ Doygunluk eşiği ({SATURATION_THRESHOLD} ardışık boş). Durduruluyor.")
                        break

                    if batch_num >= MAX_BATCHES_PER_UNIT:
                        print(f"   ⚠️ Maks batch limiti ({MAX_BATCHES_PER_UNIT}). Durduruluyor.")
                        break

                    batch_num += 1
                    print(f"\n   ┌─ BATCH {batch_num}/{MAX_BATCHES_PER_UNIT} (Dilim {chunk_idx+1}/{len(chunks)}) ────")
                    print(f"   │  Hedef kavramlar: {len(chunk)} adet")

                    kavram_str = "\n".join(f"- {c}" for c in chunk)
                    prompt = PROMPT_CHUNK_TEMPLATE.replace("{BATCH_NUM}", str(batch_num))
                    prompt = prompt.replace("{KAVRAM_LISTESI}", kavram_str)

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

                    new_questions = extract_json(res.answer) or []
                    print(f"   │  📦 Üretilen: {len(new_questions)} soru")

                    # Log
                    try:
                        log_path = os.path.join(LOG_DIR, f"exhaust_{unit_name}_batch{batch_num}.txt")
                        with open(log_path, 'w', encoding='utf-8') as f:
                            f.write(f"Batch: {batch_num}\nChunk: {chunk_idx+1}/{len(chunks)}\n")
                            f.write(f"Targets: {len(chunk)}\nQuestions: {len(new_questions)}\n\n")
                            f.write("--- TARGETS ---\n")
                            for c in chunk:
                                f.write(f"- {c}\n")
                            f.write("\n--- ANSWER ---\n")
                            f.write(res.answer or '(empty)')
                    except:
                        pass

                    if not new_questions:
                        consecutive_dry += 1
                        ans_len = len(res.answer) if res.answer else 0
                        print(f"   │  ⚠️ 0 soru (answer={ans_len} char, boş: {consecutive_dry}/{SATURATION_THRESHOLD})")
                        batch_results.append((batch_num, 0, "BOŞ"))
                        print(f"   └──────────────────────────────────────")
                        await asyncio.sleep(INTER_BATCH_COOLDOWN)
                        continue

                    consecutive_dry = 0
                    session_qs.extend(new_questions)
                    total_produced += len(new_questions)

                    if dry_run:
                        print(f"   │  🧪 DRY-RUN: {len(new_questions)} soru yazılmadı.")
                        for i, q in enumerate(new_questions[:2], 1):
                            print(f"   │     {i}. {(q.get('question',''))[:80]}...")
                    else:
                        deploy_to_supabase(new_questions, lesson, unit_name)

                    chunk_covered, chunk_uncovered = classify_anchors(chunk, new_questions)
                    print(f"   │  🎯 Dilim kapsam: {len(chunk_covered)}/{len(chunk)} kavram sorgulandı")

                    total_covered, total_remaining = classify_anchors(anchors, session_qs)
                    print(f"   │  📊 Genel: {len(total_covered)}/{len(anchors)} çapa ✅, kalan: {len(total_remaining)}")

                    batch_results.append((batch_num, len(new_questions), "OK"))
                    print(f"   └──────────────────────────────────────")

                    if len(total_remaining) == 0:
                        print(f"\n   🎯 TÜM {len(anchors)} ÇAPA SORGULANMIŞ!")
                        break

                    await asyncio.sleep(INTER_BATCH_COOLDOWN)

            # ─── FAZ 4: Rapor ───
            final_covered, final_uncovered = classify_anchors(anchors, session_qs)
            print(f"\n   {'='*50}")
            print(f"   📊 ÜNİTE RAPORU: {unit_name}")
            print(f"   {'='*50}")
            print(f"   Çapalanan kavram       : {len(anchors)}")
            print(f"   Sorgulanmış kavram     : {len(final_covered)} ✅")
            print(f"   Sorgulanmamış kavram   : {len(final_uncovered)} ⏳")
            if anchors:
                print(f"   Kapsam oranı           : {len(final_covered)/len(anchors)*100:.1f}%")
            print(f"   Üretim turları         : {batch_num}")
            print(f"   Toplam üretilen        : {total_produced} soru")
            for bn, produced, status in batch_results:
                print(f"     Batch {bn}: {produced} üretildi → {status}")

            if final_uncovered:
                print(f"\n   ⏳ SORGULANMAMIŞ ({len(final_uncovered)}):")
                for i, a in enumerate(final_uncovered[:25], 1):
                    print(f"      {i}. {a}")
                if len(final_uncovered) > 25:
                    print(f"      ...ve {len(final_uncovered)-25} kavram daha")

            try:
                with open(os.path.join(LOG_DIR, f"uncovered_{unit_name}.txt"), 'w', encoding='utf-8') as f:
                    f.write(f"Ünite: {unit_name}\nÇapalanan: {len(anchors)}\n")
                    f.write(f"Sorgulanmış: {len(final_covered)}\nKalan: {len(final_uncovered)}\n\n")
                    for i, a in enumerate(final_uncovered, 1):
                        f.write(f"{i}. {a}\n")
            except:
                pass

            # ─── FAZ 5: Uncovered temizleme (kaynak hâlâ yüklüyken) ───
            if final_uncovered and batch_num < MAX_BATCHES_PER_UNIT:
                print(f"\n   {'='*50}")
                print(f"   🔄 FAZ 5: {len(final_uncovered)} kapsanmayan kavram için ek tur")
                print(f"   {'='*50}")

                remaining = list(final_uncovered)
                temp_batch_qs = list(session_qs)  # kopya, her batch sonrası güncellenir
                faz5_batch_num = 0

                while remaining and batch_num < MAX_BATCHES_PER_UNIT:
                    chunk = remaining[:CHUNK_SIZE]
                    remaining = remaining[CHUNK_SIZE:]
                    batch_num += 1
                    faz5_batch_num += 1

                    print(f"\n   ┌─ FAZ5 BATCH {faz5_batch_num}/{MAX_BATCHES_PER_UNIT} ────")
                    print(f"   │  Hedef: {len(chunk)} kavram")

                    kavram_str = "\n".join(f"- {c}" for c in chunk)
                    prompt = PROMPT_CHUNK_TEMPLATE.replace("{BATCH_NUM}", str(batch_num))
                    prompt = prompt.replace("{KAVRAM_LISTESI}", kavram_str)

                    res = await asyncio.wait_for(
                        client.chat.ask(NOTEBOOK_ID, prompt),
                        timeout=600
                    )

                    if check_saturation(res.answer):
                        print(f"   │  🏁 Model DOYGUNLUK bildirdi.")
                        break

                    new_questions = extract_json(res.answer) or []
                    print(f"   │  📦 Üretilen: {len(new_questions)} soru")

                    try:
                        log_path = os.path.join(LOG_DIR, f"exhaust_{unit_name}_batch{batch_num}.txt")
                        with open(log_path, 'w', encoding='utf-8') as f:
                            f.write(f"Batch: {batch_num} (FAZ 5 - Uncovered)\n")
                            f.write(f"Targets: {len(chunk)}\nQuestions: {len(new_questions)}\n\n")
                            f.write("--- TARGETS ---\n")
                            for c in chunk:
                                f.write(f"- {c}\n")
                            f.write("\n--- ANSWER ---\n")
                            f.write(res.answer or '(empty)')
                    except:
                        pass

                    if new_questions:
                        session_qs.extend(new_questions)
                        temp_batch_qs.extend(new_questions)
                        total_produced += len(new_questions)

                        if dry_run:
                            print(f"   │  🧪 DRY-RUN: yazılmadı.")
                        else:
                            deploy_to_supabase(new_questions, lesson, unit_name)

                        chunk_covered, _ = classify_anchors(chunk, new_questions)
                        print(f"   │  🎯 Dilim kapsam: {len(chunk_covered)}/{len(chunk)}")

                        # remaining'den artık kapsananları çıkar
                        covered_now, _ = classify_anchors(remaining, new_questions)
                        remaining = [a for a in remaining if a not in covered_now]
                        print(f"   │  📊 Kalan: {len(remaining)} kavram")
                        batch_results.append((batch_num, len(new_questions), "FAZ5_OK"))
                    else:
                        batch_results.append((batch_num, 0, "FAZ5_BOŞ"))

                    print(f"   └──────────────────────────────────────")
                    await asyncio.sleep(INTER_BATCH_COOLDOWN)

                    if not remaining:
                        print(f"\n   🎯 FAZ 5: TÜM KAVRAMLAR SORGULANMIŞ!")
                        break

                if remaining:
                    print(f"\n   ⏳ FAZ 5 sonrası hâlâ {len(remaining)} kapsanmayan kavram (batch limiti aşıldı).")

                # FAZ 5 sonrası nihai rapor
                post_covered, post_uncovered = classify_anchors(anchors, session_qs)
                print(f"\n   📊 NİHAİ DURUM: {unit_name}")
                print(f"   Çapa: {len(anchors)} | Sorgulanmış: {len(post_covered)} ✅ | Kalan: {len(post_uncovered)} ⏳")
                if anchors:
                    print(f"   Son kapsam: {len(post_covered)/len(anchors)*100:.1f}%")

                # Uncovered dosyasını güncelle
                try:
                    with open(os.path.join(LOG_DIR, f"uncovered_{unit_name}.txt"), 'w', encoding='utf-8') as f:
                        f.write(f"Ünite: {unit_name}\nÇapalanan: {len(anchors)}\n")
                        f.write(f"Sorgulanmış: {len(post_covered)}\nKalan: {len(post_uncovered)}\n\n")
                        for i, a in enumerate(post_uncovered, 1):
                            f.write(f"{i}. {a}\n")
                except:
                    pass

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
            # Her denemeden sonra yüklenen kaynağı sil — notebook'u temiz bırak
            # (sonraki ünite/Antigravity için kontaminasyon önleme).
            if source and getattr(source, 'id', None):
                try:
                    await client.sources.delete(NOTEBOOK_ID, source.id)
                except Exception as del_err:
                    print(f"   ⚠️ Source silme: {del_err}")

    return False


# ═══════════════════════════════════════════════
#  KUYRUK YÖNETİMİ & SIRALAMA
# ═══════════════════════════════════════════════

def _load_queues_from_env():
    queues = []
    for key, value in os.environ.items():
        if key.startswith("QUEUE_") and key.endswith("_DIR"):
            lesson = key[len("QUEUE_"):-len("_DIR")].replace("_", " ").title()
            queues.append({"lesson": lesson, "dir": value})
    return queues


def _natural_sort_key(f: Path):
    """Dosya adındaki ilk sayıya göre doğal sıralama (Ünite 2 < Ünite 10)."""
    m = re.search(r'\d+', f.name)
    return int(m.group()) if m else 999


def _resolve_inputs(paths):
    """--input hedeflerini düz, sıralı PDF/MD listesine çevirir."""
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


def _smart_unit_match(pdf_stem: str, existing_units: list[str]) -> str:
    """
    PDF dosya adı stem'ini Supabase'deki mevcut ünite adlarıyla eşleştirir.

    Öncelik sırası:
    1. Bilinen manuel eşleme (PDF_stem → ünite)
    2. Fuzzy match (SequenceMatcher + kelime örtüşmesi)
    3. Eşleşme yoksa orijinal stem (yeni ünite)
    """
    # ── Bilinen manuel eşleme tablosu ──
    KNOWN_MAP = {
        # Eski klasör (histo ünite pdf)
        "1-Hücre": "Hücre",
        "2- Dokular": "Epitel Doku",
        "3- Kas ve Sinir Doku": "Kas",
        "4-Genel Embriyoloji": "Genel Embriyoloji",
        "5-Sindirim": "Sindirim Sistemi",
        "6-Solunum": "Solunum Sistemi",
        "7-Deri": "Deri ve Ekleri",
        "8-MSS": "Merkezi Sinir Sistemi (MSS)",
        "9-Endokrin": "Endokrin Sistem",
        "10-İmmun": "İmmün Sistem ve Hematopoetik Organlar",
        "11-Dolaşım": "Dolaşım Sistemi",
        "12-Göz Kulak": "Göz ve Kulak",
        "13-Genital": "Genital Sistem",
        # Yeni klasör (Yeni klasör)
        "epitel bağ": "Epitel Doku",
        "kan": "Kan",
        "kas": "Kas",
        "sinir": "Sinir",
        "yağ kıkırdak": "Yağ ve Kıkırdak",
    }
    if pdf_stem in KNOWN_MAP:
        mapped = KNOWN_MAP[pdf_stem]
        print(f"      🧠 Manuel eşleme: '{pdf_stem}' → '{mapped}'")
        return mapped

    if not existing_units:
        return pdf_stem

    # Sayısal ön eki temizle, sonra fuzzy dene
    cleaned = re.sub(r'^\d+\s*[-–]\s*', '', pdf_stem).strip()

    best_match = cleaned
    best_score = 0.0

    for unit in existing_units:
        score = difflib.SequenceMatcher(None, cleaned.lower(), unit.lower()).ratio()
        cleaned_words = set(cleaned.lower().split())
        unit_words = set(unit.lower().split())
        word_overlap = len(cleaned_words & unit_words) / max(len(cleaned_words | unit_words), 1) if cleaned_words else 0
        combined = max(score, word_overlap)

        if combined > best_score:
            best_score = combined
            best_match = unit

    if best_score >= 0.45:
        if best_match != cleaned:
            print(f"      🧠 Akıllı eşleme: '{pdf_stem}' → '{best_match}' (skor: {best_score:.2f})")
        return best_match

    print(f"      ⚠️ Eşleşme bulunamadı: '{pdf_stem}' → yeni ünite olarak işlenecek")
    return pdf_stem


async def main():
    parser = argparse.ArgumentParser(description="DUS Bankası — Exhaustive v3 via MCP")
    parser.add_argument("--file", default=None, help="Tek dosya işle")
    parser.add_argument("--input", nargs="+", default=None,
                        help="Bir veya birden çok PDF/klasör hedefi. --lesson zorunlu.")
    parser.add_argument("--lesson", default=None, help="Ders adı")
    parser.add_argument("--unit", default=None, help="Ünite adı")
    parser.add_argument("--dry-run", action="store_true", help="Supabase'e yazmadan test")
    parser.add_argument("--uncovered-only", action="store_true", help="Faz 0'ı atlar, loglardan uncovered dosyasını yükleyip işler")
    parser.add_argument("--concept-file", default=None, help="Harici kavram listesi dosyası (.txt)")
    parser.add_argument("--audit", dest="audit", action="store_true", default=True,
                        help="Her ünite bitince otomatik kalite denetimi (Ölüm Maçı) — VARSAYILAN AÇIK")
    parser.add_argument("--no-audit", dest="audit", action="store_false",
                        help="Üretim sonrası kalite denetimini atla (yalnızca üretim)")
    args = parser.parse_args()

    print("\n" + "=" * 60)
    print("🚀 DUS OTOMASYON (MCP HTTP) — EXHAUSTIVE v3 (Çapa=Soru)")
    print(f"   Mod: {'🧪 DRY-RUN' if args.dry_run else '🔴 CANLI'}")
    print(f"   Dilim boyutu: {CHUNK_SIZE} kavram/batch")
    print("=" * 60)

    async with NotebookLMMCPClient() as client:
        # Preflight auth check
        if not await ensure_auth(client):
            print("\n🚫 NotebookLM MCP sunucusunda geçerli oturum bulunamadı.")
            print("   Çözüm: Lütfen yeni bir terminal açıp şu komutu çalıştırarak giriş yapın:")
            print("   uvx --from git+https://github.com/jacob-bd/notebooklm-mcp-cli.git nlm login")
            sys.exit(1)

        if args.file:
            file_path = Path(args.file)
            if not file_path.exists():
                print(f"❌ Dosya bulunamadı: {file_path}")
                return
            lesson = args.lesson or "Bilinmeyen"
            unit_name = args.unit if args.unit else file_path.stem
            try:
                await process_unit_exhaustive(client, lesson, unit_name, file_path, args.dry_run, getattr(args, 'uncovered_only', False), args.concept_file)
                if args.audit and not args.dry_run:
                    print(f"\n   🚀 Ünite bitti: {unit_name} için otomatik kalite denetimi (Audit) başlatılıyor...")
                    await run_audit(lesson, mode="flag", dry_run=False, interactive=False, unit=unit_name)
            except FatalError as fe:
                print(f"\n🚫 FATAL: {fe}")
                sys.exit(1)
            return

        if args.input:
            lesson = args.lesson or "Bilinmeyen"
            files = _resolve_inputs(args.input)
            if not files:
                print("❌ --input içinde işlenebilir PDF/MD bulunamadı.")
                return

            # Mevcut üniteleri çek (akıllı eşleme için)
            raw_units = get_existing_units(lesson)
            existing_units = list(raw_units.keys()) if raw_units else []
            if existing_units:
                print(f"\n   🧠 Supabase'de mevcut {len(existing_units)} ünite bulundu — akıllı eşleme aktif")
                for u in sorted(existing_units):
                    print(f"      - {u}")

            print(f"\n📂 {lesson}: {len(files)} dosya sıraya alındı")
            for i, file_path in enumerate(files, 1):
                raw_stem = file_path.stem
                if args.unit and len(files) == 1:
                    unit_name = args.unit
                elif existing_units:
                    unit_name = _smart_unit_match(raw_stem, existing_units)
                else:
                    unit_name = raw_stem
                print(f"\n[{i}/{len(files)}] {unit_name} ({raw_stem})")
                try:
                    await process_unit_exhaustive(client, lesson, unit_name, file_path, args.dry_run, getattr(args, 'uncovered_only', False), args.concept_file)
                    if args.audit and not args.dry_run:
                        print(f"\n   🚀 Ünite bitti: {unit_name} → ünite-kapsamlı kalite denetimi (Audit) başlatılıyor...")
                        await run_audit(lesson, mode="flag", dry_run=False, interactive=False, unit=unit_name)
                except FatalError as fe:
                    print(f"\n🚫 FATAL: {fe}")
                    sys.exit(1)

                if i < len(files):
                    await asyncio.sleep(COOLDOWN_BETWEEN_UNITS)
            print("\n🎉 TAMAMLANDI!")
            return

        queues = _load_queues_from_env()
        if not queues:
            print("❌ QUEUE_<DERS>_DIR env var bulunamadı ve --file belirtilmedi.")
            return

        for queue in queues:
            lesson = queue["lesson"]
            target_dir = Path(queue["dir"])
            if not target_dir.exists():
                print(f"❌ Klasör bulunamadı: {target_dir}")
                continue

            files = sorted(
                [f for f in target_dir.iterdir() if f.suffix.lower() in [".pdf", ".md"]],
                key=lambda f: int(re.search(r'\d+', f.name).group()) if re.search(r'\d+', f.name) else 999
            )

            print(f"\n📂 {lesson}: {len(files)} dosya")

            for i, file_path in enumerate(files, 1):
                unit_name = file_path.stem
                print(f"\n[{i}/{len(files)}]", end=" ")
                try:
                    await process_unit_exhaustive(client, lesson, unit_name, file_path, args.dry_run, getattr(args, 'uncovered_only', False), args.concept_file)
                    if args.audit and not args.dry_run:
                        print(f"\n   🚀 Ünite bitti: {unit_name} için otomatik kalite denetimi (Audit) başlatılıyor...")
                        await run_audit(lesson, mode="flag", dry_run=False, interactive=False, unit=unit_name)
                except FatalError as fe:
                    print(f"\n🚫 FATAL: {fe}")
                    sys.exit(1)

                if i < len(files):
                    await asyncio.sleep(COOLDOWN_BETWEEN_UNITS)

    print("\n🎉 TAMAMLANDI!")


if __name__ == "__main__":
    asyncio.run(main())
