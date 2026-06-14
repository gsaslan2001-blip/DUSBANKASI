
/**
 * DUS Bankası — Soru İstatistik Yönetimi (localStorage + Cloud Sync)
 * Per-soru: kaç kez çözüldü, kaç kez doğru, son görülme zamanı, yanlış şık geçmişi.
 *
 * NOT: Aktif tekrar (spaced repetition) Anki/FSRS tarafında yürütülür. Burada FSRS
 * scheduling YOKTUR — yalnızca performans takibi + accuracy bazlı statik zorluk puanı.
 */

import { pushStatsToCloud, pullAllDeviceStats, clearDeviceStats, pushUserData, pullUserData, type PushStatsResult } from './supabase';
import { todayStr, addDays } from './dateUtils';
import type { Question } from '../data';

const STATS_KEY = 'dus_question_stats';
const DEVICE_ID_KEY = 'dus_device_id';
const STREAK_KEY = 'dus_study_streak';
const ACTIVITY_KEY = 'dus_activity_log';
const PENDING_SYNC_KEY = 'dus_pending_sync';

// B2: Yalnızca bu oturumda değişen sorular cloud'a push edilir (delta sync)
const _dirtyIds = new Set<string>();

export type WrongChoice = { selected: string; timestamp: string };

export type QuestionStat = {
  attempts: number;
  corrects: number;
  lastSeen: string; // ISO timestamp
  // Hata Pattern Analizi için seçilen yanlış şıkların geçmişi
  wrongChoices?: WrongChoice[];
  // Accuracy bazlı statik zorluk puanı (1 = kolay, 10 = zor). Doğruluk oranıyla ters orantılı.
  difficulty?: number;
  // Soru başına harcanan süreler (saniye) — histogram ve hız analizi için
  timeSpentHistory?: number[];
};

export type StatsMap = Record<string, QuestionStat>;

export type StreakData = {
  currentStreak: number;
  lastStudyDate: string; // YYYY-MM-DD
  longestStreak: number;
};

/** Cihaza özgü kalıcı ID üretir/döner */
export function getDeviceId(): string {
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id = 'dev_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
}

/** Tüm istatistikleri localStorage'dan yükler */
export function loadAllStats(): StatsMap {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Stats haritasını localStorage'a güvenli yazar.
 * QuotaExceededError durumunda lastSeen bazlı en eski %20'yi budayarak tekrar dener.
 * Son çare olarak da başarısız olursa sessizce loglar (veri localStorage'dan kaybolur ama
 * çalışma durur — cloud'daki kopyası kalır).
 */
function safeWriteStats(stats: StatsMap): void {
  const json = JSON.stringify(stats);
  try {
    localStorage.setItem(STATS_KEY, json);
  } catch (e) {
    if (e instanceof DOMException && (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
      console.warn('[stats] localStorage kota doldu, eski kayıtlar budanıyor…');
      const entries = Object.entries(stats).sort(
        (a, b) => (a[1].lastSeen ?? '').localeCompare(b[1].lastSeen ?? '')
      );
      // En eski %20'yi at
      const trimmed = Object.fromEntries(entries.slice(Math.ceil(entries.length * 0.2)));
      try {
        localStorage.setItem(STATS_KEY, JSON.stringify(trimmed));
        console.warn(`[stats] ${entries.length - Object.keys(trimmed).length} eski kayıt silindi.`);
      } catch (e2) {
        console.error('[stats] Budama sonrası da yazılamadı:', e2);
      }
    } else {
      console.error('[stats] setItem hatası:', e);
    }
  }
}

// ─── Accuracy Bazlı Zorluk ───────────────────────────────────────────────────

/** Doğruluk oranını 1-10 arası statik zorluk puanına çevirir (düşük accuracy = yüksek zorluk). */
export function accuracyToDifficulty(corrects: number, attempts: number): number {
  if (attempts <= 0) return 5;
  const rate = corrects / attempts;
  return Math.min(10, Math.max(1, Math.round(10 - rate * 9)));
}

/** Zorluk puanından (1-10) etiket üretir (UI badge'leri için). */
export function difficultyLabel(d: number): 'easy' | 'medium' | 'hard' {
  if (d < 4) return 'easy';
  if (d < 7) return 'medium';
  return 'hard';
}

/**
 * Tek sorunun istatistiğini günceller.
 * @param selectedOption — Seçilen şık ('A'-'E'). Yanlış cevaplarda wrongChoices'a kaydedilir.
 */
export function saveQuestionStat(
  questionId: string,
  isCorrect: boolean,
  selectedOption?: string | null,
  lesson?: string,
  timeSpent?: number,
): void {
  const stats = loadAllStats();
  const prev: QuestionStat = stats[questionId] || {
    attempts: 0,
    corrects: 0,
    lastSeen: '',
    wrongChoices: [] as WrongChoice[],
  };

  const attempts = prev.attempts + 1;
  const corrects = prev.corrects + (isCorrect ? 1 : 0);

  // Hata Pattern Analizi: Sadece yanlış cevaplarda ve seçim varsa kaydet.
  // Son 20 kayıt tutulur — sınırsız büyüme → localStorage kota taşması riskini önler.
  const prevWrong = prev.wrongChoices ?? [];
  const nextWrong = (!isCorrect && selectedOption)
    ? [...prevWrong, { selected: selectedOption, timestamp: new Date().toISOString() }].slice(-20)
    : prevWrong;

  // Süre geçmişi: son 50 kayıt tutulur (histogram ve hız analizi için)
  const prevTimes = prev.timeSpentHistory ?? [];
  const nextTimes = timeSpent != null && timeSpent > 0
    ? [...prevTimes, timeSpent].slice(-50)
    : prevTimes;

  stats[questionId] = {
    attempts,
    corrects,
    lastSeen: new Date().toISOString(),
    difficulty: accuracyToDifficulty(corrects, attempts),
    wrongChoices: nextWrong,
    timeSpentHistory: nextTimes,
  };

  // Güvenli yazma: localStorage kota aşarsa en eski %20 kaydı at, tekrar dene
  safeWriteStats(stats);
  _dirtyIds.add(questionId);
  localStorage.setItem(PENDING_SYNC_KEY, '1');
  notifySyncStatus();

  // Streak güncelle
  updateStreak();
  // Aktivite logu güncelle (doğru/yanlış + ders kırılımıyla)
  logActivity(isCorrect, lesson);
  // Debounced cloud sync — her soru yerine 5 saniyede bir
  debouncedSyncUp();
}

/** Bir sorunun istatistiğini döner */
export function getStatFor(questionId: string): QuestionStat | null {
  const stats = loadAllStats();
  return stats[questionId] || null;
}

/**
 * Zorluk seviyesi döner (accuracy bazlı).
 * Hiç çözülmemişse null.
 */
export function getDifficultyLabel(questionId: string): 'easy' | 'medium' | 'hard' | null {
  const stat = getStatFor(questionId);
  if (!stat || stat.attempts === 0) return null;
  return difficultyLabel(accuracyToDifficulty(stat.corrects, stat.attempts));
}

/** Zayıf soruları filtreler: en az 2 deneme, doğru oranı < %50 */
export function getWeakQuestionIds(minAttempts = 2, maxCorrectRate = 0.5, preloadedStats?: StatsMap): string[] {
  const stats = preloadedStats ?? loadAllStats();
  return Object.entries(stats)
    .filter(([, stat]) => {
      if (stat.attempts < minAttempts) return false;
      return (stat.corrects / stat.attempts) < maxCorrectRate;
    })
    .sort((a, b) => (a[1].corrects / a[1].attempts) - (b[1].corrects / b[1].attempts))
    .map(([id]) => id);
}

/** Bir ünitenin istatistik özetini döner */
export function getUnitProgress(questionIds: string[], preloadedStats?: StatsMap): { solved: number; correct: number; total: number; totalAttempts: number; totalCorrects: number } {
  const stats = preloadedStats ?? loadAllStats();
  let solved = 0;
  let correct = 0;
  let totalAttempts = 0;
  let totalCorrects = 0;
  for (const id of questionIds) {
    const s = stats[id];
    if (s && s.attempts > 0) {
      solved++;
      totalAttempts += s.attempts;
      totalCorrects += s.corrects;
      // Doğruluk oranı: son durum bazlı (corrects/attempts >= 0.5 ise doğru sayılır)
      if (s.corrects / s.attempts >= 0.5) correct++;
    }
  }
  return { solved, correct, total: questionIds.length, totalAttempts, totalCorrects };
}

// ─── STREAK ────────────────────────────────────────────────────────────────

export function loadStreak(): StreakData {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    return raw ? JSON.parse(raw) : { currentStreak: 0, lastStudyDate: '', longestStreak: 0 };
  } catch {
    return { currentStreak: 0, lastStudyDate: '', longestStreak: 0 };
  }
}

function updateStreak(): void {
  const streak = loadStreak();
  const today = todayStr();
  if (streak.lastStudyDate === today) return; // Zaten bugün çalışıldı

  const yesterday = addDays(today, -1);
  let newCurrent: number;
  if (streak.lastStudyDate === yesterday) {
    newCurrent = streak.currentStreak + 1;
  } else {
    newCurrent = 1; // Zincir koptu
  }

  const updated: StreakData = {
    currentStreak: newCurrent,
    lastStudyDate: today,
    longestStreak: Math.max(streak.longestStreak, newCurrent),
  };
  localStorage.setItem(STREAK_KEY, JSON.stringify(updated));
}

// ─── AKTİVİTE LOGU ─────────────────────────────────────────────────────────
// Her günün çözülen soru sayısı + doğru/yanlış kırılımını tutar.
// Geriye uyumluluk: eski kayıtlar düz sayı (yalnızca toplam) olabilir.

const ACTIVITY_RETENTION_DAYS = 400;

export type LessonDayStat = { total: number; correct: number };
export type DailyActivity = {
  total: number;
  correct: number;
  incorrect: number;
  // Gün-detayını zenginleştirmek için ders bazlı kırılım (geriye dönük: opsiyonel).
  byLesson?: Record<string, LessonDayStat>;
};
export type ActivityLog = Record<string, number | DailyActivity>; // { 'YYYY-MM-DD': ... }

/** Eski (düz sayı) veya yeni (obje) formatı tek tip DailyActivity'ye normalize eder. */
export function normalizeActivity(v: number | DailyActivity | undefined): DailyActivity {
  if (v == null) return { total: 0, correct: 0, incorrect: 0, byLesson: {} };
  if (typeof v === 'number') return { total: v, correct: 0, incorrect: 0, byLesson: {} };
  return {
    total: v.total ?? 0,
    correct: v.correct ?? 0,
    incorrect: v.incorrect ?? 0,
    byLesson: v.byLesson ?? {},
  };
}

export function loadActivityLog(): ActivityLog {
  try {
    const raw = localStorage.getItem(ACTIVITY_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function logActivity(isCorrect: boolean, lesson?: string): void {
  const log = loadActivityLog();
  const today = todayStr();
  const cur = normalizeActivity(log[today]);
  cur.total += 1;
  if (isCorrect) cur.correct += 1;
  else cur.incorrect += 1;
  if (lesson) {
    const byLesson = cur.byLesson ?? (cur.byLesson = {});
    const ls = byLesson[lesson] ?? (byLesson[lesson] = { total: 0, correct: 0 });
    ls.total += 1;
    if (isCorrect) ls.correct += 1;
  }
  log[today] = cur;

  // Eski kayıtları temizle (uzun geçmiş trend grafikleri için geniş pencere)
  const cutoff = addDays(today, -ACTIVITY_RETENTION_DAYS);
  for (const date of Object.keys(log)) {
    if (date < cutoff) delete log[date];
  }
  localStorage.setItem(ACTIVITY_KEY, JSON.stringify(log));
}

export type ActivityPoint = {
  date: string;
  count: number;
  correct: number;
  incorrect: number;
  byLesson: Record<string, LessonDayStat>;
};

function mergeActivityLogs(localLog: ActivityLog, cloudLog: ActivityLog): ActivityLog {
  const mergedLog: ActivityLog = { ...localLog };
  for (const [date, cloudRaw] of Object.entries(cloudLog)) {
    const cloud = normalizeActivity(cloudRaw as number | DailyActivity);
    const local = normalizeActivity(localLog[date]);
    if (cloud.total > local.total) {
      mergedLog[date] = {
        total: cloud.total,
        correct: Math.max(cloud.correct, local.correct),
        incorrect: Math.max(cloud.incorrect, local.incorrect),
        byLesson: { ...local.byLesson, ...cloud.byLesson },
      };
    }
  }
  return mergedLog;
}

function mergeStreakData(local: StreakData, cloud: StreakData): StreakData {
  const useCloud = !local.lastStudyDate || (cloud.lastStudyDate ?? '') >= local.lastStudyDate;
  return {
    currentStreak: useCloud ? cloud.currentStreak : local.currentStreak,
    lastStudyDate: useCloud ? cloud.lastStudyDate : local.lastStudyDate,
    longestStreak: Math.max(cloud.longestStreak ?? 0, local.longestStreak),
  };
}

/** Son N günün aktivite verisini döner (count = o günün toplam çözüm sayısı). */
export function getRecentActivity(days = 14): ActivityPoint[] {
  const log = loadActivityLog();
  const today = todayStr();
  const result: ActivityPoint[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = addDays(today, -i);
    const a = normalizeActivity(log[date]);
    result.push({ date, count: a.total, correct: a.correct, incorrect: a.incorrect, byLesson: a.byLesson ?? {} });
  }
  return result;
}

/** Tüm zamanların aktivite özeti: aktif gün sayısı, toplam/günlük rekorları. */
export function getActivitySummary(): {
  activeDays: number;
  totalSolved: number;
  totalCorrect: number;
  totalIncorrect: number;
  bestDay: { date: string; count: number } | null;
  todayCount: number;
} {
  const log = loadActivityLog();
  let activeDays = 0;
  let totalSolved = 0;
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let bestDay: { date: string; count: number } | null = null;
  for (const [date, raw] of Object.entries(log)) {
    const a = normalizeActivity(raw);
    if (a.total > 0) activeDays++;
    totalSolved += a.total;
    totalCorrect += a.correct;
    totalIncorrect += a.incorrect;
    if (!bestDay || a.total > bestDay.count) bestDay = { date, count: a.total };
  }
  const todayCount = normalizeActivity(log[todayStr()]).total;
  return { activeDays, totalSolved, totalCorrect, totalIncorrect, bestDay, todayCount };
}

// ─── KAPSAMLI İSTATİSTİK MOTORU ──────────────────────────────────────────────
// Tüm panel görselleştirmeleri tek bir saf fonksiyondan beslenir (test edilebilir).

/** Ustalık eşiği — accuracy bu değerin üstündeyse soru "ustalaşılmış" sayılır. */
export const MASTERY_THRESHOLD = 0.8;
/** Zayıflık eşiği — accuracy bu değerin altındaysa "zayıf". */
export const WEAK_THRESHOLD = 0.5;

export type LessonStat = {
  lesson: string;
  total: number;     // Bankadaki soru sayısı
  solved: number;    // En az 1 kez çözülen benzersiz soru
  attempts: number;  // Toplam cevaplama
  corrects: number;  // Toplam doğru
  accuracy: number;  // 0-100
  coverage: number;  // 0-100 (solved / total)
};

export type UnitStat = {
  lesson: string;
  unit: string;
  total: number;
  solved: number;
  attempts: number;
  corrects: number;
  accuracy: number;
};

export type OptionKey = 'A' | 'B' | 'C' | 'D' | 'E';

export type OverviewStats = {
  bankTotal: number;        // Bankadaki toplam soru
  solvedUnique: number;     // En az 1 kez çözülen benzersiz soru
  unsolvedUnique: number;   // Hiç çözülmemiş benzersiz soru
  wrongEverUnique: number;  // En az 1 kez yanlış yapılan benzersiz soru
  perfectUnique: number;    // Çözülmüş ve hiç yanlış yapılmamış soru
  masteredUnique: number;   // accuracy >= MASTERY_THRESHOLD olan çözülmüş soru
  totalAttempts: number;    // Toplam cevaplama (tekrarlar dahil)
  totalCorrects: number;
  totalIncorrects: number;
  accuracy: number;         // 0-100 (genel doğruluk)
  coverage: number;         // 0-100 (solvedUnique / bankTotal)
  weakCount: number;        // En az 2 deneme & accuracy < %50
  byLesson: LessonStat[];   // solved desc sıralı
  topLessonBySolved: LessonStat | null;
  topUnitBySolved: UnitStat | null;
  difficulty: { easy: number; medium: number; hard: number }; // çözülmüş sorular arası
  mastery: { untouched: number; weak: number; learning: number; mastered: number };
  wrongChoiceDist: Record<OptionKey, number>; // Yanlış cevaplarda seçilen şık dağılımı
};

/**
 * Soru bankası + istatistik haritasından kapsamlı genel bakış üretir.
 * Saf fonksiyon — DOM/localStorage erişimi yoktur (stats parametre olarak gelir).
 */
export function computeOverviewStats(questions: Question[], stats: StatsMap): OverviewStats {
  const bankTotal = questions.length;

  const lessonMap = new Map<string, LessonStat>();
  const unitMap = new Map<string, UnitStat>();

  let solvedUnique = 0;
  let wrongEverUnique = 0;
  let perfectUnique = 0;
  let masteredUnique = 0;
  let totalAttempts = 0;
  let totalCorrects = 0;

  const difficulty = { easy: 0, medium: 0, hard: 0 };
  const mastery = { untouched: 0, weak: 0, learning: 0, mastered: 0 };
  const wrongChoiceDist: Record<OptionKey, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };

  for (const q of questions) {
    // Ders kümeleme
    let ls = lessonMap.get(q.lesson);
    if (!ls) {
      ls = { lesson: q.lesson, total: 0, solved: 0, attempts: 0, corrects: 0, accuracy: 0, coverage: 0 };
      lessonMap.set(q.lesson, ls);
    }
    ls.total++;

    // Ünite kümeleme
    const unitKey = `${q.lesson} ${q.unit}`;
    let us = unitMap.get(unitKey);
    if (!us) {
      us = { lesson: q.lesson, unit: q.unit, total: 0, solved: 0, attempts: 0, corrects: 0, accuracy: 0 };
      unitMap.set(unitKey, us);
    }
    us.total++;

    const s = stats[q.id];
    if (!s || s.attempts <= 0) {
      mastery.untouched++;
      continue;
    }

    // Çözülmüş soru
    solvedUnique++;
    totalAttempts += s.attempts;
    totalCorrects += s.corrects;
    ls.solved++; ls.attempts += s.attempts; ls.corrects += s.corrects;
    us.solved++; us.attempts += s.attempts; us.corrects += s.corrects;

    const incorrects = s.attempts - s.corrects;
    const rate = s.corrects / s.attempts;

    if (incorrects > 0) wrongEverUnique++;
    else perfectUnique++;

    if (rate >= MASTERY_THRESHOLD) { masteredUnique++; mastery.mastered++; }
    else if (rate < WEAK_THRESHOLD) mastery.weak++;
    else mastery.learning++;

    // Zorluk (accuracy bazlı statik puan)
    const label = difficultyLabel(accuracyToDifficulty(s.corrects, s.attempts));
    difficulty[label]++;

    // Yanlış şık dağılımı
    for (const w of s.wrongChoices ?? []) {
      const k = w.selected as OptionKey;
      if (k in wrongChoiceDist) wrongChoiceDist[k]++;
    }
  }

  // Ders accuracy/coverage hesapla
  const byLesson = Array.from(lessonMap.values()).map(l => ({
    ...l,
    accuracy: Math.round((l.corrects / Math.max(1, l.attempts)) * 100),
    coverage: Math.round((l.solved / Math.max(1, l.total)) * 100),
  })).sort((a, b) => b.solved - a.solved || b.attempts - a.attempts);

  const units = Array.from(unitMap.values()).map(u => ({
    ...u,
    accuracy: Math.round((u.corrects / Math.max(1, u.attempts)) * 100),
  }));

  const topLessonBySolved = byLesson.find(l => l.solved > 0) ?? null;
  const topUnitBySolved = units
    .filter(u => u.solved > 0)
    .sort((a, b) => b.solved - a.solved || b.attempts - a.attempts)[0] ?? null;

  const totalIncorrects = totalAttempts - totalCorrects;

  return {
    bankTotal,
    solvedUnique,
    unsolvedUnique: bankTotal - solvedUnique,
    wrongEverUnique,
    perfectUnique,
    masteredUnique,
    totalAttempts,
    totalCorrects,
    totalIncorrects,
    accuracy: Math.round((totalCorrects / Math.max(1, totalAttempts)) * 100),
    coverage: Math.round((solvedUnique / Math.max(1, bankTotal)) * 100),
    weakCount: getWeakQuestionIdsFromMap(stats).length,
    byLesson,
    topLessonBySolved,
    topUnitBySolved,
    difficulty,
    mastery,
    wrongChoiceDist,
  };
}

/** getWeakQuestionIds'in saf (parametreli) varyantı — overview için. */
function getWeakQuestionIdsFromMap(stats: StatsMap, minAttempts = 2, maxCorrectRate = 0.5): string[] {
  return Object.entries(stats)
    .filter(([, stat]) => stat.attempts >= minAttempts && (stat.corrects / stat.attempts) < maxCorrectRate)
    .map(([id]) => id);
}

// ─── CLOUD SYNC ─────────────────────────────────────────────────────────────

/**
 * Modül seviyesinde güncel userId — App.tsx'ten auth değişiminde set edilir.
 * syncStatsUp/Down fonksiyonlarının hook bağımlılığı olmadan userId'a erişmesini sağlar.
 */
let currentSyncUserId: string | null = null;

/** Auth state değiştiğinde App.tsx tarafından çağrılır */
export function setSyncUserId(userId: string | null): void {
  currentSyncUserId = userId;
}

/** Pending sync varlığını kontrol eder — UI göstergesi için. */
export function hasPendingSync(): boolean {
  return localStorage.getItem(PENDING_SYNC_KEY) === '1';
}

/** Sync state değiştiğinde React katmanını bilgilendirmek için custom event. */
function notifySyncStatus(): void {
  try { window.dispatchEvent(new CustomEvent('dus:sync-status')); } catch { /* noop */ }
}

/** Local stats + activity_log + streak'i cloud'a push eder.
 *  @returns Soru istatistikleri için push sonucu (kısmi başarı raporlanır). */

// Race condition guard: aynı anda birden fazla syncStatsUp çağrısını birleştirir.
// activity_log/streak için "pull→merge→push" akışı paralel çalışırsa lost-update riski.
let _syncUpInFlight: Promise<PushStatsResult> | null = null;

export function syncStatsUp(opts?: { all?: boolean }): Promise<PushStatsResult> {
  if (_syncUpInFlight) return _syncUpInFlight;
  _syncUpInFlight = _doSyncStatsUp(opts?.all ?? false).finally(() => { _syncUpInFlight = null; });
  return _syncUpInFlight;
}

async function _doSyncStatsUp(all: boolean): Promise<PushStatsResult> {
  const deviceId = getDeviceId();
  const allStats = loadAllStats();
  const userId = currentSyncUserId ?? undefined;

  // Delta sync: giriş/full-push dışında yalnızca bu oturumda değişen soruları gönder
  const stats: Record<string, ReturnType<typeof loadAllStats>[string]> = all
    ? allStats
    : Object.fromEntries([..._dirtyIds].filter(id => allStats[id]).map(id => [id, allStats[id]]));

  // Soru istatistikleri
  const result = await pushStatsToCloud(deviceId, stats, userId);

  // Activity log + streak — yalnızca giriş yapılmışsa
  if (userId) {
    const [cloudActivityResult, cloudStreakResult] = await Promise.allSettled([
      pullUserData(userId, 'activity_log'),
      pullUserData(userId, 'streak'),
    ]);

    const activityToPush =
      cloudActivityResult.status === 'fulfilled' && cloudActivityResult.value != null
        ? mergeActivityLogs(loadActivityLog(), cloudActivityResult.value as ActivityLog)
        : loadActivityLog();
    const streakToPush =
      cloudStreakResult.status === 'fulfilled' && cloudStreakResult.value != null
        ? mergeStreakData(loadStreak(), cloudStreakResult.value as StreakData)
        : loadStreak();

    localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activityToPush));
    localStorage.setItem(STREAK_KEY, JSON.stringify(streakToPush));

    await Promise.allSettled([
      pushUserData(userId, 'activity_log', activityToPush).catch(e =>
        console.warn('[syncStatsUp] activity_log push:', e)
      ),
      pushUserData(userId, 'streak', streakToPush).catch(e =>
        console.warn('[syncStatsUp] streak push:', e)
      ),
    ]);
  }

  // Başarılı push sonrası dirty set'i temizle (hata varsa set korunur, sonraki flush tekrar dener)
  if (result.errors.length === 0) _dirtyIds.clear();

  return result;
}

/** Cloud'dan TÜM stats'ı çekip localState ile birleştirir.
 *  MAX-MERGE: Her alan için cloud ve local'den en güncel/yüksek olan alınır.
 *  Kazanan lastSeen en yeni olan; tie-break: attempts.
 *  Local'de olup cloud'da olmayan sorular korunur.
 */
/**
 * Cloud'dan TÜM verileri çekip local state ile birleştirir.
 * Soru istatistikleri + activity_log + streak paralel olarak sync edilir.
 * MAX-MERGE prensibi: her alan için en yüksek/en güncel değer alınır, veri kaybı sıfır.
 */
export async function syncStatsDown(): Promise<void> {
  if (!currentSyncUserId) return;

  // Bekleyen push varsa önce onu dene
  const hadPendingSync = localStorage.getItem(PENDING_SYNC_KEY) === '1';
  let pendingPushFailed = false;
  if (hadPendingSync) {
    try {
      await syncStatsUp();
      localStorage.removeItem(PENDING_SYNC_KEY);
      notifySyncStatus();
    } catch {
      pendingPushFailed = true;
    }
  }

  // B10: delta çekim — son başarılı pull'dan bu yana güncellenenler
  const STATS_LAST_PULL_KEY = 'stats_last_pull';
  const lastPull = localStorage.getItem(STATS_LAST_PULL_KEY) ?? undefined;
  const pullSince = lastPull && !pendingPushFailed ? lastPull : undefined; // push hatası varsa tam çekim yap
  const pullTimestamp = new Date().toISOString();

  // Tüm cloud verilerini paralel çek
  const [cloudStatsResult, cloudActivityResult, cloudStreakResult] = await Promise.allSettled([
    pullAllDeviceStats(currentSyncUserId, pullSince),
    pullUserData(currentSyncUserId, 'activity_log'),
    pullUserData(currentSyncUserId, 'streak'),
  ]);

  // ── Soru istatistikleri merge ──────────────────────────────────────────────
  if (cloudStatsResult.status === 'fulfilled') {
    const allCloudStats = cloudStatsResult.value;
    if (Object.keys(allCloudStats).length > 0) {
      let nextStats: StatsMap = allCloudStats;

      if (pendingPushFailed) {
        const localStats = loadAllStats();
        nextStats = { ...localStats };
        for (const [id, cloud] of Object.entries(allCloudStats)) {
          const local = localStats[id];
          const cloudSeen = cloud.lastSeen ?? '';
          const localSeen = local?.lastSeen ?? '';
          const cloudWins = !local || cloudSeen > localSeen ||
            (cloudSeen === localSeen && cloud.attempts > (local?.attempts ?? 0));
          const attempts = Math.max(cloud.attempts, local?.attempts ?? 0);
          const corrects = Math.max(cloud.corrects, local?.corrects ?? 0);
          nextStats[id] = {
            attempts,
            corrects,
            lastSeen: [cloudSeen, localSeen].sort().reverse()[0],
            difficulty: (cloudWins ? cloud.difficulty : local?.difficulty) ?? accuracyToDifficulty(corrects, attempts),
            wrongChoices: mergeWrongChoices(local?.wrongChoices ?? [], cloud.wrongChoices ?? []),
            // Kazananın geçmişini al — birleştirme yerine, aynı oturum verilerinin
            // kat kat çoğalmasını (her sync'te ikiye katlanma) önler.
            timeSpentHistory: cloudWins
              ? (cloud.timeSpentHistory ?? [])
              : (local?.timeSpentHistory ?? []),
          };
        }
      }

      safeWriteStats(nextStats);
    }
  }

  // ── Activity log merge ─────────────────────────────────────────────────────
  if (cloudActivityResult.status === 'fulfilled' && cloudActivityResult.value != null) {
    const mergedLog = mergeActivityLogs(loadActivityLog(), cloudActivityResult.value as ActivityLog);
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify(mergedLog));
  }

  // G4 fix: activity max-merge aynı günde iki cihaz çözmesi durumunda sayaç düşürür.
  // _mergeActivityFromStats her zaman çalıştırılır; stat lastSeen'lerinden türetilen
  // gerçek çözüm sayısı alt sınır olarak mevcut activity'ye uygulanır (asla düşürmez).
  const latestStats = loadAllStats();
  if (Object.keys(latestStats).length > 0) {
    _mergeActivityFromStats(latestStats);
  }

  // ── Streak merge ───────────────────────────────────────────────────────────
  if (cloudStreakResult.status === 'fulfilled' && cloudStreakResult.value != null) {
    const merged = mergeStreakData(loadStreak(), cloudStreakResult.value as StreakData);
    localStorage.setItem(STREAK_KEY, JSON.stringify(merged));
  }

  // B10: başarılı pull → zaman damgasını kaydet (bir sonraki pull'da delta kullanılır)
  if (cloudStatsResult.status === 'fulfilled') {
    localStorage.setItem(STATS_LAST_PULL_KEY, pullTimestamp);
  }
}

/**
 * Soru istatistiklerinin `lastSeen` değerlerini tarayarak aktivite logunu günceller.
 * Cross-device sync sonrasında çağrılır; yerel loga yansımayan günlerin sayacını düzeltir.
 * Sadece artış yönünde günceller (mevcut sayıyı asla düşürmez).
 */
function _mergeActivityFromStats(stats: StatsMap): void {
  const log = loadActivityLog();

  // Her tarih için kaç benzersiz soru "son görüldü" — alt sınır tahmini
  const perDate: Record<string, { total: number; wrong: number }> = {};
  for (const s of Object.values(stats)) {
    if (!s.lastSeen) continue;
    const date = s.lastSeen.split('T')[0]; // YYYY-MM-DD
    if (!perDate[date]) perDate[date] = { total: 0, wrong: 0 };
    perDate[date].total += 1;
  }

  // wrongChoices zaman damgalarından günlük yanlış sayısını çıkar
  for (const s of Object.values(stats)) {
    for (const wc of s.wrongChoices ?? []) {
      if (!wc.timestamp) continue;
      const date = wc.timestamp.split('T')[0];
      if (!perDate[date]) perDate[date] = { total: 0, wrong: 0 };
      perDate[date].wrong += 1;
    }
  }

  let modified = false;
  for (const [date, counts] of Object.entries(perDate)) {
    const existing = normalizeActivity(log[date]);
    if (counts.total > existing.total) {
      const wrong = Math.min(counts.wrong, counts.total);
      log[date] = {
        total: counts.total,
        correct: Math.max(existing.correct, counts.total - wrong),
        incorrect: Math.max(existing.incorrect, wrong),
        byLesson: existing.byLesson,
      };
      modified = true;
    }
  }
  if (modified) localStorage.setItem(ACTIVITY_KEY, JSON.stringify(log));
}

export function mergeWrongChoices(a: WrongChoice[], b: WrongChoice[]): WrongChoice[] {
  const seen = new Set<string>();
  const out: WrongChoice[] = [];
  for (const w of [...a, ...b]) {
    const key = `${w.timestamp}|${w.selected}`;
    if (!seen.has(key)) {
      seen.add(key);
      out.push(w);
    }
  }
  return out.sort((x, y) => x.timestamp.localeCompare(y.timestamp));
}

/** İki timeSpentHistory dizisini birleştirir (son 50 kayıt). */
export function mergeTimeSpentHistory(a: number[], b: number[]): number[] {
  return [...a, ...b].slice(-50);
}

// ─── DEBOUNCED SYNC ─────────────────────────────────────────────────────────

let syncTimer: ReturnType<typeof setTimeout> | null = null;

function debouncedSyncUp(): void {
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    syncTimer = null;
    syncStatsUp()
      .then(() => {
        localStorage.removeItem(PENDING_SYNC_KEY);
        notifySyncStatus();
      })
      .catch(err => {
        console.warn('[debouncedSyncUp] Sync hatası:', err);
        localStorage.setItem(PENDING_SYNC_KEY, '1');
        notifySyncStatus();
      });
  }, 5000);
}

class SyncManagerImpl {
  async flush(): Promise<void> {
    if (syncTimer) {
      clearTimeout(syncTimer);
      syncTimer = null;
    }
    try {
      await syncStatsUp();
      localStorage.removeItem(PENDING_SYNC_KEY);
      notifySyncStatus();
    } catch (err) {
      console.warn('[SyncManager] Push başarısız:', err);
      localStorage.setItem(PENDING_SYNC_KEY, '1');
      notifySyncStatus();
    }
  }
}

export const SyncManager = new SyncManagerImpl();

/**
 * Uygulama mount'unda bir kez çağrılır.
 * - visibilitychange: sekme gizlenince timer'daki bekleyen sync'i anında gönderir
 * - online: ağ geri gelince pending sync'i yeniden dener
 * Cleanup fonksiyonu döner (React useEffect return).
 */
export function setupSyncHandlers(): () => void {
  const handleVisibility = () => {
    if (document.visibilityState !== 'hidden') return;
    // Debounce timer'ı iptal et ve anında gönder (tab kapatılma / sayfa geçişi)
    if (syncTimer) {
      clearTimeout(syncTimer);
      syncTimer = null;
      syncStatsUp()
        .then(() => {
          localStorage.removeItem(PENDING_SYNC_KEY);
          notifySyncStatus();
        })
        .catch(() => {
          localStorage.setItem(PENDING_SYNC_KEY, '1');
          notifySyncStatus();
        });
    }
  };

  const handleOnline = () => {
    if (localStorage.getItem(PENDING_SYNC_KEY) !== '1') return;
    syncStatsUp()
      .then(() => {
        localStorage.removeItem(PENDING_SYNC_KEY);
        notifySyncStatus();
      })
      .catch(() => { /* bir sonraki online event'te tekrar dener */ });
  };

  document.addEventListener('visibilitychange', handleVisibility);
  window.addEventListener('online', handleOnline);

  return () => {
    document.removeEventListener('visibilitychange', handleVisibility);
    window.removeEventListener('online', handleOnline);
  };
}

// ─── KPI TREND ──────────────────────────────────────────────────────────────

export type TrendDirection = 'up' | 'down' | 'flat';
export type TrendResult = {
  direction: TrendDirection;
  delta: number;
  deltaPct: number;
};

/**
 * İki değer arasındaki trendi hesaplar.
 * Örn. bu hafta 240 vs geçen hafta 200 → { direction:'up', delta:40, deltaPct:20 }
 */
export function computeTrend(current: number, previous: number): TrendResult {
  const delta = current - previous;
  const deltaPct = previous > 0 ? Math.round((delta / previous) * 100) : (current > 0 ? 100 : 0);
  const direction: TrendDirection = delta > 0 ? 'up' : delta < 0 ? 'down' : 'flat';
  return { direction, delta, deltaPct };
}

/** Son N gün vs önceki N gün trendi (toplam çözüm sayısı üzerinden). */
export function computeActivityTrend(activity: ActivityPoint[], days: number): TrendResult {
  const recent = activity.slice(-days).reduce((s, a) => s + a.count, 0);
  const prev = activity.slice(-days * 2, -days).reduce((s, a) => s + a.count, 0);
  return computeTrend(recent, prev);
}

// ─── KPI ALERTS ──────────────────────────────────────────────────────────────

export type KpiAlertLevel = 'critical' | 'warning' | 'success';
export type KpiAlert = {
  level: KpiAlertLevel;
  message: string;
  metric: string;
};

const CRITICAL_ACCURACY = 40;
const WARNING_ACCURACY = 55;
const CRITICAL_COVERAGE = 20;
const WARNING_COVERAGE = 35;
const TARGET_DAILY = 200;
const TARGET_ACCURACY = 80;
const TARGET_COVERAGE = 90;
const TARGET_MASTERED = 5000;
const TARGET_SOLVED = 10000;

/**
 * Overview + streak + aktiviteden anlamlı KPI alert'leri üretir.
 * Eşik bazlı: accuracy düşük dersler, coverage kritik üniteler, streak riski, hedef açığı.
 */
export function generateKpiAlerts(
  overview: OverviewStats,
  streak: StreakData,
  activity: ActivityPoint[],
): KpiAlert[] {
  const alerts: KpiAlert[] = [];

  // Bugünkü performans
  const today = activity[activity.length - 1];
  if (today && today.count > 0) {
    const todayPct = Math.round((today.count / TARGET_DAILY) * 100);
    if (todayPct < 50) {
      alerts.push({
        level: 'warning',
        message: `Bugünkü hedefin %${todayPct}'i — ${today.count}/${TARGET_DAILY} soru`,
        metric: 'daily_target',
      });
    } else if (todayPct >= 100) {
      alerts.push({
        level: 'success',
        message: `Günlük hedef tamamlandı: ${today.count} soru ✓`,
        metric: 'daily_target',
      });
    }
  } else {
    alerts.push({
      level: 'critical',
      message: 'Bugün henüz soru çözülmedi — seri riski!',
      metric: 'daily_target',
    });
  }

  // Genel doğruluk
  if (overview.accuracy < CRITICAL_ACCURACY) {
    alerts.push({
      level: 'critical',
      message: `Genel doğruluk kritik seviyede: %${overview.accuracy} (hedef: %${TARGET_ACCURACY})`,
      metric: 'accuracy',
    });
  } else if (overview.accuracy < WARNING_ACCURACY) {
    alerts.push({
      level: 'warning',
      message: `Genel doğruluk düşük: %${overview.accuracy} (hedef: %${TARGET_ACCURACY})`,
      metric: 'accuracy',
    });
  }

  // Kapsama
  if (overview.coverage < CRITICAL_COVERAGE) {
    alerts.push({
      level: 'critical',
      message: `Kapsama kritik seviyede: %${overview.coverage} — banka henüz taranmamış`,
      metric: 'coverage',
    });
  } else if (overview.coverage < WARNING_COVERAGE) {
    alerts.push({
      level: 'warning',
      message: `Kapsama düşük: %${overview.coverage} (hedef: %${TARGET_COVERAGE})`,
      metric: 'coverage',
    });
  }

  // Seri riski (dün çalışılmamışsa)
  const yesterday = activity[activity.length - 2];
  if (yesterday && yesterday.count === 0 && today && today.count === 0) {
    alerts.push({
      level: 'critical',
      message: '2 gündür soru çözülmedi — seri kopma riski!',
      metric: 'streak',
    });
  }

  // Seri milestone'ları
  if (streak.currentStreak > 0 && streak.currentStreak % 50 === 0) {
    alerts.push({
      level: 'success',
      message: `Seri kilometre taşı: ${streak.currentStreak} gün! 🔥`,
      metric: 'streak',
    });
  }

  // Ders bazlı uyarılar (accuracy < %50 olanlar)
  for (const l of overview.byLesson) {
    if (l.solved > 10 && l.accuracy < CRITICAL_ACCURACY) {
      alerts.push({
        level: 'critical',
        message: `${l.lesson}: Doğruluk %${l.accuracy} — acil tekrar gerekli`,
        metric: `lesson_${l.lesson}`,
      });
    } else if (l.solved > 20 && l.accuracy < WARNING_ACCURACY) {
      alerts.push({
        level: 'warning',
        message: `${l.lesson}: Doğruluk %${l.accuracy} — ek çalışma önerilir`,
        metric: `lesson_${l.lesson}`,
      });
    }
  }

  // Hedef ilerleme durumu
  const solvedToTarget = Math.round((overview.solvedUnique / TARGET_SOLVED) * 100);
  if (solvedToTarget >= 90) {
    alerts.push({
      level: 'success',
      message: `10.000 soru hedefinin %${solvedToTarget}'i tamamlandı!`,
      metric: 'target_10k',
    });
  }
  const masteredToTarget = Math.round((overview.masteredUnique / TARGET_MASTERED) * 100);
  if (masteredToTarget >= 90) {
    alerts.push({
      level: 'success',
      message: `5.000 uzmanlaşma hedefinin %${masteredToTarget}'i tamamlandı!`,
      metric: 'target_5k',
    });
  }

  return alerts.slice(0, 5); // Max 5 alert
}

/** Tüm istatistikleri tamamen sıfırlar: localStorage + cloud. */
export async function resetAllStats(): Promise<void> {
  localStorage.removeItem(STATS_KEY);
  localStorage.removeItem(STREAK_KEY);
  localStorage.removeItem(ACTIVITY_KEY);
  await clearDeviceStats(getDeviceId(), currentSyncUserId ?? undefined);
}
