# DUSBANKASI UI/UX Yeniden Tasarım — Devir Teslim Raporu (Faz 3 tamamlama + Faz 4 sonrası)

> Yazılış: 2026-07-13 (aynı gün, önceki devir raporunun devamı) · Kaynak plan: [`UIUX_REDESIGN_IMPLEMENTATION_PLAN_2026-07-12.md`](./UIUX_REDESIGN_IMPLEMENTATION_PLAN_2026-07-12.md) · Önceki durum: [`UIUX_REDESIGN_DEVIR_RAPORU_2026-07-13_FAZ3-SONRASI.md`](./UIUX_REDESIGN_DEVIR_RAPORU_2026-07-13_FAZ3-SONRASI.md)
> Bu rapor, **Faz 3'ün kalan kalemlerinin (chart hijyeni, hız×doğruluk kadranı) ve Faz 4'ün tamamının** ne ölçüde bittiğini, hangi kararların bilinçli olarak nasıl verildiğini ve **Faz 5-7'nin nereden devam edileceğini** belgeler. Devralan LLM bağlamsız çalışabilmeli.

---

## 0. Genel durum özeti

| Faz | Durum | Not |
|---|---|---|
| Faz 1 — Token/Tipografi | ✅ Tamamlandı | (önceki raporlarda detaylı) |
| Faz 2 — Atom disiplini | ✅ Tamamlandı | |
| Faz 3 — Dashboard & İstatistik | ✅ **Tamamlandı** (bilinçli kapsam kararlarıyla — bkz. §1.2) | Chart hijyeni + hız×doğruluk kadranı + deneme geçmişi wiring bu oturumda bitti |
| Faz 4 — Ünite/Ders Sıralaması + Ana Menü | ✅ **Tamamlandı** | curriculum.ts tek kaynak, kart redesign, sort toggle |
| Faz 5-7 | ⬜ Başlanmadı | §3'te devam noktası |

**Build durumu:** `npm run build` (tsc -b + vite build) ve `npm run test` (vitest, 201/201 test) bu rapor yazılırken temiz geçiyor. Dev server'da (Browser pane) ana ekran ve İstatistikler view'ı manuel test edildi — konsol hatası yok.

**Repo hijyeni:** Önceki raporlardaki pre-existing uncommitted değişiklikler hâlâ dokunulmadan duruyor. Bu oturumda yeni 3 dosya eklendi (`curriculum.ts`, `curriculumIcons.tsx`, `SpeedAccuracyQuadrant.tsx`) ve `App.tsx`, `StatisticsView.tsx`, `charts/index.ts`, `charts/ChartFrame.tsx`, `lib/examAnalytics.ts`, `lib/overview.ts` değiştirildi. Hiçbir şey commit edilmedi.

---

## 1. Bu oturumda yapılanlar

### 1.1 Faz 3 — Chart hijyeni (§Faz3.2)

**Kapsam kararı (önceki rapordaki "38 chart'ı tek oturumda bitirmek riskli" uyarısına cevap):** Tüm chart component dosyalarının (~31 dosya) D3-internal kodunu (legend-toggle, per-nokta klavye tooltip) değiştirmek yerine, **`ChartFrame` sözleşmesinin en yüksek değerli, en düşük riskli kısmını** (title/eyebrow/loading/error/empty-state + ekran-okuyucu özeti) tüm StatisticsView chart bloklarına uyguladım. Chart'ların D3 çizim mantığına (renk, tooltip, animasyon) **hiç dokunulmadı** — sadece etraflarındaki "çerçeve" standartlaştı. Bu, riski chart-içi regresyon olasılığından tamamen ayırır.

1. **`ChartFrame.tsx` genişletildi** (geriye uyumlu — yeni prop'ların hiçbiri verilmezse eski davranış aynen çalışır):
   - `loading` → shimmer skeleton, `error` + `onRetry` → hata durumu + "Tekrar dene" butonu, `isEmpty` + `emptyMessage` → standart boş-durum mesajı, `summary` → `sr-only` ekran okuyucu özeti.
   - **Yeni `flat` prop:** Tier 1/2'deki "hero" chart'lar (`double-bezel` — dalgıç saati çerçevesi) ile Tier 3'ün `CollapsibleSection` içindeki iç içe kartları (`theme.surface`) arasında görsel çakışma riski vardı (bezel-in-bezel gölge yığılması). `flat=true` aynı sözleşmeyi (`title`/`loading`/`error`/`isEmpty`/`summary`) düz bir `theme.surface` kartıyla render eder — Tier 3'te bunu kullandım.
   - **Bilinçli YAPILMAYAN:** Legend interactive-toggle ve per-nokta klavye-tooltip genel bir `ChartFrame` prop'u olarak eklenmedi — bunlar chart-özel D3 event mantığı gerektirir, generic bir sarmalayıcıda taklit edilemez. `SpeedAccuracyQuadrant.tsx` (yeni yazılan chart) bu paterni gösteriyor (`tabindex`/`role="button"`/`focus` event'i D3 node'larına eklendi) — mevcut 30 chart'a bu retrofit'i uygulamak ayrı bir faz gerektirir (bkz. §2.1).
   - `role="img"` ile children'ı sarmalamak DENENDİ ve GERİ ALINDI: interaktif chart'lar (gün seçimi olan `DailyActivityChart`, tıklanabilir `UnitHeatMap` hücreleri) `role="img"` altında ekran okuyucudan tamamen gizlenir — a11y anti-pattern'i, düzeltildi.

2. **Wrap edilen chart'lar (15 adet, ChartFrame kullanan `StatisticsView.tsx`'teki gerçek D3 chart'ların tamamı):**
   - Tam `ChartFrame` (double-bezel, Tier 1/2): `DailyActivityChart` (zaten vardı), `RadarChart`, `TrendLineChart`, `DifferenceChart`, `ContributionHeatMap`.
   - `flat` `ChartFrame` (Tier 3, `CollapsibleSection` içi): `AreaStreamGraph`, `WaterfallChart`, `CountSparkline`, `WeeklyComparison`, `DersScatterPlot`, `BulletChart`, `SpeedAccuracyQuadrant` (yeni), `ParallelCoordinates`, `StudyTreemap`, `SunburstChart`.

3. **Bilinçli wrap EDİLMEYEN chart'lar (gerekçeli):**
   - `GoalRing`, `GaugeChart` (Tier 1 hero satırı) — küçük kare gauge widget'lar; `ChartFrame`'in başlık+eyebrow header'ı bu boyuta orantısız düşer, mevcut `motion.div` kartları zaten kendi başlıksız tasarımıyla tutarlı.
   - `UnitHeatMap` — kendi legend'i, kendi expand/collapse hücre etkileşimi ve kendi başlığı olan büyük, kendine yeten bir component; `ChartFrame` sarmak çift başlık/çift chrome üretirdi.
   - `DusScoreGauge` (`DusScorePanel.tsx` içinde), `ExamTimelineChart` (`ExamHistoryTimeline.tsx` içinde), `WhatIfLineChart` (`WhatIfSimulator.tsx` içinde), `RecommendationPriorityChart` (`RecommendationFeed.tsx` içinde) — her biri kendi section component'inin içinde zaten kendi kart chrome'una sahip; `ChartFrame` ile çift sarmalamak yerine mevcut section-level tasarım korundu.
   - `KpiStatCard`, `AnimatedCounter`, `TrendIndicator` — chart değil, stat kartı/rozet; kapsam dışı.
   - **Yeni keşif (pre-existing, bu oturumun kapsamı değil):** `SlopeGraph` ve `TimeHistogram` component'leri kod tabanında tanımlı ve export edilmiş ama `StatisticsView.tsx`'te hiç render edilmiyor (`slopeData` hesaplanıyor ama `<SlopeGraph>` hiçbir yerde yok). `GoalProgressTimeline` ve `PercentileBar` de aynı şekilde yetim. Bu oturumun görevi değildi, dokunulmadı — Faz 5+'a not düşüldü (§2.2).

**Doğrulama:** `npm run build` her adımdan sonra temiz. Browser pane'de İstatistikler view'ı açıldı, boş-veri senaryosunda `ChartFrame`'in `isEmpty`/`flat` durumları görsel olarak doğrulandı ("Henüz yeterli veri yok" mesajları doğru render oluyor, çift-kart görsel çakışması yok). Konsol hatasız. Üç tema × viewport screenshot matrisi bu oturumda da **yapılmadı** (kapsam dışı bırakıldı — Faz 7'nin işi).

### 1.2 Faz 3 — Hız×Doğruluk kadranı + Deneme Geçmişi wiring (§Faz3.3)

Önceki rapor bu kalemi "tasarım kararı gerektiriyor" diye bekletmişti. Araştırma şunu ortaya çıkardı: **sorun sadece tasarım kararı değil, `buildExamResults` fonksiyonunda bir kök-neden hatasıydı** — `lessonBreakdown` her zaman sabit `'Genel'` anahtarına yazıyordu (kod içi yorum: *"Lesson bilgisi question'dan gelir"* — ama hiçbir yerde gelmiyordu). Bu yüzden `computeSpeedAccuracyTradeoff` gerçek ders kırılımı üretemezdi; naif wiring yapılsaydı her deneme tek bir "Genel" noktası üretir, chart anlamsız kalırdı.

1. **Kök neden düzeltmesi:** `buildExamResults(exams, getLesson?)` artık opsiyonel bir `questionId → lesson` lookup alıyor (geriye uyumlu — verilmezse eski `'Genel'` davranışı). `StatisticsView.tsx` bu lookup'ı `questions` prop'undan üretip geçiyor — artık `lessonBreakdown` gerçek ders adlarına göre dolduruluyor.
2. **`aggregateSpeedAccuracyByLesson`** (yeni, `examAnalytics.ts`): `SpeedAccuracyPoint[]`'i (deneme×ders noktaları) ders bazında ortalayıp `{lesson, avgTimeSpent, accuracy, sampleCount}` üretir — chart tüketimine uygun şekil.
3. **`SpeedAccuracyQuadrant.tsx`** (yeni chart component): x = ortalama soru başı süre, y = doğruluk. Sağ-alt kadran (yavaş + yanlış) kırmızı zeminle vurgulanır (plan'ın "yavaş-yanlış kadranı kırmızı vurgulu" isteği). `DersScatterPlot`'un mevcut tüketicisi (`overview.byLesson`, hacim×doğruluk) **değiştirilmedi** — bu, ayrı bir eksen anlamı olduğu için ayrı bir component olarak eklendi (plan §2.2'deki iki seçenekten "yeni component" seçildi, "mevcut'u genelleştir" değil — regresyon riski daha düşük).
4. **Uçtan uca veri akışı wiring edildi:** `StatisticsView` artık `useAuth()` ile `user`'ı okuyor, `useEffect` içinde `fetchExamHistory(user.id, 30)` çağırıyor, `buildExamResults` ile `ExamResult[]`'e çeviriyor, `computeExamTrend`/`computeSpeedAccuracyTradeoff` ile türetiyor. **Bu, tek başına önemli bir keşifti:** `fetchExamHistory`, `buildExamResults`, `computeExamTrend`, `ExamHistoryTimeline` component'i — hepsi tam çalışır durumda yazılmıştı ama **uçtan uca hiçbir yerde birbirine bağlı değildi** (RecommendationFeed'in önceki oturumdaki "yetim kod" keşfiyle aynı kalıp, bu sefer daha büyük bir alt sistem).
5. **Bonus (plan'ın kendi Tier-3 listesinde zaten vardı ama eksikti):** `ExamHistoryTimeline` artık `user` varsa Tier 3'te "Deneme Geçmişi" collapsible section'ı olarak render oluyor.
6. **Yorgunluk eğrisi (`computeQuestionOrderEffect`): hâlâ BİLEREK BLOKE.** Önceki raporun tespiti hâlâ geçerli — fonksiyon `70 - i*3` gibi sabit/uydurma değerler üretiyor, gerçek soru-sırası verisi yok. Bu oturum sadece hız×doğruluk'u düzeltti, yorgunluk eğrisi için gerçek veri kaynağı (exam_answers'ta soru pozisyonu) hâlâ eksik — wiring yapılmadı.

**Doğrulama:** `npm run build` + `npm run test` (201/201) temiz. Browser pane'de (kullanıcı girişi olmayan sandbox ortamında) "Hız × Doğruluk Kadranı" bölümü `isEmpty`/`error` state mantığını doğru sırayla kontrol ederek "Bu grafik için giriş yapmalısın." mesajını doğru gösterdi (`user` yokken beklenen davranış). Gerçek giriş yapmış bir kullanıcı ve tamamlanmış denemelerle görsel doğrulama **yapılamadı** (sandbox'ta Supabase auth/network kısıtlı) — Furkan kendi hesabıyla en az bir deneme tamamlayıp bu iki bölümü (Hız×Doğruluk kadranı, Deneme Geçmişi) canlı ortamda görsel kontrol etmeli.

### 1.3 Faz 4 — Ünite/Ders Sıralaması + Ana Menü (tamamı)

1. **`src/config/curriculum.ts`** (yeni, saf veri — React/Supabase içermez): `CURRICULUM_ORDER` (14 gerçek DB ders adı, temel bilimler → klinik: Histoloji, Fizyoloji, Biyokimya, Mikrobiyoloji, Patoloji, Farmakoloji → Protez, Restoratif, Endodonti, Ortodonti, Periodontoloji, Cerrahi, Pedodonti, Radyoloji), `DUS_LESSON_WEIGHTS` (eskiden `overview.ts`'in private `DUS_WEIGHTS`'ı — **birebir aynı değerlerle taşındı**, davranış değişmedi), `getCurriculumWeight`, `getCurriculumOrderIndex`, `compareByCurriculumOrder`.
   - **Worker-güvenlik notu (önemli):** `overview.ts` bir Web Worker kernel'i içinde çalışıyor ve "DOM/React/Supabase içermez" kuralına tabi. `curriculum.ts`'i import etmesi güvenli çünkü saf veri — build sonrası `worker-*.js` chunk boyutu (13.33kB) **değişmedi**, bu React/Phosphor sızıntısı olmadığının kanıtı.
   - İkon eşlemesi **kasıtlı olarak ayrı dosyada**: `src/config/curriculumIcons.tsx` (React/Phosphor içeriyor, sadece UI katmanı `App.tsx` bunu import ediyor, worker asla görmüyor).
2. **`overview.ts`** artık `DUS_LESSON_WEIGHTS`'ı `curriculum.ts`'ten import ediyor, local sabit silindi. `computeDusWeightedAccuracy`'nin davranışı **birebir korundu** (aynı obje, aynı fuzzy-match mantığı).
3. **`App.tsx`:**
   - `availableLessons` artık `compareByCurriculumOrder` ile sıralanıyor (eskiden `Set` insertion-order = fiilen rastgele).
   - 8 dersi kapsayan ad-hoc `isRad`/`isPat`/... ikon eşleme zinciri silindi, `getLessonIcon(lesson)` ile değiştirildi — artık **14 dersin tamamı** kendine özgü ikon alıyor (eskiden 6 ders `SquaresFour` fallback'ine düşüyordu: Cerrahi, Biyokimya, Restoratif, Pedodonti, Mikrobiyoloji, Farmakoloji).
   - Kullanılmayan 8 Phosphor icon import'u temizlendi (`noUnusedLocals: true` tsconfig kuralı gereği zorunluydu).
   - **Ders kartı redesign:** ilerleme bar'ına ek olarak artık **doğruluk yüzdesi** (`%XX doğruluk`, renk kodlu) ve **DUS ağırlık rozeti** (`DUS %X.X`) gösteriliyor. **Öncelik rozeti:** yeterli örneklemi olan (≥10 attempt) en düşük doğruluklu 3 ders `⚠ Öncelik` rozeti + amber kenarlık alıyor. Bu, `computeLessonPriority`'nin (İstatistikler'in "Akıllı Öneriler" motoru) TAM AYNISI değil — basitleştirilmiş, yerel bir hesap (bkz. §2.3, dürüstlük notu).
   - Kart grid'i plan'ın istediği yoğunluğa çekildi: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` → `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`.
4. **`UnitSelection`** (ünite listesi) sort toggle'ı plan'ın istediği "müfredat / ilerleme % / zayıflık" üçlüsüne çekildi:
   - `'name'` modu artık `localeCompare(..., {numeric:true})` — "2. Ünite" artık "10. Ünite"'den önce geliyor (eskiden string sırasına göre "10." "2."'den önce gelirdi).
   - `'count'` (soru sayısına göre sırala) **kaldırıldı**, yerine `'weak'` (doğruluk artan — en zayıf ünite en üstte) geldi; buton etiketi "SORU" → "ZAYIF". **Davranış değişikliği** — plan'ın açık isteğiydi, ama devralan bunu bilmeli: eski "soru sayısına göre sırala" özelliği artık yok.
5. **`StatisticsView.tsx`**'teki üçüncü, ayrı bir kopya olan `LESSON_ORDER` sabiti silindi, `getLessonColor` artık `curriculum.ts`'in `CURRICULUM_ORDER`/`getCurriculumOrderIndex`'ini kullanıyor — üçlü kod tekrarı (weight×2 + order + icon = 4 ayrı liste) ikiye indi (bkz. §2.3, tam konsolidasyon değil).

**Doğrulama:** `npm run build` + `npm run test` (201/201) temiz. Browser pane'de ana ekran açıldı: ders kartları doğru sırada (Histoloji → Fizyoloji → Patoloji → Protez, veri setinde bulunan derslerle), doğru ikonlarla, `DUS %4` rozetiyle render oldu (ekran görüntüsüyle doğrulandı). Boş veri senaryosunda "Öncelik" rozeti hiç görünmedi (beklenen — hiçbir derste ≥10 attempt yok). **Gerçek çözülmüş veriyle "Öncelik" rozetinin görünürlüğü ve ünite `weak` sıralaması canlı test edilmedi** (sandbox'ta veri yok) — Furkan bir miktar soru çözdükten sonra bu ikisini görsel kontrol etmeli.

---

## 2. Kararlar ve bilinen sınırlar (dürüstlük bölümü)

### 2.1 Chart hijyeni'nin "tamamlanmadı" kısmı

Plan'ın §Faz3.2'de istediği **legend-interactive-toggle** ve **her chart'ta klavye ile erişilebilir tooltip** genel bir `ChartFrame` sözleşmesi olarak eklenmedi — bunlar D3-internal event mantığı gerektirir, chart başına ayrı bir iş. `SpeedAccuracyQuadrant.tsx` (bu oturumda sıfırdan yazılan tek chart) bu paterni gösteriyor: `tabindex={0}`, `role="button"`, `aria-label`, `.on('mouseenter focus', ...)` / `.on('mouseleave blur', ...)`. **Öneri:** Faz 5/6'da, chart-başına bu paterni retrofit eden bir geçiş yapılabilir — 30 dosyanın her birinde `.on('mouseenter', ...)` çağrısını bulup `focus`/`blur` event'lerini eklemek + ilgili SVG elemanına `tabindex`/`role`/`aria-label` eklemek mekanik ama chart-başına test gerektiren bir iştir.

### 2.2 Pre-existing yetim chart'lar (bu oturumun kapsamı değildi, bulundu ve not düşüldü)

`SlopeGraph.tsx`, `TimeHistogram.tsx`, `GoalProgressTimeline.tsx`, `PercentileBar.tsx` — kod tabanında tanımlı, export edilmiş, ama `StatisticsView.tsx` veya herhangi bir section'da **render edilmiyor**. `slopeData` hesaplanıyor (useMemo, `improvingLessons` sayısı için kullanılıyor) ama `<SlopeGraph>` component'inin kendisi hiçbir yerde yok. Bunlar muhtemelen ya kaldırılmalı (ölü kod) ya da bir view'a bağlanmalı — karar Furkan'a ait, bu oturumda dokunulmadı.

### 2.3 "Öncelik" rozeti — basitleştirilmiş yerel hesap, gerçek motor değil

`App.tsx`'teki ana menü "Öncelik" rozeti, İstatistikler'in "Akıllı Öneriler" (`RecommendationFeed`) bölümünün kullandığı `computeLessonPriority` motorunu **çağırmıyor**. O motor `LessonConsistency[]` (ders-içi tutarlılık verisi) gerektiriyor ve bunu hesaplamak `computeLessonConsistency` + `unitAccuracyData` gibi StatisticsView'e özgü ağır bir ön-hesap zinciri gerektiriyor — ana menüde her render'da bunu tekrar hesaplamak orantısız bir maliyet/karmaşıklık olurdu. Bunun yerine `App.tsx` içinde zaten mevcut olan `_lessonStats`'tan doğrudan doğruluk hesaplayıp, `curriculum.ts`'in ağırlık kaynağını kullanan basit bir "en düşük doğruluklu 3 ders (yeterli örneklemle)" sıralaması yapıldı. **Bu iki "öncelik" farklı algoritmalar** — aynı isimle iki farklı yerde görünüyor olabilir küçük bir tutarsızlık riski taşır (ana menüde öncelikli görünen ders, İstatistikler'in önerisinde ilk sırada olmayabilir). Devralan LLM/Furkan bunu ya kabul edilebilir bir basitleştirme olarak bırakabilir ya da `computeLessonPriority`'yi ana menüye de taşıyacak bir performans/mimari kararı verebilir.

### 2.4 Ders ağırlığı — iki tablo hâlâ var, tek kaynağa indirilmedi (bilerek)

`curriculum.ts`, `overview.ts`'in eski `DUS_WEIGHTS`'ını taşıdı — ama `src/lib/dusScoring.ts`'teki **ayrı, bağımsız** `DUS_LESSON_WEIGHTS` (kendi içinde `getLessonWeight()`, `estimateDusNet`'in kullandığı) **dokunulmadı**. Bu iki tablo farklı değerler taşıyor (dusScoring.ts'inki neredeyse tüm derslere düz 0.0442 veriyor, curriculum.ts'inki Patoloji/Farmakoloji/Anatomi'ye 0.05, Mikrobiyoloji/Fizyoloji/Biyokimya/Histoloji'ye 0.04 gibi farklılaştırılmış değerler veriyor). Bunları birleştirmek `estimateDusNet`'in (DUS net tahmini) çıktısını değiştirir — kullanıcıya gösterilen bir sayı, riskli bir davranış değişikliği. **Bilerek dokunulmadı.** Faz 5+'ta, eğer iki tablonun neden farklı olduğu netleşirse (kasıtlı mı, tarihsel kalıntı mı) tek kaynağa indirilebilir.

---

## 3. Faz 5-7 için devam noktası

```
FAZ 1 ✅ ──► FAZ 2 ✅ ──► FAZ 3 ✅ ──► FAZ 5 (Quiz/Soru Çözme Cilası — buradan başla)
                              │
                              └──► FAZ 4 ✅
FAZ 6 — Faz 5'ten bağımsız erken alınabilir (App.tsx 2236 satır — hâlâ bölünmedi)
FAZ 7 — en son (Responsive + A11y kapanış denetimi)
```

**Devralan LLM'in ilk yapması gerekenler:**
1. `git status` çalıştır, pre-existing dirty state'i gözlemle, dokunma.
2. `npm run build` + `npm run test` ile bu rapordaki temiz durumu doğrula.
3. **Faz 5'e başlamadan önce:** Bu rapordaki §1.2 ve §1.3'ün "canlı test edilmedi" notlarını (Hız×Doğruluk kadranı, Deneme Geçmişi, Öncelik rozeti, ünite `weak` sıralaması) gerçek kullanıcı verisiyle görsel doğrula — sandbox'ta veri yoktu, bu dört şey sadece kod/empty-state seviyesinde doğrulandı.
4. Faz 5 (`src/components/quiz/*`, `src/lib/motion.ts`) — plan'ın kendi maddeleri: QuestionCard 44px dokunma alanı + press feedback, yön-tutarlı slide geçişleri, QuizHeader timer son-60sn uyarısı, klavye kısayolları (`?` yardım overlay'i), confetti `prefers-reduced-motion` guard'ı.
5. Faz 6'ya erken girmek istenirse: `App.tsx` hâlâ ~2200+ satır — `select-lesson`/`select-unit`/dialog'lar ayrı dosyalara çıkarılabilir, bu Faz 5'ten bağımsızdır ve bu oturumdaki `LessonSelection`/`UnitSelection` değişiklikleri bu bölünmeyi kolaylaştırmalı (fonksiyonlar zaten iyi izole).
6. §2.1'deki chart-başına legend/klavye-tooltip retrofiti eğer önceliklendirilirse: `SpeedAccuracyQuadrant.tsx`'teki `tabindex`/`role`/`focus event` paternini şablon olarak kullan.
7. §2.2'deki yetim `SlopeGraph`/`TimeHistogram`/`GoalProgressTimeline`/`PercentileBar` için bir karar ver: bağla ya da sil.
8. §2.4'teki iki ayrı DUS ağırlık tablosu (`curriculum.ts` vs `dusScoring.ts`) — birleştirme kararı Furkan'a ait, `estimateDusNet` çıktısını etkiler.

**Devralan LLM'in bilmesi gereken teknik gerçek (tekrar):** Next.js DEĞİL — Vite 8 + React 19 SPA, routing `App.tsx` state-machine + `viewRegistry.ts`.

---

## 4. Ortam notu (bu oturuma özgü, kod hatası değil)

Sandbox/Browser pane ortamında Supabase auth/network erişimi kısıtlı — bu yüzden `useAuth()`'un `user` değeri hep `null` kaldı ve Hız×Doğruluk kadranı/Deneme Geçmişi/Öncelik rozeti gerçek veriyle test edilemedi (hepsi kod seviyesinde ve boş-durum/hata-durumu seviyesinde doğrulandı, davranış doğru). Furkan kendi makinesinde, giriş yapmış ve en az bir deneme tamamlamış halde bu üçünü görsel olarak kontrol etmeli.

---

## 5. Değiştirilen/eklenen dosyalar (bu oturum)

```
YENİ:
  src/config/curriculum.ts               (Faz 4 — müfredat sırası + DUS ağırlığı, worker-güvenli saf veri)
  src/config/curriculumIcons.tsx         (Faz 4 — ders ikon eşlemesi, React-only, curriculum.ts'ten ayrı)
  src/components/charts/SpeedAccuracyQuadrant.tsx  (Faz 3 — hız×doğruluk kadranı)

DEĞİŞTİRİLDİ:
  src/components/charts/ChartFrame.tsx    (Faz 3 — loading/error/empty/summary/flat prop'ları)
  src/components/charts/index.ts          (SpeedAccuracyQuadrant export'u)
  src/components/StatisticsView.tsx       (Faz 3 — 15 chart ChartFrame'e sarıldı, exam history wiring,
                                            hız×doğruluk kadranı, ExamHistoryTimeline bağlandı;
                                            Faz 4 — LESSON_ORDER silindi, curriculum.ts'e yönlendirildi)
  src/lib/examAnalytics.ts                (Faz 3 — buildExamResults kök-neden düzeltmesi (lesson lookup),
                                            aggregateSpeedAccuracyByLesson eklendi)
  src/lib/overview.ts                     (Faz 4 — DUS_WEIGHTS artık curriculum.ts'ten import, davranış aynı)
  src/App.tsx                             (Faz 4 — ders/ünite sıralaması, ikon eşleme, kart redesign,
                                            sort toggle "zayıflık" modu, kullanılmayan icon import temizliği)

Hiçbir dosya commit edilmedi — tüm working tree hâlâ uncommitted. Commit/deploy kararı Furkan'a ait.
```
