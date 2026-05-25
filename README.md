Bu dosya projenin yeteneklerini ve kullanımını açıklamak amacıyla oluşturulmuştur ve her yapılan değişiklik sonrası ilgili kısım güncel versiyon ile güncellenir, built alınır ve deploy edilir.

# DUSBANKASI — Diş Hekimliği Uzmanlık Sınavı AI Adaptif Soru Bankası

> Diş Hekimliği Uzmanlık Sınavı (DUS) hazırlık sürecinde maksimum verim ve kalıcı öğrenme sağlamak üzere geliştirilmiş, yapay zeka destekli ve FSRS-5 algoritmalı kişiselleştirilmiş soru bankası platformu.
> 
> Canlı Sürüm: **https://odusbircanavari.vercel.app**

---

## 1. VİZYON VE PROJENİN AMACI

DUSBANKASI, geleneksel soru bankalarının "tek tip ve doğrusal" yapısını yıkarak, her adayın öğrenme hızına ve unutma eğrisine göre dinamik olarak şekillenen bir eğitim ekosistemidir. 
* **Soru Üretiminde %100 Kapsam (Exhaustive)**: Geliştirilen Playwright destekli NotebookLM soru üretim hattı sayesinde, PDF kaynak kitaplarındaki her tıbbi kavram satır satır taranır ve sorgulanmamış tek bir çapa bırakılmayacak şekilde soru seti oluşturulur.
* **Kalıcı Öğrenmede Spaced Repetition (FSRS-5)**: SuperMemo-2'den çok daha üstün olan güce dayalı unutma eğrisi (Power-law forgetting curve) FSRS-5 modeli ile, her sorunun hafızadaki tutunma gücü hesaplanır ve vadesi gelen sorular en doğru zamanda adayın önüne getirilir.
* **Klinik Odaklı Kürasyon**: smart_audit_pipeline.py ile veritabanı kopyalardan arındırılırken, klinik vaka senaryolu sorulara pozitif öncelik verilerek gerçek DUS sınavına en yakın çalışma deneyimi sunulur.

---

## 2. KULLANICI YETENEKLERİ VE ÇALIŞMA MODLARI

Platform, adayın hazırlık sürecinin farklı aşamalarına hitap eden 6 özelleştirilmiş çalışma modu sunar:

### 2.1. Arayüz Çalışma Modları
1. **Ünite Çalışma Modu**: Seçilen ünitedeki tüm soruları listeleyen, görülmemiş soruları önceliklendiren ve adayın FSRS gelişimini başlatan temel çalışma modudur.
2. **Deneme Sınavı Modu**: Birden fazla ders veya üniteden seçilen konularla karma soru setleri oluşturur. Öğrenilen konuların birbirine karışmasını engellemek için **Greedy Interleaving** sıralaması kullanır.
3. **Gerçek Sınav Simülasyonu**: Gerçek DUS formatında, zaman sınırlı (örneğin 120 dakika) ve tüm derslerden homojen dağılımlı (unseen sorulara 2 kat ağırlık vererek) 50 ila 200 sorudan oluşan kapsamlı sınav simülatörüdür.
4. **Zayıf Konu Tekrar Modu**: Adayın geçmiş denemelerinde veya günlük çalışmalarında hata oranı en yüksek olan ünite ve soruları öncelikli olarak karşısına çıkaran akıllı rehabilitasyon modudur.
5. **FSRS Vadesi Gelenler (Due Questions)**: FSRS-5 algoritmasının bugün tekrar edilmesini zorunlu kıldığı, unutulma eşiğindeki soruları içeren Spaced Repetition çalışma alanıdır.
6. **Favori Sorular Paneli**: Adayın yıldızla işaretlediği, tekrar incelemek istediği zorlayıcı veya öğretici sorulardan oluşan özel havuzdur.

### 2.2. Adaptif Öğrenme Motoru Yetenekleri
* **3-Sinyalli Önceliklendirme (Priority Queue)**: Soru sıralaması; FSRS gecikme süresi (%50), hata oranı sıklığı (%35) ve görülmemiş soru keşfi (%15) sinyallerinin birleşimiyle dinamik olarak optimize edilir.
* **Oturum Kurtarma (Resumable Session)**: Çalışma esnasında tarayıcı kapansa bile en son çözülen soru, kalan süre ve verilen yanıtlar hem tarayıcı belleğinde (`localStorage`) hem de bulut tabanlı `active_sessions` üzerinde saklanır. Oturum kesintisiz olarak devam ettirilir.
* **Hata Analiz Paneli (Error Analytics)**: En çok yanlış yapılan şık kombinasyonlarını (Error Pattern) ve en zayıf olunan 3 üniteyi anlık olarak görselleştirir.

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
| **Yapay Zeka (AI)** | Gemini 2.0 Flash / OpenAI | NotebookLM ile soru üretimi ve text-embedding-3-small ile vektörleme. |
| **Otomasyon** | Playwright (Python 3.12) | NotebookLM API çerez yönetimi ve 7/24 kesintisiz soru üretimi. |

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
```

#### Soru Üretim ve Kalite Kontrol Komutları
```bash
# A. Tek bir PDF dosyasından belirli bir ünite için exhaustive soru üretin
python scripts/notebooklm-exhaust.py --file "path/to/fizyoloji_solunum.pdf" --lesson "Fizyoloji" --unit "Solunum Sistemi"

# B. Üretim sonrası duplike/kavramsal kopyaları otomatik temizleyin (Smart Audit Ölüm Maçı)
python scripts/tools/smart_audit_pipeline.py --lesson "Fizyoloji" --delete
```

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
              ▼  (notebooklm-exhaust.py --file)
   ┌────────────────────────────────────────────────────────┐
   │ 1. PROMPT_ANCHOR ile tüm kavram çapa listesini çıkar   │
   │ 2. classify_anchors ile sorgulanmamış olanları ayır    │
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
              ▼  (smart_audit_pipeline.py - LSH & Cosine Similarity)
   ┌────────────────────────────────────────────────────────┐
   │ - 0.85 Cosine similarity üzeri kavramsal kopyalar bul  │
   │ - Ölüm Maçı: Klinik vakalar korunur, zayıflar silinir   │
   └────────────────────────────────────────────────────────┘
              │
              ▼
   [ Doğrulanmış Ünite Soru Havuzu ]
```

---

## 7. GELİŞTİRİCİ NOTLARI VE KRİTİK KISITLAMALAR

* **Supabase Pagination Sınırı**: Veritabanından soru çekerken `.match({ lesson, unit })` kullanarak doğrudan tüm detayları çekmek ağ dar boğazına yol açar. Bu nedenle açılışta `fetchQuestionMetadata` ile sadece hafif index verisi yüklenmeli, soru detayları ders seçildikten sonra Lazy-Load yöntemiyle çekilmelidir.
* **Supabase `or` Filtre Bug'ı**: `.or()` bloğu içerisinde `not.in` filtresi kullanmak sorguları kilitler. Kopya veya silinen sorular filtrelenirken `quality_flag.is.null,quality_flag.eq.reviewed_keep` pozitif deseni tercih edilmeli, geri kalan temizlik client-side düzeyinde set filtresi ile tamamlanmalıdır (Bkz: `gemini.md` §3.3).
* **Supabase HTTP 500 Hatası**: Toplu soru kaydederken tek seferde 100+ embedding vektörü göndermek Supabase veritabanını kilitlemektedir. Yazma işlemi her zaman `_SUPABASE_WRITE_CHUNK = 10` şeklinde 10'arlı paketler halinde, chunked post olarak yapılmalıdır (Bkz: `shared.py` `_write_to_supabase`).
* **`user_id` Senkronizasyon Bütünlüğü (v3.1)**: İstatistik bulut yazımında (`pushStatsToCloud`) `user_id` yalnızca giriş yapılmışsa gönderilir. Giriş yokken alan payload'dan tamamen çıkarılır; böylece `device_id + question_id` conflict update'inde mevcut `user_id` korunur ve auth çözülmeden çalışan arka plan sync'i kullanıcının verisini yetim bırakmaz.
* **Oturum Kaydetme Debounce (v3.1)**: Yarım kalan oturum, her cevapta değil; ilk cevapta anında, sonraki cevaplarda periyodik (her 5'te bir flush + 3sn debounce) olarak buluta yazılır. Tarayıcı kapanışında `beforeunload` + `keepalive` fetch bekleyen kaydı garantiler — veri kaybı yaşanmaz, gereksiz ağ trafiği oluşmaz.

---
**DUSBANKASI — KULLANIM REHBERİ v3.1 — SON GÜNCELLEME: 2026-05-25**
