import { Button } from '../ui/Button';
/**
 * Recommendation Feed — Tier 2'de akıllı çalışma önerileri
 */
import { memo } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight, Target, Warning, ArrowUpRight } from '@phosphor-icons/react';
import { RecommendationPriorityChart } from '../charts';
import type { Theme } from '../../theme';
import type { LessonPriority, DailyRecommendation } from '../../types/app';

interface Props {
  priorities: LessonPriority[];
  dailyRec: DailyRecommendation | null;
  theme: Theme;
  onStartRecommended?: () => void;
  onStartLesson?: (lesson: string, count?: number) => void;
}

export default memo(RecommendationFeed);

function RecommendationFeed({ priorities, dailyRec, theme, onStartRecommended }: Props) {
  const accentColor = theme.accent?.replace('text-[', '').replace(']', '') ?? '#818cf8';

  return (
    <motion.div
      className={theme.card}
      style={{ padding: 20, borderRadius: 20 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <Lightbulb size={18} color={accentColor} weight="fill" />
        <span style={{ fontSize: 14, fontWeight: 700, color: theme.text }}>Akıllı Öneriler</span>
      </div>

      {/* Daily recommendation card */}
      {dailyRec && (
        <div style={{
          padding: 14, borderRadius: 12, marginBottom: 16,
          background: 'linear-gradient(135deg, rgba(129,140,248,0.1), rgba(99,102,241,0.05))',
          border: '1px solid rgba(129,140,248,0.15)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <Target size={14} color="#818cf8" weight="fill" />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#818cf8' }}>Bugünün Önerisi</span>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: theme.text, lineHeight: 1.5 }}>
            {dailyRec.message}
          </p>
          {dailyRec.focusLesson && (
            <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <ArrowRight size={12} color="#818cf8" />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#c4b5fd' }}>
                {dailyRec.focusLesson} — {dailyRec.suggestedQuestionCount} soru
              </span>
            </div>
          )}
          {onStartRecommended && (
            <Button
              variant="unstyled"
              onClick={onStartRecommended}
              className="mt-3 w-full py-2 px-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-indigo-500/20 transition-all cursor-pointer"
            >
              <span>Önerilen Quiz'i Başlat</span>
              <ArrowUpRight size={14} weight="bold" />
            </Button>
          )}
        </div>
      )}

      {/* Priority list */}
      {priorities.length > 0 ? (
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: theme.subtext, marginBottom: 8 }}>
            Ders Öncelik Sıralaması
          </div>
          <RecommendationPriorityChart items={priorities.slice(0, 8)} height={Math.max(120, priorities.slice(0, 8).length * 36)} />
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 16, color: theme.subtext, fontSize: 12 }}>
          <Warning size={16} />
          Daha fazla soru çözdükçe öneriler burada belirecek
        </div>
      )}
    </motion.div>
  );
}
