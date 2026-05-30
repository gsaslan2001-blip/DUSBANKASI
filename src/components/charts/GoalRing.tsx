import { useRef, useEffect, useState } from 'react';

export interface GoalRingProps {
  value: number;       // current (e.g., solved questions today)
  target: number;      // goal
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  label?: string;      // bottom text
  suffix?: string;     // e.g., "soru"
  animate?: boolean;
}

export default function GoalRing({
  value, target, size = 100, strokeWidth = 7,
  color = '#818cf8', trackColor = 'rgba(255,255,255,0.06)',
  label, suffix, animate = true,
}: GoalRingProps) {
  const circleRef = useRef<SVGCircleElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(1, Math.max(0, target > 0 ? value / target : 0));
  const dashOffset = circumference * (1 - progress);

  useEffect(() => {
    if (!animate) { setDisplayValue(value); return; }
    const start = displayValue;
    const diff = value - start;
    if (diff === 0) return;
    const duration = 800;
    const startTime = performance.now();
    let raf: number;
    function step(now: number) {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplayValue(Math.round(start + diff * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, animate]);

  const pct = target > 0 ? Math.round((value / target) * 100) : 0;
  const isComplete = pct >= 100;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Track */}
        <circle cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={trackColor} strokeWidth={strokeWidth} />
        {/* Progress */}
        <circle ref={circleRef} cx={size / 2} cy={size / 2} r={radius}
          fill="none"
          stroke={isComplete ? '#34d399' : color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: animate ? 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.4s' : 'none', filter: isComplete ? 'drop-shadow(0 0 6px rgba(52,211,153,0.4))' : undefined }}
        />
        {/* Center text */}
        <text x={size / 2} y={size / 2} textAnchor="middle" dominantBaseline="central"
          fill={isComplete ? '#34d399' : '#ececf1'}
          fontSize={size * 0.22} fontWeight="900" fontFamily="inherit">
          {displayValue}
        </text>
      </svg>
      {/* Bottom label */}
      <div style={{ textAlign: 'center' }}>
        {label && <div style={{ fontSize: 12, fontWeight: 700, color: '#ececf1' }}>{label}</div>}
        <div style={{ fontSize: 10, color: '#8b8b98', marginTop: 2 }}>
          {suffix ? `${pct}% · hedef ${target} ${suffix}` : `hedef ${target}`}
        </div>
      </div>
    </div>
  );
}
