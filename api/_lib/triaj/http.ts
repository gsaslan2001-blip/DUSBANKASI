import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  dotenv.config({ path: '.env.local' });
  dotenv.config();
}

export class TriajApiError extends Error {
  constructor(readonly status: number, readonly code: string, message: string) {
    super(message);
  }
}

const authOptions = { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false };

function supabaseUrl() {
  const url = process.env.VITE_SUPABASE_URL;
  if (!url) throw new TriajApiError(503, 'NOT_CONFIGURED', 'TRİAJ sunucusu yapılandırılmamış.');
  return url;
}

export async function requireUser(request: Request) {
  const bearer = /^Bearer ([^\s,]+)$/i.exec(request.headers.get('Authorization') ?? '')?.[1];
  if (!bearer) throw new TriajApiError(401, 'UNAUTHENTICATED', 'DUSBANKASI oturumunuzu açın.');
  const key = process.env.VITE_SUPABASE_ANON_KEY;
  if (!key) throw new TriajApiError(503, 'NOT_CONFIGURED', 'TRİAJ sunucusu yapılandırılmamış.');
  const client = createClient(supabaseUrl(), key, { auth: authOptions });
  const { data, error } = await client.auth.getUser(bearer);
  if (error && (!error.status || error.status >= 500)) {
    throw new TriajApiError(503, 'AUTH_UNAVAILABLE', 'Oturum doğrulama hizmetine ulaşılamadı.');
  }
  if (error || !data.user || data.user.is_anonymous) {
    throw new TriajApiError(401, 'UNAUTHENTICATED', 'DUSBANKASI oturumunuzu açın.');
  }
  return data.user.id;
}

export function adminClient() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new TriajApiError(503, 'NOT_CONFIGURED', 'TRİAJ sunucusu yapılandırılmamış.');
  return createClient(supabaseUrl(), key, { auth: authOptions });
}

export function json(data: unknown, status = 200, headers?: HeadersInit) {
  const resultHeaders = new Headers(headers);
  resultHeaders.set('Cache-Control', 'no-store');
  resultHeaders.set('X-Content-Type-Options', 'nosniff');
  return Response.json(data, { status, headers: resultHeaders });
}

export function route(method: 'GET' | 'POST', run: (request: Request) => Promise<Response>) {
  return async (request: Request) => {
    if (request.method !== method) {
      return json({ code: 'METHOD_NOT_ALLOWED', error: 'Geçersiz istek yöntemi.' }, 405, { Allow: method });
    }
    try {
      return await run(request);
    } catch (error) {
      if (error instanceof TriajApiError) return json({ code: error.code, error: error.message }, error.status);
      return json({ code: 'INTEGRATION_UNAVAILABLE', error: 'Bağlantı geçici olarak kullanılamıyor.' }, 502);
    }
  };
}

export async function boundedJson(request: Request, maxBytes: number): Promise<unknown> {
  if (request.headers.get('Content-Type')?.split(';')[0].trim().toLowerCase() !== 'application/json') {
    throw new TriajApiError(415, 'UNSUPPORTED_MEDIA_TYPE', 'JSON gövdesi gerekli.');
  }
  if (Number(request.headers.get('Content-Length')) > maxBytes) {
    throw new TriajApiError(413, 'INPUT_TOO_LARGE', 'İstek boyutu sınırı aşıldı.');
  }
  const reader = request.body?.getReader();
  if (!reader) throw new TriajApiError(400, 'INVALID_JSON', 'Geçersiz JSON gövdesi.');
  const decoder = new TextDecoder();
  let body = '';
  let length = 0;
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > maxBytes) {
        await reader.cancel().catch(() => undefined);
        throw new TriajApiError(413, 'INPUT_TOO_LARGE', 'İstek boyutu sınırı aşıldı.');
      }
      body += decoder.decode(value, { stream: true });
    }
    return JSON.parse(body + decoder.decode());
  } catch (error) {
    if (error instanceof TriajApiError) throw error;
    throw new TriajApiError(400, 'INVALID_JSON', 'Geçersiz JSON gövdesi.');
  } finally {
    reader.releaseLock();
  }
}

export async function takeQuota(userId: string, feature: 'deepseek' | 'ticktick-connect') {
  const { data, error } = await adminClient().rpc('triaj_take_integration_quota', {
    p_user_id: userId,
    p_feature: feature,
  });
  if (error || typeof data !== 'boolean') {
    throw new TriajApiError(503, 'QUOTA_UNAVAILABLE', 'Kullanım kotası doğrulanamadı.');
  }
  if (!data) throw new TriajApiError(429, 'DAILY_LIMIT', 'Günlük bağlantı kotasına ulaşıldı.');
}

export function upstreamSignal(request: Request, timeoutMs: number) {
  return AbortSignal.any([request.signal, AbortSignal.timeout(timeoutMs)]);
}
