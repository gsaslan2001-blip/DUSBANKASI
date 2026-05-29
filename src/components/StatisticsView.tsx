/**
 * DUS Bankası — Kapsamlı İstatistik Paneli v2
 *
 * Tek bir saf veri motorundan (computeOverviewStats) beslenir.
 * Kaynak: localStorage `dus_question_stats` (+ cloud sync) ve `dus_activity_log`.
 * D3 chart bileşenleri ./charts altından gelir.
 */

import { useMemo, useState } from 'react';
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
  type OverviewStats,
} from '../lib/stats';
import {
  BookOpen, TrendingUp, Gauge, CheckCircle2, XCircle,
  Crown, Flame, Trophy, Layers,
} from 'lucide-react';
import {
  DailyActivityChart,
  AnimatedCounter, CountSparkline, ContributionHeatMap, WeeklyComparison,
} from './charts';

/* ─── Yardımcılar ────────────────────────────────────────────────────────── */

function fmt(n: number): string {
  return n.toLocaleString('tr-TR');
}

function trDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' });
}

function accColor(acc: number): string {
  if (acc >= 75) return 'text-emerald-400';
  if (acc >= 50) return 'text-amber-400';
  return 'text-red-400';
}

/* ─── Bölüm başlığı ─────────────────────────────────────────────────────── */
function SectionTitle({ title, right, mb = 'mb-8' }: { title: string; right?: React.ReactNode; mb?: string }) {
  return (
    <div className={`flex items-center justify-between ${mb}`}>
      <h3 className="text-xl font-bold">{title}</h3>
      {right}
    </div>
  );
}

/* ─── Animated number (react-spring) ─────────────────────────────────────── */
function SpringNumber({ value }: { value: number }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span>{number.to((n) => Math.floor(n).toLocaleString('tr-TR'))}</animated.span>;
}

/* ─── KPI Kartı (v3 — HTML referans ile hizalı) ──────────────────────────── */
function StatCard({
  theme, label, value, sub, icon, accentBorder, accentText,
}: {
  theme: Theme; label: string; value: React.ReactNode; sub?: React.ReactNode;
  icon: React.ReactNode; accentBorder: string; accentText: string;
}) {
  return (
    <div className={`relative ${theme.card} rounded-xl overflow-hidden group transition-all duration-300`}>
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${accentBorder}`} />
      <div className="p-5 sm:p-6 pl-6">
        <div className="flex items-start justify-between mb-4">
          <span className={`${theme.subtext} text-xs font-bold uppercase tracking-widest`}>{label}</span>
          <span className={accentText}>{icon}</span>
        </div>
        <div className="text-3xl sm:text-4xl font-black leading-none mb-1">{value}</div>
        {sub != null && <div className={`${theme.subtext} text-xs mt-1`}>{sub}</div>}
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   ANA BİLEŞEN
   ═══════════════════════════════════════════════════════════════════════════ */

export default function StatisticsView({ questions, theme }: { questions: Question[]; theme: Theme }) {
  const [range, setRange] = useState<14 | 30 | 90>(30);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const stats = useMemo(() => loadAllStats(), []);
  const overview: OverviewStats = useMemo(() => computeOverviewStats(questions, stats), [questions, stats]);
  const streak = useMemo(() => loadStreak(), []);
  const activitySummary = useMemo(() => getActivitySummary(), []);
  const activity = useMemo(() => getRecentActivity(range), [range]);
  const activity90 = useMemo(() => getRecentActivity(90), []);

  const { difficulty, mastery } = overview;
  const { ref: statsInViewRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={statsInViewRef} className={`flex flex-col gap-5 pb-12 ${statsInView ? 'anim-slide-up' : 'opacity-0'}`}>

      {/* ═══ SAYFA BAŞLIĞI ══════════════════════════════════════════════════ */}
      <div className="mb-2">
        <h1 className="text-[56px] font-black leading-none tracking-tight">İstatistikler</h1>
        <p className={`${theme.subtext} text-sm mt-2`}>Detaylı performans analizi ve gelişim verileri.</p>
      </div>

      {/* ═══ KPI GRID (4×2) ═════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1. Soru Bankası — SVG donut ile */}
        <StatCard theme={theme} label="Soru Bankası" accentBorder="bg-sky-400/50" accentText="text-sky-400"
          icon={<BookOpen size={16} />}
          value={
            <div className="flex items-center gap-3">
              <div style={{ width: 56, height: 56 }}>
                <CircularProgressbar
                  value={overview.coverage}
                  text={`${overview.coverage}%`}
                  styles={buildStyles({
                    pathColor: '#38bdf8',
                    textColor: '#ececf1',
                    trailColor: 'rgba(255,255,255,0.05)',
                    textSize: '24px',
                  })}
                />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black"><SpringNumber value={overview.bankTotal} /></div>
                <div className="text-[10px] text-sky-400/70 font-medium">Toplam soru</div>
              </div>
            </div>
          }
          sub={`%${overview.coverage} kapsama · ${fmt(overview.unsolvedUnique)} bekliyor`} />

        {/* 2. Toplam Cevaplama */}
        <StatCard theme={theme} label="Toplam Cevaplama" accentBorder="bg-violet-400/50" accentText="text-violet-400"
          icon={<TrendingUp size={16} />}
          value={<AnimatedCounter value={overview.totalAttempts} />}
          sub={`${fmt(overview.solvedUnique)} benzersiz soru · Tekrarlar dahil`} />

        {/* 3. Genel Doğruluk */}
        <StatCard theme={theme} label="Genel Doğruluk" accentBorder="bg-emerald-400/50" accentText="text-emerald-400"
          icon={<Gauge size={16} />}
          value={<span className={accColor(overview.accuracy)}>%{overview.accuracy}</span>}
          sub={`${fmt(overview.totalCorrects)} doğru · ${fmt(overview.totalIncorrects)} yanlış`} />

        {/* 4. Doğru Cevap */}
        <StatCard theme={theme} label="Doğru Cevap" accentBorder="bg-emerald-500/50" accentText="text-emerald-400"
          icon={<CheckCircle2 size={16} />}
          value={<AnimatedCounter value={overview.totalCorrects} />}
          sub={
            <div className="mt-2">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                  style={{ width: `${overview.accuracy}%` }} />
              </div>
            </div>
          } />

        {/* 5. Yanlış Cevap */}
        <StatCard theme={theme} label="Yanlış Cevap" accentBorder="bg-red-400/50" accentText="text-red-400"
          icon={<XCircle size={16} />}
          value={<span className="text-red-400"><AnimatedCounter value={overview.totalIncorrects} /></span>}
          sub={`${fmt(overview.wrongEverUnique)} soru en az 1 kez yanlış`} />

        {/* 6. Ustalaşılan */}
        <StatCard theme={theme} label="Ustalaşılan" accentBorder="bg-amber-400/50" accentText="text-amber-400"
          icon={<Crown size={16} />}
          value={<AnimatedCounter value={overview.masteredUnique} />}
          sub={`%80+ başarı · ${fmt(overview.weakCount)} zayıf soru`} />

        {/* 7. Çalışma Serisi */}
        <StatCard theme={theme} label="Çalışma Serisi" accentBorder="bg-orange-400/50" accentText="text-orange-400"
          icon={<Flame size={16} fill="currentColor" />}
          value={<>{streak.currentStreak} <span className="text-sm font-bold opacity-50">GÜN</span></>}
          sub={
            streak.currentStreak >= 7
              ? <span className="text-orange-400 font-bold uppercase tracking-tight">Efsanevi Seri!</span>
              : `En uzun: ${streak.longestStreak} gün · ${activitySummary.activeDays} aktif gün`
          } />

        {/* 8. Günlük Rekor */}
        <StatCard theme={theme} label="Günlük Rekor" accentBorder="bg-rose-400/50" accentText="text-rose-400"
          icon={<Trophy size={16} />}
          value={activitySummary.bestDay
            ? <><span className="text-rose-400"><AnimatedCounter value={activitySummary.bestDay.count} /></span> <span className="text-sm font-bold opacity-50">SORU</span></>
            : '—'}
          sub={activitySummary.bestDay ? `Rekor günü: ${trDate(activitySummary.bestDay.date)}` : 'Henüz veri yok'} />
      </div>

      {/* ═══ GÜNLÜK AKTİVİTE ════════════════════════════════════════════════ */}
      <div className={`${theme.card} p-6 sm:p-8 rounded-xl`}>
        <SectionTitle
          title="Günlük Çözüm Aktivitesi"
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
              <div className="flex items-center gap-1 text-[11px] font-bold ml-2">
                {([14, 30, 90] as const).map(r => (
                  <button key={r} onClick={() => { setRange(r); setSelectedDay(null); }}
                    className={`px-2.5 py-1 rounded-lg transition-all ${range === r ? 'bg-indigo-500/20 text-indigo-300' : `${theme.subtext} hover:bg-white/[0.06]`}`}>
                    {r}G
                  </button>
                ))}
              </div>
            </div>
          }
        />

        <DailyActivityChart
          data={activity.map(a => ({ date: a.date, correct: a.correct, incorrect: a.incorrect }))}
          onDaySelect={setSelectedDay}
          selectedDay={selectedDay}
        />

        {/* Seçili gün detayı */}
        {selectedDay && (() => {
          const selected = activity.find(a => a.date === selectedDay);
          if (!selected) return null;
          const acc = Math.round((selected.correct / Math.max(1, selected.count)) * 100);
          const dailyAvg = activitySummary.activeDays > 0
            ? Math.round(activitySummary.totalSolved / activitySummary.activeDays) : 0;
          const diff = selected.count - dailyAvg;
          const isRecord = !!activitySummary.bestDay && activitySummary.bestDay.date === selected.date;
          const lessons = Object.entries(selected.byLesson)
            .sort((a, b) => b[1].total - a[1].total);
          const hasBreakdown = selected.correct + selected.incorrect > 0;
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
                  Günlük ort. {dailyAvg} · {diff >= 0 ? '+' : ''}{diff} fark
                </span>
              </div>
              {hasBreakdown ? (
                <>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="text-center">
                      <div className="text-2xl font-black text-indigo-400">{selected.count}</div>
                      <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Çözülen</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-emerald-400">{selected.correct}</div>
                      <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Doğru</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-red-400">{selected.incorrect}</div>
                      <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Yanlış</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-black ${accColor(acc)}`}>%{acc}</div>
                      <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Başarı</div>
                    </div>
                  </div>
                  {lessons.length > 0 && (
                    <div className={`mt-4 pt-3 border-t ${theme.divider}`}>
                      <div className={`${theme.subtext} text-[10px] font-bold uppercase tracking-widest mb-2`}>Ders Kırılımı</div>
                      <div className="flex flex-wrap gap-1.5">
                        {lessons.map(([lesson, ls]) => {
                          const lacc = Math.round((ls.correct / Math.max(1, ls.total)) * 100);
                          return (
                            <span key={lesson} className={`${theme.inputBg} rounded-lg px-2 py-1 text-[10px] font-medium flex items-center gap-1.5`}>
                              <span className="font-bold">{lesson}</span>
                              <span className={theme.subtext}>{ls.total} soru</span>
                              <span className={accColor(lacc)}>%{lacc}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-black text-indigo-400">{selected.count}</div>
                    <div className={`${theme.subtext} text-[10px] uppercase tracking-wide`}>Çözülen</div>
                  </div>
                  <div className="text-center self-center">
                    <p className={`${theme.subtext} text-[11px]`}>Doğru/yanlış kırılımı kaydedilmemiş (eski veri).</p>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {!selectedDay && (
          <p className={`${theme.subtext} text-[11px] mt-4 text-center`}>
            Detay için bir güne tıkla · Rekor: {activitySummary.bestDay ? `${activitySummary.bestDay.count} soru (${trDate(activitySummary.bestDay.date)})` : '—'}
          </p>
        )}
      </div>

      {/* ═══ EN İYİ DERS & ÜNİTE (glow orb) ══════════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`${theme.card} rounded-xl p-5 sm:p-8 relative overflow-hidden group`}>
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full -mr-24 -mt-24 blur-3xl group-hover:scale-110 transition-transform pointer-events-none" />
          <div className="relative z-10 flex items-center gap-6 sm:gap-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-emerald-500/20 border border-emerald-400/20 flex items-center justify-center shrink-0">
              <BookOpen size={36} className="text-emerald-400" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase mb-1">En İyi Ders</div>
              {overview.topLessonBySolved ? (
                <>
                  <div className="text-2xl sm:text-3xl font-black truncate">{overview.topLessonBySolved.lesson}</div>
                  <div className="flex items-center gap-4 mt-2">
                    <div>
                      <div className={`${theme.subtext} text-xs`}>Doğruluk</div>
                      <div className={`text-xl font-bold ${accColor(overview.topLessonBySolved.accuracy)}`}>%{overview.topLessonBySolved.accuracy}</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <div className={`${theme.subtext} text-xs`}>Tamamlanma</div>
                      <div className="text-xl font-bold">%{Math.round((overview.topLessonBySolved.solved / Math.max(1, overview.topLessonBySolved.total)) * 100)}</div>
                    </div>
                  </div>
                </>
              ) : (
                <div className={`${theme.subtext} text-sm`}>Henüz veri yok</div>
              )}
            </div>
          </div>
        </div>

        <div className={`${theme.card} rounded-xl p-5 sm:p-8 relative overflow-hidden group`}>
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full -mr-24 -mt-24 blur-3xl group-hover:scale-110 transition-transform pointer-events-none" />
          <div className="relative z-10 flex items-center gap-6 sm:gap-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center shrink-0">
              <Layers size={36} className="text-indigo-400" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase mb-1">En İyi Ünite</div>
              {overview.topUnitBySolved ? (
                <>
                  <div className="text-xl font-bold truncate" title={overview.topUnitBySolved.unit}>{overview.topUnitBySolved.unit}</div>
                  <div className="flex items-center gap-4 mt-2">
                    <div>
                      <div className={`${theme.subtext} text-xs`}>Doğruluk</div>
                      <div className={`text-xl font-bold ${accColor(overview.topUnitBySolved.accuracy)}`}>%{overview.topUnitBySolved.accuracy}</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <div className={`${theme.subtext} text-xs`}>Soru</div>
                      <div className="text-xl font-bold">{fmt(overview.topUnitBySolved.total)}</div>
                    </div>
                  </div>
                </>
              ) : (
                <div className={`${theme.subtext} text-sm`}>Henüz veri yok</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ DAĞILIM (Ders + Zorluk/Ustalık) ═════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sol: Ders Bazlı Performans — basit progress barlar */}
        <div className={`${theme.card} p-6 sm:p-8 rounded-xl`}>
          <SectionTitle title="Ders Bazlı Performans" />
          <div className="space-y-6 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
            {overview.byLesson.filter(l => l.solved > 0).length === 0 ? (
              <p className={`${theme.subtext} text-xs`}>Henüz çözülmüş soru yok.</p>
            ) : (
              overview.byLesson
                .filter(l => l.solved > 0)
                .sort((a, b) => b.accuracy - a.accuracy)
                .map(l => {
                  const colorClass = l.accuracy > 70 ? 'bg-emerald-500' : l.accuracy > 50 ? 'bg-amber-400' : 'bg-red-400';
                  return (
                    <div key={l.lesson} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{l.lesson}</span>
                        <span className="font-bold">{l.accuracy}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${colorClass} transition-all duration-1000 rounded-full`}
                          style={{ width: `${l.accuracy}%` }} />
                      </div>
                    </div>
                  );
                })
            )}
          </div>
        </div>

        {/* Sağ: Zorluk + Ustalaşma */}
        <div className="flex flex-col gap-6">
          {/* Zorluk Dağılımı — yatay segmented bar */}
          <div className={`${theme.card} p-6 sm:p-8 rounded-xl flex-1`}>
            <SectionTitle title="Zorluk Dağılımı" mb="mb-6" />
            {(() => {
              const total = difficulty.easy + difficulty.medium + difficulty.hard;
              const easyPct = total > 0 ? Math.round((difficulty.easy / total) * 100) : 45;
              const medPct  = total > 0 ? Math.round((difficulty.medium / total) * 100) : 35;
              const hardPct = total > 0 ? 100 - easyPct - medPct : 20;
              return (
                <div className="space-y-4">
                  <div className="h-10 w-full flex rounded-lg overflow-hidden border border-white/5">
                    <div className="bg-emerald-500 h-full flex items-center justify-center text-[10px] font-bold"
                      style={{ width: `${easyPct}%` }}>KOLAY</div>
                    <div className="bg-amber-400 h-full flex items-center justify-center text-[10px] font-bold text-black/70"
                      style={{ width: `${medPct}%` }}>ORTA</div>
                    <div className="bg-red-400 h-full flex items-center justify-center text-[10px] font-bold"
                      style={{ width: `${hardPct}%` }}>ZOR</div>
                  </div>
                  <div className="flex justify-between text-xs px-1" style={{ color: 'var(--color-on-surface-variant, #8b8b98)' }}>
                    <span className={theme.subtext}>{fmt(difficulty.easy)} Soru</span>
                    <span className={theme.subtext}>{fmt(difficulty.medium)} Soru</span>
                    <span className={theme.subtext}>{fmt(difficulty.hard)} Soru</span>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Ustalaşma Durumu — dikey bar chart */}
          <div className={`${theme.card} p-6 sm:p-8 rounded-xl flex-1`}>
            <SectionTitle title="Ustalaşma Durumu" mb="mb-6" />
            {(() => {
              const total = mastery.untouched + mastery.weak + mastery.learning + mastery.mastered;
              const pcts = total > 0 ? {
                untouched: Math.round((mastery.untouched / total) * 100),
                weak:      Math.round((mastery.weak      / total) * 100),
                learning:  Math.round((mastery.learning  / total) * 100),
                mastered:  Math.round((mastery.mastered  / total) * 100),
              } : { untouched: 20, weak: 25, learning: 35, mastered: 20 };
              return (
                <div className="flex items-end gap-3 h-32">
                  <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className={`text-[10px] font-bold ${theme.subtext}`}>Yeni</span>
                    <div className="w-full bg-white/5 rounded-t-lg" style={{ height: `${Math.max(pcts.untouched, 5)}%` }} />
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] font-bold text-red-400">Zayıf</span>
                    <div className="w-full bg-red-400/40 rounded-t-lg" style={{ height: `${Math.max(pcts.weak, 5)}%` }} />
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] font-bold text-indigo-400">Öğreniliyor</span>
                    <div className="w-full bg-indigo-400/50 rounded-t-lg" style={{ height: `${Math.max(pcts.learning, 5)}%` }} />
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] font-bold text-emerald-400">Uzman</span>
                    <div className="w-full bg-emerald-500 rounded-t-lg" style={{ height: `${Math.max(pcts.mastered, 5)}%` }} />
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* ═══ TREND & HAFTALIK ════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CountSparkline */}
        <div className={`${theme.card} p-6 sm:p-8 rounded-xl relative overflow-hidden`}>
          <SectionTitle
            title="30 Günlük Başarı Trendi"
            right={
              <span className="text-xs text-emerald-400 font-bold px-2 py-1 bg-emerald-400/10 rounded-full">
                {(() => {
                  const data = activity90.slice(-30);
                  if (data.length < 2) return '—';
                  const first = data[0].count || 1;
                  const last = data[data.length - 1].count;
                  const diff = Math.round(((last - first) / first) * 100);
                  return (diff >= 0 ? '+' : '') + diff + '%';
                })()}
              </span>
            }
          />
          <CountSparkline data={activity90.slice(-30).map(a => ({ date: a.date, count: a.count }))} />
        </div>

        {/* WeeklyComparison */}
        <div className={`${theme.card} p-6 sm:p-8 rounded-xl`}>
          <SectionTitle title="Haftalık Soru Karşılaştırması" />
          <WeeklyComparison activity={activity90.slice(-14).map(a => ({
            date: a.date, count: a.count, correct: a.correct, incorrect: a.incorrect,
          }))} />
        </div>
      </div>

      {/* ═══ HEATMAP & ÖZET ══════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ContributionHeatMap — 2/3 width */}
        <div className={`${theme.card} p-6 sm:p-8 rounded-xl lg:col-span-2`}>
          <SectionTitle
            title="Aktivite Yoğunluğu"
            mb="mb-6"
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
          />
          <ContributionHeatMap data={activity90.map(a => ({ date: a.date, count: a.count }))} />
        </div>

        {/* Özet Bilgiler — 1/3 width */}
        <div className={`${theme.card} p-6 sm:p-8 rounded-xl`}>
          <SectionTitle title="Özet Bilgiler" mb="mb-6" />
          <div className="space-y-0">
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className={`text-sm ${theme.subtext}`}>Mevcut Seri</span>
              <span className="font-bold text-orange-500">{streak.currentStreak} GÜN</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className={`text-sm ${theme.subtext}`}>En Uzun Seri</span>
              <span className="font-bold">{streak.longestStreak} GÜN</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className={`text-sm ${theme.subtext}`}>Aktif Gün</span>
              <span className="font-bold">{activitySummary.activeDays} GÜN</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className={`text-sm ${theme.subtext}`}>Günlük Ort.</span>
              <span className="font-bold">
                {activitySummary.activeDays > 0 ? Math.round(activitySummary.totalSolved / activitySummary.activeDays) : 0}
              </span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className={`text-sm ${theme.subtext}`}>Toplam Çözüm</span>
              <span className="font-bold text-amber-400">{fmt(activitySummary.totalSolved)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ ÜNİTE ISI HARİTASI ══════════════════════════════════════════════ */}
      <UnitHeatMap questions={questions} stats={stats} theme={theme} />
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════════════════
   ÜNİTE ISI HARİTASI — ders bazlı gruplama + divider + legend + tıklama detay
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
  if (pct === 0) return 'bg-red-600/50';
  if (pct <= 20) return 'bg-orange-500/60';
  if (pct <= 40) return 'bg-orange-400/50';
  if (pct <= 60) return 'bg-amber-400/50';
  if (pct <= 80) return 'bg-emerald-500/50';
  return 'bg-emerald-400/60';
}

function fmtLastSeen(iso: string): string {
  if (!iso) return '—';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' });
}

const LESSON_COLORS: Record<string, string> = {
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

function lessonBorderColor(lesson: string): string {
  return LESSON_COLORS[lesson] ?? 'border-l-white/20';
}

function UnitHeatMap({ questions, stats, theme }: { questions: Question[]; stats: ReturnType<typeof loadAllStats>; theme: Theme }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const lessonMap = useMemo(() => {
    const m = new Map<string, Map<string, UnitCell>>();
    for (const q of questions) {
      if (!m.has(q.lesson)) m.set(q.lesson, new Map());
      const units = m.get(q.lesson)!;
      if (!units.has(q.unit)) units.set(q.unit, { attempts: 0, corrects: 0, total: 0, solved: 0, lastSeen: '' });
      const u = units.get(q.unit)!;
      u.total++;
      const s = stats[q.id];
      if (s && s.attempts > 0) {
        u.solved++; u.attempts += s.attempts; u.corrects += s.corrects;
        if (s.lastSeen && s.lastSeen > u.lastSeen) u.lastSeen = s.lastSeen;
      }
    }
    return m;
  }, [questions, stats]);

  const lessons = Array.from(lessonMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className={`${theme.card} p-5 sm:p-6 rounded-xl`}>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h3 className="text-sm font-bold flex items-center gap-2">
          <Layers size={16} className="text-emerald-400" />Ünite Isı Haritası{' '}
          <span className={`${theme.subtext} font-medium text-[10px]`}>(çözülen / toplam)</span>
        </h3>
        <div className="flex items-center gap-2 text-[9px] font-medium flex-wrap">
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-red-900/60 border border-red-800/60" />Hiç</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-orange-600/40 border border-orange-600/40" />&lt;%20</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-orange-500/30 border border-orange-500/40" />%21-40</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400/30 border border-amber-400/40" />%41-60</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-500/25 border border-emerald-500/30" />%61-80</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-600/50 border border-emerald-500/50" />%81+</span>
        </div>
      </div>

      <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {lessons.map(([lesson, units], lessonIdx) => {
          const unitArr = Array.from(units.entries()).sort((a, b) => {
            const covA = a[1].solved / Math.max(1, a[1].total);
            const covB = b[1].solved / Math.max(1, b[1].total);
            return covA - covB;
          });

          const lessonTotal = unitArr.reduce((s, [, u]) => s + u.total, 0);
          const lessonSolved = unitArr.reduce((s, [, u]) => s + u.solved, 0);
          const lessonCov = Math.round((lessonSolved / Math.max(1, lessonTotal)) * 100);

          return (
            <div key={lesson}>
              {lessonIdx > 0 && <div className={`border-t ${theme.divider} mb-5`} />}

              <div className={`flex items-center justify-between mb-3 pl-3 border-l-2 ${lessonBorderColor(lesson)}`}>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold">{lesson}</span>
                  <span className={`${theme.subtext} text-[10px]`}>{unitArr.length} ünite</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-20 bg-white/[0.04] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${coverageBarColor(lessonCov)}`} style={{ width: `${lessonCov}%` }} />
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${theme.subtext}`}>
                    {lessonSolved}/{lessonTotal} <span className="opacity-60">(%{lessonCov})</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5">
                {unitArr.map(([unit, u]) => {
                  const key = `${lesson}|||${unit}`;
                  const isOpen = expanded === key;
                  const acc = u.attempts > 0 ? Math.round((u.corrects / u.attempts) * 100) : null;
                  const cov = Math.round((u.solved / Math.max(1, u.total)) * 100);
                  return (
                    <button key={unit} type="button"
                      onClick={() => setExpanded(isOpen ? null : key)}
                      className={`${coverageCellColor(u.solved, u.total)} text-left rounded-xl px-2.5 py-2 text-[10px] font-bold transition-all hover:scale-[1.02] cursor-pointer ${isOpen ? 'ring-2 ring-indigo-400/60' : ''}`}>
                      <div className="truncate">{unit}</div>
                      <div className="flex items-center justify-end mt-0.5 opacity-80">
                        <span className="text-[9px]">{u.solved}/{u.total}</span>
                      </div>
                      {isOpen && (
                        <div className="mt-2 pt-2 border-t border-white/15 space-y-0.5 font-medium anim-fade-in">
                          <div className="flex justify-between"><span className="opacity-70">Kapsama</span><span>%{cov}</span></div>
                          <div className="flex justify-between"><span className="opacity-70">Doğruluk</span><span>{acc !== null ? `%${acc}` : '—'}</span></div>
                          <div className="flex justify-between"><span className="opacity-70">Doğru</span><span>{u.corrects}/{u.attempts}</span></div>
                          <div className="flex justify-between"><span className="opacity-70">Son çözüm</span><span>{u.solved > 0 ? fmtLastSeen(u.lastSeen) : '—'}</span></div>
                        </div>
                      )}
                    </button>
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
