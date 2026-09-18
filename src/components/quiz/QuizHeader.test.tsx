import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import type { Question } from '../../data';
import { themeColors } from '../../theme';
import { QuizHeader } from './QuizHeader';

const question: Question = {
  id: 'question-1',
  lesson: 'Fizyoloji',
  unit: 'Dolaşım',
  question: 'Örnek soru',
  options: { A: 'A', B: 'B', C: 'C', D: 'D', E: 'E' },
  correctAnswer: 'A',
  explanation: 'Örnek açıklama',
};

describe('QuizHeader', () => {
  it.each(['quiz', 'exam'] as const)('%s modunda eylemleri BİTİR, SİL ve menü sırasıyla gösterir', (mode) => {
    const markup = renderToStaticMarkup(
      <QuizHeader
        currentIndex={0}
        total={1}
        isAnswered={false}
        mode={mode}
        unit={question.unit}
        remainingSeconds={0}
        difficulty={null}
        question={question}
        questions={[question]}
        answers={[]}
        onFinishEarly={vi.fn()}
        onEditQuestion={vi.fn()}
        onReportQuestion={vi.fn()}
        onDeleteQuestion={vi.fn()}
        theme={themeColors.dark}
      />,
    );

    const finishIndex = markup.indexOf('BİTİR');
    const deleteIndex = markup.indexOf('aria-label="Soruyu sil"');
    const menuIndex = markup.indexOf('aria-label="Soru işlemleri menüsü"');

    expect(finishIndex).toBeGreaterThan(-1);
    expect(deleteIndex).toBeGreaterThan(finishIndex);
    expect(menuIndex).toBeGreaterThan(deleteIndex);
  });
});
