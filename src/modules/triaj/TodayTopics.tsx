import { useState, type ReactNode } from 'react';
import type { TriajTask } from './types';
import { preparationForStage } from './domain/questionTasks';

const stageLabel: Record<TriajTask['stage'], string> = {
  T0_SAMPLING: 'İlk tekrar', T3_MAIN: 'T+3', T14_VERIFICATION: 'T+14',
  SATURDAY_REPAIR: 'Cumartesi onarımı', ERROR_VERIFICATION: 'Deneme yanlışı doğrulaması',
  BRANCH_EXAM: 'Branş denemesi',
};

export function TodayTopics({ tasks, today, resumeId, onStart, onOpen, onManual, onPrepare, error }: {
  tasks: TriajTask[];
  today: string;
  resumeId?: string;
  onStart: (task: TriajTask) => void;
  onOpen: () => void;
  onManual: (id: string) => void;
  onPrepare: (id: string, done: boolean) => void;
  error: string | null;
}): ReactNode {
  const [localPreparation, setLocalPreparation] = useState<Record<string, boolean>>({});
  const completedCount = tasks.filter(task => task.status === 'completed').length;

  return <section aria-labelledby="today-topics-title" className="rounded-[2rem] border border-indigo-400/20 p-5 sm:p-7">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <h2 id="today-topics-title" className="text-xl font-bold">Bugünün Konusu</h2>
        {tasks.length > 0 && completedCount > 0 && (
          <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
            {completedCount}/{tasks.length} Çalışıldı
          </span>
        )}
      </div>
      <button type="button" className="rounded-lg border px-3 py-1 text-sm font-medium hover:bg-slate-100 transition-colors" onClick={onOpen}>TRİAJ takvimi</button>
    </div>
    {error && <p role="status" className="mt-2 text-sm text-rose-600">TRİAJ görevleri yüklenemedi.</p>}
    {!error && !tasks.length && <p className="mt-2 text-sm opacity-70">Bugün vadesi gelen soru görevi yok.</p>}
    <ul className="mt-2 divide-y divide-current/10">
      {tasks.map(task => {
        const preparation = preparationForStage(task.stage);
        const isDone = localPreparation[task.id] ?? task.preparationDone ?? false;
        return <li key={task.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">{task.lesson} · {task.unit}</p>
            {task.status === 'completed' && (
              <span className="text-[11px] font-semibold text-emerald-600">✓ Bugün Çalışıldı</span>
            )}
          </div>
          <p className="text-sm opacity-75">
            {stageLabel[task.stage]} · {task.questionCount} soru
            {task.status === 'open' && task.dueDate < today && task.stage !== 'SATURDAY_REPAIR' && ' · Gecikmiş'}
          </p>
          {task.status === 'open' && task.setId && preparation && (
            <label className="mt-2 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={isDone}
                onChange={event => {
                  const checked = event.target.checked;
                  setLocalPreparation(prev => ({ ...prev, [task.id]: checked }));
                  onPrepare(task.id, checked);
                }} />
              {preparation} tamamlandı
            </label>
          )}
        </div>
        {task.status === 'completed' ? (
          <span role="status" className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
            Tamamlandı
          </span>
        ) : task.setId
          ? <button type="button" className="rounded-lg border px-3 py-1 font-semibold disabled:opacity-50 hover:bg-indigo-50 transition-colors"
              disabled={Boolean(preparation && !isDone && resumeId !== task.id)}
              onClick={() => onStart({ ...task, preparationDone: isDone })}>
              {resumeId === task.id ? 'Devam et' : 'Başlat'}
            </button>
          : task.ruleVersion === 'first-review-v2' ? <button type="button" className="rounded-lg border px-3 py-2 font-semibold" onClick={() => onManual(task.id)}>İlk tekrarı aç</button>
          : task.availableCount === undefined ? <span role="status">Sorular hazırlanıyor</span>
          : <div className="text-sm">
              {task.availableCount} uygun soru · {task.questionCount - task.availableCount} eksik{' '}
              <button type="button" className="underline" onClick={() => onManual(task.id)}>Manuel sonuç</button>
            </div>}
      </li>;
      })}
    </ul>
  </section>;
}
