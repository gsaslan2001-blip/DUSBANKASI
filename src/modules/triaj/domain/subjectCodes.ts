/**
 * DERS KODU AD ALANLARI
 *
 * Modülde iki ayrı "B##" uzayı var ve aynı harf iki farklı ders anlamına gelir:
 *
 *  1. PLANLAYICI kodu  → `DUSSubject.id` / `DUSSubject.code` (src/modules/triaj/data/subjectProtocols.ts)
 *     Triaj planlamasında, ders kartlarında, yedek içe aktarmada kullanılır.
 *     Sıra: temel bilimler önce, sonra klinik (Pedodonti B11, Endodonti B12, ...).
 *
 *  2. DENEME kodu     → `ExamBranchCode` (src/modules/triaj/data/branchSpecs.ts)
 *     Deneme analizi, simülasyon aktarımı ve net hesaplarında kullanılır.
 *     Sıra: sınav kitapçığı sırası (Periodontoloji B11, Ortodonti B12, ...).
 *
 * Bu iki uzay karıştırılırsa ders adı yanlış ekranda görünür (rapor: M2).
 * Kod karşılaştırması yapacak her yeni yer bu tabloyu kullanmalı; ham
 * `B11` dizesiyle çalışmamalıdır.
 */

export type PlannerSubjectCode =
  | 'B01' | 'B02+B03' | 'B04' | 'B05' | 'B06' | 'B07'
  | 'B09' | 'B10' | 'B11' | 'B12' | 'B13' | 'B14' | 'B15' | 'B16';

export type ExamBranchCodeLiteral =
  | 'B01' | 'B02' | 'B03' | 'B04' | 'B05' | 'B06' | 'B07' | 'B08'
  | 'B09' | 'B10' | 'B11' | 'B12' | 'B13' | 'B14' | 'B15' | 'B16';

/** Planlayıcı ders kodu → deneme branş kodu. `B02+B03` birleşik dersi ikiye ayrılır. */
export const PLANNER_TO_EXAM_BRANCHES: Readonly<Record<PlannerSubjectCode, readonly ExamBranchCodeLiteral[]>> = {
  B01: ['B01'],
  'B02+B03': ['B02', 'B03'],
  B04: ['B04'],
  B05: ['B05'],
  B06: ['B06'],
  B07: ['B07'],
  B09: ['B09'],
  B10: ['B10'],
  B11: ['B13'],   // planlayıcı Pedodonti → deneme Pedodonti
  B12: ['B14'],   // planlayıcı Endodonti  → deneme Endodonti
  B13: ['B12'],   // planlayıcı Ortodonti  → deneme Ortodonti
  B14: ['B11'],   // planlayıcı Periodontoloji → deneme Periodontoloji
  B15: ['B16'],   // planlayıcı Protez      → deneme Protetik
  B16: ['B15'],   // planlayıcı Restoratif  → deneme Restoratif
};

/** Planlayıcı kodunun deneme branşlarını döndürür; bilinmeyen kodda boş dizi. */
export function examBranchesForPlannerCode(code: string | undefined): readonly ExamBranchCodeLiteral[] {
  if (!code) return [];
  return PLANNER_TO_EXAM_BRANCHES[code as PlannerSubjectCode] ?? [];
}
