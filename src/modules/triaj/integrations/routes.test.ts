// @vitest-environment node

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { handler as deepseek } from '../../../../api/triaj/ai/deepseek';
import { handler as aiStatus } from '../../../../api/triaj/ai/status';
import { handler as connect } from '../../../../api/triaj/ticktick/connect';
import { handler as callback } from '../../../../api/triaj/ticktick/callback';
import { handler as disconnect } from '../../../../api/triaj/ticktick/disconnect';
import { handler as focus } from '../../../../api/triaj/ticktick/focus';
import { openCredential, sealCredential } from '../../../../api/_lib/triaj/ticktick';
import { getTodayString } from '../domain/triage';

const userA = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
const userB = 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb';
const origin = 'https://dusbankasi.example';
const key = Buffer.alloc(32, 5);

function request(path: string, method = 'GET', body?: string, user = 'test-user-a', headers?: HeadersInit) {
  return new Request(origin + '/api/triaj/' + path, {
    method,
    headers: {
      ...(user ? { Authorization: `Bearer ${user}` } : {}),
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...headers,
    },
    body,
  });
}

function mockNetwork(
  handle: (url: URL, init?: RequestInit) => Response | Promise<Response>,
) {
  const mock = vi.fn(async (input: string | URL | Request, init?: RequestInit) => {
    const url = new URL(input instanceof Request ? input.url : String(input));
    if (url.pathname === '/auth/v1/user') {
      const token = new Headers(init?.headers).get('Authorization');
      if (token === 'Bearer expired') return Response.json({ message: 'Invalid token' }, { status: 401 });
      return Response.json({ id: token === 'Bearer test-user-b' ? userB : userA, is_anonymous: false });
    }
    return handle(url, init);
  });
  vi.stubGlobal('fetch', mock);
  return mock;
}

beforeEach(() => {
  vi.stubEnv('VITE_SUPABASE_URL', 'https://supabase.example');
  vi.stubEnv('VITE_SUPABASE_ANON_KEY', 'test-publishable');
  vi.stubEnv('SUPABASE_SERVICE_ROLE_KEY', 'test-service');
  vi.stubEnv('TRIAJ_APP_ORIGIN', origin);
  vi.stubEnv('TRIAJ_TOKEN_ENCRYPTION_KEY', key.toString('base64'));
  vi.stubEnv('TICKTICK_CLIENT_ID', 'test-client');
  vi.stubEnv('TICKTICK_CLIENT_SECRET', 'test-oauth');
  vi.stubEnv('DEPLOY_API_KEY', 'test-provider');
  vi.stubEnv('DEPLOY_BASE_URL', 'https://api-cdn.deploy.com/api/v1');
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe('TRİAJ server routes', () => {
  it('validates the authenticated session and returns only feature state', async () => {
    const network = mockNetwork(() => { throw new Error('Unexpected provider call'); });
    expect((await aiStatus(request('ai/status', 'GET', undefined, ''))).status).toBe(401);
    expect(network).not.toHaveBeenCalled();
    expect((await aiStatus(request('ai/status', 'GET', undefined, 'expired'))).status).toBe(401);
    const active = await aiStatus(request('ai/status'));
    expect(active.headers.get('Cache-Control')).toBe('no-store');
    expect(await active.json()).toEqual({ configured: true });
    vi.stubEnv('DEPLOY_BASE_URL', 'https://untrusted.example/api/v1');
    expect(await (await aiStatus(request('ai/status'))).json()).toEqual({ configured: false });
  });

  it('bounds input before quota and constructs server-side prompts and usage results', async () => {
    const quota = vi.fn(() => Response.json(true));
    const provider = vi.fn((body: Record<string, unknown>) => {
      expect(body).toMatchObject({
        model: 'deepseek-ai/deepseek-v4.1-flash-1017', max_completion_tokens: 1600, reasoning_effort: 'low',
        messages: [{ role: 'system', content: expect.any(String) }, { role: 'user', content: expect.stringContaining('Mine') }],
      });
      return Response.json({
        id: 'fake-id',
        choices: [{ message: { content: '{{c1::Mine}}', reasoning_content: ' Özet ' } }],
        usage: { total_tokens: 42, completion_tokens_details: { reasoning_tokens: 8 } },
      });
    });
    mockNetwork((url, init) => {
      if (url.pathname.endsWith('/rpc/triaj_take_integration_quota')) return quota();
      expect(url.href).toBe('https://api-cdn.deploy.com/api/v1/chat/completions');
      expect(init?.redirect).toBe('error');
      return provider(JSON.parse(String(init?.body)));
    });
    expect((await deepseek(request('ai/deepseek', 'POST', JSON.stringify({ taskType: 'CUSTOM', model: 'other' })))).status).toBe(400);
    expect((await deepseek(request('ai/deepseek', 'POST', JSON.stringify({ customPrompt: 'x'.repeat(33_000) })))).status).toBe(413);
    expect(quota).not.toHaveBeenCalled();
    const response = await deepseek(request('ai/deepseek', 'POST', JSON.stringify({
      taskType: 'ANKI_CLOZE', userNotes: 'Mine', reasoningEffort: 'low',
    })));
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({
      id: 'fake-id', content: '{{c1::Mine}}', reasoningContent: 'Özet', usage: { totalTokens: 42, reasoningTokens: 8 },
    });
    expect(provider).toHaveBeenCalledTimes(1);
  });

  it('reports internal and upstream rate limits, and handles provider failures without raw details', async () => {
    let quotaAllowed = false;
    let providerStatus = 429;
    const provider = vi.fn(() => new Response('internal provider detail', { status: providerStatus }));
    mockNetwork((url) => url.pathname.endsWith('/rpc/triaj_take_integration_quota')
      ? Response.json(quotaAllowed) : provider());
    const invoke = () => deepseek(request('ai/deepseek', 'POST', '{"taskType":"UNIT_BLURTING"}'));
    let response = await invoke();
    expect(response.status).toBe(429);
    expect(await response.json()).toMatchObject({ code: 'DAILY_LIMIT' });
    expect(provider).not.toHaveBeenCalled();
    quotaAllowed = true;
    response = await invoke();
    expect(response.status).toBe(429);
    expect(await response.json()).toMatchObject({ code: 'PROVIDER_RATE_LIMIT' });
    providerStatus = 503;
    response = await invoke();
    expect(response.status).toBe(502);
    expect(await response.text()).not.toContain('internal provider detail');
  });

  it('binds OAuth to the configured origin, browser cookie and single-use state', async () => {
    let binding: Record<string, string | null> | undefined;
    let ciphertext = '';
    const exchange = vi.fn(() => Response.json({ access_token: 'synthetic-access', expires_in: 3600 }));
    mockNetwork((url, init) => {
      if (url.pathname.endsWith('/rpc/triaj_take_integration_quota')) return Response.json(true);
      if (url.hostname === 'ticktick.com') {
        expect(new URLSearchParams(String(init?.body)).get('redirect_uri')).toBe(origin + '/api/triaj/ticktick/callback');
        return exchange();
      }
      expect(url.pathname).toBe('/rest/v1/triaj_ticktick_connections');
      const body = init?.body ? JSON.parse(String(init.body)) : null;
      if (init?.method === 'POST') {
        binding = body;
        return new Response(null, { status: 201 });
      }
      if (url.searchParams.has('oauth_state_hash')) {
        if (url.searchParams.get('oauth_state_hash') !== 'eq.' + binding?.oauth_state_hash) return Response.json([]);
        const result = { user_id: binding.user_id, oauth_generation: binding.oauth_generation };
        binding.oauth_state_hash = null;
        return Response.json([result]);
      }
      if (init?.method === 'DELETE') {
        expect(url.searchParams.get('user_id')).toBe('eq.' + userA);
        return new Response(null, { status: 204 });
      }
      ciphertext = body.credential_ciphertext;
      expect(url.searchParams.get('oauth_generation')).toBe('eq.' + binding?.oauth_generation);
      return Response.json([{ connection_version: body.connection_version }]);
    });
    const makeConnect = (value: string) =>
      connect(request('ticktick/connect', 'POST', undefined, 'test-user-a', { Origin: value }));
    expect((await makeConnect('https://forged.example')).status).toBe(403);
    const connected = await makeConnect(origin);
    expect(connected.status).toBe(200);
    const authorization = new URL((await connected.json()).url);
    const state = authorization.searchParams.get('state')!;
    const cookie = connected.headers.get('Set-Cookie')!.split(';')[0];
    expect(connected.headers.get('Set-Cookie')).toContain('HttpOnly; SameSite=Lax; Secure');
    expect(binding?.oauth_state_hash).not.toBe(state);
    expect(binding?.user_id).toBe(userA);
    expect(authorization.searchParams.get('redirect_uri')).toBe(origin + '/api/triaj/ticktick/callback');

    const callbackPath = 'ticktick/callback?code=synthetic-code&state=' + state;
    expect((await callback(request(callbackPath, 'GET', undefined, ''))).status).toBe(400);
    expect(exchange).not.toHaveBeenCalled();
    const complete = await callback(request(callbackPath, 'GET', undefined, '', { Cookie: cookie }));
    expect(complete.status).toBe(200);
    expect(await complete.text()).toContain(JSON.stringify(origin));
    expect(ciphertext).not.toContain('synthetic-access');
    const version = binding?.oauth_generation as string;
    expect(openCredential(ciphertext, key, userA, version).access_token).toBe('synthetic-access');
    expect(() => openCredential(ciphertext, key, userB, version)).toThrow();

    expect((await callback(request(callbackPath, 'GET', undefined, '', { Cookie: cookie }))).status).toBe(400);
    expect(exchange).toHaveBeenCalledTimes(1);
    expect((await disconnect(request('ticktick/disconnect', 'POST'))).status).toBe(200);
  });

  it('queries both focus types across three windows, scopes cache, and requests reconnect at expiry', async () => {
    const today = getTodayString();
    const version = 'synthetic-version';
    let expires = new Date(Date.now() + 3600 * 1000).toISOString();
    let missingConnection = false;
    const windows: { from: string | null; to: string | null; type: string | null }[] = [];
    mockNetwork((url, init) => {
      if (url.hostname === 'api.ticktick.com') {
        const type = url.searchParams.get('type');
        windows.push({ from: url.searchParams.get('from'), to: url.searchParams.get('to'), type });
        const token = new Headers(init?.headers).get('Authorization');
        const user = token === 'Bearer user-a' ? 'a' : 'b';
        return Response.json([{
          id: 'daily-id', startTime: today + 'T08:00:00+0300', duration: (user === 'a' ? 20 : 40) * 60_000,
        }]);
      }
      if (missingConnection) return Response.json([]);
      const owner = url.searchParams.get('user_id') === 'eq.' + userA ? userA : userB;
      const credential = { access_token: owner === userA ? 'user-a' : 'user-b' };
      return Response.json([{
        connection_version: version,
        credential_ciphertext: sealCredential(credential, key, owner, version),
        credential_expires_at: expires,
      }]);
    });
    const get = async (user = 'test-user-a') => (await focus(request('ticktick/focus', 'GET', undefined, user))).json();
    expect(await get()).toMatchObject({ connected: true, activeDayStats: { totalMinutes: 40 } });
    expect(windows).toHaveLength(6);
    expect(new Set(windows.map(({ type }) => type))).toEqual(new Set(['0', '1']));
    expect(new Set(windows.map(({ from }) => from)).size).toBe(3);
    expect(windows[0].to).toBe(today + 'T23:59:59+0300');
    await get();
    expect(windows).toHaveLength(6);
    expect(await get('test-user-b')).toMatchObject({ activeDayStats: { totalMinutes: 80 } });
    expect(windows).toHaveLength(12);
    expires = '2000-01-01T00:00:00.000Z';
    expect(await get()).toEqual({ connected: false, configured: true, needsReconnect: true });
    vi.stubEnv('TICKTICK_ACCESS_TOKEN', 'must-not-be-used');
    missingConnection = true;
    expect(await get()).toEqual({ connected: false, configured: true });
    expect(windows).toHaveLength(12);
  });
});
