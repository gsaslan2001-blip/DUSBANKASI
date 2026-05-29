import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  formatter?: (n: number) => string;
  suffix?: string;
}

export function AnimatedCounter({
  value,
  duration = 1200,
  className = '',
  formatter = (n) => n.toLocaleString('tr-TR'),
  suffix,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);
  const prevValue = useRef(0);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (value === prevValue.current) {
      setDisplay(value);
      return;
    }

    const startValue = prevValue.current;
    prevValue.current = value;
    const diff = value - startValue;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // cubic-bezier(0.16, 1, 0.3, 1) easing
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + diff * eased);

      setDisplay(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    startTimeRef.current = 0;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, [value, duration]);

  return (
    <span className={className}>
      {formatter(display)}{suffix && <span className="opacity-50"> {suffix}</span>}
    </span>
  );
}
