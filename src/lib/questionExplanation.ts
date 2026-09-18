/**
 * AI açıklamasını mevcut açıklamayı kaybetmeden, tekrar eklemeye karşı
 * idempotent biçimde birleştirir. Markdown ayıracı iki bölümü okunur tutar.
 */
export function appendAIExplanation(current: string | null | undefined, aiAnswer: string): string {
  const existing = (current ?? '').trim();
  const addition = aiAnswer.trim();

  if (!addition) return existing;
  if (!existing) return addition;
  if (existing.includes(addition)) return existing;

  return `${existing}\n\n---\n\n${addition}`;
}
