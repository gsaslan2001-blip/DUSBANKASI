import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { toast } from 'sonner';
import { CANONICAL_UNITS } from '../../../config/canonicalUnits';
import { useTriaj } from '../TriajProvider';
import { CANONICAL_16_BRANCHES, INITIAL_TOPIC_TAXONOMY } from '../data/branchSpecs';
import { CANONICAL_DUS_SUBJECTS } from '../data/subjectProtocols';
import { calculateQuestionLogMetrics, calculateWorkbookSWSPS, evaluateMockExam } from '../domain/analytics';
import { unitKey } from '../domain/catalog';
import { emptyTriajState } from '../domain/defaults';
import { addSemanticError, currentTaskDate, planUnit, recordTaskResult, rescheduleTask } from '../domain/state';
import { generateTriageReport } from '../domain/triage';
import type {
  AnkiFsrsSnapshot, CanonicalBranchCode, DailyGoal, DailyStudyQuestionLog, SemanticErrorRecord,
  SystemParameters, TopicTaxonomyItem, TopicUnit, TriajState, TriajTask, TriageNotification,
} from '../types';

const subjects = CANONICAL_DUS_SUBJECTS;
const unitCatalog = subjects.flatMap(subject => (CANONICAL_UNITS[subject.name] ?? []).map((title, index): TopicUnit => ({
  id: unitKey(subject.name, title),
  subjectId: subject.id,
  unitNumber: index + 1,
  title,
  status: 'NOT_STARTED',
  currentBucket: 'NONE',
  priority: 'P4_LOW',
  subtopics: [],
  discharged: false,
  createdAt: '',
  updatedAt: '',
})));

export const stageLabels: Record<TriajTask['stage'], string> = {
  T0_SAMPLING: 'T+0',
  T3_MAIN: 'T+3',
  T14_VERIFICATION: 'T+14',
  SATURDAY_REPAIR: 'Cumartesi onarımı',
  BRANCH_EXAM: 'Branş denemesi',
  ERROR_VERIFICATION: 'Deneme yanlışı doğrulaması',
};

function blankDailyGoal(date: string): DailyGoal {
  return {
    date, targetStudyMinutes: 0, completedStudyMinutes: 0, targetQuestions: 0, completedQuestions: 0,
    block1Done: false, block2Done: false, block3Done: false, block4Done: false, checklist: [], notes: '',
  };
}

function blankAnkiSnapshot(today: string, retention: number): AnkiFsrsSnapshot {
  return {
    lastSyncDate: today, targetRetentionPercent: retention, dailyReviewCount: 0,
    totalCards: 0,
    newCards: 0, learningCards: 0, youngCards: 0, matureCards: 0, branchStats: [],
  };
}

function alertChime() {
  if (!window.AudioContext) return;
  try {
    const audio = new AudioContext();
    const tone = audio.createOscillator();
    const level = audio.createGain();
    level.gain.setValueAtTime(0.08, audio.currentTime);
    level.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.25);
    tone.frequency.value = 660;
    tone.connect(level).connect(audio.destination);
    tone.onended = () => { void audio.close(); };
    tone.start();
    tone.stop(audio.currentTime + 0.25);
  } catch { /* The browser may restrict audio. */ }
}

type Save = (change: (current: TriajState) => TriajState) => Promise<boolean>;
type QuestionLogInput = Pick<DailyStudyQuestionLog, 'date' | 'sourceBook' | 'branchCode' | 'semanticCode' |
  'questionFormat' | 'correct' | 'wrong' | 'empty' | 'durationMinutes' | 'notes'>;
type SemanticErrorInput = Omit<SemanticErrorRecord, 'id' | 'branchName' | 'ankiClozeStatus' | 'swspsScore'>;

function makeView(state: TriajState, save: Save, todayStr: string) {
  const progress = new Map(state.topics.map(topic => [topic.id, topic]));
  const topics = unitCatalog.map(topic => {
    const saved = progress.get(topic.id);
    return saved ? { ...saved, title: topic.title, subjectId: topic.subjectId, unitNumber: topic.unitNumber } : topic;
  });
  const dailyGoal = state.dailyGoals[todayStr] ?? blankDailyGoal(todayStr);
  const ankiSnapshot = state.ankiSnapshots.at(-1) ?? blankAnkiSnapshot(todayStr, state.parameters.targetFsrsRetention);
  const topicTaxonomy = [...INITIAL_TOPIC_TAXONOMY.filter(entry => !state.topicTaxonomy.some(saved => saved.id === entry.id)), ...state.topicTaxonomy];
  const report = generateTriageReport(subjects, topics, todayStr);
  const tasks = state.tasks;
  const notifications = tasks.filter(task => task.status === 'open' && currentTaskDate(task, todayStr) <= todayStr).map((task): TriageNotification => ({
    id: task.id,
    topicId: task.topicId,
    subjectId: subjects.find(subject => subject.name === task.lesson)?.id,
    type: task.stage === 'T3_MAIN' ? 'T3_DUE' : task.stage === 'T14_VERIFICATION' ? 'T14_DUE'
      : task.stage === 'SATURDAY_REPAIR' ? 'SATURDAY_REPAIR' : 'SYSTEM_INFO',
    title: `${stageLabels[task.stage]} · ${task.unit}`,
    message: `${task.questionCount} soru`,
    dueDate: currentTaskDate(task, todayStr),
    priority: task.stage === 'SATURDAY_REPAIR' || (task.stage === 'T3_MAIN' && task.dueDate < todayStr) ? 'P1_CRITICAL' : 'P2_HIGH',
    isRead: state.notificationReads.includes(task.id),
    createdAt: task.dueDate,
  }));

  const updateGoal = (change: (goal: DailyGoal) => DailyGoal) =>
    save(current => ({
      ...current,
      dailyGoals: {
        ...current.dailyGoals,
        [todayStr]: { ...change(current.dailyGoals[todayStr] ?? blankDailyGoal(todayStr)), date: todayStr },
      },
    }));

  const editTopic = (id: string, edits: Pick<Partial<TopicUnit>, 'subtopics' | 'clinicalNotes'>) =>
    save(current => {
      const saved = current.topics.find(topic => topic.id === id);
      if (!saved) throw new Error('Önce bu üniteyi çalışma planına ekleyin.');
      return { ...current, topics: current.topics.map(topic => topic.id === id ? { ...topic, ...edits } : topic) };
    });

  return {
    state, topics, tasks, subjects, dailyGoal, todayStr, notifications, report,
    triageLogs: state.triageHistory,
    mockExams: state.mockExams,
    semanticErrors: state.semanticErrors,
    questionLogs: state.questionLogs,
    systemParams: state.parameters,
    topicTaxonomy, ankiSnapshot,
    ankiSnapshots: state.ankiSnapshots,
    updateTopic: editTopic,
    addTopic: (subjectId: string, title: string, subtopics: string[], date: string, notes?: string) => {
      const subject = subjects.find(item => item.id === subjectId);
      if (!subject) return Promise.resolve(false);
      return save(current => {
        const next = planUnit(current, subject.name, title, date, notes);
        return {
          ...next,
          topics: next.topics.map(topic => topic.id === unitKey(subject.name, title) ? { ...topic, subtopics } : topic),
        };
      });
    },
    recordManualResult: (topic: TopicUnit, stage: TriajTask['stage'], result: {
      date: string; correct: number; wrong: number; empty: number; notes?: string;
    }, taskId?: string) => save(current => {
      const subject = subjects.find(item => item.id === topic.subjectId);
      const next = stage === 'T0_SAMPLING' && subject && !current.tasks.some(task => task.topicId === topic.id && task.status === 'open')
        ? planUnit(current, subject.name, topic.title, result.date) : current;
      const task = next.tasks.find(item => taskId ? item.id === taskId :
        item.topicId === topic.id && item.stage === stage && item.status === 'open' && !item.errorId);
      if (!task) throw new Error('Bu ünite ve aşama için açık bir test görevi bulunamadı.');
      return recordTaskResult(next, task.id, result);
    }),
    cancelPlannedT0: (id: string) => save(current => ({
      ...current,
      tasks: current.tasks.filter(item => item.topicId !== id || item.stage !== 'T0_SAMPLING' || item.status !== 'open'),
    })),
    reschedule: (taskId: string, date: string) => save(current => rescheduleTask(current, taskId, date)),
    updateDailyGoal: (edits: Partial<DailyGoal>) => updateGoal(goal => ({ ...goal, ...edits })),
    toggleBlockDone: (key: 'block1Done' | 'block2Done' | 'block3Done' | 'block4Done') =>
      updateGoal(goal => ({ ...goal, [key]: !goal[key] })),
    addGoalChecklistItem: (text: string) => {
      const item = { id: crypto.randomUUID(), text, done: false };
      return updateGoal(goal => ({ ...goal, checklist: [...goal.checklist, item] }));
    },
    toggleGoalChecklistItem: (id: string) => updateGoal(goal => ({
      ...goal, checklist: goal.checklist.map(item => item.id === id ? { ...item, done: !item.done } : item),
    })),
    deleteGoalChecklistItem: (id: string) =>
      updateGoal(goal => ({ ...goal, checklist: goal.checklist.filter(item => item.id !== id) })),
    updateSystemParams: (edits: Partial<SystemParameters>) =>
      save(current => ({ ...current, parameters: { ...current.parameters, ...edits } })),
    updateFocus: (date: string, minutes: number) => save(current => ({
      ...current,
      focus: { ...current.focus, [date]: minutes },
      dailyGoals: date === todayStr ? {
        ...current.dailyGoals,
        [date]: { ...current.dailyGoals[date] ?? blankDailyGoal(date), completedStudyMinutes: minutes },
      } : current.dailyGoals,
    })),
    markNotificationRead: (id: string) => save(current => ({
      ...current, notificationReads: [...new Set([...current.notificationReads, id])],
    })),
    markAllNotificationsRead: () => save(current => ({
      ...current, notificationReads: [...new Set([...current.notificationReads, ...notifications.map(n => n.id)])],
    })),
    addMockExam: (date: string, institution: string, nets: Record<CanonicalBranchCode, number>, notes?: string, existingId?: string) => {
      const id = existingId ?? crypto.randomUUID();
      return save(current => {
        const existing = current.mockExams.find(exam => exam.id === id);
        const exam = evaluateMockExam(id, date, institution, nets, current.parameters.targetTotalNet, current.parameters.adccEliteThreshold, notes);
        if (existing?.simulationId) exam.simulationId = existing.simulationId;
        return { ...current, mockExams: [...current.mockExams.filter(record => record.id !== id), exam] };
      });
    },
    deleteMockExam: (id: string) =>
      save(current => ({ ...current, mockExams: current.mockExams.filter(item => item.id !== id) })),
    addSemanticError: (input: SemanticErrorInput) => {
      const id = crypto.randomUUID();
      return save(current => {
        const branch = CANONICAL_16_BRANCHES.find(item => item.code === input.branchCode);
        const tax = [...current.topicTaxonomy, ...INITIAL_TOPIC_TAXONOMY].find(item => item.semanticCode === input.semanticCode);
        const repeats = current.semanticErrors.filter(item => item.semanticCode === input.semanticCode).length + 1;
        const r = tax?.fsrsRetrievabilityR;
        const swspsScore = calculateWorkbookSWSPS({
          weight: input.protocolWeight ?? current.parameters.errorWeights[input.errorType],
          repeatCount: repeats,
          difficultyD: tax?.fsrsDifficultyD ?? 7.5,
          retrievability: r === undefined ? null : { value: r, unit: 'percent' },
          daysElapsed: 0,
        });
        const topic = input.topicId ? unitCatalog.find(item => item.id === input.topicId) : undefined;
        const subject = topic ? subjects.find(item => item.id === topic.subjectId) : undefined;
        const withTopic = topic && subject && !current.topics.some(item => item.id === topic.id)
          ? { ...current, topics: [...current.topics, { ...topic, subjectId: subject.name }] } : current;
        return addSemanticError(withTopic, {
          ...input, id, swspsScore: swspsScore ?? 0, scoreUnavailable: swspsScore === null,
          branchName: branch?.name ?? input.branchCode,
          ankiClozeStatus: 'Bekliyor', scoreVersion: 'workbook-v1',
        });
      });
    },
    toggleSemanticErrorAnkiStatus: (id: string) => save(current => ({
      ...current, semanticErrors: current.semanticErrors.map(item => item.id === id ? {
        ...item, ankiClozeStatus: item.ankiClozeStatus === 'Eklendi' ? 'Bekliyor' : 'Eklendi',
      } : item),
    })),
    deleteSemanticError: (id: string) => save(current => ({
      ...current, semanticErrors: current.semanticErrors.filter(item => item.id !== id),
      tasks: current.tasks.filter(task => task.errorId !== id || task.status === 'completed'),
    })),
    addQuestionLog: (input: QuestionLogInput) => {
      if (input.correct + input.wrong + input.empty <= 0 || input.durationMinutes < 0) return Promise.resolve(false);
      const branch = CANONICAL_16_BRANCHES.find(item => item.code === input.branchCode);
      const { totalQuestions, net, accuracyPercent, speedSecondsPerQuestion } =
        calculateQuestionLogMetrics(input.correct, input.wrong, input.empty, input.durationMinutes);
      const entry = { ...input, id: crypto.randomUUID(), branchName: branch?.name ?? input.branchCode,
        totalQuestions, net, accuracyPercent, speedSecondsPerQuestion };
      return save(current => ({ ...current, questionLogs: [...current.questionLogs, entry] }));
    },
    deleteQuestionLog: (id: string) =>
      save(current => ({ ...current, questionLogs: current.questionLogs.filter(item => item.id !== id) })),
    updateTaxonomyItem: (id: string, edits: Partial<TopicTaxonomyItem>) => save(current => {
      const item = [...current.topicTaxonomy, ...INITIAL_TOPIC_TAXONOMY].find(item => item.id === id);
      if (!item) return current;
      return { ...current, topicTaxonomy: [...current.topicTaxonomy.filter(item => item.id !== id), { ...item, ...edits }] };
    }),
    updateAnkiSnapshot: (edits: Partial<AnkiFsrsSnapshot>) => save(current => {
      const last = current.ankiSnapshots.at(-1) ?? blankAnkiSnapshot(todayStr, current.parameters.targetFsrsRetention);
      const snapshot = { ...last, lastSyncDate: todayStr, ...edits };
      return {
        ...current,
        ankiSnapshots: [...current.ankiSnapshots.filter(item => item.lastSyncDate !== snapshot.lastSyncDate), snapshot],
      };
    }),
    exportDataJSON: () => JSON.stringify({ version: 1, payload: state }, null, 2),
    replaceState: (next: TriajState) => save(() => next),
    resetToInitialData: () => save(() => emptyTriajState()),
    save,
  };
}

type ViewContext = ReturnType<typeof makeView> & {
  soundEnabled: boolean;
  toggleSound: () => void;
  browserNotificationsEnabled: boolean;
  requestBrowserNotificationPermission: () => Promise<boolean>;
  onStartTask: (task: TriajTask) => Promise<void>;
  saving: boolean;
};

const Context = createContext<ViewContext | null>(null);

export function TriajViewProvider({ children, onStartTask, onBack }: {
  children: ReactNode;
  onStartTask: ViewContext['onStartTask'];
  onBack: () => void;
}) {
  const { state, status, error, refresh, update, today } = useTriaj();
  useEffect(() => { void refresh(); }, [refresh]);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [browserNotificationsEnabled, setBrowserNotificationsEnabled] =
    useState(() => typeof Notification !== 'undefined' && Notification.permission === 'granted');

  const view = useMemo(() => {
    if (!state) return null;
    const save: Save = async change => {
      try {
        await update(change);
        return true;
      } catch (reason) {
        toast.error(reason instanceof Error ? reason.message : 'TRİAJ kaydı yapılamadı. Tekrar deneyin.');
        return false;
      }
    };
    return makeView(state, save, today);
  }, [state, today, update]);

  const requestBrowserNotificationPermission = async () => {
    if (typeof Notification === 'undefined') {
      toast.error('Tarayıcı bildirimleri bu cihazda kullanılamıyor.');
      return false;
    }
    const granted = (await Notification.requestPermission()) === 'granted';
    setBrowserNotificationsEnabled(granted);
    if (granted) new Notification('TRİAJ', { body: 'Tarayıcı bildirimleri etkin.' });
    return granted;
  };

  return (
    <>
      {status === 'saving' && <p role="status" className="px-4 py-2 text-sm">Kaydediliyor…</p>}
      {error && (
        <div role="alert" className="px-4 py-2 text-sm">
          {error}{' '}
          <button type="button" className="underline" onClick={() => void refresh()}>Son kaydı yükle</button>
        </div>
      )}
      {view ? (
        <Context.Provider value={{
          ...view, soundEnabled, browserNotificationsEnabled, requestBrowserNotificationPermission,
          onStartTask, saving: status === 'saving',
          toggleSound: () => {
            if (!soundEnabled) alertChime();
            setSoundEnabled(!soundEnabled);
          },
        }}>
          {children}
        </Context.Provider>
      ) : (
        <div className="p-4 space-y-4">
          <button type="button" className="underline" onClick={onBack}>Soru Bankasına Dön</button>
          {status === 'loading' && <p role="status">TRİAJ verileri yükleniyor…</p>}
        </div>
      )}
    </>
  );
}

export function useTriajView() {
  const view = useContext(Context);
  if (!view) throw new Error('TRİAJ görünümü plan sağlayıcısının dışında açıldı.');
  return view;
}
