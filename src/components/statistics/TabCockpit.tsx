import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import type { Theme } from '../../theme';
import type {
  computeOverviewStats,
  loadStreak,
  getActivitySummary,
  ActivityPoint,
  generateKpiAlerts,
} from '../../lib/stats';
import type { UserGoals, DailyRecommendation } from '../../types/app';
import type { MomentumResult, LessonConsistency, computePredictionBand } from '../../lib/metrics';
import {
  BookOpen,
  TrendUp,
  Gauge,
  CheckCircle,
  XCircle,
  Crown,
  Flame,
  Trophy,
  Target,
  ArrowUpRight,
} from '@phosphor-icons/react';
import {
  KpiAlertBanner,
  KpiStatCard,
  AnimatedCounter,
  GoalRing,
  GaugeChart,
} from '../charts';
import DusScorePanel from '../sections/DusScorePanel';
import { fmt, trDate, accColor, InsightStrip } from './statsHelpers';
import { estimateDusNet } from '../../lib/dusScoring';

export interface TabCockpitProps {
  theme: Theme;
  overview: ReturnType<typeof computeOverviewStats>;
  streak: ReturnType<typeof loadStreak>;
  activitySummary: ReturnType<typeof getActivitySummary>;
  activity90: ActivityPoint[];
  goals: UserGoals;
  alerts: ReturnType<typeof generateKpiAlerts>;
  dailyRec: DailyRecommendation;
  momentum: MomentumResult;
  leastConsistent: LessonConsistency | null;
  weeklyForecast: number;
  predictionBand: ReturnType<typeof computePredictionBand>;
  accuracyTrend: { current: number; previous: number };
  streakTrend: { current: number; previous: number };
  solvedLast7: number;
  solvedPrev7: number;
  onStartLesson?: (lesson: string, count?: number) => void;
  onStartRecommended?: () => void;
}

export default function TabCockpit({
  theme,
  overview,
  streak,
  activitySummary,
  activity90,
  goals,
  alerts,
  dailyRec,
  momentum,
  leastConsistent,
  weeklyForecast,
  predictionBand,
  accuracyTrend,
  streakTrend,
  solvedLast7,
  solvedPrev7,
  onStartLesson,
  onStartRecommended,
}: TabCockpitProps) {
  const dailyGoal = goals.dailyQuestions || 50;
  const dusScore = estimateDusNet(overview, activity90);

  return (
    <div className="flex flex-col gap-5">
      {/* 1. Hero DUS Projeksiyonu & Model Kalibrasyon Paneli (Kasım 2026 - Ankara ADÇC TOP 10) */}
      <DusScorePanel
        score={dusScore}
        theme={theme}
        totalExams={Math.floor(overview.totalAttempts / 100)}
        solvedQuestions={overview.solvedUnique}
      />

      {/* 2. KpiAlertBanner */}
      <KpiAlertBanner alerts={alerts} onStartLesson={onStartLesson} />

      {/* 3. Günün Reçetesi (1-Click Quiz CTA) */}
      {dailyRec && (
        <div
          className={`${theme.card} rounded-2xl p-4 sm:p-5 border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-indigo-500/5`}
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
              <Target size={20} weight="duotone" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                  Günün Reçetesi
                </span>
                {dailyRec.focusLesson && (
                  <span className="text-xs font-bold text-[color:var(--color-text-primary)]">
                    {dailyRec.focusLesson}
                  </span>
                )}
              </div>
              <p className={`text-xs ${theme.subtext} mt-1 truncate`}>
                {dailyRec.message}
              </p>
            </div>
          </div>
          {onStartRecommended && (
            <Button
              variant="unstyled"
              onClick={onStartRecommended}
              className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-indigo-500/20 transition-all cursor-pointer shrink-0"
            >
              <span>Önerilen Quiz'i Başlat</span>
              <ArrowUpRight size={14} weight="bold" />
            </Button>
          )}
        </div>
      )}

      {/* 4. Hedef İlerlemesi & Kapsama Hızlı Ringleri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${theme.card} p-5 rounded-2xl flex flex-col items-center justify-center text-center border ${theme.border}`}
        >
          <GoalRing value={activitySummary.todayCount} target={dailyGoal} label="Bugün" suffix="soru" />
          <div className="mt-2 text-xs font-semibold">Günlük Soru Hedefi</div>
          <span className={`${theme.subtext} text-[11px] font-mono tabular-nums`}>
            {activitySummary.todayCount} / {dailyGoal} soru
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className={`${theme.card} p-5 rounded-2xl flex flex-col items-center justify-center text-center border ${theme.border}`}
        >
          <GaugeChart value={overview.coverage} max={100} target={goals.targetCoverage} label="Kapsama" />
          <div className="mt-2 text-xs font-semibold">Soru Bankası Kapsama</div>
          <span className={`${theme.subtext} text-[11px] font-mono tabular-nums`}>
            %{overview.coverage} / %{goals.targetCoverage || 90}
          </span>
        </motion.div>
      </div>

      {/* 5. Big 4 Executive KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiStatCard
          theme={theme}
          label="Genel Doğruluk"
          accent="emerald"
          delay={0}
          icon={<Gauge size={18} weight="duotone" />}
          value={<>%{overview.accuracy}</>}
          valueClassName={accColor(overview.accuracy)}
          sub={<>Hedef: <span className="font-mono tabular-nums">%{goals.targetAccuracy || 80}</span></>}
          progress={{
            pct: Math.round((overview.accuracy / (goals.targetAccuracy || 80)) * 100),
            label: 'Hedefe ilerleme',
            right: `%${Math.min(100, Math.round((overview.accuracy / (goals.targetAccuracy || 80)) * 100))}`,
          }}
          trend={{ current: accuracyTrend.current, previous: accuracyTrend.previous, format: 'percent' }}
        />
        <KpiStatCard
          theme={theme}
          label="Aktif Seri"
          accent="orange"
          delay={0.05}
          icon={<Flame size={18} weight="duotone" />}
          value={
            <>
              {streak.currentStreak} <span className="text-sm font-bold opacity-50">GÜN</span>
            </>
          }
          sub={<>Hedef: <span className="font-mono tabular-nums">{goals.targetStreak || 150}</span> Gün</>}
          trend={{ current: streakTrend.current, previous: streakTrend.previous, format: 'days' }}
        />
        <KpiStatCard
          theme={theme}
          label="Toplam Çözüm"
          accent="violet"
          delay={0.1}
          icon={<TrendUp size={18} weight="duotone" />}
          value={<AnimatedCounter value={overview.totalAttempts} />}
          sub={<><span className="font-mono tabular-nums">{fmt(overview.solvedUnique)}</span> benzersiz</>}
          trend={{ current: solvedLast7, previous: solvedPrev7, format: 'number' }}
        />
        <KpiStatCard
          theme={theme}
          label="Ustalaşılan"
          accent="amber"
          delay={0.15}
          icon={<Crown size={18} weight="duotone" />}
          value={<AnimatedCounter value={overview.masteredUnique} />}
          sub={<><span className="font-mono tabular-nums">{fmt(overview.masteredUnique)}</span> / <span className="font-mono tabular-nums">{fmt(goals.targetMastered || 5000)}</span> hedef</>}
          progress={{
            pct: Math.round((overview.masteredUnique / (goals.targetMastered || 5000)) * 100),
            right: `%${Math.min(100, Math.round((overview.masteredUnique / (goals.targetMastered || 5000)) * 100))}`,
          }}
        />
      </div>

      {/* 6. İkincil KPI Kartları — Soru Bankası, Doğru, Yanlış, Rekor */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiStatCard
          theme={theme}
          label="Soru Bankası"
          accent="sky"
          delay={0}
          icon={<BookOpen size={18} weight="duotone" />}
          value={<AnimatedCounter value={overview.bankTotal} />}
          sub={<>Toplam soru · kapsama <span className="font-mono tabular-nums">%{overview.coverage}</span></>}
          progress={{
            pct: Math.round((overview.coverage / (goals.targetCoverage || 90)) * 100),
            label: `Kapsama Hedefi: %${goals.targetCoverage || 90}`,
            right: `%${Math.round((overview.coverage / (goals.targetCoverage || 90)) * 100)}`,
          }}
        />
        <KpiStatCard
          theme={theme}
          label="Doğru Cevap"
          accent="emerald"
          delay={0.05}
          icon={<CheckCircle size={18} weight="duotone" />}
          value={<AnimatedCounter value={overview.totalCorrects} />}
          valueClassName="text-emerald-400"
          progress={{ pct: overview.accuracy, label: 'Doğruluk oranı', right: `%${overview.accuracy}` }}
        />
        <KpiStatCard
          theme={theme}
          label="Yanlış Cevap"
          accent="red"
          delay={0.1}
          icon={<XCircle size={18} weight="duotone" />}
          value={<AnimatedCounter value={overview.totalIncorrects} />}
          valueClassName="text-red-400"
          sub={<><span className="font-mono tabular-nums">{fmt(overview.wrongEverUnique)}</span> soru en az 1 kez yanlış</>}
        />
        <KpiStatCard
          theme={theme}
          label="Günlük Rekor"
          accent="rose"
          delay={0.15}
          icon={<Trophy size={18} weight="duotone" />}
          value={
            activitySummary.bestDay ? (
              <AnimatedCounter value={activitySummary.bestDay.count} />
            ) : (
              <span className={`${theme.subtext} text-lg`}>Henüz veri yok</span>
            )
          }
          valueClassName={activitySummary.bestDay ? 'text-rose-400' : ''}
          sub={activitySummary.bestDay ? trDate(activitySummary.bestDay.date) : undefined}
        />
      </div>

      {/* 7. İleri İçgörü Şeridi — Momentum · Tutarlılık · 7 Günlük Tahmin */}
      <InsightStrip
        theme={theme}
        momentum={momentum}
        leastConsistent={leastConsistent}
        weeklyForecast={weeklyForecast}
        forecastConfidence={predictionBand.confidence}
        forecastDaily={predictionBand.dailyAverage}
      />
    </div>
  );
}
