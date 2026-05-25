import os
import json
from pinecone import Pinecone
from openai import OpenAI

# --- KONFIGURASYON ---
PINECONE_API_KEY = os.environ.get("PINECONE_API_KEY", "")
INDEX_NAME = "dusbankasi"
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")

pc = Pinecone(api_key=PINECONE_API_KEY)
index = pc.Index(name=INDEX_NAME)
client = OpenAI(api_key=OPENAI_API_KEY)

def get_embedding(text):
    # DUS Bankasi verileri text-embedding-3-small (1536d) ile uyumlu gorunuyor
    text = text.replace("\n", " ")
    return client.embeddings.create(input=[text], model="text-embedding-3-small").data[0].embedding

def find_similar_questions(query_text, top_k=3):
    query_vector = get_embedding(query_text)
    results = index.query(
        vector=query_vector,
        top_k=top_k,
        include_metadata=True
    )
    return results

if __name__ == "__main__":
    # Test sorusu (Az once yukledigimiz veriler arasinda buna benzer bir sey olmali)
    test_queries = [
        "Panoramik radyografilerin curuk teshisinde rutin olarak onerilmemesinin gerekcesi",
        "Dis minesinde meydana gelen demineralizasyon surecleri",
        "Radyoloji unitesi 12"
    ]

    for q in test_queries:
        print(f"\n" + "="*50)
        print(f"[*] ARANIYOR: '{q}'")
        print("="*50)
        
        try:
            results = find_similar_questions(q)
            for match in results['matches']:
                score = round(match['score'] * 100, 2)
                q_text = match['metadata'].get('question', 'Soru metni yok')
                lesson = match['metadata'].get('lesson', 'Ders yok')
                
                print(f"\n[%{score} Uyum] - {lesson}")
                print(f"Soru: {q_text[:200]}...")
        except Exception as e:
            print(f"[!] Hata: {e}")
