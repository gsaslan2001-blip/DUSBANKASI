import { z } from 'zod';
import { shiftFocusDate } from '../../../src/modules/triaj/domain/focus.js';
import type { RawTickTickFocusRecord } from '../../../src/modules/triaj/domain/focus.js';
import { TriajApiError, upstreamSignal } from './http.js';

const focusRecords = z.array(z.object({
  id: z.string().max(250).optional(),
  startTime: z.string().max(60).regex(/(?:Z|[+-]\d{2}:?\d{2})$/)
    .refine((value) => Number.isFinite(Date.parse(value))),
  endTime: z.string().max(60).optional(),
  duration: z.number().int().nonnegative(),
  note: z.string().max(5000).nullish(),
  tasks: z.array(z.object({ title: z.string().max(5000).nullish() })).max(100).nullish(),
})).max(20_000);

const cache = new Map<string, {
  day: string;
  time: number;
  records: RawTickTickFocusRecord[];
}>();

export async function fetchFocusRecords(
  userId: string,
  connectionVersion: string,
  token: string,
  today: string,
  refresh: boolean,
  request: Request,
) {
  const cacheKey = `${userId}:${connectionVersion}`;
  const cached = cache.get(cacheKey);
  const maxAge = refresh ? 5_000 : 60_000;
  if (cached?.day === today && Date.now() - cached.time < maxAge) {
    return { records: cached.records, syncedAt: new Date(cached.time).toISOString() };
  }
  const abort = new AbortController();
  const signal = AbortSignal.any([upstreamSignal(request, 12_000), abort.signal]);
  try {
    const windows = [0, 30, 60].map((daysAgo) => ({
      from: `${shiftFocusDate(today, -daysAgo - 29)}T00:00:00+0300`,
      to: `${shiftFocusDate(today, -daysAgo)}T23:59:59+0300`,
    }));
    const requests = windows.flatMap(({ from, to }) =>
      ([0, 1] as const).map(async (type) => {
        const url = new URL('https://api.ticktick.com/open/v1/focus');
        url.search = new URLSearchParams({ from, to, type: String(type) }).toString();
        const response = await fetch(url, {
          headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
          redirect: 'error',
          signal,
        });
        if (response.status === 401 || response.status === 403) {
          throw new TriajApiError(409, 'TICKTICK_RECONNECT', 'TickTick yetkisini yeniden verin.');
        }
        if (response.status === 429) {
          throw new TriajApiError(429, 'PROVIDER_RATE_LIMIT', 'TickTick yoğun. Biraz sonra tekrar deneyin.');
        }
        if (!response.ok) throw new Error('TickTick Focus request failed');
        return focusRecords.parse(await response.json()).map((record) => ({ ...record, type }));
      }),
    );
    const records = (await Promise.all(requests)).flat();
    const now = Date.now();
    for (const [key, entry] of cache) {
      if (now - entry.time >= 60_000) cache.delete(key);
    }
    if (cache.size >= 32) {
      const oldest = cache.keys().next();
      if (!oldest.done) cache.delete(oldest.value);
    }
    cache.set(cacheKey, { day: today, time: now, records });
    return { records, syncedAt: new Date(now).toISOString() };
  } catch (error) {
    cache.delete(cacheKey);
    if (error instanceof TriajApiError) throw error;
    if (signal.aborted) throw new TriajApiError(504, 'PROVIDER_TIMEOUT', 'TickTick yanıt süresi doldu.');
    throw new TriajApiError(502, 'FOCUS_UNAVAILABLE', 'TickTick odak verisine ulaşılamadı.');
  } finally {
    abort.abort();
  }
}
