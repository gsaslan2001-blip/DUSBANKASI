/**
 * DUS Bankası — El yazımı mini store (Faz 2, zustand'ın yerine)
 *
 * React 19'un yerleşik useSyncExternalStore'u üzerine ~40 satırlık saf store.
 * "Global state kütüphanesi yasak" kuralına dönüş: dış bağımlılık sıfır.
 * API bilinçli olarak zustand-benzeri tutuldu (useStore(selector) + getState/setState)
 * ki mevcut callsite'lar tek satır değişiklikle göç etsin.
 */

import { useSyncExternalStore } from 'react';

type SetFn<T> = (partial: Partial<T> | ((prev: T) => Partial<T>)) => void;

export type UseStore<T> = {
  (): T;
  <U>(selector: (s: T) => U): U;
  getState: () => T;
  setState: SetFn<T>;
  subscribe: (cb: () => void) => () => void;
};

export function createStore<T extends object>(
  creator: (set: SetFn<T>, get: () => T) => T,
  /** Her state değişiminde çağrılır (persist vb. yan etkiler için). */
  onChange?: (state: T) => void,
): UseStore<T> {
  let state: T;
  const listeners = new Set<() => void>();

  const get = () => state;
  const set: SetFn<T> = (partial) => {
    const next = typeof partial === 'function' ? (partial as (prev: T) => Partial<T>)(state) : partial;
    state = { ...state, ...next };
    onChange?.(state);
    listeners.forEach(l => l());
  };

  state = creator(set, get);

  const subscribe = (cb: () => void) => {
    listeners.add(cb);
    return () => { listeners.delete(cb); };
  };

  function useStore(): T;
  function useStore<U>(selector: (s: T) => U): U;
  function useStore<U>(selector?: (s: T) => U) {
    // Selector state içindeki mevcut referansları dönmeli (yeni obje üretmemeli),
    // aksi halde useSyncExternalStore her render'da yeni snapshot görür.
    const getSnap = () => (selector ? selector(state) : state);
    return useSyncExternalStore(subscribe, getSnap, getSnap);
  }

  return Object.assign(useStore, { getState: get, setState: set, subscribe });
}
