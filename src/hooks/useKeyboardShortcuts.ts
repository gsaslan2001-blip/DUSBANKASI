import { useHotkeys } from 'react-hotkeys-hook';

export type KeyboardShortcutOptions = {
  onNext: (skip: boolean) => void;
  onPrev: () => void;
  onSkip: () => void;
  setSelected: (key: string) => void;
  isAnswered: boolean;
  isHistorized: boolean;
  onToggleFavorite?: () => void;
  onToggleHelp?: () => void;
  enabled?: boolean;
};

/**
 * Keyboard shortcuts for QuizView. Behavior preserved 1:1 with the previous
 * useEffect+addEventListener implementation. Now powered by react-hotkeys-hook.
 *
 * Bindings:
 * - Space / ArrowRight: next (only when answered)
 * - ArrowLeft: previous (always)
 * - a/b/c/d/e or 1/2/3/4/5: pick option (only when not yet answered/historized)
 * - s: skip (only when not answered)
 * - f: toggle favorite (always, if handler given)
 * - ?: toggle keyboard-shortcuts help overlay (always, if handler given)
 */
export function useKeyboardShortcuts(opts: KeyboardShortcutOptions): void {
  const { onNext, onPrev, onSkip, setSelected, isAnswered, isHistorized, onToggleFavorite, onToggleHelp, enabled = true } = opts;

  // Space → next
  useHotkeys('space', (e) => { e.preventDefault(); onNext(false); }, {
    enabled: enabled && isAnswered,
  }, [onNext, enabled, isAnswered]);

  // ArrowRight → next (only when answered)
  useHotkeys('right', () => { onNext(false); }, {
    enabled: enabled && isAnswered,
  }, [onNext, enabled, isAnswered]);

  // ArrowLeft → previous
  useHotkeys('left', () => { onPrev(); }, { enabled }, [onPrev, enabled]);

  // s → skip (only when not answered)
  useHotkeys('s', () => { onSkip(); }, {
    enabled: enabled && !isAnswered,
  }, [onSkip, enabled, isAnswered]);

  // Option pickers — only when not yet answered/historized
  const canPick = enabled && !isAnswered && !isHistorized;
  useHotkeys('a, 1', () => setSelected('A'), { enabled: canPick }, [setSelected, canPick]);
  useHotkeys('b, 2', () => setSelected('B'), { enabled: canPick }, [setSelected, canPick]);
  useHotkeys('c, 3', () => setSelected('C'), { enabled: canPick }, [setSelected, canPick]);
  useHotkeys('d, 4', () => setSelected('D'), { enabled: canPick }, [setSelected, canPick]);
  useHotkeys('e, 5', () => setSelected('E'), { enabled: canPick }, [setSelected, canPick]);

  // f → toggle favorite
  useHotkeys('f', () => { onToggleFavorite?.(); }, {
    enabled: enabled && !!onToggleFavorite,
  }, [onToggleFavorite, enabled]);

  // ? → toggle keyboard shortcuts help overlay (react-hotkeys-hook matches
  // physical KeyboardEvent.code by default, so the "/" key is named "slash").
  useHotkeys('shift+slash', () => { onToggleHelp?.(); }, {
    enabled: enabled && !!onToggleHelp,
  }, [onToggleHelp, enabled]);
}
