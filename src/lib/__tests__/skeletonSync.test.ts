import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  rows: [] as Array<{ id: string; lesson: string; unit: string; quality_flag: null; updated_at: string }>,
  cached: [] as Array<{ id: string; lesson: string; unit: string; quality_flag: null; updated_at: string }>,
}));

vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({ from: (table: string) => {
    let start = 0; let end = 999; let lower = ''; let upper = '';
    const chain = {
      select: () => chain, or: () => chain, order: () => chain,
      in: () => chain,
      gt: (_field: string, value: string) => { lower = value; return chain; },
      lte: (_field: string, value: string) => { upper = value; return chain; },
      eq: () => chain,
      range: (from: number, to: number) => { start = from; end = to; return chain; },
      then: (resolve: (value: unknown) => void) => {
        const rows = table === 'questions'
          ? mocks.rows.filter(row => (!lower || row.updated_at > lower) && (!upper || row.updated_at <= upper))
          : [];
        resolve({ data: rows.slice(start, Math.min(end + 1, start + 1000)), error: null });
      },
    };
    return chain;
  } }),
}));

vi.mock('../idb', () => ({
  getCachedSkeletons: vi.fn(async () => mocks.cached),
  saveSkeletonsToCache: vi.fn(async (rows) => { mocks.cached = [...rows]; }),
  deleteSkeletonsFromCache: vi.fn(async () => {}),
  clearAllSkeletonsCache: vi.fn(async () => { mocks.cached = []; }),
  getQuestionsFromContentCache: vi.fn(async () => []),
  saveQuestionsToContentCache: vi.fn(async () => {}),
  getCachedQuestions: vi.fn(async () => []), saveQuestionsToCache: vi.fn(async () => {}),
  deleteQuestionsFromCache: vi.fn(async () => {}),
}));

import { fetchSkeletons, fetchQuestionsByIds } from '../supabase';
import { getQuestionsFromContentCache, saveQuestionsToContentCache } from '../idb';

describe('soru iskeleti senkronizasyonu', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    mocks.cached = [];
    mocks.rows = Array.from({ length: 1250 }, (_, i) => ({
      id: String(i).padStart(4, '0'), lesson: i < 1000 ? 'Radyoloji' : 'Pedodonti',
      unit: 'Deneme', quality_flag: null, updated_at: '2026-01-02T00:00:00.000Z',
    }));
  });

  it('1000 kayıt sınırını aşan değişikliklerde tüm dersleri getirir', async () => {
    localStorage.setItem('dus_purge_heal_v458_1', 'true');
    localStorage.setItem('dus_skeleton_pagination_heal_v1', 'true');
    localStorage.setItem('skeletons_last_sync', '2026-01-01T00:00:00.000Z');
    mocks.cached = [{ id: 'old', lesson: 'Anatomi', unit: 'Deneme', quality_flag: null, updated_at: '2025-01-01T00:00:00.000Z' }];
    const rows = await fetchSkeletons();
    expect(rows.filter(q => q.lesson === 'Radyoloji')).toHaveLength(1000);
    expect(rows.filter(q => q.lesson === 'Pedodonti')).toHaveLength(250);
  });

  it('eski eksik önbelleği tam listeyle bir kez onarır', async () => {
    localStorage.setItem('dus_purge_heal_v458_1', 'true');
    localStorage.setItem('skeletons_last_sync', '2026-11-01T00:00:00.000Z');
    mocks.cached = [mocks.rows[0]];
    const rows = await fetchSkeletons();
    expect(rows.filter(q => q.lesson === 'Radyoloji')).toHaveLength(1000);
    expect(rows.filter(q => q.lesson === 'Pedodonti')).toHaveLength(250);
  });

  it('içerik önbelleği erişilemiyorsa soruları yine sunucudan döndürür', async () => {
    mocks.rows = [mocks.rows[0]];
    vi.mocked(getQuestionsFromContentCache).mockRejectedValueOnce(new Error('IndexedDB unavailable'));
    vi.mocked(saveQuestionsToContentCache).mockRejectedValueOnce(new Error('Disk full'));
    await expect(fetchQuestionsByIds(['0000'])).resolves.toHaveLength(1);
  });
});
