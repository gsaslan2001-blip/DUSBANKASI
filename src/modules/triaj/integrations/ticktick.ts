import { triajRequest } from './request';
import type { TickTickFocusSummary } from '../domain/focus';

export {
  buildTickTickFocusSummary, classifyFocusSegment, consolidateTickTickRecords,
  createEmptyFocusDay, getTurkishDayName, toTurkeyDateString,
} from '../domain/focus';
export type { ConsolidatedFocusDay, FocusSegment, RawTickTickFocusRecord, TickTickFocusSummary } from '../domain/focus';

export type TickTickFocusResponse = TickTickFocusSummary | {
  connected: false;
  configured: boolean;
  needsReconnect?: boolean;
};

export function getTickTickFocus(date?: string, refresh = false, signal?: AbortSignal) {
  const params = new URLSearchParams();
  if (date) params.set('date', date);
  if (refresh) params.set('refresh', '1');
  return triajRequest<TickTickFocusResponse>(`ticktick/focus?${params}`, { signal });
}

function waitForTickTick(popup: Window, authorizationUrl: string, signal?: AbortSignal) {
  return new Promise<boolean>((resolve, reject) => {
    const cleanup = () => {
      window.removeEventListener('message', receive);
      signal?.removeEventListener('abort', cancel);
      window.clearInterval(closedCheck);
      window.clearTimeout(timeout);
    };
    const cancel = () => {
      cleanup();
      reject(signal?.reason ?? new DOMException('İstek iptal edildi.', 'AbortError'));
    };
    const receive = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== popup ||
          event.data?.type !== 'TRIAJ_TICKTICK_RESULT' || typeof event.data.ok !== 'boolean') return;
      cleanup();
      resolve(event.data.ok);
    };
    const closedCheck = window.setInterval(() => {
      if (!popup.closed) return;
      cleanup();
      resolve(false);
    }, 700);
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error('TickTick bağlantısının süresi doldu.'));
    }, 600_000);
    window.addEventListener('message', receive);
    signal?.addEventListener('abort', cancel, { once: true });
    if (signal?.aborted) {
      cancel();
      return;
    }
    try {
      popup.location.replace(authorizationUrl);
    } catch (error) {
      cleanup();
      reject(error);
    }
  });
}

export async function connectTickTick(signal?: AbortSignal) {
  signal?.throwIfAborted();
  const popup = window.open('', '_blank', 'popup,width=560,height=720');
  if (!popup) throw new Error('TickTick penceresine izin verin.');
  try {
    const { url } = await triajRequest<{ url: string }>('ticktick/connect', { method: 'POST', signal });
    const authorization = new URL(url);
    if (authorization.origin !== 'https://ticktick.com' || authorization.pathname !== '/oauth/authorize') {
      throw new Error('Geçersiz TickTick yetkilendirme adresi.');
    }
    if (popup.closed) return false;
    return await waitForTickTick(popup, authorization.href, signal);
  } finally {
    if (!popup.closed) popup.close();
  }
}

export async function disconnectTickTick(signal?: AbortSignal) {
  await triajRequest('ticktick/disconnect', { method: 'POST', signal });
}
