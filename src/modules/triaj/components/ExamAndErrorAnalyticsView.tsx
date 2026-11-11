/**
 * DUS 2027 Excel-to-App Mimari Kılavuzu:
 * - Sekme 7: Deneme_Analiz (16 Branş Net Girişi, Spider/Radar Grafiği, Net Artış Eğrisi & ADÇC 100+ Barajı)
 * - Sekme 9 & 10: Semantik_Hata_Analizi (SWSPS Bilişsel Ceza Skoru Motoru) & Konu_Matrisi (FSRS S/D/R)
 * - Sekme 8 & 11: Gunluk_Log (Canlı Soru Kronometresi & Hız sn/soru) & Soru_Bankasi_Metrikleri
 * - Sekme 12: Anki_FSRS_Takip (%95.8 Kalıcılık, Kart Olgunluk Dağılımı & 16 Branş Kart Tablosu)
 */

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useModalA11y } from '../../../hooks/useModalA11y';
import { CANONICAL_UNITS } from '../../../config/canonicalUnits';
import type { SimulationErrorChoice } from '../TriajModule';
import { unitKey } from '../domain/catalog';
import { branchForQuestion } from '../domain/simulation';
import { exportAnkiCards, fetchLocalAnkiActivity, parseAnkiSnapshot } from '../integrations/anki';
import { useTriajView } from './TriajViewContext';
import type {
  CanonicalBranchCode,
  CognitiveErrorType,
  QuestionFormatType
} from '../types';
import {
  CANONICAL_16_BRANCHES,
  calculateWorkbookSWSPS,
  calculateQuestionLogMetrics,
  aggregateQuestionBankMetrics
} from '../domain/analytics';
import {
  TrendingUp,
  AlertOctagon,
  Timer,
  Database,
  Plus,
  Trash2,
  Play,
  Pause,
  RotateCcw,
  Copy,
  Check,
  Award,
} from './icons';

type AnalyticsTab = 'MOCK_EXAMS' | 'SWSPS_ERRORS' | 'QUESTION_SPEED_LOG' | 'ANKI_FSRS';

const protocolDetails = {
  1: { weight: 1.5, label: 'Dikkat', action: 'Dikkat hatasını ve kaçırılan soru kökü işaretini kaydet.' },
  2: { weight: 1.3, label: 'Çeldirici', action: 'İki seçenek arasındaki ayırt edici kuralı Cloze kartına yaz.' },
  3: { weight: 1.1, label: 'İzole ezber', action: 'İzole ezberi tablo veya görsel kart olarak hazırla.' },
  4: { weight: 0.7, label: 'Mekanizma', action: 'Neden-sonuç zincirini yeniden kur. Üç gün sonrasına 15 soruluk doğrulama açılır.' },
  5: { weight: 1, label: 'Klinik yorum', action: 'Klinik ipuçlarını yeniden değerlendir. Üç gün sonrasına vaka ağırlıklı doğrulama açılır.' },
} as const;
type ProtocolType = keyof typeof protocolDetails;

export const ExamAndErrorAnalyticsView: React.FC<{
  simulationErrors?: SimulationErrorChoice[];
  onFavoriteQuestion?: (id: string) => void;
}> = ({ simulationErrors = [], onFavoriteQuestion }) => {
  const {
    mockExams: storedExams,
    addMockExam,
    deleteMockExam,
    semanticErrors,
    addSemanticError,
    toggleSemanticErrorAnkiStatus,
    deleteSemanticError,
    questionLogs,
    addQuestionLog,
    deleteQuestionLog,
    topicTaxonomy,
    updateTaxonomyItem,
    ankiSnapshot,
    ankiSnapshots,
    updateAnkiSnapshot,
    saving,
    systemParams,
    todayStr
  } = useTriajView();
  const mockExams = useMemo(() => [...storedExams].sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id)), [storedExams]);
  const submitting = useRef(false);
  const [busy, setBusy] = useState(false);
  async function submitOnce(operation: () => Promise<void>) {
    if (submitting.current || saving) return;
    submitting.current = true;
    setBusy(true);
    try { await operation(); }
    finally { submitting.current = false; setBusy(false); }
  }

  const [activeSubTab, setActiveSubTab] = useState<AnalyticsTab>(simulationErrors.length ? 'SWSPS_ERRORS' : 'MOCK_EXAMS');

  // --- 1. DENEME_ANALIZ STATE ---
  const [isNewExamOpen, setIsNewExamOpen] = useState(false);
  const closeExam = useCallback(() => { if (!submitting.current) setIsNewExamOpen(false); }, []);
  const examDialog = useModalA11y(closeExam, isNewExamOpen);
  const [examDate, setExamDate] = useState(todayStr);
  const [examInstitution, setExamInstitution] = useState('');
  const [editingExamId, setEditingExamId] = useState<string>();
  const [examNotes, setExamNotes] = useState('');
  const [branchInputs, setBranchInputs] = useState<Partial<Record<CanonicalBranchCode, number>>>({});

  // --- 2. SWSPS HATA ANALİZİ STATE ---
  const [errBranchCode, setErrBranchCode] = useState<CanonicalBranchCode>('B09');
  const [errSemanticCode, setErrSemanticCode] = useState<string>('');
  const [errSubtopic, setErrSubtopic] = useState<string>('');
  const [errSource, setErrSource] = useState<string>('Deneme');
  const [errSummary, setErrSummary] = useState<string>('');
  const [errType, setErrType] = useState<CognitiveErrorType>('Çeldirici');
  const [protocolType, setProtocolType] = useState<ProtocolType>(1);
  const [errorDate, setErrorDate] = useState(todayStr);
  const [errorLesson, setErrorLesson] = useState('');
  const [errorUnit, setErrorUnit] = useState('');
  const [errorQuestionId, setErrorQuestionId] = useState('');
  const [ankiMessage, setAnkiMessage] = useState('');
  const ankiRequest = useRef<AbortController | null>(null);
  useEffect(() => () => ankiRequest.current?.abort(), []);
  const protocol = protocolDetails[protocolType];
  const chosenError = simulationErrors.find(item => item.questionId === errorQuestionId);
  const [errDistractor, setErrDistractor] = useState<string>('');
  const [errCloze, setErrCloze] = useState<string>('');
  const [copiedClozeId, setCopiedClozeId] = useState<string | null>(null);

  // --- 3. CANLI SORU ÇÖZÜM KRONOMETRESİ & GUNLUK_LOG STATE ---
  const [stopwatchSeconds, setStopwatchSeconds] = useState<number>(0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState<boolean>(false);
  const [logSourceBook, setLogSourceBook] = useState<string>('DUSBANKASI AI Motoru');
  const [logBranchCode, setLogBranchCode] = useState<CanonicalBranchCode>('B09');
  const [logSemanticCode, setLogSemanticCode] = useState<string>('ADCC_IMPACT_01');
  const [logFormat, setLogFormat] = useState<QuestionFormatType>('Klinik Vaka / Senaryo');
  const [logCorrect, setLogCorrect] = useState<number>(0);
  const [logWrong, setLogWrong] = useState<number>(0);
  const [logEmpty, setLogEmpty] = useState<number>(0);
  const [logDurationMinutes, setLogDurationMinutes] = useState<number>(0);
  const [logNotes, setLogNotes] = useState<string>('');

  // Kronometre sayacı
  useEffect(() => {
    if (!isStopwatchRunning) return;
    const interval = setInterval(() => {
      setStopwatchSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isStopwatchRunning]);

  const formattedStopwatch = useMemo(() => {
    const mins = Math.floor(stopwatchSeconds / 60);
    const secs = stopwatchSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, [stopwatchSeconds]);

  const handleApplyStopwatchToForm = () => {
    setIsStopwatchRunning(false);
    const mins = Number((stopwatchSeconds / 60).toFixed(4));
    setLogDurationMinutes(mins);
  };

  // Son deneme ve radar grafiği hesaplaması
  const latestExam = mockExams[mockExams.length - 1] || null;

  // Canlı SWSPS Önizleme Skoru
  const previewSWSPS = useMemo(() => {
    const tax = topicTaxonomy.find(t => t.semanticCode === errSemanticCode);
    const repeats = semanticErrors.filter(e => e.semanticCode === errSemanticCode).length + 1;
    const r = tax?.fsrsRetrievabilityR;
    return calculateWorkbookSWSPS({
      weight: protocol.weight, repeatCount: repeats, difficultyD: tax?.fsrsDifficultyD ?? 7.5,
      retrievability: r === undefined ? null : { value: r, unit: 'percent' }, daysElapsed: 0,
    });
  }, [errSemanticCode, topicTaxonomy, semanticErrors, protocol.weight]);

  // Canlı Soru Log Önizleme Metrikleri
  const previewLogMetrics = useMemo(() => {
    return calculateQuestionLogMetrics(logCorrect, logWrong, logEmpty, logDurationMinutes);
  }, [logCorrect, logWrong, logEmpty, logDurationMinutes]);

  // Soru Bankası ve Format Kümülatif Metrikleri
  const aggregatedBanks = useMemo(() => {
    return aggregateQuestionBankMetrics(questionLogs);
  }, [questionLogs]);

  const openExamForm = (exam?: typeof latestExam) => {
    setEditingExamId(exam?.id);
    setExamDate(exam?.date ?? todayStr);
    setExamInstitution(exam?.institution ?? '');
    setExamNotes(exam?.notes ?? '');
    setBranchInputs(exam ? Object.fromEntries(Object.entries(exam.branchNets)
      .filter(([code]) => !exam.missingBranches?.includes(code as CanonicalBranchCode))) : {});
    setIsNewExamOpen(true);
  };

  const handleCreateExam = async (e: React.FormEvent) => {
    e.preventDefault();
    const entries = CANONICAL_16_BRANCHES.flatMap(branch => {
      const value = branchInputs[branch.code];
      return value === undefined ? [] : [[branch.code, value] as const];
    });
    if (entries.length < CANONICAL_16_BRANCHES.length) return;
    await submitOnce(async () => {
      if (await addMockExam(examDate, examInstitution, Object.fromEntries(entries) as Record<CanonicalBranchCode, number>, examNotes, editingExamId)) {
        setIsNewExamOpen(false);
      }
    });
  };

  const chooseWrong = (id: string) => {
    setErrorQuestionId(id);
    const choice = simulationErrors.find(item => item.questionId === id);
    if (!choice) return;
    setErrSummary(choice.question);
    setErrSemanticCode('');
    setErrSubtopic('');
    const branch = branchForQuestion(choice);
    if (branch) setErrBranchCode(branch);
    setErrorLesson(choice.lesson);
    setErrorUnit(choice.unit);
    const exam = mockExams.find(item => item.id === choice.examId || item.simulationId === choice.examId);
    setErrorDate(exam?.date ?? todayStr);
    setErrSource(exam?.institution || 'DUSBANKASI simülasyonu');
  };

  const handleCreateError = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!errSummary.trim() || (protocolType >= 4 && (!errorLesson || !errorUnit))) return;
    const chosenExam = chosenError ? mockExams.find(item => item.id === chosenError.examId || item.simulationId === chosenError.examId) : undefined;
    await submitOnce(async () => {
    const saved = await addSemanticError({
      date: errorDate, source: errSource, branchCode: errBranchCode, semanticCode: errSemanticCode,
      subtopic: errSubtopic || errorUnit || errSummary, questionSummary: errSummary, errorType: errType,
      distractorAnalysis: errDistractor, ankiClozeText: errCloze || undefined,
      mockExamId: chosenExam?.id, questionId: chosenError?.questionId,
      protocolType, protocolWeight: protocol.weight,
      topicId: errorLesson && errorUnit ? unitKey(errorLesson, errorUnit) : undefined,
    });
    if (!saved) return;
    if (protocolType === 5 && chosenError) onFavoriteQuestion?.(chosenError.questionId);
    setErrSummary('');
    setErrDistractor('');
    setErrCloze('');
    setErrorQuestionId('');
    });
  };

  // Yeni Soru Çözüm Oturumu Kaydet
  const handleCreateQuestionLog = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitOnce(async () => {
    const saved = await addQuestionLog({
      date: todayStr,
      sourceBook: logSourceBook,
      branchCode: logBranchCode,
      semanticCode: logSemanticCode,
      questionFormat: logFormat,
      correct: logCorrect,
      wrong: logWrong,
      empty: logEmpty,
      durationMinutes: logDurationMinutes,
      notes: logNotes
    });
    if (saved) setLogNotes('');
    });
  };

  // 16 Branş Spider/Radar SVG Nokta Hesaplayıcısı
  const radarGeometry = useMemo(() => {
    const cx = 170;
    const cy = 170;
    const maxR = 115;
    const total = CANONICAL_16_BRANCHES.length;

    const targetPoints: string[] = [];
    const actualPoints: string[] = [];
    const axes: {
      code: CanonicalBranchCode;
      shortName: string;
      xEnd: number;
      yEnd: number;
      xLabel: number;
      yLabel: number;
      actualPct: number;
      targetPct: number;
    }[] = [];

    CANONICAL_16_BRANCHES.forEach((b, idx) => {
      const angle = (Math.PI * 2 * idx) / total - Math.PI / 2;
      const targetPct = b.targetAccuracyPercent / 100;
      const actualNet = latestExam?.missingBranches?.includes(b.code) ? 0 : latestExam?.branchNets[b.code] ?? 0;
      const actualPct = Math.max(0, Math.min(1, actualNet / b.questionCount));

      const tx = cx + Math.cos(angle) * (maxR * targetPct);
      const ty = cy + Math.sin(angle) * (maxR * targetPct);
      targetPoints.push(`${tx.toFixed(1)},${ty.toFixed(1)}`);

      const ax = cx + Math.cos(angle) * (maxR * actualPct);
      const ay = cy + Math.sin(angle) * (maxR * actualPct);
      actualPoints.push(`${ax.toFixed(1)},${ay.toFixed(1)}`);

      axes.push({
        code: b.code,
        shortName: b.shortName,
        xEnd: cx + Math.cos(angle) * maxR,
        yEnd: cy + Math.sin(angle) * maxR,
        xLabel: cx + Math.cos(angle) * (maxR + 26),
        yLabel: cy + Math.sin(angle) * (maxR + 22),
        actualPct: Math.round(actualPct * 100),
        targetPct: b.targetAccuracyPercent
      });
    });

    return {
      cx,
      cy,
      maxR,
      targetPolygon: targetPoints.join(' '),
      actualPolygon: actualPoints.join(' '),
      axes
    };
  }, [latestExam]);

  return (
    <div className="space-y-6">
      {/* 1. Üst Başlık ve 4 Analitik Modül Seçici */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Excel-to-App Mimari Kılavuzu · Sekme 7, 8, 9, 10, 11 ve 12
            </div>
            <h2 className="text-lg font-bold text-slate-900 mt-0.5">
              16 Branş Deneme Analizi, SWSPS Bilişsel Ceza Motoru, Soru/Hız Kronometresi &amp; FSRS
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Hedef: {systemParams.targetGoalTitle} · Hedef Net: {systemParams.targetTotalNet.toFixed(1)} / 120 (ADÇC Elit Barajı: {systemParams.adccEliteThreshold}+)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setActiveSubTab('MOCK_EXAMS')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeSubTab === 'MOCK_EXAMS'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Deneme_Analiz (16 Branş &amp; Radar)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSubTab('SWSPS_ERRORS')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeSubTab === 'SWSPS_ERRORS'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <AlertOctagon className="w-3.5 h-3.5" />
              <span>SWSPS Hata Motoru &amp; FSRS Matrisi</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSubTab('QUESTION_SPEED_LOG')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeSubTab === 'QUESTION_SPEED_LOG'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Timer className="w-3.5 h-3.5" />
              <span>Soru Günlüğü &amp; Hız Kronometresi</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSubTab('ANKI_FSRS')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeSubTab === 'ANKI_FSRS'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Anki_FSRS_Takip (%{ankiSnapshot.overallRetentionPercent ?? '—'})</span>
            </button>
          </div>
        </div>

        {/* Hızlı Özet Metrik Şeridi */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <div className="text-[11px] font-semibold text-slate-500 uppercase">
              Son Deneme Neti ({latestExam?.id || '-'})
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-extrabold font-mono text-slate-900 tabular-nums">
                {latestExam ? latestExam.totalNet.toFixed(2) : '0.00'}
              </span>
              <span
                className={`text-xs font-mono font-bold ${
                  latestExam && latestExam.targetDiff >= 0 ? 'text-emerald-600' : 'text-amber-600'
                }`}
              >
                ({latestExam && latestExam.targetDiff >= 0 ? '+' : ''}
                {latestExam ? latestExam.targetDiff.toFixed(2) : '0.0'} Hedef Farkı)
              </span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <div className="text-[11px] font-semibold text-slate-500 uppercase">
              ADÇC 100+ Baraj Statüsü
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`px-2.5 py-0.5 rounded text-xs font-mono font-extrabold border ${
                  latestExam?.adccStatus === 'ELİT'
                    ? 'bg-slate-900 text-amber-400 border-amber-500'
                    : 'bg-indigo-100 text-indigo-800 border-indigo-300'
                }`}
              >
                {latestExam?.adccStatus || 'GELİŞİM'}
              </span>
              <span className="text-xs font-mono text-slate-600">
                Başarı: %{latestExam?.accuracyPercent ?? 0}
              </span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <div className="text-[11px] font-semibold text-slate-500 uppercase">
              En Yüksek SWSPS Ceza Puanı
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-extrabold font-mono text-rose-700 tabular-nums">
                {semanticErrors.length > 0
                  ? Math.max(...semanticErrors.map(e => e.swspsScore)).toFixed(2)
                  : '0.00'}
              </span>
              <span className="text-xs text-slate-500 truncate">
                {semanticErrors[0]?.semanticCode || '-'}
              </span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <div className="text-[11px] font-semibold text-slate-500 uppercase">
              Ortalama Soru Çözüm Hızı
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-extrabold font-mono text-indigo-700 tabular-nums">
                {questionLogs.length > 0
                  ? (
                      questionLogs.reduce((a, b) => a + b.speedSecondsPerQuestion, 0) /
                      questionLogs.length
                    ).toFixed(1)
                  : '52.0'}{' '}
                sn
              </span>
              <span className="text-xs text-emerald-700 font-semibold">Hedef: 50-60 sn</span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          SEKME 7: DENEME_ANALIZ (16 BRANŞ NET, SPIDER RADAR & TREND EĞRİSİ)
         ===================================================================== */}
      {activeSubTab === 'MOCK_EXAMS' && (
        <div className="space-y-6">
          {mockExams.filter(exam => exam.missingBranches?.length).map(exam => (
            <div key={exam.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
              <span>{exam.institution} · Eksik branşlar {exam.missingBranches?.join(', ')}</span>
              <button type="button" onClick={() => openExamForm(exam)} className="font-semibold underline">Eksik Branşları Gir</button>
            </div>
          ))}

          {/* Grafikler: Sol Çift Eksenli Net Artış Eğrisi + Sağ 16 Branş Spider/Radar Grafiği */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sol 7 Kolon: Deneme Net İlerleme Eğrisi & ADÇC 100+ Baraj Çizgisi */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Deneme Net İlerleme Eğrisi &amp; ADÇC 100+ Elit Baraj Çizgisi
                  </h3>
                  <p className="text-xs text-slate-500">
                    Temel Bilimler (Max 40), Klinik Bilimler (Max 80) ve Toplam Net (Max 120) Trendi
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openExamForm()}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Yeni 16 Branş Deneme Gir</span>
                </button>
              </div>

              {/* SVG Line Chart */}
              <div className="w-full overflow-x-auto">
                <svg viewBox="0 0 600 250" className="w-full h-60 overflow-visible">
                  {/* Arka Plan Kılavuz Çizgileri */}
                  {[0, 30, 60, 90, 100, 108, 120].map(val => {
                    const y = 215 - (val / 120) * 185;
                    const isAdcc = val === 100;
                    const isTarget = val === 108;
                    return (
                      <g key={val}>
                        <line
                          x1={45}
                          y1={y}
                          x2={575}
                          y2={y}
                          stroke={isAdcc ? '#D97706' : isTarget ? '#059669' : '#E2E8F0'}
                          strokeWidth={isAdcc || isTarget ? 1.5 : 1}
                          strokeDasharray={isAdcc || isTarget ? '5 4' : undefined}
                        />
                        <text
                          x={40}
                          y={y + 3}
                          textAnchor="end"
                          className="text-[10px] fill-slate-500 font-mono"
                        >
                          {val}
                        </text>
                        {isAdcc && (
                          <text
                            x={52}
                            y={y + 11}
                            textAnchor="start"
                            className="text-[9px] fill-amber-700 font-mono font-bold"
                          >
                            ADÇC Elit Barajı (100.0)
                          </text>
                        )}
                        {isTarget && (
                          <text
                            x={52}
                            y={y - 4}
                            textAnchor="start"
                            className="text-[9px] fill-emerald-700 font-mono font-bold"
                          >
                            Hedef ({systemParams.targetTotalNet})
                          </text>
                        )}
                      </g>
                    );
                  })}

                  {/* Çizgiler ve Noktalar */}
                  {mockExams.length > 0 && (() => {
                    const count = mockExams.length;
                    const getX = (idx: number) =>
                      count === 1 ? 310 : 120 + (idx / (count - 1)) * 420;
                    const getY = (net: number) => 215 - (net / 120) * 185;

                    const totalPath = mockExams
                      .map((m, i) => `${getX(i)},${getY(m.totalNet)}`)
                      .join(' ');
                    const clinicalPath = mockExams
                      .map((m, i) => `${getX(i)},${getY(m.clinicalNet)}`)
                      .join(' ');
                    const basicPath = mockExams
                      .map((m, i) => `${getX(i)},${getY(m.basicNet)}`)
                      .join(' ');

                    return (
                      <>
                        <polyline
                          fill="none"
                          stroke="#0F172A"
                          strokeWidth="3"
                          points={totalPath}
                        />
                        <polyline
                          fill="none"
                          stroke="#4F46E5"
                          strokeWidth="2"
                          strokeDasharray="3 3"
                          points={clinicalPath}
                        />
                        <polyline
                          fill="none"
                          stroke="#0284C7"
                          strokeWidth="2"
                          strokeDasharray="2 2"
                          points={basicPath}
                        />

                        {mockExams.map((m, i) => {
                          const x = getX(i);
                          const yTotal = getY(m.totalNet);
                          return (
                            <g key={m.id}>
                              <circle
                                cx={x}
                                cy={yTotal}
                                r={5}
                                fill={m.adccStatus === 'ELİT' ? '#059669' : '#0F172A'}
                                stroke="#FFFFFF"
                                strokeWidth={1.5}
                              />
                              <text
                                x={x}
                                y={yTotal - 10}
                                textAnchor="middle"
                                className="text-[10px] font-mono font-bold fill-slate-900"
                              >
                                {m.totalNet.toFixed(1)}
                              </text>
                              <text
                                x={x}
                                y={235}
                                textAnchor="middle"
                                className="text-[10px] font-mono fill-slate-600"
                              >
                                {m.id}
                              </text>
                            </g>
                          );
                        })}
                      </>
                    );
                  })()}
                </svg>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 text-[11px]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                    <span className="w-3 h-1 bg-slate-900 inline-block rounded" />
                    Toplam Net
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-indigo-700">
                    <span className="w-3 h-1 bg-indigo-600 inline-block rounded" />
                    Klinik Net (≤80)
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-sky-700">
                    <span className="w-3 h-1 bg-sky-600 inline-block rounded" />
                    Temel Net (≤40)
                  </span>
                </div>
                <span className="text-slate-500 font-mono">
                  Toplam {mockExams.length} Kurumsal Deneme
                </span>
              </div>
            </div>

            {/* Sağ 5 Kolon: 16 Branş Spider / Radar Grafiği */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  16 DUS Branşı Radar (Spider) Analizi ({latestExam?.id || 'Bazal'})
                </h3>
                <p className="text-xs text-slate-500">
                  Mavi Poligon: Son Deneme Başarı % · Yeşil Çizgi: ADÇC Hedef % Standartları
                </p>
              </div>

              <div className="flex items-center justify-center my-2">
                <svg viewBox="0 0 340 340" className="w-72 h-72 overflow-visible">
                  {/* Konsantrik Radar Halkaları (%25, %50, %75, %100) */}
                  {[0.25, 0.5, 0.75, 1.0].map(level => (
                    <circle
                      key={level}
                      cx={radarGeometry.cx}
                      cy={radarGeometry.cy}
                      r={radarGeometry.maxR * level}
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="1"
                    />
                  ))}

                  {/* 16 Branş Eksen Çizgileri ve Etiketleri */}
                  {radarGeometry.axes.map(axis => (
                    <g key={axis.code}>
                      <line
                        x1={radarGeometry.cx}
                        y1={radarGeometry.cy}
                        x2={axis.xEnd}
                        y2={axis.yEnd}
                        stroke="#CBD5E1"
                        strokeWidth="1"
                      />
                      <text
                        x={axis.xLabel}
                        y={axis.yLabel}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-[9px] font-mono font-bold fill-slate-700"
                      >
                        {axis.code}
                      </text>
                    </g>
                  ))}

                  {/* Hedef Poligonu */}
                  <polygon
                    points={radarGeometry.targetPolygon}
                    fill="rgba(16, 185, 129, 0.08)"
                    stroke="#059669"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />

                  {/* Son Deneme Poligonu */}
                  <polygon
                    points={radarGeometry.actualPolygon}
                    fill="rgba(79, 70, 229, 0.22)"
                    stroke="#4F46E5"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-100">
                <div className="bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="text-slate-500 block">En Güçlü Klinik Branş:</span>
                  <span className="font-bold text-emerald-700 font-mono">
                    B09 Çene Cerrahisi (%{latestExam ? Math.round((latestExam.branchNets.B09 / 10) * 100) : 0})
                  </span>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="text-slate-500 block">Öncelikli Gelişim Branşı:</span>
                  <span className="font-bold text-amber-700 font-mono">
                    B12 Ortodonti / B16 Protetik
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 16 Branş Deneme Sonuçları Tablosu (Sayfa 11) */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Deneme_Analiz — 16 Kanonik Branş Netleri ve ADÇC Baraj Tablosu
                </h3>
                <p className="text-xs text-slate-500">
                  Temel Net (≤40) + Klinik Net (≤80) = Toplam Net (≤120) · ADÇC Baraj Statüsü: ≥100.0 Net = ELİT
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-white font-semibold">
                  <tr>
                    <th className="py-3 px-3">Deneme ID</th>
                    <th className="py-3 px-3">Tarih</th>
                    <th className="py-3 px-3">Kurum / Sınav Adı</th>
                    <th className="py-3 px-3 text-right">Temel (40)</th>
                    <th className="py-3 px-3 text-right">Klinik (80)</th>
                    <th className="py-3 px-3 text-right">Toplam Net</th>
                    <th className="py-3 px-3 text-right">Hedefe Uzaklık</th>
                    <th className="py-3 px-3 text-right">Başarı %</th>
                    <th className="py-3 px-3 text-center">ADÇC Statüsü</th>
                    <th className="py-3 px-3 text-right">Sil</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {mockExams.map(exam => (
                    <tr key={exam.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-3 font-bold text-indigo-700">{exam.id}</td>
                      <td className="py-3 px-3 tabular-nums text-slate-600">{exam.date}</td>
                      <td className="py-3 px-3 font-sans">
                        <div className="font-bold text-slate-900">{exam.institution}</div>
                        {exam.notes && (
                          <div className="text-[11px] text-slate-500 truncate max-w-md">
                            {exam.notes}
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right tabular-nums text-sky-700 font-bold">
                        {exam.basicNet.toFixed(2)}
                      </td>
                      <td className="py-3 px-3 text-right tabular-nums text-indigo-700 font-bold">
                        {exam.clinicalNet.toFixed(2)}
                      </td>
                      <td className="py-3 px-3 text-right tabular-nums font-extrabold text-slate-900 text-sm">
                        {exam.totalNet.toFixed(2)}
                      </td>
                      <td
                        className={`py-3 px-3 text-right tabular-nums font-bold ${
                          exam.targetDiff >= 0 ? 'text-emerald-700' : 'text-amber-700'
                        }`}
                      >
                        {exam.targetDiff >= 0 ? '+' : ''}
                        {exam.targetDiff.toFixed(2)}
                      </td>
                      <td className="py-3 px-3 text-right tabular-nums text-slate-700">
                        %{exam.accuracyPercent}
                      </td>
                      <td className="py-3 px-3 text-center font-sans">
                        {exam.adccStatus === 'ELİT' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-amber-500 font-extrabold text-[11px]">
                            <Award className="w-3 h-3" />
                            <span>ELİT (100+)</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-800 border border-indigo-200 font-bold text-[11px]">
                            <span>GELİŞİM</span>
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          type="button"
                          onClick={() => deleteMockExam(exam.id)}
                          className="p-1 text-slate-400 hover:text-rose-600 rounded"
                          aria-label={`${exam.id} Denemesini Sil`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Yeni 16 Branş Deneme Giriş Modalı */}
          {isNewExamOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
              <div ref={examDialog} role="dialog" aria-modal="true" aria-label="Deneme sonucu" tabIndex={-1} className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-3xl w-full p-6 space-y-4 my-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Yeni 16 Branş DUS Deneme Sınavı Girişi
                    </h3>
                    <p className="text-xs text-slate-500">
                      Açık sarı hücrelere her branşın netini girin; Temel (≤40), Klinik (≤80) ve ADÇC Barajı otomatik hesaplanır.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleCreateExam} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Sınav Tarihi
                      </label>
                      <input
                        type="date"
                        aria-label="Sınav Tarihi"
                        max={todayStr}
                        value={examDate}
                        onChange={e => setExamDate(e.target.value)}
                        className="w-full px-3 py-2 bg-yellow-50 border border-yellow-400 rounded-lg text-xs font-mono"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Kurum / Deneme Adı
                      </label>
                      <input
                        type="text"
                        aria-label="Kurum / Deneme Adı"
                        value={examInstitution}
                        onChange={e => setExamInstitution(e.target.value)}
                        className="w-full px-3 py-2 bg-yellow-50 border border-yellow-400 rounded-lg text-xs"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-h-72 overflow-y-auto p-1">
                    {CANONICAL_16_BRANCHES.map(b => (
                      <div
                        key={b.code}
                        className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1"
                      >
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-mono font-bold text-indigo-700">{b.code}</span>
                          <span className="font-mono text-slate-500">Max: {b.questionCount}</span>
                        </div>
                        <div className="text-xs font-semibold text-slate-800 truncate">
                          {b.shortName}
                        </div>
                        <input
                          type="number"
                          step="0.25"
                          min={-b.questionCount / 4}
                          max={b.questionCount}
                          aria-label={`${b.name} Net Girişi`}
                          required
                          value={branchInputs[b.code] ?? ''}
                          onChange={e =>
                            setBranchInputs(prev => ({
                              ...prev,
                              [b.code]: e.target.value === '' ? undefined : Number(e.target.value)
                            }))
                          }
                          className="w-full px-2 py-1 bg-yellow-100 border border-yellow-400 rounded text-xs font-mono font-bold text-right tabular-nums"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Stratejik Deneme Notu
                    </label>
                    <input
                      type="text"
                      value={examNotes}
                      onChange={e => setExamNotes(e.target.value)}
                      placeholder="Örn: Protetik Kennedy Sınıf II ve Biyokimya kollajen soruları SWSPS listesine eklendi..."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={closeExam}
                      disabled={busy || saving}
                      className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700"
                    >
                      İptal
                    </button>
                    <button
                      type="submit"
                      disabled={busy || saving}
                      className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold"
                    >
                      {saving ? 'Kaydediliyor…' : 'Denemeyi Kaydet'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          SEKME 9 & 10: SEMANTIK_HATA_ANALIZI (SWSPS) & KONU_MATRISI (FSRS)
         ===================================================================== */}
      {activeSubTab === 'SWSPS_ERRORS' && (
        <div className="space-y-6">
          {/* SWSPS Matematiksel Formül & Yeni Hata Teşhis Formu */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <div className="text-[11px] font-semibold text-rose-600 uppercase">
                    Sekme 10 · Semantik_Hata_Analizi
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    SWSPS Bilişsel Ceza Skoru &amp; Hata Kaydı
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase">
                    Hesaplanan SWSPS
                  </div>
                  <div className="text-lg font-extrabold font-mono text-rose-700 tabular-nums">
                    {previewSWSPS === null ? 'R bilinmiyor' : `${previewSWSPS.toFixed(2)} puan`}
                  </div>
                </div>
              </div>

              <form onSubmit={handleCreateError} className="space-y-3 text-xs">
                {simulationErrors.length > 0 && (
                  <label className="block font-semibold text-slate-700">
                    Simülasyon Yanlışı
                    <select value={errorQuestionId} onChange={e => chooseWrong(e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2">
                      <option value="">Soru seç</option>
                      {simulationErrors.map((item, index) => <option key={item.questionId} value={item.questionId}>{index + 1}. {item.question.slice(0, 110)}</option>)}
                    </select>
                  </label>
                )}
                <div className="grid gap-2 sm:grid-cols-2">
                  <label className="font-semibold text-slate-700">
                    Müdahale Tipi
                    <select value={protocolType} onChange={e => setProtocolType(Number(e.target.value) as ProtocolType)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2">
                      {Object.entries(protocolDetails).map(([key, detail]) => <option key={key} value={key}>Tip {key} · {detail.label}</option>)}
                    </select>
                  </label>
                  <label className="font-semibold text-slate-700">
                    Deneme Tarihi
                    <input type="date" required max={todayStr} value={errorDate} onChange={e => setErrorDate(e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2" />
                  </label>
                </div>
                <p className="rounded-lg bg-indigo-50 p-2 text-xs text-indigo-900">{protocol.action} SWSPS ağırlığı {protocol.weight}.</p>
                {protocolType >= 4 && (
                  <div className="grid gap-2 sm:grid-cols-2">
                    <label className="min-w-0 font-semibold text-slate-700">
                      Doğrulama Dersi
                      <select required value={errorLesson} onChange={e => { setErrorLesson(e.target.value); setErrorUnit(''); }}
                        className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2">
                        <option value="">Ders seç</option>
                        {Object.keys(CANONICAL_UNITS).map(lesson => <option key={lesson}>{lesson}</option>)}
                      </select>
                    </label>
                    <label className="min-w-0 font-semibold text-slate-700">
                      Doğrulama Ünitesi
                      <select required value={errorUnit} onChange={e => setErrorUnit(e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2">
                        <option value="">Ünite seç</option>
                        {CANONICAL_UNITS[errorLesson]?.map(unit => <option key={unit}>{unit}</option>)}
                      </select>
                    </label>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Branş</label>
                    <select
                      value={errBranchCode}
                      onChange={e => setErrBranchCode(e.target.value as CanonicalBranchCode)}
                      className="w-full px-2.5 py-1.5 bg-yellow-50 border border-yellow-400 rounded-lg font-medium"
                    >
                      {CANONICAL_16_BRANCHES.map(b => (
                        <option key={b.code} value={b.code}>
                          [{b.code}] {b.shortName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Semantik Kod (FSRS)
                    </label>
                    <select
                      value={errSemanticCode}
                      onChange={e => {
                        setErrSemanticCode(e.target.value);
                        const found = topicTaxonomy.find(t => t.semanticCode === e.target.value);
                        if (found) {
                          setErrBranchCode(found.branchCode);
                          setErrSubtopic(found.subtopic);
                        }
                      }}
                      className="w-full px-2.5 py-1.5 bg-yellow-50 border border-yellow-400 rounded-lg font-mono"
                    >
                      <option value="">Semantik kod seç</option>
                      {topicTaxonomy.map(t => (
                        <option key={t.id} value={t.semanticCode}>
                          {t.semanticCode} ({t.fsrsRetrievabilityR === undefined ? 'R bilinmiyor' : `R %${t.fsrsRetrievabilityR}`})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Eski Skor Kategorisi
                    </label>
                    <select
                      value={errType}
                      onChange={e => setErrType(e.target.value as CognitiveErrorType)}
                      className="w-full px-2.5 py-1.5 bg-yellow-50 border border-yellow-400 rounded-lg font-semibold"
                    >
                      <option value="Çeldirici">Çeldirici Tuzağı</option>
                      <option value="Muhakeme">Muhakeme Hatası</option>
                      <option value="Bilgi">Bilgi Eksikliği</option>
                      <option value="Dikkat">Soru Kökü / Dikkat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Kaynak</label>
                    <input
                      type="text"
                      aria-label="Kaynak"
                      value={errSource}
                      onChange={e => setErrSource(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-yellow-50 border border-yellow-400 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Hata Yapılan Soru Özeti &amp; Kavram
                  </label>
                  <input
                    type="text"
                    value={errSummary}
                    onChange={e => setErrSummary(e.target.value)}
                    placeholder="Örn: OKK kapsülünün kalın sanılması, PTCH1 ve satellit kist mekanizması..."
                    className="w-full px-2.5 py-1.5 bg-yellow-50 border border-yellow-400 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Düşülen Çeldirici Analizi
                  </label>
                  <input
                    type="text"
                    value={errDistractor}
                    onChange={e => setErrDistractor(e.target.value)}
                    placeholder="Neden bu şıkka düştüm? Hangi iki kavram birbiriyle karıştı?"
                    className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Tek Satırlık Anki Cloze Kart Metni (Opsiyonel)
                  </label>
                  <input
                    type="text"
                    value={errCloze}
                    onChange={e => setErrCloze(e.target.value)}
                    placeholder="Örn: {{c1::OKK}} ince frajil kapsüllüdür ve {{c2::PTCH1}} mutasyonu gösterir."
                    className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg font-mono text-[11px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={busy || saving}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors"
                >
                  Hata Teşhisini &amp; SWSPS Puanını Kaydet
                </button>
              </form>
            </div>

            {/* Sağ 7 Kolon: SWSPS Sıralı Hata Listesi */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    En Yüksek SWSPS Bilişsel Ceza Skorlu Hatalar ({semanticErrors.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Formül: W_HataTipi &times; N_Tekrar &times; (1 + D/10) &times; (1 - R_FSRS) &times; Tazelik Çarpanı
                  </p>
                </div>
              </div>

              <div className="space-y-3 max-h-[430px] overflow-y-auto pr-1">
                {[...semanticErrors]
                  .sort((a, b) => b.swspsScore - a.swspsScore)
                  .map(err => (
                    <div
                      key={err.id}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-mono text-xs font-extrabold tabular-nums">
                            SWSPS: {err.scoreUnavailable ? '—' : err.swspsScore.toFixed(2)}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 border border-indigo-200 font-mono text-[11px] font-bold">
                            {err.semanticCode}
                          </span>
                          <span className="text-xs font-bold text-slate-800">
                            [{err.branchCode}] {err.branchName}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold">
                            {err.errorType}
                          </span>
                          <button
                            type="button"
                            onClick={() => toggleSemanticErrorAnkiStatus(err.id)}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                              err.ankiClozeStatus === 'Eklendi'
                                ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                                : 'bg-slate-200 text-slate-700 border-slate-300'
                            }`}
                          >
                            Anki: {err.ankiClozeStatus}
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteSemanticError(err.id)}
                            className="p-1 text-slate-400 hover:text-rose-600"
                            aria-label={`${err.id} Hatasını Sil`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="text-xs font-bold text-slate-900">{err.questionSummary}</div>
                      <div className="text-[11px] text-slate-600">
                        <strong className="text-slate-800">Çeldirici Otopsisi:</strong>{' '}
                        {err.distractorAnalysis}
                      </div>

                      {err.ankiClozeText && (
                        <div className="p-2 rounded bg-white border border-slate-200 flex items-center justify-between gap-2 text-[11px] font-mono text-indigo-950">
                          <span className="truncate">{err.ankiClozeText}</span>
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(err.ankiClozeText || '');
                              setCopiedClozeId(err.id);
                              setTimeout(() => setCopiedClozeId(null), 2000);
                            }}
                            className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 rounded text-[10px] font-sans font-semibold shrink-0 flex items-center gap-1"
                          >
                            {copiedClozeId === err.id ? (
                              <Check className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                            <span>{copiedClozeId === err.id ? 'Kopyalandı' : 'Cloze Kopyala'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Sekme 9: Konu_Matrisi (KM-01..KM-16 Kanonik Taksonomi & FSRS S/D/R Tablosu) */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-5 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">
                Sekme 9: Konu_Matrisi — Kanonik Konu Taksonomisi &amp; FSRS Bellek Parametreleri (S / D / R)
              </h3>
              <p className="text-xs text-slate-500">
                FSRS Retrievability (R%) veya Zorluk (D) değerlerini güncellediğinizde SWSPS ceza skorları anında yeniden hesaplanır.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-white font-semibold">
                  <tr>
                    <th className="py-2.5 px-3">ID</th>
                    <th className="py-2.5 px-3">Branş</th>
                    <th className="py-2.5 px-3">Semantik Kod</th>
                    <th className="py-2.5 px-3">Alt Konu</th>
                    <th className="py-2.5 px-3 text-center">DUS Ağırlığı</th>
                    <th className="py-2.5 px-3 text-center">Stability (S Gün)</th>
                    <th className="py-2.5 px-3 text-center bg-amber-500 text-slate-950">
                      Difficulty D (1-10)
                    </th>
                    <th className="py-2.5 px-3 text-center bg-amber-500 text-slate-950">
                      Retrievability R (%)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {topicTaxonomy.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="py-2 px-3 font-bold text-slate-700">{item.id}</td>
                      <td className="py-2 px-3 font-sans font-semibold text-slate-800">
                        [{item.branchCode}] {item.branchName}
                      </td>
                      <td className="py-2 px-3 font-bold text-indigo-700">{item.semanticCode}</td>
                      <td className="py-2 px-3 font-sans text-slate-700">{item.subtopic}</td>
                      <td className="py-2 px-3 text-center tabular-nums font-bold">
                        {item.dusWeight.toFixed(1)}x
                      </td>
                      <td className="py-2 px-3 text-center tabular-nums text-slate-700">
                        {item.fsrsStabilityS}g
                      </td>
                      <td className="py-2 px-3 text-center bg-yellow-50/80">
                        <input
                          type="number"
                          step="0.1"
                          min={1}
                          max={10}
                          aria-label={`${item.semanticCode} FSRS Zorluk D`}
                          value={item.fsrsDifficultyD}
                          onChange={e =>
                            updateTaxonomyItem(item.id, {
                              fsrsDifficultyD: parseFloat(e.target.value) || 5
                            })
                          }
                          className="w-16 px-1.5 py-0.5 bg-yellow-100 border border-yellow-400 rounded text-center font-bold tabular-nums"
                        />
                      </td>
                      <td className="py-2 px-3 text-center bg-yellow-50/80">
                        <input
                          type="number"
                          min={10}
                          max={100}
                          aria-label={`${item.semanticCode} FSRS Kalıcılık R`}
                          value={item.fsrsRetrievabilityR ?? ''}
                          onChange={e =>
                            updateTaxonomyItem(item.id, {
                              fsrsRetrievabilityR: e.target.value === '' ? undefined : Number(e.target.value)
                            })
                          }
                          className="w-16 px-1.5 py-0.5 bg-yellow-100 border border-yellow-400 rounded text-center font-bold tabular-nums"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SEKME 8 & 11: GUNLUK_LOG (KRONOMETRE & HIZ) VE SORU_BANKASI_METRIKLERI
         ===================================================================== */}
      {activeSubTab === 'QUESTION_SPEED_LOG' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sol 5 Kolon: Canlı Soru Çözüm Kronometresi & Oturum Giriş Formu */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
              {/* Canlı Kronometre Kutusu */}
              <div className="bg-slate-900 text-white rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase text-emerald-400 font-semibold">
                    Canlı Soru Çözüm Kronometresi
                  </div>
                  <div className="text-3xl font-extrabold font-mono tracking-wider mt-0.5 tabular-nums">
                    {formattedStopwatch}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    İdeal DUS Temposu: 50 - 60 sn / soru
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setIsStopwatchRunning(r => !r)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 ${
                        isStopwatchRunning
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-emerald-500 text-slate-950'
                      }`}
                    >
                      {isStopwatchRunning ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>Duraklat</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" />
                          <span>Başlat</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsStopwatchRunning(false);
                        setStopwatchSeconds(0);
                      }}
                      className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg"
                      title="Sıfırla"
                      aria-label="Kronometreyi Sıfırla"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={handleApplyStopwatchToForm}
                    className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-semibold rounded-md"
                  >
                    Süreyi Forma Aktar
                  </button>
                </div>
              </div>

              {/* Gunluk_Log Formu */}
              <form onSubmit={handleCreateQuestionLog} className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Soru Bankası / Kaynak
                    </label>
                    <select
                      value={logSourceBook}
                      onChange={e => setLogSourceBook(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-yellow-50 border border-yellow-400 rounded-lg font-medium"
                    >
                      <option value="DUSBANKASI AI Motoru">DUSBANKASI AI Motoru</option>
                      <option value="DUSDATA Soru Bankası">DUSDATA Soru Bankası</option>
                      <option value="TTS Çıkmış Sorular">TTS Çıkmış Sorular</option>
                      <option value="DUSDATA Vaka Kitabı">DUSDATA Vaka Kitabı</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Soru Formatı</label>
                    <select
                      value={logFormat}
                      onChange={e => setLogFormat(e.target.value as QuestionFormatType)}
                      className="w-full px-2.5 py-1.5 bg-yellow-50 border border-yellow-400 rounded-lg font-medium"
                    >
                      <option value="Klinik Vaka / Senaryo">Klinik Vaka / Senaryo</option>
                      <option value="Öncüllü / Ayrım Sorusu">Öncüllü / Ayrım Sorusu</option>
                      <option value="Spot / Bilgi Sorusu">Spot / Bilgi Sorusu</option>
                      <option value="ÖSYM Çıkmış Sorular">ÖSYM Çıkmış Sorular</option>
                      <option value="Komplikasyon Yönetimi">Komplikasyon Yönetimi</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Branş</label>
                    <select
                      value={logBranchCode}
                      onChange={e => setLogBranchCode(e.target.value as CanonicalBranchCode)}
                      className="w-full px-2.5 py-1.5 bg-yellow-50 border border-yellow-400 rounded-lg"
                    >
                      {CANONICAL_16_BRANCHES.map(b => (
                        <option key={b.code} value={b.code}>
                          [{b.code}] {b.shortName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Semantik Kod</label>
                    <input
                      type="text"
                      value={logSemanticCode}
                      onChange={e => setLogSemanticCode(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-yellow-50 border border-yellow-400 rounded-lg font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Doğru</label>
                    <input
                      type="number"
                      min={0}
                      value={logCorrect}
                      onChange={e => setLogCorrect(parseInt(e.target.value, 10) || 0)}
                      className="w-full px-2 py-1.5 bg-yellow-100 border border-yellow-400 rounded font-mono font-bold text-center"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Yanlış</label>
                    <input
                      type="number"
                      min={0}
                      value={logWrong}
                      onChange={e => setLogWrong(parseInt(e.target.value, 10) || 0)}
                      className="w-full px-2 py-1.5 bg-yellow-100 border border-yellow-400 rounded font-mono font-bold text-center"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Boş</label>
                    <input
                      type="number"
                      min={0}
                      value={logEmpty}
                      onChange={e => setLogEmpty(parseInt(e.target.value, 10) || 0)}
                      className="w-full px-2 py-1.5 bg-yellow-100 border border-yellow-400 rounded font-mono font-bold text-center"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Süre (dk)</label>
                    <input
                      type="number"
                      min={0}
                      step="any"
                      value={logDurationMinutes}
                      onChange={e => setLogDurationMinutes(Number(e.target.value))}
                      className="w-full px-2 py-1.5 bg-yellow-100 border border-yellow-400 rounded font-mono font-bold text-center"
                    />
                  </div>
                </div>

                {/* Canlı Hesaplanan Net ve Hız Önizleme Bandı */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-slate-500">Net:</span>{' '}
                    <strong className="text-slate-900">{previewLogMetrics.net}</strong> (%{previewLogMetrics.accuracyPercent})
                  </div>
                  <div>
                    <span className="text-slate-500">Hız:</span>{' '}
                    <strong className="text-indigo-700">
                      {previewLogMetrics.speedSecondsPerQuestion} sn/soru
                    </strong>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold">
                    {previewLogMetrics.paceVerdict}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={busy || saving || logCorrect + logWrong + logEmpty === 0}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg"
                >
                  Soru Çözüm Oturumunu Kaydet
                </button>
              </form>
            </div>

            {/* Sağ 7 Kolon: Soru_Bankasi_Metrikleri (Kaynak & Format Kıyası) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
                <h3 className="text-sm font-bold text-slate-900">
                  Sekme 11: Soru_Bankasi_Metrikleri — Kaynak ve Soru Formatı Performans Kıyası
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-slate-700 font-semibold">
                      <tr>
                        <th className="py-2 px-3">Kaynak / Soru Bankası</th>
                        <th className="py-2 px-2 text-right">Toplam</th>
                        <th className="py-2 px-2 text-right">Net</th>
                        <th className="py-2 px-2 text-right">Doğruluk %</th>
                        <th className="py-2 px-2 text-right">Ort. Hız (sn)</th>
                        <th className="py-2 px-3 text-right">Kapsama</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono">
                      {aggregatedBanks.bySource.map(row => (
                        <tr key={row.key}>
                          <td className="py-2 px-3 font-sans font-bold text-slate-900">{row.key}</td>
                          <td className="py-2 px-2 text-right tabular-nums">{row.totalQuestions}</td>
                          <td className="py-2 px-2 text-right tabular-nums font-bold text-indigo-700">
                            {row.net}
                          </td>
                          <td className="py-2 px-2 text-right tabular-nums font-bold text-emerald-700">
                            %{row.accuracyPercent}
                          </td>
                          <td className="py-2 px-2 text-right tabular-nums">
                            {row.avgSpeedSeconds} sn
                          </td>
                          <td className="py-2 px-3 text-right font-sans">
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">
                              {row.coverageStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-800 mb-2">
                    5 Soru Formatına Göre Doğruluk % ve Hız (sn/soru) Dağılımı
                  </div>
                  <div className="space-y-2">
                    {aggregatedBanks.byFormat.map(fmt => (
                      <div key={fmt.key} className="space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-slate-800">{fmt.key}</span>
                          <span className="font-mono text-slate-600 tabular-nums">
                            {fmt.totalQuestions} Soru · %{fmt.accuracyPercent} Başarı ·{' '}
                            {fmt.avgSpeedSeconds} sn/soru
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-600"
                            style={{ width: `${Math.min(100, fmt.accuracyPercent)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gunluk_Log Son Oturumlar Tablosu */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 uppercase">
                    Sekme 8: Gunluk_Log — Kayıtlı Soru Çözüm Oturumları ({questionLogs.length})
                  </h4>
                </div>
                <div className="overflow-x-auto max-h-60">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-600 font-semibold">
                      <tr>
                        <th className="py-2 px-3">Tarih</th>
                        <th className="py-2 px-3">Kaynak &amp; Branş</th>
                        <th className="py-2 px-2 text-right">D / Y</th>
                        <th className="py-2 px-2 text-right">Net</th>
                        <th className="py-2 px-2 text-right">Hız (sn)</th>
                        <th className="py-2 px-2 text-right">Sil</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono">
                      {questionLogs.map(log => (
                        <tr key={log.id} className="hover:bg-slate-50">
                          <td className="py-2 px-3 tabular-nums text-slate-600">{log.date}</td>
                          <td className="py-2 px-3 font-sans">
                            <div className="font-bold text-slate-900">
                              [{log.branchCode}] {log.branchName}
                            </div>
                            <div className="text-[10px] text-slate-500">
                              {log.sourceBook} · {log.questionFormat}
                            </div>
                          </td>
                          <td className="py-2 px-2 text-right tabular-nums">
                            {log.correct}D / {log.wrong}Y
                          </td>
                          <td className="py-2 px-2 text-right tabular-nums font-bold text-emerald-700">
                            {log.net}
                          </td>
                          <td className="py-2 px-2 text-right tabular-nums font-bold text-indigo-700">
                            {log.speedSecondsPerQuestion} sn
                          </td>
                          <td className="py-2 px-2 text-right">
                            <button
                              type="button"
                              onClick={() => deleteQuestionLog(log.id)}
                              className="p-1 text-slate-400 hover:text-rose-600"
                              aria-label={`${log.id} Kaydını Sil`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SEKME 12: ANKI_FSRS_TAKIP (BELLEK KALICILIK MOTORU & 16 BRANŞ KART)
         ===================================================================== */}
      {activeSubTab === 'ANKI_FSRS' && (
        <div className="space-y-6">
          <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex flex-wrap items-end gap-3">
              <label className="text-sm font-semibold">
                FSRS anlık görüntüsü
                <input type="file" accept=".json,application/json" disabled={saving} className="mt-1 block max-w-full text-xs"
                  onChange={async event => {
                    const file = event.currentTarget.files?.[0];
                    event.currentTarget.value = '';
                    if (!file) return;
                    try {
                      const snapshot = parseAnkiSnapshot(JSON.parse(await file.text()), systemParams.targetFsrsRetention);
                      if (await updateAnkiSnapshot(snapshot)) setAnkiMessage('FSRS anlık görüntüsü kaydedildi.');
                    } catch (reason) {
                      setAnkiMessage(reason instanceof Error ? reason.message : 'Anlık görüntü okunamadı.');
                    }
                  }} />
              </label>
              <button type="button" disabled={saving} onClick={async () => {
                ankiRequest.current?.abort();
                const request = new AbortController();
                ankiRequest.current = request;
                try {
                  const activity = await fetchLocalAnkiActivity(request.signal);
                  if (await updateAnkiSnapshot({ dailyReviewCount: activity.reviews })) setAnkiMessage('Bugünkü tekrar sayısı kaydedildi.');
                } catch (reason) {
                  if (!request.signal.aborted) setAnkiMessage(reason instanceof Error ? reason.message : 'Yerel Anki bağlantısı kullanılamıyor.');
                }
              }} className="rounded-lg border border-slate-200 px-3 py-2 text-sm">Yerel Anki’den Tekrar Sayısını Al</button>
              <button type="button" disabled={!semanticErrors.some(item => item.ankiClozeText)} onClick={async () => {
                const data = exportAnkiCards(semanticErrors.filter(item => item.ankiClozeText).map(item => ({ text: item.ankiClozeText!, extra: item.distractorAnalysis })));
                try {
                  await navigator.clipboard.writeText(data);
                  setAnkiMessage('Anki kartları sekmeyle ayrılmış biçimde kopyalandı.');
                } catch {
                  setAnkiMessage('Panoya erişilemedi.');
                }
              }} className="rounded-lg border border-slate-200 px-3 py-2 text-sm disabled:opacity-50">Anki Kartlarını Kopyala (TSV)</button>
            </div>
            {ankiMessage && <p role="status" className="text-sm text-slate-700">{ankiMessage}</p>}
            <p className="text-xs text-slate-500">Son kayıt {ankiSnapshots.at(-1)?.lastSyncDate ?? '—'} · {ankiSnapshots.length} anlık görüntü</p>
            {ankiSnapshots.length > 0 && (
              <details className="text-sm">
                <summary className="cursor-pointer">FSRS Geçmişi</summary>
                <ul className="mt-2 space-y-1">
                  {[...ankiSnapshots].reverse().map(snapshot => <li key={snapshot.lastSyncDate}>{snapshot.lastSyncDate} · {snapshot.totalCards} kart · {snapshot.overallRetentionPercent === undefined ? 'Kalıcılık bilinmiyor' : `%${snapshot.overallRetentionPercent} kalıcılık`}</li>)}
                </ul>
              </details>
            )}
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sol 4 Kolon: Dairesel Kalıcılık Göstergesi (%95.8 vs %90.0 Hedef) */}
            <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase">
                  Sekme 12 · Anki_FSRS_Takip
                </div>
                <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                  Canlı FSRS Retention (Kalıcılık) Göstergesi
                </h3>
              </div>

              <div className="flex items-center justify-center py-4">
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="10"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${((ankiSnapshot.overallRetentionPercent ?? 0) / 100) * 314} 314`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-extrabold font-mono text-slate-900 tabular-nums">
                      %{ankiSnapshot.overallRetentionPercent ?? '—'}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700">
                      Hedef: %{ankiSnapshot.targetRetentionPercent}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 mt-0.5">
                      {ankiSnapshot.overallRetentionPercent == null ? 'Ölçüm yok' : `Sapma ${(ankiSnapshot.overallRetentionPercent - ankiSnapshot.targetRetentionPercent).toFixed(1)}%`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-100">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase block">Günlük Tekrar</span>
                  <input
                    type="number"
                    aria-label="Anki Günlük Tekrar Sayısı"
                    value={ankiSnapshot.dailyReviewCount}
                    onChange={e =>
                      updateAnkiSnapshot({ dailyReviewCount: parseInt(e.target.value, 10) || 0 })
                    }
                    className="w-20 mt-0.5 px-1.5 py-0.5 bg-yellow-100 border border-yellow-400 rounded font-mono font-bold"
                  />
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase block">Canlı Retention %</span>
                  <input
                    type="number"
                    step="0.1"
                    aria-label="Anki Genel Kalıcılık Yüzdesi"
                    value={ankiSnapshot.overallRetentionPercent ?? ''}
                    onChange={e =>
                      updateAnkiSnapshot({
                        overallRetentionPercent: e.target.value === '' ? undefined : Number(e.target.value)
                      })
                    }
                    className="w-20 mt-0.5 px-1.5 py-0.5 bg-yellow-100 border border-yellow-400 rounded font-mono font-bold"
                  />
                </div>
              </div>
            </div>

            {/* Sağ 8 Kolon: Kart Olgunluk Dağılımı (Stacked Bar) & 16 Branş Anki Tablosu */}
            <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Anki Deste Olgunluk Dağılımı ({ankiSnapshot.totalCards} Toplam Kart)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Olgun (&ge;21 Gün): {ankiSnapshot.matureCards} · Genç (&lt;21 Gün):{' '}
                    {ankiSnapshot.youngCards} · Öğrenilen: {ankiSnapshot.learningCards} · Yeni:{' '}
                    {ankiSnapshot.newCards}
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-bold">
                  Kart Başı Hız: {ankiSnapshot.averageTimeSecondsPerCard ?? '—'} sn
                </span>
              </div>

              {/* Stacked Bar */}
              <div className="w-full h-5 bg-slate-100 rounded-full overflow-hidden flex">
                <div
                  className="bg-emerald-600 h-full"
                  style={{ width: `${(ankiSnapshot.matureCards / Math.max(1, ankiSnapshot.totalCards)) * 100}%` }}
                  title={`Olgun Kartlar: ${ankiSnapshot.matureCards}`}
                />
                <div
                  className="bg-indigo-500 h-full"
                  style={{ width: `${(ankiSnapshot.youngCards / Math.max(1, ankiSnapshot.totalCards)) * 100}%` }}
                  title={`Genç Kartlar: ${ankiSnapshot.youngCards}`}
                />
                <div
                  className="bg-amber-500 h-full"
                  style={{ width: `${(ankiSnapshot.learningCards / Math.max(1, ankiSnapshot.totalCards)) * 100}%` }}
                  title={`Öğrenilen Kartlar: ${ankiSnapshot.learningCards}`}
                />
                <div
                  className="bg-sky-400 h-full"
                  style={{ width: `${(ankiSnapshot.newCards / Math.max(1, ankiSnapshot.totalCards)) * 100}%` }}
                  title={`Yeni Kartlar: ${ankiSnapshot.newCards}`}
                />
              </div>

              {/* 16 Branş Anki Kart ve Kalıcılık Tablosu */}
              <div className="overflow-x-auto max-h-72">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 text-white font-semibold sticky top-0">
                    <tr>
                      <th className="py-2 px-3">Branş</th>
                      <th className="py-2 px-2 text-right">Toplam Kart</th>
                      <th className="py-2 px-2 text-right">Olgun (&ge;21G)</th>
                      <th className="py-2 px-2 text-right">Genç (&lt;21G)</th>
                      <th className="py-2 px-2 text-right">Yeni</th>
                      <th className="py-2 px-3 text-right">FSRS Retention %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {ankiSnapshot.branchStats.map(b => (
                      <tr key={b.branchCode} className="hover:bg-slate-50">
                        <td className="py-2 px-3 font-sans font-bold text-slate-900">
                          [{b.branchCode}] {b.branchName}
                        </td>
                        <td className="py-2 px-2 text-right tabular-nums font-bold">{b.totalCards}</td>
                        <td className="py-2 px-2 text-right tabular-nums text-emerald-700">
                          {b.matureCards}
                        </td>
                        <td className="py-2 px-2 text-right tabular-nums text-indigo-700">
                          {b.youngCards}
                        </td>
                        <td className="py-2 px-2 text-right tabular-nums text-slate-600">
                          {b.newCards}
                        </td>
                        <td className="py-2 px-3 text-right tabular-nums font-extrabold text-emerald-700">
                          {b.retentionPercent == null ? '—' : `%${b.retentionPercent}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
