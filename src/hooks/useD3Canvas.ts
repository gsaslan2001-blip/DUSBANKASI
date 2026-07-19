/**
 * useD3Canvas (Faz 4) — chart bileşenlerinin ortak ölçüm altyapısı.
 *
 * 30 D3 chart'ta tekrar eden ResizeObserver + genişlik state kalıbını tek
 * hook'a indirger. Chart yalnızca veri + işaret koduna iner:
 *
 *   const { ref, width, height } = useD3Canvas<HTMLDivElement>();
 *   ... width > 0 ? render : null
 */
import { useEffect, useRef, useState } from 'react';

export function useD3Canvas<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      setSize(prev =>
        prev.width === Math.round(rect.width) && prev.height === Math.round(rect.height)
          ? prev
          : { width: Math.round(rect.width), height: Math.round(rect.height) },
      );
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return; // jsdom fallback
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { ref, width: size.width, height: size.height };
}
