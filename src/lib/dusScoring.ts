/**
 * DUS Bankası — DUS Skor Tahmin Motoru (saf modül)
 *
 * Mevcut performans verisinden DUS net skoru, sıralama ve yüzdelik tahmini yapar.
 * dusPlacement.ts'teki DUS_PLACEMENT_DATA üzerine inşa edilir.
 * Tüm fonksiyonlar SAF'tır — DOM/localStorage erişimi yoktur.
 */

import { getPlacementForNet } from './dusPlacement';
import { DUS_EXAM_DATE } from './projections';
import type { OverviewStats } from './stats';
import type { ActivityPoint } from './stats';
import type { DusScoreEstimate, TargetProbability } from '../types/app';

// ─── DUS Ders Ağırlıkları (2025 DUS dağılımı) ──────────────────────────────
// Kaynak: ÖSYM DUS kılavuzu — her dersin sınavdaki soru sayısı ve ağırlığı

const DUS_LESSON_WEIGHTS: Record<string, number> = {
  'Endodonti': 0.0442,
  'Protez': 0.0442,
  'Ağız Diş Çene Cerrahisi': 0.0442,
  'Ortodonti': 0.0442,
  'Periodontoloji': 0.0442,
  'Restoratif Diş Tedavisi': 0.0442,
  'Pedodonti': 0.0442,
  'Oral Diagnoz ve Radyoloji': 0.0442,
  'Temel Tıp Bilimleri': 0.0735,
  'Klinik Bilimler': 0.0735,
  'Protetik Diş Tedavisi': 0.0442,
  'Diş Hastalıkları ve Tedavisi': 0.0442,
  'Çene Cerrahisi': 0.0442,
  'Patoloji': 0.0442,
  'Farmakoloji': 0.0442,
  'Mikrobiyoloji': 0.0442,
  'Anatomi': 0.0442,
  'Fizyoloji': 0.0442,
  'Biyokimya': 0.0442,
  'Histoloji Embriyoloji': 0.0442,
};

const TOTAL_DUS_QUESTIONS = 120;
const MS_PER_DAY = 1000 * 60 * 60 * 24;
const Z_95 = 1.96;

/** Her dersin DUS'taki soru ağırlık katsayısını döner. */
export function getDusLessonWeights(): Record<string, number> {
  return { ...DUS_LESSON_WEIGHTS };
}

/** Bir dersin DUS ağırlığını fuzzy match ile bulur (normalize edilmiş isim). */
export function getLessonWeight(lesson: string): number {
  const key = Object.keys(DUS_LESSON_WEIGHTS).find(
    k => k.toLowerCase() === lesson.toLowerCase() ||
         lesson.toLowerCase().includes(k.toLowerCase()) ||
         k.toLowerCase().includes(lesson.toLowerCase())
  );
  return key ? DUS_LESSON_WEIGHTS[key] : 0.03; // bilinmeyen ders için düşük varsayılan
}

/**
 * Mevcut istatistiklerden DUS net skoru tahmin eder.
 *
 * Yöntem:
 * 1. Her dersin doğruluk oranını DUS ağırlığıyla çarp
 * 2. Çözülmemiş dersler için global doğruluk oranını kullan
 * 3. Toplam net = ağırlıklı doğruluk × 120 soru
 */
export function estimateDusNet(
  overview: OverviewStats,
  activity?: ActivityPoint[],
): DusScoreEstimate {
  let weightedAccuracy = 0;
  let totalWeight = 0;

  for (const l of overview.byLesson) {
    const w = getLessonWeight(l.lesson);
    if (w > 0 && l.attempts > 0) {
      weightedAccuracy += (l.accuracy / 100) * w;
      totalWeight += w;
    }
  }

  // Çözülmemiş dersler için genel doğruluğu kullan
  const remainingWeight = 1 - totalWeight;
  if (remainingWeight > 0 && overview.accuracy > 0) {
    weightedAccuracy += (overview.accuracy / 100) * remainingWeight;
  }

  const effectiveAccuracy = totalWeight > 0 ? weightedAccuracy : (overview.accuracy / 100);
  const estimatedNet = Math.round(effectiveAccuracy * TOTAL_DUS_QUESTIONS);

  // Volatilite bazlı güven aralığı
  const volatility = activity ? computeAccuracyVolatility(activity) : 8;
  const margin = Math.round(Z_95 * volatility * Math.sqrt(TOTAL_DUS_QUESTIONS) * 0.3);
  const confidenceInterval: [number, number] = [
    Math.max(0, estimatedNet - margin),
    Math.min(TOTAL_DUS_QUESTIONS, estimatedNet + margin),
  ];

  // Sıralama ve yüzdelik
  const placement = getPlacementForNet(estimatedNet);
  const totalCandidates = 3500;
  const estimatedRank = placement.passed ? placement.rank : totalCandidates;
  const estimatedPercentile = placement.passed
    ? Math.round((1 - estimatedRank / totalCandidates) * 100)
    : 0;

  // Aspirasyon bölgesi
  let aspirationZone: DusScoreEstimate['aspirationZone'] = 'below_threshold';
  if (estimatedNet >= 95) aspirationZone = 'target';
  else if (estimatedNet >= 90) aspirationZone = 'competitive';
  else if (estimatedNet >= 85) aspirationZone = 'safe';

  // Hedefe ulaşma olasılığı
  const daysUntilExam = daysToExam();
  const targetProb = computeTargetProbability(
    estimatedNet, 95, daysUntilExam > 0 ? daysUntilExam : 1, volatility,
  );

  return {
    estimatedNet,
    confidenceInterval,
    estimatedRank,
    estimatedPercentile,
    targetProbability: targetProb.chance,
    aspirationZone,
  };
}

/** Net puandan tahmini yüzdelik dilim (lineer interpolasyon). */
export function estimatePercentile(net: number): number {
  const placement = getPlacementForNet(net);
  if (!placement.passed) return 0;
  const totalCandidates = 3500;
  return Math.round((1 - placement.rank / totalCandidates) * 100);
}

/**
 * Hedef nete ulaşma olasılığını hesaplar.
 * Basitleştirilmiş model: mevcut net + (günlük iyileşme × kalan gün × verimlilik)
 */
export function computeTargetProbability(
  currentNet: number,
  targetNet: number,
  daysUntilExam: number,
  volatility: number,
): TargetProbability {
  const gap = targetNet - currentNet;
  if (gap <= 0) return { chance: 100, requiredDailyNet: 0, daysUntilExam };

  const requiredDailyNet = Math.round((gap / daysUntilExam) * 10) / 10;

  // Volatilite yüksekse hedefe ulaşma şansı düşer
  const rawChance = Math.max(0, 100 - (gap * volatility * 0.5));
  const chance = Math.min(100, Math.round(rawChance));

  return { chance, requiredDailyNet, daysUntilExam };
}

/** Aktivite verisinden doğruluk volatilitesini (standart sapma) hesaplar. */
function computeAccuracyVolatility(activity: ActivityPoint[]): number {
  const recent = activity.slice(-14);
  const rates: number[] = [];
  for (const a of recent) {
    const total = a.correct + a.incorrect;
    if (total > 0) rates.push(a.correct / total);
  }
  if (rates.length < 2) return 8;

  const mean = rates.reduce((s, r) => s + r, 0) / rates.length;
  const variance = rates.reduce((s, r) => s + (r - mean) ** 2, 0) / rates.length;
  const stdDev = Math.sqrt(variance) * 100;

  return Math.round(stdDev * 10) / 10;
}

/** Sınava kalan gün sayısı. */
function daysToExam(): number {
  const now = new Date();
  const exam = new Date(`${DUS_EXAM_DATE}T00:00:00`);
  return Math.max(0, Math.round((exam.getTime() - now.getTime()) / MS_PER_DAY));
}
