# DUSBANKASI Özellik Genişletme Planı — Temmuz 2026

> **Amaç:** Uygulamanın *zaten topladığı* veriyle açılabilecek potansiyeli, sınava kalan **~110 güne** (DUS: Kasım 2026, hedef tarih `projections.ts` → 2026-11-01) sığacak şekilde fazlı bir yol haritasına dökmek.
> **Merkez içgörü (SystemsThinking):** Eksik olan özellik değil, **kapalı olmayan geri-besleme döngüleri**. Uygulama tek kapalı döngüyle çalışıyor (çöz → zayıflık skoru → zayıf konu modu). Süre verisi, çeldirici verisi ve RAG raporları döngü dışında duruyor. Bu plan önce kırık döngüleri kapatır, sonra yeni yüzey ekler.
> **FirstPrinciples çatısı:** DUS skoru = kavram kapsamı × hatırlama olasılığı × format aşinalığı × sınav-günü yönetimi. Mevcut uygulama 1. ve 2. çarpanda güçlü; bu plan ağırlığı 2., 3. ve 4. çarpana verir. Her faz "skor mekanizması" satırıyla hangi çarpana hizmet ettiğini belirtir.

---

## 0. Mevcut Durum Özeti (keşif bulguları)

**Var olan (19 view, 7 sınav varyantı):** `normal / favorites / high_yield / daily / simulation / weak / retry` + `smart-study` kuyruğu (`src/lib/adaptive.ts`: weakness 0.70 + new-exploration 0.30, greedy interleaving, EXPOSURE_MIX 80/15/5). İstatistik katmanı zengin: 20+ chart bileşeni (`src/components/charts/`), `metrics.ts` (momentum, OLS tahmin bandı), `dusScoring.ts` (ÖSYM ağırlıklı net), `projections.ts` (tempo/kapsama/tutarlılık).

**Toplanan ama kullanılmayan veri (en büyük fırsat alanı):**

| Veri | Nerede | Durum |
|---|---|---|
| `exam_answers.time_spent` + `question_order` | Supabase | `examAnalytics.ts:78` placeholder — pozisyon/yorulma ve hız-doğruluk analizi yapılmıyor |
| `timeSpentHistory[]` (soru başına süre, son 50) | Yalnız localStorage | Buluta gitmiyor, hiçbir grafiğe bağlı değil |
| `question_stats.wrong_choices` (jsonb, şık+timestamp) | Supabase | ErrorAnalyticsView'da yalnız frekans; çeldirici-çift analizi yok |
| `buildExamResults` ders kırılımı | Frontend | Her cevap `'Genel'` etiketli — soru→lesson join kırık |
| `daily_exams.breakdown` (units/new/review) | Supabase | Panelde minimal |
| RAG tekrar raporları (S5 v9.0) | `Desktop/DUS/Deneme Analizi/` | Uygulama dışında — döngü kırık |

**Yarım kalanlar:** FluidNav bileşeni render edilmiyor (mobil menü fiilen yok); iki paralel settings kaynağı (`lib/settingsStore.ts` canlı, `useAppStore.settings` ölü); `isHighYieldMode` T11 kalıntısı; `?preview=sim` mock kodu prod bundle'da; `idb.ts`/`supabase.ts:240`/`useQuestions.ts` deprecated API'ler.

---

## FAZ 0 — Onarım & Veri Temeli (Quick Wins)

**Süre:** 1–2 gün · **Efor:** Düşük · **Zamanlama:** hemen (Temmuz 3. hafta)
**Skor mekanizması:** doğrudan katkı yok; sonraki tüm fazların *veri doğruluğunu* kurar (kırık join ile yapılan her analiz yanlış karar üretir).

1. **Ders kırılımı join düzeltmesi** — `buildExamResults`'ta `question_ids → questions.lesson` eşlemesi; deneme sonuçları `'Genel'` yerine gerçek ders kırılımı üretir. (ISC/done: `SimulationResultView`'da ders bazlı doğruluk görünür.)
2. **`timeSpentHistory` buluta taşıma** — ham dizi değil agregat: `question_stats`'a `avg_time_s`, `time_samples` iki kolon (migration gerekir, aşağıda §7). Cihazlar arası süre analizi mümkün olur.
3. **`computeQuestionOrderEffect` gerçek implementasyon** — `exam_answers`'tan pozisyon-doğruluk eğrisi (veri hazır, sadece sorgu+hesap).
4. **FluidNav'ı bağla veya sil** — karar: bağla (bkz. §6 IA). Ölü settings slice + `isHighYieldMode` kalıntısı + deprecated API temizliği.
5. **`?preview=sim` mock kodunu prod build'den çıkar** (`import.meta.env.DEV` guard).

**Done:** 196 test yeşil kalır + yeni join/agregat testleri; `tsc -b` + build temiz.

---

## FAZ 1 — Yanlış Döngüsünü Kapat: Tekrar Kuyruğu

**Süre:** 3–5 gün · **Efor:** Orta · **Zamanlama:** Temmuz sonu
**Skor mekanizması:** hatırlama olasılığı çarpanı — yanlış yapılan bilgi en yüksek getirili tekrar adayıdır (retrieval practice doktrini). Bugün yanlışlar yalnız `weak` moduna toplu giriyor; *zamanlı* geri dönüş yok.

1. **Yanlış Kuyruğu (mod #1):** yanlış yapılan her soru basit gecikme merdiveniyle (1 → 3 → 7 gün, `last_seen` + `wrong_choices` timestamp'inden türetilir) otomatik kuyruğa girer. **FSRS değil** — yeni tablo yok, `question_stats`'tan saf türetme fonksiyonu (`src/lib/reviewQueue.ts`, `projections.ts` gibi bağımlılıksız + test edilebilir). Doğru cevaplanınca merdivenden çıkar.
2. **"Riskli 50" paneli (istatistik #1):** en yüksek (yanlışlık × bayatlık) skorlu 50 soru listesi; tek tık "bunları çöz" → mevcut `retry` varyantını yeniden kullanır.
3. **"Bugünün 20'si" bento kartı (mod #2):** ana ekranda sabah otomatik hazır mikro set — %60 tekrar kuyruğu + %40 zayıf ünite; `daily_exams` altyapısı ve Günün Denemesi kartı deseni birebir yeniden kullanılır (`generate_daily_exam` RPC'sine `variant` parametresi).

**Done:** Yanlış yapılan soru 1 gün sonra kuyruğa düşer (unit test); bento kart tek tıkla başlatır; kuyruk boşsa kart gizlenir.

---

## FAZ 2 — Süre & Sınav Ritmi (Pacing)

**Süre:** 4–6 gün · **Efor:** Orta · **Zamanlama:** Ağustos başı
**Skor mekanizması:** format aşinalığı + sınav-günü yönetimi — DUS'ta soru başına ~75 sn; hız-doğruluk dengesi antrene edilebilir bir beceridir ve veri (Faz 0.2–0.3 sonrası) hazırdır.

1. **Süre-Baskısı Modu (mod #3):** herhangi bir havuz üzerinde soru başına görünür geri sayım (varsayılan 75 sn, ayarlanabilir); süre dolunca otomatik "boş" işaretleyip geçer. `useExamTimer.ts` mevcut — soru-bazlı varyantı eklenir.
2. **Sprint Modu (mod #4):** 10 soru × 10 dk mikro blok; ultradiyen 90dk bloklarının içine oturan en küçük tam antrenman birimi.
3. **Hız-Doğruluk Scatter (istatistik #2):** `time_spent` vs doğruluk, ders renkli — `DersScatterPlot.tsx` bileşeni *yeniden kullanılır*, sadece veri kaynağı değişir.
4. **Yorulma Eğrisi (istatistik #3):** `question_order` → doğruluk eğrisi (Faz 0.3 çıktısı); "50. sorudan sonra doğruluğun %X düşüyor" içgörü satırı `StatisticsView` içgörü şeridine eklenir.
5. **Pacing özeti deneme sonucunda (istatistik #4):** `SimulationResultView`'a "ideal tempoya göre sapma" şeridi (hangi sorularda takıldın — en yavaş 5 soru listesi).

**Done:** Süre-baskısı modunda süre dolunca otomatik ilerleme (e2e); scatter ve eğri gerçek `exam_answers` verisiyle render (Interceptor screenshot).

---

## FAZ 3 — Çeldirici İstihbaratı & Kalibrasyon

**Süre:** 4–6 gün · **Efor:** Orta · **Zamanlama:** Ağustos ortası
**Skor mekanizması:** DUS'un zorluğu çeldirici kalitesindedir (üretim hattı çeldiricileri "en çok karıştırılan komşu kavramlardan" kurguluyor — README §1). Kullanıcının *hangi kavram çiftlerinde* yanıldığını göstermek, cross-linking zayıflığını (TELOS P2) doğrudan hedefler.

1. **Çeldirici Müzesi (istatistik #5, BeCreative çıktısı):** `wrong_choices` jsonb'undan "seni en çok kandıran şık" sıralaması → seçilen çeldirici şıkkın *metniyle* doğru cevabın yan yana karşılaştırma tablosu. ErrorAnalyticsView'daki frekans analizi kavram-çifti düzeyine derinleştirilir.
2. **Şık-Eleme Antrenmanı (mod #5):** soru açılır, aday her şık için "eler/tutar" işaretler, sonra cevaplar — çeldirici farkındalığını aktif beceriye çevirir. Yalnız frontend, yeni veri: `exam_answers`'a `eliminated_options` (jsonb, opsiyonel — §7).
3. **Güven Kalibrasyonu (istatistik #6 + mikro-özellik):** cevap verirken 1 tık "emin / emin değilim" (varsayılan: emin). Kalibrasyon matrisi: emin+yanlış = en tehlikeli bölge → bu sorular tekrar kuyruğunda ağırlık ×2. `exam_answers.confidence` kolonu (§7).
4. **Hata Taksonomisi (istatistik #7, opsiyonel):** yanlış sonrası tek tık etiket: "bilmiyordum / karıştırdım / dikkat hatası". Etiket dağılımı ders bazlı grafiklenir; "karıştırdım" etiketi Çeldirici Müzesi'ni besler.

**Done:** Confidence alanı yazılıyor (SELECT probe); müze gerçek wrong_choices'la dolu; emin+yanlış soruları kuyrukta 2× ağırlıklı (unit test).

---

## FAZ 4 — DUS Puan Motoru & Projeksiyon Derinleştirme

**Süre:** 3–4 gün · **Efor:** Düşük-Orta · **Zamanlama:** Ağustos sonu
**Skor mekanizması:** hedef netliği — "Ankara ADÇC TOP 10" hedefi için deneme sonuçlarının ÖSYM puan diline çevrilmesi karar kalitesini artırır (istatistik → karar ilkesi).

1. **Deneme→Puan Trend Grafiği (istatistik #8):** her `simulation`/`daily` sonucu `dusScoring.ts` + `dusPlacement.ts` ile puana çevrilir; `ExamTimelineChart` üzerinde hedef çizgisiyle (Ankara ADÇC tahmini taban) trend. Veri `daily_exams` + `exam_answers`'ta hazır.
2. **WhatIf entegrasyonu (istatistik #9):** mevcut `WhatIfSimulator`'a "X dersinde doğruluğu %Y'ye çıkarırsam puanım?" senaryosu — ders ağırlıkları `dusScoring.ts`'ten.
3. **Ders ROI sıralaması (istatistik #10):** (ÖSYM ağırlığı × mevcut hata oranı × soru hacmi) → "1 saatlik çalışmanın en çok puan getirdiği ders" sıralaması; `RecommendationFeed`'e beslenir.
4. **Kapsam Haritası (istatistik #11, BeCreative çıktısı):** üretim hattının çapa/kapsam metriği kullanıcı yüzüne iner: ünite başına "banka N soru / sen M'sini gördün / K'sında hata" üçlüsü — `getCurriculumProgress` genişletmesi, `UnitHeatMap.tsx` yeniden kullanımı.

**Done:** Trend grafiği ≥2 tamamlanmış denemeyle doğru puan gösterir (elle hesapla karşılaştırma); ROI sıralaması birim testli.

---

## FAZ 5 — RAG & Atlas Döngüsünü Uygulamaya Kapat

**Süre:** 5–8 gün · **Efor:** Orta-Yüksek · **Zamanlama:** Eylül
**Skor mekanizması:** hatırlama derinliği — RAG raporları şu an Desktop klasörüne yazılıyor; okunma/tekrar döngüsü uygulama dışında kayboluyor (SystemsThinking: en kırık bilgi akışı).

1. **Tekrar Kütüphanesi (Atlas/RAG önerisi #1):** `generate_deneme_rag_reports.py` çıktıları Supabase Storage'a (`study-resources` bucket deseni mevcut) + `review_reports` tablosuna (soru_id, ders, tarih, md_path — §7) da yazılır; uygulamada "Tekrar Raporları" görünümü markdown render eder (`lib/markdown.ts` XSS-sert renderer hazır). Rapor okundu işareti tekrar kuyruğuna sinyal verir.
2. **Atlas Koç Brifingi (Atlas/RAG önerisi #2):** her sabah `daily-plan` görünümünün tepesine 5 cümlelik analitik brifing — `api/explain.ts` deseni kopyalanarak yeni `api/briefing.ts` (Gemini, girdi: `projections` + dünkü `exam_answers` özeti + tekrar kuyruğu durumu). Kural: motivasyon dili yok, mekanizma dili (PRINCIPAL kuralı).
3. **Deneme Sonrası Soğuma Özeti (Atlas/RAG önerisi #3):** deneme biter bitmez `SimulationResultView`'a 3 maddelik anında high-yield özet (yanlışların ortak teması) — tam RAG raporu gece üretilirken bu anlık ve ucuz (tek Gemini çağrısı).

**Done:** Rapor uygulamada render edilir (Interceptor screenshot); brifing endpoint'i gerçek veriyle 5 cümle döner (curl probe); soğuma özeti deneme sonunda görünür.

---

## FAZ 6 — Sınav Günü Provası (Ekim, feature-freeze öncesi son faz)

**Süre:** 3–5 gün · **Efor:** Orta · **Zamanlama:** Ekim başı — **Ekim 15 sonrası feature freeze: yalnız çalışma + bugfix**
**Skor mekanizması:** sınav-günü yönetimi çarpanı — duygusal regülasyon (TELOS C0) için en etkili müdahale provadır, telkin değil.

1. **Tam Ritüel Simülasyonu (mod #6, BeCreative çıktısı):** mevcut `simulation` varyantının üstüne: sabah saatine planlanır, molasız, optik-form benzeri işaretleme arayüzü, süre uyarıları gerçek ÖSYM ritminde, bitince Faz 5.3 soğuma özeti. Haftada 1, Ekim'de haftada 2 önerilir.
2. **Net Stratejisi Simülatörü (mod #7):** aynı deneme "hepsini işaretle" vs "emin değilsen boş bırak" politikalarıyla iki kez puanlanır (`dusScoring` net formülü) — boş bırakma eğitimi veriyle verilir.
3. **Konu Isınması (mod #8):** herhangi bir üniteye girmeden önce opsiyonel 5 soruluk tanı seti; sonucu o oturumun `EXPOSURE_MIX`'ini bir defalık ayarlar (çok yanlış → wrongBefore ağırlığı artar).

**Done:** Ritüel modu baştan sona molasız akar (e2e); iki politika puanı aynı denemede yan yana görünür.

---

## 6. Menü / IA Yeniden Yapılanması (Faz 0'da başlar, her fazla büyür)

Mevcut: header ikonları (Sync/İstatistik/Hata Analizi/Ayarlar) + bento ana ekran; mobil menü (FluidNav) **bağlanmamış**; 19 view'a ulaşım dağınık.

1. **FluidNav'ı aktive et** (Faz 0): mobilde 5 link — Ana Sayfa / Çalış / Denemeler / İstatistik / Tekrar.
2. **"Çalış" şemsiye menüsü:** modlar çoğaldıkça (7→~12 varyant) ana ekran bento'su iki gruba ayrılır: **Çalış** (ünite, akıllı, zayıf, yanlış kuyruğu, sprint, süre-baskısı) ve **Sına** (günün denemesi, simülasyon, ritüel, net stratejisi). `viewRegistry.ts` zaten preset/HUD taşıyor — gruplama metadata'sı buraya eklenir.
3. **"Tekrar" sekmesi (Faz 1+5):** Yanlış Kuyruğu + Riskli 50 + Tekrar Kütüphanesi tek çatı altında — tekrar davranışının tek adresi.
4. **İstatistik 3-katman korunur** (Executive/Tactical/Deep Dive) — yeni grafikler katmanlara dağıtılır, v4.30 sadeleşme dersi unutulmaz: *her yeni grafik bir eskisini emekli etmeyi düşündürmeli*.
5. **Ayarlar birleştirme (Faz 0):** tek settings kaynağı `settingsStore`; `learning.ts` ağırlıkları için gizli "gelişmiş" panel **eklenmez** (over-engineering — kullanıcı tek kişi, dosyadan değişir).

---

## 7. Gerekli Şema Değişiklikleri (migration listesi)

| # | Değişiklik | Faz | Not |
|---|---|---|---|
| M1 | `question_stats` + `avg_time_s numeric`, `time_samples int` | 0 | MAX-merge kuralına uyumlu agregat |
| M2 | `exam_answers` + `confidence boolean null`, `error_tag text null`, `eliminated_options jsonb null` | 3 | Hepsi nullable — eski satırlar bozulmaz |
| M3 | `daily_exams.variant` kolonu veya `generate_daily_exam(variant)` parametresi | 1 | "Bugünün 20'si" için |
| M4 | `review_reports` tablosu (id, question_id, lesson, exam_date, storage_path, read_at) | 5 | RAG kütüphanesi |
| M5 | Legacy FSRS kolonları (`stability`, `difficulty`…) — **dokunma** (temizlik ayrı karar; `difficulty` stats.ts'te canlı — gemini.md ile çelişki önce çözülmeli) | — | Risk §9.4 |

Tüm migration'lar mevcut kurallara uyar: chunked write 10'arlı, `.or()` içinde `not.in` yok, lazy-load yasağına dokunulmaz.

---

## 8. Yapılmayacaklar (bilinçli kapsam dışı)

- **FSRS/tam SRS motoru:** proje kuralıyla yasak (v4.40'ta kaldırıldı); Faz 1'in gecikme merdiveni bilinçli olarak "aptal ve yeterli".
- **Çoklu kullanıcı / leaderboard / sosyal özellikler:** tek kullanıcı gerçeği.
- **Mobil native app, yeni framework, backend değişikliği:** stack sabit.
- **Sesli soru okuma, gece bildirimleri, pomodoro entegrasyonu:** fitness testi düşük (Ideate TEST fazında elendi) — süre kısıtında yer yok.
- **Soru üretim hattı (Python) değişiklikleri:** bu plan yalnız uygulama yüzeyi.
- **learning.ts ağırlıkları için UI:** dosyadan değişir; ayar ekranı şişkinliği over-engineering sinyali.

---

## 9. Riskler & Tuzaklar

1. **Over-engineering (TELOS C1/P3 — en büyük risk):** ~110 gün kala her faz "bu hafta kaç soru çözdürdü?" sorusuyla değerlendirilmeli. Kural: *bir faz, uygulamada geçen süreyi değil çözülen soru başına öğrenmeyi artırmalı.* Faz 4+ herhangi bir noktada durdurulabilir — Faz 0-2 çekirdektir.
2. **Egress nüksü:** yeni istatistikler `exam_answers` tam taramaları yapmamalı — agregat RPC tercih (v4.32 krizi dersi).
3. **Lazy-load yasağı:** hiçbir yeni özellik soru yüklemesini parçalamaz (README §7 kesin kural).
4. **`difficulty` kolonu çelişkisi:** gemini.md "legacy" diyor, `stats.ts` canlı kullanıyor — M5'ten önce netleştir, yanlış temizlik veri kaybettirir.
5. **Feature freeze disiplini:** Ekim 15'ten sonra yeni özellik yok; Kasım'a kadar uygulama "değişmeyen, güvenilir alet" olmalı.

---

## 10. Faz Bağımlılık Sırası (özet)

```
FAZ 0 (veri onarımı) ──► FAZ 1 (tekrar kuyruğu) ──► FAZ 3 (kalibrasyon kuyruğu besler)
        │                                                     
        ├──► FAZ 2 (süre verisi F0.2/F0.3'e bağlı)            
        └──► FAZ 4 (ders kırılımı F0.1'e bağlı)               
FAZ 5 (RAG kütüphanesi — bağımsız, Eylül)                     
FAZ 6 (prova — F2 pacing + F5.3 özet üzerine, Ekim başı)      
```

Sıralama ilkesi: önce veriyi düzelt (F0), sonra en yüksek getirili döngüyü kapat (F1), sonra sınav-becerisi çarpanlarını antrene et (F2-F3), en son cila (F4-F6). Toplam tahmini efor: **23–36 geliştirme günü** — 110 günün içine, günde ~2-3 saat geliştirme + ağırlıklı çalışma dengesiyle sığar; sıkışırsa kesim sırası sondan başa (F6 → F5 → F4).
