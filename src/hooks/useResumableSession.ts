import { useState, useEffect, useCallback, useRef } from 'react';
import { loadSessionFromCloud, deleteSessionFromCloud, saveSessionToCloud, supabase } from '../lib/supabase';
import { getDeviceId } from '../lib/stats';
import type { ActiveSessionInfo, CompactSessionInfo } from '../types/app';
import type { Question } from '../data';

export type UseResumableSessionResult = {
  resumeSessionData: ActiveSessionInfo | null;
  isSessionLoading: boolean;
  clearResumableSession: () => Promise<void>;
  saveResumableSession: (session: ActiveSessionInfo) => Promise<void>;
  sessionSaveError: string | null;
};

function toCompact(session: ActiveSessionInfo): CompactSessionInfo {
  return {
    questionIds: session.questions.map(q => q.id),
    answers: session.answers.map(a => ({
      questionId: a.question.id,
      state: a.state,
      selectedOptionKey: a.selectedOptionKey,
      timeSpent: a.timeSpent,
    })),
    currentIndex: session.currentIndex,
    mode: session.mode,
    dailyExamId: session.dailyExamId,
  };
}

function fromCompact(compact: CompactSessionInfo, questionPool: Question[]): ActiveSessionInfo | null {
  const qMap = new Map(questionPool.map(q => [q.id, q]));
  const questions: Question[] = [];
  for (const id of compact.questionIds) {
    const q = qMap.get(id);
    if (!q) continue;
    questions.push(q);
  }
  if (questions.length === 0) return null;

  const answers = compact.answers
    .map(a => {
      const q = qMap.get(a.questionId);
      if (!q) return null;
      return { question: q, state: a.state, selectedOptionKey: a.selectedOptionKey, timeSpent: a.timeSpent };
    })
    .filter((a): a is NonNullable<typeof a> => a !== null);

  const idx = Math.min(compact.currentIndex, questions.length - 1);

  return {
    questions,
    answers,
    currentIndex: Math.max(0, idx),
    mode: compact.mode,
    dailyExamId: compact.dailyExamId,
  };
}

function isLegacySession(data: unknown): data is ActiveSessionInfo {
  return !!data && typeof data === 'object' && Array.isArray((data as ActiveSessionInfo).questions);
}

function isCompactSession(data: unknown): data is CompactSessionInfo {
  return !!data && typeof data === 'object' && Array.isArray((data as CompactSessionInfo).questionIds);
}

function isValidCompact(s: CompactSessionInfo): boolean {
  if (!Array.isArray(s.questionIds) || s.questionIds.length === 0) return false;
  if (!Array.isArray(s.answers)) return false;
  if (typeof s.currentIndex !== 'number') return false;
  if (s.mode !== 'quiz' && s.mode !== 'exam') return false;
  // Tüm sorular bitmişse session geçersiz (temizlenmeli)
  if (s.answers.length >= s.questionIds.length) return false;
  // currentIndex sınır içinde olmalı
  if (s.currentIndex < 0 || s.currentIndex >= s.questionIds.length) return false;
  return true;
}

function isValidLegacy(s: ActiveSessionInfo): boolean {
  if (!Array.isArray(s.questions) || s.questions.length === 0) return false;
  if (!Array.isArray(s.answers)) return false;
  if (typeof s.currentIndex !== 'number') return false;
  if (s.mode !== 'quiz' && s.mode !== 'exam') return false;
  if (s.answers.length >= s.questions.length) return false;
  if (s.currentIndex < 0 || s.currentIndex >= s.questions.length) return false;
  return true;
}

export function useResumableSession(userId?: string | null, questionPool?: Question[]): UseResumableSessionResult {
  const [resumeSessionData, setResumeSessionData] = useState<ActiveSessionInfo | null>(null);
  const [isSessionLoading, setIsSessionLoading] = useState(false);
  const [sessionSaveError, setSessionSaveError] = useState<string | null>(null);
  const loadedRef = useRef(false);
  const lastUserIdRef = useRef<string | null | undefined>(undefined);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingSessionRef = useRef<ActiveSessionInfo | null>(null);
  const accessTokenRef = useRef<string | null>(null);

  const loadResumableSession = useCallback(async (uid?: string | null, pool?: Question[]) => {
    setIsSessionLoading(true);
    try {
      const deviceId = getDeviceId();
      // loadSessionFromCloud artık: uid varsa SADECE user_id sorgular (cross-device),
      // yoksa device_id sorgular. İkili fallback kaldırıldı.
      const cloud = await loadSessionFromCloud(deviceId, uid ?? undefined);

      if (!cloud) {
        setResumeSessionData(null);
        return;
      }

      if (isCompactSession(cloud)) {
        if (!isValidCompact(cloud)) {
          await deleteSessionFromCloud(deviceId, uid ?? undefined).catch(() => {});
          setResumeSessionData(null);
          return;
        }
        const available = pool ?? [];
        if (available.length === 0) {
          setResumeSessionData(null);
          return;
        }
        const session = fromCompact(cloud, available);
        if (!session || session.answers.length >= session.questions.length) {
          await deleteSessionFromCloud(deviceId, uid ?? undefined).catch(() => {});
          setResumeSessionData(null);
        } else {
          setResumeSessionData(session);
        }
      } else if (isLegacySession(cloud)) {
        if (!isValidLegacy(cloud)) {
          await deleteSessionFromCloud(deviceId, uid ?? undefined).catch(() => {});
          setResumeSessionData(null);
        } else {
          setResumeSessionData(cloud);
        }
      } else {
        setResumeSessionData(null);
      }
    } catch (err) {
      console.warn('[useResumableSession] Yükleme hatası:', err);
    } finally {
      setIsSessionLoading(false);
    }
  }, []);

  useEffect(() => {
    const poolReady = (questionPool?.length ?? 0) > 0;
    const userChanged = lastUserIdRef.current !== userId;

    // Pool henüz yüklenmemişse bekle — fromCompact boş pool ile null döner ve
    // gerçek session yüklenmemiş gibi görünür.
    if (!poolReady) return;

    if (loadedRef.current && !userChanged) return;

    loadedRef.current = true;
    lastUserIdRef.current = userId;
    loadResumableSession(userId, questionPool);
  }, [userId, questionPool, loadResumableSession]);

  const flushPendingSession = useCallback(async () => {
    const session = pendingSessionRef.current;
    if (!session) return;
    pendingSessionRef.current = null;

    try {
      const compact = toCompact(session);
      await saveSessionToCloud(getDeviceId(), compact, userId ?? undefined);
      setSessionSaveError(null);
    } catch (err) {
      // PostgrestError instanceof Error değil — düzgün serialize et
      let msg: string;
      if (err instanceof Error) {
        msg = err.message;
      } else if (err && typeof err === 'object') {
        const e = err as Record<string, unknown>;
        msg = (typeof e.message === 'string' ? e.message : null)
          ?? (typeof e.details === 'string' ? e.details : null)
          ?? JSON.stringify(e);
      } else {
        msg = String(err);
      }
      console.error('[useResumableSession] Session kaydetme hatası:', msg);
      setSessionSaveError(msg);
    }
  }, [userId]);

  const clearResumableSession = useCallback(async () => {
    pendingSessionRef.current = null;
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
    }
    try {
      await deleteSessionFromCloud(getDeviceId(), userId ?? undefined);
    } catch {
      // ignore
    }
    setResumeSessionData(null);
    setSessionSaveError(null);
  }, [userId]);

  const saveResumableSession = useCallback(async (session: ActiveSessionInfo) => {
    if (session.answers.length >= session.questions.length) {
      setResumeSessionData(null);
      pendingSessionRef.current = null;
      try {
        await deleteSessionFromCloud(getDeviceId(), userId ?? undefined);
      } catch {
        // ignore
      }
      return;
    }

    setResumeSessionData(session);
    pendingSessionRef.current = session;

    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
    }
    await flushPendingSession();
  }, [flushPendingSession, userId]);

  useEffect(() => {
    supabase.auth.getSession()
      .then(({ data }) => {
        accessTokenRef.current = data.session?.access_token ?? null;
      })
      .catch(() => {
        accessTokenRef.current = null;
      });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      accessTokenRef.current = session?.access_token ?? null;
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (pendingSessionRef.current) {
        const compact = toCompact(pendingSessionRef.current);
        const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
        const bearer = accessTokenRef.current ?? anonKey;
        const baseUrl = import.meta.env.VITE_SUPABASE_URL as string;
        const now = new Date().toISOString();

        if (userId) {
          // Authenticated: PATCH ile user_id üzerinden UPDATE (device_id dokunulmaz)
          const url = `${baseUrl}/rest/v1/active_sessions?user_id=eq.${userId}`;
          fetch(url, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'apikey': anonKey,
              'Authorization': `Bearer ${bearer}`,
              'Prefer': 'return=minimal',
            },
            body: JSON.stringify({ session_data: compact, updated_at: now }),
            keepalive: true,
          }).catch(() => {});
        } else {
          // Anonim: POST+upsert device_id üzerinden (PK safe)
          const url = `${baseUrl}/rest/v1/active_sessions?on_conflict=device_id`;
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'apikey': anonKey,
              'Authorization': `Bearer ${bearer}`,
              'Prefer': 'resolution=merge-duplicates',
            },
            body: JSON.stringify({
              device_id: getDeviceId(),
              user_id: null,
              session_data: compact,
              updated_at: now,
            }),
            keepalive: true,
          }).catch(() => {});
        }
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [userId]);

  return {
    resumeSessionData,
    isSessionLoading,
    clearResumableSession,
    saveResumableSession,
    sessionSaveError,
  };
}
