import { triajRequest } from './request';
import type { DeepSeekPromptInput, DeepSeekResult } from '../domain/deepseek';

export { DEPLOY_DEEPSEEK_MODEL } from '../domain/deepseek';
export type {
  DeepSeekPromptInput, DeepSeekReasoningEffort, DeepSeekResult, DeepSeekTaskType,
} from '../domain/deepseek';

export function getDeepSeekStatus(signal?: AbortSignal) {
  return triajRequest<{ configured: boolean }>('ai/status', { signal });
}

export function requestDeepSeekCompletion(input: DeepSeekPromptInput, signal?: AbortSignal) {
  return triajRequest<DeepSeekResult>('ai/deepseek', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
    signal,
  });
}
