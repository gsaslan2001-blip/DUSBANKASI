/**
 * DUS Bankası — zustand global store
 *
 * Theme + UserSettings için tek kaynaklı doğruluk. localStorage'a otomatik persist edilir.
 * Mevcut App.tsx state akışı bozulmadan; gelecekteki refactorlar için altyapı.
 */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { UserSettings, UserGoals } from '../types/app';

export type ThemeName = UserSettings['theme']; // 'dark' | 'oled' | 'light'

// v6: Varsayılan hedefler
const DEFAULT_GOALS: UserGoals = {
  dailyQuestions: 200,
  weeklyQuestions: 1400,
  targetAccuracy: 80,
  targetCoverage: 90,
  targetMastered: 5000,
  targetStreak: 150,
  targetDusNet: 95,
  customGoals: [],
};

type StatsFilters = {
  dateRange: '7d' | '14d' | '30d' | '90d' | 'all';
  selectedLessons: string[];
};

type AppStore = {
  settings: UserSettings;
  setSettings: (s: UserSettings | ((prev: UserSettings) => UserSettings)) => void;
  setTheme: (t: ThemeName) => void;
  // v6: Stats slice
  goals: UserGoals;
  setGoals: (g: UserGoals | ((prev: UserGoals) => UserGoals)) => void;
  statsFilters: StatsFilters;
  setStatsFilters: (f: StatsFilters | ((prev: StatsFilters) => StatsFilters)) => void;
};

const DEFAULT_SETTINGS: UserSettings = { theme: 'dark', fontSize: 'normal' };
const DEFAULT_FILTERS: StatsFilters = { dateRange: '30d', selectedLessons: [] };

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      settings: DEFAULT_SETTINGS,
      setSettings: (s) =>
        set((state) => ({
          settings: typeof s === 'function' ? (s as (p: UserSettings) => UserSettings)(state.settings) : s,
        })),
      setTheme: (t) => set((state) => ({ settings: { ...state.settings, theme: t } })),
      // v6: Stats slice
      goals: DEFAULT_GOALS,
      setGoals: (g) =>
        set((state) => ({
          goals: typeof g === 'function' ? (g as (p: UserGoals) => UserGoals)(state.goals) : g,
        })),
      statsFilters: DEFAULT_FILTERS,
      setStatsFilters: (f) =>
        set((state) => ({
          statsFilters: typeof f === 'function' ? (f as (p: StatsFilters) => StatsFilters)(state.statsFilters) : f,
        })),
    }),
    {
      name: 'dus_app_store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ settings: state.settings, goals: state.goals, statsFilters: state.statsFilters }),
    },
  ),
);

/** Typed selectors */
export const useTheme = (): ThemeName => useAppStore((s) => s.settings.theme);
export const useSettings = (): UserSettings => useAppStore((s) => s.settings);
export const useGoals = (): UserGoals => useAppStore((s) => s.goals);
export const useStatsFilters = (): StatsFilters => useAppStore((s) => s.statsFilters);
