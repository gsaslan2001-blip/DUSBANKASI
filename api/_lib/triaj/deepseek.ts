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

const ALLOWED_DEEPSEEK_BASE_URLS = [
  DEPLOY_BASE_URL,
  'https://api.deploy.com/v1',
  'https://api-cdn.deploy.com/api/v1',
  'https://api.deepseek.com',
  'https://api.deepseek.com/v1',
];

export function getDeepSeekConfig() {
  const key = process.env.DEPLOY_API_KEY?.trim() || process.env.DEEPSEEK_API_KEY?.trim();
  const rawBaseUrl = process.env.DEPLOY_BASE_URL?.trim();
  const baseUrl = (rawBaseUrl || (process.env.DEEPSEEK_API_KEY && !process.env.DEPLOY_API_KEY ? 'https://api.deepseek.com' : DEPLOY_BASE_URL)).replace(/\/$/, '');
  if (!key || !ALLOWED_DEEPSEEK_BASE_URLS.includes(baseUrl)) return null;

  const isDeploy = baseUrl === DEPLOY_BASE_URL || baseUrl.includes('deploy.com');
  const defaultModel = isDeploy ? DEPLOY_DEEPSEEK_MODEL : (process.env.DEEPSEEK_MODEL?.trim() || 'deepseek-chat');
  const model = process.env.DEPLOY_MODEL?.trim() || defaultModel;

  return { key, model, endpoint: `${baseUrl}/chat/completions`, isDeploy };
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
  const basePayload = buildDeepSeekPayload(input);
  const payload = config.isDeploy
    ? { ...basePayload, model: config.model }
    : {
        model: config.model,
        messages: basePayload.messages,
        temperature: basePayload.temperature,
        max_tokens: basePayload.max_completion_tokens,
        stream: false,
        ...(config.model.includes('reasoner') && input.reasoningEffort && input.reasoningEffort !== 'none'
          ? { reasoning_effort: input.reasoningEffort }
          : {}),
      };
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
    if (response.status === 401 || response.status === 403) {
      throw new TriajApiError(502, 'PROVIDER_AUTH_FAILED', 'Yapay zekâ sağlayıcısı sunucu erişimini reddetti. Bağlantı yapılandırması kontrol edilmeli.');
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
