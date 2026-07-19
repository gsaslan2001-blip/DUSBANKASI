/**
 * DUS Bankası — Müfredat Tek Kaynağı (Faz 4)
 *
 * Ders sırası ve DUS ağırlıkları önceden üç ayrı yerde yaşıyordu:
 * `StatisticsView.tsx`'in `LESSON_ORDER` (renk için), `App.tsx`'in ikon eşleme
 * if/else zinciri ve `overview.ts`'in `DUS_WEIGHTS` sabiti. Bu dosya sıra +
 * ağırlık için tek kaynaktır. İkon eşlemesi kasıtlı olarak burada DEĞİL —
 * `curriculumIcons.tsx`'te, çünkü bu dosya `overview.ts` üzerinden Web Worker
 * kernel'ine (`lib/kernel/*`) import edilir ve worker bundle'ına React/Phosphor
 * sızmamalı (kernel "DOM/localStorage erişimi İÇERMEZ" kuralı, overview.ts başlığına bkz).
 *
 * Sıra: temel bilimler → klinik dersler (plan: UIUX_REDESIGN_IMPLEMENTATION_PLAN §Faz4).
 * Bu 14 isim, veritabanındaki gerçek `question.lesson` değerleridir (kısa Türkçe adlar) —
 * ÖSYM'nin uzun resmi isimleri değil. Ağırlıklar fuzzy-match ile bu kısa adlara eşlenir.
 */

export const CURRICULUM_ORDER: readonly string[] = [
  // Temel bilimler
  'Histoloji', 'Fizyoloji', 'Biyokimya', 'Mikrobiyoloji', 'Patoloji', 'Farmakoloji',
  // Klinik dersler
  'Protez', 'Restoratif', 'Endodonti', 'Ortodonti', 'Periodontoloji', 'Cerrahi', 'Pedodonti', 'Radyoloji',
];

/**
 * DUS ders ağırlıkları (2025 DUS dağılımı yaklaşık değerleri).
 * `overview.ts`'in eski private `DUS_WEIGHTS` sabitiyle birebir aynı — taşıma sırasında
 * `computeDusWeightedAccuracy`'nin davranışı değişmedi, sadece kaynağı burası oldu.
 */
export const DUS_LESSON_WEIGHTS: Record<string, number> = {
  'Endodonti': 0.0442, 'Protez': 0.0442, 'Ağız Diş Çene Cerrahisi': 0.0442,
  'Ortodonti': 0.0442, 'Periodontoloji': 0.0442, 'Restoratif Diş Tedavisi': 0.0442,
  'Pedodonti': 0.0442, 'Oral Diagnoz ve Radyoloji': 0.0442,
  'Temel Tıp Bilimleri': 0.0735, 'Klinik Bilimler': 0.0735,
  'Protetik Diş Tedavisi': 0.0442, 'Diş Hastalıkları ve Tedavisi': 0.0442,
  'Patoloji': 0.05, 'Farmakoloji': 0.05, 'Mikrobiyoloji': 0.04,
  'Anatomi': 0.05, 'Fizyoloji': 0.04, 'Biyokimya': 0.04, 'Histoloji Embriyoloji': 0.04,
};

const DEFAULT_WEIGHT = 0.03;

/** Bir dersin DUS ağırlığını fuzzy match ile bulur (normalize edilmiş isim). */
export function getCurriculumWeight(lesson: string): number {
  const key = Object.keys(DUS_LESSON_WEIGHTS).find(
    k => k.toLowerCase() === lesson.toLowerCase() ||
         lesson.toLowerCase().includes(k.toLowerCase()) ||
         k.toLowerCase().includes(lesson.toLowerCase())
  );
  return key ? DUS_LESSON_WEIGHTS[key] : DEFAULT_WEIGHT;
}

/** Dersin müfredat sırasındaki index'i; listede yoksa -1 (çağıran sona/alfabetik düşürür). */
export function getCurriculumOrderIndex(lesson: string): number {
  return CURRICULUM_ORDER.findIndex(l => l.toLowerCase() === lesson.toLowerCase());
}

/**
 * Ders adlarını müfredat sırasına göre karşılaştırır (temel bilimler → klinik).
 * Listede olmayan dersler sona, aralarında alfabetik sıralanır.
 */
export function compareByCurriculumOrder(a: string, b: string): number {
  const ia = getCurriculumOrderIndex(a);
  const ib = getCurriculumOrderIndex(b);
  if (ia === -1 && ib === -1) return a.localeCompare(b, 'tr');
  if (ia === -1) return 1;
  if (ib === -1) return -1;
  return ia - ib;
}
