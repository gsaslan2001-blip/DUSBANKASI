import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import type { Theme } from '../../theme';
import type { Question } from '../../data';
import type { computeOverviewStats, StatsMap } from '../../lib/stats';
import type { LessonPriority, DailyRecommendation } from '../../types/app';
import type { DersScatterDatum } from '../charts/DersScatterPlot';
import type { RadarDatum } from '../charts/RadarChart';
import type { SpeedAccuracyLessonPoint } from '../../lib/examAnalytics';
import {
  RadarChart,
  DersScatterPlot,
  SpeedAccuracyQuadrant,
  ChartFrame,
} from '../charts';
import DetailedUnitHeatMap from './DetailedUnitHeatMap';
import RecommendationFeed from '../sections/RecommendationFeed';
import { fmt, accColor, SectionTitle } from './statsHelpers';
import { Crosshair, BookOpen, Stack, Brain } from '@phosphor-icons/react';

export interface TabMasteryProps {
  theme: Theme;
  questions: Question[];
  stats: StatsMap;
  overview: ReturnType<typeof computeOverviewStats>;
  radarData: RadarDatum[];
  scatterData: DersScatterDatum[];
  speedAccuracyData: SpeedAccuracyLessonPoint[];
  lessonPriorities: LessonPriority[];
  dailyRec: DailyRecommendation;
  forgettingRisk: { lesson: string; count: number; questionIds: string[] }[];
  isUserLoggedIn: boolean;
  isExamHistoryLoading: boolean;
  examHistoryError: string | null;
  onStartLesson?: (lesson: string, count?: number) => void;
  onStartRecommended?: () => void;
  onStartSpeedAccuracyRemedy?: (lesson: string) => void;
  onStartUnit?: (lesson: string, unit: string) => void;
  onStartQuestionIds?: (ids: string[]) => void;
}

export default function TabMastery({
  theme,
  questions,
  stats,
  overview,
  radarData,
  scatterData,
  speedAccuracyData,
  lessonPriorities,
  dailyRec,
  forgettingRisk,
  isUserLoggedIn,
  isExamHistoryLoading,
  examHistoryError,
  onStartLesson,
  onStartRecommended,
  onStartSpeedAccuracyRemedy,
  onStartUnit,
  onStartQuestionIds,
}: TabMasteryProps) {
  const { difficulty, mastery } = overview;

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Radar & Hız-Doğruluk Kadranı */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-6"
        >
          <ChartFrame
            theme={theme}
            title="Ders Performans Radarı"
            eyebrow="Multi-Boyut"
            right={<Crosshair size={16} weight="thin" className="text-indigo-400" />}
            isEmpty={radarData.length === 0}
            emptyMessage="Henüz çözülmüş soru yok — radar burada oluşacak."
            summary="Derslerin doğruluk oranını çok boyutlu bir radar grafiğinde karşılaştırır."
          >
            <RadarChart data={radarData} size={280} />
          </ChartFrame>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="lg:col-span-6"
        >
          <ChartFrame
            theme={theme}
            title="Hız × Doğruluk Kadranı"
            eyebrow="Deneme Analizi"
            loading={isExamHistoryLoading}
            error={examHistoryError}
            isEmpty={!isExamHistoryLoading && speedAccuracyData.length === 0}
            emptyMessage={
              isUserLoggedIn
                ? 'Henüz tamamlanmış deneme yok — deneme çözdükçe burada oluşacak.'
                : 'Bu grafik için giriş yapmalısın.'
            }
            summary="Denemelerde ders başına ortalama soru süresi ve doğruluğu kadranlarda gösterir; sağ-alt kadran (yavaş+yanlış) kırmızı vurgulu."
          >
            <SpeedAccuracyQuadrant
              data={speedAccuracyData}
              onSelectLesson={onStartSpeedAccuracyRemedy}
            />
          </ChartFrame>
        </motion.div>
      </div>

      {/* 2. Ders Dağılım Grafiği (Scatter) & Öneri Akışı */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5"
        >
          <ChartFrame
            theme={theme}
            title="Ders Dağılım Grafiği"
            eyebrow="Scatter"
            isEmpty={scatterData.length === 0}
            summary="Dersleri çözülen soru sayısı ve doğruluğa göre saçılım grafiğinde konumlar."
          >
            <DersScatterPlot data={scatterData} />
          </ChartFrame>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-7"
        >
          <RecommendationFeed
            priorities={lessonPriorities}
            dailyRec={dailyRec}
            theme={theme}
            onStartRecommended={onStartRecommended}
            onStartLesson={onStartLesson}
          />
        </motion.div>
      </div>

      {/* 3. Ders Bazlı Performans & Zorluk & Ustalık Durumu */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <div className={`${theme.surface} rounded-2xl p-5 border ${theme.border}`}>
            <SectionTitle title="Ders Bazlı Performans" eyebrow="Doğruluk" mb="mb-4" />
            <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
              {overview.byLesson.filter(l => l.solved > 0).length === 0 ? (
                <p className={`${theme.subtext} text-xs py-4 text-center`}>Henüz çözülmüş soru yok.</p>
              ) : (
                overview.byLesson
                  .filter(l => l.solved > 0)
                  .sort((a, b) => b.accuracy - a.accuracy)
                  .map(l => {
                    const c =
                      l.accuracy > 70
                        ? 'bg-emerald-500'
                        : l.accuracy > 50
                        ? 'bg-amber-400'
                        : 'bg-red-400';
                    return (
                      <div key={l.lesson} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-semibold">
                          <span>{l.lesson}</span>
                          <span className="font-mono tabular-nums">{l.accuracy}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${c} transition-all duration-1000 rounded-full`}
                            style={{ width: `${l.accuracy}%` }}
                          />
                        </div>
                      </div>
                    );
                  })
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className={`${theme.surface} rounded-2xl p-5 border ${theme.border} flex-1`}>
            <SectionTitle title="Zorluk Dağılımı" eyebrow="Seviye" mb="mb-3" />
            {(() => {
              const t = difficulty.easy + difficulty.medium + difficulty.hard;
              if (t === 0) {
                return <p className={`${theme.subtext} text-xs py-4 text-center`}>Henüz çözülmüş soru yok.</p>;
              }
              const ep = Math.round((difficulty.easy / t) * 100);
              const mp = Math.round((difficulty.medium / t) * 100);
              return (
                <div className="space-y-3">
                  <div className="h-10 w-full flex rounded-xl overflow-hidden border border-white/5 font-mono text-[10px] font-bold">
                    <div className="bg-emerald-500 h-full flex items-center justify-center text-white" style={{ width: `${ep}%` }}>
                      KOLAY
                    </div>
                    <div className="bg-amber-400 h-full flex items-center justify-center text-black/80" style={{ width: `${mp}%` }}>
                      ORTA
                    </div>
                    <div className="bg-red-400 h-full flex items-center justify-center text-white" style={{ width: `${100 - ep - mp}%` }}>
                      ZOR
                    </div>
                  </div>
                  <div className="flex justify-between text-xs font-mono tabular-nums px-1">
                    <span className={theme.subtext}>{fmt(difficulty.easy)} Soru</span>
                    <span className={theme.subtext}>{fmt(difficulty.medium)} Soru</span>
                    <span className={theme.subtext}>{fmt(difficulty.hard)} Soru</span>
                  </div>
                </div>
              );
            })()}
          </div>

          <div className={`${theme.surface} rounded-2xl p-5 border ${theme.border} flex-1`}>
            <SectionTitle title="Ustalaşma Durumu" eyebrow="Mastery" mb="mb-3" />
            {(() => {
              const t = mastery.untouched + mastery.weak + mastery.learning + mastery.mastered;
              if (t === 0) {
                return <p className={`${theme.subtext} text-xs py-4 text-center`}>Henüz soru verisi yok.</p>;
              }
              const p = {
                u: Math.round((mastery.untouched / t) * 100),
                w: Math.round((mastery.weak / t) * 100),
                l: Math.round((mastery.learning / t) * 100),
                m: Math.round((mastery.mastered / t) * 100),
              };
              return (
                <div className="flex items-end gap-3 h-28">
                  {[
                    { l: 'Yeni', c: 'bg-white/5', p: p.u },
                    { l: 'Zayıf', c: 'bg-red-400/40', p: p.w, t: 'text-red-400' },
                    { l: 'Öğreniliyor', c: 'bg-indigo-400/50', p: p.l, t: 'text-indigo-400' },
                    { l: 'Uzman', c: 'bg-emerald-500', p: p.m, t: 'text-emerald-400' },
                  ].map(b => (
                    <div key={b.l} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className={`text-[10px] font-bold ${b.t ?? theme.subtext}`}>{b.l}</span>
                      <div className={`w-full ${b.c} rounded-t-lg transition-all`} style={{ height: `${Math.max(b.p, 6)}%` }} />
                      <span className="text-[10px] font-mono tabular-nums opacity-70">%{b.p}</span>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* 4. En İyi Ders & En İyi Ünite */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${theme.card} rounded-2xl p-5 relative overflow-hidden group md:col-span-5 border ${theme.border}`}
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/20 flex items-center justify-center shrink-0">
              <BookOpen size={28} className="text-emerald-400" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase mb-0.5">En Başarılı Ders</div>
              {overview.topLessonBySolved ? (
                <>
                  <div className="text-lg font-black truncate">{overview.topLessonBySolved.lesson}</div>
                  <div className="flex items-center gap-3 mt-1.5 font-mono text-xs">
                    <div>
                      <span className={`${theme.subtext} text-[10px]`}>Doğruluk: </span>
                      <strong className={accColor(overview.topLessonBySolved.accuracy)}>%{overview.topLessonBySolved.accuracy}</strong>
                    </div>
                    <div className="w-px h-3 bg-white/10" />
                    <div>
                      <span className={`${theme.subtext} text-[10px]`}>Tamamlanma: </span>
                      <strong>%{Math.round((overview.topLessonBySolved.solved / Math.max(1, overview.topLessonBySolved.total)) * 100)}</strong>
                    </div>
                  </div>
                </>
              ) : (
                <div className={`${theme.subtext} text-xs`}>Henüz veri yok</div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className={`${theme.card} rounded-2xl p-5 relative overflow-hidden group md:col-span-7 border ${theme.border}`}
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center shrink-0">
              <Stack size={28} className="text-indigo-400" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase mb-0.5">En Çok Çözülen Ünite</div>
              {overview.topUnitBySolved ? (
                <>
                  <div className="text-lg font-black truncate" title={overview.topUnitBySolved.unit}>
                    {overview.topUnitBySolved.unit}
                  </div>
                  <div className="flex items-center gap-3 mt-1.5 font-mono text-xs">
                    <div>
                      <span className={`${theme.subtext} text-[10px]`}>Doğruluk: </span>
                      <strong className={accColor(overview.topUnitBySolved.accuracy)}>%{overview.topUnitBySolved.accuracy}</strong>
                    </div>
                    <div className="w-px h-3 bg-white/10" />
                    <div>
                      <span className={`${theme.subtext} text-[10px]`}>Soru: </span>
                      <strong>{fmt(overview.topUnitBySolved.total)}</strong>
                    </div>
                  </div>
                </>
              ) : (
                <div className={`${theme.subtext} text-xs`}>Henüz veri yok</div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. İnteraktif Ünite Isı Haritası (DetailedUnitHeatMap) */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <DetailedUnitHeatMap
          questions={questions}
          stats={stats}
          theme={theme}
          onStartUnit={onStartUnit}
        />
      </motion.div>

      {/* 6. Unutma Riski Paneli */}
      {forgettingRisk.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${theme.surface} rounded-2xl p-5 border ${theme.border}`}
        >
          <SectionTitle
            title="Unutma Riski"
            eyebrow="Spaced Repetition"
            mb="mb-4"
            right={
              <span className="text-xs text-amber-400 font-mono tabular-nums">
                {forgettingRisk.reduce((s, g) => s + g.count, 0)} soru risk altında
              </span>
            }
          />
          <div className="space-y-2.5">
            {forgettingRisk.map(g => (
              <div
                key={g.lesson}
                className={`${theme.card} rounded-xl p-3.5 flex items-center justify-between gap-4 border ${theme.border}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Brain size={18} weight="duotone" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm truncate">{g.lesson}</div>
                    <div className={`${theme.subtext} text-[11px]`}>
                      {g.count} soru · 30+ gündür tekrar edilmedi
                    </div>
                  </div>
                </div>
                {onStartQuestionIds && (
                  <Button
                    onClick={() => onStartQuestionIds(g.questionIds)}
                    variant="unstyled"
                    size="sm"
                    className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 transition-all font-bold text-xs shrink-0 cursor-pointer"
                  >
                    Tekrar Et
                  </Button>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
