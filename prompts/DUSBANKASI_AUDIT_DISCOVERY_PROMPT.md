# DUSBANKASI — Kapsamlı Sistem Denetimi & İyileştirme Planı Üretme Görevi

## Ajan İçin Ön Bağlam

Sen şu anda **DUSBANKASI** adlı, Türk Dişhekimliği Uzmanlık Sınavı'na (DUS) hazırlık amacıyla geliştirilmiş, tek kullanıcılı (tek geliştirici + kişisel kullanım) bir web uygulamasını ve onun Python tabanlı içerik üretim/kalite kontrol altyapısını denetleyeceksin.

Proje `c:\Users\FURKAN\Desktop\Projeler\DUSBANKASI` dizinindedir. Projenin tüm teknik mimarisini anlatan otoriter kılavuz dosyası `GEMINI.md`'dir. **Denetlemeye başlamadan önce** `GEMINI.md`'yi tam olarak oku; bu dosya sana sistemin veri akışını, tablo şemasını, kritik bileşenleri ve geçmişteki tüm önemli kararları anlatmaktadır.

Bu görevin çıktısı, **aynı projede çalışacak başka bir ajanın doğrudan uygulayabileceği düzeyde somut, öncelikli ve dosya-bazlı bir implementasyon planıdır.** Planı markdown formatında bir artifact olarak üretmelisin.

---

## Görevin Yapısı

### Faz 1 — Sistemi Tanı

Projeyi çalıştırmaya ya da herhangi bir değişiklik yapmaya başlamadan önce aşağıdaki katmanların her birini **okuyarak ve anlayarak** keşfet. Her katmanı okurken hem tasarım kararlarını hem de iyileştirme fırsatlarını not et.

#### 1-A. Teknik Mimari Belgeler

- `GEMINI.md` — Ana teknik kılavuz (zorunlu, tam oku)
- `README.md` — Kullanıcı odaklı genel bakış
- `implementation_plan.md` — Mevcut açık planlar
- `.agents/` ve `.agent/` dizinleri — Workflow ve skill tanımları
- `scripts/templates/` — Soru üretim prompt şablonları
- `notebooklmprompt.txt` — NotebookLM soru üretim sistem promptu
- `notebooklm_cloze_system_prompt_v3.md` — Cloze kart üretim promptu

#### 1-B. Frontend Katmanı (`src/`)

Aşağıdaki dosyaları ve dizinleri sistematik olarak oku:

**Ana Giriş Noktası**
- `src/App.tsx` — 2100+ satır; state yönetimi, routing, tüm view geçişleri

**Lib (İş Mantığı)**
- `src/lib/supabase.ts` — Tüm Supabase client operasyonları, Skeleton+Content mimarisi, Cloud Sync
- `src/lib/stats.ts` — localStorage istatistik yönetimi, Cloud Sync, Streak, Activity Log
- `src/lib/adaptive.ts` — Adaptif soru seçim motoru (Priority Queue, Interleaving, Exposure Mix)
- `src/lib/idb.ts` — IndexedDB katmanı (skeletonCache, contentCache, legacy migration)
- `src/lib/metrics.ts` — Performans metrikleri
- `src/lib/projections.ts` — Tahmin/projeksiyon hesaplamaları
- `src/lib/dusPlacement.ts` — DUS yerleştirme simülasyonu
- `src/lib/schemas.ts` — Zod şema validasyonları
- `src/lib/ai.ts` — AI asistan entegrasyonu
- `src/lib/motion.ts` — Framer Motion animasyon konfigürasyonları

**Hooks**
- `src/hooks/useResumableSession.ts` — Cross-device oturum sürekliliği
- `src/hooks/useQuestions.ts` — Soru yükleme, güncelleme, silme
- `src/hooks/useRealtimeStats.ts` — Supabase Realtime kanal yönetimi
- `src/hooks/useAuth.ts` — Supabase Auth
- `src/hooks/useExamTimer.ts` — Sınav zamanlayıcısı

**Bileşenler**
- `src/components/quiz/` — QuizView, QuestionCard, QuizHeader, ExplanationPanel, QuizNavigation
- `src/components/StatisticsView.tsx` — İstatistik dashboard (58 KB)
- `src/components/SimulationResultView.tsx` — Sınav sonuç ekranı
- `src/components/DailyPlanView.tsx` — Günlük çalışma planı
- `src/components/ErrorAnalyticsView.tsx` — Hata analizi ekranı
- `src/components/SourceBooksView.tsx` — Kaynak kitap görünümü
- `src/components/AuthModal.tsx` — Auth modal
- `src/components/admin/AddQuestionView.tsx` — Soru ekleme yönetim paneli

**Config & Types**
- `src/config/` — `learning.ts` (Adaptive ağırlıklar, sabitler)
- `src/types/app.ts` — Uygulama tipleri
- `src/data.ts` — Question ve QuestionSkeleton tip tanımları
- `src/theme/` — Tema tanımları

**CSS**
- `src/index.css` — Global stiller, Tailwind direktifleri
- `src/App.css` — Uygulama özel stilleri

#### 1-C. Supabase Backend

- `supabase/migrations/` — 5 migration dosyasını oku (cross-device sync, active_sessions, delta_sync RPC'leri)
- `supabase/functions/manage-questions/` — Edge Function (kalite filtresi + embedding üretimi)
- `supabase-schema.sql` — Temel şema

**Önemli Tablolar & RPC'ler**
Supabase MCP araçlarını kullanarak mevcut production veritabanındaki şu yapıları da incele:
- `questions` tablosu: kolonlar, RLS politikaları, index'ler
- `question_stats` tablosu: `upsert_stats_batch` RPC mantığı
- `active_sessions` tablosu: `save_active_session` RPC
- `user_data` tablosu: activity_log, streak saklama
- `daily_exams` ve `exam_answers` tabloları
- `deleted_records` tablosu (delta sync için)
- Tüm RPC fonksiyonlarını listele ve hangi güvenlik bağlamında çalıştıklarını gözden geçir

#### 1-D. Python Araç Katmanı (`scripts/`)

- `scripts/shared.py` — Kalite kapısı, Supabase CRUD, JSON çıkarma, checkpoint sistemi
- `scripts/config.py` — Yapılandırma sabitleri
- `scripts/add_questions.py` — Kanonik soru ekleme CLI
- `scripts/notebooklm_mcp_exhaust.py` — MCP tabanlı soru üretim motoru
- `scripts/lib/audit_logic.py` — Semantik audit motoru (Bi-Encoder, Jaccard, DeepSeek)
- `scripts/tools/smart_audit_pipeline.py` — Ölüm Maçı pipeline giriş noktası
- `scripts/tools/backfill_bi_encoder.py` — Embedding backfill
- `scripts/tools/batch_rollback.py` — Geri alma aracı

#### 1-E. Test & Kalite Güvencesi

- `src/lib/__tests__/` ve `src/hooks/__tests__/` — Mevcut unit testler
- `e2e/` — Playwright E2E testleri
- `playwright.config.ts` ve `vitest.config.ts`
- `eslint.config.js`

---

### Faz 2 — Aktif Sistem Durumu

Sistemi durduran ya da ciddi sorun yaratan aktif koşulları anlayabilmek için:

1. **Supabase proje durumunu** kontrol et:
   - Aktif API kota kullanımı (egress, request sayıları)
   - Yavaş veya timeout riski taşıyan sorgular
   - RLS politikalarında delik ya da aşırı kısıtlama

2. **Build durumunu** test et: `npm run build` ve `npm run test` çıktılarını incele.

3. **TypeScript hata yoğunluğunu** değerlendir.

4. **Soru bankası istatistiklerini** Supabase'den çek:
   - Toplam aktif soru sayısı (quality_flag'e göre kırılım)
   - Embedding eksikliği olan sorular
   - Ders/ünite bazlı dağılım

---

### Faz 3 — Denetim Eksenlerini Tara

Her ekseni bağımsız olarak ama birbiriyle ilişkili olduğunu bilerek değerlendir:

#### EKSen A — Veri Akışı & Supabase Sağlığı

- Skeleton fetch → Delta Sync → Delta Pull zinciri doğru mu çalışıyor? Edge case'ler var mı?
- `fetchSkeletons()` içindeki delta sync logic'i, yeni eklenen soruları `quality_flag` filtresi doğru yakalıyor mu?
- `deleted_records` tablosuna dayanan soft-delete sistemi, cascade durumlarında tutarlı mı?
- `upsert_stats_batch` RPC: `GREATEST()` merge doğru mu uygulanıyor?
- `save_active_session` RPC: tüm edge case'leri kapsıyor mu? (anonim → auth geçişi, aynı cihaz üstüne giriş)
- IndexedDB (`idb.ts`): legacy migration tam mı? contentCache eviction/TTL stratejisi var mı?
- Supabase anon key'in istemci tarafında açıkta olmasının kapsam ve risk analizi

#### EKSEN B — Senkronizasyon & Oturum Yönetimi

- `useResumableSession.ts` — Compact session format'ındaki `fromCompact()` fonksiyonu, skeleton-only pool'da soru metni olmadan nasıl davranıyor?
- `beforeunload` handler: `keepalive: true` fetch ne kadar güvenilir? Mobil Safari'de çalışıyor mu?
- `syncStatsDown()` delta pull: `STATS_LAST_PULL_KEY` timestamp'i push başarısız olsa da güncelleniyor mu?
- `visibilitychange`'de `syncStatsDown()` tetiklenmesi — sekme arka plana geçince Realtime kanal kapatma (`useRealtimeStats.ts`) ile senkronize mi?
- Dirty set (`_dirtyIds`) — modül yeniden yüklenirse (HMR, sayfa yenileme) sıfırlanıyor mu?

#### EKSEN C — Adaptif Motor & Soru Seçimi

- `buildSmartQueue()` içindeki interleaving algoritması: tek ders ağırlıklı bankada (örn. Radyoloji 8000+) dağılım adil mi?
- `EXPOSURE_MIX` (80/15/5): bu oranlar DUS hazırlığı bağlamında ampirik olarak doğrulanmış mı?
- `buildSimulationPool()`: ders başına eşit soru dağılımı soru sayısı çok farklı derslerde (örn. 50 vs 2000) ne anlama geliyor?
- `scoreQuestion()` içindeki `Math.random() * 0.02` jitter: çok düşük mü, yeterince çeşitlilik sağlıyor mu?
- Adaptif ağırlıkların (`DEFAULT_ADAPTIVE_WEIGHTS` in `src/config/learning.ts`) güncel değerleri ve bu değerlere nasıl ulaşıldığı

#### EKSEN D — Kalite Kontrol Pipeline

- `shared.py` kalite kapısı filtreleri: `bilgi_sizintisi:overlap` ve `zayif_aciklama:overlap` eşik değerleri optimal mi?
- `_TR_STOPWORDS_EK` listesi yeterli mi? Tıbbi terminolojiye özgü yüksek frekanslı ama anlamsız kelimeler var mı?
- `smart_audit_pipeline.py` — `audit_logic.py`'deki `find_duplicates_chunked()` ile ünite-bazlı tarama stratejisi, ders-geneli kopyaları (farklı ünitelerde aynı soru) yakalayabiliyor mu?
- Soru üretim prompt şablonları (`notebooklmprompt.txt`): 5 şık formatı, Türkçe klinik doğruluk, açıklama kalite standartları mevcut prompt'larda açıkça belirtilmiş mi?
- `manage-questions` Edge Function: kalite kapısı şartları Python `shared.py` ile örtüşüyor mu?

#### EKSEN E — Frontend Bileşen Kalitesi

- `App.tsx` (2141 satır): state yönetimi düzgün parçalanmış mı? Hangi state'ler component'lara ya da özel hook'lara taşınmalı?
- `StatisticsView.tsx` (58 KB): grafik hesaplamaları memoize edilmiş mi? Büyük soru bankasında (~12000 skeleton) render performansı nasıl?
- `QuestionCard.tsx` — Soru metni render mantığı; markdown/html injection güvenli mi? DOMPurify doğru yerde mi?
- `SimulationResultView.tsx` — Sonuç ekranı animasyonları doğru cleanup yapıyor mu?
- `useRealtimeStats.ts` — Anonim kullanıcılarda Realtime kanal hiç açılmıyor (v4.32 düzeltmesi); ama authenticated kullanıcıda `visibilitychange` → kanal kapatma → yeniden bağlanma döngüsü doğru mu çalışıyor?
- `AuthModal.tsx` — PKCE flow, session kalıcılığı, magic link redirect
- `ErrorAnalyticsView.tsx` — Hata analizi için hangi veriyi kullanıyor? `wrongChoices` geçmişi yeterli mi?
- `DailyPlanView.tsx` — `getWeakestUnits()` ve `getCurriculumProgress()` fonksiyonları skeleton üzerinden mi çalışıyor yoksa tam veri mi gerektiriyor?

#### EKSEN F — UX & Tasarım

- Genel navigasyon akışı: `appState` state machine'i tutarlı ve anlaşılır mı? Kullanıcı kaybolabilecek dead-end state'ler var mı?
- Mobil uyumluluk: hangi view'lar mobilde sorunlu olabilir?
- Dark/light tema geçişi tutarlı mı? Tüm bileşenler `theme` objesini doğru kullanıyor mu?
- Yükleme states (loading, contentLoading, hyLoading, examLoading): kullanıcıya net geri bildirim veriliyor mu?
- Hata gösterimi: `showAlert()` ile merkezi dialog sistemi tutarlı kullanılmış mı? Sessiz `console.error` bırakılan yerler var mı?
- Klavye kısayolları (`useKeyboardShortcuts.ts`): kapsamlı mı, çakışma var mı?
- Geri alma (browser back button): `popstate` handler ile `handleGoBack()` tüm state geçişlerini kapsıyor mu?
- `CountdownWidget` — DUS 2026/2 tarih sabit kodlanmış. Bu ne zaman güncellenmeli?

#### EKSEN G — Güvenlik & Erişim Kontrolü

- RLS politikaları: `questions` tablosuna anonim okuma izni var mı? Beklenen mi?
- `manage-questions` Edge Function'a doğrudan POST yapılabilir mi? Rate limiting var mı?
- `quality_flag` değiştirilmesini sadece service_role kısıtlaması var mı?
- Storage bucket (`question-images`) için erişim politikaları doğru mu?
- `VITE_SUPABASE_ANON_KEY` istemci tarafında açık — bunun bilinçli bir karar olduğu doğrulanmalı

#### EKSEN H — Python Araç Bütünlüğü & Operasyonel Güvenilirlik

- `notebooklm_mcp_exhaust.py` — MCP sunucu başlatma protokolü ve port testi sağlıklı çalışıyor mu?
- `batch_rollback.py` — Güvenlik önlemleri yeterli mi? Yanlışlıkla tüm veriyi silme riski var mı?
- `scripts/config.py` — Hangi değerler hâlâ hardcode? `.env` veya `config.py.example` ile ne kadarı dışa çıkarılmış?
- `run_mcp_pipeline.py` checkpoint sistemi: başarısız üniteler güvenilir şekilde yeniden deneniyor mu?
- `audit_scan.py` vs `smart_audit_pipeline.py`: iki araç arasındaki görev örtüşmesi/çakışması var mı?

#### EKSEN I — Test Kapsamı & Güvenilirlik

- `src/lib/__tests__/` ve `src/hooks/__tests__/` — Hangi kritik iş mantığı test edilmiş, hangileri eksik?
- E2E testleri (`e2e/`) — Hangi kullanıcı senaryoları kapsanmış?
- `adaptive.ts`, `stats.ts`, `idb.ts` için test kapsamı ne durumda?
- `vitest.config.ts` yapılandırması optimal mi?

---

### Faz 4 — Bulguları Sentezle & Planı Yaz

Tüm okuma ve analiz çalışmasının ardından bulgularını tek bir implementation plan dosyasına aktar. Bu plan:

1. **Yönetici Özeti**: Sistemin genel sağlık durumu, en kritik 3-5 sorun
2. **Öncelik Matrisi**: Her bulguyu şu iki eksende değerlendir:
   - **Etki**: Kullanıcı deneyimine / veri güvenilirliğine / egress kotasına doğrudan etkisi
   - **Efor**: Tahmini uygulama süresi (Küçük/Orta/Büyük)
3. **Katman Bazlı Bulgular**: Her bir denetim eksenine karşılık gelen bölümler (A'dan I'ya)
4. **Öncelikli Görev Listesi**: P0 (acil), P1 (önemli), P2 (iyileştirme), P3 (nice-to-have) şeklinde kategorize edilmiş, her göreve dosya adı ve satır referansı eklenmiş
5. **Soru Kalitesi Önerileri**: Mevcut prompt'ların ve kalite kapısı kurallarının güçlü/zayıf yanları
6. **Mimari Gözlemler**: Uzun vadeli sürdürülebilirlik için tasarım önerileri

---

## Çıktı Formatı

Planı aşağıdaki dosyaya yaz:

```
c:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\Plans\DUSBANKASI_IMPLEMENTATION_PLAN_[TARIH].md
```

Planın başına şu uyarıyı ekle:

> Bu plan, otonom bir ajan tarafından kaynak kodu analizi ve Supabase veritabanı denetimi sonucunda üretilmiştir. Tüm öneriler tek bir kullanıcının (proje sahibinin) ihtiyaçlarına ve kota kısıtlarına göre önceliklendirilmiştir.

---

## Kritik Kısıtlar & Bağlam

Bu denetimi yaparken şunları her zaman aklında tut:

1. **Tek kullanıcı**: Bu uygulama tamamen kişisel kullanım içindir. Multi-tenant mimari gereksinimleri, B2B güvenlik standartları bu değerlendirmeye dahil değildir.

2. **Egress kotası kritik**: Supabase aylık 5 GB egress limiti var. v4.31 Skeleton mimarisi bu nedenle hayata geçirildi. Herhangi bir öneri bu kota baskısını artırmamalı; tercihen azaltmalıdır.

3. **Soru kalitesi öncelikli**: Tek kullanıcı için en değerli şey yüksek kaliteli, doğru, tekrarsız soru bankasıdır. Soru üretim kalitesini artıracak her öneri yüksek önceliklidir.

4. **Python araçları bağımsız çalışmalı**: Script'ler IDE ya da CI bağımlılığı olmadan çalışabilir olmalıdır.

5. **Mevcut veriye zarar vermeme**: Öneriler her zaman `--dry-run` güvencesiyle veya geri alınabilir şekilde uygulanabilir olmalıdır.

6. **DUS 2026/2 sınavı**: Hedef tarih Kasım 2026'dır. Bu süre içindeki geliştirme öncelikleri buna göre ayarlanmalıdır.

---

## Araçlar

Bu denetim için aşağıdaki araçları kullanabilirsin:

- `view_file`, `list_dir`, `grep_search` — Kaynak kodu okuma
- Supabase MCP araçları (`execute_sql`, `list_tables`, `get_advisors`, vb.) — Canlı DB analizi
- `run_command` — Build, lint ve test çalıştırma
- `search_web` — Kullandığın kütüphanelerin güncel best practice'lerini araştırma
- Artifact yazma araçları — Planı oluşturma

---

*Bu prompt, proje sahibi Furkan tarafından sistemin kendi ajanı tarafından derinlemesine keşfedilmesi ve geliştirilmesi amacıyla hazırlanmıştır.*
