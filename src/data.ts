/**
 * Hafif iskelet — açılışta yüklenen soru özeti.
 * Soru bankası sayaçları, ders kartları, adaptif motor ve istatistik ekranları için yeterli.
 * Tam soru metni (question, options, explanation) yalnızca sınav anında fetchQuestionsByIds() ile gelir.
 */
export type QuestionSkeleton = {
  id: string;
  lesson: string;
  unit: string;
  quality_flag?: string | null;
  is_favorite?: boolean;
};


export type Question = {
  id: string;

  lesson: string;
  unit: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
  is_favorite?: boolean;
  quality_flag?: string | null;
  imageUrl?: string | null;
};
