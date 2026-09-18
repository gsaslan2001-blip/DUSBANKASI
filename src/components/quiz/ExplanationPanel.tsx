import { forwardRef, memo, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Sparkle, CircleNotch, X } from '@phosphor-icons/react';
import type { Question } from '../../data';
import { semanticColors } from '../../theme';
import { staggerParent, staggerChild } from '../../lib/motion';
import { Button } from '../ui/Button';
import DOMPurify, { type Config as DOMPurifyConfig } from 'dompurify';
import { renderMarkdown } from '../../lib/markdown';

const EXPLANATION_PURIFY_CONFIG: DOMPurifyConfig = {
  ALLOWED_TAGS: ['p', 'strong', 'em', 'ul', 'ol', 'li', 'code', 'pre', 'h1', 'h2', 'h3', 'br', 'span', 'blockquote', 'div'],
  ALLOWED_ATTR: ['class'],
};

export type ExplanationPanelProps = {
  question: Question;
  isAnswered: boolean;
  isCorrect: boolean;
  aiLoading: boolean;
  aiAnswer: string | null;
  onExplainAI: () => void;
};

/**
 * Doğru/yanlış rozeti + açıklama + AI çöz butonu + (varsa) soru görseli.
 * Görsel: hover'da %30 büyür (kırpılmaz), tıklayınca sinematik popup.
 */
export const ExplanationPanel = memo(forwardRef<HTMLDivElement, ExplanationPanelProps>(function ExplanationPanel(
  { question, isAnswered, isCorrect, aiLoading, aiAnswer, onExplainAI },
  ref,
) {
  const [zoomOpen, setZoomOpen] = useState(false);
  const explanationHtml = useMemo(
    () => String(DOMPurify.sanitize(renderMarkdown(question.explanation ?? ''), EXPLANATION_PURIFY_CONFIG)),
    [question.explanation],
  );

  useEffect(() => {
    if (!zoomOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setZoomOpen(false); };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [zoomOpen]);

  const imageUrl = question.imageUrl ?? null;

  return (
    <div ref={ref} className="flex-1 overflow-y-auto p-5 sm:p-6 custom-scrollbar font-sans transition-all duration-300">
      <AnimatePresence>
      {isAnswered && (
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={staggerChild}
            className={`flex items-center gap-4 mb-6 p-4 rounded-xl border border-transparent transition-colors duration-300 ${
              isCorrect
                ? `${semanticColors.correct.bg} ${semanticColors.correct.text} shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_8px_rgba(52,211,153,0.1)]`
                : `${semanticColors.incorrect.bg} ${semanticColors.incorrect.text} shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_8px_rgba(248,113,113,0.1)]`
            }`}
          >
            {isCorrect ? <CheckCircle size={24} weight="thin" /> : <XCircle size={24} weight="thin" />}
            <div className="text-sm tracking-wide font-black uppercase text-opacity-90">{isCorrect ? 'HARİKA' : `YANLIŞ: ${question.correctAnswer}`}</div>
          </motion.div>
          <motion.div
            variants={staggerChild}
            className="prose-custom opacity-90 leading-relaxed font-medium"
            dangerouslySetInnerHTML={{ __html: explanationHtml }}
          />
          <motion.button
            variants={staggerChild}
            onClick={onExplainAI}
            disabled={aiLoading && !aiAnswer}
            className={`mt-8 w-full py-4 ${semanticColors.purple.bg} border-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] rounded-2xl flex items-center justify-center gap-3 ${semanticColors.purple.text} hover:opacity-80 transition-all font-bold text-sm tracking-wide disabled:opacity-40 disabled:scale-100 disabled:cursor-not-allowed active:scale-[0.98]`}
          >
            {aiLoading && !aiAnswer
              ? <><CircleNotch size={18} weight="thin" className="animate-spin" /> ANALİZ EDİLİYOR…</>
              : <><Sparkle size={18} weight="thin" className="opacity-80" /> AI AÇIKLAMA</>
            }
          </motion.button>

          {imageUrl && (
            <motion.div variants={staggerChild} className="mt-6 overflow-visible">
              <Button
                type="button"
                onClick={() => setZoomOpen(true)}
                variant="unstyled"
                aria-label="Görseli büyüt"
                className="group block w-full focus:outline-none"
                title="Görseli büyüt"
              >
                <img
                  src={imageUrl}
                  alt="Soru görseli"
                  loading="lazy"
                  className="w-full h-auto max-h-[420px] object-contain rounded-2xl bg-black/30 border border-white/10 shadow-lg origin-center transition-transform duration-300 ease-out group-hover:scale-[1.3] group-hover:shadow-2xl will-change-transform cursor-zoom-in"
                />
              </Button>
            </motion.div>
          )}
        </motion.div>
      )}
      </AnimatePresence>

      {zoomOpen && imageUrl && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md anim-fade-in cursor-zoom-out"
          onClick={() => setZoomOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <Button
            type="button"
            onClick={(e) => { e.stopPropagation(); setZoomOpen(false); }}
            variant="unstyled"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            aria-label="Kapat"
          >
            <X size={20} />
          </Button>
          <img
            src={imageUrl}
            alt="Soru görseli — büyük"
            className="max-w-[95vw] max-h-[92vh] object-contain rounded-2xl shadow-2xl anim-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}));
