/* --- THEME & FONT TOKENS — Ultra Premium Design System --- */

export const themeColors = {
  dark: {
    bg: 'bg-[#060608]',
    card: 'bg-[#0d0d12]/80 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.4)]',
    cardSolid: 'bg-[#0d0d12] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,255,255,0.04)]',
    cardGlass: 'bg-[#111118]/60 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(255,255,255,0.05)]',
    cardHover: 'hover:bg-[#16161f]/80 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_24px_rgba(94,106,210,0.15)] hover:-translate-y-[2px] transition-all duration-300 ease-out',
    surface: 'bg-[#12121a]',
    border: 'border-white/[0.05]',
    text: 'text-[#f4f4f5]',
    subtext: 'text-[#a1a1aa]',
    headerBg: 'bg-[#060608]/70 backdrop-blur-xl border-b border-white/[0.04]',
    accent: 'text-[#7e8af8]',
    accentBg: 'bg-[#5e6ad2]',
    accentSoft: 'bg-[#5e6ad2]/15 text-[#8894f8]',
    ring: 'ring-[#5e6ad2]/30',
    shadow: 'shadow-[0_8px_32px_rgba(0,0,0,0.6)]',
    shadowLg: 'shadow-[0_16px_64px_rgba(0,0,0,0.8)]',
    gradient: 'from-[#6366f1] to-[#4f46e5]',
    inputBg: 'bg-[#ffffff]/[0.03]',
    divider: 'border-white/[0.05]',
  },
  oled: {
    bg: 'bg-[#000000]',
    card: 'bg-black backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.08)]',
    cardSolid: 'bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.08)]',
    cardGlass: 'bg-black/40 backdrop-blur-3xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)]',
    cardHover: 'hover:bg-[#050505] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_32px_rgba(255,255,255,0.05)] hover:-translate-y-[2px] transition-all duration-300 ease-out',
    surface: 'bg-[#0a0a0a]',
    border: 'border-white/[0.08]',
    text: 'text-white',
    subtext: 'text-[#888888]',
    headerBg: 'bg-black/80 backdrop-blur-xl border-b border-white/[0.08]',
    accent: 'text-[#9ca3af]',
    accentBg: 'bg-[#ffffff]',
    accentSoft: 'bg-[#ffffff]/10 text-[#ffffff]',
    ring: 'ring-[#ffffff]/20',
    shadow: 'shadow-[0_8px_32px_rgba(0,0,0,1)]',
    shadowLg: 'shadow-[0_16px_64px_rgba(0,0,0,1)]',
    gradient: 'from-[#ffffff] to-[#a1a1aa]',
    inputBg: 'bg-[#ffffff]/[0.05]',
    divider: 'border-white/[0.08]',
  },
  light: {
    bg: 'bg-[#fcfcfc]',
    card: 'bg-[#ffffff]/90 backdrop-blur-xl shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.02)]',
    cardSolid: 'bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.02)]',
    cardGlass: 'bg-[#ffffff]/60 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.04)]',
    cardHover: 'hover:bg-[#ffffff] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)] hover:-translate-y-[2px] transition-all duration-300 ease-out',
    surface: 'bg-[#f4f4f5]',
    border: 'border-black/[0.04]',
    text: 'text-[#09090b]',
    subtext: 'text-[#71717a]',
    headerBg: 'bg-[#ffffff]/70 backdrop-blur-xl border-b border-black/[0.04]',
    accent: 'text-[#000000]',
    accentBg: 'bg-[#000000]',
    accentSoft: 'bg-[#000000]/5 text-[#000000]',
    ring: 'ring-[#000000]/20',
    shadow: 'shadow-[0_8px_32px_rgba(0,0,0,0.04)]',
    shadowLg: 'shadow-[0_16px_64px_rgba(0,0,0,0.08)]',
    gradient: 'from-[#000000] to-[#52525b]',
    inputBg: 'bg-black/[0.02]',
    divider: 'border-black/[0.04]',
  }
};

export type Theme = typeof themeColors['dark'];

export const fontSizes = {
  small: 'text-[13px]',
  normal: 'text-[14px]',
  large: 'text-[16px]'
};

export type FontSizeKey = keyof typeof fontSizes;

/* Semantic color tokens — Apple/Linear refined palette */
export const semanticColors = {
  correct: { bg: 'bg-[#34d399]/10', text: 'text-[#34d399]', border: 'border-[#34d399]/20', solid: 'bg-[#34d399]' },
  incorrect: { bg: 'bg-[#f87171]/10', text: 'text-[#f87171]', border: 'border-[#f87171]/20', solid: 'bg-[#f87171]' },
  warning: { bg: 'bg-[#fbbf24]/10', text: 'text-[#fbbf24]', border: 'border-[#fbbf24]/20', solid: 'bg-[#fbbf24]' },
  info: { bg: 'bg-[#38bdf8]/10', text: 'text-[#38bdf8]', border: 'border-[#38bdf8]/20', solid: 'bg-[#38bdf8]' },
  purple: { bg: 'bg-[#a78bfa]/10', text: 'text-[#a78bfa]', border: 'border-[#a78bfa]/20', solid: 'bg-[#a78bfa]' },
  gold: { bg: 'bg-[#fcd34d]/10', text: 'text-[#fcd34d]', border: 'border-[#fcd34d]/20', solid: 'bg-[#fcd34d]' },
};
