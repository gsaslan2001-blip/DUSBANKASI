/**
 * Bilişsel Kova Triyajı ve Karar Motoru
 * Doktrin: DUS 2027 80/20 Pareto & Ebbinghaus Gecikmeli Geri Çağırma Mimarisi
 */

import type {
  BucketType,
  PriorityLevel,
  DUSSubject,
  TopicUnit,
  TriageNotification,
  KovaTriageReport,
  SubjectTriageSummary
} from '../types.js';
import { subjectForTopic } from './catalog';

export interface TriageResult {
  bucket: BucketType;
  priority: PriorityLevel;
  percentage: number;
  correct: number;
  wrong: number;
  total: number;
  clinicalDiagnosis: string;
  recommendedAction: string;
  nextScheduledDate?: string;
  scheduleType?: 'DISCHARGED' | 'T14_VERIFICATION' | 'SATURDAY_REPAIR';
}

/**
 * T+3 Günü 40 Soruluk Test Sonucuna Göre Bilişsel Triyaj Kararı
 * @param correct Doğru sayısı
 * @param total Toplam soru (Standart 40 soru)
 * @param testDate Testin çözüldüğü tarih (YYYY-MM-DD)
 */
export function evaluateT3Triage(
  correct: number,
  total: number = 40,
  testDate: string = getTodayString()
): TriageResult {
  const safeTotal = validateScore(correct, total, 40, 40);
  const safeCorrect = correct;
  const wrong = safeTotal - safeCorrect;
  const percentage = Math.round((safeCorrect / safeTotal) * 100);

  if (correct * 100 >= total * 85) {
    // YEŞİL KOVA: 40 Soruda 34-40 Doğru (≥%85 Başarı)
    return {
      bucket: 'GREEN',
      priority: 'P4_LOW',
      percentage,
      correct: safeCorrect,
      wrong,
      total: safeTotal,
      clinicalDiagnosis: 'Araya 3 tam gün girmesine rağmen şema neokortekste sağlam (≥%85).',
      recommendedAction: 'HİÇBİR GÖREV EKLENMEZ (Taburcu!). 2. Soru Bankası çözülmez. Ünite takvimden çıkarılır; sadece ders bittiğinde branş denemelerinde taranır.',
      scheduleType: 'DISCHARGED'
    };
  } else if (correct * 100 >= total * 70) {
    // SARI KOVA: 40 Soruda 28-33 Doğru (%70-%84 Başarı)
    const t14Date = addDays(testDate, 14);
    return {
      bucket: 'YELLOW',
      priority: 'P2_HIGH',
      percentage,
      correct: safeCorrect,
      wrong,
      total: safeTotal,
      clinicalDiagnosis: 'Ana iskelet oturmuş ancak bazı spesifik alt başlıklar veya sınıflamalar 3 günde erimiş (%70-%84).',
      recommendedAction: 'Yanlış çıkan soruların ilgili paragraflarını ana kitaptan 15 dk dikkatlice oku ve yıldızla. 14 gün sonraya (T+14) 2. Soru Bankasından 20-25 soruluk doğrulama testi planlandı.',
      nextScheduledDate: t14Date,
      scheduleType: 'T14_VERIFICATION'
    };
  } else {
    // KIRMIZI KOVA: 40 Soruda ≤27 Doğru (<%70 Başarı)
    const saturdayDate = getNextSaturday(testDate);
    return {
      bucket: 'RED',
      priority: 'P1_CRITICAL',
      percentage,
      correct: safeCorrect,
      wrong,
      total: safeTotal,
      clinicalDiagnosis: 'Alarm! İlk gün şema hiç oturmamış veya ünite aşırı nankör (<%70). 10 dk yama yetmez.',
      recommendedAction: 'Günlük programı bozma. Ünite Cumartesi Kova Onarım Bloğuna (25 dk Boş Kağıt ile yeniden inşa + 2. Soru Bankasından 30 soru) atandı.',
      nextScheduledDate: saturdayDate,
      scheduleType: 'SATURDAY_REPAIR'
    };
  }
}

/**
 * Sarı Kova T+14 Doğrulama Testi Değerlendirmesi
 * @param correct Doğru sayısı
 * @param total Toplam soru (Standart 20-25)
 */
export function evaluateT14Verification(
  correct: number,
  total: number = 20,
  testDate: string = getTodayString()
): TriageResult {
  const safeTotal = validateScore(correct, total, 20, 25);
  const safeCorrect = correct;
  const percentage = Math.round((safeCorrect / safeTotal) * 100);
  const wrong = safeTotal - safeCorrect;

  if (correct * 100 >= total * 85) {
    // T+14'te ≥%85 ise Yeşile mezun olur!
    return {
      bucket: 'GREEN',
      priority: 'P4_LOW',
      percentage,
      correct: safeCorrect,
      wrong,
      total: safeTotal,
      clinicalDiagnosis: 'T+14 gecikmeli doğrulaması başarılı! Zayıf sinapslar onarıldı.',
      recommendedAction: 'Yeşil Kovaya terfi etti (Taburcu!). Takvimden düşürülür.',
      scheduleType: 'DISCHARGED'
    };
  } else if (correct * 100 >= total * 70) {
    // Halen Sarı Kovada kalır, bir takip daha eklenir
    const nextDate = addDays(testDate, 14);
    return {
      bucket: 'YELLOW',
      priority: 'P2_HIGH',
      percentage,
      correct: safeCorrect,
      wrong,
      total: safeTotal,
      clinicalDiagnosis: 'Halen sınırda performans (%70-%84).',
      recommendedAction: 'Hatalı başlıkları tekrar incele. 14 gün sonrasına ek mini kontrol planlandı.',
      nextScheduledDate: nextDate,
      scheduleType: 'T14_VERIFICATION'
    };
  } else {
    // T+14'te <%70 ise Kırmızıya düşer!
    const saturdayDate = getNextSaturday(testDate);
    return {
      bucket: 'RED',
      priority: 'P1_CRITICAL',
      percentage,
      correct: safeCorrect,
      wrong,
      total: safeTotal,
      clinicalDiagnosis: 'T+14 kontrolünde gerileme tespit edildi (<%70).',
      recommendedAction: 'Kırmızı Kovaya düşürüldü. Cumartesi Kova Onarım Bloğuna aktarıldı.',
      nextScheduledDate: saturdayDate,
      scheduleType: 'SATURDAY_REPAIR'
    };
  }
}

/**
 * Kırmızı Kova Cumartesi Onarım Testi Değerlendirmesi
 * @param correct Doğru sayısı
 * @param total Toplam soru (Standart 30)
 */
export function evaluateSaturdayRepair(
  correct: number,
  total: number = 30,
  testDate: string = getTodayString()
): TriageResult {
  const safeTotal = validateScore(correct, total, 30, 30);
  const safeCorrect = correct;
  const percentage = Math.round((safeCorrect / safeTotal) * 100);
  const wrong = safeTotal - safeCorrect;

  if (correct * 100 >= total * 80) {
    // %80+ ise Sarı Kovaya terfi eder (T+14'e 3. Bankadan test konur)
    const t14Date = addDays(testDate, 14);
    return {
      bucket: 'YELLOW',
      priority: 'P2_HIGH',
      percentage,
      correct: safeCorrect,
      wrong,
      total: safeTotal,
      clinicalDiagnosis: 'Cumartesi derin onarımı başarılı (≥%80). Şema toparlandı.',
      recommendedAction: 'Sarı Kovaya terfi etti! 14 gün sonrasına (T+14) 3. Soru Bankasından test planlandı.',
      nextScheduledDate: t14Date,
      scheduleType: 'T14_VERIFICATION'
    };
  } else {
    // Yeniden Cumartesi Kırmızı Kovada kalır
    const nextSaturday = getNextSaturday(addDays(testDate, 1));
    return {
      bucket: 'RED',
      priority: 'P1_CRITICAL',
      percentage,
      correct: safeCorrect,
      wrong,
      total: safeTotal,
      clinicalDiagnosis: 'Onarım henüz yetersiz (<%80). Konseptsel boşluk devam ediyor.',
      recommendedAction: 'Kırmızı Kovada kaldı. Gelecek Cumartesi için Feynamn / Detaylandırıcı Sorgulama ile yama planlandı.',
      nextScheduledDate: nextSaturday,
      scheduleType: 'SATURDAY_REPAIR'
    };
  }
}

// ----------------- TARİH HESAPLAYICILAR -----------------

const istanbulDate = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Istanbul', year: 'numeric', month: '2-digit', day: '2-digit',
});

export function getTodayString(now = new Date()): string {
  const parts = Object.fromEntries(istanbulDate.formatToParts(now).map(part => [part.type, part.value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function validateScore(correct: number, total: number, min: number, max: number): number {
  if (!Number.isInteger(total) || total < min || total > max ||
      !Number.isInteger(correct) || correct < 0 || correct > total) {
    throw new RangeError('Test için geçerli bir doğru ve soru sayısı girin.');
  }
  return total;
}

export function addDays(dateStr: string, days: number): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  date.setUTCDate(date.getUTCDate() + days);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Tarihten sonraki en yakın Cumartesi gününü bulur
 * Cumartesi = 6 (JS getUTCDay)
 */
export function getNextSaturday(fromDateStr: string): string {
  const [y, m, d] = fromDateStr.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  const currentDay = date.getUTCDay(); // 0: Sun, 1: Mon, ..., 6: Sat
  
  // Eğer bugün zaten Cumartesi ise en yakın Cumartesi bugündür;
  // değilse sonraki Cumartesi'ye kaç gün kaldığını hesapla
  let daysToAdd = (6 - currentDay + 7) % 7;
  if (daysToAdd === 0) {
    // Bugün Cumartesi
    daysToAdd = 0;
  }
  
  return addDays(fromDateStr, daysToAdd);
}

export function formatTRDate(dateStr?: string): string {
  if (!dateStr) return '-';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  return `${parts[2]}.${parts[1]}.${parts[0]}`;
}

export function isPastOrToday(dateStr: string, todayStr: string = getTodayString()): boolean {
  return dateStr <= todayStr;
}

export function getDaysDiff(dateStrA: string, dateStrB: string): number {
  const [y1, m1, d1] = dateStrA.split('-').map(Number);
  const [y2, m2, d2] = dateStrB.split('-').map(Number);
  const t1 = Date.UTC(y1, m1 - 1, d1);
  const t2 = Date.UTC(y2, m2 - 1, d2);
  const diffMs = t2 - t1;
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

// ----------------- BİLDİRİM VE RAPOR MOTORU -----------------

/**
 * Konu listesine ve günün tarihine göre otomatik triyaj bildirimleri üretir
 */
export function generateNotifications(
  topics: TopicUnit[],
  todayStr: string = getTodayString()
): TriageNotification[] {
  const notifications: TriageNotification[] = [];

  // 1. Kırmızı Kova Ünite Sayısı Kontrolü (PDF 8.4: Maksimum 3 Ünite Kuralı)
  const redTopics = topics.filter(t => t.currentBucket === 'RED' && !t.discharged);
  if (redTopics.length >= 3) {
    notifications.push({
      id: `alert-red-limit-${todayStr}`,
      type: 'RED_LIMIT_ALERT',
      title: `🚨 Acil Kırmızı Kova Uyarısı (${redTopics.length} Ünite Yoğun Bakımda!)`,
      message: 'Doktrin Kuralı (Madde 8.4): Kırmızı Kovada 3 veya daha fazla ünite birikti. Sistem tıkanıklığını önlemek için yeni konu çalışması durdurulmalı, Cumartesi Onarımına odaklanılmalıdır!',
      dueDate: todayStr,
      priority: 'P1_CRITICAL',
      bucket: 'RED',
      isRead: false,
      createdAt: todayStr
    });
  }

  // 2. Her ünite için tarihe dayalı bildirimler
  for (const topic of topics) {
    if (topic.discharged) continue;

    // T+3 Gecikmeli Test Günü Bildirimi
    if ((topic.status === 'T0_DONE' || topic.status === 'T3_PENDING') && topic.t3DueDate) {
      if (topic.t3DueDate <= todayStr) {
        const diff = getDaysDiff(topic.t3DueDate, todayStr);
        const overdueText = diff > 0 ? ` (${diff} gün gecikti!)` : ' (Bugün)';
        notifications.push({
          id: `t3-due-${topic.id}`,
          topicId: topic.id,
          subjectId: topic.subjectId,
          type: 'T3_DUE',
          title: `T+3 Geri Çağırma Testi${overdueText}: ${topic.title}`,
          message: 'Ünitenin ayrı 40 sorusunu (1. Soru Bankası) ana konuyu tekrar okumadan doğrudan çözün ve Kova Triyajını tamamlayın.',
          dueDate: topic.t3DueDate,
          priority: 'P3_MEDIUM',
          bucket: 'NONE',
          isRead: false,
          createdAt: todayStr
        });
      }
    }

    // Sarı Kova T+14 Doğrulama Testi
    if (topic.currentBucket === 'YELLOW' && topic.t14DueDate) {
      if (topic.t14DueDate <= todayStr) {
        const diff = getDaysDiff(topic.t14DueDate, todayStr);
        const overdueText = diff > 0 ? ` (${diff} gün gecikti!)` : ' (Bugün)';
        notifications.push({
          id: `t14-due-${topic.id}`,
          topicId: topic.id,
          subjectId: topic.subjectId,
          type: 'T14_DUE',
          title: `🟡 T+14 Sarı Kova Doğrulaması${overdueText}: ${topic.title}`,
          message: 'İşaretli alt başlıklara 5 dk göz atıp 2. Soru Bankasından 20-25 soru çözün (≥%85 ise Yeşile terfi!).',
          dueDate: topic.t14DueDate,
          priority: 'P2_HIGH',
          bucket: 'YELLOW',
          isRead: false,
          createdAt: todayStr
        });
      }
    }

    // Kırmızı Kova Cumartesi Onarımı
    if (topic.currentBucket === 'RED' && topic.saturdayRepairDate) {
      if (topic.saturdayRepairDate <= todayStr) {
        notifications.push({
          id: `sat-repair-${topic.id}`,
          topicId: topic.id,
          subjectId: topic.subjectId,
          type: 'SATURDAY_REPAIR',
          title: `🔴 Cumartesi Kova Onarım Görevi: ${topic.title}`,
          message: 'Çöken alt başlıkları 25 dk aktif Boş Kağıt / Kıyas tablosu ile yeniden inşa edin + 30 soru çözün (%80+ ise Sarıya terfi!).',
          dueDate: topic.saturdayRepairDate,
          priority: 'P1_CRITICAL',
          bucket: 'RED',
          isRead: false,
          createdAt: todayStr
        });
      }
    }
  }

  return notifications;
}

/**
 * 15 Ders ve Konu Havuzu Üzerinden Kapsamlı Kova Triyaj Raporu Oluşturur
 */
export function generateTriageReport(
  subjects: DUSSubject[],
  topics: TopicUnit[],
  todayStr: string = getTodayString()
): KovaTriageReport {
  let greenCount = 0;
  let yellowCount = 0;
  let redCount = 0;
  let pendingCount = 0;

  for (const topic of topics) {
    if (topic.currentBucket === 'GREEN' || topic.discharged) {
      greenCount++;
    } else if (topic.currentBucket === 'YELLOW') {
      yellowCount++;
    } else if (topic.currentBucket === 'RED') {
      redCount++;
    } else if (topic.status === 'T0_DONE' || topic.status === 'T3_PENDING') {
      pendingCount++;
    }
  }

  const redAlarmActive = redCount >= 3;

  // Ders Bazında Özetler
  const subjectSummaries: SubjectTriageSummary[] = subjects.map(sub => {
    const subTopics = topics.filter(t => subjectForTopic(subjects, t.subjectId)?.id === sub.id);
    const totalUnits = subTopics.length;
    const green = subTopics.filter(t => t.currentBucket === 'GREEN' || t.discharged).length;
    const yellow = subTopics.filter(t => t.currentBucket === 'YELLOW').length;
    const red = subTopics.filter(t => t.currentBucket === 'RED').length;
    const pending = subTopics.filter(t => t.currentBucket === 'NONE' && (t.status === 'T0_DONE' || t.status === 'T3_PENDING')).length;
    const discharged = subTopics.filter(t => t.discharged).length;

    // Neokortikal Depolama Gücü: Yeşil = 1.0, Sarı = 0.5, Kırmızı = 0.0, Henüz çalışılmamış = 0.0
    const scoreSum = (green * 100) + (yellow * 55) + (red * 20);
    const retentionRate = totalUnits > 0 ? Math.round(scoreSum / totalUnits) : 0;

    return {
      subjectId: sub.id,
      subjectName: sub.name,
      category: sub.category,
      cognitiveGroup: sub.cognitiveGroup,
      totalUnits,
      greenCount: green,
      yellowCount: yellow,
      redCount: red,
      pendingCount: pending,
      dischargedCount: discharged,
      retentionRate,
      questionWeight: sub.questionCount
    };
  });

  // Genel Depolama Gücü İndeksleri
  const temelSubjects = subjectSummaries.filter(s => s.category === 'TEMEL_BILIMLER');
  const klinikSubjects = subjectSummaries.filter(s => s.category === 'KLINIK_BILIMLER');

  const calcWeightedIndex = (list: SubjectTriageSummary[]): number => {
    let totalWeight = 0;
    let weightedScore = 0;
    for (const s of list) {
      totalWeight += s.questionWeight;
      weightedScore += (s.retentionRate * s.questionWeight);
    }
    return totalWeight > 0 ? Math.round(weightedScore / totalWeight) : 0;
  };

  const temelRetentionIndex = calcWeightedIndex(temelSubjects);
  const klinikRetentionIndex = calcWeightedIndex(klinikSubjects);
  
  // DUS Toplamında Temel %33.3 (40 soru), Klinik %66.7 (80 soru)
  const overallRetentionIndex = Math.round((temelRetentionIndex * 0.333) + (klinikRetentionIndex * 0.667));

  // Acil Aksiyon Görevleri
  const urgentTasks: KovaTriageReport['urgentTasks'] = [];

  // Kırmızı kova görevleri (Cumartesi onarımları)
  for (const t of topics.filter(t => t.currentBucket === 'RED' && !t.discharged)) {
    const sub = subjectForTopic(subjects, t.subjectId);
    urgentTasks.push({
      id: `urgent-red-${t.id}`,
      topicId: t.id,
      topicTitle: t.title,
      subjectName: sub?.name || 'Ders',
      bucket: 'RED',
      priority: 'P1_CRITICAL',
      actionType: 'Cumartesi Kova Onarım Bloğu',
      targetDate: t.saturdayRepairDate || getNextSaturday(todayStr),
      instruction: '25 dk aktif Boş Kağıt ile şema inşası + 2. Soru Bankasından 30 soru çözümü.'
    });
  }

  // Sarı kova görevleri (T+14 doğrulamaları)
  for (const t of topics.filter(t => t.currentBucket === 'YELLOW' && !t.discharged)) {
    const sub = subjectForTopic(subjects, t.subjectId);
    urgentTasks.push({
      id: `urgent-yellow-${t.id}`,
      topicId: t.id,
      topicTitle: t.title,
      subjectName: sub?.name || 'Ders',
      bucket: 'YELLOW',
      priority: 'P2_HIGH',
      actionType: 'T+14 Doğrulama Testi',
      targetDate: t.t14DueDate || addDays(todayStr, 14),
      instruction: 'Yıldızlı yerlere 5 dk göz at + 2. Soru Bankasından 20-25 soru çöz (≥%85 Yeşile terfi).'
    });
  }

  // T+3 Gecikmeli test bekleyenler
  for (const t of topics.filter(t => (t.status === 'T0_DONE' || t.status === 'T3_PENDING') && t.t3DueDate && t.t3DueDate <= todayStr)) {
    const sub = subjectForTopic(subjects, t.subjectId);
    urgentTasks.push({
      id: `urgent-t3-${t.id}`,
      topicId: t.id,
      topicTitle: t.title,
      subjectName: sub?.name || 'Ders',
      bucket: 'NONE',
      priority: t.t3DueDate! < todayStr ? 'P1_CRITICAL' : 'P2_HIGH',
      actionType: 'T+3 Esas Geri Çağırma Testi',
      targetDate: t.t3DueDate || todayStr,
      instruction: 'Konuyu yeniden okumadan 40 soruluk esas testi çöz ve triyajı gerçekleştir.'
    });
  }

  return {
    generatedAt: todayStr,
    totalTopics: topics.length,
    greenBucket: greenCount,
    yellowBucket: yellowCount,
    redBucket: redCount,
    pendingTriage: pendingCount,
    overallRetentionIndex,
    temelRetentionIndex,
    klinikRetentionIndex,
    redAlarmActive,
    urgentTasks,
    subjectSummaries
  };
}


