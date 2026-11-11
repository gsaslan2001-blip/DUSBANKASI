import { z } from 'zod';
import { buildTickTickFocusSummary, shiftFocusDate, toTurkeyDateString } from '../../../src/modules/triaj/domain/focus.js';
import { fetchFocusRecords } from '../../_lib/triaj/focus.js';
import { adminClient, json, requireUser, route, TriajApiError } from '../../_lib/triaj/http.js';
import { getTickTickConfig, openCredential } from '../../_lib/triaj/ticktick.js';

export const handler = route('GET', async (request) => {
  const userId = await requireUser(request);
  const config = getTickTickConfig();
  if (!config) return json({ connected: false, configured: false });
  const { searchParams } = new URL(request.url);
  const today = toTurkeyDateString(new Date());
  const date = searchParams.get('date') ?? today;
  if (!z.iso.date().safeParse(date).success || date < shiftFocusDate(today, -89) || date > today) {
    throw new TriajApiError(400, 'INVALID_DATE', 'Odak tarihi son 90 takvim günü içinde olmalı.');
  }
  const { data: connection, error } = await adminClient().from('triaj_ticktick_connections')
    .select('connection_version,credential_ciphertext,credential_expires_at')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) throw new TriajApiError(503, 'STORAGE_UNAVAILABLE', 'TickTick bağlantısı okunamadı.');
  if (!connection?.credential_ciphertext || !connection.connection_version) {
    return json({ connected: false, configured: true });
  }

  // The provider's public contract does not establish refresh for the Focus scope.
  const reconnect = () => json({ connected: false, configured: true, needsReconnect: true });
  if (connection.credential_expires_at && Date.parse(connection.credential_expires_at) <= Date.now()) {
    return reconnect();
  }
  let token: string;
  try {
    token = openCredential(
      connection.credential_ciphertext, config.encryptionKey, userId, connection.connection_version,
    ).access_token;
  } catch {
    return reconnect();
  }
  try {
    const { records, syncedAt } = await fetchFocusRecords(
      userId, connection.connection_version, token, today, searchParams.get('refresh') === '1', request,
    );
    return json(buildTickTickFocusSummary(records, today, date, syncedAt));
  } catch (error) {
    if (error instanceof TriajApiError && error.code === 'TICKTICK_RECONNECT') return reconnect();
    throw error;
  }
});

export default { fetch: handler };
