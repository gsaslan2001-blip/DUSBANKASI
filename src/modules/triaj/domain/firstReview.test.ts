import { describe, expect, test, vi, afterEach } from 'vitest';
import { emptyTriajState } from './defaults';
import { planUnit, recordTaskResult } from './state';

afterEach(() => vi.useRealTimers());
describe('İlk tekrar sözleşmesi', () => {
  const planned = () => planUnit(emptyTriajState(), 'Anatomi', '1. Ünite - Kemikler', '2026-11-01');
  test.each([20, 25, 40, 150])('%i soru kova atamadan gerçek tarihten tek T+3 açar', total => {
    const state = planned();
    const input = { date: '2026-11-02', correct: total, wrong: 0, empty: 0 };
    const result = recordTaskResult(state, state.tasks[0].id, input);
    expect(result.topics[0].currentBucket).toBe('NONE');
    expect(result.tasks.filter(t => t.status === 'open')).toMatchObject([{ stage: 'T3_MAIN', dueDate: '2026-11-05', questionCount: 40 }]);
    expect(result.dailyGoals[input.date].completedQuestions).toBe(total);
    expect(result.dailyGoals[input.date].completedStudyMinutes).toBe(0);
    expect(recordTaskResult(result, state.tasks[0].id, input)).toBe(result);
  });
  test('19 soru reddedilir; eski 10 soruluk kayıt korunur', () => {
    const state = planned();
    expect(state.tasks[0].questionCount).toBe(20);
    expect(() => recordTaskResult(state, state.tasks[0].id, { date: '2026-11-02', correct: 19, wrong: 0, empty: 0 })).toThrow();
    const legacy = { ...state, tasks: [{ ...state.tasks[0], ruleVersion: undefined, questionCount: 10 }] };
    expect(recordTaskResult(legacy, legacy.tasks[0].id, { date: '2026-11-02', correct: 8, wrong: 2, empty: 0 }).triageHistory[0].total).toBe(10);
  });
  test('geleceğe sonuç yazılmaz', () => {
    vi.useFakeTimers(); vi.setSystemTime(new Date('2026-11-11T12:00:00Z'));
    const state = planned();
    expect(() => recordTaskResult(state, state.tasks[0].id, { date: '2026-11-12', correct: 20, wrong: 0, empty: 0 })).toThrow();
  });
});
