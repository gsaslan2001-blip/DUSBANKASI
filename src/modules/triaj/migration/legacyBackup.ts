import { z } from 'zod';
import type { AnkiFsrsSnapshot, ScoreDetail, TopicUnit, TriajState } from '../types';
import { canonicalUnitNumber, isCanonicalUnit, unitKey } from '../domain/catalog';
import { emptyTriajState } from '../domain/defaults';
import { addSemanticError, rescheduleTask, restoreTopicTask } from '../domain/state';
import { addDays, evaluateSaturdayRepair, evaluateT14Verification, evaluateT3Triage, getNextSaturday } from '../domain/triage';
import {
  legacyUnitMapping, normalizeLegacyLabel, selectLegacyUnit, type CanonicalUnitTarget,
} from '../data/legacyUnitMapping';
import {
  ankiSnapshotSchema, calendarDate, dailyGoalSchema, mockExamSchema, parametersSchema, questionLogSchema,
  semanticErrorSchema, taxonomySchema, topicSchema, triageRecordSchema,
} from '../persistence/recordSchemas';
import { importKindSchema, importSourceSchema, type TriajImportRecord } from './importRecords';

type Kind = TriajImportRecord['kind'];
type ImportData = TriajImportRecord['data'];
type IncomingRecord = Pick<TriajImportRecord, 'source' | 'kind' | 'sourceId' | 'data'> & { issue?: string };

const dataSchema = z.record(z.string(), z.json());
const workbookSchema = z.object({
  version: z.literal('excel-master-v1'),
  records: z.array(z.object({
    source: importSourceSchema.exclude(['dus-triaj']), kind: importKindSchema,
    sourceId: z.string().min(1).max(128), data: dataSchema, issue: z.string().optional(),
  })).max(10_000),
});

const storageKeys: Record<string, string> = {
  topics: 'dus_triage_topics_v2', dailyGoal: 'dus_triage_goals_v2', triageLogs: 'dus_triage_logs_v2',
  mockExams: 'dus_excel_mock_exams_v1', semanticErrors: 'dus_excel_semantic_errors_v1',
  questionLogs: 'dus_excel_question_logs_v1', topicTaxonomy: 'dus_excel_topic_taxonomy_v1',
  ankiSnapshot: 'dus_excel_anki_snapshot_v1', systemParams: 'dus_excel_system_params_v1',
};

const collections: ReadonlyArray<readonly [string, Kind]> = [
  ['topics', 'topic'], ['triageLogs', 'triageLog'], ['mockExams', 'exam'], ['semanticErrors', 'error'],
  ['questionLogs', 'questionLog'], ['topicTaxonomy', 'taxonomy'],
  ['dailyGoal', 'goal'], ['ankiSnapshot', 'ankiSnapshot'], ['systemParams', 'parameters'],
];

function stringValue(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function dateValue(value: unknown): string | undefined {
  const date = calendarDate.safeParse(value);
  return date.success ? date.data : undefined;
}

function stableJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.entries(value).filter(([, item]) => item !== undefined)
      .sort(([a], [b]) => a.localeCompare(b)).map(([key, item]) => `${JSON.stringify(key)}:${stableJson(item)}`).join(',')}`;
  }
  return JSON.stringify(value) ?? '';
}

function legacyRows(input: unknown): IncomingRecord[] {
  const raw = dataSchema.parse(input);
  if (raw.version === 'excel-master-v1') return workbookSchema.parse(raw).records;

  const storageBackup = Object.values(storageKeys).some((key) => Object.hasOwn(raw, key));
  if (raw.version !== '2.0-ExcelToApp' && !storageBackup) {
    throw new Error('DusTriaj 2.0-ExcelToApp veya ExcelMaster aktarım dosyası seçin.');
  }

  return collections.flatMap(([property, kind]) => {
    let rows = raw[property] ?? raw[storageKeys[property]];
    if (storageBackup && typeof rows === 'string') rows = JSON.parse(rows);
    if (rows == null) return [];
    return (Array.isArray(rows) ? rows : [rows]).map((item, index) => {
      const result = dataSchema.safeParse(item);
      const data = result.success ? result.data : { original: item };
      const rawId = stringValue(data.id ?? data.date ?? data.lastSyncDate);
      return {
        source: 'dus-triaj', kind, data,
        sourceId: rawId && rawId.length <= 128 ? rawId : (kind === 'parameters' ? 'settings' : `row-${index + 1}`),
        issue: result.success ? undefined : 'Kaynak kaydı bir nesne olmalı.',
      };
    });
  });
}

function rawTarget(record: IncomingRecord): CanonicalUnitTarget | undefined {
  const { data, sourceId } = record;
  const subject = stringValue(data.subjectId ?? data.subjectName);
  const title = stringValue(data.title ?? data.topicTitle);
  const mapping = legacyUnitMapping(subject, title, stringValue(data.topicId) || sourceId);
  const subtopics = Array.isArray(data.subtopics) ? data.subtopics.filter((item): item is string => typeof item === 'string') : [];
  return selectLegacyUnit(mapping, subtopics);
}

function validScore(score: ScoreDetail | undefined, minimum: number, maximum = minimum): boolean {
  return !score || (score.total >= minimum && score.total <= maximum
    && score.correct + score.wrong + (score.empty ?? 0) === score.total);
}

function canonicalTopic(record: IncomingRecord, target: CanonicalUnitTarget): TopicUnit {
  const { data } = record;
  const { lesson, unit } = target;
  const topic = topicSchema.parse({
    ...data, id: unitKey(lesson, unit), subjectId: lesson, title: unit, unitNumber: canonicalUnitNumber(lesson, unit),
  });
  // Eski 10 soruluk kayıtlar korunur (kanonik kural: legacy kayıt dönüştürülmez),
  // yeni ilk tekrar 20–120 arası olabildiği için bant geniş tutulur.
  if (!validScore(topic.t0Score, 1, 120) || !validScore(topic.t3Score, 40) ||
      !validScore(topic.t14Score, 20, 25) || !validScore(topic.repairScore, 30)) {
    throw new Error('Kaynak test puanının sayıları protokol kotasına uymuyor.');
  }

  const results = [
    topic.t3Score && { date: topic.t3Score.date, result: evaluateT3Triage(topic.t3Score.correct, 40, topic.t3Score.date) },
    topic.t14Score && { date: topic.t14Score.date, result: evaluateT14Verification(topic.t14Score.correct, topic.t14Score.total, topic.t14Score.date) },
    topic.repairScore && { date: topic.repairScore.date, result: evaluateSaturdayRepair(topic.repairScore.correct, 30, topic.repairScore.date) },
  ].filter((item) => item !== undefined).sort((left, right) => left.date.localeCompare(right.date));
  const latest = results.at(-1);
  if (latest) {
    const { date, result } = latest;
    topic.currentBucket = result.bucket;
    topic.priority = result.priority;
    topic.lastStudiedDate = date;
    topic.discharged = result.bucket === 'GREEN';
    topic.status = topic.discharged ? 'DISCHARGED' : 'TRIAGED';
    topic.t14DueDate = result.bucket === 'YELLOW' ? result.nextScheduledDate : undefined;
    topic.saturdayRepairDate = result.bucket === 'RED' ? result.nextScheduledDate : undefined;
  } else if (topic.currentBucket === 'YELLOW' && topic.lastStudiedDate) {
    topic.t14DueDate = addDays(topic.lastStudiedDate, 14);
  } else if (topic.currentBucket === 'RED' && topic.lastStudiedDate) {
    topic.saturdayRepairDate = getNextSaturday(topic.lastStudiedDate);
  }

  topic.t0Date ??= topic.t0Score?.date;
  if (topic.t0Date && topic.currentBucket === 'NONE') topic.t3DueDate = addDays(topic.t0Date, 3);
  return topic;
}

function meaningfulTopic(data: ImportData): boolean {
  return data.status !== 'NOT_STARTED' || Boolean(data.t0Date || data.clinicalNotes || data.t0Score || data.t3Score ||
    data.t14Score || data.repairScore || [data.subtopics, data.mnemonics, data.criticalDifferences]
      .some((items) => Array.isArray(items) && items.length > 0));
}

function recordKey(record: IncomingRecord, target?: CanonicalUnitTarget): string {
  const { data, kind } = record;
  const unit = target ? unitKey(target.lesson, target.unit) : undefined;
  const date = stringValue(data.date);
  const norm = (value: unknown) => normalizeLegacyLabel(stringValue(value));
  let parts: unknown[];
  switch (kind) {
    case 'topic': parts = unit ? [unit] : [record.source, record.sourceId]; break;
    case 'triageLog': {
      const mapping = legacyUnitMapping(stringValue(data.subjectId), stringValue(data.topicTitle), stringValue(data.topicId));
      const scope = mapping?.relation === 'merged' ? normalizeLegacyLabel(mapping.sourceTitle) : undefined;
      parts = unit ? [unit, date, data.stage, scope] : [record.source, record.sourceId];
      break;
    }
    case 'goal':
    case 'focus': parts = date ? [date] : [record.source, record.sourceId]; break;
    case 'exam': parts = date ? [date, norm(data.institution)] : [record.source, record.sourceId]; break;
    case 'error': parts = date ? [date, data.branchCode, norm(data.questionSummary)] : [record.source, record.sourceId]; break;
    case 'taxonomy': parts = [data.branchCode, data.semanticCode || record.sourceId]; break;
    case 'questionLog': parts = date ? [date, data.branchCode, norm(data.sourceBook), data.semanticCode, data.questionFormat] : [record.source, record.sourceId]; break;
    case 'ankiSnapshot': parts = [stringValue(data.lastSyncDate).slice(0, 10) || record.sourceId]; break;
    case 'parameters': parts = ['settings']; break;
    case 'reviewDecision': parts = unit && date ? [unit, date, data.bucket] : [record.source, record.sourceId]; break;
  }
  return `${kind}:${JSON.stringify(parts)}`;
}

function content(record: IncomingRecord, target?: CanonicalUnitTarget): string {
  const { data, kind } = record;
  if (kind === 'topic' && target) {
    return stableJson({
      subtopics: data.subtopics, clinicalNotes: data.clinicalNotes, mnemonics: data.mnemonics, criticalDifferences: data.criticalDifferences,
      t0Date: data.t0Date, t0Score: data.t0Score, t3Score: data.t3Score, t14Score: data.t14Score, repairScore: data.repairScore,
      promotedFromRed: data.promotedFromRed,
      bucket: data.currentBucket, status: data.status, lastStudiedDate: data.lastStudiedDate,
    });
  }
  if (kind === 'triageLog') {
    return stableJson({ date: data.date, stage: data.stage, correct: data.correct, wrong: data.wrong, empty: data.empty, total: data.total, notes: data.notes });
  }
  if (kind === 'exam') {
    return stableJson({ branchNets: data.branchNets, missingBranches: data.missingBranches, notes: data.notes });
  }
  if (kind === 'focus') return stableJson(data.minutes);
  if (kind === 'ankiSnapshot') {
    const parsed = ankiSnapshotSchema.safeParse(data);
    if (parsed.success) return stableJson({ ...parsed.data, lastSyncDate: parsed.data.lastSyncDate.slice(0, 10) });
  }
  return stableJson(Object.fromEntries(Object.entries(data).filter(([key]) => key !== 'id')));
}

function applyRecord(state: TriajState, record: TriajImportRecord): TriajState {
  const { id, kind, data, target } = record;
  switch (kind) {
    case 'topic': {
      if (!target) throw new Error('Kanonik ünite seçilmeli.');
      const topic = canonicalTopic(record, target);
      if (state.topics.some((item) => item.id === topic.id)) throw new Error('Bu ünitede mevcut ilerleme var.');
      let updated = restoreTopicTask({ ...state, topics: [...state.topics, topic] }, topic);
      const due = dateValue(data.manualDueDate);
      if (due) {
        const task = updated.tasks.find((item) => item.topicId === topic.id && item.status === 'open');
        if (task && task.stage !== 'SATURDAY_REPAIR' && task.dueDate !== due) {
          updated = rescheduleTask(updated, task.id, due);
        }
      }
      return updated;
    }
    case 'triageLog': {
      if (!target) throw new Error('Günlüğün kanonik ünitesi belirlenmeli.');
      const log = triageRecordSchema.parse({
        ...data, id, topicId: unitKey(target.lesson, target.unit),
        subjectId: target.lesson, subjectName: target.lesson, topicTitle: target.unit,
      });
      if (!validScore(log, 1, 120)) throw new Error('Günlükte soru sayıları toplamla uyuşmuyor.');
      return { ...state, triageHistory: [...state.triageHistory, log] };
    }
    case 'goal': {
      const goal = dailyGoalSchema.parse(data);
      if (state.dailyGoals[goal.date]) throw new Error('Bu gün için hedef kaydı zaten var.');
      return { ...state, dailyGoals: { ...state.dailyGoals, [goal.date]: goal } };
    }
    case 'exam': {
      const exam = mockExamSchema.parse({ ...data, id });
      return { ...state, mockExams: [...state.mockExams, exam] };
    }
    case 'error': {
      const oldExamId = stringValue(data.mockExamId);
      const linkedExam = state.imports.find((item) => item.kind === 'exam' && item.source === record.source && item.sourceId === oldExamId && item.status === 'applied');
      const error = semanticErrorSchema.parse({
        ...data, id, mockExamId: linkedExam?.id ?? (oldExamId || undefined),
        topicId: target ? unitKey(target.lesson, target.unit) : undefined,
        ...(record.source === 'dus-triaj' && data.scoreVersion == null && typeof data.swspsScore === 'number'
          ? { scoreVersion: 'legacy', legacyScore: data.swspsScore, legacyScoreSource: 'DusTriaj' } : {}),
      });
      if ((error.protocolType === 4 || error.protocolType === 5) && error.mockExamId &&
          error.verificationStatus !== 'closed' && state.topics.some((topic) => topic.id === error.topicId)) {
        return addSemanticError(state, error);
      }
      return { ...state, semanticErrors: [...state.semanticErrors, error] };
    }
    case 'questionLog': {
      const log = questionLogSchema.parse({ ...data, id });
      if (log.correct + log.wrong + log.empty !== log.totalQuestions) throw new Error('Soru günlüğü sayıları toplamla uyuşmuyor.');
      return { ...state, questionLogs: [...state.questionLogs, log] };
    }
    case 'taxonomy': {
      const item = taxonomySchema.parse({ ...data, id });
      const existing = state.topicTaxonomy.find((entry) => entry.branchCode === item.branchCode && entry.semanticCode === item.semanticCode);
      if (existing) throw new Error('Bu semantik kod için mevcut bir taksonomi kaydı var.');
      return { ...state, topicTaxonomy: [...state.topicTaxonomy, item] };
    }
    case 'ankiSnapshot': {
      const snapshot: AnkiFsrsSnapshot = ankiSnapshotSchema.parse(data);
      if (!dateValue(snapshot.lastSyncDate.slice(0, 10))) throw new Error('Anki eşitleme tarihi geçersiz.');
      return {
        ...state, ankiSnapshots: [...state.ankiSnapshots, snapshot].sort((left, right) => left.lastSyncDate.localeCompare(right.lastSyncDate)),
      };
    }
    case 'focus': {
      const date = calendarDate.parse(data.date);
      const minutes = z.number().nonnegative().parse(data.minutes);
      if (Object.hasOwn(state.focus, date)) throw new Error('Bu gün için odak kaydı zaten var.');
      return { ...state, focus: { ...state.focus, [date]: minutes } };
    }
    case 'parameters': {
      const defaults = emptyTriajState().parameters;
      if (stableJson(state.parameters) !== stableJson(defaults)) throw new Error('Bu hesapta düzenlenmiş parametreler var.');
      return { ...state, parameters: parametersSchema.parse({ ...defaults, ...data }) };
    }
    case 'reviewDecision':
      throw new Error('Puan ayrıntısı olmayan özgün tekrar kararı arşivde saklanır.');
  }
}

function incomingTarget(record: IncomingRecord, batch: readonly IncomingRecord[], previous: readonly TriajImportRecord[]) {
  if (record.kind === 'topic') return rawTarget(record);
  if (!['triageLog', 'reviewDecision', 'error'].includes(record.kind)) return undefined;
  const topicId = stringValue(record.data.topicId);
  if (topicId) {
    const appliedTopic = previous.find((item) => item.kind === 'topic' && item.source === record.source && item.sourceId === topicId && item.status === 'applied');
    if (appliedTopic?.target) return appliedTopic.target;
    const topic = batch.find((item) => item.kind === 'topic' && item.source === record.source && item.sourceId === topicId);
    if (topic) return rawTarget(topic);
  }
  return rawTarget(record);
}

function reasonFor(error: unknown): string {
  if (error instanceof z.ZodError) {
    return `Biçim denetimi: ${error.issues.map((issue) => issue.path.join('.') || 'kayıt').join(', ')}.`;
  }
  return error instanceof Error ? error.message : 'Kayıt aktarılamadı.';
}

function existingRecords(state: TriajState): Map<string, Set<string>> {
  const keyed = new Map<string, Set<string>>();
  const seenIds = new Set(state.imports.map((item) => item.id));
  const add = (kind: Kind, sourceId: string, value: unknown, target?: CanonicalUnitTarget) => {
    if (seenIds.has(sourceId)) return;
    const parsed = dataSchema.safeParse(JSON.parse(JSON.stringify(value)));
    if (!parsed.success) return;
    const row: IncomingRecord = { source: 'dus-triaj', sourceId, kind, data: parsed.data };
    const key = recordKey(row, target);
    const items = keyed.get(key) ?? new Set<string>();
    items.add(content(row, target));
    keyed.set(key, items);
  };
  for (const topic of state.topics) add('topic', topic.id, topic, { lesson: topic.subjectId, unit: topic.title });
  for (const log of state.triageHistory) add('triageLog', log.id, log, { lesson: log.subjectId, unit: log.topicTitle });
  for (const exam of state.mockExams) add('exam', exam.id, exam);
  for (const error of state.semanticErrors) add('error', error.id, error);
  for (const log of state.questionLogs) add('questionLog', log.id, log);
  for (const item of state.topicTaxonomy) add('taxonomy', item.id, item);
  for (const snapshot of state.ankiSnapshots) add('ankiSnapshot', snapshot.lastSyncDate, snapshot);
  for (const goal of Object.values(state.dailyGoals)) add('goal', goal.date, goal);
  for (const [date, minutes] of Object.entries(state.focus)) add('focus', date, { date, minutes });
  return keyed;
}

function resolveBatch(state: TriajState, incoming: readonly IncomingRecord[]) {
  const priority: Partial<Record<Kind, number>> = { parameters: 0, topic: 1, exam: 2 };
  const rows = [...incoming].sort((left, right) => (priority[left.kind] ?? 3) - (priority[right.kind] ?? 3));
  const records: TriajImportRecord[] = [];
  let duplicates = 0;
  let next = state;
  const stored = existingRecords(state);
  const activeTopicCandidates = new Map<string, Set<string>>();
  for (const row of rows) {
    if (row.kind !== 'topic' || row.issue || !meaningfulTopic(row.data)) continue;
    const target = rawTarget(row);
    if (!target) continue;
    const key = recordKey(row, target);
    const candidates = activeTopicCandidates.get(key) ?? new Set<string>();
    candidates.add(content(row, target));
    activeTopicCandidates.set(key, candidates);
  }

  for (const row of rows) {
    if (row.kind === 'topic' && !row.issue && !meaningfulTopic(row.data)) continue;
    const target = incomingTarget(row, rows, next.imports);
    const semanticKey = recordKey(row, target);
    const identity = next.imports.filter((item) => item.source === row.source && item.kind === row.kind && item.sourceId === row.sourceId);
    const bySemanticKey = next.imports.filter((item) => item.semanticKey === semanticKey);
    const matchingStored = stored.get(semanticKey);
    if (identity.some((item) => stableJson(item.data) === stableJson(row.data)) ||
        bySemanticKey.some((item) => content(item, item.target) === content(row, target)) ||
        matchingStored?.has(content(row, target))) {
      duplicates++;
      continue;
    }

    const record: TriajImportRecord = {
      source: row.source, sourceId: row.sourceId, kind: row.kind, data: row.data, target, semanticKey,
      id: JSON.stringify([row.source, row.kind, row.sourceId, identity.length]),
      status: 'applied',
    };
    if (row.issue) {
      record.status = 'archived';
      record.reason = row.issue;
    } else if (identity.length || matchingStored?.size || bySemanticKey.some((item) => item.status === 'applied') ||
        (activeTopicCandidates.get(semanticKey)?.size ?? 0) > 1 ||
        (row.kind === 'topic' && target && next.topics.some((item) => item.id === unitKey(target.lesson, target.unit)))) {
      record.status = 'conflict';
      record.reason = 'Aynı kimlik veya hedef için farklı kaynak girdileri var. Mevcut ilerleme korundu.';
      record.canMap = row.kind === 'topic' || row.kind === 'triageLog';
    } else if (row.kind === 'topic' && !target) {
      const mapping = legacyUnitMapping(stringValue(row.data.subjectId), stringValue(row.data.title), row.sourceId);
      record.status = 'archived';
      record.canMap = true;
      record.reason = mapping
        ? [mapping.reason, ...mapping.targets.map(({ unit }) => unit)].join(' · ')
        : 'Kanonik üniteyi seçmek için kaynak ünite arşivlendi.';
    } else if (row.kind === 'triageLog' && !target) {
      record.status = 'archived';
      record.canMap = true;
      record.reason = 'Günlüğün kanonik ünitesi belirlenmeli.';
    } else {
      try {
        next = applyRecord(next, record);
      } catch (error) {
        record.status = 'archived';
        record.reason = reasonFor(error);
      }
    }
    records.push(record);
    next = { ...next, imports: [...next.imports, record] };
  }
  return { state: next, records, duplicates };
}

export interface LegacyImportPreview {
  records: TriajImportRecord[];
  counts: {
    received: number;
    accepted: number;
    archived: number;
    conflicts: number;
    duplicates: number;
    inactiveTopics: number;
    byKind: Partial<Record<Kind, number>>;
  };
  unresolved: TriajImportRecord[];
  conflicts: TriajImportRecord[];
}

export function previewLegacyImport(input: unknown, state: TriajState): LegacyImportPreview {
  const rows = legacyRows(input);
  const { records, duplicates } = resolveBatch(state, rows);
  const unresolved = records.filter((item) => item.status === 'archived');
  const conflicts = records.filter((item) => item.status === 'conflict');
  const byKind: LegacyImportPreview['counts']['byKind'] = {};
  for (const row of rows) byKind[row.kind] = (byKind[row.kind] ?? 0) + 1;
  return {
    records, unresolved, conflicts,
    counts: { received: rows.length, accepted: records.length - unresolved.length - conflicts.length,
      archived: unresolved.length, conflicts: conflicts.length, duplicates,
      inactiveTopics: rows.length - records.length - duplicates, byKind },
  };
}

export function applyLegacyImport(state: TriajState, preview: LegacyImportPreview): TriajState {
  // Recheck duplicate and conflict rules against the saved revision.
  const rows = preview.records.map((record): IncomingRecord => ({
    ...record, issue: record.status === 'archived' && !record.canMap ? record.reason : undefined,
  }));
  return resolveBatch(state, rows).state;
}

export function resolveArchivedTopic(state: TriajState, importId: string, lesson: string, unit: string): TriajState {
  if (!isCanonicalUnit(lesson, unit)) throw new Error('Kanonik ders ve ünite seçin.');
  const old = state.imports.find((item) => item.id === importId);
  if (!old || !old.canMap || (old.kind !== 'topic' && old.kind !== 'triageLog') || old.status === 'applied') {
    throw new Error('Eşlenebilir arşiv kaydı bulunamadı.');
  }
  const target = { lesson, unit };
  const record: TriajImportRecord = {
    ...old, status: 'applied', target, semanticKey: recordKey(old, target), reason: undefined, canMap: undefined,
  };
  if (old.kind === 'triageLog' && state.imports.some((item) => item.status === 'applied' && item.semanticKey === record.semanticKey)) {
    throw new Error('Bu ünite, tarih ve aşama için bir günlük kaydı zaten var.');
  }
  let updated = applyRecord(state, record);
  const resolved = new Map<string, TriajImportRecord>([[record.id, record]]);
  for (const related of state.imports) {
    if (old.kind !== 'topic' || related.source !== old.source || related.kind !== 'triageLog' ||
        related.data.topicId !== old.sourceId || related.status === 'applied' || !related.canMap) continue;
    const log: TriajImportRecord = {
      ...related, status: 'applied', target, semanticKey: recordKey(related, target), reason: undefined, canMap: undefined,
    };
    if ([...state.imports, ...resolved.values()].some((item) => item.status === 'applied' && item.semanticKey === log.semanticKey)) continue;
    try {
      updated = applyRecord(updated, log);
      resolved.set(log.id, log);
    } catch {
      // Keep the original archive when its counts cannot be validated.
    }
  }
  return { ...updated, imports: updated.imports.map((item) => resolved.get(item.id) ?? item) };
}
