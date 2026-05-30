import { describe, it, expect } from 'vitest';
import {
  toCompact,
  fromCompact,
  isValidCompact,
  isValidLegacy,
} from '../../hooks/useResumableSession';
import type { ActiveSessionInfo, CompactSessionInfo } from '../../types/app';
import type { Question } from '../../data';

// ─── Fixtures ────────────────────────────────────────────────────────────────
function q(id: string): Question {
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

const POOL: Question[] = ['s1', 's2', 's3', 's4', 's5'].map(q);

function session(currentIndex: number, answered: number): ActiveSessionInfo {
  return {
    questions: POOL,
    answers: POOL.slice(0, answered).map(question => ({
      question,
      state: 'correct' as const,
      selectedOptionKey: 'A',
      timeSpent: 10,
    })),
    currentIndex,
    mode: 'quiz',
  };
}

describe('resumable session — başa dönme (reset) koruması', () => {
  it('toCompact → fromCompact round-trip currentIndex KORUNUR (başa dönmez)', () => {
    const s = session(3, 3);
    const restored = fromCompact(toCompact(s), POOL);
    expect(restored).not.toBeNull();
    // Kritik: tab değişimi/sync sonrası kullanıcı 3. sorudan devam etmeli, 0'a düşmemeli.
    expect(restored!.currentIndex).toBe(3);
    expect(restored!.questions.map(x => x.id)).toEqual(POOL.map(x => x.id));
    expect(restored!.answers).toHaveLength(3);
  });

  it('fromCompact: out-of-range currentIndex son soruya clamp edilir, 0a düşmez', () => {
    const compact: CompactSessionInfo = {
      questionIds: ['s1', 's2', 's3'],
      answers: [],
      currentIndex: 99,
      mode: 'quiz',
    };
    const restored = fromCompact(compact, POOL);
    expect(restored!.currentIndex).toBe(2); // length-1, başa değil
  });

  it('fromCompact: pool tarafından bilinmeyen soruları eler ama pozisyonu korur', () => {
    const compact: CompactSessionInfo = {
      questionIds: ['s1', 'SILINMIS', 's3'],
      answers: [],
      currentIndex: 1,
      mode: 'quiz',
    };
    const restored = fromCompact(compact, POOL);
    expect(restored!.questions.map(x => x.id)).toEqual(['s1', 's3']);
    expect(restored!.currentIndex).toBe(1);
  });

  it('fromCompact: hiçbir soru pool ile eşleşmezse null döner', () => {
    const compact: CompactSessionInfo = {
      questionIds: ['x', 'y'],
      answers: [],
      currentIndex: 0,
      mode: 'quiz',
    };
    expect(fromCompact(compact, POOL)).toBeNull();
  });
});

describe('isValidCompact — tamamlanmış/bozuk session reddi', () => {
  it('tüm sorular cevaplanmışsa geçersiz (temizlenmeli)', () => {
    expect(
      isValidCompact({ questionIds: ['s1', 's2'], answers: [
        { questionId: 's1', state: 'correct' },
        { questionId: 's2', state: 'correct' },
      ], currentIndex: 0, mode: 'quiz' }),
    ).toBe(false);
  });

  it('devam eden session (kısmen cevaplı) geçerli', () => {
    expect(
      isValidCompact({ questionIds: ['s1', 's2', 's3'], answers: [
        { questionId: 's1', state: 'correct' },
      ], currentIndex: 1, mode: 'quiz' }),
    ).toBe(true);
  });

  it('boş questionIds geçersiz', () => {
    expect(isValidCompact({ questionIds: [], answers: [], currentIndex: 0, mode: 'quiz' })).toBe(false);
  });

  it('currentIndex sınır dışı geçersiz', () => {
    expect(isValidCompact({ questionIds: ['s1', 's2'], answers: [], currentIndex: 2, mode: 'quiz' })).toBe(false);
    expect(isValidCompact({ questionIds: ['s1', 's2'], answers: [], currentIndex: -1, mode: 'quiz' })).toBe(false);
  });

  it('geçersiz mode reddedilir', () => {
    expect(
      isValidCompact({ questionIds: ['s1', 's2'], answers: [], currentIndex: 0, mode: 'simulation' as never }),
    ).toBe(false);
  });
});

describe('isValidLegacy — eski format değişmezleri', () => {
  it('devam eden legacy session geçerli', () => {
    expect(isValidLegacy(session(2, 2))).toBe(true);
  });

  it('tamamlanmış legacy session geçersiz', () => {
    expect(isValidLegacy(session(4, 5))).toBe(false);
  });
});
