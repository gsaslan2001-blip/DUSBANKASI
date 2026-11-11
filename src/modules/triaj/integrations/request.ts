import { supabase } from '../../../lib/supabase';

export class TriajRequestError extends Error {
  readonly status: number;
  readonly code: string;
  constructor(status: number, code: string, message: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export async function triajRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.access_token || session.user?.is_anonymous) {
    throw new TriajRequestError(401, 'UNAUTHENTICATED', 'DUSBANKASI oturumunuzu açın.');
  }
  const headers = new Headers(init.headers);
  headers.set('Authorization', `Bearer ${session.access_token}`);
  const timeout = AbortSignal.timeout(35_000);
  const signal = init.signal ? AbortSignal.any([init.signal, timeout]) : timeout;
  let response: Response;
  try {
    response = await fetch(`/api/triaj/${path}`, { ...init, signal, headers, cache: 'no-store' });
  } catch (error) {
    if (init.signal?.aborted) throw error;
    if (timeout.aborted) throw new TriajRequestError(504, 'REQUEST_TIMEOUT', 'Bağlantı yanıt süresi doldu. Tekrar deneyin.');
    throw new TriajRequestError(0, 'NETWORK_UNAVAILABLE', 'Sunucuya ulaşılamadı. İnternet bağlantınızı kontrol edin.');
  }
  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new TriajRequestError(response.status, typeof body?.code === 'string' ? body.code : 'REQUEST_FAILED',
      typeof body?.error === 'string' ? body.error : 'TRİAJ bağlantısı kullanılamıyor.');
  }
  return response.json();
}
