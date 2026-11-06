import { describe, expect, it } from 'vitest';
import { completeExamAnswers } from '../../hooks/useExamTimer';
import type { Question } from '../../data';

describe('simulation timeout', () => {
  it('fills missing questions by id and preserves exam order', () => {
    const questions: Question[] = ['1', '2', '3'].map(id => ({
      id, lesson: 'Anatomi', unit: 'Ünite', question: id,
      options: { A: '', B: '', C: '', D: '', E: '' },
      correctAnswer: 'A', explanation: '',
    }));
    const result = completeExamAnswers(questions, [
      { question: questions[2], state: 'correct', selectedOptionKey: 'A' },
      { question: questions[0], state: 'incorrect', selectedOptionKey: 'B' },
    ]);
    expect(result.map(a => [a.question.id, a.state])).toEqual([
      ['1', 'incorrect'], ['2', 'blank'], ['3', 'correct'],
    ]);
  });
});
