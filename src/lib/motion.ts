import { useRef, useCallback, useEffect, useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

/**
 * Manyetik hover efekti — imleci element'e çeker.
 */
export function useMagneticHover(strength = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * strength);
      y.set((e.clientY - centerY) * strength);
    },
    [x, y, strength]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, springX, springY, handleMouseMove, handleMouseLeave };
}

/**
 * 3D tilt efekti — kartın perspektifli eğilmesi.
 */
export function useTilt(maxDeg = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rotateX.set(-y * maxDeg);
      rotateY.set(x * maxDeg);
    },
    [rotateX, rotateY, maxDeg]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return { ref, springRX, springRY, handleMouseMove, handleMouseLeave };
}

/**
 * Floating animasyon hook'u — element sürekli hafifçe yukarı-aşağı hareket eder.
 */
export function useFloat(amplitude = 4, period = 3000) {
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 50, damping: 10 });

  useEffect(() => {
    let frame: number;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const value = Math.sin((elapsed / period) * Math.PI * 2) * amplitude;
      y.set(value);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [y, amplitude, period]);

  return { springY };
}

/**
 * Paralaks scroll efekti.
 */
export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setOffset(scrolled * speed * 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
}

/**
 * Motion-safe variant helper — reduced-motion destekli.
 */
export function motionSafe(isActive: boolean) {
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  if (prefersReducedMotion) {
    return { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
  }

  return isActive
    ? {
        initial: { opacity: 0, y: 12, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -8, scale: 0.97 },
      }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };
}

/**
 * Stagger children animasyonu için container variant.
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

export const fadeInUpItem = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

// ── frontend-ui-dark-ts: Standardised design-system variants ──────────────

import type { Variants, Transition } from 'framer-motion';

const _spring: Transition = { type: 'spring', stiffness: 300, damping: 20 };
const _expo: Transition = { duration: 0.35, ease: [0.19, 1, 0.22, 1] };

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.15 } },
};

export const slideUp: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0,  transition: _expo },
  exit:    { opacity: 0, y: 12, transition: { duration: 0.2, ease: 'easeIn' } },
};

export const slideDown: Variants = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0,   transition: _expo },
  exit:    { opacity: 0, y: -8,  transition: { duration: 0.15 } },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1,    transition: _spring },
  exit:    { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
};

export const cardEntrance: Variants = {
  hidden:  { opacity: 0, scale: 0.96, y: 12 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: _spring },
};

export const staggerParent: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0 },
  },
};

export const staggerChild: Variants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] } },
};

export const overlayFade: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.18 } },
};

export const modalPop: Variants = {
  initial: { opacity: 0, scale: 0.94, y: 8 },
  animate: { opacity: 1, scale: 1,    y: 0, transition: _spring },
  exit:    { opacity: 0, scale: 0.96, y: 4, transition: { duration: 0.15 } },
};

export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap:   { scale: 0.97 },
  transition: { type: 'spring', stiffness: 400, damping: 17 },
} as const;
