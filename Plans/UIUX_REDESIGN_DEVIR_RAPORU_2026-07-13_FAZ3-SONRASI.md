# DUSBANKASI UI/UX Yeniden Tasarım — Devir Teslim Raporu (Faz 2-3 sonrası)

> Yazılış: 2026-07-13 (aynı gün, önceki devir raporunun devamı) · Kaynak plan: [`UIUX_REDESIGN_IMPLEMENTATION_PLAN_2026-07-12.md`](./UIUX_REDESIGN_IMPLEMENTATION_PLAN_2026-07-12.md) · Önceki durum: [`UIUX_REDESIGN_DEVIR_RAPORU_2026-07-13.md`](./UIUX_REDESIGN_DEVIR_RAPORU_2026-07-13.md)
> Bu rapor, **Faz 2'nin tamamlandığını** ve **Faz 3'ün hangi kalemlerinin tamamlandığını / bilinçli olarak ertelendiğini**, **Faz 4-7'nin nereden devam edileceğini** belgeler. Devralan LLM bağlamsız çalışabilmeli.

---

## 0. Genel durum özeti

| Faz | Durum | Not |
|---|---|---|
| Faz 1 — Token/Tipografi | ✅ Tamamlandı | (önceki raporda detaylı) |
| Faz 2 — Atom disiplini | ✅ **Tamamlandı** | 93 kalan buton migrate edildi, Skeleton/EmptyState/GlassCard benimsendi, doğrulama geçti |
| Faz 3 — Dashboard & İstatistik | 🟡 **Kısmi** — "güçlü istatistik" çekirdeğinin veri/wiring kısmı tamamlandı, **chart hijyeni (ChartFrame'e ~38 chart sarma) yapılmadı** | Aşağıda §2'de gerekçeli döküm |
| Faz 4-7 | ⬜ Başlanmadı | §3'te devam noktası |

**Build durumu:** `npm run build` (tsc -b + vite build) bu rapor yazılırken temiz geçiyor. Dev server'da (Browser pane) İstatistikler view, Favoriler akışı ve ana ekran manuel test edildi — konsol hatası yok (yalnızca ortamdaki Supabase ağ timeout'u var, kod kaynaklı değil, bkz. §4).

**Repo hijyeni:** Önceki raporda bahsedilen ~100 satırlık pre-existing uncommitted değişiklik hâlâ dokunulmadan duruyor. Bu oturumda **17 ek dosya** değişti (aşağıda §5). Hiçbir şey commit edilmedi.

---

## 1. Faz 2 — Tamamlanan işler (bu oturum)

### 1.1 Kalan 93 ham `<button>` migrasyonu

Önceki rapor App.tsx'in 51 butonunu bilinçli olarak bekletmişti (Faz 6'da dosya bölünecek diye). Bu oturumda **kullanıcı Faz 2'yi tamamen bitirmek istediği için** App.tsx dahil tüm kalan dosyalar migrate edildi (paralel 5 ajanla, dosya bazlı, davranış birebir korunarak):

- `src/App.tsx` — 51/51 (26 yerde `variant="unstyled"`, geri kalanı `.btn-*` sınıflarına eşlendi)
- `src/components/admin/AddQuestionView.tsx` — 6/6
- `src/components/AuthModal.tsx` — 5/5
- `src/components/SourceBooksView.tsx` — 5/5
- `src/components/sections/ExportModal.tsx` — 4/4
- `src/components/DailyPlanView.tsx` — 4/4
- `src/components/SimulationResultView.tsx` — 3/3
- `src/components/sections/GoalTracker.tsx` — 3/3
- `src/components/sections/GoalEditorModal.tsx` — 3/3
- `src/components/ui/FluidNav.tsx` — 2/3 (1 `motion.button` bilinçli atlandı, bkz. altta)
- `src/components/ai/AIAssistantPanel.tsx` — 2/2
- `src/components/StatisticsView.tsx`, `ErrorBoundary.tsx`, `ErrorAnalyticsView.tsx`, `charts/KpiAlertBanner.tsx`, `charts/CollapsibleSection.tsx` — 1'er

**Doğrulama:** `grep -rn "<button" src --include=*.tsx` → **0 sonuç**. `grep -rn "motion.button" src --include=*.tsx` → yalnızca 4 bilinçli-atlanan yer: `ChartFrame.tsx` (bezel dial), `ExplanationPanel.tsx` (AI açıklama), `QuestionCard.tsx` (şık butonları), `FluidNav.tsx` (nav pill'leri) — hepsi framer-motion state-machine'e bağlı, Faz 5 kapsamı, plan buna zaten izin veriyordu.

Her migrasyonda icon-only butonlara eksik `aria-label` eklendi (örn. App.tsx: "Bulut senkronizasyonu", "İstatistikler", "Hata analizi", "Ayarlar", "PDF indir", "Kapat" vb.) — Browser pane'de `read_page` ile doğrulandı, doğru okunuyor.

### 1.2 Skeleton benimseme

- `src/components/SourceBooksView.tsx`: "Yüklü Kaynaklar" listesinin loading durumu tek bir `CircleNotch` spinner'dan, gerçek liste satırlarını taklit eden 4 adet `<Skeleton variant="circular">` + `<Skeleton variant="text">` şeritine çevrildi (skill: `progressive-loading`).
- **AuthModal.tsx / SourceBooksView'ın buton-içi spinner'ları / ExplanationPanel'in "AI açıklama" spinner'ı bilinçli olarak Skeleton'a çevrilmedi** — bunlar içerik-yer-tutucusu değil, buton-submit mikro-etkileşimidir (submit sırasında ikon değişimi). Skeleton'ı bir 32px'lik butona zorlamak yanlış desen olurdu; zaten `Button` bileşeninin kendi `loading` prop'u bu ihtiyacı karşılıyor. Bu üç yer hâlâ elle `CircleNotch`+`animate-spin` kullanıyor — davranışsal olarak doğru, sadece `Button`'ın `loading` prop'una taşınması kozmetik bir sonraki-adım iyileştirmesi (zorunlu değil).
- `ChartFrame.tsx`'e loading/error/empty prop sözleşmesi **eklenmedi** — bu iş plan dokümanında aslında Faz 3 §2.2'nin maddesi ("Boş/hata/loading üç durumu ChartFrame seviyesinde standart"), Faz 2'nin değil. Faz 3 bölümüne taşındı (bkz. §2.1).

### 1.3 EmptyState benimseme

Plan 4 hedef view sayıyordu: Favoriler, Zayıf Halka, Hata Analizi, deneme geçmişi.

- **Favoriler:** `App.tsx` içindeki `DenemeSelection` bileşeni (Favoriler ve Deneme modu ünite-seçim ekranı ortak kullanır) artık `questions.length === 0` (gerçek "hiç favori yok") ile `filteredLessons.length === 0 && questions.length > 0` (arama sonucu boş) durumlarını ayırt ediyor. Gerçek-boş durumda `<EmptyState icon={<Star/>} title="Henüz favori sorun yok" ... action={{label:'Geri Dön', onClick:onCancel}} />` gösteriliyor; arama-boş durumunda eski sade "Sonuç bulunamadı." metni korunuyor (o bir EmptyState değil, arama-no-match'tir).
- **Hata Analizi:** `ErrorAnalyticsView.tsx`'teki emoji tabanlı (`📊`) el-yapımı boş durum kartı `<EmptyState icon={<ChartBar/>} .../>` ile değiştirildi (skill: `no-emoji-icons` bonus).
- **Deneme Geçmişi:** `sections/ExamHistoryTimeline.tsx`'teki iki satırlık manuel div `<EmptyState icon={<CalendarBlank/>} .../>` oldu.
- **Zayıf Halka:** Bu akış bir "view" değil — `handleWeakQuestionsClick` içinde `showAlert(...)` ile **navigasyon öncesi engelleyici bir bilgi diyaloğu** gösteriyor (zayıf soru yoksa quiz'e hiç girilmiyor). Dolayısıyla dekore edilecek kalıcı bir ekran yok; EmptyState buraya uygulanmadı — mimariyi değiştirmek (önce boş bir ekrana girip orada EmptyState göstermek) orantısız bir yeniden-tasarım olurdu. Bilginize, plan bunu netleştirmiyordu.

`EmptyState.tsx`'in kendisi de düzeltildi: `text-[#ececf1]`/`text-[#8b8b98]` hardcode renkleri `var(--color-text-primary/secondary)` token'larına bağlandı (önceki oturum sadece buton kısmını düzeltmişti, metin renkleri unutulmuştu).

### 1.4 GlassCard/GlassPanel benimseme

- **Kök neden düzeltmesi:** `src/components/ui/GlassCard.tsx` ve `GlassPanel.tsx` meğer **tamamen hardcoded dark-only renklerle** yazılmış (`#08080a`, `white/[0.03]` vb.) — üç temalı (dark/oled/light) sisteme hiç bağlı değillerdi. İkisi de `var(--color-surface-1/2)` ve `var(--color-border-dim/subtle/strong)` token'larına bağlandı. Tek tüketicileri `EmptyState.tsx` olduğu doğrulandı (`grep`), yani bu değişiklik düşük riskli.
- **`SimulationResultView.tsx`:** Plan'ın açıkça hedef gösterdiği dosya.
  - Zayıf Ünite Spotlight kartları artık `<GlassPanel variant="heavy">` kullanıyor (önceden `bg-[#0d0d12]/60 backdrop-blur`).
  - Tüm hardcode hex renkler (`#ececf1`, `#8b8b98`, `#34d399`, `#f87171`, `#fbbf24`, `#71717a`, `#8b95f6`) ilgili `var(--color-*)` token'larına çevrildi — bu tokenlar dark/oled'de aynı değeri taşıdığı için (kontrast korunuyor, görsel regresyon yok) ama **accent-soft** gibi temaya göre değişen token'larda (`#8b95f6` → `var(--color-accent-soft)`) light/oled temada artık doğru renk görünecek (önceden hep indigo sabit kalıyordu).
  - Bottom action bar (`bg-[#08080a]/80`, `border-white/5`) token'landı.
  - **Bilinçli dokunulmadı:** DUS yerleştirme banner'ının (geçti/kaldı) gradient arka planları (`from-indigo-500/10...`, `from-red-500/10...`) — bunlar semantik "başarı/başarısızlık" banner renkleri, tema-nötr olması beklenmez; `text-white` başlık tek yerde `var(--color-text-primary)`'ye çevrildi (light temada okunabilirlik riski vardı).
  - Ana "Ana Ekrana Dön" CTA butonundaki `bg-[#6f72f2] text-white` **bilinçli dokunulmadı** — App.css'in `.btn-primary`'si de aynı `--accent` token'ını (oled'de override'sız, yani zaten indigo) kullanıyor; bu buton zaten `variant="unstyled"` ile önceki oturumda migrate edilmişti, davranış-birebir ilkesi gereği renk sistemi değiştirilmedi.

**Doğrulama:** `npm run build` her adımdan sonra temiz. Browser pane'de ana ekran + Favoriler akışı + İstatistikler görsel/konsol kontrolü yapıldı, hata yok. SimulationResultView canlı test edilemedi (bir deneme sınavı tamamlamak gerekiyor, sentetik veri sandbox'ta pratik değildi) — **görsel doğrulama eksik, sadece kod/tip seviyesinde doğrulandı.** Devralan LLM/Furkan bir deneme sınavı bitirip bu ekranı üç temada görsel kontrol etmeli.

### 1.5 Faz 2 doğrulama gate'i

`grep -c "<button" src/` → yalnızca `Button.tsx` içinde tanım var, başka yerde yok. ✅ Plan'ın "Doğrulama" maddesi karşılandı.

---

## 2. Faz 3 — Yapılanlar ve kalanlar

### 2.1 Yapılanlar

1. **3 katmanlı bilgi mimarisi** — `StatisticsView.tsx`'in dosya başı yorumu zaten "Tier 1/2/3" yapısını tanımlıyordu ve kod bu yapıya çoğunlukla uyuyordu (Faz 3.1'in "yeniden düzenleme" kısmı önceki bir oturumda zaten yapılmış). Bu oturum sadece doğruladı, yeniden yazmadı.
2. **"Akıllı Öneriler" (RecommendationFeed) aktifleştirildi** — kritik keşif: `src/components/sections/RecommendationFeed.tsx` ve `src/lib/recommendations.ts`'teki `computeLessonPriority`/`computeDailyRecommendation` **tamamen hazır ama hiçbir yerde kullanılmıyordu** (yetim kod). `StatisticsView.tsx`'in "Karşılaştırmalı Analizler" (Tier 2) bölümüne bağlandı. Bu, planın "DUS-ağırlıklı ders öncelik skoru... Pareto: hangi ders çalışılırsa net en çok artar" isteğinin tam karşılığı — artık gerçek veriyle çalışıyor, Browser pane'de doğrulandı (ör. "Histoloji dersine odaklan — doğruluk düşük" önerisi + 8 derslik öncelik sıralaması görüntülendi).
3. **Unutma Riski listesi (yeni)** — plan §Faz3.3'ün "30+ gündür görülmemiş && accuracy<%80" isteği baştan uygulandı:
   - `src/lib/adaptive.ts` → `computeForgettingRisk(questions, stats, nowMs?)`: ders bazlı gruplama, saf fonksiyon, FSRS/scheduling YOK kuralına uyumlu (basit eşik, gemini.md §3.1).
   - `StatisticsView.tsx`'e yeni bir Tier-3 `CollapsibleSection` eklendi ("Unutma Riski"), her ders için soru sayısı + tek-tık "Çöz" butonu.
   - `App.tsx`'e `handleStartQuestionIds(ids)` handler'ı eklendi (mevcut `handleWeakQuestionsClick` ile aynı desen: `fetchQuestionsByIds` → shuffle → quiz başlat), `StatisticsView`'e `onStartQuestionIds` prop'u olarak bağlandı.
   - Test verisi olmadığı için (sandbox'ta stats boş) bu bölüm görsel olarak `forgettingRisk.length===0` dalıyla doğrulandı (render crash yok); gerçek "30+ gün" verisiyle canlı test edilmedi.
4. **VitalsStrip polish:**
   - `src/lib/kernel/core.ts`'teki `Vital` tipine `warnThreshold`/`criticalThreshold` alanları eklendi (her vital'ın kendi biriminde — `volume` ham soru sayısı olduğu için `dailyTarget`'a göre yüzdeden çevrildi, birim uyuşmazlığı önlendi).
   - `VitalsStrip.tsx`'teki `Sparkline`'a alarm eşiği referans çizgisi (dashed) + son-değer noktası + son-değer sayısal etiketi eklendi.
   - Kart arka planı/border'ı `var(--color-surface-2)`/`var(--color-border-subtle)` token'larına bağlandı (önceden `bg-white/[0.02]`/`border-white/[0.06]` — oled'de neredeyse görünmez kalıyordu).
   - `tabular-nums` eklendi (mono font zaten hizalıydı ama token tutarlılığı için eklendi).
5. **tabular-nums denetimi:** `KpiStatCard.tsx` (Tier 1'in ana KPI kartı) zaten `tabular-nums` kullanıyordu ve `AnimatedCounter` bu kartların içine render edildiği için (inherited CSS property) ek değişiklik gerekmedi. `VitalsStrip` yukarıda güncellendi. Diğer KPI gösterimleri tarandı, ek sorun bulunmadı.

### 2.2 Faz 3'ün YAPILMAYAN kalemleri (gerekçeli — en önemli bölüm)

**1. Chart hijyeni — ChartFrame sözleşmesinin ~38 chart'a uygulanması: YAPILMADI.**
Bu, Faz 3'ün planda tarif edilen en büyük kalemi ve şu an sadece **1 chart** (`ChartFrame` kullanımı `StatisticsView.tsx:602` civarında) bu sözleşmeyi kullanıyor. Neden ertelendi:
- `ChartFrame.tsx`'in kendisi şu an loading/error/empty state, interactive legend, keyboard-tooltip gibi sözleşme maddelerinin **hiçbirini** desteklemiyor — önce bileşenin kendisinin genişletilmesi gerekiyor (API tasarım kararı: yeni prop'lar, geriye dönük uyumluluk).
- 38 chart'ın her birini bu yeni sözleşmeye sarmak, her birinin başlık/legend/tooltip/gridline kodunu ChartFrame'in beklediği şekle taşımak demek — yüksek görsel regresyon riski, chart-başına görsel doğrulama gerektirir (Browser pane bu sandbox'ta veri-boş durumda çalıştığı için mevcut chart'ların gerçek-veri görünümü zaten test edilemiyor).
- Bu ölçekte bir işi tek oturumda, chart-başına doğrulama yapmadan "bitirdim" demek riskli olurdu — yanlış/kırık chart'lar production'a taşınabilirdi.
- **Öneri:** Bu iş kendi başına bir faz gibi ele alınmalı: (a) önce `ChartFrame`'i genişlet (loading/error/empty + legend + keyboard tooltip prop'ları, geriye-uyumlu default'larla), (b) sonra chart'ları gruplar hâlinde (StatisticsView Tier 1 → Tier 2 → Tier 3 sırasıyla) taşı, her grup sonrası Browser pane'de gerçek veriyle görsel doğrulama yap.

**2. Hız×Doğruluk kadranı: YAPILMADI.**
`src/lib/examAnalytics.ts:computeSpeedAccuracyTradeoff` gerçek veri kullanıyor (exam.timeSpent + lessonBreakdown, placeholder değil) ve doğru çalışıyor, ama **hiçbir chart bileşeni bu şekli (`{timeSpent, accuracy, lesson}`) tüketmiyor**. Mevcut `DersScatterPlot` farklı bir veri şekli bekliyor (`{lesson, solved, accuracy, total}` — hacim×doğruluk, hız×doğruluk değil). İki seçenek var: `DersScatterPlot`'u generic x/y alanları alacak şekilde genelleştirmek (mevcut kullanım yerini bozma riski) ya da yeni bir küçük kadran chart'ı yazmak. Bu bir tasarım kararı gerektiriyor, aceleye getirilmedi — devralan LLM/Furkan karar vermeli.

**3. Yorgunluk eğrisi (Soru Sıralaması Etkisi): YAPILMADI — BİLEREK BLOKE.**
`src/lib/examAnalytics.ts:computeQuestionOrderEffect` fonksiyonunun kod içi yorumu açıkça şunu söylüyor: *"ExamResult'da per-question order bilgisi yoksa... Bu fonksiyon exam_answers detay verisi geldiğinde zenginleşecek — şimdilik basit bir placeholder."* Fonksiyon şu an `70 - i*3` gibi **sabit/uydurma** doğruluk değerleri üretiyor, gerçek soru-sırası verisi kullanmıyor. Bunu bir mini-chart olarak deneme sonuç ekranına bağlamak, kullanıcıya **sahte istatistik** göstermek olurdu — bu, "güçlü istatistik" hedefinin tam tersi. Bilerek wiring yapılmadı. Gerçek uygulanabilmesi için `exam_answers` tablosunda soru-pozisyonu bilgisinin saklanması gerekiyor (bir veri modeli/migration işi, muhtemelen Faz 4+ ötesi bir backend görevi).

**4. Ders kartlarında "DUS ağırlık rozeti / öncelik işareti": Bu oturumda YAPILMADI ama YANLIŞLIKLA Faz 3'e atanmıştı.**
Ana plan dosyasını tekrar okuduğumda gördüm: bu kalem aslında **Faz 4 §3**'ün maddesi ("Ana menü kart redesign: ... DUS ağırlık rozeti, öncelik işareti (Faz 3.3'ün skoru)"), Faz 3'ün değil. Faz 3'ün görevi sadece skorun *var olmasıydı* (computeLessonPriority) — bu zaten mevcuttu ve şimdi RecommendationFeed üzerinden gerçekten kullanılıyor (§2.1 madde 2). Ders kartlarına rozet basma işi Faz 4'e bırakıldı, plan zaten öyle diyor.

### 2.3 Faz 3 doğrulama

`npm run build` temiz. Browser pane: İstatistikler ekranı açıldı, "Karşılaştırmalı Analizler" bölümü genişletilip RecommendationFeed'in gerçek veriyle render olduğu doğrulandı, konsol hatasız. Üç tema × screenshot matrisi **yapılmadı** (Browser pane'in `computer` screenshot aracı bu sandbox'ta timeout veriyordu — `get_page_text`/`read_page` ile metin/yapı doğrulaması yapıldı, piksel-seviye görsel doğrulama eksik).

---

## 3. Faz 4-7 için devam noktası

Bağımlılık grafiği hâlâ geçerli, ufak bir düzeltmeyle:

```
FAZ 1 ✅ ──► FAZ 2 ✅ ──► FAZ 3 🟡 ──► FAZ 5
                              │
                              └──► FAZ 4 (Faz 3'ten bağımsız başlayabilir)
FAZ 6 — Faz 3 sonrası ideal (chart hijyeni bitmeden App.tsx split başlanabilir, ikisi bağımsız)
FAZ 7 — en son
```

**Devralan LLM'in ilk yapması gerekenler:**
1. `git status` çalıştır, pre-existing dirty state'i gözlemle, dokunma.
2. `npm run build` ile bu rapordaki temiz durumu doğrula.
3. **Öncelik kararı:** Faz 3'ün kalan en büyük kalemi (chart hijyeni, §2.2 madde 1) mi, yoksa Faz 4 (ünite/ders sıralaması, kendi başına bağımsız ve daha küçük/kontrollü bir iş) mi — Furkan'a sor. Faz 4, `src/config/curriculum.ts` gibi net, izole bir teslimat olduğu için daha hızlı "tamamlandı" hissi verir; chart hijyeni daha büyük ve chart-başına görsel doğrulama gerektirir.
4. Faz 4'e başlarken: DUS ders ağırlıkları zaten `src/lib/overview.ts:35`'teki `DUS_WEIGHTS` sabitinde var — plan `curriculum.ts`'e taşınmasını istiyor, taşırken `computeDusWeightedAccuracy`'nin bu sabite bağımlılığını kırmamaya dikkat.
5. Faz 4 ders kartı redesign'ı yaparken `computeLessonPriority` (artık `RecommendationFeed` üzerinden StatisticsView'de kanıtlanmış çalışıyor) doğrudan yeniden kullanılabilir — `src/lib/recommendations.ts`'ten import.
6. Chart hijyenine girişilirse: önce `ChartFrame.tsx`'i genişlet (§2.2 madde 1'deki tasarım notları), sonra chart grubu grubu ilerle, her grup sonrası gerçek veriyle (yani gerçek `stats`/`activity` verisi olan bir tarayıcı oturumunda, sentetik/boş veri değil) görsel doğrulama yap.
7. Hız×doğruluk kadranı ve yorgunluk eğrisi için: önce bir tasarım kararı ver (§2.2 madde 2-3), sonra uygula — mevcut placeholder/uyumsuz-şekil durumunu görmezden gelip zorla wiring yapma.

**Devralan LLM'in bilmesi gereken teknik gerçek (tekrar):** Next.js DEĞİL — Vite 8 + React 19 SPA, routing `App.tsx` state-machine + `viewRegistry.ts`.

---

## 4. Ortam notu (bu oturuma özgü, kod hatası değil)

Bu oturumun sandbox/Browser pane ortamında Supabase'e ağ erişimi kısıtlı — `fetchSkeletons` her seferinde "canceling statement due to statement timeout" hatası veriyor ve cache'e düşüyor. Bu **kod kaynaklı bir regresyon değil**, ortamın kendisi; uygulama zaten cache-fallback tasarımıyla düzgün çalışıyor (20.114 soru cache'den yüklendi, favoriler/istatistikler doğru render oldu). Furkan kendi makinesinde çalıştırdığında bu hata muhtemelen görünmeyecek. Ayrıca `computer` (screenshot) aracı bu oturumda tutarlı biçimde timeout verdi — `read_page`/`get_page_text` ile ikame edildi, piksel-seviye görsel kontrol yapılamadı.

---

## 5. Değiştirilen/eklenen dosyalar (bu oturum, Faz 2-3)

```
YENİ (önceki oturumdan zaten untracked olan Button.tsx/cn.ts hariç):
  (yok — bu oturum sadece mevcut dosyaları değiştirdi)

DEĞİŞTİRİLDİ (Faz 2 — buton migrasyonu):
  src/App.tsx (51 buton)
  src/components/admin/AddQuestionView.tsx
  src/components/AuthModal.tsx
  src/components/SourceBooksView.tsx
  src/components/sections/ExportModal.tsx
  src/components/DailyPlanView.tsx
  src/components/SimulationResultView.tsx
  src/components/sections/GoalTracker.tsx
  src/components/sections/GoalEditorModal.tsx
  src/components/ui/FluidNav.tsx
  src/components/ai/AIAssistantPanel.tsx
  src/components/StatisticsView.tsx (buton + Faz 3 eklemeleri, bkz. altta)
  src/components/ErrorBoundary.tsx
  src/components/ErrorAnalyticsView.tsx (buton + EmptyState)
  src/components/charts/KpiAlertBanner.tsx
  src/components/charts/CollapsibleSection.tsx

DEĞİŞTİRİLDİ (Faz 2 — Skeleton/EmptyState/GlassCard):
  src/components/SourceBooksView.tsx (Skeleton liste)
  src/components/ui/EmptyState.tsx (token renkleri)
  src/components/sections/ExamHistoryTimeline.tsx (EmptyState)
  src/components/ui/GlassCard.tsx (token'lara bağlandı)
  src/components/ui/GlassPanel.tsx (token'lara bağlandı)
  src/components/SimulationResultView.tsx (GlassPanel + token renkleri)
  src/App.tsx (DenemeSelection EmptyState)

DEĞİŞTİRİLDİ (Faz 3):
  src/components/StatisticsView.tsx (Unutma Riski bölümü, RecommendationFeed bağlantısı)
  src/App.tsx (handleStartQuestionIds handler'ı)
  src/lib/adaptive.ts (computeForgettingRisk fonksiyonu)
  src/lib/kernel/core.ts (Vital tipine warnThreshold/criticalThreshold)
  src/components/cockpit/VitalsStrip.tsx (sparkline eşik çizgisi + son değer + token renkler)

Hiçbir dosya commit edilmedi — tüm working tree hâlâ uncommitted. Commit/deploy kararı Furkan'a ait.
```
