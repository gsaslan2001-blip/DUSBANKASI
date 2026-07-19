# DUSBANKASI UI/UX Yeniden Tasarım — Devir Teslim Raporu (Faz 1-2 sonrası)

> Yazılış: 2026-07-13 · Kaynak plan: [`UIUX_REDESIGN_IMPLEMENTATION_PLAN_2026-07-12.md`](./UIUX_REDESIGN_IMPLEMENTATION_PLAN_2026-07-12.md)
> Bu rapor, plandaki **Faz 1 ve Faz 2'nin ne kadarının tamamlandığını**, **kalan Faz 3-7'nin nereden devam edileceğini** ve devralan LLM'in bağlamsız çalışabilmesi için gereken tüm ayrıntıları içerir. Ana plan dosyası hâlâ tek kaynak — bu rapor onu güncellemez, üzerine **durum** ekler.

---

## 0. Genel durum özeti

| Faz | Durum | Not |
|---|---|---|
| Faz 1 — Token/Tipografi | ✅ **Tamamlandı** | `npm run build` temiz, doğrulandı |
| Faz 2 — Atom disiplini | 🟡 **Kısmi** — Button.tsx üretildi + öncelikli dosyalar migrate edildi, ~93 ham `<button>` kaldı | Skeleton/EmptyState/GlassCard benimseme **başlamadı** |
| Faz 3-7 | ⬜ Başlanmadı | Plandaki sıra ve bağımlılıklar geçerli |

**Build durumu:** `npm run build` (tsc -b + vite build) bu rapor yazılırken temiz geçiyor. Dev server'da (`Deneme Modu` akışı) quiz view manuel test edildi — soru seçme, favorileme, AI açıklama, önceki/sonraki/boş geç butonları çalışıyor, ekran okuyucu adları (aria-label) doğru okunuyor.

**Önemli uyarı — repo hijyeni:** Bu oturuma başlarken repoda **100 satırlık pre-existing uncommitted değişiklik** vardı (40 silinmiş dosya — çoğu kök dizindeki eski rapor/script `.md`/`.txt`/`.py` dosyaları —, 29 değiştirilmiş, 31 yeni). Bu, benim bu oturumda yaptığım işten bağımsız, muhtemelen Furkan'ın kendi temizlik çalışması. **Dokunmadım, commit etmedim.** Devralan LLM önce `git status` çalıştırıp bu durumu görecek — panik yapmasın, sadece kendi Faz 3+ değişikliklerini bu mevcut kirli working tree'nin üzerine ekleyecek. Commit atmadan önce Furkan'a bu 100 değişikliğin ne olduğunu sormak gerekebilir.

---

## 1. Faz 1 — Tamamlanan işler (detay)

Dosyalar: `src/index.css`, `src/theme/index.ts`, `src/lib/motion.ts`

1. **Punto skalası** `src/index.css` `@theme` bloğuna eklendi: `--text-xs(12)` … `--text-display(48)` + eşleşen `--text-*--line-height` (Tailwind v4'ün native `--text-*--line-height` eşleştirme sözdizimi kullanıldı — ayrı bir `--leading-*` token seti gerekmedi).
2. **`.tabular` utility** eklendi (Tailwind v4 `@utility tabular { font-variant-numeric: tabular-nums; }`, `@theme` bloğunun dışında, dosya kökünde). **Henüz hiçbir KPI/istatistik bileşenine uygulanmadı** — bu Faz 3'ün işi (VitalsStrip, KpiStatCard, AnimatedCounter vb.).
3. **Spacing (`--space-section-sm/md/lg`)** ve **z-index skalası (`--z-base/raised/nav/overlay/modal/toast`)** token olarak eklendi. **Kod tabanındaki ad-hoc `z-50` vb. değerler henüz bu skalaya bağlanmadı** — bu bir sonraki adımın (Faz 3/7) işi; `grep -rn "z-\[" src --include=*.tsx` ve `grep -rn "\bz-[0-9]" src --include=*.tsx` ile ad-hoc kullanımlar taranabilir.
4. **Kontrast düzeltmesi** (WCAG hesabı yapıldı, `(L+0.05)/(0.05)` formülüyle):
   - Dark `--color-text-tertiary`: `#71717a` → `#7d7d87` (önceki ~4.06:1 → ~4.5:1)
   - Light `--color-text-tertiary`: `#a1a1aa` → `#75757e` (önceki ~2.57:1 → ~4.5:1, **en kritik düzeltme** — önceki değer AA'yı hiç geçmiyordu)
   - OLED `--color-text-tertiary`: `#555555` → `#757575` (önceki ~2.81:1 → ~4.5:1)
   - `text-secondary` üç temada da zaten ≥4.5:1 idi, dokunulmadı.
5. **Satoshi font-weight taraması:** `font-thin`/`font-light` (300) kullanımı **0** çıktı → Fontshare import'undan `300` kaldırıldı (`400,500,700,900` kaldı). `font-black` (900) 96 yerde kullanılıyor, dokunulmadı. `display=swap` zaten mevcuttu.
6. `src/theme/index.ts`: `fontSizes` yeni skalayla genişletildi (`xs/sm/base/lg/xl/2xl/3xl/display`, eski `small/normal/large` **korundu** — geriye dönük uyumluluk, mevcut kullanım yerlerini kırmamak için); `motion` objesi eklendi (`durations`, `easings`); `iconWeight = 'regular'` sabiti eklendi (**henüz Phosphor ikon çağrılarına uygulanmadı** — mevcut ikonların çoğu `weight` prop'unu hiç geçmiyor, varsayılan `regular` zaten Phosphor'un default'u, yani bu büyük ölçüde no-op; asıl iş `weight="thin"` geçen ~birkaç yeri `iconWeight` sabitine bağlamak, bkz. `ExplanationPanel.tsx`'te `weight="thin"` kullanımları).
7. `src/lib/motion.ts`: `theme/index.ts`'teki `motion` objesini `MOTION` adıyla re-export eder hâle getirildi. **Not:** dosyada zaten önceden bir `SPRING` token seti vardı (muhtemelen erken bir Faz 1 denemesinden kalma) — ona dokunulmadı, `MOTION` yeni eklendi. İki sistem şu an paralel var; Faz 3+'ta component'ler hangisini kullanacağına karar verirken `SPRING` (spring-fizik presetleri) ile `MOTION.durations/easings` (ham ms/easing) birbirini tamamlıyor, çakışmıyor.

**Faz 1'den kasıtlı olarak atlanan:** react-spring kaldırma (Faz 6'nın işi, plan da öyle diyor).

---

## 2. Faz 2 — Yapılanlar ve kalanlar

### 2.1 Yapılanlar

- **`src/components/ui/Button.tsx`** oluşturuldu (CVA ile). Kritik tasarım kararı: **App.css'teki mevcut `.btn`/`.btn-primary`/`.btn-secondary`/`.btn-ghost`/`.btn-danger`/`.btn-sm`/`.btn-md`/`.btn-lg` CSS sınıfları yeniden kullanıldı** (yeniden yazılmadı) — böylece görsel davranış migrate edilen her yerde birebir korundu. Ek olarak `variant="unstyled"` eklendi (cva şemasına yok, App.css'te de karşılığı yok) — tamamen custom renklendirilen (inline `style` veya bg-red-500/... gibi) butonlar için `.btn`'in sadece tactile (`active:scale`) davranışını alıp renk sınıfı almaması gerekiyordu, bu varyant o ihtiyacı karşılıyor.
  - Props: `variant` (`primary|secondary|ghost|danger|glass|unstyled`), `size` (`sm|md|lg|icon` — `icon` 44×44px zorunlu dokunma alanı), `asChild` (Radix Slot), `loading` (spinner + `aria-busy`).
  - `disabled` durumu App.css'in mevcut `.btn:disabled { opacity:0.3 }` kuralına devrediliyor — plan taslağı 0.45 öneriyordu ama mevcut davranışı bozmamak seçildi (bkz. §3 Kararlar).
  - `src/components/ui/index.ts`'e export edildi.
  - `src/lib/cn.ts` oluşturuldu (`clsx` + `tailwind-merge`), Button bunu kullanıyor.
- **Migrate edilen dosyalar** (ham `<button>` → `<Button>`, davranış birebir + eksik `aria-label`'lar eklendi):
  - `src/components/quiz/QuizNavigation.tsx` (3/3)
  - `src/components/quiz/QuizHeader.tsx` (6/6 — overflow menü artık `aria-label="Soru işlemleri menüsü"` + `aria-haspopup`/`aria-expanded`/`role="menu"`/`role="menuitem"` aldı, önceden hiçbiri yoktu)
  - `src/components/quiz/QuestionCard.tsx` (1/1 — sadece favori yıldız butonu; **soru şıkkı butonları (`motion.button`, ~5 adet/soru) BİLİNÇLİ OLARAK migrate edilmedi** — bkz. §2.2)
  - `src/components/quiz/ExplanationPanel.tsx` (2/3 — görsel büyütme + zoom kapatma migrate edildi; **AI açıklama `motion.button` migrate edilmedi**, bkz. §2.2)
  - `src/components/ui/EmptyState.tsx` (1/1)
  - `src/components/StatisticsView.tsx` (2/3 — üstteki "Hedefler"/"Dışa Aktar"; accordion toggle satırı 952 migrate edilmedi)
- **Build/test doğrulaması:** `npm run build` her adımdan sonra çalıştırıldı, temiz. Dev server'da Browser pane ile quiz akışı manuel test edildi (bkz. §0).

### 2.2 Bilinçli olarak migrate EDİLMEYEN buton türleri (gerekçeli)

Plan "davranış birebir korunarak" diyor; aşağıdaki butonlar `framer-motion`'ın `variants`/`animate`/`whileHover` state machine'ine bağlı, plain `Button` (motion olmayan) bileşenine çevrilirse ya stagger orkestrasyonu ya da cevap-doğru/yanlış animasyon state'i kırılır:

- `QuestionCard.tsx` — şık satırları (`motion.button`, `whileHover`/`whileTap`/`animate={isThisCorrect...}`)
- `ExplanationPanel.tsx` — "AI AÇIKLAMA" butonu (`variants={staggerChild}`, ebeveyn `staggerParent`'a bağlı)

**Öneri:** Bu iki bespoke motion-button türü Faz 5'in kapsamı (Quiz cilası) — orada `Button`'ın bir `motion` varyantı (`motion.create(Button)` veya ayrı `MotionButton` sarmalayıcı) tasarlanıp bu yerler ona taşınabilir. Zorla şimdi migrate etmeye ÇALIŞMAYIN — regresyon riski yüksek.

### 2.3 Kalan ham `<button>` sayımı (bu rapor yazılırken)

```
src/App.tsx                          51   ← en büyük blok, aynı zamanda Faz 6'da parçalanacak dosya
src/components/admin/AddQuestionView.tsx   6
src/components/AuthModal.tsx                5
src/components/SourceBooksView.tsx          5
src/components/sections/ExportModal.tsx     4
src/components/DailyPlanView.tsx            4
src/components/sections/GoalEditorModal.tsx 3
src/components/sections/GoalTracker.tsx     3
src/components/SimulationResultView.tsx     3
src/components/ai/AIAssistantPanel.tsx      2
src/components/ui/FluidNav.tsx              2
src/components/charts/CollapsibleSection.tsx 1
src/components/charts/KpiAlertBanner.tsx    1
src/components/ErrorAnalyticsView.tsx       1
src/components/ErrorBoundary.tsx            1
src/components/StatisticsView.tsx           1  (accordion toggle, satır ~952)
TOPLAM: 93
```
Doğrulama komutu: `grep -rc "<button" src --include="*.tsx" | grep -v ":0"`

**Öncelik önerisi (devralan LLM için):** App.tsx'in 51 butonu tek başına en büyük risk — dosya 2236 satır ve Faz 6'da parçalanacak. İki seçenek var: (a) Faz 2'yi App.tsx'e girmeden şimdilik burada bırakıp Faz 6'da dosya bölündükten sonra her yeni alt-dosyada migrate etmek (daha az çakışma riski, plan sırasına da uyar — Faz 6 App.tsx'i zaten `src/views/…`'e taşıyor), ya da (b) App.tsx'i olduğu gibi bırakıp şimdi migrate edip Faz 6'da bölünen dosyalara `Button` importunun zaten var olmasını sağlamak. **(a) önerilir** — aynı dosyayı iki fazda da büyük ölçüde değiştirmek gereksiz git-churn yaratır.

### 2.4 Faz 2'nin HİÇ başlamayan kalemleri

- **Skeleton benimseme** (`AuthModal.tsx`, `quiz/ExplanationPanel.tsx`, `SourceBooksView.tsx`'teki `animate-spin` spinner'ların `<Skeleton>` ile değişimi) — dokunulmadı.
- **EmptyState benimseme** (Faz 2 plan §3: Favoriler/Zayıf Halka/Hata Analizi/deneme geçmişi boş durumları) — dokunulmadı. `EmptyState` bileşeni kendisi düzeltildi (§2.1) ama diğer view'larda kullanımı taranmadı.
- **GlassCard benimseme** (`SimulationResultView.tsx` ve benzerleri) — dokunulmadı.
- **Icon-only butonlara toplu `aria-label` taraması** — sadece migrate edilen dosyalarda yapıldı (QuizHeader, QuestionCard, ExplanationPanel). Kalan 93 buton arasında icon-only olanlar taranmadı; `grep -rn "<button" src --include=*.tsx -A2 | grep -B2 "Icon\|<[A-Z][a-zA-Z]* size="` ile başlangıç noktası bulunabilir.

**Doğrulama gate'i (plan §Faz2 sonu):** `grep -c "<button" src/` → "yalnızca Button.tsx içinde" hedefi **henüz karşılanmıyor** (93 kalan). Bu, Faz 2'nin resmen "tamamlandı" sayılamayacağının kanıtı.

---

## 3. Bu oturumda alınan kararlar (plan dışı, gerekçeli)

1. **Button.tsx mevcut `.btn-*` CSS sınıflarını sarmalıyor, yeniden Tailwind arbitrary-value ile yazmıyor.** İlk taslak (Tailwind-native cva) yazıldı ama App.css'te zaten olgun bir `.btn` sistemi (üç temalı override'larıyla) bulununca terk edildi — iki paralel stil sistemi yaratmak yerine tek kaynağa bağlanmak tercih edildi. Devralan LLM App.css'teki `.btn-*` sınıflarını değiştirirse Button.tsx otomatik etkilenir (bu istenen davranış).
2. **`variant="unstyled"` eklendi** — planda yok ama App.css taramasında, birçok butonun (özellikle QuizHeader menü öğeleri, StatisticsView header butonları) hiçbir `.btn-{variant}` sınıfı kullanmadan tamamen custom stillendirildiği görüldü. Bu varyant olmadan migrasyon ya zorla bir renk sınıfı dayatıp görsel regresyona yol açacaktı ya da Button'ı bu durumlar için kullanılamaz hale getirecekti.
3. **`disabled` opacity 0.3'te bırakıldı** (App.css `.btn:disabled`), plan taslağının önerdiği 0.45'e **geçilmedi** — "davranış birebir korunarak" talimatı, soyut plan sayısından önceliklidir. Faz 7 (a11y kapanışı) sırasında bilinçli bir karar olarak 0.45'e geçilmek istenirse, tek satır CSS değişikliği (`App.css:266`).
4. **Motion-bağlı butonlar (§2.2) migrate edilmedi** — regresyon riski, plan'ın "davranış birebir" ilkesi.
5. **App.css'teki `.btn-success` sınıfı Button.tsx'e eklenmedi** (cva şemasında yok) — kod taramasında hiçbir yerde kullanılmadığı görüldü (`grep -rn "btn-success" src` → 0 sonuç dışında tanım). Kullanılmayan ölü CSS; Faz 7 kapanışında silinmesi düşünülebilir, plan buna değinmiyor, bilginize.

---

## 4. Faz 3-7 için devam noktası

Plan dosyasındaki sıralama ve bağımlılık grafiği (`§3 Faz Sıralaması`) hâlâ geçerli:

```
FAZ 1 ✅ ──► FAZ 2 🟡 ──► FAZ 3 ──► FAZ 5
                  │
                  └──► FAZ 4 (Faz 2'den bağımsız başlayabilir)
FAZ 6 — Faz 3 sonrası ideal, App.tsx split kısmı erken alınabilir
FAZ 7 — en son
```

**Devralan LLM'in ilk yapması gerekenler:**
1. `git status` çalıştır, §0'daki 100-satırlık pre-existing durumu gözlemle, dokunma.
2. `npm run build` çalıştırıp bu rapordaki temiz durumun hâlâ geçerli olduğunu doğrula.
3. Faz 2'yi bitirmek mi (Skeleton/EmptyState/GlassCard benimseme + kalan 93 buton), yoksa Faz 3'e geçmek mi — kullanıcıya sor (plan bağımlılık grafiğinde Faz 3 Faz 2'yi bekliyor ama pratikte Faz 3 dashboard/chart işi, buton migrasyonundan büyük ölçüde bağımsız; kullanıcı tercih edebilir).
4. Faz 4 (ünite/ders sıralaması) Faz 2'den bağımsız — paralel/önce alınabilir, `src/config/curriculum.ts` henüz oluşturulmadı.
5. Faz 3'e başlarken `.tabular` utility'sinin (Faz 1'de üretildi, §1.2) KPI/istatistik alanlarına uygulanması Faz 3'ün doğal ilk adımı olur — token zaten hazır, sadece tüketim eksik.

**Devralan LLM'in bilmesi gereken teknik gerçek (plan §0'dan tekrar):** Next.js DEĞİL — Vite 8 + React 19 SPA, routing `App.tsx` state-machine + `viewRegistry.ts`. `app/` router, server component, `next/font` varsayma.

---

## 5. Değiştirilen/eklenen dosyalar (bu oturum)

```
YENİ:
  src/lib/cn.ts
  src/components/ui/Button.tsx

DEĞİŞTİRİLDİ:
  src/index.css                          (Faz 1: token'lar, kontrast, font import)
  src/theme/index.ts                     (Faz 1: fontSizes, motion, iconWeight)
  src/lib/motion.ts                      (Faz 1: MOTION re-export)
  src/components/ui/index.ts             (Faz 2: Button export)
  src/components/ui/EmptyState.tsx       (Faz 2: Button kullanımı)
  src/components/quiz/QuizNavigation.tsx (Faz 2)
  src/components/quiz/QuizHeader.tsx     (Faz 2)
  src/components/quiz/QuestionCard.tsx   (Faz 2, kısmi)
  src/components/quiz/ExplanationPanel.tsx (Faz 2, kısmi)
  src/components/StatisticsView.tsx      (Faz 2, kısmi)
```

Hiçbir dosya commit edilmedi — bu oturumun değişiklikleri de dahil tüm working tree hâlâ uncommitted. Commit/deploy kararı Furkan'a ait.
