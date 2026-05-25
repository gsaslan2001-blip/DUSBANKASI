import json
import os

BACKUP_FILE = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\exports\questions_backup.json"
OUTPUT_FILE = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\exports\missing_embeddings.json"

def find_missing():
    print(f"[*] {BACKUP_FILE} taranıyor...")
    
    missing_questions = []
    total_count = 0
    
    with open(BACKUP_FILE, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except Exception as e:
            print(f"[!] JSON Okuma Hatası: {e}")
            return

    for item in data:
        total_count += 1
        embedding = item.get("embedding")
        
        # Embedding yoksa veya list degilse veya bos ise
        if embedding is None or not isinstance(embedding, list) or len(embedding) == 0:
            missing_questions.append(item)
            
    print(f"\n[*] Tarama Tamamlandı.")
    print(f"    - Toplam Soru: {total_count}")
    print(f"    - Embedding'i Olmayan: {len(missing_questions)}")
    
    if missing_questions:
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(missing_questions, f, ensure_ascii=False, indent=2)
        print(f"    - Eksik sorular şuraya kaydedildi: {OUTPUT_FILE}")
    else:
        print("    - Tebrikler! Tüm soruların embedding'i var.")

if __name__ == "__main__":
    find_missing()
