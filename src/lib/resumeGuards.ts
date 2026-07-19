import type { Question } from '../data';

/** Soru objesi quiz'de render edilebilir tam içeriğe sahip mi? */
export function hasFullContent(q: Partial<Question> | undefined | null): q is Question {
  return !!q && typeof q.question === 'string' && q.question.length > 0
    && !!q.options && typeof q.options === 'object';
}

/**
 * Resume edilen soru listesinde içeriği eksik olanları ID ile yeniden getirir.
 * fetchByIds: mevcut fetchQuestionsByIds fonksiyonu enjekte edilir (test edilebilirlik).
 * Dönen liste yalnız TAM içerikli soruları içerir; getirilemeyenler elenir.
 */
export async function ensureFullContent(
  questions: Array<Partial<Question> & { id: string }>,
  fetchByIds: (ids: string[]) => Promise<Question[]>,
): Promise<Question[]> {
  const incompleteIds = questions.filter(q => !hasFullContent(q)).map(q => q.id);
  if (incompleteIds.length === 0) return questions as Question[];
  const fetched = await fetchByIds(incompleteIds);
  const byId = new Map(fetched.map(q => [q.id, q]));
  const result: Question[] = [];
  for (const q of questions) {
    if (hasFullContent(q)) { result.push(q); continue; }
    const full = byId.get(q.id);
    if (full && hasFullContent(full)) result.push(full);
    // bulunamayan (silinmiş) ID sessizce elenir — çağıran taraf sayı farkını raporlar
  }
  return result;
}
