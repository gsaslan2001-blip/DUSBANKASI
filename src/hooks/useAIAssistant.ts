import { useState, useRef, useEffect, useCallback, useReducer } from 'react';
import type { Question } from '../data';
import { isAIConfigured, explainWithAIStream } from '../lib/ai';

export type UseAIAssistantResult = {
  aiAnswer: string | null;
  aiLoading: boolean;
  aiError: string | null;
  retryCount: number;
  showPanel: boolean;
  setShowPanel: (v: boolean) => void;
  requestAI: () => Promise<void>;
  retryAI: () => Promise<void>;
};

const MAX_RETRY = 3;

/** AI streaming + PDF fetch + AbortController orchestration for QuizView. */
export function useAIAssistant(question: Question | undefined): UseAIAssistantResult {
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  // AUDIT: R1 — retry sayacı
  const [retryCount, incRetry] = useReducer((n: number) => n + 1, 0);

  // PDF fetch + streaming iptali için ref
  const aiAbortRef = useRef<AbortController | null>(null);

  const requestAI = useCallback(async () => {
    if (!question) return;

    // Panel zaten açıksa ve cevap varsa sadece göster
    // AUDIT: R1 — aiError durumunda erken return kaldırıldı, retry mümkün olsun
    if (aiAnswer || aiLoading) {
      setShowPanel(true);
      return;
    }

    if (!isAIConfigured()) {
      setAiError('Gemini API anahtarı ayarlanmamış.');
      setShowPanel(true);
      return;
    }

    // Önceki varsa iptal et, yenisini oluştur
    aiAbortRef.current?.abort();
    const controller = new AbortController();
    aiAbortRef.current = controller;

    setAiLoading(true);
    setAiError(null);
    setAiAnswer(null);
    setShowPanel(true);

    try {
      // PDF artık sunucuda Pinecone RAG ile çözülüyor — istemci sadece metadata gönderir.
      await explainWithAIStream(
        question,
        (accumulated) => {
          if (!controller.signal.aborted) setAiAnswer(accumulated);
        },
        controller.signal
      );
    } catch (err: unknown) {
      if ((err as { name?: string } | null)?.name === 'AbortError') return;
      const msg = (err as { message?: string } | null)?.message ?? 'AI yanıt veremedi.';
      setAiError(msg);
    } finally {
      if (!controller.signal.aborted) setAiLoading(false);
    }
  }, [question, aiAnswer, aiLoading]);

  // AUDIT: R1 — retry: aiError temizle, sayacı artır, tekrar çağır
  const retryAI = useCallback(async () => {
    if (retryCount >= MAX_RETRY) return;
    setAiError(null);
    setAiAnswer(null);
    incRetry();
    await requestAI();
  }, [retryCount, requestAI]);

  // Soru değişiminde (id veya referans değişimi) mevcut isteği iptal et
  const questionId = question?.id;
  useEffect(() => {
    aiAbortRef.current?.abort();
    aiAbortRef.current = null;
    setShowPanel(false);
    setAiAnswer(null);
    setAiError(null);
    setAiLoading(false);
  }, [questionId]);

  return { aiAnswer, aiLoading, aiError, retryCount, showPanel, setShowPanel, requestAI, retryAI };
}
