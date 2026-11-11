import { describe, expect, test } from 'vitest';
import { emptyTriajState } from './defaults';
import { planUnit, recordTaskResult, rescheduleTask, rollForwardOverdueRepairs, currentTaskDate } from './state';
import { getTopicNextTargetDate, calculateTopicDelayDays } from './analytics';
import { generateTriageReport, getNextSaturday } from './triage';

const LESSON = 'Anatomi';
const UNIT = '1. Ünite - Kemikler';
const T0 = '2026-11-01';

const planned = () => planUnit(emptyTriajState(), LESSON, UNIT, T0);

describe('Ünite ↔ ders sözleşmesi', () => {
  test('topic.subjectId ders ADINI taşır (kod değil)', () => {
    expect(planned().topics[0].subjectId).toBe(LESSON);
  });

  test('Kova raporu üniteyi doğru derse sayar ve ders adını gösterir', () => {
    // subjectId kod uzayına kayarsa bu test raporun 0 ders döndürmesini yakalar.
    let state = planned();
    state = recordTaskResult(state, state.tasks[0].id, { date: T0, correct: 15, wrong: 4, empty: 1 });
    const t3 = state.tasks.find(task => task.stage === 'T3_MAIN')!;
    state = recordTaskResult(state, t3.id, { date: '2026-11-04', correct: 30, wrong: 8, empty: 2 });

    const subjects = [
      { id: 'B01', name: LESSON, category: 'TEMEL_BILIMLER', cognitiveGroup: 'GRUP_A', questionCount: 6, weightPercentage: 5 },
      { id: 'B09', name: 'Cerrahi', category: 'KLINIK_BILIMLER', cognitiveGroup: 'GRUP_C', questionCount: 10, weightPercentage: 8.33 },
    ] as never;

    const report = generateTriageReport(subjects, state.topics, '2026-11-05');
    const summary = report.subjectSummaries.find(item => item.subjectId === 'B01')!;
    expect(summary.totalUnits).toBe(1);
    expect(summary.yellowCount).toBe(1);
    expect(report.subjectSummaries.find(item => item.subjectId === 'B09')!.totalUnits).toBe(0);
    // Acil görevde 'Ders' placeholder'ı değil gerçek ders adı görünmeli.
    expect(report.urgentTasks.map(task => task.subjectName)).toContain(LESSON);
  });
});

describe('Planlanmış ilk tekrarın tarih görünürlüğü', () => {
  test('planlanmış ama başlanmamış ünitenin sıradaki hedefi görevin vadesidir', () => {
    const state = planned();
    const topic = state.topics[0];
    const due = state.tasks[0].dueDate;
    expect(getTopicNextTargetDate(topic)).toBeUndefined();
    expect(getTopicNextTargetDate(topic, due)).toBe(due);
  });

  test('vadesi geçmiş planlanmış ünite gecikme gösterir', () => {
    const state = planned();
    const topic = state.topics[0];
    expect(calculateTopicDelayDays(topic, '2026-11-05')).toBe(0);
    expect(calculateTopicDelayDays(topic, '2026-11-05', topic && state.tasks[0].dueDate)).toBe(4);
  });
});

describe('planUnit yeniden planlama', () => {
  test('açık ilk tekrarın tarihini değiştirmek yeni döngü açmaz, görevi taşır', () => {
    const state = planned();
    const moved = planUnit(state, LESSON, UNIT, '2026-11-10');
    expect(moved.tasks).toHaveLength(1);
    expect(moved.tasks[0].dueDate).toBe('2026-11-10');
    expect(moved.tasks[0].previousDueDates).toEqual([T0]);
  });

  test('yeniden planlama tamamlanmış ünitenin ilerlemesini korur', () => {
    let state = planned();
    state = recordTaskResult(state, state.tasks[0].id, { date: T0, correct: 18, wrong: 1, empty: 1 });
    // T3 tamamlanmış; tüm görevler kapalı ama ünite hâlâ T3_PENDING.
    const topic = state.topics[0];
    expect(topic.status).toBe('T3_PENDING');
    expect(topic.t0Score?.correct).toBe(18);
  });
});

describe('Cumartesi onarımı vadesi', () => {
  test('vadesi geçmiş onarım en yakın Cumartesiye kalıcı olarak taşınır', () => {
    const saturday = '2026-11-07';
    expect(getNextSaturday(saturday)).toBe(saturday);
    const state = {
      ...planned(),
      tasks: [{ ...planned().tasks[0], stage: 'SATURDAY_REPAIR' as const, dueDate: saturday }],
    };
    const rolled = rollForwardOverdueRepairs(state, '2026-11-11');
    expect(rolled.tasks[0].dueDate).toBe('2026-11-14');
    expect(rolled.topics[0].saturdayRepairDate).toBe('2026-11-14');
    expect(currentTaskDate(rolled.tasks[0], '2026-11-11')).toBe(rolled.tasks[0].dueDate);
  });

  test('vadesi gelmemiş onarım değişmez (aynı nesne döner)', () => {
    const state = {
      ...planned(),
      tasks: [{ ...planned().tasks[0], stage: 'SATURDAY_REPAIR' as const, dueDate: '2026-11-14' }],
    };
    expect(rollForwardOverdueRepairs(state, '2026-11-11')).toBe(state);
  });
});

describe('rescheduleTask', () => {
  test('onarımı Cumartesi olmayan güne taşımak reddedilir', () => {
    const state = {
      ...planned(),
      tasks: [{ ...planned().tasks[0], stage: 'SATURDAY_REPAIR' as const, dueDate: '2026-11-07' }],
    };
    expect(() => rescheduleTask(state, state.tasks[0].id, '2026-11-12')).toThrow();
  });
});
