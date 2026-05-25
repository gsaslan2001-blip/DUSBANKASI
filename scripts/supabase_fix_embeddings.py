import os
import json
import asyncio
import aiohttp
import sys
from openai import OpenAI
from typing import List, Dict

# Proje kök dizinini ekle
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from scripts.config import SUPABASE_URL, SUPABASE_KEY, OPENAI_API_KEY

# OpenAI Client
client = OpenAI(api_key=OPENAI_API_KEY)

# Supabase Headers
HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

async def fetch_missing_embeddings():
    """Embedding'i NULL olan soruları çeker."""
    print("[*] Supabase'den embedding'i eksik olan sorular çekiliyor...")
    url = f"{SUPABASE_URL}/rest/v1/questions?select=id,question,explanation&embedding=is.null"
    
    async with aiohttp.ClientSession() as session:
        async with session.get(url, headers=HEADERS) as resp:
            if resp.status != 200:
                print(f"[!] Hata: {resp.status} - {await resp.text()}")
                return []
            data = await resp.json()
            print(f"[+] {len(data)} adet eksik embedding bulundu.")
            return data

def generate_embeddings(texts: List[str]) -> List[List[float]]:
    """OpenAI üzerinden toplu embedding üretir."""
    try:
        response = client.embeddings.create(
            model="text-embedding-3-small",
            input=texts
        )
        return [item.embedding for item in response.data]
    except Exception as e:
        print(f"[!] OpenAI Hatası: {e}")
        return []

async def update_supabase_embeddings(updates: List[Dict]):
    """Supabase'de embedding'leri günceller."""
    async with aiohttp.ClientSession() as session:
        for item in updates:
            url = f"{SUPABASE_URL}/rest/v1/questions?id=eq.{item['id']}"
            payload = {"embedding": item["embedding"]}
            async with session.patch(url, headers=HEADERS, json=payload) as resp:
                if resp.status not in (200, 201, 204):
                    print(f"[!] ID {item['id']} güncellenirken hata: {resp.status}")

async def main():
    if not OPENAI_API_KEY:
        print("[!] HATA: OPENAI_API_KEY bulunamadı!")
        return

    questions = await fetch_missing_embeddings()
    if not questions:
        print("[+] Güncellenecek soru kalmadı.")
        return

    batch_size = 50
    total = len(questions)
    print(f"[*] Islem basliyor: Toplam {total} soru, {batch_size}'li paketler halinde.")

    for i in range(0, total, batch_size):
        batch = questions[i:i+batch_size]
        
        texts = [
            f"{q.get('question', '')} {q.get('explanation', '')}".strip()
            for q in batch
        ]
        
        print(f"[*] {i+1}-{min(i+batch_size, total)} arasi icin embedding üretiliyor...")
        embeddings = generate_embeddings(texts)
        
        if not embeddings or len(embeddings) != len(batch):
            print(f"[!] Batch {i} icin embedding üretilemedi, atlaniyor.")
            continue
            
        updates = []
        for j, q in enumerate(batch):
            updates.append({
                "id": q["id"],
                "embedding": embeddings[j]
            })
            
        print(f"[*] Supabase güncelleniyor ({len(updates)} kayit)...")
        await update_supabase_embeddings(updates)
        
        print(f"[OK] Ilerleme: %{round((i + len(batch)) / total * 100, 2)}")

    print("\n[SUCCESS] Tüm eksik embedding'ler tamamlandı!")

if __name__ == "__main__":
    asyncio.run(main())
