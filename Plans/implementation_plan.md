# DUSBANKASI Kapsamlı İyileştirme Planı — 2026-06-11

> Bu plan, canlı veritabanı ölçümleri (Supabase MCP `execute_sql`) ve tüm ilgili kaynak
> dosyaların satır satır incelenmesiyle üretilmiştir. Hiçbir sayı tahmin değildir;
> kaynağı belirtilmiştir. Uygulayıcı ajan maddeleri sırayla, her birinin kendi
> doğrulama adımıyla uygulayabilir.
> (Önceki içerik — High-Yield modu planı — uygulanmış ve bayatlamıştı; bu denetim planıyla değiştirildi.)

---

## ÖZET

**Canlı ölçümler (2026-06-11):**

| Metrik | Değer | Kaynak |
|---|---|---|
| Toplam DB boyutu | **548 MB** (574.540.947 B) — limit 500 MB **AŞILDI** | `pg_database_size` |
| `questions` toplam | 532 MB (heap 25 MB · **TOAST 504 MB** · index 2.2 MB) | `pg_total_relation_size` |
| Satır sayısı | 20.712 (canlı) + 3.336 dead tuple | `pg_stat_user_tables` |
| `embedding` (legacy) | **121 MB** — hiçbir kod kullanmıyor | `pg_column_size` toplamı |
| `stem_embedding` | 121 MB — yalnızca `find_candidate_pairs` RPC kullanıyor | aynı |
| `explanation_embedding` | 121 MB — yalnızca `find_candidate_pairs` RPC kullanıyor | aynı |
| Metin sütunları (soru+şıklar+açıklama) | yalnızca **17 MB** | aynı |
| TOAST şişkinliği (bloat) | ~124 MB (504 − 380 ölçülü canlı veri) | hesap |
| quality_flag dağılımı | null=18.015 · kavramsal_kopya=1.216 · auto_deleted=988 · high_yield=440 · aciklama_klonu=53 | `GROUP BY` |
| Diğer tüm tablolar toplam | < 3 MB (question_stats 1.8 MB, gerisi önemsiz) | tablo listesi |

**Tek cümlelik teşhis:** Veritabanı krizi bir "soru" sorunu değil, bir **vektör** sorunudur
(17 MB metin vs 363 MB embedding + 124 MB bloat). Soru silmeye gerek olmadan DB %70+ küçültülebilir.

- **Kritik sorunlar: 7** (DB boyutu; `export_all_data.py` 1.2 GB/koşum egress; uygulamadaki sahte "Yedekle";
  Realtime bileşik filtre geçersizliği + full-map stats push; `calculate_dynamic_thresholds.py` 11 MB/ünite;
  light modda görünmez başlık + OS'a bağlı `dark:` varyantı; 18 bekleyen recovery checkpoint'i)
- **Önemli sorunlar: 11** (quiz geçiş animasyonu ~300-450 ms; legacy embedding hâlâ üretiliyor;
  `handleGoBack` stale closure; render başına 8-50× `loadAllStats()` JSON.parse; `questions!inner(*)`
  vektör tuzağı; HY fetch'te cache bypass; ölü chart bileşenleri; `classify_anchors` substring
  false-positive'leri; ExplanationPanel ~0.5 s stagger; `pullAllDeviceStats` büyüyen full-pull; App.tsx monoliti)
- **Minor sorunlar: 9**
- **Önerilen toplam değişiklik: 27** (8 acil, 12 orta vadeli, 7 seçimlik)

---

## ACİL MÜDAHALE LİSTESİ (Bu Hafta)

Sıra önemlidir — 1→4 veritabanını limit altına çeker, 5→8 veri kaybı risklerini kapatır.

### A1. Legacy `embedding` sütununu ve RPC'lerini kaldır
- **Dosya:** Supabase (SQL) + `supabase/functions/manage-questions/index.ts` + `scripts/shared.py` + `scripts/tools/backfill_embeddings.py` + `scripts/supabase_fix_embeddings.py`
- **Sorun:** `embedding` sütunu 121 MB yer tutuyor; tek tüketicileri olan `match_questions_semantic` ve
  `match_questions_semantic_by_id` RPC'lerini **hiçbir kod çağırmıyor** (grep: yalnızca GEMINI.md +
  supabase-schema.sql'de geçiyor). Buna rağmen Edge Function (`index.ts:212`, `:236`) ve
  `shared.py:357` her yeni soruda bu sütun için OpenAI embedding üretmeye devam ediyor.
- **Değişiklik:**
  1. Önce yazarları sustur: `manage-questions/index.ts` → `embedBatch(combinedTexts, …)` çağrısını ve
     `row.embedding = …` satırını sil (236); `shared.py:355-358` → `c_sem` embedding bloğunu sil.
     Edge Function'ı yeniden deploy et.
  2. SQL: `DROP FUNCTION match_questions_semantic; DROP FUNCTION match_questions_semantic_by_id;
     ALTER TABLE questions DROP COLUMN embedding;`
  3. `scripts/tools/backfill_embeddings.py` ve `scripts/supabase_fix_embeddings.py` dosyalarını sil
     (yalnızca bu sütunu dolduruyorlardı).
- **Beklenen etki:** −121 MB canlı veri (A4'teki VACUUM FULL ile fiziksel geri kazanım) +
  soru başına 1/3 OpenAI embedding maliyeti tasarrufu.
- **Rollback:** Sütun geri eklenir + `backfill_embeddings.py` (git geçmişinden) yeniden koşulur. Veri
  yeniden üretilebilir olduğu için risk düşüktür.

### A2. Bayraklı çöp satırları kalıcı sil (2.257 satır)
- **Sorun:** `kavramsal_kopya` (1.216) + `auto_deleted` (988) + `aciklama_klonu` (53) satırları uygulamada
  görünmez (pozitif filtre: `supabase.ts:124,167`) ama her biri ~18,5 KB vektör taşıyor ≈ **42 MB**.
  pg_cron `aciklama_klonu`'ya hiç dokunmuyor — bu satırlar sonsuza dek kalır.
- **Değişiklik (SQL):**
  ```sql
  DELETE FROM questions
  WHERE quality_flag IN ('kavramsal_kopya','auto_deleted','aciklama_klonu');
  ```
  CASCADE kısıtı stats/answers'ı güvenle temizler; `log_deleted_record` trigger'ı `deleted_records`'a
  yazacağı için frontend delta-sync silinen iskeletleri otomatik düşürür.
- **Beklenen etki:** −42 MB (VACUUM sonrası) · kalan satır: 18.455.
- **Not:** Silmeden önce A6'daki yedek scripti EN AZ BİR KEZ koşulmuş olmalı.

### A3. `stem_embedding` + `explanation_embedding` → `halfvec(1536)`
- **Sorun:** İki audit vektörü fp32'de toplam 242 MB. pgvector `halfvec` (fp16) instance'da kurulu
  (pg_proc'ta `halfvec_*` fonksiyonları doğrulandı). Kosinüs benzerliğinde fp16 yuvarlama kaybı
  pratikte ~1e-3 mertebesindedir — 0.83-0.90'lı dedup eşiklerini etkilemez. Yeniden embedding
  ÜRETMEYE GEREK YOKTUR (Seçenek B'nin re-embed maliyeti ve kalibre riski olmadan aynı kazanç).
- **Değişiklik (SQL):**
  ```sql
  ALTER TABLE questions ALTER COLUMN stem_embedding        TYPE halfvec(1536) USING stem_embedding::halfvec(1536);
  ALTER TABLE questions ALTER COLUMN explanation_embedding TYPE halfvec(1536) USING explanation_embedding::halfvec(1536);
  ```
  Ardından `find_candidate_pairs` fonksiyon gövdesindeki `vector(1536)` tip referansları varsa
  `halfvec(1536)`'ya güncelle (`pg_get_functiondef('find_candidate_pairs'::regproc)` ile kontrol et;
  `<=>` operatörü halfvec'te aynen çalışır).
  Yazarlar (Edge Function, `shared.py`, `backfill_bi_encoder.py`) JSON float dizisi gönderir —
  PostgREST bunu halfvec'e otomatik cast eder, **kod değişikliği gerekmez**; yine de A8'deki
  doğrulamada 1 soru ekleyerek test et.
- **Beklenen etki:** 242 MB → ~114 MB (−128 MB).
- **Rollback:** Aynı ALTER ile `vector(1536)`'ya geri dönüş (fp16→fp32 upcast, bilgi zaten yuvarlanmış
  ama audit yeniden koşturulabilir).

### A4. `VACUUM FULL questions` ile fiziksel geri kazanım
- **Sorun:** A1-A3 mantıksal alanı boşaltır ama TOAST dosyaları küçülmez; mevcut ~124 MB bloat da ancak
  böyle geri gelir. (Supabase disk 8 GB; 500 MB sınır faturalama kotasıdır — VACUUM FULL için yer var.)
- **Değişiklik (SQL, düşük trafik saatinde — tablo kilitlenir, tek kullanıcı için sorun değil):**
  ```sql
  VACUUM FULL VERBOSE questions;  -- ardından: ANALYZE questions;
  ```
- **Beklenen etki (A1+A2+A3+A4 toplamı):** 548 MB → **~150-180 MB** (metin 17 + halfvec ~114 + heap/index ~20).
  Limitin %30-36'sı; yeni soru eklemek için bol alan.
- **Doğrulama:** `SELECT pg_size_pretty(pg_database_size(current_database()));` → 200 MB altı beklenir.
  Supabase Dashboard'daki "Database size" birkaç saat gecikmeli güncellenebilir.

### A5. `export_all_data.py` egress bombasını etkisizleştir
- **Dosya:** [scripts/export_all_data.py:24](scripts/export_all_data.py)
- **Sorun:** `select=*` üç embedding sütununu da JSON metni olarak indirir: 20.712 satır × ~57 KB ≈
  **koşum başına ~1,2 GB egress** (aylık 5 GB kotanın %24'ü). Ayrıca `daily_exams`, `exam_answers`,
  `user_data` tabloları yedeklenmiyor — "tam yedek" değil.
- **Değişiklik:**
  ```python
  TABLE_COLUMNS = {
      "questions": "id,lesson,unit,question,option_a,option_b,option_c,option_d,option_e,"
                    "correct_answer,explanation,created_at,updated_at,is_favorite,flagged,"
                    "flag_reason,quality_flag,image_url",
      # diğerleri "*" kalabilir (vektör yok, küçük tablolar)
  }
  tables = ["questions","question_stats","reference_sources","active_sessions",
            "daily_exams","exam_answers","user_data"]
  ```
  ve URL'de `select={TABLE_COLUMNS.get(table_name, '*')}`. `limit` 100 → 1000 yapılabilir (vektör yok).
- **Beklenen etki:** Koşum başına 1,2 GB → **~25 MB** (~50× azalma) + gerçek tam yedek.

### A6. Günlük otomatik yedek görevi kur (Alan 7'nin ana çıktısı)
- **Sorun:** Free tier'da otomatik yedek YOK (PITR ücretli). Tek felaket senaryosu = tüm emek kaybı.
- **Değişiklik:** A5 düzeltildikten sonra Windows Görev Zamanlayıcı kaydı:
  ```powershell
  Register-ScheduledTask -TaskName "DUSBANKASI Daily Backup" `
    -Trigger (New-ScheduledTaskTrigger -Daily -At 03:30) `
    -Action (New-ScheduledTaskAction -Execute "python" `
      -Argument "scripts/export_all_data.py" `
      -WorkingDirectory "C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI")
  ```
  `export_all_data.py`'a tarihli alt klasör (`exports/2026-06-11/`) + 14 günden eski klasörleri silme
  eklenmeli. Günlük maliyet ~25 MB egress ≈ aylık 750 MB → kota içinde; istenirse haftada 2'ye düşürülür.
- **Felaket kurtarma prosedürü (exports/README olarak da yaz):** yeni Supabase projesi →
  `supabase-schema.sql` + `supabase/migrations/*` sırayla → `questions_backup.json`'ı
  `scripts/add_questions.py` benzeri 10'luk chunk'larla INSERT → embeddingler `backfill_bi_encoder.py`
  ile yeniden üretilir → stats/user_data JSON'ları REST upsert.

### A7. Uygulamadaki "Yedekle" butonunun sahte yedeğini düzelt
- **Dosya:** [App.tsx:748-759](src/App.tsx) (`handleExport`)
- **Sorun:** v4.31'den beri `questions` state'i **iskelet** (id/lesson/unit/flag — metin YOK). "Yedekle"
  butonu kullanıcıya tam yedek hissi verip içeriksiz JSON indiriyor → **sessiz veri kaybı tuzağı**.
- **Değişiklik (önerilen, basit):** Butonu kaldırıp yerine "Yedek için `scripts/export_all_data.py`
  kullanın" notu koy; YA DA butona gerçek davranış ver:
  ```ts
  const handleExport = async () => {
    const rows = await fetchQuestionsByIds(questions.map(q => q.id)); // contentCache+network
    downloadJson(rows, `dus_bankasi_yedek_${todayStr()}.json`);
  };
  ```
  (İlk koşumda ~25 MB indirir — kullanıcıya onay diyaloğu göster.)
- **Beklenen etki:** Sahte güvence ortadan kalkar.

### A8. Bekleyen recovery checkpoint'lerini boşalt
- **Klasör:** `scripts/recovery/pending/` — **18 dosya**, en eskisi 2026-05-09 (`YANLIŞLARIM_09052026`),
  en yenisi 2026-06-03 (`Ortodonti_Ünite_15_SENDROMLAR`) + `yeni_klasor_165_soru.json`.
- **Sorun:** Bunlar Supabase'e yazılamadan kalmış üretim çıktıları — DB doluluğu nedeniyle INSERT'ler
  başarısız oldukça birikecek. A1-A4 sonrası alan açıldığında yazılabilirler.
- **Değişiklik:** Her dosya için `python scripts/add_questions.py "<dosya>" --dry-run` ile içerik kontrol
  → uygunsa gerçek yazım (+ ünite bazlı `smart_audit_pipeline`). Zaten DB'de olan (mükerrer checkpoint —
  ör. Tükürük Bezi ×4) dosyalar arşive taşınır.
- **Doğrulama:** `pending/` boş; `check_db_all.py` sayıları artmış.

---

## ORTA VADELİ İYİLEŞTİRMELER (Bu Ay)

### B1. Realtime'ı kaldır, yerine focus-pull senkronizasyonu (Alan 2B)
- **Bileşen:** [useRealtimeStats.ts](src/hooks/useRealtimeStats.ts) + [App.tsx:234-254](src/App.tsx)
- **Sorun:** (1) `filter: "user_id=eq.X&device_id=neq.Y"` (satır 79) — Supabase Realtime postgres_changes
  **tek filtre ifadesi** destekler; bileşik filtre ya kanal hatası üretir (3 retry sonrası kalıcı ölü
  abonelik) ya da sürüme göre filtresiz teslimata düşer. Konsolda `[Realtime] Kanal hatası` görülüyorsa
  abonelik zaten hiç çalışmıyor demektir. (2) Çalışsa bile `syncStatsUp` her flush'ta TÜM stats map'ini
  upsert ettiği için (bkz. B2) karşı cihaza her seferinde ~1.300+ UPDATE eventi yayınlanır → Realtime
  egress çarpanı. (3) Tek kullanıcı + "sekme öne gelince zaten yeniden bağlanıyor" gerçeği: canlılık
  ihtiyacı yok.
- **Çözüm:** `useRealtimeStats` hook'unu ve App.tsx'teki çağrısını tamamen sil. Yerine
  `visibilitychange → visible` olduğunda `syncStatsDown()` çağıran 10 satırlık effect ekle
  (sekmeye dönüşte diğer cihazın verisi gelir — kullanıcı deneyimi pratikte aynı).
- **Risk:** Düşük — mevcut MAX-MERGE mantığı (`syncStatsDown`) zaten çift yönlü güvenli.
- **Beklenen etki:** Realtime egress kalemi sıfırlanır; WebSocket bağlantı yönetim kodu (160 satır) silinir.

### B2. Stats push'unu delta'ya çevir (Alan 2A)
- **Bileşen:** [stats.ts:587-625](src/lib/stats.ts) (`_doSyncStatsUp`)
- **Sorun:** Her sync TÜM map'i (`loadAllStats()`) push eder. Bugün 1.335 satır ≈ ~300 KB ingress +
  1.335 satırlık gereksiz UPDATE (dead tuple üretimi); 10.000 çözülmüş soruda ~2 MB/flush olur.
- **Çözüm:** Modül seviyesinde `const dirtyIds = new Set<string>()`; `saveQuestionStat` her yazımda
  `dirtyIds.add(questionId)`; `_doSyncStatsUp` yalnızca `dirtyIds`'teki kayıtları push edip başarıda
  set'i temizler; `PENDING_SYNC_KEY` mevcut davranışla korunur (hata → set kalır). İlk girişte (login
  merge senaryosu, App.tsx:274) `syncStatsUp({all:true})` parametresiyle tam push korunur.
- **Risk:** Orta-düşük — `sync.merge.test.ts` + `stats.test.ts` regresyon ağı mevcut; testlere
  "yalnızca dirty push edilir" senaryosu eklenmeli.

### B3. Quiz geçiş animasyonunu hızlandır (Alan 3 — ana şikayet)
- **Mevcut zincir (ölçüm):** `QuizView.tsx:206-212` `AnimatePresence mode="wait"` → exit spring(700,35)
  ~150-250 ms bitmeden yeni soru render edilmez → enter spring(700,35) ~200 ms → üstüne
  `QuestionCard.tsx:68-70` kendi mount spring'i (600,32) bindirir. **Hissedilen toplam: ~300-450 ms.**
- **Değişiklikler (dosya · satır · eski → yeni):**
  1. `QuizView.tsx:206` — `mode="wait"` → **`mode="popLayout"`** ve exit'i sadece opaklığa indir:
     `exit={{ opacity: 0, transition: { duration: 0.06 } }}` (x kaydırmasını exit'ten kaldır).
  2. `QuizView.tsx:212` — enter: `transition={{ duration: 0.12, ease: [0.16,1,0.3,1] }}`
     (spring yerine kısa tween; x: 16→8'e düşür).
  3. `QuestionCard.tsx:66-70` — mount animasyonunu tamamen kaldır (`initial`/`animate`/`transition`
     prop'larını sil; parent zaten animasyon veriyor — çifte animasyon kalkar).
  4. `ExplanationPanel` stagger'ı sıkılaştır: `motion.ts:193-204` `staggerParent` →
     `staggerChildren: 0.03, delayChildren: 0` ve `staggerChild` duration `0.25 → 0.15`.
     (Bunlar global variant — diğer kullanıcı SimulationResultView de hızlanır, istenen yönde.)
  5. `QuestionCard.tsx:53-60` — confetti'yi `particleCount: 60 → 30, ticks: 80 → 50` yap ve
     `settings.celebration` toggle'ı eklenene dek mobilde (`matchMedia('(pointer: coarse)')`)
     devre dışı bırak. Düşük cihazlarda cevap anı jank'ı kalkar.
  6. Yanlış cevap overlay'i `QuestionCard.tsx:148` `duration: 1.2, repeat: 1` (toplam 2,4 s) →
     `duration: 0.6, repeat: 0`. "SONRAKİ" zaten anında aktif ama görsel gürültü kısalır.
- **Hedef:** geçiş < 100 ms hissedilen gecikme. `prefers-reduced-motion` bloğu `index.css:425` geçerli
  (doğrulandı) — Framer animasyonları da `motionSafe` helper'ına bağlanırsa tam uyum olur (seçimlik).
- **Mobil/masaüstü ayrı profil:** gerek yok; yukarıdaki süreler her ikisinde de iyi. Tek istisna confetti (madde 5).

### B4. `calculate_dynamic_thresholds.py` vektör indirme egress'i (Alan 2C)
- **Dosya:** [scripts/tools/calculate_dynamic_thresholds.py:95](scripts/tools/calculate_dynamic_thresholds.py)
- **Sorun:** `select=id,stem_embedding,explanation_embedding,embedding` — ünite başına 200 satıra kadar
  × ~57 KB ≈ **~11 MB/ünite**; tüm dersler için koşulursa ~1 GB.
- **Çözüm:** (1) `embedding`'i SELECT'ten çıkar (A1 ile zaten ölecek), (2) benzerlik hesabını sunucuya
  taşı: `find_candidate_pairs` benzeri bir RPC ile yalnızca skor dağılımını döndür (satır başına 8 B
  float, 200 satır ≈ 2 KB) — egress ~5000× düşer. Script nadir koşulduğu için öncelik orta.

### B5. `fetchExamWrongAnswers` vektör tuzağını kapat
- **Dosya:** [supabase.ts:1050-1058](src/lib/supabase.ts)
- **Sorun:** `questions!inner(*)` — `*` üç vektörü de getirir (halfvec sonrası bile ~12 KB/satır JSON).
  Şu an çağıran yok (ölü kod) ama ilk kullanımda sessiz egress sızıntısı olur.
- **Çözüm:** `questions!inner(${SELECT_COLS})` yap veya fonksiyonu sil. 1 satırlık iş — A serisine de alınabilir.

### B6. `fetchHighYieldQuestions`'a cache kontrolü ekle
- **Dosya:** [supabase.ts:332-350](src/lib/supabase.ts)
- **Sorun:** Her çağrıda 440 sorunun tamamı ağdan iner (~600 KB), contentCache'e bakılmaz; yalnızca
  yazılır. `useQuestions.loadHighYield` ilk HY açılışında çağrılıyor — cache boşken her cihaz/oturumda tekrar iner.
- **Çözüm:** Önce skeleton'lardan HY id listesi çıkarıp `fetchQuestionsByIds(hyIds)`'a delege et
  (cache-first yol zaten orada). `fetchHighYieldQuestions` ağ fonksiyonu yalnızca id'ler skeleton'da
  yokken (ilk kurulum) kullanılır.

### B7. `handleGoBack` stale-closure düzeltmesi
- **Dosya:** [App.tsx:696-733](src/App.tsx)
- **Sorun:** `case 'select-deneme-amount'` dalı `isHighYieldExam` okur ama dependency dizisi
  `[appState, mode, isFavoritesExam]` — HY karma akışında geri tuşu eski değerle yanlış ekrana döner.
- **Çözüm:** `isHighYieldExam`'i deps'e ekle. (B8 enum refactoru bunu kökten çözer ama tek satırlık
  düzeltme beklemesin.)

### B8. Çakışan mod bayraklarını `examMode` enum'una indirgeme
- **Dosya:** App.tsx (state bloğu, 99-110 + akış handler'ları)
- **Sorun:** `mode`, `isFavoritesExam`, `isHighYieldExam`, `isHighYieldMode`, `isDailyExamSession`,
  `simTotalSeconds != null` — 6 bağımsız sinyal aynı şeyin (aktif oturum türü) parçaları; geçişlerde
  bayrak sıfırlama unutma hatalarına açık (B7 bunun semptomu).
- **Çözüm:** `type ExamMode = 'unit-quiz' | 'deneme' | 'favorites' | 'high-yield' | 'smart' |
  'daily' | 'simulation'` + tek `activeExam: { mode: ExamMode; dailyExamId?: string;
  simTotalSeconds?: number } | null` state'i. Handler'lar tek atama yapar; `handleGoBack` tablo halini alır.
- **Risk:** Orta — davranış birebir korunmalı; mevcut `resumableSession.test.ts` + manuel akış listesi
  (8 entry point) ile doğrulanır.

### B9. Render başına tekrarlanan `loadAllStats()` parse'larını tekille
- **Dosyalar:** [stats.ts:194](src/lib/stats.ts) (`getUnitProgress` içinde `loadAllStats`),
  çağıranlar: App.tsx LessonSelection (ders kartı başına 1, satır 1454), UnitSelection (ünite başına 1,
  satır 1575), `weakCount` (satır 1007), DailyPlanView/ErrorAnalytics props.
- **Sorun:** `loadAllStats()` tüm map'i JSON.parse eder; 10k kayıtta ~1 MB string. Ders ekranında 8,
  ünite ekranında 50+ parse / render → seçim ekranlarında gözle görülür takılma (Alan 3 şikayetinin
  ikinci kaynağı).
- **Çözüm:** `getUnitProgress(questionIds, stats: StatsMap)` imzasına stats parametresi ekle;
  App.tsx'te `const stats = useMemo(() => loadAllStats(), [statsVersion])` ile bir kez yükleyip
  LessonSelection/UnitSelection'a prop geçir. `getWeakQuestionIds` için aynısı.

### B10. `pullAllDeviceStats`'a artımlı çekim (ölçek koruması)
- **Dosya:** [supabase.ts:757-799](src/lib/supabase.ts)
- **Sorun:** Her `syncStatsDown` kullanıcının TÜM stats satırlarını çeker (bugün ~270 KB; 10k satırda
  ~2 MB × günde birkaç açılış → aylık yüzlerce MB).
- **Çözüm:** `localStorage.stats_last_pull` zaman damgası + sorguya `.gt('updated_at', lastPull)`
  (tabloda `updated_at` zaten var). İlk kurulum/`statsVersion` reset'te tam çekim korunur.
- **Risk:** Düşük; merge mantığı değişmez, yalnızca girdi kümesi daralır.

### B11. `classify_anchors` eşleşme kalitesi (Alan 6A)
- **Dosya:** [scripts/notebooklm_mcp_exhaust.py:389-422](scripts/notebooklm_mcp_exhaust.py)
- **Sorun:** `w in stem_corpus` **substring** araması: "kas" çapası "vasküler"/"kasılma" içinde eşleşir →
  false-positive "covered" → o kavram için soru ÜRETİLMEZ (sessiz müfredat boşluğu). %60 eşik buna
  binince gevşekleşiyor.
- **Çözüm:** Corpus'u `set(_tokenize(stem))` (shared.py'deki tokenizer + Türkçe küçük harf) yapıp
  kelime düzeyinde eşleştir; eşleşmeyi `w == token or token.startswith(w)` (gövde+ek toleransı) ile yap.
  Eşik 0.60 korunabilir; değişiklik sonrası bir ünitede covered/uncovered farkını logla ve örneklemle doğrula.

### B12. Ölü kod temizliği (bundle + bakım)
- v4.30'da kaldırılan grafiklerin bileşen dosyaları duruyor: `ForceGraph, MarimekkoChart, MorphingChart,
  SankeyDiagram, ChordDiagram, ConsistencyBoxPlot, ViolinPlot, BeeswarmPlot…`
  ([src/components/charts/](src/components/charts)) — `index.ts` barrel'ından ve diskten sil
  (import eden kalmadığını `grep` ile doğrula).
- [data.ts:35-111](src/data.ts) `sampleData` — kullanan yok, sil.
- `package.json`: `react-spring` (framer-motion varken ikinci animasyon kütüphanesi), `use-sound`,
  `@tanstack/react-virtual`, `jspdf`, `zod`, `date-fns` — her biri için `grep` ile kullanım kontrolü,
  kullanılmayanları kaldır. Beklenen bundle küçülmesi: ölçüp raporla (`vite build` çıktısı önce/sonra).

---

## UZUN VADELİ REFACTORING (Seçimlik)

| Alan | Mevcut durum | Hedef durum | Neden beklenebilir |
|---|---|---|---|
| App.tsx bölme | 2.150 satır; 11 inline bileşen | `views/LessonSelection.tsx`, `views/UnitSelection.tsx`, `views/DenemeFlow.tsx`, `lib/exportPdf.ts` (110 satırlık HTML şablonu) ayrı dosyalara | Davranış değişmiyor; QuizView örneğindeki gibi 1:1 taşıma güvenli ama acil değil. B8 sonrası yapılırsa daha temiz |
| Vektörleri Pinecone'a taşıma (Seçenek C) | Audit vektörleri DB'de (halfvec sonrası ~114 MB) | `pinecone_client.py` zaten var; `find_candidate_pairs` Pinecone sorgusuna taşınır | A1-A4 sonrası DB ~%30 dolulukta — taşımanın ROI'si düşük; sınav sonrası arşivleme adımı olarak uygundur |
| Embedding 512d Matryoshka (Seçenek B) | 1536d halfvec | 512d re-embed (−~76 MB daha) | Re-embed maliyeti + `unit_thresholds` yeniden kalibrasyonu gerekir; halfvec kazancı yeterliyken riske değmez |
| `Theme` tip güvenliği | `type Theme = Record<string, string>` ([theme/index.ts:98](src/theme/index.ts)) | `type Theme = typeof themeColors.dark` (keyof güvenliği) | Yazım hatası sınıfları derlemede yakalanır; mekanik değişiklik |
| Tailwind `dark:` varyantını sınıf stratejisine bağla | `dark:` utility'leri OS temasını izliyor; uygulama teması `documentElement.className` ([settingsStore.ts:23](src/lib/settingsStore.ts)) | `index.css`'e `@custom-variant dark (&:where(.dark, .dark *));` ekle + `oled` temasında da `.dark` sınıfı bas | CountdownWidget gibi `dark:` kullanan yerlerde OS-uygulama tema uyumsuzluğu biter |
| Session flush debounce | Her cevapta `save_active_session` RPC ([useResumableSession.ts:227](src/hooks/useResumableSession.ts)) | 2 sn debounce + `beforeunload` flush (altyapı — `saveTimerRef` — zaten yazılmış, bağlanmamış) | Ingress ücretsiz; DB yazma yükü tek kullanıcıda önemsiz. Sadece hijyen |
| Fontshare `@import` | Render-blocking harici CSS ([index.css:1](src/index.css)) | Satoshi'yi self-host (woff2 + `font-display: swap`) | Açılış hissini iyileştirir; orta etki |

---

## ALAN 1: VERİTABANI BOYUT ÇÖZÜMÜ

**Seçilen yaklaşım: A (legacy drop) + D-lite (bayraklı satır temizliği) + halfvec dönüşümü + VACUUM FULL** —
yukarıda A1-A4. **Gerekçe:**
- Seçenek A tek başına yetmez (548−121−bloat ≈ ~300 MB — hâlâ %60 doluluk, büyüme payı dar).
- Seçenek B (512d re-embed): ~37.000 embedding çağrısı + eşik yeniden kalibrasyonu (denetim kalitesi riski).
  halfvec aynı kazancı **sıfır re-embed, sıfır kalibrasyon** ile verir → B'nin yerine halfvec seçildi.
- Seçenek C (Pinecone): `find_candidate_pairs` sunucu self-join'inin Pinecone sorgu mimarisine taşınması +
  iki sistemin senkron tutulması = sınava 5 ay kala gereksiz karmaşıklık. Ertelendi (uzun vade tablosu).
- Seçenek D (kalite bazlı soru silme): metin yalnızca 17 MB — soru silmek boyuta etki etmez; yalnızca
  zaten bayraklılar silinir (A2).
- Seçenek E (Pro $25/ay): Gerekmiyor. A1-A4 sonrası ~%30 doluluk. Pro'ya geçiş ancak görsel/medya
  büyümesi olursa düşünülür.

**Adım sırası:** A6 (ilk yedek) → A1 → A2 → A3 → A4 → A8 (pending yazımı) → doğrulama.
**Rollback planı:** Her adım öncesi `export_all_data.py` çıktısı mevcut; sütun/satır geri yüklemeleri
A1/A2 maddelerinde tanımlı; halfvec geri dönüşü A3'te.

## ALAN 2: EGRESS OPTİMİZASYONU

**En büyük 3 kaynak ve plan:**
1. **`export_all_data.py` `select=*`** — ~1,2 GB/koşum → A5 ile ~25 MB (**~%98 azalma**). Aynı kök neden
   `calculate_dynamic_thresholds.py`'de (B4, ~11 MB/ünite).
2. **Realtime + full-map stats push** — bileşik filtre geçersizliği & her flush'ta tüm satırların
   upsert/yayını → B1 (Realtime kaldır) + B2 (delta push). Realtime kalemi → 0.
3. **`pullAllDeviceStats` tam çekimi** — bugün ~270 KB/açılış, satır sayısıyla lineer büyür → B10
   (updated_at delta).

**Frontend ana akışı (skeleton + on-demand) v4.31 sonrası zaten verimli** — fetchSkeletons delta sync,
contentCache kalıcı hit veriyor; ek iş gerekmez. Tahmini aylık tablo (uygulama sonrası):
skeleton/delta ~30 MB + content miss ~20 MB + stats sync ~30 MB + günlük yedek ~750 MB(*) ≈ **<1 GB/ay**
(*yedek haftada 2'ye inerse ~200 MB). 5 GB kota güvenli bölgede.

## ALAN 3: QUIZ ANİMASYON OPTİMİZASYONU → B3 (dosya·satır·değer listesi orada)

## ALAN 4: TASARIM TUTARSIZLIKLARI — Acil düzeltme listesi

| # | Dosya · Satır | Sorun | Düzeltme |
|---|---|---|---|
| 1 | [App.tsx:832](src/App.tsx) | Başlık `text-white` hardcoded — light temada beyaz üstüne beyaz, **görünmez** | `text-white drop-shadow…` → `${theme.text}` |
| 2 | [App.tsx:807-808](src/App.tsx) | Splash metinleri `text-white`/`text-zinc-400` + `bg-[#0c061a]` — light temada da koyu splash | Bilinçliyse koru; değilse theme token kullan |
| 3 | [App.tsx:67-90](src/App.tsx) | CountdownWidget `dark:` sınıfları OS temasını izliyor (uygulama temasını değil) | Uzun vadede `@custom-variant dark`; kısa vadede `dark:` çiftlerini `${theme.*}` token'larına çevir |
| 4 | [App.tsx:1417-1421](src/App.tsx) | "İstatistikler" bento kartı `document.querySelector(...).click()` DOM hack'i | Doğrudan `setAppState('analytics')` çağır |
| 5 | [theme/index.ts:98](src/theme/index.ts) | `Theme = Record<string,string>` — yanlış anahtar derlemede yakalanmıyor | `typeof themeColors.dark` |
| 6 | SimulationResultView / AuthModal / ExplanationPanel (grep: 26 hardcoded koyu renk, 8 dosya) | `text-white`, `bg-black/30` vb. light modda kontrast bozuyor | Dosya başına 10 dk token geçişi; öncelik AuthModal (giriş akışı) |
| 7 | [index.css:267-270](src/index.css) | Mesh gradient'in light/oled'de kapatılması DOĞRU çalışıyor (iki selektör varyantı da mevcut) | — (doğrulandı, işlem yok) |
| 8 | [App.tsx:53-63](src/App.tsx) | CountdownWidget `daysLeft===0` "TEBRİKLER/Sınav Tamamlandı"yı sınav GÜNÜ gösterir (erken kutlama) | Sınav günü "BUGÜN SINAV" durumu ekle |
| 9 | StatisticsView (58 KB) | Bölünme şart değil: 30+ `useMemo` ile türetimler izole; D3 bileşenleri zaten ayrı dosyalarda; `key={statsVersion}` remount yalnızca manuel sync'te | B12'de ölü grafikler silinince küçülür; başka işlem önerilmez |
| 10 | Mobil 375px | Quiz `flex-col lg:flex-row`, bento `grid-cols-2`, CountdownWidget `hidden sm:flex` — kritik kırılma bulunamadı | — |

## ALAN 5: APP.TSX REFACTORING

→ B7 (acil tek satır), B8 (enum), B9 (stats parse), uzun vade tablosu (dosya bölme + PDF export ayrıştırma).
`as unknown as Question[]` cast'leri (App.tsx:127, 141): skeleton↔Question tip uyuşmazlığının semptomu —
kullanılan alanlar her iki tipte mevcut olduğundan runtime hatası üretmiyor, **tek gerçek kurbanı A7'deki
sahte yedek**. B8 ile birlikte props tiplerini `QuestionSkeleton`'a dürüstçe geçir. `getMockDetails`
(App.tsx:145-191) yalnızca `?preview=sim` arkasında — production'da kalabilir, bundle maliyeti önemsiz.

## ALAN 6: PIPELINE İYİLEŞTİRMELERİ

- **Güvenilirlik:** `_post timeout=600` + `notebook_query_status` polling üst sınırı — uzun NotebookLM
  sorgularında gerçekçi, değiştirme. `ensure_auth` stale→refresh→canlı `notebook_get` testi akışı sağlam
  (v4.28'de kanıtlanmış). `chunk_size=25` kavram/batch `PROMPT_CHAR_LIMIT=9500` ile uyumlu — koru.
  `run_mcp_pipeline.py` checkpoint/resume mevcut ve çalışıyor (`pipeline_checkpoint.json`, `--resume`/`--status`).
- **Kalite:** B11 (`classify_anchors` substring → token eşleşme) ana iyileştirme. `check_saturation`
  "DOYGUNLUK" keyword'ü tek sinyal değil — `MIN_ACCEPTED_PER_BATCH=5` + `SATURATION_THRESHOLD=2` düşük
  verim sayacı zaten ikinci doygunluk mekanizması; çift mekanizma yeterli, değişiklik önerilmez.
- **Egress:** `get_questions_for_unit` (shared.py:304) yalnızca metin sütunları çekiyor — temiz ✔.
  `audit_logic.py:631` aday çiftler için vektör indirir (~38 KB/aday) — halfvec sonrası yarıya iner.
  `deploy_to_supabase` embedding üretimi A1 ile 3→2'ye düşer. `_lexical_only_fallback` 0-egress yolu doğru.
- **Hız:** `INTER_BATCH_COOLDOWN=5 s`, `MAX_BATCHES_PER_UNIT=15` — loglarda rate-limit kanıtı yok; koru.
- **DeepSeek kürasyonu:** `deepseek-v4-flash` (config), hata durumunda `keep_both` failsafe — doğru
  taraf-hatalı tasarım; değişiklik önerilmez.

## ALAN 7: YEDEKLEME STRATEJİSİ

→ A5 (script düzeltme) + A6 (zamanlanmış görev + felaket kurtarma prosedürü) + A7 (uygulama butonu) +
A8 (pending boşaltma). Ek not: kota aşımında Supabase free tier projeyi **read-only** moda alabilir
(grace period sonrası) — A1-A4'ün bu hafta yapılmasının asıl nedeni budur. `active_sessions`
"50. soruda cihaz kapandı" senaryosu: her cevapta RPC flush + `beforeunload` keepalive PATCH zaten
mevcut (useResumableSession.ts:244-291) — ek iş gerekmez ✔.

## ALAN 8: ADAPTİF MOTOR / İSTATİSTİK

- `buildSmartQueue`: weakness(0.7) + newExploration(0.3) + greedy interleaving — FSRS bilinçli olarak
  Anki'ye devredilmiş (GEMINI §3.1); makul, dokunma. `EXPOSURE_MIX` 80/15/5 havuzları dört modda tutarlı ✔.
- `computeOverviewStats`: O(n) tek geçiş, StatisticsView'da `useMemo`'lu — sorun yok. Asıl maliyet
  B9'daki tekrarlı `loadAllStats` parse'ları.
- `getWeakQuestionIds`: silinmiş soruların id'leri stats'ta kalır → quiz başlatma yolu `questions.some(...)`
  kesişimiyle korunuyor (App.tsx:670); ancak `weakCount` rozeti (App.tsx:1007) filtrelenmemiş sayı
  gösteriyor — kozmetik tutarsızlık, B9 sırasında aynı kesişimden geçir.
- `projections.ts`: `DUS_EXAM_DATE='2026-11-01'` doğru, 12 testle kilitli ✔. `metrics.ts` momentum /
  tutarlılık / tahmin bandı hesapları StatisticsView'da memoize ✔. `dusPlacement.ts` statik 2024-25
  yerleştirme tablosu — yeni kılavuz açıklanana dek güncelleme gerekmez.

## ALAN 9: KOD KALİTESİ

- ESLint flat config + typescript-eslint recommended + react-hooks v7 — sağlıklı; `no-explicit-any: warn`
  bilinçli (D3 katmanı). Vitest: 11 dosya / 146 test, lib katmanı iyi örülmüş; bileşen testi yok —
  B3 sonrası QuizView için 1 smoke test önerilir. CI (GitHub Actions: tsc + vitest + build) zaten kurulu.
- Python tarafı kısmi type-annotation'lı; sınav dönemi önceliği değil, ek iş önerilmez.

## ALAN 10: UX (sınav odaklı)

- **Günlük deneme:** `loadTodaysDailyExam` user değişiminde 1 kez + karttan tek tıkla on-demand fetch —
  sabah akışı hazır ✔. Resume desteği karta işlenmiş (`resumeAt`) ✔.
- **Favori toggle:** optimistic update — gecikme yok ✔. **Soru raporlama:** ekrandan anında kaldırmaz
  (yalnızca işaretler) — oturum bütünlüğü için bilinçli; değiştirme.
- **Geri tuşu:** B7/B8 düzeltmeleri popstate akışını da düzeltir; `pushState` birikimi minör, B8'de gözden geçir.
- **Splash video:** IDB cache'li açılışta ~0,5-1 s — koru; istenirse `sessionStorage` ile oturum başına 1'e indir.
- **Tema geçişi:** anlık + `transition-colors` — yeterli ✔. **Progress göstergesi:** QuizHeader sayaç +
  bar mevcut ✔.

---

## DOĞRULAMA PLANI

| Değişiklik | Doğrulama |
|---|---|
| A1-A4 (DB) | Her adım sonrası `pg_database_size`; örnek ünitede `smart_audit_pipeline --dry-run` (dedup skorları ±0.01 içinde aynı); uygulamada 1 ünite aç (içerik fetch çalışıyor) |
| A1 (yazarlar) | `AddQuestionView`'dan 1 test sorusu ekle → satırda `stem_embedding`/`explanation_embedding` dolu, hata yok |
| A5/A6 (yedek) | Koşum < 30 MB indirme; `questions_backup.json`'da soru metni VAR, embedding YOK; `Get-ScheduledTask` kayıtlı |
| A7 (Yedekle) | Butondan inen JSON'da `question`/`options` alanları dolu |
| A8 (pending) | `pending/` boş; `check_db_all.py` ünite sayıları beklenen artışta |
| B1/B2 (sync) | `npm run test` (sync.merge + stats yeşil; yeni dirty-set testi); 2 sekme senaryosu: A'da 5 soru çöz → B'ye odaklan → istatistik güncellenmiş |
| B3 (animasyon) | `npm run build` + preview'da geçiş gözlemi (<100 ms hedef); `prefers-reduced-motion` emülasyonu |
| B7/B8 (akış) | 8 entry point manuel turu: ünite quiz, deneme, favori, HY ünite, HY karma, simülasyon, günlük deneme, akıllı çalışma — geri tuşu her birinde doğru ekrana döner |
| B9 (perf) | React DevTools Profiler: ders seçim ekranı render süresi önce/sonra |
| B11 (anchors) | Bir ünitede eski/yeni covered listesi diff'i; kısa-kelime substring false-positive'lerinin kaybolduğunu örnekle göster |
| Genel | Her frontend değişikliğinde: `npm run build` (tsc) + `npm run test` + Vercel deploy (GÖREV SONRASI PROTOKOL, GEMINI.md §0) |

---

*Denetim: Atlas · 2026-06-11 · Canlı DB ölçümleri (Supabase MCP) + 30 kaynak dosyanın okunmasıyla hazırlandı.*
