# Anki Cloze Kart Üretim Pipeline'ı — Tam Referans Rehberi

> **Son güncelleme:** 2026-06-04
> **Versiyon:** v3.0 (Prompt minimizasyonu + FAZ 4 uncovered tekrar turları)
> **Durum:** Tüm kritik bug'lar düzeltildi. Prompt mimarisi yeniden tasarlandı. FAZ 4 uncovered akışı eklendi. Dry-run testi: %98.7 kapsam (239 kavram → 236 kartlaştırıldı).
> **Plan:** `CLOZE_PIPELINE_IMPLEMENTATION_PLAN.md` — Faz 1-4 uygulandı, Faz 5 isteğe bağlı.

---

# BÖLÜM A: GENEL BAKIŞ

## A1. PROJE KONSEPTİ

DUSBANKASI içindeki `notebooklm_mcp_exhaust.py` akışı, PDF'lerden **anahtar kavram (anchor) çıkarma** yaklaşımıyla DUS sorusu üretiyor. Aynı yapısal mimari klonlandı, ancak hedef değiştirildi: DUS sorusu yerine **Anki cloze deletion kartları** üretiliyor ve Supabase yerine **Pinecone `anki` indexine** yazılıyor.

### A1.1 Mimari Karşılaştırma

| Bileşen | DUSBANKASI (Mevcut) | Anki Cloze (Yeni) |
|---|---|---|
| Kaynak | NotebookLM MCP (PDF) | NotebookLM MCP (PDF) — **AYNI** |
| Anchor çıkarma | PROMPT_ANCHOR | PROMPT_ANCHOR — **AYNI** |
| Kapsam sınıflama | Supabase (questions tablosu) | Pinecone `anki` index (namespace) |
| LLM Prompt | Master Prompt (30 DUS sorusu, JSON) | Minimal operasyonel prompt (TSV) + Sistem prompt'u |
| Çıktı formatı | JSON dizisi | TSV (Text[TAB]Başlık[TAB]Extra) |
| Kalite gate | `shared.validate_question_batch` | `cloze_shared.validate_cloze_cards` |
| Hedef DB | Supabase `questions` tablosu | Pinecone `anki` index (3072-dim) |
| Embedding | OpenAI `text-embedding-3-small` (1536) | OpenAI `text-embedding-3-large` (3072) |
| Uncovered işleme | FAZ 5 ek turlar | FAZ 4 ek turlar (zorlama prompt'u ile) |

### A1.2 Üretim Süreci Özeti (6 Adım — v3.0)

```
1. PDF → NotebookLM'e yükle (source_add)
2. FAZ 0 → PROMPT_ANCHOR gönder → kavram listesi al
3. FAZ 1 → Pinecone'dan mevcut kartları çek → kapsanmış/kapsanmamış ayrımı
4. FAZ 2 → Kapsanmamış kavramları chunk'la → her chunk için cloze kart üret
5. FAZ 3 → İlk tur raporu (kapsam oranı, batch özeti)
6. FAZ 4 → Kapsanmayan kavramlar için zorlama turları → %98+ kapsam hedefi
```

### A1.3 v3.0'daki Kritik Mimari Değişiklikler (2026-06-04)

| Değişiklik | Eski (v2.0) | Yeni (v3.0) |
|---|---|---|
| Prompt mimarisi | Çift prompt (%90 tekrar) | Sistem prompt'u + minimal operasyonel prompt |
| PROMPT_CLOZE_MASTER boyutu | ~5.000 karakter | ~150 karakter (template) + anchor listesi |
| Google API hatası | `INVALID_ARGUMENT` (prompt ~7600 char) | Sorunsuz (prompt ~1500-1800 char) |
| FAZ 4 | Yoktu (sadece rapor) | Uncovered zorlama turları |
| FAZ 4 prompt'u | — | `PROMPT_CLOZE_UNCOVERED` (DOYGUNLUK yasak) |
| Doygunluk sinyali FAZ 4'te | — | Dinlenmez, yine de kartlara bakılır |
| `build_cloze_prompt()` imzası | `(anchors)` | `(anchors, lesson, unit)` |

---

# BÖLÜM B: DOSYA ENVANTERİ

## B1. Temel Pipeline Dosyaları

| Dosya | Konum | Satır | Rol |
|---|---|---|---|
| `cloze_shared.py` | `scripts/cloze_shared.py` | ~900 | Pinecone anki CRUD, TSV parse, cloze validasyon, anchor kapsam, embedding, 3 prompt, TSV consolidate, recovery |
| `notebooklm_mcp_cloze.py` | `scripts/notebooklm_mcp_cloze.py` | ~850 | Ana pipeline — MCP client, checkpoint/resume, 4-fazlı kart üretimi + FAZ 4 uncovered, session raporu, CLI + `--status` |
| `config.py` | `scripts/config.py` | ~112 | Konfigürasyon sabitleri (Pinecone, OpenAI, cloze pipeline, recovery) |
| `notebooklm_cloze_system_prompt_v3.md` | `notebooklm_cloze_system_prompt_v3.md` | ~135 satır | **NotebookLM defterine kopyalanan sistem prompt'u** — tüm kart kurallarının kanonik kaynağı |
| `CLOZE_PIPELINE_IMPLEMENTATION_PLAN.md` | `CLOZE_PIPELINE_IMPLEMENTATION_PLAN.md` | ~972 | 5 fazlık uygulama planı |
| `Cloze Üretim Rehber.md` | `Cloze Üretim Rehber.md` | bu dosya | Tam referans rehberi |

## B2. Yardımcı / Referans Dosyalar

| Dosya | Rol |
|---|---|
| `scripts/shared.py` | Supabase hedefli soru pipeline paylaşımlı modülü (cloze pipeline bunu kullanmaz) |
| `scripts/notebooklm_mcp_exhaust.py` | Referans alınan exhaust pipeline — FAZ 5 uncovered akışı buradan klonlandı |
| `scripts/add_questions.py` | Manuel soru ekleme aracı (Supabase hedefli, cloze ile ilgisi yok) |
| `scripts/run_exhaust.bat` | Exhaust soru üretim pipeline batch script |
| `api/explain.ts` | Vercel Edge API endpoint'i (cloze ile ilgisi yok) |

## B3. Pinecone Tarafı Referans Dosyaları

| Dosya | Konum | Rol |
|---|---|---|
| `anki_uploader.py` | `C:\...\Pinecone\scripts\anki_uploader.py` | Anki JSON → Pinecone upsert (referans alınan schema) |
| `anki_parser.py` | `C:\...\Pinecone\scripts\anki_parser.py` | Anki TXT export → JSON parser (cloze clean fonksiyonu alındı) |
| `embedding_utils.py` | `C:\...\Pinecone\scripts\embedding_utils.py` | Embedder factory (OpenAI 3072-dim referansı) |
| `smart_dedup_addon/` | `C:\...\Anki2\addons21\smart_dedup_addon\` | Anki eklentisi (Pinecone sync + dedup) |

---

# BÖLÜM C: PİNECONE ANKİ İNDEX KONFİGÜRASYONU

## C1. Index Özellikleri

```
Index adı:     anki
Host:          https://anki-0crkhvy.svc.aped-4627-b74a.pinecone.io
Dimension:     3072
Embedding:     OpenAI text-embedding-3-large
Metric:        cosine
Service:       Serverless, AWS us-east-1
Vektör sayısı: 13.087 (2026-06-04 itibarıyla, ortodonti Ünite 1 dahil)
```

## C2. Namespace'ler (14 ders)

| Namespace | Vektör | Durum |
|---|---|---|
| `periodontoloji` | 3.680 | Mevcut |
| `fizyoloji` | 3.494 | Mevcut |
| `endodonti` | 2.799 | Mevcut |
| `radyoloji` | 1.150 | Mevcut |
| `histoloji` | 976 | Mevcut |
| `patoloji` | 855 | Mevcut |
| `protez` | 110 | Mevcut |
| `ortodonti` | 23 | ✅ Üretim başladı (Ünite 1) |
| `cerrahi` | — | Oluşturulacak |
| `biyokimya` | — | Oluşturulacak |
| `restoratif` | — | Oluşturulacak |
| `pedodonti` | — | Oluşturulacak |
| `mikrobiyoloji` | — | Oluşturulacak |
| `farmakoloji` | — | Oluşturulacak |

## C3. Pinecone Kart Şeması (upsert edilen vektör kaydı)

```json
{
  "id": "clz_md5hash...",
  "values": [0.012, -0.034, ...],
  "metadata": {
    "text": "Ortodonti - BÜYÜME ve GELİŞİM | Kraniyofasiyal büyümede en önemli büyüme yeri {{c1::süturlar}}dır",
    "guid": "clz_md5hash...",
    "ders": "Ortodonti",
    "unite": "BÜYÜME ve GELİŞİM",
    "kart_tipi": "cloze",
    "baslik": "Ortodonti - BÜYÜME ve GELİŞİM - Kraniyofasiyal Büyüme",
    "extra": "Diğer büyüme yerleri: sinkondrozlar ve yüzeyler",
    "text_clean": "Kraniyofasiyal büyümede en önemli büyüme yeri süturlardır"
  }
}
```

Bu schema `Pinecone\scripts\anki_uploader.py` `build_vector()` fonksiyonu ile birebir uyumludur.

## C4. Pinecone API Limitleri ve Mevcut Kod

| İşlem | Limit | Mevcut Kod | Durum |
|---|---|---|---|
| `vectors/fetch` | maks 1000 ID/istek | Batch 100 | ✅ Güvenli |
| `vectors/upsert` | maks 100 vektör/istek | Batch 100 | ✅ Güvenli |
| `vectors/list` | metadata DÖNMEZ | ID list + fetch | ✅ F1-01 ile düzeltildi |
| `embed_texts` | maks 2048 token/giriş | Kontrol yok ⚠️ | Kart metinleri tipik olarak kısa, risk düşük |

---

# BÖLÜM D: VERİ AKIŞ DİYAGRAMI (TAM — v3.0)

```
PDF (ünite)
    │
    ▼
┌──────────────────────────────────────────┐
│ NotebookLM MCP (HTTP JSON-RPC 2.0)       │
│ source_add → notebook_query_start/poll   │
│ http://127.0.0.1:8000/mcp                │
│                                          │
│ Session: Mcp-Session-Id header           │
│ Auth: server_info → refresh_auth         │
│ Timeout: 600s (chat), 30dk (poll)        │
└──────────────────────────────────────────┘
    │
    ├── Adım 0: Cleanup (3 retry, FatalError)
    │   Eski kaynaklar temizlenir
    │   source_delete → source_list kontrol
    │
    ├── Adım 1: PDF Yükleme (F1-05: source ID garanti)
    │   source_add(wait=True, timeout=1500)
    │   Tam eşleşme → parçalı eşleşme → exception
    │
    ├── FAZ 0: Kavram Çapalama
    │   PROMPT_ANCHOR gönderilir
    │   parse_anchor_response() (F1-04: geniş format)
    │     - "1. Kavram", "1) Kavram", "1- Kavram", "1: Kavram"
    │     - "- Kavram", "• Kavram", "* Kavram"
    │     - Min 2 karakter (pH, IL gibi kısaltmalar)
    │     - TOPLAM_KAVRAM = N çıkarımı
    │   Anchor log: logs/cloze_anchor_{safe_unit}.txt
    │
    ├── FAZ 1: Pinecone Kapsam Kontrolü
    │   get_existing_card_texts(namespace) (F1-01: iki adımlı)
    │     ADIM 1: vectors/list → ID listesi (pagination)
    │     ADIM 2: vectors/fetch → batch metadata (100'lük)
    │   get_namespace_count(namespace) (F1-02: describe_index_stats)
    │   classify_anchors_pinecone() (F1-03: kelime seti eşleşmesi)
    │     - Corpus kelime seti (substring DEĞİL)
    │     - %60 tam kelime overlap eşiği
    │     - covered / uncovered ayrımı
    │
    ├── FAZ 2: Chunk Bazlı Cloze Kart Üretimi (İLK TUR)
    │   Uncovered anchors → 25'li chunk'lara bölünür
    │   Her chunk için:
    │       │
    │       ▼
    │   ┌──────────────────────────────────────┐
    │   │ build_cloze_prompt(chunk, lesson,    │
    │   │                     unit)            │
    │   │ PROMPT_CLOZE_MASTER + anchor listesi │
    │   │ + Ders/Ünite bağlamı                 │
    │   │ (minimal ~150 char template)         │
    │   └──────────────────────────────────────┘
    │       │
    │       ▼
    │   ┌──────────────────────────────────────┐
    │   │ client.chat.ask(NOTEBOOK_ID, prompt) │
    │   │ notebook_query_start → query_id      │
    │   │ Status polling: 3sn aralık, 30dk max │
    │   │ check_saturation() → "DOYGUNLUK" mı? │
    │   └──────────────────────────────────────┘
    │       │
    │       ▼
    │   ┌──────────────────────────────────────┐
    │   │ parse_cloze_response(text)           │
    │   │ - #separator/#html header tespiti    │
    │   │ - TAB ile Text/Baslik/Extra ayrımı   │
    │   │ - {{c1::...}} format kontrolü        │
    │   │ - clean_cloze() temizleme            │
    │   │ - vektorlenecek_metin oluşturma      │
    │   │ - Esnek parse (header yoksa)         │
    │   └──────────────────────────────────────┘
    │       │
    │       ▼
    │   ┌──────────────────────────────────────┐
    │   │ validate_cloze_cards(cards)          │
    │   │ 5 kriterli kalite kontrolü           │
    │   └──────────────────────────────────────┘
    │       │
    │       ▼
    │   ┌──────────────────────────────────────┐
    │   │ deploy_cards_to_pinecone()           │
    │   │ accepted → embed → Pinecone upsert   │
    │   └──────────────────────────────────────┘
    │       │
    │       ▼
    │   Kapsam güncelle → yeni kart metinleri
    │   existing_texts'e eklenir
    │   Doygunluk kontrolleri:
    │     - consecutive_dry >= SATURATION_THRESHOLD
    │     - batch_num >= CLOZE_MAX_BATCHES
    │     - Model "DOYGUNLUK" bildirirse
    │     - Tüm kavramlar kapsandıysa
    │
    ├── FAZ 3: İlk Tur Raporu
    │   - Kapsam oranı, batch özeti
    │   - Kapsanmayan kavram listesi
    │   - Uncovered log yazımı
    │
    └── FAZ 4: Uncovered Temizleme Turları (YENİ — v3.0)
        Kalan uncovered > 0 ve batch limiti dolmadıysa:
            │
            ▼
        ┌──────────────────────────────────────┐
        │ remaining = list(final_uncovered)    │
        │ while remaining + batch < MAX:       │
        │   chunk = remaining[:25]             │
        │   remaining = remaining[25:]         │
        └──────────────────────────────────────┘
            │
            ▼
        ┌──────────────────────────────────────┐
        │ build_cloze_uncovered_prompt(chunk)  │
        │ PROMPT_CLOZE_UNCOVERED (ZORLAMA)     │
        │ "HER kavram için en az 1 kart"       │
        │ "DOYGUNLUK bildirme — bu kavramlar   │
        │  henüz kartlaştırılmadı"             │
        └──────────────────────────────────────┘
            │
            ▼
        ┌──────────────────────────────────────┐
        │ client.chat.ask(NOTEBOOK_ID, prompt) │
        │ DOYGUNLUK sinyali DİNLENMEZ          │
        │ (gelse bile kart parse edilir)       │
        └──────────────────────────────────────┘
            │
            ▼
        ┌──────────────────────────────────────┐
        │ parse → validate → deploy            │
        │ (FAZ 2 ile aynı zincir)              │
        └──────────────────────────────────────┘
            │
            ▼
        ┌──────────────────────────────────────┐
        │ remaining'den kapsananları çıkar     │
        │ covered_now = classify(remaining)    │
        │ remaining -= covered_now             │
        │ Tümü kapsandıysa → "TÜM KAVRAMLAR   │
        │ KARTLAŞTIRILDI!"                      │
        └──────────────────────────────────────┘

NİHAİ RAPOR:
  - İlk tur + FAZ 4 sonrası nihai kapsam
  - Toplam üretim turu ve kart sayısı
  - Kapsanmayan kavram log'u
  - MERGED TSV konsolidasyonu
```

### D1. FAZ 4 vs FAZ 2 — Kritik Farklar

| Özellik | FAZ 2 (İlk Tur) | FAZ 4 (Uncovered) |
|---|---|---|
| Prompt | `PROMPT_CLOZE_MASTER` | `PROMPT_CLOZE_UNCOVERED` |
| Prompt tonu | "Çapa modu, DOYGUNLUK sinyali ver" | "ZORUNLU ÜRETİM, DOYGUNLUK bildirme" |
| DOYGUNLUK sinyali | ✅ Dinlenir → döngü durur | ❌ Dinlenmez → karta bakılır |
| Doygunluk eşiği | `consecutive_dry >= 2` → dur | Yok — boş batch atlanır, sonrakine geçilir |
| Hedef | Ağırlık merkezleri + doğal akış | Her kavramı zorla kartlaştır |
| Batch log öneki | `cloze_{unit}_batch{N}.txt` | `cloze_{unit}_faz4_batch{N}.txt` |
| Batch sonuç etiketi | `OK` / `BOŞ` / `DOYGUNLUK` | `FAZ4_OK` / `FAZ4_BOŞ` |

---

# BÖLÜM E: KULLANIM KILAVUZU

## E1. Ön Koşullar

```bash
# 1. NotebookLM MCP sunucusu çalışıyor olmalı
# v3.0: nlm serve kaldırıldı, yerine notebooklm-mcp kullanılıyor
notebooklm-mcp --transport http --host 127.0.0.1 --port 8000
# Varsayılan: http://127.0.0.1:8000/mcp

# 2. .env.local (proje kökünde) dosyasında şunlar tanımlı olmalı:
PINECONE_API_KEY=<pinecone_api_key>
OPENAI_API_KEY=<openai_api_key>

# 3. Python paketleri
pip install openai python-dotenv

# 4. NotebookLM sistem prompt'u deftere kopyalanmış olmalı
# Defter ID: config.py → NOTEBOOK_ID
# Prompt dosyası: notebooklm_cloze_system_prompt_v3.md
# ⚠️ BU ADIM KRİTİK: Sistem prompt'u olmadan kart kalitesi düşer
```

### E1.1 MCP Sunucusu Başlatma (güncel — 2026-06-04)

```bash
# nlm serve komutu kaldırıldı. Yerine:
notebooklm-mcp --transport http --host 127.0.0.1 --port 8000

# Kontrol:
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8000/mcp
# Başarılı: 405 (Method Not Allowed = POST endpoint'i aktif)

# Debug modu:
notebooklm-mcp --transport http --debug
```

## E2. CLI Komutları

```bash
# ─── Durum Sorgulama ───
# Tüm namespace'lerin güncel kart sayısını gösterir
python scripts/notebooklm_mcp_cloze.py --status --lesson Endodonti

# ─── Tek Ünite — Kuru Çalıştırma ───
# Pinecone'a yazmaz, sadece üretir ve gösterir
python scripts/notebooklm_mcp_cloze.py \
  --file "C:/PDFler/Endodonti/Kök Kanal Anatomisi.pdf" \
  --lesson Endodonti \
  --unit "Kök Kanal Anatomisi" \
  --dry-run

# ─── Tek Ünite — Gerçek Üretim ───
# Pinecone'a yazar, TSV oluşturur
# FAZ 0-2-3-4 otomatik çalışır
python scripts/notebooklm_mcp_cloze.py \
  --file "C:/PDFler/Endodonti/Kök Kanal Anatomisi.pdf" \
  --lesson Endodonti \
  --unit "Kök Kanal Anatomisi"

# ─── Toplu İşleme — Klasör ───
# Klasördeki tüm PDF'leri sırayla işler
# Checkpoint/resume ile kesinti sonrası kaldığı yerden devam
python scripts/notebooklm_mcp_cloze.py \
  --dir "C:/PDFler/Endodonti" \
  --lesson Endodonti

# ─── Ünite Adı Otomatik Türetme ───
# --unit belirtilmezse dosya adından otomatik türetilir:
# "01-Kök Kanal Anatomisi.pdf" → "Kök Kanal Anatomisi"
# "Ünite 5 - Periapikal Patoloji.pdf" → "Ünite 5 - Periapikal Patoloji"
```

## E3. Parametreler

| Parametre | Zorunlu | Açıklama |
|---|---|---|
| `--file` | evet* | Tek PDF/MD dosyası yolu |
| `--dir` | evet* | PDF/MD içeren klasör yolu |
| `--lesson` | evet | Ders adı (örn: Endodonti, Fizyoloji, Protez) |
| `--unit` | hayır | Ünite adı (belirtilmezse dosya adından türetilir) |
| `--dry-run` | hayır | Pinecone'a yazma, sadece üret ve göster |
| `--status` | hayır | Tüm namespace'lerin kart durumunu göster |

(*): `--file` veya `--dir`'den biri zorunlu.

## E4. Konfigürasyon Sabitleri (`config.py`)

| Sabit | Mevcut Değer | Açıklama |
|---|---|---|
| `ANKI_INDEX_HOST` | `https://anki-0crkhvy.svc...` | Pinecone anki index host |
| `ANKI_EMBED_DIM` | 3072 | Embedding boyutu |
| `ANKI_EMBED_MODEL` | `text-embedding-3-large` | OpenAI embedding modeli |
| `CLOZE_CHUNK_SIZE` | 25 | Anchor chunk boyutu |
| `CLOZE_MAX_BATCHES` | 15 | Birim başına maks batch (FAZ 2 + FAZ 4 toplam) |
| `CLOZE_SATURATION_THRESHOLD` | 2 | Doygunluk eşiği (ardışık düşük verimli batch — sadece FAZ 2) |
| `CLOZE_MIN_CARDS_PER_BATCH` | 3 | Altında kalan batch düşük verimli sayılır |
| `INTER_BATCH_COOLDOWN` | 5 | Batch'ler arası bekleme (saniye) |
| `COOLDOWN_BETWEEN_UNITS` | 25 | Üniteler arası bekleme (saniye) |
| `RETRY_BACKOFF` | `[30, 60, 120]` | Exponential backoff süreleri |
| `MAX_RETRIES` | 3 | Maks yeniden deneme |
| `PROMPT_CHAR_LIMIT` | 9500 | NotebookLM API güvenli sınır (artık aşılmıyor) |
| `NOTEBOOK_ID` | `a6570b2e-...` | NotebookLM defter ID'si |
| `MCP_URL` | `http://127.0.0.1:8000/mcp` | MCP sunucu adresi |

---

# BÖLÜM F: MODÜL DOKÜMANTASYONU

## F1. `cloze_shared.py` — Paylaşılan Modül (~900 satır)

### F1.1 Sabitler ve Eşleştirmeler

```python
LESSON_TO_ANKI_NS = {
    "Fizyoloji": "fizyoloji", "Protez": "protez",
    "Periodontoloji": "periodontoloji", "Histoloji": "histoloji",
    "Endodonti": "endodonti", "Patoloji": "patoloji",
    "Radyoloji": "radyoloji", "Cerrahi": "cerrahi",
    "Biyokimya": "biyokimya", "Ortodonti": "ortodonti",
    "Restoratif": "restoratif", "Pedodonti": "pedodonti",
    "Mikrobiyoloji": "mikrobiyoloji", "Farmakoloji": "farmakoloji",
}
```

### F1.2 Tam Fonksiyon Envanteri

| Fonksiyon | İmza | Görev | Faz |
|---|---|---|---|
| `lesson_to_namespace()` | `(lesson: str) -> str` | Ders adı → Pinecone namespace | — |
| `_get_openai_client()` | `() -> OpenAI` | Lazy OpenAI client (singleton) | — |
| `embed_texts()` | `(texts: list[str], dim=3072) -> list[list[float]]` | OpenAI batch embedding (batch 128, retry 3) | — |
| `_pinecone_request()` | `(endpoint, payload, method="POST") -> dict` | Pinecone HTTP POST/PUT (retry 3) | — |
| `_pinecone_get()` | `(endpoint, params) -> dict` | Pinecone HTTP GET (vectors/fetch için) | F1-01 |
| `upsert_to_pinecone()` | `(cards: list[dict], namespace: str) -> int` | Embed → Pinecone upsert (batch 100) | — |
| `get_existing_card_texts()` | `(namespace: str) -> list[str]` | İki adımlı: vectors/list ID → vectors/fetch metadata | F1-01 |
| `get_namespace_count()` | `(namespace: str) -> int` | describe_index_stats → vectorCount | F1-02 |
| `parse_cloze_response()` | `(text: str) -> list[dict]` | NotebookLM TSV → kart dict listesi | — |
| `_parse_loose_cloze()` | `(text: str) -> list[dict]` | Esnek parse (header yoksa) | — |
| `_dump_raw_response()` | `(text: str)` | Parse edilemeyen yanıtı recovery/raw/ altına yazar | — |
| `clean_cloze()` | `(text: str) -> str` | `{{c1::X}}` → `X` dönüşümü | — |
| `validate_cloze_cards()` | `(cards: list[dict]) -> tuple[list, list]` | 5 kriterli kalite kontrolü | — |
| `parse_anchor_response()` | `(text: str) -> tuple[list[str], int]` | Kavram listesi + TOPLAM_KAVRAM çıkarımı | F1-04 |
| `classify_anchors_pinecone()` | `(anchors, existing_texts) -> tuple[list, list]` | Kelime seti eşleşmesi ile covered/uncovered | F1-03 |
| `deploy_cards_to_pinecone()` | `(cards, lesson, unit, ns, dry_run) -> int` | validate → embed → upsert zinciri | — |
| `_dump_failed_cards()` | `(cards, lesson, unit)` | Embedding başarısız kartları recovery'e yazar | — |
| `consolidate_unit_tsv()` | `(lesson, unit_name, output_dir) -> str\|None` | Batch TSV'leri tek MERGED dosyada birleştirir | F4-02 |
| `save_cloze_tsv()` | `(cards, lesson, unit, output_dir) -> str` | Anki import TSV dökümü | — |
| `_inject_anchors()` | `(template, anchors, lesson, unit) -> str` | **YENİ v3.0** — Ortak anchor/lesson/unit enjeksiyonu | — |
| `build_cloze_prompt()` | `(anchors, lesson, unit) -> str` | **v3.0** — PROMPT_CLOZE_MASTER'a anchor enjekte eder | FAZ 2 |
| `build_cloze_uncovered_prompt()` | `(anchors, lesson, unit) -> str` | **YENİ v3.0** — PROMPT_CLOZE_UNCOVERED'a anchor enjekte eder | FAZ 4 |
| `check_saturation()` | `(response_text: str) -> bool` | "DOYGUNLUK" kelimesini kontrol eder | — |
| `chunk_list()` | `(lst: list, size: int) -> generator` | Listeyi sabit boyutlu dilimlere böler | — |

### F1.3 Prompt Mimarisi (v3.0 — YENİDEN TASARLANDI)

v3.0'ın en kritik değişikliği: **Tüm kart kuralları NotebookLM sistem prompt'una taşındı.** Runtime prompt'lar sadece operasyonel bağlam taşır.

#### Prompt Katmanları

```
┌─────────────────────────────────────────────┐
│ SİSTEM PROMPTU (NotebookLM defterinde)      │
│ notebooklm_cloze_system_prompt_v3.md        │
│ ~135 satır, tüm kart kurallarının kaynağı   │
│ Rol, filtre, 5 kart tipi, başlık sızıntısı, │
│ liste atomikliği, cloze kuralları,           │
│ semantik sızıntı, öz-denetim, TSV formatı,  │
│ few-shot örnekler, yasaklar, zorunluluklar, │
│ çapa modu, doygunluk sinyali                │
└─────────────────────────────────────────────┘
         │
         │ Her sorguda otomatik aktif
         ▼
┌─────────────────────────────────────────────┐
│ RUNTIME PROMPT (Python tarafından gönderilir)│
│ Sadece batch'e özgü veri:                   │
│ - Anchor listesi                            │
│ - Ders/Ünite adı                            │
│ - Kısa operasyonel direktif                 │
│ Toplam: ~150 char template + anchor listesi │
└─────────────────────────────────────────────┘
```

**Neden:** Eski sistemde `PROMPT_CLOZE_MASTER` (~5.000 char) sistem prompt'undaki kuralların %90'ını tekrar ediyordu. Anchor listesiyle birleşince ~7.600 char → Google API limitini (~4.000-5.000 char) aşıyor → `INVALID_ARGUMENT` hatası.

#### PROMPT_ANCHOR (FAZ 0)

```
Kaynağı satır satır tara. İçerdiği her bağımsız test edilebilir kavramı
numaralı liste halinde alt alta yaz.
Kurallar: benzer kavramlar ayrı satır, max 12 kelime, tablo satırları ayrı.
Son satır: TOPLAM_KAVRAM = N
```

Boyut: ~300 char. Hiç değişmedi — stabil.

#### PROMPT_CLOZE_MASTER (FAZ 2 — v3.0 Minimal)

```python
PROMPT_CLOZE_MASTER = r"""ÇAPA MODU: Aşağıdaki kavram listesindeki HER kavram en az bir kartın BİRİNCİL konusu olacak.

{ANCHOR_LIST}

Ders: {LESSON}
Ünite: {UNIT}

Tüm kart kuralları sistem prompt'unda tanımlı. TSV çıktısı üret. Yeni ezber-değeri bilgi kalmadıysa DOYGUNLUK sinyali ver.
"""
```

Boyut: ~150 char template + anchor listesi (25 kavramla ~1500-1800 char). Google limitinin rahat altında.

#### PROMPT_CLOZE_UNCOVERED (FAZ 4 — v3.0 Yeni)

```python
PROMPT_CLOZE_UNCOVERED = r"""ZORUNLU ÜRETİM: Aşağıdaki HER kavram için en az 1 cloze kartı üret. Atlanan kavram kabul edilmez.

{ANCHOR_LIST}

Ders: {LESSON}
Ünite: {UNIT}

Sistem prompt'undaki tüm TSV format ve kalite kuralları geçerli. Her kavramı BİRİNCİL konu yap. DOYGUNLUK bildirme — bu kavramlar henüz kartlaştırılmadı.
"""
```

Boyut: ~250 char template + anchor listesi. FAZ 4'e özel — "DOYGUNLUK bildirme" direktifi kritik.

### F1.4 Prompt Builder Fonksiyonları (v3.0)

```python
def _inject_anchors(template: str, anchors: list[str], lesson: str = "", unit: str = "") -> str:
    """Ortak anchor/lesson/unit enjeksiyonu — tüm prompt'lar için tek nokta."""
    anchor_str = "\n".join(f"- {a}" for a in anchors)
    return (template
            .replace("{ANCHOR_LIST}", anchor_str)
            .replace("{LESSON}", lesson or "")
            .replace("{UNIT}", unit or ""))

def build_cloze_prompt(anchors: list[str], lesson: str = "", unit: str = "") -> str:
    """FAZ 2 için: PROMPT_CLOZE_MASTER + anchor'lar."""
    return _inject_anchors(PROMPT_CLOZE_MASTER, anchors, lesson, unit)

def build_cloze_uncovered_prompt(anchors: list[str], lesson: str = "", unit: str = "") -> str:
    """FAZ 4 için: PROMPT_CLOZE_UNCOVERED + anchor'lar (zorlama, DOYGUNLUK yasak)."""
    return _inject_anchors(PROMPT_CLOZE_UNCOVERED, anchors, lesson, unit)
```

---

## F2. `notebooklm_mcp_cloze.py` — Ana Pipeline (~850 satır)

### F2.1 Sınıflar

**`NotebookLMMCPClient`** — `notebooklm_mcp_exhaust.py`'deki ile aynı yapı:
- JSON-RPC 2.0 over HTTP (`urllib.request`)
- Session tracking (`Mcp-Session-Id` header)
- `client.sources.list()` → notebook_get → source listesi
- `client.sources.add_file()` → source_add (F1-05: tam eşleşme → parçalı → exception)
- `client.sources.delete()` → source_delete (confirm:true)
- `client.chat.ask()` → start + status polling (3sn aralık, 30dk timeout)
- `client.refresh_auth()` → MCP refresh_auth
- SSE ve JSON yanıt formatlarını destekler

**Hata Sınıfları:**
- `RetryableError` — 502/503/504/timeout/connection → yeniden dene
- `AuthError` — 401/403/authentication → auth yenile
- `DataError` — json/parse/decode → log ve devam et
- `FatalError` — not found/invalid → pipeline'ı durdur

**`classify_error(e)`** — Exception mesajından hata sınıflandırması.

### F2.2 Yardımcı Fonksiyonlar

| Fonksiyon | Görev |
|---|---|
| `ensure_auth()` | MCP auth kontrolü: server_info → refresh_auth → live_check |
| `_safe_filename()` | Windows geçersiz karakter temizliği + uzunluk sınırlama |
| `_load_progress()` | Tamamlanan üniteleri progress JSON'dan yükle |
| `_save_progress()` | Tamamlanan üniteleri progress JSON'a yaz |
| `_natural_sort_key()` | Dosya adından sayısal sıralama anahtarı |
| `_resolve_inputs()` | `--dir`/`--file` → Path listesi |
| `_derive_unit_name()` | Dosya adından ünite adı türetme |

### F2.3 Ana Fonksiyon: `process_unit_cloze()`

```python
async def process_unit_cloze(
    client: NotebookLMMCPClient,
    lesson: str,
    unit_name: str,
    file_path: str,
    dry_run: bool = False
) -> bool
```

**Detaylı İş Akışı (v3.0 — 6 adım):**

| Adım | İşlem | Detay |
|---|---|---|
| 0a | Auth kontrolü | `ensure_auth(client)` → başarısızsa FatalError |
| 0b | Notebook temizliği | 3 deneme retry, başarısızsa FatalError |
| 0c | PDF yükleme | `source_add(wait=True, timeout=1500)`, ID garanti |
| 1 | **FAZ 0** — Kavram Çapalama | `PROMPT_ANCHOR` → `parse_anchor_response()` |
| 2 | **FAZ 1** — Kapsam Kontrolü | `get_existing_card_texts()` → `classify_anchors_pinecone()` |
| 3 | **FAZ 2** — Kart Üretimi (İlk Tur) | Chunk döngüsü: `build_cloze_prompt()` → MCP → parse → validate → deploy |
| 4 | **FAZ 3** — İlk Tur Raporu | Kapsam oranı, batch özeti, uncovered log |
| 5 | **FAZ 4** — Uncovered Temizleme | `build_cloze_uncovered_prompt()` → zorlama turları → kapsam %98+ |
| 6 | **Nihai Rapor** | FAZ 2 + FAZ 4 sonrası tam kapsam, MERGED TSV |

### F2.4 Döngü Kontrolleri

```
FAZ 2:
  SATURATION: consecutive_dry >= CLOZE_SATURATION_THRESHOLD (2)
    → "Doygunluk eşiği — Durduruluyor."

  BATCH LIMIT: batch_num >= CLOZE_MAX_BATCHES (15)
    → "Maks batch limiti — Durduruluyor."

  DOYGUNLUK: Model yanıtında "DOYGUNLUK" kelimesi
    → "Model DOYGUNLUK bildirdi." → FAZ 2 durur, FAZ 3'e geçer

  TÜM KAPSANDI: total_remaining == 0
    → "TÜM KAVRAM KARTLAŞTIRILDI!"

FAZ 4:
  BATCH LIMIT: batch_num >= CLOZE_MAX_BATCHES (15)
    → "batch limiti aşıldı"

  DOYGUNLUK: ❌ DİNLENMEZ — "Model DOYGUNLUK bildirdi — yine de karta bakılıyor."

  TÜM KAPSANDI: remaining listesi boşaldı
    → "FAZ 4: TÜM KAVRAMLAR KARTLAŞTIRILDI!"
```

### F2.5 Checkpoint/Resume Sistemi

```
--dir modunda:
  main_async() başında:
    _load_progress(lesson) → tamamlanan uniteler kümesi
  Her dosya için:
    unit_name completed_units'te varsa → ATLA
  Başarılı tamamlamada:
    completed_units.add(unit_name)
    _save_progress(lesson, completed_units)

Progress dosyası: scripts/logs/{lesson}_progress.json
Format: {"completed": ["Ünite 1", "Ünite 2", ...]}
```

---

# BÖLÜM G: KALİTE VALİDASYON SİSTEMİ

## G1. validate_cloze_cards() — 5 Kriterli Reddetme Mekanizması

| # | Kriter | Kod | Açıklama |
|---|---|---|---|
| 1 | Cloze formatı yok | `cloze_format_yok` | `{{c` metinde bulunamadı |
| 2 | Cloze boş/çok kısa | `cloze_bos_veya_cok_kisa` | Cloze temizlenince <2 kelime |
| 3 | Başlık sızıntısı | `baslik_sizintisi:{kelime}` | Cevabın anlamlı kelimelerinden herhangi biri başlığın son seviyesinde geçiyor |
| 4a | Çoklu cloze saydırma | `coklu_cloze_saydirma` | 3+ farklı c numarası (c1, c2, c3...) → kesin red |
| 4b | Tek c çoklu cloze | `tek_c_cok_cloze_saydirma_suphesi` | Tümü c1 ama 3+ cloze → şüpheli |
| 5 | Semantik sızıntı | `semantik_sizinti_suphesi:{kelime}` | "dezavantaj/avantaj/risk/neden/komplikasyon" cloze'dan hemen önce |

> **Not — Prompt düzeyinde yakalanan ek sızıntı türleri (§6 sistem prompt'u):**
> - **Tautoloji sızıntısı**: Cümledeki başka kelimeler cevabı eş anlamlı olarak açıklıyor (örn. `{{c1::vertikal}} yönde aç-kapa`). Python validasyonunda tespit edilmez, sistem prompt'undaki §7 öz-denetimle önlenir.
> - **Döngüsel tanım kartı**: Cümle hem terimi hem tanımını birlikte içeriyor (örn. `premolar dişlerin {{c1::temas noktaları}} arasındaki mesafeye interpremolar mesafe denir`). Hangi tarafı gizlersen diğer taraf cevabı verir. Sistem prompt'u §2 ile önlenir.

### G1.1 Başlık Sızıntısı Kontrolü Detayı

```
1. Cloze cevaplarını çıkar: CLOZE_RE.findall(text_raw)
2. Başlığı seviyelere ayır: re.split(r'\s*[-|]\s*', baslik)
3. Son seviyeyi al: last_level
4. Her cloze cevabı için:
   a. Anlamlı kelimeleri çıkar (≥3 harf, stop-word değil)
   b. Her kelimeyi last_level'da ara
   c. Herhangi biri bulunursa → sızıntı
```

Stop-word listesi: `ile, için, olan, gibi, veya, bir, bu, ve, de, da`

### G1.2 Çoklu Cloze Kontrolü Detayı

```
unique_c_nums > 2 → coklu_cloze_saydirma (KESİN RED)
  Örn: {{c1::A}}, {{c2::B}}, {{c3::C}} → 3 farklı c → RED

cloze_matches >= 3 AND unique_c_nums == 1 → tek_c_cok_cloze_saydirma_suphesi
  Örn: {{c1::A}}, {{c1::B}}, {{c1::C}} → 3 tane c1 → ŞÜPHELİ

unique_c_nums == 2 (c1+c2) → KABUL (kıyas kartı)
  Örn: {{c1::X}} özelliği {{c2::Y}} den farklıdır → GEÇER
```

## G2. Validasyon Zinciri

```
Kart listesi
    │
    ▼
validate_cloze_cards()
    ├── accepted → metadata ekle (ders, unite)
    │       │
    │       ▼
    │   embed_texts() → 3072-dim vektörler
    │       │
    │       ▼
    │   upsert_to_pinecone() → Pinecone
    │       │
    │       ├── başarılı → yazıldı
    │       └── başarısız → _dump_failed_cards()
    │
    └── rejected → log (reason_counts özeti)
```

### G2.1 Gerçek Test Sonuçlarında Validasyon Dağılımı

Ortodonti Ünite 1 dry-run testinde (165 kart):

| Kriter | Red Sayısı |
|---|---|
| Başlık sızıntısı | 5 (Batch 1) + 1 (FAZ4 Batch 1) |
| Diğer kriterler | 0 |
| **Toplam red** | **6 / 171 = %3.5** |
| **Kabul** | **165** |

---

# BÖLÜM H: EMBEDDING DETAYLARI

```
Model:        OpenAI text-embedding-3-large
Dimension:    3072
Batch size:   128 (embedding), 100 (Pinecone upsert)
Retry:        3 deneme, exponential backoff (1s, 2s, 4s)
Rate-limit:   0.3sn batch'ler arası (embedding), 0.5sn (upsert)
Maliyet:      ~$0.00013/embedding (3072-dim)
              Tek ünite ~50-200 kart → $0.03-0.13
              Tüm ders ~10.000 kart → ~$1.30
```

---

# BÖLÜM I: NOTEBOOKLM SİSTEM PROMPTU (v3.0)

## I1. Konum

```
C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\notebooklm_cloze_system_prompt_v3.md
```

⚠️ **BU DOSYA `notebooklm_cloze_system_prompt.txt` DEĞİLDİR.** Eski `.txt` dosyası silinmiştir. Güncel sistem prompt'u `.md` uzantılıdır.

## I2. NotebookLM Defteri

```
Notebook ID: a6570b2e-36e5-4a84-8438-8460ad0329f8
URL: https://notebooklm.google.com/notebook/28b067b0-76eb-40de-b417-445dfc138c1b?authuser=1
```

## I3. Prompt Yapısı (11 Bölüm)

| # | Bölüm | İçerik |
|---|---|---|
| 0 | ROL | DUS Anki cloze kart tasarım uzmanı, tüm diş hekimliği branşlarına hakim |
| 1 | GİZLİ ANALİZ | `<analiz>` etiketi — 9 adımlı planlama (kullanıcı görmez) |
| 2 | STRATEJİK FİLTRE | Zorunlu yakalanacaklar vs Yasaklı free-recall. Üst tavan YOK |
| 3 | KART TİPLERİ | 5 tip: T1 Terim/İsim, T2 Spot/Sayı, T3 Kıyas, T4 Klinik Karar, T5 Liste Üyesi |
| 4 | BAŞLIK SIZINTI | Mekanik algoritma + 2 worked example (A: sızıntı, B: sızıntı yok) |
| 5 | LİSTE ATOMİKLİK | Saydırma YASAK, N üye → N kart, 2 istisna (bölünemez spot, kıyas) |
| 6 | CLOZE & SEMANTİK | Cloze kuralları + semantik sızıntı testi + kaynak sadakati |
| 7 | ÖZ-DENETİM | 12 maddeli checklist (her kart TSV yazılmadan önce) |
| 8 | ÇIKTI FORMATI | TSV: #separator:tab, Text[TAB]Başlık[TAB]Extra + 7 few-shot örnek |
| 9 | YASAKLAR-ZORUNLULUKLAR | 11 yasak + 4 zorunluluk |
| 10 | ÇAPA MODU | Her kavram birincil konu, listede olmayanı birincil yapma |
| 11 | DOYGUNLUK SİNYALİ | Son satıra DOYGUNLUK yaz, pipeline okur |

## I4. Örnek Çıktı Formatı

```
#separator:tab
#html:false
Kronik apikal periodontitisin akut alevlenmesiyle ortaya çıkan akut apikal apse {{c1::Phoenix apsesi}} olarak adlandırılır	Endodonti - Periapikal Patoloji - Apse Tipleri	Gerçek akut apikal apseden farkı: önceden var olan kronik lezyonun alevlenmesidir
Kök kanal tedavisinde çalışma boyu, radyografik apeksten {{c1::0,5-1 mm}} kısa belirlenir	Endodonti - Çalışma Boyu - Referans Değerler	Hedef: apikal konstriksiyon (minör foramen)
Kart sayısı: 2
```

## I5. Prompt Mimarisi (v3.0 — Sistem Prompt'u Merkezli)

v3.0'da prompt mimarisi kökten değişti. Eski sistemde iki prompt aynı kuralları tekrar ediyordu:

| Seviye | Konum | v2.0 (Eski) | v3.0 (Yeni) |
|---|---|---|---|
| **Sistem Prompt'u** | `notebooklm_cloze_system_prompt_v3.md` (defterde) | Tüm kurallar | Tüm kurallar (tek kaynak) |
| **Runtime Prompt** | `cloze_shared.py` → `PROMPT_CLOZE_MASTER` | ~5.000 char, kuralları tekrar | ~150 char, sadece operasyonel |
| **Runtime Prompt** | `cloze_shared.py` → `PROMPT_CLOZE_UNCOVERED` | — (yoktu) | ~250 char, FAZ 4 zorlama |

**v3.0 felsefesi:** Sistem prompt'u tüm kalite kurallarının tek ve kanonik kaynağıdır. Runtime prompt'lar sadece "hangi batch'teyiz, hangi kavramları hedefliyoruz" bilgisini taşır. Bu sayede:
- Prompt boyutu ~7.600 char → ~1.500 char düştü
- Google API `INVALID_ARGUMENT` hatası tamamen çözüldü
- Sistem prompt'u tek bir yerden güncelleniyor (`.md` dosyası → deftere kopyala)
- Kart kalitesi düşmedi (sistem prompt'u aynı kuralları içeriyor)

### I5.1 Prompt Güncelleme Protokolü

Sistem prompt'unda değişiklik yapmak için:

1. `notebooklm_cloze_system_prompt_v3.md` dosyasını düzenle
2. NotebookLM defterine (a6570b2e) kopyala
3. Pipeline'ı yeniden başlat — yeni prompt hemen aktif olur
4. Runtime prompt'lara (`PROMPT_CLOZE_MASTER`, `PROMPT_CLOZE_UNCOVERED`) dokunma — onlar sadece operasyonel bağlam taşır

---

# BÖLÜM J: HATA KURTARMA VE RECOVERY

## J1. Hata Kurtarma Stratejileri

| Hata Tipi | Sınıf | Kurtarma |
|---|---|---|
| 502/503/504/timeout/connection | `RetryableError` | Exponential backoff (30-120s), max 3 deneme |
| 401/403/auth | `AuthError` | `refresh_auth()` → `live_check()`. Başarısızsa `nlm login --force` |
| JSON parse hatası | `DataError` | Ham yanıt recovery/raw/ altına kaydedilir |
| Kaynak bulunamadı | `FatalError` | Pipeline durdurulur |
| **Google INVALID_ARGUMENT** | `FatalError` | **v3.0'da ÇÖZÜLDÜ** — prompt boyutu minimize edildi |

## J2. Batch Seviyesinde Auth Kurtarma

Batch sırasında auth hatası gelirse:
1. Hata yakalanır → `classify_error()` → `AuthError`
2. `ensure_auth()` ile auth yenilenir
3. Başarılıysa aynı batch tekrar denenir
4. Başarısızsa `FatalError` fırlatılır

## J3. Recovery Dosyaları

```
scripts/recovery/
├── pending/                          # RECOVERY_DIR
│   └── embed_failed_{lesson}_{timestamp}.json   # embedding başarısız kartlar
├── rejected/                         # REJECTED_DIR
└── ../raw/                           # raw/
    └── cloze_unparsed_{timestamp}.txt           # Parse edilemeyen ham yanıtlar
```

## J4. Yaygın Hatalar ve Çözümleri

### "MCP sunucusuna bağlanılamadı"
```bash
# v3.0: nlm serve KULLANILMAZ. Yerine:
notebooklm-mcp --transport http --host 127.0.0.1 --port 8000

# Auth yenileme:
nlm login --force
```

### "OPENAI_API_KEY tanımlı değil"
```bash
# Proje kökündeki .env.local dosyasına ekle:
OPENAI_API_KEY=sk-...
```

### "Pinecone HTTP 401"
```bash
# .env.local dosyasına ekle:
PINECONE_API_KEY=pcsk_...
```

### TSV parse başarısız
Ham yanıt `scripts/../raw/cloze_unparsed_*.txt` altına kaydedilir. Buradan manuel kurtarılabilir.

### "embed_texts: openai paketi yüklü değil"
```bash
pip install openai
```

### Notebook temizlenemedi
```
FatalError: "Notebook temizlenemedi ({unit_name}). Manuel temizlik gerekiyor."
→ https://notebooklm.google.com adresinden defteri aç, tüm kaynakları elle sil.
```

### Google INVALID_ARGUMENT (v2.0'da sık, v3.0'da ÇÖZÜLDÜ)
```
Sebep: Runtime prompt ~7.600 char → Google API limitini aşıyor.
Çözüm (v3.0): PROMPT_CLOZE_MASTER ~150 char'a indirildi.
              Tüm kurallar sistem prompt'unda.
Hâlâ olursa: notebooklm_cloze_system_prompt_v3.md deftere kopyalandı mı kontrol et.
```

---

# BÖLÜM K: TEST SONUÇLARI VE DOĞRULAMA

## K1. Standalone Test Sonuçları (2026-06-03, v1.0)

```
Test 1:  Ders → Namespace (14 ders)          ✅
Test 2:  TSV Parse (tam format)              ✅
Test 3:  Cloze Validasyon (sızıntı tespiti)  ✅
Test 4:  Anchor Parse (TOPLAM_KAVRAM)        ✅
Test 5:  Coverage Classification (%60)       ✅
Test 6:  TSV Export (Anki formatı)           ✅
Test 7:  Prompt Building (anchor enj.)       ✅
Test 8:  Chunking (25'li bölme)              ✅
Test 9:  Saturation Detection                ✅
Test 10: Ders Eksiksizlik (14 ders → ns)     ✅

SONUÇ: 10/10 BAŞARILI
```

## K2. Faz Düzeltme Testleri (2026-06-03, v2.0)

```
F1-01 — F1-05: Pinecone + parse düzeltmeleri   ✅ 5/5
F2-01 — F2-05: Checkpoint + auth kurtarma       ✅ 5/5
F3-01 — F3-04: Validasyon + recovery             ✅ 4/4
F4-01 — F4-03: Rapor + TSV + CLI                 ✅ 3/3

TOPLAM: 17/17 BAŞARILI
```

## K3. Prompt Optimizasyonu Testi (2026-06-04, v3.0)

```
Test A: MCP basit sorgu (5 char)                ✅ Anında yanıt
Test B: MCP orta sorgu (200 char Turkish)        ✅ Kart üretti
Test C: PROMPT_ANCHOR (887 char)                 ✅ 188 kavram
Test D: PROMPT_CLOZE_MASTER kısa (2014 char)     ✅ Kart üretti
Test E: PROMPT_CLOZE_MASTER tam + 3 anchor       ❌ INVALID_ARGUMENT (6395 char)
         ↓ Kök neden: Google ~4000-5000 char limiti
         ↓ Çözüm: Prompt minimize edildi
Test F: Yeni PROMPT_CLOZE_MASTER + 25 anchor     ✅ 1502 char — sorunsuz
```

## K4. Tam Dry-Run Testi: Ortodonti Ünite 1 (2026-06-04, v3.0)

```
FAZ 0: 239 kavram çapalandı                     ✅
FAZ 1: Pinecone kapsam 0/239 (yeni ders)        ✅
FAZ 2: Batch 1 → 20 kart (5 başlık sızıntısı)   ✅
       Batch 2 → DOYGUNLUK                       ✅
FAZ 3: İlk tur raporu %10 kapsam                 ✅
FAZ 4: Batch 1 → 24 kart                         ✅
       Batch 2 → 25 kart                         ✅
       Batch 3 → 25 kart                         ✅
       Batch 4 → 25 kart                         ✅
       Batch 5 → 25 kart                         ✅
       Batch 6 → 21 kart (son chunk)             ✅
       TÜM KAVRAMLAR KARTLAŞTIRILDI!             ✅

NİHAİ: 239 çapa → 236 kartlaştırılmış (%98.7)
       165 kart üretildi (6 red: başlık sızıntısı)
       Kapsanmayan: 3 kavram

SONUÇ: BAŞARILI — %98.7 kapsam
```

---

# BÖLÜM L: SOĞUK BAŞLANGIÇ CHECKLIST'İ

Yeni bir ajan/oturum bu pipeline'ı çalıştırmak istediğinde:

## L1. Ortam Kontrolü
- [ ] `PINECONE_API_KEY` tanımlı mı? (proje kökü `.env.local`)
- [ ] `OPENAI_API_KEY` tanımlı mı?
- [ ] `openai` Python paketi yüklü mü? (`pip install openai`)
- [ ] NotebookLM MCP sunucusu çalışıyor mu?
  ```bash
  notebooklm-mcp --transport http --host 127.0.0.1 --port 8000
  curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8000/mcp
  # Başarılı: 405
  ```

## L2. Pinecone Durumu
- [ ] `ANKI_INDEX_HOST` doğru mu? (`config.py`)
- [ ] `--status` ile namespace'leri kontrol et
- [ ] Hedef namespace mevcut mu? (ilk upsert'te otomatik oluşur)

## L3. NotebookLM Sistemi
- [ ] `notebooklm_cloze_system_prompt_v3.md` deftere kopyalandı mı? ⚠️ KRİTİK
- [ ] Doğru defter ID'si kullanılıyor mu? (`config.py` → `NOTEBOOK_ID`)
- [ ] MCP auth durumu kontrolü: `nlm login --force` gerekebilir

## L4. Kuru Çalıştırma
- [ ] `--dry-run` ile tek ünite test edildi mi?
- [ ] Anchor çıkarma çalışıyor mu? (FAZ 0)
- [ ] Pinecone kapsam sorgulama çalışıyor mu? (FAZ 1)
- [ ] Kart üretimi ve TSV formatı doğru mu? (FAZ 2)
- [ ] FAZ 4 uncovered turları çalışıyor mu?
- [ ] Konsol çıktısında `INVALID_ARGUMENT` hatası var mı? (v3.0'da olmamalı)

## L5. Gerçek Üretim
- [ ] `--dry-run` olmadan çalıştır
- [ ] Pinecone'da vektör sayısı arttı mı? (`--status` ile kontrol)
- [ ] `scripts/cloze_output/` altında TSV dosyası oluştu mu?
- [ ] MERGED TSV başarıyla oluştu mu?
- [ ] TSV Anki'ye import edilebiliyor mu?
- [ ] `scripts/logs/` altında FAZ 4 log'ları oluştu mu?

---

# BÖLÜM M: SORUN GİDERME KARTI

Tüm bilinen sorunlar, etkileri ve çözümleri:

| ID | Sorun | Etki | Faz | Durum |
|---|---|---|---|---|
| F1-01 | `vectors/list` metadata dönmüyor | 🔴 KRİTİK | 1 | ✅ DÜZELTİLDİ |
| F1-02 | `get_namespace_count()` sıfır döndürüyor | 🟠 YÜKSEK | 1 | ✅ DÜZELTİLDİ |
| F1-03 | Substring match → yanlış pozitif kapsam | 🟠 YÜKSEK | 1 | ✅ DÜZELTİLDİ |
| F1-04 | Kısa terimler ve format varyantları atlanıyor | 🟠 YÜKSEK | 1 | ✅ DÜZELTİLDİ |
| F1-05 | Source ID bulunamazsa sessiz hata | 🟠 YÜKSEK | 1 | ✅ DÜZELTİLDİ |
| F2-01 | `--dir` modunda resume yok | 🟡 ORTA | 2 | ✅ DÜZELTİLDİ |
| F2-02 | `CLOZE_MIN_CARDS_PER_BATCH` kullanılmıyor | 🟡 ORTA | 2 | ✅ DÜZELTİLDİ |
| F2-03 | Windows'ta geçersiz log dosya adları | 🟡 ORTA | 2 | ✅ DÜZELTİLDİ |
| F2-04 | Stale source bırakma riski | 🟡 ORTA | 2 | ✅ DÜZELTİLDİ |
| F2-05 | Batch-level auth kurtarma yok | 🟡 ORTA | 2 | ✅ DÜZELTİLDİ |
| F3-01 | Başlık sızıntısı tespiti eksik | 🟡 ORTA | 3 | ✅ DÜZELTİLDİ |
| F3-02 | Kart sayısı truncation sessiz geçer | 🟢 DÜŞÜK | 3 | ✅ DÜZELTİLDİ |
| F3-03 | Kıyas kartı yanlış reddedilebilir | 🟢 DÜŞÜK | 3 | ✅ DÜZELTİLDİ |
| F3-04 | Embedding hatasında kart kaybı | 🟢 DÜŞÜK | 3 | ✅ DÜZELTİLDİ |
| F4-01 | Session özet raporu yok | 🟢 DÜŞÜK | 4 | ✅ DÜZELTİLDİ |
| F4-02 | Batch TSV'ler ayrı dosya | 🟢 DÜŞÜK | 4 | ✅ DÜZELTİLDİ |
| F4-03 | `--status` CLI komutu yok | 🟢 DÜŞÜK | 4 | ✅ DÜZELTİLDİ |
| **V3-01** | **PROMPT_CLOZE_MASTER ~7.600 char → Google INVALID_ARGUMENT** | **🔴 KRİTİK** | **2** | **✅ v3.0'da ÇÖZÜLDÜ** |
| **V3-02** | **Model erken DOYGUNLUK bildirip kavram atlıyor** | **🟠 YÜKSEK** | **2** | **✅ FAZ 4 ile ÇÖZÜLDÜ** |
| **V3-03** | **MCP başlatma: `nlm serve` komutu kaldırıldı** | **🟠 YÜKSEK** | **0** | **✅ `notebooklm-mcp --transport http`** |

---

# BÖLÜM N: v3.0 DEĞİŞİKLİK KAYDI (2026-06-04)

## N1. Prompt Minimizasyonu

| Değişiklik | Detay |
|---|---|
| `PROMPT_CLOZE_MASTER` | ~5.000 char → ~150 char template |
| Kurallar | Runtime prompt'tan sistem prompt'una taşındı |
| Anchor listesi | 25 kavramla ~1.500-1.800 char (limitin altında) |
| `build_cloze_prompt()` imzası | `(anchors)` → `(anchors, lesson, unit)` |
| Yeni `_inject_anchors()` | Tüm prompt'lar için ortak enjeksiyon fonksiyonu |

## N2. FAZ 4 Uncovered Temizleme

| Değişiklik | Detay |
|---|---|
| Yeni prompt | `PROMPT_CLOZE_UNCOVERED` — "ZORUNLU ÜRETİM, DOYGUNLUK bildirme" |
| Yeni fonksiyon | `build_cloze_uncovered_prompt()` |
| DOYGUNLUK sinyali | FAZ 4'te dinlenmez, gelse bile kart parse edilir |
| `remaining` takibi | Her batch sonrası kapsananlar `remaining`'den çıkarılır |
| Batch log'ları | `cloze_{unit}_faz4_batch{N}.txt` formatında |
| Batch etiketleri | `FAZ4_OK` / `FAZ4_BOŞ` |
| Sonuç | İlk tur %10 → FAZ 4 sonrası %98.7 kapsam |

## N3. MCP ve Ortam Değişiklikleri

| Değişiklik | Eski | Yeni |
|---|---|---|
| MCP başlatma | `nlm serve` | `notebooklm-mcp --transport http` |
| Sistem prompt dosyası | `notebooklm_cloze_system_prompt.txt` | `notebooklm_cloze_system_prompt_v3.md` |
| `.env.local` konumu | `scripts/.env.local` | Proje kökü `.env.local` (config.py zaten buradan okuyor) |

## N4. Nihai Rapor İyileştirmeleri

| Değişiklik | Detay |
|---|---|
| İki aşamalı rapor | FAZ 3 "İLK TUR" + Nihai "NİHAİ DURUM" |
| MERGED TSV | FAZ 4 sonrası otomatik konsolidasyon |
| Uncovered log | `cloze_uncovered_{unit}.txt` — nihai durumu yansıtır |

---

# BÖLÜM O: BİLİNEN SINIRLAMALAR VE UYARILAR

1. **MCP bağımlılığı:** Pipeline sadece NotebookLM MCP sunucusu çalışırken kullanılabilir. MCP sunucusu `notebooklm-mcp --transport http` ile başlatılır (eski `nlm serve` kaldırıldı).

2. **Sistem prompt'u zorunlu:** `notebooklm_cloze_system_prompt_v3.md` deftere kopyalanmazsa kart kalitesi ciddi düşer. Tüm kalite kuralları sistem prompt'undadır.

3. **Embedding maliyeti:** Her upsert öncesi OpenAI embedding API'si çağrılır. Tipik bir ünite ~$0.05-0.15 arası maliyet üretir.

4. **Namespace'ler önceden oluşturulmaz:** Pinecone serverless'ta namespace'ler ilk upsert'te otomatik oluşur.

5. **Dedup pipeline'dan bağımsız:** Kart üretimi sırasında sadece anchor kapsam kontrolü yapılır. Tam dedup `smart_dedup_addon` tarafından ayrıca çalıştırılmalıdır.

6. **TSV çıktıları manuel import:** Üretilen TSV dosyaları (`scripts/cloze_output/`) Anki'ye elle import edilmelidir.

7. **Anki ilerleme koruması:** Pipeline yeni kartları doğrudan Pinecone'a yazar. Mevcut kartların üzerine yazma riski anchor kapsam kontrolü ile minimize edilir.

8. **Google API karakter limiti:** ~4.000-5.000 char. v3.0'da prompt'lar bu limitin altında (~1.500-1.800 char). Yeni prompt eklerken bu limite dikkat et.

9. **FAZ 4'te DOYGUNLUK dinlenmez:** Bu bilinçli bir tasarım kararıdır. Model "yeterli kart ürettim" dese bile uncovered kavramlar için zorlamaya devam edilir.

10. **Pinecone embedding boyutu farkı:** Anki index 3072-dim (text-embedding-3-large), Supabase tarafı 1536-dim (text-embedding-3-small). Bu iki sistemin vektörleri karşılaştırılamaz.

---

# BÖLÜM P: GELECEK GELİŞTİRMELER (FAZ 5)

| ID | Geliştirme | Açıklama |
|---|---|---|
| F5-01 | Pinecone benzerlik tabanlı kapsam | Anchor'ı embed et → cosine > 0.85 ise kapsanmış say |
| F5-02 | Anchor cache | Aynı PDF için anchor listesini cache'le, `--force-reanchor` ile yenile |
| F5-03 | AnkiConnect entegrasyonu | TSV'yi doğrudan Anki'ye import et (AnkiConnect API) |
| F5-04 | Ders bazlı alt klasör | `cloze_output/Endodonti/`, `cloze_output/Ortodonti/` yapısı |

---

# BÖLÜM Q: HIZLI BAŞVURU KARTI

## Komutlar (Özet)

```bash
# Durum
python scripts/notebooklm_mcp_cloze.py --status --lesson Endodonti

# Kuru çalıştırma (önce bunu yap)
python scripts/notebooklm_mcp_cloze.py --file "PDF" --lesson DERS --unit "ÜNİTE" --dry-run

# Gerçek üretim (tek dosya)
python scripts/notebooklm_mcp_cloze.py --file "PDF" --lesson DERS --unit "ÜNİTE"

# Gerçek üretim (klasör)
python scripts/notebooklm_mcp_cloze.py --dir "KLASÖR" --lesson DERS
```

## MCP Başlatma

```bash
# Tek komut:
notebooklm-mcp --transport http --host 127.0.0.1 --port 8000

# Kontrol:
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8000/mcp
# 405 = başarılı
```

## Log Dosyaları

| Pattern | İçerik | Faz |
|---|---|---|
| `logs/cloze_anchor_{safe_unit}.txt` | FAZ 0 çapa listesi | 0 |
| `logs/cloze_{safe_unit}_batch{N}.txt` | Batch N ham yanıt + hedef kavramlar | 2 |
| `logs/cloze_{safe_unit}_faz4_batch{N}.txt` | FAZ 4 batch N ham yanıt | 4 |
| `logs/cloze_uncovered_{safe_unit}.txt` | Nihai kapsanmayan kavramlar | Nihai |
| `logs/{lesson}_progress.json` | Checkpoint/resume durumu | — |

## Çıktı Dosyaları

| Pattern | İçerik |
|---|---|
| `cloze_output/{Ders}_{Ünite}_{timestamp}.tsv` | Batch TSV çıktısı |
| `cloze_output/{Ders}_{Ünite}_MERGED_{timestamp}.tsv` | Birleşik TSV (tüm batch'ler) |
| `recovery/pending/embed_failed_{lesson}_{ts}.json` | Embedding başarısız kartlar |
| `../raw/cloze_unparsed_{ts}.txt` | Parse edilemeyen ham yanıt |

## Akış Özeti (v3.0)

```
FAZ 0: Kavram Çapalama         PROMPT_ANCHOR (~300 char)
FAZ 1: Pinecone Kapsam          classify_anchors_pinecone()
FAZ 2: İlk Tur Kart Üretimi     build_cloze_prompt() → PROMPT_CLOZE_MASTER (~150 char)
FAZ 3: İlk Tur Raporu           Kapsam %, uncovered log
FAZ 4: Uncovered Temizleme      build_cloze_uncovered_prompt() → ZORLAMA
       DOYGUNLUK dinlenmez       Her kavram zorunlu
NİHAİ: Tam Rapor + MERGED TSV   %98+ kapsam hedefi
```

---

# BÖLÜM R: OTOMATİK ANKİ YÜKLEYİCİSİ (AUTO IMPORTER)

## R1. Çalışma Mantığı
Üretim pipeline'ı `cloze_output/` klasörüne `_MERGED_` TSV dosyalarını oluşturdukça, arka planda çalışan `anki_auto_importer.py` scripti bu dosyaları otomatik olarak Anki'ye (AnkiConnect üzerinden) import eder.
- **Döngü**: Her 10 dakikada (600s) bir klasörü tarar.
- **Desteler (Decks)**: Dosya adındaki `Ders` ve `Ünite` bilgisinden otomatik deste oluşturur (Örn: `DUS::🧲 Ortodonti::004-ANKRAJ`).
- **Kart Modeli**: `Cloze-MAXXİNG` kullanılır.
- **Etiketler (Tags)**: `ders_adi` ve `ders_adi::unite_adi` şeklinde etiket basar (Örn: `ortodonti`, `ortodonti::ankraj`).
- **Durma Koşulu**: `--last-unit N` argümanı ile belirtilen ünite (örneğin son ünite olan 21) başarıyla eklendiğinde script kendini sonlandırır.

## R2. Çalıştırma

Üretim hattını (`notebooklm_mcp_cloze.py`) başlattığınızda, eş zamanlı olarak yeni bir terminalde şu komutla yükleyiciyi başlatın:

```bash
# Windows PowerShell için UTF-8 ayarıyla başlatma (Emoji ve Türkçe karakterler için)
$env:PYTHONUTF8="1"; python -u scripts/anki_auto_importer.py --last-unit 21
```

Bu script üretim tamamlanana dek arkada sessizce çalışır ve çıkan tüm desteleri Anki'nize yükler. Son ünitenin (21) merged dosyası başarıyla içeri aktarıldığında script kendini otomatik olarak kapatacaktır.

---

*Rehber sonu. v3.1 — Prompt minimizasyonu, FAZ 4 uncovered akışı ve Otomatik Anki Yükleyicisi (Auto Importer).*
