import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

/**
 * Cross-device sync REGRESYON kilidi.
 *
 * Kullanıcı tek kişi ama birden çok cihazda çalışıyor; sync "iyi çalışıyor" ve
 * BÖYLE KALMALI (kural #1, #3). Bu testler syncStatsDown'ın MAX-MERGE
 * değişmezlerini siyah-kutu olarak kilitler: ilerleme asla geri gitmemeli.
 */

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

import { loadAllStats, loadStreak, syncStatsDown, setSyncUserId } from '../stats';
import { pullAllDeviceStats, pullUserData, pushStatsToCloud } from '../supabase';

const TODAY = '2024-06-15';
const YESTERDAY = '2024-06-14';
const STATS_KEY = 'dus_question_stats';
const STREAK_KEY = 'dus_study_streak';
const ACTIVITY_KEY = 'dus_activity_log';
const PENDING_SYNC_KEY = 'dus_pending_sync';

function day(total: number, correct: number, incorrect: number) {
  return { total, correct, incorrect, byLesson: {} };
}
function readActivity() {
  return JSON.parse(localStorage.getItem(ACTIVITY_KEY) ?? '{}');
}
/** pullUserData'yı anahtar bazlı yönlendirir. */
function cloudUserData(activity: unknown, streak: unknown) {
  vi.mocked(pullUserData).mockImplementation(async (_uid: string, key: string) => {
    if (key === 'activity_log') return activity as never;
    if (key === 'streak') return streak as never;
    return null as never;
  });
}

beforeEach(() => {
  localStorage.clear();
  setSyncUserId('test-user');
  vi.mocked(pullAllDeviceStats).mockResolvedValue({});
  vi.mocked(pullUserData).mockResolvedValue(null as never);
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('aktivite log MAX-MERGE (gün bazlı)', () => {
  it('bulut günü daha yüksekse bulut kazanır', async () => {
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify({ [TODAY]: day(10, 8, 2) }));
    cloudUserData({ [TODAY]: day(20, 15, 5) }, null);

    await syncStatsDown();

    expect(readActivity()[TODAY].total).toBe(20);
  });

  it('yerel günü daha yüksekse yerel korunur (ilerleme geri gitmez)', async () => {
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify({ [YESTERDAY]: day(30, 25, 5) }));
    cloudUserData({ [YESTERDAY]: day(5, 4, 1) }, null);

    await syncStatsDown();

    expect(readActivity()[YESTERDAY].total).toBe(30);
  });

  it('iki cihazın farklı günleri birleşir', async () => {
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify({ [YESTERDAY]: day(12, 10, 2) }));
    cloudUserData({ [TODAY]: day(8, 6, 2) }, null);

    await syncStatsDown();

    const log = readActivity();
    expect(log[YESTERDAY].total).toBe(12);
    expect(log[TODAY].total).toBe(8);
  });

  it('bulut günü kazandığında correct/incorrect = max', async () => {
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify({ [TODAY]: day(10, 9, 1) }));
    cloudUserData({ [TODAY]: day(20, 5, 15) }, null);

    await syncStatsDown();

    const d = readActivity()[TODAY];
    expect(d.total).toBe(20);
    expect(d.correct).toBe(9);   // max(9, 5)
    expect(d.incorrect).toBe(15); // max(1, 15)
  });
});

describe('streak MERGE', () => {
  it('longestStreak her zaman iki cihazın maksimumu', async () => {
    localStorage.setItem(STREAK_KEY, JSON.stringify({ currentStreak: 3, lastStudyDate: YESTERDAY, longestStreak: 12 }));
    cloudUserData(null, { currentStreak: 5, lastStudyDate: TODAY, longestStreak: 8 });

    await syncStatsDown();

    expect(loadStreak().longestStreak).toBe(12); // max(12, 8)
  });

  it('daha güncel lastStudyDate olan cihazın currentStreak değeri alınır', async () => {
    localStorage.setItem(STREAK_KEY, JSON.stringify({ currentStreak: 3, lastStudyDate: YESTERDAY, longestStreak: 3 }));
    cloudUserData(null, { currentStreak: 9, lastStudyDate: TODAY, longestStreak: 9 });

    await syncStatsDown();

    const s = loadStreak();
    expect(s.currentStreak).toBe(9);
    expect(s.lastStudyDate).toBe(TODAY);
  });

  it('yerel daha günceldiyse yerel currentStreak korunur', async () => {
    localStorage.setItem(STREAK_KEY, JSON.stringify({ currentStreak: 7, lastStudyDate: TODAY, longestStreak: 7 }));
    cloudUserData(null, { currentStreak: 2, lastStudyDate: YESTERDAY, longestStreak: 4 });

    await syncStatsDown();

    const s = loadStreak();
    expect(s.currentStreak).toBe(7);
    expect(s.lastStudyDate).toBe(TODAY);
    expect(s.longestStreak).toBe(7); // max(7, 4)
  });
});

describe('delta çekim local stats\'ı SİLMEZ (regresyon kilidi — 1098 → 12 hatası)', () => {
  it('bekleyen push YOKKEN, delta cloud alt kümesi local\'i değiştirmez, üstüne birleşir', async () => {
    // Local'de 3 soru var (geçmiş ilerleme). Cloud delta yalnızca q1\'i döndürür.
    localStorage.setItem(STATS_KEY, JSON.stringify({
      q1: { attempts: 1, corrects: 1, lastSeen: YESTERDAY, wrongChoices: [] },
      q2: { attempts: 4, corrects: 3, lastSeen: YESTERDAY, wrongChoices: [] },
      q3: { attempts: 2, corrects: 0, lastSeen: YESTERDAY, wrongChoices: [] },
    }));
    // PENDING_SYNC ayarlanmadı → pendingPushFailed = false (normal yol)
    vi.mocked(pullAllDeviceStats).mockResolvedValueOnce({
      q1: { attempts: 3, corrects: 2, lastSeen: TODAY } as never,
    });

    await syncStatsDown();

    const stats = loadAllStats();
    // q2 ve q3 KORUNUR (eski hata bunları siliyordu → toplam 1\'e düşüyordu)
    expect(Object.keys(stats).sort()).toEqual(['q1', 'q2', 'q3']);
    expect(stats.q2.attempts).toBe(4);
    expect(stats.q3.attempts).toBe(2);
    // q1 cloud ile max-merge edilir
    expect(stats.q1.attempts).toBe(3); // max(1, 3)
    expect(stats.q1.corrects).toBe(2); // max(1, 2)
  });
});

describe('soru istatistiği GREATEST (bekleyen push başarısızsa)', () => {
  it('attempts ve corrects iki cihazın maksimumunu alır', async () => {
    localStorage.setItem(STATS_KEY, JSON.stringify({
      q1: { attempts: 5, corrects: 2, lastSeen: TODAY, wrongChoices: [] },
    }));
    localStorage.setItem(PENDING_SYNC_KEY, '1');
    vi.mocked(pushStatsToCloud).mockRejectedValueOnce(new Error('offline'));
    vi.mocked(pullAllDeviceStats).mockResolvedValueOnce({
      q1: { attempts: 3, corrects: 4, lastSeen: YESTERDAY } as never,
    });

    await syncStatsDown();

    const q1 = loadAllStats().q1;
    expect(q1.attempts).toBe(5); // max(5, 3)
    expect(q1.corrects).toBe(4); // max(2, 4) — hiçbir cihazın doğrusu kaybolmaz
  });
});
