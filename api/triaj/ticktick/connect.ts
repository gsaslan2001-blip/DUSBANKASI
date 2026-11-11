import { randomBytes, randomUUID } from 'node:crypto';
import { adminClient, json, requireUser, route, takeQuota, TriajApiError } from '../../_lib/triaj/http.js';
import { authorizationUrl, hashOAuthState, oauthCookie, oauthLifetimeSeconds, requireTickTickConfig } from '../../_lib/triaj/ticktick.js';

export const handler = route('POST', async (request) => {
  const userId = await requireUser(request);
  const config = requireTickTickConfig();
  if (request.headers.get('Origin') !== config.origin) {
    throw new TriajApiError(403, 'INVALID_ORIGIN', 'TickTick bağlantısı bu adreste kullanılamıyor.');
  }
  await takeQuota(userId, 'ticktick-connect');

  const state = randomBytes(32).toString('base64url');
  const { error } = await adminClient().from('triaj_ticktick_connections').upsert({
    user_id: userId,
    oauth_generation: randomUUID(),
    oauth_state_hash: hashOAuthState(state),
    oauth_origin: config.origin,
    oauth_expires_at: new Date(Date.now() + oauthLifetimeSeconds * 1000).toISOString(),
  });
  if (error) throw new TriajApiError(503, 'STORAGE_UNAVAILABLE', 'TickTick bağlantısı başlatılamadı.');

  return json({ url: authorizationUrl(config, state) }, 200, { 'Set-Cookie': oauthCookie(config, state) });
});

export default { fetch: handler };
