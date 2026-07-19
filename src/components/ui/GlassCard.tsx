import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: 'lift' | 'glow' | 'both';
  accent?: string;
  as?: 'div' | 'button';
}

export function GlassCard({
  children,
  className = '',
  onClick,
  hover = 'both',
  accent,
  as = 'div',
}: GlassCardProps) {
  const Component = as;

  const base =
    'bg-[color:var(--color-surface-1)]/60 backdrop-blur-2xl border border-[color:var(--color-border-dim)] rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden';
  const sweepClass = (hover === 'glow' || hover === 'both') ? 'light-sweep' : '';

  const hoverLift =
    hover === 'lift' || hover === 'both'
      ? 'hover:-translate-y-1 hover:bg-[color:var(--color-surface-2)]/80 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform cursor-pointer'
      : '';

  const hoverGlow =
    hover === 'glow' || hover === 'both'
      ? 'hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_40px_rgba(111,114,242,0.12)] transition-shadow duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]'
      : '';

  const activeClass = onClick ? 'active:scale-[0.98] transition-transform duration-150' : '';

  const accentBorder = accent ? `border-l-2 ${accent}` : '';

  return (
    <Component
      className={`${base} ${hoverLift} ${hoverGlow} ${activeClass} ${accentBorder} ${sweepClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
