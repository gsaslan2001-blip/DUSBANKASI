import { describe, expect, test } from 'vitest';
import { emptyTriajState } from './defaults';
import { addSemanticError, currentTaskDate, focusAverage, planUnit, recordTaskResult, rescheduleTask } from './state';
import { addDays, evaluateSaturdayRepair, evaluateT14Verification, evaluateT3Triage, getTodayString } from './triage';
import { calculateWorkbookSWSPS } from './analytics';
import { dueQuestionTasks, prepareQuestionTasks } from './questionTasks';
import { branchForQuestion } from './simulation';
import type { TriajState, TriajTask } from '../types';

const lesson = 'Anatomi';
const unit = '1. Ünite - Kemikler';
const t0 = '2026-11-11';
const t3 = '2026-11-14';
const active = (state: TriajState) => state.tasks.find(task => task.status === 'open')!;
const complete = (state: TriajState, task: TriajTask, correct: number, date: string) =>
  recordTaskResult(state, task.id, { date, correct, wrong: 0, empty: task.questionCount - correct });

describe('TRİAJ çalışma protokolü', () => {
  test.each([[27, 'RED'], [28, 'YELLOW'], [33, 'YELLOW'], [34, 'GREEN']])('T+3 %i doğru → %s', (correct, expected) => {
    expect(evaluateT3Triage(correct, 40, t3).bucket).toBe(expected);
  });
  test.each([[13, 'RED'], [14, 'YELLOW'], [16, 'YELLOW'], [17, 'GREEN']])('T+14 %i doğru → %s', (correct, expected) => {
    expect(evaluateT14Verification(correct, 20, t3).bucket).toBe(expected);
  });
  test('yuvarlanmış 85 gösterimi ham %84 ile taburcu etmez ve test kotalarını doğrular', () => {
    expect(evaluateT14Verification(21, 25, t3).bucket).toBe('YELLOW');
    expect(evaluateT14Verification(11, 20, t3).bucket).toBe('RED');
    expect(() => evaluateT14Verification(10, 19, t3)).toThrow();
    expect(() => evaluateT3Triage(40.5, 40, t3)).toThrow();
  });
  test('T+14, T+0 yerine gerçek T+3 uygulamasından 14 gün sonra', () => {
    const planned = planUnit(emptyTriajState(), lesson, unit, t0);
    const sampled = complete(planned, active(planned), 9, t0);
    expect(active(sampled).dueDate).toBe(t3);
    const reviewed = complete(sampled, active(sampled), 33, t3);
    expect(active(reviewed).dueDate).toBe('2026-11-28');
    expect(active(reviewed).dueDate).not.toBe(addDays(t0, 14));
    const green = complete(reviewed, active(reviewed), 17, '2026-11-28');
    expect(active(green)).toBeUndefined();
    expect(green.topics[0].discharged).toBe(true);
  });
  test('Cumartesi ilk kez aynı gün, başarısız onarımda bir hafta ileri', () => {
    expect(evaluateT3Triage(27, 40, t3).nextScheduledDate).toBe(t3);
    expect(evaluateSaturdayRepair(23, 30, t3).nextScheduledDate).toBe('2026-11-21');
    expect(evaluateSaturdayRepair(24, 30, t3).nextScheduledDate).toBe('2026-11-28');
    const planned = planUnit(emptyTriajState(), lesson, unit, t0);
    const sampled = complete(planned, active(planned), 9, t0);
    const red = complete(sampled, active(sampled), 27, t3);
    expect(() => rescheduleTask(red, active(red).id, '2026-11-16')).toThrow('Cumartesi');
    expect(currentTaskDate(active(red), '2026-11-15')).toBe('2026-11-21');
  });
  test.each([[12, 'repair', true], [13, 'closed', false]])('15 soruluk hata doğrulamasında %i doğru', (score, status, repair) => {
    const planned = planUnit(emptyTriajState(), lesson, unit, t0);
    const sampled = complete(planned, active(planned), 10, t0);
    const green = complete(sampled, active(sampled), 40, t3);
    const withError = addSemanticError(green, {
      id: 'err', date: t3, source: 'Deneme', branchCode: 'B01', branchName: lesson,
      semanticCode: '', subtopic: unit, questionSummary: 'Soru', errorType: 'Bilgi',
      distractorAnalysis: '', ankiClozeStatus: 'Bekliyor', swspsScore: 1, protocolType: 4,
      topicId: green.topics[0].id,
    });
    const task = active(withError);
    expect(task.stage).toBe('ERROR_VERIFICATION');
    expect(task.dueDate).toBe('2026-11-17');
    const checked = complete(withError, task, score, task.dueDate);
    expect(checked.semanticErrors[0].verificationStatus).toBe(status);
    expect(active(checked)?.stage === 'SATURDAY_REPAIR').toBe(repair);
    expect(checked.topics[0].discharged).toBe(true);
  });
  test('T+0 setini kaydeder, T+3’ten çıkarır ve tekrar teslimde ikinci sonuç üretmez', () => {
    const pool = Array.from({ length: 50 }, (_, i) => ({ id: `q-${i}`, lesson, unit }));
    const planned = planUnit(emptyTriajState(), lesson, unit, t0);
    const ready = prepareQuestionTasks(planned, dueQuestionTasks(planned.tasks, t0), pool, {}, t0);
    const task = active(ready);
    const input = { date: t0, correct: 8, wrong: 1, empty: 1, questionIds: task.questionIds, setId: task.setId };
    expect(prepareQuestionTasks(ready, [task], pool, {}, t0)).toBe(ready);
    expect(() => recordTaskResult(ready, task.id, { ...input, setId: 'wrong' })).toThrow();
    expect(() => recordTaskResult(ready, task.id, { ...input, empty: 0 })).toThrow();
    const done = recordTaskResult(ready, task.id, input);
    expect(recordTaskResult(done, task.id, input)).toBe(done);
    const remaining = prepareQuestionTasks(done, dueQuestionTasks(done.tasks, t3), pool, {}, t3);
    expect(active(remaining).questionIds).toHaveLength(40);
    expect(active(remaining).questionIds?.some(id => task.questionIds?.includes(id))).toBe(false);
    expect(done.triageHistory).toHaveLength(1);
  });
  test('gecikme, erteleme, yetersiz havuz ve birden çok ünite', () => {
    const nextUnit = '2. Ünite - Eklemler';
    const first = planUnit(emptyTriajState(), lesson, unit, t0);
    const planned = planUnit(first, lesson, nextUnit, t3);
    const deferred = rescheduleTask(planned, first.tasks[0].id, '2026-11-15');
    const due = dueQuestionTasks(deferred.tasks, t3);
    expect(due.map(task => task.unit)).toEqual([nextUnit]);
    const partial = prepareQuestionTasks(deferred, due, [{ id: 'one', lesson, unit: nextUnit }], {}, t3);
    expect(partial.tasks[1]).toMatchObject({ availableCount: 1 });
    expect(partial.tasks[1].setId).toBeUndefined();
    expect(partial.tasks[0].previousDueDates).toEqual([t0]);
  });
  test('İstanbul gün sınırı ve yedi takvim günlük pozitif odak ortalaması', () => {
    expect(getTodayString(new Date('2026-11-10T20:59:59Z'))).toBe('2026-11-10');
    expect(getTodayString(new Date('2026-11-10T21:00:00Z'))).toBe(t0);
    expect(focusAverage({ '2026-11-04': 200, '2026-11-05': 20, [t0]: 40, '2026-11-12': 100 }, t0)).toBe(30);
  });
  test('workbook-v1 formülü ve R=1 oran/yüzde ayrımı', () => {
    const parameters = { weight: 1.3, repeatCount: 3, difficultyD: 8.5, daysElapsed: 2 };
    expect(calculateWorkbookSWSPS({ ...parameters, retrievability: { value: 65, unit: 'percent' } })).toBe(3.61);
    expect(calculateWorkbookSWSPS({ ...parameters, retrievability: { value: 1, unit: 'ratio' } })).toBe(0);
    expect(calculateWorkbookSWSPS({ ...parameters, retrievability: { value: 1, unit: 'percent' } })).toBeGreaterThan(0);
    expect(calculateWorkbookSWSPS({ ...parameters, retrievability: null })).toBeNull();
  });
  test('B11–B16 branşları ders anlamından ve Fizyoloji alt kapsamı ünite kökeninden gelir', () => {
    expect(['Periodontoloji', 'Ortodonti', 'Pedodonti', 'Endodonti', 'Restoratif', 'Protez']
      .map(lesson => branchForQuestion({ lesson, unit: '' }))).toEqual(['B11','B12','B13','B14','B15','B16']);
    expect(branchForQuestion({ lesson: 'Fizyoloji', unit: 'Histoloji - Hücre' })).toBe('B02');
    expect(branchForQuestion({ lesson: 'Fizyoloji', unit: 'Hücre Fizyolojisi' })).toBe('B03');
    expect(branchForQuestion({ lesson: 'Fizyoloji', unit: 'Deneme' })).toBeUndefined();
  });
});
