import { useMemo, useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from '../lib/stats';
import {
  computeMomentum,
  computeLessonConsistency,
  computePredictionBand,
  type UnitAccuracy,
} from '../lib/metrics';
import {
  Gauge,
  ChartLineUp,
  Target,
  Flask,
  FileArrowDown,
  SlidersHorizontal,
} from '@phosphor-icons/react';
import { toast } from 'sonner';
import ExportModal from './sections/ExportModal';
import GoalEditorModal from './sections/GoalEditorModal';
import { saveGoals, computeGoalProgress, detectMilestones } from '../lib/goals';
import { computeForgettingRisk } from '../lib/adaptive';
import {
  computeLessonPriority,
  computeDailyRecommendation,
  selectRemedyQuestionsForLesson,
  selectUnitQuestions,
  selectSpeedAccuracyRemedyQuestions,
} from '../lib/recommendations';
import {
  computeExamTrend,
  computeSpeedAccuracyTradeoff,
  aggregateSpeedAccuracyByLesson,
  buildExamResults,
} from '../lib/examAnalytics';
import { fetchExamHistory } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';
import type { ExamResult } from '../types/app';
import { useGoals } from '../store/useAppStore';
import TabCockpit from './statistics/TabCockpit';

const TabRhythm = lazy(() => import('./statistics/TabRhythm'));
const TabMastery = lazy(() => import('./statistics/TabMastery'));
const TabSimulation = lazy(() => import('./statistics/TabSimulation'));

type TabKey = 'cockpit' | 'rhythm' | 'mastery' | 'simulation';

interface StatisticsViewProps {
  questions: Question[];
  theme: Theme;
  onStartQuestionIds?: (ids: string[]) => void;
}

export default function StatisticsView({
  questions,
  theme,
  onStartQuestionIds,
}: StatisticsViewProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('cockpit');
  const [range, setRange] = useState<14 | 30 | 90>(30);
  const [showGoalEditor, setShowGoalEditor] = useState(false);
  const [showExport, setShowExport] = useState(false);

  // ─── Deneme Geçmişi ──────────────────────────────────────────────────────────
  const { user } = useAuth();
  const [examHistoryState, setExamHistoryState] = useState<{
    status: 'loading' | 'error' | 'ready';
    exams: ExamResult[];
  }>({ status: 'loading', exams: [] });

  useEffect(() => {
    if (!user?.id) {
      setExamHistoryState({ status: 'ready', exams: [] });
      return;
    }
    let cancelled = false;
    setExamHistoryState(s => ({ ...s, status: 'loading' }));
    const lessonById = new Map(questions.map(q => [q.id, q.lesson]));
    fetchExamHistory(user.id, 30)
      .then(rows => {
        if (cancelled) return;
        const exams = buildExamResults(rows, id => lessonById.get(id));
        setExamHistoryState({ status: 'ready', exams });
      })
      .catch(() => {
        if (!cancelled) setExamHistoryState({ status: 'error', exams: [] });
      });
    return () => {
      cancelled = true;
    };
  }, [user?.id, questions]);

  const examTrend = useMemo(
    () => computeExamTrend(examHistoryState.exams),
    [examHistoryState.exams],
  );

  const speedAccuracyData = useMemo(
    () => aggregateSpeedAccuracyByLesson(computeSpeedAccuracyTradeoff(examHistoryState.exams)),
    [examHistoryState.exams],
  );

  // ─── İstatistikler & Özet Veriler ───────────────────────────────────────────
  const stats = useMemo(() => loadAllStats(), []);
  const overview = useMemo(() => computeOverviewStats(questions, stats), [questions, stats]);
  const forgettingRisk = useMemo(() => computeForgettingRisk(questions, stats), [questions, stats]);
  const streak = useMemo(() => loadStreak(), []);
  const activitySummary = useMemo(() => getActivitySummary(), []);
  const activity = useMemo(() => getRecentActivity(range), [range]);
  const activity90 = useMemo(() => getRecentActivity(90), []);

  // ─── Hedefler & Milestone Bildirimleri ──────────────────────────────────────
  const goals = useGoals();
  const goalProgress = useMemo(
    () => computeGoalProgress(goals, overview, activity90),
    [goals, overview, activity90],
  );

  const milestones = useMemo(
    () => detectMilestones(overview, streak.currentStreak),
    [overview, streak.currentStreak],
  );
  const confettiFired = useRef(false);
  useEffect(() => {
    if (milestones.length === 0 || confettiFired.current) return;
    import('canvas-confetti')
      .then(confetti => confetti.default({ particleCount: 80, spread: 60, origin: { y: 0.7 } }))
      .catch(() => {});
    confettiFired.current = true;
  }, [milestones]);

  // ─── Trend & Tahmin Hesaplamaları ───────────────────────────────────────────
  const accuracyTrend = useMemo(() => {
    const recent7 = activity90.slice(-7).reduce((s, a) => s + a.correct, 0);
    const recent7Total = activity90.slice(-7).reduce((s, a) => s + a.count, 0);
    const prev7 = activity90.slice(-14, -7).reduce((s, a) => s + a.correct, 0);
    const prev7Total = activity90.slice(-14, -7).reduce((s, a) => s + a.count, 0);
    const curr = recent7Total > 0 ? Math.round((recent7 / recent7Total) * 100) : 0;
    const prev = prev7Total > 0 ? Math.round((prev7 / prev7Total) * 100) : 0;
    return { current: curr, previous: prev };
  }, [activity90]);

  const streakTrend = useMemo(() => {
    return { current: streak.currentStreak, previous: Math.max(0, streak.currentStreak - 7) };
  }, [streak]);

  const solvedLast7 = useMemo(() => activity90.slice(-7).reduce((s, a) => s + a.count, 0), [activity90]);
  const solvedPrev7 = useMemo(() => activity90.slice(-14, -7).reduce((s, a) => s + a.count, 0), [activity90]);

  const unitAccuracyData = useMemo<UnitAccuracy[]>(() => {
    const map = new Map<string, { lesson: string; corrects: number; attempts: number }>();
    for (const q of questions) {
      const s = stats[q.id];
      if (!s || s.attempts === 0) continue;
      const key = `${q.lesson}␟${q.unit}`;
      const entry = map.get(key) ?? { lesson: q.lesson, corrects: 0, attempts: 0 };
      entry.corrects += s.corrects;
      entry.attempts += s.attempts;
      map.set(key, entry);
    }
    return Array.from(map.entries()).map(([key, e]) => ({
      unit: key.split('␟')[1],
      lesson: e.lesson,
      accuracy: e.attempts > 0 ? Math.round((e.corrects / e.attempts) * 100) : 0,
      attempts: e.attempts,
    }));
  }, [questions, stats]);

  const momentum = useMemo(() => computeMomentum(activity90, 7), [activity90]);
  const lessonConsistency = useMemo(() => computeLessonConsistency(unitAccuracyData), [unitAccuracyData]);
  const leastConsistent = lessonConsistency[0] ?? null;

  const alerts = useMemo(
    () => generateKpiAlerts(overview, streak, activity90),
    [overview, streak, activity90],
  );

  const predictionBand = useMemo(
    () => computePredictionBand(activity90, 7, 14),
    [activity90],
  );

  const weeklyForecast = useMemo(
    () => predictionBand.projection.reduce((s, p) => s + p.expected, 0),
    [predictionBand],
  );

  const lessonPriorities = useMemo(
    () => computeLessonPriority(overview, lessonConsistency),
    [overview, lessonConsistency],
  );

  const dailyRec = useMemo(
    () => computeDailyRecommendation(overview, activity90, goals, lessonConsistency, questions, stats),
    [overview, activity90, goals, lessonConsistency, questions, stats],
  );

  // ─── Grafik Veri Dönüşümleri ────────────────────────────────────────────────
  const dailyActivityData = useMemo(
    () => activity.map(a => ({ date: a.date, correct: a.correct, incorrect: a.incorrect })),
    [activity],
  );

  const heatMapData = useMemo(
    () => activity90.map(a => ({ date: a.date, count: a.count })),
    [activity90],
  );

  const trendLineData = useMemo(
    () => activity90.slice(-42).map(a => ({
      date: a.date,
      correct: a.correct,
      incorrect: a.incorrect,
      total: a.count,
    })),
    [activity90],
  );

  const radarData = useMemo(
    () => overview.byLesson
      .filter(l => l.total > 0)
      .map(l => ({ axis: l.lesson, value: l.accuracy })),
    [overview.byLesson],
  );

  const scatterData = useMemo(
    () => overview.byLesson
      .filter(l => l.solved > 0)
      .map(l => ({ lesson: l.lesson, solved: l.solved, accuracy: l.accuracy, total: l.total })),
    [overview.byLesson],
  );

  // ─── 1-Click CTA Eylem Yöneticileri ─────────────────────────────────────────
  const handleStartLesson = (lesson: string, count = 20) => {
    if (!onStartQuestionIds) return;
    const ids = selectRemedyQuestionsForLesson(lesson, questions, stats, count);
    if (ids.length === 0) {
      toast.warning(`${lesson} dersi için çözülecek soru bulunamadı.`);
      return;
    }
    onStartQuestionIds(ids);
  };

  const handleStartSpeedAccuracyRemedy = (lesson: string) => {
    if (!onStartQuestionIds) return;
    const ids = selectSpeedAccuracyRemedyQuestions(lesson, questions, stats, 20);
    if (ids.length === 0) {
      toast.warning(`${lesson} dersi için soru bulunamadı.`);
      return;
    }
    onStartQuestionIds(ids);
  };

  const handleStartUnit = (lesson: string, unit: string) => {
    if (!onStartQuestionIds) return;
    const ids = selectUnitQuestions(lesson, unit, questions, stats, 10);
    if (ids.length === 0) {
      toast.warning(`"${unit}" ünitesi için soru bulunamadı.`);
      return;
    }
    onStartQuestionIds(ids);
  };

  const handleStartRecommended = () => {
    if (!onStartQuestionIds) return;
    if (dailyRec.questionIds && dailyRec.questionIds.length > 0) {
      onStartQuestionIds(dailyRec.questionIds);
    } else if (dailyRec.focusLesson) {
      handleStartLesson(dailyRec.focusLesson, 20);
    } else {
      toast.warning('Önerilen soru bulunamadı.');
    }
  };

  const handleExportPDF = () => {
    window.print();
  };

  const handleExportCSV = () => {
    const rows = [
      ['Ders', 'Toplam Soru', 'Çözülen', 'Doğru', 'Yanlış', 'Doğruluk (%)'],
      ...overview.byLesson.map(l => [
        `"${l.lesson.replace(/"/g, '""')}"`,
        l.total,
        l.solved,
        l.corrects,
        Math.max(0, l.attempts - l.corrects),
        l.accuracy,
      ]),
    ];
    const csvContent = '\uFEFF' + rows.map(e => e.join(';')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DUSBANKASI_Istatistikler_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('İstatistikler CSV olarak indirildi.');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'DUS Bankası İstatistiklerim',
          text: `DUS Hazırlık: %${overview.accuracy} doğruluk ile ${overview.solvedUnique} soru çözdüm!`,
          url: window.location.href,
        });
      } catch {
        // kullanıcı iptal etti
      }
    } else {
      await navigator.clipboard.writeText(
        `DUS Hazırlık: %${overview.accuracy} doğruluk ile ${overview.solvedUnique} soru çözdüm!`,
      );
      toast.success('Özet panoya kopyalandı.');
    }
  };

  // ─── Sekme Tanımları ────────────────────────────────────────────────────────
  const tabs = [
    { key: 'cockpit' as const, label: 'Kokpit', icon: <Gauge size={16} weight="bold" /> },
    { key: 'rhythm' as const, label: 'Ritim', icon: <ChartLineUp size={16} weight="bold" /> },
    { key: 'mastery' as const, label: 'Ders Röntgeni', icon: <Target size={16} weight="bold" /> },
    { key: 'simulation' as const, label: 'Simülasyon', icon: <Flask size={16} weight="bold" /> },
  ];

  return (
    <div className="flex flex-col gap-6 pb-16 anim-slide-up">
      {/* ─── Sayfa Başlığı ve Aksiyonlar ────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/15 inline-block mb-2">
            Performans Paneli v6
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[color:var(--color-text-primary)]">
            İstatistikler
          </h1>
          <p className={`${theme.subtext} text-xs sm:text-sm mt-1`}>
            DUS projeksiyonu, ritim takibi, ders röntgeni ve simülasyon merkezi.
          </p>
        </div>
        <div className="flex items-center gap-2.5 print:hidden">
          <Button
            onClick={() => setShowGoalEditor(true)}
            variant="unstyled"
            className={`px-3.5 py-2 rounded-xl border ${theme.border} bg-white/[0.02] hover:bg-white/[0.06] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer`}
          >
            <SlidersHorizontal size={14} weight="bold" />
            <span>Hedefler</span>
          </Button>
          <Button
            onClick={() => setShowExport(true)}
            variant="unstyled"
            className="px-3.5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-indigo-500/20 transition-all cursor-pointer"
          >
            <FileArrowDown size={14} weight="bold" />
            <span>Dışa Aktar</span>
          </Button>
        </div>
      </div>

      {/* ─── Segmented 4-Sekme Çubuğu ────────────────────────────────────────── */}
      <div className="flex items-center p-1.5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md gap-1 overflow-x-auto custom-scrollbar print:hidden">
        {tabs.map(tab => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 min-w-[110px] sm:min-w-0 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'text-[#8b8b98] hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ─── Sekme İçeriği ─────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'cockpit' && (
            <TabCockpit
              theme={theme}
              overview={overview}
              streak={streak}
              activitySummary={activitySummary}
              activity90={activity90}
              goals={goals}
              alerts={alerts}
              dailyRec={dailyRec}
              momentum={momentum}
              leastConsistent={leastConsistent}
              weeklyForecast={weeklyForecast}
              predictionBand={predictionBand}
              accuracyTrend={accuracyTrend}
              streakTrend={streakTrend}
              solvedLast7={solvedLast7}
              solvedPrev7={solvedPrev7}
              onStartLesson={handleStartLesson}
              onStartRecommended={handleStartRecommended}
            />
          )}

          <Suspense
            fallback={
              <div className="py-24 flex flex-col items-center justify-center gap-3 text-xs text-[#8b8b98] animate-pulse">
                <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
                <span>Görünüm yükleniyor...</span>
              </div>
            }
          >
            {activeTab === 'rhythm' && (
              <TabRhythm
                theme={theme}
                activitySummary={activitySummary}
                activity={activity}
                activity90={activity90}
                dailyActivityData={dailyActivityData}
                heatMapData={heatMapData}
                trendLineData={trendLineData}
                dailyGoal={goals.dailyQuestions || 50}
                range={range}
                onRangeChange={setRange}
              />
            )}

            {activeTab === 'mastery' && (
              <TabMastery
                theme={theme}
                questions={questions}
                stats={stats}
                overview={overview}
                radarData={radarData}
                scatterData={scatterData}
                speedAccuracyData={speedAccuracyData}
                lessonPriorities={lessonPriorities}
                dailyRec={dailyRec}
                forgettingRisk={forgettingRisk}
                isUserLoggedIn={!!user}
                isExamHistoryLoading={examHistoryState.status === 'loading'}
                examHistoryError={examHistoryState.status === 'error' ? 'Deneme geçmişi yüklenemedi.' : null}
                onStartLesson={handleStartLesson}
                onStartRecommended={handleStartRecommended}
                onStartSpeedAccuracyRemedy={handleStartSpeedAccuracyRemedy}
                onStartUnit={handleStartUnit}
                onStartQuestionIds={onStartQuestionIds}
              />
            )}

            {activeTab === 'simulation' && (
              <TabSimulation
                theme={theme}
                overview={overview}
                streak={streak}
                activitySummary={activitySummary}
                activity90={activity90}
                goalProgress={goalProgress}
                examHistory={examHistoryState}
                examTrend={examTrend}
                isUserLoggedIn={!!user}
                onEditGoals={() => setShowGoalEditor(true)}
              />
            )}
          </Suspense>
        </motion.div>
      </AnimatePresence>

      {/* ─── Modallar ──────────────────────────────────────────────────────── */}
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
        onSave={g => {
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
