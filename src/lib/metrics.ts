/**
 * DUS Bankası — Türetilmiş İleri Metrikler (saf modül)
 *
 * Bu dosya istatistiği zenginleştiren üç türetilmiş metrik içerir:
 *  1. Momentum       — çözüm hacmi + doğruluğun ivmesi (hızlanıyor mu, yavaşlıyor mu?)
 *  2. Ders-içi varyans — bir dersin üniteleri arası doğruluk tutarlılığı
 *  3. Tahmin bandı   — doğrusal regresyon ile gelecek projeksiyon + güven aralığı
 *
 * Tüm fonksiyonlar SAF'tır: DOM/localStorage erişimi yoktur, girdi → çıktı.
 * Tarih üretimi için dateUtils.addDays (timezone-güvenli) kullanılır.
 */

import { addDays } from './dateUtils';
import type { ActivityPoint } from './stats';

// ─── Yardımcılar ───────────────────────────────────────────────────────────

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v));
}

function accuracyOf(correct: number, incorrect: number): number {
  const answered = correct + incorrect;
  return answered > 0 ? (correct / answered) * 100 : 0;
}

// ─── 1. MOMENTUM ─────────────────────────────────────────────────────────────

export type MomentumLabel = 'accelerating' | 'steady' | 'slowing' | 'idle';

export type MomentumResult = {
  /** Son pencere günlük ortalaması − önceki pencere ortalaması (soru/gün) */
  volumeDelta: number;
  /** Son pencere doğruluğu − önceki pencere doğruluğu (puan) */
  accuracyDelta: number;
  /** -100..100 harmanlanmış momentum puanı (0.6 hacim + 0.4 doğruluk) */
  score: number;
  label: MomentumLabel;
  recentAvg: number;
  priorAvg: number;
  recentAccuracy: number;
  priorAccuracy: number;
};

const MOMENTUM_VOLUME_WEIGHT = 0.6;
const MOMENTUM_ACCURACY_WEIGHT = 0.4;
const MOMENTUM_THRESHOLD = 10;

/**
 * Son `window` gün ile önceki `window` günü kıyaslayarak ivmeyi ölçer.
 * Hem çözüm hacmindeki hem doğruluktaki değişimi harmanlar.
 */
export function computeMomentum(activity: ActivityPoint[], window = 7): MomentumResult {
  const recent = activity.slice(-window);
  const prior = activity.slice(-window * 2, -window);

  const recentSolves = recent.reduce((s, a) => s + a.count, 0);
  const priorSolves = prior.reduce((s, a) => s + a.count, 0);
  const recentAvg = window > 0 ? recentSolves / window : 0;
  const priorAvg = window > 0 ? priorSolves / window : 0;

  const recentCorrect = recent.reduce((s, a) => s + a.correct, 0);
  const recentIncorrect = recent.reduce((s, a) => s + a.incorrect, 0);
  const priorCorrect = prior.reduce((s, a) => s + a.correct, 0);
  const priorIncorrect = prior.reduce((s, a) => s + a.incorrect, 0);
  const recentAccuracy = accuracyOf(recentCorrect, recentIncorrect);
  const priorAccuracy = accuracyOf(priorCorrect, priorIncorrect);

  const volumeDelta = recentAvg - priorAvg;
  const accuracyDelta = recentAccuracy - priorAccuracy;

  const volumeScore = priorAvg > 0
    ? clamp((volumeDelta / priorAvg) * 100, -100, 100)
    : (recentAvg > 0 ? 100 : 0);

  const score = Math.round(
    clamp(MOMENTUM_VOLUME_WEIGHT * volumeScore + MOMENTUM_ACCURACY_WEIGHT * accuracyDelta, -100, 100),
  );

  let label: MomentumLabel;
  if (recentSolves === 0 && priorSolves === 0) label = 'idle';
  else if (score > MOMENTUM_THRESHOLD) label = 'accelerating';
  else if (score < -MOMENTUM_THRESHOLD) label = 'slowing';
  else label = 'steady';

  return {
    volumeDelta: Math.round(volumeDelta * 10) / 10,
    accuracyDelta: Math.round(accuracyDelta * 10) / 10,
    score,
    label,
    recentAvg: Math.round(recentAvg * 10) / 10,
    priorAvg: Math.round(priorAvg * 10) / 10,
    recentAccuracy: Math.round(recentAccuracy),
    priorAccuracy: Math.round(priorAccuracy),
  };
}

// ─── 2. DERS-İÇİ VARYANS (tutarlılık) ─────────────────────────────────────────

export type UnitAccuracy = {
  lesson: string;
  accuracy: number; // 0-100
  attempts: number; // ağırlık
};

export type LessonConsistency = {
  lesson: string;
  unitCount: number;
  /** Denemelerle ağırlıklı ortalama doğruluk (0-100) */
  meanAccuracy: number;
  /** Üniteler arası ağırlıklı standart sapma (0-100 ölçeğinde) */
  stdDev: number;
  /** 0-100; 100 = mükemmel tutarlı (düşük varyans) */
  consistency: number;
};

const CONSISTENCY_STD_FACTOR = 2; // stdDev 50 → consistency 0

/**
 * Her ders için ünitelerinin doğruluk dağılımının ağırlıklı standart sapmasını
 * hesaplar. Yüksek varyans = ders içinde dengesiz performans (bazı üniteler güçlü,
 * bazıları zayıf). En tutarsız ders başta olacak şekilde sıralanır.
 */
export function computeLessonConsistency(units: UnitAccuracy[]): LessonConsistency[] {
  const groups = new Map<string, UnitAccuracy[]>();
  for (const u of units) {
    if (u.attempts <= 0) continue;
    const arr = groups.get(u.lesson) ?? [];
    arr.push(u);
    groups.set(u.lesson, arr);
  }

  const result: LessonConsistency[] = [];
  for (const [lesson, arr] of groups) {
    const totalWeight = arr.reduce((s, u) => s + u.attempts, 0);
    const mean = totalWeight > 0
      ? arr.reduce((s, u) => s + u.accuracy * u.attempts, 0) / totalWeight
      : 0;
    const variance = totalWeight > 0
      ? arr.reduce((s, u) => s + u.attempts * (u.accuracy - mean) ** 2, 0) / totalWeight
      : 0;
    const stdDev = Math.sqrt(variance);
    const consistency = clamp(Math.round(100 - stdDev * CONSISTENCY_STD_FACTOR), 0, 100);

    result.push({
      lesson,
      unitCount: arr.length,
      meanAccuracy: Math.round(mean),
      stdDev: Math.round(stdDev * 10) / 10,
      consistency,
    });
  }

  return result.sort((a, b) => a.consistency - b.consistency);
}

// ─── 3. TAHMİN BANDI (projeksiyon + güven aralığı) ────────────────────────────

export type PredictionPoint = {
  date: string;
  expected: number;
  lower: number;
  upper: number;
};

export type PredictionBand = {
  /** Günlük çözüm sayısındaki eğim (soru/gün²) */
  slope: number;
  /** Geçmiş penceredeki günlük ortalama */
  dailyAverage: number;
  /** Artık (residual) standart sapması */
  residualStd: number;
  /** 0-100 model güveni (R² bazlı) */
  confidence: number;
  projection: PredictionPoint[];
};

const Z_95 = 1.96; // %95 güven aralığı

/**
 * Son `historyWindow` günün çözüm sayısına OLS doğrusal regresyon uygular ve
 * `aheadDays` gün ileriye projeksiyon yapar. Güven bandı artıkların standart
 * sapmasından (±1.96σ) türetilir. Model güveni R² ile ifade edilir.
 */
export function computePredictionBand(
  activity: ActivityPoint[],
  aheadDays = 7,
  historyWindow = 14,
): PredictionBand {
  const hist = activity.slice(-historyWindow);
  const n = hist.length;
  const lastDate = n > 0 ? hist[n - 1].date : '';

  const dailyAverage = n > 0 ? hist.reduce((s, a) => s + a.count, 0) / n : 0;

  // 2'den az nokta → regresyon anlamsız: düz ortalama projeksiyonu
  if (n < 2) {
    const projection: PredictionPoint[] = [];
    for (let i = 1; i <= aheadDays && lastDate; i++) {
      const expected = Math.max(0, Math.round(dailyAverage));
      projection.push({ date: addDays(lastDate, i), expected, lower: expected, upper: expected });
    }
    return { slope: 0, dailyAverage: Math.round(dailyAverage * 10) / 10, residualStd: 0, confidence: 0, projection };
  }

  // OLS: x = 0..n-1, y = count
  const xs = hist.map((_, i) => i);
  const ys = hist.map(a => a.count);
  const meanX = xs.reduce((s, x) => s + x, 0) / n;
  const meanY = ys.reduce((s, y) => s + y, 0) / n;

  let sxy = 0;
  let sxx = 0;
  for (let i = 0; i < n; i++) {
    sxy += (xs[i] - meanX) * (ys[i] - meanY);
    sxx += (xs[i] - meanX) ** 2;
  }
  const slope = sxx > 0 ? sxy / sxx : 0;
  const intercept = meanY - slope * meanX;

  // Artıklar ve R²
  let ssRes = 0;
  let ssTot = 0;
  for (let i = 0; i < n; i++) {
    const fit = intercept + slope * xs[i];
    ssRes += (ys[i] - fit) ** 2;
    ssTot += (ys[i] - meanY) ** 2;
  }
  const residualStd = Math.sqrt(ssRes / n);
  const r2 = ssTot > 0 ? 1 - ssRes / ssTot : (ssRes === 0 ? 1 : 0);
  const confidence = clamp(Math.round(r2 * 100), 0, 100);

  const margin = Z_95 * residualStd;
  const projection: PredictionPoint[] = [];
  for (let i = 1; i <= aheadDays; i++) {
    const xFuture = n - 1 + i;
    const expected = Math.max(0, intercept + slope * xFuture);
    projection.push({
      date: addDays(lastDate, i),
      expected: Math.round(expected),
      lower: Math.max(0, Math.round(expected - margin)),
      upper: Math.round(expected + margin),
    });
  }

  return {
    slope: Math.round(slope * 100) / 100,
    dailyAverage: Math.round(dailyAverage * 10) / 10,
    residualStd: Math.round(residualStd * 10) / 10,
    confidence,
    projection,
  };
}
