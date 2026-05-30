import { describe, it, expect, vi, beforeAll } from 'vitest';

// stats.ts modül yüklenirken supabase.ts'i import eder; supabase.ts ise modül
// seviyesinde createClient(undefined,...) çağırıp patlar. Bu yüzden mock'lanır.
// Buradaki testler SAF analiz fonksiyonlarını hedefler (localStorage/cloud yok).
vi.mock('../supabase', () => ({
  pushStatsToCloud: vi.fn(),
  pullAllDeviceStats: vi.fn(),
  pushUserData: vi.fn(),
  pullUserData: vi.fn(),
  clearDeviceStats: vi.fn(),
}));

vi.mock('../dateUtils', () => ({
  todayStr: () => '2024-06-15',
  addDays: (dateStr: string, days: number): string => {
    const [y, m, d] = dateStr.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    date.setDate(date.getDate() + days);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  },
}));

import {
  accuracyToDifficulty,
  difficultyLabel,
  normalizeActivity,
  computeOverviewStats,
  computeTrend,
  computeActivityTrend,
  generateKpiAlerts,
  MASTERY_THRESHOLD,
  WEAK_THRESHOLD,
  type StatsMap,
  type ActivityPoint,
  type OverviewStats,
  type StreakData,
} from '../stats';
import type { Question } from '../../data';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function q(id: string, lesson: string, unit: string): Question {
  return {
    id, lesson, unit, question: `Q${id}`,
    options: { A: 'a', B: 'b', C: 'c', D: 'd', E: 'e' },
    correctAnswer: 'A', explanation: '',
  };
}

function stat(attempts: number, corrects: number, wrong: { selected: string; timestamp: string }[] = []): StatsMap[string] {
  return { attempts, corrects, lastSeen: '2024-06-15T10:00:00Z', wrongChoices: wrong };
}

function actPoint(date: string, count: number): ActivityPoint {
  return { date, count, correct: count, incorrect: 0, byLesson: {} };
}

// ─── accuracyToDifficulty ──────────────────────────────────────────────────────

describe('accuracyToDifficulty', () => {
  it('returns neutral 5 when there are no attempts', () => {
    expect(accuracyToDifficulty(0, 0)).toBe(5);
  });

  it('returns 1 (easiest) for perfect accuracy', () => {
    expect(accuracyToDifficulty(5, 5)).toBe(1);
  });

  it('returns high difficulty for low accuracy', () => {
    expect(accuracyToDifficulty(1, 4)).toBe(8); // rate 0.25 → round(10 - 2.25)
  });

  it('clamps within 1..10', () => {
    expect(accuracyToDifficulty(0, 3)).toBe(10); // rate 0 → 10
    expect(accuracyToDifficulty(3, 3)).toBe(1);
  });
});

// ─── difficultyLabel ───────────────────────────────────────────────────────────

describe('difficultyLabel', () => {
  it('maps <4 to easy', () => expect(difficultyLabel(1)).toBe('easy'));
  it('maps 4..6 to medium', () => expect(difficultyLabel(5)).toBe('medium'));
  it('maps >=7 to hard', () => expect(difficultyLabel(8)).toBe('hard'));
});

// ─── normalizeActivity ─────────────────────────────────────────────────────────

describe('normalizeActivity', () => {
  it('returns zeros for undefined', () => {
    expect(normalizeActivity(undefined)).toEqual({ total: 0, correct: 0, incorrect: 0, byLesson: {} });
  });

  it('treats a bare number as legacy total', () => {
    expect(normalizeActivity(7)).toEqual({ total: 7, correct: 0, incorrect: 0, byLesson: {} });
  });

  it('fills missing fields on a partial object', () => {
    expect(normalizeActivity({ total: 3 } as never)).toEqual({ total: 3, correct: 0, incorrect: 0, byLesson: {} });
  });
});

// ─── computeOverviewStats ──────────────────────────────────────────────────────

describe('computeOverviewStats', () => {
  const questions: Question[] = [
    q('q1', 'Patoloji', 'U1'),
    q('q2', 'Patoloji', 'U1'),
    q('q3', 'Fizyoloji', 'U2'),
  ];

  it('returns zeroed overview when there are no stats', () => {
    const o = computeOverviewStats(questions, {});
    expect(o.bankTotal).toBe(3);
    expect(o.solvedUnique).toBe(0);
    expect(o.unsolvedUnique).toBe(3);
    expect(o.accuracy).toBe(0);
    expect(o.coverage).toBe(0);
    expect(o.mastery.untouched).toBe(3);
  });

  describe('with a mixed mastered/weak/untouched set', () => {
    const stats: StatsMap = {
      q1: stat(5, 5),                                              // 100% → mastered + perfect + easy
      q2: stat(4, 1, [{ selected: 'B', timestamp: '2024-06-14T10:00:00Z' }]), // 25% → weak + hard
      // q3 untouched
    };
    let o: OverviewStats;
    beforeAll(() => { o = computeOverviewStats(questions, stats); });

    it('counts solved vs unsolved unique questions', () => {
      expect(o.solvedUnique).toBe(2);
      expect(o.unsolvedUnique).toBe(1);
    });

    it('aggregates attempts and corrects', () => {
      expect(o.totalAttempts).toBe(9);
      expect(o.totalCorrects).toBe(6);
      expect(o.totalIncorrects).toBe(3);
    });

    it('computes overall accuracy and coverage as rounded percentages', () => {
      expect(o.accuracy).toBe(67);  // 6/9
      expect(o.coverage).toBe(67);  // 2/3
    });

    it('classifies mastery buckets', () => {
      expect(o.mastery).toEqual({ untouched: 1, weak: 1, learning: 0, mastered: 1 });
      expect(o.masteredUnique).toBe(1);
      expect(o.perfectUnique).toBe(1);
      expect(o.wrongEverUnique).toBe(1);
    });

    it('counts weak questions (>=2 attempts & rate <50%)', () => {
      expect(o.weakCount).toBe(1);
    });

    it('bins difficulty of solved questions', () => {
      expect(o.difficulty).toEqual({ easy: 1, medium: 0, hard: 1 });
    });

    it('tallies wrong-choice distribution', () => {
      expect(o.wrongChoiceDist.B).toBe(1);
      expect(o.wrongChoiceDist.A).toBe(0);
    });

    it('surfaces the top lesson by solved count', () => {
      expect(o.topLessonBySolved?.lesson).toBe('Patoloji');
      expect(o.topLessonBySolved?.solved).toBe(2);
    });
  });

  it('keeps mastery thresholds at their documented values', () => {
    expect(MASTERY_THRESHOLD).toBe(0.8);
    expect(WEAK_THRESHOLD).toBe(0.5);
  });
});

// ─── computeTrend ──────────────────────────────────────────────────────────────

describe('computeTrend', () => {
  it('detects an upward trend with percentage', () => {
    expect(computeTrend(240, 200)).toEqual({ direction: 'up', delta: 40, deltaPct: 20 });
  });

  it('detects a downward trend', () => {
    expect(computeTrend(150, 200)).toEqual({ direction: 'down', delta: -50, deltaPct: -25 });
  });

  it('is flat when equal', () => {
    expect(computeTrend(100, 100)).toEqual({ direction: 'flat', delta: 0, deltaPct: 0 });
  });

  it('reports 100% when growing from zero', () => {
    expect(computeTrend(50, 0)).toEqual({ direction: 'up', delta: 50, deltaPct: 100 });
  });

  it('reports 0% when both are zero', () => {
    expect(computeTrend(0, 0)).toEqual({ direction: 'flat', delta: 0, deltaPct: 0 });
  });
});

// ─── computeActivityTrend ──────────────────────────────────────────────────────

describe('computeActivityTrend', () => {
  it('compares the last N days against the previous N days', () => {
    // previous 2 days: 10 + 10 = 20; recent 2 days: 30 + 30 = 60
    const activity = [actPoint('d1', 10), actPoint('d2', 10), actPoint('d3', 30), actPoint('d4', 30)];
    expect(computeActivityTrend(activity, 2)).toEqual({ direction: 'up', delta: 40, deltaPct: 200 });
  });
});

// ─── generateKpiAlerts ─────────────────────────────────────────────────────────

describe('generateKpiAlerts', () => {
  function overview(partial: Partial<OverviewStats> = {}): OverviewStats {
    const base = computeOverviewStats([q('q1', 'L', 'U')], {});
    return { ...base, accuracy: 70, coverage: 50, byLesson: [], ...partial };
  }
  const streak: StreakData = { currentStreak: 3, lastStudyDate: '2024-06-15', longestStreak: 5 };

  it('flags a critical alert when no questions solved today', () => {
    const activity = [actPoint('2024-06-14', 5), actPoint('2024-06-15', 0)];
    const alerts = generateKpiAlerts(overview(), streak, activity);
    expect(alerts.some(a => a.metric === 'daily_target' && a.level === 'critical')).toBe(true);
  });

  it('flags critical accuracy when below the critical threshold', () => {
    const activity = [actPoint('2024-06-15', 100)];
    const alerts = generateKpiAlerts(overview({ accuracy: 30 }), streak, activity);
    expect(alerts.some(a => a.metric === 'accuracy' && a.level === 'critical')).toBe(true);
  });

  it('never returns more than 5 alerts', () => {
    const activity = [actPoint('2024-06-15', 0)];
    const lessons = Array.from({ length: 10 }, (_, i) => ({
      lesson: `L${i}`, total: 100, solved: 50, attempts: 50, corrects: 5, accuracy: 10, coverage: 50,
    }));
    const alerts = generateKpiAlerts(overview({ accuracy: 10, coverage: 5, byLesson: lessons }), streak, activity);
    expect(alerts.length).toBeLessThanOrEqual(5);
  });
});
