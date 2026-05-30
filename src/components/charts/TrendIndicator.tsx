/**
 * KPI Trend Göstergesi — Yön oku + delta yüzdesi.
 * Usage: <TrendIndicator current={240} previous={200} period="7G" format="number" />
 */
import { CaretUp, CaretDown, Minus } from '@phosphor-icons/react';

type Props = {
  current: number;
  previous: number;
  period?: string;
  format?: 'number' | 'percent' | 'days';
};

export default function TrendIndicator({ current, previous, period = '7G', format = 'number' }: Props) {
  const delta = current - previous;
  const deltaPct = previous > 0 ? Math.round((delta / previous) * 100) : (current > 0 ? 100 : 0);
  const isUp = delta > 0;
  const isFlat = delta === 0;
  const color = isFlat ? 'text-[color:var(--color-text-tertiary)]' : isUp ? 'text-emerald-400' : 'text-red-400';

  const fmtVal = (v: number) => {
    if (format === 'percent') return `%${v}`;
    if (format === 'days') return `${v} G`;
    return v.toLocaleString('tr-TR');
  };

  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-bold ${color}`}>
      {isFlat ? <Minus size={12} weight="bold" /> : isUp ? <CaretUp size={12} weight="bold" /> : <CaretDown size={12} weight="bold" />}
      <span>{fmtVal(Math.abs(delta))}</span>
      {!isFlat && <span className="opacity-70">({deltaPct}%)</span>}
      {period && <span className="text-[10px] opacity-50 ml-0.5">{period}</span>}
    </span>
  );
}
