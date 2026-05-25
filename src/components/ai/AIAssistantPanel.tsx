import { memo, useMemo } from 'react';
import { Sparkles, XCircle } from 'lucide-react';
import DOMPurify, { type Config as DOMPurifyConfig } from 'dompurify';
import { renderMarkdown } from '../../lib/markdown';
import type { Theme } from '../../theme';
import type { UserSettings } from '../../types/app';

export type AIAssistantPanelProps = {
  visible: boolean;
  loading: boolean;
  error: string | null;
  answer: string | null;
  onClose: () => void;
  onRetry?: () => void;
  theme: Theme;
  settings: UserSettings;
};

/**
 * Slide-over glass AI tutor panel. Extracted from App.tsx:1355-1390.
 * PERF: renderMarkdown streaming sırasında her chunk'ta çağrılır — useMemo ile
 * `answer` değişmedikçe tekrar parse edilmez.
 */
// AUDIT: G1 — izin verilen HTML etiketleri kümesi (script/iframe/object yasak)
const PURIFY_CONFIG: DOMPurifyConfig = {
  ALLOWED_TAGS: ['p', 'strong', 'em', 'ul', 'ol', 'li', 'code', 'pre', 'h1', 'h2', 'h3', 'br', 'span', 'blockquote'],
  ALLOWED_ATTR: ['class'],
};

export const AIAssistantPanel = memo(function AIAssistantPanel({ visible, loading, error, answer, onClose, onRetry, theme, settings }: AIAssistantPanelProps) {
  // AUDIT: G1 — dangerouslySetInnerHTML öncesi DOMPurify sanitize
  const html = useMemo(() => {
    if (!answer) return '';
    return String(DOMPurify.sanitize(renderMarkdown(answer), PURIFY_CONFIG));
  }, [answer]);
  return (
    <>
      {/* Mobil backdrop: panelin dışına tıklayınca kapanır */}
      {visible && (
        <div
          className="absolute inset-0 z-[79] lg:hidden bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed inset-x-0 bottom-0 h-[85vh] rounded-t-3xl sm:absolute sm:inset-0 sm:h-full sm:rounded-none lg:w-[420px] lg:right-0 lg:left-auto lg:h-full z-[80] ${theme.cardSolid} border ${theme.border} shadow-2xl shadow-black/30 transition-all duration-500 flex flex-col ${
          visible
            ? 'translate-y-0 sm:translate-y-0 sm:translate-x-0 opacity-100 pointer-events-auto'
            : 'translate-y-full sm:translate-y-0 sm:translate-x-full opacity-0 pointer-events-none'
        } lg:rounded-2xl`}
        style={{ padding: '0' }}
      >
        {/* Mobil Drag Handle Göstergesi */}
        <div className="w-full flex justify-center py-2 sm:hidden shrink-0">
          <div className="w-10 h-1.5 bg-white/20 rounded-full" />
        </div>
        {/* Header with accent line */}
        <div className={`relative p-4 border-b ${theme.border} flex items-center justify-between shrink-0`}>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-indigo-500/40 via-violet-500/40 to-transparent" />
          <div className="flex items-center gap-2 font-bold text-indigo-500 text-sm">
            <Sparkles size={16} /> AI Öğretmen
            {loading && <span className={`text-[10px] font-medium ${theme.subtext} opacity-50 ml-1 animate-pulse`}>yazıyor…</span>}
          </div>
          <button onClick={onClose} className={`p-1.5 hover:${theme.inputBg} rounded-lg transition-colors`}>
            <XCircle size={16} className={`${theme.text} opacity-40`} />
          </button>
        </div>
        <div className={`p-5 flex-1 overflow-y-auto custom-scrollbar text-sm leading-relaxed ${settings.theme === 'light' ? 'prose-light text-black' : 'text-white'}`}>
          {/* Yükleniyor — henüz hiç chunk gelmedi */}
          {loading && !answer && (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                <Sparkles size={24} className="text-indigo-500 anim-glow" />
              </div>
              <p className={`font-bold opacity-60 text-xs ${theme.text}`}>Kitabınız taranıyor ve<br />analiz yapılıyor…</p>
            </div>
          )}
          {/* Hata — AUDIT: R1 retry butonu */}
          {error && (
            <div className="bg-red-500/8 text-red-400 p-4 rounded-xl border border-red-500/15">
              <strong className="block mb-1 text-xs">Hata:</strong>
              <span className="text-xs">{error}</span>
              {onRetry && (
                <button
                  onClick={onRetry}
                  className="mt-3 btn btn-sm bg-red-500/15 text-red-400 hover:bg-red-500/25"
                >
                  Tekrar Dene
                </button>
              )}
            </div>
          )}
          {/* Streaming yanıt — renderMarkdown ile düzgün render */}
          {answer && (
            <div className="prose-custom" dangerouslySetInnerHTML={{ __html: html }} />
          )}
        </div>
      </div>
    </>
  );
});
