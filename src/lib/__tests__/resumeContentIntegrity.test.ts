import { describe, it, expect } from 'vitest';
import { fromCompact } from '../../hooks/useResumableSession';
import { ensureFullContent } from '../resumeGuards';
import type { CompactSessionInfo } from '../../types/app';
import type { Question, QuestionSkeleton } from '../../data';

/**
 * REGRESYON PAKETİ — "Eski season resume → siyah ekran" (Bug 1, Rapor Faz 1)
 *
 * Kök neden: fromCompact() soru havuzu olarak App.tsx'ten SKELETON listesi alıyor
 * (yalnız id/lesson/unit — question/options İÇERİĞİ YOK). handleResumeSession bu
 * içeriksiz objeleri doğrudan quiz'e sokuyor; QuestionCard `question.question.split`
 * ve `Object.entries(question.options)` çağrılarında TypeError fırlatıyor.
 * ErrorBoundary olmadığı için React tüm ağacı söküyor → siyah ekran.
 *
 * AKTİF testler bugünkü davranış sözleşmesini sabitler.
 * describe.skip bloğu Faz 1 fix'i uygulandıktan sonra AÇILACAK (skip kaldırılacak).
 */

function fullQ(id: string): Question {
  return {
    id,
    lesson: 'Endodonti',
    unit: 'Test',
    question: `soru ${id}`,
    options: { A: 'a', B: 'b', C: 'c', D: 'd', E: 'e' },
    correctAnswer: 'A',
    explanation: '',
  };
}

// App.tsx'in fromCompact'a gerçekte geçirdiği şeyin simülasyonu: içeriksiz skeleton
function skeletonQ(id: string): QuestionSkeleton {
  return { id, lesson: 'Endodonti', unit: 'Test', quality_flag: null, is_favorite: false };
}

function compact(ids: string[], answered = 0): CompactSessionInfo {
  return {
    questionIds: ids,
    answers: ids.slice(0, answered).map(questionId => ({
      questionId,
      state: 'correct' as const,
      selectedOptionKey: 'A',
      timeSpent: 10,
    })),
    currentIndex: answered,
    mode: 'quiz',
  };
}

describe('resume veri bütünlüğü — mevcut davranış sözleşmesi', () => {
  it('havuzda hiç bulunmayan (silinmiş) ID’ler sessizce elenir', () => {
    const pool = [fullQ('s1'), fullQ('s3')];
    const result = fromCompact(compact(['s1', 's2-SILINMIS', 's3']), pool);
    expect(result).not.toBeNull();
    expect(result!.questions.map(q => q.id)).toEqual(['s1', 's3']);
  });

  it('TÜM ID’ler silinmişse null döner (resume teklif edilmez)', () => {
    const result = fromCompact(compact(['x1', 'x2']), [fullQ('s1')]);
    expect(result).toBeNull();
  });

  it('BUG KANITI: skeleton havuzuyla resume, İÇERİKSİZ soru objeleri döndürür', () => {
    // Bu test bugünkü hatalı davranışı BELGELEMEK için yeşildir.
    // Faz 1 fix'i handleResumeSession'a fetchQuestionsByIds eklediğinde bu
    // sözleşme değişmez (fromCompact aynı kalır) — fix çağrı NOKTASINDADIR.
    const pool = ['s1', 's2'].map(skeletonQ) as unknown as Question[];
    const result = fromCompact(compact(['s1', 's2']), pool);
    expect(result).not.toBeNull();
    // QuestionCard'ı çökerten durum: question/options alanları undefined
    expect(result!.questions[0].question).toBeUndefined();
    expect(result!.questions[0].options).toBeUndefined();
  });
});

// ─── FAZ 1 SONRASI AÇILACAK ─────────────────────────────────────────────────
// Talimat: Faz 1'de `ensureFullContent` yardımcı fonksiyonu eklendikten sonra
// `describe.skip` → `describe` yap ve importu aç. Detay: raporlar/IMPLEMENTATION_RAPORU_2026-07-11.md
describe('FAZ-1 SONRASI: resume yalnız tam içerikli sorularla quiz başlatır', () => {
  it('ensureFullContent içeriksiz soruları fetchQuestionsByIds ile tamamlar', async () => {
    const skeletons = [skeletonQ('s1'), skeletonQ('s2')] as unknown as (Partial<Question> & { id: string })[];
    const mockFetchByIds = async (ids: string[]) => ids.map(fullQ);
    const hydrated = await ensureFullContent(skeletons, mockFetchByIds);
    expect(hydrated).toHaveLength(2);
    expect(hydrated.every(q => typeof q.question === 'string' && q.question.length > 0 && !!q.options)).toBe(true);
  });

  it('içerik getirilemeyen (silinmiş) ID’ler elenir', async () => {
    const skeletons = [skeletonQ('s1'), skeletonQ('gone')] as unknown as (Partial<Question> & { id: string })[];
    const mockFetchByIds = async (ids: string[]) => ids.filter(id => id === 's1').map(fullQ);
    const hydrated = await ensureFullContent(skeletons, mockFetchByIds);
    expect(hydrated.map(q => q.id)).toEqual(['s1']);
  });
});
