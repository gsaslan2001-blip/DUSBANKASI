"""
import_gemini_resto_15units.py
=============================
"C:\\Users\\FURKAN\\Desktop\\Projeler\\gemini soru üretim\\Çıktı" klasöründeki 15 üniteye ait 600 soruyu:
1. Ayrıştırır (Robust JSON repair ile sıfır kayıp).
2. Hiçbir eleme/kalite kontrolü yapmadan doğrudan toplar.
3. OpenAI text-embedding-3-large (1536 boyut) ile stem_embedding ve explanation_embedding vektörlerini üretir.
4. Supabase questions tablosuna ekler.
"""

import sys, os, glob, re, json, time, urllib.request

sys.path.insert(0, os.path.dirname(__file__))
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass

from config import SUPABASE_URL, SUPABASE_KEY, OPENAI_API_KEY

try:
    from openai import OpenAI
    if not OPENAI_API_KEY:
        raise ValueError("OPENAI_API_KEY env / config boş!")
    client = OpenAI(api_key=OPENAI_API_KEY)
except Exception as e:
    print(f"❌ OpenAI istemcisi başlatılamadı: {e}")
    sys.exit(1)

SRC_DIR = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı"

def fix_json_object(obj_str):
    lines = obj_str.split("\n")
    cleaned_lines = []
    
    known_keys = ("lesson", "unit", "question", "option_a", "option_b", "option_c", "option_d", "option_e", "correct_answer", "correctAnswer", "explanation")
    
    for i, line in enumerate(lines):
        l_strip = line.strip()
        matched_key = None
        for k in known_keys:
            if l_strip.startswith(f'"{k}":'):
                matched_key = k
                break
                
        if matched_key:
            colon_idx = line.find(":")
            first_quote = line.find('"', colon_idx)
            if first_quote != -1:
                last_quote = line.rfind('"')
                if last_quote > first_quote:
                    prefix = line[:first_quote + 1]
                    suffix = line[last_quote:]
                    val_content = line[first_quote + 1 : last_quote]
                    val_clean = val_content.replace('"', "'")
                    line = prefix + val_clean + suffix
                    
        cleaned_lines.append(line)
        
    res_str = "\n".join(cleaned_lines)
    res_str = re.sub(r'("\s*)\n(\s*"(?:correct_answer|correctAnswer|explanation|option_[a-e]|question|lesson|unit)")', r'\1,\n\2', res_str)
    res_str = re.sub(r',\s*\}', '}', res_str)
    return res_str

def parse_question_objects(block_str):
    raw_objects = re.findall(r'\{\s*"lesson"[\s\S]*?\n\s*\}', block_str)
    parsed_qs = []
    for raw in raw_objects:
        cleaned = fix_json_object(raw)
        try:
            q = json.loads(cleaned)
            parsed_qs.append(q)
        except Exception as e:
            print(f"  ❌ Hatalı obje atlandı: {e}")
    return parsed_qs

def load_all_questions():
    files = glob.glob(os.path.join(SRC_DIR, "*.txt"))
    all_questions = []
    
    print(f"📂 {SRC_DIR} klasöründe {len(files)} ünite dosyası bulundu.\n")
    
    for filepath in sorted(files, key=lambda x: [int(c) if c.isdigit() else c for c in re.split(r'(\d+)', os.path.basename(x))]):
        filename = os.path.basename(filepath)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        blocks = re.findall(r'<questions_json>\s*(.*?)\s*</questions_json>', content, re.DOTALL)
        if not blocks:
            blocks = [content]
            
        parsed_in_file = []
        for b in blocks:
            try:
                res = json.loads(b.strip())
            except Exception:
                res = parse_question_objects(b)
            if isinstance(res, list):
                parsed_in_file.extend(res)
                
        count_valid = 0
        for q in parsed_in_file:
            if not isinstance(q, dict):
                continue
                
            lesson = str(q.get("lesson") or "Restoratif").strip()
            unit = str(q.get("unit") or filename.replace(".txt", "")).strip()
            question_text = str(q.get("question") or "").strip()
            
            opt_a = str(q.get("option_a") or q.get("optionA") or q.get("options", {}).get("A", "")).strip()
            opt_b = str(q.get("option_b") or q.get("optionB") or q.get("options", {}).get("B", "")).strip()
            opt_c = str(q.get("option_c") or q.get("optionC") or q.get("options", {}).get("C", "")).strip()
            opt_d = str(q.get("option_d") or q.get("optionD") or q.get("options", {}).get("D", "")).strip()
            opt_e = str(q.get("option_e") or q.get("optionE") or q.get("options", {}).get("E", "")).strip()
            
            ca = q.get("correct_answer") or q.get("correctAnswer") or q.get("correct_option")
            ca = str(ca).strip().upper() if ca else ""
            if ca.startswith("OPTION_"): ca = ca.replace("OPTION_", "")
            if ca.startswith("ŞIK_"): ca = ca.replace("ŞIK_", "")
            
            explanation = str(q.get("explanation") or "").strip()
            
            if not question_text:
                continue
                
            norm_q = {
                "lesson": lesson,
                "unit": unit,
                "question": question_text,
                "option_a": opt_a,
                "option_b": opt_b,
                "option_c": opt_c,
                "option_d": opt_d,
                "option_e": opt_e,
                "correct_answer": ca,
                "explanation": explanation
            }
            all_questions.append(norm_q)
            count_valid += 1
            
        print(f"📄 {filename}: {count_valid} soru okundu.")
        
    return all_questions

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

def main(dry_run=False):
    questions = load_all_questions()
    print(f"\n📊 Toplam Çıkarılan Soru Sayısı: {len(questions)}")
    
    if dry_run:
        print("\n🧪 Dry-run modunda çalıştırıldı. Veritabanına ekleme ve embedding yapılmadı.")
        return

    # Vectorization
    print("\n🧠 Vektörleştirme (text-embedding-3-large @ 1536d) başlatılıyor...")
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
        
    print("✅ Tüm soru ve açıklamaların 1536 boyutlu vektörleri üretildi!")
    
    for idx, q in enumerate(questions):
        q["stem_embedding"] = stem_embeddings[idx]
        q["explanation_embedding"] = explanation_embeddings[idx]
        
    insert_questions_to_supabase(questions)

if __name__ == "__main__":
    is_dry = "--dry-run" in sys.argv
    main(dry_run=is_dry)
