import React from 'react';
import { motion } from 'framer-motion';
import type { Theme } from '../../theme';
import type { MomentumResult, LessonConsistency } from '../../lib/metrics';
import { Rocket, Scales, ChartLineUp } from '@phosphor-icons/react';
import { CURRICULUM_ORDER, getCurriculumOrderIndex } from '../../config/curriculum';

export function fmt(n: number): string {
  return n.toLocaleString('tr-TR');
}

export function trDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' });
}

export function accColor(acc: number): string {
  if (acc >= 75) return 'text-emerald-400';
  if (acc >= 50) return 'text-amber-400';
  return 'text-red-400';
}

export function weekLabel(dateStr: string): string {
  const d = new Date(dateStr);
  const day = d.getDay();
  const monday = new Date(d);
  monday.setDate(d.getDate() - (day === 0 ? 6 : day - 1));
  return `${monday.getDate()}/${monday.getMonth() + 1}`;
}

export function SectionTitle({
  title,
  right,
  mb = 'mb-8',
  eyebrow,
}: {
  title: string;
  right?: React.ReactNode;
  mb?: string;
  eyebrow?: string;
}) {
  return (
    <div className={`flex items-end justify-between ${mb}`}>
      <div className="flex flex-col gap-1">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[color:var(--color-text-secondary)] w-fit mb-0.5">
            {eyebrow}
          </span>
        )}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      {right}
    </div>
  );
}

export function getLessonColor(lesson: string): string {
  const idx = getCurriculumOrderIndex(lesson);
  const i = idx >= 0 ? idx : Math.abs(lesson.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % CURRICULUM_ORDER.length;
  return `hsl(${Math.round((i * 360) / CURRICULUM_ORDER.length)}, 55%, 58%)`;
}

export const MOMENTUM_META: Record<MomentumResult['label'], { text: string; color: string; bg: string }> = {
  accelerating: { text: 'Hızlanıyor', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  steady: { text: 'Sabit tempo', color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
  slowing: { text: 'Yavaşlıyor', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  idle: { text: 'Durağan', color: 'text-[#8b8b98]', bg: 'bg-white/[0.03] border-white/[0.06]' },
};

export function InsightCard({
  theme,
  icon,
  label,
  children,
  delay,
}: {
  theme: Theme;
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 35, delay }}
      className={`${theme.card} rounded-xl p-5 flex flex-col gap-2`}
    >
      <div className="flex items-center gap-2">
        <span className="text-indigo-400">{icon}</span>
        <span className={`${theme.subtext} text-xs font-bold uppercase tracking-widest`}>{label}</span>
      </div>
      {children}
    </motion.div>
  );
}

export function InsightStrip({
  theme,
  momentum,
  leastConsistent,
  weeklyForecast,
  forecastConfidence,
  forecastDaily,
}: {
  theme: Theme;
  momentum: MomentumResult;
  leastConsistent: LessonConsistency | null;
  weeklyForecast: number;
  forecastConfidence: number;
  forecastDaily: number;
}) {
  const mm = MOMENTUM_META[momentum.label];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Momentum */}
      <InsightCard theme={theme} icon={<Rocket size={16} weight="thin" />} label="Momentum" delay={0}>
        <div className="flex items-baseline gap-2">
          <span className={`text-3xl font-black leading-none font-mono tabular-nums ${mm.color}`}>
            {momentum.score > 0 ? '+' : ''}{momentum.score}
          </span>
          <span className={`px-2 py-0.5 rounded-lg border text-[10px] font-bold ${mm.bg} ${mm.color}`}>{mm.text}</span>
        </div>
        <span className={`${theme.subtext} text-xs font-mono tabular-nums`}>
          Hacim {momentum.recentAvg}/gün · Doğruluk %{momentum.recentAccuracy}
          {momentum.accuracyDelta !== 0 && ` (${momentum.accuracyDelta > 0 ? '+' : ''}${momentum.accuracyDelta}p)`}
        </span>
      </InsightCard>

      {/* Ders-içi tutarlılık */}
      <InsightCard theme={theme} icon={<Scales size={16} weight="thin" />} label="En Dengesiz Ders" delay={0.05}>
        {leastConsistent ? (
          <>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black leading-none truncate">{leastConsistent.lesson}</span>
            </div>
            <span className={`${theme.subtext} text-xs font-mono tabular-nums`}>
              Tutarlılık <span className={accColor(leastConsistent.consistency)}>%{leastConsistent.consistency}</span>
              {' · '}ort. %{leastConsistent.meanAccuracy} · ±{leastConsistent.stdDev}
            </span>
          </>
        ) : (
          <span className={`${theme.subtext} text-sm`}>Yeterli ünite verisi yok</span>
        )}
      </InsightCard>

      {/* 7 günlük tahmin */}
      <InsightCard theme={theme} icon={<ChartLineUp size={16} weight="thin" />} label="7 Günlük Tahmin" delay={0.1}>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black leading-none text-indigo-400 font-mono tabular-nums">{fmt(weeklyForecast)}</span>
          <span className={`${theme.subtext} text-xs`}>soru</span>
        </div>
        <span className={`${theme.subtext} text-xs font-mono tabular-nums`}>
          {forecastDaily}/gün eğilim · güven %{forecastConfidence}
        </span>
      </InsightCard>
    </div>
  );
}
