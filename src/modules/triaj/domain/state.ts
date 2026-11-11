import type { ScoreDetail, SemanticErrorRecord, TestStage, TopicUnit, TriajState, TriajTask } from '../types';
import type { CompactAnswer } from '../../../types/app';
import { canonicalUnitNumber, isCanonicalUnit, unitKey } from './catalog';
import { addDays, evaluateSaturdayRepair, evaluateT14Verification, evaluateT3Triage, getNextSaturday, getTodayString } from './triage';

export function isCalendarDate(date: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(date) && addDays(date, 0) === date;
}

function requireDate(date: string) {
  if (!isCalendarDate(date)) throw new Error('Geçerli bir takvim tarihi girin.');
}

export function stageQuestionCount(stage: TestStage, state: TriajState): number {
  switch (stage) {
    case 'T0_SAMPLING': return 10;
    case 'T3_MAIN': return 40;
    case 'T14_VERIFICATION': return state.parameters.verificationQuestions ?? 20;
    case 'SATURDAY_REPAIR': return 30;
    case 'ERROR_VERIFICATION': return 15;
    case 'BRANCH_EXAM': return 40;
  }
}

function addTask(state: TriajState, topic: TopicUnit, stage: TestStage, date: string, errorId?: string): TriajState {
  requireDate(date);
  const sequence = state.tasks.filter(task => task.topicId === topic.id).length + 1;
  const id = `${topic.id}/${sequence}/${stage}`;
  return {
    ...state,
    tasks: [...state.tasks, {
      id, topicId: topic.id, lesson: topic.subjectId, unit: topic.title, stage,
      dueDate: date, questionCount: stageQuestionCount(stage, state), status: 'open', errorId,
    }],
  };
}

export function planUnit(state: TriajState, lesson: string, unit: string, date: string, notes?: string): TriajState {
  requireDate(date);
  const id = unitKey(lesson, unit);
  const unitNumber = canonicalUnitNumber(lesson, unit);
  const existing = state.topics.find(topic => topic.id === id);
  const openT0Task = state.tasks.find(task => task.topicId === id && task.stage === 'T0_SAMPLING' && task.status === 'open');
  if (openT0Task) {
    return rescheduleTask(state, openT0Task.id, date);
  }
  if (existing && (existing.status !== 'NOT_STARTED' || state.tasks.some(task => task.topicId === id && task.status === 'open' && !task.errorId))) {
    throw new Error('Bu ünitenin çalışma döngüsü zaten kayıtlı.');
  }
  const topic: TopicUnit = {
    id, unitNumber, subjectId: lesson, title: unit, subtopics: [], status: 'NOT_STARTED',
    currentBucket: 'NONE', priority: 'P3_MEDIUM', discharged: false, createdAt: date, ...existing,
    t0Date: date,
    clinicalNotes: notes ?? existing?.clinicalNotes, updatedAt: date,
  };
  return addTask({
    ...state, topics: [...state.topics.filter(item => item.id !== id), topic],
  }, topic, 'T0_SAMPLING', date);
}

export function restoreTopicTask(state: TriajState, topic: TopicUnit): TriajState {
  if (topic.discharged || !isCanonicalUnit(topic.subjectId, topic.title) ||
      state.tasks.some(task => task.topicId === topic.id && task.status === 'open' && !task.errorId)) return state;
  if (topic.currentBucket === 'RED' && topic.saturdayRepairDate) {
    return addTask(state, topic, 'SATURDAY_REPAIR', getNextSaturday(topic.saturdayRepairDate));
  }
  if (topic.currentBucket === 'YELLOW' && topic.t14DueDate) {
    return addTask(state, topic, 'T14_VERIFICATION', topic.t14DueDate);
  }
  if (topic.currentBucket === 'NONE' && topic.t3DueDate) {
    return addTask(state, topic, 'T3_MAIN', topic.t3DueDate);
  }
  return state;
}

export interface TaskResultInput {
  date: string;
  correct: number;
  wrong: number;
  empty: number;
  questionIds?: string[];
  answers?: CompactAnswer[];
  setId?: string;
  notes?: string;
}

export function recordTaskResult(state: TriajState, taskId: string, input: TaskResultInput): TriajState {
  const task = state.tasks.find(item => item.id === taskId);
  if (!task) throw new Error('TRİAJ görevi bulunamadı.');
  if (task.status === 'completed') return state;
  const { date, correct, wrong, empty, questionIds } = input;
  requireDate(date);
  const total = correct + wrong + empty;
  const allowedTotal = task.stage === 'T14_VERIFICATION' && !questionIds
    ? total >= 20 && total <= 25 : total === task.questionCount;
  if (!allowedTotal || [correct, wrong, empty].some(value => !Number.isInteger(value) || value < 0)) {
    throw new Error('Doğru, yanlış ve boş sayıları tam test kotasını karşılamalı.');
  }
  if (questionIds && (
    !task.setId || input.setId !== task.setId || questionIds.length !== total ||
    questionIds.some((id, i) => task.questionIds?.[i] !== id) || currentTaskDate(task, date) > date
  )) throw new Error('Teslim edilen sorular kayıtlı görev setiyle eşleşmiyor.');
  if (input.answers && (
    input.answers.length !== total || input.answers.some((answer, index) => questionIds?.[index] !== answer.questionId) ||
    input.answers.filter(answer => answer.state === 'correct').length !== correct ||
    input.answers.filter(answer => answer.state === 'incorrect').length !== wrong ||
    input.answers.filter(answer => answer.state === 'blank').length !== empty
  )) throw new Error('Cevaplar sonuç sayılarıyla eşleşmiyor.');
  if (task.stage === 'SATURDAY_REPAIR' && getNextSaturday(date) !== date) {
    throw new Error('Onarım sonucu yalnız Cumartesi tarihine kaydedilebilir.');
  }
  const topic = state.topics.find(item => item.id === task.topicId);
  if (!topic) throw new Error('Göreve bağlı ünite bulunamadı.');
  const score: ScoreDetail = { correct, wrong, empty, total, percentage: Math.round(correct / total * 100), date };
  const decision = task.stage === 'T3_MAIN' ? evaluateT3Triage(correct, total, date)
    : task.stage === 'T14_VERIFICATION' ? evaluateT14Verification(correct, total, date)
    : task.stage === 'SATURDAY_REPAIR' ? evaluateSaturdayRepair(correct, total, date)
    : undefined;
  const updated: TopicUnit = {
    ...topic, lastStudiedDate: date, updatedAt: date, reviewCount: (topic.reviewCount ?? 0) + 1,
  };
  let nextStage: TestStage | undefined;
  let nextDate: string | undefined;
  let errorStatus: SemanticErrorRecord['verificationStatus'];
  if (task.stage === 'T0_SAMPLING') {
    nextStage = 'T3_MAIN';
    nextDate = addDays(date, 3);
    Object.assign(updated, { t0Date: date, t0Score: score, t3DueDate: nextDate, status: 'T3_PENDING' });
  } else if (task.stage === 'ERROR_VERIFICATION') {
    errorStatus = correct >= 13 ? 'closed' : 'repair';
    if (errorStatus === 'repair') {
      nextStage = 'SATURDAY_REPAIR';
      nextDate = getNextSaturday(date);
    }
  } else if (task.errorId && task.stage === 'SATURDAY_REPAIR') {
    errorStatus = correct >= 24 ? 'open' : 'repair';
    nextStage = correct >= 24 ? 'ERROR_VERIFICATION' : 'SATURDAY_REPAIR';
    nextDate = decision?.nextScheduledDate;
  } else if (decision) {
    const discharged = decision.bucket === 'GREEN';
    nextStage = decision.scheduleType === 'DISCHARGED' ? undefined : decision.scheduleType;
    nextDate = decision.nextScheduledDate;
    Object.assign(updated, {
      currentBucket: decision.bucket, priority: decision.priority, discharged,
      status: discharged ? 'DISCHARGED' : 'TRIAGED', t3DueDate: undefined,
      t14DueDate: nextStage === 'T14_VERIFICATION' ? nextDate : undefined,
      saturdayRepairDate: nextStage === 'SATURDAY_REPAIR' ? nextDate : undefined,
    });
    if (task.stage === 'T3_MAIN') updated.t3Score = score;
    if (task.stage === 'T14_VERIFICATION') updated.t14Score = score;
    if (task.stage === 'SATURDAY_REPAIR') updated.repairScore = score;
  }
  const currentGoal = state.dailyGoals[date] ?? {
    date,
    targetStudyMinutes: 300,
    completedStudyMinutes: 0,
    targetQuestions: 80,
    completedQuestions: 0,
    block1Done: false,
    block2Done: false,
    block3Done: false,
    block4Done: false,
    checklist: [],
    notes: '',
  };
  const updatedGoal = {
    ...currentGoal,
    completedQuestions: currentGoal.completedQuestions + total,
    completedStudyMinutes: currentGoal.completedStudyMinutes + Math.max(15, Math.round(total * 1.5)),
    block2Done: currentGoal.block2Done || task.stage === 'T0_SAMPLING',
    block3Done: currentGoal.block3Done || task.stage === 'T3_MAIN' || task.stage === 'T14_VERIFICATION' || task.stage === 'SATURDAY_REPAIR' || task.stage === 'ERROR_VERIFICATION',
    block4Done: currentGoal.block4Done || task.stage === 'BRANCH_EXAM',
  };

  const next: TriajState = {
    ...state,
    topics: state.topics.map(item => item.id === topic.id ? updated : item),
    tasks: state.tasks.map(item => item.id === task.id ? { ...item, status: 'completed', completedDate: date } : item),
    dailyGoals: {
      ...state.dailyGoals,
      [date]: updatedGoal,
    },
    semanticErrors: errorStatus
      ? state.semanticErrors.map(error => error.id === task.errorId ? { ...error, verificationStatus: errorStatus } : error)
      : state.semanticErrors,
    triageHistory: [...state.triageHistory, {
      id: task.id, taskId: task.id, topicId: topic.id, subjectId: task.lesson, topicTitle: task.unit,
      subjectName: task.lesson, stage: task.stage, ...score, empty, questionIds, answers: input.answers,
      recordedAt: new Date().toISOString(), resultingBucket: updated.currentBucket, resultingPriority: updated.priority,
      clinicalDiagnosis: decision?.clinicalDiagnosis ?? '',
      recommendedAction: decision?.recommendedAction ?? (nextDate ? `Sonraki görev ${nextDate}` : ''),
      notes: input.notes, validationStatus: 'Geçerli',
    }],
  };
  return nextStage && nextDate ? addTask(next, updated, nextStage, nextDate, task.errorId) : next;
}

export function rescheduleTask(state: TriajState, id: string, date: string): TriajState {
  requireDate(date);
  const task = state.tasks.find(item => item.id === id && item.status === 'open');
  if (!task || task.dueDate === date) return state;
  if (task.stage === 'SATURDAY_REPAIR' && getNextSaturday(date) !== date) {
    throw new Error('Kırmızı kova onarımı yalnız Cumartesiye taşınabilir.');
  }
  const dateField = {
    T0_SAMPLING: undefined, T3_MAIN: 't3DueDate', T14_VERIFICATION: 't14DueDate',
    SATURDAY_REPAIR: 'saturdayRepairDate', ERROR_VERIFICATION: undefined, BRANCH_EXAM: undefined,
  }[task.stage];
  return {
    ...state,
    tasks: state.tasks.map(item => item.id === id
      ? { ...item, dueDate: date, previousDueDates: [...(item.previousDueDates ?? []), item.dueDate] } : item),
    topics: dateField && !task.errorId ? state.topics.map(topic => topic.id === task.topicId
      ? { ...topic, [dateField]: date } : topic) : state.topics,
  };
}

export function currentTaskDate(task: TriajTask, today = getTodayString()): string {
  return task.stage === 'SATURDAY_REPAIR' && task.status === 'open' && task.dueDate < today
    ? getNextSaturday(today) : task.dueDate;
}

export function addSemanticError(state: TriajState, error: SemanticErrorRecord): TriajState {
  requireDate(error.date);
  if (state.semanticErrors.some(item => item.id === error.id ||
      (error.mockExamId && error.questionId && item.mockExamId === error.mockExamId && item.questionId === error.questionId))) return state;
  if (error.protocolType !== 4 && error.protocolType !== 5) {
    return { ...state, semanticErrors: [...state.semanticErrors, error] };
  }
  const topic = state.topics.find(item => item.id === error.topicId);
  if (!topic) throw new Error('Doğrulama görevi için bir kanonik ünite seçin.');
  return addTask({
    ...state, semanticErrors: [...state.semanticErrors, { ...error, verificationStatus: 'open' }],
  }, topic, 'ERROR_VERIFICATION', addDays(error.date, 3), error.id);
}

export function focusAverage(focus: Record<string, number>, end = getTodayString()): number {
  const start = addDays(end, -6);
  const minutes = Object.entries(focus).filter(([date, value]) => date >= start && date <= end && value > 0);
  return minutes.length ? minutes.reduce((total, [, value]) => total + value, 0) / minutes.length : 0;
}

