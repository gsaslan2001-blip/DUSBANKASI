import { adminClient, json, requireUser, route, TriajApiError } from '../../_lib/triaj/http.js';

export const handler = route('POST', async (request) => {
  const userId = await requireUser(request);
  const { error } = await adminClient().from('triaj_ticktick_connections').delete().eq('user_id', userId);
  if (error) throw new TriajApiError(503, 'STORAGE_UNAVAILABLE', 'TickTick bağlantısı kaldırılamadı.');
  return json({ connected: false });
});

export default { fetch: handler };
