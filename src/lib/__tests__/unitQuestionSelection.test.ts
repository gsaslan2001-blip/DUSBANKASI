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

  it('görülmemişler yetmezse yalnız yanlış ve doğru-favorileri ekler', () => {
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

    expect(selectUnitQuestionIds(candidates, stats, { kind: 'count', count: 6 })).toEqual([
      'unseen-1',
      'unseen-2',
      'previous-wrong',
      'favorite-correct',
    ]);
  });

  it('tüm görülmemişler seçiminde yalnız görülmemiş benzersiz IDleri döndürür', () => {
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
      { kind: 'all-unseen' },
    )).toEqual(['unseen-1', 'unseen-2']);
  });
});
