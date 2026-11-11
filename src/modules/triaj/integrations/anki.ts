import { z } from 'zod';
import { CANONICAL_16_BRANCHES } from '../data/branchSpecs';
import { getTodayString } from '../domain/triage';
import type { AnkiFsrsSnapshot, CanonicalBranchCode } from '../types';

const count = z.number().int().nonnegative();
const deckMetrics = z.object({
  total: count,
  new: count,
  learning: count,
  young: count,
  mature: count,
});
const excelSnapshot = z.object({
  timestamp: z.string().max(40),
  summary: deckMetrics,
  today: z.object({
    date: z.iso.date().optional(),
    reviews: count,
    minutes: z.number().nonnegative().nullish(),
    retention: z.number().min(0).max(1).nullish(),
  }),
  branches: z.array(deckMetrics.extend({
    id: z.string().max(30).optional(),
    branch: z.string().max(150),
  })).max(16),
});

const aliases: Record<string, CanonicalBranchCode> = {
  'Histoloji & Embriyoloji': 'B02',
  Cerrahi: 'B09',
  Farmakoloji: 'B07',
  Patoloji: 'B06',
  Protez: 'B16',
  'Biyoloji ve Genetik': 'B08',
};
const normalizeBranch = (value: string) => value.trim().normalize('NFC').toLocaleLowerCase('tr-TR');
const branchCodesByName = new Map(
  CANONICAL_16_BRANCHES.flatMap(({ code, name, shortName }) => [
    [normalizeBranch(name), code] as const,
    [normalizeBranch(shortName), code] as const,
  ]).concat(Object.entries(aliases).map(([label, code]) => [normalizeBranch(label), code] as const)),
);

function cardCounts(metrics: z.output<typeof deckMetrics>) {
  return {
    totalCards: metrics.total,
    newCards: metrics.new,
    learningCards: metrics.learning,
    youngCards: metrics.young,
    matureCards: metrics.mature,
  };
}

export function parseAnkiSnapshot(raw: unknown, targetRetentionPercent = 90): AnkiFsrsSnapshot {
  const parsed = excelSnapshot.safeParse(raw);
  if (!parsed.success) throw new Error('ExcelMaster Anki anlık görüntüsünün biçimi geçersiz.');
  const data = parsed.data;
  const normalizedTime = data.timestamp.trim().replace(' ', 'T');
  const timestamp = /(?:Z|[+-]\d{2}:?\d{2})$/.test(normalizedTime) ? normalizedTime : normalizedTime + '+03:00';
  const syncTime = new Date(timestamp);
  if (!Number.isFinite(syncTime.getTime()) || !z.iso.date().safeParse(normalizedTime.slice(0, 10)).success) {
    throw new Error('Anki anlık görüntüsünün eşitleme tarihi geçersiz.');
  }
  const branches = new Map<CanonicalBranchCode, z.output<typeof deckMetrics>>();
  for (const branch of data.branches) {
    const codeByName = branchCodesByName.get(normalizeBranch(branch.branch));
    const codeById = CANONICAL_16_BRANCHES.find(({ code }) => code === branch.id)?.code;
    const code = codeByName ?? codeById;
    if (!code || branches.has(code) || (branch.id && code !== codeById)) {
      throw new Error(`Anki branşı eşleştirilemedi: ${branch.branch}`);
    }
    branches.set(code, branch);
  }
  const branchStats = CANONICAL_16_BRANCHES.flatMap(({ code, name }) => {
    const metrics = branches.get(code);
    return metrics ? [{ branchCode: code, branchName: name, ...cardCounts(metrics) }] : [];
  });
  return {
    source: 'excelmaster',
    syncedAt: syncTime.toISOString(),
    lastSyncDate: data.today.date ?? getTodayString(syncTime),
    dailyReviewCount: data.today.reviews,
    averageTimeSecondsPerCard: data.today.minutes != null && data.today.reviews
      ? Number((data.today.minutes * 60 / data.today.reviews).toFixed(2))
      : undefined,
    overallRetentionPercent: data.today.retention == null ? undefined : Number((data.today.retention * 100).toFixed(2)),
    targetRetentionPercent,
    ...cardCounts(data.summary),
    branchStats,
  };
}

const ankiConnectUrl = 'http://127.0.0.1:8765';

/** HTTPS sayfa, HTTP 127.0.0.1 isteğini karışık içerik olarak engeller.
 *  Üretimde doğrudan bağlantı denemek yerine elle snapshot akışı sunulur. */
export function canReachLocalAnki(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.protocol === 'https:' ? false : true;
}

export async function fetchLocalAnkiActivity(signal?: AbortSignal): Promise<{ reviews: number }> {
  if (!canReachLocalAnki()) {
    throw new Error('Tarayıcı HTTPS sayfadan Anki uygulamasına doğrudan bağlanamaz. Anki özetini elle girin veya yerel uygulamayı kullanın.');
  }
  const requestSignal = signal ? AbortSignal.any([signal, AbortSignal.timeout(12_000)]) : AbortSignal.timeout(12_000);
  const invoke = async (action: 'requestPermission' | 'getNumCardsReviewedToday') => {
    const response = await fetch(ankiConnectUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: JSON.stringify({ action, version: 6 }),
      credentials: 'omit',
      cache: 'no-store',
      redirect: 'error',
      signal: requestSignal,
    });
    if (!response.ok) throw new Error('AnkiConnect request failed');
    const body = z.object({ result: z.unknown(), error: z.null() }).parse(await response.json());
    return body.result;
  };
  try {
    const permission = z.object({ permission: z.literal('granted'), requireApiKey: z.literal(false).optional() });
    permission.parse(await invoke('requestPermission'));
    return { reviews: count.parse(await invoke('getNumCardsReviewedToday')) };
  } catch {
    signal?.throwIfAborted();
    throw new Error('AnkiConnect ile veri okunamadı. Anki açıkken bu siteye izin verin veya anlık görüntü yükleyin.');
  }
}

export interface AnkiExportCard {
  text: string;
  extra?: string;
  tags?: string;
}

function tsvField(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export function exportAnkiCards(cards: readonly AnkiExportCard[]) {
  const seen = new Set<string>();
  const rows: string[] = ['#separator:Tab', '#html:false', '#notetype:Cloze', '#tags column:3'];
  for (const card of cards) {
    const text = card.text.trim();
    if (!text || seen.has(text)) continue;
    seen.add(text);
    rows.push([text, card.extra ?? '', card.tags ?? ''].map(tsvField).join('\t'));
  }
  return rows.join('\n') + '\n';
}
