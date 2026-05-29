import { useMemo } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface DailyActivity {
  date: string;
  count: number;
  correct: number;
  incorrect: number;
}

interface WeeklyComparisonProps {
  activity: DailyActivity[];
  className?: string;
}

interface WeekStats {
  label: string;
  total: number;
  correct: number;
  incorrect: number;
  days: number;
  accuracy: number;
}

function getWeekStats(data: DailyActivity[]): WeekStats {
  const total = data.reduce((s, d) => s + d.count, 0);
  const correct = data.reduce((s, d) => s + d.correct, 0);
  const incorrect = data.reduce((s, d) => s + d.incorrect, 0);
  const days = data.filter(d => d.count > 0).length;
  return {
    label: '',
    total,
    correct,
    incorrect,
    days,
    accuracy: correct + incorrect > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0,
  };
}

export function WeeklyComparison({ activity, className = '' }: WeeklyComparisonProps) {
  const { thisWeek, lastWeek, diff, trend } = useMemo(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    const thisMonday = new Date(today);
    thisMonday.setDate(today.getDate() - daysSinceMonday);

    const lastMonday = new Date(thisMonday);
    lastMonday.setDate(lastMonday.getDate() - 7);

    const thisWeekData: DailyActivity[] = [];
    const lastWeekData: DailyActivity[] = [];

    for (const d of activity) {
      const date = new Date(d.date);
      if (date >= thisMonday) {
        thisWeekData.push(d);
      } else if (date >= lastMonday && date < thisMonday) {
        lastWeekData.push(d);
      }
    }

    const tw = getWeekStats(thisWeekData);
    const lw = getWeekStats(lastWeekData);
    tw.label = 'Bu Hafta';
    lw.label = 'Geçen Hafta';

    const diff = lw.total > 0 ? Math.round(((tw.total - lw.total) / lw.total) * 100) : tw.total > 0 ? 100 : 0;
    const trend = diff > 0 ? 'up' : diff < 0 ? 'down' : 'flat';

    return { thisWeek: tw, lastWeek: lw, diff, trend };
  }, [activity]);

  const trendColor = trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-red-400' : 'text-amber-400';
  const trendBg = trend === 'up' ? 'bg-emerald-500/10 border-emerald-500/20' : trend === 'down' ? 'bg-red-500/10 border-red-500/20' : 'bg-amber-500/10 border-amber-500/20';
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  function fmt(n: number): string {
    return n.toLocaleString('tr-TR');
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Trend Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold ${trendBg} ${trendColor}`}>
        <TrendIcon size={14} />
        {trend === 'up' && `%${diff} artış — tempoyu yükseltiyorsun!`}
        {trend === 'down' && `%${Math.abs(diff)} düşüş — biraz daha gaz!`}
        {trend === 'flat' && 'Geçen haftayla aynı tempodasın'}
      </div>

      {/* Dual Week Cards */}
      <div className="grid grid-cols-2 gap-3">
        {[thisWeek, lastWeek].map((week, i) => (
          <div key={i} className="bg-[#ffffff]/[0.02] border border-white/[0.03] rounded-xl p-4">
            <div className="text-[#8b8b98] text-[10px] font-bold uppercase tracking-widest mb-3">
              {week.label}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-xl font-black">{fmt(week.total)}</span>
                <span className="text-[#8b8b98] text-[10px]">soru</span>
              </div>

              {/* Mini progress: correct vs incorrect */}
              {week.correct + week.incorrect > 0 ? (
                <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-emerald-400/60 transition-all"
                    style={{ width: `${(week.correct / (week.correct + week.incorrect)) * 100}%` }}
                  />
                  <div
                    className="h-full bg-red-400/60 transition-all"
                    style={{ width: `${(week.incorrect / (week.correct + week.incorrect)) * 100}%` }}
                  />
                </div>
              ) : (
                <div className="h-1.5 bg-white/[0.04] rounded-full" />
              )}

              <div className="flex justify-between text-[10px]">
                <span className="text-emerald-400 font-bold">{week.correct} doğru</span>
                <span className="text-red-400 font-bold">{week.incorrect} yanlış</span>
              </div>

              <div className="flex justify-between text-[10px]">
                <span className="text-[#8b8b98]">{week.days}/7 gün aktif</span>
                <span className={`font-bold ${week.accuracy >= 75 ? 'text-emerald-400' : week.accuracy >= 50 ? 'text-amber-400' : 'text-red-400'}`}>
                  %{week.accuracy}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
