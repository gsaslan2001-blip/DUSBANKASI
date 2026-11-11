import { z } from 'zod';
import { isCalendarDate } from '../domain/state';

export const calendarDate = z.string().refine(isCalendarDate, 'Geçersiz tarih');
const text = z.string().max(100_000);
const id = z.string().min(1).max(1024);
const count = z.number().int().nonnegative();
const percentage = z.number().min(0).max(100);
const bucket = z.enum(['GREEN', 'YELLOW', 'RED', 'NONE']);
const priority = z.enum(['P1_CRITICAL', 'P2_HIGH', 'P3_MEDIUM', 'P4_LOW']);
const block = z.enum(['BLOK_1', 'BLOK_2', 'BLOK_3', 'BLOK_4']);
const stage = z.enum(['T0_SAMPLING', 'T3_MAIN', 'T14_VERIFICATION', 'SATURDAY_REPAIR', 'ERROR_VERIFICATION', 'BRANCH_EXAM']);
const branch = z.enum(['B01','B02','B03','B04','B05','B06','B07','B08','B09','B10','B11','B12','B13','B14','B15','B16']);
const errorType = z.enum(['Bilgi', 'Muhakeme', 'Dikkat', 'Çeldirici']);
const score = z.object({
  correct: count, wrong: count, empty: count.optional(), total: count, percentage, date: calendarDate,
});

export const topicSchema = z.object({
  id, subjectId: id, unitNumber: count.min(1), title: text, subtopics: z.array(text), currentBucket: bucket, priority,
  status: z.enum(['NOT_STARTED', 'T0_DONE', 'T3_PENDING', 'TRIAGED', 'DISCHARGED']),
  topicCode: text.optional(), discharged: z.boolean(), createdAt: calendarDate, updatedAt: calendarDate,
  t0Date: calendarDate.optional(), t3DueDate: calendarDate.optional(), t14DueDate: calendarDate.optional(),
  saturdayRepairDate: calendarDate.optional(), lastStudiedDate: calendarDate.optional(), reviewCount: count.optional(),
  t0Score: score.optional(), t3Score: score.optional(), t14Score: score.optional(), repairScore: score.optional(),
  clinicalNotes: text.optional(), mnemonics: z.array(text).optional(), criticalDifferences: z.array(text).optional(),
});

export const taskSchema = z.object({
  ruleVersion: z.literal('first-review-v2').optional(),
  id, topicId: id, lesson: id, unit: id, stage, dueDate: calendarDate, questionCount: z.number().int().min(1).max(120),
  status: z.enum(['open', 'completed', 'cancelled']), questionIds: z.array(id).max(120).optional(),
  availableCount: count.optional(), setId: id.optional(), errorId: id.optional(), preparationDone: z.boolean().optional(),
  completedDate: calendarDate.optional(), previousDueDates: z.array(calendarDate).optional(),
  // SQL `get_triaj_tasks` bu alanı enjekte eder; şemada yoksa yazma yolunda sessizce düşerdi.
  excludedQuestionIds: z.array(id).optional(),
}).refine(task => (!task.setId && !task.questionIds) ||
  (!!task.setId && task.questionIds?.length === task.questionCount && new Set(task.questionIds).size === task.questionCount))
  .refine(task => !(task.ruleVersion === 'first-review-v2' && task.stage === 'T0_SAMPLING') || task.questionCount >= 20,
    'İlk tekrar en az 20 soru olmalıdır.');

export const triageRecordSchema = score.extend({
  ruleVersion: z.literal('first-review-v2').optional(), source: z.enum(['bank', 'manual']).optional(),
  id, topicId: id, subjectId: id, topicTitle: text, subjectName: text, stage, empty: count.default(0),
  resultingBucket: bucket, resultingPriority: priority, clinicalDiagnosis: text, recommendedAction: text,
  recordCode: text.optional(), taskId: id.optional(), questionIds: z.array(id).max(120).optional(),
  answers: z.array(z.object({
    questionId: id, state: z.enum(['correct', 'incorrect', 'blank']),
    selectedOptionKey: text.nullable().optional(), timeSpent: count.optional(),
  })).max(120).optional(),
  recordedAt: z.iso.datetime({ offset: true }).optional(), notes: text.optional(),
  validationStatus: z.enum(['Geçerli', 'Girişi kontrol et / Mükerrer']).optional(),
});

export const dailyGoalSchema = z.object({
  date: calendarDate, targetStudyMinutes: count, completedStudyMinutes: count, targetQuestions: count, completedQuestions: count,
  block1Done: z.boolean(), block2Done: z.boolean(), block3Done: z.boolean(), block4Done: z.boolean(), notes: text,
  checklist: z.array(z.object({ id, text, done: z.boolean(), block: block.optional(), priority: priority.optional(), relatedTopicId: id.optional() })),
});

export const mockExamSchema = z.object({
  id, date: calendarDate, institution: text, branchNets: z.record(branch, z.number()),
  basicNet: z.number().min(-10).max(40), clinicalNet: z.number().min(-20).max(80), totalNet: z.number().min(-30).max(120), targetDiff: z.number(), accuracyPercent: z.number(),
  adccStatus: z.enum(['ELİT', 'GELİŞİM']), notes: text.optional(),
  simulationId: id.optional(), missingBranches: z.array(branch).optional(), durationSeconds: count.optional(),
});

export const semanticErrorSchema = z.object({
  id, date: calendarDate, source: text, branchCode: branch, branchName: text, semanticCode: text,
  subtopic: text, questionSummary: text, errorType, distractorAnalysis: text,
  ankiClozeStatus: z.enum(['Eklendi', 'Bekliyor']), ankiClozeText: text.optional(),
  swspsScore: z.number(), mockExamId: id.optional(), protocolType: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
  protocolWeight: z.number().nonnegative().optional(), scoreVersion: z.enum(['workbook-v1', 'legacy']).optional(),
  scoreUnavailable: z.boolean().optional(), legacyScore: z.number().optional(), legacyScoreSource: text.optional(),
  topicId: id.optional(), questionId: id.optional(), verificationStatus: z.enum(['open', 'closed', 'repair']).optional(),
});

export const questionLogSchema = z.object({
  id, date: calendarDate, sourceBook: text, branchCode: branch, branchName: text, semanticCode: text,
  questionFormat: z.enum(['Klinik Vaka / Senaryo', 'Öncüllü / Ayrım Sorusu', 'Spot / Bilgi Sorusu', 'ÖSYM Çıkmış Sorular', 'Komplikasyon Yönetimi']),
  totalQuestions: count, correct: count, wrong: count, empty: count, net: z.number(), accuracyPercent: percentage,
  durationMinutes: z.number().nonnegative(), speedSecondsPerQuestion: z.number().nonnegative(), notes: text.optional(),
});

export const taxonomySchema = z.object({
  id, branchCode: branch, branchName: text, mainTopic: text, subtopic: text, semanticCode: text,
  dusWeight: z.number(), fsrsStabilityS: z.number(), fsrsDifficultyD: z.number(), fsrsRetrievabilityR: percentage.optional(),
});

const cardCounts = {
  totalCards: count, matureCards: count, youngCards: count, learningCards: count, newCards: count,
};
export const ankiSnapshotSchema = z.object({
  lastSyncDate: text, dailyReviewCount: count, averageTimeSecondsPerCard: z.number().nonnegative().optional(),
  overallRetentionPercent: percentage.optional(), targetRetentionPercent: percentage, ...cardCounts,
  source: z.enum(['excelmaster', 'manual', 'ankiconnect']).optional(), syncedAt: z.iso.datetime({ offset: true }).optional(),
  branchStats: z.array(z.object({ branchCode: branch, branchName: text, retentionPercent: percentage.optional(), ...cardCounts })),
});

export const parametersSchema = z.object({
  ownerName: text, ownerRole: text, targetGoalTitle: text, examDate: z.union([calendarDate, z.literal('')]),
  targetBasicNet: z.number().min(0).max(40), targetClinicalNet: z.number().min(0).max(80), targetTotalNet: z.number().min(0).max(120),
  adccEliteThreshold: z.number().min(0).max(120), targetFsrsRetention: percentage,
  dailyUnitCapacity: z.number().int().positive().max(100),
  idealSpeedMinSec: z.number().positive(), idealSpeedMaxSec: z.number().positive(),
  errorWeights: z.record(errorType, z.number().nonnegative()),
  verificationQuestions: z.number().int().min(20).max(25).optional(),
  studyMode: z.enum(['full-time', 'clinical']).optional(),
  maintenanceDays: z.object({ clinical: z.literal(7), volatile: count.min(7).max(10), mechanism: count.min(10).max(14) }).optional(),
});
