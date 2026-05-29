import React, { useEffect, useState } from 'react';

interface StatCardProps {
  label: string;
  value: React.ReactNode;
  sub?: React.ReactNode;
  icon: React.ReactNode;
  accent: string;
  className?: string;
}

export function StatCard({ label, value, sub, icon, accent, className = '' }: StatCardProps) {
  const accentBg = accent.replace('border-', 'bg-').replace('/50', '').replace('/40', '');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(!document.documentElement.classList.contains('light'));
  }, []);

  return (
    <div
      className={`bg-[#ffffff]/[0.02] border border-white/[0.03] p-5 sm:p-6 rounded-3xl relative overflow-hidden
        shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_40px_rgba(0,0,0,0.4)]
        hover:-translate-y-1 hover:bg-[#ffffff]/[0.04]
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group stagger-item ${className}`}
    >
      <div className={`absolute top-0 left-4 right-4 h-px ${accentBg} opacity-40`} />
      <div className="flex items-start justify-between mb-3">
        <span className="text-[#8b8b98] text-[10px] font-bold uppercase tracking-widest">{label}</span>
        <div className="p-2 rounded-xl bg-white/[0.02] group-hover:scale-110 group-hover:bg-white/[0.06] transition-all duration-500">
          {icon}
        </div>
      </div>
      <div className={`text-3xl sm:text-4xl font-black leading-none tracking-tight ${isDark ? 'drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]' : ''}`}>
        {value}
      </div>
      {sub && (
        <div className="text-[#8b8b98] text-[11px] mt-1.5 font-medium">{sub}</div>
      )}
    </div>
  );
}
