# DUSBANKASI — Kapsamlı Sistem Denetimi & İmplementasyon Planı (2026-06-14)

> Bu plan, otonom bir ajan tarafından kaynak kodu analizi ve Supabase veritabanı denetimi
> sonucunda üretilmiştir. Tüm öneriler tek bir kullanıcının (proje sahibinin) ihtiyaçlarına
> ve kota kısıtlarına göre önceliklendirilmiştir.

> **Bu denetimin farkı:** 2026-06-11 tarihli `implementation_plan.md` planının maddelerinin
> büyük kısmı uygulanmış (ama **commit edilmemiş ve deploy edilmemiş**) durumda. Bu plan,
> canlı DB + build + test + deploy durumunu yeniden ölçerek **"ne çözüldü / ne kaldı / ne
> yeni çıktı"** uzlaştırmasını yapar. Sayıların tamamı ölçümdür; kaynağı belirtilmiştir.

---

## 0. YÖNETİCİ ÖZETİ

**Sistemin genel sağlığı: İYİ — ama yarım kalmış bir teslimat (release) zinciri var.**

2026-06-11 planının veritabanı ameliyatı **canlıda başarıyla uygulanmış**: DB 548 MB → **183 MB**
(limitin %37'si). Frontend/script iyileştirmelerinin (~13 madde) çoğu çalışma ağacında mevcut,
**build temiz (exit 0)** ve **test paketi 195/195 yeşil (13 dosya)**. Ancak bu işlerin hepsi
**uncommitted** ve **Vercel'e / Supabase Edge'e deploy edilmemiş**. Sonuç: canlı sistem tutarsız
bir ara durumda.

### Canlı Ölçümler (2026-06-14, Supabase MCP `execute_sql`)

| Metrik | 2026-06-11 | **2026-06-14 (şimdi)** | Kaynak |
|---|---|---|---|
| Toplam DB boyutu | 548 MB | **183 MB** (limitin %37'si) | `pg_database_size` |
| `questions` total | 532 MB | **167 MB** (heap 20 · TOAST 146 · idx 1.1) | `pg_total_relation_size` |
| Satır sayısı (canlı) | 20.712 | **18.427** (dead 46) | `pg_stat_user_tables` |
| `embedding` (legacy) sütunu | 121 MB, var | **DÜŞÜRÜLDÜ** (yok) | `information_schema.columns` |
| `stem_embedding` / `explanation_embedding` | `vector` 242 MB | **`halfvec` ~114 MB** | `udt_name=halfvec` |
| quality_flag dağılımı | null 18.015 · kopya 1.216 · auto 988 · HY 440 · klon 53 | **null 17.987 · high_yield 440** (çöp temizlendi) | `GROUP BY` |
| Embedding eksikliği | — | **0** (tüm 18.427 satırda stem+exp dolu) | `count FILTER` |
| pending recovery checkpoint | 18 dosya | **0** | dosya sistemi |

**Tek cümlelik teşhis:** Veritabanı krizi **çözülmüş**; mevcut risk artık **veride değil,
sürümleme/deploy disiplininde** — migrasyon canlıya gitti ama onu tüketen kod canlıya gitmedi.

### En Kritik 5 Sorun (öncelik sırasıyla)

1. **[P0] Deploy edilmiş `manage-questions` Edge Function bozuk.** Canlı sürüm (v2) hâlâ
   `row.embedding` yazıyor (`text-embedding-3-small`) — ama `embedding` sütunu DB'den düşürüldü.
   Uygulama içi "Soru Ekle" formu artık **502 (`column embedding does not exist`)** verir. Üstelik
   bu sürüm `stem_embedding`/`explanation_embedding` hiç üretmiyor → GEMINI.md §5.6'nın anlattığı
   mimariyle çelişiyor. Yerel düzeltme hazır ama **deploy edilmemiş**.
2. **[P0] Tüm iyileştirmeler commit'siz ve deploy'suz.** 766 ekleme / 6544 silme çalışma ağacında
   bekliyor; Vercel'deki canlı frontend hâlâ eski (Realtime'lı, yavaş animasyonlu, sahte yedekli)
   sürüm. GEMINI.md "GÖREV SONRASI PROTOKOL" (commit → build → deploy) tamamlanmamış.
3. **[P0] Otomatik yedek yok (A6 yapılmamış).** `exports/` içinde yalnızca **2026-06-11** klasörü
   var (3 gün bayat). Windows Zamanlanmış Görev kaydı **yok**. Free tier'da PITR yok → tek felaket =
   tüm emek kaybı. `export_all_data.py` düzeltmesi (A5) yapıldı ama otomasyona bağlanmadı.
4. **[P1] Legacy `embedding` sütun drop'u, scriptlerde dangling referanslar bıraktı.**
   `calculate_dynamic_thresholds.py:95` ve birkaç kurtarma/test aracı hâlâ `select=...,embedding`
   yapıyor → bu araçlar şimdi 400/PostgREST hatası verir. `match_questions_semantic` RPC'si de
   düşürülen sütuna bakan **yetim** bir artefakt olarak duruyor.
5. **[P1] Güvenlik linter ERROR: `deleted_records` ve `unit_thresholds` tablolarında RLS kapalı.**
   `deleted_records`'ta policy var ama RLS enable değil (advisor: ERROR ×2). Frontend bu tabloyu
   anon okur; RLS enable + permissive SELECT policy ile hatasız kapatılır.

---

## 1. ÖNCELİK MATRİSİ (Etki × Efor)

**Etki:** veri güvenilirliği / UX / egress kotası üzerindeki doğrudan etki.
**Efor:** K=Küçük (<30 dk) · O=Orta (0.5–2 sa) · B=Büyük (yarım gün+).

| # | Görev | Etki | Efor | Öncelik |
|---|---|---|---|---|
| T1 | Edge Function'ı güncel kodla **redeploy** et | Çok Yüksek (bozuk akışı onarır) | K | **P0** |
| T2 | Çalışmaları **commit + Vercel deploy** et | Çok Yüksek (canlı = kod) | K | **P0** |
| T3 | Günlük **otomatik yedek** görevi kur (A6) | Çok Yüksek (felaket önleme) | O | **P0** |
| T4 | Yetim `match_questions_semantic` RPC'sini düşür | Düşük (hijyen) | K | **P1** |
| T5 | `calculate_dynamic_thresholds.py` + kurtarma scriptlerini legacy `embedding`'ten arındır | Orta (araç onarımı) | O | **P1** |
| T6 | `deleted_records` + `unit_thresholds` RLS enable + read policy | Orta (advisor ERROR) | K | **P1** |
| T7 | Ölü kod sil: `useRealtimeStats.ts` + testi | Düşük (bakım) | K | **P1** |
| T8 | `manage-questions` filtre/embedding paritesini Python ile eşitle | Orta (soru kalitesi) | O | **P1** |
| T9 | CountdownWidget: sınav günü durumu + `dark:` tema bağı | Orta (UX) | O | **P2** |
| T10 | Hardcoded koyu renk token geçişi (AuthModal öncelikli) | Orta (light tema UX) | O | **P2** |
| T11 | `examMode` enum refactoru (B8) | Orta (hata sınıfı kapatır) | B | **P2** |
| T12 | `unit_thresholds` yeniden kalibrasyonu (halfvec sonrası doğrulama) | Orta (denetim doğruluğu) | O | **P2** |
| T13 | TOAST artık bloat için hedefli `VACUUM FULL` | Düşük (~15 MB) | K | **P3** |
| T14 | App.tsx dosya bölme + PDF export ayrıştırma | Düşük (bakım) | B | **P3** |
| T15 | QuizView için 1 smoke/bileşen testi | Düşük (regresyon ağı) | O | **P3** |

---

## 2. KATMAN BAZLI BULGULAR (A–I)

Her eksende **✅ Çözüldü (uncommitted)** / **⚠️ Kaldı** / **🆕 Yeni bulgu** ayrımı yapılmıştır.

### EKSEN A — Veri Akışı & Supabase Sağlığı

- ✅ **DB boyut krizi çözüldü.** `embedding` sütunu düşürüldü; `stem/explanation_embedding`
  `halfvec(1536)`'ya çevrildi; bayraklı çöp (kopya/auto_deleted/klon ≈ 2.257 satır) silindi.
  `ALTER COLUMN ... TYPE halfvec` tablo rewrite'ı, ayrı bir `VACUUM FULL`'a gerek bırakmadan
  fiziksel alanı geri kazandırdı → 548→183 MB.
- ✅ **Embedding bütünlüğü:** Kalan 18.427 satırın **tamamında** stem+exp embedding dolu
  (`stem_null=0, exp_null=0`). Audit hattı tam kapasite çalışabilir.
- ✅ **Skeleton delta sync sağlam.** [supabase.ts:104-159](../src/lib/supabase.ts) — silinenler
  `deleted_records.deleted_at > lastSync` ile **sınırlı** çekiliyor (her açılışta 2.945 satırın
  tamamı inmiyor); `EXCLUDED_FLAGS` client-side yedeği yerinde; cache-boş → tam fetch yolu doğru.
- 🆕 **`match_questions_semantic` RPC yetim kaldı.** Düşürülen `embedding` sütununa (`vector`)
  bakıyor → çağrılırsa hata verir; ama hiçbir kod çağırmıyor (yalnız GEMINI.md + schema referansı).
  `match_questions_semantic_by_id` zaten silinmiş. **→ T4.**
- 🆕 **`deleted_records` storage hijyeni:** 2.945 satır (A2 silmesiyle şişti). Client egress'i
  yok ama pg_cron ile 30+ günlük kayıtlar budanabilir (opsiyonel, P3).

### EKSEN B — Senkronizasyon & Oturum Yönetimi

- ✅ **Realtime kaldırıldı → focus-pull.** [App.tsx](../src/App.tsx) `useRealtimeStats` çağrısı
  silindi; yerine `visibilitychange → visible` olunca `syncStatsDown()` geldi (B1). Bileşik filtre
  geçersizliği ve Realtime egress çarpanı ortadan kalktı.
- ✅ **Stats push delta'ya çevrildi (B2).** [stats.ts:20,157,585-635](../src/lib/stats.ts) —
  modül-seviye `_dirtyIds` Set'i; `syncStatsUp({all:true})` yalnız login merge'inde; başarılı
  push'ta set temizlenir, hatada korunur. `sync.merge.test.ts` yeşil.
- ✅ **Pull delta'ya çevrildi (B10).** `pullAllDeviceStats(userId, sinceIso)` +
  `stats_last_pull` zaman damgası; push hatasında tam çekime düşer (güvenli).
- ✅ **`handleGoBack` stale-closure (B7) düzeltildi** — deps'e `isHighYieldExam` eklendi.
- ⚠️ **`useResumableSession` her cevapta RPC flush** ediyor ([useResumableSession.ts](../src/hooks/useResumableSession.ts)).
  Ingress ücretsiz, tek kullanıcıda DB yükü önemsiz; 2 sn debounce altyapısı (`saveTimerRef`) yazılı
  ama bağlanmamış. Hijyen — düşük öncelik.
- 🆕 **`fromCompact()` skeleton-pool davranışı:** `resumableSession.test.ts` (11 test) yeşil;
  pool guard'ı (v4.22 fix) yerinde — soru metni olmadan compact restore başa-dönme üretmiyor.
  Doğrulandı, işlem yok.

### EKSEN C — Adaptif Motor & Soru Seçimi

- ✅ **`adaptive.ts` değişmedi, kasıtlı.** `weakness 0.7 + newExploration 0.3` + greedy
  interleaving; FSRS bilinçli olarak Anki'ye devredilmiş (GEMINI §3.1). `adaptive.test.ts` 33 test
  yeşil. `EXPOSURE_MIX 80/15/5` dört modda tutarlı.
- ⚠️ **`scoreQuestion` jitter `Math.random()*0.02`** ve `buildSimulationPool` ders-başı eşit
  dağılımı (50 vs 2000 soruluk derslerde) — DUS bağlamında ampirik doğrulanmış değil; ama tek
  kullanıcıda gözlemlenen şikayet yok. Sınav dönemi önceliği değil; değiştirme.
- ⚠️ **`weakCount` rozeti** ([App.tsx](../src/App.tsx) ~1007) silinmiş soru id'lerini
  filtrelemeden sayabilir → kozmetik tutarsızlık. T11/B9 sırasında `questions.some(...)`
  kesişiminden geçir.

### EKSEN D — Kalite Kontrol Pipeline

- 🆕🔴 **[P0] Deployed Edge Function stale & bozuk.** Canlı sürüm:
  `embedBatch(text-embedding-3-small)` ile **tek** combined embedding üretip `row.embedding`
  yazıyor. Sonuçlar: (1) `embedding` sütunu yok → in-app ekleme **502**; (2) `stem/exp_embedding`
  hiç üretilmiyor → app'ten eklenen sorular Ölüm Maçı'nda görünmez. Yerel
  [index.ts](../supabase/functions/manage-questions/index.ts) düzeltmesi (3-large × 2 = stem+exp,
  combined kaldırıldı) hazır ama deploy edilmemiş. **→ T1.**
- ✅ **`shared.py` legacy embedding üretimi kaldırıldı (A1).** Artık yalnız stem+exp (3-large)
  üretiliyor → soru başına 1/3 OpenAI maliyeti tasarrufu.
- ✅ **`classify_anchors` substring→token eşleşme (B11).**
  [notebooklm_mcp_exhaust.py:389-433](../scripts/notebooklm_mcp_exhaust.py) — `_tokenize_stem`
  ile kelime düzeyinde eşleşme; "kas"→"vasküler" false-positive'i giderildi. Müfredat boşluğu
  riski azaldı.
- 🆕 **Filtre/embedding paritesi çift kaymış.** Kalite kuralları iki dilde yaşıyor (Python
  `shared.py` + Deno `index.ts`). Validasyon mantığı **örtüşüyor** (eşik %60, stopword, mojibake,
  sızıntı/totoloji aynı) ✔; ama embedding modeli **kaymış** (deployed=3-small/combined,
  Python=3-large/stem+exp). T1 redeploy bunu büyük ölçüde kapatır; T8 ile periyodik parite
  doğrulaması yapılmalı.
- ✅ **Ölüm Maçı RPC halfvec-uyumlu.** `find_candidate_pairs(p_lesson,p_threshold,p_exp_threshold,p_unit)`
  duruyor; `<=>` operatörü halfvec'te çalışıyor — gövdede `vector(1536)` cast'i yok, kod
  değişikliği gerekmedi. **Doğrulama:** bir ünitede `smart_audit_pipeline --dry-run` koşup skorların
  fp16 sonrası ±0.01 içinde aynı kaldığını teyit et (T12).

### EKSEN E — Frontend Bileşen Kalitesi

- ✅ **Quiz geçiş animasyonu hızlandırıldı (B3).** [QuizView.tsx:203-214](../src/components/quiz/QuizView.tsx)
  `mode="popLayout"` + 0.12s tween enter / 0.06s exit; [QuestionCard.tsx](../src/components/quiz/QuestionCard.tsx)
  mount spring'i kaldırıldı (çifte animasyon bitti); confetti 60→30 + mobilde kapalı
  (`pointer: coarse`); yanlış overlay 1.2s→0.6s; [motion.ts:194-203](../src/lib/motion.ts) stagger
  0.06→0.03. Hedef <100 ms.
- ✅ **Stats parse tekilleştirildi (B9).** `getUnitProgress`/`getWeakQuestionIds` artık
  `preloadedStats` parametresi alıyor ([stats.ts:186,198](../src/lib/stats.ts)); LessonSelection &
  UnitSelection `loadAllStats()`'ı render başına **bir kez** çağırıp prop geçiriyor.
  *İyileştirme notu:* tek `loadAllStats()` çağrısı bile her render'da çalışıyor —
  `useMemo(()=>loadAllStats(),[statsVersion])` ile iyice sabitlenebilir (P3).
- ✅ **B5/B6 uygulandı.** `fetchExamWrongAnswers` `questions!inner(*)` → `SELECT_COLS`
  ([supabase.ts:1062](../src/lib/supabase.ts)); `loadHighYield` cache-first (`fetchQuestionsByIds`).
- ⚠️ **App.tsx hâlâ ~2.150 satır monolit**, 6 çakışan mod bayrağı (`mode`, `isFavoritesExam`,
  `isHighYieldExam`, `isHighYieldMode`, `isDailyExamSession`, `simTotalSeconds`). **→ T11 (B8 enum).**
- 🆕 **Ölü kod: `useRealtimeStats.ts` + testi.** B1 sonrası hiçbir yerden import edilmiyor
  (grep: yalnız kendi dosyası + testi). Silinmeli; aksi halde testi "ölü kodu" doğruluyor. **→ T7.**

### EKSEN F — UX & Tasarım

- ✅ **Light-tema görünmez başlık düzeltildi** — header `text-white` → `${theme.text}`
  ([App.tsx](../src/App.tsx) ~820).
- ✅ **İstatistikler bento DOM-hack'i kaldırıldı** — `document.querySelector(...).click()` yerine
  `onAnalyticsClick → setAppState('analytics')`.
- ⚠️ **CountdownWidget:** `dark:` sınıfları OS temasını izliyor (uygulama temasını değil);
  `daysLeft===0`'da sınav GÜNÜ erken "TEBRİKLER" gösteriyor. **→ T9.**
- ⚠️ **Hardcoded koyu renkler** (grep: ~26 örnek, 8 dosya — SimulationResultView/AuthModal/
  ExplanationPanel) light modda kontrast bozuyor. **→ T10 (AuthModal öncelikli).**
- ✅ **Mobil & mesh-gradient** kontrolü: kritik kırılma yok; light/oled'de mesh kapanışı doğru.

### EKSEN G — Güvenlik & Erişim Kontrolü

- 🆕🔴 **[ERROR] `deleted_records` RLS kapalı** — policy var ama `ENABLE ROW LEVEL SECURITY` yok
  (advisor `policy_exists_rls_disabled` + `rls_disabled_in_public`). **→ T6.**
- 🆕🔴 **[ERROR] `unit_thresholds` RLS kapalı** (`rls_disabled_in_public`). **→ T6.**
- ✅ **Bilinçli permissive RLS doğrulandı.** `questions`, `question_stats`, `active_sessions`,
  `dus_*` tablolarındaki `USING(true)` ve `save_active_session`/`upsert_stats_batch` SECURITY
  DEFINER anon-executable — tek-kullanıcılı, cihaz-tabanlı anon sync mimarisi gereği **kasıtlı**
  (GEMINI v4.7 notu). Değiştirme; yalnız belgelendir.
- ⚠️ **Düşük öncelikli advisor'lar:** storage bucket'ları (`question-images`, `study-resources`)
  geniş SELECT (listeleme) policy'si; `vector` extension'ı `public` şemada; leaked-password
  koruması kapalı. Tek kullanıcıda risk düşük; istenirse kapatılır (P3).
- ⚠️ **`*` fonksiyonlarda mutable `search_path`** (advisor WARN ×8) — `SET search_path = public`
  eklemek ucuz sertleştirme; T4/T6 ile birlikte yapılabilir.

### EKSEN H — Python Araç Bütünlüğü & Operasyonel Güvenilirlik

- ✅ **`export_all_data.py` egress bombası etkisizleştirildi (A5).** Embedding sütunları
  SELECT'ten çıkarıldı; 7 tablo, tarihli alt klasör (`exports/YYYY-MM-DD/`), 14 günlük retention.
  Koşum başına ~1.2 GB → ~25 MB.
- ✅ **pending recovery boşaltıldı (A8)** — `scripts/recovery/pending/` 0 dosya.
- ✅ **`backfill_embeddings.py` + `supabase_fix_embeddings.py` silindi** (legacy yazarlar).
- 🔴 **[P0] A6 yapılmadı:** Zamanlanmış yedek görevi YOK; son export 2026-06-11 (3 gün bayat).
  **→ T3.**
- 🆕🟠 **[P1] Legacy `embedding` drop'u scriptleri kırdı:**
  `calculate_dynamic_thresholds.py:95` (`select=...,embedding`) → 400; ayrıca
  `semantic_bulk_delete.py:71`, `test_patch.py`, `backfill_golden_set.py:117` düşürülen sütuna
  bakıyor/yazıyor. `audit_logic.py:1097` yalnız `q.get("embedding")` (None döner, zararsız).
  **→ T5.**
- ✅ **MCP üretim hattı sağlam** — `ensure_auth` stale→refresh→canlı `notebook_get`; checkpoint/
  resume (`run_mcp_pipeline.py --resume/--status`) çalışır durumda (GEMINI §4.1-B kanıtlı).

### EKSEN I — Test Kapsamı & Güvenilirlik

- ✅ **195 test / 13 dosya — tamamı yeşil** (`npx vitest run`); **`npm run build` exit 0**.
  GEMINI.md'deki "146 test" sayısı bayat → README/GEMINI güncellenmeli (T2 ile).
- ✅ Yeni kapsam: `metrics.test.ts` (20), `question.test.ts` (4), `supabase.test.ts` 6→13,
  `adaptive.test.ts` 31→33.
- ⚠️ **Bileşen testi yok.** B3 sonrası `QuizView` için 1 smoke test önerilir (T15).
- 🆕 **`useRealtimeStats.test.ts` ölü kodu test ediyor** (T7 ile birlikte silinir).
- ⚠️ **Delta-sync için yeni test eksik:** B2 `_dirtyIds` "yalnızca dirty push edilir" ve B10
  "delta pull" senaryoları henüz kilitlenmemiş — regresyon ağına eklenmeli (T2/T15).

---

## 3. ÖNCELİKLİ GÖREV LİSTESİ

### P0 — ACİL (bugün/bu hafta; sıra önemlidir)

> Mantık: T1+T2 canlıyı koda hizalar (bozuk Edge + eski frontend), T3 felaket riskini kapatır.

#### T1. `manage-questions` Edge Function'ı redeploy et
- **Dosya:** [supabase/functions/manage-questions/index.ts](../supabase/functions/manage-questions/index.ts) (yerel düzeltme hazır)
- **Sorun:** Canlı v2 `row.embedding` (3-small) yazıyor; `embedding` sütunu yok → in-app ekleme 502;
  stem/exp üretmiyor.
- **Adım:** Yerel `index.ts`'in (a) `embedding`/combined üretimini İÇERMEDİĞİNDEN ve (b) stem+exp
  (3-large, 1536d) ürettiğinden emin ol → Supabase MCP `deploy_edge_function` **veya**
  `npx supabase functions deploy manage-questions`.
- **Doğrulama:** `AddQuestionView`'dan 1 test sorusu ekle → 200 dönmeli; DB'de satırda
  `stem_embedding`/`explanation_embedding` dolu, hata yok. (Test sorusunu sonra sil.)
- **Not:** `OPENAI_API_KEY` Edge secret yoksa fonksiyon yine yazar ama embeddingsiz (graceful) —
  secret'ın ayarlı olduğunu doğrula.

#### T2. Çalışma ağacını commit et + Vercel'e deploy et
- **Sorun:** 766 ekleme/6544 silme uncommitted; canlı frontend eski (Realtime/yavaş/sahte yedek).
- **Adım:** (1) `npm run build` (zaten yeşil) + `npx vitest run` (195 yeşil) son kez koş.
  (2) Anlamlı commit(ler): `feat(v4.33): DB egress krizi sonrası kod hizalama (A/B serisi)`.
  (3) Push → otomatik Vercel deploy (veya `vercel --prod`).
  (4) **Belgele:** README.md (Not bloğu) + GEMINI.md (v4.33 başlığı: embedding sütunu düşürüldü,
  halfvec, Realtime→focus-pull, delta push/pull, animasyon, **test 195**, Edge redeploy).
- **Doğrulama:** Canlı sitede quiz geçişi hızlı; "Yedekle" gerçek içerik indiriyor; konsol
  `[Realtime] Kanal hatası` üretmiyor.

#### T3. Günlük otomatik yedek görevi kur (A6)
- **Sorun:** Otomatik yedek yok; son export 3 gün bayat; free tier PITR yok.
- **Adım:** A5 düzeltmesi mevcut olduğundan doğrudan zamanlanmış görev:
  ```powershell
  Register-ScheduledTask -TaskName "DUSBANKASI Daily Backup" `
    -Trigger (New-ScheduledTaskTrigger -Daily -At 03:30) `
    -Action (New-ScheduledTaskAction -Execute "python" `
      -Argument "scripts/export_all_data.py" `
      -WorkingDirectory "C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI")
  ```
  `exports/README.md` olarak **felaket kurtarma prosedürü** yaz: yeni proje →
  `supabase-schema.sql` + `supabase/migrations/*` → `questions_backup.json` 10'luk chunk INSERT →
  `backfill_bi_encoder.py` ile embedding üretimi → stats/user_data REST upsert.
- **Doğrulama:** `Get-ScheduledTask -TaskName "*DUSBANKASI*"` kayıtlı; bir kez elle koş →
  `exports/2026-06-14/` < 30 MB ve `questions_backup.json`'da soru metni VAR, embedding YOK.

### P1 — ÖNEMLİ (bu ay)

#### T4. Yetim `match_questions_semantic` RPC'sini düşür
```sql
DROP FUNCTION IF EXISTS match_questions_semantic(vector, double precision, integer, text);
```
- **Neden:** Düşürülen `embedding` sütununa bakıyor; çağrılırsa hata, kimse çağırmıyor. Advisor
  `function_search_path_mutable` uyarısı da temizlenir. supabase-schema.sql'den ilgili tanımı sil.

#### T5. Scriptleri legacy `embedding`'ten arındır
- **`calculate_dynamic_thresholds.py:95`** → `select=id,stem_embedding,explanation_embedding`
  (embedding'i çıkar); `:118-120` cosine fallback'ini stem/exp üzerinden hesapla. (B4'ün egress
  optimizasyonu — sunucu-taraflı skor dağılımı RPC'si — opsiyonel ikinci adım.)
- **`semantic_bulk_delete.py:71,120` · `test_patch.py` · `backfill_golden_set.py:117`** — düşürülen
  sütuna bakan dormant araçlar: ya stem/exp'e taşı ya da başlığına `# DEPRECATED (embedding sütunu
  düşürüldü)` notu koy.
- **Doğrulama:** `python scripts/tools/calculate_dynamic_thresholds.py --lesson Radyoloji --unit "<Ü>"`
  hatasız koşar.

#### T6. `deleted_records` + `unit_thresholds` RLS'ini kapat (advisor ERROR ×2)
```sql
ALTER TABLE public.deleted_records ENABLE ROW LEVEL SECURITY;   -- mevcut SELECT policy zaten var
ALTER TABLE public.unit_thresholds ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ut_read" ON public.unit_thresholds FOR SELECT USING (true);
```
- **Neden:** İkisi de PostgREST'e açık ama RLS disabled (ERROR). `deleted_records`'ta zaten
  "Enable read access for all users" policy'si var; enable etmek davranışı bozmaz. `unit_thresholds`
  yalnız okunuyor → permissive read yeter.
- **Doğrulama:** `get_advisors(security)` → iki ERROR kayboldu; frontend delta-sync + audit
  çalışmaya devam ediyor.

#### T7. Ölü kodu sil
- `src/hooks/useRealtimeStats.ts` + `src/hooks/__tests__/useRealtimeStats.test.ts` — sil.
- **Doğrulama:** `npx vitest run` yeşil (test sayısı 195→190); `npm run build` temiz; grep ile
  başka import olmadığını teyit et.

#### T8. Filtre/embedding paritesini belgele + periyodik doğrula
- T1 sonrası `index.ts` (Deno) ile `shared.py` (Python) **embedding modeli** birebir aynı olmalı
  (3-large, stem+exp). Eşik/stopword/mojibake listeleri zaten örtüşüyor.
- GEMINI.md §5.6'ya "parite kontrol listesi" ekle; eşik değişiminde iki dilin elle eşitlenmesi notu
  güçlendir.

### P2 — İYİLEŞTİRME

- **T9. CountdownWidget:** `daysLeft===0` → "BUGÜN SINAV" durumu; `dark:` çiftlerini `${theme.*}`
  token'larına çevir (veya uzun vadede `@custom-variant dark` — bkz. §5).
- **T10. Hardcoded renk token geçişi:** AuthModal (giriş akışı) → SimulationResultView →
  ExplanationPanel sırasıyla; dosya başına ~10 dk.
- **T11. `examMode` enum refactoru (B8):** 6 bayrağı tek `activeExam: { mode: ExamMode;
  dailyExamId?; simTotalSeconds? } | null`'a indir; `handleGoBack` tablo haline gelir.
  8 entry-point manuel turuyla doğrula.
- **T12. halfvec sonrası audit doğrulaması:** bir üniteyi `smart_audit_pipeline --dry-run` ile koş,
  dedup skorlarının fp16 sonrası ±0.01 içinde aynı kaldığını teyit et; gerekirse
  `unit_thresholds`'u `calculate_dynamic_thresholds.py` (T5 sonrası) ile yeniden kalibre et.

### P3 — NICE-TO-HAVE

- **T13.** Hedefli `VACUUM FULL VERBOSE questions; ANALYZE questions;` — TOAST'taki ~15 MB artık
  bloat için (düşük trafik saatinde; tek kullanıcı için kilit sorun değil).
- **T14.** App.tsx bölme: `views/LessonSelection.tsx`, `views/UnitSelection.tsx`,
  `lib/exportPdf.ts` (T11 sonrası daha temiz).
- **T15.** QuizView smoke testi + B2/B10 delta senaryoları için regresyon testleri.
- **Opsiyonel:** `deleted_records`'a 30+ gün budama (pg_cron); storage bucket listeleme policy'sini
  daralt; `search_path` sertleştirmesi tüm fonksiyonlara.

---

## 4. SORU KALİTESİ ÖNERİLERİ

**Güçlü yanlar (korunmalı):**
- Çift-katmanlı kalite kapısı (yapısal + bilgi sızıntısı %60 + totoloji %60) Python ↔ Deno'da
  **örtüşüyor**; mojibake/AI-dolgu listeleri merkezî (`config.py`).
- Ölüm Maçı huni mimarisi (hibrit 0.7·stem + 0.3·exp + guard'lar + DeepSeek-v4-pro) ve "yalnız
  doğru şık + açıklama gönder" rubriği sağlam; halfvec geçişi eşikleri pratikte etkilemez.
- `classify_anchors` token-eşleşme düzeltmesi (B11) müfredat kapsama ölçümünü gerçeğe yaklaştırdı.

**Zayıf yanlar / riskler:**
1. **Edge Function embedding kayması (P0/T1):** App'ten eklenen sorular yanlış embedding (veya hiç)
   alıyordu → audit körlüğü. T1 bunu kapatır; sonrası periyodik parite kontrolü (T8) şart.
2. **Çift-dil parite kırılganlığı:** Eşik/model iki dilde yaşadıkça sessiz kayma riski sürer.
   Tek kaynak (paylaşılan JSON config + iki tarafın da okuduğu sabitler) uzun vadede daha güvenli.
3. **`unit_thresholds` kalibrasyonu** halfvec sonrası teyit edilmeli (T12) — denetim hassasiyeti
   doğrudan buna bağlı.

---

## 5. MİMARİ GÖZLEMLER (uzun vade, seçimlik)

| Alan | Mevcut | Hedef | Neden beklenebilir |
|---|---|---|---|
| **Release disiplini** | Migrasyon canlıda, kod uncommitted | DB değişikliğini **migration dosyası** + kod commit'i **atomik** sevk et | Bu denetimin asıl dersi: DB↔kod desenkronu P0 risk üretti |
| Tailwind `dark:` stratejisi | OS temasını izliyor | `index.css`'e `@custom-variant dark (&:where(.dark,.dark *))` + oled'de de `.dark` bas | CountdownWidget vb. OS-uygulama tema uyumsuzluğunu kökten çözer (T9'u sadeleştirir) |
| Vektörleri Pinecone'a taşıma (Seçenek C) | halfvec ~114 MB DB'de | `find_candidate_pairs` Pinecone'a | DB artık %37 dolulukta → ROI düşük; sınav sonrası arşiv adımı |
| `Theme` tip güvenliği | `Record<string,string>` | `typeof themeColors.dark` | Yanlış anahtar derlemede yakalanır |
| App.tsx state | 6 bayrak + 2.150 satır | `examMode` enum + view dosyaları | T11/T14 |
| Çift-dil kalite kapısı | Python + Deno ayrı | Paylaşılan config | Parite kaymasını yapısal olarak önler |

---

## DOĞRULAMA PLANI (özet)

| Görev | Doğrulama |
|---|---|
| T1 (Edge) | `AddQuestionView`'dan test sorusu → 200; satırda stem/exp dolu; sonra sil |
| T2 (deploy) | `npm run build` + `vitest run` yeşil; canlı sitede hızlı geçiş + gerçek yedek + Realtime hatası yok |
| T3 (yedek) | `Get-ScheduledTask` kayıtlı; elle koşum < 30 MB; JSON'da metin VAR embedding YOK |
| T4 (RPC) | `get_advisors` ilgili WARN kayboldu; uygulama etkilenmedi |
| T5 (script) | `calculate_dynamic_thresholds.py` hatasız koşar |
| T6 (RLS) | `get_advisors(security)` iki ERROR kayboldu; delta-sync + audit çalışıyor |
| T7 (ölü kod) | `vitest run` 190 yeşil; build temiz |
| T11 (akış) | 8 entry-point manuel turu — geri tuşu her birinde doğru ekrana döner |
| T12 (audit) | `smart_audit_pipeline --dry-run` skorları ±0.01 içinde |
| Genel | Her frontend değişiminde: `npm run build` + `vitest run` + Vercel deploy (GEMINI.md §0 protokolü) |

---

*Denetim: Atlas · 2026-06-14 · Canlı DB ölçümleri (Supabase MCP `execute_sql`/`get_advisors`/
`get_edge_function`) + build/test koşumu + 06-11 planına karşı reconciliation + 35+ kaynak dosya.*
