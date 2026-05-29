import { describe, it, expect, vi, beforeEach } from 'vitest';

const { upsertMock, rpcMock } = vi.hoisted(() => ({
  upsertMock: vi.fn().mockResolvedValue({ error: null }),
  rpcMock: vi.fn().mockResolvedValue({ error: null }),
}));

vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    rpc: rpcMock,
    from: () => ({
      upsert: upsertMock,
    }),
  }),
}));

vi.mock('../dateUtils', () => ({
  todayStr: () => '2024-06-15',
}));

import { pushStatsToCloud, saveSessionToCloud, type CloudStat } from '../supabase';

const DEVICE = 'dev_test';
const STATS: Record<string, CloudStat> = {
  q1: { attempts: 2, corrects: 1, lastSeen: '2024-06-15T10:00:00Z' },
};

beforeEach(() => {
  upsertMock.mockClear();
  rpcMock.mockClear();
});

describe('pushStatsToCloud user_id routing', () => {
  it('uses the merge RPC when userId is provided', async () => {
    const res = await pushStatsToCloud(DEVICE, STATS, 'user-123');

    expect(rpcMock).toHaveBeenCalledTimes(1);
    expect(upsertMock).not.toHaveBeenCalled();

    const [fnName, payload] = rpcMock.mock.calls[0];
    expect(fnName).toBe('upsert_stats_batch');
    expect(payload.rows[0]).toMatchObject({
      user_id: 'user-123',
      device_id: DEVICE,
      question_id: 'q1',
    });
    expect(res).toEqual({ pushed: 1, total: 1, errors: [] });
  });

  it('omits user_id and uses device upsert for anonymous stats', async () => {
    await pushStatsToCloud(DEVICE, STATS);

    expect(upsertMock).toHaveBeenCalledTimes(1);
    expect(rpcMock).not.toHaveBeenCalled();

    const [rows, opts] = upsertMock.mock.calls[0];
    expect(opts).toEqual({ onConflict: 'device_id,question_id' });
    expect(Object.prototype.hasOwnProperty.call(rows[0], 'user_id')).toBe(false);
  });

  it('includes device_id and question_id in anonymous payloads', async () => {
    await pushStatsToCloud(DEVICE, STATS);

    const [rows] = upsertMock.mock.calls[0];
    expect(rows[0].device_id).toBe(DEVICE);
    expect(rows[0].question_id).toBe('q1');
  });

  it('does not call Supabase for empty stats', async () => {
    const res = await pushStatsToCloud(DEVICE, {});

    expect(upsertMock).not.toHaveBeenCalled();
    expect(rpcMock).not.toHaveBeenCalled();
    expect(res).toEqual({ pushed: 0, total: 0, errors: [] });
  });
});

describe('active session cloud routing', () => {
  it('upserts authenticated sessions by user_id so devices converge', async () => {
    await saveSessionToCloud(DEVICE, { currentIndex: 31 }, 'user-123');

    expect(upsertMock).toHaveBeenCalledTimes(1);
    const [payload, opts] = upsertMock.mock.calls[0];
    expect(opts).toEqual({ onConflict: 'user_id' });
    expect(payload).toMatchObject({
      device_id: DEVICE,
      user_id: 'user-123',
      session_data: { currentIndex: 31 },
    });
  });

  it('keeps anonymous sessions scoped to device_id', async () => {
    await saveSessionToCloud(DEVICE, { currentIndex: 24 });

    expect(upsertMock).toHaveBeenCalledTimes(1);
    const [, opts] = upsertMock.mock.calls[0];
    expect(opts).toEqual({ onConflict: 'device_id' });
  });
});
