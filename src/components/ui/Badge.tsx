import React from 'react';

type BadgeVariant = 'default' | 'correct' | 'incorrect' | 'warning' | 'info' | 'purple' | 'gold';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  dot?: boolean;
  dotColor?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/[0.06] text-[#a1a1aa] border-white/[0.08]',
  correct: 'bg-[#34d399]/10 text-[#34d399] border-[#34d399]/20',
  incorrect: 'bg-[#f87171]/10 text-[#f87171] border-[#f87171]/20',
  warning: 'bg-[#fbbf24]/10 text-[#fbbf24] border-[#fbbf24]/20',
  info: 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/20',
  purple: 'bg-[#a78bfa]/10 text-[#a78bfa] border-[#a78bfa]/20',
  gold: 'bg-[#fcd34d]/10 text-[#fcd34d] border-[#fcd34d]/20',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-1.5 py-0.5 text-[9px] rounded-md gap-1',
  md: 'px-2 py-0.5 text-[10px] rounded-lg gap-1.5',
};

export function Badge({ children, variant = 'default', size = 'md', className = '', dot, dotColor }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-extrabold uppercase tracking-widest border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: dotColor ?? 'currentColor' }}
        />
      )}
      {children}
    </span>
  );
}
