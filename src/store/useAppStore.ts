/**
 * DUS Bankası — zustand global store
 *
 * Theme + UserSettings için tek kaynaklı doğruluk. localStorage'a otomatik persist edilir.
 * Mevcut App.tsx state akışı bozulmadan; gelecekteki refactorlar için altyapı.
 */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { UserSettings } from '../types/app';

export type ThemeName = UserSettings['theme']; // 'dark' | 'oled' | 'light'

type AppStore = {
  settings: UserSettings;
  setSettings: (s: UserSettings | ((prev: UserSettings) => UserSettings)) => void;
  setTheme: (t: ThemeName) => void;
};

const DEFAULT_SETTINGS: UserSettings = { theme: 'dark', fontSize: 'normal' };

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      settings: DEFAULT_SETTINGS,
      setSettings: (s) =>
        set((state) => ({
          settings: typeof s === 'function' ? (s as (p: UserSettings) => UserSettings)(state.settings) : s,
        })),
      setTheme: (t) => set((state) => ({ settings: { ...state.settings, theme: t } })),
    }),
    {
      name: 'dus_app_store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ settings: state.settings }),
    },
  ),
);

/** Typed selectors */
export const useTheme = (): ThemeName => useAppStore((s) => s.settings.theme);
export const useSettings = (): UserSettings => useAppStore((s) => s.settings);
