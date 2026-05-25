import { describe, it, expect, vi, beforeEach } from 'vitest';

// ─── Mocks (hoisted before imports) ──────────────────────────────────────────
// @supabase/supabase-js client'ı mock'la — upsert'e giden payload'ı yakala.

const upsertMock = vi.fn().mockResolvedValue({ error: null });

vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    from: () => ({
      upsert: upsertMock,
    }),
  }),
}));

vi.mock('../dateUtils', () => ({
  todayStr: () => '2024-06-15',
}));

import { pushStatsToCloud, type CloudStat } from '../supabase';

const DEVICE = 'dev_test';
const STATS: Record<string, CloudStat> = {
  q1: { attempts: 2, corrects: 1, lastSeen: '2024-06-15T10:00:00Z' },
};

beforeEach(() => {
  upsertMock.mockClear();
});

describe('pushStatsToCloud — user_id koruma', () => {
  it('userId verilince satırlara user_id ekler', async () => {
    await pushStatsToCloud(DEVICE, STATS, 'user-123');
    expect(upsertMock).toHaveBeenCalledTimes(1);
    const [rows, opts] = upsertMock.mock.calls[0];
    expect(opts).toEqual({ onConflict: 'device_id,question_id' });
    expect(rows[0]).toHaveProperty('user_id', 'user-123');
  });

  it('userId YOKSA user_id alanını tamamen dışarıda bırakır (conflict update mevcut değeri ezmesin)', async () => {
    await pushStatsToCloud(DEVICE, STATS);
    expect(upsertMock).toHaveBeenCalledTimes(1);
    const [rows] = upsertMock.mock.calls[0];
    // user_id null bile gönderilmemeli — PostgREST yalnızca gönderilen sütunları update eder
    expect(Object.prototype.hasOwnProperty.call(rows[0], 'user_id')).toBe(false);
  });

  it('payload device_id ve question_id içerir', async () => {
    await pushStatsToCloud(DEVICE, STATS);
    const [rows] = upsertMock.mock.calls[0];
    expect(rows[0].device_id).toBe(DEVICE);
    expect(rows[0].question_id).toBe('q1');
  });

  it('boş stats için upsert çağrılmaz', async () => {
    const res = await pushStatsToCloud(DEVICE, {});
    expect(upsertMock).not.toHaveBeenCalled();
    expect(res).toEqual({ pushed: 0, total: 0, errors: [] });
  });
});
