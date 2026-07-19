/**
 * DUS Bankası — Kapsamlı İstatistik Motoru (SAF ÇEKIRDEK)
 *
 * stats.ts'ten çıkarılmıştır (Stats Kernel v1): bu modül DOM / localStorage /
 * Supabase erişimi İÇERMEZ ve içeren hiçbir modülü runtime import ETMEZ.
 * Böylece Web Worker (kernel) içinde güvenle çalışır — worker bundle'ına
 * supabase-js sızmaz. Tüm girdiler parametre olarak gelir.
 *
 * stats.ts geriye dönük uyumluluk için bu modülü `export *` ile re-export eder;
 * mevcut `import { computeOverviewStats } from './stats'` callsite'ları bozulmaz.
 */

import type { Question } from '../data';
import type { StatsMap } from './stats';
// Faz 4: DUS ağırlıkları artık tek kaynak `config/curriculum.ts`'te — bu import
// worker-güvenli kalır (curriculum.ts saf veri, React/Supabase içermez).
import { DUS_LESSON_WEIGHTS as DUS_WEIGHTS } from '../config/curriculum';

// ─── Accuracy Bazlı Zorluk ───────────────────────────────────────────────────

/** Doğruluk oranını 1-10 arası statik zorluk puanına çevirir (düşük accuracy = yüksek zorluk). */
export function accuracyToDifficulty(corrects: number, attempts: number): number {
  if (attempts <= 0) return 5;
  const rate = corrects / attempts;
  return Math.min(10, Math.max(1, Math.round(10 - rate * 9)));
}

/** Zorluk puanından (1-10) etiket üretir (UI badge'leri için). */
export function difficultyLabel(d: number): 'easy' | 'medium' | 'hard' {
  if (d < 4) return 'easy';
  if (d < 7) return 'medium';
  return 'hard';
}

// ─── DUS Ders Ağırlıkları ────────────────────────────────────────────────────

function computeDusWeightedAccuracy(byLesson: LessonStat[]): number {
  let weightedSum = 0;
  let totalWeight = 0;
  for (const l of byLesson) {
    const key = Object.keys(DUS_WEIGHTS).find(
      k => k.toLowerCase() === l.lesson.toLowerCase() ||
           l.lesson.toLowerCase().includes(k.toLowerCase()) ||
           k.toLowerCase().includes(l.lesson.toLowerCase())
    );
    const w = key ? DUS_WEIGHTS[key] : 0.03;
    if (l.attempts > 0) {
      weightedSum += (l.accuracy / 100) * w;
      totalWeight += w;
    }
  }
  return totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 100) : 0;
}

// ─── Genel Bakış ─────────────────────────────────────────────────────────────

/** Ustalık eşiği — accuracy bu değerin üstündeyse soru "ustalaşılmış" sayılır. */
export const MASTERY_THRESHOLD = 0.8;
/** Zayıflık eşiği — accuracy bu değerin altındaysa "zayıf". */
export const WEAK_THRESHOLD = 0.5;

export type LessonStat = {
  lesson: string;
  total: number;     // Bankadaki soru sayısı
  solved: number;    // En az 1 kez çözülen benzersiz soru
  attempts: number;  // Toplam cevaplama
  corrects: number;  // Toplam doğru
  accuracy: number;  // 0-100
  coverage: number;  // 0-100 (solved / total)
};

export type UnitStat = {
  lesson: string;
  unit: string;
  total: number;
  solved: number;
  attempts: number;
  corrects: number;
  accuracy: number;
};

export type OptionKey = 'A' | 'B' | 'C' | 'D' | 'E';

export type OverviewStats = {
  bankTotal: number;        // Bankadaki toplam soru
  solvedUnique: number;     // En az 1 kez çözülen benzersiz soru
  unsolvedUnique: number;   // Hiç çözülmemiş benzersiz soru
  wrongEverUnique: number;  // En az 1 kez yanlış yapılan benzersiz soru
  perfectUnique: number;    // Çözülmüş ve hiç yanlış yapılmamış soru
  masteredUnique: number;   // accuracy >= MASTERY_THRESHOLD olan çözülmüş soru
  totalAttempts: number;    // Toplam cevaplama (tekrarlar dahil)
  totalCorrects: number;
  totalIncorrects: number;
  accuracy: number;         // 0-100 (genel doğruluk)
  coverage: number;         // 0-100 (solvedUnique / bankTotal)
  weakCount: number;        // En az 2 deneme & accuracy < %50
  byLesson: LessonStat[];   // solved desc sıralı
  topLessonBySolved: LessonStat | null;
  topUnitBySolved: UnitStat | null;
  difficulty: { easy: number; medium: number; hard: number }; // çözülmüş sorular arası
  mastery: { untouched: number; weak: number; learning: number; mastered: number };
  wrongChoiceDist: Record<OptionKey, number>; // Yanlış cevaplarda seçilen şık dağılımı
  dusWeightedAccuracy: number; // v6: DUS ders ağırlıklı doğruluk (0-100)
};

/**
 * Soru bankası + istatistik haritasından kapsamlı genel bakış üretir.
 * Saf fonksiyon — DOM/localStorage erişimi yoktur (stats parametre olarak gelir).
 */
export function computeOverviewStats(questions: Question[], stats: StatsMap): OverviewStats {
  const bankTotal = questions.length;

  const lessonMap = new Map<string, LessonStat>();
  const unitMap = new Map<string, UnitStat>();

  let solvedUnique = 0;
  let wrongEverUnique = 0;
  let perfectUnique = 0;
  let masteredUnique = 0;
  let totalAttempts = 0;
  let totalCorrects = 0;

  const difficulty = { easy: 0, medium: 0, hard: 0 };
  const mastery = { untouched: 0, weak: 0, learning: 0, mastered: 0 };
  const wrongChoiceDist: Record<OptionKey, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };

  for (const q of questions) {
    // Ders kümeleme
    let ls = lessonMap.get(q.lesson);
    if (!ls) {
      ls = { lesson: q.lesson, total: 0, solved: 0, attempts: 0, corrects: 0, accuracy: 0, coverage: 0 };
      lessonMap.set(q.lesson, ls);
    }
    ls.total++;

    // Ünite kümeleme
    const unitKey = `${q.lesson} ${q.unit}`;
    let us = unitMap.get(unitKey);
    if (!us) {
      us = { lesson: q.lesson, unit: q.unit, total: 0, solved: 0, attempts: 0, corrects: 0, accuracy: 0 };
      unitMap.set(unitKey, us);
    }
    us.total++;

    const s = stats[q.id];
    if (!s || s.attempts <= 0) {
      mastery.untouched++;
      continue;
    }

    // Çözülmüş soru
    solvedUnique++;
    totalAttempts += s.attempts;
    totalCorrects += s.corrects;
    ls.solved++; ls.attempts += s.attempts; ls.corrects += s.corrects;
    us.solved++; us.attempts += s.attempts; us.corrects += s.corrects;

    const incorrects = s.attempts - s.corrects;
    const rate = s.corrects / s.attempts;

    if (incorrects > 0) wrongEverUnique++;
    else perfectUnique++;

    if (rate >= MASTERY_THRESHOLD) { masteredUnique++; mastery.mastered++; }
    else if (rate < WEAK_THRESHOLD) mastery.weak++;
    else mastery.learning++;

    // Zorluk (accuracy bazlı statik puan)
    const label = difficultyLabel(accuracyToDifficulty(s.corrects, s.attempts));
    difficulty[label]++;

    // Yanlış şık dağılımı
    for (const w of s.wrongChoices ?? []) {
      const k = w.selected as OptionKey;
      if (k in wrongChoiceDist) wrongChoiceDist[k]++;
    }
  }

  // Ders accuracy/coverage hesapla
  const byLesson = Array.from(lessonMap.values()).map(l => ({
    ...l,
    accuracy: Math.round((l.corrects / Math.max(1, l.attempts)) * 100),
    coverage: Math.round((l.solved / Math.max(1, l.total)) * 100),
  })).sort((a, b) => b.solved - a.solved || b.attempts - a.attempts);

  const units = Array.from(unitMap.values()).map(u => ({
    ...u,
    accuracy: Math.round((u.corrects / Math.max(1, u.attempts)) * 100),
  }));

  const topLessonBySolved = byLesson.find(l => l.solved > 0) ?? null;
  const topUnitBySolved = units
    .filter(u => u.solved > 0)
    .sort((a, b) => b.solved - a.solved || b.attempts - a.attempts)[0] ?? null;

  const totalIncorrects = totalAttempts - totalCorrects;

  // v6: DUS ağırlıklı doğruluk
  const dusWeightedAccuracy = computeDusWeightedAccuracy(byLesson);

  return {
    bankTotal,
    solvedUnique,
    unsolvedUnique: bankTotal - solvedUnique,
    wrongEverUnique,
    perfectUnique,
    masteredUnique,
    totalAttempts,
    totalCorrects,
    totalIncorrects,
    accuracy: Math.round((totalCorrects / Math.max(1, totalAttempts)) * 100),
    coverage: Math.round((solvedUnique / Math.max(1, bankTotal)) * 100),
    weakCount: getWeakQuestionIdsFromMap(stats).length,
    byLesson,
    topLessonBySolved,
    topUnitBySolved,
    difficulty,
    mastery,
    wrongChoiceDist,
    dusWeightedAccuracy,
  };
}

/** getWeakQuestionIds'in saf (parametreli) varyantı — overview ve kernel için. */
export function getWeakQuestionIdsFromMap(stats: StatsMap, minAttempts = 2, maxCorrectRate = 0.5): string[] {
  return Object.entries(stats)
    .filter(([, stat]) => stat.attempts >= minAttempts && (stat.corrects / stat.attempts) < maxCorrectRate)
    .map(([id]) => id);
}
