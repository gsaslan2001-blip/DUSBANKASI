import type { Question } from '../data';

export type AppState =
  | 'select-lesson'
  | 'select-unit'
  | 'select-unit-amount'
  | 'quiz'
  | 'result'
  | 'import'
  | 'add-question'
  | 'select-deneme'
  | 'select-deneme-bank'
  | 'select-deneme-amount'
  | 'select-favorites'
  | 'weak-questions'
  | 'analytics'
  | 'simulation-setup'
  | 'simulation-result'
  | 'error-analysis'
  | 'smart-study'
  | 'daily-plan'
  | 'source-books'
  | 'select-cikmis';

export type AnswerDetail = {
  question: Question;
  state: 'correct' | 'incorrect' | 'blank';
  selectedOptionKey?: string | null;
  timeSpent?: number;
};

export type QuizStatsType = {
  correct: number;
  incorrect: number;
  blank: number;
  total: number;
  details: AnswerDetail[];
};

export type ActiveSessionInfo = {
  questions: Question[];
  answers: AnswerDetail[];
  currentIndex: number;
  mode: 'quiz' | 'exam';
  dailyExamId?: string;
  remainingSeconds?: number;
  simTotalSeconds?: number;
};

export type CompactAnswer = {
  questionId: string;
  state: 'correct' | 'incorrect' | 'blank';
  selectedOptionKey?: string | null;
  timeSpent?: number;
};

export type CompactSessionInfo = {
  questionIds: string[];
  answers: CompactAnswer[];
  currentIndex: number;
  mode: 'quiz' | 'exam';
  dailyExamId?: string;
  remainingSeconds?: number;
  simTotalSeconds?: number;
};

export type UserSettings = {
  theme: 'dark' | 'oled' | 'light';
  fontSize: 'small' | 'normal' | 'large';
  sprintBudget: 100 | 150 | 200;
};

// ─── v6: DUS Skor ve Tahmin ───────────────────────────────────────────────

export type DusScoreEstimate = {
  estimatedNet: number;
  confidenceInterval: [number, number];
  estimatedRank: number;
  estimatedPercentile: number;
  targetProbability: number;
  aspirationZone: 'target' | 'competitive' | 'safe' | 'below_threshold';
};

export type TargetProbability = {
  chance: number;
  requiredDailyNet: number;
  daysUntilExam: number;
};

// ─── v6: Hedef Sistemi ────────────────────────────────────────────────────

export type UserGoals = {
  dailyQuestions: number;
  weeklyQuestions: number;
  targetAccuracy: number;
  targetCoverage: number;
  targetMastered: number;
  targetStreak: number;
  targetDusNet: number;
  customGoals: CustomGoal[];
};

export type CustomGoal = {
  id: string;
  title: string;
  target: number;
  current: number;
  unit: string;
  createdAt: string;
  targetDate?: string;
};

export type GoalProgress = {
  goalKey: string;
  label: string;
  current: number;
  target: number;
  pct: number;
  onTrack: boolean;
  icon: string;
};

export type Milestone = {
  type: string;
  message: string;
  reachedAt: string;
};

export type GoalAlert = {
  level: 'critical' | 'warning' | 'success';
  message: string;
  goalKey: string;
};

// ─── v6: Öneri Sistemi ────────────────────────────────────────────────────

export type LessonPriority = {
  lesson: string;
  priority: number;
  reason: string;
  suggestedDailyQuestions: number;
};

export type UnitFocusItem = {
  lesson: string;
  unit: string;
  coverage: number;
  accuracy: number;
  priority: number;
};

export type DailyRecommendation = {
  focusLesson: string;
  suggestedQuestionCount: number;
  focusUnits: string[];
  message: string;
  questionIds?: string[];
};

export type ErrorPattern = {
  lesson: string;
  pattern: string;
  frequency: number;
  description: string;
};

// ─── v6: Deneme Analizi ───────────────────────────────────────────────────

export type ExamResult = {
  examId: string;
  examName: string;
  examDate: string;
  totalQuestions: number;
  correct: number;
  incorrect: number;
  blank: number;
  score: number;
  net?: number;
  timeSpent: number;
  lessonBreakdown: Record<string, {
    correct: number;
    total: number;
    incorrect?: number;
    blank?: number;
    net?: number;
    timeSpent?: number;
    timedQuestionsCount?: number;
  }>;
};

export type ExamTrendData = {
  exams: { date: string; score: number; label: string }[];
  trend: 'up' | 'down' | 'flat';
  bestScore: number;
  avgScore: number;
  improvement: number;
};

export type SpeedAccuracyPoint = {
  timeSpent: number;
  accuracy: number;
  lesson: string;
  hasRealTimeData?: boolean;
};

export type OrderEffectData = {
  positionBuckets: { start: number; end: number; accuracy: number }[];
  fatigueScore: number;
};
