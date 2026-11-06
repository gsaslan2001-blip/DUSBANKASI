import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Star, Timer, Warning, ArrowLeft, ArrowRight, CheckCircle, ListChecks, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '../ui/Button';
import type { Question } from '../../data';
import type { AnswerDetail, ActiveSessionInfo, UserSettings } from '../../types/app';
import type { Theme } from '../../theme';
import { fontSizes } from '../../theme';

export interface SimulationExamViewProps {
  questions: Question[];
  initialSession?: ActiveSessionInfo | null;
  timedSeconds?: number;
  onSimulationComplete: (details: AnswerDetail[], usedSeconds: number) => void;
  onToggleFavorite: (id: string) => void;
  onSaveSession?: (session: ActiveSessionInfo) => void;
  theme: Theme;
  settings: UserSettings;
}

const OPTION_LINE_RE = /^[A-E]\s*[)\-.]/;

export function SimulationExamView({
  questions,
  initialSession,
  timedSeconds = 150 * 60, // 150 dakika
  onSimulationComplete,
  onToggleFavorite,
  onSaveSession,
  theme,
  settings,
}: SimulationExamViewProps) {
  const total = questions.length;

  // Soru bazında seçilen şıklar (questionId -> selectedOptionKey 'A'|'B'|'C'|'D'|'E' | null)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | null>>(() => {
    const map: Record<string, string | null> = {};
    if (initialSession?.answers) {
      for (const a of initialSession.answers) {
        if (a?.question?.id) {
          map[a.question.id] = a.selectedOptionKey ?? null;
        }
      }
    }
    return map;
  });

  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    if (initialSession?.currentIndex != null && initialSession.currentIndex >= 0 && initialSession.currentIndex < total) {
      return initialSession.currentIndex;
    }
    return 0;
  });

  // Zamanlayıcı (saniye)
  const [remainingSeconds, setRemainingSeconds] = useState<number>(() => {
    if (initialSession?.remainingSeconds != null && initialSession.remainingSeconds > 0) {
      return initialSession.remainingSeconds;
    }
    return timedSeconds;
  });

  // Sınavı Bitir Onay Modalı
  const [finishModalOpen, setFinishModalOpen] = useState(false);
  // Mobil ekranlar için 120 Soru Navigatör Modalı / Drawer
  const [matrixDrawerOpen, setMatrixDrawerOpen] = useState(false);

  // Soru başı süre ölçümü için sayaç ref
  const questionStartTimeRef = useRef<number>(Date.now());
  const questionTimeSpentRef = useRef<Record<string, number>>({});

  const question = questions[currentIndex] || questions[0];
  const questionId = question?.id;
  const currentSelection = questionId ? (selectedAnswers[questionId] ?? null) : null;

  // Sayacı her saniye azalt
  useEffect(() => {
    if (remainingSeconds <= 0) {
      handleFinalizeExam();
      return;
    }
    const timer = setInterval(() => {
      setRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinalizeExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [remainingSeconds]);

  // Oturumu periyodik veya cevap değişimlerinde kaydet
  useEffect(() => {
    if (!onSaveSession) return;
    const answerDetails: AnswerDetail[] = questions.map(q => {
      const sel = selectedAnswers[q.id] ?? null;
      return {
        question: q,
        state: sel ? (sel === q.correctAnswer ? 'correct' : 'incorrect') : 'blank',
        selectedOptionKey: sel,
        timeSpent: questionTimeSpentRef.current[q.id] ?? 0,
      };
    });

    onSaveSession({
      questions,
      answers: answerDetails,
      currentIndex,
      mode: 'exam',
      remainingSeconds,
      simTotalSeconds: timedSeconds,
    });
  }, [selectedAnswers, currentIndex, remainingSeconds, questions, timedSeconds, onSaveSession]);

  // Seçenek tıklama işlemi (DOĞRU/YANLIŞ ASLA GÖSTERİLMEZ, MAVİ OLARAK İŞARETLENİR)
  const handleSelectOption = useCallback((key: string) => {
    if (!questionId) return;
    setSelectedAnswers(prev => {
      const next = { ...prev };
      // Aynı şıkka tekrar basarsa iptal etmez, şıkkı günceller (temizle butonu ayrı)
      next[questionId] = key;
      return next;
    });
  }, [questionId]);

  // Şıkkı temizleme / Boş bırakma
  const handleClearOption = useCallback(() => {
    if (!questionId) return;
    setSelectedAnswers(prev => {
      const next = { ...prev };
      next[questionId] = null;
      return next;
    });
  }, [questionId]);

  // Soru değiştirirken süre biriktir
  const recordCurrentQuestionTime = useCallback(() => {
    if (!questionId) return;
    const elapsed = Math.round((Date.now() - questionStartTimeRef.current) / 1000);
    questionTimeSpentRef.current[questionId] = (questionTimeSpentRef.current[questionId] ?? 0) + elapsed;
    questionStartTimeRef.current = Date.now();
  }, [questionId]);

  const handleGoToQuestion = useCallback((index: number) => {
    if (index < 0 || index >= total) return;
    recordCurrentQuestionTime();
    setCurrentIndex(index);
    setMatrixDrawerOpen(false);
  }, [total, recordCurrentQuestionTime]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      handleGoToQuestion(currentIndex - 1);
    }
  }, [currentIndex, handleGoToQuestion]);

  const handleNext = useCallback(() => {
    if (currentIndex < total - 1) {
      handleGoToQuestion(currentIndex + 1);
    } else {
      setFinishModalOpen(true);
    }
  }, [currentIndex, total, handleGoToQuestion]);

  // Favorilere ekleme/çıkarma (Star)
  const [favSparkle, setFavSparkle] = useState(false);
  const handleToggleFav = useCallback(() => {
    if (!question) return;
    setFavSparkle(true);
    const willBeFav = !question.is_favorite;
    onToggleFavorite(question.id);
    question.is_favorite = willBeFav;
    if (willBeFav) toast.success('Soru favorilere eklendi');
    else toast('Soru favorilerden çıkarıldı');
    setTimeout(() => setFavSparkle(false), 500);
  }, [question, onToggleFavorite]);

  // Sınavı Tamamlama & Değerlendirme
  const handleFinalizeExam = useCallback(() => {
    recordCurrentQuestionTime();
    setFinishModalOpen(false);

    const usedSecs = Math.max(0, timedSeconds - remainingSeconds);

    const finalDetails: AnswerDetail[] = questions.map(q => {
      const sel = selectedAnswers[q.id] ?? null;
      let state: AnswerDetail['state'] = 'blank';
      if (sel) {
        state = sel === q.correctAnswer ? 'correct' : 'incorrect';
      }
      return {
        question: q,
        state,
        selectedOptionKey: sel,
        timeSpent: questionTimeSpentRef.current[q.id] ?? 0,
      };
    });

    onSimulationComplete(finalDetails, usedSecs);
  }, [questions, selectedAnswers, timedSeconds, remainingSeconds, recordCurrentQuestionTime, onSimulationComplete]);

  // İstatistikler (kaç işaretli, kaç boş)
  const answeredCount = useMemo(() => {
    return Object.values(selectedAnswers).filter(Boolean).length;
  }, [selectedAnswers]);

  const blankCount = total - answeredCount;

  // Temizlenmiş soru metni
  const cleanedQuestion = useMemo(() => {
    if (!question?.question) return '';
    const cleanText = question.question.split('\n').filter(l => !OPTION_LINE_RE.test(l.trim())).join('\n');
    const romanNumeralRe = /(?:\s|^)(I{1,3}|IV|V|VI{1,3}|IX|X)\.\s/g;
    return cleanText.replace(romanNumeralRe, (_, p1) => `\n\n${p1}. `).trim();
  }, [question?.question]);

  const optionEntries = useMemo(
    () => (question?.options ? (Object.entries(question.options) as [string, string][]) : []),
    [question?.options]
  );

  const optionFontKey = settings.fontSize === 'large' ? 'large' : 'normal';

  // Klavye kısayolları
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (finishModalOpen) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
        handleSelectOption(key);
      } else if (['1', '2', '3', '4', '5'].includes(key)) {
        const keyMap: Record<string, string> = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E' };
        handleSelectOption(keyMap[key]);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'f' || e.key === 'F') {
        handleToggleFav();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [finishModalOpen, handleSelectOption, handlePrev, handleNext, handleToggleFav]);

  if (!question) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <p className="text-sm opacity-70">Simülasyon soruları hazırlanıyor...</p>
      </div>
    );
  }

  // Bölüm bilgisi (1-40 Temel Bilimler, 41-120 Klinik Bilimler)
  const isTemel = currentIndex < 40;
  const sectionLabel = isTemel ? 'Temel Bilimler (1-40)' : 'Klinik Bilimler (41-120)';

  return (
    <div className={`flex flex-col h-full anim-fade-in overflow-hidden relative font-sans ${theme.bg}`}>
      {/* ── ÜST BAR: Sınav Bilgisi + Geri Sayım Sayacı + Bitir Butonu ── */}
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-black/20 backdrop-blur-md border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="px-2.5 py-1 rounded-lg text-xs font-black tracking-wider uppercase bg-rose-500/15 text-rose-300 border border-rose-500/30 flex items-center gap-1.5 shrink-0">
            DUS Simülasyon
          </span>

          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md shrink-0 ${
            isTemel ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/25' : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/25'
          }`}>
            {sectionLabel}
          </span>

          <span className="text-xs font-bold text-white/90 truncate hidden md:inline">
            {question.lesson} {question.unit ? `› ${question.unit}` : ''}
          </span>
        </div>

        {/* Sayaç ve Aksiyonlar */}
        <div className="flex items-center gap-3 shrink-0">
          {/* 150 Dk Geri Sayım Sayacı */}
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-mono font-bold text-sm tabular-nums shadow-inner transition-colors ${
            remainingSeconds <= 300
              ? 'bg-red-500/20 text-red-300 border-red-500/40 animate-pulse'
              : remainingSeconds <= 900
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
              : 'bg-white/5 text-slate-200 border-white/10'
          }`}>
            {remainingSeconds <= 300 ? <Warning size={14} className="text-red-400" /> : <Timer size={14} className="text-indigo-400" />}
            <span>
              {String(Math.floor(remainingSeconds / 3600)).padStart(2, '0')}:
              {String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0')}:
              {String(remainingSeconds % 60).padStart(2, '0')}
            </span>
          </div>

          {/* Mobil 120 Matris Aç Butonu */}
          <Button
            onClick={() => setMatrixDrawerOpen(true)}
            variant="unstyled"
            className="lg:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:bg-white/10"
          >
            <ListChecks size={15} />
            <span className="font-mono">{answeredCount}/120</span>
          </Button>

          {/* Sınavı Bitir Butonu */}
          <Button
            onClick={() => setFinishModalOpen(true)}
            variant="unstyled"
            className="px-3.5 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-black tracking-wider uppercase shadow-sm active:scale-95 transition-all"
          >
            Sınavı Bitir
          </Button>
        </div>
      </div>

      {/* ── ANA ALAN: Sol Soru Kartı & Sağ 120 Kutucuk Matrisi ── */}
      <div className="flex-1 flex overflow-hidden min-w-0">
        {/* SOL: Soru Alanı */}
        <div className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-6 lg:p-8 custom-scrollbar min-w-0 max-w-4xl mx-auto">
          {/* Soru Başlık & Favori Barı */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                Soru {currentIndex + 1}
              </span>
              <span className="text-xs text-white/40 font-mono">/ {total}</span>
              <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded bg-white/5 text-white/70">
                {question.lesson}
              </span>
            </div>

            <Button
              onClick={handleToggleFav}
              variant="unstyled"
              aria-label={question.is_favorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                question.is_favorite
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/40 shadow-lg shadow-amber-400/10'
                  : 'bg-white/5 text-white/40 border-white/10 hover:text-amber-300 hover:border-amber-400/30'
              } ${favSparkle ? 'animate-[gold-sparkle_0.6s_ease-in-out]' : ''}`}
            >
              <Star size={18} className={question.is_favorite ? 'fill-current' : ''} />
            </Button>
          </div>

          {/* Soru Kökü */}
          <div className="mb-6">
            <p className={`${fontSizes[settings.fontSize]} leading-relaxed font-medium text-white/95 whitespace-pre-line select-text`}>
              {cleanedQuestion}
            </p>
          </div>

          {/* Şıklar: DOĞRU/YANLIŞ ASLA YANMAZ — Seçilen şık MAVİ yanar */}
          <div className="space-y-3 mb-8">
            {optionEntries.map(([key, text]) => {
              const isSelected = currentSelection === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSelectOption(key)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-4 border overflow-hidden relative cursor-pointer active:scale-[0.99] ${
                    isSelected
                      ? 'bg-blue-600/20 border-blue-500 shadow-md shadow-blue-500/20 ring-1 ring-blue-500/60'
                      : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.07] hover:border-white/20'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[13px] shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'bg-white/10 text-white/70'
                  }`}>
                    {key}
                  </div>
                  <span className={`${fontSizes[optionFontKey]} leading-snug flex-1 ${isSelected ? 'text-blue-100 font-medium' : 'text-white/85'}`}>
                    {text}
                  </span>
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Seçimi Temizleme */}
          {currentSelection && (
            <div className="flex justify-end mb-4">
              <Button
                onClick={handleClearOption}
                variant="unstyled"
                size="sm"
                className="text-xs text-white/50 hover:text-white/90 underline decoration-white/30 cursor-pointer"
              >
                Cevabı Temizle (Boş Bırak)
              </Button>
            </div>
          )}

          {/* Alt Gezinme Butonları */}
          <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between gap-3">
            <Button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              variant="secondary"
              size="lg"
              className="flex-1 max-w-[160px]"
            >
              <ArrowLeft size={16} /> Önceki Soru
            </Button>

            <div className="text-center font-mono text-xs text-white/50 hidden sm:block">
              {currentIndex + 1} / {total}
            </div>

            <Button
              onClick={handleNext}
              variant="primary"
              size="lg"
              className="flex-1 max-w-[160px] bg-indigo-600 hover:bg-indigo-500"
            >
              {currentIndex < total - 1 ? (
                <>Sonraki Soru <ArrowRight size={16} /></>
              ) : (
                <>Sınavı Bitir <CheckCircle size={16} /></>
              )}
            </Button>
          </div>
        </div>

        {/* SAĞ: 120 Kutucuk Matrisi (Desktop Sidebar) */}
        <div className="hidden lg:flex w-80 xl:w-96 flex-col border-l border-white/10 bg-black/25 backdrop-blur-md p-4 overflow-y-auto custom-scrollbar shrink-0">
          <MatrixGridContent
            questions={questions}
            currentIndex={currentIndex}
            selectedAnswers={selectedAnswers}
            answeredCount={answeredCount}
            blankCount={blankCount}
            onSelectQuestion={handleGoToQuestion}
          />
        </div>
      </div>

      {/* ── MOBİL MATRIX DRAWER (120 Soru Kutucuğu) ── */}
      <AnimatePresence>
        {matrixDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end"
            onClick={() => setMatrixDrawerOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-sm h-full bg-[#12131a] border-l border-white/15 p-5 flex flex-col overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <ListChecks size={18} className="text-indigo-400" /> Soru Listesi (120)
                </h3>
                <button
                  type="button"
                  onClick={() => setMatrixDrawerOpen(false)}
                  className="p-1 rounded-lg text-white/50 hover:text-white hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <MatrixGridContent
                questions={questions}
                currentIndex={currentIndex}
                selectedAnswers={selectedAnswers}
                answeredCount={answeredCount}
                blankCount={blankCount}
                onSelectQuestion={handleGoToQuestion}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SINAVI BİTİR ONAY MODALI ── */}
      <AnimatePresence>
        {finishModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-[#161722] border border-white/15 rounded-2xl p-6 shadow-2xl relative"
            >
              <h3 className="text-xl font-black text-white mb-2">DUS Simülasyonunu Bitir</h3>
              <p className="text-xs text-white/60 mb-6">
                Sınavı sonlandırdığınızda cevaplarınız değerlendirilecek ve ayrıntılı branş/ünite net analiziniz çıkarılacaktır.
              </p>

              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                <div className="flex flex-col items-center p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <span className="text-2xl font-black font-mono text-blue-300">{answeredCount}</span>
                  <span className="text-[11px] font-bold text-blue-200/80 uppercase">İşaretli (Mavi)</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <span className="text-2xl font-black font-mono text-amber-300">{blankCount}</span>
                  <span className="text-[11px] font-bold text-amber-200/80 uppercase">Boş (Sarı)</span>
                </div>
              </div>

              {blankCount > 0 && (
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-200 text-xs mb-6">
                  <Warning size={18} className="shrink-0 text-amber-400 mt-0.5" />
                  <span>
                    Henüz işaretlemediğiniz <strong>{blankCount} adet boş</strong> soru bulunmaktadır. Yine de bitirmek istiyor musunuz?
                  </span>
                </div>
              )}

              <div className="flex gap-3 justify-end">
                <Button
                  onClick={() => setFinishModalOpen(false)}
                  variant="secondary"
                  size="md"
                  className="flex-1"
                >
                  Sınava Devam Et
                </Button>
                <Button
                  onClick={handleFinalizeExam}
                  variant="primary"
                  size="md"
                  className="flex-1 bg-rose-600 hover:bg-rose-500 font-bold"
                >
                  Evet, Sınavı Bitir
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * 120 Soruluk Navigatör Kutucukları İçeriği
 * KURAL: "tüm 120 sorunun kutucuğu temel 40 klinik 80 kutucuk olacak şekilde yer alır ve
 * kutucukların içinde soru numarası yazar henüz görülmemişler ve boşlar sarı işaretlenmişler mavi yanar."
 */
function MatrixGridContent({
  questions,
  currentIndex,
  selectedAnswers,
  answeredCount,
  blankCount,
  onSelectQuestion,
}: {
  questions: Question[];
  currentIndex: number;
  selectedAnswers: Record<string, string | null>;
  answeredCount: number;
  blankCount: number;
  onSelectQuestion: (index: number) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* Özet Bar */}
      <div className="flex items-center justify-between text-xs font-semibold p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
        <div className="flex items-center gap-1.5 text-blue-300">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block shadow-[0_0_6px_#3b82f6]" />
          <span>{answeredCount} İşaretli</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-300">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shadow-[0_0_6px_#f59e0b]" />
          <span>{blankCount} Boş</span>
        </div>
      </div>

      {/* BÖLÜM 1: TEMEL BİLİMLER (1 - 40) */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <h4 className="text-xs font-black tracking-wider uppercase text-indigo-300">
            Temel Bilimler (1 - 40)
          </h4>
          <span className="text-[10px] font-mono text-white/50">40 Soru</span>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 xl:grid-cols-8 gap-1.5">
          {questions.slice(0, 40).map((q, idx) => {
            const isAnswered = selectedAnswers[q.id] != null;
            const isCurrent = currentIndex === idx;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => onSelectQuestion(idx)}
                className={`h-8 rounded-lg font-mono text-xs font-bold transition-all flex items-center justify-center relative cursor-pointer ${
                  isCurrent
                    ? 'ring-2 ring-white scale-105 z-10 font-black shadow-lg shadow-white/10'
                    : 'hover:scale-105'
                } ${
                  isAnswered
                    ? 'bg-blue-600/30 text-blue-200 border border-blue-500/60 shadow-sm shadow-blue-500/20'
                    : 'bg-amber-400/15 text-amber-300 border border-amber-400/35 hover:bg-amber-400/25'
                }`}
                title={`Soru ${idx + 1} (${q.lesson}) - ${isAnswered ? 'İşaretlendi' : 'Boş'}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* BÖLÜM 2: KLİNİK BİLİMLER (41 - 120) */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <h4 className="text-xs font-black tracking-wider uppercase text-emerald-300">
            Klinik Bilimler (41 - 120)
          </h4>
          <span className="text-[10px] font-mono text-white/50">80 Soru</span>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 xl:grid-cols-8 gap-1.5">
          {questions.slice(40, 120).map((q, localIdx) => {
            const globalIdx = 40 + localIdx;
            const isAnswered = selectedAnswers[q.id] != null;
            const isCurrent = currentIndex === globalIdx;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => onSelectQuestion(globalIdx)}
                className={`h-8 rounded-lg font-mono text-xs font-bold transition-all flex items-center justify-center relative cursor-pointer ${
                  isCurrent
                    ? 'ring-2 ring-white scale-105 z-10 font-black shadow-lg shadow-white/10'
                    : 'hover:scale-105'
                } ${
                  isAnswered
                    ? 'bg-blue-600/30 text-blue-200 border border-blue-500/60 shadow-sm shadow-blue-500/20'
                    : 'bg-amber-400/15 text-amber-300 border border-amber-400/35 hover:bg-amber-400/25'
                }`}
                title={`Soru ${globalIdx + 1} (${q.lesson}) - ${isAnswered ? 'İşaretlendi' : 'Boş'}`}
              >
                {globalIdx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
