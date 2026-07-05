# DUSBANKASI — Kapsamlı Sistem Denetimi ve İyileştirme Planı

## Proje Özeti

**DUSBANKASI**, DUS (Diş Hekimliği Uzmanlık Sınavı) hazırlığı için geliştirilmiş, **tek kullanıcıya** (projenin sahibi) yönelik bir soru bankası uygulamasıdır. Proje `c:\Users\FURKAN\Desktop\Projeler\DUSBANKASI` dizininde bulunur.

### Teknoloji Yığını
- **Frontend**: React 19 + TypeScript + Vite 8, Tailwind CSS v4, Framer Motion v12, Zustand, Supabase JS v2
- **Backend/DB**: Supabase (PostgreSQL + PostgREST + Realtime + Edge Functions + Storage)
- **Offline Layer**: IndexedDB (skeleton cache + content cache) — `src/lib/idb.ts`
- **Üretim Pipeline**: Python 3 — `scripts/notebooklm_mcp_exhaust.py` (NotebookLM MCP HTTP üzerinden exhaustive kavram çapalama), `scripts/tools/smart_audit_pipeline.py` (semantik kopya denetimi, DeepSeek LLM kürasyonu)
- **Deployment**: Vercel

### Kritik Kısıtlar (Ajanın Her Kararında Gözetmesi Gerekenler)
1. **Supabase Free Tier DB Boyutu**: 0.5 GB limit — mevcut durum ~530 MB (limit dışında). Boşaltma şart.
2. **Supabase Egress Kotası**: PostgREST + Realtime toplamda aylık 5 GB. Şu an kota baskısı altında.
3. **Tek Kullanıcı**: Karmaşık multi-tenant güvenlik gereksiz; basit ve hızlı çözümler tercih edilir.
4. **Aktif Sınav Takvimi**: DUS 2026/2 — 2026-11-01. Her iyileştirme öğrenme verimliliğini doğrudan etkiler.

---

## AJAN İÇİN TALİMATLAR

Sen, bu projeyi **sıfır ön yargı ile** inceleyecek, mevcut çözümleri sorgulayacak ve bulduğun her şeyi eksiksiz raporlayacak bağımsız bir teknik auditor ve mühendissin.

Aşağıdaki alanlarda **kapsamlı bir araştırma** yap. Her alan için projenin gerçek kaynak dosyalarını oku, ölçümler yap, sorunları tespit et. Araştırma tamamlandığında **başka bir ajanın doğrudan uygulayabileceği** netlikte, önceliklendirilmiş bir implementation plan üret.

**Ajana yönlendirme yoktur.** Hangi sorunun daha kritik olduğuna, hangi çözümün daha iyi olduğuna ve hangi iyileştirmeyi daha önce yapacağına tamamen sen karar verirsin. Ancak her kararını gerekçelendir.

---

## İNCELENMESİ GEREKEN ALANLAR

### ALAN 1 — Supabase Veritabanı Boyut Krizi

**Bağlam:**
- `questions` tablosu: ~18.000 satır (aktif ~12.000), 3 adet `vector(1536)` sütunu (`embedding`, `stem_embedding`, `explanation_embedding`). Her vektör 6 KB → tablo büyüklüğünün büyük bölümü buradan geliyor.
- Şu an 530 MB kullanımda, free tier limiti 0.5 GB. Limit aşıldı, ek soru eklemek mümkün değil.

**Araştırılacaklar:**
- `supabase-schema.sql` ve `supabase/migrations/` dosyalarını oku, tam tablo yapısını çıkar.
- `embedding` (text-embedding-3-small → 1536d legacy), `stem_embedding` (text-embedding-3-large → 1536d), `explanation_embedding` (text-embedding-3-large → 1536d) sütunlarının boyut katkısını hesapla: kaç satır var, ortalama ne kadar yer kaplıyor?
- `smart_audit_pipeline.py` ve `audit_logic.py` kodunu oku: hangi embedding sütunları fiilen kullanılıyor? `embedding` legacy sütunu hâlâ aktif mi yoksa yalnızca `stem_embedding` + `explanation_embedding` mi kullanılıyor?
- `deleted_records` tablosu var mı, ne kadar yer tutuyor?
- `question_stats`, `active_sessions`, `user_data`, `daily_exams`, `exam_answers` tablolarının boyut katkısını değerlendir.
- IndexedDB `contentCache` mobil/masaüstü tarayıcıda kaç MB tutuyor — bu veritabanı boyutunu etkiliyor mu?

**Çözüm Alternatifleri Değerlendirmesi:**
- **Seçenek A**: Legacy `embedding` sütununu tamamen kaldır (artık `stem_embedding` + `explanation_embedding` var). Tasarruf tahmini nedir?
- **Seçenek B**: `stem_embedding` ve `explanation_embedding` boyutunu 1536'dan 512'ye (veya 256'ya) düşür — `text-embedding-3-large` natif olarak boyut küçültmeyi (Matryoshka) destekler. Denetim kalitesi nasıl etkilenir?
- **Seçenek C**: Vektörleri Supabase'den tamamen çıkar, Pinecone'da sakla (`pinecone-mcp-server` zaten projeye bağlı). `smart_audit_pipeline.py` Pinecone client kullanımını zaten içeriyor (`scripts/lib/pinecone_client.py`). Bu yaklaşımın maliyeti ve karmaşıklığı nedir?
- **Seçenek D**: Düşük kaliteli soruları belirleyip silmeye devam et (kalite bazlı sadeleştirme — kullanıcı zaten yapıyor). Hangi kriterleri otomatize edilebilir?
- **Seçenek E**: Supabase Pro'ya geç ($25/ay). Bu son çare mi?

Her seçenek için: beklenen boyut kazancı, implementasyon süresi, risk ve yan etkileri değerlendir.

---

### ALAN 2 — Supabase Egress Kotası Denetimi

**Bağlam:**
- Egress kotası: 5 GB/ay (PostgREST + Realtime birlikte).
- v4.31'de Skeleton mimarisi ile egress ~20× azaltıldı (14 MB → ~250 KB açılış).
- v4.32'de `useRealtimeStats.ts` anonim kullanıcıda kanal açmıyor, sekme arka plandayken kapatıyor.

**Araştırılacaklar:**

#### 2A — PostgREST Egress Analizi
- `src/lib/supabase.ts` dosyasını tamamen oku. Tüm Supabase sorgularını listele.
- `fetchSkeletons()`: ne sıklıkla çağrılıyor, delta sync ne zaman devreye giriyor, her çağrıda ortalama kaç byte gidiyor?
- `fetchQuestionsByIds()`: batch başına kaç soru, her soru kaç KB, `contentCache` hit oranı %100'e ulaşıyor mu yoksa her oturumda tekrar mı çekiliyor?
- `pullAllDeviceStats()`: `question_stats` tablosundan kullanıcıya ait kaç satır çekiliyor? Her sync işleminde kaç KB egress gidiyor?
- `pushStatsToCloud()` → `upsert_stats_batch` RPC: her soru çözümünde kaç istatistik satırı push ediliyor?
- `active_sessions` tablosunda `save_active_session` RPC her cevap sonrası çağrılıyor mu? Kompakt session format ne kadar veri gönderiyor?
- `daily_exams` tablosu: `loadTodaysDailyExam()` günde kaç kez çağrılıyor?
- `script/shared.py`: `get_questions_for_unit()` her ünite başında tam soru metnini çekiyor — bu PostgREST egressini script pipeline'da da etkiliyor mu?

#### 2B — Realtime Egress Analizi
- `useRealtimeStats.ts` detaylıca incele: filtre `user_id=eq.{userId}&device_id=neq.{deviceId}`. Sunucu tarafı filtreleme düzgün çalışıyor mu? Tüm değişiklikler client'a iletilip orada filtre mi yapılıyor (high egress), yoksa sunucu filtresi geçerli mi (low egress)?
- Tek kullanıcı olduğu için Realtime tamamen kapatılabilir mi? Cross-device sync başka yollarla yapılabilir mi?
- `notebooklm_mcp_exhaust.py` Supabase'e yazarken `_write_to_supabase()` içinde direct HTTP POST kullanıyor — bu Realtime'ı tetikliyor mu, egress'e katkısı var mı?

#### 2C — Script Pipeline Egress
- `scripts/shared.py`'daki `get_questions_for_unit()`, `get_existing_units()` fonksiyonları `supabase_get()` ile REST GET yapıyor. Ünite başına kaç soru çekiliyor, embedding vektörleri dahil mi? (SELECT kolonlarına bak.) Eğer vektörler de çekiliyorsa bu büyük bir egress kaynağı olabilir.
- `scripts/tools/smart_audit_pipeline.py` ve `scripts/lib/audit_logic.py`: `find_duplicates_chunked()` ve RPC çağrıları — her ünite denetiminde ne kadar egress gidiyor?
- `scripts/tools/backfill_bi_encoder.py`: embedding backfill işlemleri ne kadar egress harcar?

**Bulguları önemliden önemsize sıraladıktan sonra**, her kaynak için günlük/aylık egress tahminini hesapla ve topla. Aylık 5 GB limitinin nerelerde en çok harcandığını belirle. Somut azaltma önerileri sun.

---

### ALAN 3 — Soru Çözüm Akışı Hızı ve Animasyon Kalitesi

**Bağlam:**
- `src/components/quiz/QuizView.tsx`, `QuestionCard.tsx`, `ExplanationPanel.tsx`, `QuizNavigation.tsx` — soru çözüm ekranını oluşturuyor.
- Framer Motion v12 kullanılıyor. `AnimatePresence mode="wait"` ile soru geçişleri yapılıyor.
- `QuestionCard.tsx`: `motion.div` ile `spring(600, 32)` animasyon, seçenek butonları `motion.button`.
- Kullanıcı şikayeti: akış hızı ve animasyonlar yeterince seri ve hızlı değil.

**Araştırılacaklar:**
- `QuizView.tsx`'teki `AnimatePresence`'ın `mode="wait"` mı yoksa `mode="sync"` mi olduğunu kontrol et — `wait` modu exit animasyonu bitene kadar yeni soruyu render etmez, bu gecikmeye neden olur.
- `QuestionCard.tsx`'teki `initial={{ opacity: 0, y: 10, scale: 0.99 }}` → `animate={{ opacity: 1, y: 0, scale: 1 }}` geçişinin spring parametrelerini (`stiffness: 600, damping: 32`) incele. Bu değerler yeterince hızlı bir geçiş sağlıyor mu?
- Seçenek butonlarındaki animasyonlar: doğru/yanlış sonrası `scale: [1, 1.015, 1]` pulse ve glow overlay animasyonları ne kadar sürüyor?
- `ExplanationPanel.tsx`'i oku: cevap sonrası açıklama panelinin görünür olması için CSS transition (`opacity + transform, 0.18s`) yeterince hızlı mı?
- `handleNext()` fonksiyonunda `requestAnimationFrame` ile scroll reset yapılıyor — bu gecikmeye katkısı var mı?
- `QuizNavigation.tsx`'teki "Sonraki" / "Geç" butonlarının click response süresi ne kadar?
- `confetti` (canvas-confetti) doğru cevaplarda çalışıyor — bu performansı etkiliyor mu, özellikle mobilde?
- Klavye kısayolları (`useKeyboardShortcuts`) ne kadar hızlı tepki veriyor?

**Somut İyileştirme Önerileri:**
- Animasyon sürelerini optimalleştir (hedef: soru geçişi <100ms hissedilen gecikme).
- `AnimatePresence` mod analizi ve gerekirse değişiklik önerisi.
- Mobil ve masaüstü için farklı animasyon profilleri düşünülmeli mi?
- `prefers-reduced-motion` zaten var — bu doğru uygulanmış mı?

---

### ALAN 4 — Site Tasarımı Tutarsızlıkları ve Acil Düzeltmeler

**Bağlam:**
- `src/index.css`: Ethereal Glass dark mode tasarım sistemi, double-bezel, glassmorphism.
- Üç tema: `dark` (default), `light`, `oled`.
- `src/App.tsx` (~2150 satır): monolitik ana dosya, tüm view'lar burada render ediliyor.
- `src/components/`: quiz, ai, admin, charts, layout, ui alt dizinleri.

**Araştırılacaklar:**
- `src/App.tsx`'in tamamını oku (2150 satır). Ders seçim ekranı, ünite seçim ekranı, ayarlar paneli, istatistikler, simülasyon kurulum ekranı, günlük plan gibi tüm view'ların render bölümlerini bul.
- Her view için: tasarım tutarsızlıklarını (farklı padding/margin/renk/tip kullanımları), light mode'da kırılan elementleri, OLED temada okunaksız metinleri ve eksik responsive davranışları tespit et.
- Tailwind v4 kullanımında eski `className` string concatenation yerine CSS değişkenleri kullanımı tutarlı mı?
- `themeColors` nesnesi (`src/theme/`) içindeki renk değerleri CSS değişkenleriyle çakışıyor mu?
- `StatisticsView.tsx` (58 KB!) incelenecek: Bu dosya çok büyük mü, bölünmeli mi? Grafik kütüphaneleri (D3) doğru kullanılıyor mu, gereksiz re-render var mı?
- `SimulationResultView.tsx` ve `DailyPlanView.tsx`: light mode uyumluluğu kontrol et.
- `AuthModal.tsx`: dark/light mode geçişinde form elemanları doğru görünüyor mu?
- `src/components/admin/AddQuestionView.tsx`: Admin paneli tek kullanıcıya özel olduğu için karmaşık güvenlik gereksiz — yine de UI tutarlılığı kontrol et.
- Mobil (375px genişlik) responsive davranış: navbar, quiz ekranı, istatistik kartları.
- `App.tsx`'teki `CountdownWidget` (DUS 2026/2 geri sayım): doğru çalışıyor mu?
- `body::before` mesh gradient `light` ve `oled`'de kapatılıyor — bu doğru uygulanmış mı?

**Acil Düzeltme Listesi:**
Her sorun için: dosya, satır aralığı, sorun açıklaması, önerilen düzeltme.

---

### ALAN 5 — App.tsx Mimarisi ve Teknik Borç

**Bağlam:**
- `src/App.tsx` 2150 satır — tüm view'lar, handler'lar, state yönetimi burada.
- `QuizView` zaten extract edilmiş (`src/components/quiz/QuizView.tsx`).
- Diğer view'lar (ders seçimi, ünite seçimi, simülasyon kurulumu, ayarlar vs.) hâlâ App.tsx içinde inline.

**Araştırılacaklar:**
- `App.tsx`'teki hangi view render bölümleri en büyük kod bloklarını oluşturuyor? (satır sayılarını bul)
- State yönetimi: `useState` sayısı kaç? Zustand kullanımı (`useSettingsStore`) nerede? State fazla mı merkezileşmiş?
- Gereksiz re-render riski: `useCallback` ve `useMemo` kullanımı yeterli mi?
- `handleExportPDF` fonksiyonu 100+ satır inline HTML şablonu içeriyor — bu ayrıştırılabilir mi?
- `isHighYieldMode`, `isHighYieldExam`, `isFavoritesExam` gibi çakışan boolean flag'ler — daha temiz bir `examMode` enum'u ile değiştirilebilir mi?
- `getMockDetails()` fonksiyonu preview mode için — production'da mı kalmalı?
- Bileşen ağacının TypeScript tip güvenliği: `as unknown as any[]` ve `as unknown as Question[]` cast'leri tehlikeli mi?

**Önerilen Refactoring Planı:**
Önemsizden kritik sıralamayla, her değişikliğin risk/fayda analizini içer. Acil düzeltmeler ayrı tutulsun.

---

### ALAN 6 — notebooklm_mcp_exhaust Pipeline Güçlendirmesi

**Bağlam:**
- `scripts/notebooklm_mcp_exhaust.py` (~1070 satır): NotebookLM MCP HTTP üzerinden exhaustive kavram çapalama ve soru üretimi. FAZ 0-5 mimarisi.
- `scripts/config.py`: MCP_URL, NOTEBOOK_ID, batch limitler.
- `scripts/shared.py`: kalite gate, Supabase yazma, checkpoint.
- `scripts/lib/audit_logic.py`: Bi-encoder (stem + explanation) + Jaccard leksikal denetim + DeepSeek LLM ölüm maçı.

**Araştırılacaklar:**

#### 6A — Pipeline Güvenilirliği
- `NotebookLMMCPClient._post()` metodunu oku: `timeout=600` saniye — bu yeterli mi? Uzun sorgularda `notebook_query_status` polling'i 600 deneme × 3 saniye = 30 dakika üst sınır — bu gerçekçi mi?
- `ensure_auth()` fonksiyonu: `auth_status=stale` durumunda `refresh_auth` + `notebook_get` canlı testi yapıyor. Bu yeterince sağlam mı?
- `chunk_size = 25` kavram: Bu boyut NotebookLM'in bağlam penceresine göre optimal mi?
- `classify_anchors()` fonksiyonu: kelime örtüşmesi ≥ %60 eşiği ile kavram kapsama tespiti yapıyor. Bu threshold çok gevşek veya çok katı mı? Yanlış pozitif / yanlış negatif analizi yapılabilir mi?
- `check_saturation()`: "DOYGUNLUK" keyword'ü — model gerçekten bunu yazıyor mu, yoksa bu kontrol bypass ediliyor mu?
- `scripts/run_mcp_pipeline.py`: checkpoint/resume mekanizması var mı, nasıl çalışıyor?

#### 6B — Egress Etkisi (Pipeline tarafı)
- `scripts/shared.py`'daki `get_questions_for_unit()`: SELECT'e bak — `embedding` vektörleri dahil mi? Dahilse, her ünite için büyük egress harcıyor demektir. Bu vektörler `classify_anchors()` için kullanılmıyor — sadece `question` ve `correct_answer` alanları lazım.
- `deploy_to_supabase()` → `_write_to_supabase()`: Embedding üretimi (OpenAI, 3 × `text-embedding-3-large` @ 1536d) her soru için yapılıyor. Vektör boyutu küçültülebilir mi?

#### 6C — Kalite ve Hız
- `MAX_BATCHES_PER_UNIT` ve `SATURATION_THRESHOLD` değerlerini `config.py`'dan oku. Optimal mi?
- `INTER_BATCH_COOLDOWN` değeri ne kadar? NotebookLM rate limiti var mı?
- `audit_logic.py`'daki `find_duplicates_chunked()` ve leksikal fallback mekanizması — ne zaman devreye giriyor, ne kadar güvenilir?
- DeepSeek LLM kürasyonu (`scripts/lib/openai_client.py`): hangi model kullanılıyor, kaç token tüketiliyor?

**Önerilen İyileştirmeler:** Pipeline hızını, güvenilirliğini ve egress verimliliğini artıracak somut değişiklikler.

---

### ALAN 7 — Yedekleme ve Felaket Kurtarma

**Bağlam:**
- Tek kullanıcı, tek Supabase projesi, free tier. Yedekleme yok.
- `scripts/export_all_data.py` var mı? Ne yapıyor?
- `scripts/recovery/` klasörü: checkpoint dosyaları burada.
- İstatistikler: localStorage + `question_stats` tablosu + `user_data` tablosu.

**Araştırılacaklar:**
- `scripts/export_all_data.py` dosyasını oku: tam bir veri yedeği alıyor mu? (sorular + istatistikler + günlük denemeler)
- Supabase free tier'da otomatik yedekleme var mı? Yoksa manuel yedek nasıl alınıyor?
- `scripts/safe_sync.ps1` ne yapıyor?
- Eğer Supabase free tier kotası aşılırsa (zaten aşıldı) ne olur? Veri silinir mi, yoksa yazma engellenir mi?
- `scripts/recovery/` klasöründe ne kadar pending checkpoint var? Bunlar güncel mi?
- `active_sessions` tablosu: kayıp session senaryosu — kullanıcı 50. soruda cihaz kapanırsa ne olur?

**Önerilen Yedekleme Stratejisi:**
- Günlük otomatik JSON export (cron veya PowerShell zamanlanmış görev)
- İstatistiklerin JSON olarak export edilmesi
- Felaket kurtarma senaryosu: tüm veriyi sıfırdan geri yükleme prosedürü

---

### ALAN 8 — Adaptif Öğrenme ve İstatistik Motoru

**Bağlam:**
- `src/lib/adaptive.ts`: `buildSmartQueue`, `buildUnitQueue`, `buildExamPool`, `buildSimulationPool`
- `src/lib/stats.ts`: `computeOverviewStats`, `loadAllStats`, `saveQuestionStat` — localStorage tabanlı
- `src/lib/metrics.ts`, `src/lib/projections.ts`, `src/lib/dusPlacement.ts`
- `src/components/StatisticsView.tsx` (58 KB): İstatistik görselleştirme

**Araştırılacaklar:**
- `buildSmartQueue()` algoritmasını oku: hangi faktörleri (zorluk, son görülme, doğruluk) nasıl ağırlıklıyor? FSRS veya spaced repetition var mı?
- `computeOverviewStats()`: 12.000+ soru × localStorage = performans sorunu olabilir mi?
- `dusPlacement.ts`: DUS sınavı simülasyonu için puan tahmini nasıl yapılıyor? Güncel mi?
- `projections.ts`: Hedef tarihe göre (2026-11-01) günlük soru hedefi hesaplaması. Doğru mu?
- `metrics.ts`: Hangi metrikleri hesaplıyor?
- `StatisticsView.tsx` (58 KB): Hangi bileşenler içeriyor? D3 kullanımı memory leak'e yol açıyor mu? `useEffect` temizlikleri var mı?
- `getWeakQuestionIds()`: Zayıf soru tespiti doğru mu? Soru silinince istatistiklerde boş referans kalıyor mu?

**Önerilen İyileştirmeler:** Öğrenme verimliliğini artıracak algoritmik veya UI değişiklikleri.

---

### ALAN 9 — Mevcut Kod Kalitesi ve TypeScript Sağlığı

**Araştırılacaklar:**
- `src/App.tsx`'teki `as unknown as any[]` ve `as unknown as Question[]` type cast'leri neden var? Güvenli mi?
- `QuestionSkeleton` ve `Question` tipleri arasındaki fark nedir? (`src/data.ts` + `src/types/app.ts`)
- `useQuestions.ts` hook'u: ne döndürüyor, nasıl çalışıyor?
- `eslint.config.js`'e bak — hangi kurallar etkin?
- `vitest.config.ts` ve `src/lib/__tests__/` — mevcut testler neler? Kapsam yeterli mi?
- Python script'lerinde tip güvenliği nasıl? `scripts/lib/` dosyaları type annotation kullanıyor mu?

---

### ALAN 10 — Kullanıcı Deneyimi İyileştirmeleri (Sınav Odaklı)

**Tek kullanıcı perspektifinden**, DUS sınavına hazırlık için kritik UX sorunlarını bul:

**Araştırılacaklar:**
- Günlük deneme akışı: `loadTodaysDailyExam()` → `handleDailyExamStart()` zincirini incele. Kullanıcı sabah açtığında sorular hazır mı, yoksa beklemesi mi gerekiyor?
- High Yield modu: `isHighYieldMode`, `isHighYieldExam` flag'leri — bu moda geçiş kolay mı?
- Favori sorular sistemi: `toggleFavoriteInHook()` cloud'a yazıyor — gecikmeli UI güncellemesi var mı?
- Soru rapor etme (`flagQuestion()`): raporlanan sorular anında ekrandan kaldırılıyor mu?
- `handleGoBack()` mantığı: tüm appState geçişleri doğru mu? Geri tuşu (browser popstate) her durumda çalışıyor mu?
- Splash screen (video): `logo-animation.mp4` her yüklemede mi oynuyor yoksa sadece ilk açılışta mı?
- Dark/light/OLED tema geçişi ani mi, yoksa smooth mu?
- Soru sayacı ve progress bar: exam modunda kullanıcının nerede olduğunu net gösteriyor mu?

---

## ARAŞTIRMA METODOLOJISI

1. **Dosyaları Oku**: Yukarıda belirtilen tüm dosyaları gerçekten oku. Tahmin etme.
2. **Çapraz Referans Yap**: `supabase.ts` ↔ `idb.ts` ↔ `useQuestions.ts` ↔ `App.tsx` zincirini takip et.
3. **Sayıları Hesapla**: Egress tahmini, boyut tahmini gibi konularda varsayımı değil, kodu baz al.
4. **Önceliklendir**: Her alan içinde "kritik", "önemli", "minor" şeklinde sırala.
5. **Gerçekçi Ol**: Tek kullanıcı, aktif sınav dönemine 5 ay kalmış. Karmaşık altyapı değişiklikleri yerine yüksek etki/düşük risk çözümleri öner.

---

## BEKLENİLEN ÇIKTI: IMPLEMENTATION PLAN

Araştırma tamamlandığında, aşağıdaki yapıda bir `implementation_plan.md` üret:

### Plan Yapısı:

```
# DUSBANKASI Kapsamlı İyileştirme Planı — [Tarih]

## Özet
- Tespit edilen kritik sorunlar
- Tespit edilen önemli sorunlar
- Tespit edilen minor sorunlar
- Önerilen toplam değişiklik sayısı

## Acil Müdahale Listesi (Bu Hafta)
Her madde için: [dosya yolu] → [sorun] → [önerilen değişiklik] → [beklenen etki]

## Orta Vadeli İyileştirmeler (Bu Ay)
Her madde için: [bileşen] → [sorun] → [çözüm] → [risk]

## Uzun Vadeli Refactoring (Seçimlik)
Her madde için: [alan] → [mevcut durum] → [hedef durum] → [neden beklenebilir]

## Alan 1: Veritabanı Boyut Çözümü
- Seçilen yaklaşım ve gerekçesi
- Adım adım uygulama
- Rollback planı

## Alan 2: Egress Optimizasyonu
- En büyük 3 egress kaynağı ve azaltma planı
- Beklenen aylık egress tasarrufu

## Alan 3: Quiz Animasyon Optimizasyonu
- Değiştirilecek animasyon parametreleri (dosya, satır, mevcut değer → yeni değer)

## Alan 4: Tasarım Tutarsızlıkları
- Acil düzeltme listesi (dosya, satır, sorun, düzeltme)

## Alan 5: App.tsx Refactoring
- Önerilen bileşen ayrıştırma planı (öncelikli ve opsiyonel)

## Alan 6: Pipeline İyileştirmeleri
- `notebooklm_mcp_exhaust.py` güçlendirme değişiklikleri

## Alan 7: Yedekleme Stratejisi
- Önerilen yedekleme scripti / prosedür

## Doğrulama Planı
- Her değişiklik için test ve doğrulama adımları
```

---

## BAŞLARKEN

1. `c:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\GEMINI.md` dosyasını oku — projenin teknik geçmişini anla.
2. `c:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\supabase-schema.sql` ve `supabase/migrations/` dizinini oku — tam DB şemasını anla.
3. `c:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts/config.py` oku — tüm konfigürasyon değerlerini gör.
4. Ardından alan bazlı araştırmana başla.

**Herhangi bir şeyi tahmin etme. Dosyaları oku, kodu analiz et, gerçeklere dayalı plan üret.**
