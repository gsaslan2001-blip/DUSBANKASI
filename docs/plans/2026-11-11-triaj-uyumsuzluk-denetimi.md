# TRİAJ uyumsuzluk denetimi

**Tarih:** 2026-11-11
**Kapsam:** `src/modules/triaj/**`, `api/triaj/**`, `api/_lib/triaj/**`, `supabase/migrations/*triaj*.sql`, `supabase/deploy_triaj.sql`, `scripts/import_triaj_workbook.py`, `e2e/triaj*.spec.ts`
**Yöntem:** Altı keşif yüzeyi paralel statik okuma + bağımsız çalıştırılabilir probe'lar (`tsx` ile domain fonksiyonlarının gerçek çıktısı). Hiçbir production dosyası değiştirilmedi, hiçbir canlı uca istek atılmadı.
**Sonuç:** 5 KRİTİK, 13 YÜKSEK, 40 ORTA, 9 DÜŞÜK — toplam 67 bulgu.

---

## Yönetici özeti — ilk düzeltilecek üç şey

1. **`topic.subjectId` ders adı taşıyor, 15 kod noktası ders kodu arıyor.** Kova Raporu'nun tüm ders özetleri sıfır, temel/klinik ünite sayacı ters, "Biten Derslerin Branş Bakımı" listesi hiç görünmüyor, deneme→otomatik ilk tekrar yolu sessizce düşüyor. Tek satırlık bir isim/kod sözleşmesi hatası, dört ekranı birden bozuyor.
2. **B11–B16 branş kodları iki dosyada farklı derslere bağlı.** `B11` planlayıcıda Pedodonti, deneme analizinde Periodontoloji. Aynı `subjectId` alanı iki farklı ad uzayı taşıyor (fixture'da ders adı, bildirimde ders kodu).
3. **`deploy_triaj.sql` uygulamanın kullanıcıya "bunu çalıştır" dediği betik, v2 sürüm muhafızını siliyor.** `create or replace` ile v1 trigger gövdesini geri yazıyor.

---

## Yüzey 1 — Domain mantığı

Taranan: `domain/state.ts` (255), `triage.ts` (509), `questionTasks.ts` (67), `focus.ts` (161), `analytics.ts` (395), `catalog.ts` (14), `defaults.ts`, `simulation.ts` (54), `deepseek.ts` (186) + test dosyaları.

### D1. `planUnit` v4.76'daki esnekliği kaybetmiş — belgelenmiş davranış koddan farklı · YÜKSEK
- Kanıt A: `gemini.md:7` — "`planUnit` fonksiyonunda açık T0 görevi bulunan ünitelerin hata fırlatmak yerine tarihi güvenle güncellemesi (`rescheduleTask`) sağlandı."
- Kanıt B: `src/modules/triaj/domain/state.ts:45-47` — `if (openT0Task) { throw new Error('Bu ünitenin açık ilk tekrarı var…'); }`
- Kanıt C — çalıştırma: aynı üniteye yeni tarih vermek `HATA: Bu ünitenin açık ilk tekrarı var.` fırlatıyor.
- Çelişki: v4.76 changelog'u esnekliği "sağlandı" diye kapatmış; kod artık hata fırlatıyor.
- Doğru taraf: `rescheduleTask` delegasyonu (v4.76 niyeti). Tarih düzenleme zaten `SubjectDatabaseView:674` üzerinden `reschedule` ile yapılabiliyor, yani uçtan uca akış kırılmıyor — ama domain sözleşmesi ile belge çelişiyor.
- Öneri: Belgeyi düzelt veya `planUnit` içinde `openT0Task` durumunda `rescheduleTask` delegasyonunu geri getir. Hangisi seçilirse seçilsin ikisi aynı olmalı.

### D2. `planUnit` artık `t0Date` yazmıyor → konu matrisinde "sıradaki hedef" boş, gecikme 0 · YÜKSEK
- Kanıt A: `src/modules/triaj/domain/state.ts:52-55` — topic nesnesinde `t0Date: date` satırı yok (git diff: `-    t0Date: date,` satırı silinmiş).
- Kanıt B: `src/modules/triaj/domain/analytics.ts:334-338` — `getTopicNextTargetDate` yalnız `t3DueDate/t14DueDate/saturdayRepairDate` üzerinden tarih döndürüyor; planlanmış ama başlanmamış ünitede bu üçü de `undefined`.
- Kanıt C — çalıştırma: `planUnit` sonrası `topic.t0Date = (tanımsız)`, `getTopicNextTargetDate = (tanımsız)`, `calculateTopicDelayDays(..., '2026-11-05') = 0` — oysa görevin vadesi `2026-11-01` ile 4 gün geçmiş.
- Çelişki: Ünite takvime eklenmiş ve vadesi geçmiş olmasına rağmen matris "Önerilen: —", "Gecikme: 0G" gösteriyor.
- Doğru taraf: görevin `dueDate`'i. İlk tekrar için tek tarih kaynağı `task.dueDate` olmalı ya da `t0Date` yazılmaya devam etmeli.
- Öneri: `planUnit`'e `t0Date: date` geri ekle **veya** `getTopicNextTargetDate`'e açık `T0_SAMPLING` görevinin `dueDate`'ini geçir. İki tarih kaynağı tutulacaksa ikisi aynı anda yazılmalı.

### D3. `currentTaskDate` ileri Cumartesi'yi döndürürken kalıcı `task.dueDate` geçmişte kalıyor · YÜKSEK
- Kanıt A: `src/modules/triaj/domain/state.ts:231-234` — `task.stage === 'SATURDAY_REPAIR' && task.status === 'open' && task.dueDate < today ? getNextSaturday(today) : task.dueDate`
- Kanıt B: `src/modules/triaj/components/TriajViewContext.tsx:97,100` — `dueDate: currentTaskDate(task, todayStr)` … `createdAt: task.dueDate` (aynı nesnede iki farklı tarih).
- Kanıt C: `src/modules/triaj/domain/state.ts:205-207` — `rescheduleTask` yalnız Cumartesi'ye taşımaya izin veriyor, vadesi geçen onarım kendiliğinden ilerlemiyor.
- Çelişki: Kalıcı state'te vade haftalar boyunca eski tarihte kalırken takvim/kuyruk yeni tarihi gösteriyor; iki farklı gerçek.
- Doğru taraf: roll-forward kuralı (`currentTaskDate`) kanonik; eksik olan bu kararın kalıcılaştırılması.
- Öneri: Vadesi geçen onarımı `dueDate = getNextSaturday(today)` + `previousDueDates`'e ekleyerek kalıcılaştır.

### D4. `recordTaskResult` ilk tekrarda `block2Done`'ı işaretliyor, süre eklemiyor — günlük hedefte asimetri · ORTA
- Kanıt A: `src/modules/triaj/domain/state.ts:170-172` — `completedQuestions: +total`, `block2Done: … || task.stage === 'T0_SAMPLING'` var; `completedStudyMinutes` güncellemesi yok (git diff ile `- completedStudyMinutes: currentGoal.completedStudyMinutes + Math.max(15, Math.round(total * 1.5))` silinmiş).
- Kanıt B: `src/modules/triaj/domain/firstReview.test.ts:15` — `expect(result.dailyGoals[input.date].completedStudyMinutes).toBe(0)` (silinme testle kilitlenmiş, doğru: uydurma süre yazılmamalı).
- Çelişki: Süre uydurulmaması doğru, fakat `block2Done` (Blok 2 = "Yeni Konu Edinimi & İlk Tekrar") bir soru sonucuyla `true` oluyor; kullanıcı konuyu hiç çalışmadan sadece elle sonuç girerse blok "tamamlandı" görünüyor.
- Doğru taraf: `completedQuestions` + gerçek süre (TickTick/elle). Blok işareti kullanıcı kontrolünde kalmalı.
- Öneri: `block2Done` atamasını kaldır; blok işaretini yalnız `toggleBlockDone` yapsın.

### D4. `T14_VERIFICATION` kota zinciri üç yerde ayrı okunuyor · ORTA
- Kanıt A: `src/modules/triaj/domain/state.ts:18` — `case 'T14_VERIFICATION': return state.parameters.verificationQuestions ?? 20;`
- Kanıt B: `src/modules/triaj/domain/state.ts:97-98` — elle girişte `total >= 20 && total <= 25` (parametreyi yok sayıyor).
- Kanıt C: `src/modules/triaj/persistence/recordSchemas.ts:103` — `verificationQuestions: z.number().int().min(20).max(25).optional()`.
- Çelişki: `parameters.verificationQuestions = 25` iken görevin `questionCount`'u 25; elle giriş 20 de kabul ediyor. Banka yolu `total === questionCount` istediği için aynı görevde iki farklı geçerlilik kuralı işliyor.
- Doğru taraf: `recordTaskResult`'ın görev kotası dalı (`total === task.questionCount`), aralık yalnız kullanıcı elle girdiğinde ve görev kotası yoksa.
- Öneri: Elle giriş dalını `total === task.questionCount || (total >= 20 && total <= 25)` yerine tek kurala indir; aralığı yalnız `questionCount` üretiminde kullan.

### D5. Kova eşikleri tek kaynak değil — 34/28/40/30/20-25 altı ayrı yerde sabit · ORTA
- Kanıt A: `src/modules/triaj/domain/state.ts:16-21` — `20 / 40 / verificationQuestions / 30 / 15 / 40`.
- Kanıt B: `src/modules/triaj/domain/triage.ts:45,58` — `correct * 100 >= total * 85` / `>= total * 70` (yüzde olarak, `validateScore` ile 40'a kilitli).
- Kanıt C: `src/modules/triaj/data/subjectProtocols.ts` — `≥%85 (34+ doğru)` metni; `src/modules/triaj/components/DailyPlannerView.tsx:1015-1017` — `Yeşil (≥34)`, `Sarı (28-33)`, `Kırmızı (≤27)`.
- Çelişki: Yüzde eşiği (`≥85%`) ile mutlak eşik (`≥34`) yalnız `total === 40` iken denk. `validateScore` 40'a kilitlenince bugün tutuyor, ama eşik iki farklı ifadeyle dört dosyada yaşıyor.
- Doğru taraf: `evaluateT3Triage` içindeki yüzde hesabı (kanonik karar).
- Öneri: `T3_THRESHOLDS = { green: 85, yellow: 70, total: 40 }` sabitini tanımla; metinler bu sabitten üretilsin.

### D6. `generateNotifications` ölü kod ve eski kuralı taşıyor · ORTA
- Kanıt A: `src/modules/triaj/domain/triage.ts:311` — `message: 'Ünitenin kalan 40 sorusunu (1. Soru Bankası) …'`
- Kanıt B: `src/modules/triaj/components/TriajViewContext.tsx:96` — canlı bildirim `message: \`${task.questionCount} soru\``
- Kanıt C: `generateNotifications` yalnız `triage.test.ts` içinden çağrılıyor; hiçbir bileşen kullanmıyor.
- Çelişki: Ölü fonksiyon "kalan 40" (eski 50→10+40 varsayımı) ifadesini ve T+3 için `P3_MEDIUM` önceliğini taşıyor; canlı türetim gecikmiş T+3'ü `P1_CRITICAL` yapıyor. İki farklı öncelik mantığı aynı modülde.
- Doğru taraf: `TriajViewContext.tsx:89-101`.
- Öneri: `generateNotifications`'ı sil; metni canlı türetimden üret.

### D7. `BRANCH_EXAM` aşaması tanımlı ama onu üreten hiçbir yol yok · DÜŞÜK
- Kanıt A: `src/modules/triaj/domain/state.ts:21` — `case 'BRANCH_EXAM': return 40;`
- Kanıt B: `src/modules/triaj/components/TriajViewContext.tsx:38` — `BRANCH_EXAM: 'Branş denemesi'`
- Kanıt C: `src/modules/triaj/domain/state.ts:198` — tek `addTask` üretimi `nextStage`'ten geliyor; `nextStage` yalnız T3/T14/SATURDAY/ERROR değerlerini alıyor.
- Çelişki: Kota, etiket ve `block4Done` eşlemesi var; takvim/Bugünün Konusu/rapor bu aşamayı asla göstermiyor.
- Öneri: Aşamayı tipten ve etiket tablolarından kaldır, veya üreticisini ekle.

### D8. `CANONICAL_16_BRANCHES` iki dosyada birebir kopya; tüketiciler farklı kopyayı kullanıyor · ORTA
- Kanıt A: `src/modules/triaj/data/branchSpecs.ts:3` — `export const CANONICAL_16_BRANCHES: CanonicalBranchSpec[] = [`
- Kanıt B: `src/modules/triaj/domain/analytics.ts:23` — aynı adla ikinci tanım (bugün içerik birebir aynı).
- Kanıt C: `src/modules/triaj/domain/simulation.ts:4` domain kopyasını import ediyor; `src/modules/triaj/components/TriajViewContext.tsx:6` ve `src/modules/triaj/integrations/anki.ts:2` data kopyasını import ediyor.
- Çelişki: Branş kotası değişirse deneme aktarımı (`simulation.ts:34` `missing` hesabı) ile Anki/ders özeti farklı gerçeğe göre hesaplanır.
- Doğru taraf: `data/branchSpecs.ts` (veri katmanı); `analytics.ts` onu re-export etmeli.
- Öneri: `analytics.ts:23-38` kopyasını sil, `export { CANONICAL_16_BRANCHES } from '../data/branchSpecs';`.

### D9. İki SWSPS implementasyonu var; üretim yalnız birini kullanıyor ve ikincisi farklı hata davranışı taşıyor · ORTA
- Kanıt A: `src/modules/triaj/domain/analytics.ts:49` — `export function calculateWorkbookSWSPS(...)` (geçersiz girdide `RangeError`).
- Kanıt B: `src/modules/triaj/domain/analytics.ts:83` — `export function calculateSWSPS(...)` (sessizce clamp'liyor, `DEFAULT_ERROR_WEIGHTS`'e düşüyor).
- Kanıt C: üretimde yalnız workbook sürümü çağrılıyor (`TriajViewContext.tsx:203`, `ExamAndErrorAnalyticsView.tsx:164`); `calculateSWSPS` yalnız `analytics.test.ts:22,30` içinde.
- Kanıt D: ağırlıklar ikinci bir kaynaktan da geliyor — `defaults.ts:15` `parameters.errorWeights` vs `analytics.ts:42-47` `DEFAULT_ERROR_WEIGHTS`.
- Çelişki: Aynı formülün iki uygulaması ve iki katsayı kaynağı; testler üretimde olmayan sürümü ölçüyor.
- Öneri: `calculateSWSPS` + `DEFAULT_ERROR_WEIGHTS` silinsin; testler workbook sürümüne taşınsın.

### D10. `planUnit` spread sırası yeni hesaplanan `unitNumber`'ı ve durum alanlarını eziyor · ORTA
- Kanıt A: `src/modules/triaj/domain/state.ts:42` — `const unitNumber = canonicalUnitNumber(lesson, unit);`
- Kanıt B: `src/modules/triaj/domain/state.ts:52-53` — `status: 'NOT_STARTED', … currentBucket: 'NONE', priority: 'P3_MEDIUM', discharged: false, createdAt: date, ...existing,`
- Kanıt C: guard `state.ts:48` yalnız `status !== 'NOT_STARTED'` kontrol ediyor; `recordSchemas.ts:19-27` `status` ile `discharged/currentBucket` arasında çapraz doğrulama yapmıyor.
- Çelişki: `...existing` sonda olduğu için hesaplanan `unitNumber` atılıyor (katalog yeniden numaralandığında eski indeks korunur) ve `discharged: true` gibi durum alanları sıfırlanmıyor.
- Öneri: Sırayı ters çevir — `{ ...existing, status:'NOT_STARTED', currentBucket:'NONE', priority:'P3_MEDIUM', discharged:false, unitNumber, createdAt: existing?.createdAt ?? date }`.

### D11. Sağlayıcı ile elle giriş aynı tarih kuralını farklı kapsamda uyguluyor · ORTA
- Kanıt A: `src/modules/triaj/domain/state.ts:102-105` — banka yolu `currentTaskDate(task, date) > date` ise reddediyor.
- Kanıt B: `src/modules/triaj/components/TriageModal.tsx:169` — elle girişte yalnız `max={todayStr}` var, alt sınır yok.
- Çelişki: Elle girilen T+3/T+14 sonucu planlanan günden önceye yazılabiliyor; bir sonraki aşama o erken tarihten hesaplanıyor (`state.ts:121,130`).
- Öneri: Elle girişte de `currentTaskDate(task, date) > date` kontrolü uygula veya `min={currentTaskDate(task, todayStr)}` ekle.

### D12. `blankDailyGoal` ile `recordTaskResult` varsayılan hedefleri farklı (0 vs 300/80) · ORTA
- Kanıt A: `src/modules/triaj/components/TriajViewContext.tsx:44` — `targetStudyMinutes: 0, targetQuestions: 0`
- Kanıt B: `src/modules/triaj/domain/state.ts:158,160` — `targetStudyMinutes: 300, targetQuestions: 80`
- Çelişki: Elle sonuç girilen bir günde günlük hedef 300 dk / 80 soru varsayılanıyla yaratılır; aynı gün UI'da hiç hedef girilmemişse 0 gösterilir. Kullanıcı hangi hedefi gördüğüne göre "%43" veya "%0" görür.
- Öneri: Tek `blankDailyGoal` üreticisi; hedef varsayılanları `parameters`'tan gelsin.

---

## Yüzey 2 — Görünüm katmanı

Taranan: `components/DailyPlannerView.tsx` (1251), `SubjectDatabaseView.tsx` (957), `NotificationCalendarView.tsx` (340), `TriageModal.tsx` (208), `KovaTriageReportView.tsx` (414), `ExamAndErrorAnalyticsView.tsx` (1867), `SystemModals.tsx` (139), `TriajHeader.tsx` (87), `TriajViewContext.tsx` (343), `BackupDialog.tsx` (209), `DeepSeekModal.tsx` (427), `TriajModule.tsx` (175), `TodayTopics.tsx` (86), `triaj.css` (82), `src/App.tsx` (TRİAJ köprüsü).

### V1. `TriageModal` yeni ilk tekrar başlığında "10 soru" yazıyor · KRİTİK
- Kanıt A: `src/modules/triaj/components/TriageModal.tsx:23` — `const expected = task?.questionCount ?? 10;`
- Kanıt B: `src/modules/triaj/components/TriageModal.tsx:120` — `{stageLabels[stage]} · {expected} soru`
- Kanıt C: `src/modules/triaj/components/TriageModal.tsx:26` — `useState(String(task?.questionCount ?? 20))` ve `:146` — "İlk tekrar: … en az 20 soru tek oturumdur."
- Çelişki: Aynı modal üç farklı kota söylüyor: başlık 10, giriş alanı 20, gövde "en az 20". `state.ts:16` kanonik değeri 20; `recordTaskResult` 19'u reddediyor (`firstReview.test.ts:17`). Kullanıcı başlıktaki 10'a uyup elle 10 girerse kayıt reddedilir.
- Doğru taraf: `20` (state.ts:16 + firstReview.test.ts:20-21).
- Öneri: `expected` varsayılanını `20` yap; T0 başlığında `flexible ? 'en az 20' : expected` göster.

### V2. Ders tablosunda canlı olarak "T+0 Konu + 10 Soru Bekleniyor" · KRİTİK
- Kanıt A: `src/modules/triaj/components/SubjectDatabaseView.tsx:658` — `: 'T+0 Konu + 10 Soru Bekleniyor';`
- Kanıt B: `src/modules/triaj/domain/state.ts:16` — `case 'T0_SAMPLING': return 20;`
- Kanıt C: `src/modules/triaj/components/DailyPlannerView.tsx:753` — `En az 20 Soru / Ünite`
- Çelişki: Aynı ünitenin ilk tekrar kotası planlayıcıda "en az 20", ders tablosunda "10".
- Doğru taraf: `state.ts:16`.
- Öneri: Metni "T+0 Konu + en az 20 Soru Bekleniyor" yap.

### V3. Koyu temada modal perdeleri aydınlanıyor · YÜKSEK
- Kanıt A: `src/modules/triaj/triaj.css:15` — `--color-slate-900: #e9edf6;` (tema slate ölçeğini ters çeviriyor)
- Kanıt B: `src/modules/triaj/components/DailyPlannerView.tsx:1153` — `bg-slate-900/60 backdrop-blur-xs`; aynı desen `SubjectDatabaseView.tsx:856`, `DeepSeekModal.tsx:145`, `ExamAndErrorAnalyticsView.tsx:831`.
- Kanıt C: `src/modules/triaj/components/TriageModal.tsx:115` — `bg-black/65` (doğru perde)
- Çelişki: `triaj.css:29` düzeltmesi yalnız opak `.bg-slate-900` sınıfını yakalıyor, `/60` varyantını değil. Sonuç: koyu temada modal perdesi açık gri bir tabakaya dönüşüyor; aynı işlevdeki iki modal iki farklı perde rengi kullanıyor.
- Doğru taraf: `TriageModal.tsx:115`.
- Öneri: Tüm modallerde `bg-black/60`, veya `triaj.css`'e `[class*="bg-slate-900/"] { background-color: rgb(0 0 0 / .6) }`.

### V4. Koyu temada koyu kart üstündeki ikincil metin okunmuyor · YÜKSEK
- Kanıt A: `src/modules/triaj/triaj.css:9` — `--color-slate-300: #454a5e;`
- Kanıt B: `src/modules/triaj/components/DailyPlannerView.tsx:267,272` — üst öğe `bg-slate-900` (#272a3a), alt metin `text-slate-300` (#454a5e).
- Kanıt C: `src/modules/triaj/components/KovaTriageReportView.tsx:126,139` — aynı kombinasyon.
- Çelişki: `text-slate-300` koyu kart üzerinde açık metin amacıyla yazılmış; tema onu koyuya çeviriyor. Kontrast ~1.6:1 (WCAG normal metin için 4.5:1 ister).
- Doğru taraf: koyu kart üstünde sabit açık metin (ör. `text-emerald-400` gibi palet dışı tonlar, `DailyPlannerView.tsx:269`).
- Öneri: `bg-slate-900` içindeki ikincil metinleri `text-white/70` gibi sabit değerlere taşı.

### V5. Aynı "seçili" durumu üç farklı renkle gösteriliyor · ORTA
- Kanıt A: `src/modules/triaj/components/SubjectDatabaseView.tsx:194` — `'bg-slate-900 text-white shadow-2xs'`
- Kanıt B: `src/modules/triaj/components/SubjectDatabaseView.tsx:749` — `'bg-indigo-600 text-white'`
- Kanıt C: `src/modules/triaj/components/TriajHeader.tsx:79` / `NotificationCalendarView.tsx:135` — `'bg-indigo-600 text-white'`
- Öneri: Tek token (`bg-indigo-600 text-white`).

### V6. Düşük depolama gücü nötr gri, aynı "kötü" durum başka ekranda kırmızı · ORTA
- Kanıt A: `src/modules/triaj/components/KovaTriageReportView.tsx:362` — `: 'bg-slate-300'`
- Kanıt B: `src/modules/triaj/components/KovaTriageReportView.tsx:211` — `<%70 Başarı (≤27 Doğru)` (kırmızı olarak tanımlı)
- Kanıt C: `src/modules/triaj/components/SubjectDatabaseView.tsx:430` — `text-rose-700 bg-rose-50 …`
- Çelişki: Koyu temada `bg-slate-300` (#454a5e) `bg-slate-100` (#12141d) üzerinde neredeyse görünmez.
- Öneri: `>= 50` altındaki dalı `bg-rose-500` yap.

### V7. Takvim hücresi ile gün detayı farklı görev kümesi sayıyor · ORTA
- Kanıt A: `src/modules/triaj/components/NotificationCalendarView.tsx:155` — `filter(task => task.status === 'open').length`
- Kanıt B: `src/modules/triaj/components/NotificationCalendarView.tsx:49,184` — `tasksByDate.get(selectedDate)` (tüm durumlar) / `{selectedTasks.length}` başlıkta
- Kanıt C: `src/modules/triaj/components/NotificationCalendarView.tsx:177` — `{open > 2 && <span className="hidden text-[10px] sm:block">+{open - 2}</span>}`
- Çelişki: Hücrede "0 açık görev" görünen gün, detayda tamamlanmış görevler listeliyor ve başlık farklı bir sayı veriyor. `+N` göstergesi `hidden … sm:block` ile mobilde tamamen kayboluyor — 3. ve sonraki görevler iz bırakmadan gizleniyor.
- Öneri: Hücre sayacı ile detay aynı kümeyi kullansın; `+N` breakpoint'ten bağımsız görünsün.

### V8. Derste "Ek Ünite Ekle" yolunda ünite başlığı temizlenmiyor · ORTA
- Kanıt A: `src/modules/triaj/components/SubjectDatabaseView.tsx:485` — `setNewTopicSubjectId(sub.id);` (yanında `setNewTopicTitle('')` yok)
- Kanıt B: `src/modules/triaj/components/SubjectDatabaseView.tsx:868` — `setNewTopicSubjectId(e.target.value); setNewTopicTitle('');` (diğer yol temizliyor)
- Kanıt C: `src/modules/triaj/domain/state.ts:42` — `canonicalUnitNumber(lesson, unit)` katalog dışı eşleşmede `'Kanonik ders ve ünite seçin.'` fırlatıyor.
- Çelişki: Modal başka dersten yeniden açılınca önceki dersin başlığı state'te kalıyor; select'te eşleşen seçenek olmadığı için boş görünüyor, gönderim hata fırlatıyor ve hata yalnız toast'a düşüyor.
- Öneri: `485`'e `setNewTopicTitle('')` ekle.

### V9. Üç form alanı etiketsiz, aynı modülde diğerleri etiketli · ORTA
- Kanıt A: `src/modules/triaj/components/ExamAndErrorAnalyticsView.tsx:1079` — `<label … >Kaynak</label>` kardeş; input'ta `aria-label`/`htmlFor` yok.
- Kanıt B: `src/modules/triaj/components/NotificationCalendarView.tsx:267` — yalnız `placeholder`, etiket yok.
- Kanıt C: `src/modules/triaj/components/DailyPlannerView.tsx:1219` — `<label>Çalışma Notu</label>` ile textarea ilişkilendirilmemiş.
- Kanıt D: doğru desen `TriageModal.tsx:167` (label input'u sarıyor).
- Öneri: `TriageModal` desenini üç alana uygula.

### V10. Ders kartındaki aç/kapa kontrolü klavyeyle çalışmıyor · ORTA
- Kanıt A: `src/modules/triaj/components/SubjectDatabaseView.tsx:366` — `<div onClick={…}>`, `role`/`tabIndex`/`onKeyDown` yok.
- Kanıt B: `src/modules/triaj/components/SubjectDatabaseView.tsx:443` — gerçek `<button>` + `aria-label` var, ama gövdesinde `onClick` yok; tıklama yalnız üst div'e köpürüyor.
- Kanıt C: doğru desen `DailyPlannerView.tsx:922`.
- Çelişki: Ekranda buton gibi görünen ve etiket taşıyan kontrol Enter'da hiçbir şey yapmıyor; `aria-expanded` yok.
- Öneri: Başlığı butona çevir veya chevron butonuna `onClick` + `aria-expanded` ver.

### V11. `DeepSeekModal` her açılışta sabit B14 (Endodonti) ile başlıyor · DÜŞÜK
- Kanıt A: `src/modules/triaj/components/DeepSeekModal.tsx:38` — `initialSubjectId = 'B14',`
- Kanıt B: `src/modules/triaj/TriajModule.tsx:153` — `<DeepSeekModal onClose={…} />` (bağlam geçilmiyor)
- Çelişki: Bileşen "aktif ders bağlamında aç" sözleşmesi taşıyor; iki çağrı yolu da bağlam geçmiyor.
- Öneri: `TriajModule`'dan aktif ders/ünite geçir, yoksa prop'ları kaldır.

### V12. "Biten Derslerin Branş Bakımı" satırı domainde karşılığı olmayan "30–40 soru" aralığı gösteriyor · ORTA
- Kanıt A: `src/modules/triaj/components/DailyPlannerView.tsx:853` — `{item.days} günlük aralık · 30–40 soru`
- Kanıt B: `src/modules/triaj/domain/state.ts:19,17` — `SATURDAY_REPAIR: 30`, `T3_MAIN: 40`
- Kanıt C: `src/modules/triaj/components/DailyPlannerView.tsx:1056` — `Biten derslerden 30-40 soruluk karma test.`
- Çelişki: Bakım testi bir TRİAJ aşaması değil; 30 (kırmızı onarım) ile 40 (T+3) aralığı uydurma bir bant.
- Öneri: Kotayı yazma veya parametreden türet.

### V13. `KovaTriageReportView` T+14'ü sabit "20 soru" yazıyor, aynı dosya ve ayar ekranı 20–25 diyor · ORTA
- Kanıt A: `src/modules/triaj/components/KovaTriageReportView.tsx:395` — `Sarı Kova 14 gün sonraya (T+14) 20 soruyla randevulanır.`
- Kanıt B: `src/modules/triaj/components/KovaTriageReportView.tsx:193` — 20–25
- Kanıt C: `src/modules/triaj/components/SystemModals.tsx:86` — `label="T+14 soru kotası" … min={20} max={25}`
- Öneri: Metni "20–25 soru" yap veya `parameters.verificationQuestions` kullan.

### V14. Kova raporundaki acil eylem metinleri canlı görev kotasını yok sayıyor · ORTA
- Kanıt A: `src/modules/triaj/domain/triage.ts:473` — `instruction: '… 2. Soru Bankasından 20-25 soru çöz …'`
- Kanıt B: `src/modules/triaj/domain/triage.ts:489` — `instruction: '… 40 soruluk esas testi çöz …'`
- Kanıt C: `src/modules/triaj/components/NotificationCalendarView.tsx:86` — takvim aynı görev için `{task.questionCount} soru` gösteriyor.
- Çelişki: Kullanıcı T+14 kotasını 25 seçerse takvim "25 soru", kova raporu "20-25" diyor.
- Öneri: `urgentTasks` üretimine görevin `questionCount`'unu enjekte et.

### V15. `DailyPlannerView` metni bozuk — "İlk Tekraru" ve cümle ortasından kopmuş satır · ORTA
- Kanıt A: `src/modules/triaj/components/DailyPlannerView.tsx:954` — `Yeni Konu Edinimi &amp; İlk Tekraru` ("İlk Tekrar" olmalı)
- Kanıt B: `src/modules/triaj/components/DailyPlannerView.tsx:958-959` — `…<strong>Boş Kağıt (Blurting)</strong> + 1. Bankadan` / `En az 20 soru çöz ve…` — "1. Bankadan" yarım kalıyor, cümle bitmiyor.
- Kanıt C: git diff — aynı yamada "5'in katları olan 10 soru" → "En az 20 soru" değişimi yapılmış, araya yeni cümle eklenirken "1. Bankadan" ifadesi sahipsiz kalmış.
- Öneri: `İlk Tekrar` yaz; "1. Bankadan" ifadesini tamamla veya sil.

### V16. `SubjectDatabaseView` başlığında sabit "14 / 15" yanında dinamik sayımlar · DÜŞÜK
- Kanıt A: `src/modules/triaj/components/SubjectDatabaseView.tsx:167` — `14 Ders Bloğu (15 Temel DUS Dersi) &amp; {topics.length} Konsolide Ünite`
- Kanıt B: `src/modules/triaj/components/SubjectDatabaseView.tsx:170` — dinamik `temelSubjectsCount`/`klinikSubjectsCount`
- Öneri: Sabit sayıları kaldır, dinamik sayımları kullan.

---

## Yüzey 3 — Kalıcılık ve migrasyon

Taranan: `persistence/triajRepository.ts` (56), `persistence/recordSchemas.ts` (106), `migration/legacyBackup.ts` (461), `migration/importRecords.ts` (23), `TriajProvider.tsx` (177), `components/BackupDialog.tsx` (209), `supabase/migrations/*triaj*.sql`, `supabase/deploy_triaj.sql`, `scripts/import_triaj_workbook.py` (513).

### K1. Yedek zarfı `version` ile DB `schema_version` aynı 1/2 sayı uzayını paylaşıyor; geri yükleme eski planı sessizce v2 damgalıyor · KRİTİK
- Kanıt A: `src/modules/triaj/components/BackupDialog.tsx:109` — `[1, 2].includes(Number(input.version))`
- Kanıt B: `src/modules/triaj/persistence/triajRepository.ts:20,43` — `const SCHEMA_VERSION = 2;` / `row = { …, schema_version: SCHEMA_VERSION, … }`
- Kanıt C: `src/modules/triaj/components/BackupDialog.tsx:126` — yalnız `setMessage('Aktarım kaydedildi.')`
- Çelişki: İki ayrı kavram (yedek zarfı sürümü / DB şema sürümü) aynı `1|2` kümesini kullanıyor; v1 zarfından gelen 10 soruluk `T0_SAMPLING` kayıtları `schema_version: 2` ile yazılıyor. Kanonik kural "eski 10 soruluk kayıtlar sessizce dönüştürülmemeli" ihlal ediliyor — en az yükseltme bildirilmiyor.
- Doğru taraf: `legacyBackup`/`recordSchemas` (eski kayıt korunur) — ama sürüm damgası kullanıcıya bildirilmeli.
- Öneri: Yedek zarfına `schemaVersion` ekle; geri yüklemede düşürme/yükseltmeyi kullanıcıya onaylat.

### K2. SQL'in "istemci sürümü eski" hatası TS'te "başka cihaz yazdı" çakışmasına çevriliyor · YÜKSEK
- Kanıt A: `supabase/migrations/20261111143000_triaj_first_review_v2.sql:11-12` — `if new.schema_version < old.schema_version then raise exception 'TRİAJ client version is outdated…' using errcode = '40001';`
- Kanıt B: `src/modules/triaj/persistence/triajRepository.ts:51` — `if (error?.code === '40001') throw new TriajConflict();`
- Kanıt C: `src/modules/triaj/persistence/triajRepository.ts:28` — `'Plan başka bir cihazda değişti. Güncel planı inceleyip işlemi yeniden uygulayın.'`; `TriajProvider.tsx:145-159` `TriajConflict` görünce 3 kez yeniden dener.
- Çelişki: Sürüm uyuşmazlığı hiçbir tekrar denemesiyle geçmez (istemci sabiti 2 değişmiyor); kullanıcıya yanlış teşhis verilir ve 3 boş deneme yapılır.
- Doğru taraf: Migration'ın niyeti (yenileme uyarısı) doğru; hata sınıfları ayrılmalı.
- Öneri: Sürüm muhafızına ayrı errcode (ör. `55000`) ver; repository'de ayrı `TriajVersionMismatch` sınıfına eşle.

### K3. `deploy_triaj.sql` v2 muhafızını silen v1 trigger taşıyor · YÜKSEK
- Kanıt A: `src/modules/triaj/TriajProvider.tsx:36` — `'… Supabase SQL Editor üzerinden deploy_triaj.sql betiği çalıştırılmalıdır.'`
- Kanıt B: `supabase/deploy_triaj.sql:36-46` — trigger gövdesinde yalnız `if new.revision <> old.revision + 1`; `schema_version` karşılaştırması yok.
- Kanıt C: `supabase/migrations/20261111143000_triaj_first_review_v2.sql:11-13` — v2 gövdesinde karşılaştırma var.
- Çelişki: Uygulamanın kullanıcıya "çalıştır" dediği tek kurulum betiği, `create or replace` ile v2 muhafızını geri alıyor. Ayrıca `schema_version` kolonu her iki SQL'de `default 1` iken istemci her yazımda 2 gönderiyor.
- Doğru taraf: migration zinciri.
- Öneri: `deploy_triaj.sql`'i migration'lardan üret (tek kaynak); v2 gövdesini ve `default 2`'yi ekle.

### K4. Zod `z.object` bilinmeyen alanları sessizce atıyor; okunan plan geri yazıldığı için kayıp kalıcı · YÜKSEK
- Kanıt A: `src/modules/triaj/persistence/triajRepository.ts:11-18` — `z.object({…})`, `.passthrough()` yok.
- Kanıt B: `src/modules/triaj/persistence/triajRepository.ts:42-43` — `const next = triajStateSchema.parse(state);` → `payload: next`
- Kanıt C: `src/modules/triaj/types.ts:379` — `TriajTaskSummary = TriajTask & { excludedQuestionIds?: string[] }`; bu alan `recordSchemas.ts:29-34` `taskSchema`'da yok, ama SQL `get_triaj_tasks` onu üretiyor (`20261111072015_triaj_state.sql:46-48`).
- Çelişki: Tip katmanı ve SQL bu alanı tanıyor, şema tanımıyor; yazma yolunda düşüyor. `types.ts`'e eklenip şemaya eklenmeyen her yeni alan uyarısız kaybolur — derleyici bağı yok.
- Doğru taraf: `types.ts` + SQL.
- Öneri: Şemaları `z.infer` ile tipten türet, veya en az `satisfies z.ZodType<TriajTask>`; SQL'in ürettiği `excludedQuestionIds`'i şemaya ekle.

### K5. `legacyBackup` T0 puanını tam 10 kabul ediyor; 20 soruluk geçerli kaydı reddediyor · ORTA
- Kanıt A: `src/modules/triaj/migration/legacyBackup.ts:106` — `if (!validScore(topic.t0Score, 10) || !validScore(topic.t3Score, 40) || …`
- Kanıt B: `src/modules/triaj/migration/legacyBackup.ts:95-98` — `validScore(score, minimum, maximum = minimum)` → tek argümanda `min === max`.
- Kanıt C: `src/modules/triaj/domain/state.ts:16` — kanonik T0 kotası 20.
- Çelişki: Uygulamanın ürettiği 20 soruluk T0 kaydı içe aktarmada "protokol kotasına uymuyor" hatasıyla arşive düşer. İçe aktarıcı ayrıca hiç `ruleVersion` yazmıyor ve `T0_SAMPLING` görevi hiç üretmiyor (`legacyBackup.ts:126-133` yalnız T3/T14/SATURDAY üretiyor).
- Doğru taraf: `state.ts:16` + `recordTaskResult`'ın legacy dalı (`total === task.questionCount`, `firstReview.test.ts:22-23` ile kilitli).
- Öneri: `validScore(topic.t0Score, 1, 120)` kullan; T0 kotasını `stageQuestionCount`'tan türet.

### K6. `triageRecordSchema` `empty` alanını zorunlu tutuyor; `ScoreDetail.empty` opsiyonel · ORTA
- Kanıt A: `src/modules/triaj/types.ts:51` — `empty?: number;`
- Kanıt B: `src/modules/triaj/persistence/recordSchemas.ts:40` — `empty: count` (score extend ile zorunluya çevrilmiş)
- Kanıt C: `src/modules/triaj/migration/legacyBackup.ts:212-216` — parse hatası yakalanıp kayıt arşive düşürülüyor, kullanıcı yalnız "Biçim denetimi" görüyor.
- Çelişki: Eski kayıtta `empty` yoksa sessiz arşivleme; kullanıcı kaybın nedenini göremiyor.
- Öneri: `empty: count.default(0)`.

### K7. Şema `first-review-v2` T0 için 1 soruya izin veriyor — kural 1 şemada kodlanmamış · ORTA
- Kanıt A: `src/modules/triaj/persistence/recordSchemas.ts:31` — `questionCount: z.number().int().min(1).max(120)`
- Kanıt B: `src/modules/triaj/persistence/recordSchemas.ts:35-36` — `refine` yalnız `setId`/`questionIds` tutarlılığına bakıyor.
- Kanıt C: `src/modules/triaj/domain/state.ts:225` — `count < 20` reddediliyor (yalnız `selectFirstReviewCount` yolunda).
- Çelişki: `{ stage:'T0_SAMPLING', ruleVersion:'first-review-v2', questionCount: 5 }` şemadan geçer; `selectFirstReviewCount` bunu düzeltemez çünkü `setId` varsa reddeder, banka yolu `questionIds.length === questionCount` ister, `prepareQuestionTasks` set açmaz → görev çıkmaz sokakta kalır.
- Öneri: `taskSchema` refine'ine `ruleVersion==='first-review-v2' && stage==='T0_SAMPLING' ? questionCount>=20 : true` ekle.

### K8. `questionCount`/`total` üst sınırı üç yerde üç farklı · ORTA
- Kanıt A: `src/modules/triaj/domain/state.ts:225` — banka 20–120.
- Kanıt B: `src/modules/triaj/domain/state.ts:96-98` — elle giriş `total >= 20`, üst sınır yok.
- Kanıt C: `src/modules/triaj/persistence/recordSchemas.ts:31` — `questionCount` max 120; `:42` `questionIds` sınırsız; `:46` `answers` max 120.
- Çelişki: `firstReview.test.ts:8` 150 soruyu geçerli sayıyor ve diske yazılabiliyor; aynı kayıt banka yolundan gelse `answers` 120'yi aştığı için reddedilirdi.
- Öneri: Tek üst sınır (120) belirle, üç yere de uygula.

### K9. SQL payload'ın içine hiç bakmıyor; DB geçersiz veriyi kabul ediyor, istemci planı açamıyor · ORTA
- Kanıt A: `supabase/migrations/20261111072015_triaj_state.sql:5-9` — yalnız `payload` object + `tasks`/`triageHistory` array kontrolü.
- Kanıt B: `src/modules/triaj/persistence/recordSchemas.ts:30` — `ruleVersion: z.literal('first-review-v2').optional()`
- Kanıt C: `src/modules/triaj/persistence/triajRepository.ts:38` — okumada `triajStateSchema.parse(...)`, hata planı tamamen erişilemez yapar.
- Çelişki: `prepare_triaj_question_sets` RPC'si payload'ı şemadan geçirmeden `jsonb_set` ile mutasyona uğratıyor (`triaj_state.sql:104-108`); doğrudan RPC/SQL yazımı geçersiz `ruleVersion` veya `questionCount` yazabilir → istemci planı hiç açamaz.
- Öneri: `triaj_state`'e `check`: her `tasks` öğesinde `jsonb_typeof(questionCount)='number'`; RPC çıktısını da istemcide `parse` et.

### K10. `TriajProvider` RPC çıktısını tip doğrulamasından geçirmiyor · DÜŞÜK
- Kanıt A: `src/modules/triaj/TriajProvider.tsx:74-77` — `setSummary(Array.isArray(data) ? data : [])`
- Kanıt B: `src/modules/triaj/types.ts:379` — `TriajTaskSummary` tipi `excludedQuestionIds` taşıyor; hiçbir şema bunu doğrulamıyor.
- Çelişki: SQL sözleşmesi bozulursa tip hatası oluşmaz; `questionTasks.ts:34` `selectUnitQuestionIds(…, count: undefined)` çağrısına kadar iner.
- Öneri: `summarySchema = z.array(taskSchema.extend({ excludedQuestionIds: z.array(id).optional() }))` ve `parse`.

### K11. SQL'deki iki entegrasyon tablosunun hiçbir TypeScript karşılığı yok · ORTA
- Kanıt A: `supabase/migrations/20261111072031_triaj_integrations.sql:1-9` — `triaj_ticktick_connections` (8 kolon)
- Kanıt B: `supabase/migrations/20261111072031_triaj_integrations.sql:18` — `feature text not null check (feature in ('deepseek', 'ticktick-connect'))`
- Kanıt C: `src/modules/triaj/types.ts` içinde bu kolonlara karşılık gelen tip yok.
- Çelişki: `feature` birleşimi tiplenmemiş; `'ticktick-focus'` eklenmek istendiğinde (bkz. S6) yalnız SQL'de değişiklik gerektiği görülmez.
- Öneri: `type TriajQuotaFeature = 'deepseek' | 'ticktick-connect'` ve `TickTickConnection` tipini ekle.

---

## Yüzey 4 — Sunucu ve entegrasyon

Taranan: `api/triaj/ai/{deepseek,status}.ts`, `api/ai/{deepseek,status}.ts`, `api/triaj/ticktick/{callback,connect,disconnect,focus}.ts`, `api/_lib/triaj/{deepseek,deepseekPrompt,http,ticktick,focus}.ts`, `integrations/{deepseek,request,ticktick,anki}.ts`, `integrations/routes.test.ts`, `vite.config.ts`, `vercel.json`.

### S1. Aynı adlı `SYSTEM_DOCTRINE_PROMPT` iki dosyada iki farklı içerikle tanımlı · YÜKSEK
- Kanıt A: `api/_lib/triaj/deepseekPrompt.ts:4-9` — 4 maddelik güncel doktrin (≥20 / 40 / 34-28-0-27 / 14 gün / 20–25 / Cumartesi 30 + "Eski 10+40 örnekleme kuralını yeni ilk tekrara önerme").
- Kanıt B: `src/modules/triaj/domain/deepseek.ts:66-70` — 3 maddede bitiyor; 4. madde ve hiçbir triyaj sayısı yok.
- Kanıt C: `src/modules/triaj/integrations/deepseek.ts:4` — domain sürümünü yeniden dışa aktarıyor; `api/_lib/triaj/deepseek.ts:3` `deepseekPrompt.js` sürümünü kullanıyor.
- Çelişki: Sunucu doğru metni kullanırken istemci paketine giren aynı adlı sabit kural setini taşımıyor. Bugün sunucu kazanıyor, ama istemciden prompt üretilirse AI eski 10+40 modelini uygular.
- Doğru taraf: `deepseekPrompt.ts`.
- Öneri: Tek kaynak — domain sabitini sil, `deepseekPrompt.ts` tek tanım olsun.

### S2. `vercel.json` üretim fonksiyon süresi tanımlamıyor; 25 sn'lik sağlayıcı bütçesi platform varsayılanına takılıyor · ORTA
- Kanıt A: `vercel.json:4` — yalnız `"api/explain.ts": { "maxDuration": 300 }`
- Kanıt B: `api/_lib/triaj/deepseek.ts:69` — `const signal = upstreamSignal(request, 25_000);`
- Kanıt C: `vite.config.ts:70` — yerel ara katmanda süre sınırı yok.
- Çelişki: Aynı istek yerelde `PROVIDER_TIMEOUT` (504) üretebilirken üretimde platform hatası döner; uygulama hata sözleşmesi hiç oluşmaz.
- Öneri: `api/triaj/ai/deepseek.ts` (ve `focus`) için açık `maxDuration` ver.

### S3. Yerelde `/api/ticktick/*` sessizce `/api/triaj/ticktick/*`'ye yönleniyor; üretimde bu yol yok · ORTA
- Kanıt A: `vite.config.ts:16-17` — `/api/ticktick/` → `/api/triaj/ticktick/` rewrite
- Kanıt B: `vercel.json:7` — `/api/(.*)` kimlik eşlemesi; `/api/ticktick/focus` üretimde 404.
- Kanıt C: istemci kodunda `/api/ticktick/` çağıran yer yok (`integrations/request.ts:24` kanonik öneki kullanıyor).
- Çelişki: Aynı URL iki ortamda iki farklı sonuç; üstelik ölü.
- Öneri: Dev rewrite'ı kaldır veya üretimde de aynı eşlemeyi tanımla.

### S4. `configured:false` hem "özellik kapalı" hem "sunucu yanlış yapılandırılmış" anlamına geliyor · ORTA
- Kanıt A: `api/_lib/triaj/deepseek.ts:33` — `if (!key || !ALLOWED_DEEPSEEK_BASE_URLS.includes(baseUrl)) return null;`
- Kanıt B: `api/_lib/triaj/ticktick.ts:22` — 5 değişkenden biri eksikse `null`
- Kanıt C: `src/modules/triaj/components/DailyPlannerView.tsx:469` — `TickTick kapalı. Odak süresini elle girebilirsin.`
- Çelişki: Anahtar mevcut ve sağlayıcı çalışıyor olabilir; yalnız base URL izinli listede değil diye kullanıcıya "kapalı" deniyor. Operatör hatası ile bilinçli kapatma ayırt edilemiyor. `routes.test.ts:92-93` bu maskelemeyi doğruluyor.
- Öneri: `configured` yanına `configuredReason`/`misconfigured` alanı ekle, veya geçersiz yapılandırmada 503 `NOT_CONFIGURED` döndür.

### S5. TickTick callback iki hata yolunda iki farklı gövde döndürüyor; JSON yolunda popup kendini kapatmıyor · ORTA
- Kanıt A: `api/triaj/ticktick/callback.ts:7` — `requireTickTickConfig()` yoksa `route` yakalıyor → JSON 503
- Kanıt B: `api/triaj/ticktick/callback.ts:10` — `if (!validOAuthState(request, state)) return popupResponse(config, false, 400);`
- Kanıt C: `src/modules/triaj/integrations/ticktick.ts:41,46` — popup kapanana kadar bekleme, 600 sn zaman aşımı.
- Çelişki: Aynı sınıf hatada bir yol HTML+`postMessage`+kapanma, diğeri JSON. JSON yolunda mesaj gitmiyor ve popup kapanmıyor → kullanıcı 10 dk bekleyebilir.
- Öneri: Callback hiçbir durumda JSON dönmesin; `requireTickTickConfig()` hatasını `popupResponse` üzerinden ele al.

### S6. Yalnız `tasks:read` kapsamı isteniyor ama tek tüketilen kaynak `/open/v1/focus`; 403 "yeniden yetkilendir"e çevriliyor · ORTA
- Kanıt A: `api/_lib/triaj/ticktick.ts:13` — `const scope = 'tasks:read';`
- Kanıt B: `api/_lib/triaj/focus.ts:45` — `https://api.ticktick.com/open/v1/focus`
- Kanıt C: `api/_lib/triaj/focus.ts:53` — `throw new TriajApiError(409, 'TICKTICK_RECONNECT', 'TickTick yetkisini yeniden verin.');`
- Çelişki: İstenen tek kapsam görev kaynağı; kod yalnız odak kaynağını tüketiyor. 401 (süre dolmuş) ile 403 (kapsam yetersiz) aynı koda düşüyor → kullanıcı yeniden yetkilendirse de aynı sonucu alır, kalıcı döngü.
- Öneri: 403'e ayrı kod (`TICKTICK_FORBIDDEN`); istenen kapsamı odak kaynağını kapsayacak şekilde gözden geçir.

### S7. En pahalı dış uç (`focus`, çağrı başına 6 sağlayıcı isteği) kotasız · ORTA
- Kanıt A: `api/triaj/ai/deepseek.ts:10` — `await takeQuota(userId, 'deepseek');`
- Kanıt B: `api/triaj/ticktick/connect.ts:11` — `await takeQuota(userId, 'ticktick-connect');`
- Kanıt C: `api/_lib/triaj/focus.ts:32` — `const maxAge = refresh ? 5_000 : 60_000;` + `api/triaj/ticktick/focus.ts:56` `?refresh=1`
- Çelişki: `http.ts:98` kotayı yalnız iki özellik için tanımlıyor; `?refresh=1` ile 5 sn'de bir tetiklenebilen 6 istekli uç sınırsız.
- Öneri: `takeQuota`'ya `'ticktick-focus'` ekle (bkz. K11 — tipli birleşim).

### S8. DeepSeek anahtarı sessizce farklı sağlayıcıya düşüyor ve farklı gövde şemasıyla istek atıyor · ORTA
- Kanıt A: `api/_lib/triaj/deepseek.ts:30` — `process.env.DEPLOY_API_KEY?.trim() || process.env.DEEPSEEK_API_KEY?.trim()`
- Kanıt B: `api/_lib/triaj/deepseek.ts:32` — `DEEPSEEK_API_KEY && !DEPLOY_API_KEY ? 'https://api.deepseek.com' : DEPLOY_BASE_URL`
- Kanıt C: `api/_lib/triaj/deepseek.ts:63` — `max_tokens: basePayload.max_completion_tokens` (deploy dışı dalda `top_p`, `presence_penalty`, `frequency_penalty`, `cache_preference` düşüyor)
- Çelişki: `configured:true` iki durumda aynı; hangi sağlayıcıya gidildiği kullanıcıya/operatöre görünmüyor.
- Öneri: Tek sağlayıcıya sabitle veya `configured` yanıtında sağlayıcı adını döndür.

### S9. İstemci durum tipi sunucunun döndürmediği alanları vaat ediyor; status ucu hiçbir bileşende kullanılmıyor · DÜŞÜK
- Kanıt A: `src/modules/triaj/integrations/deepseek.ts:11-13` — `configured`, `provider?`, `model?`
- Kanıt B: `api/triaj/ai/status.ts:6` — yalnız `{ configured: Boolean(getDeepSeekConfig()) }`
- Kanıt C: `e2e/triaj.spec.ts:192` — status ucu mock'lanıyor ama modal `requestDeepSeekCompletion` kullanıyor.
- Öneri: Tipi `{configured:boolean}`'a indir veya status ucunu gerçek bir tüketiciye bağla; ölü e2e mock'unu kaldır.

### S10. Anki istemcisi yalnız `http://127.0.0.1:8765`'e gidiyor; üretim HTTPS sayfasında tarayıcı engeller, sunucu eşdeğeri yok · ORTA
- Kanıt A: `src/modules/triaj/integrations/anki.ts:94` — `const ankiConnectUrl = 'http://127.0.0.1:8765';`
- Kanıt B: `src/modules/triaj/integrations/anki.test.ts:53` — `['http://127.0.0.1:8765', 'omit', 'requestPermission']` (test ortamı karışık içerik kısıtı taşımıyor)
- Kanıt C: `api/` altında Anki ucu yok.
- Çelişki: Test yeşil olduğu için "Anki çalışıyor" görünüyor; ölçülen tek şey test ortamının kısıtsızlığı. Yerel http ile üretim https arasında aynı istek farklı sonuç verir.
- Doğru taraf: manuel snapshot + TSV akışı (zaten var).
- Öneri: Üretimde doğrudan `127.0.0.1` denemesini kaldır, yalnız manuel akışı sun.

### S11. `scripts/test_focus_endpoint.mjs` kaldırılmış davranışı bekliyor · DÜŞÜK
- Kanıt A: `api/triaj/ticktick/focus.ts:8` — `const userId = await requireUser(request);` (git diff ile env token yolu silinmiş)
- Kanıt B: `scripts/test_focus_endpoint.mjs:8,14` — `TEST 1: Unauthenticated Request (DusTriaj Direct Mode)` / kimlik başlığı olmadan çağrı
- Çelişki: Kod artık 401 döner, betik veri bekliyor.
- Öneri: Betiği 401 bekleyecek şekilde güncelle veya sil.

---

## Yüzey 5 — Veri, metin ve katalog

Taranan: `data/subjectProtocols.ts` (302), `data/branchSpecs.ts` (39), `data/legacyUnitLabels.ts` (258), `data/legacyUnitMapping.ts` (213), `domain/catalog.ts` (14), `src/config/canonicalUnits.ts` (712, kanonik referans), `domain/deepseek.ts`, `api/_lib/triaj/deepseekPrompt.ts`.

### M1. `topic.subjectId` ders ADI taşıyor, 15 kod noktası ders KODU arıyor · KRİTİK
- Kanıt A: `src/modules/triaj/domain/state.ts:52` — `subjectId: lesson`; çağıran `TriajViewContext.tsx:133` — `planUnit(current, subject.name, title, date, notes)` → değer `'Anatomi'`. Aynı desen `legacyBackup.ts:104`.
- Kanıt B: `subjectProtocols.ts` `id` alanı `B01`, `B02+B03`, `B04`… (`subjectProtocols.ts:7,28,49`); `subjects.find(s => s.id === t.subjectId)` deseni 15 yerde: `DailyPlannerView.tsx:187`, `SubjectDatabaseView.tsx:83,94,121,328,645,763`, `TriageModal.tsx:86`, `TriajViewContext.tsx:143,211`, `triage.ts:394,447,463,479`, `TriajModule.tsx:105`.
- Kanıt C — çalıştırma: `planUnit(...)` sonrası `subjectId = 'Anatomi'`; `CANONICAL_DUS_SUBJECTS.find(x => x.id === 'Anatomi')` → **BULUNAMADI**; `find(x => x.name === 'Anatomi')` → `Anatomi`.
- **Ölçülen kullanıcı etkisi (çalıştırılabilir probe):**
  - `generateTriageReport` → 14 dersin **hiçbirinde** `totalUnits > 0` değil; tüm `greenCount/yellowCount/redCount/retentionRate` = 0.
  - `SubjectDatabaseView:83` temel/klinik sayacı ters: Anatomi ünitesi "klinik" sayılıyor (`temel = 0`, `klinik = 1`).
  - `DailyPlannerView:187` bakım listesi boş kalıyor → yeşil taburcu olmuş ünite için "Biten Derslerin Branş Bakımı" hiç görünmüyor.
  - `triage.ts:447,463,479` acil görevlerde ders adı `'Ders'` placeholder'ına düşüyor.
  - `TriajViewContext.tsx:143` (`recordManualResult`) `subject` undefined → `planUnit` hiç çağrılmıyor → elle girilen yeni T0 sonucu **`'Bu ünite ve aşama için açık bir test görevi bulunamadı.'`** hatası veriyor.
- Çelişki: Aynı alan adı (`subjectId`) modül içinde iki farklı anlam taşıyor. `TriajViewContext:92` bildirimlere `subjects.find(name === task.lesson)?.id` yazıyor, yani bildirimde **kod** (`'B11'`), topic'te **ad** (`'Pedodonti'`) var.
- Neden testler yakalamıyor: `triage.test.ts:16,101,114,127,191,204` fixture'ları elle `subjectId: 'B01'` yazıyor; `state.test.ts`/`firstReview.test.ts` `subjectId`'yi hiç doğrulamıyor. Testler üretim kodunun yazdığı değerle değil, hayali bir değerle çalışıyor.
- Doğru taraf: Tek ad uzayı. Kanonik katalog anahtarı **ders adı** (`CANONICAL_UNITS` anahtarları: `Anatomi`, `Fizyoloji`, …; `catalog.ts:8-14` `isCanonicalUnit(lesson, unit)` adla çalışıyor), yani `subjectId = ders adı` doğru ve **15 tüketici yanlış**.
- Öneri: `subjects.find(s => s.id === X.subjectId)` → `subjects.find(s => s.name === X.subjectId)` (15 yer). Kalıcı çözüm: `subjectId`'yi `subjectName` olarak yeniden adlandır ve `DUSSubject`'e `code` dışında arama yardımcısı ekle. Fixture'ları gerçek üreticiyle (`planUnit`) üret ki bu sınıf hata bir daha maskelenmesin.

### M2. B11–B16 branş kodları iki dosyada farklı derslere bağlı · KRİTİK
- Kanıt A: `src/modules/triaj/data/branchSpecs.ts:15-20` — `B11=Periodontoloji, B12=Ortodonti, B13=Çocuk Diş Hekimliği (Pedodonti), B14=Endodonti, B15=Restoratif, B16=Protetik`
- Kanıt B: `src/modules/triaj/data/subjectProtocols.ts:178,199,220,241,262,283` — `B11=Pedodonti, B12=Endodonti, B13=Ortodonti, B14=Periodontoloji, B15=Protez, B16=Restoratif`
- Kanıt C: `src/modules/triaj/data/legacyUnitMapping.ts:18-23` — yorum: `// These codes are DusTriaj planner subjects. Excel exam branch codes have a different order.`
- Çelişki: Aynı `B11` planlayıcıda Pedodonti, deneme analizinde Periodontoloji. `branchSpecs` deneme ad alanını (`analytics.ts:23-38`, `simulation.ts:7-12`, `ExamAndErrorAnalyticsView`) besliyor; `subjectProtocols` planlayıcıyı (`TriajViewContext:18`) besliyor ve `DeepSeekModal.tsx:102` planlayıcı kodunu AI'a `[B11]` olarak gönderiyor.
- Doğru taraf: Kodlar ad alanına göre ayrılmalı — aynı harf uzayında iki anlam olamaz.
- Öneri: Planlayıcı kimliklerini `P01…P14` gibi ayrı önekle ayır; `B01…B16` yalnız deneme/analitik katmanında kalsın.

### M3. `subjectProtocols` temel bilim kotası 36 ama başlık 40 diyor; ağırlık toplamı %96.64 · YÜKSEK
- Kanıt A: `src/modules/triaj/data/subjectProtocols.ts:5` — `TEMEL BİLİMLER (6 DERS BLOĞU / 72 ÜNİTE / 40 SORU / %33.33)`
- Kanıt B: aynı dosyadaki `questionCount` değerleri `6+8+6+6+4+6 = 36`; `weightPercentage` toplamı `30.00`; tüm dosya toplamı `116` soru / `96.64`.
- Kanıt C: `src/modules/triaj/data/branchSpecs.ts:4-21` — 16 branş toplamı `120` (40 temel + 80 klinik).
- Çelişki: Sınav modeli 120 soru iken protokol 116 tanımlıyor; eksik 4 soru tam olarak `B08 Tıbbi Biyoloji ve Genetik` (`branchSpecs.ts:11`), katalogda ve protokolde hiç yok. Bu ders için kanonik ünite olmadığı için `planUnit` ile planlanamaz, ama deneme analizinde 4 soruluk hedef neti vardır.
- Doğru taraf: `branchSpecs.ts` (40/80 sınav dağılımı).
- Öneri: Ya `CANONICAL_UNITS`'a ve `CANONICAL_DUS_SUBJECTS`'e B08 ekle (soru 4, ağırlık 3.33), ya B08'i 16 branştan çıkarıp 116'ya göre yeniden tanımla. İkisi birlikte olamaz.

### M4. Protokol başlıklarındaki ünite sayıları kanonik katalogla uyuşmuyor (227 / 72 / 155 vs 261 / 74 / 187) · YÜKSEK
- Kanıt A: `src/modules/triaj/data/subjectProtocols.ts:5,133` — `72 ÜNİTE` / `155 ÜNİTE`
- Kanıt B: `src/modules/triaj/types.ts:39` — `unitCount?: number; // Konsolide ünite sayısı (Toplam 227)`
- Kanıt C — sayım: `src/config/canonicalUnits.ts` → temel 74 (Anatomi 11, Fizyoloji 28, Biyokimya 11, Mikrobiyoloji 7, Patoloji 9, Farmakoloji 8), klinik 187 (Cerrahi 17, Radyoloji 48, Pedodonti 29, Endodonti 25, Ortodonti 21, Periodontoloji 10, Protez 20, Restoratif 17), **toplam 261**.
- Çelişki: 72+155 = 227 rakamı `legacyUnitLabels.ts` etiket sayısıyla aynı; katalog 261'e çıkmışken başlık ve tip dokümanı eski sayıyı taşıyor. Aynı dosya satır 302'de `unitCount`'u katalogdan doğru hesaplıyor → dosya kendi içinde tutarsız.
- Öneri: Sabit sayıları sil, katalogdan türet.

### M5. 5 `unresolved` kayıt geçerli kanonik hedef taşıdığı hâlde migrasyonda düşüyor · YÜKSEK
- Kanıt A: `src/modules/triaj/data/legacyUnitMapping.ts:139` — `[6, 'unresolved', 'Epidemiyoloji adaydır…', 'Periodontal Epidemiyoloji']` (ayrıca 97, 120, 140, 152)
- Kanıt B: `src/modules/triaj/data/legacyUnitMapping.ts:207` — `if (!mapping || mapping.relation === 'unresolved') return undefined;`
- Kanıt C: `src/modules/triaj/data/legacyUnitMapping.ts:181` — `targets: entry.units.filter(unit => units.includes(unit))` (hedef saklanıyor ama `selectLegacyUnit` hiç döndürmüyor) → `legacyBackup.ts:90-92` kaydı arşive atıyor.
- Çelişki: Hedef kimlik katalogda **var** ama `relation` etiketi yüzünden bağ kurulmuyor. Ünite verisi kaybolmuyor, **bağ** kayboluyor — kullanıcı ilerlemesini sıfırdan başlatıyor.
- Öneri: `unresolved` + `units.length > 0` kombinasyonunu şema düzeyinde yasakla.

### M6. Katalogda olup hiçbir legacy etikette karşılığı olmayan 32 ünite · ORTA
- Kanıt A: `src/modules/triaj/data/legacyUnitLabels.ts:106-133` — B10 için 26 etiket
- Kanıt B: `src/config/canonicalUnits.ts:431-529` — Radyoloji 48 ünite; `Ünite 6 - Radyografi ve Banyo Tekniği`, `Ünite 7 - Radyografik Artefaktlar`, `Ünite 27 - Travma`, `Ünite 31–48` hiçbir kaynak etikete bağlanmıyor.
- Kanıt C: `src/config/canonicalUnits.ts:42` — `Üst Ekstremite Anatomisi` Anatomi'nin 11. ünitesi; `legacyUnitLabels.ts:3-14` B01'de yalnız 10 etiket var.
- Çelişki: "Katalog tek kaynaktır" ama kataloğun bir kısmına migrasyon kaynağı yok → eski veriyle gelen kullanıcıda bu üniteler sıfır ilerlemeyle açılır.
- Öneri: Kaynaksız kanonik üniteler için açık `orphan` listesi üret ve raporla (Radyoloji 25, Protez 2, Ortodonti 2, Periodontoloji 2, Anatomi 1).

### M7. Dört dersin `t3Method` metninde 40 soruluk T+3 testi hiç yok · ORTA
- Kanıt A: `src/modules/triaj/data/subjectProtocols.ts:85` — `T+3 testi sonrası zayıf kalan mikroorganizmaları 15 dk oku ve yıldızla.` (soru yok)
- Kanıt B: `src/modules/triaj/data/subjectProtocols.ts:106,127,255` — Patoloji `T+3 vaka soruları + DUSBANKASI karma tarama.`, Farmakoloji `T+3 gecikmeli vaka soruları çözümü.`, Periodontoloji `T+3 vaka soruları (Evre I-IV, Derece A-G ayrımı).`
- Kanıt C: `src/modules/triaj/domain/state.ts:17` — `case 'T3_MAIN': return 40;`; diğer 10 dersin metni "ayrı 40" diyor.
- Çelişki: Kullanıcı bu dört dersin protokolünden 40 soruluk kova testinin varlığını öğrenemiyor; eşik (34/28) da hiçbirinde yok.
- Öneri: Dört `t3Method` metnini 40 soru + kova kararıyla tamamla.

### M8. Üç dersin `t0Method` metni "10 dk Boş Kağıt" ile 10 rakamını andırıyor ama sayı vermiyor · DÜŞÜK
- Kanıt A: `src/modules/triaj/data/subjectProtocols.ts:21` — `… 10 dk Boş Kağıt anlatımı yap.` (10 = dakika, soru değil)
- Kanıt B: aynı dosyada diğer 13 ders `ilk tekrarda en az 20 soru çöz` kalıbını kullanıyor.
- Çelişki: B01 (Anatomi) tek istisna; sayı vermiyor. Karışıklık değil ama tutarlılık boşluğu — 10'un yanında "soru" geçmediği için şanslı.
- Öneri: B01'e de "ilk tekrarda en az 20 soru çöz" ekle.

### M9. AI yama süresi üç yerde üç farklı (5 / 5–10 / 15 dk) · DÜŞÜK
- Kanıt A: `src/modules/triaj/domain/deepseek.ts:94` — `5 dakikalık nokta atışı yama notunu … hazırla.`
- Kanıt B: `src/modules/triaj/domain/deepseek.ts:9` — `TRIAGE_PATCH // T+3 veya Cumartesi Onarımı için 5-10 dk Nokta Atışı Yama`
- Kanıt C: `src/modules/triaj/domain/triage.ts:69` — `… ilgili paragraflarını ana kitaptan 15 dk dikkatlice oku …`
- Öneri: Uygulama akışına göre tekilleştir (15 dk).

### M10. `types.ts` yorumları eski kuralı anlatıyor · ORTA
- Kanıt A: `src/modules/triaj/types.ts:16` — `| 'T0_SAMPLING' // T+0 günü: 10 soruluk adımlı örnekleme`
- Kanıt B: `src/modules/triaj/domain/state.ts:16` — `return 20;`
- Kanıt C: `src/modules/triaj/types.ts:17` — `// T+3 günü: Kalan 40 soru esas geri çağırma` — "kalan" 50→10+40 varsayımını sürdürüyor.
- Kanıt D: `src/modules/triaj/types.ts:37` — `questionCount: number; // DUS sınavındaki soru sayısı (örn: 10, 8, 6, 4)` — `TriajTask.questionCount` (görev kotası 20–120) ile **aynı ad**, farklı anlam. `types.ts:133` — `// Blok 2: Yeni Konu Edinimi & T+0 (Boş Kağıt + 10 Soru)`.
- Öneri: `types.ts:16-17,37,133` yorumlarını güncel kurala göre yaz; `TriajTask.questionCount`'u `taskQuestionCount` olarak yeniden adlandır.

---

## Yüzey 6 — Tip ve şema sözleşmesi

Taranan: `types.ts` (396), `persistence/recordSchemas.ts` (106), `persistence/triajRepository.ts` (56), `migration/legacyBackup.ts` (461), `supabase/migrations/*triaj*.sql`, `src/types/app.ts` (216).

### T1. `TriageRecord.recordedAt` offsetli ISO'yu reddediyor, kardeş alan `syncedAt` kabul ediyor · ORTA
- Kanıt A: `src/modules/triaj/persistence/recordSchemas.ts:47` — `recordedAt: z.iso.datetime().optional(),`
- Kanıt B: `src/modules/triaj/persistence/recordSchemas.ts:92` — `syncedAt: z.iso.datetime({ offset: true }).optional(),`
- Kanıt C: `src/modules/triaj/domain/state.ts:192` — `new Date().toISOString()` (bugün `Z` ürettiği için çalışıyor)
- Çelişki: Aynı dosyada iki farklı datetime politikası; offsetli yazan bir istemcide kayıt sessizce şema hatasına düşer.
- Öneri: `recordedAt`'i de `{ offset: true }` yap.

### T2. `TopicUnit.createdAt/updatedAt` gerçekte takvim tarihi, şemada serbest metin · ORTA
- Kanıt A: `src/modules/triaj/domain/state.ts:53-54` — `createdAt: date, … updatedAt: date` (`date` = `requireDate` ile doğrulanmış)
- Kanıt B: `src/modules/triaj/persistence/recordSchemas.ts:22-23` — `createdAt: text, updatedAt: text` (aynı şemada `t0Date: calendarDate.optional()`)
- Çelişki: Aynı kavram iki farklı doğrulama; bozuk tarih sessizce kabul edilir.
- Öneri: `calendarDate` yap (legacy boş string üretiyorsa `union([calendarDate, literal('')])`).

### T3. Ölçüm üst sınırları yorumda var, şemada yok · ORTA
- Kanıt A: `src/modules/triaj/types.ts:238-240` — `basicNet: number; // <= 40.0`, `clinicalNet: … // <= 80.0`, `totalNet: … // <= 120.0`
- Kanıt B: `src/modules/triaj/persistence/recordSchemas.ts:59` — `basicNet: z.number(), clinicalNet: z.number(), totalNet: z.number(), …`
- Kanıt C: `src/modules/triaj/types.ts:256,258` — `dusWeight // 1.0–2.0`, `fsrsDifficultyD // 1–10`; şemada `z.number()`
- Çelişki: `analytics.ts:118-122` üst sınırı uyguluyor ama DB payload doğrulaması uygulamıyor; bozuk bir istemci `totalNet: 500` yazabilir.
- Öneri: `basicNet: z.number().min(-2).max(40)`, `clinicalNet: max(80)`, `totalNet: max(120)`, `dusWeight: min(1).max(2)`.

### T4. `unitNumber` 1 tabanlı üretiliyor, şema 0'a izin veriyor · DÜŞÜK
- Kanıt A: `src/modules/triaj/components/TriajViewContext.tsx:22` — `unitNumber: index + 1`
- Kanıt B: `src/modules/triaj/persistence/recordSchemas.ts:7,20` — `const count = z.number().int().nonnegative()` / `unitNumber: count`
- Çelişki: `SubjectDatabaseView.tsx:511` `#00` üretebilir.
- Öneri: `unitNumber: count.min(1)`.

### T5. `TestStage`'e yeni üye eklenirse bir dosya derlemeyi kırar, diğeri sessizce bozulur · ORTA
- Kanıt A: `src/modules/triaj/domain/state.ts:14-23` — exhaustive switch (yeni üyede TS hatası)
- Kanıt B: `src/modules/triaj/components/TriajViewContext.tsx:38` — `Record<TriajTask['stage'], string>` (yeni üyede TS hatası)
- Kanıt C: `src/modules/triaj/domain/questionTasks.ts:16-22` — `preparationForStage` dönüşü `string | undefined`, exhaustive değil (yeni üyede sessiz `undefined`)
- Çelişki: Aynı enum'a üye eklemek "yarı kırık" bir derleme profili üretir: iki dosya patlar, hazırlık adımı sessizce atlanır (`App.tsx:1299` `if (preparationForStage(task.stage) && …)`).
- Öneri: `preparationForStage`'i `Record<TestStage, string | undefined>` haritasına çevir.

### T6. `types.ts` ile `recordSchemas.ts` arasında derleyici bağı yok · YÜKSEK (bkz. K4)
Bu bulgu K4 ile aynı köke sahiptir; tip yüzeyinden bakıldığında ek kanıt: `TopicUnit` 21 alan `topicSchema` içinde elle sayılmış (`recordSchemas.ts:19-27` ↔ `types.ts:57-83`), `z.infer` kullanılmıyor, `satisfies z.ZodType<TopicUnit>` yok.

---

## Yüzey 7 — Dokümantasyon (hiçbir ajana atanmadı, ana ajan taradı)

### X1. `README.md` içinde TRİAJ için tek satır yok · YÜKSEK
- Kanıt A: `grep -aic triaj README.md` → **0**; `grep -aic "TRİAJ" README.md` → **0**.
- Kanıt B: README son "Not" girdisi `2026-07-05 · v4.40`; TRİAJ entegrasyonu `v4.73`'te yapıldı (git `1b2f21e`).
- Kanıt C: proje kuralı (memory `feedback_update_docs_on_change`) — "her kod/script/mimari değişikliğinde README.md ve GEMINI.md güncellenmeli".
- Çelişki: 58 dosyalık / ~11.500 satırlık modül ve `v4.73`–`v4.78` arası beş sürüm README'ye hiç yansımamış.
- Öneri: README'ye TRİAJ bölümü ekle (beş sekme, ilk tekrar kuralı, T+3/T+14/Cumartesi, kalıcılık şeması, dış bağlantılar) ve `v4.79` Not girdisi yaz.

### X2. `gemini.md` v4.76'da belgelenen davranış koddan farklı · YÜKSEK (bkz. D1)
- Kanıt A: `gemini.md:7` — `planUnit` "hata fırlatmak yerine tarihi güvenle güncellemesi (`rescheduleTask`) sağlandı."
- Kanıt B: `src/modules/triaj/domain/state.ts:45-47` — hata fırlatıyor.
- Kanıt C: `gemini.md:14` (v4.73) — `T+0 (10 dk boş kağıt + 10 soru), T+3 (kalan 40 soru…)` eski kural olarak duruyor ve yeni kural hiçbir sürüm notunda yazılmıyor; `grep -c "first-review-v2" gemini.md` → **0**.
- Çelişki: Bir sonraki oturum `gemini.md`'yi tek doğruluk kaynağı olarak okursa eski 10+40 modelini uygular.
- Öneri: v4.79 bloğunda ilk tekrar v2 kuralını, `planUnit` davranış değişikliğini ve `subjectId` sözleşmesini yaz.

---

## Doğrulanmamış / sınırlar

- Canlı Supabase, Vercel, TickTick ve DeepSeek uçlarına **istek atılmadı**; `configured`/`connected` durumlarının gerçek sağlayıcı sağlığını yansıttığı doğrulanmadı (S4, S8).
- `supabase/.temp/` ve `playwright-report/` taranmadı.
- Playwright E2E suite **çalıştırılmadı** (bu denetim statik + birim düzeyinde kaldı); `e2e/triaj.spec.ts` yalnız okundu.
- `vitest` (72 test, 9 dosya) ve iki `tsc` projesi çalıştırıldı ve **yeşil** — yani bu 53 bulgunun hiçbiri mevcut test seti tarafından yakalanmıyor. Bu, test kapsamı açığının kendisidir: `src/modules/triaj` altındaki 30 dosyanın hiçbirinde test yok (view katmanının tamamı, `recordSchemas`, `triajRepository`, `catalog`, `questionTasks`, `subjectProtocols` dahil).
- `npm run lint` (yalnız TRİAJ kapsamı): 3 hata (`react-refresh/only-export-components` ×3) + 2 uyarı (`react-hooks/exhaustive-deps`) — bulgu değil, arka plan sinyali.

---

## Önerilen düzeltme sırası

| # | Bulgu | Neden ilk |
|---|---|---|
| 1 | M1 — `subjectId` ad/kod uyumsuzluğu (15 nokta) | Dört ekranı birden düzeltir; tek sözleşme kararı |
| 2 | V1, V2 — "10 soru" metinleri | Kullanıcıyı doğrudan yanlış kotaya yönlendiriyor |
| 3 | K3 — `deploy_triaj.sql` v2 muhafızı | Kurulum betiği migration'ı eziyor |
| 4 | M2 — B11–B16 kod çakışması | Ad alanı ayrımı gerektirir; M1 ile birlikte yapılmalı |
| 5 | M3 — B08 eksik / 36 vs 40 | Sınav modeli ile plan modeli ayrışıyor |
| 6 | D2 — `t0Date` yazılmıyor | Matris ve gecikme göstergesi sessizce yanlış |
| 7 | K1, K2 — sürüm damgası ve 40001 karışıklığı | Veri kaybı / yanlış teşhis riski |
| 8 | S1 — iki AI doktrin kopyası | Eski kuralın yeniden üretilme yolu |
| 9 | K4/T6 — Zod strip | Yeni alanların sessizce kaybolması |
| 10 | V3, V4 — koyu tema kontrastı | Görsel, risksiz |
| 11 | X1, X2 — README/gemini | Sonraki oturumun doğru başlaması |
