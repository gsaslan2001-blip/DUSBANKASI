import { memo } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '../ui/Button';

export type QuizNavigationProps = {
  currentIndex: number;
  total: number;
  isAnswered: boolean;
  onPrev: () => void;
  onSkip: () => void;
  onNext: () => void;
};

/** Klavye kısayolu ipucu — premium keycap rozeti (yalnızca sm+ ekran). */
function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="hidden sm:inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 ml-0.5 rounded-[5px] border border-white/15 bg-white/[0.06] text-[9px] font-bold leading-none tracking-wide opacity-70 shadow-[0_1px_0_rgba(0,0,0,0.3)]">
      {children}
    </kbd>
  );
}

/**
 * ÖNCEKİ / BOŞ GEÇ / SONRAKİ — Button-in-Button trailing icon pattern.
 * Klavye kısayolları (←, S, →/Space) keycap rozetleriyle görünür kılındı.
 */
export const QuizNavigation = memo(function QuizNavigation({ currentIndex, total, isAnswered, onPrev, onSkip, onNext }: QuizNavigationProps) {
  return (
    <div className="p-4 sm:p-5 pt-0 flex flex-col sm:flex-row gap-2 shrink-0 pb-safe sticky bottom-0 z-20">
      <Button onClick={onPrev} disabled={currentIndex === 0} variant="secondary" size="lg" className="flex-1 transition-opacity">
        <span className="inline-flex items-center gap-1.5">ÖNCEKİ<Kbd>←</Kbd></span>
      </Button>
      <Button onClick={onSkip} disabled={isAnswered} variant="unstyled" size="lg" className="flex-1 bg-red-500/12 text-red-400 border border-red-500/15 hover:bg-red-500/20">
        <span className="inline-flex items-center gap-1.5">BOŞ GEÇ<Kbd>S</Kbd></span>
      </Button>
      <Button onClick={onNext} disabled={!isAnswered} variant="primary" size="lg"
        className="group flex-[2] shadow-lg shadow-indigo-500/15 active:scale-[0.98] transition-transform duration-150"
      >
        <span className="flex items-center gap-2">
          {currentIndex < total - 1 ? 'SONRAKİ' : 'BİTİR'}
          <Kbd>Space</Kbd>
          <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
            <ArrowRight size={14} weight="bold" />
          </span>
        </span>
      </Button>
    </div>
  );
});
