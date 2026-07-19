import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

/** Grafik tooltip'lerini stacking-context/overflow tuzaklarından kurtarır. */
export function TooltipPortal({ children }: { children: ReactNode }) {
  return createPortal(children, document.body);
}
