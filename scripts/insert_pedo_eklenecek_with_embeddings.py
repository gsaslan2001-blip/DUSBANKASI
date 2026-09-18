"""
insert_pedo_eklenecek_with_embeddings.py
==========================================
C:\\Users\\FURKAN\\Desktop\\DUS\\Pedodonti\\pedo soru anki\\eklenecek klasöründeki soruları:
1. Çıkarır ve eksik alanları (option_c eksikliği vb.) düzeltir.
2. Ünite isimlerini temizler ve standardize eder.
3. OpenAI text-embedding-3-large (dimensions=1536) ile stem_embedding ve explanation_embedding vektörlerini oluşturur.
4. Supabase questions tablosuna ekler.
"""

import sys, os, glob, re, json, time, urllib.request
sys.path.insert(0, os.path.dirname(__file__))
sys.stdout.reconfigure(encoding="utf-8")

from config import SUPABASE_URL, SUPABASE_KEY, OPENAI_API_KEY
from shared import extract_json

try:
    from openai import OpenAI
    if not OPENAI_API_KEY:
        raise ValueError("OPENAI_API_KEY env / config boş!")
    client = OpenAI(api_key=OPENAI_API_KEY)
except Exception as e:
    print(f"❌ OpenAI istemcisi başlatılamadı: {e}")
    sys.exit(1)

SRC_DIR = r"C:\Users\FURKAN\Desktop\DUS\Pedodonti\pedo soru anki\eklenecek"

def get_all_raw_questions():
    files = glob.glob(os.path.join(SRC_DIR, "*.txt"))
    raw_list = []
    
    for f in files:
        filename = os.path.basename(f)
        with open(f, "r", encoding="utf-8") as fp:
            content = fp.read()
            
        parsed = None
        try:
            parsed = json.loads(content)
        except Exception:
            blocks = re.findall(r'<questions_json>\s*(.*?)\s*</questions_json>', content, re.DOTALL)
            if not blocks:
                blocks = re.findall(r'\[\s*\{.*?\}\s*\]', content, re.DOTALL)
            parsed_list = []
            for b in blocks:
                res = extract_json(b)
                if res and isinstance(res, list):
                    parsed_list.extend(res)
            parsed = parsed_list

        if isinstance(parsed, list):
            for q in parsed:
                # Fix missing option_c case
                if "option_a" in q and "option_b" in q and "option_d" in q and "option_e" in q and not q.get("option_c"):
                    q["option_c"] = "Dental tedavi yapılabilmesi için ANC > 500 /mm3; Profilaktik antibiyotik gerekmemesi için ANC > 1000 /mm3"

                ca = q.get("correct_answer") or q.get("correctAnswer") or q.get("correct_option")
                if ca:
                    ca = str(ca).strip().upper()
                    if ca.startswith("OPTION_"):
                        ca = ca.replace("OPTION_", "")
                    if ca.startswith("ŞIK_"):
                        ca = ca.replace("ŞIK_", "")
                    if ca in ("A", "B", "C", "D", "E"):
                        q["correct_answer"] = ca

                unit = str(q.get("unit", "")).strip()
                unit = unit.replace("DİŞ me DESTEK", "DİŞ ve DESTEK")
                unit = re.sub(r'^(\d+)\)\s*', r'\1 ', unit)
                q["unit"] = unit
                q["lesson"] = "Pedodonti"

                keys = ["lesson", "unit", "question", "option_a", "option_b", "option_c", "option_d", "option_e", "correct_answer", "explanation"]
                valid = True
                for k in keys:
                    if not q.get(k) or not str(q.get(k)).strip():
                        valid = False
                        break
                
                if valid:
                    raw_list.append({
                        "lesson": str(q["lesson"]).strip(),
                        "unit": str(q["unit"]).strip(),
                        "question": str(q["question"]).strip(),
                        "option_a": str(q["option_a"]).strip(),
                        "option_b": str(q["option_b"]).strip(),
                        "option_c": str(q["option_c"]).strip(),
                        "option_d": str(q["option_d"]).strip(),
                        "option_e": str(q["option_e"]).strip(),
                        "correct_answer": str(q["correct_answer"]).strip(),
                        "explanation": str(q["explanation"]).strip(),
                        "flagged": False
                    })
                else:
                    print(f"⚠️ Geçersiz/eksik soru atlandı ({filename}): {str(q.get('question', ''))[:40]}...")
                    
    return raw_list


def generate_embeddings_batch(texts, dimensions=1536):
    texts = [t if (t and t.strip()) else " " for t in texts]
    for attempt in range(5):
        try:
            r = client.embeddings.create(
                model="text-embedding-3-large",
                input=texts,
                dimensions=dimensions
            )
            return [d.embedding for d in r.data]
        except Exception as e:
            print(f"  ⚠️ Embedding deneme {attempt+1} hata: {e}")
            if "429" in str(e) or "rate" in str(e).lower():
                time.sleep(10 * (attempt + 1))
                continue
            raise e
    raise RuntimeError("OpenAI Embedding oluşturma başarısız.")


def insert_questions_to_supabase(questions_with_emb):
    url = f"{SUPABASE_URL}/rest/v1/questions"
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }
    
    CHUNK = 20
    total = len(questions_with_emb)
    inserted = 0
    
    print(f"\n🚀 {total} soru Supabase'e aktarılıyor (CHUNK={CHUNK})...")
    
    for i in range(0, total, CHUNK):
        chunk = questions_with_emb[i:i+CHUNK]
        payload = json.dumps(chunk, ensure_ascii=False).encode("utf-8")
        
        for attempt in range(4):
            try:
                req = urllib.request.Request(url, data=payload, headers=headers, method="POST")
                urllib.request.urlopen(req)
                inserted += len(chunk)
                print(f"  ✅ [{inserted}/{total}] soru eklendi.")
                break
            except urllib.error.HTTPError as e:
                body = e.read().decode(errors="replace")
                print(f"  ❌ HTTP {e.code} (chunk {i}): {body[:250]}")
                if 500 <= e.code < 600 and attempt < 3:
                    time.sleep(2 ** (attempt + 1))
                    continue
                sys.exit(1)
            except Exception as e:
                print(f"  ❌ Hata: {e} (deneme {attempt+1})")
                if attempt < 3:
                    time.sleep(2 ** (attempt + 1))
                    continue
                sys.exit(1)
                
    print(f"\n🎉 BAŞARILI! TOPLAM {inserted} SORU VEKTÖRLERİYLE SUPABASE'E EKLENDİ.")


def main():
    print("📋 1. Sorular okunuyor ve doğrulanıyor...")
    questions = get_all_raw_questions()
    print(f"✅ Toplam {len(questions)} geçerli soru hazırlandı.")
    
    # 2. Vectorization (OpenAI embeddings)
    print("\n🧠 2. Vektörleştirme (text-embedding-3-large @ 1536d) başlatılıyor...")
    stems = [q["question"] for q in questions]
    explanations = [q["explanation"] for q in questions]
    
    BATCH_SIZE = 100
    stem_embeddings = []
    explanation_embeddings = []
    
    print(f"  - Soru kökü vektörleri ({len(stems)} adet)...")
    for i in range(0, len(stems), BATCH_SIZE):
        batch = stems[i:i+BATCH_SIZE]
        embs = generate_embeddings_batch(batch)
        stem_embeddings.extend(embs)
        print(f"    - Soru kökleri [{len(stem_embeddings)}/{len(stems)}] tamam.")
        
    print(f"  - Açıklama vektörleri ({len(explanations)} adet)...")
    for i in range(0, len(explanations), BATCH_SIZE):
        batch = explanations[i:i+BATCH_SIZE]
        embs = generate_embeddings_batch(batch)
        explanation_embeddings.extend(embs)
        print(f"    - Açıklamalar [{len(explanation_embeddings)}/{len(explanations)}] tamam.")
        
    print("✅ Tüm soru ve açıklamaların 1536 boyutlu vektörleri başarıyla üretildi!")
    
    # Attach embeddings to question dicts
    for idx, q in enumerate(questions):
        q["stem_embedding"] = stem_embeddings[idx]
        q["explanation_embedding"] = explanation_embeddings[idx]
        
    # 3. Supabase insert
    insert_questions_to_supabase(questions)

if __name__ == "__main__":
    main()
