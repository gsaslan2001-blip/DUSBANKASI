
/**
 * DUS Bankası — KPI Dashboard v6 (3-Tier Hiyerarşi + DUS Tahmin + Hedef + Öneri)
 *
 * Tier 1 (Above-Fold): Executive Summary — Big 4 KPI + DUS Score + Goal Tracker + Alert Banner
 * Tier 2 (First Scroll):  Tactical — Günlük Aktivite, Trend, Heatmap, Ders Karşılaştırma, Öneriler
 * Tier 3 (Deep Dive):    Operational — Collapsible kategorilerde derin analiz + Deneme Geçmişi
 */

import { useMemo, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
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
  type StatsMap,
  type ActivityPoint,
} from '../lib/stats';
import {
  computeMomentum, computeLessonConsistency, computePredictionBand,
  type UnitAccuracy, type MomentumResult, type LessonConsistency,
} from '../lib/metrics';
import {
  BookOpen, TrendUp, Gauge, CheckCircle, XCircle,
  Crown, Flame, Trophy, Stack, Target, Crosshair, GitBranch,
  Pulse, Rocket, Scales, ChartLineUp, Brain,
} from '@phosphor-icons/react';
import {
  DailyActivityChart, AnimatedCounter, CountSparkline, ContributionHeatMap,
  WeeklyComparison, RadarChart, TrendLineChart, GoalRing, StudyTreemap,
  DersScatterPlot, WaterfallChart, BulletChart,
  GaugeChart, SunburstChart, AreaStreamGraph, DifferenceChart,
  ParallelCoordinates, SpeedAccuracyQuadrant,
  KpiAlertBanner, CollapsibleSection, KpiStatCard,
} from './charts';
import ChartFrame from './charts/ChartFrame';
// v6: Yeni section'lar
import GoalTracker from './sections/GoalTracker';
import WhatIfSimulator from './sections/WhatIfSimulator';
import ExportModal from './sections/ExportModal';
import GoalEditorModal from './sections/GoalEditorModal';
import ExamHistoryTimeline from './sections/ExamHistoryTimeline';
// v6: Yeni lib modülleri
import { estimateDusNet } from '../lib/dusScoring';
import { saveGoals, computeGoalProgress, detectMilestones } from '../lib/goals';
import { computeForgettingRisk } from '../lib/adaptive';
import { computeLessonPriority, computeDailyRecommendation } from '../lib/recommendations';
import RecommendationFeed from './sections/RecommendationFeed';
import {
  computeExamTrend, computeSpeedAccuracyTradeoff, aggregateSpeedAccuracyByLesson, buildExamResults,
} from '../lib/examAnalytics';
import { fetchExamHistory } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';
import type { ExamResult } from '../types/app';
// v6: Store
import { useGoals } from '../store/useAppStore';
import { CURRICULUM_ORDER, getCurriculumOrderIndex } from '../config/curriculum';

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

/* ─── FAZ 7.5 — İleri İçgörü Şeridi ─────────────────────────────────────── */

const MOMENTUM_META: Record<MomentumResult['label'], { text: string; color: string; bg: string }> = {
  accelerating: { text: 'Hızlanıyor', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  steady: { text: 'Sabit tempo', color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
  slowing: { text: 'Yavaşlıyor', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  idle: { text: 'Durağan', color: 'text-[#8b8b98]', bg: 'bg-white/[0.03] border-white/[0.06]' },
};

function InsightCard({ theme, icon, label, children, delay }: {
  theme: Theme; icon: React.ReactNode; label: string; children: React.ReactNode; delay: number;
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

function InsightStrip({ theme, momentum, leastConsistent, weeklyForecast, forecastConfidence, forecastDaily }: {
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
          <span className={`text-3xl font-black leading-none ${mm.color}`}>
            {momentum.score > 0 ? '+' : ''}{momentum.score}
          </span>
          <span className={`px-2 py-0.5 rounded-lg border text-[10px] font-bold ${mm.bg} ${mm.color}`}>{mm.text}</span>
        </div>
        <span className={`${theme.subtext} text-xs`}>
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
            <span className={`${theme.subtext} text-xs`}>
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
          <span className="text-3xl font-black leading-none text-indigo-400">{fmt(weeklyForecast)}</span>
          <span className={`${theme.subtext} text-xs`}>soru</span>
        </div>
        <span className={`${theme.subtext} text-xs`}>
          {forecastDaily}/gün eğilim · güven %{forecastConfidence}
        </span>
      </InsightCard>
    </div>
  );
}

/* ─── Veri dönüşümleri ──────────────────────────────────────────────────── */

function buildWeeklyData(activity90: ActivityPoint[]) {
  const weekMap = new Map<string, number>();
  activity90.forEach(a => { const wl = weekLabel(a.date); weekMap.set(wl, (weekMap.get(wl) ?? 0) + a.count); });
  return Array.from(weekMap.entries()).map(([week, count]) => ({ week, count }));
}

function buildAreaStreamData(activity90: ActivityPoint[]) {
  // Ders başına toplam hacim — en aktif 8 dersi göstermek için sıralama gerekiyor.
  // Eskiden Set'in rastgele/karşılaşma sırasına göre ilk 8 ders alınıyordu; bu da
  // en az çalışılan dersleri gösterip en çok çalışılanları dışarıda bırakabiliyordu.
  const totals = new Map<string, number>();
  activity90.forEach(a => Object.entries(a.byLesson).forEach(([l, v]) => {
    totals.set(l, (totals.get(l) ?? 0) + v.total);
  }));
  const topLessons = Array.from(totals.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([lesson]) => lesson);
  return topLessons.map(lesson => ({
    lesson,
    values: activity90.slice(-42).map(a => ({
      date: a.date,
      count: a.byLesson[lesson]?.total ?? 0,
    })),
  }));
}

function getLessonColor(lesson: string): string {
  const idx = getCurriculumOrderIndex(lesson);
  const i = idx >= 0 ? idx : Math.abs(lesson.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % CURRICULUM_ORDER.length;
  return `hsl(${Math.round((i * 360) / CURRICULUM_ORDER.length)}, 55%, 58%)`;
}

/* ═══════════════════════════════════════════════════════════════════════════
   ANA BİLEŞEN
   ═══════════════════════════════════════════════════════════════════════════ */

export default function StatisticsView({ questions, theme, onStartQuestionIds }: { questions: Question[]; theme: Theme; onStartQuestionIds?: (ids: string[]) => void }) {
  const [range, setRange] = useState<14 | 30 | 90>(30);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedHeatmapDay, setSelectedHeatmapDay] = useState<string | null>(null);

  // v6 Faz 3: Deneme geçmişi — orta-boy bir alt sistem (fetchExamHistory → buildExamResults →
  // computeSpeedAccuracyTradeoff/computeExamTrend) tanımlıydı ama hiçbir view'a bağlı değildi
  // (ExamHistoryTimeline de dahil). Burada uçtan uca bağlanır.
  const { user } = useAuth();
  const [examHistoryState, setExamHistoryState] = useState<{ status: 'loading' | 'error' | 'ready'; exams: ExamResult[] }>({ status: 'loading', exams: [] });
  useEffect(() => {
    if (!user?.id) { setExamHistoryState({ status: 'ready', exams: [] }); return; }
    let cancelled = false;
    setExamHistoryState(s => ({ ...s, status: 'loading' }));
    const lessonById = new Map(questions.map(q => [q.id, q.lesson]));
    fetchExamHistory(user.id, 30)
      .then(rows => {
        if (cancelled) return;
        const exams = buildExamResults(rows, id => lessonById.get(id));
        setExamHistoryState({ status: 'ready', exams });
      })
      .catch(() => { if (!cancelled) setExamHistoryState({ status: 'error', exams: [] }); });
    return () => { cancelled = true; };
  }, [user?.id, questions]);
  const examTrend = useMemo(() => computeExamTrend(examHistoryState.exams), [examHistoryState.exams]);
  const speedAccuracyData = useMemo(
    () => aggregateSpeedAccuracyByLesson(computeSpeedAccuracyTradeoff(examHistoryState.exams)),
    [examHistoryState.exams],
  );

  const stats = useMemo(() => loadAllStats(), []);
  const overview = useMemo(() => computeOverviewStats(questions, stats), [questions, stats]);
  const forgettingRisk = useMemo(() => computeForgettingRisk(questions, stats), [questions, stats]);
  const streak = useMemo(() => loadStreak(), []);
  const activitySummary = useMemo(() => getActivitySummary(), []);
  const activity = useMemo(() => getRecentActivity(range), [range]);
  const activity90 = useMemo(() => getRecentActivity(90), []);

  const { difficulty, mastery } = overview;

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

  // Net 7G-vs-önceki-7G hacim karşılaştırması (eski karmaşık/bozuk ifade yerine).
  const solvedLast7 = useMemo(() => activity90.slice(-7).reduce((s, a) => s + a.count, 0), [activity90]);
  const solvedPrev7 = useMemo(() => activity90.slice(-14, -7).reduce((s, a) => s + a.count, 0), [activity90]);
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
    // Eskiden ilk 8 ders (rastgele/kayıt sırası) gösteriliyordu — en çok çözülen
    // derse göre sıralayıp tamamını göstermek gerçek performans tablosunu yansıtır.
    overview.byLesson.filter(l => l.solved > 0).sort((a, b) => b.solved - a.solved).map(l => ({ axis: l.lesson, value: l.accuracy })),
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

  // ═══ v6: YENİ STATE VE HESAPLAMALAR ═══════════════════════════════════════

  const [showExport, setShowExport] = useState(false);
  const [showGoalEditor, setShowGoalEditor] = useState(false);

  // v6: Hedefler (Zustand store'dan)
  const goals = useGoals();

  // v6: DUS Skor Tahmini
  const dusScore = useMemo(() => {
    if (overview.totalAttempts < 10) return null;
    return estimateDusNet(overview, activity90);
  }, [overview, activity90]);

  // v6: Hedef ilerleme
  const goalProgress = useMemo(() =>
    computeGoalProgress(goals, overview, activity90),
  [goals, overview, activity90]);

  // v6: Milestone tespiti (celebrate triggers)
  const milestones = useMemo(() =>
    detectMilestones(overview, streak.currentStreak),
  [overview, streak.currentStreak]);
  // Confetti sadece bir kez, render dışında tetiklenir (eskiden her render'da patlıyordu)
  const confettiFired = useRef(false);
  useEffect(() => {
    if (milestones.length === 0 || confettiFired.current) return;
    confettiFired.current = true;
    import('canvas-confetti').then(m => m.default({ particleCount: 100, spread: 70, origin: { y: 0.6 } }));
  }, [milestones]);



  // v6: Export handlers
  const handleExportPDF = () => { window.print(); };
  const handleExportCSV = () => {
    const rows = ['Ders,Çözülen,Doğruluk,Kapsama'];
    for (const l of overview.byLesson) {
      rows.push(`${l.lesson},${l.solved},%${l.accuracy},%${l.coverage}`);
    }
    const csv = rows.join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'DUSBANKASI_istatistik.csv'; a.click();
    URL.revokeObjectURL(url);
  };
  const handleShare = () => {
    const text = `DUSBANKASI İstatistik Özeti:\n` +
      `Toplam Çözüm: ${fmt(overview.totalAttempts)} | Doğruluk: %${overview.accuracy}\n` +
      `Kapsama: %${overview.coverage} | Seri: ${streak.currentStreak} gün\n` +
      `Uzmanlaşılan: ${fmt(overview.masteredUnique)} soru\n` +
      (dusScore ? `Tahmini DUS Net: ${dusScore.estimatedNet} | Hedef Olasılığı: %${dusScore.targetProbability}` : '');
    navigator.clipboard.writeText(text);
  };

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
    activity90.slice(-30).map(a => ({ date: a.date, target: goals.dailyQuestions, actual: a.count })),
  [activity90, goals.dailyQuestions]);

  const areaStreamData = useMemo(() => buildAreaStreamData(activity90), [activity90]);

  // ─── Chart prop stabilizasyonu — inline .map() yerine memoize ────────────
  // Bu diziler eskiden JSX'te inline üretiliyordu; her parent render'da yeni
  // referans = React.memo'lu D3 chart'ların useEffect'i gereksiz yere redraw
  // ediyordu (range/selectedDay değişiminde jank). Memoize → stabil props.
  const dailyActivityData = useMemo(() =>
    activity.map(a => ({ date: a.date, correct: a.correct, incorrect: a.incorrect })),
  [activity]);

  const trendLineData = useMemo(() =>
    activity90.slice(-42).map(a => ({ date: a.date, correct: a.correct, incorrect: a.incorrect, total: a.count })),
  [activity90]);

  const heatMapData = useMemo(() =>
    activity90.map(a => ({ date: a.date, count: a.count })),
  [activity90]);

  const sparklineData = useMemo(() =>
    activity90.slice(-30).map(a => ({ date: a.date, count: a.count, correct: a.correct })),
  [activity90]);

  const weeklyCompareData = useMemo(() =>
    activity90.slice(-14).map(a => ({ date: a.date, count: a.count, correct: a.correct, incorrect: a.incorrect })),
  [activity90]);

  const parallelData = useMemo(() =>
    overview.byLesson.filter(l => l.solved > 0).slice(0, 8).map(l => ({
      lesson: l.lesson, difficulty: l.accuracy < 50 ? 8 : l.accuracy < 75 ? 5 : 3,
      accuracy: l.accuracy, timeSpent: 20 + Math.round(l.attempts / Math.max(1, l.solved)) * 5, count: l.attempts,
    })),
  [overview]);

  const dailyGoal = goals.dailyQuestions;

  // ─── FAZ 7.5 — Türetilmiş ileri metrikler (saf modül) ─────────────────
  const unitAccuracyData = useMemo<UnitAccuracy[]>(() => {
    const map = new Map<string, { lesson: string; corrects: number; attempts: number }>();
    for (const q of questions) {
      const s = stats[q.id];
      if (!s || s.attempts === 0) continue;
      const key = `${q.lesson}␟${q.unit}`;
      const e = map.get(key) ?? { lesson: q.lesson, corrects: 0, attempts: 0 };
      e.corrects += s.corrects; e.attempts += s.attempts;
      map.set(key, e);
    }
    return Array.from(map.values()).map(e => ({
      lesson: e.lesson,
      accuracy: e.attempts > 0 ? Math.round((e.corrects / e.attempts) * 100) : 0,
      attempts: e.attempts,
    }));
  }, [questions, stats]);

  const momentum = useMemo(() => computeMomentum(activity90, 7), [activity90]);
  const lessonConsistency = useMemo(() => computeLessonConsistency(unitAccuracyData), [unitAccuracyData]);
  const predictionBand = useMemo(() => computePredictionBand(activity90, 7, 14), [activity90]);
  const weeklyForecast = useMemo(
    () => predictionBand.projection.reduce((s, p) => s + p.expected, 0),
    [predictionBand],
  );
  const leastConsistent = lessonConsistency[0] ?? null;
  const lessonPriorities = useMemo(
    () => computeLessonPriority(overview, lessonConsistency),
    [overview, lessonConsistency],
  );
  const dailyRec = useMemo(
    () => computeDailyRecommendation(overview, activity90, goals),
    [overview, activity90, goals],
  );

  // ─── Collapsible section summary hesaplamaları ────────────────────────
  const improvingLessons = slopeData.right.filter(r => {
    const l = slopeData.left.find(x => x.lesson === r.lesson);
    return l && r.accuracy > l.accuracy;
  }).length;

  return (
    <div className="flex flex-col gap-5 pb-12 anim-slide-up">

      {/* ════════════════════════════════════════════════════════════════════
         TIER 1 — EXECUTIVE SUMMARY (Above-Fold)
         ════════════════════════════════════════════════════════════════════ */}

      {/* Sayfa Başlığı */}
      <div className="mb-2">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/15 inline-block mb-3">Performans Paneli v6</span>
            <h1 className="text-[56px] font-black leading-none tracking-tight">İstatistikler</h1>
            <p className={`${theme.subtext} text-sm mt-2`}>DUS tahmini, KPI odaklı analiz ve derinlemesine görselleştirme.</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button onClick={() => setShowGoalEditor(true)} variant="unstyled"
              style={{ padding: '8px 16px', borderRadius: 10, border: `1px solid ${theme.border}`, background: 'transparent', color: theme.subtext, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
              Hedefler
            </Button>
            <Button onClick={() => setShowExport(true)} variant="unstyled"
              style={{ padding: '8px 16px', borderRadius: 10, border: 'none', background: 'linear-gradient(135deg, #6f72f2, #484cc2)', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
              Dışa Aktar
            </Button>
          </div>
        </div>
      </div>

      {/* A3: Alert Banner Row (en üstte — hemen dikkat çekmeli) */}
      <KpiAlertBanner alerts={alerts} />

      {/* A1b: İkincil KPI Kartları — Soru Bankası, Doğru, Yanlış, Rekor */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiStatCard theme={theme} label="Soru Bankası" accent="sky" delay={0}
          icon={<BookOpen size={18} weight="duotone" />}
          value={<AnimatedCounter value={overview.bankTotal} />}
          sub={<>Toplam soru · kapsama %{overview.coverage}</>}
          progress={{ pct: Math.round((overview.coverage / 90) * 100), label: 'Kapsama Hedefi: %90', right: `%${Math.round((overview.coverage / 90) * 100)}` }} />
        <KpiStatCard theme={theme} label="Doğru Cevap" accent="emerald" delay={0.05}
          icon={<CheckCircle size={18} weight="duotone" />}
          value={<AnimatedCounter value={overview.totalCorrects} />}
          valueClassName="text-emerald-400"
          progress={{ pct: overview.accuracy, label: 'Doğruluk oranı', right: `%${overview.accuracy}` }} />
        <KpiStatCard theme={theme} label="Yanlış Cevap" accent="red" delay={0.1}
          icon={<XCircle size={18} weight="duotone" />}
          value={<AnimatedCounter value={overview.totalIncorrects} />}
          valueClassName="text-red-400"
          sub={<>{fmt(overview.wrongEverUnique)} soru en az 1 kez yanlış</>} />
        <KpiStatCard theme={theme} label="Günlük Rekor" accent="rose" delay={0.15}
          icon={<Trophy size={18} weight="duotone" />}
          value={activitySummary.bestDay
            ? <AnimatedCounter value={activitySummary.bestDay.count} />
            : <span className={`${theme.subtext} text-lg`}>Henüz veri yok</span>}
          valueClassName={activitySummary.bestDay ? 'text-rose-400' : ''}
          sub={activitySummary.bestDay ? trDate(activitySummary.bestDay.date) : undefined} />
      </div>

      {/* A4: İleri İçgörü Şeridi — Momentum · Tutarlılık · 7 Günlük Tahmin */}
      <InsightStrip
        theme={theme}
        momentum={momentum}
        leastConsistent={leastConsistent}
        weeklyForecast={weeklyForecast}
        forecastConfidence={predictionBand.confidence}
        forecastDaily={predictionBand.dailyAverage}
      />

      {/* A1: Big 4 Executive KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiStatCard theme={theme} label="Genel Doğruluk" accent="emerald" delay={0}
          icon={<Gauge size={18} weight="duotone" />}
          value={<>%{overview.accuracy}</>}
          valueClassName={accColor(overview.accuracy)}
          sub={<>Hedef: %80</>}
          progress={{ pct: Math.round((overview.accuracy / 80) * 100), label: 'Hedefe ilerleme', right: `%${Math.min(100, Math.round((overview.accuracy / 80) * 100))}` }}
          trend={{ current: accuracyTrend.current, previous: accuracyTrend.previous, format: 'percent' }} />
        <KpiStatCard theme={theme} label="Aktif Seri" accent="orange" delay={0.05}
          icon={<Flame size={18} weight="duotone" />}
          value={<>{streak.currentStreak} <span className="text-sm font-bold opacity-50">GÜN</span></>}
          sub={<>Hedef: 150 Gün</>}
          trend={{ current: streakTrend.current, previous: streakTrend.previous, format: 'days' }} />
        <KpiStatCard theme={theme} label="Toplam Çözüm" accent="violet" delay={0.1}
          icon={<TrendUp size={18} weight="duotone" />}
          value={<AnimatedCounter value={overview.totalAttempts} />}
          sub={<>{fmt(overview.solvedUnique)} benzersiz</>}
          trend={{ current: solvedLast7, previous: solvedPrev7, format: 'number' }} />
        <KpiStatCard theme={theme} label="Ustalaşılan" accent="amber" delay={0.15}
          icon={<Crown size={18} weight="duotone" />}
          value={<AnimatedCounter value={overview.masteredUnique} />}
          sub={<>{fmt(overview.masteredUnique)} / 5.000 hedef</>}
          progress={{ pct: Math.round((overview.masteredUnique / 5000) * 100), right: `%${Math.min(100, Math.round((overview.masteredUnique / 5000) * 100))}` }}
          trend={{ current: masteredTrend.delta, previous: 0, format: 'number' }} />
      </div>

      {/* Özet Bilgiler + Hedefler — yukarı taşındı (v6.1) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className={`${theme.card} rounded-xl p-5`}>
          <SectionTitle title="Özet Bilgiler" eyebrow="Özet" mb="mb-4" />
          <div className="space-y-0">
            {([
              ['Mevcut Seri', `${streak.currentStreak} GÜN`, 'text-orange-500'],
              ['En Uzun Seri', `${streak.longestStreak} GÜN`, ''],
              ['Aktif Gün', `${activitySummary.activeDays} GÜN`, ''],
              ['Günlük Ort.', `${activitySummary.activeDays > 0 ? Math.round(activitySummary.totalSolved / activitySummary.activeDays) : 0}`, ''],
              ['Genel Doğru', fmt(overview.totalCorrects), 'text-emerald-400'],
              ['Genel Yanlış', fmt(overview.totalIncorrects), 'text-red-400'],
            ] as const).map(([l, v, c], i) => <div key={i} className={`flex justify-between items-center py-2.5 ${i < 5 ? 'border-b border-white/5' : ''}`}><span className={`text-sm ${theme.subtext}`}>{l}</span><span className={`font-bold ${c}`}>{v}</span></div>)}
          </div>
        </div>
        <GoalTracker
          progress={goalProgress}
          theme={theme}
          onEditGoals={() => setShowGoalEditor(true)}
        />
      </div>

      {/* A2: Quick Stats Strip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
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
        <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className={`${theme.card} p-6 sm:p-8 rounded-xl flex flex-col items-center justify-center md:col-span-1 lg:col-span-2`}>
          <GoalRing value={activitySummary.todayCount} target={dailyGoal} label="Bugün" suffix="soru" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className={`${theme.card} p-6 sm:p-8 rounded-xl flex flex-col items-center justify-center md:col-span-1 lg:col-span-2`}>
          <GaugeChart value={overview.coverage} max={100} target={goals.targetCoverage} label="Kapsama" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="md:col-span-3 lg:col-span-8">
          <ChartFrame
            theme={theme}
            title="Ders Performans Radarı"
            eyebrow="Multi-Boyut"
            right={<Crosshair size={16} weight="thin" className="text-indigo-400" />}
            isEmpty={radarData.length === 0}
            emptyMessage="Henüz çözülmüş soru yok — radar burada oluşacak."
            summary="Derslerin doğruluk oranını çok boyutlu bir radar grafiğinde karşılaştırır."
          >
            <RadarChart data={radarData} size={220} />
          </ChartFrame>
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
         TIER 2 — TACTICAL VIEW (First Scroll)
         ════════════════════════════════════════════════════════════════════ */}

      {/* Günlük Aktivite + Seçili Gün Detayı — Faz 4: Döner Bezel'li ChartFrame */}
      <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
        <ChartFrame
          theme={theme}
          title="Günlük Çözüm Aktivitesi"
          eyebrow="Aktivite"
          right={<div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-emerald-500" /><span className={theme.subtext}>Doğru</span></div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-red-400" /><span className={theme.subtext}>Yanlış</span></div>
          </div>}
          bezel={{
            stops: [
              { label: '14G', value: 14 as const },
              { label: '30G', value: 30 as const },
              { label: '90G', value: 90 as const },
            ],
            value: range,
            onChange: (r) => { setRange(r); setSelectedDay(null); },
          }}
        >
        <DailyActivityChart data={dailyActivityData}
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
        {!selectedDay && <p className={`${theme.subtext} text-[11px] mt-4 text-center`}>Detay için bir güne tıkla · Kadranı döndürerek aralığı değiştir</p>}
        </ChartFrame>
      </motion.div>

      {/* Trend Çizgi + Fark */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-7">
          <ChartFrame
            theme={theme}
            title="Çözüm Trendi"
            eyebrow="Trend"
            right={<Pulse size={16} weight="thin" className="text-indigo-400" />}
            isEmpty={trendLineData.every(d => d.total === 0)}
            summary="Son 42 günün doğru/yanlış çözüm sayısını çizgi grafikte gösterir."
          >
            <TrendLineChart data={trendLineData} />
          </ChartFrame>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-5">
          <ChartFrame
            theme={theme}
            title="Hedef vs Gerçekleşen"
            eyebrow="Sapma"
            right={<Target size={16} weight="thin" className="text-rose-400" />}
            isEmpty={diffData.every(d => d.actual === 0)}
            summary="Günlük hedef ile gerçekleşen çözüm sayısı arasındaki farkı gösterir."
          >
            <DifferenceChart data={diffData} />
          </ChartFrame>
        </motion.div>
      </div>

      {/* Heatmap — güne tıklayınca o günün detayı açılır */}
      <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
      <ChartFrame
        theme={theme}
        title="Aktivite Yoğunluğu"
        eyebrow="Heatmap"
        isEmpty={heatMapData.every(d => d.count === 0)}
        emptyMessage="Henüz aktivite verisi yok."
        summary="Son 90 günün günlük çözüm yoğunluğunu ısı haritası olarak gösterir."
        right={<div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: '#8b8b98' }}>
          <span>AZ</span><div className="flex gap-1"><div className="w-3 h-3 rounded-sm bg-white/5" /><div className="w-3 h-3 rounded-sm bg-emerald-900" /><div className="w-3 h-3 rounded-sm bg-emerald-700" /><div className="w-3 h-3 rounded-sm bg-emerald-500" /></div><span>ÇOK</span></div>}
      >
        <ContributionHeatMap data={heatMapData} onDaySelect={(d) => setSelectedHeatmapDay(d || null)} selectedDay={selectedHeatmapDay} />
        {selectedHeatmapDay && (() => {
          const selected = activity90.find(a => a.date === selectedHeatmapDay);
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
        {!selectedHeatmapDay && <p className={`${theme.subtext} text-[11px] mt-4 text-center`}>Detay için bir güne tıkla</p>}
      </ChartFrame>
      </motion.div>

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
          <ChartFrame theme={theme} flat title="Ders Bazlı Çözüm Hacmi Akışı" eyebrow="Hacim"
            isEmpty={areaStreamData.length === 0} summary="En çok çalışılan 8 dersin son 42 gündeki çözüm hacmini alan grafiğinde gösterir.">
            <AreaStreamGraph data={areaStreamData} />
          </ChartFrame>
          <ChartFrame theme={theme} flat title="Haftalık Çözüm Değişimi" eyebrow="Waterfall"
            isEmpty={weeklyData.length === 0} summary="Hafta hafta çözüm sayısındaki değişimi şelale grafiğinde gösterir.">
            <WaterfallChart data={weeklyData} />
          </ChartFrame>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-7">
              <ChartFrame theme={theme} flat title="30 Günlük Başarı Trendi" eyebrow="Sparkline"
                isEmpty={sparklineData.length === 0} summary="Son 30 günün doğru çözüm sayısını sparkline ile gösterir.">
                <CountSparkline data={sparklineData} />
              </ChartFrame>
            </div>
            <div className="lg:col-span-5">
              <ChartFrame theme={theme} flat title="Haftalık Soru Karşılaştırması" eyebrow="Haftalık"
                isEmpty={weeklyCompareData.every(d => d.count === 0)} summary="Son 14 günün günlük çözüm sayısını karşılaştırır.">
                <WeeklyComparison activity={weeklyCompareData} />
              </ChartFrame>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 2. Karşılaştırma */}
      <CollapsibleSection theme={theme} title="Karşılaştırmalı Analizler" summary={`${improvingLessons} ders trendde yükselişte ▲`}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-5">
              <ChartFrame theme={theme} flat title="Ders Dağılım Grafiği" eyebrow="Scatter"
                isEmpty={scatterData.length === 0} summary="Dersleri çözülen soru sayısı ve doğruluğa göre saçılım grafiğinde konumlar.">
                <DersScatterPlot data={scatterData} />
              </ChartFrame>
            </div>
            <div className="lg:col-span-7">
              <ChartFrame theme={theme} flat title="Ders Hedef Karşılaştırması" eyebrow="Hedef" right={<Target size={16} weight="thin" className="text-rose-400" />}
                isEmpty={bulletData.length === 0} summary="Her dersin doğruluğunu %80 hedefiyle karşılaştırır.">
                <BulletChart data={bulletData} />
              </ChartFrame>
            </div>
          </div>
          <ChartFrame theme={theme} flat title="Hız × Doğruluk Kadranı" eyebrow="Deneme"
            loading={examHistoryState.status === 'loading'}
            error={examHistoryState.status === 'error' ? 'Deneme geçmişi yüklenemedi.' : null}
            isEmpty={examHistoryState.status === 'ready' && speedAccuracyData.length === 0}
            emptyMessage={user ? 'Henüz tamamlanmış deneme yok — deneme çözdükçe burada oluşacak.' : 'Bu grafik için giriş yapmalısın.'}
            summary="Denemelerde ders başına ortalama soru süresi ve doğruluğu kadranlarda gösterir; sağ-alt kadran (yavaş+yanlış) kırmızı vurgulu.">
            <SpeedAccuracyQuadrant data={speedAccuracyData} />
          </ChartFrame>
          <ChartFrame theme={theme} flat title="Çok Boyutlu Ders Analizi" eyebrow="Parallel" right={<GitBranch size={16} weight="thin" className="text-indigo-400" />}
            isEmpty={parallelData.length === 0} summary="Dersleri zorluk, doğruluk ve süre eksenlerinde çok boyutlu karşılaştırır.">
            <ParallelCoordinates data={parallelData} />
          </ChartFrame>
          <RecommendationFeed priorities={lessonPriorities} dailyRec={dailyRec} theme={theme} />
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
          <div className="lg:col-span-5">
            <ChartFrame theme={theme} flat title="Ders Kapsama Haritası" eyebrow="Treemap"
              isEmpty={treemapData.length === 0} summary="Ders başına çözülen soru hacmini alan büyüklüğüyle gösterir.">
              <StudyTreemap data={treemapData} />
            </ChartFrame>
          </div>
          <div className="lg:col-span-7">
            <ChartFrame theme={theme} flat title="Ders-Ünite Hiyerarşisi" eyebrow="Sunburst"
              isEmpty={sunburstData.length === 0} summary="Ders ve ünite hiyerarşisini iç içe halkalarla gösterir.">
              <SunburstChart data={sunburstData} />
            </ChartFrame>
          </div>
        </div>
      </CollapsibleSection>

      {/* 5. En İyi Ders & Ünite (Öne Çıkanlar) */}
      <CollapsibleSection theme={theme} title="Öne Çıkanlar & Ünite Haritası" summary={`En iyi ders: ${overview.topLessonBySolved?.lesson ?? '—'} · Detaylı ünite ısı haritası`}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-4">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className={`${theme.card} rounded-xl p-5 sm:p-8 relative overflow-hidden group md:col-span-2 lg:col-span-5`}>
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
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className={`${theme.card} rounded-xl p-5 sm:p-8 relative overflow-hidden group md:col-span-3 lg:col-span-7`}>
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
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <UnitHeatMap questions={questions} stats={stats} theme={theme} />
          </motion.div>
        </div>
      </CollapsibleSection>

      {/* ═══ v6: YENİ TIER 3 KOLLEKSİYONLARI ═══════════════════════════════ */}

      {/* Unutma Riski — 30+ gündür görülmemiş && accuracy < %80 sorular */}
      {forgettingRisk.length > 0 && (
        <CollapsibleSection
          theme={theme}
          title="Unutma Riski"
          summary={`${forgettingRisk.reduce((s, g) => s + g.count, 0)} soru · ${forgettingRisk.length} derste 30+ gündür tekrar edilmedi`}
        >
          <div className="space-y-2">
            {forgettingRisk.map(g => (
              <div key={g.lesson} className={`${theme.card} rounded-xl p-4 flex items-center justify-between gap-4`}>
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Brain size={18} weight="thin" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm truncate">{g.lesson}</div>
                    <div className={`${theme.subtext} text-[11px]`}>{g.count} soru · 30+ gündür görülmedi</div>
                  </div>
                </div>
                {onStartQuestionIds && (
                  <Button
                    onClick={() => onStartQuestionIds(g.questionIds)}
                    variant="unstyled"
                    size="sm"
                    className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-all font-bold shrink-0"
                  >
                    Çöz
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Deneme Geçmişi — plan §Faz3 Tier-3 listesinde vardı ama hiçbir view'a bağlı değildi (bkz. devir raporu) */}
      {user && (
        <CollapsibleSection theme={theme} title="Deneme Geçmişi" summary={`${examHistoryState.exams.length} tamamlanmış deneme`}>
          <ExamHistoryTimeline trend={examTrend} exams={examHistoryState.exams} theme={theme} />
        </CollapsibleSection>
      )}

      {/* What-If Simülasyonu */}
      <CollapsibleSection title="Simülasyon: Ne Olurdu?" theme={theme}>
        <WhatIfSimulator
          activity={activity90}
          solvedUnique={overview.solvedUnique}
          bankTotal={overview.bankTotal}
          theme={theme}
        />
      </CollapsibleSection>

      {/* v6: Modals */}
      <ExportModal
        isOpen={showExport}
        onClose={() => setShowExport(false)}
        theme={theme}
        onExportPDF={handleExportPDF}
        onExportCSV={handleExportCSV}
        onShare={handleShare}
      />
      <GoalEditorModal
        isOpen={showGoalEditor}
        onClose={() => setShowGoalEditor(false)}
        goals={goals}
        onSave={(g) => {
          import('../store/useAppStore').then(m => {
            m.useAppStore.getState().setGoals(g);
          });
          saveGoals(g);
        }}
        theme={theme}
      />

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
                    <Button key={unit} type="button" variant="unstyled" onClick={() => setExpanded(isOpen ? null : key)}
                      aria-expanded={isOpen}
                      className={`${coverageCellColor(u.solved, u.total)} text-left rounded-xl px-2.5 py-2 text-[10px] font-bold transition-all hover:scale-[1.02] cursor-pointer ${isOpen ? 'ring-2 ring-indigo-400/60' : ''}`}>
                      <div className="truncate">{unit}</div><div className="flex items-center justify-end mt-0.5 opacity-80"><span className="text-[9px]">{u.solved}/{u.total}</span></div>
                      {isOpen && (
                        <div className="mt-2 pt-2 border-t border-white/15 space-y-0.5 font-medium anim-fade-in">
                          <div className="flex justify-between"><span className="opacity-70">Kapsama</span><span>%{Math.round((u.solved / Math.max(1, u.total)) * 100)}</span></div>
                          <div className="flex justify-between"><span className="opacity-70">Doğruluk</span><span>{acc !== null ? `%${acc}` : '—'}</span></div>
                          <div className="flex justify-between"><span className="opacity-70">Doğru</span><span>{u.corrects}/{u.attempts}</span></div>
                          <div className="flex justify-between"><span className="opacity-70">Son çözüm</span><span>{u.solved > 0 ? new Date(u.lastSeen).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' }) : '—'}</span></div>
                        </div>)}
                    </Button>);
                })}
              </div>
            </div>);
        })}
      </div>
    </div>);
}
