"""
insert_resto_1s.py
===================
C:\\Users\\FURKAN\\Desktop\\DUS\\Restoratif\\anki ve soru\\1s.txt dosyasındaki
Restoratif dersi 1. Ünite (1 DİŞ SERT DOKULARI) sorularını:
1. Okur ve alanlarını doğrular.
2. OpenAI text-embedding-3-large (1536d) ile stem ve explanation vektörlerini oluşturur.
3. Supabase questions tablosuna ekler.
4. Başarıyla eklendiğini Supabase üzerinden sorgulayarak doğrular.
"""

import sys, os, json, time, urllib.request

sys.path.insert(0, os.path.dirname(__file__))
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

from config import SUPABASE_URL, SUPABASE_KEY, OPENAI_API_KEY
from openai import OpenAI

if not OPENAI_API_KEY:
    print("❌ OPENAI_API_KEY bulunamadı!")
    sys.exit(1)

client = OpenAI(api_key=OPENAI_API_KEY)
FILE_PATH = r"C:\Users\FURKAN\Desktop\DUS\Restoratif\anki ve soru\1s.txt"

def load_and_validate_questions():
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        raw_data = json.load(f)
        
    print(f"📖 {FILE_PATH} dosyasından {len(raw_data)} adet kayıt okundu.")
    
    questions = []
    for idx, item in enumerate(raw_data):
        ca = item.get("option_correct") or item.get("correct_answer")
        if ca:
            ca = str(ca).strip().upper()
            if ca.startswith("OPTION_"):
                ca = ca.replace("OPTION_", "")
            if ca.startswith("ŞIK_"):
                ca = ca.replace("ŞIK_", "")
                
        unit_name = str(item.get("unit", "")).strip()
        if not unit_name:
            unit_name = "1 DİŞ SERT DOKULARI"
            
        q_obj = {
            "lesson": "Restoratif",
            "unit": unit_name,
            "question": str(item.get("question", "")).strip(),
            "option_a": str(item.get("option_a", "")).strip(),
            "option_b": str(item.get("option_b", "")).strip(),
            "option_c": str(item.get("option_c", "")).strip(),
            "option_d": str(item.get("option_d", "")).strip(),
            "option_e": str(item.get("option_e", "")).strip(),
            "correct_answer": ca,
            "explanation": str(item.get("explanation", "")).strip(),
            "flagged": False
        }
        
        # Validation check
        valid = True
        for k, v in q_obj.items():
            if k != "flagged" and not v:
                print(f"⚠️ [{idx+1}. soru] Eksik alan: {k}")
                valid = False
                break
                
        if valid:
            questions.append(q_obj)
        else:
            print(f"❌ {idx+1}. soru atlandı: {q_obj['question'][:50]}")
            
    return questions

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
                
    print(f"\n🎉 Aktarım tamamlandı. Supabase'e {inserted} soru gönderildi.")

def verify_in_supabase():
    url = f"{SUPABASE_URL}/rest/v1/questions?select=id,question&lesson=eq.Restoratif"
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}"
    }
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode("utf-8"))
        print(f"📊 Supabase Doğrulama Probu: Restoratif dersinde toplam {len(data)} kayıt mevcut.")
        return len(data)

def main():
    print("📋 1. Sorular okunuyor ve hazırlanıyor...")
    questions = load_and_validate_questions()
    print(f"✅ Toplam {len(questions)} soru eklenecek.")
    
    if not questions:
        print("❌ Eklenecek soru bulunamadı.")
        return
        
    print("\n🧠 2. OpenAI Embeddingleri (text-embedding-3-large @ 1536d) oluşturuluyor...")
    stems = [q["question"] for q in questions]
    explanations = [q["explanation"] for q in questions]
    
    print("  - Soru kökü vektörleri...")
    stem_embs = generate_embeddings_batch(stems)
    print("  - Açıklama vektörleri...")
    expl_embs = generate_embeddings_batch(explanations)
    
    for idx, q in enumerate(questions):
        q["stem_embedding"] = stem_embs[idx]
        q["explanation_embedding"] = expl_embs[idx]
        
    print("✅ Vektörler başarıyla eklendi.")
    
    print("\n💾 3. Supabase'e yazılıyor...")
    insert_questions_to_supabase(questions)
    
    print("\n🔍 4. Veritabanı canlı probe ile doğrulanıyor...")
    count = verify_in_supabase()
    if count == len(questions):
        print(f"✅ PROBE BAŞARILI: {count}/{len(questions)} soru Supabase veritabanında doğrulandı!")
    else:
        print(f"⚠️ UYARI: Veritabanında {count} soru bulundu, beklenilen {len(questions)}.")

if __name__ == "__main__":
    main()
