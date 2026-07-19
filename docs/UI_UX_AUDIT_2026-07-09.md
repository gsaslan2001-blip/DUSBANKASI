# DUSBANKASI — UI/UX Denetim Raporu ve Entegrasyon Planı

> Tarih: 2026-07-09 · Kapsam: `src/components`, `src/theme`, `src/index.css`, `index.html`
> Referans kaynak: `~/.claude/skills/ui-ux-pro-max-skill-main` (MIT, 99 UX kuralı / 67 stil / 161 palet / 57 font eşleşmesi) ve `~/.claude/skills/Webdesign` (Claude Design orkestrasyonu).
> Not: Bu denetim ana Claude Code oturumunda doğrudan yapıldı — `Tools/Persona.ts` üzerinden `fable-5`/`gpt-5.5` zinciri bu ortamda `claude` CLI auth'u sağlanamadığı için (`claude auth status` → `loggedIn:false`, interaktif `claude login` bu sandboxta tamamlanamadı) çalıştırılamadı. İçerik derinliği aynı, sadece persona üslup katmanı yok.

## 1. Tasarım Sistemi

- **Var, tek kaynaklı ve olgun.** `src/theme/index.ts` — 3 tema (`dark`, `oled`, `light`) için `themeColors` nesnesi: glass/gradient/card/border/text/accent token'ları Tailwind class-string olarak tanımlı (satır 14-96). `semanticColors` (correct/incorrect/warning/info/purple/gold, satır 102-109) ve `fontSizes` (satır 112-116) de merkezi.
- Tailwind v4 `@theme` üzerinden (`src/index.css`) CSS değişkenleri (`--color-brand`, `--background`, `--foreground` vb.) besleniyor — dosyanın kendi yorumu "Single source of truth" diyor ve gerçekten öyle.
- **Boşluk:** Paylaşılan bir `Button` atomik bileşeni **yok**. `src/components/ui/` içinde 11 dosya var (Badge, BlurOrb, EmptyState, FluidNav, GlassCard, GlassPanel, GradientBorder, ProgressBar, Section, Skeleton, StatCard) ama Button yok — kod tabanında **57 ham `<button>`** kullanımı tespit edildi, her biri kendi `className` string'ini yazıyor.

## 2. Component Mimarisi ve Tutarlılık

- `GlassCard` var ama kullanım oranı düşük — `grep -rl GlassCard components` sadece **2 dosyada** eşleşti. Buna karşılık `src/components/SimulationResultView.tsx` gibi dosyalar `rounded-3xl` + custom shadow kombinasyonunu **kendi içinde yeniden yazıyor**, `theme/index.ts`'teki `glass`/`glassHeavy` token'larını kullanmak yerine.
- `Skeleton` bileşeni var (`components/ui/Skeleton.tsx`) ama **hiçbir yerde kullanılmıyor** (`grep -rl "<Skeleton" components` → 0 sonuç). Bunun yerine en az 3 dosyada (`AuthModal.tsx`, `quiz/ExplanationPanel.tsx`, `SourceBooksView.tsx`) ad-hoc `animate-spin` spinner'ları var.
- `EmptyState` bileşeni de düşük kullanımda (2 dosya).
- **Sonuç:** Tasarım token'ları güçlü ama component-seviyesinde disiplin zayıf — atomlar var, benimsenmiyor. Bu "iyi tasarlanmış ama az kullanılan sistem" DUS projenizin genel pattern'ine de benziyor (sistemi kurup gerçek kullanıma geçmeme).

## 3. Responsive / Mobile

- `sm:`/`md:`/`lg:` breakpoint kullanımı sadece 20 dosyada tespit edildi (67 component dosyasından). Cockpit ve quiz gibi yoğun ekranlarda responsive davranış component bazında değişken.
- `index.html` 35 satır — standart Vite şablonu, viewport meta mevcut (kontrol edildi).

## 4. Erişilebilirlik (a11y)

- **`aria-*` kullanımı:** 67 component dosyasından sadece **23'ünde** var. `role=` sadece 2 dosyada. `alt=` sadece 2 dosyada.
- **Charts klasörü nispeten iyi durumda:** 32 chart dosyasından 17'sinde `aria-*`, 18'inde legend/tooltip referansı var — grafik tarafı, genel component tarafından daha disiplinli.
- **Kritik boşluk — global focus göstergesi yoktu.** `src/index.css` içinde tek focus stili `.glass-input:focus` idi (satır 374, 401) — buton/link/kart gibi diğer tüm interaktif elemanlarda **hiçbir `:focus-visible` halkası tanımlı değildi**. Klavye kullanıcıları için "neredeyim" bilgisi kayboluyordu. **→ Bu turda düzelttim (bkz. Bölüm 6).**
- `prefers-reduced-motion` zaten uygulanmış (`src/index.css:424-434`, "FIX-012" etiketli) — projede daha önce bir a11y geçişi yapılmış, bu iyi bir sinyal.
- 16 dosyada `<button>` var ama dosya genelinde `aria-label` hiç geçmiyor (ör. `admin/AddQuestionView.tsx`, `ai/AIAssistantPanel.tsx`, `quiz/QuestionCard.tsx`, `quiz/QuizHeader.tsx`, `quiz/QuizNavigation.tsx`, `SourceBooksView.tsx`, `StatisticsView.tsx` — tam liste raporun sonunda). Bu bir sezgisel tarama; bazı butonlarda görünür metin etiketi olabilir, ama icon-only butonlar için tek tek doğrulama gerekiyor.
- `quiz/ExplanationPanel.tsx` iyi bir örnek: `role="dialog"` (satır 99), `aria-modal="true"` (satır 100), `aria-label="Kapat"` (satır 106) — bu pattern'in proje geneline yayılması gerekiyor.

## 5. Animasyon

- `framer-motion` + `react-spring` + D3 native transitions bir arada kullanılıyor — üç ayrı animasyon kütüphanesi aynı üründe. Tutarlı bir "motion dili" (süre/easing token'ı) merkezi olarak tanımlı değil; her component kendi `duration-500 ease-[cubic-bezier(...)]` değerini yazıyor (ör. `theme/index.ts:26` `cardHover`).
- Reduced-motion desteği var (yukarıda), bu olumlu.

## 6. Loading / Empty / Error State'leri

- `EmptyState` ve `Skeleton` atomları mevcut ama benimsenmemiş (Bölüm 2). Bu, ui-ux-pro-max'ın "progressive-loading" ve "empty-states" kurallarıyla doğrudan çelişiyor — atom var, disiplin yok.

## 7. Grafik / Chart Bileşenleri (`components/charts/`, 32 dosya)

- Beklenenin aksine **projenin en güçlü a11y alanı burası**: %53'ü aria etiketli, %56'sı legend/tooltip içeriyor.
- Zayıf nokta: 32 dosyanın 14'ünde hiç `aria-*` yok — bunlar muhtemelen daha "dekoratif" grafikler (sparkline, animated counter gibi) ama ui-ux-pro-max kuralı `screen-reader-summary` gereği her veri görselinin en az bir metinsel özetle desteklenmesi gerekiyor.

## 8. Genel Değerlendirme

**Güçlü yönler:**
- Merkezi, 3 temalı, token-tabanlı tasarım sistemi (`theme/index.ts`) — çoğu hobi projesinden çok daha olgun.
- Reduced-motion desteği zaten var; bu genelde atlanan bir detay.
- Chart tarafında a11y disiplini component tarafından daha iyi.
- Semantic renk sistemi (correct/incorrect/warning) net ve tutarlı.

**Zayıf yönler (öncelik sırasıyla):**
1. Global klavye focus göstergesi yoktu → **düzeltildi** (Bölüm 6/aşağı).
2. Paylaşılan `Button` atomu yok → 57 ham buton, tutarsız state (hover/disabled/loading) riski.
3. `Skeleton`/`EmptyState` atomları var ama kullanılmıyor → ad-hoc spinner'lar, tutarsız boş durumlar.
4. `GlassCard` az kullanılıyor → bazı dosyalar (`SimulationResultView.tsx`) kendi glass stilini yeniden yazıyor, tema güncellemesi bu dosyaları kaçırma riski taşıyor.
5. Üç ayrı animasyon kütüphanesi (framer-motion, react-spring, D3 transitions) — birleşik bir motion-token seti yok.
6. Icon-only butonlarda `aria-label` kapsamı doğrulanmamış (16 dosya, sezgisel tarama).

---

## 9. Uygulanan Değişiklik (bu turda)

**`src/index.css`** — `body` bloğunun hemen altına global `:focus-visible` kuralı eklendi:

```css
:focus-visible {
  outline: 2px solid var(--color-brand);
  outline-offset: 2px;
  border-radius: 4px;
}
```

Gerekçe: Düşük risk (sadece klavye/erişilebilirlik odaklı elemanlarda görünür, mouse tıklamasında tetiklenmez), sıfır component değişikliği, anında tüm uygulamaya yayılır, geri alması tek satır. `--color-brand` zaten `.glass-input:focus`'ta kullanılan aynı marka rengi — tutarlı.

## 10. Entegrasyon Planı — Kapsam Nedeniyle Beklemede Olan Kalemler

Aşağıdaki kalemler **kasıtlı olarak uygulanmadı** çünkü her biri onlarca dosyaya dokunan, canlı (Vercel prod) bir uygulamada geniş kapsamlı bir refactor gerektiriyor. Öncelik sırasına göre:

| # | Kalem | Etki | Dokunulacak dosya sayısı (tahmini) | Risk |
|---|-------|------|--------------------------------------|------|
| 1 | Paylaşılan `Button` atomu oluştur (`components/ui/Button.tsx`) + kademeli migrasyon | Yüksek (tutarlılık, a11y, bakım) | 57 kullanım noktası, kademeli | Orta — davranış regresyonu riski, tek seferde değil dosya dosya yapılmalı |
| 2 | `Skeleton`/`EmptyState` atomlarını mevcut ad-hoc loading/empty kod yerine geçir | Orta-Yüksek | ~10-15 dosya | Düşük-Orta |
| 3 | `GlassCard`/`GlassPanel` benimsemesini artır, `SimulationResultView.tsx` gibi dosyaları tema token'larına bağla | Orta | ~5-8 dosya | Düşük |
| 4 | Icon-only butonlarda `aria-label` denetimi (16 dosya tek tek) | Orta (a11y) | 16 dosya | Düşük |
| 5 | Birleşik motion-token seti (`theme/index.ts`'e `motion` nesnesi ekle: duration/easing sabitleri) + framer-motion/react-spring kullanımını buna bağla | Düşük-Orta | Yaygın ama küçük değişiklikler | Düşük |
| 6 | Dekoratif chart'lara (`AccuracySparkline`, `AnimatedCounter` vb.) `aria-label`/ekran okuyucu özeti ekle | Düşük (niş kullanıcı grubu) | ~14 dosya | Düşük |

**Öneri:** Bu kalemleri tek seferde otomatik uygulamak yerine, hangisiyle başlamak istediğini söyle (örn. "1 ve 4 ile başla") — her biri ayrı bir Claude Code oturumunda, ilgili dosyaları tek tek gözden geçirerek yapılmalı. Bu, canlı üründe geniş kapsamlı ve gözden geçirilmemiş bir toplu değişikliği önler.

---

### Ek: `aria-label` içermeyen `<button>` dosyaları (sezgisel tarama, tek tek doğrulama gerekir)

`admin/AddQuestionView.tsx`, `ai/AIAssistantPanel.tsx`, `charts/CollapsibleSection.tsx`, `cockpit/ParetoQueue.tsx`, `DailyPlanView.tsx`, `ErrorAnalyticsView.tsx`, `quiz/QuestionCard.tsx`, `quiz/QuizHeader.tsx`, `quiz/QuizNavigation.tsx`, `sections/ExportModal.tsx`, `sections/GoalEditorModal.tsx`, `sections/GoalTracker.tsx`, `SimulationResultView.tsx`, `SourceBooksView.tsx`, `StatisticsView.tsx`, `ui/EmptyState.tsx`
