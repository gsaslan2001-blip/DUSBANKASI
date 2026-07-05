/**
 * KpiStatCard — Birleşik KPI kart widget'ı (Unified Design System v5.1)
 *
 * Tier-1 Executive Summary'deki tüm büyük/ikincil KPI kartlarını tek bir
 * tutarlı dil altında toplar. Eskiden her kart ayrı ayrı elle yazılmış
 * `motion.div` markup'ıydı (~140 satır tekrar). Bu widget onların yerine geçer.
 *
 * Tasarım dili:
 *  - Top hairline accent (gradient, accent rengi)
 *  - Köşede accent radial glow (hover'da yoğunlaşır)
 *  - İkon, accent-tint'li yuvarlak chip içinde
 *  - Büyük font-black tabular-nums değer
 *  - Opsiyonel alt-satır + TrendIndicator
 *  - Opsiyonel ince progress bar (hedef-tabanlı kartlar için)
 */
import { motion } from 'framer-motion';
import type { Theme } from '../../theme';
import TrendIndicator from './TrendIndicator';

export type KpiAccent =
  | 'emerald' | 'orange' | 'violet' | 'amber'
  | 'sky' | 'red' | 'rose' | 'indigo';

type AccentToken = {
  text: string;       // ikon + vurgu metin rengi
  chip: string;       // ikon chip arka planı
  glow: string;       // radial glow rgba
  bar: string;        // progress / hairline gradient (Tailwind from→to)
};

const ACCENTS: Record<KpiAccent, AccentToken> = {
  emerald: { text: 'text-emerald-400', chip: 'bg-emerald-400/10', glow: 'rgba(52,211,153,0.16)',  bar: 'from-emerald-400 to-emerald-500' },
  orange:  { text: 'text-orange-400',  chip: 'bg-orange-400/10',  glow: 'rgba(251,146,60,0.16)',   bar: 'from-orange-400 to-orange-500' },
  violet:  { text: 'text-violet-400',  chip: 'bg-violet-400/10',  glow: 'rgba(167,139,250,0.16)',  bar: 'from-violet-400 to-violet-500' },
  amber:   { text: 'text-amber-400',   chip: 'bg-amber-400/10',   glow: 'rgba(251,191,36,0.16)',   bar: 'from-amber-400 to-amber-500' },
  sky:     { text: 'text-sky-400',     chip: 'bg-sky-400/10',     glow: 'rgba(56,189,248,0.16)',   bar: 'from-sky-400 to-sky-500' },
  red:     { text: 'text-red-400',     chip: 'bg-red-400/10',     glow: 'rgba(248,113,113,0.16)',  bar: 'from-red-400 to-red-500' },
  rose:    { text: 'text-rose-400',    chip: 'bg-rose-400/10',    glow: 'rgba(251,113,133,0.16)',  bar: 'from-rose-400 to-rose-500' },
  indigo:  { text: 'text-indigo-400',  chip: 'bg-indigo-400/10',  glow: 'rgba(99,102,241,0.16)',   bar: 'from-indigo-400 to-indigo-500' },
};

export interface KpiStatCardProps {
  theme: Theme;
  label: string;
  value: React.ReactNode;
  icon: React.ReactNode;
  accent: KpiAccent;
  sub?: React.ReactNode;
  /** Değere göre renklenmiş özel değer metni gerekiyorsa accent yerine geçer (örn. doğruluk eşik rengi). */
  valueClassName?: string;
  trend?: { current: number; previous: number; format?: 'number' | 'percent' | 'days' };
  /** İnce alt progress bar — hedef-tabanlı kartlar için. pct 0-100. */
  progress?: { pct: number; label?: string; right?: string };
  delay?: number;
  className?: string;
}

export default function KpiStatCard({
  theme, label, value, icon, accent, sub, valueClassName,
  trend, progress, delay = 0, className = '',
}: KpiStatCardProps) {
  const a = ACCENTS[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 35, delay }}
      className={`relative ${theme.card} rounded-2xl overflow-hidden group
        hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${className}`}
    >
      {/* Köşe radial glow — hover'da yoğunlaşır */}
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none
          opacity-50 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${a.glow} 0%, transparent 70%)` }}
      />
      {/* Top hairline accent */}
      <div className={`absolute top-0 left-5 right-5 h-px bg-gradient-to-r ${a.bar} opacity-50 group-hover:opacity-90 transition-opacity duration-500`} />

      <div className="relative z-10 p-5 sm:p-6">
        <div className="flex items-start justify-between mb-4">
          <span className={`${theme.subtext} text-[10px] font-bold uppercase tracking-widest`}>{label}</span>
          <div className={`p-2 rounded-xl ${a.chip} ${a.text} group-hover:scale-110 transition-transform duration-500`}>
            {icon}
          </div>
        </div>

        <div className={`text-3xl sm:text-4xl font-black leading-none tracking-tight tabular-nums ${valueClassName ?? ''}`}>
          {value}
        </div>

        {(sub != null || trend) && (
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {sub != null && <span className={`${theme.subtext} text-[11px] font-medium`}>{sub}</span>}
            {trend && (
              <TrendIndicator
                current={trend.current}
                previous={trend.previous}
                format={trend.format ?? 'number'}
                period="7G"
              />
            )}
          </div>
        )}

        {progress && (
          <div className="mt-3">
            {(progress.label || progress.right) && (
              <div className="flex justify-between text-[10px] mb-1">
                {progress.label && <span className={theme.subtext}>{progress.label}</span>}
                {progress.right && <span className={theme.subtext}>{progress.right}</span>}
              </div>
            )}
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, Math.max(0, progress.pct))}%` }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: delay + 0.2 }}
                className={`h-full rounded-full bg-gradient-to-r ${a.bar}`}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
