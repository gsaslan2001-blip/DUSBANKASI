import { deepSeekInput, generateDeepSeek, getDeepSeekConfig } from '../_lib/triaj/deepseek.js';
import { boundedJson, json, route, TriajApiError } from '../_lib/triaj/http.js';

export const handler = route('POST', async (request) => {
  const config = getDeepSeekConfig();
  if (!config) throw new TriajApiError(503, 'AI_DISABLED', 'DeepSeek bağlantısı kapalı.');
  const input = deepSeekInput.safeParse(await boundedJson(request, 32 * 1024));
  if (!input.success) throw new TriajApiError(400, 'INVALID_INPUT', 'Yapay zekâ isteğinde geçersiz alan var.');
  return json(await generateDeepSeek(input.data, config, request));
});

export default { fetch: handler };
