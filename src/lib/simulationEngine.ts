/**
 * DUS Bankası — DUS Simülasyon Motoru (Gerçek DUS Formatı)
 *
 * Gerçek DUS Sınav Mimarisi:
 * - Toplam 120 Soru (40 Temel Bilimler, 80 Klinik Bilimler).
 * - Soru Dağılımı:
 *     Temel Bilimler (1-40):
 *       - Anatomi: 6 soru
 *       - Histoloji: 4 soru (Fizyo ile toplam 10)
 *       - Fizyoloji: 6 soru (Histo ile toplam 10)
 *       - Biyokimya: 10 soru
 *       - Mikrobiyoloji: 6 soru
 *       - Patoloji: 4 soru
 *       - Farmakoloji: 4 soru
 *     Klinik Bilimler (41-120):
 *       - 8 Klinik ders x 10 soru = 80 soru
 *       (Protez, Restoratif, Cerrahi, Radyoloji, Periodontoloji, Ortodonti, Endodonti, Pedodonti)
 * - Sıralama: ÖSYM kitapçık sırasına birebir uygun.
 * - Simülasyonda doğru yapılan sorular sonraki simülasyon havuzlarından elenir.
 * - Boş ve yanlış bırakılan sorular sonraki 5 simülasyona dengeli dağıtılır.
 * - Net formülü: Doğru - Yanlış / 4.
 * - Fizyoloji ve Histoloji analiz istatistiği kesinlikle bir tutulur ('Fizyoloji - Histoloji').
 */

import type { Question } from '../data';
import type { AnswerDetail } from '../types/app';
import { loadAllStats, type QuestionStat } from './stats';

export interface SubjectQuota {
  key: string;
  name: string;
  aliases: string[];
  count: number;
  category: 'temel' | 'klinik';
  displayOrder: number;
}

export const DUS_SUBJECT_QUOTAS: readonly SubjectQuota[] = [
  // ── Temel Bilimler (40 Soru) ──
  { key: 'Anatomi', name: 'Anatomi', aliases: ['anatomi'], count: 6, category: 'temel', displayOrder: 1 },
  { key: 'Histoloji', name: 'Histoloji', aliases: ['histoloji', 'histoloji ve embriyoloji', 'embriyoloji'], count: 4, category: 'temel', displayOrder: 2 },
  { key: 'Fizyoloji', name: 'Fizyoloji', aliases: ['fizyoloji'], count: 6, category: 'temel', displayOrder: 3 },
  { key: 'Biyokimya', name: 'Biyokimya', aliases: ['biyokimya', 'tıbbi biyokimya'], count: 10, category: 'temel', displayOrder: 4 },
  { key: 'Mikrobiyoloji', name: 'Mikrobiyoloji', aliases: ['mikrobiyoloji', 'tıbbi mikrobiyoloji'], count: 6, category: 'temel', displayOrder: 5 },
  { key: 'Patoloji', name: 'Patoloji', aliases: ['patoloji', 'tıbbi patoloji'], count: 4, category: 'temel', displayOrder: 6 },
  { key: 'Farmakoloji', name: 'Farmakoloji', aliases: ['farmakoloji', 'tıbbi farmakoloji'], count: 4, category: 'temel', displayOrder: 7 },

  // ── Klinik Bilimler (80 Soru — DUS 2020 Gerçek Kitapçık Sırası) ──
  { key: 'Restoratif', name: 'Restoratif', aliases: ['restoratif', 'restoratif diş tedavisi', 'diş hastalıkları ve tedavisi'], count: 10, category: 'klinik', displayOrder: 8 },
  { key: 'Protez', name: 'Protez', aliases: ['protez', 'protetik diş tedavisi'], count: 10, category: 'klinik', displayOrder: 9 },
  { key: 'Cerrahi', name: 'Cerrahi', aliases: ['cerrahi', 'ağız diş çene cerrahisi', 'ağız, diş ve çene cerrahisi'], count: 10, category: 'klinik', displayOrder: 10 },
  { key: 'Radyoloji', name: 'Radyoloji', aliases: ['radyoloji', 'ağız diş ve çene radyolojisi', 'oral diagnoz ve radyoloji'], count: 10, category: 'klinik', displayOrder: 11 },
  { key: 'Periodontoloji', name: 'Periodontoloji', aliases: ['periodontoloji'], count: 10, category: 'klinik', displayOrder: 12 },
  { key: 'Ortodonti', name: 'Ortodonti', aliases: ['ortodonti'], count: 10, category: 'klinik', displayOrder: 13 },
  { key: 'Endodonti', name: 'Endodonti', aliases: ['endodonti'], count: 10, category: 'klinik', displayOrder: 14 },
  { key: 'Pedodonti', name: 'Pedodonti', aliases: ['pedodonti', 'çocuk diş hekimliği', 'pedodonti cikmis'], count: 10, category: 'klinik', displayOrder: 15 },
];

export const TOTAL_SIMULATION_QUESTIONS = 120;
export const TEMEL_BILIMLER_COUNT = 40;
export const KLINIK_BILIMLER_COUNT = 80;

// LocalStorage anahtarları
export const SIM_MASTERED_KEY = 'dus_sim_mastered_ids';
export const SIM_RETRY_SCHEDULE_KEY = 'dus_sim_retry_schedule';

/**
 * Bir ders adını kanonik ders anahtarına çözer
 */
export function resolveCanonicalLesson(lesson: string): string {
  if (!lesson) return 'Diğer';
  const clean = lesson.trim().toLowerCase();
  for (const q of DUS_SUBJECT_QUOTAS) {
    if (q.key.toLowerCase() === clean) return q.key;
    if (q.aliases.some(alias => clean.includes(alias) || alias.includes(clean))) {
      return q.key;
    }
  }
  return lesson;
}

/**
 * Doğru yapılan soruların id listesini döner
 */
export function getMasteredSimulationIds(): Set<string> {
  try {
    const raw = localStorage.getItem(SIM_MASTERED_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

/**
 * Doğru yapılan soru id'lerini saklar
 */
export function addMasteredSimulationIds(ids: string[]): void {
  if (!ids || ids.length === 0) return;
  try {
    const current = getMasteredSimulationIds();
    for (const id of ids) {
      if (id) current.add(id);
    }
    localStorage.setItem(SIM_MASTERED_KEY, JSON.stringify(Array.from(current)));
  } catch (e) {
    console.error('[simulationEngine] addMasteredSimulationIds hatası:', e);
  }
}

/**
 * Sonraki 5 denemeye ait tekrar planını döner (5 slotluk dizi)
 */
export function getSimulationRetrySchedule(): string[][] {
  try {
    const raw = localStorage.getItem(SIM_RETRY_SCHEDULE_KEY);
    if (!raw) return [[], [], [], [], []];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length === 5) {
      return parsed.map(slot => (Array.isArray(slot) ? slot : []));
    }
    // Eğer 5'ten farklı uzunlukta ise 5 slota genişlet veya kısalt
    const res: string[][] = [[], [], [], [], []];
    if (Array.isArray(parsed)) {
      for (let i = 0; i < 5; i++) {
        res[i] = Array.isArray(parsed[i]) ? parsed[i] : [];
      }
    }
    return res;
  } catch {
    return [[], [], [], [], []];
  }
}

/**
 * Tekrar planını kaydeder
 */
export function saveSimulationRetrySchedule(schedule: string[][]): void {
  try {
    const normalized: string[][] = [[], [], [], [], []];
    for (let i = 0; i < 5; i++) {
      normalized[i] = Array.isArray(schedule[i]) ? schedule[i] : [];
    }
    localStorage.setItem(SIM_RETRY_SCHEDULE_KEY, JSON.stringify(normalized));
  } catch (e) {
    console.error('[simulationEngine] saveSimulationRetrySchedule hatası:', e);
  }
}

/**
 * Boş ve yanlış soruları sonraki 5 denemeye dengeli dağıtır.
 * Branş bazında gruplanarak round-robin paylaştırılır.
 */
export function scheduleSimulationRetries(
  mistakes: Array<{ id: string; lesson: string }>
): void {
  if (!mistakes || mistakes.length === 0) return;

  const schedule = getSimulationRetrySchedule();

  // Branş bazında grupla
  const byLesson = new Map<string, string[]>();
  for (const m of mistakes) {
    if (!m?.id) continue;
    const l = resolveCanonicalLesson(m.lesson);
    if (!byLesson.has(l)) byLesson.set(l, []);
    byLesson.get(l)!.push(m.id);
  }

  // Her dersin sorularını 5 slota round-robin dağıt
  let cursor = 0;
  for (const [, ids] of byLesson) {
    for (const id of ids) {
      schedule[cursor % 5].push(id);
      cursor++;
    }
  }

  saveSimulationRetrySchedule(schedule);
}

/**
 * Sıradaki deneme için bekleyen tekrar sorularını döner ve planı bir adım öne kaydırır.
 */
export function popNextSimulationRetryBatch(): string[] {
  const schedule = getSimulationRetrySchedule();
  const nextBatch = schedule[0] || [];
  const updatedSchedule: string[][] = [
    schedule[1] || [],
    schedule[2] || [],
    schedule[3] || [],
    schedule[4] || [],
    [],
  ];
  saveSimulationRetrySchedule(updatedSchedule);
  return nextBatch;
}

/**
 * DUS Simülasyonu Soru Hariç Tutma (Exclusion) Kuralı:
 * "Son 1 hafta içinde herhangi bir modda çözülmüş ve daha önce en az 2 kez doğru yapılmış
 * hiç yanlış yapılmamış bir soru dus simülasyona dahil edilmeyecektir."
 *
 * @param questionId Soru ID'si
 * @param stat Soru istatistiği (attempts, corrects, lastSeen, wrongChoices)
 * @param nowMs Referans zamanı (varsayılan: Date.now())
 * @returns boolean Soru simülasyondan hariç tutulmalı mı?
 */
export function isExcludedFromDusSimulation(
  _questionId: string,
  stat?: QuestionStat | null,
  nowMs: number = Date.now()
): boolean {
  if (!stat || !stat.attempts || stat.attempts < 2) {
    return false;
  }

  // 1. Daha önce en az 2 kez doğru yapılmış mı?
  if ((stat.corrects || 0) < 2) {
    return false;
  }

  // 2. Hiç yanlış yapılmamış mı? (0 yanlış)
  const incorrectCount = Math.max(0, stat.attempts - (stat.corrects || 0));
  const wrongChoicesCount = stat.wrongChoices ? stat.wrongChoices.length : 0;
  if (incorrectCount > 0 || wrongChoicesCount > 0) {
    return false;
  }

  // 3. Son 1 hafta (7 gün) içinde herhangi bir modda çözülmüş mü?
  if (!stat.lastSeen) {
    return false;
  }
  const lastSeenMs = new Date(stat.lastSeen).getTime();
  if (isNaN(lastSeenMs)) {
    return false;
  }

  const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
  const elapsed = nowMs - lastSeenMs;
  const isWithinLastWeek = elapsed >= 0 && elapsed <= ONE_WEEK_MS;

  return isWithinLastWeek;
}

export interface BuildSimulationPoolOptions {
  consumeRetryBatch?: boolean; // varsayılan true
  customRetryIds?: string[];   // test veya özel enjeksiyon için
  stats?: Record<string, QuestionStat>; // test veya özel istatistik haritası
  nowMs?: number;              // referans zamanı
}

/**
 * DUS Simülasyonu soru havuzunu oluşturur:
 * - Sorular denemelerden, çıkmışlardan, favorilerden, normal ünite sorularından ve
 *   daha önce çözülüp yanlış yapılmışlardan seçilebilir.
 * - Hariç Tutma Kuralı: Son 1 hafta içinde herhangi bir modda çözülmüş, en az 2 kez doğru yapılmış
 *   ve hiç yanlış yapılmamış sorular simülasyona DAHİL EDİLMEZ.
 * - 120 soru (40 Temel, 80 Klinik) DUS 2020 orijinal kitapçık sırasıyla dizilir.
 */
export function buildDusSimulationPool(
  allQuestions: Question[],
  options?: BuildSimulationPoolOptions
): Question[] {
  if (!allQuestions || allQuestions.length === 0) return [];

  const shouldConsume = options?.consumeRetryBatch !== false;
  const retryIds = options?.customRetryIds ?? (shouldConsume ? popNextSimulationRetryBatch() : []);

  // İstatistik haritasını al (verilmemişse localStorage'dan yükle)
  const stats = options?.stats ?? (typeof window !== 'undefined' || typeof localStorage !== 'undefined' ? loadAllStats() : {});
  const nowMs = options?.nowMs ?? Date.now();

  // "YANLIŞLARIM" dersi havuz dışıdır; tüm diğer kaynaklar (denemeler, çıkmışlar, favoriler, ünite soruları) dahildir!
  const eligibleAll = allQuestions.filter(
    q => q.lesson && q.lesson.trim().toUpperCase() !== 'YANLIŞLARIM'
  );

  const questionMap = new Map<string, Question>();
  for (const q of eligibleAll) {
    questionMap.set(q.id, q);
  }

  // Hariç tutulacak soruları tespit et:
  // Kural: Son 1 haftada çözülmüş VE >=2 kez doğru VE 0 yanlış
  const excludedIds = new Set<string>();
  for (const q of eligibleAll) {
    if (isExcludedFromDusSimulation(q.id, stats[q.id], nowMs)) {
      excludedIds.add(q.id);
    }
  }

  // Derslere göre soru sepetleri oluştur
  const lessonBuckets = new Map<string, Question[]>();
  for (const q of eligibleAll) {
    const l = resolveCanonicalLesson(q.lesson);
    if (!lessonBuckets.has(l)) lessonBuckets.set(l, []);
    lessonBuckets.get(l)!.push(q);
  }

  // Seçilen soruları toplayacağımız yapı (ders anahtarına göre)
  const selectedBySubject = new Map<string, Question[]>();
  const usedIdSet = new Set<string>();

  // 1. ADIM: Tekrar sorularını ait oldukları branşlara yerleştir
  for (const retryId of retryIds) {
    const q = questionMap.get(retryId);
    if (!q) continue;
    const l = resolveCanonicalLesson(q.lesson);
    const quota = DUS_SUBJECT_QUOTAS.find(sq => sq.key === l);
    if (!quota) continue;

    if (!selectedBySubject.has(l)) selectedBySubject.set(l, []);
    const currentList = selectedBySubject.get(l)!;

    // Kotayı aşmayacak şekilde ekle
    if (currentList.length < quota.count && !usedIdSet.has(q.id)) {
      currentList.push(q);
      usedIdSet.add(q.id);
    }
  }

  // 2. ADIM: Her branşın kotasını hariç tutulmamış (eligible) sorulardan doldur
  // Fizyoloji ve Histoloji esnek paylaşımı (toplam 10)
  const histoTarget = 4;
  const physioTarget = 6;
  const histoAvailable = (lessonBuckets.get('Histoloji') || []).filter(q => !usedIdSet.has(q.id));
  const physioAvailable = (lessonBuckets.get('Fizyoloji') || []).filter(q => !usedIdSet.has(q.id));

  let actualHistoQuota = histoTarget;
  let actualPhysioQuota = physioTarget;

  if (histoAvailable.length < histoTarget) {
    actualHistoQuota = histoAvailable.length;
    actualPhysioQuota = Math.min(10 - actualHistoQuota, physioAvailable.length);
  } else if (physioAvailable.length < physioTarget) {
    actualPhysioQuota = physioAvailable.length;
    actualHistoQuota = Math.min(10 - actualPhysioQuota, histoAvailable.length);
  }

  for (const quota of DUS_SUBJECT_QUOTAS) {
    const l = quota.key;
    if (!selectedBySubject.has(l)) selectedBySubject.set(l, []);
    const selected = selectedBySubject.get(l)!;

    let targetCount = quota.count;
    if (l === 'Histoloji') targetCount = actualHistoQuota;
    if (l === 'Fizyoloji') targetCount = actualPhysioQuota;

    const needed = targetCount - selected.length;
    if (needed <= 0) continue;

    const pool = lessonBuckets.get(l) || [];

    // Hariç tutulmamış ve henüz bu simülasyonda seçilmemiş sorular
    const nonExcludedPool = pool.filter(q => !excludedIds.has(q.id) && !usedIdSet.has(q.id));
    const shuffledNonExcluded = shuffleArray([...nonExcludedPool]);

    const takeCount = Math.min(needed, shuffledNonExcluded.length);
    for (let i = 0; i < takeCount; i++) {
      const q = shuffledNonExcluded[i];
      selected.push(q);
      usedIdSet.add(q.id);
    }

    // Eğer havuz yetersiz kaldıysa (tüm sorular hariç tutulmuşsa), mecburen kalan kısımları tamamla
    const stillNeeded = targetCount - selected.length;
    if (stillNeeded > 0) {
      const fallbackPool = pool.filter(q => !usedIdSet.has(q.id));
      const shuffledFallback = shuffleArray([...fallbackPool]);
      const takeFallback = shuffledFallback.slice(0, stillNeeded);
      for (const q of takeFallback) {
        selected.push(q);
        usedIdSet.add(q.id);
      }
    }
  }

  // 3. ADIM: Soruları gerçek DUS 2020 ÖSYM kitapçık sırasına göre diz
  // DUS 2020 Orijinal Kitapçık Dağılımı:
  // Temel Bilimler (1 - 40):
  //   1-6: Anatomi (6 soru)
  //   7-10: Histoloji ve Embriyoloji (4 soru)
  //   11-16: Fizyoloji (6 soru)
  //   17-22: Biyokimya (1. Kısım: 6 soru)
  //   23-28: Mikrobiyoloji (6 soru)
  //   29-32: Patoloji (4 soru)
  //   33-36: Farmakoloji (4 soru)
  //   37-40: Biyokimya / Tıbbi Biyoloji & Genetik (2. Kısım: 4 soru)
  // Klinik Bilimler (41 - 120):
  //   41-50: Restoratif Diş Tedavisi (10 soru)
  //   51-60: Protetik Diş Tedavisi (10 soru)
  //   61-70: Ağız, Diş ve Çene Cerrahisi (10 soru)
  //   71-80: Ağız, Diş ve Çene Radyolojisi (10 soru)
  //   81-90: Periodontoloji (10 soru)
  //   91-100: Ortodonti (10 soru)
  //   101-110: Endodonti (10 soru)
  //   111-120: Pedodonti (10 soru)

  const anatomi = shuffleArray(selectedBySubject.get('Anatomi') || []);
  const histoloji = shuffleArray(selectedBySubject.get('Histoloji') || []);
  const fizyoloji = shuffleArray(selectedBySubject.get('Fizyoloji') || []);
  const biyokimya = shuffleArray(selectedBySubject.get('Biyokimya') || []);
  const mikrobiyoloji = shuffleArray(selectedBySubject.get('Mikrobiyoloji') || []);
  const patoloji = shuffleArray(selectedBySubject.get('Patoloji') || []);
  const farmakoloji = shuffleArray(selectedBySubject.get('Farmakoloji') || []);

  const restoratif = shuffleArray(selectedBySubject.get('Restoratif') || []);
  const protez = shuffleArray(selectedBySubject.get('Protez') || []);
  const cerrahi = shuffleArray(selectedBySubject.get('Cerrahi') || []);
  const radyoloji = shuffleArray(selectedBySubject.get('Radyoloji') || []);
  const periodontoloji = shuffleArray(selectedBySubject.get('Periodontoloji') || []);
  const ortodonti = shuffleArray(selectedBySubject.get('Ortodonti') || []);
  const endodonti = shuffleArray(selectedBySubject.get('Endodonti') || []);
  const pedodonti = shuffleArray(selectedBySubject.get('Pedodonti') || []);

  // Biyokimya 10 sorusunu 6 ve 4 olarak böl (DUS 2020 formatı)
  const biyokimyaBlok1 = biyokimya.slice(0, 6);
  const biyokimyaBlok2 = biyokimya.slice(6);

  const finalOrderedQuestions: Question[] = [
    // 1-6: Anatomi (6)
    ...anatomi,
    // 7-10: Histoloji (4)
    ...histoloji,
    // 11-16: Fizyoloji (6)
    ...fizyoloji,
    // 17-22: Biyokimya (6)
    ...biyokimyaBlok1,
    // 23-28: Mikrobiyoloji (6)
    ...mikrobiyoloji,
    // 29-32: Patoloji (4)
    ...patoloji,
    // 33-36: Farmakoloji (4)
    ...farmakoloji,
    // 37-40: Biyokimya / Tıbbi Biyoloji & Genetik (4)
    ...biyokimyaBlok2,

    // 41-50: Restoratif (10)
    ...restoratif,
    // 51-60: Protez (10)
    ...protez,
    // 61-70: Cerrahi (10)
    ...cerrahi,
    // 71-80: Radyoloji (10)
    ...radyoloji,
    // 81-90: Periodontoloji (10)
    ...periodontoloji,
    // 91-100: Ortodonti (10)
    ...ortodonti,
    // 101-110: Endodonti (10)
    ...endodonti,
    // 111-120: Pedodonti (10)
    ...pedodonti,
  ];

  return finalOrderedQuestions;
}

/**
 * DUS Net hesaplama: Doğru - Yanlış / 4
 */
export function computeSimulationNet(correct: number, incorrect: number): number {
  const net = correct - incorrect / 4;
  return Math.round(net * 100) / 100;
}

export interface BranchStat {
  branch: string;
  category: 'temel' | 'klinik';
  total: number;
  correct: number;
  incorrect: number;
  blank: number;
  net: number;
  accuracy: number;
}

/**
 * DUS Simülasyonu branş bazlı analizi:
 * DİKKAT: "fizyoloji ve histoloji istatistiği bir tutulur ayrılmaz."
 */
export function computeSimulationBranchStats(details: AnswerDetail[]): BranchStat[] {
  const branchMap = new Map<string, { category: 'temel' | 'klinik'; correct: number; incorrect: number; blank: number; total: number }>();

  for (const d of details) {
    const rawLesson = d.question.lesson;
    let branch = resolveCanonicalLesson(rawLesson);

    // KURAL: Fizyoloji ve Histoloji bir tutulur!
    if (branch === 'Fizyoloji' || branch === 'Histoloji') {
      branch = 'Fizyoloji - Histoloji';
    }

    const quota = DUS_SUBJECT_QUOTAS.find(q => q.key === branch || (branch === 'Fizyoloji - Histoloji' && (q.key === 'Fizyoloji' || q.key === 'Histoloji')));
    const category = quota?.category ?? (branch === 'Fizyoloji - Histoloji' ? 'temel' : 'klinik');

    if (!branchMap.has(branch)) {
      branchMap.set(branch, { category, correct: 0, incorrect: 0, blank: 0, total: 0 });
    }
    const entry = branchMap.get(branch)!;
    entry.total++;
    if (d.state === 'correct') entry.correct++;
    else if (d.state === 'incorrect') entry.incorrect++;
    else entry.blank++;
  }

  const result: BranchStat[] = [];
  for (const [branch, st] of branchMap) {
    const net = computeSimulationNet(st.correct, st.incorrect);
    const accuracy = st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0;
    result.push({
      branch,
      category: st.category,
      total: st.total,
      correct: st.correct,
      incorrect: st.incorrect,
      blank: st.blank,
      net,
      accuracy,
    });
  }

  // ÖSYM sırasına göre sırala
  const orderMap: Record<string, number> = {
    'Anatomi': 1,
    'Fizyoloji - Histoloji': 2,
    'Biyokimya': 3,
    'Mikrobiyoloji': 4,
    'Patoloji': 5,
    'Farmakoloji': 6,
    'Restoratif': 7,
    'Protez': 8,
    'Cerrahi': 9,
    'Radyoloji': 10,
    'Periodontoloji': 11,
    'Ortodonti': 12,
    'Endodonti': 13,
    'Pedodonti': 14,
  };

  return result.sort((a, b) => (orderMap[a.branch] || 99) - (orderMap[b.branch] || 99));
}

export interface UnitStat {
  lesson: string;
  unit: string;
  total: number;
  correct: number;
  incorrect: number;
  blank: number;
  net: number;
  accuracy: number;
}

/**
 * Ünite bazlı analiz:
 * "eğer getirelecek sorular çıkmış ve deneme soruları gibi ünitesi belli olmayanlardan getirildi ise sadece branş bazlı analiz tutulur"
 * Yeterli sayıda ünite bilgisi olan soru yoksa null döner.
 */
export function computeSimulationUnitStats(details: AnswerDetail[]): UnitStat[] | null {
  if (!details || details.length === 0) return null;

  // Anlamlı üniteye sahip soruları say
  let meaningfulUnitCount = 0;
  for (const d of details) {
    const u = d.question.unit ? d.question.unit.trim() : '';
    if (
      u &&
      u.toLowerCase() !== 'genel çıkmış sorular' &&
      u.toLowerCase() !== 'deneme' &&
      u.toLowerCase() !== d.question.lesson.toLowerCase() &&
      u.length > 2
    ) {
      meaningfulUnitCount++;
    }
  }

  // Soruların en az %50'si geçerli bir üniteye sahip değilse ünite analizini devre dışı bırak
  if (meaningfulUnitCount < details.length * 0.5) {
    return null;
  }

  const unitMap = new Map<string, { lesson: string; unit: string; correct: number; incorrect: number; blank: number; total: number }>();

  for (const d of details) {
    const u = d.question.unit ? d.question.unit.trim() : 'Genel';
    const key = `${d.question.lesson}|||${u}`;
    if (!unitMap.has(key)) {
      unitMap.set(key, { lesson: d.question.lesson, unit: u, correct: 0, incorrect: 0, blank: 0, total: 0 });
    }
    const entry = unitMap.get(key)!;
    entry.total++;
    if (d.state === 'correct') entry.correct++;
    else if (d.state === 'incorrect') entry.incorrect++;
    else entry.blank++;
  }

  const result: UnitStat[] = [];
  for (const [, st] of unitMap) {
    const net = computeSimulationNet(st.correct, st.incorrect);
    const accuracy = st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0;
    result.push({
      lesson: st.lesson,
      unit: st.unit,
      total: st.total,
      correct: st.correct,
      incorrect: st.incorrect,
      blank: st.blank,
      net,
      accuracy,
    });
  }

  return result.sort((a, b) => b.total - a.total);
}

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ══════════════════════════════════════════════════════════════════════════════
// DUS SİMÜLASYON GEÇMİŞİ & KÜMÜLATİF İSTATİSTİK MOTORU
// ══════════════════════════════════════════════════════════════════════════════

export interface PastSimulationRecord {
  id: string;
  title: string;
  date: string; // ISO date string
  totalQuestions: number;
  totalSeconds: number;
  usedSeconds: number;
  correct: number;
  incorrect: number;
  blank: number;
  net: number;
  temelNet: number;
  klinikNet: number;
  details: AnswerDetail[];
  branchStats: BranchStat[];
}

export const SIM_HISTORY_KEY = 'dus_simulation_history';

export function getPastSimulations(): PastSimulationRecord[] {
  try {
    const raw = localStorage.getItem(SIM_HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (e) {
    console.error('[simulationEngine] getPastSimulations hatası:', e);
    return [];
  }
}

export function savePastSimulation(params: {
  title?: string;
  details: AnswerDetail[];
  totalSeconds: number;
  usedSeconds: number;
}): PastSimulationRecord {
  const existing = getPastSimulations();
  const index = existing.length + 1;
  const title = params.title || `DUS Simülasyonu #${index}`;
  const now = new Date().toISOString();

  const correct = params.details.filter(d => d.state === 'correct').length;
  const incorrect = params.details.filter(d => d.state === 'incorrect').length;
  const blank = params.details.filter(d => d.state === 'blank').length;
  const net = computeSimulationNet(correct, incorrect);

  const temelDetails = params.details.slice(0, 40);
  const temelCorrect = temelDetails.filter(d => d.state === 'correct').length;
  const temelIncorrect = temelDetails.filter(d => d.state === 'incorrect').length;
  const temelNet = computeSimulationNet(temelCorrect, temelIncorrect);

  const klinikDetails = params.details.slice(40, 120);
  const klinikCorrect = klinikDetails.filter(d => d.state === 'correct').length;
  const klinikIncorrect = klinikDetails.filter(d => d.state === 'incorrect').length;
  const klinikNet = computeSimulationNet(klinikCorrect, klinikIncorrect);

  const branchStats = computeSimulationBranchStats(params.details);

  const record: PastSimulationRecord = {
    id: `sim_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    title,
    date: now,
    totalQuestions: params.details.length,
    totalSeconds: params.totalSeconds,
    usedSeconds: params.usedSeconds,
    correct,
    incorrect,
    blank,
    net,
    temelNet,
    klinikNet,
    details: params.details,
    branchStats,
  };

  // En son 30 denemeyi tut (LocalStorage boyut sınırı güvenliği)
  const updated = [record, ...existing].slice(0, 30);
  try {
    localStorage.setItem(SIM_HISTORY_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn('[simulationEngine] localStorage kotası aşıldı, eski kayıtlar budanıyor:', e);
    try {
      localStorage.setItem(SIM_HISTORY_KEY, JSON.stringify([record, ...existing].slice(0, 10)));
    } catch {
      // sessizce geç
    }
  }

  return record;
}

export function getPastSimulationById(id: string): PastSimulationRecord | null {
  const all = getPastSimulations();
  return all.find(r => r.id === id) || null;
}

export function deletePastSimulation(id: string): void {
  const all = getPastSimulations().filter(r => r.id !== id);
  try {
    localStorage.setItem(SIM_HISTORY_KEY, JSON.stringify(all));
  } catch (e) {
    console.error('[simulationEngine] deletePastSimulation hatası:', e);
  }
}

export interface AggregateBranchSummary {
  branch: string;
  category: 'temel' | 'klinik';
  totalQuestions: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalBlank: number;
  avgNet: number;
  accuracy: number;
  status: 'strong' | 'moderate' | 'weak';
}

export interface SimulationTrendPoint {
  id: string;
  date: string;
  title: string;
  totalNet: number;
  temelNet: number;
  klinikNet: number;
  accuracy: number;
}

export interface SimulationAggregateStats {
  totalSimulations: number;
  avgNet: number;
  bestNet: number;
  latestNet: number;
  avgTemelNet: number;
  avgKlinikNet: number;
  avgUsedMinutes: number;
  netTrend: SimulationTrendPoint[];
  branchSummary: AggregateBranchSummary[];
  strongestBranches: AggregateBranchSummary[];
  weakestBranches: AggregateBranchSummary[];
}

export function computeAggregateSimulationStats(
  history: PastSimulationRecord[]
): SimulationAggregateStats {
  if (!history || history.length === 0) {
    return {
      totalSimulations: 0,
      avgNet: 0,
      bestNet: 0,
      latestNet: 0,
      avgTemelNet: 0,
      avgKlinikNet: 0,
      avgUsedMinutes: 0,
      netTrend: [],
      branchSummary: [],
      strongestBranches: [],
      weakestBranches: [],
    };
  }

  const n = history.length;
  const totalNetSum = history.reduce((acc, r) => acc + r.net, 0);
  const temelNetSum = history.reduce((acc, r) => acc + r.temelNet, 0);
  const klinikNetSum = history.reduce((acc, r) => acc + r.klinikNet, 0);
  const usedSecondsSum = history.reduce((acc, r) => acc + r.usedSeconds, 0);

  const bestNet = Math.max(...history.map(r => r.net));
  const latestNet = history[0]?.net ?? 0;
  const avgNet = Math.round((totalNetSum / n) * 100) / 100;
  const avgTemelNet = Math.round((temelNetSum / n) * 100) / 100;
  const avgKlinikNet = Math.round((klinikNetSum / n) * 100) / 100;
  const avgUsedMinutes = Math.round(usedSecondsSum / (n * 60));

  // Kronolojik sıralı trend (eskiden yeniye)
  const sortedChrono = [...history].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const netTrend: SimulationTrendPoint[] = sortedChrono.map(r => ({
    id: r.id,
    date: r.date,
    title: r.title,
    totalNet: r.net,
    temelNet: r.temelNet,
    klinikNet: r.klinikNet,
    accuracy: r.correct + r.incorrect > 0 ? Math.round((r.correct / (r.correct + r.incorrect)) * 100) : 0,
  }));

  // 14 Branş bazında kümülatif toplama (Fizyoloji - Histoloji birleşik!)
  const branchMap = new Map<string, { category: 'temel' | 'klinik'; total: number; correct: number; incorrect: number; blank: number }>();

  // Sıralamayı DUS 2020 kuralına göre sabitle
  const branchOrder: string[] = [
    'Anatomi',
    'Fizyoloji - Histoloji',
    'Biyokimya',
    'Mikrobiyoloji',
    'Patoloji',
    'Farmakoloji',
    'Restoratif',
    'Protez',
    'Cerrahi',
    'Radyoloji',
    'Periodontoloji',
    'Ortodonti',
    'Endodonti',
    'Pedodonti',
  ];

  for (const b of branchOrder) {
    const isTemel = ['Anatomi', 'Fizyoloji - Histoloji', 'Biyokimya', 'Mikrobiyoloji', 'Patoloji', 'Farmakoloji'].includes(b);
    branchMap.set(b, {
      category: isTemel ? 'temel' : 'klinik',
      total: 0,
      correct: 0,
      incorrect: 0,
      blank: 0,
    });
  }

  for (const exam of history) {
    for (const bs of exam.branchStats) {
      if (!branchMap.has(bs.branch)) {
        branchMap.set(bs.branch, { category: bs.category, total: 0, correct: 0, incorrect: 0, blank: 0 });
      }
      const item = branchMap.get(bs.branch)!;
      item.total += bs.total;
      item.correct += bs.correct;
      item.incorrect += bs.incorrect;
      item.blank += bs.blank;
    }
  }

  const branchSummary: AggregateBranchSummary[] = [];
  for (const [branch, data] of branchMap) {
    const totalQuestions = data.total;
    const accuracy = (data.correct + data.incorrect) > 0 ? Math.round((data.correct / (data.correct + data.incorrect)) * 100) : 0;
    const totalNet = computeSimulationNet(data.correct, data.incorrect);
    const avgNet = n > 0 ? Math.round((totalNet / n) * 100) / 100 : 0;

    let status: 'strong' | 'moderate' | 'weak' = 'moderate';
    if (accuracy >= 80) status = 'strong';
    else if (accuracy < 65) status = 'weak';

    branchSummary.push({
      branch,
      category: data.category,
      totalQuestions,
      totalCorrect: data.correct,
      totalIncorrect: data.incorrect,
      totalBlank: data.blank,
      avgNet,
      accuracy,
      status,
    });
  }

  // En güçlü ve en zayıf branşlar
  const sortedByAccuracy = [...branchSummary].filter(b => b.totalQuestions > 0).sort((a, b) => b.accuracy - a.accuracy);
  const strongestBranches = sortedByAccuracy.slice(0, 3);
  const weakestBranches = [...sortedByAccuracy].reverse().slice(0, 3);

  return {
    totalSimulations: n,
    avgNet,
    bestNet,
    latestNet,
    avgTemelNet,
    avgKlinikNet,
    avgUsedMinutes,
    netTrend,
    branchSummary,
    strongestBranches,
    weakestBranches,
  };
}
