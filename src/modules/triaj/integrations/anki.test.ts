import { afterEach, describe, expect, it, vi } from 'vitest';
import { exportAnkiCards, fetchLocalAnkiActivity, parseAnkiSnapshot } from './anki';

const counts = { total: 25, new: 10, learning: 5, young: 6, mature: 4 };
const snapshot = {
  timestamp: '2026-11-11 02:00:00',
  today: { reviews: 0, minutes: 0, retention: 1 },
  summary: counts,
  branches: [
    { ...counts, branch: 'Endodonti' },
    { ...counts, branch: 'Histoloji & Embriyoloji' },
    { ...counts, branch: 'Cerrahi' },
  ],
};

afterEach(() => vi.unstubAllGlobals());

describe('Anki adapters', () => {
  it('preserves ExcelMaster source, measured zero, and unknown measurements', () => {
    const parsed = parseAnkiSnapshot(snapshot);
    expect(parsed).toMatchObject({
      source: 'excelmaster', lastSyncDate: '2026-11-11', syncedAt: '2026-11-10T23:00:00.000Z',
      dailyReviewCount: 0, overallRetentionPercent: 100, totalCards: 25,
    });
    expect(parsed.averageTimeSecondsPerCard).toBeUndefined();
    expect(parsed.branchStats.map(({ branchCode }) => branchCode)).toEqual(['B02', 'B09', 'B14']);
    expect(parsed.branchStats[0].retentionPercent).toBeUndefined();
  });

  it('rejects a conflicting branch identifier instead of using row order', () => {
    expect(() => parseAnkiSnapshot({
      ...snapshot, branches: [{ ...counts, branch: 'Endodonti', id: 'B12' }],
    })).toThrow(/Anki branşı eşleştirilemedi/);
  });

  it('exports one Cloze row per text and quotes tabs, quotes and multiline content', () => {
    const text = '{{c1::Bir "eşik"}}';
    const output = exportAnkiCards([{ text, extra: '1\t2\n3', tags: 'dus' }, { text }]);
    expect(output).toBe(
      '#separator:Tab\n#html:false\n#notetype:Cloze\n#tags column:3\n"{{c1::Bir ""eşik""}}"\t"1\t2\n3"\t"dus"\n',
    );
  });

  it('only sends permission and review-count actions to local AnkiConnect', async () => {
    const fetcher = vi.fn()
      .mockResolvedValueOnce(Response.json({ result: { permission: 'granted' }, error: null }))
      .mockResolvedValueOnce(Response.json({ result: 32, error: null }));
    vi.stubGlobal('fetch', fetcher);
    await expect(fetchLocalAnkiActivity()).resolves.toEqual({ reviews: 32 });
    expect(fetcher.mock.calls.map(([url, request]) => [
      url, request.credentials, JSON.parse(request.body).action,
    ])).toEqual([
      ['http://127.0.0.1:8765', 'omit', 'requestPermission'],
      ['http://127.0.0.1:8765', 'omit', 'getNumCardsReviewedToday'],
    ]);
  });
});
