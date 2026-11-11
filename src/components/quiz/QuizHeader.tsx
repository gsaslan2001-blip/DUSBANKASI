import { memo, useState } from 'react';
import { PencilSimple, Flag, Trash, FileText, Warning, Timer } from '@phosphor-icons/react';
import { Button } from '../ui/Button';
import type { Question } from '../../data';
import type { AnswerDetail } from '../../types/app';
import type { Theme } from '../../theme';

export type QuizHeaderProps = {
  currentIndex: number;
  total: number;
  isAnswered: boolean;
  mode?: 'quiz' | 'exam';
  unit: string;
  timedSeconds?: number;
  remainingSeconds: number;
  difficulty: string | null;
  question: Question;
  questions: Question[];
  answers: AnswerDetail[];
  questionLesson?: string;
  questionUnit?: string;
  onFinishEarly: (answers: AnswerDetail[]) => void;
  finishEarlyLabel?: string;
  onExportPDF?: (qs: Question[], label: string) => void;
  onEditQuestion: (q: Question) => void;
  onReportQuestion: (q: Question) => void;
  onDeleteQuestion: (id: string) => void;
  theme: Theme;
};

/**
 * Single-row quiz header: meta info LEFT, action buttons RIGHT — same line.
 */
export const QuizHeader = memo(function QuizHeader({
  currentIndex, total, isAnswered, mode, unit,
  timedSeconds, remainingSeconds, difficulty, question, questions, answers,
  questionLesson, questionUnit,
  onFinishEarly, onExportPDF, onEditQuestion, onReportQuestion, onDeleteQuestion,
  finishEarlyLabel = 'BİTİR',
  theme,
}: QuizHeaderProps) {
  const lessonLabel = mode === 'exam' ? questionLesson : undefined;
  const unitLabel   = mode === 'exam' ? questionUnit   : unit;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mb-2 shrink-0 gap-2">

      {/* ── LEFT: progress + difficulty + lesson/unit ────────── */}
      <div className="flex items-center gap-2 min-w-0 flex-wrap">

        {/* Simülasyon countdown — only when timed */}
        {timedSeconds && timedSeconds > 0 && (
          <div
            role={remainingSeconds <= 60 ? 'timer' : undefined}
            aria-live={remainingSeconds <= 60 ? 'assertive' : undefined}
            className={`px-2 h-5 rounded-md border flex items-center gap-1 font-sans shrink-0 ${
              remainingSeconds <= 10
                ? 'bg-red-500/20 border-red-500/40 text-red-300 animate-pulse scale-105'
                : remainingSeconds <= 60
                ? 'bg-red-500/10 border-red-500/20 text-red-400 animate-pulse'
                : 'bg-indigo-500/10 border-indigo-500/15 text-indigo-400'
            }`}
          >
            {remainingSeconds <= 60 ? <Warning size={11} weight="fill" /> : <Timer size={11} weight="bold" />}
            <span className="text-[11px] font-bold tracking-widest uppercase font-mono tabular-nums">
              {Math.floor(remainingSeconds / 60)}:{String(remainingSeconds % 60).padStart(2, '0')}
            </span>
          </div>
        )}

        {/* Soru No */}
        <div className={`px-2 h-5 ${theme.inputBg} rounded-md border ${theme.border} flex items-center gap-1.5 shrink-0`}>
          <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isAnswered ? 'bg-emerald-400' : 'bg-indigo-400 animate-pulse'}`} />
          <span className={`text-[11px] font-bold tracking-widest ${theme.subtext} uppercase font-sans`}>{currentIndex + 1} / {total}</span>
        </div>

        {/* Zorluk / YENİ */}
        <div className={`group relative px-2 h-5 flex items-center rounded-md text-[11px] font-bold uppercase tracking-wider shrink-0 ${
          difficulty === 'easy'   ? 'text-emerald-500 bg-emerald-500/10'
          : difficulty === 'medium' ? 'text-amber-500 bg-amber-500/10'
          : difficulty === 'hard'   ? 'text-red-500 bg-red-500/10'
          : 'text-violet-500 bg-violet-500/10'
        }`}>
          {difficulty || 'YENİ'}
          <div className={`absolute top-full left-0 mt-1.5 w-44 p-2 ${theme.cardSolid} border ${theme.border} rounded-lg text-[11px] font-medium leading-normal normal-case opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[100] shadow-xl ${theme.text}`}>
            Zorluk Seviyesi: Çözme geçmişinizdeki doğruluk oranına göre hesaplanır.
          </div>
        </div>

        {/* Ders badge (exam mode) */}
        {lessonLabel && (
          <>
            <span className="text-[color:var(--color-border-strong)] text-[11px] shrink-0">·</span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-1.5 h-5 flex items-center rounded-md shrink-0">
              {lessonLabel}
            </span>
          </>
        )}

        {/* Ünite adı */}
        {unitLabel && (
          <>
            {lessonLabel && <span className={`opacity-30 ${theme.text} text-[11px] shrink-0`}>›</span>}
            <span className={`text-[11px] font-medium ${theme.subtext} truncate max-w-[280px] hidden sm:block`}>{unitLabel}</span>
          </>
        )}
      </div>

      {/* ── RIGHT: action buttons ────────────────────────────── */}
      <div className="flex gap-1.5 items-center shrink-0 relative">
        <Button
          onClick={() => onFinishEarly(answers)}
          variant="unstyled"
          size="sm"
          className="bg-red-500/10 text-red-400 border border-red-500/15 hover:bg-red-500/20 h-6 px-2 text-[10px]"
        >
          {finishEarlyLabel}
        </Button>

        {/* Doğrudan dışarı taşınan SİL butonu */}
        <Button
          onClick={() => onDeleteQuestion(question.id)}
          variant="unstyled"
          aria-label="Soruyu sil"
          title="Soruyu Sil"
          className="flex items-center gap-1 h-6 px-2 rounded-md bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-300 transition-all text-[11px] font-bold tracking-wider uppercase font-sans cursor-pointer active:scale-95"
        >
          <Trash size={12} weight="bold" />
          <span>Sil</span>
        </Button>

        {/* Tek overflow menü butonu */}
        <div className="relative">
          <Button
            onClick={() => setMenuOpen(v => !v)}
            variant="unstyled"
            aria-label="Soru işlemleri menüsü"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            className={`p-1.5 hover:${theme.inputBg} rounded-md opacity-40 hover:opacity-100 transition-all ${theme.text}`}
          >
            ⋯
          </Button>

          {menuOpen && (
            <>
              {/* Backdrop */}
              <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
              {/* Menü */}
              <div className={`absolute right-0 top-full mt-1 z-50 ${theme.cardSolid} border ${theme.border} rounded-xl shadow-xl shadow-black/10 py-1 min-w-[140px]`} role="menu">
                {onExportPDF && mode === 'exam' && (
                  <Button
                    onClick={() => { onExportPDF(questions, 'Deneme Sınavı'); setMenuOpen(false); }}
                    variant="unstyled"
                    role="menuitem"
                    className={`w-full justify-start text-left px-3 py-2 text-[12px] hover:${theme.inputBg} flex items-center gap-2 ${theme.subtext}`}
                  >
                    <FileText size={12} /> PDF İndir
                  </Button>
                )}
                <Button
                  onClick={() => { onEditQuestion(question); setMenuOpen(false); }}
                  variant="unstyled"
                  role="menuitem"
                  className={`w-full justify-start text-left px-3 py-2 text-[12px] hover:${theme.inputBg} flex items-center gap-2 ${theme.subtext}`}
                >
                  <PencilSimple size={12} /> Düzenle
                </Button>
                <Button
                  onClick={() => { onReportQuestion(question); setMenuOpen(false); }}
                  variant="unstyled"
                  role="menuitem"
                  className={`w-full justify-start text-left px-3 py-2 text-[12px] hover:${theme.inputBg} flex items-center gap-2 ${theme.subtext}`}
                >
                  <Flag size={12} /> Bildir
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  );
});
