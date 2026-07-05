import { describe, it, expect, vi, beforeEach } from 'vitest';

const deleteQuestionMock = vi.fn();
const deleteSkeletonsFromCacheMock = vi.fn().mockResolvedValue(undefined);
const deleteQuestionsFromContentCacheMock = vi.fn().mockResolvedValue(undefined);

vi.mock('../supabase', () => ({
  deleteQuestion: (...args: unknown[]) => deleteQuestionMock(...args),
}));
vi.mock('../idb', () => ({
  deleteSkeletonsFromCache: (...args: unknown[]) => deleteSkeletonsFromCacheMock(...args),
  deleteQuestionsFromContentCache: (...args: unknown[]) => deleteQuestionsFromContentCacheMock(...args),
}));

import {
  enqueuePendingDelete,
  getPendingDeletes,
  removePendingDeletes,
  hasPendingDeletes,
  flushPendingDeletes,
} from '../pendingDeletes';

describe('pendingDeletes', () => {
  beforeEach(() => {
    localStorage.clear();
    deleteQuestionMock.mockReset().mockResolvedValue(undefined);
    deleteSkeletonsFromCacheMock.mockClear();
    deleteQuestionsFromContentCacheMock.mockClear();
  });

  it('enqueue ekler ve tekrarı engeller', () => {
    enqueuePendingDelete('q1');
    enqueuePendingDelete('q2');
    enqueuePendingDelete('q1'); // duplicate
    expect(getPendingDeletes()).toEqual(['q1', 'q2']);
    expect(hasPendingDeletes()).toBe(true);
  });

  it('removePendingDeletes yalnızca verilenleri düşürür', () => {
    enqueuePendingDelete('q1');
    enqueuePendingDelete('q2');
    removePendingDeletes(['q1']);
    expect(getPendingDeletes()).toEqual(['q2']);
  });

  it('boş kuyrukta flush no-op döner ve ağa gitmez', async () => {
    const res = await flushPendingDeletes();
    expect(res).toEqual({ deleted: [], failed: [] });
    expect(deleteQuestionMock).not.toHaveBeenCalled();
  });

  it('flush başarılı silmeleri DB + cache + kuyruktan temizler', async () => {
    enqueuePendingDelete('q1');
    enqueuePendingDelete('q2');
    const res = await flushPendingDeletes();
    expect(res.deleted.sort()).toEqual(['q1', 'q2']);
    expect(res.failed).toEqual([]);
    expect(deleteQuestionMock).toHaveBeenCalledTimes(2);
    expect(deleteSkeletonsFromCacheMock).toHaveBeenCalledWith(['q1', 'q2']);
    expect(deleteQuestionsFromContentCacheMock).toHaveBeenCalledWith(['q1', 'q2']);
    expect(getPendingDeletes()).toEqual([]);
  });

  it('flush başarısız id\'leri kuyrukta tutar, başarılıları temizler', async () => {
    enqueuePendingDelete('ok');
    enqueuePendingDelete('boom');
    deleteQuestionMock.mockImplementation(async (id: string) => {
      if (id === 'boom') throw new Error('RLS denied');
    });
    const res = await flushPendingDeletes();
    expect(res.deleted).toEqual(['ok']);
    expect(res.failed).toEqual(['boom']);
    // Başarısız kuyrukta kalır, başarılı düşer
    expect(getPendingDeletes()).toEqual(['boom']);
    // Cache temizliği yalnızca başarılı id için
    expect(deleteSkeletonsFromCacheMock).toHaveBeenCalledWith(['ok']);
  });
});
