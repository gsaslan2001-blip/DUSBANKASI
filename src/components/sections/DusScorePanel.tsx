import { memo } from 'react';
import { motion } from 'framer-motion';
import { DusScoreGauge, PercentileBar } from '../charts';
import type { DusScoreEstimate } from '../../types/app';
import type { Theme } from '../../theme';
import { Sparkle, SlidersHorizontal } from '@phosphor-icons/react';

interface Props {
  score: DusScoreEstimate | null;
  theme: Theme;
  totalExams?: number;
  solvedQuestions?: number;
}

export default memo(DusScorePanel);

function DusScorePanel({ score, theme, totalExams = 0, solvedQuestions = 0 }: Props) {
  if (!score) {
    return (
      <div className={`${theme.card} p-5 rounded-2xl border ${theme.border} text-center`}>
        <div className={`${theme.subtext} text-xs font-semibold`}>
          Henüz DUS skor tahmini için yeterli veri yok
        </div>
        <div className="text-[#8b8b98] text-[11px] mt-1 font-mono">
          Daha fazla soru çözdükçe tahmin hassaslaşır
        </div>
      </div>
    );
  }

  const zoneLabels: Record<string, { label: string; color: string; bg: string }> = {
    target: { label: 'Ankara ADÇC TOP 10 Hedefi', color: '#34d399', bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
    competitive: { label: 'Rekabetçi Bölge', color: '#60a5fa', bg: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    safe: { label: 'Güvenli Bölge', color: '#fbbf24', bg: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
    below_threshold: { label: 'Geliştirilmeli', color: '#f87171', bg: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
  };
  const zone = zoneLabels[score.aspirationZone] ?? zoneLabels.below_threshold;

  // Kalibrasyon ilerleme durumu (10 deneme veya 500 soru hedefi)
  const calibrationTarget = 10;
  const calibrationProgress = Math.min(10, totalExams);
  const isFullyCalibrated = totalExams >= calibrationTarget || solvedQuestions >= 500;
  const calibrationPct = Math.round((calibrationProgress / calibrationTarget) * 100);

  return (
    <motion.div
      className={`${theme.card} p-5 sm:p-6 rounded-2xl border ${theme.border} relative overflow-hidden`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Üst Şerit: Başlık, Bölge ve Model Kalibrasyonu */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/20">
            <Sparkle size={18} weight="duotone" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[color:var(--color-text-primary)]">
                DUS Projeksiyonu & Hedef Analizi
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${zone.bg}`}
              >
                {zone.label}
              </span>
            </div>
            <p className={`${theme.subtext} text-[11px]`}>
              24 Ekim 2027 Ankara Üniversitesi ADÇC TOP 10 Tahmin Modeli
            </p>
          </div>
        </div>

        {/* Kalibrasyon Rozeti / İlerleme Çubuğu */}
        <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 rounded-xl px-3 py-1.5 self-start sm:self-auto">
          <SlidersHorizontal size={14} className="text-indigo-400" />
          <div className="text-[10px]">
            {isFullyCalibrated ? (
              <span className="text-emerald-400 font-bold font-mono">
                Model Tam Kalibre (Güven: %{score.targetProbability})
              </span>
            ) : (
              <div className="flex items-center gap-2">
                <span className={theme.subtext}>
                  Kalibrasyon: <strong className="text-indigo-400 font-mono tabular-nums">{calibrationProgress}/{calibrationTarget} Deneme</strong>
                </span>
                <div className="w-12 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${calibrationPct}%` }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DUS Göstergesi */}
      <div className="my-1">
        <DusScoreGauge
          estimatedNet={score.estimatedNet}
          confidenceInterval={score.confidenceInterval}
          aspirationZone={score.aspirationZone}
          targetNet={95}
        />
      </div>

      {/* Yüzdelik & Sıralama Çubuğu */}
      <div className="mt-4">
        <PercentileBar
          percentile={score.estimatedPercentile}
          estimatedRank={score.estimatedRank}
          aspirationZone={score.aspirationZone}
        />
      </div>

      {/* Alt Metrik Kartları */}
      <div className="grid grid-cols-3 gap-3 mt-4 text-xs font-mono">
        <div className="text-center p-2.5 bg-white/[0.02] border border-white/5 rounded-xl">
          <div className={`${theme.subtext} text-[10px] font-sans uppercase tracking-wider`}>Tahmini Sıralama</div>
          <div className="font-black text-base text-[color:var(--color-text-primary)] tabular-nums mt-0.5">
            {score.estimatedRank > 0 ? `#${score.estimatedRank.toLocaleString('tr-TR')}` : '—'}
          </div>
        </div>
        <div className="text-center p-2.5 bg-white/[0.02] border border-white/5 rounded-xl">
          <div className={`${theme.subtext} text-[10px] font-sans uppercase tracking-wider`}>Hedef Olasılığı</div>
          <div
            className={`font-black text-base tabular-nums mt-0.5 ${
              score.targetProbability >= 50
                ? 'text-emerald-400'
                : score.targetProbability >= 30
                ? 'text-amber-400'
                : 'text-rose-400'
            }`}
          >
            %{score.targetProbability}
          </div>
        </div>
        <div className="text-center p-2.5 bg-white/[0.02] border border-white/5 rounded-xl">
          <div className={`${theme.subtext} text-[10px] font-sans uppercase tracking-wider`}>Güven Aralığı</div>
          <div className="font-black text-base text-indigo-400 tabular-nums mt-0.5">
            {score.confidenceInterval[0].toFixed(1)} – {score.confidenceInterval[1].toFixed(1)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
