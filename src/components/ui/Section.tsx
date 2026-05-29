import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  headerClassName?: string;
}

export function Section({
  children,
  title,
  subtitle,
  className = '',
  headerClassName = '',
}: SectionProps) {
  return (
    <section className={`flex flex-col gap-3 ${className}`}>
      {(title || subtitle) && (
        <div className={`mb-1 ${headerClassName}`}>
          {title && (
            <h2 className="text-lg font-black tracking-tight text-[#ececf1]">{title}</h2>
          )}
          {subtitle && (
            <p className="text-[#8b8b98] text-[13px] mt-1">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
