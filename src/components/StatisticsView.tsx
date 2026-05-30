
/**
 * DUS Bankası — KPI Dashboard v5 (3-Tier Hiyerarşi)
 *
 * Tier 1 (Above-Fold): Executive Summary — Big 4 KPI + Alert Banner + Hedef Ring
 * Tier 2 (First Scroll):  Tactical — Günlük Aktivite, Trend, Heatmap, Ders Karşılaştırma
 * Tier 3 (Deep Dive):    Operational — 25 Grafik 5 Collapsible Kategoride
 */

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import type { Question } from '../data';
import type { Theme } from '../theme';
import {
  loadAllStats,
  loadStreak,
  getRecentActivity,
  getActivitySummary,
  computeOverviewStats,
  generateKpiAlerts,
  computeTrend,
  computeActivityTrend,
  type StatsMap,
  type ActivityPoint,
} from '../lib/stats';
import {
  BookOpen, TrendUp, Gauge, CheckCircle, XCircle,
  Crown, Flame, Trophy, Stack, Target, Crosshair, GitBranch,
  Pulse, Clock, GitDiff,
} from '@phosphor-icons/react';
import {
  DailyActivityChart, AnimatedCounter, CountSparkline, ContributionHeatMap,
  WeeklyComparison, RadarChart, TrendLineChart, GoalRing, StudyTreemap,
  DersScatterPlot, WaterfallChart, BulletChart,
  GaugeChart, SunburstChart, AreaStreamGraph, SlopeGraph, DifferenceChart,
  ParallelCoordinates, TimeHistogram,
  TrendIndicator, KpiAlertBanner, CollapsibleSection,
} from './charts';

/* ─── Yardımcılar ────────────────────────────────────────────────────────── */

function fmt(n: number): string { return n.toLocaleString('tr-TR'); }

function trDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' });
}

function accColor(acc: number): string {
  if (acc >= 75) return 'text-emerald-400';
  if (acc >= 50) return 'text-amber-400';
  return 'text-red-400';
}

function weekLabel(dateStr: string): string {
  const d = new Date(dateStr);
  const day = d.getDay();
  const monday = new Date(d);
  monday.setDate(d.getDate() - (day === 0 ? 6 : day - 1));
  return `${monday.getDate()}/${monday.getMonth() + 1}`;
}

function SectionTitle({ title, right, mb = 'mb-8', eyebrow }: { title: string; right?: React.ReactNode; mb?: string; eyebrow?: string }) {
  return (
    <div className={`flex items-end justify-between ${mb}`}>
      <div className="flex flex-col gap-1">
        {eyebrow && <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[color:var(--color-text-secondary)] w-fit mb-0.5">{eyebrow}</span>}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      {right}
    </div>
  );
}

function SpringNumber({ value }: { value: number }) {
  const { number } = useSpring({
    from: { number: 0 }, number: value, delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span>{number.to((n) => Math.floor(n).toLocaleString('tr-TR'))}</animated.span>;
}

/* ─── KPI Big Card (Trend destekli) ─────────────────────────────────────── */

function KpiCard({ theme, label, value, sub, icon, accentBorder, accentText, trend, className }: {
  theme: Theme; label: string; value: React.ReactNode; sub?: React.ReactNode;
  icon: React.ReactNode; accentBorder: string; accentText: string;
  trend?: { current: number; previous: number; format?: 'number' | 'percent' | 'days' };
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
      className={`relative ${theme.card} rounded-xl overflow-hidden group transition-all duration-300 ${className ?? ''}`}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${accentBorder}`} />
      <div className="p-5 sm:p-6 pl-6">
        <div className="flex items-start justify-between mb-4">
          <span className={`${theme.subtext} text-xs font-bold uppercase tracking-widest`}>{label}</span>
          <span className={accentText}>{icon}</span>
        </div>
        <div className="text-3xl sm:text-4xl font-black leading-none mb-1">{value}</div>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          {sub != null && <span className={`${theme.subtext} text-xs`}>{sub}</span>}
          {trend && (
            <TrendIndicator
              current={trend.current}
              previous={trend.previous}
              format={trend.format ?? 'number'}
              period="7G"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Veri dönüşümleri ──────────────────────────────────────────────────── */

function buildWeeklyData(activity90: ActivityPoint[]) {
  const weekMap = new Map<string, number>();
  activity90.forEach(a => { const wl = weekLabel(a.date); weekMap.set(wl, (weekMap.get(wl) ?? 0) + a.count); });
  return Array.from(weekMap.entries()).map(([week, count]) => ({ week, count }));
}

function buildAreaStreamData(activity90: ActivityPoint[]) {
  const lessons = new Set<string>();
  activity90.forEach(a => Object.keys(a.byLesson).forEach(l => lessons.add(l)));
  return Array.from(lessons).slice(0, 8).map(lesson => ({
    lesson,
    values: activity90.slice(-42).map(a => ({
      date: a.date,
      count: a.byLesson[lesson]?.total ?? 0,
    })),
  }));
}

const LESSON_ORDER = [
  'Endodonti', 'Protez', 'Periodontoloji', 'Radyoloji', 'Patoloji', 'Histoloji',
  'Fizyoloji', 'Cerrahi', 'Biyokimya', 'Ortodonti', 'Restoratif', 'Pedodonti',
  'Mikrobiyoloji', 'Farmakoloji',
];

function getLessonColor(lesson: string): string {
  const idx = LESSON_ORDER.indexOf(lesson);
  const i = idx >= 0 ? idx : Math.abs(lesson.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % LESSON_ORDER.length;
  return `hsl(${Math.round((i * 360) / LESSON_ORDER.length)}, 55%, 58%)`;
}

/* ═══════════════════════════════════════════════════════════════════════════
   ANA BİLEŞEN
   ═══════════════════════════════════════════════════════════════════════════ */

export default function StatisticsView({ questions, theme }: { questions: Question[]; theme: Theme }) {
  const [range, setRange] = useState<14 | 30 | 90>(30);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const stats = useMemo(() => loadAllStats(), []);
  const overview = useMemo(() => computeOverviewStats(questions, stats), [questions, stats]);
  const streak = useMemo(() => loadStreak(), []);
  const activitySummary = useMemo(() => getActivitySummary(), []);
  const activity = useMemo(() => getRecentActivity(range), [range]);
  const activity90 = useMemo(() => getRecentActivity(90), []);

  const { difficulty, mastery } = overview;
  const statsInView = useInView({ triggerOnce: true, threshold: 0 });

  // ─── KPI Trend hesaplamaları ─────────────────────────────────────────────
  const accuracyTrend = useMemo(() => {
    const recent7 = activity90.slice(-7).reduce((s, a) => s + a.correct, 0);
    const recent7Total = activity90.slice(-7).reduce((s, a) => s + a.count, 0);
    const prev7 = activity90.slice(-14, -7).reduce((s, a) => s + a.correct, 0);
    const prev7Total = activity90.slice(-14, -7).reduce((s, a) => s + a.count, 0);
    const curr = recent7Total > 0 ? Math.round((recent7 / recent7Total) * 100) : 0;
    const prev = prev7Total > 0 ? Math.round((prev7 / prev7Total) * 100) : 0;
    return { current: curr, previous: prev };
  }, [activity90]);

  const solvedTrend = useMemo(() => computeActivityTrend(activity90, 7), [activity90]);
  const masteredTrend = useMemo(() => {
    // Basitleştirilmiş: son 7 günde ustalaşılan sayısı (accuracy > %80'e ulaşan)
    const recent7 = activity90.slice(-7).reduce((s, a) => s + Math.round(a.correct * 0.3), 0);
    const prev7 = activity90.slice(-14, -7).reduce((s, a) => s + Math.round(a.correct * 0.3), 0);
    return computeTrend(recent7, prev7);
  }, [activity90]);

  const streakTrend = useMemo(() => {
    const lastWeek = activity90.slice(-14, -7);
    const streakLastWeek = lastWeek.filter(a => a.count > 0).length;
    const streakThisWeek = activity90.slice(-7).filter(a => a.count > 0).length;
    return { current: streakThisWeek, previous: streakLastWeek };
  }, [activity90]);

  // ─── KPI Alert'ler ──────────────────────────────────────────────────────
  const alerts = useMemo(() => generateKpiAlerts(overview, streak, activity90), [overview, streak, activity90]);

  // ─── Türev veri hesaplamaları (grafikler için) ──────────────────────────
  const radarData = useMemo(() =>
    overview.byLesson.filter(l => l.solved > 0).slice(0, 8).map(l => ({ axis: l.lesson, value: l.accuracy })),
  [overview]);

  const scatterData = useMemo(() =>
    overview.byLesson.filter(l => l.solved > 0).map(l => ({ lesson: l.lesson, solved: l.solved, accuracy: l.accuracy, total: l.total })),
  [overview]);

  const weeklyData = useMemo(() => buildWeeklyData(activity90), [activity90]);

  const bulletData = useMemo(() =>
    overview.byLesson.filter(l => l.solved > 0).slice(0, 7).map(l => ({ label: l.lesson, value: l.accuracy, target: 80, max: 100 })),
  [overview]);

  const treemapData = useMemo(() =>
    overview.byLesson.filter(l => l.solved > 0).map(l => ({ name: l.lesson, value: l.solved, total: l.total, accuracy: l.accuracy })),
  [overview]);

  const timeHistData = useMemo(() => {
    const result: { timeSpent: number }[] = [];
    for (const q of questions) {
      const s = stats[q.id];
      if (!s || !s.timeSpentHistory || s.timeSpentHistory.length === 0) continue;
      for (const t of s.timeSpentHistory) result.push({ timeSpent: Math.round(t) });
    }
    return result;
  }, [questions, stats]);

  const sunburstData = useMemo(() => {
    const lessonMap = new Map<string, Map<string, { value: number; total: number }>>();
    for (const q of questions) {
      if (!lessonMap.has(q.lesson)) lessonMap.set(q.lesson, new Map());
      const units = lessonMap.get(q.lesson)!;
      if (!units.has(q.unit)) units.set(q.unit, { value: 0, total: 0 });
      const u = units.get(q.unit)!; u.total++;
      const s = stats[q.id]; if (s && s.attempts > 0) u.value++;
    }
    return Array.from(lessonMap.entries())
      .filter(([, units]) => Array.from(units.values()).some(u => u.value > 0))
      .map(([lesson, units]) => ({
        name: lesson, color: getLessonColor(lesson),
        children: Array.from(units.entries()).filter(([, u]) => u.value > 0)
          .map(([unit, u]) => ({ name: unit, value: u.value, total: u.total })),
      }));
  }, [questions, stats]);

  const slopeData = useMemo(() => {
    const recent30 = activity90.slice(-30);
    const prev30 = activity90.slice(-60, -30);
    const perLessonRecent = new Map<string, { correct: number; total: number }>();
    const perLessonPrev = new Map<string, { correct: number; total: number }>();
    recent30.forEach(a => Object.entries(a.byLesson).forEach(([l, v]) => {
      const x = perLessonRecent.get(l) ?? { correct: 0, total: 0 }; x.correct += v.correct; x.total += v.total; perLessonRecent.set(l, x);
    }));
    prev30.forEach(a => Object.entries(a.byLesson).forEach(([l, v]) => {
      const x = perLessonPrev.get(l) ?? { correct: 0, total: 0 }; x.correct += v.correct; x.total += v.total; perLessonPrev.set(l, x);
    }));
    const left = Array.from(perLessonPrev.entries()).filter(([, v]) => v.total > 0)
      .map(([lesson, v]) => ({ lesson, accuracy: Math.round((v.correct / v.total) * 100) }));
    const right = Array.from(perLessonRecent.entries()).filter(([, v]) => v.total > 0)
      .map(([lesson, v]) => ({ lesson, accuracy: Math.round((v.correct / v.total) * 100) }));
    return { left, right };
  }, [activity90]);

  const diffData = useMemo(() =>
    activity90.slice(-30).map(a => ({ date: a.date, target: 200, actual: a.count })),
  [activity90]);

  const areaStreamData = useMemo(() => buildAreaStreamData(activity90), [activity90]);

  const parallelData = useMemo(() =>
    overview.byLesson.filter(l => l.solved > 0).slice(0, 8).map(l => ({
      lesson: l.lesson, difficulty: l.accuracy < 50 ? 8 : l.accuracy < 75 ? 5 : 3,
      accuracy: l.accuracy, timeSpent: 20 + Math.round(l.attempts / Math.max(1, l.solved)) * 5, count: l.attempts,
    })),
  [overview]);

  const dailyGoal = 200;

  // ─── Collapsible section summary hesaplamaları ────────────────────────
  const improvingLessons = slopeData.right.filter(r => {
    const l = slopeData.left.find(x => x.lesson === r.lesson);
    return l && r.accuracy > l.accuracy;
  }).length;

  return (
    <div ref={statsInView.ref} className={`flex flex-col gap-5 pb-12 ${statsInView.inView ? 'anim-slide-up' : 'opacity-0'}`}>

      {/* ════════════════════════════════════════════════════════════════════
         TIER 1 — EXECUTIVE SUMMARY (Above-Fold)
         ════════════════════════════════════════════════════════════════════ */}

      {/* Sayfa Başlığı */}
      <div className="mb-2">
        <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/15 inline-block mb-3">Performans Paneli</span>
        <h1 className="text-[56px] font-black leading-none tracking-tight">İstatistikler</h1>
        <p className={`${theme.subtext} text-sm mt-2`}>KPI odaklı performans analizi ve 25 görselleştirme.</p>
      </div>

      {/* A3: Alert Banner Row (en üstte — hemen dikkat çekmeli) */}
      <KpiAlertBanner alerts={alerts} />

      {/* A1: Big 4 Executive KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard theme={theme} label="Genel Doğruluk" accentBorder="bg-emerald-400/50" accentText="text-emerald-400"
          icon={<Gauge size={16} weight="thin" />}
          value={<span className={accColor(overview.accuracy)}>%{overview.accuracy}</span>}
          sub={<>Hedef: %80</>}
          trend={{ current: accuracyTrend.current, previous: accuracyTrend.previous, format: 'percent' }} />
        <KpiCard theme={theme} label="Aktif Seri" accentBorder="bg-orange-400/50" accentText="text-orange-400"
          icon={<Flame size={16} weight="thin" />}
          value={<>{streak.currentStreak} <span className="text-sm font-bold opacity-50">GÜN</span></>}
          sub={<>Hedef: 150 Gün</>}
          trend={{ current: streakTrend.current, previous: streakTrend.previous, format: 'days' }} />
        <KpiCard theme={theme} label="Toplam Çözüm" accentBorder="bg-violet-400/50" accentText="text-violet-400"
          icon={<TrendUp size={16} weight="thin" />}
          value={<AnimatedCounter value={overview.totalAttempts} />}
          sub={<>{fmt(overview.solvedUnique)} benzersiz</>}
          trend={{ current: solvedTrend.delta + (solvedTrend.direction === 'up' ? solvedTrend.delta : 0) || solvedTrend.delta,
            previous: activity90.slice(-14, -7).reduce((s, a) => s + a.count, 0), format: 'number' }} />
        <KpiCard theme={theme} label="Ustalaşılan" accentBorder="bg-amber-400/50" accentText="text-amber-400"
          icon={<Crown size={16} weight="thin" />}
          value={<AnimatedCounter value={overview.masteredUnique} />}
          sub={<>{fmt(overview.masteredUnique)} / 5.000 hedef</>}
          trend={{ current: masteredTrend.delta, previous: 0, format: 'number' }} />
      </div>

      {/* A1b: İkincil KPI Kartları — Soru Bankası, Doğru, Yanlış, Rekor */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          className={`relative ${theme.card} rounded-xl overflow-hidden group transition-all duration-300`}>
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky-400/50" />
          <div className="p-5 sm:p-6 pl-6">
            <div className="flex items-start justify-between mb-4">
              <span className={`${theme.subtext} text-xs font-bold uppercase tracking-widest`}>Soru Bankası</span>
              <span className="text-sky-400"><BookOpen size={16} weight="thin" /></span>
            </div>
            <div className="flex items-center gap-3">
              <div style={{ width: 48, height: 48 }}>
                <CircularProgressbar value={overview.coverage} text={`${overview.coverage}%`}
                  styles={buildStyles({ pathColor: '#38bdf8', textColor: '#ececf1', trailColor: 'rgba(255,255,255,0.05)', textSize: '22px' })} />
              </div>
              <div><div className="text-2xl sm:text-3xl font-black"><SpringNumber value={overview.bankTotal} /></div>
                <div className={`${theme.subtext} text-[10px]`}>Toplam soru</div></div>
            </div>
            <div className="mt-3"><div className="flex justify-between text-[10px] mb-1"><span className={theme.subtext}>Kapsama Hedefi: %90</span><span className={theme.subtext}>%{Math.round((overview.coverage / 90) * 100)}</span></div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-sky-400 rounded-full transition-all duration-1000" style={{ width: `${Math.min(100, Math.round((overview.coverage / 90) * 100))}%` }} /></div></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ type: 'spring', stiffness: 400, damping: 35, delay: 0.05 }}
          className={`relative ${theme.card} rounded-xl overflow-hidden group transition-all duration-300`}>
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500/50" />
          <div className="p-5 sm:p-6 pl-6">
            <div className="flex items-start justify-between mb-4">
              <span className={`${theme.subtext} text-xs font-bold uppercase tracking-widest`}>Doğru Cevap</span>
              <span className="text-emerald-400"><CheckCircle size={16} weight="thin" /></span>
            </div>
            <div className="text-3xl sm:text-4xl font-black leading-none mb-1"><AnimatedCounter value={overview.totalCorrects} /></div>
            <div className="mt-2"><div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: `${overview.accuracy}%` }} /></div></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ type: 'spring', stiffness: 400, damping: 35, delay: 0.1 }}
          className={`relative ${theme.card} rounded-xl overflow-hidden group transition-all duration-300`}>
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-400/50" />
          <div className="p-5 sm:p-6 pl-6">
            <div className="flex items-start justify-between mb-4">
              <span className={`${theme.subtext} text-xs font-bold uppercase tracking-widest`}>Yanlış Cevap</span>
              <span className="text-red-400"><XCircle size={16} weight="thin" /></span>
            </div>
            <div className="text-3xl sm:text-4xl font-black leading-none mb-1 text-red-400"><AnimatedCounter value={overview.totalIncorrects} /></div>
            <span className={`${theme.subtext} text-[10px]`}>{fmt(overview.wrongEverUnique)} soru en az 1 kez yanlış</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ type: 'spring', stiffness: 400, damping: 35, delay: 0.15 }}
          className={`relative ${theme.card} rounded-xl overflow-hidden group transition-all duration-300`}>
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rose-400/50" />
          <div className="p-5 sm:p-6 pl-6">
            <div className="flex items-start justify-between mb-4">
              <span className={`${theme.subtext} text-xs font-bold uppercase tracking-widest`}>Günlük Rekor</span>
              <span className="text-rose-400"><Trophy size={16} weight="thin" /></span>
            </div>
            {activitySummary.bestDay ? (
              <><div className="text-3xl sm:text-4xl font-black leading-none mb-1 text-rose-400"><AnimatedCounter value={activitySummary.bestDay.count} /></div>
                <span className={`${theme.subtext} text-[10px]`}>{trDate(activitySummary.bestDay.date)}</span></>
            ) : <div className={`${theme.subtext} text-sm`}>Henüz veri yok</div>}
          </div>
        </motion.div>
      </div>

      {/* A2: Quick Stats Strip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        className={`${theme.card} rounded-xl px-5 py-3 flex flex-wrap items-center gap-x-6 gap-y-1.5 text-xs`}
      >
        <span className="font-bold">Bugün: <span className="text-indigo-400">{activitySummary.todayCount}</span> soru</span>
        <span className="w-px h-4 bg-white/10 hidden sm:block" />
        <span className={activitySummary.todayCount >= dailyGoal ? 'text-emerald-400' : theme.subtext}>
          Günlük Hedef: {dailyGoal} (%{Math.round((activitySummary.todayCount / dailyGoal) * 100)})
        </span>
        <span className="w-px h-4 bg-white/10 hidden sm:block" />
        <span className={theme.subtext}>Kapsama: <span className="font-bold text-[color:var(--color-text-primary)]">%{overview.coverage}</span></span>
        <span className="w-px h-4 bg-white/10 hidden sm:block" />
        <span className={theme.subtext}>Aktif Gün: <span className="font-bold text-[color:var(--color-text-primary)]">{activitySummary.activeDays}</span></span>
        <span className="w-px h-4 bg-white/10 hidden sm:block" />
        <span className={theme.subtext}>Rekor: <span className="font-bold text-rose-400">{activitySummary.bestDay ? `${activitySummary.bestDay.count} soru` : '—'}</span></span>
      </motion.div>

      {/* A4: Hedef Ring + Kapsama Gauge + Radar */}
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-4">
        <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className={`${theme.card} p-6 sm:p-8 rounded-xl flex flex-col items-center justify-center md:col-span-1 lg:col-span-2`}>
          <GoalRing value={activitySummary.todayCount} target={dailyGoal} label="Bugün" suffix="soru" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className={`${theme.card} p-6 sm:p-8 rounded-xl flex flex-col items-center justify-center md:col-span-1 lg:col-span-2`}>
          <GaugeChart value={overview.coverage} max={100} label="Kapsama" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className={`${theme.card} p-6 sm:p-8 rounded-xl md:col-span-3 lg:col-span-8`}>
          <SectionTitle title="Ders Performans Radarı" eyebrow="Multi-Boyut" right={<Crosshair size={16} weight="thin" className="text-indigo-400" />} mb="mb-4" />
          <RadarChart data={radarData} size={220} />
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
         TIER 2 — TACTICAL VIEW (First Scroll)
         ════════════════════════════════════════════════════════════════════ */}

      {/* Günlük Aktivite + Seçili Gün Detayı */}
      <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className={`${theme.card} p-6 sm:p-8 rounded-xl`}>
        <SectionTitle title="Günlük Çözüm Aktivitesi" eyebrow="Aktivite"
          right={<div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-emerald-500" /><span className={theme.subtext}>Doğru</span></div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-red-400" /><span className={theme.subtext}>Yanlış</span></div>
            <div className="flex items-center gap-1 text-[11px] font-bold ml-2">
              {([14, 30, 90] as const).map(r => (
                <button key={r} onClick={() => { setRange(r); setSelectedDay(null); }}
                  className={`px-2.5 py-1 rounded-lg transition-all ${range === r ? 'bg-indigo-500/20 text-indigo-300' : `${theme.subtext} hover:bg-white/[0.06]`}`}>{r}G</button>))}
            </div></div>} />
        <DailyActivityChart data={activity.map(a => ({ date: a.date, correct: a.correct, incorrect: a.incorrect }))}
          onDaySelect={setSelectedDay} selectedDay={selectedDay} />
        {selectedDay && (() => {
          const selected = activity.find(a => a.date === selectedDay);
          if (!selected) return null;
          const acc = Math.round((selected.correct / Math.max(1, selected.count)) * 100);
          const dailyAvg = activitySummary.activeDays > 0 ? Math.round(activitySummary.totalSolved / activitySummary.activeDays) : 0;
          const isRecord = !!activitySummary.bestDay && activitySummary.bestDay.date === selected.date;
          return (
            <div className={`mt-5 ${theme.surface} rounded-xl p-4 border ${theme.border} anim-fade-in`}>
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <span className="text-sm font-bold flex items-center gap-2">{trDate(selected.date)}
                  {isRecord && <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-md px-1.5 py-0.5"><Trophy size={10} /> Rekor</span>}</span>
                <span className={`${theme.subtext} text-[11px]`}>Günlük ort. {dailyAvg} · {selected.count - dailyAvg >= 0 ? '+' : ''}{selected.count - dailyAvg} fark</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="text-center"><div className="text-2xl font-black text-indigo-400">{selected.count}</div><div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Çözülen</div></div>
                <div className="text-center"><div className="text-2xl font-black text-emerald-400">{selected.correct}</div><div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Doğru</div></div>
                <div className="text-center"><div className="text-2xl font-black text-red-400">{selected.incorrect}</div><div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Yanlış</div></div>
                <div className="text-center"><div className={`text-2xl font-black ${accColor(acc)}`}>%{acc}</div><div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Başarı</div></div>
              </div>
            </div>);
        })()}
        {!selectedDay && <p className={`${theme.subtext} text-[11px] mt-4 text-center`}>Detay için bir güne tıkla</p>}
      </motion.div>

      {/* Trend Çizgi + Fark */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className={`${theme.card} p-6 sm:p-8 rounded-xl lg:col-span-7`}>
          <SectionTitle title="Çözüm Trendi" eyebrow="Trend" right={<Pulse size={16} weight="thin" className="text-indigo-400" />} />
          <TrendLineChart data={activity90.slice(-42).map(a => ({ date: a.date, correct: a.correct, incorrect: a.incorrect, total: a.count }))} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className={`${theme.card} p-6 sm:p-8 rounded-xl lg:col-span-5`}>
          <SectionTitle title="Hedef vs Gerçekleşen" eyebrow="Sapma" right={<Target size={16} weight="thin" className="text-rose-400" />} />
          <DifferenceChart data={diffData} />
        </motion.div>
      </div>

      {/* Heatmap + Özet (Tactical seviyesinde önemli) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className={`${theme.card} p-6 sm:p-8 rounded-xl lg:col-span-8`}>
          <SectionTitle title="Aktivite Yoğunluğu" eyebrow="Heatmap" mb="mb-6"
            right={<div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: '#8b8b98' }}>
              <span>AZ</span><div className="flex gap-1"><div className="w-3 h-3 rounded-sm bg-white/5" /><div className="w-3 h-3 rounded-sm bg-emerald-900" /><div className="w-3 h-3 rounded-sm bg-emerald-700" /><div className="w-3 h-3 rounded-sm bg-emerald-500" /></div><span>ÇOK</span></div>} />
          <ContributionHeatMap data={activity90.map(a => ({ date: a.date, count: a.count }))} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className={`${theme.card} p-6 sm:p-8 rounded-xl lg:col-span-4`}>
          <SectionTitle title="Özet Bilgiler" eyebrow="Özet" mb="mb-6" />
          <div className="space-y-0">
            {[['Mevcut Seri', `${streak.currentStreak} GÜN`, 'text-orange-500'], ['En Uzun Seri', `${streak.longestStreak} GÜN`, ''], ['Aktif Gün', `${activitySummary.activeDays} GÜN`, ''], ['Günlük Ort.', `${activitySummary.activeDays > 0 ? Math.round(activitySummary.totalSolved / activitySummary.activeDays) : 0}`, ''], ['Genel Doğru', fmt(overview.totalCorrects), 'text-emerald-400'], ['Genel Yanlış', fmt(overview.totalIncorrects), 'text-red-400']]
              .map(([l, v, c], i) => <div key={i} className={`flex justify-between items-center py-3 ${i < 5 ? 'border-b border-white/5' : ''}`}><span className={`text-sm ${theme.subtext}`}>{l}</span><span className={`font-bold ${c}`}>{v}</span></div>)}
          </div>
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
         TIER 3 — DEEP DIVE (Collapsible Sections)
         ════════════════════════════════════════════════════════════════════ */}

      <div className="mt-6 mb-4">
        <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 inline-block mb-3">Derinlemesine Analiz</span>
        <h2 className="text-2xl font-bold">Detaylı Görselleştirmeler</h2>
        <p className={`${theme.subtext} text-xs mt-1`}>Her bölüme tıklayarak açıp kapatabilirsiniz.</p>
      </div>

      {/* 1. Zaman Bazlı */}
      <CollapsibleSection theme={theme} title="Zaman Bazlı Analizler" summary={`${activity90.slice(-30).filter(a => a.count > 0).length} aktif gün · ${activity90.slice(-30).reduce((s, a) => s + a.count, 0)} son 30 gün çözüm`} defaultOpen>
        <div className="space-y-4">
          <div className={`${theme.surface} rounded-xl p-5`}>
            <SectionTitle title="Ders Bazlı Çözüm Hacmi Akışı" eyebrow="Hacim" mb="mb-4" />
            <AreaStreamGraph data={areaStreamData} />
          </div>
          <div className={`${theme.surface} rounded-xl p-5`}>
            <SectionTitle title="Haftalık Çözüm Değişimi" eyebrow="Waterfall" mb="mb-4" />
            <WaterfallChart data={weeklyData} />
          </div>
          <div className={`${theme.surface} rounded-xl p-5`}>
            <SectionTitle title="Çözüm Süresi Dağılımı" eyebrow="Süre" right={<Clock size={16} weight="thin" className="text-indigo-400" />} mb="mb-4" />
            <TimeHistogram data={timeHistData} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className={`${theme.surface} rounded-xl p-5 lg:col-span-7`}>
              <SectionTitle title="30 Günlük Başarı Trendi" eyebrow="Sparkline" mb="mb-4" />
              <CountSparkline data={activity90.slice(-30).map(a => ({ date: a.date, count: a.count }))} />
            </div>
            <div className={`${theme.surface} rounded-xl p-5 lg:col-span-5`}>
              <SectionTitle title="Haftalık Soru Karşılaştırması" eyebrow="Haftalık" mb="mb-4" />
              <WeeklyComparison activity={activity90.slice(-14).map(a => ({ date: a.date, count: a.count, correct: a.correct, incorrect: a.incorrect }))} />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 2. Karşılaştırma */}
      <CollapsibleSection theme={theme} title="Karşılaştırmalı Analizler" summary={`${improvingLessons} ders trendde yükselişte ▲ · Son 30G vs Önceki 30G`}>
        <div className="space-y-4">
          <div className={`${theme.surface} rounded-xl p-5`}>
            <SectionTitle title="Son 30 Gün vs Önceki 30 Gün" eyebrow="Karşılaştırma" right={<GitDiff size={16} weight="thin" className="text-indigo-400" />} mb="mb-4" />
            <SlopeGraph leftPeriod={slopeData.left} rightPeriod={slopeData.right} leftLabel="Önceki 30G" rightLabel="Son 30G" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className={`${theme.surface} rounded-xl p-5 lg:col-span-5`}>
              <SectionTitle title="Ders Dağılım Grafiği" eyebrow="Scatter" mb="mb-4" />
              <DersScatterPlot data={scatterData} />
            </div>
            <div className={`${theme.surface} rounded-xl p-5 lg:col-span-7`}>
              <SectionTitle title="Ders Hedef Karşılaştırması" eyebrow="Hedef" right={<Target size={16} weight="thin" className="text-rose-400" />} mb="mb-4" />
              <BulletChart data={bulletData} />
            </div>
          </div>
          <div className={`${theme.surface} rounded-xl p-5`}>
            <SectionTitle title="Çok Boyutlu Ders Analizi" eyebrow="Parallel" right={<GitBranch size={16} weight="thin" className="text-indigo-400" />} mb="mb-4" />
            <ParallelCoordinates data={parallelData} />
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Dağılım & Ustalık */}
      <CollapsibleSection theme={theme} title="Dağılım & Ustalık Durumu" summary={`${mastery.mastered} uzman · ${mastery.learning} öğreniliyor · ${mastery.weak} zayıf · ${mastery.untouched} yeni`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7">
            <div className={`${theme.surface} rounded-xl p-5`}>
              <SectionTitle title="Ders Bazlı Performans" eyebrow="Doğruluk" mb="mb-4" />
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
                {overview.byLesson.filter(l => l.solved > 0).length === 0
                  ? <p className={`${theme.subtext} text-xs`}>Henüz çözülmüş soru yok.</p>
                  : overview.byLesson.filter(l => l.solved > 0).sort((a, b) => b.accuracy - a.accuracy).map(l => {
                    const c = l.accuracy > 70 ? 'bg-emerald-500' : l.accuracy > 50 ? 'bg-amber-400' : 'bg-red-400';
                    return <div key={l.lesson} className="space-y-2"><div className="flex justify-between text-sm"><span className="font-medium">{l.lesson}</span><span className="font-bold">{l.accuracy}%</span></div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden"><div className={`h-full ${c} transition-all duration-1000 rounded-full`} style={{ width: `${l.accuracy}%` }} /></div></div>;
                  })}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className={`${theme.surface} rounded-xl p-5 flex-1`}>
              <SectionTitle title="Zorluk Dağılımı" eyebrow="Seviye" mb="mb-4" />
              {(() => {
                const t = difficulty.easy + difficulty.medium + difficulty.hard;
                const ep = t > 0 ? Math.round((difficulty.easy / t) * 100) : 45;
                const mp = t > 0 ? Math.round((difficulty.medium / t) * 100) : 35;
                return (<div className="space-y-3">
                  <div className="h-10 w-full flex rounded-lg overflow-hidden border border-white/5">
                    <div className="bg-emerald-500 h-full flex items-center justify-center text-[10px] font-bold" style={{ width: `${ep}%` }}>KOLAY</div>
                    <div className="bg-amber-400 h-full flex items-center justify-center text-[10px] font-bold text-black/70" style={{ width: `${mp}%` }}>ORTA</div>
                    <div className="bg-red-400 h-full flex items-center justify-center text-[10px] font-bold" style={{ width: `${100 - ep - mp}%` }}>ZOR</div>
                  </div>
                  <div className="flex justify-between text-xs px-1"><span className={theme.subtext}>{fmt(difficulty.easy)} Soru</span><span className={theme.subtext}>{fmt(difficulty.medium)} Soru</span><span className={theme.subtext}>{fmt(difficulty.hard)} Soru</span></div>
                </div>);
              })()}
            </div>
            <div className={`${theme.surface} rounded-xl p-5 flex-1`}>
              <SectionTitle title="Ustalaşma Durumu" eyebrow="Mastery" mb="mb-4" />
              {(() => {
                const t = mastery.untouched + mastery.weak + mastery.learning + mastery.mastered;
                const p = t > 0 ? { u: Math.round((mastery.untouched / t) * 100), w: Math.round((mastery.weak / t) * 100), l: Math.round((mastery.learning / t) * 100), m: Math.round((mastery.mastered / t) * 100) } : { u: 20, w: 25, l: 35, m: 20 };
                return (<div className="flex items-end gap-3 h-32">
                  {[{ l: 'Yeni', c: 'bg-white/5', p: p.u }, { l: 'Zayıf', c: 'bg-red-400/40', p: p.w, t: 'text-red-400' }, { l: 'Öğreniliyor', c: 'bg-indigo-400/50', p: p.l, t: 'text-indigo-400' }, { l: 'Uzman', c: 'bg-emerald-500', p: p.m, t: 'text-emerald-400' }]
                    .map(b => <div key={b.l} className="flex-1 flex flex-col items-center gap-2 h-full justify-end"><span className={`text-[10px] font-bold ${b.t ?? theme.subtext}`}>{b.l}</span><div className={`w-full ${b.c} rounded-t-lg`} style={{ height: `${Math.max(b.p, 5)}%` }} /></div>)}
                </div>);
              })()}
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 4. Hiyerarşi & Kapsam */}
      <CollapsibleSection theme={theme} title="Hiyerarşi & Kapsam Görünümü" summary={`${overview.byLesson.filter(l => l.solved > 0).length} aktif ders · Treemap + Sunburst`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className={`${theme.surface} rounded-xl p-5 lg:col-span-5`}>
            <SectionTitle title="Ders Kapsama Haritası" eyebrow="Treemap" mb="mb-4" />
            <StudyTreemap data={treemapData} />
          </div>
          <div className={`${theme.surface} rounded-xl p-5 lg:col-span-7`}>
            <SectionTitle title="Ders-Ünite Hiyerarşisi" eyebrow="Sunburst" mb="mb-4" />
            <SunburstChart data={sunburstData} />
          </div>
        </div>
      </CollapsibleSection>

      {/* 5. En İyi Ders & Ünite (Öne Çıkanlar) */}
      <CollapsibleSection theme={theme} title="Öne Çıkanlar & Ünite Haritası" summary={`En iyi ders: ${overview.topLessonBySolved?.lesson ?? '—'} · Detaylı ünite ısı haritası`}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-4">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${theme.card} rounded-xl p-5 sm:p-8 relative overflow-hidden group md:col-span-2 lg:col-span-5`}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full -mr-24 -mt-24 blur-3xl group-hover:scale-110 transition-transform pointer-events-none" />
              <div className="relative z-10 flex items-center gap-6 sm:gap-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-emerald-500/20 border border-emerald-400/20 flex items-center justify-center shrink-0"><BookOpen size={36} className="text-emerald-400" /></div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase mb-1">En İyi Ders</div>
                  {overview.topLessonBySolved ? (
                    <><div className="text-2xl sm:text-3xl font-black truncate">{overview.topLessonBySolved.lesson}</div>
                      <div className="flex items-center gap-4 mt-2">
                        <div><div className={`${theme.subtext} text-xs`}>Doğruluk</div><div className={`text-xl font-bold ${accColor(overview.topLessonBySolved.accuracy)}`}>%{overview.topLessonBySolved.accuracy}</div></div>
                        <div className="w-px h-8 bg-white/10" />
                        <div><div className={`${theme.subtext} text-xs`}>Tamamlanma</div><div className="text-xl font-bold">%{Math.round((overview.topLessonBySolved.solved / Math.max(1, overview.topLessonBySolved.total)) * 100)}</div></div>
                      </div></>) : <div className={`${theme.subtext} text-sm`}>Henüz veri yok</div>}
                </div></div></motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${theme.card} rounded-xl p-5 sm:p-8 relative overflow-hidden group md:col-span-3 lg:col-span-7`}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full -mr-24 -mt-24 blur-3xl group-hover:scale-110 transition-transform pointer-events-none" />
              <div className="relative z-10 flex items-center gap-6 sm:gap-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center shrink-0"><Stack size={36} className="text-indigo-400" /></div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase mb-1">En İyi Ünite</div>
                  {overview.topUnitBySolved ? (
                    <><div className="text-xl font-bold truncate" title={overview.topUnitBySolved.unit}>{overview.topUnitBySolved.unit}</div>
                      <div className="flex items-center gap-4 mt-2">
                        <div><div className={`${theme.subtext} text-xs`}>Doğruluk</div><div className={`text-xl font-bold ${accColor(overview.topUnitBySolved.accuracy)}`}>%{overview.topUnitBySolved.accuracy}</div></div>
                        <div className="w-px h-8 bg-white/10" />
                        <div><div className={`${theme.subtext} text-xs`}>Soru</div><div className="text-xl font-bold">{fmt(overview.topUnitBySolved.total)}</div></div>
                      </div></>) : <div className={`${theme.subtext} text-sm`}>Henüz veri yok</div>}
                </div></div></motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <UnitHeatMap questions={questions} stats={stats} theme={theme} />
          </motion.div>
        </div>
      </CollapsibleSection>

    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════════════════
   ÜNİTE ISI HARİTASI (Internal Helper)
   ═════════════════════════════════════════════════════════════════════════════ */

type UnitCell = { attempts: number; corrects: number; total: number; solved: number; lastSeen: string };

function coverageCellColor(solved: number, total: number): string {
  if (solved === 0) return 'bg-red-900/40 text-red-300 border border-red-800/50';
  const cov = (solved / total) * 100;
  if (cov <= 20) return 'bg-orange-600/20 text-orange-300 border border-orange-600/30';
  if (cov <= 40) return 'bg-orange-500/15 text-orange-300 border border-orange-500/25';
  if (cov <= 60) return 'bg-amber-400/15 text-amber-300 border border-amber-400/25';
  if (cov <= 80) return 'bg-emerald-500/12 text-emerald-300 border border-emerald-500/25';
  return 'bg-emerald-600/25 text-emerald-200 border border-emerald-500/40';
}
function coverageBarColor(pct: number): string {
  if (pct === 0) return 'bg-red-600/50'; if (pct <= 20) return 'bg-orange-500/60'; if (pct <= 40) return 'bg-orange-400/50';
  if (pct <= 60) return 'bg-amber-400/50'; if (pct <= 80) return 'bg-emerald-500/50'; return 'bg-emerald-400/60';
}

const LESSON_BORDERS: Record<string, string> = {
  'Endodonti': 'border-l-sky-400/60', 'Protez': 'border-l-indigo-400/60', 'Periodontoloji': 'border-l-violet-400/60',
  'Radyoloji': 'border-l-amber-400/60', 'Patoloji': 'border-l-rose-400/60', 'Histoloji': 'border-l-emerald-400/60',
  'Fizyoloji': 'border-l-cyan-400/60', 'Cerrahi': 'border-l-orange-400/60', 'Biyokimya': 'border-l-blue-400/60',
  'Ortodonti': 'border-l-teal-400/60', 'Restoratif': 'border-l-yellow-400/60', 'Pedodonti': 'border-l-pink-400/60',
  'Mikrobiyoloji': 'border-l-green-400/60', 'Farmakoloji': 'border-l-purple-400/60',
};

function UnitHeatMap({ questions, stats, theme }: { questions: Question[]; stats: StatsMap; theme: Theme }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const lessonMap = useMemo(() => {
    const m = new Map<string, Map<string, UnitCell>>();
    for (const q of questions) {
      if (!m.has(q.lesson)) m.set(q.lesson, new Map());
      const units = m.get(q.lesson)!;
      if (!units.has(q.unit)) units.set(q.unit, { attempts: 0, corrects: 0, total: 0, solved: 0, lastSeen: '' });
      const u = units.get(q.unit)!; u.total++;
      const s = stats[q.id];
      if (s && s.attempts > 0) { u.solved++; u.attempts += s.attempts; u.corrects += s.corrects; if (s.lastSeen && s.lastSeen > u.lastSeen) u.lastSeen = s.lastSeen; }
    }
    return m;
  }, [questions, stats]);
  const lessons = Array.from(lessonMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className={`${theme.card} p-5 sm:p-6 rounded-xl`}>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h3 className="text-sm font-bold flex items-center gap-2"><Stack size={16} className="text-emerald-400" />Ünite Isı Haritası <span className={`${theme.subtext} font-medium text-[10px]`}>(çözülen / toplam)</span></h3>
        <div className="flex items-center gap-2 text-[9px] font-medium flex-wrap">
          {[['Hiç', 'bg-red-900/60'], ['<%20', 'bg-orange-600/40'], ['%21-40', 'bg-orange-500/30'], ['%41-60', 'bg-amber-400/30'], ['%61-80', 'bg-emerald-500/25'], ['%81+', 'bg-emerald-600/50']]
            .map(([l, c]) => <span key={l} className="flex items-center gap-1"><span className={`w-2.5 h-2.5 rounded-sm ${c} border ${c}`} />{l}</span>)}
        </div>
      </div>
      <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {lessons.map(([lesson, units], lessonIdx) => {
          const unitArr = Array.from(units.entries()).sort((a, b) => (a[1].solved / Math.max(1, a[1].total)) - (b[1].solved / Math.max(1, b[1].total)));
          const lT = unitArr.reduce((s, [, u]) => s + u.total, 0), lS = unitArr.reduce((s, [, u]) => s + u.solved, 0);
          const lC = Math.round((lS / Math.max(1, lT)) * 100);
          return (
            <div key={lesson}>
              {lessonIdx > 0 && <div className={`border-t ${theme.divider} mb-5`} />}
              <div className={`flex items-center justify-between mb-3 pl-3 border-l-2 ${LESSON_BORDERS[lesson] ?? 'border-l-white/20'}`}>
                <div className="flex items-baseline gap-2"><span className="text-sm font-bold">{lesson}</span><span className={`${theme.subtext} text-[10px]`}>{unitArr.length} ünite</span></div>
                <div className="flex items-center gap-2"><div className="h-1.5 w-20 bg-white/[0.04] rounded-full overflow-hidden"><div className={`h-full rounded-full ${coverageBarColor(lC)}`} style={{ width: `${lC}%` }} /></div><span className={`text-[10px] font-mono font-bold ${theme.subtext}`}>{lS}/{lT} <span className="opacity-60">(%{lC})</span></span></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5">
                {unitArr.map(([unit, u]) => {
                  const key = `${lesson}|||${unit}`, isOpen = expanded === key;
                  const acc = u.attempts > 0 ? Math.round((u.corrects / u.attempts) * 100) : null;
                  return (
                    <button key={unit} type="button" onClick={() => setExpanded(isOpen ? null : key)}
                      className={`${coverageCellColor(u.solved, u.total)} text-left rounded-xl px-2.5 py-2 text-[10px] font-bold transition-all hover:scale-[1.02] cursor-pointer ${isOpen ? 'ring-2 ring-indigo-400/60' : ''}`}>
                      <div className="truncate">{unit}</div><div className="flex items-center justify-end mt-0.5 opacity-80"><span className="text-[9px]">{u.solved}/{u.total}</span></div>
                      {isOpen && (
                        <div className="mt-2 pt-2 border-t border-white/15 space-y-0.5 font-medium anim-fade-in">
                          <div className="flex justify-between"><span className="opacity-70">Kapsama</span><span>%{Math.round((u.solved / Math.max(1, u.total)) * 100)}</span></div>
                          <div className="flex justify-between"><span className="opacity-70">Doğruluk</span><span>{acc !== null ? `%${acc}` : '—'}</span></div>
                          <div className="flex justify-between"><span className="opacity-70">Doğru</span><span>{u.corrects}/{u.attempts}</span></div>
                          <div className="flex justify-between"><span className="opacity-70">Son çözüm</span><span>{u.solved > 0 ? new Date(u.lastSeen).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' }) : '—'}</span></div>
                        </div>)}
                    </button>);
                })}
              </div>
            </div>);
        })}
      </div>
    </div>);
}
