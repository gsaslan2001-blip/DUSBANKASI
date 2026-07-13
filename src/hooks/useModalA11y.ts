import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Referans sayaçlı body-scroll kilidi: iki modal (örn. quiz + üstünde
// EditModal) aynı anda açıkken biri kapansa da diğeri açıkken arka plan
// scroll'u tekrar açılmasın.
let scrollLockCount = 0;
let scrollLockPrevOverflow = '';
function lockBodyScroll() {
  if (scrollLockCount === 0) scrollLockPrevOverflow = document.body.style.overflow;
  scrollLockCount++;
  document.body.style.overflow = 'hidden';
}
function unlockBodyScroll() {
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount === 0) document.body.style.overflow = scrollLockPrevOverflow;
}

/**
 * Faz 7 — modal a11y sözleşmesi: ESC ile kapanış + Tab focus-trap +
 * açılışta ilk odaklanabilir elemana focus. `ExplanationPanel`'in görsel
 * zoom overlay'indeki ESC pattern'i genelleştirilip AuthModal, ExportModal,
 * GoalEditorModal, SettingsModal, EditModal, ReportModal'a taşındı.
 *
 * role="dialog" + aria-modal="true" attribute'larını container'a elle
 * eklemek çağıranın sorumluluğunda kalır (JSX'te statik yazılır) — bu hook
 * yalnızca davranışı (ESC + focus trap) sağlar.
 */
export function useModalA11y<T extends HTMLElement = HTMLDivElement>(
  onClose: () => void,
  active = true
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!active) return;
    const node = ref.current;
    const prevActiveEl = document.activeElement as HTMLElement | null;

    const focusables = () =>
      node ? Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)) : [];

    const first = focusables()[0];
    (first ?? node)?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (items.length === 0) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    lockBodyScroll();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      unlockBodyScroll();
      prevActiveEl?.focus?.();
    };
  }, [active, onClose]);

  return ref;
}
