/**
 * Goal Editor Modal — Hedef düzenleme formu
 */
import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FloppyDisk } from '@phosphor-icons/react';
import { Button } from '../ui/Button';
import type { Theme } from '../../theme';
import type { UserGoals } from '../../types/app';
import { useModalA11y } from '../../hooks/useModalA11y';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  goals: UserGoals;
  onSave: (goals: UserGoals) => void;
  theme: Theme;
}

export default memo(GoalEditorModal);

const FIELD_DEFS: { key: keyof UserGoals; label: string; min: number; max: number; step: number }[] = [
  { key: 'dailyQuestions', label: 'Günlük Soru Hedefi', min: 50, max: 1000, step: 10 },
  { key: 'weeklyQuestions', label: 'Haftalık Soru Hedefi', min: 350, max: 7000, step: 50 },
  { key: 'targetAccuracy', label: 'Hedef Doğruluk (%)', min: 50, max: 100, step: 5 },
  { key: 'targetCoverage', label: 'Hedef Kapsama (%)', min: 10, max: 100, step: 5 },
  { key: 'targetMastered', label: 'Uzmanlaşma Hedefi (soru)', min: 500, max: 15000, step: 500 },
  { key: 'targetStreak', label: 'Seri Hedefi (gün)', min: 7, max: 365, step: 1 },
  { key: 'targetDusNet', label: 'DUS Net Hedefi', min: 50, max: 120, step: 1 },
];

function GoalEditorModal({ isOpen, onClose, goals, onSave, theme }: Props) {
  const [draft, setDraft] = useState<UserGoals>({ ...goals });

  // Sync draft when goals prop changes
  const [lastGoals, setLastGoals] = useState(goals);
  if (goals !== lastGoals) {
    setLastGoals(goals);
    setDraft({ ...goals });
  }

  const handleSave = () => {
    onSave(draft);
    onClose();
  };

  const dialogRef = useModalA11y<HTMLDivElement>(onClose, isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Hedefleri Düzenle"
            tabIndex={-1}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className={theme.card}
            style={{ padding: 24, borderRadius: 20, maxWidth: 440, width: '90%', maxHeight: '80vh', overflow: 'auto' }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: theme.text }}>Hedefleri Düzenle</span>
              <Button
                onClick={onClose}
                variant="unstyled"
                aria-label="Kapat"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.subtext }}
              >
                <X size={20} />
              </Button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {FIELD_DEFS.map((field) => (
                <div key={field.key}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: theme.subtext }}>{field.label}</label>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#818cf8' }}>
                      {draft[field.key] as number}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={draft[field.key] as number}
                    onChange={e => setDraft({ ...draft, [field.key]: Number(e.target.value) })}
                    style={{
                      width: '100%', height: 5, borderRadius: 3,
                      background: `linear-gradient(90deg, #818cf8 ${((draft[field.key] as number) / field.max) * 100}%, rgba(255,255,255,0.08) ${((draft[field.key] as number) / field.max) * 100}%)`,
                      appearance: 'none', cursor: 'pointer', outline: 'none',
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: theme.subtext, opacity: 0.5 }}>
                    <span>{field.min}</span><span>{field.max}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              <Button
                onClick={onClose}
                variant="unstyled"
                style={{
                  flex: 1, padding: '10px 0', borderRadius: 10, border: `1px solid ${theme.border}`,
                  background: 'transparent', color: theme.subtext, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                }}
              >
                İptal
              </Button>
              <Button
                onClick={handleSave}
                variant="unstyled"
                style={{
                  flex: 1, padding: '10px 0', borderRadius: 10, border: 'none',
                  background: 'linear-gradient(135deg, #6f72f2, #484cc2)',
                  color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}
              >
                <FloppyDisk size={16} />
                Kaydet
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
