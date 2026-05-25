import os
import glob
import uuid
from typing import List, Dict, Any
from config import PINECONE_API_KEY, PINECONE_INDEX_NAME, PINECONE_HOST
from pinecone import Pinecone

# The directory you specified
MEMORY_DIR = r"C:\Users\FURKAN\.claude\DUS"
NAMESPACE = "claude_memory"

def chunk_text(text: str, max_chars: int = 1500, overlap: int = 200) -> List[str]:
    """Basic character-based chunking with overlap."""
    if not text:
        return []
    chunks = []
    start = 0
    while start < len(text):
        end = start + max_chars
        chunks.append(text[start:end])
        start += (max_chars - overlap)
    return chunks

def sync_memory_to_pinecone():
    if not PINECONE_API_KEY:
        print("HATA: PINECONE_API_KEY .env.local dosyasında bulunamadı!")
        print("Lütfen .env.local dosyasına PINECONE_API_KEY=deger şeklinde ekleyin.")
        return

    print("Pinecone bağlantısı kuruluyor...")
    # Initialize Pinecone
    pc = Pinecone(api_key=PINECONE_API_KEY)
    index = pc.Index(host=PINECONE_HOST) # or use name=PINECONE_INDEX_NAME if appropriate

    # Find all Markdown files
    md_files = glob.glob(os.path.join(MEMORY_DIR, "**", "*.md"), recursive=True)
    print(f"Toplam {len(md_files)} adet Markdown dosyası bulundu.")

    vectors = []
    
    for file_path in md_files:
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
        except Exception as e:
            print(f"Hata okunurken: {file_path} -> {e}")
            continue
            
        # Get relative path for metadata
        rel_path = os.path.relpath(file_path, MEMORY_DIR)
        
        # Chunk content
        chunks = chunk_text(content)
        for i, chunk in enumerate(chunks):
            vector_id = f"mem_{uuid.uuid4().hex[:8]}"
            vectors.append({
                "id": vector_id,
                "text": chunk, # Integrated model embeds this automatically
                "metadata": {
                    "source": rel_path,
                    "chunk_index": i,
                    "type": "claude_memory"
                }
            })

    if not vectors:
        print("Yüklenecek veri bulunamadı.")
        return

    # Force UTF-8 for console output to avoid encoding errors
    import sys
    if sys.stdout.encoding != 'utf-8':
        import io
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

    # Upsert in batches of 96 (Pinecone integrated inference limit)
    batch_size = 96
    for i in range(0, len(vectors), batch_size):
        batch = vectors[i:i + batch_size]
        # Flatten for upsert_records: move text and metadata fields to top level
        records_to_upsert = []
        for v in batch:
            record = {
                "id": v["id"],
                "text": v["text"],
                **v["metadata"]
            }
            records_to_upsert.append(record)
            
        try:
            index.upsert_records(namespace=NAMESPACE, records=records_to_upsert)
            print(f"Yüklendi: {i + len(batch)} / {len(vectors)}")
        except Exception as e:
            print(f"Batch yükleme hatası: {e}")
            
    print("✅ Tüm bellek Pinecone'a başarıyla senkronize edildi!")

if __name__ == "__main__":
    sync_memory_to_pinecone()
