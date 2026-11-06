/**
 * DUS Bankası — DUS Simülasyon Modu Sonuç & Analiz Ekranı
 *
 * Kullanıcı Kuralları & DUS Mimarisi:
 * - 120 Soru Kutucuğu (Temel 40, Klinik 80):
 *     Boşlar: SARI
 *     Doğrular: YEŞİL
 *     Yanlışlar: KIRMIZI
 * - Kutucuklara tıklanarak ve butonlarla sorular arası geçiş yapılarak ayrıntılı inceleme
 * - Soruları incelerken favorilere ekleme/çıkarma desteği
 * - DUS Net Formülü: Doğru - Yanlış / 4
 * - Branş bazlı analiz: FİZYOLOJİ VE HİSTOLOJİ İSTATİSTİĞİ BİR TUTULUR ('Fizyoloji - Histoloji')
 * - Ünite bazlı analiz: Soruların ünitesi belli değilse (çıkmış/deneme) sadece branş analizi tutulur
 * - Boş ve yanlışların sonraki 5 denemeye dengeli dağıtılması ve doğru yapılanların havuzdan elenmesi özeti
 */

import { useState, useMemo, useCallback } from 'react';
import {
  Clock,
  ChartBar,
  Warning,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Star,
  CheckCircle,
  XCircle,
  Repeat,
  Sparkle,
  BookmarkSimple,
} from '@phosphor-icons/react';
import { toast } from 'sonner';
import { Button } from './ui/Button';
import type { Question } from '../data';
import { getPlacementForNet } from '../lib/dusPlacement';
import {
  computeSimulationNet,
  computeSimulationBranchStats,
  computeSimulationUnitStats,
  type BranchStat,
} from '../lib/simulationEngine';

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
  onToggleFavorite?: (id: string) => void;
  initialTab?: 'review' | 'branch' | 'unit';
  examTitle?: string;
  examDate?: string;
  backButtonText?: string;
  onBack?: () => void;
  onGoToStats?: () => void;
  theme: {
    card: string;
    subtext: string;
    bg: string;
    text: string;
    border: string;
    [key: string]: string;
  };
}

export default function SimulationResultView({
  details,
  usedSeconds,
  onRestart,
  onRetryIncorrect,
  onToggleFavorite,
  initialTab = 'review',
  examTitle,
  examDate,
  backButtonText,
  onBack,
  onGoToStats,
  theme,
}: SimulationResultViewProps) {
  const [reviewIndex, setReviewIndex] = useState<number>(0);
  const [matrixFilter, setMatrixFilter] = useState<'all' | 'correct' | 'incorrect' | 'blank'>('all');
  const [activeTab, setActiveTab] = useState<'review' | 'branch' | 'unit'>(initialTab);

  const total = details.length;
  const correct = details.filter(d => d.state === 'correct').length;
  const incorrect = details.filter(d => d.state === 'incorrect').length;
  const blank = details.filter(d => d.state === 'blank').length;
  const mistakes = incorrect + blank;

  const netScore = computeSimulationNet(correct, incorrect);
  const accuracy = (correct + incorrect) > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;
  const usedMinutes = Math.round(usedSeconds / 60);

  // Branş bazlı istatistikler (Fizyoloji ve Histoloji tek branş altında toplanır)
  const branchStats = useMemo(() => computeSimulationBranchStats(details), [details]);

  // Ünite bazlı istatistikler (ünitesi belirsiz ise null döner)
  const unitStats = useMemo(() => computeSimulationUnitStats(details), [details]);

  // Şu an incelenen soru
  const currentReview = details[reviewIndex] || details[0];
  const currentQuestion = currentReview?.question;

  // Favori geçişi
  const [favSparkle, setFavSparkle] = useState(false);
  const handleReviewToggleFavorite = useCallback(() => {
    if (!currentQuestion) return;
    setFavSparkle(true);
    const willBeFav = !currentQuestion.is_favorite;
    if (onToggleFavorite) {
      onToggleFavorite(currentQuestion.id);
    }
    currentQuestion.is_favorite = willBeFav;
    if (willBeFav) toast.success('Soru favorilere eklendi');
    else toast('Soru favorilerden çıkarıldı');
    setTimeout(() => setFavSparkle(false), 500);
  }, [currentQuestion, onToggleFavorite]);

  // Sonraki yanlışa / boşa zıplama
  const handleJumpToNextMistake = useCallback(() => {
    for (let i = 1; i <= total; i++) {
      const idx = (reviewIndex + i) % total;
      if (details[idx].state !== 'correct') {
        setReviewIndex(idx);
        return;
      }
    }
    toast.info('Tüm sorularınız doğru!');
  }, [reviewIndex, total, details]);

  const placement = getPlacementForNet(netScore);

  return (
    <div className={`w-full relative min-h-dvh pb-32 pt-6 font-sans ${theme.bg}`}>
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 w-full anim-fade-in">

        {/* ── ÜST BAŞLIK & SKOR ÖZETİ HERO ── */}
        <section className="mb-8">
          {/* Geri Dönüş ve Aksiyon Çubuğu */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/10 flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <ArrowLeft size={14} weight="bold" />
                  <span>{backButtonText || 'Geri Dön'}</span>
                </button>
              )}
              <span className="px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase bg-rose-500/15 text-rose-300 border border-rose-500/30">
                {examTitle ? 'Kayıtlı Simülasyon' : 'DUS Simülasyon Analizi'}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              {onGoToStats && (
                <button
                  type="button"
                  onClick={onGoToStats}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/30 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <ChartBar size={14} weight="bold" />
                  <span>İstatistikler &amp; Grafikler</span>
                </button>
              )}
              <span className="text-xs text-white/50 font-medium">120 Soru · 150 Dk Standart</span>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              {examTitle || 'Sınav Performans Karnesi'}
            </h2>
            {examDate && (
              <p className="text-xs text-white/50 mt-1 font-mono">
                Sınav Tarihi: {new Date(examDate).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
            )}
          </div>

          {/* Hero Net & KPI Kartları */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Toplam Net Kartı */}
            <div className="lg:col-span-5 double-bezel relative overflow-hidden bg-gradient-to-br from-indigo-900/30 via-slate-900/40 to-black/60 p-6 sm:p-8 rounded-2xl border border-indigo-500/30 shadow-2xl flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-3xl pointer-events-none" />

              <div>
                <span className="text-indigo-300 text-xs font-bold tracking-widest uppercase">
                  Toplam DUS Neti
                </span>
                <div className="text-6xl sm:text-7xl font-black font-mono tracking-tighter text-white mt-2 mb-3">
                  {netScore.toFixed(2)}
                  <span className="text-xl sm:text-2xl text-white/40 ml-2 font-normal font-sans">/ 120</span>
                </div>
                <p className="text-xs text-white/60">
                  Formül: <span className="font-mono text-emerald-400 font-bold">{correct} Doğru</span> - (<span className="font-mono text-red-400 font-bold">{incorrect} Yanlış</span> / 4)
                </p>
              </div>

              {/* DUS Baraj & Sıralama Rozeti */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase font-bold text-white/50">Tahmini Başarı</p>
                  <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300 font-mono">
                    {placement.passed ? `#${placement.rank} Derece` : 'BARAJ ALTI'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] uppercase font-bold text-white/50">Başarı Oranı</p>
                  <p className="text-lg font-black text-white font-mono">%{accuracy}</p>
                </div>
              </div>
            </div>

            {/* Dağılım KPI Kutuları */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col justify-between">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold mb-3">
                  <CheckCircle size={18} weight="fill" />
                </div>
                <div>
                  <p className="text-3xl font-black font-mono text-emerald-400">{correct}</p>
                  <p className="text-xs font-bold text-emerald-300/80 uppercase mt-1">Doğru (Yeşil)</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20 flex flex-col justify-between">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-300 flex items-center justify-center font-bold mb-3">
                  <XCircle size={18} weight="fill" />
                </div>
                <div>
                  <p className="text-3xl font-black font-mono text-red-400">{incorrect}</p>
                  <p className="text-xs font-bold text-red-300/80 uppercase mt-1">Yanlış (Kırmızı)</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col justify-between">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold mb-3">
                  <Warning size={18} weight="fill" />
                </div>
                <div>
                  <p className="text-3xl font-black font-mono text-amber-400">{blank}</p>
                  <p className="text-xs font-bold text-amber-300/80 uppercase mt-1">Boş (Sarı)</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                <div className="w-8 h-8 rounded-lg bg-white/10 text-slate-200 flex items-center justify-center font-bold mb-3">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-3xl font-black font-mono text-white">{usedMinutes} <span className="text-sm font-sans font-medium text-white/50">DK</span></p>
                  <p className="text-xs font-bold text-white/60 uppercase mt-1">Süre / 150 Dk</p>
                </div>
              </div>

              {/* 5-Deneme Tekrar Dağıtımı Bilgi Rozeti */}
              <div className="col-span-2 sm:col-span-4 p-4 rounded-2xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-indigo-500/30 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                  <Repeat size={22} weight="bold" />
                </div>
                <div className="text-xs leading-relaxed text-white/80">
                  <strong className="text-indigo-300">5 Denemelik Adaptif Dağıtım:</strong> Bu simülasyondaki{' '}
                  <span className="text-amber-300 font-bold">{blank} boş</span> ve{' '}
                  <span className="text-red-300 font-bold">{incorrect} yanlış</span> soru, branş farkları dengelenerek
                  sonraki 5 DUS simülasyonunuza paylaştırıldı (her denemede ~{Math.ceil(mistakes / 5)} soru tekrar gelecektir).
                  Doğru çözülen <span className="text-emerald-300 font-bold">{correct} soru</span> ise simülasyon havuzundan elendi.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 120 SORULUK ANALİZ MATRİSİ (KUTUCUKLAR) ── */}
        {/* KURAL: "en son analiz kısmında ise bu kutucuklardan boşlar sarı doğrular yeşil yanlışlar kırmızı yanar ve sorular arası geçiş yapılarak inceleme yapılabilir." */}
        <section className="mb-10 double-bezel p-6 sm:p-8 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <ChartBar size={20} className="text-indigo-400" />
                120 Soru Analiz Tablosu
              </h3>
              <p className="text-xs text-white/50 mt-0.5">
                Kutucuklara tıklayarak istediğiniz sorunun kök, şık ve açıklamalarını inceleyebilirsiniz.
              </p>
            </div>

            {/* Filtre Butonları */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setMatrixFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  matrixFilter === 'all' ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                Tümü (120)
              </button>
              <button
                type="button"
                onClick={() => setMatrixFilter('correct')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  matrixFilter === 'correct' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-emerald-400/60 hover:text-emerald-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Doğru ({correct})
              </button>
              <button
                type="button"
                onClick={() => setMatrixFilter('incorrect')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  matrixFilter === 'incorrect' ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'text-red-400/60 hover:text-red-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Yanlış ({incorrect})
              </button>
              <button
                type="button"
                onClick={() => setMatrixFilter('blank')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  matrixFilter === 'blank' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-amber-400/60 hover:text-amber-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Boş ({blank})
              </button>
            </div>
          </div>

          {/* Temel Bilimler (1 - 40) */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black tracking-wider uppercase text-indigo-300">
                Temel Bilimler (1 - 40)
              </span>
              <span className="text-[11px] font-mono text-white/40">40 Soru</span>
            </div>
            <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-20 gap-1.5">
              {details.slice(0, 40).map((d, idx) => {
                const isSelected = reviewIndex === idx;
                const matchesFilter =
                  matrixFilter === 'all' ||
                  (matrixFilter === 'correct' && d.state === 'correct') ||
                  (matrixFilter === 'incorrect' && d.state === 'incorrect') ||
                  (matrixFilter === 'blank' && d.state === 'blank');

                return (
                  <button
                    key={d.question.id}
                    type="button"
                    onClick={() => setReviewIndex(idx)}
                    className={`h-9 rounded-lg font-mono text-xs font-bold transition-all flex items-center justify-center relative cursor-pointer ${
                      isSelected ? 'ring-2 ring-white scale-110 z-10 font-black shadow-lg shadow-white/20' : 'hover:scale-105'
                    } ${
                      !matchesFilter ? 'opacity-20 hover:opacity-100' : 'opacity-100'
                    } ${
                      d.state === 'correct'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20'
                        : d.state === 'incorrect'
                        ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm shadow-red-500/20'
                        : 'bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm shadow-amber-400/20'
                    }`}
                    title={`Soru ${idx + 1} (${d.question.lesson}) - ${
                      d.state === 'correct' ? 'Doğru' : d.state === 'incorrect' ? 'Yanlış' : 'Boş'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Klinik Bilimler (41 - 120) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black tracking-wider uppercase text-emerald-300">
                Klinik Bilimler (41 - 120)
              </span>
              <span className="text-[11px] font-mono text-white/40">80 Soru</span>
            </div>
            <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-20 gap-1.5">
              {details.slice(40, 120).map((d, localIdx) => {
                const globalIdx = 40 + localIdx;
                const isSelected = reviewIndex === globalIdx;
                const matchesFilter =
                  matrixFilter === 'all' ||
                  (matrixFilter === 'correct' && d.state === 'correct') ||
                  (matrixFilter === 'incorrect' && d.state === 'incorrect') ||
                  (matrixFilter === 'blank' && d.state === 'blank');

                return (
                  <button
                    key={d.question.id}
                    type="button"
                    onClick={() => setReviewIndex(globalIdx)}
                    className={`h-9 rounded-lg font-mono text-xs font-bold transition-all flex items-center justify-center relative cursor-pointer ${
                      isSelected ? 'ring-2 ring-white scale-110 z-10 font-black shadow-lg shadow-white/20' : 'hover:scale-105'
                    } ${
                      !matchesFilter ? 'opacity-20 hover:opacity-100' : 'opacity-100'
                    } ${
                      d.state === 'correct'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20'
                        : d.state === 'incorrect'
                        ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm shadow-red-500/20'
                        : 'bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm shadow-amber-400/20'
                    }`}
                    title={`Soru ${globalIdx + 1} (${d.question.lesson}) - ${
                      d.state === 'correct' ? 'Doğru' : d.state === 'incorrect' ? 'Yanlış' : 'Boş'
                    }`}
                  >
                    {globalIdx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── İNCELEME & BRANŞ/ÜNİTE ANALİZ SEKMELERİ ── */}
        <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab('review')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'review'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-white/5 text-white/60 hover:text-white'
            }`}
          >
            <BookmarkSimple size={18} />
            Soru İnceleme ({reviewIndex + 1}/{total})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('branch')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'branch'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-white/5 text-white/60 hover:text-white'
            }`}
          >
            <GraduationCap size={18} />
            Branş Bazlı Analiz (14 Branş)
          </button>

          {unitStats && unitStats.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab('unit')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'unit'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-white/5 text-white/60 hover:text-white'
              }`}
            >
              <ChartBar size={18} />
              Ünite Bazlı Analiz
            </button>
          )}
        </div>

        {/* ── SEKME 1: İNTERAKTİF SORU İNCELEME ── */}
        {activeTab === 'review' && currentQuestion && (
          <section className="double-bezel p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md anim-fade-in mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-white font-mono">
                  Soru {reviewIndex + 1}
                </span>

                <span className="text-xs px-2.5 py-1 rounded-md bg-white/10 font-bold text-white/80">
                  {currentQuestion.lesson} {currentQuestion.unit ? `› ${currentQuestion.unit}` : ''}
                </span>

                {/* Soru Durum Rozeti */}
                <span className={`text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider ${
                  currentReview.state === 'correct'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : currentReview.state === 'incorrect'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {currentReview.state === 'correct' ? 'Doğru' : currentReview.state === 'incorrect' ? 'Yanlış' : 'Boş Bırakıldı'}
                </span>
              </div>

              {/* Favori Butonu & Sonraki Yanlış Butonu */}
              <div className="flex items-center gap-2">
                <Button
                  onClick={handleJumpToNextMistake}
                  variant="unstyled"
                  size="sm"
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 text-xs font-semibold"
                >
                  Sonraki Hata →
                </Button>

                <Button
                  onClick={handleReviewToggleFavorite}
                  variant="unstyled"
                  aria-label={currentQuestion.is_favorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
                  className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    currentQuestion.is_favorite
                      ? 'bg-amber-400/20 text-amber-300 border-amber-400/40 shadow-lg shadow-amber-400/10'
                      : 'bg-white/5 text-white/40 border-white/10 hover:text-amber-300 hover:border-amber-400/30'
                  } ${favSparkle ? 'animate-[gold-sparkle_0.6s_ease-in-out]' : ''}`}
                >
                  <Star size={18} className={currentQuestion.is_favorite ? 'fill-current' : ''} />
                </Button>
              </div>
            </div>

            {/* Soru Kökü */}
            <div className="mb-8">
              <p className="text-base sm:text-lg leading-relaxed font-medium text-white/95 whitespace-pre-line select-text">
                {currentQuestion.question}
              </p>
            </div>

            {/* Şıklar */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options && Object.entries(currentQuestion.options).map(([key, text]) => {
                const isCorrect = key === currentQuestion.correctAnswer;
                const isUserSelected = currentReview.selectedOptionKey === key;
                const isWrongSelection = isUserSelected && !isCorrect;

                let cls = 'w-full text-left p-4 rounded-xl flex items-center gap-4 border transition-all ';
                if (isCorrect) {
                  cls += 'bg-emerald-500/15 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500/50';
                } else if (isWrongSelection) {
                  cls += 'bg-red-500/15 border-red-500 text-red-200 ring-1 ring-red-500/50';
                } else {
                  cls += 'bg-white/[0.03] border-white/5 text-white/60 opacity-60';
                }

                return (
                  <div key={key} className={cls}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                      isCorrect
                        ? 'bg-emerald-500 text-black'
                        : isWrongSelection
                        ? 'bg-red-500 text-white'
                        : 'bg-white/10 text-white/50'
                    }`}>
                      {key}
                    </div>
                    <span className="flex-1 leading-snug">{text}</span>
                    {isCorrect && (
                      <span className="text-xs font-black text-emerald-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
                        <CheckCircle size={15} weight="fill" /> Doğru Cevap
                      </span>
                    )}
                    {isWrongSelection && (
                      <span className="text-xs font-black text-red-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
                        <XCircle size={15} weight="fill" /> Sizin Cevabınız
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Açıklama Kutusu */}
            {currentQuestion.explanation && (
              <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/25 relative overflow-hidden mb-8">
                <div className="flex items-center gap-2 mb-2 text-indigo-300 text-xs font-black uppercase tracking-widest">
                  <Sparkle size={16} /> Detaylı Sınav Açıklaması
                </div>
                <div className="text-sm leading-relaxed text-indigo-100/90 whitespace-pre-line select-text font-normal">
                  {currentQuestion.explanation}
                </div>
              </div>
            )}

            {/* İnceleme İleri / Geri Butonları */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <Button
                onClick={() => setReviewIndex(prev => Math.max(0, prev - 1))}
                disabled={reviewIndex === 0}
                variant="secondary"
                size="md"
              >
                <ArrowLeft size={16} /> Önceki Soru
              </Button>

              <span className="font-mono text-xs text-white/50">
                {reviewIndex + 1} / {total}
              </span>

              <Button
                onClick={() => setReviewIndex(prev => Math.min(total - 1, prev + 1))}
                disabled={reviewIndex === total - 1}
                variant="secondary"
                size="md"
              >
                Sonraki Soru <ArrowRight size={16} />
              </Button>
            </div>
          </section>
        )}

        {/* ── SEKME 2: BRANŞ BAZLI ANALİZ (FİZYOLOJİ VE HİSTOLOJİ BİRLEŞİK) ── */}
        {/* KURAL: "fizyoloji ve histoloji istatistiği bir tutulur ayrılmaz." */}
        {activeTab === 'branch' && (
          <section className="double-bezel p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md anim-fade-in mb-12">
            <div className="mb-6">
              <h3 className="text-xl font-black text-white">Branş Bazlı Net Dağılımı</h3>
              <p className="text-xs text-white/60 mt-1">
                ÖSYM DUS standartlarına göre Fizyoloji ve Histoloji tek branş olarak birleşik değerlendirilir.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-white/50 text-[11px] font-bold uppercase tracking-wider">
                    <th className="py-3 px-4">Ders / Branş</th>
                    <th className="py-3 px-3 text-center">Alan</th>
                    <th className="py-3 px-3 text-center">Soru</th>
                    <th className="py-3 px-3 text-center text-emerald-400">Doğru</th>
                    <th className="py-3 px-3 text-center text-red-400">Yanlış</th>
                    <th className="py-3 px-3 text-center text-amber-400">Boş</th>
                    <th className="py-3 px-4 text-center text-indigo-300 font-bold">Net (D - Y/4)</th>
                    <th className="py-3 px-4 text-right">Başarı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {branchStats.map((st: BranchStat) => (
                    <tr key={st.branch} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                        {st.branch}
                        {st.branch === 'Fizyoloji - Histoloji' && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                            Birleşik
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                          st.category === 'temel'
                            ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                            : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                        }`}>
                          {st.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-center font-mono font-bold text-white/80">{st.total}</td>
                      <td className="py-3.5 px-3 text-center font-mono font-bold text-emerald-400">{st.correct}</td>
                      <td className="py-3.5 px-3 text-center font-mono font-bold text-red-400">{st.incorrect}</td>
                      <td className="py-3.5 px-3 text-center font-mono font-bold text-amber-400">{st.blank}</td>
                      <td className="py-3.5 px-4 text-center font-mono font-black text-indigo-300 text-base">
                        {st.net.toFixed(2)}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-16 h-2 rounded-full bg-white/10 overflow-hidden hidden sm:block">
                            <div
                              className={`h-full rounded-full ${
                                st.accuracy >= 70 ? 'bg-emerald-400' : st.accuracy >= 50 ? 'bg-amber-400' : 'bg-red-400'
                              }`}
                              style={{ width: `${st.accuracy}%` }}
                            />
                          </div>
                          <span className="font-mono font-bold text-white">%{st.accuracy}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── SEKME 3: ÜNİTE BAZLI ANALİZ ── */}
        {activeTab === 'unit' && (
          <section className="double-bezel p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md anim-fade-in mb-12">
            <div className="mb-6">
              <h3 className="text-xl font-black text-white">Ünite Bazlı Net Dağılımı</h3>
              <p className="text-xs text-white/60 mt-1">
                Kanonik müfredat ünitelerine göre soru başarı detayları.
              </p>
            </div>

            {unitStats && unitStats.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-white/50 text-[11px] font-bold uppercase tracking-wider">
                      <th className="py-3 px-4">Ders</th>
                      <th className="py-3 px-4">Ünite</th>
                      <th className="py-3 px-3 text-center">Soru</th>
                      <th className="py-3 px-3 text-center text-emerald-400">Doğru</th>
                      <th className="py-3 px-3 text-center text-red-400">Yanlış</th>
                      <th className="py-3 px-3 text-center text-amber-400">Boş</th>
                      <th className="py-3 px-4 text-center text-indigo-300 font-bold">Net</th>
                      <th className="py-3 px-4 text-right">Başarı</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {unitStats.map((u, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4 font-bold text-white">{u.lesson}</td>
                        <td className="py-3 px-4 text-white/80 max-w-xs truncate">{u.unit}</td>
                        <td className="py-3 px-3 text-center font-mono text-white/70">{u.total}</td>
                        <td className="py-3 px-3 text-center font-mono text-emerald-400">{u.correct}</td>
                        <td className="py-3 px-3 text-center font-mono text-red-400">{u.incorrect}</td>
                        <td className="py-3 px-3 text-center font-mono text-amber-400">{u.blank}</td>
                        <td className="py-3 px-4 text-center font-mono font-bold text-indigo-300">{u.net.toFixed(2)}</td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-white">%{u.accuracy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-8 text-center text-white/50 text-sm">
                Sorular genel deneme / çıkmış havuzundan getirildiği için ünite ayrımı uygulanmamıştır.
              </div>
            )}
          </section>
        )}

      </div>

      {/* ── SABİT ALT AKSİYON BARI ── */}
      <div className="fixed bottom-0 right-0 left-0 z-40 bg-black/80 backdrop-blur-xl border-t border-white/10 p-4">
        <div className="max-w-[1340px] mx-auto flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="text-xs text-white/60">
            DUS Simülasyon Tarihi:{' '}
            <strong className="text-white">
              {examDate
                ? new Date(examDate).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })
                : new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </strong>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap justify-end">
            {onBack && (
              <Button
                onClick={onBack}
                variant="secondary"
                size="md"
                className="flex-1 sm:flex-none border-white/20 text-white hover:bg-white/10"
              >
                {backButtonText || '← Geçmişe Dön'}
              </Button>
            )}

            {onGoToStats && (
              <Button
                onClick={onGoToStats}
                variant="secondary"
                size="md"
                className="flex-1 sm:flex-none border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10"
              >
                İstatistikler
              </Button>
            )}

            {incorrect > 0 && onRetryIncorrect && (
              <Button
                onClick={onRetryIncorrect}
                variant="secondary"
                size="md"
                className="flex-1 sm:flex-none border-red-500/30 text-red-300 hover:bg-red-500/10"
              >
                Yanlışları Tekrar Çöz ({incorrect})
              </Button>
            )}

            <Button
              onClick={onRestart}
              variant="primary"
              size="md"
              className="flex-1 sm:flex-none bg-indigo-600 hover:bg-indigo-500 font-bold px-6 shadow-lg shadow-indigo-600/20"
            >
              Ana Ekrana Dön
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
