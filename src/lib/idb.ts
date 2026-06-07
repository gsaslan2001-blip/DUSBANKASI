import type { QuestionRow, SkeletonRow } from './supabase';

const DB_NAME = 'DusbankasiDB';
const DB_VERSION = 2; // v2: skeletonCache + contentCache store'ları eklendi
const SKELETON_STORE = 'skeletonCache';
const CONTENT_STORE  = 'contentCache';

// --- Geriye uyumluluk ---
// v1'deki eski "questionsCache" store'u v2'de hâlâ açık bırakılır (silinmez),
// böylece var olan kullanıcıların cache'i kaybolmaz. Eski cache içeriği
// ilk seferinde contentCache'e taşınabilir (isteğe bağlı migration).
const LEGACY_STORE = 'questionsCache';

export async function getDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // Legacy store — dokunma, mevcut kullanıcıları koru
      if (!db.objectStoreNames.contains(LEGACY_STORE)) {
        db.createObjectStore(LEGACY_STORE, { keyPath: 'id' });
      }

      // Skeleton store — açılışta yüklenen hafif iskelet verisi
      if (!db.objectStoreNames.contains(SKELETON_STORE)) {
        db.createObjectStore(SKELETON_STORE, { keyPath: 'id' });
      }

      // Content store — sınav anında on-demand yüklenen tam soru metni
      if (!db.objectStoreNames.contains(CONTENT_STORE)) {
        db.createObjectStore(CONTENT_STORE, { keyPath: 'id' });
      }
    };
  });
}

// ─── SKELETON CACHE ────────────────────────────────────────────────────────

export async function getCachedSkeletons(): Promise<SkeletonRow[]> {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(SKELETON_STORE, 'readonly');
    const store = tx.objectStore(SKELETON_STORE);
    const request = store.getAll();
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result as SkeletonRow[]);
  });
}

export async function saveSkeletonsToCache(skeletons: SkeletonRow[]): Promise<void> {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(SKELETON_STORE, 'readwrite');
    const store = tx.objectStore(SKELETON_STORE);
    for (const s of skeletons) {
      store.put(s);
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function deleteSkeletonsFromCache(ids: string[]): Promise<void> {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(SKELETON_STORE, 'readwrite');
    const store = tx.objectStore(SKELETON_STORE);
    for (const id of ids) {
      store.delete(id);
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// ─── CONTENT CACHE (tam soru metni) ────────────────────────────────────────

export async function getQuestionsFromContentCache(ids: string[]): Promise<QuestionRow[]> {
  const db = await getDb();
  const idSet = new Set(ids);
  const result: QuestionRow[] = [];

  // Önce contentCache'e bak
  const fromContent = await new Promise<QuestionRow[]>((resolve, reject) => {
    const tx = db.transaction(CONTENT_STORE, 'readonly');
    const store = tx.objectStore(CONTENT_STORE);
    const request = store.getAll();
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      resolve((request.result as QuestionRow[]).filter(q => idSet.has(q.id)));
    };
  });
  result.push(...fromContent);

  const foundIds = new Set(fromContent.map(q => q.id));
  const stillMissing = ids.filter(id => !foundIds.has(id));

  // Hâlâ eksik varsa eski questionsCache'e de bak (v1 migration)
  if (stillMissing.length > 0) {
    const legacySet = new Set(stillMissing);
    try {
      const fromLegacy = await new Promise<QuestionRow[]>((resolve, reject) => {
        const tx2 = db.transaction(LEGACY_STORE, 'readonly');
        const store2 = tx2.objectStore(LEGACY_STORE);
        const req2 = store2.getAll();
        req2.onerror = () => reject(req2.error);
        req2.onsuccess = () => {
          resolve((req2.result as QuestionRow[]).filter(q => legacySet.has(q.id)));
        };
      });
      if (fromLegacy.length > 0) {
        // Bulduklarımızı contentCache'e de yaz (migration)
        await saveQuestionsToContentCache(fromLegacy);
        result.push(...fromLegacy);
      }
    } catch {
      // Legacy store olmayabilir, sessizce geç
    }
  }

  return result;
}

export async function saveQuestionsToContentCache(questions: QuestionRow[]): Promise<void> {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CONTENT_STORE, 'readwrite');
    const store = tx.objectStore(CONTENT_STORE);
    for (const q of questions) {
      store.put(q);
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function deleteQuestionsFromContentCache(ids: string[]): Promise<void> {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CONTENT_STORE, 'readwrite');
    const store = tx.objectStore(CONTENT_STORE);
    for (const id of ids) {
      store.delete(id);
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// ─── GERİYE UYUMLULUK (eski kod tarafından çağrılan fonksiyonlar) ─────────

/** @deprecated Yeni kod saveQuestionsToContentCache kullanmalı. */
export async function getCachedQuestions(): Promise<QuestionRow[]> {
  const db = await getDb();
  // Önce contentCache'e bak
  const fromContent = await new Promise<QuestionRow[]>((resolve, reject) => {
    const tx = db.transaction(CONTENT_STORE, 'readonly');
    const store = tx.objectStore(CONTENT_STORE);
    const request = store.getAll();
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result as QuestionRow[]);
  });
  if (fromContent.length > 0) return fromContent;

  // Yoksa legacy store'a düş (v1 kullanıcılar)
  try {
    return await new Promise<QuestionRow[]>((resolve, reject) => {
      const tx = db.transaction(LEGACY_STORE, 'readonly');
      const store = tx.objectStore(LEGACY_STORE);
      const request = store.getAll();
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result as QuestionRow[]);
    });
  } catch {
    return [];
  }
}

/** @deprecated Yeni kod saveQuestionsToContentCache kullanmalı. */
export async function saveQuestionsToCache(questions: QuestionRow[]): Promise<void> {
  return saveQuestionsToContentCache(questions);
}

/** @deprecated Yeni kod deleteQuestionsFromContentCache kullanmalı. */
export async function deleteQuestionsFromCache(ids: string[]): Promise<void> {
  return deleteQuestionsFromContentCache(ids);
}
