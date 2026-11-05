import { motion } from 'framer-motion';
import type { Theme } from '../../theme';
import type { computeOverviewStats, loadStreak, getActivitySummary, ActivityPoint } from '../../lib/stats';
import type { GoalProgress, ExamResult, ExamTrendData } from '../../types/app';
import GoalTracker from '../sections/GoalTracker';
import WhatIfSimulator from '../sections/WhatIfSimulator';
import ExamHistoryTimeline from '../sections/ExamHistoryTimeline';
import { fmt, SectionTitle } from './statsHelpers';

export interface TabSimulationProps {
  theme: Theme;
  overview: ReturnType<typeof computeOverviewStats>;
  streak: ReturnType<typeof loadStreak>;
  activitySummary: ReturnType<typeof getActivitySummary>;
  activity90: ActivityPoint[];
  goalProgress: GoalProgress[];
  examHistory: {
    status: 'loading' | 'error' | 'ready';
    exams: ExamResult[];
  };
  examTrend: ExamTrendData;
  isUserLoggedIn: boolean;
  onEditGoals: () => void;
}

export default function TabSimulation({
  theme,
  overview,
  streak,
  activitySummary,
  activity90,
  goalProgress,
  examHistory,
  examTrend,
  isUserLoggedIn,
  onEditGoals,
}: TabSimulationProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. Hedef Takipçisi & Özet Bilgiler */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7"
        >
          <GoalTracker
            progress={goalProgress}
            theme={theme}
            onEditGoals={onEditGoals}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className={`${theme.card} rounded-2xl p-5 border ${theme.border} lg:col-span-5 flex flex-col justify-between`}
        >
          <div>
            <SectionTitle title="Özet Metrikler" eyebrow="Genel Bakış" mb="mb-4" />
            <div className="space-y-0 font-mono text-xs">
              {(
                [
                  ['Mevcut Seri', `${streak.currentStreak} GÜN`, 'text-orange-400'],
                  ['En Uzun Seri', `${streak.longestStreak} GÜN`, 'text-amber-400'],
                  ['Aktif Gün', `${activitySummary.activeDays} GÜN`, 'text-indigo-400'],
                  [
                    'Günlük Ort.',
                    `${activitySummary.activeDays > 0 ? Math.round(activitySummary.totalSolved / activitySummary.activeDays) : 0} Soru`,
                    'text-[color:var(--color-text-primary)]',
                  ],
                  ['Genel Doğru', fmt(overview.totalCorrects), 'text-emerald-400'],
                  ['Genel Yanlış', fmt(overview.totalIncorrects), 'text-red-400'],
                ] as const
              ).map(([l, v, c], i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center py-2.5 ${i < 5 ? 'border-b border-white/5' : ''}`}
                >
                  <span className={`text-xs ${theme.subtext} font-sans`}>{l}</span>
                  <span className={`font-bold tabular-nums ${c}`}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-center text-[#8b8b98]">
            Veriler yerel ve senkronize oturum kayıtlarından dinamik derlenir.
          </div>
        </motion.div>
      </div>

      {/* 2. Simülasyon: Ne Olurdu? (What-If Simulator) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <WhatIfSimulator
          activity={activity90}
          solvedUnique={overview.solvedUnique}
          bankTotal={overview.bankTotal}
          theme={theme}
        />
      </motion.div>

      {/* 3. Deneme Geçmişi Zaman Çizelgesi */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <div className={`${theme.card} rounded-2xl p-5 border ${theme.border}`}>
          <SectionTitle
            title="Deneme Sınavı Geçmişi"
            eyebrow="Simülasyon Arşivi"
            mb="mb-4"
            right={
              <span className="text-xs font-mono text-indigo-400 tabular-nums">
                {examHistory.exams.length} Tamamlanmış Deneme
              </span>
            }
          />
          {examHistory.status === 'loading' ? (
            <div className="py-12 text-center text-xs text-[#8b8b98] animate-pulse">
              Deneme geçmişi yükleniyor...
            </div>
          ) : !isUserLoggedIn ? (
            <div className="py-12 text-center text-xs text-[#8b8b98]">
              Deneme sınavı geçmişini görmek ve analiz etmek için giriş yapmalısın.
            </div>
          ) : examHistory.exams.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#8b8b98]">
              Henüz tamamlanmış deneme sınavı kaydı bulunamadı.
            </div>
          ) : (
            <ExamHistoryTimeline trend={examTrend} exams={examHistory.exams} theme={theme} />
          )}
        </div>
      </motion.div>
    </div>
  );
}
