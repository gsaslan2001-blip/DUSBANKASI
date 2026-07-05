/**
 * DUS Skor Göstergesi — D3 arc gauge + güven aralığı bandı + animasyonlu ibre
 */
import { memo, useRef, useEffect, useState } from 'react';

interface Props {
  estimatedNet: number;
  confidenceInterval: [number, number];
  maxNet?: number;
  aspirationZone: 'target' | 'competitive' | 'safe' | 'below_threshold';
  targetNet?: number;
}

const ARC_START = -135;
const ARC_END = 135;
const ARC_SPAN = ARC_END - ARC_START;

export default memo(DusScoreGauge);

function DusScoreGauge({
  estimatedNet, confidenceInterval, maxNet = 120,
  aspirationZone, targetNet = 95,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(260);
  const [animPct, setAnimPct] = useState(0);

  const pct = Math.min(1, Math.max(0, estimatedNet / maxNet));
  const ciLowPct = Math.min(1, Math.max(0, confidenceInterval[0] / maxNet));
  const ciHighPct = Math.min(1, Math.max(0, confidenceInterval[1] / maxNet));
  const targetPct = targetNet / maxNet;

  useEffect(() => {
    const obs = new ResizeObserver(entries => {
      const w = entries[0]?.contentRect.width ?? 260;
      setSize(Math.max(200, Math.min(w, 380)));
    });
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const start = animPct;
    const diff = pct - start;
    if (Math.abs(diff) < 0.001) return;
    const duration = 1000;
    const st = performance.now();
    let raf: number;
    function step(now: number) {
      const t = Math.min(1, (now - st) / duration);
      setAnimPct(start + diff * (1 - Math.pow(1 - t, 3)));
      if (t < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [pct]);

  const r = size * 0.34;
  const cx = size / 2;
  const cy = size * 0.6;
  const strokeW = size * 0.07;

  const zoneColors: Record<string, string> = {
    target: '#34d399',
    competitive: '#60a5fa',
    safe: '#fbbf24',
    below_threshold: '#f87171',
  };
  const zoneColor = zoneColors[aspirationZone];

  const zoneLabels: Record<string, string> = {
    target: 'Ankara Hedef',
    competitive: 'Rekabetçi',
    safe: 'Güvenli',
    below_threshold: 'Hedef Altı',
  };

  function arcPath(startDeg: number, endDeg: number, radius: number): string {
    const sr = (startDeg * Math.PI) / 180;
    const er = (endDeg * Math.PI) / 180;
    const x1 = cx + radius * Math.cos(sr);
    const y1 = cy + radius * Math.sin(sr);
    const x2 = cx + radius * Math.cos(er);
    const y2 = cy + radius * Math.sin(er);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`;
  }

  const currentAngle = ARC_START + animPct * ARC_SPAN;

  return (
    <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <svg width={size} height={size * 0.75} viewBox={`0 0 ${size} ${size * 0.75}`}>
        {/* Background track */}
        <path d={arcPath(ARC_START, ARC_END, r)}
          fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={strokeW} strokeLinecap="round" />

        {/* Confidence interval band */}
        <path d={arcPath(ARC_START + ciLowPct * ARC_SPAN, ARC_START + ciHighPct * ARC_SPAN, r)}
          fill="none" stroke={`${zoneColor}20`} strokeWidth={strokeW * 1.4} strokeLinecap="round" />

        {/* Value arc */}
        <path d={arcPath(ARC_START, ARC_START + animPct * ARC_SPAN, r)}
          fill="none" stroke={zoneColor} strokeWidth={strokeW} strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 ${size * 0.03}px ${zoneColor}40)` }} />

        {/* Target line */}
        {(() => {
          const ta = ARC_START + targetPct * ARC_SPAN;
          const trad = (ta * Math.PI) / 180;
          const ir = r - strokeW * 0.65;
          const outr = r + strokeW * 0.65;
          return (
            <line x1={cx + ir * Math.cos(trad)} y1={cy + ir * Math.sin(trad)}
              x2={cx + outr * Math.cos(trad)} y2={cy + outr * Math.sin(trad)}
              stroke="#fbbf24" strokeWidth={2} strokeDasharray="3 2" opacity={0.7} />
          );
        })()}

        {/* Needle */}
        <g transform={`rotate(${currentAngle}, ${cx}, ${cy})`}
          style={{ transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <circle cx={cx} cy={cy} r={strokeW * 0.35} fill={zoneColor} />
          <line x1={cx} y1={cy} x2={cx + r * 0.85} y2={cy}
            stroke={zoneColor} strokeWidth={2.5} strokeLinecap="round" />
        </g>

        {/* Center: score */}
        <text x={cx} y={cy + 4} textAnchor="middle" fill="#ececf1"
          fontSize={size * 0.14} fontWeight="900" fontFamily="inherit">
          {Math.round(animPct * maxNet)}
        </text>
        <text x={cx} y={cy + size * 0.06 + 12} textAnchor="middle" fill="#8b8b98"
          fontSize={size * 0.045} fontFamily="inherit">
          net / {maxNet}
        </text>

        {/* Min/Max labels */}
        <text x={cx - r * 0.92} y={cy + r * 0.15} textAnchor="middle" fill="#8b8b98"
          fontSize={10} fontFamily="inherit">0</text>
        <text x={cx + r * 0.92} y={cy + r * 0.15} textAnchor="middle" fill="#8b8b98"
          fontSize={10} fontFamily="inherit">{maxNet}</text>
      </svg>
      <div style={{ position: 'absolute', bottom: 8, fontSize: 11, color: zoneColor, fontWeight: 600 }}>
        {zoneLabels[aspirationZone]} Bölgesi
      </div>
    </div>
  );
}
