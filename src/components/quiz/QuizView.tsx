import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Question } from '../../data';
import type { AnswerDetail, ActiveSessionInfo, UserSettings } from '../../types/app';
import type { Theme } from '../../theme';
import { saveQuestionStat, getDifficultyLabel } from '../../lib/stats';
import { useAIAssistant } from '../../hooks/useAIAssistant';
import { useExamTimer } from '../../hooks/useExamTimer';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';
import { appendAIExplanation } from '../../lib/questionExplanation';
import { QuizHeader } from './QuizHeader';
import { QuestionCard } from './QuestionCard';
import { ExplanationPanel } from './ExplanationPanel';
import { QuizNavigation } from './QuizNavigation';
import { KeyboardShortcutsHelp } from './KeyboardShortcutsHelp';
import { AIAssistantPanel } from '../ai/AIAssistantPanel';
import { toast } from 'sonner';

function answerForQuestion(answers: AnswerDetail[], questionId: string | undefined): AnswerDetail | undefined {
  if (!questionId) return undefined;
  return answers.find((answer) => answer.question.id === questionId);
}

export type QuizViewProps = {
  mode?: 'quiz' | 'exam';
  unit: string;
  questions: Question[];
  initialSession?: ActiveSessionInfo | null;
  onComplete: (answers: AnswerDetail[]) => void;
  onDeleteQuestion: (id: string) => void;
  onFinishEarly: (answers: AnswerDetail[]) => void;
  onToggleFavorite: (id: string) => void;
  onEditQuestion: (q: Question) => void;
  onReportQuestion: (q: Question) => void;
  onSaveAIExplanation: (q: Question) => Promise<void>;
  onSaveSession?: (session: ActiveSessionInfo) => void;
  onExportPDF?: (qs: Question[], label: string) => void;
  timedSeconds?: number;
  onSimulationComplete?: (details: AnswerDetail[], usedSeconds: number) => void;
  theme: Theme;
  settings: UserSettings;
  dailyExamId?: string;
  disableStats?: boolean;
};

/**
 * Quiz/exam runner orchestrator. Composes hooks + subcomponents that used to live inline
 * inside App.tsx (lines ~1120-1451). Behavior preserved 1:1.
 */
export function QuizView({
  mode, unit, questions, initialSession,
  onComplete, onDeleteQuestion, onFinishEarly, onToggleFavorite,
  onEditQuestion, onReportQuestion, onSaveAIExplanation, onSaveSession, onExportPDF,
  timedSeconds, onSimulationComplete, theme, settings, dailyExamId, disableStats,
}: QuizViewProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(
    initialSession ? Math.min(initialSession.currentIndex, Math.max(questions.length - 1, 0)) : 0
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(
    answerForQuestion(
      initialSession?.answers ?? [],
      questions[initialSession?.currentIndex ?? 0]?.id,
    )?.selectedOptionKey ?? null
  );
  const [answers, setAnswers] = useState<AnswerDetail[]>(initialSession ? initialSession.answers : []);
  const [helpOpen, setHelpOpen] = useState(false);
  const [aiExplanationState, setAIExplanationState] = useState<'idle' | 'adding' | 'added'>('idle');

  // AUDIT-01: answers'ın güncel kopyasını timer closure'dan ulaşmak için ref
  const answersRef = useRef<AnswerDetail[]>(initialSession ? initialSession.answers : []);
  // FIX: soru başına süre ölçümü — quiz mount'ta değil, her soru geçişinde reset
  const questionStartRef = useRef<number>(Date.now());
  const directionRef = useRef<'forward' | 'backward'>('forward');
  const quizScrollRef = useRef<HTMLDivElement>(null);
  const explanationScrollRef = useRef<HTMLDivElement>(null);

  const question = questions[currentIndex];
  const questionId = question?.id;
  const currentAnswer = answerForQuestion(answers, question?.id);

  // AI assistant hook
  const ai = useAIAssistant(question);

  // Countdown timer (simulation mode only)
  const handleTimerExpire = useCallback((finalAnswers: AnswerDetail[], usedSeconds: number) => {
    if (onSimulationComplete) onSimulationComplete(finalAnswers, usedSeconds);
    else onComplete(finalAnswers);
  }, [onSimulationComplete, onComplete]);

  const { remainingSeconds } = useExamTimer(timedSeconds, questions, answersRef, handleTimerExpire, initialSession?.remainingSeconds);

  const isHistorized = currentAnswer !== undefined;
  const isAnswered = selectedOption !== null || isHistorized;
  const isCorrect = question
    ? (isHistorized ? currentAnswer.state === 'correct' : selectedOption === question.correctAnswer)
    : false;
  const difficulty = question ? getDifficultyLabel(question.id) : null;

  const handleNext = useCallback((isSkip = false) => {
    if (!question) return;
    const timeSpent = Math.round((Date.now() - questionStartRef.current) / 1000);
    questionStartRef.current = Date.now();
    const newAnswers = [...answers];
    if (!currentAnswer) {
      const state: AnswerDetail['state'] = isSkip
        ? 'blank'
        : (selectedOption === question.correctAnswer ? 'correct' : 'incorrect');
      newAnswers.push({
        question,
        state,
        selectedOptionKey: isSkip ? null : selectedOption,
        timeSpent,
      });
      if (!disableStats && !isSkip) saveQuestionStat(question.id, state === 'correct', selectedOption, question.lesson, timeSpent);
    }
    answersRef.current = newAnswers;
    setAnswers(newAnswers);
    if (onSaveSession) {
      onSaveSession({
        questions,
        answers: newAnswers,
        currentIndex: currentIndex + 1,
        mode: mode ?? 'quiz',
        dailyExamId,
        remainingSeconds: timedSeconds ? remainingSeconds : undefined,
        simTotalSeconds: timedSeconds ?? undefined,
      });
    }
    if (currentIndex < questions.length - 1) {
      directionRef.current = 'forward';
      const ni = currentIndex + 1;
      setCurrentIndex(ni);
      setSelectedOption(answerForQuestion(newAnswers, questions[ni]?.id)?.selectedOptionKey ?? null);
      requestAnimationFrame(() => {
        if (quizScrollRef.current) quizScrollRef.current.scrollTop = 0;
        if (explanationScrollRef.current) explanationScrollRef.current.scrollTop = 0;
        window.scrollTo(0, 0);
      });
    } else {
      onComplete(newAnswers);
    }
  }, [selectedOption, question, currentIndex, currentAnswer, answers, questions, mode, onSaveSession, onComplete, dailyExamId, disableStats]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      directionRef.current = 'backward';
      questionStartRef.current = Date.now();
      const pi = currentIndex - 1;
      setCurrentIndex(pi);
      setSelectedOption(answerForQuestion(answers, questions[pi]?.id)?.selectedOptionKey ?? null);
      requestAnimationFrame(() => {
        if (quizScrollRef.current) quizScrollRef.current.scrollTop = 0;
        if (explanationScrollRef.current) explanationScrollRef.current.scrollTop = 0;
        window.scrollTo(0, 0);
      });
    }
  }, [currentIndex, answers, questions]);

  const handleSkip = useCallback(() => handleNext(true), [handleNext]);
  const handleNextClick = useCallback(() => handleNext(false), [handleNext]);
  const handleFinishEarlyAdapter = useCallback((a: unknown[]) => onFinishEarly(a as AnswerDetail[]), [onFinishEarly]);
  const setShowAIPanel = ai.setShowPanel;
  const handleAIPanelClose = useCallback(() => setShowAIPanel(false), [setShowAIPanel]);
  const handleFavoriteShortcut = useCallback(() => {
    if (question) onToggleFavorite(question.id);
  }, [question, onToggleFavorite]);
  const handleToggleHelp = useCallback(() => setHelpOpen(v => !v), []);
  const handleCloseHelp = useCallback(() => setHelpOpen(false), []);
  const handleAddAIToExplanation = useCallback(async () => {
    if (!question || !ai.aiAnswer || ai.aiLoading || aiExplanationState !== 'idle') return;

    const mergedExplanation = appendAIExplanation(question.explanation, ai.aiAnswer);
    if (mergedExplanation === question.explanation.trim()) {
      setAIExplanationState('added');
      return;
    }

    setAIExplanationState('adding');
    try {
      await onSaveAIExplanation({ ...question, explanation: mergedExplanation });
      setAIExplanationState('added');
      toast.success('AI yanıtı açıklamaya eklendi');
    } catch (error) {
      setAIExplanationState('idle');
      const message = error instanceof Error ? error.message : String(error);
      toast.error(`Açıklama kaydedilemedi: ${message}`);
    }
  }, [question, ai.aiAnswer, ai.aiLoading, aiExplanationState, onSaveAIExplanation]);

  useKeyboardShortcuts({
    onNext: handleNext,
    onPrev: handlePrevious,
    onSkip: handleSkip,
    setSelected: setSelectedOption,
    isAnswered,
    isHistorized,
    onToggleFavorite: handleFavoriteShortcut,
    onToggleHelp: handleToggleHelp,
    // Yardım overlay'i açıkken alttaki soruya 1-5/A-E/←→/S sızmasın —
    // overlay kendi Escape dinleyicisiyle kapanır.
    enabled: !helpOpen,
  });

  // Sync answersRef whenever answers state changes (e.g., from initialSession)
  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  // Seçim ve cevap geçmişi soru kimliğine aittir, liste indexine değil.
  // Bir soru silindiğinde aynı indexe kayan sonraki soruya eski seçim taşınmasın.
  useEffect(() => {
    setSelectedOption(answerForQuestion(answers, questionId)?.selectedOptionKey ?? null);
    questionStartRef.current = Date.now();
  }, [questionId, answers]);

  useEffect(() => {
    setAIExplanationState('idle');
  }, [questionId]);

  // Silinen soruların geçmiş cevaplarını da oturumdan düşür. Aksi halde
  // currentIndex ile answers dizisi yeniden hizalandığında başka sorular
  // historize edilmiş gibi görünebilir.
  useEffect(() => {
    const validIds = new Set(questions.map((item) => item.id));
    setAnswers((previous) => {
      const next = previous.filter((answer) => validIds.has(answer.question.id));
      if (next.length === previous.length) return previous;
      answersRef.current = next;
      return next;
    });
  }, [questions]);

  // Soru silindiğinde veya liste değiştiğinde index ve seçimi senkronize et
  useEffect(() => {
    if (questions.length > 0 && currentIndex >= questions.length) {
      const nextIdx = Math.max(0, questions.length - 1);
      setCurrentIndex(nextIdx);
      setSelectedOption(answerForQuestion(answers, questions[nextIdx]?.id)?.selectedOptionKey ?? null);
    }
  }, [questions, currentIndex, answers]);

  if (!question) return (
    <div className="flex-1 flex items-center justify-center p-10">
      <div className="text-center">
        <p className="text-2xl font-bold mb-2">Tüm sorular tamamlandı</p>
        <p className="text-[color:var(--color-text-secondary)] text-sm">Sonuçlar hesaplanıyor...</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full anim-fade-in overflow-hidden relative font-sans">
      <QuizHeader
        currentIndex={currentIndex}
        total={questions.length}
        isAnswered={isAnswered}
        mode={mode}
        unit={unit}
        timedSeconds={timedSeconds}
        remainingSeconds={remainingSeconds}
        difficulty={difficulty}
        question={question}
        questions={questions}
        answers={answers}
        questionLesson={question.lesson}
        questionUnit={question.unit}
        onFinishEarly={handleFinishEarlyAdapter}
        onExportPDF={onExportPDF}
        onEditQuestion={onEditQuestion}
        onReportQuestion={onReportQuestion}
        onDeleteQuestion={onDeleteQuestion}
        theme={theme}
      />

      <KeyboardShortcutsHelp open={helpOpen} onClose={handleCloseHelp} theme={theme} />

      <div className="flex-1 flex flex-col gap-4 overflow-hidden relative">
        {/* -- AI TUTOR PANEL (Glassmorphism) -- */}
        <AIAssistantPanel
          visible={ai.showPanel}
          loading={ai.aiLoading}
          error={ai.aiError}
          answer={ai.aiAnswer}
          onClose={handleAIPanelClose}
          onRetry={ai.retryAI}
          onAddToExplanation={handleAddAIToExplanation}
          addingToExplanation={aiExplanationState === 'adding'}
          addedToExplanation={aiExplanationState === 'added'}
          theme={theme}
          settings={settings}
        />

        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: directionRef.current === 'forward' ? 16 : -16 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="flex-1 flex flex-col lg:flex-row gap-3 min-w-0"
            style={{ display: 'flex' }}
          >
            <div className="flex-1 flex flex-col min-w-0">
              <QuestionCard
                ref={quizScrollRef}
                question={question}
                selectedOption={selectedOption}
                isAnswered={isAnswered}
                onSelect={setSelectedOption}
                onToggleFavorite={onToggleFavorite}
                theme={theme}
                settings={settings}
              />
            </div>

            {/* BUG-002: pointer-events-none yalnızca açıklama içeriğine uygulanır — nav butonları her zaman tıklanabilir */}
            <div className={`flex-1 flex flex-col ${theme.card} rounded-2xl overflow-hidden transition-all duration-500 ${isAnswered ? theme.shadow : ''}`}>
              <div
                className="flex-1 flex flex-col overflow-hidden"
                style={{
                  opacity: isAnswered ? 1 : 0,
                  transform: isAnswered ? 'translateY(0)' : 'translateY(12px)',
                  pointerEvents: isAnswered ? 'auto' : 'none',
                  transitionProperty: 'opacity, transform',
                  transitionDuration: isAnswered ? '200ms' : '140ms',
                  transitionTimingFunction: isAnswered ? 'cubic-bezier(0.16, 1, 0.3, 1)' : 'ease-in',
                }}
              >
                <ExplanationPanel
                  ref={explanationScrollRef}
                  question={question}
                  isAnswered={isAnswered}
                  isCorrect={isCorrect}
                  aiLoading={ai.aiLoading}
                  aiAnswer={ai.aiAnswer}
                  onExplainAI={ai.requestAI}
                />
              </div>
              {/* Nav butonları pointer-events-none dışında — ÖNCEKİ her zaman çalışır (BUG-002) */}
              <QuizNavigation
                currentIndex={currentIndex}
                total={questions.length}
                isAnswered={isAnswered}
                onPrev={handlePrevious}
                onSkip={handleSkip}
                onNext={handleNextClick}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
