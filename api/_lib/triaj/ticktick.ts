import { createCipheriv, createDecipheriv, createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import { z } from 'zod';
import { TriajApiError, upstreamSignal } from './http.js';

const callbackPath = '/api/triaj/ticktick/callback';
const tokenEndpoint = 'https://ticktick.com/oauth/token';
const scope = 'tasks:read';
export const oauthLifetimeSeconds = 600;

export function getTickTickConfig() {
  const configuredOrigin = process.env.TRIAJ_APP_ORIGIN?.trim().replace(/\/$/, '');
  const clientId = process.env.TICKTICK_CLIENT_ID?.trim();
  const clientSecret = process.env.TICKTICK_CLIENT_SECRET?.trim();
  const encodedKey = process.env.TRIAJ_TOKEN_ENCRYPTION_KEY?.trim();
  if (!clientId || !clientSecret || !configuredOrigin || !encodedKey || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return null;
  }
  if (!/^[A-Za-z0-9+/]{43}=$/.test(encodedKey)) return null;
  if (!URL.canParse(configuredOrigin)) return null;
  const origin = new URL(configuredOrigin);
  const secure = origin.protocol === 'https:';
  const localHttp = origin.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(origin.hostname);
  if (origin.origin !== configuredOrigin || (!secure && !localHttp)) return null;
  return {
    origin: origin.origin,
    redirectUri: new URL(callbackPath, origin).href,
    secure,
    clientId,
    clientSecret,
    encryptionKey: Buffer.from(encodedKey, 'base64'),
  };
}

type TickTickConfig = NonNullable<ReturnType<typeof getTickTickConfig>>;

export function requireTickTickConfig() {
  const config = getTickTickConfig();
  if (!config) throw new TriajApiError(503, 'TICKTICK_DISABLED', 'TickTick bağlantısı kapalı.');
  return config;
}

export function hashOAuthState(state: string) {
  return createHash('sha256').update(state).digest('hex');
}

function stateCookieName(state: string) {
  return `triaj_ticktick_${hashOAuthState(state).slice(0, 16)}`;
}

export function validOAuthState(request: Request, state: string | null): state is string {
  const isState = (value: string | null | undefined): value is string =>
    typeof value === 'string' && /^[A-Za-z0-9_-]{43}$/.test(value);
  if (!isState(state)) return false;
  const name = stateCookieName(state);
  const cookie = request.headers.get('Cookie')?.split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(name + '='))
    ?.slice(name.length + 1);
  return isState(cookie) && timingSafeEqual(Buffer.from(cookie), Buffer.from(state));
}

export function oauthCookie(config: TickTickConfig, state: string, clear = false) {
  const maxAge = clear ? 0 : oauthLifetimeSeconds;
  return `${stateCookieName(state)}=${clear ? '' : state}; Path=${callbackPath}; Max-Age=${maxAge}; HttpOnly; SameSite=Lax${config.secure ? '; Secure' : ''}`;
}

export function authorizationUrl(config: TickTickConfig, state: string) {
  const url = new URL('https://ticktick.com/oauth/authorize');
  url.search = new URLSearchParams({
    client_id: config.clientId,
    scope,
    state,
    redirect_uri: config.redirectUri,
    response_type: 'code',
  }).toString();
  return url.href;
}

const credentialSchema = z.object({
  access_token: z.string().min(1).max(4096),
  refresh_token: z.string().min(1).max(4096).nullish(),
  expires_in: z.number().int().positive().max(60 * 60 * 24 * 365 * 10).nullish(),
});

type TickTickCredential = z.output<typeof credentialSchema>;

export async function exchangeAuthorizationCode(config: TickTickConfig, code: string, request: Request) {
  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.clientId}:${config.clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: new URLSearchParams({
      code,
      grant_type: 'authorization_code',
      scope,
      redirect_uri: config.redirectUri,
    }),
    redirect: 'error',
    signal: upstreamSignal(request, 12_000),
  });
  if (!response.ok) throw new Error('TickTick exchange failed');
  return credentialSchema.parse(await response.json());
}

function associatedData(userId: string, version: string) {
  return Buffer.from(`ticktick:v1:${userId}:${version}`);
}

export function sealCredential(credential: TickTickCredential, key: Buffer, userId: string, version: string) {
  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  cipher.setAAD(associatedData(userId, version));
  const encrypted = Buffer.concat([cipher.update(JSON.stringify(credential), 'utf8'), cipher.final()]);
  return Buffer.concat([iv, cipher.getAuthTag(), encrypted]).toString('base64url');
}

export function openCredential(ciphertext: string, key: Buffer, userId: string, version: string) {
  const encoded = Buffer.from(ciphertext, 'base64url');
  const decipher = createDecipheriv('aes-256-gcm', key, encoded.subarray(0, 12));
  decipher.setAAD(associatedData(userId, version));
  decipher.setAuthTag(encoded.subarray(12, 28));
  const plain = Buffer.concat([decipher.update(encoded.subarray(28)), decipher.final()]);
  return credentialSchema.parse(JSON.parse(plain.toString('utf8')));
}

export function popupResponse(config: TickTickConfig, ok: boolean, status: number, state?: string) {
  const nonce = randomBytes(18).toString('base64url');
  const message = ok ? 'TickTick bağlantısı kuruldu.' : 'TickTick bağlantısı kurulamadı.';
  const script = `if (window.opener) { window.opener.postMessage({ type: 'TRIAJ_TICKTICK_RESULT', ok: ${ok} }, ${JSON.stringify(config.origin)}); window.close(); }`;
  const body = `<!doctype html><html lang="tr"><head><meta charset="utf-8"><title>TickTick</title></head><body><p>${message}</p><script nonce="${nonce}">${script}</script></body></html>`;
  return new Response(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Security-Policy': `default-src 'none'; script-src 'nonce-${nonce}'; frame-ancestors 'none'; base-uri 'none'`,
      'Referrer-Policy': 'no-referrer',
      'X-Content-Type-Options': 'nosniff',
      ...(state ? { 'Set-Cookie': oauthCookie(config, state, true) } : {}),
    },
  });
}
