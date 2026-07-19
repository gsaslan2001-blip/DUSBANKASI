import React from 'react';

type GlassVariant = 'default' | 'heavy' | 'subtle' | 'elevated';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
  variant?: GlassVariant;
}

const variantStyles: Record<GlassVariant, string> = {
  default:
    'bg-[color:var(--color-surface-1)]/60 backdrop-blur-2xl border border-[color:var(--color-border-dim)] rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(255,255,255,0.02),0_12px_40px_rgba(0,0,0,0.6)]',
  heavy:
    'bg-[color:var(--color-surface-1)]/40 backdrop-blur-3xl border border-[color:var(--color-border-subtle)] rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(255,255,255,0.03)]',
  subtle:
    'bg-[color:var(--color-surface-1)]/30 backdrop-blur-md border border-[color:var(--color-border-dim)] rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.01)]',
  elevated:
    'bg-[color:var(--color-surface-2)]/80 backdrop-blur-2xl border border-[color:var(--color-border-strong)] rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_0_1px_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.8)]',
};

export function GlassPanel({ children, className = '', as = 'div', variant = 'default' }: GlassPanelProps) {
  const Component = as;
  return (
    <Component className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
}
