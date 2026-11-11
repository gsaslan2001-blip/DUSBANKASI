import { z } from 'zod';
import { DEPLOY_BASE_URL, DEPLOY_DEEPSEEK_MODEL } from '../../../src/modules/triaj/domain/deepseek.js';
import { buildDeepSeekPayload, parseDeepSeekResponse } from './deepseekPrompt.js';
import { TriajApiError, upstreamSignal } from './http.js';

export const deepSeekInput = z.strictObject({
  taskType: z.enum(['TRIAGE_PATCH', 'ANKI_CLOZE', 'UNIT_BLURTING', 'CUSTOM']),
  subjectName: z.string().trim().max(120).optional(),
  subjectCode: z.string().trim().max(32).optional(),
  unitTitle: z.string().trim().max(300).optional(),
  bucket: z.string().trim().max(32).optional(),
  scoreSummary: z.string().trim().max(300).optional(),
  userNotes: z.string().trim().max(4000).optional(),
  customPrompt: z.string().trim().max(4000).optional(),
  reasoningEffort: z.enum(['none', 'low', 'high', 'max']).optional(),
  maxCompletionTokens: z.number().int().min(1).max(2400).optional(),
  temperature: z.number().min(0).max(2).optional(),
  cachePreference: z.number().int().min(1).max(20).optional(),
});

export function getDeepSeekConfig() {
  const key = process.env.DEPLOY_API_KEY?.trim();
  const model = process.env.DEPLOY_MODEL?.trim() || DEPLOY_DEEPSEEK_MODEL;
  const baseUrl = (process.env.DEPLOY_BASE_URL?.trim() || DEPLOY_BASE_URL).replace(/\/$/, '');
  if (!key || baseUrl !== DEPLOY_BASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return null;
  return { key, model, endpoint: `${baseUrl}/chat/completions` };
}

const completionResponse = z.looseObject({
  choices: z.array(z.looseObject({
    message: z.looseObject({
      content: z.string().nullish(),
      reasoning_content: z.string().nullish(),
    }),
  })).min(1),
});

export async function generateDeepSeek(
  input: z.output<typeof deepSeekInput>,
  config: NonNullable<ReturnType<typeof getDeepSeekConfig>>,
  request: Request,
) {
  const payload = { ...buildDeepSeekPayload(input), model: config.model };
  const signal = upstreamSignal(request, 25_000);
  try {
    const response = await fetch(config.endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.key}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'error',
      signal,
    });
    if (response.status === 429) {
      throw new TriajApiError(429, 'PROVIDER_RATE_LIMIT', 'Yapay zekâ sağlayıcısı yoğun. Biraz sonra tekrar deneyin.');
    }
    if (!response.ok) throw new Error('Provider request failed');
    const completion = completionResponse.parse(await response.json());
    const result = parseDeepSeekResponse(completion);
    if (!result.content) throw new Error('Provider returned no content');
    return result;
  } catch (error) {
    if (error instanceof TriajApiError) throw error;
    if (signal.aborted) throw new TriajApiError(504, 'PROVIDER_TIMEOUT', 'Yapay zekâ yanıt süresi doldu.');
    throw new TriajApiError(502, 'PROVIDER_UNAVAILABLE', 'Yapay zekâ yanıtı alınamadı.');
  }
}
