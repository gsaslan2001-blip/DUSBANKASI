import { useState } from 'react';
import { CheckCircle } from '@phosphor-icons/react';
import type { Theme } from '../theme';
import type { UnitQuestionSelection } from '../lib/studyQueue';
import { Button } from './ui/Button';

type UnitQuestionAmountSelectionProps = {
  unit: string;
  totalCount: number;
  unseenCount: number;
  loading: boolean;
  onStart: (selection: UnitQuestionSelection) => void;
  onCancel: () => void;
  theme: Theme;
};

const COUNT_PRESETS = [
  { label: 'Hızlı 20', count: 20 },
  { label: 'Standart 40', count: 40 },
  { label: 'Karma 100', count: 100 },
] as const;

export function UnitQuestionAmountSelection({
  unit,
  totalCount,
  unseenCount,
  loading,
  onStart,
  onCancel,
  theme,
}: UnitQuestionAmountSelectionProps) {
  const [selection, setSelection] = useState<UnitQuestionSelection>({ kind: 'count', count: 40 });
  const [customCount, setCustomCount] = useState(Math.min(40, totalCount));
  const selectedCount = selection.kind === 'all'
    ? totalCount
    : Math.min(selection.count, totalCount);

  return (
    <div className="anim-scale-in flex-1 flex flex-col items-center justify-center">
      <div className={`${theme.card} w-full max-w-xl p-7 sm:p-9 rounded-2xl ${theme.shadow} relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-violet-400 opacity-70" />
        <h2 className="text-2xl font-black text-center">Soru Sayısını Seç</h2>
        <p className={`${theme.subtext} text-xs text-center mt-2 mb-7`}>
          {unit} · {totalCount} soru · {unseenCount} görülmemiş
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {COUNT_PRESETS.map((preset) => {
            const active = selection.kind === 'count' && selection.count === preset.count;
            return (
              <Button
                key={preset.count}
                onClick={() => setSelection({ kind: 'count', count: preset.count })}
                variant="unstyled"
                aria-pressed={active}
                className={`justify-between rounded-xl border px-4 py-3 text-sm transition-colors ${
                  active
                    ? 'border-indigo-400/60 bg-indigo-500/15 text-indigo-300'
                    : `${theme.border} ${theme.inputBg} ${theme.text}`
                }`}
              >
                <span>{preset.label}</span>
                {active && <CheckCircle size={16} weight="fill" />}
              </Button>
            );
          })}

          <Button
            onClick={() => setSelection({ kind: 'all' })}
            variant="unstyled"
            aria-pressed={selection.kind === 'all'}
            className={`justify-between rounded-xl border px-4 py-3 text-sm transition-colors ${
              selection.kind === 'all'
                ? 'border-indigo-400/60 bg-indigo-500/15 text-indigo-300'
                : `${theme.border} ${theme.inputBg} ${theme.text}`
            }`}
          >
            <span>Hepsini çalış</span>
            {selection.kind === 'all' && <CheckCircle size={16} weight="fill" />}
          </Button>
        </div>

        <label className={`block mt-5 text-[11px] font-bold uppercase tracking-wider ${theme.subtext}`}>
          Özel sayı
          <input
            type="number"
            min={1}
            max={totalCount}
            value={customCount}
            aria-label="Özel soru sayısı"
            onFocus={() => setSelection({ kind: 'count', count: customCount })}
            onChange={(event) => {
              const next = Math.max(1, Math.min(totalCount, Number(event.target.value) || 1));
              setCustomCount(next);
              setSelection({ kind: 'count', count: next });
            }}
            className={`mt-2 w-full rounded-xl border ${theme.border} ${theme.inputBg} ${theme.text} px-4 py-3 text-lg font-black input-ring`}
          />
        </label>

        <p className={`${theme.subtext} text-[11px] text-center mt-5`}>
          Her 10 soruda: 1 doğru favori, 2 yanlış favorisiz, 3 yanlış favori, 4 görülmemiş.
          {' '}Eksikler favorili → yanlış → görülmemiş sırasıyla tamamlanır; doğru favorisizler en son seçilir.
          {' '}Hepsini çalış, ünitenin tüm sorularını içerir.
        </p>

        <div className="flex gap-3 mt-6">
          <Button onClick={onCancel} variant="secondary" size="lg" className="flex-1">
            Geri
          </Button>
          <Button
            onClick={() => onStart(selection)}
            disabled={loading || selectedCount === 0}
            loading={loading}
            variant="primary"
            size="lg"
            className="flex-[2]"
          >
            BAŞLA · {selectedCount} SORU
          </Button>
        </div>
      </div>
    </div>
  );
}
