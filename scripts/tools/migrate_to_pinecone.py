"""
migrate_to_pinecone.py
JSON backup'taki soruları Pinecone'a taşır.
Embedding zaten mevcut (OpenAI text-embedding-3-small, 1536-dim) — yeniden embed edilmez.

Kullanım:
  pip install pinecone
  export PINECONE_API_KEY="pc-..."
  python scripts/tools/migrate_to_pinecone.py --input exports/questions_backup.json
"""

import argparse
import json
import os
import sys
import time
from pathlib import Path

try:
    from pinecone import Pinecone, ServerlessSpec
except ImportError:
    print("HATA: pinecone paketi eksik.  pip install pinecone")
    sys.exit(1)

# ------------------------------------------------------------------
EXCLUDED_FLAGS = {"kavramsal_kopya", "auto_deleted"}
BATCH_SIZE     = 90          # Pinecone önerisi: ≤100
INDEX_NAME     = "dusbankasi"
DIMENSION      = 1536
METRIC         = "cosine"
REGION         = "us-east-1"  # Starter plan sadece us-east-1 destekler
# ------------------------------------------------------------------


def parse_embedding(raw) -> list[float]:
    """Hem string hem list formatını kabul eder."""
    if isinstance(raw, str):
        return json.loads(raw)
    return raw


def load_questions(path: Path) -> list[dict]:
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def build_vector(q: dict) -> dict | None:
    if q.get("quality_flag") in EXCLUDED_FLAGS:
        return None
    if not q.get("embedding"):
        return None

    # Pinecone metadata string değerleri 512 byte ile sınırlı değil ama
    # büyük metinler maliyeti artırır. Soru önizlemesi kısaltıyoruz.
    metadata = {
        "lesson":         q["lesson"],
        "unit":           q["unit"],
        "question":       q["question"][:400],
        "correct_answer": q["correct_answer"],
        "quality_flag":   q.get("quality_flag") or "",
        "flagged":        bool(q.get("flagged", False)),
        "is_favorite":    bool(q.get("is_favorite", False)),
    }

    return {
        "id":       q["id"],
        "values":   parse_embedding(q["embedding"]),
        "metadata": metadata,
    }


def upsert_batches(index, vectors: list[dict], namespace: str = ""):
    total   = len(vectors)
    batches = (total + BATCH_SIZE - 1) // BATCH_SIZE
    upserted = 0

    for i in range(batches):
        batch = vectors[i * BATCH_SIZE : (i + 1) * BATCH_SIZE]
        kwargs = dict(vectors=batch)
        if namespace:
            kwargs["namespace"] = namespace

        for attempt in range(3):
            try:
                index.upsert(**kwargs)
                upserted += len(batch)
                pct = upserted / total * 100
                print(f"  ✓ Batch {i+1}/{batches} → {upserted}/{total} ({pct:.0f}%)")
                break
            except Exception as e:
                if attempt == 2:
                    raise
                print(f"  ⚠ Batch {i+1} hata ({e}), 2s sonra tekrar...")
                time.sleep(2)

    return upserted


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input",     required=True, help="JSON backup yolu")
    parser.add_argument("--namespace", default="",    help="Pinecone namespace (opsiyonel)")
    parser.add_argument("--dry-run",   action="store_true", help="İndex oluşturma, upsert yapma")
    args = parser.parse_args()

    api_key = os.environ.get("PINECONE_API_KEY")
    if not api_key:
        print("HATA: PINECONE_API_KEY ortam değişkeni tanımlı değil.")
        sys.exit(1)

    # 1. Veriyi yükle ve filtrele
    path = Path(args.input)
    print(f"\n📂 Yükleniyor: {path}")
    all_qs = load_questions(path)
    print(f"   Toplam kayıt: {len(all_qs)}")

    vectors = [v for q in all_qs if (v := build_vector(q)) is not None]
    skipped = len(all_qs) - len(vectors)
    print(f"   Atlanacak (excluded/embedding yok): {skipped}")
    print(f"   Upsert edilecek: {len(vectors)}")

    if args.dry_run:
        print("\n🔍 Dry-run modu — işlem yapılmıyor.")
        print("   Örnek vektör:")
        sample = vectors[0]
        print(f"     id       : {sample['id']}")
        print(f"     lesson   : {sample['metadata']['lesson']}")
        print(f"     unit     : {sample['metadata']['unit']}")
        print(f"     embedding: [{sample['values'][0]:.6f}, {sample['values'][1]:.6f}, ...] ({len(sample['values'])} dim)")
        return

    # 2. Pinecone bağlantısı
    pc = Pinecone(api_key=api_key)

    # 3. Index oluştur (yoksa)
    existing = [idx.name for idx in pc.list_indexes()]
    if INDEX_NAME not in existing:
        print(f"\n🆕 Index oluşturuluyor: {INDEX_NAME}")
        pc.create_index(
            name=INDEX_NAME,
            dimension=DIMENSION,
            metric=METRIC,
            spec=ServerlessSpec(cloud="aws", region=REGION),
        )
        # Index hazır olana kadar bekle
        print("   Hazır olana kadar bekleniyor...", end="", flush=True)
        for _ in range(30):
            time.sleep(2)
            status = pc.describe_index(INDEX_NAME).status
            print(".", end="", flush=True)
            if status.get("ready"):
                break
        print(" hazır!")
    else:
        print(f"\n✅ Index mevcut: {INDEX_NAME}")

    index = pc.Index(INDEX_NAME)

    # 4. Upsert
    ns_label = f" (namespace={args.namespace})" if args.namespace else ""
    print(f"\n🚀 Upsert başlıyor{ns_label}...")
    t0 = time.time()
    upserted = upsert_batches(index, vectors, namespace=args.namespace)
    elapsed  = time.time() - t0

    print(f"\n✅ Tamamlandı: {upserted} vektör → {elapsed:.1f}s")

    # 5. Özet
    stats = index.describe_index_stats()
    print(f"\n📊 Index istatistikleri:")
    print(f"   Toplam vektör: {stats.total_vector_count}")
    if stats.namespaces:
        for ns, info in stats.namespaces.items():
            label = ns or "(default)"
            print(f"   Namespace [{label}]: {info.vector_count} vektör")


if __name__ == "__main__":
    main()
