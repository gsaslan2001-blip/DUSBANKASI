/**
 * DUS Bankası — Realtime Stats Hook
 * Supabase Realtime ile question_stats tablosunu dinler.
 * Başka bir cihazdan gelen istatistik güncellemeleri anlık olarak callback ile iletilir.
 *
 * Egress Optimizasyonları (v4.32):
 * - Anonim kullanıcılarda subscription açılmaz (çok cihaz sync anlamsız, egress boşa gider).
 * - Sekme arka plana geçince channel kapatılır, öne gelince otomatik yeniden bağlanılır.
 */

import { useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import type { CloudStat } from '../lib/supabase';
import type { RealtimeChannel } from '@supabase/supabase-js';

type StatPayload = {
  device_id: string;
  question_id: string;
  attempts: number;
  corrects: number;
  last_seen: string;
  wrong_choices?: Array<{ selected: string; timestamp: string }>;
  difficulty?: number | null;
};

export type UseRealtimeStatsOptions = {
  /** Giriş yapılmışsa user UUID, yoksa null */
  userId: string | null;
  /** Anonim cihaz ID'si */
  deviceId: string;
  /** Her güncelleme geldiğinde çağrılır */
  onStatUpdate: (questionId: string, stat: CloudStat) => void;
  /** false ise subscription açılmaz (gerektiğinde geçici olarak durdur) */
  enabled?: boolean;
};

function rowToCloudStat(row: StatPayload): CloudStat {
  return {
    attempts: row.attempts,
    corrects: row.corrects,
    lastSeen: row.last_seen,
    wrongChoices: row.wrong_choices ?? [],
    difficulty: row.difficulty ?? undefined,
  };
}

/**
 * Supabase Realtime ile question_stats değişikliklerini anlık dinler.
 * Aynı kullanıcının başka cihazlarından gelen istatistik güncellemelerini yakalar.
 *
 * NOT: Yalnızca giriş yapmış kullanıcılar için aktif olur.
 * Sekme arka planda iken bağlantı otomatik kapatılır (egress tasarrufu).
 */
export function useRealtimeStats({
  userId,
  deviceId,
  onStatUpdate,
  enabled = true,
}: UseRealtimeStatsOptions): void {
  const channelRef = useRef<RealtimeChannel | null>(null);
  // Stale closure önlemi — callback ref'te tutulur.
  const callbackRef = useRef(onStatUpdate);
  useEffect(() => { callbackRef.current = onStatUpdate; }, [onStatUpdate]);

  const retryCountRef = useRef(0);
  const retryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // subscribeRef: asıl bağlantı kurma fonksiyonu. Visibility handler'ı da çağırabilir.
  const subscribeRef = useRef<(() => void) | null>(null);

  // ── Ana subscription effect ─────────────────────────────────────────────────
  useEffect(() => {
    // Anonim kullanıcıda Realtime açma: çok cihaz sync anlamlı değil, egress boşa gider.
    if (!userId) { subscribeRef.current = null; return; }
    if (!enabled) { subscribeRef.current = null; return; }

    // device_id=neq filtresi sunucu tarafında kendi cihazımızdan gelen
    // eventleri keser — client-side ignore yetmiyordu, veri yine gönderiliyordu.
    const filter = `user_id=eq.${userId}&device_id=neq.${deviceId}`;
    const channelName = `stats-${userId}`;

    const handlePayload = (payload: { new: unknown }) => {
      const row = payload.new as StatPayload;
      // Kendi cihazının değişikliklerini yok say (push→realtime loop engelleme)
      if (row.device_id && row.device_id === deviceId) return;
      if (row?.question_id) {
        callbackRef.current(row.question_id, rowToCloudStat(row));
      }
    };

    const attemptRetry = () => {
      if (retryCountRef.current >= 3) {
        console.error(`[Realtime] ${channelName} — 3 retry başarısız, kalıcı hata`);
        return;
      }
      retryCountRef.current += 1;
      const delayMs = Math.pow(2, retryCountRef.current) * 1000;
      console.log(`[Realtime] ${channelName} — ${delayMs / 1000}sn sonra retry (${retryCountRef.current}/3)`);

      retryTimerRef.current = setTimeout(() => {
        if (channelRef.current) {
          supabase.removeChannel(channelRef.current);
          channelRef.current = null;
        }
        subscribeRef.current?.();
      }, delayMs);
    };

    const subscribe = () => {
      if (channelRef.current) return; // zaten bağlı
      // Sekme gizliyse bağlanma — görünür olunca visibility handler tetikler.
      if (document.visibilityState === 'hidden') return;

      channelRef.current = supabase
        .channel(channelName)
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'question_stats', filter }, handlePayload)
        .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'question_stats', filter }, handlePayload)
        .subscribe((status) => {
          if (status === 'SUBSCRIBED') {
            console.log(`[Realtime] Stats kanalı aktif → ${channelName}`);
            retryCountRef.current = 0;
          } else if (status === 'CHANNEL_ERROR') {
            console.warn(`[Realtime] Kanal hatası → ${channelName}`);
            if (channelRef.current) { supabase.removeChannel(channelRef.current); channelRef.current = null; }
            attemptRetry();
          }
        });
    };

    subscribeRef.current = subscribe;
    subscribe();

    return () => {
      subscribeRef.current = null;
      if (retryTimerRef.current) { clearTimeout(retryTimerRef.current); retryTimerRef.current = null; }
      if (channelRef.current) { supabase.removeChannel(channelRef.current); channelRef.current = null; }
    };
  }, [userId, deviceId, enabled]);

  // ── Visibility effect: arka planda kapat, öne gelince yeniden bağlan ────────
  useEffect(() => {
    if (!userId) return;

    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        if (retryTimerRef.current) { clearTimeout(retryTimerRef.current); retryTimerRef.current = null; }
        if (channelRef.current) {
          supabase.removeChannel(channelRef.current);
          channelRef.current = null;
          console.log('[Realtime] Sekme arka planda — kanal kapatıldı.');
        }
      } else if (document.visibilityState === 'visible') {
        console.log('[Realtime] Sekme öne geldi — yeniden bağlanılıyor...');
        retryCountRef.current = 0;
        subscribeRef.current?.();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [userId]);
}
