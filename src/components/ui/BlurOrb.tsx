
interface BlurOrbProps {
  color?: string;
  size?: number;
  position?: 'top-right' | 'bottom-left' | 'bottom-right' | 'top-left' | 'center';
  opacity?: number;
  className?: string;
}

const positionStyles: Record<string, string> = {
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
  'top-left': 'top-0 left-0',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
};

export function BlurOrb({
  color = '#6f72f2',
  size = 160,
  position = 'top-right',
  opacity = 0.07,
  className = '',
}: BlurOrbProps) {
  return (
    <div
      className={`absolute ${positionStyles[position]} pointer-events-none rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(80px)`,
        opacity,
      }}
    />
  );
}
