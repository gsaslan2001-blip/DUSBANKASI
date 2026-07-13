import { memo, useEffect } from 'react';
import { X } from '@phosphor-icons/react';
import { Button } from '../ui/Button';
import type { Theme } from '../../theme';

export type KeyboardShortcutsHelpProps = {
  open: boolean;
  onClose: () => void;
  theme: Theme;
};

const SHORTCUTS: { keys: string; label: string }[] = [
  { keys: '1–5 / A–E', label: 'Şık seç' },
  { keys: '←', label: 'Önceki soru' },
  { keys: '→ / Space', label: 'Sonraki soru (cevaplandıysa)' },
  { keys: 'S', label: 'Boş geç' },
  { keys: 'F', label: 'Favorilere ekle/çıkar' },
  { keys: '?', label: 'Bu yardım penceresini aç/kapat' },
  { keys: 'Esc', label: 'Pencereyi kapat' },
];

/** Klavye kısayolları yardım overlay'i — `?` tuşuyla açılır. */
export const KeyboardShortcutsHelp = memo(function KeyboardShortcutsHelp({ open, onClose, theme }: KeyboardShortcutsHelpProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md anim-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Klavye kısayolları"
    >
      <div
        className={`w-full max-w-sm ${theme.cardSolid} border ${theme.border} rounded-2xl p-5 shadow-2xl anim-scale-in`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-sm font-black uppercase tracking-wide ${theme.text}`}>Klavye Kısayolları</h2>
          <Button
            type="button"
            onClick={onClose}
            variant="unstyled"
            size="icon"
            aria-label="Kapat"
            className={`${theme.subtext} hover:${theme.text}`}
          >
            <X size={16} />
          </Button>
        </div>
        <ul className="space-y-2">
          {SHORTCUTS.map((s) => (
            <li key={s.keys} className="flex items-center justify-between gap-4 text-[13px]">
              <span className={theme.subtext}>{s.label}</span>
              <kbd className="shrink-0 inline-flex items-center justify-center min-w-[28px] h-[22px] px-1.5 rounded-[6px] border border-white/15 bg-white/[0.06] text-[10px] font-bold leading-none tracking-wide">
                {s.keys}
              </kbd>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
