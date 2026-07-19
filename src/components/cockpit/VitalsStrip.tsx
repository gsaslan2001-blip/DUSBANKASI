/**
 * Glass Cockpit — Vitals Strip (Faz 3)
 *
 * YBÜ monitörü metaforu: 4 yaşamsal sinyal (doğruluk, hacim, tutarlılık, kapsama)
 * sparkline + eşik alarmıyla kalıcı HUD olarak yaşar. Sterile cockpit kuralı:
 * quiz view'larında App.tsx bu bileşeni hiç render etmez (viewRegistry.hudMode).
 * compact modda yalnızca alarm veren sinyaller görünür.
 *
 * Veri: Stats Kernel snapshot'ı (Worker'da hesaplanır) — burada SIFIR hesap vardır.
 */
import { motion } from 'framer-motion';
import type { Theme } from '../../theme';
import { useKernel, type Vital, type VitalStatus } from '../../lib/kernel';
import { SPRING } from '../../lib/motion';

const STATUS_META: Record<VitalStatus, { dot: string; text: string; ring: string }> = {
  ok:       { dot: 'bg-emerald-400',  text: 'text-emerald-400', ring: 'border-[color:var(--color-border-subtle)]' },
  warn:     { dot: 'bg-amber-400',    text: 'text-amber-400',   ring: 'border-amber-500/25' },
  critical: { dot: 'bg-red-400',      text: 'text-red-400',     ring: 'border-red-500/30' },
};

function Sparkline({ series, status, warnThreshold }: { series: number[]; status: VitalStatus; warnThreshold: number }) {
  if (series.length < 2) return null;
  const w = 56, h = 18;
  const max = Math.max(...series, warnThreshold, 1);
  const y = (v: number) => h - (Math.max(0, v) / max) * (h - 2) - 1;
  const pts = series
    .map((v, i) => `${(i / (series.length - 1)) * w},${y(v)}`)
    .join(' ');
  const stroke = status === 'critical' ? '#f87171' : status === 'warn' ? '#fbbf24' : '#34d399';
  const last = series[series.length - 1];
  const thresholdY = y(warnThreshold);
  return (
    <div className="flex flex-col items-center gap-0.5 shrink-0">
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="opacity-70" aria-hidden>
        {/* Alarm eşiği referans çizgisi */}
        <line x1="0" y1={thresholdY} x2={w} y2={thresholdY} stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2,2" />
        <polyline points={pts} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx={w} cy={y(last)} r="1.6" fill={stroke} />
      </svg>
      <span className="text-[8px] font-bold tabular-nums leading-none opacity-50" style={{ color: stroke }} aria-hidden>
        {Math.round(last)}
      </span>
    </div>
  );
}

function VitalCell({ v, theme }: { v: Vital; theme: Theme }) {
  const meta = STATUS_META[v.status];
  return (
    <div className={`flex items-center gap-3 px-3.5 py-2 rounded-2xl border ${meta.ring} bg-[color:var(--color-surface-2)]/40 min-w-0`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${meta.dot} ${v.status !== 'ok' ? 'animate-pulse' : ''}`} />
      <div className="flex flex-col min-w-0">
        <span className={`${theme.subtext} text-[9px] font-black uppercase tracking-widest truncate`}>{v.label}</span>
        <span className={`text-sm font-black leading-tight font-mono tabular-nums ${meta.text}`}>
          {v.value}<span className="opacity-60 font-bold text-[10px]">{v.suffix}</span>
        </span>
      </div>
      <Sparkline series={v.series} status={v.status} warnThreshold={v.warnThreshold} />
    </div>
  );
}

export function VitalsStrip({ theme, compact = false }: { theme: Theme; compact?: boolean }) {
  const kernel = useKernel();
  if (!kernel) return null;

  const vitals = compact ? kernel.vitals.filter(v => v.status !== 'ok') : kernel.vitals;
  if (vitals.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={SPRING.gentle}
      className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 pt-3 hidden md:block"
    >
      <div className="flex items-stretch gap-2 overflow-x-auto">
        {vitals.map(v => <VitalCell key={v.key} v={v} theme={theme} />)}
      </div>
    </motion.div>
  );
}

export default VitalsStrip;
