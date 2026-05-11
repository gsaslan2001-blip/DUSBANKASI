import { useState, useEffect, useCallback, useRef } from 'react';
import { loadSessionFromCloud, deleteSessionFromCloud, saveSessionToCloud } from '../lib/supabase';
import { getDeviceId } from '../lib/stats';
import type { ActiveSessionInfo } from '../types/app';

export type UseResumableSessionResult = {
  resumeSessionData: ActiveSessionInfo | null;
  isSessionLoading: boolean;
  clearResumableSession: () => Promise<void>;
  saveResumableSession: (session: ActiveSessionInfo) => Promise<void>;
};

function isValidSession(session: unknown): session is ActiveSessionInfo {
  if (!session || typeof session !== 'object') return false;
  const s = session as Partial<ActiveSessionInfo>;

  if (
    !Array.isArray(s.questions) ||
    !Array.isArray(s.answers) ||
    typeof s.currentIndex !== 'number' ||
    (s.mode !== 'quiz' && s.mode !== 'exam')
  ) {
    console.warn('[useResumableSession] Session tip doğrulaması başarısız.');
    return false;
  }

  if (s.questions.length === 0) {
    console.warn('[useResumableSession] Session geçersiz: sorular boş.');
    return false;
  }

  if (s.currentIndex < 0 || s.currentIndex >= s.questions.length) {
    console.warn(`[useResumableSession] Session geçersiz: currentIndex=${s.currentIndex} sınır dışı.`);
    return false;
  }

  const firstQ = s.questions[0] as Partial<{ id: unknown; question: unknown; options: unknown; correctAnswer: unknown }>;
  if (!firstQ.id || !firstQ.question || !firstQ.options || !firstQ.correctAnswer) {
    console.warn('[useResumableSession] Session geçersiz: ilk soru eksik alan içeriyor.');
    return false;
  }

  for (const ans of s.answers) {
    const a = ans as Partial<{ question: unknown; state: unknown }>;
    if (!a.question || !a.state) {
      console.warn('[useResumableSession] Session geçersiz: cevap kaydı eksik alan içeriyor.');
      return false;
    }
  }

  return true;
}

/**
 * Cloud active_sessions yönetimi — user-centric.
 * Giriş yapılmışsa user_id ile, yoksa device_id ile çalışır.
 * Kullanıcı giriş yaptığında session otomatik olarak yeniden yüklenir.
 */
export function useResumableSession(userId?: string | null): UseResumableSessionResult {
  const [resumeSessionData, setResumeSessionData] = useState<ActiveSessionInfo | null>(null);
  const [isSessionLoading, setIsSessionLoading] = useState(false);
  // userId değişiminde yeniden yüklemeyi tetiklemek için ref
  const lastUserIdRef = useRef<string | null | undefined>(undefined);

  const loadResumableSession = useCallback(async (uid?: string | null) => {
    setIsSessionLoading(true);
    try {
      const deviceId = getDeviceId();
      // Önce user bazlı ara, yoksa device bazlı
      let cloud = uid ? await loadSessionFromCloud(deviceId, uid) : null;
      if (!cloud) cloud = await loadSessionFromCloud(deviceId);

      if (cloud) {
        const session = cloud as ActiveSessionInfo;
        if (!isValidSession(session) || session.answers.length >= session.questions.length) {
          await deleteSessionFromCloud(deviceId, uid ?? undefined);
          setResumeSessionData(null);
        } else {
          setResumeSessionData(session);
        }
      } else {
        setResumeSessionData(null);
      }
    } catch (err) {
      console.warn('Oturum yüklenemedi:', err);
    } finally {
      setIsSessionLoading(false);
    }
  }, []);

  // userId değişince (giriş/çıkış) session'ı yeniden yükle
  useEffect(() => {
    if (lastUserIdRef.current === userId) return;
    lastUserIdRef.current = userId;
    loadResumableSession(userId);
  }, [userId, loadResumableSession]);

  const clearResumableSession = useCallback(async () => {
    try {
      await deleteSessionFromCloud(getDeviceId(), userId ?? undefined);
    } catch {
      // sessiz geç
    }
    setResumeSessionData(null);
  }, [userId]);

  const saveResumableSession = useCallback(async (session: ActiveSessionInfo) => {
    if (session.answers.length >= session.questions.length) {
      setResumeSessionData(null);
      try {
        await deleteSessionFromCloud(getDeviceId(), userId ?? undefined);
      } catch {
        // sessiz
      }
    } else {
      setResumeSessionData(session);
      try {
        await saveSessionToCloud(getDeviceId(), session, userId ?? undefined);
      } catch {
        // sessiz
      }
    }
  }, [userId]);

  return {
    resumeSessionData,
    isSessionLoading,
    clearResumableSession,
    saveResumableSession,
  };
}
