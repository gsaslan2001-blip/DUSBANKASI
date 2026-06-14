import { forwardRef, memo, useMemo, useCallback, useState } from 'react';
import { Star } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import type { Question } from '../../data';
import type { UserSettings } from '../../types/app';
import type { Theme } from '../../theme';
import { fontSizes, semanticColors } from '../../theme';

export type QuestionCardProps = {
  question: Question;
  selectedOption: string | null;
  isAnswered: boolean;
  onSelect: (key: string) => void;
  onToggleFavorite: (id: string) => void;
  theme: Theme;
  settings: UserSettings;
};

const OPTION_LINE_RE = /^[A-E]\s*[)\-.]/;

export const QuestionCard = memo(forwardRef<HTMLDivElement, QuestionCardProps>(function QuestionCard(
  { question, selectedOption, isAnswered, onSelect, onToggleFavorite, theme, settings },
  ref,
) {
  const optionFontKey = settings.fontSize === 'large' ? 'large' : 'normal';
  const [favSparkle, setFavSparkle] = useState(false);

  const cleanedQuestion = useMemo(() => {
    const cleanText = question.question.split('\n').filter(l => !OPTION_LINE_RE.test(l.trim())).join('\n');
    const romanNumeralRe = /(?:\s|^)(I{1,3}|IV|V|VI{1,3}|IX|X)\.\s/g;
    return cleanText.replace(romanNumeralRe, (_, p1) => `\n\n${p1}. `).trim();
  }, [question.question]);

  const optionEntries = useMemo(
    () => Object.entries(question.options) as [string, string][],
    [question.options],
  );

  const handleFavoriteClick = useCallback(() => {
    setFavSparkle(true);
    const willBeFavorite = !question.is_favorite;
    onToggleFavorite(question.id);
    if (willBeFavorite) toast.success('Favorilere eklendi');
    else toast('Favorilerden çıkarıldı');
    setTimeout(() => setFavSparkle(false), 600);
  }, [question.id, question.is_favorite, onToggleFavorite]);

  const handleOptionSelect = useCallback((key: string) => {
    if (isAnswered) return;
    if (key === question.correctAnswer && !window.matchMedia('(pointer: coarse)').matches) {
      confetti({
        particleCount: 30,
        spread: 55,
        origin: { y: 0.7 },
        colors: ['#34d399', '#6f72f2', '#fbbf24'],
        ticks: 50,
        gravity: 1.2,
      });
    }
    onSelect(key);
  }, [isAnswered, question.correctAnswer, onSelect]);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="double-bezel flex-1 flex flex-col w-full max-h-full"
      style={{ perspective: 1200 }}
    >
      <div className={`double-bezel-inner flex-1 flex flex-col overflow-y-auto ${theme.card} p-5 sm:p-6 custom-scrollbar overflow-x-hidden`}>
        <div className="flex items-start justify-between gap-4 mb-6">
          <p className={`${fontSizes[settings.fontSize]} leading-relaxed font-medium transition-[font-size,line-height] duration-300 whitespace-pre-line`}>
            {cleanedQuestion}
          </p>
          <button
            onClick={handleFavoriteClick}
            className={`p-3 rounded-xl transition-all duration-300 shrink-0 ${
              question.is_favorite
                ? `${semanticColors.gold.bg} ${semanticColors.gold.text} scale-105 shadow-lg shadow-amber-400/10`
                : `${theme.inputBg} ${semanticColors.gold.text} opacity-50 hover:opacity-100 hover:${semanticColors.gold.bg}`
            } ${favSparkle ? 'animate-[gold-sparkle_0.6s_ease-in-out]' : ''}`}
          >
            <Star size={20} className={question.is_favorite ? 'fill-current' : ''} />
          </button>
        </div>

        <div className="space-y-3">
          {optionEntries.map(([key, text]) => {
            const sel = selectedOption === key;
            const ok = question.correctAnswer === key;
            let baseCl = `w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 border overflow-hidden relative `;
            if (!isAnswered) baseCl += `border-transparent ${theme.inputBg} hover:bg-[color:var(--color-surface-3)] hover:border-[color:var(--color-border-subtle)] active:scale-[0.98]`;
            else if (ok) baseCl += `${semanticColors.correct.border} ${semanticColors.correct.bg}`;
            else if (sel) baseCl += `${semanticColors.incorrect.border} ${semanticColors.incorrect.bg}`;
            else baseCl += `border-transparent ${settings.theme === 'light' ? 'opacity-30' : 'opacity-20'}`;

            const isThisCorrect = ok && isAnswered;
            const isThisWrong = sel && !ok && isAnswered;

            return (
              <motion.button
                key={key}
                disabled={isAnswered}
                onClick={() => handleOptionSelect(key)}
                className={baseCl}
                whileHover={!isAnswered ? { scale: 0.99, x: 2 } : {}}
                whileTap={!isAnswered ? { scale: 0.97 } : {}}
                animate={
                  isThisCorrect || isThisWrong
                    ? { scale: [1, 1.015, 1] }
                    : { scale: 1 }
                }
                transition={
                  isThisCorrect || isThisWrong
                    ? { duration: 0.18, ease: [0.16, 1, 0.3, 1] }
                    : { duration: 0.15 }
                }
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[13px] shrink-0 transition-colors duration-300 ${
                  !isAnswered ? 'bg-[color:var(--color-surface-4)] text-[color:var(--color-text-secondary)]'
                  : ok ? `${semanticColors.correct.solid} text-[#000000]`
                  : sel ? `${semanticColors.incorrect.solid} text-[#000000]`
                  : 'bg-[color:var(--color-surface-3)] text-[color:var(--color-text-tertiary)]'
                }`}>{key}</div>
                <span className={`${fontSizes[optionFontKey]} opacity-90 leading-snug`}>{text}</span>

                {/* Doğru cevap — yeşil glow pulse overlay */}
                {isThisCorrect && (
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.15, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    style={{ background: 'radial-gradient(ellipse at center, #34d399 0%, transparent 70%)' }}
                  />
                )}

                {/* Yanlış cevap — shake + kırmızı glow flash overlay */}
                {isThisWrong && (
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.12, 0] }}
                    transition={{ duration: 0.6, repeat: 0 }}
                    style={{ background: '#f87171' }}
                  />
                )}
                {isThisWrong && (
                  <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-red-500/30 anim-shake" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}));
