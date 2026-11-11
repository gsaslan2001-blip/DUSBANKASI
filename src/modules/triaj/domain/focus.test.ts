import { describe, expect, it } from 'vitest';
import {
  buildTickTickFocusSummary, classifyFocusSegment, consolidateTickTickRecords, toTurkeyDateString,
} from './focus';
import type { RawTickTickFocusRecord } from './focus';

function session(id: string, type: 0 | 1, startTime: string, minutes: number): RawTickTickFocusRecord {
  return { id, type, startTime, duration: minutes * 60_000 };
}

describe('TickTick focus calculations', () => {
  it('keeps the workbook segment boundaries', () => {
    expect([0, 2.99, 3, 7.5, 8, 10, 10.01].map(classifyFocusSegment)).toEqual([
      '0-3 Saat', '0-3 Saat', '3-7 Saat', '3-7 Saat', '8-10 Saat', '8-10 Saat', '10+ Saat',
    ]);
  });

  it('uses Istanbul midnight and deduplicates each focus type independently', () => {
    expect(toTurkeyDateString('2026-10-28T22:30:00.000+0000')).toBe('2026-10-29');
    const pomo = { ...session('same', 0, '2026-10-28T22:30:00Z', 360), note: 'T+0' };
    const stopwatch = { ...session('same', 1, '2026-10-29T14:00:00Z', 120), tasks: [{ title: 'T+3' }] };
    expect(consolidateTickTickRecords([pomo, stopwatch, pomo])).toEqual([
      expect.objectContaining({
        date: '2026-10-29', dayNameTR: 'Perşembe', pomoCount: 1, stopwatchCount: 1,
        pomoMinutes: 360, stopwatchMinutes: 120, totalMinutes: 480, segment: '8-10 Saat', notes: ['T+0', 'T+3'],
      }),
    ]);
  });

  it('uses only positive durations in the last seven calendar days and leaves today distinct', () => {
    const records = [
      session('old', 0, '2026-11-04T20:30:00Z', 660),
      session('cutoff', 0, '2026-11-04T21:30:00Z', 60),
      session('recent', 1, '2026-11-08T09:00:00Z', 120),
      session('zero', 1, '2026-11-09T09:00:00Z', 0),
    ];
    const today = buildTickTickFocusSummary(records, '2026-11-11');
    const selected = buildTickTickFocusSummary(records, '2026-11-11', '2026-11-04');
    expect(today).toMatchObject({
      todayDate: '2026-11-11', activeDate: '2026-11-11', periodStart: '2026-08-14', periodEnd: '2026-11-11',
      sevenDayStart: '2026-11-05', sevenDayAvgHours: 1.5, sevenDayTotalMinutes: 180,
      activeDayStats: { totalMinutes: 0 },
    });
    expect(selected).toMatchObject({
      todayDate: '2026-11-11', activeDate: '2026-11-04', sevenDayAvgHours: 1.5,
      activeDayStats: { totalMinutes: 660 },
    });
  });
});
