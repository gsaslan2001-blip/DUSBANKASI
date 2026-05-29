import React from 'react';
import { GlassPanel } from './GlassPanel';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: { label: string; onClick: () => void };
  className?: string;
}

export function EmptyState({ icon, title, description, action, className = '' }: EmptyStateProps) {
  return (
    <GlassPanel variant="subtle" className={`p-10 sm:p-12 text-center anim-slide-up ${className}`}>
      {/* Animasyonlu floating geometric shapes (Stitch empty state) */}
      <div className="relative mb-6 inline-flex items-center justify-center w-24 h-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-18 h-18 rounded-full border border-indigo-500/20 animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute w-22 h-22 rounded-full border border-indigo-500/10 animate-[pulse_4s_ease-in-out_infinite_0.7s]" />
        </div>
        <div className="absolute top-1 left-3 w-3 h-3 rounded-full bg-indigo-500/40 blur-sm animate-float" />
        <div className="absolute bottom-2 right-2 w-4 h-4 rotate-45 border border-indigo-500/30 animate-float" style={{ animationDelay: '-2s' }} />
        <div className="relative z-10 scale-110 opacity-70">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-[#ececf1] mb-2">{title}</h3>
      <p className="text-[#8b8b98] text-sm max-w-sm mx-auto leading-relaxed mb-6">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="btn btn-primary btn-md"
        >
          {action.label}
        </button>
      )}
    </GlassPanel>
  );
}
