import { memo } from 'react';
import { ArrowRight } from '@phosphor-icons/react';

export type QuizNavigationProps = {
  currentIndex: number;
  total: number;
  isAnswered: boolean;
  onPrev: () => void;
  onSkip: () => void;
  onNext: () => void;
};

/**
 * ÖNCEKİ / BOŞ GEÇ / SONRAKİ — Button-in-Button trailing icon pattern.
 */
export const QuizNavigation = memo(function QuizNavigation({ currentIndex, total, isAnswered, onPrev, onSkip, onNext }: QuizNavigationProps) {
  return (
    <div className="p-4 sm:p-5 pt-0 flex flex-col sm:flex-row gap-2 shrink-0 pb-safe sticky bottom-0 z-20">
      <button onClick={onPrev} disabled={currentIndex === 0} className="btn btn-secondary btn-lg flex-1 disabled:opacity-30 disabled:pointer-events-none transition-opacity">ÖNCEKİ</button>
      <button onClick={onSkip} disabled={isAnswered} className="btn btn-lg flex-1 bg-red-500/12 text-red-400 border border-red-500/15 hover:bg-red-500/20 disabled:opacity-30 disabled:pointer-events-none">BOŞ GEÇ</button>
      <button onClick={onNext} disabled={!isAnswered}
        className="group btn btn-primary btn-lg flex-[2] disabled:opacity-30 disabled:pointer-events-none shadow-lg shadow-indigo-500/15 active:scale-[0.98] transition-transform duration-150"
      >
        <span className="flex items-center gap-2">
          {currentIndex < total - 1 ? 'SONRAKİ' : 'BİTİR'}
          <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
            <ArrowRight size={14} weight="bold" />
          </span>
        </span>
      </button>
    </div>
  );
});
