import { createClient } from '@supabase/supabase-js';
import { todayStr } from './dateUtils';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    flowType: 'pkce',
    detectSessionInUrl: true,
    persistSession: true,
  },
});

export type QuestionRow = {
  id: string;
  lesson: string;
  unit: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  option_e: string;
  correct_answer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
  created_at: string;
  is_favorite?: boolean;
  // AUDIT-03: DB şemasındaki flag alanları TypeScript type'a eklendi
  flagged?: boolean;
  flag_reason?: string;
  quality_flag?: string | null;
};

export type ImportQuestion = {
  lesson: string;
  unit: string;
  question: string;
  options: { A: string; B: string; C: string; D: string; E: string };
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
};

const SELECT_COLS = 'id,lesson,unit,question,option_a,option_b,option_c,option_d,option_e,correct_answer,explanation,created_at,is_favorite,flagged,flag_reason,quality_flag';
const PAGE_SIZE = 500;

// ════════════════════════════════════════════════════════════════════════════
// KATİ KURAL — LAZY-LOAD YASAK (İSTİSNASIZ)
// Uygulama açılışta `fetchQuestions()` ile TÜM soruları belleğe yükler.
// Daha önce denenen lazy-load mimarisi (metadata + ünite-bazlı dinamik çekim)
// kullanıcının soruları görememesine yol açtığı için KALICI OLARAK kaldırıldı.
// Yeniden eklenmesi YASAKTIR — adaptive motor, simülasyon ve interleaving tüm
// soru havuzunun bellekte mevcut olmasına bağımlıdır.
// ════════════════════════════════════════════════════════════════════════════

const EXCLUDED_FLAGS = new Set(['kavramsal_kopya', 'auto_deleted']);

async function withRetry<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (i < retries - 1) await new Promise(r => setTimeout(r, 1200 * (i + 1)));
    }
  }
  throw lastErr;
}

export async function fetchQuestions(flaggedOnly = false): Promise<QuestionRow[]> {
  async function fetchPage(from: number): Promise<{ rows: QuestionRow[]; full: boolean }> {
    return withRetry(async () => {
      let q = supabase
        .from('questions')
        .select(SELECT_COLS)
        .order('id', { ascending: true })
        .range(from, from + PAGE_SIZE - 1);

      if (flaggedOnly) {
        q = q.eq('quality_flag', 'kavramsal_kopya');
      } else {
        // is.null + eq. çalışır; not.in. içindeki .or() broken (bkz. CLAUDE.md §8)
        q = q.or('quality_flag.is.null,quality_flag.eq.reviewed_keep');
      }

      const { data, error } = await q;
      if (error) throw new Error(error.message);

      const rows = ((data ?? []) as QuestionRow[]).filter(
        r => flaggedOnly || !EXCLUDED_FLAGS.has(r.quality_flag ?? '')
      );
      return { rows, full: (data?.length ?? 0) === PAGE_SIZE };
    });
  }

  const all: QuestionRow[] = [];
  let from = 0;

  while (true) {
    const [p1, p2] = await Promise.all([
      fetchPage(from),
      fetchPage(from + PAGE_SIZE),
    ]);

    all.push(...p1.rows);
    if (!p1.full) break;

    all.push(...p2.rows);
    if (!p2.full) break;

    from += 2 * PAGE_SIZE;
  }

  return all;
}

export type AddQuestionsResult = {
  accepted: number;
  written: number;
  rejected: { index: number; reason: string }[];
};

// Kanonik ekleme yolu: manage-questions Edge Function kalite filtresi + embedding üretir.
// Ham INSERT KULLANMA — embedding'siz/kalite filtresiz soru semantik arama ve dedup'ta görünmez.
export async function addQuestions(questions: ImportQuestion[]): Promise<AddQuestionsResult> {
  const { data, error } = await supabase.functions.invoke('manage-questions', {
    body: { questions },
  });
  if (error) {
    // Fonksiyon 4xx/5xx döndüyse gövdeyi okumaya çalış (kısmi yazım bilgisi için)
    let detail = error.message;
    try {
      const ctx = (error as { context?: Response }).context;
      if (ctx && typeof ctx.text === 'function') detail = await ctx.text();
    } catch { /* yoksay */ }
    throw new Error(detail);
  }
  return data as AddQuestionsResult;
}

// Geriye uyumluluk: eski çağrı yerleri (ImportView) bu imzayı kullanıyor.
export async function importQuestions(questions: ImportQuestion[]): Promise<number> {
  const res = await addQuestions(questions);
  return res.written;
}

export function rowToQuestion(row: QuestionRow) {
  return {
    id: row.id,
    lesson: row.lesson,
    unit: row.unit,
    question: row.question,
    options: {
      A: row.option_a,
      B: row.option_b,
      C: row.option_c,
      D: row.option_d,
      E: row.option_e,
    },
    correctAnswer: row.correct_answer,
    explanation: row.explanation,
    is_favorite: row.is_favorite || false,
    quality_flag: row.quality_flag ?? null,
  };
}

export async function deleteQuestion(id: string): Promise<void> {
  const { error } = await supabase.from('questions').delete().eq('id', id);
  if (error) throw error;
}

export async function deleteQuestionsInUnit(lesson: string, unit: string): Promise<void> {
  const { error } = await supabase.from('questions').delete().match({ lesson, unit });
  if (error) throw error;
}

export async function deleteQuestionsInLesson(lesson: string): Promise<void> {
  const { error } = await supabase.from('questions').delete().eq('lesson', lesson);
  if (error) throw error;
}

export async function renameLesson(oldLesson: string, newLesson: string): Promise<void> {
  const { error } = await supabase.from('questions').update({ lesson: newLesson }).eq('lesson', oldLesson);
  if (error) throw error;
}

export async function renameUnit(lesson: string, oldUnit: string, newUnit: string): Promise<void> {
  const { error } = await supabase.from('questions').update({ unit: newUnit }).match({ lesson, unit: oldUnit });
  if (error) throw error;
}

export async function toggleFavoriteInCloud(id: string, newFavoriteStatus: boolean): Promise<void> {
  const { error } = await supabase.from('questions').update({ is_favorite: newFavoriteStatus }).eq('id', id);
  if (error) throw error;
}

export async function updateQuestion(id: string, fields: Partial<Omit<QuestionRow, 'id' | 'created_at'>>): Promise<void> {
  const { error } = await supabase.from('questions').update(fields).eq('id', id);
  if (error) throw error;
}

export async function flagQuestion(id: string, reason: string): Promise<void> {
  const { error } = await supabase.from('questions').update({ flagged: true, flag_reason: reason }).eq('id', id);
  if (error) throw error;
}

// ─── ACTIVE SESSION CLOUD SYNC ─────────────────────────────────────────────

/** Supabase PostgrestError veya herhangi bir hatayı okunabilir stringe dönüştürür. */
function serializeSupabaseError(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (err && typeof err === 'object') {
    const e = err as Record<string, unknown>;
    if (typeof e.message === 'string') return e.message;
    if (typeof e.details === 'string') return e.details;
    if (typeof e.hint === 'string') return e.hint;
    try { return JSON.stringify(e); } catch { return String(e); }
  }
  return String(err);
}

/**
 * Aktif session'ı cloud'a kaydeder.
 * Compact format: questionIds + answer verileri (soru objeleri hariç).
 * Retry: 3 deneme, exponential backoff.
 *
 * KRİTİK: device_id PRIMARY KEY'dir. userId varsa farklı cihazdan gelen yeni
 * device_id ile upsert yapılınca PK constraint çakışır. Bu nedenle:
 *   - Authenticated: önce user_id üzerinden UPDATE, satır yoksa INSERT
 *   - Anonim: device_id üzerinden UPSERT (tek cihaz, PK safe)
 */
export async function saveSessionToCloud(
  deviceId: string,
  sessionData: object,
  userId?: string
): Promise<void> {
  if (userId) {
    // Authenticated: user_id unique index üzerinden güncelle (device_id'ye dokunma)
    await withRetry(async () => {
      const now = new Date().toISOString();
      // 1) Mevcut user_id satırını güncelle
      const { data: updated, error: updateErr } = await supabase
        .from('active_sessions')
        .update({ session_data: sessionData, updated_at: now })
        .eq('user_id', userId)
        .select('user_id');
      if (updateErr) throw new Error('[session] UPDATE: ' + serializeSupabaseError(updateErr));

      // 2) Satır yoksa INSERT (henüz hiç kaydedilmemiş — ilk cihaz girişi)
      if (!updated || updated.length === 0) {
        const { error: insertErr } = await supabase
          .from('active_sessions')
          .insert({ device_id: deviceId, user_id: userId, session_data: sessionData, updated_at: now });
        if (insertErr) throw new Error('[session] INSERT: ' + serializeSupabaseError(insertErr));
      }
    });
  } else {
    // Anonim: device_id PRIMARY KEY üzerinden UPSERT (tek cihaz, güvenli)
    await withRetry(async () => {
      const { error } = await supabase
        .from('active_sessions')
        .upsert(
          { device_id: deviceId, user_id: null, session_data: sessionData, updated_at: new Date().toISOString() },
          { onConflict: 'device_id' }
        );
      if (error) throw new Error('[session] ANON: ' + serializeSupabaseError(error));
    });
  }
}

/**
 * Aktif session'ı cloud'dan yükler.
 * userId varsa SADECE user bazlı sorgular (cihaz bağımsız cross-device sync).
 * userId yoksa device bazlı sorgular (anonim fallback).
 *
 * NOT: Authenticated kullanıcı için device_id fallback intentionally kaldırıldı.
 * Cihaz değiştirilince farklı device_id farklı satır bulur → yanlış/boş session.
 * user_id unique index ile tek bir bulut satırı garanti altında.
 */
export async function loadSessionFromCloud(
  deviceId: string,
  userId?: string
): Promise<object | null> {
  if (userId) {
    // Authenticated: user_id üzerinden tek satır — cihaz değişse de doğru veri gelir
    const { data, error } = await supabase
      .from('active_sessions')
      .select('session_data')
      .eq('user_id', userId)
      .maybeSingle();
    if (error) console.warn('[loadSessionFromCloud] user query error:', error.message);
    return data?.session_data ?? null;
  }
  // Anonim: device_id bazlı
  const { data, error } = await supabase
    .from('active_sessions')
    .select('session_data')
    .eq('device_id', deviceId)
    .maybeSingle();
  if (error) console.warn('[loadSessionFromCloud] device query error:', error.message);
  return data?.session_data ?? null;
}

export async function deleteSessionFromCloud(deviceId: string, userId?: string): Promise<void> {
  // Authenticated: user_id ile sil (cihaz bağımsız — tek satır garanti)
  // Anonim: device_id ile sil
  const query = supabase.from('active_sessions').delete();
  const { error } = userId
    ? await query.eq('user_id', userId)
    : await query.eq('device_id', deviceId);
  if (error) throw error;
}

// ─── STATS CLOUD SYNC ──────────────────────────────────────────────────────

/** Hata Pattern Analizi: Bir yanlış cevap denemesi */
export type WrongChoice = { selected: string; timestamp: string };

export type StatRow = {
  device_id: string;
  user_id?: string | null; // Auth: giriş yapılmışsa kullanıcı UUID'si
  question_id: string;
  attempts: number;
  corrects: number;
  last_seen: string;
  wrong_choices?: WrongChoice[];
  // Accuracy bazlı statik zorluk puanı (1-10)
  difficulty?: number | null;
};

export type CloudStat = {
  attempts: number;
  corrects: number;
  lastSeen: string;
  wrongChoices?: WrongChoice[];
  difficulty?: number;
};

/**
 * Local stats'ı cloud'a push eder (upsert, 500'lük batch).
 * @param userId — Opsiyonel: giriş yapılmışsa kullanıcı UUID'si.
 *   Varsa conflict `device_id,question_id` üzerinden yapılır (mevcut kayıt güncellenir,
 *   user_id alanı da set edilir). YOKSA aynı conflict ile anonim kayıt oluşur.
 *   FIX: Eski `user_id,question_id` conflict target'ı `(device_id, question_id)` unique
 *   constraint'i ile çakışıyordu. Artık her zaman device_id bazlı upsert yapılır,
 *   user_id da set edilerek kullanıcı bazlı sorgulanabilir hale gelir.
 */
export type PushStatsResult = {
  pushed: number;
  total: number;
  errors: string[];
};

/**
 * Local stats'ı cloud'a push eder.
 * userId varsa → server-side GREATEST() merge RPC (race-condition-safe).
 * userId yoksa → device_id bazlı eski upsert (anonim fallback).
 * Hata durumunda dahi kısmi başarıyı raporlar — throw etmez.
 */
export async function pushStatsToCloud(
  deviceId: string,
  stats: Record<string, CloudStat>,
  userId?: string
): Promise<PushStatsResult> {
  const entries = Object.entries(stats);
  if (entries.length === 0) return { pushed: 0, total: 0, errors: [] };

  const errors: string[] = [];
  let pushed = 0;
  const BATCH = 500;
  const batchCount = Math.ceil(entries.length / BATCH);

  if (userId) {
    // ── Giriş yapılmış: RPC upsert_stats_batch (GREATEST merge, user+question unique) ──
    for (let i = 0; i < entries.length; i += BATCH) {
      const batchIndex = Math.floor(i / BATCH);
      const slice = entries.slice(i, i + BATCH);
      const rows = slice.map(([qId, s]) => ({
        user_id: userId,
        device_id: deviceId,
        question_id: qId,
        attempts: s.attempts,
        corrects: s.corrects,
        last_seen: s.lastSeen || new Date().toISOString(),
        wrong_choices: s.wrongChoices ?? [],
        difficulty: s.difficulty ?? null,
      }));
      try {
        const { error } = await supabase.rpc('upsert_stats_batch', { rows });
        if (error) {
          const msg = `Batch ${batchIndex + 1}/${batchCount}: ${error.message}`;
          console.error(`[pushStatsToCloud] ${msg}`);
          errors.push(msg);
        } else {
          pushed += rows.length;
        }
      } catch (err) {
        const msg = `Batch ${batchIndex + 1}/${batchCount}: ${err instanceof Error ? err.message : String(err)}`;
        console.error(`[pushStatsToCloud] ${msg}`);
        errors.push(msg);
      }
    }
  } else {
    // ── Anonim: device_id bazlı eski yol ──
    const rows: StatRow[] = entries.map(([qId, s]) => ({
      device_id: deviceId,
      question_id: qId,
      attempts: s.attempts,
      corrects: s.corrects,
      last_seen: s.lastSeen || new Date().toISOString(),
      wrong_choices: s.wrongChoices ?? [],
      difficulty: s.difficulty ?? null,
    }));
    for (let i = 0; i < rows.length; i += BATCH) {
      const batchIndex = Math.floor(i / BATCH);
      const batch = rows.slice(i, i + BATCH);
      try {
        const { error } = await supabase
          .from('question_stats')
          .upsert(batch, { onConflict: 'device_id,question_id' });
        if (error) {
          const msg = `Batch ${batchIndex + 1}/${batchCount}: ${error.message}`;
          console.error(`[pushStatsToCloud] ${msg}`);
          errors.push(msg);
        } else {
          pushed += batch.length;
        }
      } catch (err) {
        const msg = `Batch ${batchIndex + 1}/${batchCount}: ${err instanceof Error ? err.message : String(err)}`;
        console.error(`[pushStatsToCloud] ${msg}`);
        errors.push(msg);
      }
    }
  }

  return { pushed, total: entries.length, errors };
}

// ─── USER DATA (activity_log, streak, vs. JSON blobs) ───────────────────────

/**
 * Kullanıcı verisi push eder — key/value JSON, upsert (updated_at güncellenir).
 * Giriş yapılmamışsa sessizce döner.
 */
export async function pushUserData(userId: string, key: string, value: unknown): Promise<void> {
  const { error } = await supabase
    .from('user_data')
    .upsert({ user_id: userId, key, value, updated_at: new Date().toISOString() });
  if (error) throw new Error(`[pushUserData] ${key}: ${error.message}`);
}

/**
 * Kullanıcı verisini çeker. Bulunamazsa null döner.
 */
export async function pullUserData(userId: string, key: string): Promise<unknown | null> {
  const { data, error } = await supabase
    .from('user_data')
    .select('value, updated_at')
    .eq('user_id', userId)
    .eq('key', key)
    .maybeSingle();
  if (error) throw new Error(`[pullUserData] ${key}: ${error.message}`);
  return data?.value ?? null;
}

const STAT_COLUMNS = 'question_id, attempts, corrects, last_seen, wrong_choices, difficulty';

type PulledStatRow = {
  question_id: string;
  attempts: number;
  corrects: number;
  last_seen: string;
  wrong_choices?: WrongChoice[];
  difficulty?: number | null;
};

function rowToCloudStat(row: PulledStatRow): CloudStat {
  return {
    attempts: row.attempts,
    corrects: row.corrects,
    lastSeen: row.last_seen,
    wrongChoices: row.wrong_choices ?? [],
    difficulty: row.difficulty ?? undefined,
  };
}

/**
 * Cloud stats'ını çeker.
 * @param userId — Opsiyonel: giriş yapılmışsa user bazlı; yoksa device bazlı.
 */
export async function pullStatsFromCloud(
  deviceId: string,
  userId?: string
): Promise<Record<string, CloudStat>> {
  const query = supabase.from('question_stats').select(STAT_COLUMNS);
  const { data, error } = userId
    ? await query.eq('user_id', userId)
    : await query.eq('device_id', deviceId);
  if (error) throw error;
  const result: Record<string, CloudStat> = {};
  for (const row of (data || []) as PulledStatRow[]) {
    result[row.question_id] = rowToCloudStat(row);
  }
  return result;
}

/** TÜM cihazların cloud stats'ını çeker ve her soru için en yüksek attempts olanı döner.
 *  @param userId — Giriş yapılmışsa sadece o kullanıcının verisini çeker; yoksa tüm cihazları.
 */
export async function pullAllDeviceStats(userId?: string): Promise<Record<string, CloudStat>> {
  let allData: PulledStatRow[] = [];
  let from = 0;
  const limit = 1000;
  while (true) {
    let query = supabase
      .from('question_stats')
      .select(STAT_COLUMNS)
      .order('attempts', { ascending: false })
      .order('id', { ascending: true })
      .range(from, from + limit - 1);

    // Giriş yapılmışsa sadece kullanıcının kendi verisini çek
    if (userId) {
      query = query.eq('user_id', userId);
    }

    const { data, error } = await query;
    if (error) throw error;
    if (data && data.length > 0) {
      allData = [...allData, ...(data as PulledStatRow[])];
      if (data.length < limit) break;
      from += limit;
    } else break;
  }
  const merged: Record<string, CloudStat> = {};
  for (const row of allData) {
    const existing = merged[row.question_id];
    if (!existing) {
      merged[row.question_id] = rowToCloudStat(row);
      continue;
    }
    // syncStatsDown ile tutarlı: last_seen'e göre merge, tie-break attempts
    const rowSeen = row.last_seen ?? '';
    const existingSeen = existing.lastSeen ?? '';
    if (rowSeen > existingSeen) {
      merged[row.question_id] = rowToCloudStat(row);
    } else if (rowSeen === existingSeen && row.attempts > existing.attempts) {
      merged[row.question_id] = rowToCloudStat(row);
    }
  }
  return merged;
}

/** Cihaza ait tüm istatistikleri cloud'dan siler (reset için). */
export async function clearDeviceStats(deviceId: string, userId?: string): Promise<void> {
  if (userId) {
    const { error } = await supabase.from('question_stats').delete().eq('user_id', userId);
    if (error) throw error;
  }
  const { error } = await supabase.from('question_stats').delete().eq('device_id', deviceId);
  if (error) throw error;
}

// ─── REFERENCE SOURCES (AI Kaynak Kitaplar) ────────────────────────────────

export type ReferenceSource = {
  id: string;
  lesson: string;
  unit: string | null;
  file_path: string;
  file_name: string;
  created_at: string;
};

const STORAGE_BUCKET = 'study-resources';

/** Tüm kaynak kitapları listeler */
export async function fetchReferenceSources(): Promise<ReferenceSource[]> {
  const { data, error } = await supabase
    .from('reference_sources')
    .select('*')
    .order('lesson', { ascending: true });
  if (error) throw new Error(error.message);
  return data ?? [];
}

/** Belirli bir ders/ünite için kaynak kitap getirir (hiyerarşik arama) */
export async function findReferenceSource(
  lesson: string,
  unit: string
): Promise<ReferenceSource | null> {
  // 1. Önce üniteye özel kaynak ara
  const { data: unitData } = await supabase
    .from('reference_sources')
    .select('*')
    .eq('lesson', lesson)
    .eq('unit', unit)
    .limit(1)
    .maybeSingle();

  if (unitData) return unitData as ReferenceSource;

  // 2. Yoksa dersin genel kaynağını ara (unit = null)
  const { data: lessonData } = await supabase
    .from('reference_sources')
    .select('*')
    .eq('lesson', lesson)
    .is('unit', null)
    .limit(1)
    .maybeSingle();

  return (lessonData as ReferenceSource) ?? null;
}

/** PDF'i Supabase Storage'a yükler ve metadata'yı reference_sources'a kaydeder */
export async function uploadReferenceSource(
  file: File,
  lesson: string,
  unit: string | null
): Promise<ReferenceSource> {
  // Dosya adını temizle ve benzersiz yap
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const safeLesson = lesson.replace(/[^a-zA-Z0-9_-]/g, '_');
  const safeUnit = unit ? unit.replace(/[^a-zA-Z0-9_-]/g, '_') : '_general';

  const storagePath = `${safeLesson}/${safeUnit}/${timestamp}_${safeName}`;

  // 1. Storage'a yükle
  const { error: uploadError } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(storagePath, file, {
      contentType: file.type || 'application/pdf',
      upsert: false,
    });

  if (uploadError) throw new Error('Dosya yükleme hatası: ' + uploadError.message);

  // 2. Metadata'yı tabloya kaydet
  const { data, error: insertError } = await supabase
    .from('reference_sources')
    .insert({
      lesson,
      unit,
      file_path: storagePath,
      file_name: file.name,
    })
    .select()
    .single();

  if (insertError) throw new Error('Kayıt hatası: ' + insertError.message);
  return data as ReferenceSource;
}

/** Kaynak kitabı siler (Storage + DB) */
export async function deleteReferenceSource(ref: ReferenceSource): Promise<void> {
  // 1. Storage'dan sil
  const { error: storageError } = await supabase.storage
    .from(STORAGE_BUCKET)
    .remove([ref.file_path]);

  if (storageError) console.warn('Storage silme uyarısı:', storageError.message);

  // 2. DB'den sil
  const { error: dbError } = await supabase
    .from('reference_sources')
    .delete()
    .eq('id', ref.id);

  if (dbError) throw new Error('Silme hatası: ' + dbError.message);
}

/** Storage'daki dosyanın public URL'ini döner */
export function getStoragePublicUrl(filePath: string): string {
  const { data } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(filePath);
  return data.publicUrl;
}

// ─── GÜNÜN DENEMESİ ───────────────────────────────────────────────────────────

export type DailyExamRow = {
  id: string;
  user_id: string;
  day_number: number;
  exam_date: string;
  question_ids: string[];
  breakdown: Record<string, unknown>;
  status: 'pending' | 'completed' | 'archived';
  created_at: string;
  completed_at: string | null;
};

/** Bugünün bekleyen daily exam'ini getirir (yoksa null). */
export async function loadTodaysDailyExam(userId: string): Promise<DailyExamRow | null> {
  const today = todayStr();
  const { data, error } = await supabase
    .from('daily_exams')
    .select('*')
    .eq('user_id', userId)
    .eq('exam_date', today)
    .eq('status', 'pending')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  return data as DailyExamRow | null;
}

/** Atlas tarafından oluşturulan daily exam'i DB'ye kaydeder. */
export async function saveDailyExam(
  userId: string,
  dayNumber: number,
  questionIds: string[],
  breakdown: Record<string, unknown>,
  examDate?: string,
): Promise<DailyExamRow> {
  const date = examDate ?? todayStr();
  const { data, error } = await supabase
    .from('daily_exams')
    .insert({
      user_id: userId,
      day_number: dayNumber,
      exam_date: date,
      question_ids: questionIds,
      breakdown,
      status: 'pending',
    })
    .select()
    .single();
  if (error) throw error;
  return data as DailyExamRow;
}

/** Tamamlanan daily exam'i 'completed' olarak işaretler. */
export async function markDailyExamCompleted(examId: string): Promise<void> {
  const { error } = await supabase
    .from('daily_exams')
    .update({ status: 'completed', completed_at: new Date().toISOString() })
    .eq('id', examId);
  if (error) throw error;
}

// ─── EXAM ANSWERS (Faz 5: Deneme Bazlı Soru Takibi) ─────────────────────────

export type ExamAnswerRow = {
  id: string;
  exam_id: string;
  question_id: string;
  user_id: string;
  selected_answer: string | null;
  correct_answer: string;
  is_correct: boolean;
  time_spent: number | null;
  question_order: number;
  created_at: string;
};

/**
 * Deneme tamamlandığında tüm cevapları exam_answers tablosuna kaydeder.
 * Batch insert (500'lik chunk) ile çalışır.
 */
export async function saveExamAnswers(
  examId: string,
  userId: string,
  answers: Array<{
    question: { id: string; correctAnswer: string };
    state: string;
    selectedOptionKey?: string | null;
    timeSpent?: number;
  }>
): Promise<void> {
  const rows = answers.map((a, i) => ({
    exam_id: examId,
    question_id: a.question.id,
    user_id: userId,
    selected_answer: a.selectedOptionKey ?? null,
    correct_answer: a.question.correctAnswer,
    is_correct: a.state === 'correct',
    time_spent: a.timeSpent ?? null,
    question_order: i,
  }));

  for (let i = 0; i < rows.length; i += 500) {
    const batch = rows.slice(i, i + 500);
    const { error } = await supabase.from('exam_answers').insert(batch);
    if (error) {
      console.warn(`[saveExamAnswers] Batch ${Math.floor(i / 500)} hatası:`, error.message);
    }
  }
}

/**
 * Bir denemedeki yanlış cevaplanan soruları getirir.
 */
export async function fetchExamWrongAnswers(
  examId: string,
  userId: string
): Promise<(QuestionRow & { selected_answer: string | null })[]> {
  const { data, error } = await supabase
    .from('exam_answers')
    .select(`
      question_id,
      selected_answer,
      correct_answer,
      is_correct,
      time_spent,
      question_order,
      questions!inner(*)
    `)
    .eq('exam_id', examId)
    .eq('user_id', userId)
    .eq('is_correct', false)
    .order('question_order', { ascending: true });

  if (error) throw error;
  return (data ?? []).map((r: Record<string, unknown>) => {
    const q = r.questions as QuestionRow;
    return { ...q, selected_answer: r.selected_answer as string | null };
  });
}

/**
 * Tarihe göre denemeleri getirir.
 */
export async function fetchExamsByDate(
  userId: string,
  date: string
): Promise<DailyExamRow[]> {
  const { data, error } = await supabase
    .from('daily_exams')
    .select('*')
    .eq('user_id', userId)
    .eq('exam_date', date)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data ?? []) as DailyExamRow[];
}
/** Kullanıcının toplam daily exam sayısını döner — bir sonraki day_number için. */
export async function getNextDayNumber(userId: string): Promise<number> {
  const { count, error } = await supabase
    .from('daily_exams')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId);
  if (error) throw error;
  return (count ?? 0) + 1;
}
