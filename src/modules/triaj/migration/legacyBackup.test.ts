import { describe, expect, it } from 'vitest';
import { LEGACY_PLANNER_LESSONS, LEGACY_UNIT_MAPPING, legacyUnitMapping, selectLegacyUnit } from '../data/legacyUnitMapping';
import { emptyTriajState } from '../domain/defaults';
import { isCanonicalUnit, unitKey } from '../domain/catalog';
import { applyLegacyImport, previewLegacyImport, resolveArchivedTopic } from './legacyBackup';

const studyDay = '2026-11-04';
const topic = (id: string, subjectId: string, title: string, extra: Record<string, unknown> = {}) => ({
  id, subjectId, unitNumber: 1, title, subtopics: [], status: 'T0_DONE',
  currentBucket: 'NONE', priority: 'P3_MEDIUM', t0Date: '2026-11-01',
  discharged: false, createdAt: studyDay, updatedAt: studyDay, ...extra,
});
const log = (id: string, source: ReturnType<typeof topic>) => ({
  id, date: studyDay, topicId: source.id, topicTitle: source.title, subjectId: source.subjectId,
  subjectName: 'Radyoloji', stage: 'T3_MAIN', correct: 28, wrong: 11, empty: 1, total: 40,
  percentage: 70, resultingBucket: 'YELLOW', resultingPriority: 'P2_HIGH',
  clinicalDiagnosis: '', recommendedAction: '',
});
const backup = (data: Record<string, unknown>) => ({ version: '2.0-ExcelToApp', ...data });

describe('legacy catalogue', () => {
  it('accounts for all legacy source IDs and uses exact canonical target labels', () => {
    expect(LEGACY_UNIT_MAPPING).toHaveLength(227);
    expect(new Set(LEGACY_UNIT_MAPPING.map(({ sourceId }) => sourceId)).size).toBe(227);
    expect(LEGACY_UNIT_MAPPING.filter(({ relation }) => relation === 'exact')).toHaveLength(138);
    for (const mapping of LEGACY_UNIT_MAPPING) {
      for (const { lesson, unit } of mapping.targets) expect(isCanonicalUnit(lesson, unit)).toBe(true);
    }
    expect(LEGACY_PLANNER_LESSONS.B11).toBe('Pedodonti');
    expect(LEGACY_PLANNER_LESSONS.B14).toBe('Periodontoloji');
  });

  it('uses subject scope instead of source index and never duplicates split scores', () => {
    expect(selectLegacyUnit(legacyUnitMapping('B13', '5- ANKRAJ', 'unit-b13-05'))?.unit)
      .toBe('Ünite 4 - ANKRAJ');
    const split = legacyUnitMapping('PROTETIK DIŞ TEDAVISI (9 Ünite)', '2- OKLÜZYON');
    expect(split?.relation).toBe('split');
    expect(selectLegacyUnit(split)).toBeUndefined();
    expect(selectLegacyUnit(split, ['37-Tam Protezlerde Oklüzyon'])?.unit).toBe('37-Tam Protezlerde Oklüzyon');
    expect(selectLegacyUnit(split, split?.targets.map(({ unit }) => unit))).toBeUndefined();
    expect(legacyUnitMapping('B13', 'Tanınmayan başlık', 'unit-b13-05')).toBeUndefined();
  });
});

describe('legacy transfer', () => {
  it('preserves zero, regenerates T+14 from the actual result, and deduplicates repeated import', () => {
    const subject = topic('unit-b14-05', 'B14', '5- PERİODONTİTİS', {
      status: 'TRIAGED', currentBucket: 'YELLOW', t14DueDate: '2026-11-15',
      t3Score: { date: studyDay, correct: 28, wrong: 12, empty: 0, total: 40, percentage: 70 },
    });
    const initial = emptyTriajState();
    const input = backup({ topics: [subject], triageLogs: [log('l1', subject)] });
    const preview = previewLegacyImport(input, initial);
    const state = applyLegacyImport(initial, preview);
    expect(preview.counts).toMatchObject({ accepted: 2, archived: 0, duplicates: 0 });
    expect(state.tasks).toMatchObject([{ dueDate: '2026-11-18', stage: 'T14_VERIFICATION' }]);
    expect(state.topics[0].t3Score?.empty).toBe(0);
    expect(previewLegacyImport(input, state).counts.duplicates).toBe(2);
    expect(applyLegacyImport(state, preview)).toBe(state);
  });

  it('archives competing active states for a merged unit and preserves both logs', () => {
    const intra = topic('unit-b10-07', 'B10', '7- İntraoral Radyografi');
    const extra = topic('unit-b10-08', 'B10', '8- Ekstraoral Radyografi', { clinicalNotes: 'Başka çalışma' });
    const initial = emptyTriajState();
    const preview = previewLegacyImport(backup({
      topics: [intra, extra], triageLogs: [log('a', intra), log('b', extra)],
    }), initial);
    expect(preview.conflicts.map(({ sourceId }) => sourceId)).toEqual([intra.id, extra.id]);
    const state = applyLegacyImport(initial, preview);
    expect(state.topics).toHaveLength(0);
    expect(state.triageHistory).toHaveLength(2);
    expect(state.triageHistory.every(({ topicId }) => topicId === unitKey('Radyoloji', 'Ünite 8 - Dişhekimliğinde Radyografi Teknikleri'))).toBe(true);
  });

  it('resolves a split unit explicitly and attaches its archived log to that target once', () => {
    const split = topic('unit-b15-02', 'B15', '2- OKLÜZYON');
    const initial = emptyTriajState();
    const preview = previewLegacyImport(backup({ topics: [split], triageLogs: [log('a', split)] }), initial);
    expect(preview.unresolved).toHaveLength(2);
    const state = applyLegacyImport(initial, preview);
    const resolved = resolveArchivedTopic(state, preview.unresolved[0].id, 'Protez', '37-Tam Protezlerde Oklüzyon');
    expect(resolved.topics).toMatchObject([{ title: '37-Tam Protezlerde Oklüzyon' }]);
    expect(resolved.triageHistory).toMatchObject([{ topicTitle: '37-Tam Protezlerde Oklüzyon' }]);
    expect(applyLegacyImport(resolved, preview)).toBe(resolved);
  });

  it('keeps a single daily goal on its own date and does not replace edited goals', () => {
    const goal = { date: studyDay, targetStudyMinutes: 20, completedStudyMinutes: 0, targetQuestions: 30, completedQuestions: 0,
      block1Done: false, block2Done: false, block3Done: false, block4Done: false, notes: '', checklist: [] };
    const input = { dus_triage_goals_v2: JSON.stringify(goal), exportedAt: '2026-11-11T09:00:00Z' };
    const initial = emptyTriajState();
    const state = applyLegacyImport(initial, previewLegacyImport(input, initial));
    expect(Object.keys(state.dailyGoals)).toEqual([studyDay]);
    expect(state.dailyGoals[studyDay].completedStudyMinutes).toBe(0);
    const changed = { ...state, dailyGoals: { [studyDay]: { ...goal, notes: 'Yeni not' } } };
    expect(applyLegacyImport(changed, previewLegacyImport(input, changed)).dailyGoals[studyDay].notes).toBe('Yeni not');
  });

  it('retains same-day focus conflicts without overwriting the saved value', () => {
    const workbook = (minutes: number) => ({ version: 'excel-master-v1', records: [
      { kind: 'focus', source: 'excel-master', sourceId: studyDay, data: { date: studyDay, minutes } },
    ] });
    const initial = emptyTriajState();
    const state = applyLegacyImport(initial, previewLegacyImport(workbook(0), initial));
    const conflicting = previewLegacyImport(workbook(25), state);
    expect(conflicting.counts.conflicts).toBe(1);
    expect(applyLegacyImport(state, conflicting).focus[studyDay]).toBe(0);
  });

  it('deduplicates a workbook focus record against a native value and reports a changed one', () => {
    const native = { ...emptyTriajState(), focus: { [studyDay]: 20 } };
    const input = (minutes: number) => ({ version: 'excel-master-v1', records: [
      { kind: 'focus', source: 'excel-master', sourceId: studyDay, data: { date: studyDay, minutes } },
    ] });
    expect(previewLegacyImport(input(20), native).counts.duplicates).toBe(1);
    expect(previewLegacyImport(input(25), native).counts.conflicts).toBe(1);
  });

  it('applies a valid manual due date to a soft task and preserves the earlier date', () => {
    const initial = emptyTriajState();
    const yellow = topic('K0001', 'ANATOMI (10 Ünite)', 'Ünite 01 - Kemikler', {
      status: 'TRIAGED', currentBucket: 'YELLOW', priority: 'P2_HIGH', lastStudiedDate: studyDay, manualDueDate: '2026-11-20',
    });
    const input = { version: 'excel-master-v1', records: [
      { kind: 'topic', source: 'excel-master', sourceId: 'K0001', data: yellow },
    ] };
    const state = applyLegacyImport(initial, previewLegacyImport(input, initial));
    expect(state.topics[0].t14DueDate).toBe('2026-11-20');
    expect(state.tasks).toMatchObject([{ dueDate: '2026-11-20', previousDueDates: ['2026-11-18'] }]);
  });
});
