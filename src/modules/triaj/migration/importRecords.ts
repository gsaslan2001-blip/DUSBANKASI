import { z } from 'zod';

export const importKindSchema = z.enum([
  'topic', 'triageLog', 'goal', 'exam', 'error', 'questionLog', 'taxonomy',
  'ankiSnapshot', 'parameters', 'focus', 'reviewDecision',
]);

export const importSourceSchema = z.enum(['dus-triaj', 'excel-master', 'review-calendar', 'anki-snapshot']);

export const triajImportRecordSchema = z.object({
  id: z.string().min(1),
  source: importSourceSchema,
  sourceId: z.string().min(1),
  kind: importKindSchema,
  data: z.record(z.string(), z.json()),
  semanticKey: z.string(),
  status: z.enum(['applied', 'archived', 'conflict']),
  canMap: z.boolean().optional(),
  reason: z.string().optional(),
  target: z.object({ lesson: z.string(), unit: z.string() }).optional(),
});

export type TriajImportRecord = z.infer<typeof triajImportRecordSchema>;
