Bu dosya projenin yeteneklerini ve kullanımını açıklamak amacıyla oluşturulmuştur ve her yapılan değişiklik sonrası ilgili kısım güncel versiyon ile güncellenir, built alınır ve deploy edilir.

# DUSBANKASI — Diş Hekimliği Uzmanlık Sınavı AI Adaptif Soru Bankası

> Diş Hekimliği Uzmanlık Sınavı (DUS) hazırlık sürecinde maksimum verim sağlamak üzere geliştirilmiş, yapay zeka destekli kişiselleştirilmiş soru bankası platformu.
> 
> Canlı Sürüm: **https://odusbircanavari.vercel.app**

---

## 0. BELGE HARİTASI (NEREDE NE VAR)

Proje yalnızca **iki kalıcı kök belge** + işe özel workflow/skill dosyalarıyla yönetilir (eski `CLAUDE.md` ve `AGENTS.md` kaldırıldı; içerikleri buraya ve gemini.md'ye taşındı):

| Belge | Kim okur | İçerik |
|---|---|---|
| **README.md** (bu dosya) | İnsan | Projenin amacı, yetenekleri, kurulum ve çalıştırma rehberi — kapsamlı tanıtım. |
| **[gemini.md](./gemini.md)** | Ajan (ilk okur) | Teknik mimari + **Tetikleyici→Araç haritası**: hangi komutta hangi script/araç kullanılır, kati kurallar, DB şeması, algoritmalar. |
| **[WORKFLOW_GUNUN_DENEMESI.md](./WORKFLOW_GUNUN_DENEMESI.md)** | Ajan | "Deneme oluştur" oyun kitabı — `daily_exams` SQL şablonları. |
| **[WORKFLOW_DENEME_ANALIZI_RAG.md](./WORKFLOW_DENEME_ANALIZI_RAG.md)** | Ajan | "Hatalarımı analiz et" RAG pipeline akışı + S5 v9.0 promptu. |
| **[.agent/workflows/soru_ekle.md](./.agent/workflows/soru_ekle.md)** | Ajan | "/soru-ekle" ham metin → JSON → kalite kapısı → deploy akışı. |

---

## 1. VİZYON VE PROJENİN AMACI

DUSBANKASI, geleneksel soru bankalarının "tek tip ve doğrusal" yapısını yıkarak, her adayın öğrenme durumuna ve zayıf konularına göre dinamik olarak şekillenen bir eğitim ekosistemidir. 
* **Soru Üretiminde Tam Kapsam (Exhaustive)**: Geliştirilen Playwright destekli NotebookLM soru üretim hattı sayesinde, PDF kaynak kitaplarındaki her tıbbi kavram satır satır taranır ve her kavram **doğrudan bir sorunun kökünde** sorgulanana dek soru üretilir. Kapsam metriği bilinçli olarak sıkıdır: bir kavramın yalnızca bir açıklamada geçmesi "kapsandı" sayılmaz — böylece kapsam rakamı gerçek hakimiyeti yansıtır. Klasör / tek / çoklu PDF tek komutla (`--input`) sıraya alınır.
* **Akıllı Soru Havuzu ve Performans Analizi**: Adayın çözdüğü soruların doğruluk oranları, yanlış şık tercihleri ve zayıf konuları anlık olarak takip edilir, akıllı soru seçimi ile en zayıf olunan konular önceliklendirilerek dinamik denemeler oluşturulur.
* **Klinik Odaklı Kürasyon (DeepSeek-v4-pro Ölüm Maçı)**: smart_audit_pipeline.py ile veritabanı kopyalardan arındırılır. Benzer soru çiftleri **DeepSeek-v4-pro** karar vericisine gönderilir; yalnızca **soru kökü + doğru şık + açıklama** üçlüsü değerlendirilir (çeldirici şıklar bilinçli olarak hariç tutulur — amaç sorgulanmış bilginin tekrarını önlemek), sorgulanan bilgi, klinik derinlik ve açıklama öğreticiliğine göre `keep_1` / `keep_2` / `keep_both` / `remove_both` kararı verilir. Böylece gerçek DUS sınavına en yakın çalışma deneyimi sunulur.

---

## 2. KULLANICI YETENEKLERİ VE ÇALIŞMA MODLARI

Platform, adayın hazırlık sürecinin farklı aşamalarına hitap eden 6 özelleştirilmiş çalışma modu sunar:

### 2.1. Arayüz Çalışma Modları
1. **Ünite Çalışma Modu**: Seçilen ünitedeki tüm soruları listeleyen, görülmemiş soruları önceliklendiren temel çalışma modudur.
2. **Deneme Sınavı Modu**: Birden fazla ders veya üniteden seçilen konularla karma soru setleri oluşturur. Öğrenilen konuların birbirine karışmasını engellemek için **Greedy Interleaving** sıralaması kullanır.
3. **Gerçek Sınav Simülasyonu**: Gerçek DUS formatında, zaman sınırlı (örneğin 120 dakika) ve tüm derslerden homojen dağılımlı (unseen sorulara 2 kat ağırlık vererek) 50 ila 200 sorudan oluşan kapsamlı sınav simülatörüdür.
4. **Zayıf Konu Tekrar Modu**: Adayın geçmiş denemelerinde veya günlük çalışmalarında hata oranı en yüksek olan ünite ve soruları öncelikli olarak karşısına çıkaran akıllı rehabilitasyon modudur.
5. **Favori Sorular Paneli**: Adayın yıldızla işaretlediği, tekrar incelemek istediği zorlayıcı veya öğretici sorulardan oluşan özel havuzdur.
6. **Günün Denemesi (Atlas-driven)**: Aday, AI asistana (Atlas) sohbet üzerinden bugün çalışacağı konuları söyler; Atlas dengeli bir günlük sınav (**%80 yeni + %20 zor/orta/kolay**) hazırlayıp kaydeder. Uygulama açıldığında ana ekrandaki bento kart otomatik olarak "**N. Günün Denemesi · X Soru**" durumuna geçer ve tek tıkla başlatılır. Tamamlanan denemeler silinmez, `completed` olarak arşivlenir.

### 2.2. Adaptif Öğrenme Motoru Yetenekleri
* **2-Sinyalli Önceliklendirme (Priority Queue)**: Soru sıralaması; zayıflık skoru (%70) ve görülmemiş soru keşfi (%30) sinyallerinin birleşimiyle dinamik olarak optimize edilir.
* **Oturum Kurtarma (Resumable Session)**: Çalışma esnasında tarayıcı kapansa bile en son çözülen soru, kalan süre ve verilen yanıtlar hem tarayıcı belleğinde (`localStorage`) hem de bulut tabanlı `active_sessions` üzerinde saklanır. Oturum kesintisiz olarak devam ettirilir.
* **Hata Analiz Paneli (Error Analytics)**: En çok yanlış yapılan şık kombinasyonlarını (Error Pattern) ve en zayıf olunan 3 üniteyi anlık olarak görselleştirir.
* **Deneme Bazlı Soru Takibi (`exam_answers`)**: Her deneme tamamlandığında verilen tüm cevaplar (seçilen şık, doğruluk, harcanan süre, sıra) kaydedilir. Aday daha sonra "Endodonti Deneme-1'de yanlış yaptıklarım" veya "son 7 günde derse göre yanlışlarım" gibi geçmişe dönük analizler yapabilir.
* **AI Referans Kaynakları (Source Books)**: Adayın yüklediği PDF kaynak kitaplar `reference_sources` tablosunda ders/ünite bazlı tutulur ve AI asistanın bağlamını besler.

### 2.3. Deneme Analizi & Akademik Tekrar Raporları (RAG)
Bir deneme bittikten sonra, otomatik bir **RAG (Retrieval-Augmented Generation)** hattı adayın o günkü yanlışlarını alır; her yanlış için akademik PDF kaynaklarından (Pinecone vektör indeksi) ilgili bağlamı çeker ve **S5 v9.0** protokolüyle derinlemesine bir Markdown tekrar raporu üretir. Her rapor; high-yield 20/80 özü, 8 başlıklı kapsamlı konu anlatımı (mekanizma + karşılaştırma tablosu zorunlu) ve 5 klasik DUS sorusu içerir. Raporlar `Desktop/DUS/Deneme Analizi/Tekrar Hataları/YYYY-MM-DD/` altına yazılır ve ilerleme `PROGRESS.md`'ye işlenir. (Teknik detay: `WORKFLOW_DENEME_ANALIZI_RAG.md`.)

### 2.4. Soru Ekleme — Ajan-Bağımsız (CLI + Uygulama Formu)
Soru eklemek artık bir AI asistana (Atlas) bağlı değildir; iki deterministik, hızlı yol vardır. Her iki yol da üretim hattıyla **aynı kalite kapısından** geçer (yapısal bütünlük · bilgi sızıntısı %60 · açıklama totolojisi %60 · AI dolgu cümlesi · mojibake) ve **otomatik 1536-dim embedding** üretir:
* **Terminal CLI (`scripts/add_questions.py`)**: Hazır bir JSON / CSV / Markdown dosyasını tek komutla doğrular, embedding üretir ve Supabase'e 10'arlık chunked write ile yazar. Mevcut `shared.validate_question_batch` + `deploy_to_supabase` yeniden kullanılır. `--dry-run` ile önce doğrulama/önizleme, `--audit` ile bitince otomatik Ölüm Maçı denetimi.
* **Uygulama İçi "Soru Ekle" Formu**: Ayarlar → **Soru Ekle**. Tekil form (ders/ünite otomatik-tamamlama, 5 şık, doğru cevap seçimi, açıklama) veya toplu JSON yapıştırma sekmesi. Form, kalite filtresi + embedding üreten `manage-questions` Supabase Edge Function'ına gider — böylece uygulamadan eklenen sorular da semantik aramada ve kopya tespitinde **görünür** olur (eski ham `INSERT` yolu embedding üretmiyordu, kapatıldı).

---

## 3. TEKNOLOJİ YIĞINI (TECH STACK)

| Katman | Teknoloji / Kütüphane | Görev ve Açıklama |
|---|---|---|
| **Frontend** | React 19 + TypeScript 5.8 | Modern, hızlı ve kararlı kullanıcı arayüzü motoru. |
| **Derleyici / Build** | Vite 8 + PostCSS 8 | Hızlı HMR (Hot Module Replacement) ve optimize edilmiş bundle üretimi. |
| **Stil / Tasarım** | Tailwind CSS 4 | Minimalist, modern ve responsive CSS tasarımı. |
| **Sanallaştırma** | @tanstack/react-virtual | 10.000+ soruluk büyük listelerin kasma olmadan render edilmesi. |
| **PDF Kütüphanesi** | jspdf | Çalışma setlerinin veya yanlış yapılan soruların PDF olarak indirilmesi. |
| **Veritabanı** | Supabase (PostgreSQL 15) | Veri saklama, veri senkronizasyonu ve RLS güvenlik mimarisi. |
| **Vektör Veritabanı**| pgvector (1536-dim) | Soruların semantik benzerlik analizi ve arama motoru. |
| **RAG Vektör İndeksi** | Pinecone (`myppdfs`) | Akademik kaynak PDF'lerin saklanması; deneme-analizi RAG bağlam getirme + `bge-reranker-v2-m3` yeniden sıralama. |
| **Yapay Zeka (AI)** | Gemini 2.0 Flash / OpenAI (gpt-4o + text-embedding-3-small) / DeepSeek-v4-pro | NotebookLM ile soru üretimi, gpt-4o ile deneme-analizi rapor üretimi, embedding ile vektörleme, **DeepSeek-v4-pro ile Ölüm Maçı kürasyon kararı**. |
| **Otomasyon** | Playwright (Python 3.12) + asyncio | NotebookLM API çerez yönetimi, 7/24 kesintisiz soru üretimi ve async RAG pipeline (Semaphore=3). |

---

## 4. KURULUM VE ÇALIŞTIRMA REHBERİ

### 4.1. Frontend Kurulumu

#### Ön Koşullar
* Node.js v20 veya üzeri
* npm veya pnpm paket yöneticisi

#### Çalıştırma Adımları
```bash
# 1. Projeyi klonlayın
git clone https://github.com/gsaslan2001-blip/xxq.git DUSBANKASI
cd DUSBANKASI

# 2. Bağımlılıkları yükleyin
npm install

# 3. Çevre değişkenlerini oluşturun
cp .env.local.example .env.local
```

`.env.local` dosyasını açın ve Supabase bilgilerini girin:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

```bash
# 4. Geliştirme sunucusunu başlatın
npm run dev
# Uygulama http://localhost:5173 adresinde çalışmaya başlayacaktır.

# 5. Prodüksiyon derlemesini alın
npm run build
```

---

### 4.2. Python Soru Üretim Hattı Kurulumu

#### Ön Koşullar
* Python 3.12+
* Google NotebookLM üzerinde oluşturulmuş bir çalışma alanı (Notebook ID)
* OpenAI API Anahtarı (Embedding üretimi için)

#### Kurulum Adımları
```bash
# 1. Gerekli Python kütüphanelerini yükleyin
pip install aiohttp openai google-genai numpy playwright

# 2. Playwright tarayıcı altyapısını kurun
playwright install chromium

# 3. NotebookLM oturumunu başlatın (İlk sefer için tarayıcı açılacaktır)
notebooklm login
```

`scripts/config.py` dosyasını düzenleyin:
```python
OPENAI_API_KEY = "sk-proj-..."
GEMINI_API_KEY = "AIzaSy..."
NOTEBOOK_ID = "your-notebook-guid"
SUPABASE_URL = "https://your-project-id.supabase.co"
SUPABASE_KEY = "your-service-role-key" # Yazma izni için service_role kullanılmalıdır
DEEPSEEK_API_KEY = "sk-..."           # Ölüm Maçı karar vericisi (yoksa yerel puanlamaya düşer)
DEEPSEEK_MODEL = "deepseek-v4-pro"    # Kürasyon kararı modeli
```

> `DEEPSEEK_API_KEY` ayrıca `.env.local`'dan da okunur. Tanımlı değilse `smart_audit_pipeline.py` otomatik olarak `calc_quality_score` tabanlı yapılandırılmış yerel karar motoruna düşer (pipeline durmaz).

#### Soru Üretim ve Kalite Kontrol Komutları
```bash
# A. Tek bir PDF dosyasından belirli bir ünite için exhaustive soru üretin
python scripts/notebooklm-exhaust.py --file "path/to/fizyoloji_solunum.pdf" --lesson "Fizyoloji" --unit "Solunum Sistemi"

# A2. Bir KLASÖR ya da birden çok PDF'i sırayla işleyin (her ünite sonunda ünite-kapsamlı denetim)
#     Klasördeki PDF'ler dosya adındaki sayıya göre doğal sıralanır (Ünite 1→2→…→10).
python scripts/notebooklm-exhaust.py --input "C:/.../Radyoloji Ünite PDF" --lesson "Radyoloji" --audit
python scripts/notebooklm-exhaust.py --input "u1.pdf" "u2.pdf" --lesson "Fizyoloji" --audit

# B. Üretim sonrası duplike/kavramsal kopyaları otomatik temizleyin (Smart Audit Ölüm Maçı)
python scripts/tools/smart_audit_pipeline.py --lesson "Fizyoloji" --delete
python scripts/tools/smart_audit_pipeline.py --lesson "Fizyoloji" --unit "Solunum Sistemi" --dry-run  # tek ünite, izole

# C. Hazır bir dosyadan (JSON / CSV / Markdown) toplu soru ekleyin — ajan gerekmez
python scripts/add_questions.py "sorular.json" --dry-run                                  # önce doğrula + rapor
python scripts/add_questions.py "sorular.csv" --lesson "Fizyoloji" --unit "Kalp Fizyolojisi"
python scripts/add_questions.py "sorular.md" --lesson "Fizyoloji" --unit "Kalp" --audit    # ekle + Ölüm Maçı önizleme
```

> CLI, dosyadaki her satırda `lesson`/`unit` varsa onları, yoksa `--lesson`/`--unit` bayraklarını kullanır. Reddedilen sorular `recovery/rejected/`'a loglanır; embedding ve chunked-write `deploy_to_supabase` içinde olduğu gibi korunur.

#### NotebookLM Hattı Dayanıklılık Notları
* **Oturum ön-kontrolü (preflight):** Üretim başlamadan önce NotebookLM oturumu doğrulanır; geçersizse ünite ortasında değil **baştan** anlaşılır mesajla durur (`notebooklm login` yönlendirmesi).
* **Uzun ömürlü oturum (session_keeper):** `scripts/session_keeper.py` kalıcı tarayıcı profilinden çerezi periyodik tazeler. Windows zamanlanmış görevi **"NotebookLM Session Keeper"** bunu 2 saatte bir çalıştırır (`run_session_keeper.bat`) — ilk `notebooklm login`'den sonra oturum kendini canlı tutar, haftalarca boşta kalıp düşmez. Log: `scripts/logs/session_keeper.log`.
* **Taşınabilir kütüphane yolu:** `LIB_PATH` artık `NOTEBOOKLM_LIB_PATH` ortam değişkeniyle override edilebilir; yol yoksa import anında net hata verir (sessiz başarısızlık yok).
* **Sıkı kapsam metriği:** Bir kavram ancak **doğrudan bir sorunun KÖKÜNDE** sorulduğunda "kapsandı" sayılır — yalnızca açıklamada geçmesi yetmez. Kapsam rakamı gerçeğe yakındır; sadece açıklamada geçen kavramlar "kalan" sayılıp sonraki turlarda doğrudan sorulur.
* **Çoklu hedef girişi (`--input`):** Klasör / tek / çoklu PDF sırayla işlenir (doğal sıralı).
* **Geçici hata retry:** Supabase chunk yazımı 5xx/timeout'ta otomatik olarak `2s→5s→12s` backoff ile tekrar dener — geçici hatada soru kaybı olmaz.
* **Kayıpsız JSON:** Parse edilemeyen ham AI yanıtı `recovery/raw/` altına dökülür (elle kurtarılabilir).
* **`--audit` bayrağı:** Ünite bitince otomatik **ünite-kapsamlı** Ölüm Maçı (`smart_audit_pipeline.py --unit`) tetiklenir — yeni sorular yalnızca o ünitedeki mevcut sorularla kıyaslanır.

---

### 4.3. Deneme Analizi & RAG Pipeline Kurulumu

Deneme sonrası akademik tekrar raporları için Pinecone + OpenAI gerekir. Proje kök dizinindeki `.env.local` dosyasına şunlar tanımlanmalıdır:

```env
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
PINECONE_API_KEY=...
MYPPDFS_HOST=myppdfs-0crkhvy.svc.aped-4627-b74a.pinecone.io
OPENAI_API_KEY=...
```

```bash
# Bugünkü tüm yanlışlar için raporlar üret
python scripts/generate_deneme_rag_reports.py

# Test: yalnızca ilk 3 yanlış (API kredisi harcamadan önce doğrulama)
python scripts/generate_deneme_rag_reports.py --limit 3

# Dry-run: rapor üretmeden bugünkü yanlışları listele
python scripts/generate_deneme_rag_reports.py --dry-run
```

> Pipeline async-first çalışır (Semaphore=3), her hata izole `try/except` içindedir: bir rapor başarısız olsa bile diğerleri devam eder. OpenAI 429'da 60s bekleyip 3 kez dener; Pinecone namespace'i boşsa global aramaya düşer. Detay: `WORKFLOW_DENEME_ANALIZI_RAG.md`.

---

## 5. VERİTABANI SCHEMA KURULUMU

Supabase SQL Editor paneline girerek sırasıyla aşağıdaki iki dosyayı çalıştırın:

1. **`supabase-schema.sql`**: Soru tablosunu, `active_sessions` ve `question_stats` tablolarını oluşturur, pgvector uzantısını aktif eder.
2. **`migration-v2-auth.sql`**: Supabase Auth ilişkilerini bağlar, verileri anonim cihazlardan auth kullanıcılarına taşımak için gerekli fonksiyonları yazar ve `pg_cron` otomatik silme tetikleyicilerini kurar.

---

## 6. SORU ÜRETİM VE KÜKÜM DÖNGÜSÜ MİMARİSİ

```
   [ PDF Kaynak Kitaplar ]
              │
              ▼  (split_pdf_auto.py ile 25 sayfalık üniteler halinde bölme)
   [ Ünite PDF Dilimleri ]
              │
              ▼  (notebooklm-exhaust.py --file / --input klasör|pdf'ler)
   ┌────────────────────────────────────────────────────────┐
   │ 1. PROMPT_ANCHOR ile tüm kavram çapa listesini çıkar   │
   │ 2. classify_anchors: yalnız SORU KÖKÜNDE doğrudan      │
   │    sorulmuş çapaları "kapsandı" say (açıklama HARİÇ)    │
   │ 3. Kalan çapaları 25'li gruplar halinde modele gönder  │
   └────────────────────────────────────────────────────────┘
              │
              ▼  (shared.py Kalite Kapısı)
   ┌────────────────────────────────────────────────────────┐
   │ - Şık bütünlüğü, kelime sayıları kontrol edilir        │
   │ - Bilgi sızıntısı ve zayıf açıklamalar elenir          │
   │ - Hata durumlarında Truncated JSON Repair devreye girer│
   └────────────────────────────────────────────────────────┘
              │
              ▼  (Supabase'e Chunked Yazım: 10'arlı gruplar)
        [ Supabase DB ]
              │
              ▼  (smart_audit_pipeline.py --unit - LSH & Cosine; yeni↔mevcut kıyas)
   ┌────────────────────────────────────────────────────────┐
   │ - O ünitedeki mevcut + yeni sorular birlikte taranır    │
   │ - 0.85+ Cosine similarity üzeri kopya adayları bulunur  │
   │ - Koruyucular: tip/evre/sınıf farkı + tıbbi zıtlık      │
   │ - Ölüm Maçı (DeepSeek-v4-pro): keep_1 / keep_2 /        │
   │   keep_both (farklı kavram) / remove_both (ikisi çöp)   │
   └────────────────────────────────────────────────────────┘
              │
              ▼
   [ Doğrulanmış Ünite Soru Havuzu ]
```

---

## 7. GELİŞTİRİCİ NOTLARI VE KRİTİK KISITLAMALAR

* **⛔ LAZY-LOAD YASAK (İSTİSNASIZ)**: Uygulama açılışta `fetchQuestions()` ile **TÜM soruları** belleğe yükler. Lazy-load (metadata-önce + ders/ünite seçilince dinamik çekim) denenmiş ve **kullanıcının soruları görememesine** yol açtığı için kalıcı olarak kaldırılmıştır. **Yeniden eklenmesi yasaktır** — adaptive motor, simülasyon havuzu ve interleaving tüm soru havuzunun aynı anda bellekte olmasına bağımlıdır. Pagination, `PAGE_SIZE=500`'lük paralel sayfalar + `withRetry(3)` ile yönetilir (Bkz: `gemini.md` §3.3).
* **Supabase `or` Filtre Bug'ı**: `.or()` bloğu içerisinde `not.in` filtresi kullanmak sorguları kilitler. Kopya veya silinen sorular filtrelenirken `quality_flag.is.null,quality_flag.eq.reviewed_keep` pozitif deseni tercih edilmeli, geri kalan temizlik client-side düzeyinde set filtresi ile tamamlanmalıdır (Bkz: `gemini.md` §3.3).
* **Supabase HTTP 500 Hatası**: Toplu soru kaydederken tek seferde 100+ embedding vektörü göndermek Supabase veritabanını kilitlemektedir. Yazma işlemi her zaman `_SUPABASE_WRITE_CHUNK = 10` şeklinde 10'arlı paketler halinde, chunked post olarak yapılmalıdır (Bkz: `shared.py` `_write_to_supabase`).
* **`user_id` Senkronizasyon Bütünlüğü (v3.1)**: İstatistik bulut yazımında (`pushStatsToCloud`) `user_id` yalnızca giriş yapılmışsa gönderilir. Giriş yokken alan payload'dan tamamen çıkarılır; böylece `device_id + question_id` conflict update'inde mevcut `user_id` korunur ve auth çözülmeden çalışan arka plan sync'i kullanıcının verisini yetim bırakmaz.
* **Oturum Kaydetme Debounce (v3.1)**: Yarım kalan oturum, her cevapta değil; ilk cevapta anında, sonraki cevaplarda periyodik (her 5'te bir flush + 3sn debounce) olarak buluta yazılır. Tarayıcı kapanışında `beforeunload` + `keepalive` fetch bekleyen kaydı garantiler — veri kaybı yaşanmaz, gereksiz ağ trafiği oluşmaz.

---

## 8. ATLAS (AI ASİSTAN) İŞ AKIŞLARI

Bazı yetenekler arayüz yerine AI asistan (Atlas) üzerinden sohbetle çalıştırılır:

* **Günün Denemesi Oluşturma**: Aday konularını sohbete yazar → Atlas, ders/üniteleri veritabanından doğrular, `%80 yeni + %20 zor/orta/kolay` dağılımıyla soruları seçer ve `daily_exams` tablosuna kaydeder. `question_ids` daima `::uuid[]` cast edilir. Oyun kitabı: `WORKFLOW_GUNUN_DENEMESI.md`.
* **Manuel Soru Ekleme (`/soru-ekle`)**: Artık birincil yol **ajan-bağımsızdır** (bkz. §2.4 — `scripts/add_questions.py` CLI veya uygulama içi "Soru Ekle" formu). Atlas yalnızca **serbest-biçimli/dağınık ham metni** kanonik JSON şemasına dönüştürmek gerektiğinde devreye girer; dönüşüm sonrası aynı kalite kapısı (tam metin · 5 dolu şık · doğru cevap · yeterli açıklama · bilgi sızıntısı/totoloji · **AI dolgu cümlesi ve mojibake reddi**) ve `shared.deploy_to_supabase` (embedding + 10'arlık chunked write) kullanılır; opsiyonel `smart_audit_pipeline.py` Ölüm Maçı ile kopya kontrolü yapılır. İş akışı: `.agent/workflows/soru_ekle.md`.

---
**DUSBANKASI — KULLANIM REHBERİ v4.3 — SON GÜNCELLEME: 2026-05-26**
