/**
 * DUS 2027 Excel-to-App Mimari Kılavuzu: Matematiksel Hesaplama ve Analitik Motoru
 * - SWSPS (Semantic Weighted Spaced Penalty Score) Bilişsel Ceza Skoru Algoritması
 * - Deneme_Analiz 16 Branş Net, Sapma ve ADÇC Baraj Hesaplayıcısı
 * - Gunluk_Log & Soru_Bankasi_Metrikleri Net, Doğruluk ve Soru Başı Hız (sn/soru) Hesaplayıcısı
 * - Tekrar_Takvimi 5 Kademeli Yoğunluk Isı Haritası & Konu_Takip_Matrisi 3 Kademeli Gecikme Skalası
 * - Tekrar_Kaydi Aynı Gün Mükerrer İşlem Kilidi
 */

import type {
  CanonicalBranchCode,
  CognitiveErrorType,
  DailyStudyQuestionLog,
  MockExamRecord,
  QuestionFormatType,
  TopicUnit,
  TriageRecord,
  AuditValidationStatus
} from '../types';
import { getDaysDiff, getTodayString } from './triage';
import { CANONICAL_16_BRANCHES } from '../data/branchSpecs';

// Tek kaynak: data/branchSpecs.ts. Buradan re-export edilir ki mevcut
// `from '../domain/analytics'` importları çalışmaya devam etsin.
export { CANONICAL_16_BRANCHES };

export const DEFAULT_ERROR_WEIGHTS: Record<CognitiveErrorType, number> = {
  Bilgi: 1.0,
  Muhakeme: 1.25,
  Dikkat: 0.8,
  Çeldirici: 1.4
};

export function calculateWorkbookSWSPS(input: {
  weight: number;
  repeatCount: number;
  difficultyD: number;
  retrievability: { value: number; unit: 'ratio' | 'percent' } | null;
  daysElapsed: number;
}): number | null {
  if (!input.retrievability) return null;
  const { weight, repeatCount, difficultyD, daysElapsed } = input;
  const r = input.retrievability.value / (input.retrievability.unit === 'percent' ? 100 : 1);
  if (![weight, repeatCount, difficultyD, daysElapsed, r].every(Number.isFinite) ||
      r < 0 || r > 1 || difficultyD < 1 || difficultyD > 10 || weight < 0) {
    throw new RangeError('SWSPS girdileri geçersiz.');
  }
  const round = (value: number) => Math.round((value + Number.EPSILON * value) * 100) / 100;
  const recency = round(1 + Math.max(0, (14 - Math.max(0, daysElapsed)) / 14) * 0.5);
  return round(weight * Math.max(1, repeatCount) * (1 + difficultyD / 10) * (1 - r) * recency);
}

export interface SWSPSInput {
  errorType: CognitiveErrorType;
  repeatCount: number;         // N_Tekrar >= 1
  difficultyD: number;         // Z_Zorluk (1 - 10)
  fsrsRetrievabilityR: number; // R_FSRS (0 - 1 veya 0 - 100%)
  daysElapsed: number;         // Delta_t (gün)
  customWeights?: Record<CognitiveErrorType, number>;
}

/**
 * SWSPS (Semantic Weighted Spaced Penalty Score) Bilişsel Ceza Skoru Algoritması
 * Kılavuz Sayfa 3, Bölüm 2.3:
 * SWSPS = W_HataTipi * max(1, N_Tekrar) * (1 + Z_Zorluk/10) * (1 - R_FSRS) * (1 + max(0, (14 - Delta_t)/14) * 0.5)
 * Not: Okunabilirlik için skor 10 ile ölçeklenerek yuvarlanır (veya ham katsayı x 10).
 */
export function calculateSWSPS(input: SWSPSInput): number {
  const weights = input.customWeights || DEFAULT_ERROR_WEIGHTS;
  const wError = weights[input.errorType] ?? 1.0;
  const nRepeat = Math.max(1, input.repeatCount);
  const clampedD = Math.max(1, Math.min(10, input.difficultyD));
  const rNormalized = input.fsrsRetrievabilityR > 1
    ? Math.max(0, Math.min(1, input.fsrsRetrievabilityR / 100))
    : Math.max(0, Math.min(1, input.fsrsRetrievabilityR));
  const deltaT = Math.max(0, input.daysElapsed);

  const difficultyFactor = 1 + clampedD / 10;
  const forgettingRisk = Math.max(0.05, 1 - rNormalized);
  const recencyBoost = 1 + Math.max(0, (14 - deltaT) / 14) * 0.5;

  // Ham matematiksel formül (Sayfa 3) * 10 ölçeklendirme ile net okunabilir ceza puanı (örn: 1.5 - 15.0)
  const rawScore = wError * nRepeat * difficultyFactor * forgettingRisk * recencyBoost * 10;
  return Number(rawScore.toFixed(2));
}

/**
 * Deneme_Analiz (Sayfa 11) 16 Branş Net Hesaplayıcısı ve Doğrulama Motoru
 */
export function evaluateMockExam(
  id: string,
  date: string,
  institution: string,
  branchNets: Record<CanonicalBranchCode, number>,
  targetTotalNet: number = 108.0,
  adccThreshold: number = 100.0,
  notes?: string
): MockExamRecord {
  const basicCodes: CanonicalBranchCode[] = ['B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08'];
  const clinicalCodes: CanonicalBranchCode[] = ['B09', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16'];

  const sanitizedNets = { ...branchNets };
  for (const spec of CANONICAL_16_BRANCHES) {
    const val = Number(sanitizedNets[spec.code] ?? 0);
    // Branş neti soru sayısını aşamaz ve -2.5 altına inemez
    sanitizedNets[spec.code] = Number(Math.max(-spec.questionCount / 4, Math.min(spec.questionCount, val)).toFixed(2));
  }

  const rawBasic = basicCodes.reduce((acc, code) => acc + sanitizedNets[code], 0);
  const rawClinical = clinicalCodes.reduce((acc, code) => acc + sanitizedNets[code], 0);

  const basicNet = Number(rawBasic.toFixed(2));
  const clinicalNet = Number(rawClinical.toFixed(2));
  const totalNet = Number(Math.min(120, basicNet + clinicalNet).toFixed(2));
  const targetDiff = Number((totalNet - targetTotalNet).toFixed(2));
  const accuracyPercent = Number(((totalNet / 120) * 100).toFixed(1));
  const adccStatus: 'ELİT' | 'GELİŞİM' = totalNet >= adccThreshold ? 'ELİT' : 'GELİŞİM';

  return {
    id,
    date,
    institution,
    branchNets: sanitizedNets,
    basicNet,
    clinicalNet,
    totalNet,
    targetDiff,
    accuracyPercent,
    adccStatus,
    notes
  };
}

/**
 * Gunluk_Log (Sayfa 12) Soru Çözüm Oturumu Net, Doğruluk % ve Soru Başı Hız (sn/soru) Hesaplayıcısı
 */
export function calculateQuestionLogMetrics(
  correct: number,
  wrong: number,
  empty: number,
  durationMinutes: number
): {
  totalQuestions: number;
  net: number;
  accuracyPercent: number;
  speedSecondsPerQuestion: number;
  paceVerdict: 'ELİT HIZ (<50 sn)' | 'İDEAL TEMPO (50-60 sn)' | 'YAVAŞ (>60 sn)' | 'Süre girilmedi';
} {
  const safeCorrect = Math.max(0, Math.round(correct));
  const safeWrong = Math.max(0, Math.round(wrong));
  const safeEmpty = Math.max(0, Math.round(empty));
  const totalQuestions = safeCorrect + safeWrong + safeEmpty;
  const safeMinutes = Math.max(0, durationMinutes);

  const net = Number((safeCorrect - safeWrong * 0.25).toFixed(2));
  const accuracyPercent = totalQuestions ? Number(((safeCorrect / totalQuestions) * 100).toFixed(1)) : 0;
  const speedSecondsPerQuestion = totalQuestions ? Number(((safeMinutes * 60) / totalQuestions).toFixed(1)) : 0;

  let paceVerdict: 'ELİT HIZ (<50 sn)' | 'İDEAL TEMPO (50-60 sn)' | 'YAVAŞ (>60 sn)' = 'İDEAL TEMPO (50-60 sn)';
  if (speedSecondsPerQuestion < 50) {
    paceVerdict = 'ELİT HIZ (<50 sn)';
  } else if (speedSecondsPerQuestion > 60) {
    paceVerdict = 'YAVAŞ (>60 sn)';
  }

  return {
    totalQuestions,
    net,
    accuracyPercent,
    speedSecondsPerQuestion,
    paceVerdict: safeMinutes > 0 && totalQuestions > 0 ? paceVerdict : 'Süre girilmedi'
  };
}

export interface AggregatedBankMetric {
  key: string;
  totalQuestions: number;
  correct: number;
  wrong: number;
  net: number;
  accuracyPercent: number;
  avgSpeedSeconds: number;
  coverageStatus: 'Tamamlandı / Dengeli' | 'Aktif Çözülüyor' | 'Başlangıç';
}

/**
 * Soru_Bankasi_Metrikleri (Sayfa 15): Kaynak ve Soru Formatı Bazında Kümülatif Performans Özeti
 */
export function aggregateQuestionBankMetrics(logs: DailyStudyQuestionLog[]): {
  bySource: AggregatedBankMetric[];
  byFormat: AggregatedBankMetric[];
} {
  const groupLogs = (keySelector: (l: DailyStudyQuestionLog) => string): AggregatedBankMetric[] => {
    const map = new Map<string, { q: number; d: number; y: number; sec: number }>();
    for (const log of logs) {
      const k = keySelector(log);
      const curr = map.get(k) || { q: 0, d: 0, y: 0, sec: 0 };
      curr.q += log.totalQuestions;
      curr.d += log.correct;
      curr.y += log.wrong;
      curr.sec += log.durationMinutes * 60;
      map.set(k, curr);
    }

    return Array.from(map.entries()).map(([key, val]) => {
      const net = Number((val.d - val.y * 0.25).toFixed(2));
      const accuracyPercent = val.q > 0 ? Number(((val.d / val.q) * 100).toFixed(1)) : 0;
      const avgSpeedSeconds = val.q > 0 ? Number((val.sec / val.q).toFixed(1)) : 0;
      const coverageStatus =
        val.q >= 250
          ? 'Tamamlandı / Dengeli'
          : val.q >= 80
          ? 'Aktif Çözülüyor'
          : 'Başlangıç';

      return {
        key,
        totalQuestions: val.q,
        correct: val.d,
        wrong: val.y,
        net,
        accuracyPercent,
        avgSpeedSeconds,
        coverageStatus
      };
    });
  };

  const allFormats: QuestionFormatType[] = [
    'Klinik Vaka / Senaryo',
    'Öncüllü / Ayrım Sorusu',
    'Spot / Bilgi Sorusu',
    'ÖSYM Çıkmış Sorular',
    'Komplikasyon Yönetimi'
  ];

  const bySource = groupLogs(l => l.sourceBook);
  const rawByFormat = groupLogs(l => l.questionFormat);

  const byFormat: AggregatedBankMetric[] = allFormats.map(fmt => {
    const found = rawByFormat.find(r => r.key === fmt);
    return (
      found || {
        key: fmt,
        totalQuestions: 0,
        correct: 0,
        wrong: 0,
        net: 0,
        accuracyPercent: 0,
        avgSpeedSeconds: 0,
        coverageStatus: 'Başlangıç'
      }
    );
  });

  return { bySource, byFormat };
}

/**
 * Tekrar_Takvimi (Sayfa 9): 5 Kademeli Yoğunluk Isı Haritası (Heatmap) Skalası
 * 0 Görev: #FFFFFF (Beyaz)
 * 1 Görev: #DCFCE7 (Ferah Yeşil)
 * 2 Görev: #D9F99D (Limon Sarısı)
 * 3 Görev: #FEF08A (Sıcak Sarı)
 * 4 Görev: #FED7AA (Pastel Turuncu)
 * 5+ Görev: #FECACA (Mercan Kırmızı - Aşırı Yük)
 */
export function getCalendarHeatmapStyle(taskCount: number): {
  bgHex: string;
  label: string;
  badgeClass: string;
} {
  if (taskCount <= 0) {
    return {
      bgHex: '#FFFFFF',
      label: 'Boş Gün',
      badgeClass: 'bg-slate-100 text-slate-600 border-slate-200'
    };
  }
  if (taskCount === 1) {
    return {
      bgHex: '#DCFCE7',
      label: 'Ferah (1 Görev)',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    };
  }
  if (taskCount === 2) {
    return {
      bgHex: '#D9F99D',
      label: 'İdeal (2 Görev)',
      badgeClass: 'bg-lime-200 text-lime-950 border-lime-400'
    };
  }
  if (taskCount === 3) {
    return {
      bgHex: '#FEF08A',
      label: 'Orta Yük (3 Görev)',
      badgeClass: 'bg-yellow-200 text-yellow-950 border-yellow-400'
    };
  }
  if (taskCount === 4) {
    return {
      bgHex: '#FED7AA',
      label: 'Yoğun (4 Görev)',
      badgeClass: 'bg-orange-200 text-orange-950 border-orange-400'
    };
  }
  return {
    bgHex: '#FECACA',
    label: 'Aşırı Yük (5+ Görev)',
    badgeClass: 'bg-rose-200 text-rose-950 border-rose-400 font-extrabold'
  };
}

/**
 * Bir ünitenin sıradaki hedef tarihini (planlanmış ilk tekrar, T+3, T+14 veya Cumartesi Onarım) döndürür.
 * `plannedFirstReviewDate`: açık T0_SAMPLING görevinin vadesi. Planlanmış ama henüz
 * başlanmamış ünitede topic üzerinde hiçbir tarih alanı yoktur; bu parametre
 * verilmezse matris "hedef yok / gecikme 0" gösterir.
 */
export function getTopicNextTargetDate(topic: TopicUnit, plannedFirstReviewDate?: string): string | undefined {
  if (topic.discharged || topic.currentBucket === 'GREEN') return undefined;
  if (topic.currentBucket === 'RED' && topic.saturdayRepairDate) return topic.saturdayRepairDate;
  if (topic.currentBucket === 'YELLOW' && topic.t14DueDate) return topic.t14DueDate;
  if ((topic.status === 'T0_DONE' || topic.status === 'T3_PENDING') && topic.t3DueDate) return topic.t3DueDate;
  return topic.t3DueDate || topic.t14DueDate || topic.saturdayRepairDate || plannedFirstReviewDate;
}

/**
 * Konu_Takip_Matrisi (Sayfa 10): Gecikme Günü Hesabı ve 3 Renkli Gecikme Isı Haritası
 * Gecikme = 0: #A7F3D0 (Pastel Yeşil)
 * Gecikme 1-7 Gün: #FDE68A (Açık Sarı)
 * Gecikme 8+ Gün: #FCA5A5 (Kırmızı)
 */
export function calculateTopicDelayDays(
  topic: TopicUnit,
  todayStr: string = getTodayString(),
  plannedFirstReviewDate?: string
): number {
  const nextDate = getTopicNextTargetDate(topic, plannedFirstReviewDate);
  if (!nextDate) return 0;
  if (nextDate >= todayStr) return 0;
  return Math.max(0, getDaysDiff(nextDate, todayStr));
}

export function getDelayHeatmapStyle(delayDays: number): {
  bgHex: string;
  textClass: string;
  statusLabel: string;
} {
  if (delayDays <= 0) {
    return {
      bgHex: '#A7F3D0',
      textClass: 'text-emerald-950',
      statusLabel: 'Zamanında (0G)'
    };
  }
  if (delayDays <= 7) {
    return {
      bgHex: '#FDE68A',
      textClass: 'text-amber-950',
      statusLabel: `Gecikme (${delayDays}G)`
    };
  }
  return {
    bgHex: '#FCA5A5',
    textClass: 'text-rose-950 font-bold',
    statusLabel: `Kritik Gecikme (${delayDays}G)`
  };
}

/**
 * Tekrar_Kaydi (Sayfa 8): Aynı Gün Aynı Konuya Mükerrer İşlem Kontrolü
 * =IF(COUNTIFS(Konu, currKonu, Tarih, currTarih)>1, "Girişi kontrol et / Mükerrer", "Geçerli")
 */
export function checkDuplicateAuditLog(
  existingLogs: TriageRecord[],
  topicId: string,
  dateStr: string
): AuditValidationStatus {
  const sameDayMatch = existingLogs.some(l => l.topicId === topicId && l.date === dateStr);
  return sameDayMatch ? 'Girişi kontrol et / Mükerrer' : 'Geçerli';
}

