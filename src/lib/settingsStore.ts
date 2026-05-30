import { create } from 'zustand';
import type { UserSettings } from '../types/app';

const STORAGE_KEY = 'dus_settings';
const DEFAULTS: UserSettings = { theme: 'dark', fontSize: 'normal' };

function loadInitial(): UserSettings {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...DEFAULTS, ...JSON.parse(saved) } : DEFAULTS;
  } catch {
    return DEFAULTS;
  }
}

function persist(settings: UserSettings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // localStorage erişilemiyor (gizli mod vb.) — sessizce geç
  }
  if (typeof document !== 'undefined') {
    document.documentElement.className = settings.theme;
  }
}

interface SettingsState {
  settings: UserSettings;
  setSettings: (next: UserSettings) => void;
}

const initial = loadInitial();
// Tema sınıfını ilk yüklemede uygula (eski App.tsx mount effect'inin yerine).
persist(initial);

/** Global kullanıcı ayarları (tema + font boyutu) — localStorage'a persist edilir. */
export const useSettingsStore = create<SettingsState>(set => ({
  settings: initial,
  setSettings: next => {
    persist(next);
    set({ settings: next });
  },
}));
