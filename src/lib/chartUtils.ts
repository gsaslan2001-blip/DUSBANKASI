/** Shared D3 chart utilities */

/** Standard debounce for ResizeObserver callbacks */
export function debounce<T extends (...args: unknown[]) => void>(fn: T, ms: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  }) as T;
}

/** Inline style object for the floating tooltip div — keeps tooltip markup DRY */
export const TOOLTIP_STYLE: React.CSSProperties = {
  display: 'none',
  position: 'fixed',
  pointerEvents: 'none',
  background: 'rgba(8,8,10,0.95)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '8px 12px',
  zIndex: 9999,
  backdropFilter: 'blur(12px)',
  boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
};
