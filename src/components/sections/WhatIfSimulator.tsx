/**
 * What-If Simulator — "Günde X soru çözersem?" interaktif simülasyon
 */
import { memo, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { WhatIfLineChart } from '../charts';
import type { Theme } from '../../theme';
import type { ActivityPoint } from '../../lib/stats';

interface Props {
  activity: ActivityPoint[];
  solvedUnique: number;
  bankTotal: number;
  theme: Theme;
}

export default memo(WhatIfSimulator);

function WhatIfSimulator({ activity, solvedUnique, bankTotal, theme }: Props) {
  const [dailyRate, setDailyRate] = useState(200);
  const daysToProject = 120;

  const data = useMemo(() => {
    // Baseline: current pace
    const recentActivity = activity.slice(-14);
    const currentPace = recentActivity.length > 0
      ? recentActivity.reduce((s, a) => s + a.count, 0) / recentActivity.length
      : 50;

    const baseline = [{ day: 0, cumulative: solvedUnique }];
    const currentScenario = [{ day: 0, cumulative: solvedUnique }];
    const targetScenario = [{ day: 0, cumulative: solvedUnique }];

    for (let day = 1; day <= daysToProject; day++) {
      baseline.push({ day, cumulative: Math.min(bankTotal, baseline[day - 1].cumulative + currentPace) });
      currentScenario.push({ day, cumulative: Math.min(bankTotal, currentScenario[day - 1].cumulative + dailyRate) });
      targetScenario.push({ day, cumulative: Math.min(bankTotal, targetScenario[day - 1].cumulative + dailyRate * 1.5) });
    }

    return {
      baseline,
      scenarios: [
        { label: `Günde ${dailyRate} soru`, dailyRate, data: currentScenario },
        { label: `Günde ${Math.round(dailyRate * 1.5)} soru`, dailyRate: Math.round(dailyRate * 1.5), data: targetScenario },
      ],
    };
  }, [activity, solvedUnique, bankTotal, dailyRate]);

  const daysToTarget = useMemo(() => {
    const remaining = bankTotal - solvedUnique;
    return Math.ceil(remaining / dailyRate);
  }, [bankTotal, solvedUnique, dailyRate]);

  return (
    <motion.div
      className={theme.card}
      style={{ padding: 20, borderRadius: 20 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ fontSize: 14, fontWeight: 700, color: theme.text, marginBottom: 16 }}>
        Simülasyon: "Ne Olurdu?"
      </div>

      {/* Slider */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontSize: 12, color: theme.subtext }}>Günlük soru hedefi</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#818cf8' }}>{dailyRate} soru/gün</span>
        </div>
        <input
          type="range"
          min={50}
          max={500}
          step={10}
          value={dailyRate}
          onChange={e => setDailyRate(Number(e.target.value))}
          style={{
            width: '100%', height: 6, borderRadius: 3,
            background: `linear-gradient(90deg, #818cf8 ${(dailyRate / 500) * 100}%, rgba(255,255,255,0.08) ${(dailyRate / 500) * 100}%)`,
            appearance: 'none', cursor: 'pointer', outline: 'none',
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: theme.subtext }}>
          <span>50</span><span>500</span>
        </div>
      </div>

      {/* Chart */}
      <WhatIfLineChart
        baseline={data.baseline}
        scenarios={data.scenarios}
        height={200}
      />

      {/* Summary */}
      <div style={{
        marginTop: 14, padding: 12, borderRadius: 10,
        background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.12)',
        fontSize: 12, color: theme.text, textAlign: 'center',
      }}>
        Bu hızla <strong style={{ color: '#818cf8' }}>{daysToTarget} günde</strong> tüm bankayı tararsın
        {dailyRate >= 300 && <span style={{ color: '#34d399' }}> — Ankara hedefi için harika bir tempo!</span>}
        {dailyRate < 100 && <span style={{ color: '#f87171' }}> — tempoyu artırman gerekebilir.</span>}
      </div>
    </motion.div>
  );
}
