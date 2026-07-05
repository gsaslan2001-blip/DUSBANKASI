/**
 * DUS Score Panel — Tier 1'de DUS skor göstergesi + yüzdelik + yerleştirme
 */
import { memo } from 'react';
import { motion } from 'framer-motion';
import { DusScoreGauge, PercentileBar } from '../charts';
import type { DusScoreEstimate } from '../../types/app';
import type { Theme } from '../../theme';

interface Props {
  score: DusScoreEstimate | null;
  theme: Theme;
}

export default memo(DusScorePanel);

function DusScorePanel({ score, theme }: Props) {
  if (!score) {
    return (
      <div className={theme.card} style={{ padding: 20, borderRadius: 20, textAlign: 'center' }}>
        <div style={{ color: theme.subtext, fontSize: 13 }}>Henüz DUS skor tahmini için yeterli veri yok</div>
        <div style={{ color: '#8b8b9860', fontSize: 11, marginTop: 4 }}>Daha fazla soru çözdükçe tahmin hassaslaşır</div>
      </div>
    );
  }

  const zoneLabels: Record<string, { label: string; color: string }> = {
    target: { label: 'Ankara Hedef Bölgesi', color: '#34d399' },
    competitive: { label: 'Rekabetçi Bölge', color: '#60a5fa' },
    safe: { label: 'Güvenli Bölge', color: '#fbbf24' },
    below_threshold: { label: 'Hedef Altı', color: '#f87171' },
  };
  const zone = zoneLabels[score.aspirationZone];

  return (
    <motion.div
      className={theme.card}
      style={{ padding: 20, borderRadius: 20, position: 'relative', overflow: 'hidden' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: theme.text }}>DUS Skor Tahmini</span>
        <span style={{
          fontSize: 10, fontWeight: 600, color: zone.color,
          background: `${zone.color}15`, padding: '2px 8px', borderRadius: 10,
        }}>
          {zone.label}
        </span>
      </div>

      <DusScoreGauge
        estimatedNet={score.estimatedNet}
        confidenceInterval={score.confidenceInterval}
        aspirationZone={score.aspirationZone}
        targetNet={95}
      />

      <div style={{ marginTop: 12 }}>
        <PercentileBar
          percentile={score.estimatedPercentile}
          estimatedRank={score.estimatedRank}
          aspirationZone={score.aspirationZone}
        />
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 14, fontSize: 12 }}>
        <div style={{ flex: 1, textAlign: 'center', padding: '8px 4px', background: 'rgba(255,255,255,0.03)', borderRadius: 10 }}>
          <div style={{ color: theme.subtext }}>Tahmini Sıralama</div>
          <div style={{ color: theme.text, fontWeight: 700, fontSize: 15 }}>
            {score.estimatedRank.toLocaleString('tr-TR')}
          </div>
        </div>
        <div style={{ flex: 1, textAlign: 'center', padding: '8px 4px', background: 'rgba(255,255,255,0.03)', borderRadius: 10 }}>
          <div style={{ color: theme.subtext }}>Hedef Olasılığı</div>
          <div style={{
            color: score.targetProbability >= 50 ? '#34d399' : score.targetProbability >= 30 ? '#fbbf24' : '#f87171',
            fontWeight: 700, fontSize: 15,
          }}>
            %{score.targetProbability}
          </div>
        </div>
        <div style={{ flex: 1, textAlign: 'center', padding: '8px 4px', background: 'rgba(255,255,255,0.03)', borderRadius: 10 }}>
          <div style={{ color: theme.subtext }}>Güven Aralığı</div>
          <div style={{ color: theme.text, fontWeight: 700, fontSize: 15 }}>
            {score.confidenceInterval[0]}–{score.confidenceInterval[1]}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
