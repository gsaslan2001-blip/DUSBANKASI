
interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
}

const variantDefaults: Record<string, { base: string; w: string; h: string }> = {
  text: { base: 'rounded-md', w: '100%', h: '14px' },
  circular: { base: 'rounded-full', w: '40px', h: '40px' },
  rectangular: { base: 'rounded-xl', w: '100%', h: '120px' },
  card: { base: 'rounded-2xl', w: '100%', h: '180px' },
};

export function Skeleton({ className = '', variant = 'text', width, height }: SkeletonProps) {
  const def = variantDefaults[variant] ?? variantDefaults.text;
  const w = width ?? def.w;
  const h = height ?? def.h;

  return (
    <div
      className={`bg-[color:var(--color-surface-3)] overflow-hidden relative ${def.base} ${className}`}
      style={{ width: w, height: h }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.04) 50%, transparent 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s infinite',
        }}
      />
    </div>
  );
}
