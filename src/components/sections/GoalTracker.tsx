/**
 * Goal Tracker — Tier 1'de hedef ilerleme halkaları + düzenleme
 */
import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { GoalRing, GoalProgressTimeline } from '../charts';
import type { Theme } from '../../theme';
import type { GoalProgress } from '../../types/app';

interface Props {
  progress: GoalProgress[];
  theme: Theme;
  onEditGoals: () => void;
}

export default memo(GoalTracker);

function GoalTracker({ progress, theme, onEditGoals }: Props) {
  const [viewMode, setViewMode] = useState<'rings' | 'bars'>('rings');

  // Eskiden ilk 4'e kesiliyordu — Seri/Uzmanlaşma gibi hedefler hiç görünmüyordu.
  // Özel hedefler çok fazlaysa (>8) grid taşmasın diye üst sınır konuldu.
  const topGoals = progress.slice(0, 8);

  return (
    <motion.div
      className={theme.card}
      style={{ padding: 20, borderRadius: 20 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: theme.text }}>Hedefler</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <button
            onClick={() => setViewMode('rings')}
            style={{
              padding: '4px 10px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: viewMode === 'rings' ? `${theme.accent}20` : 'transparent',
              color: viewMode === 'rings' ? theme.accent : theme.subtext, fontSize: 11, fontWeight: 600,
            }}
          >
            Halka
          </button>
          <button
            onClick={() => setViewMode('bars')}
            style={{
              padding: '4px 10px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: viewMode === 'bars' ? `${theme.accent}20` : 'transparent',
              color: viewMode === 'bars' ? theme.accent : theme.subtext, fontSize: 11, fontWeight: 600,
            }}
          >
            Bar
          </button>
          <button
            onClick={onEditGoals}
            style={{
              padding: '4px 10px', borderRadius: 8, border: `1px solid ${theme.border}`,
              background: 'transparent', color: theme.subtext, fontSize: 11, fontWeight: 600, cursor: 'pointer',
            }}
          >
            Düzenle
          </button>
        </div>
      </div>

      {viewMode === 'rings' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: 8 }}>
          {topGoals.map((p) => (
            <GoalRing
              key={p.goalKey}
              value={p.current}
              target={p.target}
              size={90}
              label={p.label}
              color={p.onTrack ? '#34d399' : p.pct >= 50 ? '#818cf8' : '#fbbf24'}
            />
          ))}
          {progress.length > 8 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.subtext, fontSize: 11 }}>
              +{progress.length - 8} hedef daha
            </div>
          )}
        </div>
      ) : (
        <GoalProgressTimeline progress={topGoals} />
      )}
    </motion.div>
  );
}
