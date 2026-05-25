import os
import json
import re
import time
from pinecone import Pinecone
from openai import OpenAI

# --- KONFIGURASYON ---
PINECONE_API_KEY = os.environ.get("PINECONE_API_KEY", "")
INDEX_NAME = "dusbankasi"
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")
LOGS_DIR = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\logs"

DUPLICATE_THRESHOLD = 0.96
SIMILAR_ALERT_THRESHOLD = 0.90

pc = Pinecone(api_key=PINECONE_API_KEY)
index = pc.Index(name=INDEX_NAME)
client = OpenAI(api_key=OPENAI_API_KEY)

def get_embeddings_batch(texts):
    """Toplu embedding alir."""
    try:
        texts = [t.replace("\n", " ") for t in texts]
        response = client.embeddings.create(input=texts, model="text-embedding-3-small")
        return [item.embedding for item in response.data]
    except Exception as e:
        print(f"Batch Embedding hatasi: {e}")
        return None

def extract_json_from_text(text):
    match = re.search(r'\[\s*\{.*\}\s*\]', text, re.DOTALL)
    if match:
        try:
            return json.loads(match.group(0))
        except:
            return None
    return None

def check_duplicate(vector):
    try:
        results = index.query(vector=vector, top_k=1, include_metadata=True)
        if results.matches:
            score = results.matches[0].score
            if score >= DUPLICATE_THRESHOLD:
                return True, score
            return False, score
    except:
        pass
    return False, 0

def process_files():
    # Daha once islenen dosyalari takip etmek istersen buraya bir log eklenebilir
    files = [f for f in os.listdir(LOGS_DIR) if f.startswith("exhaust_") and f.endswith(".txt")]
    print(f"[*] Toplam {len(files)} adet dosya bulundu. HIZLI ISLEM basliyor...")
    
    stats = {"added": 0, "skipped": 0, "errors": 0}
    
    for filename in files:
        filepath = os.path.join(LOGS_DIR, filename)
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            questions = extract_json_from_text(content)
            if not questions: continue
                
            # 1. Tum sorularin metinlerini topla
            q_texts = [q.get("question", "") for q in questions if q.get("question", "")]
            if not q_texts: continue
            
            # 2. Batch Embedding al (HIZLANDIRICI)
            vectors = get_embeddings_batch(q_texts)
            if not vectors: continue
            
            print(f"\n>>> {filename} ({len(q_texts)} soru)")
            
            upsert_batch = []
            for i, vector in enumerate(vectors):
                q_text = q_texts[i]
                q_orig = questions[i]
                
                # 3. Benzerlik kontrolü
                is_dup, score = check_duplicate(vector)
                
                if is_dup:
                    stats["skipped"] += 1
                    continue
                
                # 4. Hazirla
                metadata = {
                    "question": q_text,
                    "lesson": q_orig.get("lesson", "Bilinmiyor"),
                    "unit": q_orig.get("unit", "Bilinmiyor"),
                    "correctAnswer": q_orig.get("correctAnswer", ""),
                    "explanation": q_orig.get("explanation", ""),
                    "source": filename
                }
                options = q_orig.get("options", {})
                for k, v in options.items(): metadata[f"option_{k}"] = v
                
                upsert_batch.append({
                    "id": f"gen_{int(time.time())}_{i}_{stats['added']}",
                    "values": vector,
                    "metadata": metadata
                })
                stats["added"] += 1

            # 5. Toplu Yukle
            if upsert_batch:
                index.upsert(vectors=upsert_batch)
                print(f"    [+] {len(upsert_batch)} yeni soru eklendi. ({stats['skipped']} mükerrer elendi)")
                
        except Exception as e:
            print(f"    [!!] Hata: {e}")
            stats["errors"] += 1

    print(f"\nISLEM TAMAMLANDI. Toplam Eklendi: {stats['added']}, Elendi: {stats['skipped']}")

if __name__ == "__main__":
    process_files()
