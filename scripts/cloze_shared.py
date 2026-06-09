"""
DUS Bankası — Anki Cloze Kart Paylaşılan Modülü
Pinecone `anki` index CRUD, TSV parse, cloze validasyon, anchor kapsam sınıflama.
Supabase DEĞİL, Pinecone hedefli. shared.py'nin muadili.
"""
import json
import os
import re
import sys
import time
import hashlib
import urllib.request
from datetime import datetime
from pathlib import Path

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

from config import (
    ANKI_INDEX_HOST, ANKI_INDEX_NAME, ANKI_EMBED_DIM, ANKI_EMBED_MODEL,
    PINECONE_API_KEY, OPENAI_API_KEY,
    RECOVERY_DIR, CLOZE_CHUNK_SIZE, CLOZE_MAX_BATCHES, CLOZE_SATURATION_THRESHOLD,
    CLOZE_MIN_CARDS_PER_BATCH,
)

# ═══════════════════════════════════════════════
#  DERS → NAMESPACE EŞLEŞTİRME
# ═══════════════════════════════════════════════

LESSON_TO_ANKI_NS = {
    "Fizyoloji": "fizyoloji",
    "Protez": "protez",
    "Periodontoloji": "periodontoloji",
    "Histoloji": "histoloji",
    "Endodonti": "endodonti",
    "Patoloji": "patoloji",
    "Radyoloji": "radyoloji",
    "Cerrahi": "cerrahi",
    "Biyokimya": "biyokimya",
    "Ortodonti": "ortodonti",
    "Restoratif": "restoratif",
    "Pedodonti": "pedodonti",
    "Mikrobiyoloji": "mikrobiyoloji",
    "Farmakoloji": "farmakoloji",
}


def lesson_to_namespace(lesson: str) -> str:
    """Ders adından Pinecone namespace üretir."""
    return LESSON_TO_ANKI_NS.get(lesson, lesson.lower().replace(" ", "_"))


# ═══════════════════════════════════════════════
#  EMBEDDING (OpenAI text-embedding-3-large, 3072-dim)
# ═══════════════════════════════════════════════

_OPENAI_CLIENT = None


def _get_openai_client():
    global _OPENAI_CLIENT
    if _OPENAI_CLIENT is None:
        try:
            from openai import OpenAI
        except ImportError:
            raise RuntimeError("openai paketi yüklü değil. pip install openai")
        if not OPENAI_API_KEY:
            raise RuntimeError("OPENAI_API_KEY tanımlı değil.")
        _OPENAI_CLIENT = OpenAI(api_key=OPENAI_API_KEY)
    return _OPENAI_CLIENT


def embed_texts(texts: list[str], dim: int = 3072) -> list[list[float]]:
    """OpenAI text-embedding-3-large ile batch embedding. Retry: 3, batch: 128."""
    if not texts:
        return []

    client = _get_openai_client()
    all_embeddings = []
    batch_size = 128

    for i in range(0, len(texts), batch_size):
        batch = texts[i:i + batch_size]
        for attempt in range(3):
            try:
                resp = client.embeddings.create(
                    model=ANKI_EMBED_MODEL,
                    input=batch,
                    dimensions=dim,
                )
                all_embeddings.extend([item.embedding for item in resp.data])
                break
            except Exception as e:
                if attempt == 2:
                    raise
                wait = 2 ** attempt
                print(f"   ⚠️ Embedding hata (retry {attempt + 1}/3, {wait}s): {e}")
                time.sleep(wait)
        if i + batch_size < len(texts):
            time.sleep(0.3)  # rate-limit
    return all_embeddings


# ═══════════════════════════════════════════════
#  PINECONE UPSERT (anki index, HTTP)
# ═══════════════════════════════════════════════

def _pinecone_request(endpoint: str, payload: dict, method: str = "POST") -> dict:
    """Ham Pinecone HTTP isteği. Retry: 3, backoff: 2^attempt."""
    url = f"{ANKI_INDEX_HOST}/{endpoint}"
    headers = {
        "Api-Key": PINECONE_API_KEY,
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
    data = json.dumps(payload, ensure_ascii=False).encode("utf-8")

    for attempt in range(3):
        try:
            req = urllib.request.Request(url, data=data, headers=headers, method=method)
            with urllib.request.urlopen(req, timeout=120) as resp:
                raw = resp.read().decode()
                return json.loads(raw) if raw.strip() else {}
        except urllib.error.HTTPError as e:
            body = ""
            try:
                body = e.read().decode()
            except Exception:
                pass
            if attempt == 2:
                raise RuntimeError(f"Pinecone HTTP {e.code}: {body[:500]}")
            wait = 2 ** attempt
            print(f"   ⚠️ Pinecone {endpoint} HTTP {e.code} (retry {attempt + 1}/3, {wait}s)")
            time.sleep(wait)
        except Exception as e:
            if attempt == 2:
                raise
            wait = 2 ** attempt
            print(f"   ⚠️ Pinecone {endpoint} hata (retry {attempt + 1}/3, {wait}s): {e}")
            time.sleep(wait)
    return {}


def _pinecone_get(endpoint: str, params: dict) -> dict:
    """Pinecone GET isteği — query parametreli (vectors/fetch için)."""
    from urllib.parse import urlencode
    url = f"{ANKI_INDEX_HOST}/{endpoint}?{urlencode(params, doseq=True)}"
    headers = {
        "Api-Key": PINECONE_API_KEY,
        "Accept": "application/json",
    }
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers=headers, method="GET")
            with urllib.request.urlopen(req, timeout=120) as resp:
                raw = resp.read().decode()
                return json.loads(raw) if raw.strip() else {}
        except urllib.error.HTTPError as e:
            body = ""
            try:
                body = e.read().decode()
            except Exception:
                pass
            if attempt == 2:
                raise RuntimeError(f"Pinecone GET {endpoint} HTTP {e.code}: {body[:300]}")
            time.sleep(2 ** attempt)
        except Exception as e:
            if attempt == 2:
                raise
            time.sleep(2 ** attempt)
    return {}


def upsert_to_pinecone(cards: list[dict], namespace: str) -> int:
    """
    Kartları Pinecone anki indexine yazar.
    Schema: id=guid, values=embedding, metadata={text, ders, unite, kart_tipi, baslik, extra}
    Returns: yazılan kart sayısı.
    """
    if not cards:
        return 0

    # Embedding üret
    texts = [c["vektorlenecek_metin"] for c in cards]
    print(f"   🧮 Embedding üretiliyor ({len(texts)} kart, {ANKI_EMBED_MODEL} {ANKI_EMBED_DIM}dim)...")
    try:
        vectors = embed_texts(texts, dim=ANKI_EMBED_DIM)
    except Exception as e:
        print(f"   ❌ Embedding hatası: {e}")
        return 0

    # Vektör kayıtlarını oluştur (anki_uploader.py build_vector ile aynı schema)
    vector_records = []
    for card, vec in zip(cards, vectors):
        guid = card.get("guid", "")
        if not guid:
            guid = "clz_" + hashlib.md5(card["vektorlenecek_metin"].encode()).hexdigest()[:16]
            card["guid"] = guid

        metadata = {
            "text": card["vektorlenecek_metin"],
            "guid": guid,
            "ders": card.get("ders", ""),
            "unite": card.get("unite", ""),
            "kart_tipi": "cloze",
            "baslik": card.get("baslik", ""),
            "extra": card.get("extra", ""),
            "text_clean": card.get("text_clean", card["vektorlenecek_metin"]),
        }
        vector_records.append({
            "id": guid,
            "values": vec,
            "metadata": metadata,
        })

    # Chunked upsert (batch size: 100)
    wrote = 0
    chunk_size = 100
    for i in range(0, len(vector_records), chunk_size):
        chunk = vector_records[i:i + chunk_size]
        try:
            _pinecone_request("vectors/upsert", {
                "vectors": chunk,
                "namespace": namespace,
            })
            wrote += len(chunk)
            print(f"   ✅ Pinecone upsert: {wrote}/{len(vector_records)} → ns={namespace}")
        except Exception as e:
            print(f"   ❌ Pinecone upsert chunk hatası ({i}-{i + len(chunk)}): {e}")
            # Kısmi başarısızlık: kalan chunk'lar denenmez, yazılan kadarı dönülür
            break
        if i + chunk_size < len(vector_records):
            time.sleep(0.5)

    return wrote


# ═══════════════════════════════════════════════
#  KAPSAM SORGULAMA (Pinecone'dan mevcut kartları çek)
# ═══════════════════════════════════════════════

def get_existing_card_texts(namespace: str) -> list[str]:
    """
    Namespace'teki tüm kartların text metinlerini döner.
    ADIM 1: vectors/list → ID listesi (pagination)
    ADIM 2: vectors/fetch → batch metadata
    """
    # ── Adım 1: Tüm ID'leri topla ──────────────────────────
    all_ids = []
    pagination_token = None

    while True:
        payload = {"namespace": namespace, "limit": 1000}
        if pagination_token:
            payload["paginationToken"] = pagination_token

        try:
            result = _pinecone_request("vectors/list", payload)
        except Exception as e:
            print(f"   ⚠️ Pinecone list hatası (ns={namespace}): {e}")
            break

        for v in result.get("vectors", []):
            vid = v.get("id")
            if vid:
                all_ids.append(vid)

        pagination_token = result.get("pagination", {}).get("next")
        if not pagination_token:
            break

    if not all_ids:
        return []

    print(f"   📥 Pinecone: {len(all_ids)} ID bulundu, metadata çekiliyor...")

    # ── Adım 2: Batch fetch metadata ────────────────────────
    all_texts = []
    batch_size = 100  # Pinecone fetch limit

    for i in range(0, len(all_ids), batch_size):
        batch = all_ids[i:i + batch_size]
        try:
            result = _pinecone_get("vectors/fetch", {
                "ids": batch,
                "namespace": namespace,
            })
            for v in result.get("vectors", {}).values():
                text = (v.get("metadata") or {}).get("text", "")
                if text:
                    all_texts.append(text)
        except Exception as e:
            print(f"   ⚠️ Pinecone fetch batch {i}-{i+len(batch)}: {e}")

        if i + batch_size < len(all_ids):
            time.sleep(0.15)

    print(f"   📥 {len(all_texts)} kart metni yüklendi.")
    return all_texts


def get_namespace_count(namespace: str) -> int:
    """Namespace'teki toplam vektör sayısı — describe_index_stats ile."""
    try:
        result = _pinecone_request("describe_index_stats", {})
        ns_stats = result.get("namespaces", {})
        return ns_stats.get(namespace, {}).get("vectorCount", 0)
    except Exception as e:
        print(f"   ⚠️ Namespace count hatası (ns={namespace}): {e}")
        return 0


# ═══════════════════════════════════════════════
#  CLOZE TSV PARSER
# ═══════════════════════════════════════════════

CLOZE_RE = re.compile(r"\{\{c\d+::([^:}]+)(?:::.*?)?\}\}")


def clean_cloze(text: str) -> str:
    """{{c1::X}} → X, {{c1::X::ipucu}} → X"""
    if not text:
        return ""
    return CLOZE_RE.sub(r"\1", text).strip()


def parse_cloze_response(text: str) -> list[dict]:
    """
    NotebookLM'den gelen TSV yanıtını kart listesine çevirir.
    Format:
        #separator:tab
        #html:false
        Text[TAB]Baslik[TAB]Extra
        ...
        Kart sayisi: N
    """
    if not text or not text.strip():
        return []

    lines = text.strip().split("\n")
    cards = []
    header_seen = False

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Başlık satırlarını tespit et (boşluklu ve boşluksuz her iki format)
        if (line.startswith("#separator") or line.startswith("# separator")
                or line.startswith("#html") or line.startswith("# html")):
            header_seen = True
            continue

        # Son satır: "Kart sayısı: N"
        if re.match(r'^[Kk]art\s+[Ss]ay[ıi][sş][ıi]:?\s*\d+', line):
            continue

        # Kart satırı: Text[TAB]Baslik[TAB]Extra
        if "\t" in line:
            parts = line.split("\t")
            text_field = parts[0].strip() if len(parts) > 0 else ""
            baslik = parts[1].strip() if len(parts) > 1 else ""
            extra = parts[2].strip() if len(parts) > 2 else ""

            # En az bir cloze olmalı
            if "{{c" not in text_field:
                continue

            text_clean = clean_cloze(text_field)
            if not text_clean:
                continue

            # Vektörlenecek metin: başlık + temiz metin
            vektorlenecek = f"{baslik} | {text_clean}" if baslik else text_clean

            cards.append({
                "text_raw": text_field,
                "text_clean": text_clean,
                "baslik": baslik,
                "extra": extra,
                "vektorlenecek_metin": vektorlenecek,
                "kart_tipi": "cloze",
            })

    # Eğer header görülmediyse ama kart benzeri satırlar varsa (esnek parse)
    if not header_seen and not cards:
        cards = _parse_loose_cloze(text)

    # F3-02: Kart sayısı doğrulama — model N bildirip daha az kart döndü mü?
    reported_count_match = re.search(
        r'[Kk]art\s+[Ss]ay[ıi][sş][ıi]:?\s*(\d+)', text
    )
    if reported_count_match:
        reported = int(reported_count_match.group(1))
        parsed = len(cards)
        if parsed < reported * 0.80:
            print(
                f"   ⚠️ Kart sayısı uyuşmazlığı: model {reported} bildirdi, "
                f"{parsed} parse edildi (muhtemel truncation)"
            )

    return cards


def _parse_loose_cloze(text: str) -> list[dict]:
    """
    Esnek parse: TSV formatı bozuksa {{c1::...}} içeren satırları tekil kart olarak al.
    """
    cards = []
    for line in text.strip().split("\n"):
        line = line.strip()
        if not line or line.startswith("#") or line.startswith("Kart sayısı"):
            continue
        if "{{c" not in line:
            continue

        # TAB ile böl (varsa)
        parts = line.split("\t")
        text_field = parts[0].strip()
        baslik = parts[1].strip() if len(parts) > 1 else "Genel"
        extra = parts[2].strip() if len(parts) > 2 else ""

        text_clean = clean_cloze(text_field)
        if not text_clean:
            continue

        vektorlenecek = f"{baslik} | {text_clean}" if baslik else text_clean

        cards.append({
            "text_raw": text_field,
            "text_clean": text_clean,
            "baslik": baslik,
            "extra": extra,
            "vektorlenecek_metin": vektorlenecek,
            "kart_tipi": "cloze",
        })

    return cards


def _dump_raw_response(text: str):
    """Parse edilemeyen ham yanıtı recovery/raw/ altına yazar."""
    try:
        raw_dir = os.path.join(os.path.dirname(RECOVERY_DIR), "raw")
        os.makedirs(raw_dir, exist_ok=True)
        ts = datetime.now().strftime("%Y%m%d_%H%M%S_%f")
        filepath = os.path.join(raw_dir, f"cloze_unparsed_{ts}.txt")
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(text or "")
        print(f"   💾 Ham yanıt kaydedildi: {filepath}")
    except Exception as e:
        print(f"   ⚠️ Ham yanıt kaydedilemedi: {e}")


# ═══════════════════════════════════════════════
#  CLOZE KALİTE VALİDASYONU
# ═══════════════════════════════════════════════

def validate_cloze_cards(cards: list[dict]) -> tuple[list[dict], list[dict]]:
    """
    Her kartı cloze öz-denetim kurallarından geçirir.
    Döner: (accepted: list, rejected: list[{card, reason}])
    """
    accepted = []
    rejected = []

    for card in cards:
        reasons = []

        # 1. {{c1::...}} formatı var mı?
        text_raw = card.get("text_raw", "")
        if "{{c" not in text_raw:
            reasons.append("cloze_format_yok")

        # 2. Cloze temizlenince anlamlı metin kalıyor mu?
        text_clean = card.get("text_clean", "")
        if not text_clean or len(text_clean.split()) < 2:
            reasons.append("cloze_bos_veya_cok_kisa")

        # 3. Başlık sızıntısı (Bölüm 6): cevabın tüm anlamlı kelimeleri başlıkta mı?
        baslik = card.get("baslik", "")
        if baslik:
            cloze_answers = CLOZE_RE.findall(text_raw)
            baslik_parts = [p.strip() for p in re.split(r'\s*[-|]\s*', baslik)]
            last_level = baslik_parts[-1].lower() if baslik_parts else ""
            for ans in cloze_answers:
                ans = ans.strip()
                if not ans:
                    continue
                ans_words = [
                    w.lower() for w in ans.split()
                    if len(w) >= 3 and w.lower() not in {
                        "ile", "için", "olan", "gibi",
                        "veya", "bir", "bu", "ve", "de", "da"
                    }
                ]
                for word in ans_words:
                    if word in last_level:
                        reasons.append(f"baslik_sizintisi:{word}")
                        break
                else:
                    continue
                break

        # 4. Çoklu cloze saydırma (liste saydırma yasağı)
        cloze_matches = CLOZE_RE.findall(text_raw)
        unique_c_nums = set(re.findall(r'\{\{(c\d+)::', text_raw))
        if len(unique_c_nums) > 2:
            # 3+ farklı c numarası → kesinlikle liste saydırma
            reasons.append("coklu_cloze_saydirma")
        elif len(cloze_matches) >= 3 and len(unique_c_nums) == 1:
            # Tüm cloze'lar c1 ama 3+ tane → liste saydırma riski
            reasons.append("tek_c_cok_cloze_saydirma_suphesi")

        # 5. Anlamsal sızıntı: "dezavantaj" vb. yönlendirici + bağlam
        directing_words = ["dezavantaj", "avantaj", "risk", "neden", "komplikasyon"]
        text_lower = text_raw.lower()
        for dw in directing_words:
            if dw in text_lower and "{{c" in text_lower:
                # Basit kontrol: yönlendirici cloze'dan hemen önce geliyorsa uyar
                if dw in text_lower.split("{{c")[0][-50:]:
                    reasons.append(f"semantik_sizinti_suphesi:{dw}")
                    break

        # 6. AI dolgu/motivasyon ifadesi
        ai_fillers = [
            "tebrikler", "unutulmamalıdır", "unutmayın", "akılda tutulmalıdır",
            "önemli bir ipucu", "dikkat edilmelidir", "başarılar", "kolay gelsin",
            "çalışmaya devam", "harika", "endişelenme",
        ]
        text_lower_full = (text_raw + " " + card.get("extra", "")).lower()
        for filler in ai_fillers:
            if filler in text_lower_full:
                reasons.append(f"ai_dolgu:{filler}")
                break

        # 7. Mekanizma zinciri şüphesi (A→B→C): oklu zincirleme + cloze yoksa free-recall materyali
        arrow_count = text_raw.count("→") + text_raw.count("->")
        if arrow_count >= 2:
            reasons.append("mekanizma_zinciri_suphesi")

        if reasons:
            rejected.append({"card": card, "reason": "; ".join(reasons)})
        else:
            accepted.append(card)

    if rejected:
        reason_counts = {}
        for r in rejected:
            rkey = r["reason"].split(":")[0]
            reason_counts[rkey] = reason_counts.get(rkey, 0) + 1
        summary = ", ".join(f"{k}={v}" for k, v in reason_counts.items())
        print(f"   🚫 Cloze validasyon: {len(rejected)}/{len(cards)} reddedildi ({summary})")

    return accepted, rejected


# ═══════════════════════════════════════════════
#  ANCHOR KAPSAM SINIFLAMA (Pinecone odaklı)
# ═══════════════════════════════════════════════

def parse_anchor_response(text: str) -> tuple[list[str], int]:
    """PROMPT_ANCHOR yanıtından kavram listesi ve toplam sayı."""
    if not text or not text.strip():
        return [], 0

    lines = []
    for raw in text.split("\n"):
        line = raw.strip()
        if not line:
            continue

        # Format 1: "1. Kavram", "1) Kavram", "1- Kavram", "1: Kavram"
        m = re.match(r'^\d+[\.)\-:]\s+(.+)', line)
        if m:
            concept = m.group(1).strip()
            if concept:
                lines.append(concept)
            continue

        # Format 2: Madde imi "- Kavram", "• Kavram", "* Kavram"
        m2 = re.match(r'^[-•*]\s+(.+)', line)
        if m2:
            concept = m2.group(1).strip()
            if concept and not concept.startswith("TOPLAM"):
                lines.append(concept)

    # TOPLAM_KAVRAM satırı
    total_match = re.search(r'TOPLAM_KAVRAM\s*=\s*(\d+)', text)
    reported_total = int(total_match.group(1)) if total_match else len(lines)

    # Min uzunluk: 2 karakter (kısaltmalar dahil: "pH", "IL")
    lines = [c for c in lines if len(c) >= 2]

    return lines, reported_total


def classify_anchors_pinecone(anchors: list[str], existing_texts: list[str]) -> tuple[list[str], list[str]]:
    """
    Kelime setine karşı anchor sınıflama — tam kelime eşleşmesi.
    Eşik: anchor kelimelerinin %60'ı corpus kelime setinde bulunmalı.
    """
    if not anchors:
        return [], []
    if not existing_texts:
        return [], list(anchors)

    # Corpus kelime seti — tam kelime sınırları (substring DEĞİL)
    corpus_words: set[str] = set()
    for text in existing_texts:
        for word in text.lower().split():
            word = re.sub(r'[^\w]', '', word)
            if word:
                corpus_words.add(word)

    covered, uncovered = [], []
    for anchor in anchors:
        words = [
            re.sub(r'[^\w]', '', w.lower())
            for w in anchor.split()
            if len(w) >= 3
        ]
        if not words:
            uncovered.append(anchor)
            continue

        match_count = sum(1 for w in words if w in corpus_words)
        if match_count / len(words) >= 0.60:
            covered.append(anchor)
        else:
            uncovered.append(anchor)

    return covered, uncovered


def chunk_list(lst: list, size: int):
    """Listeyi belirli boyutta dilimlere ayırır."""
    for i in range(0, len(lst), size):
        yield lst[i:i + size]


def check_saturation(response_text: str) -> bool:
    """Model 'DOYGUNLUK' bildirdi mi kontrol eder."""
    if not response_text:
        return False
    return "DOYGUNLUK" in response_text.upper()


# ═══════════════════════════════════════════════
#  PROMPTLAR
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
- Her sayısal değer (yüzde, yaş, süre, eşik, oran) kendi satırına: "Kavram: değer" formatında.
- Spot bilgiler (en sık/en az/patognomonik/altın standart) bağlamıyla birlikte ayrı satır.

Listeleme tamamlandıktan sonra şunu yaz:
TOPLAM_KAVRAM = <sayı>
"""

# NotebookLM'e gönderilecek cloze promptu: kavram listesi + metnin kendisi eklenir
PROMPT_CLOZE_MASTER = r"""ÇAPA MODU — ÇIKTI: Yalnızca ham TSV. Giriş/kapanış/yorum YASAK.

KAVRAMLAR (her biri en az bir kartın BİRİNCİL konusu olacak):
{ANCHOR_LIST}

Ders: {LESSON} | Ünite: {UNIT}

ÇIKTI FORMATI (ilk iki satır boşluksuz, sabit):
#separator:tab
#html:false
[Her kart: Text TAB Başlık TAB Extra — alan ayırıcı gerçek TAB]
Son satır: Kart sayısı: N

EN SIK HATA — HER KART ÖNCESI KONTROL ET:
① Liste saydırma YASAK → N üye = N atomik kart; her üyenin ayırt edici özelliği ipucu, adı cloze, kardeşler Extra'da
② Başlık sızıntısı: cevabın ayırt edici kelimesi başlıkta geçiyorsa bir üst seviyeye çık
③ Atomiklik: bir cloze = tek bilgi boyutu (ikiden fazla bağımsız boyut = kartı böl)
④ Sayı/eşik/oran/yaş/süre/spot bilgisi → zorunlu kart; çok adımlı mekanizma zinciri → KART YAPMA
⑤ Tautoloji sızıntısı YASAK: "...{{c1::vertikal}} yönde aç-kapa" → "aç-kapa" zaten vertikali veriyor, cevap gizlenemez.
⑥ Döngüsel tanım YASAK: Cümle hem terimi hem tanımını aynı anda içeremez.

Yeni ezber-değeri bilgi kalmadıysa son iki satır:
DOYGUNLUK
Kart sayısı: N
"""

# FAZ 4 uncovered temizleme prompt'u — DOYGUNLUK sinyali YOK, her kavram zorunlu
PROMPT_CLOZE_UNCOVERED = r"""ZORUNLU ÜRETİM: Aşağıdaki HER kavram için en az 1 cloze kartı üret. Atlanan kavram kabul edilmez.

{ANCHOR_LIST}

Ders: {LESSON} | Ünite: {UNIT}

ÇIKTI FORMATI (ilk iki satır boşluksuz, sabit):
#separator:tab
#html:false
[Her kart: Text TAB Başlık TAB Extra — alan ayırıcı gerçek TAB]
Son satır: Kart sayısı: N

Bu kavramlar önceki turda kartlaştırılamadı — DOYGUNLUK bildirme. Her kavramı BİRİNCİL konu yap.
Liste saydırma YASAK, başlık/tautoloji/döngüsel tanım sızıntısı kontrolü yap, atomiklik koru.
"""


def _inject_anchors(template: str, anchors: list[str], lesson: str = "", unit: str = "") -> str:
    """Ortak anchor/lesson/unit enjeksiyonu."""
    anchor_str = "\n".join(f"- {a}" for a in anchors)
    return (template
            .replace("{ANCHOR_LIST}", anchor_str)
            .replace("{LESSON}", lesson or "")
            .replace("{UNIT}", unit or ""))

def build_cloze_prompt(anchors: list[str], lesson: str = "", unit: str = "") -> str:
    """Kavram listesini PROMPT_CLOZE_MASTER'a enjekte eder."""
    return _inject_anchors(PROMPT_CLOZE_MASTER, anchors, lesson, unit)

def build_cloze_uncovered_prompt(anchors: list[str], lesson: str = "", unit: str = "") -> str:
    """FAZ 4 uncovered temizleme için zorlama prompt'u (DOYGUNLUK sinyali yok)."""
    return _inject_anchors(PROMPT_CLOZE_UNCOVERED, anchors, lesson, unit)


# ═══════════════════════════════════════════════
#  DEPLOY: Validasyon + Embedding + Pinecone Upsert
# ═══════════════════════════════════════════════

def deploy_cards_to_pinecone(
    cards: list[dict],
    lesson: str,
    unit_name: str,
    namespace: str = None,
    dry_run: bool = False,
) -> int:
    """
    Kartları validate et → embed → Pinecone'a yaz.
    lesson/unit kart metadata'sına eklenir.
    Returns: yazılan kart sayısı.
    """
    if not cards:
        print("   ⚠️ Kart listesi boş — deploy atlandı.")
        return 0

    if namespace is None:
        namespace = lesson_to_namespace(lesson)

    # Kalite validasyonu
    accepted, rejected = validate_cloze_cards(cards)

    if not accepted:
        print(f"   ⚠️ Hiçbir kart kalite gate'ini geçemedi — deploy atlandı: [{unit_name}]")
        return 0

    # lesson/unit metadata'sını her karta ekle
    for card in accepted:
        card["ders"] = lesson
        card["unite"] = unit_name

    if dry_run:
        print(f"   🧪 DRY-RUN: {len(accepted)} kart yazılmadı.")
        for i, card in enumerate(accepted[:3]):
            text_preview = card.get("text_clean", "")[:80]
            print(f"      {i + 1}. {text_preview}...")
        return len(accepted)

    # Pinecone'a yaz
    try:
        wrote = upsert_to_pinecone(accepted, namespace)
    except Exception as e:
        print(f"   ❌ Embedding/Pinecone hatası: {e}")
        _dump_failed_cards(accepted, lesson, unit_name)
        return 0
    return wrote


# ═══════════════════════════════════════════════
#  YARDIMCI: ÇIKTI DOSYASI (Anki import için TSV)
# ═══════════════════════════════════════════════

def _dump_failed_cards(cards: list[dict], lesson: str, unit: str):
    """Embedding başarısız olan kartları recovery klasörüne yaz."""
    try:
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        path = os.path.join(RECOVERY_DIR, f"embed_failed_{lesson}_{ts}.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump({"lesson": lesson, "unit": unit, "cards": cards}, f,
                      ensure_ascii=False, indent=2)
        print(f"   💾 Embedding başarısız kartlar kaydedildi: {path}")
    except Exception as e:
        print(f"   ⚠️ Recovery yazılamadı: {e}")


def consolidate_unit_tsv(lesson: str, unit_name: str, output_dir: str = None) -> str | None:
    """
    Bir üniteye ait tüm batch TSV'lerini tek dosyaya birleştirir.
    Returns: birleşik dosya yolu.
    """
    if output_dir is None:
        output_dir = os.path.join(os.path.dirname(__file__), "cloze_output")

    safe = re.sub(r'[^\w\s-]', '', f"{lesson}_{unit_name}").replace(" ", "_")
    pattern = os.path.join(output_dir, f"{safe}_*.tsv")

    import glob
    batch_files = sorted(glob.glob(pattern))
    if not batch_files:
        return None

    all_card_lines = []
    for filepath in batch_files:
        with open(filepath, "r", encoding="utf-8") as f:
            for line in f:
                line = line.rstrip("\n")
                if line.startswith("#") or re.match(r'^[Kk]art\s', line) or not line:
                    continue
                all_card_lines.append(line)

    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    merged_path = os.path.join(output_dir, f"{safe}_MERGED_{ts}.tsv")
    with open(merged_path, "w", encoding="utf-8") as f:
        f.write("#separator:tab\n#html:false\n")
        for line in all_card_lines:
            f.write(line + "\n")
        f.write(f"Kart sayısı: {len(all_card_lines)}\n")

    print(f"   📦 TSV birleştirildi: {merged_path} ({len(all_card_lines)} kart, {len(batch_files)} batch)")
    return merged_path


def save_cloze_tsv(cards: list[dict], lesson: str, unit_name: str, output_dir: str = None) -> str:
    """
    Kartları Anki'ye import edilebilir TSV dosyası olarak kaydeder.
    Returns: dosya yolu.
    """
    if output_dir is None:
        output_dir = os.path.join(os.path.dirname(__file__), "cloze_output")
    os.makedirs(output_dir, exist_ok=True)

    safe = re.sub(r'[^\w\s-]', '', f"{lesson}_{unit_name}").replace(" ", "_")
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    filepath = os.path.join(output_dir, f"{safe}_{ts}.tsv")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write("#separator:tab\n")
        f.write("#html:false\n")
        for card in cards:
            text = card.get("text_raw", "")
            baslik = card.get("baslik", "")
            extra = card.get("extra", "")
            f.write(f"{text}\t{baslik}\t{extra}\n")
        f.write(f"Kart sayısı: {len(cards)}\n")

    print(f"   📄 TSV kaydedildi: {filepath} ({len(cards)} kart)")
    return filepath
