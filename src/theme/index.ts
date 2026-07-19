/* ─── THEME & FONT TOKENS — Unified Design System v5.0 ───
   Single source of truth. Visual tokens in index.css via Tailwind v4 @theme.
   This file exports themeColors (per-theme Tailwind class strings),
   semantic colors, font size presets, and glass token fragments.
*/

export type ThemeName = 'dark' | 'oled' | 'light';

export const THEME_NAMES: ThemeName[] = ['dark', 'oled', 'light'];

/* ── Per-theme Tailwind class-string tokens ──────────────
   Used by components that need dynamic theme-aware classes.
   New glass/gradient tokens added for UI V2 primitives. */
export const themeColors = {
  dark: {
    glass: 'bg-[#0d0d12] border border-white/[0.04] rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(255,255,255,0.02),0_12px_40px_rgba(0,0,0,0.6)]',
    glassHeavy: 'bg-[#0d0d12] border border-white/[0.05] rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(255,255,255,0.03)]',
    glassPanel: 'bg-[#0a0a0e] border border-white/[0.02] rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.01)]',
    gradientAccent: 'from-[#6f72f2] to-[#484cc2]',
    gradientCorrect: 'from-[#34d399] to-[#059669]',
    gradientIncorrect: 'from-[#f87171] to-[#dc2626]',
    bg: 'bg-[#030305]',
    card: 'bg-[#0d0d12] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(255,255,255,0.02),0_12px_40px_rgba(0,0,0,0.6)]',
    cardSolid: 'bg-[#0d0d12] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(255,255,255,0.02)]',
    cardGlass: 'bg-[#0d0d12] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(255,255,255,0.03)]',
    cardHover: 'hover:bg-[#0c0c10]/80 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_40px_rgba(111,114,242,0.12)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]',
    surface: 'bg-[#060608]',
    border: 'border-white/[0.03]',
    text: 'text-[#ececf1]',
    subtext: 'text-[#8b8b98]',
    headerBg: 'bg-[#030305] border-b border-white/[0.05]',
    accent: 'text-[#8b95f6]',
    accentBg: 'bg-[#6f72f2]',
    accentSoft: 'bg-[#6f72f2]/10 text-[#8b95f6]',
    ring: 'ring-[#6f72f2]/30',
    shadow: 'shadow-[0_12px_40px_rgba(0,0,0,0.8)]',
    shadowLg: 'shadow-[0_24px_80px_rgba(0,0,0,0.9)]',
    gradient: 'from-[#6f72f2] to-[#484cc2]',
    inputBg: 'bg-[#ffffff]/[0.02]',
    divider: 'border-white/[0.03]',
  },
  oled: {
    glass: 'bg-[#0a0a0a] border border-white/[0.05] rounded-3xl shadow-[0_0_0_1px_rgba(255,255,255,0.05)]',
    glassHeavy: 'bg-[#0a0a0a] border border-white/[0.04] rounded-3xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]',
    glassPanel: 'bg-[#080808] border border-white/[0.03] rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.03)]',
    gradientAccent: 'from-[#ffffff] to-[#a1a1aa]',
    gradientCorrect: 'from-[#34d399] to-[#059669]',
    gradientIncorrect: 'from-[#f87171] to-[#dc2626]',
    bg: 'bg-[#000000]',
    card: 'bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(255,255,255,0.05)]',
    cardSolid: 'bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(255,255,255,0.05)]',
    cardGlass: 'bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]',
    cardHover: 'hover:bg-[#030303] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_40px_rgba(255,255,255,0.04)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]',
    surface: 'bg-[#050505]',
    border: 'border-white/[0.05]',
    text: 'text-[#ffffff]',
    subtext: 'text-[#777777]',
    headerBg: 'bg-[#050505] border-b border-white/[0.05]',
    accent: 'text-[#a1a1aa]',
    accentBg: 'bg-[#ffffff]',
    accentSoft: 'bg-[#ffffff]/10 text-[#ffffff]',
    ring: 'ring-[#ffffff]/20',
    shadow: 'shadow-[0_12px_40px_rgba(0,0,0,1)]',
    shadowLg: 'shadow-[0_24px_80px_rgba(0,0,0,1)]',
    gradient: 'from-[#ffffff] to-[#a1a1aa]',
    inputBg: 'bg-[#ffffff]/[0.03]',
    divider: 'border-white/[0.05]',
  },
  light: {
    glass: 'bg-[#ffffff] border border-black/[0.04] rounded-3xl shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.02)]',
    glassHeavy: 'bg-[#ffffff] border border-black/[0.03] rounded-3xl shadow-[0_0_0_1px_rgba(0,0,0,0.02)]',
    glassPanel: 'bg-[#f5f5f7] border border-black/[0.02] rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.02)]',
    gradientAccent: 'from-[#111113] to-[#44444c]',
    gradientCorrect: 'from-[#34d399] to-[#059669]',
    gradientIncorrect: 'from-[#f87171] to-[#dc2626]',
    bg: 'bg-[#fcfcfd]',
    card: 'bg-[#ffffff] shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.02)]',
    cardSolid: 'bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.02)]',
    cardGlass: 'bg-[#ffffff] shadow-[0_0_0_1px_rgba(0,0,0,0.02)]',
    cardHover: 'hover:bg-[#ffffff] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_12px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]',
    surface: 'bg-[#f5f5f7]',
    border: 'border-black/[0.03]',
    text: 'text-[#111113]',
    subtext: 'text-[#66666d]',
    headerBg: 'bg-[#ffffff] border-b border-black/[0.05]',
    accent: 'text-[#111113]',
    accentBg: 'bg-[#111113]',
    accentSoft: 'bg-[#111113]/5 text-[#111113]',
    ring: 'ring-[#000000]/15',
    shadow: 'shadow-[0_12px_32px_rgba(0,0,0,0.03)]',
    shadowLg: 'shadow-[0_24px_64px_rgba(0,0,0,0.05)]',
    gradient: 'from-[#111113] to-[#44444c]',
    inputBg: 'bg-black/[0.02]',
    divider: 'border-black/[0.03]',
  }
};

export type Theme = Record<string, string>;

/* Semantic color tokens — Apple/Linear refined palette
   Used when className isn't enough (e.g., dynamic option states in Quiz). */
export const semanticColors = {
  correct:  { bg: 'bg-[#34d399]/10', text: 'text-[#34d399]', border: 'border-[#34d399]/20', solid: 'bg-[#34d399]' },
  incorrect:{ bg: 'bg-[#f87171]/10', text: 'text-[#f87171]', border: 'border-[#f87171]/20', solid: 'bg-[#f87171]' },
  warning:  { bg: 'bg-[#fbbf24]/10', text: 'text-[#fbbf24]', border: 'border-[#fbbf24]/20', solid: 'bg-[#fbbf24]' },
  info:     { bg: 'bg-[#38bdf8]/10', text: 'text-[#38bdf8]', border: 'border-[#38bdf8]/20', solid: 'bg-[#38bdf8]' },
  purple:   { bg: 'bg-[#a78bfa]/10', text: 'text-[#a78bfa]', border: 'border-[#a78bfa]/20', solid: 'bg-[#a78bfa]' },
  gold:     { bg: 'bg-[#fcd34d]/10', text: 'text-[#fcd34d]', border: 'border-[#fcd34d]/20', solid: 'bg-[#fcd34d]' },
} as const;

/* Font sizes — Satoshi has slightly wider letterforms, so we adjust down.
   Skala (Faz 1): xs/sm/base gövde metni, lg-display başlık/istatistik kademeleri.
   CSS karşılığı: src/index.css @theme --text-* token'ları. */
export const fontSizes = {
  small:  'text-[12px]',
  normal: 'text-[14px]',
  large:  'text-[16px]',
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  display: 'text-display',
} as const;

export type FontSizeKey = keyof typeof fontSizes;

/* ── Motion token'ları (Faz 1) — src/lib/motion.ts bunu re-export eder.
   Tek yerden tüketim: yeni component'ler ham stiffness/duration yazmaz. */
export const motion = {
  durations: { micro: 150, enter: 200, exit: 140, page: 300 },
  easings: {
    enter: [0.19, 1, 0.22, 1] as const,
    exit: 'easeIn' as const,
    spring: { type: 'spring', stiffness: 300, damping: 20 } as const,
  },
} as const;

/* ── İkon ağırlık standardı (Faz 1) — veri-yoğun UI'da tek weight kararı. */
export const iconWeight = 'regular' as const;
