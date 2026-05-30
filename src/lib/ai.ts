/**
 * DUS Bankası — AI İstemci
 *
 * Tarayıcı doğrudan Gemini'ye PDF göndermez; Vercel `/api/explain`
 * endpoint'ine sadece soru metadata'sını POST'lar ve stream'i okur.
 * (Eski PDF-base64 yolu kaldırıldı — hız 20×, mobil veri 5000×, key gizli.)
 */

import type { Question } from '../data';

const ENDPOINT = '/api/explain';

export async function explainWithAIStream(
  question: Question,
  onChunk: (accumulated: string) => void,
  signal?: AbortSignal,
): Promise<void> {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      question: question.question,
      options: question.options,
      lesson: question.lesson,
      unit: question.unit,
      correctAnswer: question.correctAnswer,
    }),
    signal,
  });

  if (!response.ok || !response.body) {
    const detail = await response.text().catch(() => '');
    throw new Error(`AI yanıt veremedi (${response.status}). ${detail}`.trim());
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let accumulated = '';

  while (true) {
    if (signal?.aborted) {
      try { await reader.cancel(); } catch { /* ignore */ }
      break;
    }
    const { value, done } = await reader.read();
    if (done) break;
    accumulated += decoder.decode(value, { stream: true });
    onChunk(accumulated);
  }
}

/** Geriye dönük uyumluluk: tek seferlik (non-stream) çağrı. */
export async function explainWithAI(question: Question): Promise<string> {
  let last = '';
  await explainWithAIStream(question, (acc) => { last = acc; });
  return last;
}

/**
 * Sunucu tarafı yapılandırma kontrolü tarayıcıdan yapılamaz; artık her zaman
 * `true` döner. Gerçek yapılandırma hatası `/api/explain` 500 yanıtıyla
 * yüzeye çıkar ve UI'de gösterilir.
 */
export function isAIConfigured(): boolean {
  return true;
}
