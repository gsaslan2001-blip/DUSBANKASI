# DUSBANKASI UI V2 — Kapsamlı Tasarım Revizyonu Planı

## Context

DUSBANKASI_UI_V2, DUS (Diş Hekimliği Uzmanlık Sınavı) hazırlık platformunun production React uygulaması. Mevcut tasarım 7.5/10 seviyesinde (Apple/Linear estetiği, glassmorphism, 3 tema) ancak şu sorunlar var:

- **Parçalı tema sistemi**: CSS custom properties + Tailwind class string'leri arasında tutarsızlık
- **CSS tekrarı**: Aynı glass panel pattern'i 9+ yerde kopyala-yapıştır
- **Hedef**: Ethereal Glass vibe, 7/10 animasyon, D3.js görselleştirme, 3D öğeler, premium font, mikro-etkileşimler, skeleton loading

---

## Faz 1: Tasarım Sistemi Temeli (Foundation)

### 1.1 Font Sistemi
- **Inter → Satoshi** geçişi (premium, okunaklı, Türkçe karakter desteği tam, göz yormayan)
- `index.css` Google Fonts import: Satoshi 300-800 (Inter kaldır, Outfit kaldır)
- Font stack: `'Satoshi', -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif`
- `theme/index.ts` fontSizes güncelle: small=12px, normal=14px, large=16px (Satoshi daha geniş, 13px→12px)

### 1.2 Birleşik Token Mimarisi
**Hedef**: CSS custom properties + Tailwind v4 `@theme` + `theme/index.ts` hepsi TEK kaynaktan beslensin.

- `index.css`: Tailwind v4 `@theme` bloğu ile tüm renk token'ları tanımla (`--color-accent`, `--color-surface`, vb.)
- CSS custom properties (`:root` + `.light`): Sadece dinamik değişen değerler
- `theme/index.ts`: `@theme`'deki değişkenleri Tailwind utility class'lara dönüştüren tek kaynak
- Yeni token'lar: `glass`, `glassHeavy`, `glassPanel` (tekrar eden glass pattern'leri tokenlaştır)
- Kaldır: `theme.bg` (hiç kullanılmıyor)

### 1.3 Bileşen Primitive Kütüphanesi
`src/components/ui/` altında:

| Bileşen | Açıklama |
|---------|----------|
| `GlassPanel.tsx` | En çok tekrar eden glass container (9+ kullanım). `variant: 'default' \| 'heavy' \| 'elevated'` |
| `GlassCard.tsx` | Hover efektli interaktif kart. `accent?: string` sol renk çizgisi için |
| `StatCard.tsx` | StatisticsView'deki KPI kartı. Zaten var, güçlendir |
| `BlurOrb.tsx` | Arka plan dekoratif blur küre (6+ tekrar). `color`, `size`, `position` props |
| `ProgressBar.tsx` | Birleşik progress bar (5 farklı implementasyon var) |
| `Skeleton.tsx` | Skeleton loading bileşeni |
| `EmptyState.tsx` | Animasyonlu boş durum illüstrasyonu |
| `Badge.tsx` | Rozet bileşeni (şu an CSS class ile yapılıyor) |
| `GradientBorder.tsx` | Gradyan border wrapper (header card'larda kullanılıyor) |
| `Section.tsx` | Sayfa bölümü wrapper (başlık + alt metin + içerik) |

### 1.4 Animasyon Sistemi Güçlendirme
`src/lib/motion.ts`:
- `useMagneticHover(ref, strength?)` — manyetik hover efekti
- `useTilt(ref, maxDeg?)` — 3D tilt efekti
- `useRipple()` — tıklama dalga efekti
- `useParallax(ref, speed?)` — scroll parallax
- `useFloat(ref, amplitude?)` — floating animasyonu

Yeni keyframe'ler (`App.css`):
- `particle-burst` — doğru cevap patlaması
- `magnetic-return` — hover sonrası geri dönüş
- `shimmer-fast` — skeleton loading için hızlı shimmer

---

## Faz 2: Çekirdek Deneyim — Quiz & Çalışma Akışı

### 2.1 QuizView Sayfa Geçişleri
- Soru değişimlerinde Framer Motion `AnimatePresence` ile slide-left/slide-right
- Soru numarasına göre yön algılama (ileri = slide-left, geri = slide-right)

### 2.2 QuestionCard Mikro-etkileşimler
- Şıklara `useMagneticHover` (hafif çekim)
- Seçim anında `scale` bounce efekti
- Doğru cevap: emerald glow pulse + mini particle burst (Canvas)
- Fav butonu: gold sparkle mikro-animasyon

### 2.3 ExplanationPanel Partikül Kutlaması
- Doğru cevapta Canvas tabanlı konfeti/partikül patlaması
- Yanlış cevapta sade ama net kırmızı vurgu
- AI açıklama paneli: shimmer loading + fade-in içerik

### 2.4 AIAssistantPanel Glassmorphism Upgrade
- Mevcut responsive tasarım korunacak
- Arka plan: `backdrop-blur-3xl` + saturate efekti
- İçerik kartları: frosted glass
- Gradyan üst çizgi: anim-glow

---

## Faz 3: Veri Görselleştirme — D3.js Entegrasyonu

### 3.1 Kurulum
- `npm install d3 @types/d3`
- `src/components/charts/` dizini

### 3.2 Değiştirilecek Grafikler

| Mevcut | Yeni D3 | Dosya |
|--------|---------|-------|
| Div-based bar chart (Daily Activity) | D3 interaktif bar chart (hover tooltip, geçiş animasyonları) | `DailyActivityChart.tsx` |
| Div-based heat map (Unit Heat Map) | D3 interaktif heat map (tooltip, zoom, renk skalası) | `UnitHeatMap.tsx` |
| Div-based segment bar (Difficulty/Mastery) | D3 stacked bar / donut chart | `SegmentChart.tsx` |
| Lesson progress bars | D3 horizontal bar chart (animasyonlu dolgu) | `LessonProgressChart.tsx` |

### 3.3 React + D3 Entegrasyon Pattern'i
- `useRef` + `useEffect` ile D3 binding
- SVG container, responsive (ResizeObserver)
- Tailwind renk token'ları D3 scale'lere bağlanacak
- Framer Motion sayfa geçişleriyle uyumlu

---

## Faz 4: Dashboard & Ana Shell

### 4.1 App.tsx Ana Shell
- Framer Motion sayfa geçişleri (mevcut, güçlendir)
- Header: backdrop-blur glass, scroll'da shrink
- 3D arka plan elementi (React Three Fiber ile düşük poli geometrik şekiller, sadece dark temada)

### 4.2 Ders Seçim Kartları
- `Asymmetrical Bento` layout (high-end-visual-design)
- Ders kartları: frosted glass, ikon container hover scale + glow
- İlerleme: gradient progress bar (mevcut, iyileştir)

### 4.3 DailyPlanView
- GlassPanel ile tekrar eden CSS'leri kaldır
- Zayıf alan / yeni materyal bölümleri: BlurOrb + GradientBorder
- CTA butonu: manyetik hover + ripple efekti

### 4.4 StatisticsView
- D3 grafiklere geçiş
- StatCard grubu korunacak, güçlendirilecek
- StaggerChildren ile kart giriş animasyonu

---

## Faz 5: Mikro-etkileşimler & Durum Yönetimi

### 5.1 Skeleton Loading Sistemi
- `Skeleton` bileşeni: varyantlar (text, card, chart, circle)
- İstatistik sayfası: skeleton cascades
- Quiz yükleme: soru iskeleti

### 5.2 Empty State Sistemi
- `EmptyState` bileşeni: ikon, başlık, açıklama, opsiyonel CTA
- Animasyonlu giriş (float + fade)
- Her view için özelleştirilmiş empty state

### 5.3 Global Mikro-etkileşim Hook'ları
- `useMagneticHover`: butonlar, kartlar (Framer Motion `useMotionValue`)
- `useTilt`: StatCard, ders kartları
- `useRipple`: buton tıklamaları (Canvas)
- `useParallax`: DailyPlanView arka plan
- `useFloat`: dekoratif elementler

---

## Dosya Bazında İmplementasyon Sırası

### Faz 1 (Foundation)
1. **CREATE** `src/components/ui/GlassPanel.tsx`
2. **CREATE** `src/components/ui/GlassCard.tsx`
3. **CREATE** `src/components/ui/BlurOrb.tsx`
4. **CREATE** `src/components/ui/ProgressBar.tsx`
5. **CREATE** `src/components/ui/Skeleton.tsx`
6. **CREATE** `src/components/ui/EmptyState.tsx`
7. **CREATE** `src/components/ui/Badge.tsx`
8. **CREATE** `src/components/ui/GradientBorder.tsx`
9. **CREATE** `src/components/ui/Section.tsx`
10. **CREATE** `src/components/ui/index.ts` (barrel export)
11. **CREATE** `src/lib/motion.ts` (mikro-etkileşim hook'ları)
12. **MODIFY** `src/theme/index.ts` (yeni token'lar, font güncelleme)
13. **MODIFY** `src/index.css` (font değişimi, @theme bloğu, yeni CSS değişkenleri)
14. **MODIFY** `src/App.css` (yeni keyframe'ler, particle-burst, shimmer-fast)

### Faz 2 (Quiz)
15. **MODIFY** `src/components/quiz/QuizView.tsx` (sayfa geçişleri)
16. **MODIFY** `src/components/quiz/QuestionCard.tsx` (mikro-etkileşimler, GlassCard kullan)
17. **MODIFY** `src/components/quiz/ExplanationPanel.tsx` (partikül kutlaması)
18. **MODIFY** `src/components/quiz/QuizNavigation.tsx` (manyetik hover)
19. **MODIFY** `src/components/quiz/QuizHeader.tsx` (Badge kullan)
20. **MODIFY** `src/components/ai/AIAssistantPanel.tsx` (glassmorphism upgrade)

### Faz 3 (D3.js)
21. **BASH** `npm install d3 @types/d3` (C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI_UI_V2)
22. **CREATE** `src/components/charts/DailyActivityChart.tsx`
23. **CREATE** `src/components/charts/UnitHeatMap.tsx`
24. **CREATE** `src/components/charts/SegmentChart.tsx`
25. **CREATE** `src/components/charts/LessonProgressChart.tsx`
26. **CREATE** `src/components/charts/index.ts`
27. **MODIFY** `src/components/StatisticsView.tsx` (D3 grafiklere geç, GlassPanel kullan)

### Faz 4 (Dashboard)
28. **MODIFY** `src/components/DailyPlanView.tsx` (GlassPanel, BlurOrb, ProgressBar kullan)
29. **MODIFY** `src/components/SimulationResultView.tsx` (GlassPanel, StatCard kullan)
30. **MODIFY** `src/components/ErrorAnalyticsView.tsx` (GlassPanel kullan, tema token'larına bağla)
31. **MODIFY** `src/components/SourceBooksView.tsx` (GlassPanel, EmptyState)
32. **MODIFY** `src/components/admin/AddQuestionView.tsx` (GlassPanel, form iyileştirme)
33. **MODIFY** `src/components/AuthModal.tsx` (GlassPanel kullan)

### Faz 5 (Polish)
34. **MODIFY** `src/App.tsx` (shell iyileştirme, 3D arka plan, Skeleton/EmptyState entegrasyonu)
35. **MODIFY** `src/lib/stats.ts` (gerekirse, D3 veri formatı için)
36. **TEST** Tüm bileşenler çalışıyor, mevcut fonksiyonalite bozulmadı

---

## Dikkat Edilecek Noktalar

### Kesinlikle KORUNACAK
- Tüm mevcut fonksiyonalite (quiz, exam, deneme, simülasyon, istatistik, hata analizi, günlük plan, akıllı çalışma)
- localStorage + Supabase senkronizasyonu
- Klavye kısayolları
- Responsive tasarım (mobile bottom sheet'ler)
- `prefers-reduced-motion` desteği
- `pb-safe` iOS safe area
- Mevcut hook'lar ve lib dosyaları

### Kesinlikle DEĞİŞMEYECEK
- `/src/lib/supabase.ts`
- `/src/lib/adaptive.ts`
- `/src/lib/dateUtils.ts`
- `/src/lib/shuffle.ts`
- `/src/lib/auth.ts`
- `/src/lib/ai.ts`
- `/src/hooks/` (tüm hook'lar)
- `/src/types/app.ts` (mevcut tipler, sadece gerekirse ekleme)
- `/src/config/learning.ts`

### Performans
- D3 grafikleri: `requestAnimationFrame` ile render, `ResizeObserver` ile responsive
- 3D: Sadece `settings.theme === 'dark'` iken render, `prefers-reduced-motion` ile disable
- Tüm animasyonlar: GPU hızlandırmalı (`will-change`, `transform3d`)
- Canvas efektleri: maksimum 60fps, düşük partikül sayısı

---

## Verification

1. `npm run dev` ile uygulama başlat
2. Tüm view'leri gez: ders seç → ünite seç → quiz → sonuç → geri dön
3. Deneme oluştur, simülasyon başlat, istatistikleri kontrol et
4. Tema değiştir (dark → oled → light), her temada görünüm kontrolü
5. Mobil görünüm testi (responsive)
6. `npm run build` başarılı
7. `npm test` mevcut testler geçiyor
