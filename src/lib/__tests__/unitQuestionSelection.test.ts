import { describe, expect, it } from 'vitest';
import type { QuestionSkeleton } from '../../data';
import type { StatsMap } from '../stats';
import { selectUnitQuestionIds } from '../studyQueue';

function skeleton(id: string): QuestionSkeleton {
  return { id, lesson: 'Fizyoloji', unit: 'Dolaşım' };
}

describe('selectUnitQuestionIds', () => {
  it('görülmemiş havuz yeterliyken 40 benzersiz ID seçer ve sürekli doğru soruları dışarıda bırakır', () => {
    const unseen = Array.from({ length: 45 }, (_, index) => skeleton(`unseen-${index + 1}`));
    const mastered = Array.from({ length: 5 }, (_, index) => skeleton(`mastered-${index + 1}`));
    const stats: StatsMap = Object.fromEntries(mastered.map((question) => [
      question.id,
      {
        attempts: 3,
        corrects: 3,
        lastSeen: '2026-08-18T00:00:00.000Z',
        timeSpentHistory: [20, 25, 22],
      },
    ]));

    const selected = selectUnitQuestionIds([...unseen, unseen[0], ...mastered], stats, { kind: 'count', count: 40 });

    expect(selected).toHaveLength(40);
    expect(new Set(selected)).toHaveLength(40);
    expect(selected.every((id) => id.startsWith('unseen-'))).toBe(true);
  });

  it('diğer havuzlar tükenince doğru favorisizleri de ekler', () => {
    const candidates = [
      skeleton('unseen-1'),
      skeleton('fast-correct'),
      skeleton('slow-correct'),
      skeleton('previous-wrong'),
      { ...skeleton('favorite-correct'), is_favorite: true },
      skeleton('unseen-2'),
    ];
    const stats: StatsMap = {
      'fast-correct': {
        attempts: 4,
        corrects: 4,
        lastSeen: '2026-08-18T00:00:00.000Z',
        timeSpentHistory: [18, 20, 22, 19],
      },
      'slow-correct': {
        attempts: 2,
        corrects: 2,
        lastSeen: '2026-08-18T00:00:00.000Z',
        timeSpentHistory: [80, 90],
      },
      'previous-wrong': {
        attempts: 3,
        corrects: 1,
        lastSeen: '2026-08-18T00:00:00.000Z',
        timeSpentHistory: [25, 30, 28],
      },
      'favorite-correct': {
        attempts: 2,
        corrects: 2,
        lastSeen: '2026-08-18T00:00:00.000Z',
        timeSpentHistory: [25, 30],
      },
    };

    expect(selectUnitQuestionIds(candidates, stats, { kind: 'count', count: 6 }).sort()).toEqual([
      'unseen-1',
      'unseen-2',
      'previous-wrong',
      'favorite-correct',
      'fast-correct',
      'slow-correct',
    ].sort());
  });

  it('hepsini çalış seçiminde görülmüşler dahil tüm benzersiz IDleri döndürür', () => {
    const stats: StatsMap = {
      seen: {
        attempts: 1,
        corrects: 0,
        lastSeen: '2026-08-18T00:00:00.000Z',
      },
    };

    expect(selectUnitQuestionIds(
      [skeleton('unseen-1'), skeleton('seen'), skeleton('unseen-1'), skeleton('unseen-2')],
      stats,
      { kind: 'all' },
    ).sort()).toEqual(['unseen-1', 'seen', 'unseen-2'].sort());
  });

  function pool(sizes = [20, 20, 20, 50, 20]) {
    const stats: StatsMap = {};
    const candidates = sizes.flatMap((size, group) => Array.from({ length: size }, (_, i) => {
      const id = `${group}-${i}`;
      if (group !== 3) stats[id] = {
        attempts: 2, corrects: group === 1 || group === 2 ? 1 : 2,
        lastSeen: '2026-10-04T00:00:00Z',
      };
      return { ...skeleton(id), is_favorite: group === 0 || group === 2 };
    }));
    return { candidates, stats };
  }

  it.each([10, 20, 40, 100])('%i soruda her onluyu 1/2/3/4 dağılımıyla seçer', (count) => {
    const { candidates, stats } = pool([100, 100, 100, 100, 100]);
    const ids = selectUnitQuestionIds(candidates, stats, { kind: 'count', count });
    expect(ids).toHaveLength(count);
    expect(new Set(ids).size).toBe(count);
    for (let start = 0; start < count; start += 10) {
      const block = ids.slice(start, start + 10);
      expect([0, 1, 2, 3, 4].map(group => block.filter(id => id.startsWith(`${group}-`)).length))
        .toEqual([1, 2, 3, 4, 0]);
    }
  });

  it('eksik kontenjanı önce favoriler sonra yanlışlar sonra yenilerle tamamlar', () => {
    const { candidates, stats } = pool([20, 20, 0, 20, 20]);
    const ids = selectUnitQuestionIds(candidates, stats, { kind: 'count', count: 10 });
    expect([0, 1, 3, 4].map(group => ids.filter(id => id.startsWith(`${group}-`)).length))
      .toEqual([4, 2, 4, 0]);
    const other = pool([0, 20, 0, 20, 20]);
    const wrongIds = selectUnitQuestionIds(other.candidates, other.stats, { kind: 'count', count: 10 });
    expect(wrongIds.filter(id => id.startsWith('1-'))).toHaveLength(6);
    expect(wrongIds.filter(id => id.startsWith('3-'))).toHaveLength(4);
  });

  it('favorili görülmemişlere de eksik kontenjanlarda öncelik verir', () => {
    const { candidates, stats } = pool([0, 20, 0, 20, 20]);
    candidates.filter(q => q.id.startsWith('3-')).forEach(q => { q.is_favorite = true; });
    const ids = selectUnitQuestionIds(candidates, stats, { kind: 'count', count: 10 });
    expect(ids.filter(id => id.startsWith('3-'))).toHaveLength(8);
  });

  it('doğru favorisizleri diğer havuzlar tükenmeden almaz', () => {
    const { candidates, stats } = pool([1, 1, 1, 1, 20]);
    const ids = selectUnitQuestionIds(candidates, stats, { kind: 'count', count: 10 });
    expect(ids).toHaveLength(10);
    expect(ids.filter(id => id.startsWith('4-'))).toHaveLength(6);
    expect([0, 1, 2, 3].every(group => ids.includes(`${group}-0`))).toBe(true);
  });

  it.each([1, 7, 13, 37, 1000, 0, -1])('özel sayı %i için havuz sınırını ve benzersizliği korur', (count) => {
    const { candidates, stats } = pool();
    const ids = selectUnitQuestionIds([...candidates, candidates[0]], stats, { kind: 'count', count });
    expect(ids).toHaveLength(Math.min(candidates.length, Math.max(0, count)));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('boş havuzda boş döner', () => {
    expect(selectUnitQuestionIds([], {}, { kind: 'all' })).toEqual([]);
  });
});
