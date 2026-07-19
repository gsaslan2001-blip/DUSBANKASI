/**
 * DUS Bankası — global uygulama store'u (el yazımı, zustand'sız — Faz 2)
 *
 * Theme + UserSettings + hedefler + istatistik filtreleri için tek kaynaklı doğruluk.
 * localStorage'a otomatik persist edilir. Persist formatı, eski zustand-persist
 * çıktısıyla ({ state: {...}, version: 0 }) bilinçli olarak AYNI tutulmuştur —
 * mevcut kullanıcıların kayıtlı hedefleri kaybolmaz.
 */
import { createStore } from '../lib/createStore';
import type { UserSettings, UserGoals } from '../types/app';

export type ThemeName = UserSettings['theme']; // 'dark' | 'oled' | 'light'

const STORAGE_KEY = 'dus_app_store';

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

type PersistedSlice = { settings: UserSettings; goals: UserGoals; statsFilters: StatsFilters };

function loadPersisted(): PersistedSlice {
  const fallback: PersistedSlice = { settings: DEFAULT_SETTINGS, goals: DEFAULT_GOALS, statsFilters: DEFAULT_FILTERS };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    // zustand-persist formatı: { state: {...}, version } — düz obje de kabul edilir
    const s = (parsed && typeof parsed === 'object' && 'state' in parsed) ? parsed.state : parsed;
    return {
      settings: { ...DEFAULT_SETTINGS, ...(s?.settings ?? {}) },
      goals: { ...DEFAULT_GOALS, ...(s?.goals ?? {}) },
      statsFilters: { ...DEFAULT_FILTERS, ...(s?.statsFilters ?? {}) },
    };
  } catch {
    return fallback;
  }
}

function persist(state: AppStore): void {
  try {
    const slice: PersistedSlice = {
      settings: state.settings,
      goals: state.goals,
      statsFilters: state.statsFilters,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ state: slice, version: 0 }));
  } catch {
    // Kota/erişim hatası — sessizce geç (cloud'daki kopya ve dus_settings ayrı)
  }
}

const initial = loadPersisted();

export const useAppStore = createStore<AppStore>(
  (set) => ({
    settings: initial.settings,
    setSettings: (s) =>
      set((state) => ({
        settings: typeof s === 'function' ? (s as (p: UserSettings) => UserSettings)(state.settings) : s,
      })),
    setTheme: (t) => set((state) => ({ settings: { ...state.settings, theme: t } })),
    // v6: Stats slice
    goals: initial.goals,
    setGoals: (g) =>
      set((state) => ({
        goals: typeof g === 'function' ? (g as (p: UserGoals) => UserGoals)(state.goals) : g,
      })),
    statsFilters: initial.statsFilters,
    setStatsFilters: (f) =>
      set((state) => ({
        statsFilters: typeof f === 'function' ? (f as (p: StatsFilters) => StatsFilters)(state.statsFilters) : f,
      })),
  }),
  persist,
);

/** Typed selectors */
export const useTheme = (): ThemeName => useAppStore((s) => s.settings.theme);
export const useSettings = (): UserSettings => useAppStore((s) => s.settings);
export const useGoals = (): UserGoals => useAppStore((s) => s.goals);
export const useStatsFilters = (): StatsFilters => useAppStore((s) => s.statsFilters);
