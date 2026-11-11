import { adminClient, route } from '../../_lib/triaj/http.js';
import {
  exchangeAuthorizationCode, hashOAuthState, popupResponse, requireTickTickConfig, sealCredential, validOAuthState,
} from '../../_lib/triaj/ticktick.js';

export const handler = route('GET', async (request) => {
  const config = requireTickTickConfig();
  const params = new URL(request.url).searchParams;
  const state = params.get('state');
  if (!validOAuthState(request, state)) return popupResponse(config, false, 400);

  const admin = adminClient();
  // Consume the state before contacting TickTick, including if the user denied consent.
  const { data: binding, error } = await admin.from('triaj_ticktick_connections')
    .update({ oauth_state_hash: null, oauth_origin: null, oauth_expires_at: null })
    .eq('oauth_state_hash', hashOAuthState(state))
    .eq('oauth_origin', config.origin)
    .gt('oauth_expires_at', new Date().toISOString())
    .select('user_id,oauth_generation')
    .maybeSingle();
  if (error) return popupResponse(config, false, 503, state);
  if (!binding) return popupResponse(config, false, 400, state);

  const code = params.get('code');
  if (!code || code.length > 4096 || params.has('error')) return popupResponse(config, false, 400, state);
  try {
    const credential = await exchangeAuthorizationCode(config, code, request);
    const { user_id: userId, oauth_generation: version } = binding;
    const { data, error: saveError } = await admin.from('triaj_ticktick_connections')
      .update({
        credential_ciphertext: sealCredential(credential, config.encryptionKey, userId, version),
        connection_version: version,
        credential_expires_at: credential.expires_in
          ? new Date(Date.now() + credential.expires_in * 1000).toISOString()
          : null,
      })
      .eq('user_id', userId)
      .eq('oauth_generation', version)
      .select('connection_version')
      .maybeSingle();
    if (saveError) return popupResponse(config, false, 503, state);
    // A later authorization or disconnect supersedes an in-flight callback.
    return popupResponse(config, Boolean(data), data ? 200 : 409, state);
  } catch {
    return popupResponse(config, false, 502, state);
  }
});

export default { fetch: handler };
