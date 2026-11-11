import { getDeepSeekConfig } from '../_lib/triaj/deepseek.js';
import { json, route } from '../_lib/triaj/http.js';
import { DEPLOY_BASE_URL, DEPLOY_DEEPSEEK_MODEL } from '../../src/modules/triaj/domain/deepseek.js';

export const handler = route('GET', async () => {
  const config = getDeepSeekConfig();
  return json({
    configured: Boolean(config),
    provider: config?.isDeploy ? 'deploy.com' : 'deepseek',
    baseUrl: process.env.DEPLOY_BASE_URL || DEPLOY_BASE_URL,
    model: config?.model || DEPLOY_DEEPSEEK_MODEL
  });
});

export default { fetch: handler };
