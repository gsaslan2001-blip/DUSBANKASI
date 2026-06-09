import { describe, it, expect } from 'vitest';
import {
  computeMomentum,
  computeLessonConsistency,
  computePredictionBand,
  type UnitAccuracy,
} from '../metrics';
import type { ActivityPoint } from '../stats';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function ap(date: string, count: number, correct = count, incorrect = 0): ActivityPoint {
  return { date, count, correct, incorrect, byLesson: {} };
}

/** N gün üretir: 2024-01-01'den başlayarak counts dizisine göre. */
function series(counts: Array<[number, number, number]>): ActivityPoint[] {
  return counts.map(([c, ok, no], i) => {
    const d = new Date(2024, 0, 1 + i);
    const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    return ap(date, c, ok, no);
  });
}

// ─── computeMomentum ─────────────────────────────────────────────────────────

describe('computeMomentum', () => {
  it('boş aktivitede idle döner', () => {
    const m = computeMomentum([], 7);
    expect(m.label).toBe('idle');
    expect(m.score).toBe(0);
  });

  it('hiç çözüm yoksa (her iki pencere 0) idle döner', () => {
    const data = series(Array.from({ length: 14 }, () => [0, 0, 0] as [number, number, number]));
    expect(computeMomentum(data, 7).label).toBe('idle');
  });

  it('hacim artışını accelerating olarak işaretler', () => {
    // önceki 7 gün: 10/gün, son 7 gün: 30/gün
    const prior = Array.from({ length: 7 }, () => [10, 8, 2] as [number, number, number]);
    const recent = Array.from({ length: 7 }, () => [30, 24, 6] as [number, number, number]);
    const m = computeMomentum(series([...prior, ...recent]), 7);
    expect(m.label).toBe('accelerating');
    expect(m.score).toBeGreaterThan(10);
    expect(m.volumeDelta).toBe(20);
    expect(m.recentAvg).toBe(30);
    expect(m.priorAvg).toBe(10);
  });

  it('hacim düşüşünü slowing olarak işaretler', () => {
    const prior = Array.from({ length: 7 }, () => [40, 30, 10] as [number, number, number]);
    const recent = Array.from({ length: 7 }, () => [10, 8, 2] as [number, number, number]);
    const m = computeMomentum(series([...prior, ...recent]), 7);
    expect(m.label).toBe('slowing');
    expect(m.score).toBeLessThan(-10);
  });

  it('sabit tempoyu steady olarak işaretler', () => {
    const flat = Array.from({ length: 14 }, () => [20, 16, 4] as [number, number, number]);
    const m = computeMomentum(series(flat), 7);
    expect(m.label).toBe('steady');
    expect(m.volumeDelta).toBe(0);
    expect(m.accuracyDelta).toBe(0);
  });

  it('doğruluk değişimini accuracyDelta olarak yansıtır', () => {
    // hacim sabit, doğruluk %50 → %90
    const prior = Array.from({ length: 7 }, () => [20, 10, 10] as [number, number, number]);
    const recent = Array.from({ length: 7 }, () => [20, 18, 2] as [number, number, number]);
    const m = computeMomentum(series([...prior, ...recent]), 7);
    expect(m.priorAccuracy).toBe(50);
    expect(m.recentAccuracy).toBe(90);
    expect(m.accuracyDelta).toBe(40);
    expect(m.score).toBeGreaterThan(0);
  });

  it('score -100..100 aralığında sıkıştırılır', () => {
    const prior = Array.from({ length: 7 }, () => [1, 0, 1] as [number, number, number]);
    const recent = Array.from({ length: 7 }, () => [500, 500, 0] as [number, number, number]);
    const m = computeMomentum(series([...prior, ...recent]), 7);
    expect(m.score).toBeLessThanOrEqual(100);
    expect(m.score).toBeGreaterThanOrEqual(-100);
  });
});

// ─── computeLessonConsistency ──────────────────────────────────────────────────

describe('computeLessonConsistency', () => {
  it('tek üniteli ders mükemmel tutarlı (100) döner', () => {
    const units: UnitAccuracy[] = [{ lesson: 'Protez', accuracy: 70, attempts: 10 }];
    const [r] = computeLessonConsistency(units);
    expect(r.consistency).toBe(100);
    expect(r.stdDev).toBe(0);
    expect(r.unitCount).toBe(1);
    expect(r.meanAccuracy).toBe(70);
  });

  it('attempts=0 üniteleri yok sayar', () => {
    const units: UnitAccuracy[] = [
      { lesson: 'Endodonti', accuracy: 90, attempts: 0 },
      { lesson: 'Endodonti', accuracy: 50, attempts: 5 },
    ];
    const [r] = computeLessonConsistency(units);
    expect(r.unitCount).toBe(1);
    expect(r.meanAccuracy).toBe(50);
  });

  it('dengesiz dersi (yüksek varyans) düşük tutarlılıkla işaretler', () => {
    const units: UnitAccuracy[] = [
      { lesson: 'Patoloji', accuracy: 100, attempts: 10 },
      { lesson: 'Patoloji', accuracy: 0, attempts: 10 },
    ];
    const [r] = computeLessonConsistency(units);
    // std = 50 → consistency = 100 - 2*50 = 0
    expect(r.stdDev).toBe(50);
    expect(r.consistency).toBe(0);
    expect(r.meanAccuracy).toBe(50);
  });

  it('en tutarsız ders başta sıralanır', () => {
    const units: UnitAccuracy[] = [
      { lesson: 'Stabil', accuracy: 80, attempts: 10 },
      { lesson: 'Stabil', accuracy: 82, attempts: 10 },
      { lesson: 'Dengesiz', accuracy: 100, attempts: 10 },
      { lesson: 'Dengesiz', accuracy: 20, attempts: 10 },
    ];
    const result = computeLessonConsistency(units);
    expect(result[0].lesson).toBe('Dengesiz');
    expect(result[0].consistency).toBeLessThan(result[1].consistency);
  });

  it('ağırlıklı ortalama denemeyi dikkate alır', () => {
    const units: UnitAccuracy[] = [
      { lesson: 'X', accuracy: 100, attempts: 90 },
      { lesson: 'X', accuracy: 0, attempts: 10 },
    ];
    const [r] = computeLessonConsistency(units);
    // ağırlıklı ortalama = (100*90 + 0*10)/100 = 90
    expect(r.meanAccuracy).toBe(90);
  });

  it('boş girdide boş dizi döner', () => {
    expect(computeLessonConsistency([])).toEqual([]);
  });
});

// ─── computePredictionBand ─────────────────────────────────────────────────────

describe('computePredictionBand', () => {
  it('boş aktivitede sıfır projeksiyon döner', () => {
    const b = computePredictionBand([], 7, 14);
    expect(b.projection).toHaveLength(0);
    expect(b.confidence).toBe(0);
    expect(b.slope).toBe(0);
  });

  it('tek nokta → düz ortalama projeksiyonu', () => {
    const b = computePredictionBand([ap('2024-06-01', 20)], 3, 14);
    expect(b.projection).toHaveLength(3);
    expect(b.projection.every(p => p.expected === 20)).toBe(true);
    expect(b.confidence).toBe(0);
    expect(b.projection[0].date).toBe('2024-06-02');
  });

  it('mükemmel artan doğruda yüksek güven + pozitif eğim', () => {
    // 10,20,30,...,140 → slope = 10, R² = 1
    const data = series(Array.from({ length: 14 }, (_, i) => [(i + 1) * 10, (i + 1) * 10, 0] as [number, number, number]));
    const b = computePredictionBand(data, 7, 14);
    expect(b.slope).toBeCloseTo(10, 1);
    expect(b.confidence).toBe(100);
    expect(b.residualStd).toBe(0);
    // 14 nokta (index 0-13, son=140), +1 gün → index 14 → 150
    expect(b.projection[0].expected).toBe(150);
    expect(b.projection[0].lower).toBe(150);
    expect(b.projection[0].upper).toBe(150);
  });

  it('düz seride eğim ~0 ve beklenti ortalamaya yakın', () => {
    const data = series(Array.from({ length: 14 }, () => [25, 25, 0] as [number, number, number]));
    const b = computePredictionBand(data, 5, 14);
    expect(b.slope).toBeCloseTo(0, 2);
    expect(b.dailyAverage).toBe(25);
    expect(b.projection[0].expected).toBe(25);
  });

  it('gürültülü seride güven bandı genişler (lower < expected < upper)', () => {
    const data = series([
      [10, 10, 0], [40, 40, 0], [5, 5, 0], [50, 50, 0], [15, 15, 0],
      [45, 45, 0], [8, 8, 0], [38, 38, 0], [12, 12, 0], [42, 42, 0],
    ]);
    const b = computePredictionBand(data, 3, 14);
    expect(b.residualStd).toBeGreaterThan(0);
    const p = b.projection[0];
    expect(p.lower).toBeLessThan(p.expected);
    expect(p.upper).toBeGreaterThan(p.expected);
    expect(p.lower).toBeGreaterThanOrEqual(0);
  });

  it('projeksiyon tarihleri son günden ardışık ilerler', () => {
    const data = series(Array.from({ length: 5 }, (_, i) => [i + 1, i + 1, 0] as [number, number, number]));
    const b = computePredictionBand(data, 3, 14);
    expect(b.projection.map(p => p.date)).toEqual(['2024-01-06', '2024-01-07', '2024-01-08']);
  });

  it('beklenti negatife düşmez (alt sınır 0)', () => {
    // sert düşüş: projeksiyon negatife giderdi
    const data = series(Array.from({ length: 10 }, (_, i) => [Math.max(0, 50 - i * 8), Math.max(0, 50 - i * 8), 0] as [number, number, number]));
    const b = computePredictionBand(data, 7, 14);
    expect(b.projection.every(p => p.expected >= 0 && p.lower >= 0)).toBe(true);
  });
});
