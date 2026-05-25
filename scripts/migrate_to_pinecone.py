import json
import os
import sys
from pinecone import Pinecone

# --- KONFİGÜRASYON ---
PINECONE_API_KEY = os.environ.get("PINECONE_API_KEY", "")
INDEX_NAME = "dusbankasi"
DATA_PATH = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\exports\questions_backup.json"

def migrate():
    try:
        pc = Pinecone(api_key=PINECONE_API_KEY)
        index = pc.Index(name=INDEX_NAME)

        print(f"[*] Veri dosyasi okunuyor: {DATA_PATH}")
        if not os.path.exists(DATA_PATH):
            print(f"[!] HATA: Dosya bulunamadi: {DATA_PATH}")
            return

        with open(DATA_PATH, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        total = len(data)
        print(f"[+] Toplam {total} kayit okundu. Aktarim basliyor...")

        batch_size = 100
        for i in range(0, total, batch_size):
            batch = data[i : i + batch_size]
            upsert_data = []
            
            for item in batch:
                # Metadata temizligi ve formatlama
                # Pinecone null deger kabul etmedigi icin bos stringe ceviriyoruz
                metadata = {
                    "lesson": str(item.get("lesson") or ""),
                    "unit": str(item.get("unit") or ""),
                    "question": str(item.get("question") or ""),
                    "option_a": str(item.get("option_a") or ""),
                    "option_b": str(item.get("option_b") or ""),
                    "option_c": str(item.get("option_c") or ""),
                    "option_d": str(item.get("option_d") or ""),
                    "option_e": str(item.get("option_e") or ""),
                    "explanation": str(item.get("explanation") or ""),
                    "image_url": str(item.get("image_url") or ""),
                    "correct_answer": str(item.get("correct_answer") or ""),
                    "flag_reason": str(item.get("flag_reason") or ""),
                    "quality_flag": str(item.get("quality_flag") or "")
                }

                # Vektor verisi (Embedding string formatinda gelebilir, listeye ceviriyoruz)
                values = item.get("embedding")
                if isinstance(values, str):
                    try:
                        values = json.loads(values)
                    except Exception as e:
                        print(f"\n[!] Hata: {item.get('id')} icin embedding parse edilemedi: {e}")
                        continue

                if values is None or not isinstance(values, list):
                    # print(f"\n[!] Uyari: {item.get('id')} icin gecerli bir embedding bulunamadi, atlaniyor.")
                    continue

                # --- KRITIK DUZELTME: Tum degerleri float'a zorla ---
                try:
                    values = [float(v) for v in values]
                except Exception as e:
                    print(f"\n[!] Vektor donusturme hatasi ({item.get('id')}): {e}")
                    continue

                upsert_data.append({
                    "id": str(item["id"]),
                    "values": values,
                    "metadata": metadata
                })

            if upsert_data:
                try:
                    # Pinecone'a paket halinde gonder
                    index.upsert(vectors=upsert_data)
                except Exception as e:
                    print(f"\n[!] Upsert hatasi (Batch {i}): {e}")
                    continue
                
            # Konsol ilerleme bilgisi
            sys.stdout.write(f"\r[>] İlerleme: %{round((i + len(batch)) / total * 100, 2)} ({i + len(batch)} / {total})")
            sys.stdout.flush()

        print("\n\n[SUCCESS] Tum veriler basariyla Pinecone'a aktarildi!")

    except Exception as e:
        print(f"\n[!] BEKLENMEDIK HATA: {str(e)}")

if __name__ == "__main__":
    migrate()
