import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// ─── Mocks (hoisted before imports) ──────────────────────────────────────────

vi.mock('../supabase', () => ({
  pushStatsToCloud: vi.fn().mockResolvedValue({ pushed: 0, total: 0, errors: [] }),
  pullAllDeviceStats: vi.fn().mockResolvedValue({}),
  pushUserData: vi.fn().mockResolvedValue(undefined),
  pullUserData: vi.fn().mockResolvedValue(null),
  clearDeviceStats: vi.fn().mockResolvedValue(undefined),
}));

vi.mock('../dateUtils', () => ({
  todayStr: vi.fn(() => '2024-06-15'),
  addDays: (dateStr: string, days: number): string => {
    const [y, m, d] = dateStr.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    date.setDate(date.getDate() + days);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  },
}));

import {
  loadAllStats,
  loadStreak,
  getStatFor,
  getWeakQuestionIds,
  getUnitProgress,
  getRecentActivity,
  getDifficultyLabel,
  saveQuestionStat,
  syncStatsDown,
  setSyncUserId,
  type StatsMap,
} from '../stats';
import { todayStr } from '../dateUtils';
import { pullAllDeviceStats } from '../supabase';

const TODAY = '2024-06-15';
const YESTERDAY = '2024-06-14';
const TWO_DAYS_AGO = '2024-06-13';

// localStorage key constants (mirrored from stats.ts)
const STATS_KEY = 'dus_question_stats';
const STREAK_KEY = 'dus_study_streak';
const PENDING_SYNC_KEY = 'dus_pending_sync';

// ─── Setup ────────────────────────────────────────────────────────────────────

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  vi.mocked(todayStr).mockReturnValue(TODAY);
  setSyncUserId('test-user');
});

afterEach(() => {
  vi.useRealTimers();
  vi.mocked(todayStr).mockReturnValue(TODAY);
});

// ─── loadAllStats ─────────────────────────────────────────────────────────────

describe('loadAllStats', () => {
  it('returns empty object when localStorage is empty', () => {
    expect(loadAllStats()).toEqual({});
  });

  it('returns parsed stats map', () => {
    const data: StatsMap = {
      q1: { attempts: 3, corrects: 2, lastSeen: TODAY, wrongChoices: [] },
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(data));
    expect(loadAllStats()).toEqual(data);
  });

  it('returns empty object on malformed JSON', () => {
    localStorage.setItem(STATS_KEY, 'not-json');
    expect(loadAllStats()).toEqual({});
  });
});

// ─── getStatFor ───────────────────────────────────────────────────────────────

describe('getStatFor', () => {
  it('returns null when question has no stat', () => {
    expect(getStatFor('unknown')).toBeNull();
  });

  it('returns the stat when it exists', () => {
    const data: StatsMap = {
      q1: { attempts: 5, corrects: 3, lastSeen: TODAY, wrongChoices: [] },
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(data));
    expect(getStatFor('q1')).toEqual(data.q1);
  });
});

// ─── saveQuestionStat ─────────────────────────────────────────────────────────

describe('saveQuestionStat', () => {
  it('creates a new stat entry on first call', () => {
    saveQuestionStat('q1', true);
    const stat = getStatFor('q1');
    expect(stat).not.toBeNull();
    expect(stat!.attempts).toBe(1);
    expect(stat!.corrects).toBe(1);
  });

  it('increments attempts and corrects on correct answer', () => {
    saveQuestionStat('q1', true);
    saveQuestionStat('q1', true);
    const stat = getStatFor('q1');
    expect(stat!.attempts).toBe(2);
    expect(stat!.corrects).toBe(2);
  });

  it('increments attempts but not corrects on incorrect answer', () => {
    saveQuestionStat('q1', false, 'B');
    const stat = getStatFor('q1');
    expect(stat!.attempts).toBe(1);
    expect(stat!.corrects).toBe(0);
  });

  it('records wrong choice on incorrect answer', () => {
    saveQuestionStat('q1', false, 'C');
    const stat = getStatFor('q1');
    expect(stat!.wrongChoices).toHaveLength(1);
    expect(stat!.wrongChoices![0].selected).toBe('C');
  });

  it('does not record wrong choice on correct answer', () => {
    saveQuestionStat('q1', true, 'A');
    expect(getStatFor('q1')!.wrongChoices).toHaveLength(0);
  });
});

// ─── Streak ───────────────────────────────────────────────────────────────────

describe('streak via saveQuestionStat', () => {
  it('starts streak at 1 on first study day', () => {
    saveQuestionStat('q1', true);
    expect(loadStreak().currentStreak).toBe(1);
  });

  it('does not increment streak when already studied today', () => {
    saveQuestionStat('q1', true);
    saveQuestionStat('q2', true);
    expect(loadStreak().currentStreak).toBe(1);
  });

  it('increments streak on consecutive day', () => {
    localStorage.setItem(STREAK_KEY, JSON.stringify({
      currentStreak: 1, lastStudyDate: YESTERDAY, longestStreak: 1,
    }));
    saveQuestionStat('q1', true);
    expect(loadStreak().currentStreak).toBe(2);
  });

  it('resets streak to 1 after a gap', () => {
    localStorage.setItem(STREAK_KEY, JSON.stringify({
      currentStreak: 5, lastStudyDate: TWO_DAYS_AGO, longestStreak: 5,
    }));
    saveQuestionStat('q1', true);
    expect(loadStreak().currentStreak).toBe(1);
  });

  it('updates longestStreak when current exceeds it', () => {
    localStorage.setItem(STREAK_KEY, JSON.stringify({
      currentStreak: 3, lastStudyDate: YESTERDAY, longestStreak: 3,
    }));
    saveQuestionStat('q1', true);
    const streak = loadStreak();
    expect(streak.longestStreak).toBe(4);
  });
});

// ─── getWeakQuestionIds ───────────────────────────────────────────────────────

describe('getWeakQuestionIds', () => {
  beforeEach(() => {
    const data: StatsMap = {
      q1: { attempts: 5, corrects: 1, lastSeen: TODAY, wrongChoices: [] }, // 20% — weak
      q2: { attempts: 5, corrects: 4, lastSeen: TODAY, wrongChoices: [] }, // 80% — not weak
      q3: { attempts: 1, corrects: 0, lastSeen: TODAY, wrongChoices: [] }, // only 1 attempt — below minAttempts=2
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(data));
  });

  it('returns IDs of questions below the correct-rate threshold', () => {
    const ids = getWeakQuestionIds(2, 0.5);
    expect(ids).toContain('q1');
    expect(ids).not.toContain('q2');
  });

  it('excludes questions below minAttempts', () => {
    expect(getWeakQuestionIds(2, 0.5)).not.toContain('q3');
  });

  it('returns IDs sorted by correct rate ascending (worst first)', () => {
    const data: StatsMap = {
      q1: { attempts: 5, corrects: 2, lastSeen: TODAY, wrongChoices: [] }, // 40%
      q2: { attempts: 5, corrects: 1, lastSeen: TODAY, wrongChoices: [] }, // 20%
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(data));
    const ids = getWeakQuestionIds(2, 0.5);
    expect(ids[0]).toBe('q2'); // 20% comes first
  });
});

// ─── getUnitProgress ──────────────────────────────────────────────────────────

describe('getUnitProgress', () => {
  it('returns zero counts when no stats', () => {
    const result = getUnitProgress(['q1', 'q2', 'q3']);
    expect(result).toEqual({ solved: 0, correct: 0, total: 3, totalAttempts: 0, totalCorrects: 0 });
  });

  it('counts solved and correct questions', () => {
    const data: StatsMap = {
      q1: { attempts: 3, corrects: 3, lastSeen: TODAY, wrongChoices: [] }, // correct rate 100%
      q2: { attempts: 4, corrects: 1, lastSeen: TODAY, wrongChoices: [] }, // correct rate 25%
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(data));
    const result = getUnitProgress(['q1', 'q2', 'q3']);
    expect(result.total).toBe(3);
    expect(result.solved).toBe(2);
    expect(result.correct).toBe(1); // only q1 has >= 50% rate
    expect(result.totalAttempts).toBe(7);
    expect(result.totalCorrects).toBe(4);
  });
});

// ─── getDifficultyLabel ───────────────────────────────────────────────────────

describe('getDifficultyLabel', () => {
  it('returns null when no stat exists', () => {
    expect(getDifficultyLabel('unknown')).toBeNull();
  });

  it('returns null when attempts is 0', () => {
    const data: StatsMap = {
      q1: { attempts: 0, corrects: 0, lastSeen: '', wrongChoices: [] },
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(data));
    expect(getDifficultyLabel('q1')).toBeNull();
  });

  it('returns easy for high accuracy', () => {
    const data: StatsMap = {
      q1: { attempts: 5, corrects: 5, lastSeen: TODAY, wrongChoices: [] }, // 100%
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(data));
    expect(getDifficultyLabel('q1')).toBe('easy');
  });

  it('returns hard for low accuracy', () => {
    const data: StatsMap = {
      q1: { attempts: 5, corrects: 1, lastSeen: TODAY, wrongChoices: [] }, // 20%
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(data));
    expect(getDifficultyLabel('q1')).toBe('hard');
  });
});

// ─── getRecentActivity ────────────────────────────────────────────────────────

describe('getRecentActivity', () => {
  it('returns `days` entries', () => {
    expect(getRecentActivity(14)).toHaveLength(14);
  });

  it('returns 0 count for days with no activity', () => {
    const result = getRecentActivity(7);
    result.forEach(entry => expect(entry.count).toBe(0));
  });

  it('counts activity correctly', () => {
    saveQuestionStat('q1', true);
    saveQuestionStat('q2', false, 'B');
    const result = getRecentActivity(7);
    const todayEntry = result.find(e => e.date === TODAY);
    expect(todayEntry?.count).toBe(2);
  });
});

// ─── syncStatsDown merge logic ────────────────────────────────────────────────

describe('syncStatsDown', () => {
  it('uses cloud stats as authoritative when there is no pending local sync', async () => {
    const localStats: StatsMap = {
      q1: { attempts: 920, corrects: 700, lastSeen: TODAY, wrongChoices: [] },
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(localStats));

    vi.mocked(pullAllDeviceStats).mockResolvedValueOnce({
      q1: { attempts: 600, corrects: 450, lastSeen: YESTERDAY } as any,
    });

    await syncStatsDown();

    expect(loadAllStats().q1.attempts).toBe(600);
  });

  it('preserves local stats when pending push fails', async () => {
    const localStats: StatsMap = {
      q1: { attempts: 5, corrects: 4, lastSeen: TODAY, wrongChoices: [] },
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(localStats));
    localStorage.setItem(PENDING_SYNC_KEY, '1');

    vi.mocked(pullAllDeviceStats).mockResolvedValueOnce({
      q1: { attempts: 2, corrects: 1, lastSeen: YESTERDAY } as any,
    });
    const { pushStatsToCloud } = await import('../supabase');
    vi.mocked(pushStatsToCloud).mockRejectedValueOnce(new Error('offline'));

    await syncStatsDown();

    expect(loadAllStats().q1.attempts).toBe(5);
  });

  it('merges wrongChoices from both local and cloud without duplicates', async () => {
    const ts = '2024-06-14T10:00:00.000Z';
    const localStats: StatsMap = {
      q1: {
        attempts: 3, corrects: 1, lastSeen: YESTERDAY,
        wrongChoices: [{ selected: 'B', timestamp: ts }],
      },
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(localStats));

    vi.mocked(pullAllDeviceStats).mockResolvedValueOnce({
      q1: {
        attempts: 4, corrects: 1, lastSeen: TODAY,
        wrongChoices: [
          { selected: 'B', timestamp: ts },          // duplicate
          { selected: 'C', timestamp: '2024-06-15T08:00:00.000Z' }, // new
        ],
      } as any,
    });

    await syncStatsDown();
    const merged = loadAllStats();
    expect(merged.q1.wrongChoices).toHaveLength(2); // B + C, no duplicate
  });
});
