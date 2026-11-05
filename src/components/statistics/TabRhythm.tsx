import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Theme } from '../../theme';
import type { ActivityPoint, getActivitySummary } from '../../lib/stats';
import {
  DailyActivityChart,
  ContributionHeatMap,
  TrendLineChart,
  ChartFrame,
} from '../charts';
import type { DailyActivityDatum } from '../charts/DailyActivityChart';
import type { TrendLineDatum } from '../charts/TrendLineChart';
import { trDate, accColor } from './statsHelpers';
import { Trophy, Pulse } from '@phosphor-icons/react';

export interface TabRhythmProps {
  theme: Theme;
  activitySummary: ReturnType<typeof getActivitySummary>;
  activity: ActivityPoint[];
  activity90: ActivityPoint[];
  dailyActivityData: DailyActivityDatum[];
  heatMapData: { date: string; count: number }[];
  trendLineData: TrendLineDatum[];
  dailyGoal: number;
  range: 14 | 30 | 90;
  onRangeChange: (range: 14 | 30 | 90) => void;
}

export default function TabRhythm({
  theme,
  activitySummary,
  activity,
  activity90,
  dailyActivityData,
  heatMapData,
  trendLineData,
  dailyGoal,
  range,
  onRangeChange,
}: TabRhythmProps) {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedHeatmapDay, setSelectedHeatmapDay] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Günlük Aktivite Grafiği (Hedef Çizgisi + Range Seçici) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <ChartFrame
          theme={theme}
          title="Günlük Çözüm Aktivitesi"
          eyebrow="Aktivite"
          right={
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-emerald-500" />
                <span className={theme.subtext}>Doğru</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-red-400" />
                <span className={theme.subtext}>Yanlış</span>
              </div>
            </div>
          }
          bezel={{
            stops: [
              { label: '14G', value: 14 as const },
              { label: '30G', value: 30 as const },
              { label: '90G', value: 90 as const },
            ],
            value: range,
            onChange: (r) => {
              onRangeChange(r);
              setSelectedDay(null);
            },
          }}
        >
          <DailyActivityChart
            data={dailyActivityData}
            onDaySelect={setSelectedDay}
            selectedDay={selectedDay}
            target={dailyGoal}
          />
          {selectedDay && (() => {
            const selected = activity.find(a => a.date === selectedDay);
            if (!selected) return null;
            const acc = Math.round((selected.correct / Math.max(1, selected.count)) * 100);
            const dailyAvg = activitySummary.activeDays > 0 ? Math.round(activitySummary.totalSolved / activitySummary.activeDays) : 0;
            const isRecord = !!activitySummary.bestDay && activitySummary.bestDay.date === selected.date;
            return (
              <div className={`mt-5 ${theme.surface} rounded-xl p-4 border ${theme.border} anim-fade-in`}>
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <span className="text-sm font-bold flex items-center gap-2">
                    {trDate(selected.date)}
                    {isRecord && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-md px-1.5 py-0.5">
                        <Trophy size={10} /> Rekor
                      </span>
                    )}
                  </span>
                  <span className={`${theme.subtext} text-[11px]`}>
                    Günlük ort. {dailyAvg} · {selected.count - dailyAvg >= 0 ? '+' : ''}{selected.count - dailyAvg} fark
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-black text-indigo-400 font-mono tabular-nums">{selected.count}</div>
                    <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Çözülen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-emerald-400 font-mono tabular-nums">{selected.correct}</div>
                    <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Doğru</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-red-400 font-mono tabular-nums">{selected.incorrect}</div>
                    <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Yanlış</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-black ${accColor(acc)} font-mono tabular-nums`}>%{acc}</div>
                    <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Başarı</div>
                  </div>
                </div>
              </div>
            );
          })()}
          {!selectedDay && (
            <p className={`${theme.subtext} text-[11px] mt-4 text-center`}>
              Detay için bir güne tıkla · Kadranı seçerek aralığı değiştir
            </p>
          )}
        </ChartFrame>
      </motion.div>

      {/* 2. Aktivite Yoğunluğu (90 Günlük GitHub Heatmap) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        <ChartFrame
          theme={theme}
          title="Aktivite Yoğunluğu"
          eyebrow="Heatmap"
          isEmpty={heatMapData.every(d => d.count === 0)}
          emptyMessage="Henüz aktivite verisi yok."
          summary="Son 90 günün günlük çözüm yoğunluğunu ısı haritası olarak gösterir."
          right={
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: '#8b8b98' }}>
              <span>AZ</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-white/5" />
                <div className="w-3 h-3 rounded-sm bg-emerald-900" />
                <div className="w-3 h-3 rounded-sm bg-emerald-700" />
                <div className="w-3 h-3 rounded-sm bg-emerald-500" />
              </div>
              <span>ÇOK</span>
            </div>
          }
        >
          <ContributionHeatMap
            data={heatMapData}
            onDaySelect={(d) => setSelectedHeatmapDay(d || null)}
            selectedDay={selectedHeatmapDay}
          />
          {selectedHeatmapDay && (() => {
            const selected = activity90.find(a => a.date === selectedHeatmapDay);
            if (!selected) return null;
            const acc = Math.round((selected.correct / Math.max(1, selected.count)) * 100);
            const dailyAvg = activitySummary.activeDays > 0 ? Math.round(activitySummary.totalSolved / activitySummary.activeDays) : 0;
            const isRecord = !!activitySummary.bestDay && activitySummary.bestDay.date === selected.date;
            return (
              <div className={`mt-5 ${theme.surface} rounded-xl p-4 border ${theme.border} anim-fade-in`}>
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <span className="text-sm font-bold flex items-center gap-2">
                    {trDate(selected.date)}
                    {isRecord && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-md px-1.5 py-0.5">
                        <Trophy size={10} /> Rekor
                      </span>
                    )}
                  </span>
                  <span className={`${theme.subtext} text-[11px]`}>
                    Günlük ort. {dailyAvg} · {selected.count - dailyAvg >= 0 ? '+' : ''}{selected.count - dailyAvg} fark
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-black text-indigo-400 font-mono tabular-nums">{selected.count}</div>
                    <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Çözülen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-emerald-400 font-mono tabular-nums">{selected.correct}</div>
                    <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Doğru</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-red-400 font-mono tabular-nums">{selected.incorrect}</div>
                    <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Yanlış</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-black ${accColor(acc)} font-mono tabular-nums`}>%{acc}</div>
                    <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Başarı</div>
                  </div>
                </div>
              </div>
            );
          })()}
          {!selectedHeatmapDay && (
            <p className={`${theme.subtext} text-[11px] mt-4 text-center`}>
              Detay için bir güne tıkla
            </p>
          )}
        </ChartFrame>
      </motion.div>

      {/* 3. Çözüm Trendi (Son 42 Gün Doğru/Yanlış) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
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
    </div>
  );
}
