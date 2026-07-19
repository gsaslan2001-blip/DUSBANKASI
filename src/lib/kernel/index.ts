/**
 * Stats Kernel — snapshot store + Worker köprüsü (Faz 2)
 *
 * Kullanım:
 *   recomputeKernel(input)  → hesabı Worker'a atar (yoksa senkron fallback)
 *   useKernel()             → useSyncExternalStore ile güncel snapshot (null = henüz yok)
 *
 * Sıra garantisi: her istek artan `seq` taşır; yalnızca en son isteğin cevabı
 * snapshot'a yazılır (eski cevap geç gelirse atılır).
 */
import { useSyncExternalStore } from 'react';
import { computeKernelSnapshot, type KernelInput, type KernelSnapshot } from './core';

export type { KernelInput, KernelSnapshot, ParetoItem, Vital, VitalStatus } from './core';

let snapshot: KernelSnapshot | null = null;
const listeners = new Set<() => void>();

function notify(): void {
  listeners.forEach(l => l());
}

const subscribe = (cb: () => void): (() => void) => {
  listeners.add(cb);
  return () => { listeners.delete(cb); };
};

const getSnapshot = (): KernelSnapshot | null => snapshot;

// ─── Worker köprüsü ──────────────────────────────────────────────────────────

let worker: Worker | null = null;
let workerFailed = false;
let seq = 0;

function ensureWorker(): Worker | null {
  if (workerFailed) return null;
  if (worker) return worker;
  try {
    // Vite worker sözdizimi — ayrı chunk olarak derlenir, saf import zinciri
    worker = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
    worker.onmessage = (e: MessageEvent<{ seq: number; snapshot: KernelSnapshot }>) => {
      if (e.data.seq !== seq) return; // bayat cevap — at
      snapshot = e.data.snapshot;
      notify();
    };
    worker.onerror = () => {
      // Worker koptu — kalıcı senkron fallback'e geç
      workerFailed = true;
      try { worker?.terminate(); } catch { /* no-op */ }
      worker = null;
    };
    return worker;
  } catch {
    workerFailed = true; // jsdom/vitest veya CSP engeli — senkron fallback
    return null;
  }
}

/**
 * Kernel'i yeniden hesaplat. Worker varsa asenkron (ana thread serbest),
 * yoksa senkron fallback. Girdi structured-clone ile kopyalanır — çağıran
 * tarafın referansları mutasyondan etkilenmez.
 */
export function recomputeKernel(input: KernelInput): void {
  const mySeq = ++seq;
  const w = ensureWorker();
  if (w) {
    w.postMessage({ seq: mySeq, input });
    return;
  }
  const snap = computeKernelSnapshot(input);
  if (mySeq !== seq) return;
  snapshot = snap;
  notify();
}

/** Güncel kernel snapshot'ı — henüz hesap yoksa null. */
export function useKernel(): KernelSnapshot | null {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

/** Test yardımcıları */
export function _resetKernelForTests(): void {
  snapshot = null;
  seq = 0;
}
