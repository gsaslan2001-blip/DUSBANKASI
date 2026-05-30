/**
 * KPI Alert Banner — Eşik ihlali uyarılarını renkli banner'larda gösterir.
 * Seviyeler: critical (kırmızı), warning (sarı), success (yeşil).
 */
import { X, Warning, CheckCircle, WarningCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { KpiAlert, KpiAlertLevel } from '../../lib/stats';

const ICON_MAP: Record<KpiAlertLevel, typeof Warning> = {
  critical: WarningCircle,
  warning: Warning,
  success: CheckCircle,
};

const COLOR_MAP: Record<KpiAlertLevel, string> = {
  critical: 'border-l-red-400 bg-red-400/5 text-red-300',
  warning: 'border-l-amber-400 bg-amber-400/5 text-amber-300',
  success: 'border-l-emerald-400 bg-emerald-400/5 text-emerald-300',
};

type Props = {
  alerts: KpiAlert[];
};

export default function KpiAlertBanner({ alerts }: Props) {
  const [dismissed, setDismissed] = useState<Set<number>>(new Set());

  if (alerts.length === 0) return null;

  return (
    <div className="flex flex-col gap-1.5">
      <AnimatePresence>
        {alerts.map((alert, i) => {
          if (dismissed.has(i)) return null;
          const Icon = ICON_MAP[alert.level];
          return (
            <motion.div
              key={`${alert.metric}-${i}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border-l-[3px] text-xs font-medium ${COLOR_MAP[alert.level]}`}
            >
              <Icon size={14} weight="bold" className="shrink-0" />
              <span className="flex-1">{alert.message}</span>
              <button
                type="button"
                onClick={() => setDismissed(prev => new Set(prev).add(i))}
                className="opacity-50 hover:opacity-100 transition-opacity shrink-0"
              >
                <X size={12} weight="bold" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
