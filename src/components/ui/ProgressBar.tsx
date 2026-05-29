
interface ProgressBarProps {
  value: number;
  max?: number;
  height?: number;
  className?: string;
  animate?: boolean;
  /** Otomatik renk geçişi: kırmızı → amber → yeşil (pct bazlı) */
  autoColor?: boolean;
  /** Shimmer sweep efekti */
  shimmer?: boolean;
}

function colorForPct(pct: number): string {
  if (pct >= 70) return '#34d399';
  if (pct >= 40) return '#fbbf24';
  return '#f87171';
}

export function ProgressBar({
  value,
  max = 100,
  height = 6,
  className = '',
  animate = true,
  autoColor = false,
  shimmer = false,
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const color = autoColor ? colorForPct(pct) : '#6f72f2';

  return (
    <div
      className={`rounded-full overflow-hidden relative ${className}`}
      style={{ height, background: 'rgba(255,255,255,0.04)' }}
    >
      <div
        className="h-full rounded-full transition-colors duration-500"
        style={{
          width: animate ? '0%' : `${pct}%`,
          background: autoColor
            ? `linear-gradient(90deg, ${colorForPct(Math.max(0, pct - 15))}, ${color})`
            : `linear-gradient(90deg, ${color}, ${color})`,
          boxShadow: `0 0 8px ${color}40`,
          transition: animate ? 'width 1s cubic-bezier(0.16, 1, 0.3, 1)' : undefined,
        }}
        ref={(el) => {
          if (el && animate) {
            requestAnimationFrame(() => { el.style.width = `${pct}%`; });
          }
        }}
      />
      {/* Shimmer sweep overlay */}
      {shimmer && (
        <div
          className="absolute inset-0 rounded-full pointer-events-none progress-shimmer"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)', backgroundSize: '200% 100%', animation: 'progress-shimmer 2s ease-in-out infinite' }}
        />
      )}
    </div>
  );
}
