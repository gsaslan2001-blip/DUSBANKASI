import { dueQuestionTasks } from '../domain/questionTasks';
import { subjectForTopic } from '../domain/catalog';
/**
 * Günlük Hedef Yönetimi, Canlı TickTick Pomodoro/Süre Ölçer Entegrasyonu ve 4 Katmanlı Bilişsel SOP Kokpiti
 * Doktrin: DUS 2027 4 Blok SOP Şablonu (PDF Madde 8.2) & ExcelMaster TickTick_Pomodoro Konsolidasyonu
 */

import React, { useState, useEffect, useRef } from 'react';
import { useTriajView } from './TriajViewContext';
import { CANONICAL_UNITS } from '../../../config/canonicalUnits';
import type { TriajTask } from '../types';
import type { TickTickFocusSummary, FocusSegment, ConsolidatedFocusDay } from '../integrations/ticktick';
import { connectTickTick, disconnectTickTick, getTickTickFocus } from '../integrations/ticktick';
import { branchForQuestion } from '../domain/simulation';
import { focusAverage } from '../domain/state';
import { addDays, getDaysDiff } from '../domain/triage';
import { stageLabels } from './TriajViewContext';
import { TriageModal } from './TriageModal';
import {
  CheckCircle2,
  Circle,
  Plus,
  Trash2,
  Clock,
  Target,
  AlertCircle,
  ArrowRight,
  RefreshCw,
  Link2,
  Timer,
  Flame,
  Calendar,
  BarChart2,
  Award,
  TrendingUp
} from './icons';

function getSegmentBadgeClasses(segment: FocusSegment): string {
  switch (segment) {
    case '10+ Saat':
      return 'bg-slate-900 text-amber-400 border-amber-500 font-extrabold shadow-xs';
    case '8-10 Saat':
      return 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold';
    case '3-7 Saat':
      return 'bg-amber-100 text-amber-800 border-amber-300 font-bold';
    case '0-3 Saat':
    default:
      return 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
  }
}

export const DailyPlannerView: React.FC<{ onStartSimulation?: () => void }> = ({ onStartSimulation }) => {
  const {
    dailyGoal,
    updateDailyGoal,
    toggleBlockDone,
    addGoalChecklistItem,
    toggleGoalChecklistItem,
    deleteGoalChecklistItem,
    topics,
    subjects,
    questionLogs,
    tasks,
    report,
    triageLogs,
    state,
    updateFocus,
    todayStr,
    mockExams,
    semanticErrors,
    ankiSnapshot,
    systemParams,
    addTopic,
    saving
  } = useTriajView();

  const [newChecklistText, setNewChecklistText] = useState('');
  const [activeTask, setActiveTask] = useState<TriajTask | null>(null);
  const [showExecutiveCharts, setShowExecutiveCharts] = useState<boolean>(true);
  const [isPlannerAddTopicOpen, setIsPlannerAddTopicOpen] = useState(false);
  const [plannerSubjectId, setPlannerSubjectId] = useState<string>('B01');
  const [plannerUnitTitle, setPlannerUnitTitle] = useState<string>('');
  const [plannerDate, setPlannerDate] = useState<string>(todayStr);
  const [plannerNotes, setPlannerNotes] = useState<string>('');

  // TickTick Focus & Pomodoro State
  const [ticktickSummary, setTicktickSummary] = useState<TickTickFocusSummary | null>(null);
  const [selectedTickTickDate, setSelectedTickTickDate] = useState<string>('');
  const [isSyncingTickTick, setIsSyncingTickTick] = useState<boolean>(false);
  const [ticktickError, setTicktickError] = useState<string | null>(null);
  const [showTickTickHistory, setShowTickTickHistory] = useState<boolean>(false);

  const [ticktickConfigured, setTicktickConfigured] = useState<boolean | null>(null);
  const activeRequest = useRef<AbortController | null>(null);
  useEffect(() => {
    void fetchTickTickFocus(todayStr, false);
    return () => activeRequest.current?.abort();
  }, [todayStr]);

  async function fetchTickTickFocus(dateParam = todayStr, forceRefresh = false) {
    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;
    setIsSyncingTickTick(true);
    setTicktickError(null);
    try {
      const data = await getTickTickFocus(dateParam, forceRefresh, controller.signal);
      if (!('activeDayStats' in data)) {
        setTicktickConfigured(data.configured);
        setTicktickSummary(null);
        setTicktickError(data.needsReconnect ? 'TickTick bağlantısı sona erdi. Hesabı tekrar bağla.' : data.configured ? 'Odak verileri için TickTick hesabını bağla.' : null);
        return;
      }
      setTicktickConfigured(true);
      setTicktickSummary(data);
      setSelectedTickTickDate(data.activeDate);
      if (data.activeDate === todayStr && data.activeDayStats.sessionsCount > 0 &&
          (data.activeDayStats.totalMinutes !== state.focus[todayStr] || data.activeDayStats.totalMinutes !== dailyGoal.completedStudyMinutes)) {
        await updateFocus(todayStr, data.activeDayStats.totalMinutes);
      }
    } catch (err) {
      if (!controller.signal.aborted) setTicktickError(err instanceof Error ? err.message : 'TickTick odak verileri çekilemedi.');
    } finally {
      if (!controller.signal.aborted) setIsSyncingTickTick(false);
    }
  }

  async function handleConnectTickTickOAuth() {
    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;
    setIsSyncingTickTick(true);
    try {
      if (await connectTickTick(controller.signal)) await fetchTickTickFocus(todayStr);
    } catch (err) {
      if (!controller.signal.aborted) setTicktickError(err instanceof Error ? err.message : 'TickTick OAuth penceresi açılamadı.');
    } finally {
      if (!controller.signal.aborted) setIsSyncingTickTick(false);
    }
  }

  async function handleDisconnect() {
    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;
    setIsSyncingTickTick(true);
    try {
      await disconnectTickTick(controller.signal);
      setTicktickSummary(null);
      setSelectedTickTickDate('');
    } catch (err) {
      if (!controller.signal.aborted) setTicktickError(err instanceof Error ? err.message : 'TickTick bağlantısı kapatılamadı.');
    } finally {
      if (!controller.signal.aborted) setIsSyncingTickTick(false);
    }
  }

  const handleSelectTickTickDay = (day: ConsolidatedFocusDay) => {
    void fetchTickTickFocus(day.date);
  };

  const handleAddChecklist = (e: React.FormEvent) => {
    e.preventDefault();
    if (newChecklistText.trim()) {
      addGoalChecklistItem(newChecklistText);
      setNewChecklistText('');
    }
  };

  const dueTasks = dueQuestionTasks(tasks, todayStr).filter(task => task.status === 'open');
  const delayed = dueTasks.filter(task => task.stage === 'T3_MAIN' && task.dueDate < todayStr);
  const calendarWeekday = new Date(`${todayStr}T00:00:00Z`).getUTCDay();
  const weekStart = addDays(todayStr, -((calendarWeekday + 6) % 7));
  const weeklyRed = new Set(triageLogs.filter(log => log.date >= weekStart && log.date <= todayStr && log.resultingBucket === 'RED'
    && (log.stage === 'T3_MAIN' || log.stage === 'T14_VERIFICATION')).map(log => log.topicId)).size;
  const daysToExam = systemParams.examDate ? getDaysDiff(todayStr, systemParams.examDate) : null;
  const phase = daysToExam === null ? 'Sınav tarihini ayarlardan seç.'
    : daysToExam < 0 ? 'Sınav tarihi geçti.'
    : daysToExam <= 24 ? 'Son 24 gün · Kritik Anki, Favoriler ve günlük simülasyon'
    : daysToExam <= 84 ? 'Yoğun simülasyon · %85 deneme ve soru'
    : daysToExam <= 176 ? 'Karma uygulama · %80 karma soru ve deneme'
    : 'Edinim · %45 konu, %55 soru ve geri çağırma';
  const clinicalMode = systemParams.studyMode === 'clinical';
  const localFocusAverage = Number((focusAverage(state.focus, todayStr) / 60).toFixed(2));
  const localFocusHours = Number((Object.values(state.focus).reduce((sum, minutes) => sum + minutes, 0) / 60).toFixed(2));
  const activeModalTopic = activeTask ? topics.find(topic => topic.id === activeTask.topicId) : undefined;
  const maintenanceIntervals = systemParams.maintenanceDays ?? { clinical: 7, volatile: 8, mechanism: 12 };
  const maintenance = subjects.flatMap(subject => {
    const subjectTopics = topics.filter(topic => subjectForTopic(subjects, topic.subjectId)?.id === subject.id);
    const groups = subject.name === 'Fizyoloji' ? [
      { label: 'Fizyoloji · Histoloji ve Embriyoloji', units: subjectTopics.filter(topic => topic.title.startsWith('Histoloji - ')), days: maintenanceIntervals.volatile },
      { label: 'Fizyoloji · Sistem fizyolojisi', units: subjectTopics.filter(topic => !topic.title.startsWith('Histoloji - ')), days: maintenanceIntervals.mechanism },
    ] : [{
      label: subject.name, units: subjectTopics,
      days: subject.category === 'KLINIK_BILIMLER' ? maintenanceIntervals.clinical :
        subject.cognitiveGroup === 'GRUP_A' ? maintenanceIntervals.volatile : maintenanceIntervals.mechanism,
    }];
    return groups.flatMap(group => {
      if (!group.units.length || group.units.some(unit => !unit.discharged)) return [];
      const branchCode = branchForQuestion({ lesson: subject.name, unit: group.units[0].title });
      const base = [
        ...group.units.map(unit => unit.lastStudiedDate ?? ''),
        ...questionLogs.filter(log => log.branchCode === branchCode && log.totalQuestions >= 30 && log.totalQuestions <= 40).map(log => log.date),
      ].sort().at(-1);
      if (!base) return [];
      return [{ label: group.label, date: addDays(base, group.days), days: group.days }];
    });
  }).sort((a, b) => a.date.localeCompare(b.date));


  const studyPercent = dailyGoal.targetStudyMinutes > 0
    ? Math.min(100, Math.round((dailyGoal.completedStudyMinutes / dailyGoal.targetStudyMinutes) * 100))
    : 0;

  const questionPercent = dailyGoal.targetQuestions > 0
    ? Math.min(100, Math.round((dailyGoal.completedQuestions / dailyGoal.targetQuestions) * 100))
    : 0;

  const completedBlocksCount = [
    dailyGoal.block1Done,
    dailyGoal.block2Done,
    dailyGoal.block3Done,
    dailyGoal.block4Done
  ].filter(Boolean).length;

  const activeStats = ticktickSummary?.activeDayStats;
  const activeHours = activeStats
    ? activeStats.totalHours
    : Number((dailyGoal.completedStudyMinutes / 60).toFixed(2));
  const activeSegment: FocusSegment = activeStats
    ? activeStats.segment
    : activeHours < 3
    ? '0-3 Saat'
    : activeHours < 8
    ? '3-7 Saat'
    : activeHours <= 10
    ? '8-10 Saat'
    : '10+ Saat';

  const latestExam = mockExams[mockExams.length - 1] || null;
  const elite10PlusDays = ticktickSummary?.segmentDistribution['10+ Saat'] ?? 0;

  return (
    <div className="space-y-6">
      {/* 0. SEKME 1: DASHBOARD (KOMUTA MERKEZİ) 2 KANATLI 6 KPI GRİD & GRAFİKLER */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div>
            <div className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider">
              Günlük Plan · {todayStr}
            </div>
            <h2 className="text-base font-extrabold text-slate-900 mt-0.5">
              {systemParams.targetGoalTitle}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowExecutiveCharts(prev => !prev)}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
            <span>{showExecutiveCharts ? 'Komuta Grafiklerini Daralt' : 'Komuta Grafiklerini Göster'}</span>
          </button>
        </div>

        {/* 6 Simetrik KPI Kartı (B5, D5, F5, I5, K5, M5) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-slate-900 text-white rounded-xl p-3.5 shadow-2xs">
            <div className="text-[10px] font-mono text-slate-400 uppercase">HEDEF TOPLAM NET</div>
            <div className="text-2xl font-extrabold font-mono text-emerald-400 mt-1 tabular-nums">
              {systemParams.targetTotalNet.toFixed(2)}
            </div>
            <div className="text-[10px] text-slate-300 mt-0.5 font-mono">
              T:{systemParams.targetBasicNet} + K:{systemParams.targetClinicalNet}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 shadow-2xs">
            <div className="text-[10px] font-mono text-slate-500 uppercase">SON DENEME / FARK</div>
            <div className="text-2xl font-extrabold font-mono text-slate-900 mt-1 tabular-nums">
              {latestExam ? latestExam.totalNet.toFixed(2) : '—'}
            </div>
            <div
              className={`text-[10px] font-mono font-bold mt-0.5 ${
                latestExam && latestExam.targetDiff >= 0 ? 'text-emerald-700' : 'text-amber-700'
              }`}
            >
              {latestExam ? `${latestExam.targetDiff >= 0 ? '+' : ''}${latestExam.targetDiff.toFixed(2)} Net` : '-'}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 shadow-2xs">
            <div className="text-[10px] font-mono text-slate-500 uppercase">TOPLAM ÇALIŞMA</div>
            <div className="text-2xl font-extrabold font-mono text-indigo-700 mt-1 tabular-nums">
              {ticktickSummary ? ticktickSummary.totalAllTimeHours : localFocusHours}s
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">
              {ticktickSummary ? `${ticktickSummary.totalTrackedDays} Aktif Gün` : 'Kümülatif Saat'}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 shadow-2xs">
            <div className="text-[10px] font-mono text-slate-500 uppercase">SON 7 TAKVİM GÜNÜ</div>
            <div className="text-2xl font-extrabold font-mono text-emerald-700 mt-1 tabular-nums">
              {ticktickSummary ? ticktickSummary.sevenDayAvgHours : localFocusAverage}s
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">{ticktickSummary?.sevenDayStart ?? addDays(todayStr, -6)} – {ticktickSummary?.todayDate ?? todayStr}</div>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 shadow-2xs">
            <div className="text-[10px] font-mono text-emerald-800 uppercase">ANKİ HATIRLAMA</div>
            <div className="text-2xl font-extrabold font-mono text-emerald-800 mt-1 tabular-nums">
              {ankiSnapshot.overallRetentionPercent == null ? '—' : `%${ankiSnapshot.overallRetentionPercent}`}
            </div>
            <div className="text-[10px] text-emerald-700 mt-0.5 font-semibold">
              Hedef: %{systemParams.targetFsrsRetention}
            </div>
          </div>

          <div className="bg-amber-50/80 border border-amber-300 rounded-xl p-3.5 shadow-2xs">
            <div className="text-[10px] font-mono text-amber-900 uppercase">10+ SAAT ÇALIŞILAN GÜN</div>
            <div className="text-2xl font-extrabold font-mono text-amber-900 mt-1 tabular-nums flex items-center gap-1.5">
              <Award className="w-5 h-5 text-amber-600" />
              <span>{elite10PlusDays}</span>
            </div>
            <div className="text-[10px] text-amber-800 mt-0.5 font-semibold">Zirve Disiplin Günü</div>
          </div>
        </div>

        {/* Açılır Komuta Merkezi Grafikleri: Son 14 Gün Odak Sütun Grafiği + SWSPS Taktiksel Triyaj Özeti */}
        {showExecutiveCharts && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-2">
            {/* Sol 7 Kolon: Son 14 Günlük Odaklanma ve Çalışma Süresi Sütun Grafiği */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">
                  Son 14 Günlük Odaklanma &amp; Çalışma Süresi (Saat)
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  TickTick Pomo + Süre Ölçer
                </span>
              </div>

              <div className="h-32 flex items-end gap-1.5 pt-4">
                {(ticktickSummary?.dailyLogs.slice(0, 14).reverse() || []).map(day => {
                  const pct = Math.min(100, Math.max(8, (day.totalHours / 12) * 100));
                  const barColor =
                    day.segment === '10+ Saat'
                      ? 'bg-slate-900'
                      : day.segment === '8-10 Saat'
                      ? 'bg-emerald-600'
                      : day.segment === '3-7 Saat'
                      ? 'bg-indigo-600'
                      : 'bg-amber-500';
                  return (
                    <div
                      key={day.date}
                      onClick={() => handleSelectTickTickDay(day)}
                      className="flex-1 flex flex-col items-center gap-1 cursor-pointer group"
                      title={`${day.date}: ${day.totalHours} Saat (${day.segment})`}
                    >
                      <span className="text-[9px] font-mono font-bold text-slate-600 opacity-0 group-hover:opacity-100">
                        {day.totalHours}s
                      </span>
                      <div className="w-full h-20 bg-slate-200/70 rounded-t flex items-end overflow-hidden">
                        <div
                          className={`w-full ${barColor} rounded-t transition-all`}
                          style={{ height: `${pct}%` }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-slate-500">
                        {day.date.slice(8)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sağ 5 Kolon: Güncel Taktiksel Triyaj & En Yüksek SWSPS Acil Müdahale Tablosu */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">
                  Taktiksel SWSPS &amp; Acil Müdahale Öncelikleri
                </span>
                <span className="text-[10px] font-mono font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                  Top 3 SWSPS
                </span>
              </div>

              <div className="space-y-1.5">
                {[...semanticErrors]
                  .sort((a, b) => b.swspsScore - a.swspsScore)
                  .slice(0, 3)
                  .map(err => (
                    <div
                      key={err.id}
                      className="p-2 rounded-lg bg-white border border-slate-200 flex items-center justify-between gap-2 text-xs"
                    >
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 truncate">{err.subtopic}</div>
                        <div className="text-[10px] text-slate-500 font-mono">
                          [{err.branchCode}] {err.semanticCode} · {err.errorType}
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-mono text-[11px] font-extrabold shrink-0 tabular-nums">
                        {err.scoreUnavailable ? '—' : err.swspsScore.toFixed(2)}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 1. Üst Yönetici Özeti, Canlı TickTick Pomodoro/Süre Ölçer Entegrasyonu ve Hedef İlerlemesi */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-slate-100 gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span>{todayStr}</span>
              <span aria-hidden="true">·</span>
              <span>Bilişsel Çalışma Kokpiti</span>
              {ticktickSummary?.connected && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 normal-case font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  TickTick API Aktif ({ticktickSummary.totalTrackedDays} Gün / {ticktickSummary.totalAllTimeHours} Saat)
                </span>
              )}
            </div>
            <h2 className="text-lg font-bold text-slate-900 mt-0.5">Günün Hedefleri ve Odak Süresi</h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => fetchTickTickFocus(selectedTickTickDate || undefined, true)}
              disabled={isSyncingTickTick}
              className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncingTickTick ? 'animate-spin' : ''}`} />
              <span>{isSyncingTickTick ? 'Çekiliyor...' : 'TickTick Senkronize Et'}</span>
            </button>

            <button
              type="button"
              onClick={() => void handleConnectTickTickOAuth()}
              disabled={isSyncingTickTick || ticktickConfigured === false}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="TickTick OAuth 2.0 ile Yeniden Yetkilendir"
            >
              <Link2 className="w-3.5 h-3.5" />
              <span>TickTick Bağla</span>
            </button>

            {ticktickSummary?.connected && (
              <button type="button" onClick={() => void handleDisconnect()} disabled={isSyncingTickTick}
                className="rounded-lg border border-slate-200 px-3 py-2 text-xs">TickTick Bağlantısını Kes</button>
            )}
            <div className="flex items-center gap-1.5 pl-1">
              <span className="text-xs text-slate-600 font-medium">Bloklar:</span>
              <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-slate-900 text-white font-mono text-xs font-bold">
                {completedBlocksCount} / 4 Blok
              </span>
            </div>
          </div>
        </div>

        {ticktickConfigured === false && <p className="mt-3 text-sm text-slate-600">TickTick kapalı. Odak süresini elle girebilirsin.</p>}
        {ticktickError && (
          <div className="mt-3 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center justify-between">
            <span>{ticktickError}</span>
            <button
              type="button"
              onClick={() => fetchTickTickFocus(undefined, true)}
              className="font-semibold underline hover:text-rose-950"
            >
              Tekrar Dene
            </button>
          </div>
        )}

        {/* 2 Sütunlu Hedef Kartları */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {/* SOL KART: Canlı TickTick Odak Süresi (Pomodoro + Süre Ölçer) */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Günlük Odak Süresi (TickTick Pomo + Süre Ölçer)</span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 rounded border text-[11px] font-mono ${getSegmentBadgeClasses(
                    activeSegment
                  )}`}
                  title="README 4 Kademeli Performans Segmenti"
                >
                  {activeSegment}
                </span>
                <div className="text-xs font-mono font-bold text-slate-900">
                  {dailyGoal.completedStudyMinutes} / {dailyGoal.targetStudyMinutes} dk (%{studyPercent})
                </div>
              </div>
            </div>

            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${studyPercent}%` }}
              />
            </div>

            {/* TickTick Kırılım Metrikleri (Pomodoro vs Süre Ölçer & 7 Gün Ortalaması) */}
            {ticktickSummary && activeStats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <div className="bg-white border border-slate-200/90 rounded-md p-2">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase flex items-center gap-1">
                    <Flame className="w-3 h-3 text-rose-500" />
                    <span>Pomodoro (type=0)</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-900 mt-0.5">
                    {activeStats.pomoMinutes} dk
                    <span className="text-[10px] font-normal text-slate-500 ml-1">
                      ({activeStats.pomoCount} otr)
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-slate-200/90 rounded-md p-2">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase flex items-center gap-1">
                    <Timer className="w-3 h-3 text-indigo-500" />
                    <span>Süre Ölçer (type=1)</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-900 mt-0.5">
                    {activeStats.stopwatchMinutes} dk
                    <span className="text-[10px] font-normal text-slate-500 ml-1">
                      ({activeStats.stopwatchCount} otr)
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-slate-200/90 rounded-md p-2">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase">
                    Toplam Saat (UTC+3)
                  </div>
                  <div className="text-xs font-mono font-bold text-indigo-700 mt-0.5">
                    {activeStats.totalHours} Saat
                    <span className="text-[10px] font-normal text-slate-500 ml-1">
                      ({activeStats.dayNameTR})
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-slate-200/90 rounded-md p-2">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase">
                    Son 7 Gün Ort.
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-700 mt-0.5">
                    {ticktickSummary.sevenDayAvgHours} Saat/gün
                    <div className="text-[10px] font-normal">{ticktickSummary.sevenDayStart} – {ticktickSummary.todayDate}</div>
                    <div className="text-[10px] font-normal">Veri: {ticktickSummary.periodStart} – {ticktickSummary.periodEnd}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Tarih Seçici & Manuel Hızlı Ayar */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs pt-1">
              <div className="flex items-center gap-1.5">
                {ticktickSummary && ticktickSummary.dailyLogs.length > 0 && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <select
                      aria-label="TickTick Çalışma Günü Seç"
                      value={selectedTickTickDate}
                      onChange={e => {
                        const found = ticktickSummary.dailyLogs.find(
                          d => d.date === e.target.value
                        );
                        if (found) {
                          handleSelectTickTickDay(found);
                        } else {
                          fetchTickTickFocus(e.target.value, false);
                        }
                      }}
                      className="px-2 py-1 bg-white border border-slate-300 rounded text-xs font-mono text-slate-800"
                    >
                      {ticktickSummary.dailyLogs.slice(0, 30).map(day => (
                        <option key={day.date} value={day.date}>
                          {day.date} ({day.dayNameTR}) — {day.totalMinutes} dk ({day.totalHours}s)
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setShowTickTickHistory(prev => !prev)}
                  className="px-2 py-1 bg-white border border-slate-300 rounded text-slate-700 hover:bg-slate-100 font-medium flex items-center gap-1"
                >
                  <BarChart2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{showTickTickHistory ? 'Tabloyu Gizle' : 'Segment & Geçmiş'}</span>
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    updateFocus(todayStr, Math.max(0, dailyGoal.completedStudyMinutes - 30))
                  }
                  className="px-2 py-0.5 bg-white border border-slate-300 rounded text-slate-700 hover:bg-slate-100 font-mono"
                >
                  -30dk
                </button>
                <button
                  type="button"
                  onClick={() =>
                    updateFocus(todayStr, dailyGoal.completedStudyMinutes + 30)
                  }
                  className="px-2 py-0.5 bg-white border border-slate-300 rounded text-slate-700 hover:bg-slate-100 font-mono"
                >
                  +30dk
                </button>
                <div className="flex items-center gap-1 ml-1">
                  <span className="text-slate-500">Hedef:</span>
                  <input
                    type="number"
                    step="30"
                    min="60"
                    max="900"
                    aria-label="Günlük Hedef Çalışma Dakikası"
                    value={dailyGoal.targetStudyMinutes}
                    onChange={e =>
                      updateDailyGoal({ targetStudyMinutes: parseInt(e.target.value) || 0 })
                    }
                    className="w-16 px-1.5 py-0.5 bg-white border border-slate-300 rounded text-xs text-right font-mono"
                  />
                  <span className="text-slate-500">dk</span>
                </div>
              </div>
            </div>

            {/* Açılır TickTick Segment Dağılımı (K2:K5) ve Son Çalışma Günleri Tablosu */}
            {showTickTickHistory && ticktickSummary && (
              <div className="mt-3 pt-3 border-t border-slate-200 space-y-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-rose-50 border border-rose-200 text-rose-900 flex items-center justify-between">
                    <span className="font-semibold">🔴 0-3 Saat:</span>
                    <span className="font-mono font-bold">
                      {ticktickSummary.segmentDistribution['0-3 Saat']} gün
                    </span>
                  </div>
                  <div className="p-2 rounded bg-amber-50 border border-amber-200 text-amber-900 flex items-center justify-between">
                    <span className="font-semibold">🟡 3-7 Saat:</span>
                    <span className="font-mono font-bold">
                      {ticktickSummary.segmentDistribution['3-7 Saat']} gün
                    </span>
                  </div>
                  <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between">
                    <span className="font-semibold">🟢 8-10 Saat:</span>
                    <span className="font-mono font-bold">
                      {ticktickSummary.segmentDistribution['8-10 Saat']} gün
                    </span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-amber-500 text-amber-400 flex items-center justify-between">
                    <span className="font-semibold">🏆 10+ Saat:</span>
                    <span className="font-mono font-bold">
                      {ticktickSummary.segmentDistribution['10+ Saat']} gün
                    </span>
                  </div>
                </div>

                <div className="max-h-48 overflow-y-auto border border-slate-200 rounded-md bg-white">
                  <table className="w-full text-left text-[11px]">
                    <thead className="bg-slate-100 text-slate-600 sticky top-0">
                      <tr>
                        <th className="py-1.5 px-2.5">Tarih</th>
                        <th className="py-1.5 px-2">Gün</th>
                        <th className="py-1.5 px-2 text-right">Pomo</th>
                        <th className="py-1.5 px-2 text-right">Süre Ölçer</th>
                        <th className="py-1.5 px-2 text-right">Toplam</th>
                        <th className="py-1.5 px-2.5 text-right">Segment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono">
                      {ticktickSummary.dailyLogs.slice(0, 14).map(log => (
                        <tr
                          key={log.date}
                          onClick={() => handleSelectTickTickDay(log)}
                          className={`cursor-pointer hover:bg-indigo-50/60 ${
                            selectedTickTickDate === log.date ? 'bg-indigo-50/90 font-semibold' : ''
                          }`}
                        >
                          <td className="py-1.5 px-2.5 text-slate-900">{log.date}</td>
                          <td className="py-1.5 px-2 font-sans text-slate-600">{log.dayNameTR}</td>
                          <td className="py-1.5 px-2 text-right text-slate-700">
                            {log.pomoMinutes} dk
                          </td>
                          <td className="py-1.5 px-2 text-right text-slate-700">
                            {log.stopwatchMinutes} dk
                          </td>
                          <td className="py-1.5 px-2 text-right font-bold text-slate-900">
                            {log.totalMinutes} dk ({log.totalHours}s)
                          </td>
                          <td className="py-1.5 px-2.5 text-right">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] border ${getSegmentBadgeClasses(
                                log.segment
                              )}`}
                            >
                              {log.segment}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* SAĞ KART: Soru Çözüm Hedefi */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Target className="w-4 h-4 text-emerald-600" />
                  <span>Günlük Çözülen Soru</span>
                </div>
                <div className="text-xs font-mono font-bold text-slate-900">
                  {dailyGoal.completedQuestions} / {dailyGoal.targetQuestions} Soru (%{questionPercent})
                </div>
              </div>

              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 transition-all duration-300"
                  style={{ width: `${questionPercent}%` }}
                />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="bg-white border border-slate-200/90 rounded-md p-2">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase">
                    İlk Tekrar
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-800 mt-0.5">
                    En az 20 Soru / Ünite
                  </div>
                </div>
                <div className="bg-white border border-slate-200/90 rounded-md p-2">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase">
                    T+3 Esas Test
                  </div>
                  <div className="text-xs font-mono font-bold text-indigo-700 mt-0.5">
                    40 Soru / Ünite
                  </div>
                </div>
                <div className="bg-white border border-slate-200/90 rounded-md p-2">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase">
                    Müfredat Havuzu
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-700 mt-0.5">
                    {topics.length} Ünite (14 Blok)
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    updateDailyGoal({
                      completedQuestions: Math.max(0, dailyGoal.completedQuestions - 10)
                    })
                  }
                  className="px-2 py-0.5 bg-white border border-slate-300 rounded text-slate-700 hover:bg-slate-100 font-mono"
                >
                  -10
                </button>
                <button
                  type="button"
                  onClick={() =>
                    updateDailyGoal({ completedQuestions: dailyGoal.completedQuestions + 10 })
                  }
                  className="px-2 py-0.5 bg-white border border-slate-300 rounded text-slate-700 hover:bg-slate-100 font-mono"
                >
                  +10
                </button>
                <button
                  type="button"
                  onClick={() =>
                    updateDailyGoal({ completedQuestions: dailyGoal.completedQuestions + 40 })
                  }
                  className="px-2 py-0.5 bg-white border border-slate-300 rounded text-slate-700 hover:bg-slate-100 font-mono"
                >
                  +40 (T+3)
                </button>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-slate-500">Hedef:</span>
                <input
                  type="number"
                  step="10"
                  min="20"
                  max="400"
                  aria-label="Günlük Hedef Soru Sayısı"
                  value={dailyGoal.targetQuestions}
                  onChange={e =>
                    updateDailyGoal({ targetQuestions: parseInt(e.target.value) || 0 })
                  }
                  className="w-16 px-1.5 py-0.5 bg-white border border-slate-300 rounded text-xs text-right font-mono"
                />
                <span className="text-slate-500">soru</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-base font-bold">Çalışma Haftası</h3>
        <p className="mt-1 text-sm text-slate-700">{phase}</p>
        <p className="mt-2 text-sm text-slate-700">
          {calendarWeekday === 0 ? 'Pazar · 10.15 genel deneme (120 soru) ve aynı gün hata analizi'
            : calendarWeekday === 6 ? 'Cumartesi · Kırmızı kova onarımı ve vadesi gelen testler'
            : 'Pazartesi–Cuma · Yeni ünite, vadesi gelen testler ve branş denemesi'}
        </p>
        {calendarWeekday === 0 && onStartSimulation && (
          <button type="button" onClick={onStartSimulation} className="mt-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white">Genel Denemeyi Aç</button>
        )}
        <p className="mt-2 text-xs text-slate-500">Minimum gün · 15–20 dk kritik Anki ve 30 soru.</p>
        {report.redBucket > 0 && (
          <p role={report.redBucket >= 3 ? 'status' : undefined} className="mt-2 rounded-lg bg-rose-50 p-2 text-sm text-rose-800">
            {report.redBucket} açık kırmızı · Bu hafta {weeklyRed} yeni kırmızı.
            {report.redBucket >= 4 ? ' Kapasite aşıldı.' : report.redBucket === 3 ? ' Kapasite sınırında.' : ''}
            {' '}Kırmızılar temizlenene kadar yeni ünite hızını artırma.
          </p>
        )}
        {delayed.length > 0 && <p role="status" className="mt-2 rounded-lg bg-amber-50 p-2 text-sm text-amber-800">{delayed.length} gecikmiş T+3 görevi önce çözülmeli.</p>}
        {maintenance.length > 0 && (
          <div className="mt-4 border-t border-slate-200 pt-3">
            <h4 className="text-sm font-semibold">Biten Derslerin Branş Bakımı</h4>
            <ul className="mt-1 space-y-1 text-sm text-slate-700">
              {maintenance.map(item => <li key={item.label}>{item.label} · {item.date} · {item.days} günlük aralık{item.date <= todayStr ? ' · Vadesi geldi' : ''}</li>)}
            </ul>
          </div>
        )}
      </section>

      {dueTasks.length > 0 && (
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-amber-900">
            <AlertCircle className="size-4" /> Vadesi Gelen Görevler ({dueTasks.length})
          </h3>
          <ul className="grid gap-3 md:grid-cols-2">
            {dueTasks.map(task => (
              <li key={task.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-amber-200 bg-white p-3">
                <div className="min-w-0">
                  <p className="text-xs text-slate-600">{task.lesson} · {stageLabels[task.stage]} · {task.questionCount} soru</p>
                  <p className="text-sm font-semibold text-slate-900">{task.unit}</p>
                </div>
                <button type="button" onClick={() => setActiveTask(task)} className="flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white">
                  Görevi Aç <ArrowRight className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 3. DUS 2027 4 Katmanlı Bilişsel Blok SOP Şablonu */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
        <div className="mb-4">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Standart Operasyon Prosedürü (SOP)
          </div>
          <h3 className="text-base font-bold text-slate-900 mt-0.5">
            Günlük 4 Bilişsel Blok Akışı
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Gününüzü tek bir işe ayırmak bilişsel tükenmişlik yaratır; her gün bu 4 bloğu sırayla tamamlayın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Blok 1 */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              dailyGoal.block1Done
                ? 'bg-emerald-50/50 border-emerald-300'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-indigo-700 font-mono">
                    BLOK 1 (Sabah İlk İş)
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">{clinicalMode ? '45 dk tavan' : '45 dk tavan · 08.30–09.15'}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mt-1">
                  İki Desteli Anki &amp; Mikro-Bellek
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  İlk 15-20 dk:{' '}
                  <strong className="text-slate-800">01-KRITIK-OTOPSI-VE-TABLO</strong> destesi %100
                  sıfırlanır. Kalan sürede budanmış temel bilim kartları çözülür. 45. dk&apos;da Anki
                  kesin kapatılır!
                </p>
              </div>

              <button
                type="button"
                onClick={() => toggleBlockDone('block1Done')}
                className="text-slate-400 hover:text-emerald-600 transition-colors p-1"
                aria-label="Blok 1 Durumunu Değiştir"
              >
                {dailyGoal.block1Done ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Blok 2 */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              dailyGoal.block2Done
                ? 'bg-emerald-50/50 border-emerald-300'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-indigo-700 font-mono">
                    BLOK 2 (Zirve Odak)
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">{clinicalMode ? '2,5 saat' : '4 saat · 09.45–13.45'}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mt-1">
                  Yeni Konu Edinimi &amp; İlk Tekrar
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Ana kitaptan derin kodlama (her 3 sayfada 90 sn özetle). Ünite biter bitmez 10 dk{' '}
                  <strong className="text-slate-800">Boş Kağıt (Blurting)</strong> yap, ardından 1. Bankadan{' '}
                  <strong className="text-slate-800">en az 20 soru</strong> çöz ve doğru, yanlış, boş sayılarını kaydet.
                  Konuyu okumadan çözülecek ayrı 40 soruyu T+3 gününe bırak!
                </p>
                <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">Bugün çalıştığınız ünite:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setPlannerDate(todayStr);
                      setIsPlannerAddTopicOpen(true);
                    }}
                    className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-xs font-semibold flex items-center gap-1 shadow-2xs transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Ders / Ünite Başlat (T+0)</span>
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => toggleBlockDone('block2Done')}
                className="text-slate-400 hover:text-emerald-600 transition-colors p-1"
                aria-label="Blok 2 Durumunu Değiştir"
              >
                {dailyGoal.block2Done ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Blok 3 */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              dailyGoal.block3Done
                ? 'bg-emerald-50/50 border-emerald-300'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-indigo-700 font-mono">
                    BLOK 3 (Öğleden Sonra)
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">{clinicalMode ? '1,5 saat' : '2,5 saat · 14.45–17.15'}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mt-1">
                  T+3 Gecikmeli Geri Çağırma &amp; Kova Triyajı
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  3 gün önce çalışılan konunun{' '}
                  <strong className="text-slate-800">ayrı 40 sorusu</strong> konu okunmadan
                  doğrudan çözülür. 40 sorudaki skora göre ünite{' '}
                  <span className="text-emerald-700 font-semibold">Yeşil (≥34)</span>,{' '}
                  <span className="text-amber-700 font-semibold">Sarı (28-33)</span> veya{' '}
                  <span className="text-rose-700 font-semibold">Kırmızı (≤27)</span> kovaya atanır.
                </p>
              </div>

              <button
                type="button"
                onClick={() => toggleBlockDone('block3Done')}
                className="text-slate-400 hover:text-emerald-600 transition-colors p-1"
                aria-label="Blok 3 Durumunu Değiştir"
              >
                {dailyGoal.block3Done ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Blok 4 */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              dailyGoal.block4Done
                ? 'bg-emerald-50/50 border-emerald-300'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-indigo-700 font-mono">
                    BLOK 4 (Akşam Kapanış)
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">{clinicalMode ? '45 dk' : '1,5 saat · 17.45–19.15'}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mt-1">
                  Biten Derslerin Karma Denemesi &amp; Hata Kaydı
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Biten derslerden karma branş testi. Yanlış çıkan soruların 5 dk
                  mikro-okumasını yap ve{' '}
                  <strong className="text-slate-800">Pazar gününe biriktirmeden</strong> 30 saniyede
                  tek satırlık Cloze zıtlık kuralını Anki&apos;ye gir!
                </p>
              </div>

              <button
                type="button"
                onClick={() => toggleBlockDone('block4Done')}
                className="text-slate-400 hover:text-emerald-600 transition-colors p-1"
                aria-label="Blok 4 Durumunu Değiştir"
              >
                {dailyGoal.block4Done ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Günlük Görev Listesi (Checklist) */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Günün Görev Kontrol Listesi</h3>
            <p className="text-xs text-slate-500">Kişiselleştirilmiş günlük çalışma adımlarınız</p>
          </div>
          <span className="text-xs font-mono text-slate-500">
            {dailyGoal.checklist.filter(i => i.done).length} / {dailyGoal.checklist.length} Tamam
          </span>
        </div>

        {/* Yeni Görev Ekleme */}
        <form onSubmit={handleAddChecklist} className="flex gap-2 mb-4">
          <input
            type="text"
            value={newChecklistText}
            onChange={e => setNewChecklistText(e.target.value)}
            placeholder="Yeni günlük görev ekleyin (örn: Farmakoloji otonom sinir sistemi ilk tekrarda en az 20 soru)..."
            className="flex-1 px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Ekle</span>
          </button>
        </form>

        {/* Görevler Listesi */}
        <div className="space-y-2">
          {dailyGoal.checklist.map(item => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                item.done
                  ? 'bg-slate-50 border-slate-200 text-slate-400 line-through'
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleGoalChecklistItem(item.id)}
                className="flex items-center gap-3 text-left flex-1"
              >
                {item.done ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-400 shrink-0" />
                )}
                <span className="text-xs font-medium">{item.text}</span>
              </button>

              <button
                type="button"
                onClick={() => deleteGoalChecklistItem(item.id)}
                className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors"
                aria-label="Görevi Sil"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModalTopic && activeTask && (
        <TriageModal task={activeTask} topic={activeModalTopic} onClose={() => setActiveTask(null)} />
      )}

      {isPlannerAddTopicOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div role="dialog" aria-modal="true" aria-label="Günlük Plana Ünite Ekle" className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900">Günlük Plana Ders ve Ünite Ekle (T+0)</h3>
            <form
              onSubmit={async e => {
                e.preventDefault();
                if (!plannerUnitTitle || !plannerSubjectId || !plannerDate) return;
                const ok = await addTopic(plannerSubjectId, plannerUnitTitle, [], plannerDate, plannerNotes);
                if (ok) {
                  setPlannerUnitTitle('');
                  setPlannerNotes('');
                  setIsPlannerAddTopicOpen(false);
                }
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Ders Bloğu</label>
                <select
                  value={plannerSubjectId}
                  aria-label="Ders seçin"
                  onChange={e => {
                    setPlannerSubjectId(e.target.value);
                    setPlannerUnitTitle('');
                  }}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800"
                >
                  {subjects.map(sub => (
                    <option key={sub.id} value={sub.id}>
                      [{sub.code}] {sub.name} ({sub.category === 'TEMEL_BILIMLER' ? 'Temel' : 'Klinik'})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Kanonik Ünite</label>
                <select
                  value={plannerUnitTitle}
                  aria-label="Kanonik ünite seçin"
                  required
                  onChange={e => setPlannerUnitTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800"
                >
                  <option value="">Ünite seçin...</option>
                  {(CANONICAL_UNITS[subjects.find(sub => sub.id === plannerSubjectId)?.name ?? ''] ?? []).map(title => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">T+0 Başlangıç Tarihi</label>
                <input
                  type="date"
                  required
                  aria-label="T+0 Başlangıç Tarihi"
                  value={plannerDate}
                  onChange={e => setPlannerDate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-mono text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Çalışma Notu (Opsiyonel)</label>
                <textarea
                  rows={2}
                  aria-label="Çalışma notu (opsiyonel)"
                  value={plannerNotes}
                  onChange={e => setPlannerNotes(e.target.value)}
                  placeholder="Kritik odak veya tekrar notu..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsPlannerAddTopicOpen(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-100"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={saving || !plannerUnitTitle}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg disabled:opacity-50"
                >
                  {saving ? 'Kaydediliyor…' : 'Planı Kaydet'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
