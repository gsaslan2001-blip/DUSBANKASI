import { useState, useEffect, useRef, type RefObject } from 'react';
import type { AnswerDetail } from '../types/app';
import type { Question } from '../data';

export type UseExamTimerResult = {
  remainingSeconds: number;
};

/**
 * Countdown timer for simulation mode.
 * When time hits 0, fills unanswered questions as 'blank' and fires onExpire.
 * Mirrors behavior from App.tsx:1213-1235.
 *
 * totalSeconds: initial countdown value. 0 or undefined disables the timer.
 * questions: the exam question list — used to pad answers on expire.
 * answersRef: always-current ref to current answers array.
 * onExpire: called with filled answers and elapsed seconds.
 */
export function useExamTimer(
  totalSeconds: number | undefined,
  questions: Question[],
  answersRef: RefObject<AnswerDetail[]>,
  onExpire: (finalAnswers: AnswerDetail[], usedSeconds: number) => void,
  initialRemainingSeconds?: number
): UseExamTimerResult {
  const [remainingSeconds, setRemainingSeconds] = useState(initialRemainingSeconds ?? totalSeconds ?? 0);
  // Render sırasında Date.now() çağrısı saf değildir (react-hooks/purity); gerçek
  // başlangıç anı timer effect'inde, sayaç fiilen başladığında damgalanır.
  const simStartRef = useRef(0);

  // Keep latest onExpire without re-running the interval effect
  const onExpireRef = useRef(onExpire);
  useEffect(() => { onExpireRef.current = onExpire; }, [onExpire]);

  const questionsRef = useRef(questions);
  useEffect(() => { questionsRef.current = questions; }, [questions]);

  useEffect(() => {
    if (!totalSeconds || totalSeconds <= 0) return;
    if (simStartRef.current === 0) simStartRef.current = Date.now();
    const tick = setInterval(() => {
      setRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(tick);
          const qs = questionsRef.current;
          const finalAnswers = [...(answersRef.current ?? [])];
          for (let i = finalAnswers.length; i < qs.length; i++) {
            finalAnswers.push({ question: qs[i], state: 'blank', selectedOptionKey: null, timeSpent: 0 });
          }
          const used = Math.round((Date.now() - simStartRef.current) / 1000);
          onExpireRef.current(finalAnswers, used);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [totalSeconds, answersRef]);

  return { remainingSeconds };
}
