/**
 * DUS Bankası — DUS Simülasyon Modu Sonuç Ekranı (Faz 4 — Stitch Enhanced)
 *
 * Stitch iyileştirmeleri:
 *   - Animasyonlu skor (score-reveal + AnimatedCounter)
 *   - Performans donut chart (doğru/yanlış/boş)
 *   - Ders bazlı dağılım bar chart
 *   - Zayıf ünite spotlight kartları (kırmızı/amber glow)
 */

import { useState, useEffect, useMemo } from 'react';
import { CheckCheck, Clock, BarChart3, AlertTriangle, Brain, Microscope, ArrowRight, Award, GraduationCap } from 'lucide-react';
import type { Question } from '../data';
import { getPlacementForNet } from '../lib/dusPlacement';

export type AnswerDetail = {
  question: Question;
  state: 'correct' | 'incorrect' | 'blank';
  selectedOptionKey?: string | null;
  timeSpent?: number;
};

interface SimulationResultViewProps {
  details: AnswerDetail[];
  totalSeconds: number;
  usedSeconds: number;
  onRestart: () => void;
  onRetryIncorrect?: () => void;
  theme: {
    card: string;
    subtext: string;
    bg: string;
    text: string;
    border: string;
    [key: string]: string;
  };
}


/* ─── Animated Counter Hook ─────────────────────────────────── */
function useCountUp(target: number, duration = 800, delay = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (target === 0) { setValue(0); return; }
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const elapsed = now - start;
      if (elapsed < delay) { raf = requestAnimationFrame(step); return; }
      const progress = Math.min(1, (elapsed - delay) / duration);
      setValue(Math.round(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, delay]);
  return value;
}


/* ─── Animated Counter Component ────────────────────────────── */
function AnimatedValue({ value, className = '' }: { value: number; className?: string }) {
  const animated = useCountUp(value, 1000, 300);
  return <span className={className}>{animated}</span>;
}

/* ═══════════════════════════════════════════════════════════════
   ANA BİLEŞEN
   ═══════════════════════════════════════════════════════════════ */

export default function SimulationResultView({
  details, usedSeconds, onRestart, onRetryIncorrect
}: SimulationResultViewProps) {
  const [phase, setPhase] = useState<'entering' | 'counting' | 'done'>('entering');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('counting'), 400);
    const t2 = setTimeout(() => setPhase('done'), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const answered = details.filter(d => d.state !== 'blank');
  const correct = details.filter(d => d.state === 'correct').length;
  const incorrect = details.filter(d => d.state === 'incorrect').length;
  const blank = details.filter(d => d.state === 'blank').length;
  const total = details.length;

  const netScore = +(correct - incorrect / 4).toFixed(2);
  const accuracy = answered.length > 0 ? Math.round((correct / answered.length) * 100) : 0;
  // ── Ders bazlı dağılım ──────────────────────────────────────
  const byLesson = useMemo(() => {
    const map = new Map<string, { correct: number; incorrect: number; blank: number; total: number }>();
    for (const d of details) {
      const l = d.question.lesson;
      if (!map.has(l)) map.set(l, { correct: 0, incorrect: 0, blank: 0, total: 0 });
      const entry = map.get(l)!;
      entry.total++;
      if (d.state === 'correct') entry.correct++;
      else if (d.state === 'incorrect') entry.incorrect++;
      else entry.blank++;
    }
    return Array.from(map.entries())
      .map(([lesson, v]) => ({
        lesson,
        ...v,
        accuracy: v.total > 0 ? Math.round((v.correct / v.total) * 100) : 0,
      }))
      .sort((a, b) => b.total - a.total);
  }, [details]);

  // ── Zayıf ünite spotlight ───────────────────────────────────
  const weakUnits = useMemo(() => {
    const map = new Map<string, { lesson: string; unit: string; correct: number; incorrect: number; blank: number; total: number }>();
    for (const d of details) {
      const key = `${d.question.lesson}|||${d.question.unit}`;
      if (!map.has(key)) map.set(key, { lesson: d.question.lesson, unit: d.question.unit, correct: 0, incorrect: 0, blank: 0, total: 0 });
      const entry = map.get(key)!;
      entry.total++;
      if (d.state === 'correct') entry.correct++;
      else if (d.state === 'incorrect') entry.incorrect++;
      else entry.blank++;
    }
    return Array.from(map.values())
      .map(v => ({ ...v, accuracy: v.total > 0 ? Math.round((v.correct / v.total) * 100) : 0 }))
      .filter(v => v.accuracy < 60 && v.total >= 3)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 4);
  }, [details]);



  return (
    <div className="w-full relative min-h-screen pb-32 pt-8">
      {/* Atmospheric Orbs */}
      <div className="fixed top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(111,114,242,0.15)_0%,transparent_70%)] -z-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(52,211,153,0.1)_0%,transparent_70%)] -z-10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 w-full anim-fade-in">
        {/* Top App Bar Replacement: Just the Title */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-[#8b95f6]">Sınav Analizi</h2>
        </div>

        {/* Hero Section: Final Score */}
        <section className="flex flex-col items-center justify-center mb-16 animate-count">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle className="text-white/5 stroke-current" cx="50" cy="50" fill="transparent" r="44" strokeWidth="6"></circle>
              <circle
                className="text-[#8b95f6] stroke-current transition-all duration-1500 ease-in-out"
                cx="50" cy="50" fill="transparent" r="44" strokeLinecap="round" strokeWidth="6"
                style={{ strokeDasharray: 276.46, strokeDashoffset: phase !== 'entering' ? 276.46 - (276.46 * Math.max(0, netScore) / 120) : 276.46 }}
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-6xl font-black text-[#ececf1] tracking-tighter" id="score-counter">
                {phase !== 'entering' ? <AnimatedValue value={netScore} /> : '0'}
              </span>
              <span className="text-[#8b8b98] font-semibold text-sm uppercase tracking-widest mt-1">Sınav Puanı</span>
            </div>
          </div>
        </section>

        {/* DUS Placement Banner */}
        {(() => {
          const placement = getPlacementForNet(netScore);
          return (
            <section className="mb-12 anim-slide-up">
              {placement.passed ? (
                <div className="relative overflow-hidden bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-[24px] border border-indigo-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_50px_rgba(111,114,242,0.15)] group">
                  {/* Atmospheric inner glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-1000" />
                  
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] shrink-0">
                      <GraduationCap size={28} />
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs font-black tracking-widest uppercase mb-1">DUS Yerleştirme Simülasyonu</p>
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                        Tahmini Sıralama: <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 font-mono">#{placement.rank}</span>
                      </h3>
                      <p className="text-[#8b8b98] text-xs font-medium mt-1">Son DUS sınav yerleştirme verilerine göre hesaplanan ortalama başarı derecesi.</p>
                    </div>
                  </div>

                  <div className="w-full md:w-auto shrink-0 relative z-10 flex flex-col gap-2">
                    <p className="text-[#8b8b98] text-[10px] font-black uppercase tracking-wider text-center md:text-left">
                      Girilebilecek En Yüksek Üniversiteler
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {placement.universities.split(',').map((uni, idx) => (
                        <span key={idx} className="px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-indigo-500/30 text-xs font-bold text-slate-100 transition-all flex items-center gap-1.5 shadow-sm whitespace-nowrap">
                          <Award size={13} className="text-indigo-400" /> {uni.replace('- ', '').trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 via-amber-500/10 to-red-500/10 backdrop-blur-[24px] border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_50px_rgba(239,68,68,0.1)]">
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-400/30 flex items-center justify-center text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] shrink-0">
                      <AlertTriangle size={28} />
                    </div>
                    <div>
                      <p className="text-red-300 text-xs font-black tracking-widest uppercase mb-1">DUS Yerleştirme Simülasyonu</p>
                      <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400 tracking-tight">
                        BARAJI GEÇEMEDİNİZ
                      </h3>
                      <p className="text-[#8b8b98] text-xs font-medium mt-1">DUS yerleştirme tercih hakkı kazanabilmek için en az 50 Net yapmanız gerekmektedir.</p>
                    </div>
                  </div>
                  <div className="w-full md:w-auto shrink-0 relative z-10">
                    <div className="px-6 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-300 text-center">
                      Hedef: 50+ Net! Odaklan ve Tekrar Çöz!
                    </div>
                  </div>
                </div>
              )}
            </section>
          );
        })()}

        {/* KPI Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#0d0d12]/60 backdrop-blur-[24px] border border-white/5 rounded-3xl p-6 flex items-center gap-5 group hover:bg-white/[0.05] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#8b95f6]/10 flex items-center justify-center text-[#8b95f6]">
              <CheckCheck size={24} />
            </div>
            <div>
              <p className="text-[#8b8b98] text-sm font-medium">Net Sayısı</p>
              <p className="text-2xl font-bold">{netScore.toFixed(2)}</p>
            </div>
          </div>

          <div className="bg-[#0d0d12]/60 backdrop-blur-[24px] border border-white/5 rounded-3xl p-6 flex items-center gap-5 group hover:bg-white/[0.05] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#fbbf24]/10 flex items-center justify-center text-[#fbbf24]">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-[#8b8b98] text-sm font-medium">Süre</p>
              <p className="text-2xl font-bold">{Math.round(usedSeconds / 60)} DK</p>
            </div>
          </div>

          <div className="bg-[#0d0d12]/60 backdrop-blur-[24px] border border-white/5 rounded-3xl p-6 flex items-center gap-5 group hover:bg-white/[0.05] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
              <BarChart3 size={24} />
            </div>
            <div>
              <p className="text-[#8b8b98] text-sm font-medium">Doğruluk</p>
              <p className="text-2xl font-bold">%{accuracy} <span className="text-sm text-[#8b8b98] font-normal">/ {answered.length} cevap</span></p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Results Donut Chart Column */}
          <div className="lg:col-span-4 bg-[#0d0d12]/60 backdrop-blur-[24px] border border-white/5 rounded-3xl p-8 flex flex-col items-center">
            <h3 className="w-full text-lg font-bold mb-8 text-[#ececf1]">Soru Dağılımı</h3>
            <div className="relative w-48 h-48 mb-8">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" fill="transparent" r="15.915" stroke="rgba(255,255,255,0.05)" strokeWidth="4"></circle>
                {/* Boş */}
                <circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#71717a" strokeDasharray={`${(blank / total) * 100} 100`} strokeDashoffset="0" strokeWidth="4"></circle>
                {/* Yanlış */}
                <circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#f87171" strokeDasharray={`${((incorrect) / total) * 100} 100`} strokeDashoffset={`-${(blank / total) * 100}`} strokeWidth="4"></circle>
                {/* Doğru */}
                <circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#34d399" strokeDasharray={`${(correct / total) * 100} 100`} strokeDashoffset={`-${((blank + incorrect) / total) * 100}`} strokeWidth="4"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-[#ececf1]">{total}</span>
                <span className="text-[10px] text-[#8b8b98] uppercase tracking-widest font-bold">Toplam Soru</span>
              </div>
            </div>

            <div className="w-full space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#34d399]"></span>
                  <span className="text-[#8b8b98]">Doğru</span>
                </div>
                <span className="font-bold text-[#ececf1]">{correct}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#f87171]"></span>
                  <span className="text-[#8b8b98]">Yanlış</span>
                </div>
                <span className="font-bold text-[#ececf1]">{incorrect}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#71717a]"></span>
                  <span className="text-[#8b8b98]">Boş</span>
                </div>
                <span className="font-bold text-[#ececf1]">{blank}</span>
              </div>
            </div>
          </div>

          {/* Ders Bazlı Başarı Column */}
          <div className="lg:col-span-8 bg-[#0d0d12]/60 backdrop-blur-[24px] border border-white/5 rounded-3xl p-8">
            <h3 className="text-lg font-bold mb-8 text-[#ececf1]">Ders Bazlı Başarı</h3>
            <div className="space-y-6">
              {byLesson.map((l) => (
                <div key={l.lesson} className="space-y-2 group">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-[#ececf1]">{l.lesson}</span>
                    <span className={`font-bold ${l.accuracy >= 70 ? 'text-[#34d399]' : l.accuracy >= 50 ? 'text-[#fbbf24]' : 'text-[#f87171]'}`}>{l.accuracy}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${l.accuracy >= 70 ? 'bg-[#34d399]' : l.accuracy >= 50 ? 'bg-[#fbbf24]' : 'bg-[#f87171]'}`}
                      style={{ width: `${l.accuracy}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-end gap-2 text-[10px] text-[#8b8b98] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-emerald-400/80">{l.correct} D</span> • <span className="text-red-400/80">{l.incorrect} Y</span> • <span>{l.blank} B</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Zayıf Ünite Spotlight */}
        {weakUnits.length > 0 && (
          <section className="mt-12">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3 text-[#ececf1]">
              <AlertTriangle className="text-[#fbbf24]" size={20} />
              Zayıf Olduğun Konular
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {weakUnits.map((wu, i) => (
                <div key={`${wu.lesson}-${wu.unit}`} className={`bg-[#0d0d12]/60 backdrop-blur-[24px] p-6 border-l-4 ${i === 0 ? 'border-[#f87171]' : 'border-[#fbbf24]'} rounded-3xl rounded-l-none relative overflow-hidden group`}>
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    {i === 0 ? <Brain size={64} className="text-[#f87171]" /> : <Microscope size={64} className="text-[#fbbf24]" />}
                  </div>
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div>
                      <p className={`text-[10px] ${i === 0 ? 'text-[#f87171]' : 'text-[#fbbf24]'} font-black uppercase tracking-widest mb-1`}>
                        {i === 0 ? 'Kritik Eksik' : 'Geliştirilmeli'}
                      </p>
                      <h4 className="text-xl font-bold text-[#ececf1] max-w-[80%]">{wu.unit}</h4>
                      <p className="text-[#8b8b98] text-xs mt-1">{wu.lesson}</p>
                    </div>
                    <span className={`${i === 0 ? 'bg-[#f87171]/10 text-[#f87171]' : 'bg-[#fbbf24]/10 text-[#fbbf24]'} text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap`}>
                      %{wu.accuracy} Başarı
                    </span>
                  </div>
                  <button onClick={() => {
                    // Kullanıcı Hemen Çalış dediğinde, sadece bu üniteyi çalıştırabiliriz veya onRestart ile ana ekrana dönebilir
                    onRestart();
                  }} className="w-full bg-white/5 hover:bg-white/10 text-[#ececf1] font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 relative z-10 mt-6">
                    Hemen Çalış <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 right-0 left-0 lg:left-[240px] z-40 bg-[#08080a]/80 backdrop-blur-[24px] border-t border-white/5 p-6">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="hidden sm:block">
            <p className="text-[#8b8b98] text-sm font-medium">Bu deneme sınavını {new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })} tarihinde tamamladın.</p>
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            {incorrect > 0 && onRetryIncorrect && (
              <button onClick={onRetryIncorrect} className="flex-1 sm:flex-none px-8 py-3 rounded-xl border border-white/10 font-bold hover:bg-white/5 transition-all active:scale-95 text-[#ececf1]">
                Yanlışları Tekrar Çöz
              </button>
            )}
            <button onClick={onRestart} className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-[#6f72f2] text-white font-bold shadow-lg shadow-[#6f72f2]/20 hover:scale-[1.02] active:scale-95 transition-all">
              Ana Ekrana Dön
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
