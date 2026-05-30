import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@phosphor-icons/react';
import type { Theme } from '../../theme';

export type FluidNavProps = {
  theme: Theme;
  links: { label: string; icon?: React.ReactNode; onClick: () => void; active?: boolean }[];
};

const menuVars = {
  closed: {
    scaleY: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] as const },
  },
  open: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const linkVars = {
  closed: { opacity: 0, y: 16 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const LINE = 'absolute left-1/2 top-1/2 w-5 h-[1.5px] bg-current -translate-x-1/2 -translate-y-1/2 origin-center';

export function FluidNav({ theme, links }: FluidNavProps) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* Floating pill — mobile only */}
      <button
        onClick={toggle}
        className={`lg:hidden fixed top-3 left-1/2 -translate-x-1/2 z-[100] px-5 py-2.5 rounded-full backdrop-blur-2xl border border-white/[0.08] bg-[#0d0d12]/90 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.6)] flex items-center gap-2.5 active:scale-[0.97] transition-transform duration-200`}
        aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">MENÜ</span>
        <div className="relative w-5 h-5">
          <motion.span
            className={LINE}
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className={LINE}
            animate={open ? { rotate: -45, y: 0, opacity: 1 } : { rotate: 0, y: 3, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </button>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVars}
            className="lg:hidden fixed inset-0 z-[99] bg-black/85 backdrop-blur-3xl flex flex-col items-center justify-center gap-3 px-6 origin-top"
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.12] transition-all"
            >
              <X size={18} weight="thin" />
            </button>

            <div className="flex flex-col items-center gap-1 w-full max-w-xs">
              {links.map((link, i) => (
                <motion.button
                  key={link.label}
                  custom={i}
                  variants={linkVars}
                  onClick={() => { link.onClick(); close(); }}
                  className={`w-full px-6 py-4 rounded-2xl text-left font-bold text-sm transition-all duration-300 flex items-center gap-3 ${
                    link.active
                      ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 shadow-[0_0_16px_rgba(111,114,242,0.1)]'
                      : `${theme.subtext} hover:bg-white/[0.06] hover:text-white border border-transparent`
                  }`}
                >
                  {link.icon && <span className="shrink-0">{link.icon}</span>}
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
