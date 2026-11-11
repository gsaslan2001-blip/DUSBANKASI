import { getDeepSeekConfig } from '../../_lib/triaj/deepseek.js';
import { json, requireUser, route } from '../../_lib/triaj/http.js';

export const handler = route('GET', async (request) => {
  await requireUser(request);
  return json({ configured: Boolean(getDeepSeekConfig()) });
});

export default { fetch: handler };
