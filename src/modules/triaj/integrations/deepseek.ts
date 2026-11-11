import type { DeepSeekPromptInput, DeepSeekResult } from '../domain/deepseek';
import { triajRequest } from './request';

export { DEPLOY_DEEPSEEK_MODEL, DEPLOY_BASE_URL, buildDeepSeekPayload, parseDeepSeekResponse } from '../domain/deepseek';
export type {
  DeepSeekPromptInput, DeepSeekReasoningEffort, DeepSeekResult, DeepSeekTaskType,
  DeepSeekMessage, DeployChatCompletionRequest,
} from '../domain/deepseek';

export interface DeepSeekStatusResult {
  configured: boolean;
  provider?: string;
  model?: string;
}

// Configuration is not a provider health check. Errors remain visible to callers.
export function getDeepSeekStatus(signal?: AbortSignal): Promise<DeepSeekStatusResult> {
  return triajRequest('ai/status', { signal });
}

export function requestDeepSeekCompletion(input: DeepSeekPromptInput, signal?: AbortSignal): Promise<DeepSeekResult> {
  return triajRequest('ai/deepseek', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input), signal,
  });
}
