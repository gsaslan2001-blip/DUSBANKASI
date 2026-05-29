export type RechartsWeeklyDatum = {
  date: string;
  correct: number;
  incorrect: number;
};

export function RechartsWeeklyBar({ data, height = 200 }: { data: RechartsWeeklyDatum[]; height?: number }) {
  if (!data.length) return null;

  const maxVal = Math.max(...data.map(d => d.correct + d.incorrect), 1);
  const barGap = 4;
  const paddingX = 32;
  const paddingY = 16;
  // chartWidth: percentage-based via viewBox (100)
  const chartHeight = height - paddingY * 2;
  const barWidth = Math.max(4, (100 - paddingX - data.length * barGap) / data.length);

  const yTicks = [0, Math.round(maxVal / 2), maxVal];

  return (
    <svg
      viewBox={`0 0 ${data.length * (barWidth + barGap) + paddingX + 8} ${height}`}
      width="100%"
      height={height}
      style={{ overflow: 'visible' }}
    >
      {/* Y-axis ticks */}
      {yTicks.map(tick => {
        const y = paddingY + chartHeight - (tick / maxVal) * chartHeight;
        return (
          <g key={tick}>
            <line
              x1={paddingX - 4} y1={y}
              x2={data.length * (barWidth + barGap) + paddingX}
              y2={y}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth={1}
            />
            <text x={paddingX - 6} y={y + 4} textAnchor="end" fill="rgba(236,236,241,0.4)" fontSize={8}>
              {tick}
            </text>
          </g>
        );
      })}

      {/* Bars */}
      {data.map((d, i) => {
        const total = d.correct + d.incorrect;
        const correctH = (d.correct / maxVal) * chartHeight;
        const incorrectH = (d.incorrect / maxVal) * chartHeight;
        const x = paddingX + i * (barWidth + barGap);
        const label = d.date.slice(5);

        return (
          <g key={d.date}>
            {/* correct (bottom) */}
            <rect
              x={x} y={paddingY + chartHeight - correctH - incorrectH}
              width={barWidth} height={correctH}
              fill="#34d399"
            />
            {/* incorrect (top) */}
            <rect
              x={x} y={paddingY + chartHeight - incorrectH}
              width={barWidth} height={incorrectH}
              fill="#f87171"
              rx={incorrectH > 2 ? 2 : 0}
            />
            {/* X label */}
            <text
              x={x + barWidth / 2}
              y={paddingY + chartHeight + 12}
              textAnchor="middle"
              fill="rgba(236,236,241,0.4)"
              fontSize={8}
            >
              {label}
            </text>

            {/* Tooltip on hover via title */}
            {total > 0 && (
              <title>{`${d.date}: ${d.correct} doğru, ${d.incorrect} yanlış`}</title>
            )}
          </g>
        );
      })}
    </svg>
  );
}
