import { memo, useState } from 'react';
import { Pencil, Flag, Trash2, FileText } from 'lucide-react';
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
          <div className={`px-2 h-5 rounded-md border flex items-center gap-1 font-sans shrink-0 ${
            remainingSeconds <= 600
              ? 'bg-red-500/10 border-red-500/20 text-red-400 animate-pulse'
              : 'bg-indigo-500/10 border-indigo-500/15 text-indigo-400'
          }`}>
            <span className="text-[11px] font-bold tracking-widest uppercase font-mono">
              ⏱ {Math.floor(remainingSeconds / 60)}:{String(remainingSeconds % 60).padStart(2, '0')}
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
            FSRS-5 Zorluk Seviyesi: Çözme geçmişinize göre hesaplanır.
          </div>
        </div>

        {/* Ders badge (exam mode) */}
        {lessonLabel && (
          <>
            <span className="text-white/10 text-[11px] shrink-0">·</span>
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
      <div className="flex gap-1 items-center shrink-0 relative">
        {mode === 'exam' && (
          <button
            onClick={() => onFinishEarly(answers)}
            className="btn btn-sm bg-red-500/10 text-red-400 border border-red-500/15 hover:bg-red-500/20 h-6 px-2 text-[10px]"
          >
            BİTİR
          </button>
        )}
        
        {/* Tek overflow menü butonu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(v => !v)}
            className={`p-1.5 hover:${theme.inputBg} rounded-md opacity-40 hover:opacity-100 transition-all ${theme.text}`}
          >
            ⋯
          </button>
          
          {menuOpen && (
            <>
              {/* Backdrop */}
              <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
              {/* Menü */}
              <div className={`absolute right-0 top-full mt-1 z-50 ${theme.cardSolid} border ${theme.border} rounded-xl shadow-xl shadow-black/10 py-1 min-w-[140px]`}>
                {onExportPDF && mode === 'exam' && (
                  <button
                    onClick={() => { onExportPDF(questions, 'Deneme Sınavı'); setMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-[12px] hover:${theme.inputBg} flex items-center gap-2 ${theme.subtext}`}
                  >
                    <FileText size={12} /> PDF İndir
                  </button>
                )}
                <button
                  onClick={() => { onEditQuestion(question); setMenuOpen(false); }}
                  className={`w-full text-left px-3 py-2 text-[12px] hover:${theme.inputBg} flex items-center gap-2 ${theme.subtext}`}
                >
                  <Pencil size={12} /> Düzenle
                </button>
                <button
                  onClick={() => { onReportQuestion(question); setMenuOpen(false); }}
                  className={`w-full text-left px-3 py-2 text-[12px] hover:${theme.inputBg} flex items-center gap-2 ${theme.subtext}`}
                >
                  <Flag size={12} /> Bildir
                </button>
                <div className={`my-1 border-t ${theme.border}`} />
                <button
                  onClick={() => { onDeleteQuestion(question.id); setMenuOpen(false); }}
                  className="w-full text-left px-3 py-2 text-[12px] hover:bg-red-500/10 flex items-center gap-2 text-red-500"
                >
                  <Trash2 size={12} /> Sil
                </button>
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  );
});
