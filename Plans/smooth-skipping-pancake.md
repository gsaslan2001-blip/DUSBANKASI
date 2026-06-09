# Anki Cloze Kart Üretim Pipeline'ı — İmplementasyon Planı

## Context

DUSBANKASI'ndaki `notebooklm_mcp_exhaust.py` akışı, PDF'lerden **anahtar kavram (anchor) çıkarma** yaklaşımıyla soru üretiyor. Aynı akışın Anki cloze deletion kart üretimi için klonlanması isteniyor. Fark: sorular Supabase yerine **Pinecone `anki` indexine** yazılacak, ve LLM'e gönderilen prompt DUS soru promptu yerine **Cloze v3.0 promptu** olacak.

## Mimari Karşılaştırma

| Bileşen | DUSBANKASI (Mevcut) | Anki Cloze (Yeni) |
|---|---|---|
| Kaynak | NotebookLM MCP (PDF) | NotebookLM MCP (PDF) — **AYNI** |
| Anchor çıkarma | PROMPT_ANCHOR | PROMPT_ANCHOR — **AYNI** |
| Kapsam sınıflama | Supabase (questions tablosu) | Pinecone `anki` index (namespace) |
| LLM Prompt | Master Prompt (30 DUS sorusu) | Cloze v3.0 Prompt (TSV çıktı) |
| Çıktı formatı | JSON dizisi | TSV (Text[TAB]Başlık[TAB]Extra) |
| Kalite gate | `shared.validate_question_batch` | Cloze öz-denetim (Bölüm 11) + dedup |
| Hedef DB | Supabase (`questions` tablosu) | Pinecone `anki` index (3072-dim) |
| Embedding | OpenAI `text-embedding-3-small` (1536) | OpenAI `text-embedding-3-large` (3072) |

## Hedeflenen Dosya Yapısı

```
scripts/
├── notebooklm_mcp_exhaust.py      # Mevcut — DUS soru üretimi (DOKUNULMAYACAK)
├── notebooklm_mcp_cloze.py        # YENİ — Anki cloze kart üretimi
├── cloze_pipeline.py              # YENİ — Çoklu ders/ünite orkestratörü (opsiyonel)
├── shared.py                      # Mevcut — Supabase CRUD (DOKUNULMAYACAK)
├── cloze_shared.py                # YENİ — Pinecone anki CRUD + cloze parse/validate
├── config.py                      # Mevcut — Pinecone anki config'i eklenecek
└── lib/
    └── pinecone_client.py         # Mevcut — Pinecone bağlantısı (anki index için genişletilecek)
```

## Adım Adım İmplementasyon

### Adım 1: Config genişletme (`scripts/config.py`)

Eklenecekler:
```python
# Pinecone Anki Index
ANKI_INDEX_HOST = "https://anki-0crkhvy.svc.aped-4627-b74a.pinecone.io"
ANKI_INDEX_NAME = "anki"
ANKI_EMBED_DIM = 3072
ANKI_EMBED_MODEL = "text-embedding-3-large"

# Cloze pipeline
CLOZE_CHUNK_SIZE = 25          # anchor chunk boyutu
CLOZE_MAX_BATCHES = 15         # birim başına maksimum batch
CLOZE_SATURATION_THRESHOLD = 2 # doygunluk eşiği
```

### Adım 2: Pinecone Anki CRUD modülü (`scripts/cloze_shared.py`)

Bu modül `shared.py`'nin Pinecone muadili olacak. İçerecekleri:

```python
# 2a. Embedding fonksiyonu
def embed_cloze_cards(cards: list[dict]) -> list[list[float]]:
    """OpenAI text-embedding-3-large ile 3072-dim vektör üretir."""
    # card["vektorlenecek_metin"] alanını kullanır
    # Batch size: 128, retry: 3

# 2b. Pinecone upsert (HTTP)
def upsert_to_pinecone(cards: list[dict], namespace: str) -> bool:
    """Kartları Pinecone anki indexine yazar.
    Schema: id=guid, values=embedding, metadata={text, ders, unite, kart_tipi, baslik, extra}
    Chunk size: 100, retry: 3
    """

# 2c. Kapsam sorgulama
def get_existing_vectors(namespace: str) -> list[dict]:
    """Namespace'teki tüm vektörleri çeker (metadata.text ile kapsam kıyaslaması için)."""
    # Pagination ile fetch (limit=1000, pagination_token)

# 2d. Cloze TSV parser
def parse_cloze_response(text: str) -> list[dict]:
    """LLM çıktısındaki TSV'yi kart listesine çevirir.
    İlk iki satır: #separator:tab, #html:false
    Kart satırları: Text[TAB]Başlık[TAB]Extra
    Son satır: Kart sayısı: N
    """

# 2e. Cloze kalite validasyonu
def validate_cloze_cards(cards: list[dict]) -> tuple[list, list]:
    """Her kartı cloze öz-denetim kurallarından geçirir:
    - 3 alan var mı (TAB ile ayrılmış)
    - {{c1::...}} formatı doğru mu
    - Başlık sızıntısı var mı (Bölüm 6 kuralı)
    - Atomiklik ihlali var mı
    - Liste saydırma yapılmış mı
    """

# 2f. Anchor kapsam sınıflama (shared.py'den uyarlanmış)
def classify_anchors_pinecone(anchors: list[str], namespace: str) -> tuple[list, list]:
    """Pinecone'daki mevcut kart metinleriyle anchor'ları kıyaslar.
    Eşik: 0.60 kelime overlap.
    Döner: (covered, uncovered)
    """

# 2g. Yerleşik PROMPT'lar
PROMPT_ANCHOR = """..."""  # notebooklm_mcp_exhaust.py'dekinin aynısı

PROMPT_CLOZE_MASTER = """..."""  # Cloze kart promptu (kullanıcının verdiği .txt)
# Yukarıdaki promptun sonuna "--- METİN BAŞLANGIÇ ---" yerine
# kaynak metnin NotebookLM'den alınacak.
```

### Adım 3: Ana pipeline (`scripts/notebooklm_mcp_cloze.py`)

`notebooklm_mcp_exhaust.py`'nin yapısal klonu. Temel akış:

```
Her PDF (ünite) için:
  1. NotebookLM MCP bağlantısı kur
  2. Kaynak temizliği (önceki PDF'leri sil)
  3. PDF yükle (source_add)
  ─── Faz 0 ───
  4. PROMPT_ANCHOR → anahtar kavram listesini çıkar
  5. Anchor'ları parse et (parse_anchor_response)
  ─── Faz 1 ───
  6. Pinecone'dan namespace'teki mevcut kartları çek
  7. classify_anchors_pinecone() ile kapsam sınıfla
  ─── Faz 2 ───
  8. Uncovered anchor'ları 25'erli chunk'lara böl
  9. Her chunk için:
     a. PROMPT_CLOZE (kavram listesi + PDF metni) → NotebookLM'e gönder
     b. TSV yanıtını parse et (parse_cloze_response)
     c. Kalite validasyonu (validate_cloze_cards)
     d. Embedding üret (embed_cloze_cards)
     e. Pinecone upsert (upsert_to_pinecone)
     f. Kapsam güncelle
     g. Doygunluk kontrolü
  ─── Faz 3 ───
  10. Final kapsam raporu
  11. Kaynak temizliği
```

**Kritik farklar (notebooklm_mcp_exhaust.py'den):**
- `deploy_to_supabase()` yerine `upsert_to_pinecone()`
- `get_questions_for_unit()` yerine `get_existing_vectors()`
- `PROMPT_BATCH_1` / `PROMPT_CHUNK_TEMPLATE` yerine `PROMPT_CLOZE`
- Çıktı formatı: JSON değil TSV
- Embedding: 1536-dim değil 3072-dim
- Pinecone API key çevre değişkeninden: `PINECONE_API_KEY`

### Adım 4: LLM Prompt Tasarımı

İki prompt birleştirilecek:

**Sistem promptu (PROMPT_CLOZE_SYSTEM):**
- Cloze v3.0 promptunun "0. ROL" ve "1. TEMEL FELSEFE" bölümleri
- Format kuralları (Bölüm 2-9)
- Kalite standartları (Bölüm 10-14)

**Kullanıcı promptu (PROMPT_CLOZE_USER):**
```
Aşağıdaki kavramları birincil test nesnesi olarak kartlaştır. Her kavram en az bir kartın BİRİNCİL konusu olmalı.

KAVRAMLAR:
{kavram_listesi}

Kaynak metin:
{notebooklm_pdf_icerigi}

--- METİN BAŞLANGIÇ ---
[NotebookLM kaynak metni buraya gelecek]
```

### Adım 5: Ders → Namespace Eşleştirme

```python
LESSON_TO_ANKI_NS = {
    "Fizyoloji": "fizyoloji",
    "Protez": "protez",
    "Periodontoloji": "periodontoloji",
    "Histoloji": "histoloji",
    "Endodonti": "endodonti",
    "Patoloji": "patoloji",
    "Radyoloji": "radyoloji",
    "Cerrahi": "cerrahi",         # namespace mevcut değilse oluşturulacak
    "Biyokimya": "biyokimya",
    "Ortodonti": "ortodonti",
    "Restoratif": "restoratif",
    "Pedodonti": "pedodonti",
    "Mikrobiyoloji": "mikrobiyoloji",
    "Farmakoloji": "farmakoloji",
}
```

## Veri Akış Diyagramı

```
PDF (ünite)
    │
    ▼
┌─────────────────────────────┐
│ NotebookLM MCP (HTTP)       │
│ source_add → notebook_query │
└─────────────────────────────┘
    │
    ├── Faz 0: PROMPT_ANCHOR → ["Kavram 1", "Kavram 2", ..., "Kavram N"]
    │
    ├── Faz 1: Pinecone fetch → mevcut kart metinleri → classify → uncovered anchors
    │
    └── Faz 2: Uncovered anchors (25'li chunk)
                  │
                  ▼
         ┌──────────────────────────┐
         │ PROMPT_CLOZE (kavramlar) │
         │ NotebookLM → TSV çıktı   │
         └──────────────────────────┘
                  │
                  ▼
         ┌──────────────────────┐
         │ parse_cloze_response │
         │ validate_cloze_cards │
         └──────────────────────┘
                  │
                  ▼
         ┌──────────────────────────┐
         │ OpenAI embed (3072-dim)  │
         │ Pinecone upsert (anki)   │
         └──────────────────────────┘
```

## Doğrulama Planı

1. **Birim test**: `cloze_shared.py` fonksiyonları — parse, validate, classify
2. **Kuru çalıştırma**: `--dry-run` flag ile tek ünite (örn. Endodonti - Kök Kanal Anatomisi)
3. **Pinecone bağlantı testi**: MCP `pinecone` aracıyla `describe-index-stats` → namespace vektör sayısı artmalı
4. **Anki import testi**: Üretilen TSV'yi Anki'ye import edip kart formatını doğrula
5. **Dedup testi**: Aynı üniteyi tekrar çalıştır → uncovered anchor sayısı 0 olmalı (tam kapsam)

## Riskler ve Azaltmalar

| Risk | Azaltma |
|---|---|
| NotebookLM kaynak metni yeterli derinlikte değil | Anchor sayısına göre erken uyarı (PROMPT_ANCHOR'un "TOPLAM_KAVRAM" çıktısı kontrol edilir) |
| Cloze promptu TSV formatından sapıyor | `parse_cloze_response` hata durumunda ham yanıtı `recovery/raw/` altına kaydeder (shared._dump_raw_response benzeri) |
| Pinecone 3072-dim embedding maliyeti | OpenAI fiyatlandırması: ~$0.13/1M token (input), embedding başına ~$0.00013 (3072-dim). Tek ünite ~50-200 kart → $0.03-0.13 |
| Mevcut kartlarla çakışma (duplicate) | Anchor kapsam sınıflaması + upsert sonrası `anki_dedup.py` çalıştırılabilir |
| Namespace yoksa hata | `upsert_to_pinecone` öncesi namespace varlığı kontrol edilir, yoksa otomatik oluşturulur |
