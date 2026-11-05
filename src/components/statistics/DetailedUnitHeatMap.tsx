import { useState, useMemo } from 'react';
import type { Question } from '../../data';
import type { StatsMap } from '../../lib/stats';
import type { Theme } from '../../theme';
import { Button } from '../ui/Button';
import { Stack, ArrowUpRight } from '@phosphor-icons/react';

interface UnitCell {
  attempts: number;
  corrects: number;
  total: number;
  solved: number;
  lastSeen: string;
}

const LESSON_BORDERS: Record<string, string> = {
  'Endodonti': 'border-l-sky-400/60',
  'Protez': 'border-l-indigo-400/60',
  'Periodontoloji': 'border-l-violet-400/60',
  'Radyoloji': 'border-l-amber-400/60',
  'Patoloji': 'border-l-rose-400/60',
  'Histoloji': 'border-l-emerald-400/60',
  'Fizyoloji': 'border-l-cyan-400/60',
  'Cerrahi': 'border-l-orange-400/60',
  'Biyokimya': 'border-l-blue-400/60',
  'Ortodonti': 'border-l-teal-400/60',
  'Restoratif': 'border-l-yellow-400/60',
  'Pedodonti': 'border-l-pink-400/60',
  'Mikrobiyoloji': 'border-l-green-400/60',
  'Farmakoloji': 'border-l-purple-400/60',
};

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
  if (pct === 0) return 'bg-red-600/50';
  if (pct <= 20) return 'bg-orange-500/60';
  if (pct <= 40) return 'bg-orange-400/50';
  if (pct <= 60) return 'bg-amber-400/60';
  if (pct <= 80) return 'bg-emerald-500/60';
  return 'bg-emerald-400';
}

interface DetailedUnitHeatMapProps {
  questions: Question[];
  stats: StatsMap;
  theme: Theme;
  onStartUnit?: (lesson: string, unit: string) => void;
}

export default function DetailedUnitHeatMap({
  questions,
  stats,
  theme,
  onStartUnit,
}: DetailedUnitHeatMapProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const lessonMap = useMemo(() => {
    const m = new Map<string, Map<string, UnitCell>>();
    for (const q of questions) {
      if (!m.has(q.lesson)) m.set(q.lesson, new Map());
      const units = m.get(q.lesson)!;
      if (!units.has(q.unit)) {
        units.set(q.unit, { attempts: 0, corrects: 0, total: 0, solved: 0, lastSeen: '' });
      }
      const u = units.get(q.unit)!;
      u.total++;
      const s = stats[q.id];
      if (s && s.attempts > 0) {
        u.solved++;
        u.attempts += s.attempts;
        u.corrects += s.corrects;
        if (s.lastSeen && s.lastSeen > u.lastSeen) u.lastSeen = s.lastSeen;
      }
    }
    return m;
  }, [questions, stats]);

  const lessons = Array.from(lessonMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className={`${theme.card} p-5 sm:p-6 rounded-2xl border ${theme.border}`}>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h3 className="text-sm font-bold flex items-center gap-2">
          <Stack size={16} className="text-emerald-400" />
          Ünite Isı Haritası{' '}
          <span className={`${theme.subtext} font-medium text-[10px]`}>
            (çözülen / toplam)
          </span>
        </h3>
        <div className="flex items-center gap-2 text-[9px] font-medium flex-wrap">
          {[
            ['Hiç', 'bg-red-900/60'],
            ['<%20', 'bg-orange-600/40'],
            ['%21-40', 'bg-orange-500/30'],
            ['%41-60', 'bg-amber-400/30'],
            ['%61-80', 'bg-emerald-500/25'],
            ['%81+', 'bg-emerald-600/50'],
          ].map(([l, c]) => (
            <span key={l} className="flex items-center gap-1">
              <span className={`w-2.5 h-2.5 rounded-sm ${c} border ${c}`} />
              {l}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {lessons.map(([lesson, units], lessonIdx) => {
          const unitArr = Array.from(units.entries()).sort(
            (a, b) => a[1].solved / Math.max(1, a[1].total) - b[1].solved / Math.max(1, b[1].total),
          );
          const lT = unitArr.reduce((s, [, u]) => s + u.total, 0);
          const lS = unitArr.reduce((s, [, u]) => s + u.solved, 0);
          const lC = Math.round((lS / Math.max(1, lT)) * 100);

          return (
            <div key={lesson}>
              {lessonIdx > 0 && <div className={`border-t ${theme.border} mb-5`} />}
              <div
                className={`flex items-center justify-between mb-3 pl-3 border-l-2 ${
                  LESSON_BORDERS[lesson] ?? 'border-l-white/20'
                }`}
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold">{lesson}</span>
                  <span className={`${theme.subtext} text-[10px]`}>
                    {unitArr.length} ünite
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-20 bg-white/[0.04] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${coverageBarColor(lC)}`}
                      style={{ width: `${lC}%` }}
                    />
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${theme.subtext}`}>
                    {lS}/{lT} <span className="opacity-60">(%{lC})</span>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5">
                {unitArr.map(([unit, u]) => {
                  const key = `${lesson}|||${unit}`;
                  const isOpen = expanded === key;
                  const acc = u.attempts > 0 ? Math.round((u.corrects / u.attempts) * 100) : null;
                  return (
                    <Button
                      key={unit}
                      type="button"
                      variant="unstyled"
                      onClick={() => setExpanded(isOpen ? null : key)}
                      aria-expanded={isOpen}
                      className={`${coverageCellColor(
                        u.solved,
                        u.total,
                      )} text-left rounded-xl px-2.5 py-2 text-[10px] font-bold transition-all hover:scale-[1.02] cursor-pointer ${
                        isOpen ? 'ring-2 ring-indigo-400/60' : ''
                      }`}
                    >
                      <div className="truncate">{unit}</div>
                      <div className="flex items-center justify-end mt-0.5 opacity-80">
                        <span className="text-[9px]">
                          {u.solved}/{u.total}
                        </span>
                      </div>
                      {isOpen && (
                        <div className="mt-2 pt-2 border-t border-white/15 space-y-0.5 font-medium anim-fade-in">
                          <div className="flex justify-between">
                            <span className="opacity-70">Kapsama</span>
                            <span>%{Math.round((u.solved / Math.max(1, u.total)) * 100)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="opacity-70">Doğruluk</span>
                            <span>{acc !== null ? `%${acc}` : '—'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="opacity-70">Doğru</span>
                            <span>
                              {u.corrects}/{u.attempts}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="opacity-70">Son çözüm</span>
                            <span>
                              {u.solved > 0
                                ? new Date(u.lastSeen).toLocaleDateString('tr-TR', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric',
                                  })
                                : '—'}
                            </span>
                          </div>
                          {onStartUnit && (
                            <Button
                              variant="unstyled"
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onStartUnit(lesson, unit);
                              }}
                              className="mt-2 w-full py-1.5 px-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center gap-1 shadow-sm transition-all cursor-pointer"
                            >
                              <span>10 Soru Çöz</span>
                              <ArrowUpRight size={11} weight="bold" />
                            </Button>
                          )}
                        </div>
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
