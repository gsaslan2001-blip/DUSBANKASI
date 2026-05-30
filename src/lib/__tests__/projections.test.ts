import { describe, it, expect } from 'vitest';
import { computeExamProjection, DUS_EXAM_DATE } from '../projections';

/** N elemanlı, her günü `count` olan aktivite dizisi üretir. */
function flat(count: number, n: number) {
  return Array.from({ length: n }, () => ({ count }));
}

const NOW = new Date('2026-05-30T12:00:00'); // hafıza: bugün 2026-05-30

describe('computeExamProjection', () => {
  it('sınava kalan günü gün sınırına yuvarlar', () => {
    const p = computeExamProjection({ solvedUnique: 0, bankTotal: 100, activity: [], now: NOW });
    // 2026-05-30 → 2026-11-01
    expect(p.daysUntilExam).toBe(155);
    expect(p.examPassed).toBe(false);
  });

  it('sınav geçtiyse examPassed=true ve gereken günlük = kalan tüm soru', () => {
    const past = new Date('2026-12-01T00:00:00');
    const p = computeExamProjection({ solvedUnique: 9000, bankTotal: 10000, activity: [], targetSolved: 10000, now: past });
    expect(p.examPassed).toBe(true);
    expect(p.daysUntilExam).toBeLessThanOrEqual(0);
    expect(p.requiredDailySolved).toBe(1000);
  });

  it('hedef tamamlandıysa solvedRemaining=0 ve onTrack=true', () => {
    const p = computeExamProjection({ solvedUnique: 10000, bankTotal: 10000, activity: [], targetSolved: 10000, now: NOW });
    expect(p.solvedRemaining).toBe(0);
    expect(p.requiredDailySolved).toBe(0);
    expect(p.onTrackSolved).toBe(true);
  });

  it('recentDailyAvg pencere boyunca böler (boş günler hızı düşürür)', () => {
    // Son 14 günden yalnız 7 gün 100 soru → ortalama 50
    const activity = [...flat(0, 7), ...flat(100, 7)];
    const p = computeExamProjection({ solvedUnique: 0, bankTotal: 10000, activity, paceWindowDays: 14, now: NOW });
    expect(p.recentDailyAvg).toBe(50);
  });

  it('gereken günlük hız = kalan / kalan gün (yukarı yuvarlama)', () => {
    const p = computeExamProjection({ solvedUnique: 0, bankTotal: 10000, activity: [], targetSolved: 10000, now: NOW });
    // 10000 / 155 = 64.5 → 65
    expect(p.requiredDailySolved).toBe(65);
  });

  it('mevcut hız gereken hızı karşılıyorsa onTrackSolved=true', () => {
    const activity = flat(100, 14); // ortalama 100
    const p = computeExamProjection({ solvedUnique: 0, bankTotal: 10000, activity, targetSolved: 10000, now: NOW });
    expect(p.recentDailyAvg).toBe(100);
    expect(p.requiredDailySolved).toBe(65);
    expect(p.onTrackSolved).toBe(true);
  });

  it('düşük hızda onTrackSolved=false', () => {
    const activity = flat(10, 14);
    const p = computeExamProjection({ solvedUnique: 0, bankTotal: 10000, activity, targetSolved: 10000, now: NOW });
    expect(p.onTrackSolved).toBe(false);
  });

  it('projekte çözüm = mevcut + hız * kalan gün', () => {
    const activity = flat(50, 14);
    const p = computeExamProjection({ solvedUnique: 1000, bankTotal: 10000, activity, now: NOW });
    // 1000 + 50 * 155 = 8750
    expect(p.projectedSolvedAtExam).toBe(8750);
  });

  it('kapsama yüzdeleri 0-100 ve banka ile sınırlı', () => {
    const activity = flat(500, 14); // çok yüksek hız → banka aşılır
    const p = computeExamProjection({ solvedUnique: 500, bankTotal: 1000, activity, now: NOW });
    expect(p.coverageNow).toBe(50);
    expect(p.projectedCoveragePct).toBe(100); // min(bankTotal, projected) ile sınırlı
  });

  it('tutarlılık = son penceredeki aktif gün oranı', () => {
    // Son 30 günden 15 aktif
    const activity = [...flat(0, 15), ...flat(20, 15)];
    const p = computeExamProjection({ solvedUnique: 0, bankTotal: 100, activity, consistencyWindowDays: 30, now: NOW });
    expect(p.consistencyPct).toBe(50);
  });

  it('boş banka çökmadan 0 döner', () => {
    const p = computeExamProjection({ solvedUnique: 0, bankTotal: 0, activity: [], now: NOW });
    expect(p.coverageNow).toBe(0);
    expect(p.projectedCoveragePct).toBe(0);
  });

  it('DUS_EXAM_DATE sabiti varsayılan olarak kullanılır', () => {
    expect(DUS_EXAM_DATE).toBe('2026-11-01');
    const withDefault = computeExamProjection({ solvedUnique: 0, bankTotal: 100, activity: [], now: NOW });
    const withExplicit = computeExamProjection({ solvedUnique: 0, bankTotal: 100, activity: [], examDate: '2026-11-01', now: NOW });
    expect(withDefault.daysUntilExam).toBe(withExplicit.daysUntilExam);
  });
});
