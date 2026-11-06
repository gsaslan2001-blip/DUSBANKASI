import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import type { Question } from '../../../data';
import { themeColors } from '../../../theme';
import { SimulationExamView } from '../SimulationExamView';
import { DUS_SUBJECT_QUOTAS, buildDusSimulationPool } from '../../../lib/simulationEngine';

function generate120MockQuestions(): Question[] {
  const qs: Question[] = [];
  for (const sq of DUS_SUBJECT_QUOTAS) {
    for (let i = 0; i < 20; i++) {
      qs.push({
        id: `${sq.key}-${i}`,
        lesson: sq.key,
        unit: `${sq.key} 1. Ünite`,
        question: `${sq.key} dersine ait soru ${i + 1}`,
        options: {
          A: 'A seçeneği',
          B: 'B seçeneği',
          C: 'C seçeneği',
          D: 'D seçeneği',
          E: 'E seçeneği',
        },
        correctAnswer: 'A',
        explanation: `${sq.key} detaylı soru açıklaması`,
        is_favorite: false,
      });
    }
  }
  return buildDusSimulationPool(qs, { consumeRetryBatch: false });
}

describe('SimulationExamView', () => {
  it('120 soruluk DUS sınavını Temel 40 ve Klinik 80 kutucuklarıyla render eder', () => {
    const questions = generate120MockQuestions();
    expect(questions.length).toBe(120);

    const markup = renderToStaticMarkup(
      <SimulationExamView
        questions={questions}
        timedSeconds={9000}
        onSimulationComplete={vi.fn()}
        onToggleFavorite={vi.fn()}
        theme={themeColors.dark}
        settings={{ theme: 'dark', fontSize: 'normal', sprintBudget: 100 }}
      />
    );

    // Başlık ve Bölümler
    expect(markup).toContain('DUS Simülasyon');
    expect(markup).toContain('Temel Bilimler (1 - 40)');
    expect(markup).toContain('Klinik Bilimler (41 - 120)');

    // 150 Dk = 02:30:00 zamanlayıcı
    expect(markup).toContain('02:30:00');

    // Soru 1 numarası ve soru kökü
    expect(markup).toContain('Soru 1');

    // Şıklarda asla doğru/yanlış yeşil/kırmızı göstergesi olmamalı
    expect(markup).not.toContain('Doğru Cevap');
    expect(markup).not.toContain('Yanlış Cevap');

    // 120 adet kutucuk başlığı veya butonları mevcut
    expect(markup).toContain('title="Soru 1');
    expect(markup).toContain('title="Soru 40');
    expect(markup).toContain('title="Soru 41');
    expect(markup).toContain('title="Soru 120');

    // Sınavı bitir butonu ve favori butonu
    expect(markup).toContain('Sınavı Bitir');
    expect(markup).toContain('aria-label="Favorilere ekle"');
  });

  it('İlk 40 soru Temel Bilimler ve 41-120 Klinik Bilimler etiketini gösterir', () => {
    const questions = generate120MockQuestions();
    const markupQ1 = renderToStaticMarkup(
      <SimulationExamView
        questions={questions}
        initialSession={{
          questions,
          answers: [],
          currentIndex: 0,
          mode: 'exam',
        }}
        onSimulationComplete={vi.fn()}
        onToggleFavorite={vi.fn()}
        theme={themeColors.dark}
        settings={{ theme: 'dark', fontSize: 'normal', sprintBudget: 100 }}
      />
    );
    expect(markupQ1).toContain('Temel Bilimler (1-40)');

    const markupQ50 = renderToStaticMarkup(
      <SimulationExamView
        questions={questions}
        initialSession={{
          questions,
          answers: [],
          currentIndex: 49,
          mode: 'exam',
        }}
        onSimulationComplete={vi.fn()}
        onToggleFavorite={vi.fn()}
        theme={themeColors.dark}
        settings={{ theme: 'dark', fontSize: 'normal', sprintBudget: 100 }}
      />
    );
    expect(markupQ50).toContain('Klinik Bilimler (41-120)');
  });
});
