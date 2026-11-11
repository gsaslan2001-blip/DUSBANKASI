import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { supabase } from '../../lib/supabase';
import { getTodayString } from './domain/triage';
import { summarizeTasks } from './domain/questionTasks';
import { rollForwardOverdueRepairs } from './domain/state';
import type { TriajSnapshot } from './persistence/triajRepository';
import type { TriajState, TriajTaskSummary } from './types';

type Status = 'loading' | 'ready' | 'saving' | 'error' | 'conflict';
type Change = (state: TriajState) => TriajState;

interface TriajContextValue {
  state: TriajState | null;
  tasks: TriajTaskSummary[];
  status: Status;
  error: string | null;
  summaryError: string | null;
  today: string;
  refresh: () => Promise<void>;
  refreshSummary: () => Promise<void>;
  prepareSummary: (date: string, preparations: Record<string, string[]>) => Promise<void>;
  update: (change: Change, retryOnConflict?: boolean) => Promise<TriajState>;
}

const TriajContext = createContext<TriajContextValue | null>(null);

export function useTriaj(): TriajContextValue {
  const context = useContext(TriajContext);
  if (!context) throw new Error('TRİAJ sağlayıcısı eksik.');
  return context;
}

function message(error: unknown): string {
  if (error instanceof Error) {
    if (error.message.includes('triaj_state') || error.message.includes('schema cache')) {
      return 'TRİAJ veritabanı kurulumu (migration) bekleniyor. Supabase SQL Editor üzerinden deploy_triaj.sql betiği çalıştırılmalıdır.';
    }
    return error.message;
  }
  return 'TRİAJ planına erişilemedi.';
}

export function TriajProvider({ userId, children }: { userId?: string; children: ReactNode }) {
  const [snapshot, setSnapshot] = useState<TriajSnapshot | null>(null);
  const [summary, setSummary] = useState<TriajTaskSummary[]>([]);
  const [today, setToday] = useState(getTodayString);
  const [status, setStatus] = useState<Status>('loading');
  const [error, setError] = useState<string | null>(null);
  const [summaryError, setSummaryError] = useState<string | null>(null);
  const latest = useRef<TriajSnapshot | null>(null);
  const queue = useRef<Promise<unknown>>(Promise.resolve());
  const active = useRef(true);
  const summaryRequest = useRef(0);

  useEffect(() => {
    active.current = true;
    return () => { active.current = false; summaryRequest.current++; };
  }, []);

  const accept = useCallback((value: TriajSnapshot) => {
    if (!active.current) return;
    // Vadesi geçmiş Cumartesi onarımlarını her okumada bir kez ilerlet;
    // aksi hâlde `currentTaskDate` hesabı ile kalıcı `dueDate` ayrışır.
    const normalized = { ...value, state: rollForwardOverdueRepairs(value.state) };
    latest.current = normalized;
    setSnapshot(normalized);
    setSummary(summarizeTasks(normalized.state));
    setSummaryError(null);
  }, []);

  const refreshSummary = useCallback(async () => {
    if (!userId) return;
    const request = ++summaryRequest.current;
    const date = getTodayString();
    setToday(date);
    try {
      const { data, error } = await supabase.rpc('get_triaj_tasks', { p_today: date });
      if (error) throw new Error(error.message);
      if (active.current && request === summaryRequest.current) {
        setSummary(Array.isArray(data) ? data : []);
        setSummaryError(null);
      }
    } catch (error) {
      if (active.current && request === summaryRequest.current) setSummaryError(message(error));
    }
  }, [userId]);

  const prepareSummary = useCallback((date: string, preparations: Record<string, string[]>) => {
    if (!userId) return Promise.resolve();
    const operation = queue.current.then(async () => {
      if (!active.current) return;
      const request = ++summaryRequest.current;
      const { data, error } = await supabase.rpc('prepare_triaj_question_sets', { p_today: date, p_preparations: preparations });
      if (active.current && request === summaryRequest.current) {
        if (error) setSummaryError(error.message);
        else {
          setSummary(Array.isArray(data) ? data : []);
          setSummaryError(null);
          latest.current = null;
        }
      }
    });
    queue.current = operation.catch(() => {});
    return operation;
  }, [userId]);

  useEffect(() => {
    void refreshSummary();
    window.addEventListener('focus', refreshSummary);
    const timer = window.setInterval(() => {
      if (getTodayString() !== today) void refreshSummary();
    }, 1_000);
    return () => {
      window.removeEventListener('focus', refreshSummary);
      window.clearInterval(timer);
    };
  }, [refreshSummary, today]);

  const refresh = useCallback(() => {
    if (!userId) return Promise.resolve();
    const operation = queue.current.then(async () => {
      if (!active.current) return;
      setStatus('loading');
      setError(null);
      try {
        const { readTriajState } = await import('./persistence/triajRepository');
        accept(await readTriajState(userId));
        if (active.current) setStatus('ready');
      } catch (error) {
        if (active.current) {
          setError(message(error));
          setStatus('error');
        }
      }
    });
    queue.current = operation.catch(() => {});
    return operation;
  }, [accept, userId]);

  const update = useCallback((change: Change, retryOnConflict = false) => {
    const operation = queue.current.then(async () => {
      if (!userId || !active.current) throw new Error('TRİAJ için oturum açın.');
      setStatus('saving');
      setError(null);
      const repository = await import('./persistence/triajRepository');
      try {
        let current = latest.current ?? await repository.readTriajState(userId);
        for (let attempt = 0; ; attempt++) {
          if (!active.current) throw new Error('Oturum değişti.');
          const next = change(current.state);
          try {
            const saved = next === current.state ? current
              : await repository.writeTriajState(userId, current.revision, next);
            summaryRequest.current++;
            accept(saved);
            if (active.current) setStatus('ready');
            return saved.state;
          } catch (error) {
            if (!(error instanceof repository.TriajConflict)) throw error;
            current = await repository.readTriajState(userId);
            accept(current);
            if (!retryOnConflict || attempt >= 2) throw error;
          }
        }
      } catch (error) {
        if (active.current) {
          setError(message(error));
          // TriajVersionMismatch yeniden denemeyle düzelmez; TriajConflict değildir,
          // bu yüzden döngü onu yukarı fırlatır ve burada 'error' durumuna düşer.
          setStatus(error instanceof repository.TriajConflict ? 'conflict' : 'error');
        }
        throw error;
      }
    });
    queue.current = operation.catch(() => {});
    return operation;
  }, [accept, userId]);

  return <TriajContext.Provider value={{
    state: snapshot?.state ?? null, tasks: summary, today, status, error, summaryError, refresh, refreshSummary, prepareSummary, update,
  }}>{children}</TriajContext.Provider>;
}
