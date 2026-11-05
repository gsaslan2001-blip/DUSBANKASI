/**
 * DUS Bankası — Sınav Projeksiyonları (saf / yan etkisiz)
 *
 * Tamamen istatistik bazlı motivasyon metrikleri: mevcut çözüm hızına göre
 * hedefe yetişme tahmini, sınav gününde projekte kapsama ve çalışma tutarlılığı.
 * Hiçbir DOM/localStorage/cloud erişimi yoktur — tüm girdiler parametre olarak gelir.
 * Bu sayede karakterizasyon testleriyle kilitlenebilir ve UI'dan bağımsızdır.
 */

/** DUS 2026 hedef sınav tarihi (YYYY-MM-DD). */
export const DUS_EXAM_DATE = '2026-10-27';

const MS_PER_DAY = 1000 * 60 * 60 * 24;

export interface ProjectionInput {
  /** Bankada en az 1 kez çözülmüş benzersiz soru sayısı. */
  solvedUnique: number;
  /** Bankadaki toplam benzersiz soru sayısı. */
  bankTotal: number;
  /** Kronolojik (eskiden yeniye) günlük çözüm sayıları. Yalnızca `count` okunur. */
  activity: ReadonlyArray<{ count: number }>;
  /** Soru hedefi (varsayılan 10.000). */
  targetSolved?: number;
  /** Hız penceresi: son kaç günün ortalaması alınır (varsayılan 14). */
  paceWindowDays?: number;
  /** Tutarlılık penceresi: son kaç güne bakılır (varsayılan 30). */
  consistencyWindowDays?: number;
  /** Referans tarih (test için enjekte edilebilir; varsayılan şimdi). */
  now?: Date;
  /** Sınav tarihi (YYYY-MM-DD; varsayılan DUS_EXAM_DATE). */
  examDate?: string;
}

export interface ExamProjection {
  /** Sınava kalan gün (negatif/0 = sınav geçti). */
  daysUntilExam: number;
  examPassed: boolean;
  /** Hedefe kalan soru (>=0). */
  solvedRemaining: number;
  /** Hedefe yetişmek için gereken günlük yeni soru (sınav geçtiyse kalan tüm soru). */
  requiredDailySolved: number;
  /** Son `paceWindowDays` günün günlük çözüm ortalaması. */
  recentDailyAvg: number;
  /** Mevcut hız gereken hızı karşılıyor mu? */
  onTrackSolved: boolean;
  /** Mevcut hız sürerse sınav gününde tahmini toplam çözülmüş soru. */
  projectedSolvedAtExam: number;
  /** Şu anki kapsama yüzdesi (0-100). */
  coverageNow: number;
  /** Mevcut hızla sınav gününde tahmini kapsama yüzdesi (0-100, banka ile sınırlı). */
  projectedCoveragePct: number;
  /** Son `consistencyWindowDays` günde aktif gün oranı (0-100). */
  consistencyPct: number;
}

/** İki tarih arasındaki tam gün farkı (gün sınırına yuvarlanır). */
function daysBetween(from: Date, toIso: string): number {
  const to = new Date(`${toIso}T00:00:00`);
  const a = new Date(from.getFullYear(), from.getMonth(), from.getDate()).getTime();
  const b = new Date(to.getFullYear(), to.getMonth(), to.getDate()).getTime();
  return Math.round((b - a) / MS_PER_DAY);
}

/**
 * Sınav projeksiyonunu hesaplar. Saf fonksiyon — aynı girdi her zaman aynı çıktı.
 */
export function computeExamProjection(input: ProjectionInput): ExamProjection {
  const {
    solvedUnique,
    bankTotal,
    activity,
    targetSolved = 10_000,
    paceWindowDays = 14,
    consistencyWindowDays = 30,
    now = new Date(),
    examDate = DUS_EXAM_DATE,
  } = input;

  const daysUntilExam = daysBetween(now, examDate);
  const examPassed = daysUntilExam <= 0;

  // Hız: son N günün ortalaması (pencere kadar bölünür — boş günler hızı düşürür).
  const window = Math.max(1, paceWindowDays);
  const recentSlice = activity.slice(-window);
  const recentSum = recentSlice.reduce((s, a) => s + Math.max(0, a.count), 0);
  const recentDailyAvg = Math.round((recentSum / window) * 10) / 10;

  const solvedRemaining = Math.max(0, targetSolved - solvedUnique);
  const requiredDailySolved = examPassed
    ? solvedRemaining
    : Math.ceil(solvedRemaining / daysUntilExam);

  const onTrackSolved = solvedRemaining === 0 || recentDailyAvg >= requiredDailySolved;

  const daysLeftForGrowth = Math.max(0, daysUntilExam);
  const projectedSolvedAtExam = Math.round(solvedUnique + recentDailyAvg * daysLeftForGrowth);

  const coverageNow = bankTotal > 0 ? Math.round((solvedUnique / bankTotal) * 100) : 0;
  const projectedCoveragePct = bankTotal > 0
    ? Math.round((Math.min(bankTotal, projectedSolvedAtExam) / bankTotal) * 100)
    : 0;

  // Tutarlılık: son pencere içindeki aktif (count>0) gün oranı.
  const cWindow = Math.max(1, consistencyWindowDays);
  const cSlice = activity.slice(-cWindow);
  const activeDays = cSlice.filter(a => a.count > 0).length;
  const consistencyPct = Math.round((activeDays / cWindow) * 100);

  return {
    daysUntilExam,
    examPassed,
    solvedRemaining,
    requiredDailySolved,
    recentDailyAvg,
    onTrackSolved,
    projectedSolvedAtExam,
    coverageNow,
    projectedCoveragePct,
    consistencyPct,
  };
}
