/**
 * Stats Kernel Web Worker'ı (Faz 2)
 *
 * Ana thread'i Framer Motion spring'lerine bırakmak için tüm türetilmiş
 * istatistik hesabı burada döner. Import zinciri SAFTIR — supabase/localStorage
 * bundle'a sızmaz (bkz. core.ts başlığı).
 */
import { computeKernelSnapshot, type KernelInput } from './core';

self.onmessage = (e: MessageEvent<{ seq: number; input: KernelInput }>) => {
  const { seq, input } = e.data;
  const snapshot = computeKernelSnapshot(input);
  (self as unknown as Worker).postMessage({ seq, snapshot });
};
