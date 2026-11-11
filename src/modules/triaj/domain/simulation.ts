import type { Question } from '../../../data';
import type { AnswerDetail } from '../../../types/app';
import type { ExamBranchCode, TriajState } from '../types';
import { CANONICAL_16_BRANCHES, evaluateMockExam } from './analytics';
import { isCanonicalUnit } from './catalog';

const branchForLesson: Record<string, ExamBranchCode> = {
  Anatomi: 'B01', Histoloji: 'B02', Biyokimya: 'B04', Mikrobiyoloji: 'B05',
  Patoloji: 'B06', Farmakoloji: 'B07', Cerrahi: 'B09', Radyoloji: 'B10',
  Periodontoloji: 'B11', Ortodonti: 'B12', Pedodonti: 'B13', Endodonti: 'B14',
  Restoratif: 'B15', Protez: 'B16',
};

export function branchForQuestion(question: Pick<Question, 'lesson' | 'unit'>): ExamBranchCode | undefined {
  if (question.lesson === 'Fizyoloji') {
    if (!isCanonicalUnit(question.lesson, question.unit)) return undefined;
    return question.unit.startsWith('Histoloji - ') ? 'B02' : 'B03';
  }
  return branchForLesson[question.lesson];
}

export function transferSimulation(state: TriajState, source: {
  id: string; date: string; details: AnswerDetail[]; usedSeconds: number;
}): TriajState {
  if (state.mockExams.some(exam => exam.simulationId === source.id)) return state;
  const nets = {} as Record<ExamBranchCode, number>;
  const counts = new Map<ExamBranchCode, number>();
  // Simülasyon kitapçığı 37–40 arasını Biyokimya dersinden üretir ama sınav
  // modelinde bu dilim Tıbbi Biyoloji ve Genetik (B08) sayılır. Ders adından
  // branş türetilemediği için dilimi sınav sırasına göre B08'e yaz.
  const basicSection = source.details.length === 120 ? source.details.slice(0, 40) : [];
  for (const [index, { question, state: answer }] of source.details.entries()) {
    const inGeneticsSlice = basicSection.length > 0 && index >= 36 && index < 40;
    const branch = inGeneticsSlice ? 'B08' : branchForQuestion(question);
    if (!branch) continue;
    counts.set(branch, (counts.get(branch) ?? 0) + 1);
    nets[branch] = (nets[branch] ?? 0) + (answer === 'correct' ? 1 : answer === 'incorrect' ? -0.25 : 0);
  }
  const missing = CANONICAL_16_BRANCHES.filter(spec => counts.get(spec.code) !== spec.questionCount).map(spec => spec.code);
  for (const branch of missing) delete nets[branch];
  const exam = evaluateMockExam(`simulation:${source.id}`, source.date, 'DUSBANKASI Simülasyonu', nets,
    state.parameters.targetTotalNet, state.parameters.adccEliteThreshold);
  const net = (answers: AnswerDetail[]) => answers.reduce((total, answer) =>
    total + (answer.state === 'correct' ? 1 : answer.state === 'incorrect' ? -0.25 : 0), 0);
  // The simulation runner owns the 40/80 section order even when analytic branch quotas differ.
  const measuredSections = source.details.length === 120 ? {
    basicNet: net(source.details.slice(0, 40)), clinicalNet: net(source.details.slice(40)),
  } : null;
  const totalNet = measuredSections ? measuredSections.basicNet + measuredSections.clinicalNet : exam.totalNet;
  return {
    ...state,
    mockExams: [...state.mockExams, {
      ...exam, ...measuredSections, totalNet, targetDiff: totalNet - state.parameters.targetTotalNet,
      accuracyPercent: Number((totalNet / 120 * 100).toFixed(1)),
      adccStatus: totalNet >= state.parameters.adccEliteThreshold ? 'ELİT' : 'GELİŞİM',
      simulationId: source.id, missingBranches: missing, durationSeconds: Math.round(source.usedSeconds),
    }],
  };
}
