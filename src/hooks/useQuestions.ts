import { useState, useCallback, useRef } from 'react';
import {
  fetchSkeletons,
  fetchHighYieldQuestions,
  fetchQuestionsByIds,
  toggleFavoriteInCloud,
  updateQuestion as updateQuestionRemote,
  flagQuestion as flagQuestionRemote,
  rowToQuestion,
  type SkeletonRow,
} from '../lib/supabase';
import { syncStatsDown } from '../lib/stats';
import { enqueuePendingDelete, getPendingDeletes } from '../lib/pendingDeletes';
import { getQuestionsFromContentCache, saveQuestionsToContentCache } from '../lib/idb';
import type { Question, QuestionSkeleton } from '../data';

export type LoadingState = 'idle' | 'loading' | 'loaded' | 'error';

export type UseQuestionsResult = {
  /** Hafif iskelet listesi — id/lesson/unit/quality_flag/is_favorite. Adaptif motor ve UI sayaçları için yeterli. */
  skeletons: QuestionSkeleton[];
  setSkeletons: React.Dispatch<React.SetStateAction<QuestionSkeleton[]>>;
  /**
   * @deprecated Geriye uyumluluk — skeletons ile aynı diziyi döner.
   * Yeni kod doğrudan `skeletons` prop'unu kullanmalı.
   */
  questions: QuestionSkeleton[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionSkeleton[]>>;
  /** @deprecated `loadStatus === 'loading'` kullan */
  loading: boolean;
  loadStatus: LoadingState;
  loadError: string;
  reload: (forceSync?: boolean, flaggedOnly?: boolean) => Promise<void>;
  /** High-yield soruları on-demand çeker, skeleton state'e (is_favorite/quality_flag) merge eder. */
  loadHighYield: () => Promise<void>;
  updateQuestion: (edited: Question) => Promise<void>;
  deleteQuestion: (id: string) => Promise<void>;
  toggleFavorite: (id: string, newStatus: boolean) => Promise<void>;
  flagQuestion: (id: string, reason: string) => Promise<void>;
};

/** Skeleton satırını QuestionSkeleton tipine dönüştürür. */
function rowToSkeleton(row: SkeletonRow): QuestionSkeleton {
  return {
    id: row.id,
    lesson: row.lesson,
    unit: row.unit,
    quality_flag: row.quality_flag ?? null,
    is_favorite: row.is_favorite ?? false,
  };
}

/**
 * Questions hook — skelet mimarisi (v4.31)
 *
 * Açılışta yalnızca iskelet (id/lesson/unit/quality_flag) yüklenir.
 * Tam soru metni (question, options, explanation) sınav başlangıcında
 * fetchQuestionsByIds() ile on-demand çekilir.
 *
 * Geriye uyumluluk: `questions` prop'u `skeletons` ile aynı diziyi döner.
 */
export function useQuestions(): UseQuestionsResult {
  const [skeletons, setSkeletons] = useState<QuestionSkeleton[]>([]);
  const skeletonsRef = useRef<QuestionSkeleton[]>([]);
  const [loadStatus, setLoadStatus] = useState<LoadingState>('idle');
  const [loadError, setLoadError] = useState('');
  const isFirstLoad = useRef(true);

  const reload = useCallback(async (forceSync = false, _flaggedOnly = false) => {
    setLoadStatus('loading');
    setLoadError('');
    try {
      // Açılışta sadece iskelet (~250 KB) çekilir
      const rows = await fetchSkeletons();
      // Bekleyen (henüz DB'den silinmemiş) soruları gizle — flush edilene kadar
      // tekrar belirmesinler.
      const pendingDel = new Set(getPendingDeletes());
      const mapped = rows.filter(r => !pendingDel.has(r.id)).map(rowToSkeleton);
      skeletonsRef.current = mapped;
      setSkeletons(mapped);
      setLoadStatus('loaded');
      if (isFirstLoad.current || forceSync) {
        syncStatsDown().catch(() => { });
        isFirstLoad.current = false;
      }
    } catch (e: unknown) {
      const raw = e instanceof Error
        ? e.message
        : (e as { message?: string })?.message ?? JSON.stringify(e);
      const isTimeout = /timeout|statement timeout|57014/i.test(raw);
      const msg = isTimeout
        ? 'Veritabanı zaman aşımı — lütfen sayfayı yenileyin.'
        : raw;
      setLoadError(msg);
      setLoadStatus('error');
    }
  }, []);

  const loadHighYield = useCallback(async () => {
    // Cache-first: skeleton'lardan HY id'lerini al, contentCache'e bak, eksikleri ağdan çek
    const hyIds = skeletonsRef.current.filter(s => s.quality_flag === 'high_yield').map(s => s.id);
    if (hyIds.length > 0) {
      await fetchQuestionsByIds(hyIds); // cache-hit'ler ağa gitmez
    } else {
      // İlk kurulum: skeleton henüz yüklenmemiş, ağdan tam çekim yap
      const rows = await fetchHighYieldQuestions();
      const newSkeletons = rows.map(r => rowToSkeleton({
        id: r.id, lesson: r.lesson, unit: r.unit,
        quality_flag: r.quality_flag ?? 'high_yield',
        is_favorite: r.is_favorite, updated_at: r.updated_at,
      }));
      skeletonsRef.current = [...skeletonsRef.current, ...newSkeletons];
      setSkeletons(prev => {
        const existingIds = new Set(prev.map(s => s.id));
        const toAdd = newSkeletons.filter(s => !existingIds.has(s.id));
        return toAdd.length > 0 ? [...prev, ...toAdd] : prev;
      });
    }
  }, []);

  const updateQuestion = useCallback(async (edited: Question) => {
    // Optimistic UI — skeleton'daki is_favorite ve quality_flag güncellenir
    setSkeletons(prev => prev.map(s => s.id === edited.id
      ? { ...s, is_favorite: edited.is_favorite, quality_flag: edited.quality_flag }
      : s
    ));
    try {
      await updateQuestionRemote(edited.id, {
        question: edited.question,
        option_a: edited.options.A,
        option_b: edited.options.B,
        option_c: edited.options.C,
        option_d: edited.options.D,
        option_e: edited.options.E,
        correct_answer: edited.correctAnswer,
        explanation: edited.explanation,
        image_url: edited.imageUrl ?? null,
      });
      // On-demand içerik cache'i aksi halde eski açıklamayı süresiz döndürür.
      // DB yazımından sonra mevcut ham satırı aynı biçimde güncelle.
      try {
        const [cached] = await getQuestionsFromContentCache([edited.id]);
        if (cached) {
          await saveQuestionsToContentCache([{
            ...cached,
            lesson: edited.lesson,
            unit: edited.unit,
            question: edited.question,
            option_a: edited.options.A,
            option_b: edited.options.B,
            option_c: edited.options.C,
            option_d: edited.options.D,
            option_e: edited.options.E,
            correct_answer: edited.correctAnswer,
            explanation: edited.explanation,
            is_favorite: edited.is_favorite,
            quality_flag: edited.quality_flag,
            image_url: edited.imageUrl ?? null,
          }]);
        }
      } catch (cacheError) {
        console.warn('[useQuestions] Güncellenen soru içerik cache\'ine yazılamadı:', cacheError);
      }
    } catch (error) {
      // Rollback: önceki state'e dön
      setSkeletons(prev => prev.map(s => s.id === edited.id
        ? { ...s, is_favorite: !edited.is_favorite } // basit rollback
        : s
      ));
      throw error;
    }
  }, []);

  const deleteQuestion = useCallback(async (id: string) => {
    // Ertelenmiş silme: kuyruğa al + iskeletten optimistic düş.
    // Gerçek DB silme flushPendingDeletes() ile sync / test bitişi / yeniden
    // bağlanma anında yapılır. Burada AĞA GİDİLMEZ ve reload TETİKLENMEZ —
    // böylece aktif soru-çözme oturumu unmount olup başa dönmez (kaldığı yerde kalır).
    enqueuePendingDelete(id);
    setSkeletons(prev => prev.filter(s => s.id !== id));
  }, []);

  const toggleFavorite = useCallback(async (id: string, newStatus: boolean) => {
    setSkeletons(prev => prev.map(s => s.id === id ? { ...s, is_favorite: newStatus } : s));
    try {
      await toggleFavoriteInCloud(id, newStatus);
    } catch (error) {
      setSkeletons(prev => prev.map(s => s.id === id ? { ...s, is_favorite: !newStatus } : s));
      throw error;
    }
  }, []);

  const flagQuestion = useCallback(async (id: string, reason: string) => {
    setSkeletons(prev => prev.map(s => s.id === id ? { ...s, quality_flag: 'flagged' } : s));
    try {
      await flagQuestionRemote(id, reason);
    } catch (error) {
      setSkeletons(prev => prev.map(s => s.id === id ? { ...s, quality_flag: null } : s));
      throw error;
    }
  }, []);

  return {
    skeletons,
    setSkeletons,
    // Geriye uyumluluk aliasları
    questions: skeletons,
    setQuestions: setSkeletons,
    loading: loadStatus === 'loading',
    loadStatus,
    loadError,
    reload,
    loadHighYield,
    updateQuestion,
    deleteQuestion,
    toggleFavorite,
    flagQuestion,
  };
}

// rowToQuestion geriye uyumluluk için re-export (App.tsx'te import ediliyor)
export { rowToQuestion };
