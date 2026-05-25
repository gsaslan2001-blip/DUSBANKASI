import { useState, useEffect, useCallback, useRef } from 'react';
import { loadSessionFromCloud, deleteSessionFromCloud, saveSessionToCloud } from '../lib/supabase';
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
  if (s.answers.length >= s.questionIds.length) return false;
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
  const saveCountRef = useRef(0);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingSessionRef = useRef<ActiveSessionInfo | null>(null);

  const loadResumableSession = useCallback(async (uid?: string | null, pool?: Question[]) => {
    setIsSessionLoading(true);
    try {
      const deviceId = getDeviceId();
      let cloud = uid ? await loadSessionFromCloud(deviceId, uid) : null;
      if (!cloud) cloud = await loadSessionFromCloud(deviceId);

      if (!cloud) {
        setResumeSessionData(null);
        return;
      }

      if (isCompactSession(cloud)) {
        if (!isValidCompact(cloud)) {
          await deleteSessionFromCloud(deviceId).catch(() => {});
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
          await deleteSessionFromCloud(deviceId).catch(() => {});
          setResumeSessionData(null);
        } else {
          setResumeSessionData(session);
        }
      } else if (isLegacySession(cloud)) {
        if (!isValidLegacy(cloud)) {
          await deleteSessionFromCloud(deviceId).catch(() => {});
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

    if (loadedRef.current && !userChanged) return;

    loadedRef.current = poolReady;
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
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[useResumableSession] Session kaydetme hatası:', msg);
      setSessionSaveError(msg);
    }
  }, [userId]);

  const clearResumableSession = useCallback(async () => {
    pendingSessionRef.current = null;
    saveCountRef.current = 0; // yeni oturumun ilk kaydı tekrar anında flush'lansın
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
    }
    try {
      await deleteSessionFromCloud(getDeviceId());
    } catch {
      // ignore
    }
    setResumeSessionData(null);
    setSessionSaveError(null);
  }, []);

  const saveResumableSession = useCallback(async (session: ActiveSessionInfo) => {
    if (session.answers.length >= session.questions.length) {
      setResumeSessionData(null);
      pendingSessionRef.current = null;
      saveCountRef.current = 0; // oturum tamamlandı — sayaç bir sonraki oturum için sıfırlanır
      try {
        await deleteSessionFromCloud(getDeviceId());
      } catch {
        // ignore
      }
      return;
    }

    setResumeSessionData(session);
    pendingSessionRef.current = session;
    saveCountRef.current++;

    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }

    // Sayaç monoton ilerler: 1, 6, 11... kaydında anında cloud flush; aradakiler 3sn debounce.
    // Önceki sürüm flush sonrası sayacı 0'a sıfırlıyordu, bu da modulo'yu daima 1 yapıp
    // HER cevapta anında yazma tetikleyerek debounce'u tamamen devre dışı bırakıyordu.
    const shouldFlushNow = saveCountRef.current % 5 === 1;
    if (shouldFlushNow) {
      await flushPendingSession();
    } else {
      saveTimerRef.current = setTimeout(() => {
        saveTimerRef.current = null;
        flushPendingSession();
      }, 3000);
    }
  }, [flushPendingSession]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (pendingSessionRef.current) {
        const compact = toCompact(pendingSessionRef.current);
        const payload = JSON.stringify({
          device_id: getDeviceId(),
          user_id: userId ?? null,
          session_data: compact,
          updated_at: new Date().toISOString(),
        });
        const url = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/active_sessions?on_conflict=device_id`;
        const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': anonKey,
            'Authorization': `Bearer ${anonKey}`,
            'Prefer': 'resolution=merge-duplicates',
          },
          body: payload,
          keepalive: true,
        }).catch(() => {});
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
