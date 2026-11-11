import { diagnoseDeepSeekConfig, getDeepSeekConfig } from '../../_lib/triaj/deepseek.js';
import { json, requireUser, route } from '../../_lib/triaj/http.js';

export const handler = route('GET', async (request) => {
  await requireUser(request);
  // `configured:false` iki farklı durumu gizliyordu: özellik bilinçli kapalı mı,
  // yoksa anahtar/URL yanlış mı yapılandırılmış? İkincisi operatör hatasıdır.
  const problem = diagnoseDeepSeekConfig();
  return json({
    configured: Boolean(getDeepSeekConfig()),
    ...(problem ? { misconfigured: problem } : {}),
  });
});

export default { fetch: handler };
