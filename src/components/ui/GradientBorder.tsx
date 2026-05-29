import React from 'react';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
  rounded?: string;
}

export function GradientBorder({
  children,
  className = '',
  from = 'rgba(111,114,242,0.3)',
  to = 'rgba(72,76,194,0.1)',
  rounded = 'rounded-2xl',
}: GradientBorderProps) {
  return (
    <div
      className={`p-[1px] ${rounded} ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div className={`bg-[#08080a] ${rounded} overflow-hidden`}>
        {children}
      </div>
    </div>
  );
}
