/**
 * Collapsible Section — Başlığa tıklayınca içeriği açıp kapatan bölüm.
 * Deep-dive grafik kategorileri için kullanılır.
 */
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';
import { useState, type ReactNode } from 'react';
import type { Theme } from '../../theme';

type Props = {
  title: string;
  summary?: string;
  defaultOpen?: boolean;
  theme: Theme;
  children: ReactNode;
};

export default function CollapsibleSection({ title, summary, defaultOpen = false, theme, children }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`${theme.card} rounded-xl overflow-hidden`}>
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between p-5 sm:p-6 hover:bg-white/[0.02] transition-colors text-left"
      >
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-sm font-bold">{title}</span>
          {summary && <span className={`${theme.subtext} text-[10px] truncate`}>{summary}</span>}
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[color:var(--color-text-tertiary)] shrink-0 ml-3"
        >
          <CaretDown size={16} weight="bold" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
