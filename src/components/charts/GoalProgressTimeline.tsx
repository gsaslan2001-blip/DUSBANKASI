/**
 * Goal Progress Timeline — Hedef ilerleme çubukları + milestone işaretleri
 */
import { memo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  progress: {
    goalKey: string;
    label: string;
    current: number;
    target: number;
    pct: number;
    onTrack: boolean;
  }[];
}

export default memo(GoalProgressTimeline);

function GoalProgressTimeline({ progress }: Props) {
  if (progress.length === 0) {
    return <div style={{ color: '#8b8b98', fontSize: 13, textAlign: 'center', padding: 24 }}>Henüz hedef verisi yok</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {progress.slice(0, 8).map((p) => (
        <div key={p.goalKey} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 90, fontSize: 12, color: '#8b8b98', textAlign: 'right', flexShrink: 0 }}>
            {p.label}
          </div>
          <div style={{ flex: 1, height: 22, background: 'rgba(255,255,255,0.04)', borderRadius: 11, overflow: 'hidden', position: 'relative' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(100, p.pct)}%` }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: '100%',
                borderRadius: 11,
                background: p.onTrack
                  ? 'linear-gradient(90deg, #34d399, #059669)'
                  : p.pct >= 50
                    ? 'linear-gradient(90deg, #818cf8, #6366f1)'
                    : 'linear-gradient(90deg, #fbbf24, #f59e0b)',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: p.pct > 40 ? '#fff' : '#8b8b98' }}>
                {p.current.toLocaleString('tr-TR')} / {p.target.toLocaleString('tr-TR')}
              </span>
            </div>
          </div>
          <div style={{ width: 40, fontSize: 12, fontWeight: 700, color: p.onTrack ? '#34d399' : '#fbbf24', textAlign: 'left', flexShrink: 0 }}>
            %{p.pct}
          </div>
        </div>
      ))}
    </div>
  );
}
