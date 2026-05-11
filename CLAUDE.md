# CLAUDE.md — DUSBANKASI Proje Rehberi

> **Claude Code için Başucu Belgesi.** Bu dosyayı oku, sonra çalışmaya başla.
> Projeyi her seferinde sıfırdan tarama. Bu dosya tek doğruluk kaynağındır.

---

## 0. PROJE KİMLİĞİ

| Alan | Değer |
|---|---|
| Proje Adı | DUSBANKASI (package.json'da: `odusbircanavari`) |
| Amaç | DUS (Diş Hekimliği Uzmanlık Sınavı) soru bankası + adaptif öğrenme |
| Stack | React 19 + TypeScript / Vite 8 + Supabase + Python 3.12 |
| Deploy | Vercel (`vercel.json` mevcut) — `gsaslan2001-blip/xxq` repo'sundan otomatik |
| Repo | `gsaslan2001-blip/xxq` (GitHub) |
| Canlı URL | https://odusbircanavari.vercel.app |

---

## 1. FULL KLASÖR HARİTASI

```
DUSBANKASI/
├── src/                          # React/TS frontend
│   ├── App.tsx                   # Ana orkestrasyon + AppState yönetimi
│   ├── index.css                 # CSS tokenları (var(--color-*) semantic sistem)
│   ├── data.ts                   # Question tipi tanımı
│   ├── types/app.ts              # AppState ve diğer tip tanımları
│   ├── hooks/
│   │   ├── useQuestions.ts       # Supabase CRUD + optimistic updates
│   │   ├── useAuth.ts            # Supabase Auth hook
│   │   ├── useResumableSession.ts # Yarım kalan oturum yönetimi
│   │   ├── useRealtimeStats.ts   # Realtime istatistik senkronizasyonu
│   │   ├── useExamTimer.ts       # Sınav sayacı
│   │   ├── useKeyboardShortcuts.ts
│   │   └── useAIAssistant.ts
│   ├── components/
│   │   ├── quiz/
│   │   │   ├── QuizView.tsx      # Soru çözüm ekranı
│   │   │   ├── QuestionCard.tsx
│   │   │   ├── ExplanationPanel.tsx
│   │   │   ├── QuizHeader.tsx
│   │   │   └── QuizNavigation.tsx
│   │   ├── ai/AIAssistantPanel.tsx
│   │   ├── AuthModal.tsx
│   │   ├── DailyPlanView.tsx
│   │   ├── ErrorAnalyticsView.tsx
│   │   ├── SimulationResultView.tsx
│   │   └── SourceBooksView.tsx
│   ├── lib/
│   │   ├── supabase.ts           # ⭐ Supabase client + tüm DB fonksiyonları
│   │   ├── adaptive.ts           # Akıllı soru seçim motoru
│   │   ├── fsrs.ts               # FSRS-5 spaced repetition algoritması
│   │   ├── stats.ts              # İstatistik yönetimi (local + cloud sync)
│   │   ├── auth.ts               # Auth yardımcıları
│   │   ├── ai.ts                 # AI entegrasyonu
│   │   ├── shuffle.ts            # Fisher-Yates shuffle
│   │   ├── markdown.ts
│   │   └── dateUtils.ts
│   ├── config/learning.ts        # Öğrenme parametreleri
│   └── theme/index.ts            # Tema tanımları
│
├── scripts/                      # Python soru üretim + denetim + analiz hattı
│   ├── notebooklm-exhaust.py     # ⭐ ANA ÜRETİM MOTORU (Gemini 2.0 Flash)
│   ├── run_production.py         # Orkestrasyon — tüm üniteler için döngü
│   ├── shared.py                 # OpenAI Embedding (1536-dim) + Filtreler
│   ├── config.py                 # API anahtarları + RAG sabitleri (absolute path)
│   ├── session_keeper.py         # NotebookLM oturum canlı tutma
│   ├── analyze_deneme_followup.py  # ⭐ Supabase hata çekici (UTC-aware, dedup, null-guard)
│   ├── generate_deneme_rag_reports.py  # ⭐ Deneme RAG pipeline orkestratörü (async)
│   ├── templates/
│   │   └── s5_prompt.jinja2      # ⭐ S5 v9.0 sistem promptu (Jinja2 şablonu)
│   ├── lib/
│   │   ├── db_layer.py           # Asenkron DB katmanı (aiohttp + Semaphore(10))
│   │   ├── lsh_matcher.py        # MinHash LSH deduplication O(log N)
│   │   ├── pinecone_client.py    # ⭐ Async Pinecone wrapper + global fallback
│   │   ├── openai_client.py      # ⭐ Async OpenAI wrapper + retry + rate limit
│   │   └── progress_sync.py      # ⭐ DUS/PROGRESS.md otomatik güncelleyici
│   └── tools/
│       ├── smart_audit_pipeline.py   # Otomatik denetim (LSH + Semantic Match)
│       ├── backfill_embeddings.py    # ✅ ÇÖZÜLDÜ — 10,768 satır embedding tamamlandı
│       ├── batch_rollback.py         # Parti geri alma (3 katmanlı güvenlik)
│       ├── bulk_quality_audit.py     # Toplu kalite denetimi
│       ├── check_expl_dupes.py       # Açıklama kopyası tespiti
│       ├── delete_ids_from_report.py # Rapor üzerinden toplu silme
│       ├── requeue_rejected.py       # Reddedilmiş soruları kurtarma
│       ├── rescue_data.py            # Veri kurtarma
│       ├── rescue_uncovered.py       # Kapsanmamış kavramlar kurtarma
│       ├── split_pdf_auto.py         # PDF bölme
│       ├── check_db_all.py           # DB soru sayısı dağılımı
│       ├── advanced_map.py           # PDF karakter/font haritası
│       └── analyze_pdf.py            # PDF içerik yapısı analizi
│
├── public/                       # Statik dosyalar
│
├── supabase-schema.sql           # ⭐ ANA DB ŞEMASI
├── migration-v2-auth.sql         # v2 Auth + pg_cron + Realtime migration
├── .env.local.example            # Env template
├── package.json
├── vite.config.ts
├── tsconfig.app.json
├── vercel.json
```

---

## 2. VERİTABANI ŞEMASI (Supabase PostgreSQL)

### Tablo: `questions` (Ana tablo)

```sql
id            uuid PRIMARY KEY
lesson        text NOT NULL          -- Ders adı ("Fizyoloji", "Patoloji" vb.)
unit          text NOT NULL          -- Ünite adı
question      text NOT NULL
option_a..e   text NOT NULL          -- 5 şık
correct_answer text CHECK IN ('A','B','C','D','E')
explanation   text NOT NULL          -- Root-cause + klinik bağlam (motivasyonel dil YASAK)
flagged       boolean DEFAULT false
flag_reason   text DEFAULT ''
quality_flag  text DEFAULT NULL      -- NULL | 'kavramsal_kopya' | 'auto_deleted' | 'reviewed_keep'
is_favorite   boolean DEFAULT false
embedding     vector(1536)           -- OpenAI text-embedding-3-small
created_at    timestamptz
```

**⚠️ quality_flag Uyarısı:** pg_cron her Pazar 03:00'da `kavramsal_kopya` olanları (7 günden eskiyse) `auto_deleted`'a çevirir. Şu an ~166 kavramsal_kopya + ~4000 auto_deleted var. Frontend client-side Set ile her ikisini de filtreler.

### Tablo: `question_stats`

```sql
device_id     text NOT NULL
user_id       uuid → auth.users(id)
question_id   uuid → questions(id)
attempts / corrects / last_seen / wrong_choices jsonb
-- FSRS-5: stability, difficulty, last_review, scheduled_days, fsrs_reps
```

### Tablo: `active_sessions`

```sql
device_id text PRIMARY KEY
user_id   uuid → auth.users(id)
session_data jsonb NOT NULL
updated_at timestamptz
```

### Tablo: `daily_exams` ⭐ YENİ (2026-05-11)

```sql
id            uuid PRIMARY KEY
user_id       uuid → auth.users(id)   -- user_id bazlı (device_id yok)
day_number    int NOT NULL             -- 1., 2., 3. gün...
exam_date     date NOT NULL            -- YYYY-MM-DD
question_ids  uuid[] NOT NULL          -- seçilen soru id'leri
breakdown     jsonb NOT NULL           -- {lesson: {new: x, review: y, ...}}
status        text DEFAULT 'pending'   -- 'pending' | 'completed' | 'archived'
created_at    timestamptz
completed_at  timestamptz
```

**Atlas iş akışı:** Atlas (LLM) Supabase REST API'yi kullanarak bu tabloyu doldurur.  
**RLS:** Kullanıcı yalnızca kendi kayıtlarını okur/yazar (`auth.uid() = user_id`).  
**Silme yok:** Tamamlanan sınavlar `completed` olarak arşivlenir, silinmez.

**Supabase fonksiyonları (`src/lib/supabase.ts`):**
- `loadTodaysDailyExam(userId)` → bugünün `pending` sınavını getirir
- `saveDailyExam(userId, dayNumber, questionIds, breakdown)` → Atlas tarafından kaydeder
- `markDailyExamCompleted(examId)` → sınav bitince `completed` yap
- `getNextDayNumber(userId)` → sıradaki gün numarasını hesapla

### Kritik RPC Fonksiyonları

```sql
match_questions_semantic(query_embedding, match_threshold, match_count, p_lesson)
match_questions_semantic_by_id(v_id, match_threshold, match_count)
merge_device_stats_to_user(p_device_id, p_user_id)  -- Login sonrası çağır
```

### pg_cron (migration-v2-auth.sql)
- **02:00 her gece** → 7 günden eski anonim session'ları sil
- **03:00 her Pazar** → `kavramsal_kopya` (7 gün+) → `auto_deleted`'a geçir

---

## 3. FRONTEND MİMARİSİ

### Startup Akışı (`App.tsx`)

```
1. useEffect → loadQuestions() çağrılır
2. fetchQuestions() → recursive fetchPage(0,1000,2000,...) ile TÜM sorular çekilir
3. Client-side Set filtresi: kavramsal_kopya + auto_deleted elenir
4. questions state → 9627 soru (Nisan 2026 itibarıyla)
```

### ⭐ Kritik: fetchQuestions Mimarisi (`src/lib/supabase.ts`)

```typescript
const PAGE_SIZE = 500;
const EXCLUDED_FLAGS = new Set(['kavramsal_kopya', 'auto_deleted']);

// Sunucu taraflı filtre — is.null + eq. çalışır; not.in. içindeki .or() broken
q = q.or('quality_flag.is.null,quality_flag.eq.reviewed_keep');

// Paralel 2'li fetch + withRetry(3) + client-side EXCLUDED_FLAGS yedek filtre
```

**Mimari kararlar:**
- `PAGE_SIZE=500` — 1000'den küçük, her istek daha hafif, timeout riski azalır
- Paralel 2'li fetch — her turda p1 ve p2 eş zamanlı; ~2× hız
- `withRetry(3)` — timeout hatalarında 1.2s/2.4s bekleme ile otomatik yeniden deneme
- Client-side `EXCLUDED_FLAGS` filtresi yedek olarak korundu
- **YAPMA:** `.or('quality_flag.is.null,quality_flag.not.in.(...)')` — `not.in.` broken, 5000'de takılır

### AppState Akışı

Ana modlar: `select-lesson` → `select-unit` → `quiz` | `select-deneme` → `select-deneme-amount` → `exam` | `simulation` | `analytics` | `error-analysis` | `daily-plan` | `source-books`

**Günün Denemesi akışı (Atlas-driven, 2026-05-11):**
```
Atlas Chat:
  Kullanıcı → konuları yazar → Atlas REST API ile soruları çeker
           → daily_exams tablosuna kaydeder → rapor verir

Frontend:
  Uygulama açılır → loadTodaysDailyExam() → bento kart güncellenir
  Kullanıcı tıklar → question_ids yüklenir → exam modu başlar
  Sınav biter → markDailyExamCompleted() → status='completed'
```

**Bento kart durumları:**
- `no-user` — "Kullanmak için giriş yapın"
- `not-ready` — "Henüz hazırlanmadı — Atlas'a konularını söyle"
- `ready` — "**N. Günün Denemesi · X Soru · Başlatmak için tıkla**"

**Not:** `DailyExamSetup` UI komponenti kaldırıldı. `daily-exam-setup` AppState artık yok.

### Adaptif Motor (`src/lib/adaptive.ts`)
- **FSRS Urgency: %50** — Tekrar zamanı gelenler
- **Weakness Score: %35** — Hata oranı yüksek konular
- **New Exploration: %15** — Hiç görülmemiş sorular
- **Interleaving** → Ardışık aynı ders gelmez
- **`buildDailyExam()`** → Atlas'ın kullandığı motor: %80 yeni + %20 hard→medium→easy fallback; frontend'de değil, Atlas workflow'unda çağrılır

### FSRS-5 (`src/lib/fsrs.ts`)
Kullanıcı tepkisine (Zor/Orta/Kolay) göre `stability`, `difficulty`, `scheduled_days` hesaplar.

### Design System
`src/index.css` semantic tokenları. **Ad-hoc renk yasak:**
```css
/* DOĞRU */ var(--color-bg-primary), var(--color-text-secondary)
/* YANLIŞ */ #1a1a2e, rgb(255,255,255)
```

---

## 4. PYTHON SORU ÜRETİM HATTI

### Çevre Değişkenleri

```python
# scripts/config.py
OPENAI_API_KEY = "..."    # text-embedding-3-small (1536-dim)
GEMINI_API_KEY = "..."    # Gemini 2.0 Flash (üretim)
```

```bash
# .env.local
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
PINECONE_API_KEY=...
MYPPDFS_HOST=myppdfs-0crkhvy.svc.aped-4627-b74a.pinecone.io
OPENAI_API_KEY=...
```

### Üretim Akışı

```
1. PDF hazırla
   python scripts/tools/split_pdf_auto.py

2. Soru üret
   python scripts/notebooklm-exhaust.py --lesson Fizyoloji --unit "Kalp Fizyolojisi"

3. Semantik denetim (BATCH BİTTİKTEN SONRA — 1 kez)
   python scripts/tools/smart_audit_pipeline.py --lesson Fizyoloji

4. Temizlik
   DELETE FROM questions WHERE quality_flag = 'kavramsal_kopya';
```

### Smart Audit Puanlama
```
Klinik vaka içeriyor    → +10p
"Hangisidir / Nedir"    → +5p
"Değildir / Yanlıştır"  → -15p
10 kelimeden kısa       → -5p
Cosine similarity > 0.85 → ikiz kabul → düşük puanlı elenecek
```

---

## 4b. DENEME ANALİZİ & RAG PIPELINE ⭐

> Deneme sınavı bittikten sonra çalıştırılan otomasyon. Supabase'deki bugünkü yanlışları alır, her biri için Pinecone'dan akademik bağlam çeker, S5 v9.0 protokolüyle MD raporu üretir.

### Tam Akış

```
Supabase (question_stats)
    │  UTC timestamp, wrong_choices null-guard, question_id dedup
    ▼
analyze_deneme_followup.get_today_mistakes()
    │  lesson / unit / question_text / question_id
    ▼
asyncio.gather (Semaphore=3)  ←── her hata izole try/except içinde
    │
    ├── pinecone_client.get_rag_context()
    │       index: myppdfs | namespace: lesson.lower() | top_k=15
    │       rerank: bge-reranker-v2-m3 top_n=5
    │       boş namespace → namespace'siz global fallback
    │
    ├── openai_client.generate_completion()
    │       model: gpt-4o | temperature: 0.3
    │       retry: 3× | backoff: 1s→2s→4s | 429→60s bekle
    │
    └── .md dosyası →
        C:\Users\FURKAN\Desktop\DUS\Deneme Analizi\Tekrar Hataları\YYYY-MM-DD\
        [Ders]_[Unite]_[QID].md  (ş→s, ğ→g, ü→u vb.)

    ▼
progress_sync.update_progress()
    C:\Users\FURKAN\.claude\DUS\PROGRESS.md → "Tamamlanan Deneme Analizleri"
```

### Hata Dayanıklılığı

| Senaryo | Davranış |
|---|---|
| Pinecone namespace boş | Global fallback; hâlâ boşsa context = "İlgili kaynak bulunamadı." |
| OpenAI 429 | 60s bekle, 3 deneme; biterse o rapor atlanır, diğerleri devam eder |
| Supabase join null | O kayıt loglanıp sessizce atlanır |
| Herhangi bir exception | İzole try/except — pipeline durmaz |

### S5 v9.0 Sistem Promptu (Özet)

Tam prompt: `scripts/templates/s5_prompt.jinja2`
Değişkenler: `{{ context }}`, `{{ lesson }}`, `{{ unit }}`, `{{ question_text }}`

**Mutlak Yasaklar:** Kısa yanıt yasağı · Belirsizlik yasağı ("vb.", "gibi" vb.) · Mekanizma şartı (min 3 basamaklı A→B→C zinciri) · Tablo şartı (min 1 Markdown tablosu) · Kesin sayı şartı

**Rapor Bölümleri:**
1. HIGH-YIELD 20/80 ÖZÜ — Patognomonik + ayırt edici bilgiler, numaralı liste
2. KAPSAMLI KONU ANLATIMI — 8 alt başlık (Tanım, Etyoloji, Patogenez, Klinik, Radyoloji, Tedavi, Tablo, DUS Tuzakları)
3. 5 KLASİK DUS SORUSU — 5 şıklı, doğru cevap + mekanizma + tüm yanlış şık eliminasyonu

---

## 5. KOMUT REFERANSI

```bash
# Üretim
python scripts/notebooklm-exhaust.py --lesson Fizyoloji --unit "Kalp"

# Denetim
python scripts/tools/smart_audit_pipeline.py --lesson Fizyoloji
python scripts/tools/bulk_quality_audit.py --lesson Fizyoloji
python scripts/tools/check_expl_dupes.py --lesson Fizyoloji

# Geri alma (ÖNCE dry-run ZORUNLU)
python scripts/tools/batch_rollback.py --dry-run --lesson Fizyoloji --since 2026-04-18
python scripts/tools/batch_rollback.py --lesson Fizyoloji --since 2026-04-18

# DB durum
python scripts/tools/check_db_all.py

# ⭐ Deneme Analizi RAG Pipeline (deneme bittikten sonra)
python scripts/generate_deneme_rag_reports.py              # Tüm bugünkü yanlışlar
python scripts/generate_deneme_rag_reports.py --limit 3   # İlk 3 (test)
python scripts/generate_deneme_rag_reports.py --dry-run   # Listele, rapor üretme

# Frontend
npm run dev
npm run build
npm run lint
```

---

## 6. ~~AÇIK BUG: backfill_embeddings.py~~ — ÇÖZÜLDÜ (2026-04-19)

**Durum:** ✅ Tamamlandı — 10,768 satırın tamamına `text-embedding-3-small (1536-dim)` embedding yazıldı.

- Süre: ~21 dakika · Maliyet: ~$0.065
- Hata: 0 — tüm kayıtlar başarılı
- Semantik arama (`match_questions_semantic`) artık tam kapasite çalışıyor

---

## 7. VERİ TUTARSIZLIKLARI (Çözüldü — 2026-04-19)

Aşağıdaki tutarsızlıklar Supabase SQL ile düzeltildi:

```sql
-- 1. Histoloji'ye yanlış kaydedilmiş Periodontoloji üniteleri
UPDATE questions SET lesson = 'Periodontoloji'
WHERE lesson = 'Histoloji'
AND unit IN ('2.C)Etiyoloji','3.a - Gingival Hastalıklar',
             '6.b - Cerrahi Teknikler 1','6.c - Cerrahi Teknikler 2',
             '7.b - İleri Cerrahi İşlemler 2');

-- 2. Endodonti Ünite 2 isim çakışması
UPDATE questions
SET unit = 'Ünite 2 - KÖK KANAL ANATOMİSİ ve GİRİŞ KAVİTESİ PREPARASYONU'
WHERE lesson = 'Endodonti' AND unit = 'Ünite 2 - KÖK KANAL ANATOMİSİ';

-- 3. Periodontoloji Ünite 4 format çakışması
UPDATE questions
SET unit = '4.a - Periodontal Epidemiyoloji'
WHERE lesson = 'Periodontoloji' AND unit = 'Ünite 4 - Periodontal Epidemiyoloji';
```

Benzer pipeline hatası oluşursa aynı pattern'i uygula.

---

## 8. KATİ KURALLAR (İSTİSNASIZ)

### ⛔ YAPMA
1. `fetchQuestions`'daki client-side filtreyi kaldırıp Supabase `.or()` syntax'ına dönme — supabase-js `not.in.` broken
3. DB değişikliği yapmadan `supabase-schema.sql`'i okumadan işlem yapma
4. `explanation` kısımlarında motivasyonel dil kullanma
5. `npm run build` öncesi TypeScript hata kontrolü atlatma

### ✅ YAPILACAKLAR
- CSS değişikliklerinde `var(--color-*)` tokenlarını kullan
- `batch_rollback` öncesi her zaman `--dry-run` çalıştır
- Soru üretiminden sonra `smart_audit_pipeline` tetikle
- DB şema değişikliği gerekirse `supabase-schema.sql`'e de yaz
- Pipeline'dan gelen sorular yanlış derse kaydolmuşsa §7'deki SQL pattern'ini uygula

---

## 9. MİMARİ KARARLAR VE GEREKÇELER

| Karar | Gerekçe |
|---|---|
| Client-side quality_flag filtresi | Supabase-js `.or()` içinde `not.in.` broken → 5000'de takılıyor |
| Recursive fetchPage (PAGE_SIZE=1000) | Supabase `count: exact` güvenilmez; terminal koşul = sayfa < 1000 |
| OpenAI text-embedding-3-small (1536-dim) | Standart üretim embedding modeli |
| MinHash LSH O(log N) | Eski O(N²) Jaccard'ın yerine, ölçeklenebilir |
| aiohttp + asyncio.Semaphore(10) | Bloklayan urllib'den kurtulma |
| FSRS-5 (SM-2 yerine) | Bilişsel bilim destekli, daha doğru tekrar planlaması |
| device_id → user_id migration | v2 Auth'da anonimden kullanıcıya soft geçiş |
| pg_cron | Sunucu-side otomasyon (temizlik, flag geçişi) |
| **%80 yeni / %20 hard (Günün Denemesi)** | **Yeni materyali kısa vadeli belleğe taşıma + zor soruları yinelemek için bilişsel yük dengeleme; hard→medium→easy fallback, sıfır boş sonuç garantisi** |
| **Atlas-driven daily exam (UI kaldırıldı)** | **Manuel ünite seçimi UX yerine LLM chat workflow: kullanıcı konuları söyler → Atlas REST API ile soruları seçer ve `daily_exams` tablosuna kaydeder → frontend otomatik yükler. Daha esnek, daha hızlı.** |
| **Async RAG pipeline (Semaphore=3)** | **Seri işlem yerine asyncio.gather + Semaphore(3): 30 hata ~5dk → ~1.5dk. Rate limit koruması aynı anda.** |
| **openai_client retry (backoff 1s→2s→4s)** | **Tek hata pipeline'ı kırıyordu. İzole try/except + retry: bir soru başarısız olursa diğerleri devam eder, hiçbir rapor kaybolmaz.** |
| **Jinja2 prompt template** | **Prompt script içine gömülüyken değiştirmek riskli ve izlenemezdi. `templates/s5_prompt.jinja2` ile prompt versiyonlanır, LLM tarafından okunabilir.** |
| **Global Pinecone fallback** | **Ders namespace'i Pinecone'da boş olabilir (yeni eklenmiş ders). Fallback olmadan LLM'e boş context gidip halüsinasyon üretiyordu.** |

---

## 10. NEREDE NE ARANIR

| Ne arıyorsun? | Nereye bak? |
|---|---|
| Supabase pagination + filtre | `src/lib/supabase.ts` → `fetchQuestions` + `EXCLUDED_FLAGS` |
| Startup soru yükleme | `src/App.tsx` → `useEffect(() => loadQuestions())` |
| Soru üretim mantığı | `scripts/notebooklm-exhaust.py` |
| Embedding + filtreler | `scripts/shared.py` |
| DB yazma optimizasyonu | `scripts/lib/db_layer.py` |
| Kopya tespiti | `scripts/lib/lsh_matcher.py` |
| Frontend quiz akışı | `src/components/quiz/QuizView.tsx` |
| Soru sıralama algoritması | `src/lib/adaptive.ts` |
| **Günün Denemesi motoru** | **`src/lib/adaptive.ts` → `buildDailyExam()`** |
| **Günün Denemesi DB fonksiyonları** | **`src/lib/supabase.ts` → `loadTodaysDailyExam`, `saveDailyExam`, `markDailyExamCompleted`** |
| **Günün Denemesi bento kart** | **`src/App.tsx` → `LessonSelection` + `dailyExamStatus` prop** |
| **Günün Denemesi DB tablosu** | **`supabase-schema.sql` → `daily_exams`** |
| **Günün Denemesi Atlas oyun kitabı** | **`WORKFLOW_GUNUN_DENEMESI.md` — SQL şablonları, pitfall'lar, rapor formatı** |
| **Deneme Analizi & RAG workflow** | **`WORKFLOW_DENEME_ANALIZI_RAG.md` — Tam akış, S5 prompt, parametre referansı** |
| **Deneme RAG orkestratörü** | **`scripts/generate_deneme_rag_reports.py` → async main()** |
| **Supabase hata çekici** | **`scripts/analyze_deneme_followup.py` → `get_today_mistakes(detailed=True)`** |
| **Pinecone async wrapper** | **`scripts/lib/pinecone_client.py` → `get_rag_context()`, global fallback** |
| **OpenAI async wrapper** | **`scripts/lib/openai_client.py` → `generate_completion()`, retry/backoff** |
| **S5 sistem promptu** | **`scripts/templates/s5_prompt.jinja2` — Jinja2, `{{ context/lesson/unit/question_text }}`** |
| **PROGRESS.md güncelleyici** | **`scripts/lib/progress_sync.py` → `update_progress()`** |
| **RAG pipeline sabitleri** | **`scripts/config.py` → `MYPPDFS_HOST`, `LOG_DIR`, `OUTPUT_BASE_DIR`, `RAG_*`** |
| FSRS hesaplama | `src/lib/fsrs.ts` |
| İstatistik (local+cloud) | `src/lib/stats.ts` |
| DB şeması | `supabase-schema.sql` |
| Auth + cron migration | `migration-v2-auth.sql` |

---

## 11. GÜNCEL DURUM (2026-04-19)

**Toplam DB Satırı:** 10,768 (backfill sayımından; tüm kayıtlarda embedding mevcut)
**Görünür Soru (frontend):** ~10,768 − auto_deleted (~4000) − kavramsal_kopya (~166) ≈ **~6,600**

> Not: `check_db_all.py` ile güncel dağılımı doğrula.

**Aktif Dersler:**
- Endodonti (25 ünite), Fizyoloji (10 ünite), Histoloji (17 ünite)
- Patoloji (18 ünite), Periodontoloji (13 ünite), Protez (40+ ünite)
- Radyoloji (48+ ünite)

**Tamamlanan:**
- Supabase pagination sorunu çözüldü (5000 → tam veri)
- Client-side quality_flag filtresi eklendi
- Histoloji/Periodontoloji ders karışıklığı düzeltildi
- Endodonti Ünite 2 ve Periodontoloji Ünite 4 isim çakışmaları çözüldü
- `backfill_embeddings.py` 400/404 bug çözüldü — 10,768 satır embedding tamamlandı
- `fetchQuestions` optimize edildi: PAGE_SIZE→500, sunucu filtresi, paralel 2'li fetch, retry

**Son Güncelleme:** 2026-05-11 — Günün Denemesi Atlas-driven + Deneme Analizi RAG Pipeline eklendi.

**Değişiklikler (2026-05-11 v2):**
- `DailyExamSetup` UI komponenti kaldırıldı (manual ünite seçimi)
- `daily-exam-setup` AppState kaldırıldı
- `daily_exams` Supabase tablosu eklendi (user_id bazlı, arşivleme mantığı)
- `loadTodaysDailyExam`, `saveDailyExam`, `markDailyExamCompleted`, `getNextDayNumber` fonksiyonları eklendi
- Bento kart: 3 durum (no-user / not-ready / ready) + tıklanınca sınavı yükle
- Atlas workflow: kullanıcı chat'te konuları yazar → Atlas REST API → DB → frontend

**Değişiklikler (2026-05-11 v3) — Deneme Analizi RAG Pipeline:**
- `scripts/analyze_deneme_followup.py` hardened: UTC timestamp, null-guard, question_id dedup
- `scripts/generate_deneme_rag_reports.py` yeniden yazıldı: async-first, izole try/except, Semaphore(3)
- `scripts/lib/pinecone_client.py` eklendi: async Pinecone wrapper + global fallback
- `scripts/lib/openai_client.py` eklendi: async OpenAI wrapper + exponential backoff + 429 handler
- `scripts/lib/progress_sync.py` eklendi: DUS/PROGRESS.md otomatik güncelleme
- `scripts/templates/s5_prompt.jinja2` eklendi: S5 v9.0 tam protokol, Jinja2 şablon
- `scripts/config.py` genişletildi: absolute path env loader, RAG sabitleri

**⚠️ Yapılması Gereken:** Supabase SQL Editor'de `daily_exams` tablosunu oluştur (`supabase-schema.sql` §2'deki CREATE TABLE bloğunu çalıştır).

**Açık Görev Kalmamıştır:** Frontend deploy edildi. SQL migration bekliyor.

---

*Bu dosya projeye `CLAUDE.md` adıyla kök dizine yerleştirilir. Claude Code her oturumda önce okur.*
