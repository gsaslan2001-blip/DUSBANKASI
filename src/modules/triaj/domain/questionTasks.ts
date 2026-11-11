import type { QuestionSkeleton } from '../../../data';
import { isNormalQuestion } from '../../../config/canonicalUnits';
import type { StatsMap } from '../../../lib/stats';
import { selectUnitQuestionIds } from '../../../lib/studyQueue';
import type { TriajState, TriajTask, TriajTaskSummary } from '../types';
import { currentTaskDate } from './state';

export function dueQuestionTasks(tasks: TriajTaskSummary[], today: string): TriajTaskSummary[] {
  const priority = (task: TriajTask) => task.status === 'completed' ? 3 : task.stage === 'T0_SAMPLING' ? 2
    : task.dueDate < today ? 0 : 1;
  return tasks.filter(task => task.status === 'completed'
    ? task.completedDate === today : task.status === 'open' && currentTaskDate(task, today) <= today)
    .sort((a, b) => priority(a) - priority(b) || a.dueDate.localeCompare(b.dueDate) || a.id.localeCompare(b.id));
}

export function preparationForStage(stage: TriajTask['stage']): string | undefined {
  switch (stage) {
    case 'T0_SAMPLING': return 'Konu çalışması ve boş kâğıtla aktif geri çağırma';
    case 'T14_VERIFICATION': return 'İşaretli alt başlıklara 5 dakika bakma';
    case 'SATURDAY_REPAIR': return '25 dakika aktif yeniden kurma';
  }
}

export function taskQuestionIds(task: TriajTaskSummary, pool: QuestionSkeleton[], stats: StatsMap): string[] {
  const excluded = new Set(task.excludedQuestionIds);
  const normLesson = (task.lesson || '').trim().toLocaleLowerCase('tr');
  const normUnit = (task.unit || '').trim().toLocaleLowerCase('tr');

  const candidates = pool.filter(question => {
    const qLesson = (question.lesson || '').trim().toLocaleLowerCase('tr');
    const qUnit = (question.unit || '').trim().toLocaleLowerCase('tr');
    return qLesson === normLesson &&
      (task.stage === 'BRANCH_EXAM' || qUnit === normUnit) &&
      isNormalQuestion(question) && !excluded.has(question.id);
  });

  return selectUnitQuestionIds(candidates, stats, { kind: 'count', count: task.questionCount });
}

export function summarizeTasks(state: TriajState): TriajTaskSummary[] {
  const sampling = new Map(state.triageHistory.filter(record => record.stage === 'T0_SAMPLING')
    .map(record => [record.topicId, record.questionIds]));
  return state.tasks.map(task => task.stage === 'T3_MAIN' && !task.setId
    ? { ...task, excludedQuestionIds: sampling.get(task.topicId) } : task);
}

export function prepareQuestionTasks(
  state: TriajState, tasks: TriajTask[], pool: QuestionSkeleton[], stats: StatsMap, today: string,
): TriajState {
  const ids = new Set(tasks.map(task => task.id));
  let changed = false;
  const next = state.tasks.map(task => {
    if (!ids.has(task.id) || task.status !== 'open' || task.setId || currentTaskDate(task, today) > today) return task;
    const history = state.triageHistory.filter(record => record.topicId === task.topicId);
    const sampling = task.stage === 'T3_MAIN'
      ? history.filter(record => record.stage === 'T0_SAMPLING').at(-1)?.questionIds ?? [] : [];
    const questionIds = taskQuestionIds({ ...task, excludedQuestionIds: sampling }, pool, stats);
    if (questionIds.length < task.questionCount) {
      if (task.availableCount === questionIds.length) return task;
      changed = true;
      return { ...task, availableCount: questionIds.length };
    }
    changed = true;
    return { ...task, availableCount: questionIds.length, setId: crypto.randomUUID(), questionIds };
  });
  return changed ? { ...state, tasks: next } : state;
}
