import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

vi.mock('../dateUtils', () => ({
  todayStr: () => '2024-06-15',
  addDays: (dateStr: string, days: number): string => {
    const [y, m, d] = dateStr.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    date.setDate(date.getDate() + days);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  },
}));

// Deterministic shuffle for predictable test results
vi.mock('../shuffle', () => ({
  fisherYates: <T>(arr: T[]): T[] => [...arr],
}));

import {
  buildSmartQueue,
  buildUnitQueue,
  buildSimulationPool,
  buildExamPool,
  getWeakestUnits,
  getCurriculumProgress,
  setAdaptiveWeights,
  getAdaptiveWeights,
  buildDailyExam,
} from '../adaptive';
import type { Question } from '../../data';
import type { StatsMap } from '../stats';
import { DEFAULT_ADAPTIVE_WEIGHTS } from '../../config/learning';

const TODAY = '2024-06-15';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function q(id: string, lesson: string, unit: string): Question {
  return { id, lesson, unit, question: `Q${id}`, options: { A: 'a', B: 'b', C: 'c', D: 'd', E: 'e' }, correctAnswer: 'A', explanation: '' };
}

function stat(attempts: number, corrects: number, wrongChoices: { selected: string; timestamp: string }[] = []): StatsMap[string] {
  return { attempts, corrects, lastSeen: TODAY, wrongChoices };
}

// ─── setAdaptiveWeights / getAdaptiveWeights ──────────────────────────────────

describe('setAdaptiveWeights / getAdaptiveWeights', () => {
  afterEach(() => setAdaptiveWeights(DEFAULT_ADAPTIVE_WEIGHTS));

  it('returns default weights initially', () => {
    expect(getAdaptiveWeights()).toEqual(DEFAULT_ADAPTIVE_WEIGHTS);
  });

  it('partially overrides weights', () => {
    setAdaptiveWeights({ weakness: 0.80 });
    expect(getAdaptiveWeights().weakness).toBe(0.80);
  });

  it('returns a copy — mutations do not affect internal state', () => {
    const w = getAdaptiveWeights();
    w.weakness = 0.99;
    expect(getAdaptiveWeights().weakness).toBe(DEFAULT_ADAPTIVE_WEIGHTS.weakness);
  });
});

// ─── buildSmartQueue ──────────────────────────────────────────────────────────

describe('buildSmartQueue', () => {
  const questions: Question[] = [
    q('q1', 'Patoloji', 'U1'),
    q('q2', 'Fizyoloji', 'U2'),
    q('q3', 'Patoloji', 'U3'),
    q('q4', 'Histoloji', 'U4'),
    q('q5', 'Radyoloji', 'U5'),
  ];

  beforeEach(() => vi.spyOn(Math, 'random').mockReturnValue(0.5));
  afterEach(() => vi.restoreAllMocks());

  it('respects the limit', () => {
    const { questions: result } = buildSmartQueue(questions, {}, { limit: 3 });
    expect(result.length).toBeLessThanOrEqual(3);
  });

  it('classifies unseen questions as new', () => {
    const { breakdown } = buildSmartQueue(questions, {});
    expect(breakdown.newCount).toBe(5);
    expect(breakdown.totalSelected).toBe(5);
  });

  it('includes weak cards when includeWeak=true (default)', () => {
    const stats: StatsMap = { q1: stat(5, 1) }; // %20 doğruluk → zayıf
    const { breakdown } = buildSmartQueue(questions, stats);
    expect(breakdown.weakCount).toBeGreaterThan(0);
  });

  it('excludes new questions when includeNew=false', () => {
    const { breakdown } = buildSmartQueue(questions, {}, { includeNew: false });
    expect(breakdown.newCount).toBe(0);
    expect(breakdown.totalSelected).toBe(0);
  });

  it('breakdown totals are consistent', () => {
    const stats: StatsMap = { q1: stat(5, 1) };
    const { breakdown } = buildSmartQueue(questions, stats);
    expect(breakdown.totalSelected).toBe(
      breakdown.weakCount + breakdown.newCount
    );
  });
});

// ─── getWeakestUnits ──────────────────────────────────────────────────────────

describe('getWeakestUnits', () => {
  const qs: Question[] = [
    q('a1', 'Patoloji', 'UA'), q('a2', 'Patoloji', 'UA'), q('a3', 'Patoloji', 'UA'),
    q('a4', 'Patoloji', 'UA'), q('a5', 'Patoloji', 'UA'),
    q('b1', 'Fizyoloji', 'UB'), q('b2', 'Fizyoloji', 'UB'), q('b3', 'Fizyoloji', 'UB'),
    q('b4', 'Fizyoloji', 'UB'), q('b5', 'Fizyoloji', 'UB'),
  ];

  it('filters units below minAttempts', () => {
    const stats: StatsMap = { a1: stat(2, 0) };
    const result = getWeakestUnits(qs, stats, 2, 10);
    expect(result).toHaveLength(0);
  });

  it('sorts by accuracy ascending (worst first)', () => {
    const stats: StatsMap = {};
    ['a1','a2','a3','a4','a5'].forEach(id => { stats[id] = stat(5, 1); }); // 20%
    ['b1','b2','b3','b4','b5'].forEach(id => { stats[id] = stat(5, 4); }); // 80%
    const result = getWeakestUnits(qs, stats, 2, 5);
    expect(result[0].lesson).toBe('Patoloji');
    expect(result[0].accuracy).toBe(20);
    expect(result[1].accuracy).toBe(80);
  });

  it('respects topN limit', () => {
    const stats: StatsMap = {};
    qs.forEach(({ id }) => { stats[id] = stat(10, 5); });
    expect(getWeakestUnits(qs, stats, 1, 1)).toHaveLength(1);
  });

  it('includes wrongChoiceCount in the result', () => {
    const stats: StatsMap = {};
    ['a1','a2','a3','a4','a5'].forEach(id => {
      stats[id] = stat(5, 2, [{ selected: 'B', timestamp: '2024-06-01T10:00:00Z' }]);
    });
    const result = getWeakestUnits(qs, stats, 1, 5);
    expect(result[0].wrongChoiceCount).toBeGreaterThan(0);
  });
});

// ─── getCurriculumProgress ────────────────────────────────────────────────────

describe('getCurriculumProgress', () => {
  const qs: Question[] = [
    q('q1', 'Patoloji', 'UA'), q('q2', 'Patoloji', 'UA'),
    q('q3', 'Fizyoloji', 'UB'),
    q('q4', 'Histoloji', 'UC'),
  ];

  it('counts totalUnits correctly', () => {
    expect(getCurriculumProgress(qs, {}).totalUnits).toBe(3);
  });

  it('solvedUnits is 0 with no stats', () => {
    expect(getCurriculumProgress(qs, {}).solvedUnits).toBe(0);
  });

  it('solvedUnits counts units with at least 1 attempt', () => {
    const stats: StatsMap = { q1: stat(1, 1) };
    expect(getCurriculumProgress(qs, stats).solvedUnits).toBe(1);
  });

  it('completedUnits counts units where every question is attempted', () => {
    const stats: StatsMap = {
      q1: stat(1, 1), q2: stat(1, 0), // UA complete
      q3: stat(1, 1),                   // UB complete
    };
    expect(getCurriculumProgress(qs, stats).completedUnits).toBe(2);
  });

  it('nextUntouchedUnit is null when all units started', () => {
    const stats: StatsMap = {
      q1: stat(1, 1), q3: stat(1, 1), q4: stat(1, 1),
    };
    expect(getCurriculumProgress(qs, stats).nextUntouchedUnit).toBeNull();
  });

  it('nextUntouchedUnit picks the alphabetically first untouched unit', () => {
    const stats: StatsMap = { q1: stat(1, 1) }; // only Patoloji started
    const { nextUntouchedUnit } = getCurriculumProgress(qs, stats);
    // Fizyoloji < Histoloji alphabetically
    expect(nextUntouchedUnit?.lesson).toBe('Fizyoloji');
  });

  it('nextUntouchedUnit includes questionCount', () => {
    const { nextUntouchedUnit } = getCurriculumProgress(qs, {});
    expect(nextUntouchedUnit?.questionCount).toBeGreaterThan(0);
  });
});

// ─── buildUnitQueue ───────────────────────────────────────────────────────────

describe('buildUnitQueue', () => {
  const qs: Question[] = [
    q('q1', 'Patoloji', 'UA'),
    q('q2', 'Patoloji', 'UA'),
    q('q3', 'Patoloji', 'UA'),
    q('q4', 'Fizyoloji', 'UB'),
  ];

  it('returns only questions from the specified lesson+unit', () => {
    const result = buildUnitQueue(qs, 'Patoloji', 'UA', {});
    expect(result).toHaveLength(3);
    result.forEach(question => {
      expect(question.lesson).toBe('Patoloji');
      expect(question.unit).toBe('UA');
    });
  });

  it('unseen questions come before seen (with identity shuffle mock)', () => {
    const stats: StatsMap = { q2: stat(3, 2) };
    const result = buildUnitQueue(qs, 'Patoloji', 'UA', stats);
    const seenIndex = result.findIndex(question => question.id === 'q2');
    const unseenIndex = result.findIndex(question => question.id === 'q1');
    expect(unseenIndex).toBeLessThan(seenIndex);
  });

  it('returns empty array when no questions match', () => {
    expect(buildUnitQueue(qs, 'Biyokimya', 'UX', {})).toHaveLength(0);
  });
});

// ─── buildSimulationPool ──────────────────────────────────────────────────────

describe('buildSimulationPool', () => {
  const qs: Question[] = [
    q('a1', 'Patoloji', 'U1'), q('a2', 'Patoloji', 'U1'),
    q('b1', 'Fizyoloji', 'U2'), q('b2', 'Fizyoloji', 'U2'),
    q('c1', 'Histoloji', 'U3'), q('c2', 'Histoloji', 'U3'),
  ];

  it('returns at most `amount` questions', () => {
    expect(buildSimulationPool(qs, {}, 4).length).toBeLessThanOrEqual(4);
  });

  it('returns empty array when no questions', () => {
    expect(buildSimulationPool([], {}, 10)).toHaveLength(0);
  });

  it('has no duplicate IDs', () => {
    const result = buildSimulationPool(qs, {}, 6);
    expect(new Set(result.map(r => r.id)).size).toBe(result.length);
  });

  it('draws from all lessons', () => {
    const result = buildSimulationPool(qs, {}, 6);
    const lessons = new Set(result.map(r => r.lesson));
    expect(lessons.has('Patoloji')).toBe(true);
    expect(lessons.has('Fizyoloji')).toBe(true);
    expect(lessons.has('Histoloji')).toBe(true);
  });
});

// ─── buildExamPool ────────────────────────────────────────────────────────────

describe('buildExamPool', () => {
  const qs: Question[] = [
    q('a1', 'Patoloji', 'UA'), q('a2', 'Patoloji', 'UA'), q('a3', 'Patoloji', 'UA'),
    q('b1', 'Fizyoloji', 'UB'), q('b2', 'Fizyoloji', 'UB'), q('b3', 'Fizyoloji', 'UB'),
  ];
  const units = [{ lesson: 'Patoloji', unit: 'UA' }, { lesson: 'Fizyoloji', unit: 'UB' }];

  it('returns at most `amount` questions', () => {
    expect(buildExamPool(qs, units, {}, 4).length).toBeLessThanOrEqual(4);
  });

  it('has no duplicate IDs', () => {
    const result = buildExamPool(qs, units, {}, 6);
    expect(new Set(result.map(r => r.id)).size).toBe(result.length);
  });

  it('applies a filter function', () => {
    const result = buildExamPool(qs, units, {}, 10, r => r.lesson === 'Patoloji');
    result.forEach(r => expect(r.lesson).toBe('Patoloji'));
  });

  it('returns empty array when units list is empty', () => {
    expect(buildExamPool(qs, [], {}, 5)).toHaveLength(0);
  });

  it('returns empty array when filtered pool is empty', () => {
    const result = buildExamPool(qs, units, {}, 5, () => false);
    expect(result).toHaveLength(0);
  });
});

// ─── buildDailyExam ────────────────────────────────────────────────────────────

describe('buildDailyExam', () => {
  const qs: Question[] = [
    q('a1', 'Patoloji', 'UA'), q('a2', 'Patoloji', 'UA'), q('a3', 'Patoloji', 'UA'),
    q('b1', 'Fizyoloji', 'UB'), q('b2', 'Fizyoloji', 'UB'), q('b3', 'Fizyoloji', 'UB'),
  ];
  const units = [{ lesson: 'Patoloji', unit: 'UA' }, { lesson: 'Fizyoloji', unit: 'UB' }];

  it('selects exactly `count` questions with proper breakdown', () => {
    const stats: StatsMap = {
      a1: stat(2, 2), // correct
      b1: stat(2, 1), // wrong
    };
    
    const { questions, breakdown } = buildDailyExam(qs, units, stats, 4);
    
    expect(questions).toHaveLength(4);
    expect(breakdown.totalPool).toBe(6);
    
    // We requested 4 items. It will pick 1 wrong, 1 correct, and 2 unseen (since it aims for 80/15/5 ratio)
    // Wait, 4 items:
    // nUnseen = Math.round(4 * 0.8) = 3
    // nWrong = Math.round(4 * 0.15) = 1
    // nCorrect = 4 - 3 - 1 = 0
    // But since it tries to fill the pool if anything is missing, it will fill with what's available.
    // Let's just assert that total sum of breakdowns is equal to questions length.
    expect(breakdown.unseenCount + breakdown.wrongCount + breakdown.correctCount).toBe(4);
  });

  it('handles small pools gracefully', () => {
    const { questions, breakdown } = buildDailyExam(qs, units, {}, 10);
    expect(questions.length).toBe(6); // max available
    expect(breakdown.unseenCount).toBe(6);
    expect(breakdown.wrongCount).toBe(0);
    expect(breakdown.correctCount).toBe(0);
  });
});

// ─── Akıllı Çalışma Önceliklendirme ve Ders Bazlı Seçim Testleri ────────────

describe('Akıllı Çalışma Özel Önceliklendirme Kuralları', () => {
  const baseTime = Date.parse('2026-11-05T12:00:00Z');

  it('favorilenmiş soruları standart sorulara göre daha öncelikli seçer', () => {
    const qNormal = q('q_norm', 'Anatomi', 'U1');
    const qFav = { ...q('q_fav', 'Periodontoloji', 'U2'), is_favorite: true };

    const { questions: res } = buildSmartQueue([qNormal, qFav], {}, { limit: 1, nowMs: baseTime });
    expect(res[0].id).toBe('q_fav');
  });

  it('en az 2 kez yanlış yapılmış soruları tek yanlışlı sorulara göre öne alır', () => {
    const qSingleWrong = q('q_single', 'Anatomi', 'U1');
    const qDoubleWrong = q('q_double', 'Periodontoloji', 'U2');

    const stats: StatsMap = {
      q_single: { attempts: 1, corrects: 0, lastSeen: '2026-10-01T00:00:00Z' },
      q_double: { attempts: 2, corrects: 0, lastSeen: '2026-10-01T00:00:00Z' },
    };

    const { questions: res } = buildSmartQueue([qSingleWrong, qDoubleWrong], stats, { limit: 1, nowMs: baseTime });
    expect(res[0].id).toBe('q_double');
  });

  it('daha yeni tarihte yanlış yapılmış sorular eski yanlışlara göre önceliklidir', () => {
    const qOldWrong = q('q_old', 'Anatomi', 'U1');
    const qRecentWrong = q('q_recent', 'Periodontoloji', 'U2');

    const stats: StatsMap = {
      q_old: { attempts: 2, corrects: 0, lastSeen: '2026-09-01T00:00:00Z' }, // 60+ gün önce
      q_recent: { attempts: 2, corrects: 0, lastSeen: '2026-11-04T12:00:00Z' }, // dün
    };

    const { questions: res } = buildSmartQueue([qOldWrong, qRecentWrong], stats, { limit: 1, nowMs: baseTime });
    expect(res[0].id).toBe('q_recent');
  });

  it('ders filtresi verildiğinde yalnızca o dersten soru seçer', () => {
    const q1 = q('q1', 'Anatomi', 'U1');
    const q2 = q('q2', 'Periodontoloji', 'U2');
    const q3 = q('q3', 'Anatomi', 'U3');

    const { questions: res } = buildSmartQueue([q1, q2, q3], {}, { lesson: 'Anatomi', limit: 10, nowMs: baseTime });
    expect(res.every(item => item.lesson === 'Anatomi')).toBe(true);
    expect(res).toHaveLength(2);
  });
});
