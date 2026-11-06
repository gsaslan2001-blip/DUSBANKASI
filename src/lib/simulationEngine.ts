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
 * DUS Simülasyonu soru havuzunu oluşturur:
 * - 120 soru (40 Temel, 80 Klinik)
 * - Sıradaki tekrar sorularını branş kotalarına öncelikli yerleştirir
 * - Kalan kotaları unmastered sorulardan doldurur (havuz tükenirse mastered'dan takviye)
 * - Soruları gerçek DUS formatında sıralı dizilime alır
 */
export function buildDusSimulationPool(
  allQuestions: Question[],
  options?: {
    consumeRetryBatch?: boolean; // varsayılan true
    customRetryIds?: string[];   // test veya özel enjeksiyon için
  }
): Question[] {
  if (!allQuestions || allQuestions.length === 0) return [];

  const shouldConsume = options?.consumeRetryBatch !== false;
  const retryIds = options?.customRetryIds ?? (shouldConsume ? popNextSimulationRetryBatch() : []);

  const masteredIds = getMasteredSimulationIds();

  // "YANLIŞLARIM" dersi havuz dışıdır
  const eligibleAll = allQuestions.filter(
    q => q.lesson && q.lesson.trim().toUpperCase() !== 'YANLIŞLARIM'
  );

  const questionMap = new Map<string, Question>();
  for (const q of eligibleAll) {
    questionMap.set(q.id, q);
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

  // 2. ADIM: Her branşın kotasını unmastered sorularla doldur
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

    // Mastered olmayan ve henüz kullanılmamış sorular
    const unmastered = pool.filter(q => !masteredIds.has(q.id) && !usedIdSet.has(q.id));
    // Karıştır
    const shuffledUnmastered = shuffleArray([...unmastered]);

    const takeFromUnmastered = shuffledUnmastered.slice(0, needed);
    for (const q of takeFromUnmastered) {
      selected.push(q);
      usedIdSet.add(q.id);
    }

    // Eğer havuz yetersiz kaldıysa, mecburen mastered sorulardan tamamla
    const stillNeeded = targetCount - selected.length;
    if (stillNeeded > 0) {
      const masteredPool = pool.filter(q => masteredIds.has(q.id) && !usedIdSet.has(q.id));
      const shuffledMastered = shuffleArray([...masteredPool]);
      const takeFromMastered = shuffledMastered.slice(0, stillNeeded);
      for (const q of takeFromMastered) {
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
