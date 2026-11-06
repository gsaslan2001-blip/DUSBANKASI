import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  TrendUp,
  Trophy,
  Clock,
  CheckCircle,
  WarningCircle,
  ArrowRight,
  Trash,
  GraduationCap,
  ChartLineUp,
  Sparkle,
  Target,
  FileText,
} from '@phosphor-icons/react';
import { toast } from 'sonner';
import type { Theme } from '../../theme';
import type { computeOverviewStats, loadStreak, getActivitySummary, ActivityPoint } from '../../lib/stats';
import type { GoalProgress, ExamResult, ExamTrendData } from '../../types/app';
import GoalTracker from '../sections/GoalTracker';
import WhatIfSimulator from '../sections/WhatIfSimulator';
import { fmt, SectionTitle } from './statsHelpers';
import {
  getPastSimulations,
  deletePastSimulation,
  computeAggregateSimulationStats,
  type PastSimulationRecord,
} from '../../lib/simulationEngine';
import { Button } from '../ui/Button';

export interface TabSimulationProps {
  theme: Theme;
  overview: ReturnType<typeof computeOverviewStats>;
  streak: ReturnType<typeof loadStreak>;
  activitySummary: ReturnType<typeof getActivitySummary>;
  activity90: ActivityPoint[];
  goalProgress: GoalProgress[];
  examHistory: {
    status: 'loading' | 'error' | 'ready';
    exams: ExamResult[];
  };
  examTrend: ExamTrendData;
  isUserLoggedIn: boolean;
  onEditGoals: () => void;
  onReviewSimulation?: (record: PastSimulationRecord) => void;
  onStartSimulation?: () => void;
}

export default function TabSimulation({
  theme,
  overview,
  streak,
  activitySummary,
  activity90,
  goalProgress,
  isUserLoggedIn: _isUserLoggedIn,
  onEditGoals,
  onReviewSimulation,
  onStartSimulation,
}: TabSimulationProps) {
  // Yerel simülasyon geçmişi state'i
  const [simulationHistory, setSimulationHistory] = useState<PastSimulationRecord[]>(() => getPastSimulations());
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [selectedBranchFilter, setSelectedBranchFilter] = useState<'all' | 'temel' | 'klinik'>('all');

  // Kümülatif simülasyon analizi (Trendler, 14-branş istatistiği, Güçlü/Zayıf branşlar)
  const aggregateStats = useMemo(() => {
    return computeAggregateSimulationStats(simulationHistory);
  }, [simulationHistory]);

  // Deneme silme
  const handleDeleteRecord = useCallback((id: string, title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(`"${title}" simülasyon kaydını silmek istediğinden emin misin?`)) {
      deletePastSimulation(id);
      setSimulationHistory(getPastSimulations());
      toast.success('Simülasyon kaydı silindi');
    }
  }, []);

  // Filtrelenmiş branş istatistikleri
  const filteredBranchSummary = useMemo(() => {
    if (selectedBranchFilter === 'all') return aggregateStats.branchSummary;
    return aggregateStats.branchSummary.filter(b => b.category === selectedBranchFilter);
  }, [aggregateStats.branchSummary, selectedBranchFilter]);

  // SVG Net Trend Grafiği Hesaplamaları
  const trendPoints = aggregateStats.netTrend;
  const svgWidth = 720;
  const svgHeight = 220;
  const paddingX = 40;
  const paddingY = 30;

  const chartCoords = useMemo(() => {
    if (trendPoints.length === 0) return null;
    const minNet = 0;
    const maxNet = 120;
    const count = trendPoints.length;

    const getX = (idx: number) => {
      if (count <= 1) return svgWidth / 2;
      return paddingX + (idx / (count - 1)) * (svgWidth - paddingX * 2);
    };

    const getY = (val: number) => {
      const clamped = Math.max(minNet, Math.min(maxNet, val));
      return svgHeight - paddingY - ((clamped - minNet) / (maxNet - minNet)) * (svgHeight - paddingY * 2);
    };

    const totalPath = trendPoints.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(pt.totalNet)}`).join(' ');
    const temelPath = trendPoints.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(pt.temelNet)}`).join(' ');
    const klinikPath = trendPoints.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(pt.klinikNet)}`).join(' ');

    // Alan dolgusu
    let totalArea = '';
    if (count > 0) {
      const firstX = getX(0);
      const lastX = getX(count - 1);
      const bottomY = svgHeight - paddingY;
      totalArea = `${totalPath} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`;
    }

    const target95Y = getY(95);

    return {
      getX,
      getY,
      totalPath,
      temelPath,
      klinikPath,
      totalArea,
      target95Y,
    };
  }, [trendPoints]);

  return (
    <div className="flex flex-col gap-6">
      {/* ── 1. DUS SİMÜLASYONU KOKPİT HERO & KPI KARTLARI ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* Toplam Çözülen Deneme */}
        <div className={`${theme.card} rounded-2xl p-5 border ${theme.border} flex items-center justify-between`}>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-1">
              Tamamlanan Simülasyon
            </span>
            <div className="text-3xl font-black font-mono tracking-tight text-white">
              {aggregateStats.totalSimulations}
              <span className="text-xs font-normal text-white/40 ml-2">Deneme</span>
            </div>
            <p className="text-[11px] text-white/50 mt-1">120 Soru / 150 Dk Formatı</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
            <GraduationCap size={24} weight="bold" />
          </div>
        </div>

        {/* Ortalama Net */}
        <div className={`${theme.card} rounded-2xl p-5 border ${theme.border} flex items-center justify-between`}>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-1">
              Ortalama DUS Neti
            </span>
            <div className="text-3xl font-black font-mono tracking-tight text-indigo-300">
              {aggregateStats.avgNet.toFixed(2)}
              <span className="text-xs font-normal text-white/40 ml-1.5">/ 120</span>
            </div>
            <p className="text-[11px] text-white/50 mt-1">
              Son Deneme: <strong className="text-white font-mono">{aggregateStats.latestNet.toFixed(2)}</strong>
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
            <TrendUp size={24} weight="bold" />
          </div>
        </div>

        {/* Zirve Net (Rekor) */}
        <div className={`${theme.card} rounded-2xl p-5 border ${theme.border} flex items-center justify-between`}>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-1">
              Zirve Net (Rekor)
            </span>
            <div className="text-3xl font-black font-mono tracking-tight text-amber-400">
              {aggregateStats.bestNet.toFixed(2)}
              <span className="text-xs font-normal text-white/40 ml-1.5">/ 120</span>
            </div>
            <p className="text-[11px] text-white/50 mt-1">En Yüksek Performans</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <Trophy size={24} weight="bold" />
          </div>
        </div>

        {/* Net Kırılımı (Temel / Klinik) */}
        <div className={`${theme.card} rounded-2xl p-5 border ${theme.border} flex items-center justify-between`}>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-1">
              Net Kırılımı (Ort.)
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-black font-mono text-sky-400">
                T: {aggregateStats.avgTemelNet.toFixed(1)}
              </span>
              <span className="text-white/30">|</span>
              <span className="text-sm font-black font-mono text-emerald-400">
                K: {aggregateStats.avgKlinikNet.toFixed(1)}
              </span>
            </div>
            <p className="text-[11px] text-white/50 mt-1.5 flex items-center gap-1 font-mono">
              <Clock size={12} weight="bold" /> Ort. Süre: {aggregateStats.avgUsedMinutes} dk
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/20 text-sky-400 flex items-center justify-center">
            <ChartLineUp size={24} weight="bold" />
          </div>
        </div>
      </motion.div>

      {/* ── 2. NET GRAFİKLERİ & PERFORMANS GELİŞİM TRENDİ ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className={`${theme.card} rounded-2xl p-6 border ${theme.border} relative overflow-hidden`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <SectionTitle
              title="DUS Simülasyon Net Gelişimi"
              eyebrow="Performans Analizi"
              mb="mb-1"
            />
            <p className="text-xs text-white/50">
              Denemeler boyunca Toplam, Temel Bilimler (40) ve Klinik Bilimler (80) net değişim eğrisi.
            </p>
          </div>

          {/* Lejant */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block shadow-sm shadow-indigo-500/50" />
              <span className="text-white/80">Toplam Net</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-sky-400 inline-block" />
              <span className="text-white/80">Temel (40)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              <span className="text-white/80">Klinik (80)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 border-t border-dashed border-amber-400 inline-block" />
              <span className="text-amber-300/80">Hedef (95 Net)</span>
            </div>
          </div>
        </div>

        {trendPoints.length === 0 ? (
          <div className="py-16 text-center text-xs text-white/50 flex flex-col items-center justify-center gap-3">
            <Target size={32} weight="light" className="text-indigo-400/50" />
            <p>Henüz DUS Simülasyon sınavı tamamlanmadı.</p>
            {onStartSimulation && (
              <Button
                onClick={onStartSimulation}
                variant="primary"
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-500 font-bold px-4"
              >
                İlk Simülasyonu Başlat (120 Soru)
              </Button>
            )}
          </div>
        ) : chartCoords ? (
          <div className="relative w-full overflow-x-auto">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-56 select-none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="simTotalGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Yatay Kılavuz Çizgileri (0, 30, 60, 90, 120 Net) */}
              {[0, 30, 60, 90, 120].map(val => {
                const y = chartCoords.getY(val);
                return (
                  <g key={val}>
                    <line
                      x1={paddingX}
                      y1={y}
                      x2={svgWidth - paddingX}
                      y2={y}
                      stroke="rgba(255, 255, 255, 0.08)"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={paddingX - 10}
                      y={y + 4}
                      fill="rgba(255, 255, 255, 0.35)"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="end"
                    >
                      {val}
                    </text>
                  </g>
                );
              })}

              {/* Ankara Üniv. ADÇC TOP 10 Hedef Çizgisi (95 Net) */}
              <line
                x1={paddingX}
                y1={chartCoords.target95Y}
                x2={svgWidth - paddingX}
                y2={chartCoords.target95Y}
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                opacity="0.8"
              />
              <text
                x={svgWidth - paddingX - 4}
                y={chartCoords.target95Y - 6}
                fill="#f59e0b"
                fontSize="9"
                fontWeight="bold"
                fontFamily="monospace"
                textAnchor="end"
              >
                95 NET (ADÇC HEDEFİ)
              </text>

              {/* Alan Dolgusu */}
              {chartCoords.totalArea && (
                <path d={chartCoords.totalArea} fill="url(#simTotalGradient)" />
              )}

              {/* Çizgiler */}
              <path
                d={chartCoords.temelPath}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.85"
              />
              <path
                d={chartCoords.klinikPath}
                fill="none"
                stroke="#34d399"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.85"
              />
              <path
                d={chartCoords.totalPath}
                fill="none"
                stroke="#6366f1"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Noktalar */}
              {trendPoints.map((pt, i) => {
                const cx = chartCoords.getX(i);
                const cy = chartCoords.getY(pt.totalNet);
                const isHovered = hoveredPoint === i;
                return (
                  <g
                    key={pt.id || i}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isHovered ? 7 : 5}
                      fill="#6366f1"
                      stroke="#ffffff"
                      strokeWidth={isHovered ? 3 : 2}
                      className="transition-all"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Hover Tooltip Bilgisi */}
            {hoveredPoint !== null && trendPoints[hoveredPoint] && (
              <div
                className="absolute top-2 right-4 bg-slate-900/90 border border-indigo-500/30 rounded-xl p-3 text-xs font-mono shadow-xl backdrop-blur-md pointer-events-none"
              >
                <div className="font-bold text-white mb-1">
                  {trendPoints[hoveredPoint].title}
                </div>
                <div className="text-[11px] text-white/50 mb-1.5 font-sans">
                  {new Date(trendPoints[hoveredPoint].date).toLocaleDateString('tr-TR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
                <div className="space-y-0.5">
                  <div className="flex justify-between gap-4 text-indigo-300 font-bold">
                    <span>Toplam Net:</span>
                    <span>{trendPoints[hoveredPoint].totalNet.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-sky-400">
                    <span>Temel Net:</span>
                    <span>{trendPoints[hoveredPoint].temelNet.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-emerald-400">
                    <span>Klinik Net:</span>
                    <span>{trendPoints[hoveredPoint].klinikNet.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-white/70 pt-1 border-t border-white/10">
                    <span>Doğruluk:</span>
                    <span>%{trendPoints[hoveredPoint].accuracy}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </motion.div>

      {/* ── 3. GÜÇLÜ & ZAYIF BRANŞLAR ÖZETİ ── */}
      {aggregateStats.totalSimulations > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* En Güçlü Branşlar */}
          <div className={`${theme.card} rounded-2xl p-5 border ${theme.border}`}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Sparkle size={16} weight="fill" />
              </div>
              <h4 className="text-sm font-bold text-white">En Yüksek Doğruluk Gösteren Branşlar</h4>
            </div>
            {aggregateStats.strongestBranches.length === 0 ? (
              <p className="text-xs text-white/50">Yeterli simülasyon verisi toplandığında listelenecektir.</p>
            ) : (
              <div className="space-y-2">
                {aggregateStats.strongestBranches.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/15"
                  >
                    <div>
                      <p className="text-xs font-bold text-white">{b.branch}</p>
                      <p className="text-[11px] text-white/50 font-mono">
                        {b.totalCorrect} D / {b.totalIncorrect} Y · Ort. {b.avgNet.toFixed(2)} Net
                      </p>
                    </div>
                    <span className="text-xs font-black font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg">
                      %{b.accuracy}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Geliştirilmesi Gereken Branşlar */}
          <div className={`${theme.card} rounded-2xl p-5 border ${theme.border}`}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                <WarningCircle size={16} weight="fill" />
              </div>
              <h4 className="text-sm font-bold text-white">Geliştirilmesi Gereken Branşlar</h4>
            </div>
            {aggregateStats.weakestBranches.length === 0 ? (
              <p className="text-xs text-white/50">Yeterli simülasyon verisi toplandığında listelenecektir.</p>
            ) : (
              <div className="space-y-2">
                {aggregateStats.weakestBranches.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-red-500/5 border border-red-500/15"
                  >
                    <div>
                      <p className="text-xs font-bold text-white">{b.branch}</p>
                      <p className="text-[11px] text-white/50 font-mono">
                        {b.totalCorrect} D / {b.totalIncorrect} Y · Ort. {b.avgNet.toFixed(2)} Net
                      </p>
                    </div>
                    <span className="text-xs font-black font-mono text-red-400 bg-red-500/10 px-2 py-1 rounded-lg">
                      %{b.accuracy}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── 4. SON DENEMELERE BAĞLI BRANŞ / DERS BAZLI İSTATİSTİKLER TABLOSU ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={`${theme.card} rounded-2xl p-6 border ${theme.border}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <SectionTitle
              title="Son Denemelere Bağlı Branş / Ders Bazlı İstatistikler"
              eyebrow="DUS 2020 Sıralı Analiz"
              mb="mb-1"
            />
            <p className="text-xs text-white/50">
              Fizyoloji ve Histoloji kural gereği birleşik değerlendirilir. Formül: Doğru - Yanlış / 4.
            </p>
          </div>

          {/* Filtre Butonları */}
          <div className="flex items-center gap-1.5 bg-black/30 p-1 rounded-xl border border-white/5 text-xs">
            {(
              [
                ['all', 'Tümü (14 Branş)'],
                ['temel', 'Temel Bilimler'],
                ['klinik', 'Klinik Bilimler'],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedBranchFilter(key)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  selectedBranchFilter === key
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {filteredBranchSummary.length === 0 ? (
          <div className="py-12 text-center text-xs text-white/50">
            Simülasyon çözüldükçe branş net analizleri burada listelenecektir.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/50 text-[11px] font-bold uppercase tracking-wider">
                  <th className="py-3 px-4"># Branş</th>
                  <th className="py-3 px-3 text-center">Alan</th>
                  <th className="py-3 px-3 text-center">Toplam Soru</th>
                  <th className="py-3 px-3 text-center text-emerald-400">Doğru</th>
                  <th className="py-3 px-3 text-center text-red-400">Yanlış</th>
                  <th className="py-3 px-3 text-center text-amber-400">Boş</th>
                  <th className="py-3 px-4 text-center text-indigo-300 font-bold">Ortalama Net</th>
                  <th className="py-3 px-4 text-right">Doğruluk %</th>
                  <th className="py-3 px-4 text-right">Durum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredBranchSummary.map((b, idx) => (
                  <tr key={b.branch} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 font-bold text-white flex items-center gap-2">
                      <span className="text-xs font-mono text-white/40">{idx + 1}.</span>
                      <span>{b.branch}</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span
                        className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                          b.category === 'temel'
                            ? 'bg-sky-500/15 text-sky-300 border border-sky-500/20'
                            : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20'
                        }`}
                      >
                        {b.category}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center font-mono text-white/70">{b.totalQuestions}</td>
                    <td className="py-3 px-3 text-center font-mono text-emerald-400">{b.totalCorrect}</td>
                    <td className="py-3 px-3 text-center font-mono text-red-400">{b.totalIncorrect}</td>
                    <td className="py-3 px-3 text-center font-mono text-amber-400">{b.totalBlank}</td>
                    <td className="py-3 px-4 text-center font-mono font-bold text-indigo-300">
                      {b.avgNet.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-white">
                      %{b.accuracy}
                    </td>
                    <td className="py-3 px-4 text-right">
                      {b.status === 'strong' ? (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 inline-flex items-center gap-1">
                          <CheckCircle size={10} weight="bold" /> Güçlü
                        </span>
                      ) : b.status === 'weak' ? (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-red-500/15 text-red-300 border border-red-500/20 inline-flex items-center gap-1">
                          <WarningCircle size={10} weight="bold" /> Geliştirilmeli
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-slate-500/15 text-slate-300 border border-slate-500/20">
                          Normal
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* ── 5. GEÇMİŞ DENEMELER EKRANI (İNTERAKTİF 120 SORU İNCELEME) ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className={`${theme.card} rounded-2xl p-6 border ${theme.border}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <SectionTitle
              title="Geçmiş Denemeler Arşivi"
              eyebrow="Simülasyon Geçmişi"
              mb="mb-1"
              right={
                <span className="text-xs font-mono text-indigo-400 tabular-nums">
                  {simulationHistory.length} Tamamlanmış Simülasyon
                </span>
              }
            />
            <p className="text-xs text-white/50">
              Tıklandığında tüm denemenin soruları (120 soru), verilen cevaplar, doğru/yanlış/boş durumları ve açıklamaları incelenebilir.
            </p>
          </div>
        </div>

        {simulationHistory.length === 0 ? (
          <div className="py-16 text-center text-xs text-white/50 flex flex-col items-center justify-center gap-3">
            <FileText size={32} weight="light" className="text-white/30" />
            <p>Henüz kayıtlı bir DUS Simülasyonu bulunamadı.</p>
            {onStartSimulation && (
              <Button
                onClick={onStartSimulation}
                variant="primary"
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-500 font-bold px-4"
              >
                Simülasyon Başlat
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3.5">
            {simulationHistory.map((exam) => {
              const dateStr = new Date(exam.date).toLocaleDateString('tr-TR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });
              const usedMins = Math.round(exam.usedSeconds / 60);

              return (
                <div
                  key={exam.id}
                  onClick={() => onReviewSimulation && onReviewSimulation(exam)}
                  className="p-5 rounded-2xl bg-black/40 hover:bg-white/[0.04] border border-white/10 hover:border-indigo-500/40 transition-all cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  {/* Başlık & Meta */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <GraduationCap size={22} weight="bold" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-black text-white group-hover:text-indigo-300 transition-colors">
                          {exam.title}
                        </h4>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-white/70">
                          120 Soru
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-white/50 mt-1 font-mono">
                        <span>{dateStr}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} weight="bold" /> {usedMins} dk / 150 dk
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Net & Dağılım İstatistikleri */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-between md:justify-end">
                    <div className="text-left md:text-right">
                      <div className="text-2xl font-black font-mono text-indigo-300">
                        {exam.net.toFixed(2)}
                        <span className="text-xs font-normal text-white/40 ml-1">Net</span>
                      </div>
                      <div className="text-[11px] font-mono text-white/60">
                        Temel: <strong className="text-sky-400">{exam.temelNet.toFixed(1)}</strong> | Klinik: <strong className="text-emerald-400">{exam.klinikNet.toFixed(1)}</strong>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {exam.correct} D
                      </span>
                      <span className="px-2 py-1 rounded-md bg-red-500/10 text-red-400 border border-red-500/20">
                        {exam.incorrect} Y
                      </span>
                      <span className="px-2 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {exam.blank} B
                      </span>
                    </div>

                    {/* Aksiyon Butonları */}
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onReviewSimulation) onReviewSimulation(exam);
                        }}
                        variant="secondary"
                        size="sm"
                        className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 flex items-center gap-1.5"
                      >
                        <span>Tümünü İncele (120 Soru)</span>
                        <ArrowRight size={14} weight="bold" />
                      </Button>

                      <button
                        type="button"
                        onClick={(e) => handleDeleteRecord(exam.id, exam.title, e)}
                        title="Bu deneme kaydını sil"
                        className="p-2 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>

      {/* ── 6. HEDEF TAKİPÇİSİ & NE OLURDU SİMÜLATÖRÜ (ALT ARAÇLAR) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-4 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7"
        >
          <GoalTracker
            progress={goalProgress}
            theme={theme}
            onEditGoals={onEditGoals}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className={`${theme.card} rounded-2xl p-5 border ${theme.border} lg:col-span-5 flex flex-col justify-between`}
        >
          <div>
            <SectionTitle title="Özet Metrikler" eyebrow="Genel Bakış" mb="mb-4" />
            <div className="space-y-0 font-mono text-xs">
              {(
                [
                  ['Mevcut Seri', `${streak.currentStreak} GÜN`, 'text-orange-400'],
                  ['En Uzun Seri', `${streak.longestStreak} GÜN`, 'text-amber-400'],
                  ['Aktif Gün', `${activitySummary.activeDays} GÜN`, 'text-indigo-400'],
                  [
                    'Günlük Ort.',
                    `${activitySummary.activeDays > 0 ? Math.round(activitySummary.totalSolved / activitySummary.activeDays) : 0} Soru`,
                    'text-[color:var(--color-text-primary)]',
                  ],
                  ['Genel Doğru', fmt(overview.totalCorrects), 'text-emerald-400'],
                  ['Genel Yanlış', fmt(overview.totalIncorrects), 'text-red-400'],
                ] as const
              ).map(([l, v, c], i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center py-2.5 ${i < 5 ? 'border-b border-white/5' : ''}`}
                >
                  <span className={`text-xs ${theme.subtext} font-sans`}>{l}</span>
                  <span className={`font-bold tabular-nums ${c}`}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-center text-[#8b8b98]">
            Veriler yerel ve senkronize oturum kayıtlarından dinamik derlenir.
          </div>
        </motion.div>
      </div>

      {/* Ne Olurdu? (What-If Simulator) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <WhatIfSimulator
          activity={activity90}
          solvedUnique={overview.solvedUnique}
          bankTotal={overview.bankTotal}
          theme={theme}
        />
      </motion.div>
    </div>
  );
}
