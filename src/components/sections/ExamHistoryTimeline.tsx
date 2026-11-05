/**
 * Exam History Timeline — Tier 3'te deneme geçmişi
 */
import { memo } from 'react';
import { motion } from 'framer-motion';
import { CalendarBlank } from '@phosphor-icons/react';
import { ExamTimelineChart } from '../charts';
import { EmptyState } from '../ui/EmptyState';
import type { Theme } from '../../theme';
import type { ExamTrendData, ExamResult } from '../../types/app';

interface Props {
  trend: ExamTrendData;
  exams: ExamResult[];
  theme: Theme;
}

export default memo(ExamHistoryTimeline);

function ExamHistoryTimeline({ trend, exams, theme }: Props) {
  if (exams.length === 0) {
    return (
      <EmptyState
        icon={<CalendarBlank size={40} weight="thin" />}
        title="Henüz deneme sınavı verisi yok"
        description="Deneme çözdükçe performans grafiğin burada oluşacak."
      />
    );
  }

  return (
    <motion.div
      className={theme.card}
      style={{ padding: 20, borderRadius: 20 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: theme.text }}>Deneme Geçmişi</span>
        <span style={{ fontSize: 11, color: theme.subtext }}>{exams.length} deneme</span>
      </div>

      {/* Summary stats */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 16, fontSize: 12 }}>
        <div style={{ flex: 1, textAlign: 'center', padding: 8, background: 'rgba(255,255,255,0.03)', borderRadius: 10 }}>
          <div style={{ color: theme.subtext }}>En İyi</div>
          <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: 16 }}>{trend.bestScore}</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center', padding: 8, background: 'rgba(255,255,255,0.03)', borderRadius: 10 }}>
          <div style={{ color: theme.subtext }}>Ortalama</div>
          <div style={{ color: theme.text, fontWeight: 700, fontSize: 16 }}>{trend.avgScore}</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center', padding: 8, background: 'rgba(255,255,255,0.03)', borderRadius: 10 }}>
          <div style={{ color: theme.subtext }}>Gelişim</div>
          <div style={{
            color: trend.improvement > 0 ? '#34d399' : trend.improvement < 0 ? '#f87171' : '#8b8b98',
            fontWeight: 700, fontSize: 16,
          }}>
            {trend.improvement > 0 ? '+' : ''}{trend.improvement}
          </div>
        </div>
      </div>

      <ExamTimelineChart
        data={trend.exams}
        bestScore={trend.bestScore}
        avgScore={trend.avgScore}
        trend={trend.trend}
        height={200}
      />

      {/* Recent exams list */}
      <div style={{ marginTop: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: theme.subtext, marginBottom: 8 }}>Son Denemeler</div>
        {exams.slice(-5).reverse().map((exam) => (
          <div key={exam.examId} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.03)',
          }}>
            <div>
              <div style={{ fontSize: 12, color: theme.text, fontWeight: 500 }}>{exam.examName}</div>
              <div style={{ fontSize: 10, color: theme.subtext }}>{exam.examDate}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: exam.score >= 70 ? '#34d399' : exam.score >= 50 ? '#fbbf24' : '#f87171' }}>
                {exam.correct}/{exam.totalQuestions}
              </div>
              <div style={{ fontSize: 10, color: theme.subtext }}>
                {typeof exam.net === 'number' ? `${exam.net} Net · ` : ''}%{exam.score}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
