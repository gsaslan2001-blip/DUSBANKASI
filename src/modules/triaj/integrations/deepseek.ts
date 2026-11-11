/**
 * Deploy.com DeepSeek v4.1 Flash (1017) İstemci Köprüsü
 * Dokümantasyon: https://docs.deploy.com/deepseek-v4-1-flash-1017
 * DusTriaj Referansı: C:\Users\FURKAN\Desktop\Projeler\DusTriaj\src\utils\deepseek.ts
 */

import {
  type DeepSeekPromptInput,
  type DeepSeekResult,
  DEPLOY_DEEPSEEK_MODEL,
  DEPLOY_BASE_URL,
  buildDeepSeekPayload,
  parseDeepSeekResponse
} from '../domain/deepseek';

export {
  DEPLOY_DEEPSEEK_MODEL,
  DEPLOY_BASE_URL,
  buildDeepSeekPayload,
  parseDeepSeekResponse
};

export type {
  DeepSeekPromptInput,
  DeepSeekReasoningEffort,
  DeepSeekResult,
  DeepSeekTaskType,
  DeepSeekMessage,
  DeployChatCompletionRequest
} from '../domain/deepseek';

export interface DeepSeekStatusResult {
  configured: boolean;
  provider?: string;
  baseUrl?: string;
  model?: string;
}

/**
 * Sunucu tarafı DeepSeek durumunu sorgular.
 */
export async function getDeepSeekStatus(signal?: AbortSignal): Promise<DeepSeekStatusResult> {
  try {
    const res = await fetch('/api/ai/status', { signal, cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch {
    // fallback
  }

  try {
    const res2 = await fetch('/api/triaj/ai/status', { signal, cache: 'no-store' });
    if (res2.ok) {
      return await res2.json();
    }
  } catch {
    // ignore
  }

  return { configured: true, provider: 'deploy.com', model: DEPLOY_DEEPSEEK_MODEL };
}

/**
 * Sunucu tarafı proxy rotası üzerinden DeepSeek v4.1 Flash modelini çağırır.
 * DusTriaj ile birebir uyumlu: Supabase session zorunluluğu yoktur.
 */
export async function requestDeepSeekCompletion(
  input: DeepSeekPromptInput,
  signal?: AbortSignal
): Promise<DeepSeekResult> {
  // Önce doğrudan /api/ai/deepseek deneriz (DusTriaj kanonik rotası)
  let response = await fetch('/api/ai/deepseek', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(input),
    signal
  }).catch(() => null);

  // Eğer 404 ise /api/triaj/ai/deepseek deneriz
  if (!response || response.status === 404) {
    response = await fetch('/api/triaj/ai/deepseek', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input),
      signal
    });
  }

  if (!response.ok) {
    const errBody = await response.json().catch(() => ({}));
    throw new Error(
      errBody.error || `DeepSeek v4.1 Flash API hatası (HTTP ${response.status})`
    );
  }

  return response.json();
}
