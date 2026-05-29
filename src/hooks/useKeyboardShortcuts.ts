import { useHotkeys } from 'react-hotkeys-hook';

export type KeyboardShortcutOptions = {
  onNext: (skip: boolean) => void;
  onPrev: () => void;
  onSkip: () => void;
  setSelected: (key: string) => void;
  isAnswered: boolean;
  isHistorized: boolean;
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
 */
export function useKeyboardShortcuts(opts: KeyboardShortcutOptions): void {
  const { onNext, onPrev, onSkip, setSelected, isAnswered, isHistorized, enabled = true } = opts;

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
}
