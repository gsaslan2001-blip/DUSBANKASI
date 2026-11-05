/**
 * DUS Bankası — View Registry (Faz 1)
 *
 * App.tsx'teki view zincirinin bildirimsel politika katmanı. Her AppState için:
 *   - transition: kök AnimatePresence'ta kullanılacak geçiş preset'i (lib/motion.ts → viewTransitions)
 *   - hudMode:    Glass Cockpit HUD davranışı
 *       'full'    → VitalsStrip görünür
 *       'compact' → VitalsStrip daraltılmış (yalnız kritik alarm)
 *       'sterile' → HUD tamamen gizli (sterile cockpit kuralı: soru çözerken dikkat korunur)
 *   - title:      görünür başlık / analytics etiketi
 *
 * NOT: Bileşenlerin kendisi App.tsx'te kalır (closure-prop mimarisi bilinçli korunur);
 * registry yalnızca politika taşır. Veri yükleme davranışıyla İLGİSİ YOKTUR.
 */

import type { AppState } from '../types/app';

export type ViewTransition = 'slide' | 'fade' | 'scale';
export type HudMode = 'full' | 'compact' | 'sterile';

export type ViewConfig = {
  title: string;
  transition: ViewTransition;
  hudMode: HudMode;
};

export const VIEW_REGISTRY: Record<AppState, ViewConfig> = {
  'select-lesson':          { title: 'Ana Menü',            transition: 'slide', hudMode: 'full' },
  'select-unit':            { title: 'Ünite Seçimi',        transition: 'slide', hudMode: 'compact' },
  'select-unit-amount':     { title: 'Soru Sayısı',         transition: 'scale', hudMode: 'compact' },
  'quiz':                   { title: 'Soru Çözümü',         transition: 'scale', hudMode: 'sterile' },
  'result':                 { title: 'Sonuç',               transition: 'scale', hudMode: 'compact' },
  'import':                 { title: 'İçe Aktar',           transition: 'fade',  hudMode: 'sterile' },
  'add-question':           { title: 'Soru Ekle',           transition: 'fade',  hudMode: 'sterile' },
  'select-deneme':          { title: 'Deneme Kurulumu',     transition: 'slide', hudMode: 'compact' },
  'select-deneme-amount':   { title: 'Soru Sayısı',         transition: 'slide', hudMode: 'compact' },
  'select-favorites':       { title: 'Favoriler',           transition: 'slide', hudMode: 'compact' },
  'weak-questions':         { title: 'Zayıf Halka',         transition: 'slide', hudMode: 'compact' },
  'analytics':              { title: 'İstatistikler',       transition: 'fade',  hudMode: 'full' },
  'simulation-setup':       { title: 'Simülasyon Kurulumu', transition: 'scale', hudMode: 'compact' },
  'simulation-result':      { title: 'Simülasyon Sonucu',   transition: 'scale', hudMode: 'compact' },
  'error-analysis':         { title: 'Hata Analizi',        transition: 'fade',  hudMode: 'full' },
  'smart-study':            { title: 'Akıllı Çalışma',      transition: 'scale', hudMode: 'sterile' },
  'daily-plan':             { title: 'Günlük Plan',         transition: 'slide', hudMode: 'full' },
  'source-books':           { title: 'Kaynak Kitaplar',     transition: 'fade',  hudMode: 'compact' },
  'select-cikmis':          { title: 'Çıkmış Sorular',      transition: 'slide', hudMode: 'compact' },
};

export function getViewConfig(state: AppState): ViewConfig {
  return VIEW_REGISTRY[state] ?? { title: '', transition: 'fade', hudMode: 'compact' };
}
