
import { useRef, useEffect, useState } from 'react';

interface Props {
  value: number;
  max: number;
  size?: number;
  color?: string;
  label?: string;
}

const ARC_START = -135;
const ARC_END = 135;
const ARC_SPAN = ARC_END - ARC_START;

export default function GaugeChart({ value, max, size = 180, color: _color = '#818cf8', label }: Props) {
  const needleRef = useRef<SVGGElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  const safeMax = max || 1;
  const pct = Math.min(1, Math.max(0, value / safeMax));
  const r = size * 0.36;
  const cx = size / 2;
  const cy = size * 0.62;
  const strokeW = size * 0.08;

  const angle = ARC_START + pct * ARC_SPAN;
  void ((angle * Math.PI) / 180); // rad kept for future needle use
  // const nx = cx + r * Math.cos(rad);
  // const ny = cy + r * Math.sin(rad);

  const colorByPct = pct < 0.4 ? '#f87171' : pct < 0.7 ? '#fbbf24' : '#34d399';
  const arcColor = colorByPct;

  function describeArc(cx2: number, cy2: number, radius: number, startDeg: number, endDeg: number): string {
    const startRad = (startDeg * Math.PI) / 180;
    const endRad = (endDeg * Math.PI) / 180;
    const x1 = cx2 + radius * Math.cos(startRad);
    const y1 = cy2 + radius * Math.sin(startRad);
    const x2 = cx2 + radius * Math.cos(endRad);
    const y2 = cy2 + radius * Math.sin(endRad);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`;
  }

  useEffect(() => {
    const start = displayValue;
    const diff = pct - start;
    if (Math.abs(diff) < 0.001) return;
    const duration = 800;
    const startTime = performance.now();
    let raf: number;
    function step(now: number) {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayValue(start + diff * eased);
      if (t < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [pct]);

  const currentAngle = ARC_START + displayValue * ARC_SPAN;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <svg width={size} height={size * 0.72} viewBox={`0 0 ${size} ${size * 0.72}`}>
        {/* Track */}
        <path d={describeArc(cx, cy, r, ARC_START, ARC_END)}
          fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={strokeW} strokeLinecap="round" />
        {/* Value arc */}
        <path d={describeArc(cx, cy, r, ARC_START, ARC_START + displayValue * ARC_SPAN)}
          fill="none" stroke={arcColor} strokeWidth={strokeW} strokeLinecap="round"
          style={{ transition: 'stroke 0.4s', filter: `drop-shadow(0 0 ${size * 0.03}px ${arcColor}40)` }} />
        {/* Tick marks */}
        {[0, 0.25, 0.5, 0.75, 1].map(t => {
          const ta = ARC_START + t * ARC_SPAN;
          const trad = (ta * Math.PI) / 180;
          const ir = r - strokeW * 0.6;
          const outr = r + strokeW * 0.6;
          return (
            <line key={t}
              x1={cx + ir * Math.cos(trad)} y1={cy + ir * Math.sin(trad)}
              x2={cx + outr * Math.cos(trad)} y2={cy + outr * Math.sin(trad)}
              stroke="rgba(255,255,255,0.12)" strokeWidth={1} />
          );
        })}
        {/* Needle */}
        <g ref={needleRef} transform={`rotate(${currentAngle}, ${cx}, ${cy})`}
          style={{ transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <circle cx={cx} cy={cy} r={strokeW * 0.35} fill={arcColor} />
          <line x1={cx} y1={cy} x2={cx + r * 0.88} y2={cy}
            stroke={arcColor} strokeWidth={2} strokeLinecap="round" />
        </g>
        {/* Center text */}
        <text x={cx} y={cy + size * 0.1} textAnchor="middle"
          fill="#ececf1" fontSize={size * 0.16} fontWeight="900" fontFamily="inherit">
          {Math.round(displayValue * safeMax)}
        </text>
      </svg>
      {label && <div style={{ fontSize: 12, fontWeight: 700, color: '#ececf1', marginTop: -4 }}>{label}</div>}
      <div style={{ fontSize: 10, color: '#8b8b98' }}>hedef {max}</div>
    </div>
  );
}
