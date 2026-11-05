/**
 * KPI Alert Banner — Eşik ihlali uyarılarını kompakt bir panelde gösterir.
 * Seviyeler: critical (kırmızı), warning (sarı), success (yeşil).
 *
 * v2: Tek kart içinde, seviye-sayacı başlığı + responsive 2-kolon grid.
 * Eskiden 4 ayrı tam-genişlik satır above-fold'u domine ediyordu; artık
 * yarı dikey alan kaplıyor ve gerçek bir dashboard uyarı paneli gibi okunuyor.
 */
import { X, Warning, CheckCircle, WarningCircle, Bell, Info, ArrowUpRight } from '@phosphor-icons/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { KpiAlert, KpiAlertLevel } from '../../lib/stats';
import { Button } from '../ui/Button';

const ICON_MAP: Record<KpiAlertLevel, typeof Warning> = {
  critical: WarningCircle,
  warning: Warning,
  success: CheckCircle,
  info: Info,
};

const COLOR_MAP: Record<KpiAlertLevel, string> = {
  critical: 'border-l-red-400 bg-red-400/[0.06] text-red-300',
  warning: 'border-l-amber-400 bg-amber-400/[0.06] text-amber-300',
  success: 'border-l-emerald-400 bg-emerald-400/[0.06] text-emerald-300',
  info: 'border-l-indigo-400 bg-indigo-400/[0.06] text-indigo-300',
};

const DOT_MAP: Record<KpiAlertLevel, string> = {
  critical: 'text-red-400',
  warning: 'text-amber-400',
  success: 'text-emerald-400',
  info: 'text-indigo-400',
};

const LEVEL_LABEL: Record<KpiAlertLevel, string> = {
  critical: 'kritik',
  warning: 'uyarı',
  success: 'iyi',
  info: 'bilgi',
};

type Props = {
  alerts: KpiAlert[];
  onStartLesson?: (lesson: string, count?: number) => void;
};

export default function KpiAlertBanner({ alerts, onStartLesson }: Props) {
  const [dismissed, setDismissed] = useState<Set<number>>(new Set());

  const visible = alerts.filter((_, i) => !dismissed.has(i));
  if (visible.length === 0) return null;

  // Seviye sayaçları (görünür olanlar üzerinden)
  const counts = visible.reduce<Record<KpiAlertLevel, number>>(
    (acc, a) => { acc[a.level]++; return acc; },
    { critical: 0, warning: 0, success: 0, info: 0 } as Record<KpiAlertLevel, number>,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#ffffff]/[0.02] border border-white/[0.04] rounded-2xl p-3 sm:p-4
        shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.35)]"
    >
      {/* Başlık — toplam + seviye dağılımı */}
      <div className="flex items-center justify-between mb-2.5 px-1">
        <div className="flex items-center gap-2">
          <Bell size={14} weight="duotone" className="text-[color:var(--color-text-secondary)]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[color:var(--color-text-secondary)]">
            Dikkat Gerektiren {visible.length} Sinyal
          </span>
        </div>
        <div className="flex items-center gap-2.5 text-[10px] font-bold">
          {(['critical', 'warning', 'success'] as KpiAlertLevel[]).map(lvl =>
            counts[lvl] > 0 ? (
              <span key={lvl} className={`inline-flex items-center gap-1 ${DOT_MAP[lvl]}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {counts[lvl]} {LEVEL_LABEL[lvl]}
              </span>
            ) : null,
          )}
        </div>
      </div>

      {/* Uyarı listesi — responsive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5">
        <AnimatePresence>
          {alerts.map((alert, i) => {
            if (dismissed.has(i)) return null;
            const Icon = ICON_MAP[alert.level];
            return (
              <motion.div
                key={`${alert.metric}-${i}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.18 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border-l-[3px] text-xs font-medium ${COLOR_MAP[alert.level]}`}
              >
                <Icon size={14} weight="bold" className="shrink-0" />
                <span className="flex-1 leading-snug">{alert.message}</span>
                {(() => {
                  const lesson = alert.lesson || (alert.metric.startsWith('lesson_') ? alert.metric.replace('lesson_cov_', '').replace('lesson_', '') : undefined);
                  const isCriticalOrWarning = alert.level === 'critical' || alert.level === 'warning';
                  if (lesson && onStartLesson && isCriticalOrWarning) {
                    return (
                      <Button
                        variant="unstyled"
                        size="sm"
                        onClick={() => onStartLesson(lesson, 20)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/10 hover:bg-white/20 text-current border border-white/20 transition-all shrink-0 ml-auto mr-1 cursor-pointer"
                        aria-label={`${lesson} dersini telafi et (20 soru)`}
                      >
                        <span>{alert.actionLabel || 'Bu Dersi Telafi Et (20 Soru)'}</span>
                        <ArrowUpRight size={12} weight="bold" />
                      </Button>
                    );
                  }
                  return null;
                })()}
                <Button
                  variant="unstyled"
                  onClick={() => setDismissed(prev => new Set(prev).add(i))}
                  className="opacity-40 hover:opacity-100 transition-opacity shrink-0"
                  aria-label="Uyarıyı kapat"
                >
                  <X size={12} weight="bold" />
                </Button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
