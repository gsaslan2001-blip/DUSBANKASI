"""
DUS Bankası — Oral Patoloji 1 Soruları İthalat ve Vektörleştirme Scripti
=======================================================================
Kaynak Dosya: C:\\Users\\FURKAN\\Desktop\\DUS\\patoloji\\pato ünite pdf\\Yeni klasör\\Oral Patoloji 1 .md
Hedef Ders: Patoloji
Hedef Ünite: 9.oral patoloji 1

İş Akışı:
1. Markdown dosyası içindeki <questions_json> bloğunu ayrıştırır ve temizler.
2. 32 soruyu normalize eder ve açıklamalardaki kaynak sızıntısı meta ifadelerini temizler.
3. OpenAI text-embedding-3-large (1536d) modeli ile soru kökü ve açıklama vektörlerini oluşturur.
4. quality_flag = None (null) olarak Supabase questions tablosuna aktarır.
5. Yükleme sonrası Supabase'den gerçek doğrulama probe'u yapar.
"""

import os
import sys
import re
import json
import time
import urllib.request
import urllib.error

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

import config

try:
    from openai import OpenAI
    if not config.OPENAI_API_KEY:
        raise ValueError("OPENAI_API_KEY bulunamadı!")
    openai_client = OpenAI(api_key=config.OPENAI_API_KEY)
except Exception as e:
    print(f"❌ OpenAI istemcisi başlatılamadı: {e}")
    sys.exit(1)

MD_PATH = r"C:\Users\FURKAN\Desktop\DUS\patoloji\pato ünite pdf\Yeni klasör\Oral Patoloji 1 .md"
LESSON_NAME = "Patoloji"
UNIT_NAME = "9.oral patoloji 1"


def clean_explanation_leak(text: str) -> str:
    """Açıklamalardaki gereksiz meta-yorum ifadelerini temizler."""
    t = text
    t = re.sub(r'(?i)E\)\s*Metinde belirtildiği üzere\s*', 'E) ', t)
    t = re.sub(r'(?i)Metinde kesin bir dille belirtildiği üzere\s*[\'"]?(.*?)[\'"]?\s*\(III yanlıştır\)', r'\1 (III yanlıştır)', t)
    t = re.sub(r'(?i)E\)\s*III nolu öncülün ağız dışı ifadesi metinle çelişir\.', 'E) Aftlar ağız mukozası dışında görülmez.', t)
    t = re.sub(r'(?i)Metinde açıkça [\'"]?Prekanseröz değildir[\'"]? ifadesi yer aldığından', 'Prekanseröz kabul edilmediğinden', t)
    t = re.sub(r'(?i)Metin kuralı:\s*[\'"]?(.*?)[\'"]?\.', r'\1.', t)
    t = re.sub(r'(?i)Tüm öncüller metinle birebir uyumludur\.', 'Tüm öncüller doğrudur.', t)
    t = re.sub(r'(?i)Üç öncül de metinle tam uyumludur\.', 'Tüm öncüller doğrudur.', t)
    t = re.sub(r'(?i)Üç öncül de metinle tam örtüşür\.', 'Tüm öncüller doğrudur.', t)
    return t


def parse_markdown_questions(path: str) -> list:
    if not os.path.exists(path):
        raise FileNotFoundError(f"Dosya bulunamadı: {path}")

    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    m = re.search(r'<\s*questions[\\_]*json\s*>', content, re.IGNORECASE)
    m_end = re.search(r'<\s*/\s*questions[\\_]*json\s*>', content, re.IGNORECASE)

    if not m or not m_end:
        raise ValueError("<questions_json> bloğu bulunamadı!")

    raw_block = content[m.end():m_end.start()]

    lines = []
    for line in raw_block.splitlines():
        l = line.strip()
        if not l:
            continue
        if l.startswith("**") and l.endswith("**") and len(l) >= 4:
            l = l[2:-2].strip()
        elif l.startswith("**"):
            l = l[2:].strip()
        elif l.endswith("**"):
            l = l[:-2].strip()
        l = l.replace("\xa0", " ")
        lines.append(l)

    cleaned = "\n".join(lines)
    cleaned = re.sub(r'\\\[', '[', cleaned)
    cleaned = re.sub(r'\\\]', ']', cleaned)
    cleaned = re.sub(r'\"option\\_([a-eA-E])\"', r'"option_\1"', cleaned)
    cleaned = re.sub(r'\"correct\\_answer\"', '"correct_answer"', cleaned)
    cleaned = re.sub(r'\\(\*)', r'\1', cleaned)

    parsed_json = json.loads(cleaned)
    normalized = []

    for idx, q in enumerate(parsed_json):
        opts = {}
        for k in ("A", "B", "C", "D", "E"):
            v = q.get(f"option_{k.lower()}") or (q.get("options") or {}).get(k) or q.get(k)
            opts[k] = str(v or "").strip()

        ca = str(q.get("correct_answer") or q.get("correctAnswer") or "").strip().upper()
        stem = str(q.get("question") or q.get("soru") or "").strip()
        expl = clean_explanation_leak(str(q.get("explanation") or q.get("aciklama") or "").strip())

        # Bütünlük kontrolü
        assert stem, f"Soru {idx+1} kökü boş!"
        assert ca in ("A", "B", "C", "D", "E"), f"Soru {idx+1} geçersiz cevap: {ca}"
        assert all(opts[k] for k in ("A", "B", "C", "D", "E")), f"Soru {idx+1} eksik şık!"
        assert expl, f"Soru {idx+1} açıklaması boş!"

        normalized.append({
            "lesson": LESSON_NAME,
            "unit": UNIT_NAME,
            "question": stem,
            "options": opts,
            "correctAnswer": ca,
            "explanation": expl
        })

    return normalized


def generate_embeddings(texts: list, dimensions: int = 1536) -> list:
    """OpenAI text-embedding-3-large ile toplu embedding alır."""
    embeddings = []
    chunk_size = 50
    for i in range(0, len(texts), chunk_size):
        chunk = texts[i:i + chunk_size]
        chunk = [t if (t and t.strip()) else " " for t in chunk]
        for attempt in range(4):
            try:
                res = openai_client.embeddings.create(
                    model="text-embedding-3-large",
                    input=chunk,
                    dimensions=dimensions
                )
                embeddings.extend([d.embedding for d in res.data])
                break
            except Exception as e:
                print(f"   ⏳ Embedding denemesi {attempt+1} hata: {e}")
                if attempt < 3:
                    time.sleep(2 ** (attempt + 1))
                else:
                    raise e
    return embeddings


def insert_to_supabase(questions: list, stem_embs: list, expl_embs: list) -> int:
    url = f"{config.SUPABASE_URL}/rest/v1/questions"
    headers = {
        "apikey": config.SUPABASE_KEY,
        "Authorization": f"Bearer {config.SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=representation"
    }

    rows = []
    for i, q in enumerate(questions):
        opts = q["options"]
        row = {
            "lesson": LESSON_NAME,
            "unit": UNIT_NAME,
            "question": q["question"],
            "option_a": opts["A"],
            "option_b": opts["B"],
            "option_c": opts["C"],
            "option_d": opts["D"],
            "option_e": opts["E"],
            "correct_answer": q["correctAnswer"],
            "explanation": q["explanation"],
            "stem_embedding": stem_embs[i],
            "explanation_embedding": expl_embs[i],
            "quality_flag": None,
            "flagged": False
        }
        rows.append(row)

    chunk_size = 10
    total_inserted = 0

    print(f"\n🚀 {len(rows)} soru Supabase questions tablosuna ekleniyor (Chunk: {chunk_size})...")
    for chunk_start in range(0, len(rows), chunk_size):
        chunk = rows[chunk_start:chunk_start + chunk_size]
        payload = json.dumps(chunk, ensure_ascii=False).encode("utf-8")

        for attempt in range(4):
            try:
                req = urllib.request.Request(url, data=payload, headers=headers, method="POST")
                with urllib.request.urlopen(req) as resp:
                    resp_data = json.loads(resp.read().decode("utf-8"))
                    total_inserted += len(resp_data)
                    print(f"   ✅ Chunk [{chunk_start+1}-{chunk_start+len(chunk)}] yazıldı ({total_inserted}/{len(rows)})")
                break
            except urllib.error.HTTPError as e:
                err_body = e.read().decode(errors="replace")
                print(f"   ❌ HTTP {e.code} (Chunk {chunk_start}): {err_body[:300]}")
                if 500 <= e.code < 600 and attempt < 3:
                    time.sleep(2 ** (attempt + 1))
                    continue
                raise
            except Exception as e:
                print(f"   ❌ Hata (Chunk {chunk_start}, deneme {attempt+1}): {e}")
                if attempt < 3:
                    time.sleep(2 ** (attempt + 1))
                    continue
                raise

        if chunk_start + chunk_size < len(rows):
            time.sleep(0.5)

    return total_inserted


def verify_import() -> None:
    """Supabase üzerinden verilerin doğruluğunu probe eder."""
    import requests
    headers = {
        "apikey": config.SUPABASE_KEY,
        "Authorization": f"Bearer {config.SUPABASE_KEY}"
    }
    encoded_unit = urllib.parse.quote(UNIT_NAME)
    url = f"{config.SUPABASE_URL}/rest/v1/questions?select=id,lesson,unit,question,correct_answer,quality_flag,stem_embedding,explanation_embedding&lesson=eq.{LESSON_NAME}&unit=eq.{encoded_unit}"
    r = requests.get(url, headers=headers)
    if r.status_code != 200:
        print(f"❌ Doğrulama sorgusu başarısız: HTTP {r.status_code}")
        return

    data = r.json()
    print("\n══════════════════════════════════════════════════")
    print("🔍 CANLI DOĞRULAMA (PROBE) SONUÇLARI")
    print("══════════════════════════════════════════════════")
    print(f"Ders: {LESSON_NAME}")
    print(f"Ünite: {UNIT_NAME}")
    print(f"Toplam Eklenen Soru Sayısı: {len(data)}")

    with_stem_emb = sum(1 for q in data if q.get("stem_embedding") is not None)
    with_expl_emb = sum(1 for q in data if q.get("explanation_embedding") is not None)
    null_quality = sum(1 for q in data if q.get("quality_flag") is None)

    print(f"stem_embedding Olanlar: {with_stem_emb}/{len(data)}")
    print(f"explanation_embedding Olanlar: {with_expl_emb}/{len(data)}")
    print(f"quality_flag = NULL (Aktif Havuzda) Olanlar: {null_quality}/{len(data)}")

    print("\nÖrnek İlk 3 Soru:")
    for idx, q in enumerate(data[:3]):
        stem_preview = q.get("question", "")[:70]
        print(f"  {idx+1}. [ID: {q.get('id')}] Cevap: {q.get('correct_answer')} | {stem_preview}...")


def main():
    print("=" * 60)
    print("DUSBANKASI — ORAL PATOLOJİ 1 İTHALAT HATTI")
    print("=" * 60)

    # 1. Ayrıştır
    print(f"\n📂 1. Dosya okunuyor: {MD_PATH}")
    questions = parse_markdown_questions(MD_PATH)
    print(f"   ✅ {len(questions)} soru başarıyla ayrıştırıldı ve doğrulandı.")

    # 2. Vektörleştir
    print(f"\n🧠 2. Vektörleştirme başlatılıyor (text-embedding-3-large, 1536d)...")
    stems = [q["question"] for q in questions]
    expls = [q["explanation"] for q in questions]

    print(f"   - Soru kökleri vektörleştiriliyor ({len(stems)} adet)...")
    stem_embs = generate_embeddings(stems, dimensions=1536)
    print(f"   ✅ {len(stem_embs)} soru kökü embedding'i oluşturuldu.")

    print(f"   - Açıklamalar vektörleştiriliyor ({len(expls)} adet)...")
    expl_embs = generate_embeddings(expls, dimensions=1536)
    print(f"   ✅ {len(expl_embs)} açıklama embedding'i oluşturuldu.")

    # 3. Supabase'e yaz
    total_written = insert_to_supabase(questions, stem_embs, expl_embs)
    print(f"\n🎉 Toplam {total_written} soru başarıyla Supabase'e yazıldı.")

    # 4. Doğrula
    verify_import()


if __name__ == "__main__":
    main()
