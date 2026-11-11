/**
 * DUS 2027 Müfredat ve Kanonik Üniteler Taksonomi Yönetim Paneli (UNITS.md)
 * - Görünüm 1: 14 Kanonik Ders Bloğu & Bilişsel Protokol Kartları
 * - Görünüm 2 (Sekme 2): Tekrar_Plani — Açık Sarı Hücrelerden Doğrudan T+0 Tarih & T+3 Doğru (0-40) Girişi
 * - Görünüm 3 (Sekme 6): Konu_Takip_Matrisi — 14 Branş Gecikme Günü 3 Renkli Isı Haritası (#A7F3D0 / #FDE68A / #FCA5A5)
 */

import React, { useState, useMemo } from 'react';
import { useCallback } from 'react';
import { useModalA11y } from '../../../hooks/useModalA11y';
import { CANONICAL_UNITS } from '../../../config/canonicalUnits';
import { useTriajView } from './TriajViewContext';
import type { TopicUnit, SubjectCategory, CognitiveGroup } from '../types';
import { TriageModal } from './TriageModal';
import {
  calculateTopicDelayDays,
  getDelayHeatmapStyle,
  getTopicNextTargetDate
} from '../domain/analytics';
import { subjectForTopic } from '../domain/catalog';
import {
  Search,
  Plus,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  Clock,
  Sparkles,
  Trash2,
  Play,
  Table,
  Tag,
  Layers,
  Calendar,
  Grid
} from './icons';

type UnitStatusFilter = 'ALL' | 'ACTIVE_TRIAGE' | 'NOT_STARTED';
type CurriculumViewMode = 'SUBJECT_CARDS' | 'TEKRAR_PLANI' | 'KONU_TAKIP_MATRISI';

function normalizeTurkishText(str: string): string {
  return (str || '')
    .replace(/İ/g, 'i')
    .replace(/I/g, 'ı')
    .toLocaleLowerCase('tr')
    .replace(/\u0307/g, '');
}

export const SubjectDatabaseView: React.FC = () => {
  const { subjects, topics, addTopic, cancelPlannedT0, reschedule, tasks, todayStr, saving } = useTriajView();
  const plannedTopicIds = useMemo(() => new Set(tasks.filter(task => task.status === 'open').map(task => task.topicId)), [tasks]);

  // View Mode Switcher
  const [viewMode, setViewMode] = useState<CurriculumViewMode>('SUBJECT_CARDS');

  // Filters
  const [categoryFilter, setCategoryFilter] = useState<'ALL' | SubjectCategory>('ALL');
  const [cognitiveFilter, setCognitiveFilter] = useState<'ALL' | CognitiveGroup>('ALL');
  const [unitStatusFilter, setUnitStatusFilter] = useState<UnitStatusFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMatrixSubjectId, setSelectedMatrixSubjectId] = useState<string>('ALL');

  // Expanded subject cards
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>('B01');

  // New Topic Form Modal state
  const [isAddTopicModalOpen, setIsAddTopicModalOpen] = useState(false);
  const [newTopicSubjectId, setNewTopicSubjectId] = useState<string>('B01');
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicDate, setNewTopicDate] = useState(todayStr);
  const [newTopicNotes, setNewTopicNotes] = useState('');
  const closeAddTopic = useCallback(() => setIsAddTopicModalOpen(false), []);
  const addTopicDialog = useModalA11y(closeAddTopic, isAddTopicModalOpen);
  const [newTopicSubtopics, setNewTopicSubtopics] = useState('');

  // Triage Test Modal
  const [activeTestTopic, setActiveTestTopic] = useState<TopicUnit | null>(null);

  const temelSubjectsCount = subjects.filter(s => s.category === 'TEMEL_BILIMLER').length;
  const klinikSubjectsCount = subjects.filter(s => s.category === 'KLINIK_BILIMLER').length;
  const temelUnitsCount = topics.filter(t => {
    const s = subjectForTopic(subjects, t.subjectId);
    return s?.category === 'TEMEL_BILIMLER';
  }).length;
  const klinikUnitsCount = topics.length - temelUnitsCount;

  // Filtered subjects
  const filteredSubjects = useMemo(() => {
    return subjects.filter(sub => {
      if (categoryFilter !== 'ALL' && sub.category !== categoryFilter) return false;
      if (cognitiveFilter !== 'ALL' && sub.cognitiveGroup !== cognitiveFilter) return false;

      const subTopics = topics.filter(t => subjectForTopic(subjects, t.subjectId)?.id === sub.id);
      const matchingTopics = subTopics.filter(t => {
        if (unitStatusFilter === 'ACTIVE_TRIAGE' && t.status === 'NOT_STARTED' && !plannedTopicIds.has(t.id)) return false;
        if (unitStatusFilter === 'NOT_STARTED' && (t.status !== 'NOT_STARTED' || plannedTopicIds.has(t.id))) return false;
        if (searchQuery.trim()) {
          const q = normalizeTurkishText(searchQuery);
          return (
            normalizeTurkishText(t.title).includes(q) ||
            normalizeTurkishText(sub.name).includes(q) ||
            normalizeTurkishText(sub.code).includes(q) ||
            (t.topicCode && normalizeTurkishText(t.topicCode).includes(q))
          );
        }
        return true;
      });

      if (searchQuery.trim() || unitStatusFilter !== 'ALL') {
        return matchingTopics.length > 0;
      }

      return true;
    });
  }, [subjects, topics, categoryFilter, cognitiveFilter, unitStatusFilter, searchQuery, plannedTopicIds]);

  // Flat filtered topics for Tekrar_Plani table
  const filteredFlatTopics = useMemo(() => {
    return topics.filter(t => {
      const sub = subjectForTopic(subjects, t.subjectId);
      if (!sub) return false;
      if (categoryFilter !== 'ALL' && sub.category !== categoryFilter) return false;
      if (cognitiveFilter !== 'ALL' && sub.cognitiveGroup !== cognitiveFilter) return false;
      if (unitStatusFilter === 'ACTIVE_TRIAGE' && t.status === 'NOT_STARTED' && !plannedTopicIds.has(t.id)) return false;
      if (unitStatusFilter === 'NOT_STARTED' && (t.status !== 'NOT_STARTED' || plannedTopicIds.has(t.id))) return false;
      if (searchQuery.trim()) {
        const q = normalizeTurkishText(searchQuery);
        return (
          normalizeTurkishText(t.title).includes(q) ||
          normalizeTurkishText(sub.name).includes(q) ||
          normalizeTurkishText(sub.code).includes(q) ||
          (t.topicCode && normalizeTurkishText(t.topicCode).includes(q))
        );
      }
      return true;
    });
  }, [topics, subjects, categoryFilter, cognitiveFilter, unitStatusFilter, searchQuery, plannedTopicIds]);

  const handleCreateTopic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTopicTitle.trim()) return;

    const subtopicsList = newTopicSubtopics
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    if (!await addTopic(newTopicSubjectId, newTopicTitle, subtopicsList, newTopicDate, newTopicNotes)) return;
    setNewTopicNotes('');
    setNewTopicTitle('');
    setNewTopicSubtopics('');
    setIsAddTopicModalOpen(false);
    setExpandedSubjectId(newTopicSubjectId);
  };

  return (
    <div className="space-y-6">
      {/* 1. Üst Filtreler, Görünüm Seçici & Başlık */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              UNITS.md · ExcelMaster Sekme 2 (Tekrar_Plani) &amp; Sekme 6 (Konu_Takip_Matrisi)
            </div>
            <h2 className="text-lg font-bold text-slate-900 mt-0.5">
              {subjects.length} Ders Bloğu &amp; {topics.length} Konsolide Ünite
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Temel Bilimler: {temelSubjectsCount} Blok ({temelUnitsCount} Ünite) &amp; Klinik Bilimler: {klinikSubjectsCount} Blok ({klinikUnitsCount} Ünite) · Toplam {subjects.reduce((sum, subject) => sum + subject.questionCount, 0)} Soru
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setIsAddTopicModalOpen(true)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Yeni Konu / Ünite Ekle</span>
            </button>
          </div>
        </div>

        {/* 3'lü Görünüm Seçici (Ders Blokları vs Tekrar_Plani Inline Tablo vs Konu_Takip_Matrisi Isı Haritası) */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setViewMode('SUBJECT_CARDS')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'SUBJECT_CARDS'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>14 Ders Bloğu &amp; Protokol Kartları</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('TEKRAR_PLANI')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'TEKRAR_PLANI'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Tekrar_Plani (Sarı Hücre Inline T+0 &amp; T+3 Giriş)</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('KONU_TAKIP_MATRISI')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'KONU_TAKIP_MATRISI'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Konu_Takip_Matrisi (14 Branş Gecikme Isı Haritası)</span>
            </button>
          </div>

          {viewMode === 'KONU_TAKIP_MATRISI' && (
            <div className="flex items-center gap-2 text-[11px] font-mono">
              <span className="font-sans text-slate-500">Gecikme Isı Haritası:</span>
              <span className="px-2 py-0.5 rounded font-semibold" style={{ backgroundColor: '#A7F3D0' }}>
                0 Gün: Zamanında
              </span>
              <span className="px-2 py-0.5 rounded font-semibold" style={{ backgroundColor: '#FDE68A' }}>
                1-7 Gün: Uyarı
              </span>
              <span className="px-2 py-0.5 rounded font-bold" style={{ backgroundColor: '#FCA5A5' }}>
                8+ Gün: Kritik
              </span>
            </div>
          )}
        </div>

        {/* Filtre ve Arama Çubuğu */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
          <div className="md:col-span-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="K0001..K0227, ünite veya ders ara..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="md:col-span-4 flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs">
            <button
              type="button"
              onClick={() => setCategoryFilter('ALL')}
              className={`flex-1 py-1.5 px-2 font-medium rounded-md transition-colors ${
                categoryFilter === 'ALL'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tümü ({topics.length} Ünite)
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter('TEMEL_BILIMLER')}
              className={`flex-1 py-1.5 px-2 font-medium rounded-md transition-colors ${
                categoryFilter === 'TEMEL_BILIMLER'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Temel ({temelUnitsCount})
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter('KLINIK_BILIMLER')}
              className={`flex-1 py-1.5 px-2 font-medium rounded-md transition-colors ${
                categoryFilter === 'KLINIK_BILIMLER'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Klinik ({klinikUnitsCount})
            </button>
          </div>

          <div className="md:col-span-2">
            <select
              aria-label="Ünite Durum Filtresi"
              value={unitStatusFilter}
              onChange={e => setUnitStatusFilter(e.target.value as UnitStatusFilter)}
              className="w-full px-2.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-700 font-medium focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">Durum: Tüm Üniteler</option>
              <option value="ACTIVE_TRIAGE">Çalışılan / Triyajda</option>
              <option value="NOT_STARTED">Başlanmayanlar</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <select
              aria-label="Bilişsel Grup Filtresi"
              value={cognitiveFilter}
              onChange={e => setCognitiveFilter(e.target.value as 'ALL' | CognitiveGroup)}
              className="w-full px-2.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-700 font-medium focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">Bilişsel: Tümü</option>
              <option value="GRUP_A">Grup A: Saf Ezber</option>
              <option value="GRUP_B">Grup B: Mekanizma</option>
              <option value="GRUP_C">Grup C: Klinik Karar</option>
            </select>
          </div>
        </div>
      </div>

      {/* GÖRÜNÜM 1: KANONİK DERS BLOKLARI VE PROTOKOL KARTLARI */}
      {viewMode === 'SUBJECT_CARDS' && (
        <div className="space-y-4">
          {filteredSubjects.map(sub => {
            const allSubTopics = topics
              .filter(t => subjectForTopic(subjects, t.subjectId)?.id === sub.id)
              .sort((a, b) => a.unitNumber - b.unitNumber);

            const visibleSubTopics = allSubTopics.filter(t => {
              if (unitStatusFilter === 'ACTIVE_TRIAGE' && t.status === 'NOT_STARTED' && !plannedTopicIds.has(t.id)) return false;
              if (unitStatusFilter === 'NOT_STARTED' && (t.status !== 'NOT_STARTED' || plannedTopicIds.has(t.id))) return false;
              if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase();
                const subjectMatch =
                  sub.name.toLowerCase().includes(q) || sub.code.toLowerCase().includes(q);
                if (
                  !subjectMatch &&
                  !t.title.toLowerCase().includes(q) &&
                  !(t.topicCode && t.topicCode.toLowerCase().includes(q))
                ) {
                  return false;
                }
              }
              return true;
            });

            const isExpanded = expandedSubjectId === sub.id;

            const greenCount = allSubTopics.filter(
              t => t.currentBucket === 'GREEN' || t.discharged
            ).length;
            const yellowCount = allSubTopics.filter(t => t.currentBucket === 'YELLOW').length;
            const redCount = allSubTopics.filter(t => t.currentBucket === 'RED').length;
            const pendingCount = allSubTopics.filter(t => t.currentBucket === 'NONE').length;

            const isTemel = sub.category === 'TEMEL_BILIMLER';

            return (
              <div
                key={sub.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-shadow hover:shadow-sm"
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onClick={() => setExpandedSubjectId(isExpanded ? null : sub.id)}
                  onKeyDown={event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setExpandedSubjectId(isExpanded ? null : sub.id);
                    }
                  }}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/80 transition-colors select-none"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div
                      className={`px-2.5 h-10 rounded-xl flex items-center justify-center font-bold text-xs font-mono shrink-0 shadow-2xs ${
                        isTemel
                          ? 'bg-sky-100 text-sky-800 border border-sky-200'
                          : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                      }`}
                    >
                      {sub.code}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900">{sub.name}</h3>
                        <span className="text-[11px] font-mono font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {allSubTopics.length} Ünite · {sub.questionCount} Soru (%{sub.weightPercentage})
                        </span>
                        {sub.excelColumn && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            <Table className="w-3 h-3" />
                            Excel Kolon: {sub.excelColumn}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-1">
                        <span>{isTemel ? 'Temel Bilimler' : 'Klinik Bilimler'}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-slate-600 font-medium">
                          {sub.cognitiveGroup === 'GRUP_A' && 'Grup A: Saf Ezber / Mekansal'}
                          {sub.cognitiveGroup === 'GRUP_B' && 'Grup B: Mekanizmik & Nedensel'}
                          {sub.cognitiveGroup === 'GRUP_C' && 'Grup C: Klinik Karar & Protokol'}
                        </span>
                        {sub.ankiDeckPattern && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="inline-flex items-center gap-1 font-mono text-[11px] text-indigo-700">
                              <Tag className="w-3 h-3" />
                              {sub.ankiDeckPattern}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <div className="flex items-center gap-1.5 text-xs font-mono">
                      <span
                        className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold"
                        title="Yeşil Kova (Taburcu)"
                      >
                        🟢 {greenCount}
                      </span>
                      <span
                        className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-semibold"
                        title="Sarı Kova (Müşahede)"
                      >
                        🟡 {yellowCount}
                      </span>
                      <span
                        className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 font-semibold"
                        title="Kırmızı Kova (Yoğun Bakım)"
                      >
                        🔴 {redCount}
                      </span>
                      <span
                        className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                        title="Henüz Triyajlanmamış Ünite"
                      >
                        ⚪ {pendingCount}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setExpandedSubjectId(isExpanded ? null : sub.id)}
                      aria-expanded={isExpanded}
                      className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                      aria-label={`${sub.name} Dersini ${isExpanded ? 'Daralt' : 'Genişlet'}`}
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t border-slate-200 bg-slate-50/50 p-4 sm:p-5 space-y-4">
                    <div className="bg-white border border-slate-200 rounded-lg p-4 text-xs space-y-2 text-slate-700">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                        <span>DUS 2027 Doktrini Çalışma &amp; Soru Protokolü ({sub.code})</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
                        <div>
                          <strong className="text-slate-800">T+0 İlk Kodlama:</strong> {sub.protocol.t0Method}
                        </div>
                        <div>
                          <strong className="text-slate-800">T+3 Geri Çağırma:</strong> {sub.protocol.t3Method}
                        </div>
                        <div>
                          <strong className="text-slate-800">Soru Bankası Kotası:</strong> {sub.protocol.questionBankUsage}
                        </div>
                        <div>
                          <strong className="text-slate-800">Anki Entegrasyonu:</strong> {sub.protocol.ankiProtocol}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          Kanonik Müfredat Üniteleri ({visibleSubTopics.length} / {allSubTopics.length})
                        </h4>
                        <button
                          type="button"
                          onClick={() => {
                            setNewTopicSubjectId(sub.id);
                            setNewTopicTitle('');
                            setIsAddTopicModalOpen(true);
                          }}
                          className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Bu Derse Ek Ünite Ekle</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        {visibleSubTopics.map(topic => {
                          const isGreen = topic.currentBucket === 'GREEN' || topic.discharged;
                          const isYellow = topic.currentBucket === 'YELLOW';
                          const isRed = topic.currentBucket === 'RED';
                          const isPending = topic.currentBucket === 'NONE';
                          const t0TaskForCard = tasks.find(task => task.topicId === topic.id && task.stage === 'T0_SAMPLING' && task.status === 'open');

                          return (
                            <div
                              key={topic.id}
                              className="bg-white border border-slate-200 rounded-lg p-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-2xs"
                            >
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">
                                    {topic.topicCode || `#${String(topic.unitNumber).padStart(2, '0')}`}
                                  </span>
                                  <span className="text-xs font-bold text-slate-900">{topic.title}</span>

                                  {isGreen && (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                      <span>Yeşil Kova (Taburcu)</span>
                                    </span>
                                  )}
                                  {isYellow && (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                                      <AlertTriangle className="w-3 h-3 text-amber-600" />
                                      <span>Sarı Kova (T+14 Müşahede)</span>
                                    </span>
                                  )}
                                  {isRed && (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                                      <AlertOctagon className="w-3 h-3 text-rose-600" />
                                      <span>Kırmızı Kova (Cumartesi Onarım)</span>
                                    </span>
                                  )}
                                  {isPending && (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                                      <Clock className="w-3 h-3" />
                                      <span>
                                        {t0TaskForCard ? `T+0 Planlı: ${t0TaskForCard.dueDate}` : (topic.status === 'T0_DONE' || topic.status === 'T3_PENDING') ? 'T+3 Testi Bekliyor' : 'Başlanmadı'}
                                      </span>
                                    </span>
                                  )}
                                </div>

                                {topic.subtopics && topic.subtopics.length > 0 && (
                                  <div className="text-[11px] text-slate-500 mt-1 flex flex-wrap gap-1">
                                    <span className="font-semibold text-slate-600">Alt Başlıklar:</span>
                                    {topic.subtopics.map((st, i) => (
                                      <span key={i} className="after:content-[','] last:after:content-['']">
                                        {st}
                                      </span>
                                    ))}
                                  </div>
                                )}

                                {topic.clinicalNotes && (
                                  <div className="text-[11px] text-slate-600 mt-1 italic bg-slate-50 p-1.5 rounded border border-slate-200">
                                    <span className="font-semibold not-italic text-slate-700">Yama Notu:</span>{' '}
                                    {topic.clinicalNotes}
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
                                {topic.status === 'NOT_STARTED' && !t0TaskForCard && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setNewTopicSubjectId(sub.id);
                                      setNewTopicTitle(topic.title);
                                      setNewTopicDate(todayStr);
                                      setIsAddTopicModalOpen(true);
                                    }}
                                    className="px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors"
                                  >
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>T+0 Planla</span>
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={() => setActiveTestTopic(topic)}
                                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                                >
                                  <Play className="w-3.5 h-3.5" />
                                  <span>Test Gir &amp; Triyaj</span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => void cancelPlannedT0(topic.id)}
                                  disabled={!tasks.some(task => task.topicId === topic.id && task.stage === 'T0_SAMPLING' && task.status === 'open')}
                                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition-colors"
                                  title="T+0 planını iptal et"
                                  aria-label={`${topic.title} T+0 planını iptal et`}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* GÖRÜNÜM 2: TEKRAR_PLANI — AÇIK SARI HÜCRELERDEN INLINE T+0 & T+3 TABLOSU (Sekme 2, Sayfa 6) */}
      {viewMode === 'TEKRAR_PLANI' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Tekrar Planı
              </h3>
              <p className="text-xs text-slate-500">
                T+0 plan tarihini düzenle veya açık T+3 testinin sonucunu gir.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
              {filteredFlatTopics.length} Ünite Gösteriliyor
            </span>
          </div>

          <div className="overflow-x-auto max-h-[640px]">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-white font-semibold sticky top-0 z-10">
                <tr>
                  <th className="py-3 px-3">Konu ID</th>
                  <th className="py-3 px-3">Branş</th>
                  <th className="py-3 px-3">Ünite Adı</th>
                  <th className="py-3 px-3 bg-amber-500 text-slate-950">T+0 Giriş (Sarı Hücre)</th>
                  <th className="py-3 px-3">T+3 Tarihi (=T0+3)</th>
                  <th className="py-3 px-3 bg-amber-500 text-slate-950 text-center">T+3 Doğru (0-40)</th>
                  <th className="py-3 px-3">Kova Rengi</th>
                  <th className="py-3 px-3">Sonraki Aksiyon</th>
                  <th className="py-3 px-3">Sıradaki Hedef</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {filteredFlatTopics.map(topic => {
                  const sub = subjectForTopic(subjects, topic.subjectId);
                  const t0Task = tasks.find(task => task.topicId === topic.id && task.stage === 'T0_SAMPLING' && task.status === 'open');
                  const t3Task = tasks.find(task => task.topicId === topic.id && task.stage === 'T3_MAIN' && task.status === 'open');
                  const nextTarget = t0Task?.dueDate ?? getTopicNextTargetDate(topic, t0Task?.dueDate);
                  const actionText =
                    topic.currentBucket === 'GREEN' || topic.discharged
                      ? 'TABURCU (Sadece Branş Denemesi)'
                      : topic.currentBucket === 'YELLOW'
                      ? `[SARI KOVA] ${topic.promotedFromRed ? '3.' : '2.'} Banka 1 Test (20–25 Soru)`
                      : topic.currentBucket === 'RED'
                      ? '[KIRMIZI KOVA] Cmt 25dk Onarım + 30 Soru'
                      : (topic.status === 'T0_DONE' || topic.status === 'T3_PENDING')
                      ? 'T+3 Gününde 40 Soru Çözülecek'
                      : 'T+0 Konu + en az 20 Soru Bekleniyor';

                  return (
                    <tr key={topic.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-3 font-bold text-indigo-700">{topic.topicCode}</td>
                      <td className="py-2.5 px-3 font-sans font-semibold text-slate-700">
                        [{sub?.code}] {sub?.name}
                      </td>
                      <td className="py-2.5 px-3 font-sans font-bold text-slate-900">{topic.title}</td>
                      <td className="py-2 px-3 bg-yellow-50/90 border-x border-yellow-200">
                        <input
                          type="date"
                          aria-label={`${topic.title} T+0 plan tarihi`}
                          value={t0Task?.dueDate || topic.t0Date || ''}
                          disabled={saving || (topic.status !== 'NOT_STARTED' && !t0Task)}
                          onChange={e => {
                            if (!e.target.value || !sub) return;
                            if (t0Task) void reschedule(t0Task.id, e.target.value);
                            else void addTopic(sub.id, topic.title, topic.subtopics, e.target.value);
                          }}
                          className="px-2 py-1 bg-yellow-100/90 border border-yellow-400 rounded text-xs font-mono text-slate-900 w-34"
                        />
                      </td>
                      <td className="py-2.5 px-3 tabular-nums text-slate-700">
                        {topic.t3DueDate || '-'}
                      </td>
                      <td className="py-2 px-3 bg-yellow-50/90 border-x border-yellow-200 text-center">
                        {t3Task ? (
                          <button type="button" className="underline font-semibold" onClick={() => setActiveTestTopic(topic)}>Sonuç Gir</button>
                        ) : topic.t3Score?.correct ?? '—'}
                      </td>
                      <td className="py-2.5 px-3 font-sans">
                        {(topic.currentBucket === 'GREEN' || topic.discharged) && (
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-[11px]">
                            🟢 YEŞİL
                          </span>
                        )}
                        {topic.currentBucket === 'YELLOW' && (
                          <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 font-bold text-[11px]">
                            🟡 SARI
                          </span>
                        )}
                        {topic.currentBucket === 'RED' && (
                          <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 border border-rose-300 font-bold text-[11px]">
                            🔴 KIRMIZI
                          </span>
                        )}
                        {topic.currentBucket === 'NONE' && !topic.discharged && (
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 text-[11px]">
                            ⚪ BEKLİYOR
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 font-sans text-[11px] text-slate-700">
                        {actionText}
                      </td>
                      <td className="py-2.5 px-3 tabular-nums font-bold text-slate-900">
                        {nextTarget || (topic.discharged ? 'Mezun' : '-')}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* GÖRÜNÜM 3: KONU_TAKIP_MATRISI — 14 BRANŞ GECİKME ISI HARİTASI (Sekme 6, Sayfa 10) */}
      {viewMode === 'KONU_TAKIP_MATRISI' && (
        <div className="space-y-4">
          {/* Branş Hızlı Seçici */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedMatrixSubjectId('ALL')}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                selectedMatrixSubjectId === 'ALL'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              14 Branş Tümü
            </button>
            {subjects.map(sub => (
              <button
                key={sub.id}
                type="button"
                onClick={() => setSelectedMatrixSubjectId(sub.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold ${
                  selectedMatrixSubjectId === sub.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {sub.code} ({sub.excelColumn})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {filteredSubjects
              .filter(s => selectedMatrixSubjectId === 'ALL' || s.id === selectedMatrixSubjectId)
              .map(sub => {
                const subTopics = topics
                  .filter(t => subjectForTopic(subjects, t.subjectId)?.id === sub.id)
                  .sort((a, b) => a.unitNumber - b.unitNumber);

                return (
                  <div
                    key={sub.id}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
                  >
                    <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-mono text-xs font-bold">
                          Kolon {sub.excelColumn} · {sub.code}
                        </span>
                        <h4 className="text-xs font-bold">{sub.name}</h4>
                      </div>
                      <span className="text-[11px] font-mono text-slate-300">
                        {subTopics.length} Ünite
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11px]">
                        <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                          <tr>
                            <th className="py-2 px-2.5">Ünite Adı</th>
                            <th className="py-2 px-2 text-center">Tekrar</th>
                            <th className="py-2 px-2">Son Çalışma</th>
                            <th className="py-2 px-2">Önerilen</th>
                            <th className="py-2 px-2 text-center">Gecikme (G)</th>
                            <th className="py-2 px-2.5 text-right">Kova</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-mono">
                          {subTopics.map(t => {
                            const plannedT0 = tasks.find(task => task.topicId === t.id && task.stage === 'T0_SAMPLING' && task.status === 'open')?.dueDate;
                            const delayDays = calculateTopicDelayDays(t, todayStr, plannedT0);
                            const delayStyle = getDelayHeatmapStyle(delayDays);
                            const nextDate = getTopicNextTargetDate(t, plannedT0);

                            return (
                              <tr key={t.id} className="hover:bg-slate-50">
                                <td className="py-2 px-2.5 font-sans font-medium text-slate-900">
                                  <span className="font-mono text-slate-400 mr-1">
                                    #{String(t.unitNumber).padStart(2, '0')}
                                  </span>
                                  {t.title}
                                </td>
                                <td className="py-2 px-2 text-center tabular-nums font-bold text-slate-700">
                                  {t.reviewCount ?? 0}
                                </td>
                                <td className="py-2 px-2 tabular-nums text-slate-600">
                                  {t.lastStudiedDate || t.t0Date || '-'}
                                </td>
                                <td className="py-2 px-2 tabular-nums text-slate-700">
                                  {nextDate || (t.discharged ? 'Mezun' : '-')}
                                </td>
                                <td className="py-2 px-2 text-center">
                                  <span
                                    style={{ backgroundColor: delayStyle.bgHex }}
                                    className={`inline-block px-2 py-0.5 rounded text-[10px] tabular-nums ${delayStyle.textClass}`}
                                  >
                                    {delayDays}G
                                  </span>
                                </td>
                                <td className="py-2 px-2.5 text-right font-sans">
                                  <button
                                    type="button"
                                    onClick={() => setActiveTestTopic(t)}
                                    className="font-semibold text-indigo-700 hover:underline"
                                  >
                                    {t.currentBucket === 'GREEN' || t.discharged
                                      ? '🟢 Yeşil'
                                      : t.currentBucket === 'YELLOW'
                                      ? '🟡 Sarı'
                                      : t.currentBucket === 'RED'
                                      ? '🔴 Kırmızı'
                                      : '⚪ Gir'}
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* 3. Yeni Konu Ekleme Modalı */}
      {isAddTopicModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div ref={addTopicDialog} role="dialog" aria-modal="true" aria-label="T+0 planla" className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900">T+0 Planla</h3>

            <form onSubmit={handleCreateTopic} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  İlgili DUS Ders Bloğu (14 Kanonik Blok)
                </label>
                <select
                  value={newTopicSubjectId}
                  aria-label="Ders"
                  onChange={e => { setNewTopicSubjectId(e.target.value); setNewTopicTitle(''); }}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                >
                  {subjects.map(sub => (
                    <option key={sub.id} value={sub.id}>
                      [{sub.code}] {sub.name} ({sub.category === 'TEMEL_BILIMLER' ? 'Temel' : 'Klinik'})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Ünite / Konu Başlığı
                </label>
                <select value={newTopicTitle} onChange={e => setNewTopicTitle(e.target.value)} aria-label="Kanonik ünite" required
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 p-2 text-sm">
                  <option value="">Ünite seç</option>
                  {(CANONICAL_UNITS[subjects.find(item => item.id === newTopicSubjectId)?.name ?? ''] ?? []).map(title => (
                    <option key={title} value={title}>{title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kritik Alt Başlıklar (Virgülle Ayırın)
                </label>
                <textarea
                  rows={2}
                  value={newTopicSubtopics}
                  onChange={e => setNewTopicSubtopics(e.target.value)}
                  placeholder="Örn: 4. Jen Total-Etch, 8. Jen Üniversal Adeziv, HEMA faz ayrılması..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  T+0 Başlangıç Tarihi
                </label>
                <input
                  type="date"
                  required
                  aria-label="T+0 Başlangıç Tarihi"
                  value={newTopicDate}
                  onChange={e => setNewTopicDate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-mono text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Çalışma / Yama Notu (Opsiyonel)
                </label>
                <textarea
                  rows={2}
                  value={newTopicNotes}
                  onChange={e => setNewTopicNotes(e.target.value)}
                  placeholder="Kritik odak noktaları, kaçıncı tekrar olduğu vb..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddTopicModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-100 transition-colors"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                >
                  {saving ? 'Kaydediliyor…' : 'Planı Kaydet'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Triyaj Modalı */}
      {activeTestTopic && (
        <TriageModal topic={activeTestTopic} onClose={() => setActiveTestTopic(null)} />
      )}
    </div>
  );
};
