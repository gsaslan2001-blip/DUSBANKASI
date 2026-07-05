import { deleteQuestion as deleteQuestionRemote } from './supabase';
import { deleteSkeletonsFromCache, deleteQuestionsFromContentCache } from './idb';

/**
 * Ertelenmiş soru-silme kuyruğu.
 *
 * Soru-çözme oturumu sırasında "Sil" denildiğinde soru ANINDA DB'den silinmez;
 * yalnızca bu kuyruğa (localStorage) yazılır ve UI'dan optimistic olarak düşülür.
 * Gerçek DB silme `flushPendingDeletes()` ile şu anlarda yapılır:
 *   - Sync butonuna basıldığında
 *   - Test/quiz bittiğinde veya oturumdan çıkıldığında
 *   - Uygulama yeniden bağlandığında (açılış + `online` event)
 *
 * Böylece silme işlemi aktif oturumu reload ile sıfırlamaz; kullanıcı kaldığı
 * yerden devam eder. localStorage kullanıldığı için kuyruk sayfa yenileme ve
 * yeniden bağlanma arasında korunur.
 */

const KEY = 'dus_pending_deletes_v1';

export function getPendingDeletes(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const arr: unknown = JSON.parse(raw);
    return Array.isArray(arr) ? arr.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function writePendingDeletes(ids: string[]): void {
  try {
    if (ids.length === 0) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, JSON.stringify(ids));
  } catch {
    /* quota / private mode — sessizce yut */
  }
}

export function enqueuePendingDelete(id: string): void {
  const cur = getPendingDeletes();
  if (cur.includes(id)) return;
  writePendingDeletes([...cur, id]);
}

export function removePendingDeletes(ids: string[]): void {
  if (ids.length === 0) return;
  const drop = new Set(ids);
  writePendingDeletes(getPendingDeletes().filter(id => !drop.has(id)));
}

export function hasPendingDeletes(): boolean {
  return getPendingDeletes().length > 0;
}

export type FlushDeletesResult = { deleted: string[]; failed: string[] };

// Aynı anda iki flush çakışmasın (örn. açılış effect'i + online event)
let flushing = false;

/**
 * Bekleyen silme kuyruğunu DB'ye uygular.
 * Başarılı silinenleri kuyruktan ve yerel cache'ten (skeleton + content) düşürür.
 * Başarısızlar kuyrukta kalır; bir sonraki tetiklemede yeniden denenir.
 * Aktif oturumu ETKİLEMEZ — hiçbir reload tetiklemez.
 */
export async function flushPendingDeletes(): Promise<FlushDeletesResult> {
  const result: FlushDeletesResult = { deleted: [], failed: [] };
  const ids = getPendingDeletes();
  if (ids.length === 0 || flushing) return result;

  flushing = true;
  try {
    for (const id of ids) {
      try {
        // Supabase delete idempotenttir: olmayan satırı silmek hata vermez.
        await deleteQuestionRemote(id);
        result.deleted.push(id);
      } catch (err) {
        console.warn('[pendingDeletes] Silinemedi, kuyrukta kalıyor:', id, err);
        result.failed.push(id);
      }
    }
    if (result.deleted.length > 0) {
      removePendingDeletes(result.deleted);
      // Yerel cache'ten de düş — bir sonraki delta-sync'e kadar geri gelmesin.
      await deleteSkeletonsFromCache(result.deleted).catch(() => {});
      await deleteQuestionsFromContentCache(result.deleted).catch(() => {});
    }
  } finally {
    flushing = false;
  }
  return result;
}
