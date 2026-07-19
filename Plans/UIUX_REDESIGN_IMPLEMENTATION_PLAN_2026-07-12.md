# DUSBANKASI — UI/UX Pro Max Yeniden Tasarım: Fazlı Implementation Planı

> Hazırlanış: 2026-07-12 · Kaynak: ui-ux-pro-max skill kural seti (99 UX kuralı, öncelik matrisi 1→10) + tam kod tabanı keşfi + `docs/UI_UX_AUDIT_2026-07-09.md`
> Hedef repo: `C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI` (canlı: odusbircanavari.vercel.app)

---

## 0. Context — Neden bu değişiklik?

Furkan, DUSBANKASI'nın **her komponentinin** taranıp geliştirilmesini istedi: tipografi (font/punto), grafikler, istatistikler, dashboard, ünite sıralaması, genel tema. Hedef: "son derece güçlü istatistikleri olan, hızlı, akıcı ve modern" bir uygulama. "Tüm APP'ı baştan yaratabilirsin" yetkisi verildi.

**Stratejik karar — baştan yazma DEĞİL, yerinde fazlı dönüşüm.** Gerekçe:
- Uygulama canlı üründe (Vercel prod), 12k+ soru, IndexedDB offline cache, Web Worker stats kernel, delta-sync altyapısı çalışıyor. Sıfırdan yazım bu olgun altyapıyı riske atar ve TELOS'taki P3/C1 (over-engineering tuzağı) ile doğrudan çelişir.
- Mevcut temel zaten güçlü: Tailwind v4 `@theme` token sistemi, 3 tema (dark/oled/light), ~38 özel D3 chart, Framer Motion. Sorun mimari değil, **disiplin ve cila**: atomlar var ama benimsenmemiş (57 ham `<button>`, kullanılmayan `Skeleton`), üç ayrı animasyon kütüphanesi, ünite sıralaması DB id'sine bağlı.
- Fazlı dönüşüm her fazın sonunda deploy edilebilir durumda kalır; baştan yazım haftalarca yarım ürün demektir.

**Teknik gerçek (kritik):** Proje Next.js DEĞİL — **Vite 8 + React 19 SPA**, TypeScript, Tailwind CSS v4 (CSS-first config, `tailwind.config.js` yok), Zustand, Supabase. Routing `src/App.tsx` içindeki `appState` state-machine + `src/config/viewRegistry.ts`. Bu planı uygulayan LLM `app/` router, server component, `next/font` varsaymamalı.

---

## 1. Tasarım Sistemi Kararı (ui-ux-pro-max sentezi)

Ürün tipi: **eğitim/sınav analitik dashboard'u** (data-dense, tek kullanıcı odaklı, uzun oturumlar, gece çalışması). Skill'in stil/renk/tipografi mantığıyla karar:

| Boyut | Karar | Gerekçe |
|---|---|---|
| **Stil** | Mevcut "Ethereal Glass" korunur ama **rafine edilir**: glass efekti sadece yüzey-2+ katmanlarda (kart, panel, modal); arka plan mesh-gradient sadeleştirilir; veri alanlarında düz `surface` (glass grafiklerle yarışmasın — skill kuralı `trend-emphasis`, `gridline-subtle`) | Marka kimliği zaten oturmuş; tutarlılık > yenilik |
| **Tema** | dark (varsayılan) / oled / light üçlüsü kalır; tüm yeni token'lar üç temada birden tanımlanır (`color-dark-mode`, `state-contrast-parity`) | Gece çalışma ağırlıklı kullanım |
| **Font** | Gövde: **Satoshi** kalır (Fontshare). Eklenecek: **sayısal veri için tabular-nums zorunluluğu** (`font-variant-numeric: tabular-nums`) tüm KPI/istatistik/timer alanlarında (skill: `number-tabular`). Mono: JetBrains Mono (zaten token'da) soru ID/debug alanları | Satoshi modern geometric sans, dashboard için doğru; layout shift'i tabular rakam çözer |
| **Punto skalası** | Tek tip ölçek tanımla ve `@theme`'e yaz: `12 / 14 / 16 / 18 / 21 / 28 / 36 / 48px` (minor third'e yakın). Gövde min **14px** (mevcut "normal" 14px kalır, mobilde inputlar 16px — iOS auto-zoom), line-height 1.6 gövde / 1.2 başlık / 1.0 display sayılar | Skill: `font-scale`, `readable-font-size` |
| **Renk** | Mevcut semantik set korunur: accent `#6f72f2`, correct `#34d399`, incorrect `#f87171`, warning `#fbbf24`, info `#38bdf8` + dv-* dataviz paleti. Yapılacak: **kontrast denetimi** — üç temada text-secondary/tertiary'nin 4.5:1 (gövde) ve 3:1 (büyük) sağladığı doğrulanıp gerekirse koyulaştırılır | Skill: `color-accessible-pairs`, `contrast-data` |
| **Motion** | **Tek kütüphane: framer-motion.** react-spring kaldırılır; D3 transitions sadece chart-içi veri geçişlerinde kalır. Merkezi motion token'ları: enter 200ms ease-out, exit 140ms ease-in, micro 150ms, page 300ms, stagger 40ms/öğe. Hepsi `src/lib/motion.ts`'te tek yerde | Skill: `motion-consistency`, `exit-faster-than-enter`, `stagger-sequence` |
| **İkon** | @phosphor-icons/react kalır; **tek weight standardı** (mevcut `thin` yerine veri-yoğun UI'da okunabilirlik için `regular`'a geçilir, tek karar tek yerde: `src/theme/index.ts`'e `iconWeight` sabiti). PDF export'taki emoji ikonlar Phosphor SVG'ye çevrilir | Skill: `no-emoji-icons`, `icon-style-consistent`, Stroke Consistency |

---

## 2. Faz Planı

Her faz bağımsız deploy edilebilir; sırayla uygulanır. Her fazın sonunda **Doğrulama** bölümü koşulur.

---

### FAZ 1 — Design Token Konsolidasyonu + Tipografi (temel, her şey buna oturur)

**Dosyalar:** `src/index.css`, `src/theme/index.ts`, `src/lib/motion.ts`

1. `src/index.css` `@theme` bloğuna ekle:
   - Tip ölçeği token'ları: `--text-xs: 12px` … `--text-display: 48px` + eşleşen line-height'lar (yukarıdaki skala).
   - `--font-numeric` utility: `.tabular { font-variant-numeric: tabular-nums; }` global utility class.
   - Spacing disiplini: 4px taban ritmi zaten Tailwind'de; ayrıca section-dikey-ritim token'ları `--space-section-sm/md/lg: 16/24/40px`.
   - Z-index skalası: `--z-base:0, --z-raised:10, --z-nav:40, --z-overlay:100, --z-modal:1000, --z-toast:1100` (skill: `z-index-management`). Kod tabanındaki ad-hoc `z-50` vb. değerler bu skalaya bağlanır.
2. `src/theme/index.ts`:
   - `fontSizes` nesnesini yeni skalaya göre güncelle (small 12 / normal 14 / large 16 kalır ama başlık/display kademeleri eklenir).
   - `motion` nesnesi ekle: `{ durations: {micro:150, enter:200, exit:140, page:300}, easings: {enter:'easeOut', exit:'easeIn', spring: SPRING} }` — `src/lib/motion.ts` bunu re-export eder, tüm componentler buradan tüketir.
   - `iconWeight = 'regular'` sabiti.
3. Üç temada (dark/oled/light) `--color-text-secondary/tertiary` kontrastını denetle (hesapla, WCAG 4.5:1/3:1) ve gerekirse değerleri düzelt — `.light` ve `.oled` override bloklarında (index.css 113-183).
4. Satoshi `@import`'una `font-display: swap` etkisi için Fontshare URL parametresi kontrol edilir; kritik ağırlıklar (400/500/700) dışındakiler (300/900) kullanım taranıp gereksizse import'tan çıkarılır (skill: `font-preload`).

**Doğrulama:** `npm run build` temiz; üç temada ana ekran görsel kontrol (Browser pane, `resize_window` light/dark); KPI kartlarında rakamlar tabular hizalı.

---

### FAZ 2 — Atom Disiplini: Button + Skeleton/EmptyState/GlassCard benimseme

Mevcut denetim raporunun (docs/UI_UX_AUDIT_2026-07-09.md §10) 1-2-3-4 kalemleri. **En yüksek tutarlılık kazancı burada.**

1. **`src/components/ui/Button.tsx` oluştur** — CVA zaten kurulu (kullanılmıyor), onunla:
   - Variant: `primary | secondary | ghost | danger | glass`; size: `sm | md | lg | icon`.
   - Zorunlu davranışlar: `:focus-visible` halkası (global kural zaten var), `disabled` opacity 0.45 + `cursor-not-allowed`, `loading` prop (spinner + `aria-busy`), press feedback `whileTap={{scale:0.97}}` (skill: `scale-feedback`, `loading-buttons`, `disabled-states`).
   - Min dokunma alanı: `md` ≥44px yükseklik; `icon` variant 44×44 (skill: `touch-target-size`).
2. **57 ham `<button>` migrasyonu — dosya dosya, davranış birebir korunarak.** Öncelik sırası: `quiz/*` (QuizNavigation, QuizHeader, QuestionCard, ExplanationPanel) → `StatisticsView.tsx` → `App.tsx` header/menü → geri kalanlar. Her dosyada migrasyon sırasında icon-only butonlara `aria-label` eklenir (denetim raporu ekindeki 16 dosya listesi checklist olarak kullanılır).
3. **Skeleton benimseme:** `AuthModal.tsx`, `quiz/ExplanationPanel.tsx`, `SourceBooksView.tsx`'teki ad-hoc `animate-spin` spinner'ları `<Skeleton>` (içerik şekilli) ile değiştir; dashboard chart'ları için `ChartFrame.tsx`'e `loading` prop + shimmer skeleton ekle (skill: `progressive-loading`, `loading-chart`).
4. **EmptyState benimseme:** boş veri gösteren her view (Favoriler, Zayıf Halka, Hata Analizi, deneme geçmişi) `<EmptyState>` + yönlendirici aksiyon butonu kullanır (skill: `empty-states`, `empty-data-state`).
5. **GlassCard:** `SimulationResultView.tsx` ve benzeri kendi glass stilini yazan dosyalar `GlassCard/GlassPanel` + tema token'larına bağlanır.

**Doğrulama:** `grep -c "<button" src/` → yalnızca Button.tsx içinde; klavye ile tüm ana akış gezilebilir (Tab sırası görsel sırayla uyumlu); Playwright e2e smoke (`npm run test` + mevcut e2e) yeşil.

---

### FAZ 3 — Dashboard & İstatistik Yeniden Tasarımı ("güçlü istatistik" çekirdeği)

**Dosyalar:** `src/components/StatisticsView.tsx`, `src/components/cockpit/VitalsStrip.tsx`, `src/components/charts/*`, `src/components/sections/*`, veri: `src/lib/overview.ts`, `src/lib/examAnalytics.ts` (Web Worker kernel — compute zaten hazır, iş görselleştirme katmanında)

1. **Bilgi mimarisi — 3 katman netleştirilir** (mevcut Tier yapısı korunur, içerik rafine edilir):
   - **Üst (hero, tek ekran):** 4 KPI (`KpiStatCard`: Doğruluk, Hacim, Tutarlılık, Kapsama) + `DusScoreGauge` (tahmini net + güven bandı) + `GoalRing`. Hepsi tabular-nums, `AnimatedCounter` ile; her kartta `TrendIndicator` (▲▼ + renk + metin — renk tek başına anlam taşımaz, skill: `color-not-only`).
   - **Orta:** `ContributionHeatMap` (GitHub-style aktivite), `TrendLineChart` (7/30/90 gün doğruluk trendi, brush-zoom), ders karşılaştırma (`SlopeGraph` veya yatay bar — mobilde yatay bar'a düşer, skill: `responsive-chart`), `RecommendationFeed`.
   - **Alt (CollapsibleSection):** derin analiz — `RadarChart` (ders profili), `DersScatterPlot` (hız×doğruluk), `TimeHistogram`, `ParallelCoordinates`, `ExamHistoryTimeline`, `WhatIfSimulator`.
2. **Chart hijyeni — tüm ~38 chart'a ortak `ChartFrame` sözleşmesi uygulanır:**
   - Her chart: başlık + tek satır özet cümle (`screen-reader-summary` için `aria-label` aynı metni taşır), legend görünür ve tıklanabilir toggle (`legend-interactive`), tooltip hem hover hem tıklama/klavye (`tooltip-keyboard`), gridline `--color-border-dim` (düşük kontrast), eksen etiketleri birim + TR locale sayı formatı (`Intl.NumberFormat('tr-TR')`, skill: `number-formatting`).
   - Boş/hata/loading üç durumu ChartFrame seviyesinde standart (`error-state-chart`: retry butonu).
   - Entrance animasyonları `prefers-reduced-motion`'da kapalı (mevcut destek chart'lara da bağlanır).
   - Dekoratif 14 chart'a (`AccuracySparkline`, `AnimatedCounter` vb.) `aria-label` (denetim §7).
3. **Yeni/iyileştirilen istatistikler (kernel'e küçük eklerle):**
   - **Unutma riski listesi:** `question_stats.last_seen` + accuracy'den "30+ gündür görülmemiş && accuracy<0.8" sorular — ders bazında sayı + tek tık "çöz" (mevcut `buildSmartQueue`'ya bağlanır).
   - **Hız×doğruluk kadranı:** `exam_answers.time_spent` zaten var; `computeSpeedAccuracyTradeoff` çıktısı DersScatterPlot'a bağlanır (yavaş-yanlış kadranı kırmızı vurgulu).
   - **Yorgunluk eğrisi:** `computeQuestionOrderEffect` (soru sırası → doğruluk düşüşü) deneme sonuç ekranına mini-chart olarak eklenir.
   - **DUS-ağırlıklı ders öncelik skoru:** `overview.ts`'teki `dusWeightedAccuracy` ders kartlarında "öncelik" rozeti olarak yüzeye çıkarılır (Pareto: hangi ders çalışılırsa net en çok artar).
4. **VitalsStrip:** sparkline'lara son değer etiketi + alarm eşiği çizgisi; `oled` temada kontrast denetimi.

**Doğrulama:** Dashboard'u dev server'da aç (Browser pane), üç temada screenshot; her chart'ta tooltip klavye erişimi spot-check; `?preview=sim` ile SimulationResult mock görünümü; kernel worker'da yeni hesapların unit testleri (`vitest`).

---

### FAZ 4 — Ünite/Ders Sıralaması + Ana Menü

**Dosyalar:** `src/App.tsx` (select-lesson/select-unit render'ları), `src/lib/supabase.ts` (`fetchSkeletons`), yeni `src/config/curriculum.ts`

1. **Sorun:** ders/ünite sırası DB `id.localeCompare` → fiilen rastgele. Çözüm: **`src/config/curriculum.ts`** — DUS müfredat sıralı ders listesi (temel bilimler → klinik: Anatomi, Histoloji-Embriyoloji, Fizyoloji, Biyokimya, Mikrobiyoloji, Patoloji, Farmakoloji → Protez, Restoratif, Endodonti, Ortodonti, Periodontoloji, Cerrahi, Pedodonti, Radyoloji…) + ders başına DUS soru ağırlığı (zaten `overview.ts:35`'te var — oradan import edilip tek kaynağa taşınır) + Phosphor ikon eşlemesi (App.tsx'teki inline name-match buraya taşınır). Listede olmayan ders sona, alfabetik düşer.
2. Ünite sıralaması: ünite adındaki önek numarası varsa doğal sıralama (`localeCompare(undefined, {numeric:true})`), yoksa müfredat sırası korunur; kullanıcıya sort toggle: müfredat / ilerleme % / zayıflık (accuracy asc).
3. **Ana menü (select-lesson) kart redesign:** her ders kartında — ikon, ders adı, ilerleme halkası (solved/total), doğruluk mini-bar, DUS ağırlık rozeti, "öncelik" işareti (Faz 3.3'ün skoru). Kart grid'i: mobil 2 sütun, md 3, lg 4; kartlar `GlassCard`, stagger entrance 40ms.
4. `select-unit` ekranı: arama korunur; ünite satırında ilerleme bar + son çalışma tarihi (`last_seen` max) + zayıf soru sayısı.

**Doğrulama:** Ders sırasının curriculum.ts sırasıyla eşleştiği ekranda kontrol; sort toggle üç modda doğru sıralıyor (unit test + görsel); 375px genişlikte yatay scroll yok.

---

### FAZ 5 — Quiz/Soru Çözme Deneyimi Cilası

**Dosyalar:** `src/components/quiz/*`, `src/lib/motion.ts`

1. **QuestionCard:** şık satırları min 44px dokunma alanı + 8px aralık; seçim feedback'i 100ms içinde (press state); doğru/yanlış açıklaması renk + ikon + metin üçlüsüyle (renk tek başına değil). Şık harfi (A-E) tabular hizalı rozet.
2. **Geçişler:** soru değişiminde yön-tutarlı slide (ileri: soldan, geri: sağdan — skill: `navigation-direction`), 200ms; ExplanationPanel açılışı alt sheet slide-up 200ms, kapanış 140ms.
3. **Timer (`QuizHeader`):** tabular-nums, son 60 saniyede warning rengine geçiş + ikon (renk-tek-başına-değil); süre bitiminde otomatik teslim öncesi 10sn görsel uyarı.
4. **Klavye:** mevcut `useKeyboardShortcuts` üstüne — 1-5/A-E şık seçimi, ←→ navigasyon, F favori; kısayol yardım overlay'i (`?` tuşu).
5. Confetti yalnızca `prefers-reduced-motion` kapalıyken (kontrol edilip yoksa guard eklenir).
6. **Sterile HUD modu** korunur (quiz'de dikkat dağıtıcı yok) — viewRegistry'de zaten tanımlı.

**Doğrulama:** Tam quiz akışı klavyeyle uçtan uca; mobil 375px'te şıklar tek elle erişilebilir; e2e quiz senaryosu yeşil.

---

### FAZ 6 — Performans & Akıcılık ("hızlı ve akıcı" şartı)

1. **App.tsx (2.236 satır) parçalama:** `select-lesson`, `select-unit`, dialog'lar ve PDF export ayrı dosyalara çıkarılır (`src/views/…`); görünümler `React.lazy` + route-level split ile yüklenir — quiz ve dashboard ayrı chunk (skill: `bundle-splitting`). PDF export (`jsPDF` benzeri ağır kod) dinamik import.
2. **react-spring kaldır** (Faz 1 motion kararı) → bundle küçülür; `@radix-ui/react-slot` kullanılmıyorsa Button'da Slot olarak değerlendir ya da kaldır.
3. **Liste sanallaştırma:** `select-unit` (ünite sayısı yüksek dersler) ve soru listeleri 50+ öğede sanallaştırılır — ağır bağımlılık yerine basit windowing (`content-visibility: auto` + `contain-intrinsic-size` CSS çözümü önce denenir; yetmezse `@tanstack/react-virtual`).
4. **CLS avcılığı:** chart'lar ve KPI kartları sabit `aspect-ratio`/min-height rezerve eder (`content-jumping`); AnimatedCounter genişlik zıplaması tabular-nums ile zaten çözülür.
5. Mesh-gradient `body::before` + grain `body::after` GPU maliyeti ölçülür; gerekirse `will-change` kaldırılıp statik ince doku ile değiştirilir (özellikle oled temada tamamen kapatılır).
6. Lighthouse hedefleri: Performance ≥90, CLS <0.1, INP <200ms (dev ölçümü Browser pane + `preview_logs`).

**Doğrulama:** `npm run build` sonrası chunk boyutları raporu (önce/sonra karşılaştırma); Lighthouse koşusu; quiz'de 60fps his kontrolü (uzun soru metinleriyle).

---

### FAZ 7 — Responsive + A11y Kapanış Denetimi

1. 67 component'ten yalnızca 20'sinde breakpoint var → tüm view'lar 375 / 768 / 1024 / 1440'ta gözden geçirilir; öncelik: StatisticsView (chart reflow), select-lesson grid, QuizView.
2. Mobilde `min-h-dvh` (100vh yerine) denetimi; safe-area padding'leri (alt nav/CTA varsa).
3. A11y kapanışı: heading hiyerarşisi (h1→h6 atlamasız), tüm modal'larda `role=dialog`+`aria-modal`+ESC+focus-trap (ExplanationPanel pattern'i AuthModal, ExportModal, GoalEditorModal'a kopyalanır), toast'lar `aria-live=polite`, form hataları `role=alert`.
4. Skill Pre-Delivery Checklist'in tamamı (§1-3 CRITICAL/HIGH maddeleri) tek tek işaretlenir; sonuç `docs/UI_UX_AUDIT_2026-07-XX.md` olarak güncellenmiş denetim raporuna yazılır.

**Doğrulama:** Klavye-yalnız tam tur; ekran okuyucu spot-check (NVDA); üç tema × üç viewport matris screenshot'ları.

---

## 3. Faz Sıralaması ve Bağımlılık

```
FAZ 1 (token/tipografi) ──► FAZ 2 (atomlar) ──► FAZ 3 (dashboard) ──► FAZ 5 (quiz)
                                    │
                                    └──► FAZ 4 (ünite sıralaması — Faz 2'den bağımsız başlayabilir)
FAZ 6 (performans) — Faz 3 sonrası ideal, kısmı erken alınabilir (App.tsx split)
FAZ 7 (kapanış denetimi) — en son
```

Her faz ayrı commit dizisi + `npx vercel --prod --yes` ile deploy edilebilir; riskli fazlar (2, 6) önce preview deploy ile doğrulanır.

## 4. Yeniden Kullanılacak Mevcut Varlıklar (yeni kod yazma!)

- Stats compute: `src/lib/overview.ts` kernel + Web Worker (`src/lib/kernel/*`) — Faz 3 sadece görselleştirir.
- `src/lib/examAnalytics.ts`: `computeSpeedAccuracyTradeoff`, `computeQuestionOrderEffect` hazır, UI'a bağlanmamış.
- `src/components/ui/` atomları (Skeleton, EmptyState, GlassCard, StatCard) — yenisi yazılmaz, benimsenir.
- `src/components/charts/ChartFrame.tsx` + `TooltipPortal.tsx` — chart sözleşmesinin taşıyıcısı.
- CVA + clsx + tailwind-merge kurulu ama atıl — Button bunlarla yazılır.
- `src/lib/motion.ts` `SPRING` + `viewTransitions` — motion token'larının evi.
- DUS ders ağırlıkları: `overview.ts:35` → `curriculum.ts`'e taşınır.

## 5. Genel Doğrulama Stratejisi

- Her faz: `npm run build` (tsc dahil) + `npm run test` (vitest) + mevcut Playwright e2e.
- Görsel: dev server Browser pane'de (`.claude/launch.json`'a `vite dev` girilir), üç tema × 375/768/1440 screenshot matrisi; değişen her view için önce/sonra.
- Prod'a çıkmadan preview deploy; e2e'nin prod veriye yazdığı biliniyor (bkz. hafıza: dusbankasi-audit) — e2e yalnızca lokal/preview'a koşulur.
- Faz 7 sonunda güncellenmiş denetim raporu `docs/`'a yazılır.
