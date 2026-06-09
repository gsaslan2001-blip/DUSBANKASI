# Delegation Skill Entegrasyon Raporu — DUSBANKASI Projesi

**Hazirlayan:** Atlas (Marcus Webb — Battle-Scarred Leader Agent)
**Tarih:** 30 Mayis 2026
**Kapsam:** DUSBANKASI projesine Delegation skill'inin (agent orkestrasyonu, paralellestirme, worktree isolation) entegrasyonu icin kapsamli uygulama plani.

---

## 1. Mevcut Durum ve Parcalama Stratejisi

### 1.1 Envanter

| Bilesen | Dosya | Satir | Sorun |
|---------|-------|-------|-------|
| **App.tsx** | `src/App.tsx` | ~1879 | 40+ useState, 30+ useCallback, 6 useEffect, tum view'ler tek dosyada |
| **StatisticsView** | `src/components/StatisticsView.tsx` | 753 | 25+ chart entegrasyonu, filtreleme, tarih secimi tek dosyada |
| **SimulationResultView** | `src/components/SimulationResultView.tsx` | 620 | Performans donut, ders kirilimi, yerlestirme hesaplayici |
| **Chart Bilesenleri** | `src/components/charts/` | ~6508 (34 dosya) | Sifir paylasimli altyapi, her chart kendi ResizeObserver + D3 kurulumunu tekrarlamis |
| **Hook'lar** | `src/hooks/` | 7 dosya | `useResumableSession.ts` tek basina ~300 satir |
| **Lib Modulleri** | `src/lib/` | 15 dosya | `stats.ts` (1100+ satir) ve `supabase.ts` (900+ satir) cok buyuk |

### 1.2 App.tsx Parcalama Stratejisi

App.tsx su anda bir **state makinesi + navigasyon denetleyici + dialog yoneticisi + event handler deposu** olarak calisiyor. Bunu su katmanlara ayirmak lazim:

```
App.tsx (1879 satir) → 5 bagimsiz modul
│
├── <AppShell> (layout + navigation)
│   ├── FluidNav (zaten var)
│   ├── PageTransition (zaten var)
│   └── CountdownWidget (App.tsx icinde inline)
│
├── <AppRouter> (state makinesi)
│   ├── useAppRouter() — tek hook, tum appState gecisleri
│   └── appState enum → view mapping
│
├── <DialogManager> (alert/confirm/prompt merkezi)
│   └── useDialog() hook
│
├── <SyncController> (cloud sync, offline merge)
│   └── useSyncController() hook
│
├── <Views> (her view kendi dosyasinda)
│   ├── LessonSelectionView (App.tsx icinden cikarilacak)
│   ├── UnitSelectionView (App.tsx icinden cikarilacak)
│   ├── DenemeSelectionView (App.tsx icinden cikarilacak)
│   ├── DenemeAmountView (App.tsx icinden cikarilacak)
│   ├── SmartStudySetupView (App.tsx icinden cikarilacak)
│   ├── ResultView (App.tsx icinden cikarilacak)
│   ├── ImportView (App.tsx icinden cikarilacak)
│   └── SettingsView (App.tsx icinden cikarilacak)
```

**Parcalama onceligi:**
1. View Extraction (en kolay, en yuksek etki) — her view bagimsizdir, props interface'i uzerinden calisir
2. Dialog Manager (az state, cok kullanim) — 3 dialog turu, 1 hook + 1 bilesen
3. AppRouter + Context (en kritik) — state makinesini Zustand store'a tasimak

### 1.3 Bagimsizlik Matrisi

| Parca | Bagimlilik | Paralel Yapilabilir? |
|-------|-----------|---------------------|
| LessonSelectionView | selectedLesson, appState setter | Evet |
| UnitSelectionView | selectedUnit, questions | Evet |
| DenemeSelectionView | examUnits | Evet |
| SmartStudySetupView | questions, quizStats | Evet |
| ImportView | questions | Evet |
| ResultView | quizStats, mode | Evet |
| SettingsView | settings, appState | Evet |
| DialogManager | hicbir sey (pure isolated) | **Once bu, temel tas** |
| AppRouter | tum view'ler | **En son** |

---

## 2. Paralellestirme Firsatlari

### 2.1 Genel Bakis

DUSBANKASI'nde paralel yurutulebilecek 4 ana is kategorisi var:

```
                    ┌─────────────────────┐
                    │   DOGAL SIRA ILE    │
                    │   (Tek Agent)       │
                    │                     │
                    │ 1. DialogManager    │
                    │ 2. SyncController   │
                    │ 3. AppRouter        │
                    └─────────┬───────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
     ┌────────▼────────┐ ┌───▼────────┐ ┌────▼───────────┐
     │ PARALEL GRUP A  │ │ PARALEL    │ │ PARALEL GRUP C │
     │ (Chart Refactor)│ │ GRUP B     │ │ (UI + Admin)   │
     │                 │ │ (Hooks)    │ │                │
     │ Agent-1: 0-6    │ │            │ │ Agent-1: UI    │
     │ Agent-2: 7-13   │ │ Agent-1:   │ │ bilesenleri    │
     │ Agent-3: 14-20  │ │ useQ, useA,│ │ Agent-2: Admin │
     │ Agent-4: 21-27  │ │ useS       │ │ panel          │
     │ Agent-5: 28-33  │ │ Agent-2:   │ │ Agent-3: AI    │
     │                 │ │ useR, useT,│ │ assistant      │
     │ Agent-6: index  │ │ useK       │ │                │
     │ Agent-7: test   │ │            │ │ Agent-4: Layout │
     │                 │ │ Agent-3:   │ │                │
     │                 │ │ test yazma │ │ Agent-5: test   │
     └─────────────────┘ └────────────┘ └────────────────┘
```

### 2.2 Chart Refactor (En Buyuk Paralel Firsat)

**Mevcut durum:** 34 chart bileseni, her biri kendine ait D3 kurulumu, ResizeObserver, tooltip, animation. Toplam ~6508 satir.

**Sorun:** Her chart kendi icinde `useEffect(() => { const svg = d3.select(...) })` kaliplarini tekrarliyor. Bir container pattern'i yok. Chartlarin %80'i ayni kabuk kodunu paylasiyor.

**Paralellestirme plani:**

Once bir Agent (Architect) shared chart altyapisini tasarlar:
- `useD3Chart()` hook (container, resize, cleanup)
- `ChartContainer` component (error boundary, loading, empty states)
- Paylasilan D3 yardimcilari (scale, axis, legend, tooltip, color)

Sonra 34 chart, 5 agent arasinda paylastirilir (her agent ~7 chart):

| Agent | Chart Grubu | Dosyalar |
|-------|-------------|----------|
| C1 | Zaman Serileri | DailyActivityChart, AreaStreamGraph, TrendLineChart, TimeHistogram, LessonProgressChart, SegmentChart, WeeklyComparison |
| C2 | Dagilim ve Karsilastirma | ConsistencyBoxPlot, ViolinPlot, BeeswarmPlot, DersScatterPlot, SlopeGraph, DifferenceChart, MorphingChart |
| C3 | Hiyerarsi ve Akis | SunburstChart, MarimekkoChart, StudyTreemap, SankeyDiagram, ChordDiagram, ForceGraph |
| C4 | Hedef ve Cok Degiskenli | GaugeChart, BulletChart, GoalRing, RadarChart, ParallelCoordinates, ContributionHeatMap, UnitHeatMap |
| C5 | Ozel ve Test | WaterfallChart, AccuracySparkline, AnimatedCounter, CollapsibleSection, KpiAlertBanner, TrendIndicator, RechartsWeeklyBar |
| C6 | Index + Integration | `charts/index.ts` export zinciri, StatisticsView entegrasyonu, test yazimi |

**Tahmini paralel kazanc:** 5 agent ayni anda refactor yaparsa, 2.5 saatlik is 30 dakikaya iner (~5x hiz).

### 2.3 Hook Test Yazimi

6 hook dosyasi, her biri bagimsiz test edilebilir:

| Hook | Satir | Test Zorlugu | Agent Tipi |
|------|-------|-------------|------------|
| `useResumableSession.ts` | ~300 | Yuksek (localStorage + async) | Full |
| `useQuestions.ts` | ~130 | Orta (Supabase mock) | Full |
| `useRealtimeStats.ts` | ~170 | Orta (Supabase realtime mock) | Full |
| `useExamTimer.ts` | ~70 | Dusuk (pure timer logic) | Lightweight |
| `useAIAssistant.ts` | ~90 | Orta (API mock) | Full |
| `useAuth.ts` | ~75 | Dusuk (auth state) | Lightweight |

Hook testleri birbirinden bagimsizdir — 6 agent paralel calisabilir.

### 2.4 UI Bilesen Optimizasyonu

13 UI bileseni, her biri bagimsiz:

| Grup | Bilesenler | Agent |
|------|-----------|-------|
| UI-1: Kart/Konteyner | GlassCard, GlassPanel, GradientBorder, BlurOrb | Agent 1 |
| UI-2: Durum/Feedback | Badge, ProgressBar, EmptyState, Skeleton | Agent 2 |
| UI-3: Navigasyon/Giris | FluidNav, Section, StatCard, PageTransition | Agent 3 |

---

## 3. Worktree-Isolated Agent Kullanim Plani

### 3.1 Ne Zaman Worktree Kullanilmali?

Worktree, bir gorevin ana branch'i kirletmeden, izole bir ortamda calismasi gerektiginde kullanilir. DUSBANKASI icin su senaryolar idealdir:

| Gorev | Worktree Nedeni | Risk | Sure |
|-------|----------------|------|------|
| App.tsx parcalama | Ana calisan kodu bozma riski yuksek | Kritik | 2-3 saat |
| Supabase migration testi | DB sema degisikligi, rollback gerekebilir | Yuksek | 1-2 saat |
| Buyuk lib refactoring (`stats.ts` 1100+ satir) | Cok sayida bagimli import var | Yuksek | 1-2 saat |
| Chart shared altyapi insasi | Tum chart'lar etkilenir, kapsamli test gerekir | Orta | 1-1.5 saat |
| State management gecisi (useState → Zustand) | Uygulama state mimarisi tamamen degisir | Kritik | 3-4 saat |

### 3.2 Worktree Is Akisi

```
ANA BRANCH (main)
│
├── WT-1: app-tsx-split
│   ├── Agent: Engineer (Full, Opus)
│   ├── Gorev: App.tsx'i 5 modul + view'lere ayir
│   ├── Cikti: Tum testler geciyor, uygulama calisiyor
│   └── → Merge (PR review sonrasi)
│
├── WT-2: chart-shared-infra
│   ├── Agent: Architect (Full, Opus) + Engineer (Full, Sonnet)
│   ├── Gorev: useD3Chart hook, ChartContainer, D3 yardimcilari
│   ├── Cikti: Pattern library, 2 ornek chart migrasyonu
│   └── → Merge → sonra 5 paralel agent chart refactor yapar
│
├── WT-3: stats-lib-split
│   ├── Agent: Engineer (Full, Opus)
│   ├── Gorev: stats.ts'i stats-core.ts + stats-sync.ts + stats-metrics.ts olarak bol
│   ├── Cikti: Geriye donuk uyumlu API, mevcut testler geciyor
│   └── → Merge
│
└── WT-4: state-zustand
    ├── Agent: Architect (Full, Opus) + Engineer (Full, Sonnet)
    ├── Gorev: AppState + QuizState Zustand store'a gecir
    ├── Cikti: Props drilling ortadan kalkti, bilesenler bagimsiz
    └── → Merge (en sonda, tum diger PR'ler bittikten sonra)
```

### 3.3 Worktree Merge Stratejisi

1. **WT-3 (stats-lib-split)** once merge edilir — en az cakisma, en cok bagimli
2. **WT-2 (chart-shared-infra)** ikinci — yeni pattern olusturur, tuketilmesi icin hazir olmali
3. **WT-1 (app-tsx-split)** ucuncu — yeni lib ve pattern'lere bagimlilik kurabilir
4. **WT-4 (state-zustand)** en son — tum parcalama bittikten sonra state mimarisi degistirilir

---

## 4. Agent Team Tasarimi

### 4.1 Team: DUSBANKASI Yeniden Yapilandirma Ekibi

Amac: DUSBANKASI'ni monolitik yapidan moduler mimariye tasimak. 3 asamali bir team yapisi:

```
DUSBANKASI RE-ARCHITECTURE TEAM
═══════════════════════════════════
Team Lead: Architect (Opus) — "Mimar Atlas"
═══════════════════════════════════

ASAMA 1: TEMEL (Hafta 1)
┌─────────────────────────────────────┐
│ Architect (Opus)                    │
│ → Paylasilan chart altyapisi tasarimi│
│ → stats.ts parcalama plani          │
│ → App.tsx parcalama stratejisi      │
│                                     │
│ Engineer-1 (Opus) — "Kalfa"        │
│ → Chart shared infra uygulama       │
│ → Chart ornek migrasyon (2 chart)   │
│                                     │
│ Engineer-2 (Sonnet) — "Cirak"      │
│ → stats.ts parcalama                │
│ → Hook test sablonlari              │
└─────────────────────────────────────┘

ASAMA 2: PARALEL GENISLEME (Hafta 1-2)
┌─────────────────────────────────────┐
│ 5x Engineer (Sonnet) — Chart ekibi  │
│ → Paralel chart refactor (her biri ~7 chart) │
│                                     │
│ 3x Engineer (Sonnet) — Hook ekibi   │
│ → Paralel hook test yazimi          │
│                                     │
│ 2x Engineer (Sonnet) — UI ekibi     │
│ → UI bilesen optimizasyonu          │
│                                     │
│ 1x Engineer (Opus) — View ekibi     │
│ → App.tsx view extraction           │
│ → DialogManager + AppRouter         │
└─────────────────────────────────────┘

ASAMA 3: ZIRVE (Hafta 2)
┌─────────────────────────────────────┐
│ Architect (Opus) — Review           │
│ → Tum PR'leri inceler               │
│ → Mimari tutarlilik kontrolu        │
│ → Performans regresyon testi        │
│                                     │
│ Engineer (Opus) — Integration       │
│ → Tum parcaciklari banlamak       │
│ → Zustand state gecisi              │
│ → End-to-end test                   │
└─────────────────────────────────────┘
```

### 4.2 Roller ve Sorumluluklar

| Rol | Model | Sorumluluk |
|-----|-------|------------|
| **Mimar Atlas** (Architect) | Opus | Mimari kararlar, pattern tanimi, PR review, kalite kapisi |
| **Kalfa** (Engineer Lead) | Opus | Kritik implementasyon (shared infra, App.tsx split, state migration) |
| **Cirak-1** (Engineer) | Sonnet | stats.ts split, hook test, CI pipeline |
| **Chart Ekibi** (5x Engineer) | Sonnet | Paralel chart refactor (her biri 7 chart) |
| **Hook Ekibi** (3x Engineer) | Sonnet | Paralel hook test yazimi |
| **UI Ekibi** (2x Engineer) | Sonnet | UI bilesen optimizasyonu |
| **Integration Engineer** | Opus | Son banlama, E2E test, deploy |

### 4.3 Koordinasyon Protokolu

1. **Gunluk Standup:** Architect tum agent log'larini okur, cakismalari tespit eder
2. **Interface-first:** Chart shared infra ve lib API'leri once tanimlanir, tum agent'lar ayni kontrati kullanir
3. **Test-first:** Her agent once test yazar, sonra implementasyon — cakisma azalir
4. **Sequential merge:** Once temel, sonra paralel, en son state migration — reverse order merge olmaz

---

## 5. Lightweight vs Full Delegation Karar Agaci

### 5.1 Karar Kriterleri

```
Gorev geldi.
│
├── Dosya sayisi < 3 VE toplam satir < 200 VE yeni kod?
│   └── EVET → Lightweight (Haiku, max_turns=3)
│   │   Ornek: GoalRing.tsx'e yeni prop ekleme, Section.tsx varyanti
│   │
├── Mevcut kodu refactor mu ediyor? (breaking changes)
│   └── EVET → Full (Sonnet/Opus, max_turns=10+)
│   │   Ornek: App.tsx parcalama, stats.ts bolme
│   │
├── Birden fazla dosyayi etkiliyor mu?
│   └── EVET → Full (Sonnet, max_turns=8+)
│   │   Ornek: Chart shared infra insasi, hook test yazimi
│   │
├── Yeni feature, basit mantik?
│   └── EVET → Lightweight (Sonnet, max_turns=5)
│   │   Ornek: Yeni KPI gostergesi, basit admin view
│   │
├── Mimari karar gerekiyor mu? (trade-off, performance)
│   └── EVET → Full (Opus, max_turns=15+)
│   │   Ornek: State management gecisi, DB migration
│   │
└── Goruntu isleme / PDF / kompleks grafik?
    └── EVET → Full (Opus, max_turns=Limitless)
        Ornek: Chart refactor, PDF export rework
```

### 5.2 DUSBANKASI Spesifik Gorevler Icin Atama

| Gorev | Kademe | Model | max_turns | Gerekce |
|-------|--------|-------|-----------|---------|
| `showAlert/showConfirm/showPrompt` → `useDialog` | Lightweight | Haiku | 3 | 3 fonksiyon, 1 hook, ~50 satir |
| `CountdownWidget` → ayri dosya | Lightweight | Haiku | 3 | 1 bilesen, ~60 satir |
| Section.tsx prop ekleme | Lightweight | Haiku | 2 | Tek dosya, basit degisiklik |
| `useKeyboardShortcuts` hook testi | Lightweight | Sonnet | 5 | 1 hook, mock yok |
| `useExamTimer` hook testi | Lightweight | Sonnet | 5 | Pure timer logic |
| UI bilesen export temizligi | Lightweight | Sonnet | 5 | Sadece index.ts + prop fix |
| **Chart shared infra insasi** | **Full** | **Opus** | 15 | Mimari pattern, tum chart'lar etkilenir |
| **stats.ts parcalama** | **Full** | **Opus** | 12 | 1100 satir, geriye donuk uyumluluk |
| **App.tsx parcalama** | **Full** | **Opus** | 20 | 1879 satir, kritik, tum view'ler |
| Chart refactor (tekil chart) | Full | Sonnet | 8 | D3 refactor, shared infra bagimliligi |
| `useResumableSession` testi | Full | Sonnet | 8 | localStorage mock, async flow |
| `useQuestions` testi | Full | Sonnet | 8 | Supabase mock gerekir |
| `useRealtimeStats` testi | Full | Sonnet | 8 | Supabase realtime mock |
| **Zustand state gecisi** | **Full** | **Opus** | 25 | Tum uygulama state'i degisir |
| Admin panel gelistirme | Full | Sonnet | 10 | Yeni ozellik, orta karmasiklik |
| AI Assistant refactor | Full | Sonnet | 8 | API entegrasyonu |

### 5.3 Effort-Level Mapping

| Delegation Effort | Agent Sayisi | Paralellik | Ornek DUSBANKASI Senaryosu |
|------------------|-------------|-----------|---------------------------|
| **Quick** (lightweight) | 1 | Yok | Basit bug fix, prop ekleme |
| **Standard** | 1-2 | Yok | Tek chart refactor, hook testi |
| **Deep** | 3-5 | Orta | Chart shared infra + 2 chart migrasyonu |
| **Comprehensive** | Sinirsiz | Tam | Tum proje re-architect, TeamCreate ile |

---

## 6. Uygulama Adimlari (Somut Komutlar)

### 6.1 Faz 0: Hazirlik (DialogManager — Temel Tas)

En dusuk bagimlilik, en yuksek yeniden kullanim. Tek Lightweight agent ile yapilabilir:

```bash
# Gorev: App.tsx icindeki alert/confirm/prompt dialog sistemini useDialog hook'una cikar

# Agent cagrisi:
"App.tsx icindeki showAlert, showConfirm, showPrompt useCallback'lerini ve dialog
state'ini ayri bir useDialog hook'una cikar. src/hooks/useDialog.ts dosyasina yaz.
App.tsx'te bu hook'u import et. Test yazma - sadece extraction."

# Beklenen cikti:
# - src/hooks/useDialog.ts (~40 satir)
# - App.tsx'ten 25 satir azalma, 3 useCallback silindi
```

### 6.2 Faz 1: Paralel Temel (3 Worktree, Es Zamanli)

```bash
# ─── WORKTREE 1: Chart Shared Infra ───
# Agent: Architect (Full, Opus, max_turns=15)
# Worktree: chart-shared-infra
"src/components/charts/ altindaki 34 chart bileseni icin shared altyapi tasarla:
1. src/hooks/useD3Chart.ts — ResizeObserver, container ref, SVG cleanup
2. src/components/charts/ChartContainer.tsx — error boundary, loading, empty
3. src/lib/chartUtils.ts — scale, axis, legend, tooltip, color yardimcilari
4. 2 ornek chart'i (GoalRing ve BulletChart) yeni altyapiya migrate et
5. Tum chart'larin kullanacagi ortak props interface'i tanimla
Mevcut chart'lari bozma. Yeni pattern yan yana calissin."

# ─── WORKTREE 2: stats.ts Parcalama ───
# Agent: Engineer (Full, Opus, max_turns=12)
# Worktree: stats-lib-split
"src/lib/stats.ts (1100+ satir, 36KB) dosyasini su alt modullere bol:
1. src/lib/stats/types.ts — tum stats type tanimlari
2. src/lib/stats/core.ts — getStats, saveStats, loadAllStats, resetAllStats
3. src/lib/stats/sync.ts — syncStatsUp, syncStatsDown, SyncManager, merge
4. src/lib/stats/metrics.ts — getWeakQuestionIds, getUnitProgress, FSRS
5. src/lib/stats/index.ts — re-export hub
Geriye donuk uyumlu API koru. Mevcut testler gecmeli."

# ─── WORKTREE 3: App.tsx View Extraction ───
# Agent: Engineer (Full, Opus, max_turns=20)
# Worktree: app-tsx-split-phase-1
"App.tsx'ten su view'leri ayri dosyalara cikar (her biri props interface'li):
1. src/components/views/LessonSelectionView.tsx
2. src/components/views/UnitSelectionView.tsx
3. src/components/views/DenemeSelectionView.tsx
4. src/components/views/DenemeAmountView.tsx
5. src/components/views/SmartStudySetupView.tsx
6. src/components/views/ResultView.tsx
7. src/components/views/ImportView.tsx
8. src/components/views/SettingsView.tsx

CountdownWidget'i src/components/layout/CountdownWidget.tsx'e cikar.
App.tsx sadece router + orchestrator olarak kalsin."
```

### 6.3 Faz 2: Paralel Genisleme (Comprehensive, 10+ Agent)

```bash
# ─── CHART EKIBI (5 Agent, Full Sonnet, Paralel) ───
# Ortak kontrat: Charts/shared-infra'dan gelen useD3Chart hook'u
# Her agent ~7 chart'i refactor eder

# Agent C1 — Zaman Serileri:
"src/components/charts/ altindaki su chart'lari useD3Chart hook'una migrate et:
DailyActivityChart, AreaStreamGraph, TrendLineChart, TimeHistogram,
LessonProgressChart, SegmentChart, WeeklyComparison"

# Agent C2 — Dagilim:
"src/components/charts/ altindaki su chart'lari useD3Chart hook'una migrate et:
ConsistencyBoxPlot, ViolinPlot, BeeswarmPlot, DersScatterPlot,
SlopeGraph, DifferenceChart, MorphingChart"

# Agent C3 — Hiyerarsi + Akis:
"src/components/charts/ altindaki su chart'lari useD3Chart hook'una migrate et:
SunburstChart, MarimekkoChart, StudyTreemap, SankeyDiagram,
ChordDiagram, ForceGraph"

# Agent C4 — Hedef + Isi Haritasi:
"src/components/charts/ altindaki su chart'lari useD3Chart hook'una migrate et:
GaugeChart, BulletChart, GoalRing, RadarChart,
ParallelCoordinates, ContributionHeatMap, UnitHeatMap"

# Agent C5 — Ozel + Test:
"src/components/charts/ altindaki su chart'lari useD3Chart hook'una migrate et:
WaterfallChart, AccuracySparkline, AnimatedCounter,
CollapsibleSection, KpiAlertBanner, TrendIndicator,
RechartsWeeklyBar. SONRA charts/index.ts export zincirini guncelle."

# ─── HOOK EKIBI (3 Agent, Full Sonnet, Paralel) ───

# Agent H1 — useResumableSession testleri:
"src/hooks/useResumableSession.ts icin kapsamli test yaz. localStorage mock,
async session save/resume flow, error handling. vitest kullan."

# Agent H2 — useQuestions + useRealtimeStats testleri:
"src/hooks/useQuestions.ts ve src/hooks/useRealtimeStats.ts icin kapsamli
test yaz. Supabase mock stratejisi kullan. vitest ile."

# Agent H3 — useAuth + useExamTimer + useAIAssistant testleri:
"src/hooks/ altindaki useAuth.ts, useExamTimer.ts, useAIAssistant.ts ve
useKeyboardShortcuts.ts icin test yaz. vitest ile."

# ─── UI EKIBI (2 Agent, Full Sonnet, Paralel) ───

# Agent U1 — Kart bilesenleri:
"src/components/ui/ altindaki GlassCard, GlassPanel, GradientBorder,
BlurOrb, StatCard bilesenlerini optimize et:
- PropTypes → TypeScript interface (zaten TS, sadece gozden gecir)
- Accessibility (aria-label, role, keyboard)
- Performance (React.memo where applicable)"

# Agent U2 — Durum bilesenleri:
"src/components/ui/ altindaki Badge, ProgressBar, EmptyState, Skeleton,
Section, FluidNav bilesenlerini optimize et:
- Accessibility audit
- Performance (React.memo)
- Consistent prop naming"
```

### 6.4 Faz 3: Zirve (State Migration + E2E)

```bash
# ─── TEK WORKTREE: Zustand Migration ───
# Agent: Architect + Engineer (Opus, max_turns=30)
# Worktree: state-zustand
# NOT: Bu gorev tum diger PR'ler merge olduktan sonra yapilir

"Tum App.tsx state'lerini ve ilgili prop drilling zincirini Zustand store'a tasi:

1. src/stores/appStore.ts:
   - appState, mode, selectedLesson, selectedUnit
   - examUnits, examQuestions, unitQuestions
   - quizStats, simResult, simTotalSeconds
   - showSettings, showAuth, dialog

2. src/stores/quizStore.ts:
   - examLoading, isFavoritesExam, isDailyExamSession
   - activeDailyExamId, todaysDailyExam
   - statsVersion, syncStatus

3. src/stores/settingsStore.ts:
   - settings (theme, fontSize)
   - localStorage persistence (zaten Zustand middleware ile)

Tum view bilesenleri artik store'dan okuyacak, props almayacak.
App.tsx sadece AppShell + AppRouter olacak (~150 satir hedef)."
```

### 6.5 Faz Sirasi

```
Faz 0: DialogManager (Lightweight, 1 agent, 15 dk)
  │
Faz 1: 3 Paralel Worktree (Chart Infra + Stats Split + View Extract)
  │     Her biri Full agent, ~2 saat, ESLESTIRMELI
  │
  ├──> WT-3 (stats) merge → once
  ├──> WT-1 (chart infra) merge → ikinci
  └──> WT-2 (app views) merge → ucuncu
  │
Faz 2: 10+ Paralel Agent (Comprehensive)
  │     5 Chart + 3 Hook + 2 UI = 10 agent ayni anda
  │     Her biri ~1-1.5 saat
  │     Toplamda 1.5 saatte tum refactor tamam
  │
Faz 3: Zustand Migration (1 Worktree, Opus)
  │     ~3-4 saat
  │     Tum PR'ler merge olduktan sonra
  │
HEDEF: 2 haftada tum re-architect tamam
       (Manuel yapilsa 6-8 hafta surerdi)
```

---

## 7. Beklenen Etki

### 7.1 Gelistirme Hizi

| Metrik | Once | Sonra | Kazanc |
|--------|------|-------|--------|
| App.tsx satir sayisi | 1879 | ~150 | **-92%** |
| App.tsx useState sayisi | 40+ | ~5 | **-87%** |
| Props drilling zinciri | 4-5 seviye | 0 (Zustand) | **Elimine edildi** |
| Chart bileseni basina tekrar eden kod | ~50 satir D3 setup | 0 (shared hook) | **Elimine edildi** |
| Yeni chart ekleme suresi | ~1 saat | ~15 dakika | **4x hiz**
| Yeni view ekleme suresi | ~2 saat | ~30 dakika | **4x hiz**
| Hook test coverage | ~%0 | ~%85+ | **Sifirdan kapsamli**

### 7.2 Kod Kalitesi

| Metrik | Once | Sonra |
|--------|------|-------|
| Tek sorumluluk ihlali (SRP) | App.tsx'te 8+ view + dialog + sync | Her view kendi dosyasinda |
| D3 kod tekrari | 34 chart'ta ayni boilerplate | 1 shared hook |
| Test coverage | Minimal | Hook'lar + lib modulleri %85+ |
| Type safety | Props any/optional karmasasi | Net interface kontratlari |
| Hata yonetimi | Inline try-catch, tutarsiz | ChartContainer error boundary |
| State management | 40 useState + chain drilling | 3 Zustand store, atomik |

### 7.3 Teknik Borc Azaltma

| Teknik Borc | Cozum | Etki |
|------------|-------|------|
| Monolitik App.tsx | 8 view + router extraction | Bakim yapilabilir hale gelir |
| Chart boilerplate tekrari | useD3Chart shared hook | 34 chart x ~50 satir = 1700 satir silinir |
| stats.ts buyuklugu | 4 alt modul | Her biri bagimsiz test edilebilir |
| Props drilling | Zustand store | Bilesen bagimsizligi |
| Sifir hook test coverage | 6 hook test dosyasi | Regresyon riski azalir |
| Tutarsiz UI pattern'leri | Standardizasyon | UX tutarliligi artar |

### 7.4 Riskler ve Azaltma

| Risk | Olasilik | Etki | Azaltma |
|------|---------|------|---------|
| Worktree merge cakismasi | Orta | Orta | Merge sirasi: once stats, sonra chart infra, sonra view extraction |
| State migration'da bug | Orta | Yuksek | Zustand gecisi en son, tum testler yesilken yapilir |
| Shared chart infra chart'lari bozabilir | Dusuk | Orta | Ornek 2 chart migrate edilir, dogrulama sonrasi tum ekip devam eder |
| Paralel agent'larin farkli pattern kullanmasi | Orta | Orta | Architect once kontratlari tanimlar, tum agent'lar ayni interface'i kullanir |
| Supabase mock zorlugu | Yuksek | Dusuk | MSW (Mock Service Worker) kullanilir, gercekci mock |

### 7.5 Yatirim Getirisi (ROI)

```
YATIRIM:
├── Agent compute maliyeti: ~15 agent-saat (Opus) + ~25 agent-saat (Sonnet)
├── Insan gozden gecirme: ~4 saat (Architect review)
├── Toplam: ~44 saat bilisimsel + 4 saat insan
└── Toplam takvim suresi: ~2 hafta

GETIRI:
├── Manuel re-architect suresi: ~120 insan-saati (6-8 hafta)
├── Zamandan tasarruf: 120 - 44 = 76 saat (~%63)
├── Sonraki her feature gelistirme: 2-4x daha hizli
├── Bug fix suresi: ~%50 azalir (izole bilesenler)
├── Yeni developer onboarding: 1 gun → 2 saat (moduler yapi)
└── Test coverage: %0 → %85 (regresyon riski azalir)

SONUC: Ilk faz kendini 2-3 feature'da amorti eder.
```

---

## 8. Ozet ve Onceliklendirme

### 8.1 Hemen Baslanabilir (Bugun)

1. **Faz 0: DialogManager extraction** — 15 dakika, 1 Lightweight agent, sifir risk
2. **Faz 1: stats.ts parcalama** (Worktree) — hemen baslanabilir, en cok bagimli modul

### 8.2 Bu Hafta

3. **Faz 1: Chart shared infra** (Worktree) — 2 saat, 1 Full Opus agent
4. **Faz 1: App.tsx view extraction** (Worktree) — 2 saat, 1 Full Opus agent

### 8.3 Gelecek Hafta

5. **Faz 2: Paralel Chart Refactor** — 5 agent, ~1.5 saat
6. **Faz 2: Paralel Hook Test** — 3 agent, ~1.5 saat
7. **Faz 2: UI Optimizasyonu** — 2 agent, ~1 saat

### 8.4 Iki Hafta Sonra

8. **Faz 3: Zustand State Migration** — 1 Worktree, Opus, ~4 saat

---

## Ek A: Mevcut Dosya Yapisindan Hedef Dosya Yapisina

```
ONCE (Su An):
src/
├── App.tsx (1879 satir, tum state + view'ler)
├── components/
│   ├── AuthModal.tsx
│   ├── StatisticsView.tsx (753 satir)
│   ├── SimulationResultView.tsx (620 satir)
│   ├── charts/ (34 dosya, her biri full D3 boilerplate)
│   ├── ui/ (13 dosya)
│   ├── quiz/ (5 dosya)
│   ├── admin/ (1 dosya)
│   └── ai/ (1 dosya)
├── hooks/ (7 dosya, test coverage %0)
└── lib/ (15 dosya, stats.ts 1100+ satir)
```

```
SONRA (Hedef):
src/
├── App.tsx (~150 satir, sadece shell + router)
├── components/
│   ├── layout/
│   │   ├── AppShell.tsx
│   │   ├── CountdownWidget.tsx
│   │   ├── FluidNav.tsx
│   │   └── PageTransition.tsx
│   ├── views/
│   │   ├── LessonSelectionView.tsx
│   │   ├── UnitSelectionView.tsx
│   │   ├── DenemeSelectionView.tsx
│   │   ├── DenemeAmountView.tsx
│   │   ├── SmartStudySetupView.tsx
│   │   ├── ResultView.tsx
│   │   ├── ImportView.tsx
│   │   └── SettingsView.tsx
│   ├── quiz/ (5 dosya, degismedi)
│   ├── admin/ (1+ dosya)
│   ├── ai/ (1+ dosya)
│   ├── ui/ (13 dosya, optimize edildi)
│   ├── charts/
│   │   ├── ChartContainer.tsx (YENI)
│   │   ├── ChartErrorBoundary.tsx (YENI)
│   │   ├── index.ts
│   │   └── [33 chart, useD3Chart hook ile refactor]
│   ├── AuthModal.tsx
│   ├── StatisticsView.tsx (refactor edildi, chart import'lari temiz)
│   └── SimulationResultView.tsx
├── hooks/
│   ├── useDialog.ts (YENI)
│   ├── useD3Chart.ts (YENI)
│   ├── useAppRouter.ts (YENI)
│   ├── useSyncController.ts (YENI)
│   └── [mevcut 7 hook + test dosyalari]
├── stores/ (YENI)
│   ├── appStore.ts
│   ├── quizStore.ts
│   └── settingsStore.ts
└── lib/
    ├── stats/
    │   ├── types.ts
    │   ├── core.ts
    │   ├── sync.ts
    │   ├── metrics.ts
    │   └── index.ts
    ├── supabase.ts (refactor)
    ├── chartUtils.ts (genisletildi)
    └── [diger 10+ lib dosyasi]
```

---

## Ek B: Agent Team Olusturma Komutlari (Referans)

```bash
# Team olusturma (Comprehensive mod):
# TeamCreate ile DUSBANKASI re-architect ekibi kurulumu

# 1. Architect atamasi (strateji ve kontratlar):
#    Agent: Architect, Full, Opus
#    Prompt: "Chart shared infra, stats split, App.tsx parcalama stratejisi"

# 2. Paralel chart ekibi (5 agent):
#    Agent: Engineer, Full, Sonnet (x5)
#    Prompt: "useD3Chart hook'u ile chart refactor. Her agent 7 chart."

# 3. Paralel hook test ekibi (3 agent):
#    Agent: Engineer, Full, Sonnet (x3)
#    Prompt: "Her agent 2 hook icin test yazar. vitest + MSW."

# 4. UI optimizasyon ekibi (2 agent):
#    Agent: Engineer, Full, Sonnet (x2)
#    Prompt: "UI bilesenlerini standardize et. Accessibility + performance."

# 5. Integration engineer:
#    Agent: Engineer, Full, Opus
#    Prompt: "Tum PR'leri merge et, Zustand gecisini yap, E2E test yaz."
```

---

**RAPOR SONU**

Bu rapor, DUSBANKASI projesine Delegation skill entegrasyonu icin kapsamli bir uygulama plani sunmaktadir. Tum asamalar sirali, tum komutlar somut, tum riskler degerlendirilmistir.

Herhangi bir asamada detaylandirma veya baslama talimati icin hazirim.
