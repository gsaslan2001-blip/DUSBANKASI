import { z } from 'zod';
import { supabase } from '../../../lib/supabase';
import { emptyTriajState } from '../domain/defaults';
import { triajImportRecordSchema } from '../migration/importRecords';
import type { TriajState } from '../types';
import {
  ankiSnapshotSchema, calendarDate, dailyGoalSchema, mockExamSchema, parametersSchema, questionLogSchema,
  semanticErrorSchema, taskSchema, taxonomySchema, topicSchema, triageRecordSchema,
} from './recordSchemas';

export const triajStateSchema = z.object({
  topics: z.array(topicSchema), tasks: z.array(taskSchema), triageHistory: z.array(triageRecordSchema),
  dailyGoals: z.record(calendarDate, dailyGoalSchema), mockExams: z.array(mockExamSchema),
  semanticErrors: z.array(semanticErrorSchema), questionLogs: z.array(questionLogSchema),
  topicTaxonomy: z.array(taxonomySchema), ankiSnapshots: z.array(ankiSnapshotSchema),
  parameters: parametersSchema, focus: z.record(calendarDate, z.number().nonnegative()),
  notificationReads: z.array(z.string()), imports: z.array(triajImportRecordSchema),
});

const SCHEMA_VERSION = 2;
export interface TriajSnapshot {
  state: TriajState;
  revision: number;
}

export class TriajConflict extends Error {
  constructor() {
    super('Plan başka bir cihazda değişti. Güncel planı inceleyip işlemi yeniden uygulayın.');
  }
}

/** Sürüm uyuşmazlığı: yeniden denemek işe yaramaz, kullanıcı uygulamayı yenilemeli. */
export class TriajVersionMismatch extends Error {
  constructor() {
    super('Plan farklı bir uygulama sürümüyle kaydedilmiş. Sayfayı yenileyip tekrar deneyin.');
  }
}

export async function readTriajState(userId: string): Promise<TriajSnapshot> {
  const { data, error } = await supabase.from('triaj_state')
    .select('revision,schema_version,payload').eq('user_id', userId).maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) return { state: emptyTriajState(), revision: 0 };
  if (![1, SCHEMA_VERSION].includes(data.schema_version)) throw new Error('Bu plan sürümü desteklenmiyor. Uygulamayı yenileyin.');
  return { state: triajStateSchema.parse(data.payload), revision: data.revision };
}

export async function writeTriajState(userId: string, revision: number, state: TriajState): Promise<TriajSnapshot> {
  const next = triajStateSchema.parse(state);
  const row = { revision: revision + 1, schema_version: SCHEMA_VERSION, payload: next };
  if (revision === 0) {
    const { error } = await supabase.from('triaj_state').insert({ user_id: userId, ...row });
    if (error?.code === '23505') throw new TriajConflict();
    if (error) throw new Error(error.message);
  } else {
    const { data, error } = await supabase.from('triaj_state')
      .update(row).eq('user_id', userId).eq('revision', revision).select('revision').maybeSingle();
    if (error?.code === '40001') throw new TriajConflict();
    if (error?.code === '55000') throw new TriajVersionMismatch();
    if (error) throw new Error(error.message);
    if (!data) throw new TriajConflict();
  }
  return { state: next, revision: revision + 1 };
}
