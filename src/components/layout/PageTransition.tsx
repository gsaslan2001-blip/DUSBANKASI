import { motion, AnimatePresence } from 'framer-motion';
import { slideUp } from '../../lib/motion';

interface PageTransitionProps {
  children: React.ReactNode;
  /** Unique key triggers re-animation on view change */
  pageKey: string;
}

/**
 * Wraps each top-level view with a consistent slide-up entrance animation.
 * Usage: <PageTransition pageKey={currentView}>{children}</PageTransition>
 */
export function PageTransition({ children, pageKey }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        variants={slideUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex-1 flex flex-col min-h-0"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
