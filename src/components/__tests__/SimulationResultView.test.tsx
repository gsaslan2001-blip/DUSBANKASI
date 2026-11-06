import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import type { Question } from '../../data';
import { themeColors } from '../../theme';
import SimulationResultView, { type AnswerDetail } from '../SimulationResultView';

function createMockDetail(
  id: string,
  lesson: string,
  unit: string,
  state: 'correct' | 'incorrect' | 'blank',
  userKey: string | null = 'A',
  correctKey: 'A' | 'B' | 'C' | 'D' | 'E' = 'A'
): AnswerDetail {
  const q: Question = {
    id,
    lesson,
    unit,
    question: `Soru metni ${id}`,
    options: { A: 'Şık A', B: 'Şık B', C: 'Şık C', D: 'Şık D', E: 'Şık E' },
    correctAnswer: correctKey,
    explanation: `Açıklama ${id}`,
    is_favorite: false,
  };
  return {
    question: q,
    state,
    selectedOptionKey: userKey,
    timeSpent: 30,
  };
}

describe('SimulationResultView', () => {
  it('120 soruluk sınav sonucunu doğru/yanlış/boş kutucuklarıyla ve DUS netiyle render eder', () => {
    const details: AnswerDetail[] = [];

    // 80 doğru, 20 yanlış, 20 boş = 120 soru
    for (let i = 1; i <= 80; i++) {
      details.push(createMockDetail(`q-${i}`, 'Anatomi', 'Kemikler', 'correct', 'A', 'A'));
    }
    for (let i = 81; i <= 100; i++) {
      details.push(createMockDetail(`q-${i}`, 'Biyokimya', 'Proteinler', 'incorrect', 'B', 'A'));
    }
    for (let i = 101; i <= 120; i++) {
      details.push(createMockDetail(`q-${i}`, 'Protez', 'Hareketli Protez', 'blank', null, 'A'));
    }

    // Net: 80 - 20/4 = 75.00 Net
    const markup = renderToStaticMarkup(
      <SimulationResultView
        details={details}
        totalSeconds={9000}
        usedSeconds={7200}
        onRestart={vi.fn()}
        onRetryIncorrect={vi.fn()}
        onToggleFavorite={vi.fn()}
        theme={themeColors.dark}
      />
    );

    // Net puan ve dağılım
    expect(markup).toContain('75.00');
    expect(markup).toContain('Doğru (Yeşil)');
    expect(markup).toContain('Yanlış (Kırmızı)');
    expect(markup).toContain('Boş (Sarı)');

    // 120 Soru Analiz Tablosu başlığı ve bölümler
    expect(markup).toContain('120 Soru Analiz Tablosu');
    expect(markup).toContain('Temel Bilimler (1 - 40)');
    expect(markup).toContain('Klinik Bilimler (41 - 120)');

    // 5 Denemelik Adaptif Dağıtım bilgisi
    expect(markup).toContain('5 Denemelik Adaptif Dağıtım');
  });

  it('Fizyoloji ve Histoloji branş analizinde kesinlikle birleşik olarak değerlendirilir', () => {
    const details: AnswerDetail[] = [
      createMockDetail('h1', 'Histoloji', 'Dokular', 'correct'),
      createMockDetail('h2', 'Histoloji', 'Dokular', 'incorrect', 'B', 'A'),
      createMockDetail('f1', 'Fizyoloji', 'Dolaşım', 'correct'),
      createMockDetail('f2', 'Fizyoloji', 'Solunum', 'correct'),
    ];

    const markup = renderToStaticMarkup(
      <SimulationResultView
        details={details}
        totalSeconds={9000}
        usedSeconds={3000}
        onRestart={vi.fn()}
        onToggleFavorite={vi.fn()}
        initialTab="branch"
        theme={themeColors.dark}
      />
    );

    // Branş analizi sekmesinde Fizyoloji - Histoloji tek satır olarak görülür
    expect(markup).toContain('Fizyoloji - Histoloji');
  });
});
