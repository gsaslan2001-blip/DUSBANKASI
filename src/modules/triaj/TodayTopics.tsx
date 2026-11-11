import { useState, type ReactNode } from 'react';
import type { TriajTask } from './types';
import { preparationForStage } from './domain/questionTasks';

const stageLabel: Record<TriajTask['stage'], string> = {
  T0_SAMPLING: 'T+0', T3_MAIN: 'T+3', T14_VERIFICATION: 'T+14',
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

  return <section aria-labelledby="today-topics-title" className="rounded-[2rem] border border-indigo-400/20 p-5 sm:p-7">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h2 id="today-topics-title" className="text-xl font-bold">Bugünün Konusu</h2>
      <button type="button" className="rounded-lg border px-3 py-1 text-sm" onClick={onOpen}>TRİAJ takvimi</button>
    </div>
    {error && <p role="status" className="mt-2 text-sm">TRİAJ görevleri yüklenemedi.</p>}
    {!error && !tasks.length && <p className="mt-2 text-sm opacity-70">Bugün vadesi gelen soru görevi yok.</p>}
    <ul className="mt-2 divide-y divide-current/10">
      {tasks.map(task => {
        const preparation = preparationForStage(task.stage);
        const isDone = localPreparation[task.id] ?? task.preparationDone ?? false;
        return <li key={task.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
        <div>
          <p className="font-semibold">{task.lesson} · {task.unit}</p>
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
        {task.status === 'completed' ? <span role="status">Tamamlandı</span> : task.setId
          ? <button type="button" className="rounded-lg border px-3 py-1 disabled:opacity-50"
              disabled={Boolean(preparation && !isDone && resumeId !== task.id)}
              onClick={() => onStart({ ...task, preparationDone: isDone })}>
              {resumeId === task.id ? 'Devam et' : 'Başlat'}
            </button>
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
