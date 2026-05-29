/**
 * DUS Bankası — Timezone-aware Tarih Yardımcıları (date-fns)
 *
 * NEDEN: new Date().toISOString() UTC döner.
 * Türkiye UTC+3'te gece 00:00–03:00 arasında bu yöntem önceki günü verir.
 * Streak ve günlük deneme tarihi için yerel tarih şarttır.
 *
 * date-fns'in `format` ve `addDays` fonksiyonları yerel timezone'da çalışır,
 * UTC kayması yaşatmaz. İmzalar geriye dönük uyumludur.
 */

import { format as fnsFormat, addDays as fnsAddDays, parse as fnsParse } from 'date-fns';

const ISO_DAY = 'yyyy-MM-dd';

/** Bugünün YYYY-MM-DD tarihini kullanıcının yerel timezone'unda döner */
export function todayStr(): string {
  return fnsFormat(new Date(), ISO_DAY);
}

/** Verilen YYYY-MM-DD tarihine n gün ekler, yerel tarih döner */
export function addDays(dateStr: string, days: number): string {
  const date = fnsParse(dateStr, ISO_DAY, new Date());
  return fnsFormat(fnsAddDays(date, days), ISO_DAY);
}
