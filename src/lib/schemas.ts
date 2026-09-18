/**
 * DUS Bankası — Zod şemaları
 *
 * Supabase'ten gelen ve localStorage'a/cloud'a yazılan ana veri şekilleri için
 * runtime validasyonu. Mevcut TS tipleri ile birebir uyumludur — ilave çağrı
 * yerleri eklemek zorunlu değildir; gerektiğinde `parseQuestion()` veya
 * `safeParseQuestion()` çağrılır.
 */

import { z } from 'zod';

/* ─── Question ─────────────────────────────────────────────────────────── */

export const OptionKeySchema = z.enum(['A', 'B', 'C', 'D', 'E']);

export const QuestionOptionsSchema = z.object({
  A: z.string(),
  B: z.string(),
  C: z.string(),
  D: z.string(),
  E: z.string(),
});

export const QuestionSchema = z.object({
  id: z.string(),
  lesson: z.string(),
  unit: z.string(),
  question: z.string(),
  options: QuestionOptionsSchema,
  correctAnswer: OptionKeySchema,
  explanation: z.string(),
  is_favorite: z.boolean().optional(),
  quality_flag: z.string().nullable().optional(),
});

/* ─── QuestionRow (Supabase tablo satırı) ──────────────────────────────── */

export const QuestionRowSchema = z.object({
  id: z.string(),
  lesson: z.string(),
  unit: z.string(),
  question: z.string(),
  option_a: z.string(),
  option_b: z.string(),
  option_c: z.string(),
  option_d: z.string(),
  option_e: z.string(),
  correct_answer: OptionKeySchema,
  explanation: z.string(),
  created_at: z.string(),
  is_favorite: z.boolean().optional(),
  flagged: z.boolean().optional(),
  flag_reason: z.string().optional(),
  quality_flag: z.string().nullable().optional(),
});

/* ─── UserSettings ─────────────────────────────────────────────────────── */

export const ThemeSchema = z.enum(['dark', 'oled', 'light']);
export const FontSizeSchema = z.enum(['small', 'normal', 'large']);

export const UserSettingsSchema = z.object({
  theme: ThemeSchema,
  fontSize: FontSizeSchema,
  sprintBudget: z.union([z.literal(100), z.literal(150), z.literal(200)]).default(200),
});

/* ─── AnswerDetail ─────────────────────────────────────────────────────── */

export const AnswerStateSchema = z.enum(['correct', 'incorrect', 'blank']);

export const AnswerDetailSchema = z.object({
  question: QuestionSchema,
  state: AnswerStateSchema,
  selectedOptionKey: z.string().nullable().optional(),
  timeSpent: z.number().optional(),
});

/* ─── QuestionStat (localStorage / cloud) ──────────────────────────────── */

export const WrongChoiceSchema = z.object({
  selected: z.string(),
  timestamp: z.string(),
});

export const QuestionStatSchema = z.object({
  attempts: z.number(),
  corrects: z.number(),
  lastSeen: z.string(),
  wrongChoices: z.array(WrongChoiceSchema).optional(),
  difficulty: z.number().optional(),
});

/* ─── Parse helpers ────────────────────────────────────────────────────── */

export function parseQuestion(input: unknown): z.infer<typeof QuestionSchema> {
  return QuestionSchema.parse(input);
}

export function safeParseQuestion(input: unknown) {
  return QuestionSchema.safeParse(input);
}

export function parseUserSettings(input: unknown): z.infer<typeof UserSettingsSchema> {
  return UserSettingsSchema.parse(input);
}

export function safeParseUserSettings(input: unknown) {
  return UserSettingsSchema.safeParse(input);
}

export function parseQuestionStat(input: unknown): z.infer<typeof QuestionStatSchema> {
  return QuestionStatSchema.parse(input);
}

export function parseQuestionRow(input: unknown): z.infer<typeof QuestionRowSchema> {
  return QuestionRowSchema.parse(input);
}

/* ─── Inferred types (TS tarafından zaten tanımlı; export kolaylık için) ── */

export type QuestionZ = z.infer<typeof QuestionSchema>;
export type UserSettingsZ = z.infer<typeof UserSettingsSchema>;
export type QuestionStatZ = z.infer<typeof QuestionStatSchema>;
export type QuestionRowZ = z.infer<typeof QuestionRowSchema>;
