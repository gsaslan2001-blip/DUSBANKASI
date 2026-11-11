import { useMemo, useState } from 'react';
import { getCalendarHeatmapStyle } from '../domain/analytics';
import { currentTaskDate } from '../domain/state';
import { addDays, getDaysDiff } from '../domain/triage';
import type { TriajTask } from '../types';
import { Calendar, ChevronLeft, ChevronRight, GripVertical, History, Volume2, VolumeX } from './icons';
import { TriageModal } from './TriageModal';
import { stageLabels, useTriajView } from './TriajViewContext';

const weekDays = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
const monthFormat = new Intl.DateTimeFormat('tr-TR', { month: 'long', year: 'numeric', timeZone: 'UTC' });
const tabs = ['Takvim', 'Tekrar kuyruğu', 'Denetim geçmişi'] as const;
type CalendarTab = typeof tabs[number];

export function NotificationCalendarView({ initialTaskId }: { initialTaskId?: string }) {
  const {
    topics, tasks, triageLogs, todayStr, systemParams, reschedule,
    soundEnabled, toggleSound, browserNotificationsEnabled, requestBrowserNotificationPermission,
  } = useTriajView();
  const [month, setMonth] = useState(todayStr.slice(0, 7));
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [tab, setTab] = useState<CalendarTab>('Takvim');
  const [activeTask, setActiveTask] = useState<TriajTask | null>(() =>
    tasks.find(task => task.id === initialTaskId) ?? null);
  const [draggedTask, setDraggedTask] = useState<string | null>(null);

  const displayDate = (task: TriajTask) =>
    task.status === 'completed' ? task.completedDate ?? task.dueDate : currentTaskDate(task, todayStr);
  const tasksByDate = new Map<string, TriajTask[]>();
  for (const task of tasks) {
    const date = displayDate(task);
    tasksByDate.set(date, [...(tasksByDate.get(date) ?? []), task]);
  }
  const queue = tasks.filter(task => task.status === 'open').sort((a, b) =>
    displayDate(a).localeCompare(displayDate(b)) || a.unit.localeCompare(b.unit, 'tr'));
  const dueCount = queue.filter(task => displayDate(task) <= todayStr).length;
  const selectedTasks = tasksByDate.get(selectedDate) ?? [];
  const firstDay = `${month}-01`;
  const monthStart = new Date(`${firstDay}T00:00:00Z`);
  const offset = (monthStart.getUTCDay() + 6) % 7;
  const days = useMemo(() => Array.from({ length: 42 }, (_, i) => addDays(firstDay, i - offset)), [firstDay, offset]);
  const modalTask = activeTask ? tasks.find(task => task.id === activeTask.id) : undefined;
  const modalTopic = modalTask ? topics.find(topic => topic.id === modalTask.topicId) : undefined;

  function stepMonth(by: number) {
    const target = new Date(`${month}-01T00:00:00Z`);
    target.setUTCMonth(target.getUTCMonth() + by);
    setMonth(target.toISOString().slice(0, 7));
  }

  function renderTasks(list: TriajTask[]) {
    if (list.length === 0) return <p className="py-4 text-sm text-slate-500">Bu görünümde görev yok.</p>;
    return (
      <ul className="space-y-2">
        {list.map(task => {
          const completed = task.status === 'completed';
          const date = displayDate(task);
          return (
            <li
              key={task.id}
              draggable={!completed}
              onDragStart={event => {
                event.dataTransfer.setData('text/plain', task.id);
                setDraggedTask(task.id);
              }}
              onDragEnd={() => setDraggedTask(null)}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3"
            >
              <div className="flex items-start gap-2">
                {!completed && <GripVertical className="mt-1 size-4 text-slate-500" aria-hidden="true" />}
                <div>
                  <p className="text-sm font-semibold text-slate-900">{task.unit}</p>
                  <p className="text-xs text-slate-600">{task.lesson} · {stageLabels[task.stage]} · {task.questionCount} soru</p>
                  <p className="mt-1 text-xs text-slate-600">
                    {date}{date < todayStr && !completed ? ` · ${getDaysDiff(date, todayStr)} gün gecikti` : ''}{completed ? ' · Tamamlandı' : ''}
                  </p>
                  {completed && <p className="mt-1 text-xs font-semibold text-emerald-700">Tamamlandı</p>}
                  {!!task.previousDueDates?.length && (
                    <p className="text-xs text-slate-500">Önceki tarihler {task.previousDueDates.join(', ')}</p>
                  )}
                </div>
              </div>
              {!completed && (
                <div className="flex flex-wrap items-center gap-2">
                  <input
                    type="date"
                    aria-label={`${task.unit} · ${stageLabels[task.stage]} hedef tarihi`}
                    value={date}
                    onChange={event => { if (event.target.value) void reschedule(task.id, event.target.value); }}
                    className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
                  />
                  <button type="button" onClick={() => setActiveTask(task)} className="rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white">
                    Görevi Aç
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="space-y-4">
      <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 text-lg font-bold"><Calendar className="size-5" /> Tekrar Takvimi</h2>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={toggleSound} aria-pressed={soundEnabled} className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs">
              {soundEnabled ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />} Ses
            </button>
            <button type="button" onClick={() => void requestBrowserNotificationPermission()} disabled={browserNotificationsEnabled} className="rounded-lg border border-slate-200 px-3 py-2 text-xs">
              {browserNotificationsEnabled ? 'Tarayıcı bildirimi açık' : 'Tarayıcı bildirimine izin ver'}
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Takvim görünümleri">
          {tabs.map(item => (
            <button key={item} type="button" aria-pressed={tab === item} onClick={() => setTab(item)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${tab === item ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
              {item}
            </button>
          ))}
        </div>
      </section>

      {tab === 'Takvim' && (
        <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-2">
            <button type="button" onClick={() => stepMonth(-1)} aria-label="Önceki ay" className="rounded-lg border border-slate-200 p-2"><ChevronLeft className="size-4" /></button>
            <h3 className="font-bold">{monthFormat.format(monthStart)}</h3>
            <button type="button" onClick={() => stepMonth(1)} aria-label="Sonraki ay" className="rounded-lg border border-slate-200 p-2"><ChevronRight className="size-4" /></button>
          </div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {weekDays.map(day => <span key={day} className="text-center text-xs text-slate-500">{day}</span>)}
            {days.map(date => {
              const open = (tasksByDate.get(date) ?? []).filter(task => task.status === 'open').length;
              const density = getCalendarHeatmapStyle(open);
              return (
                <button key={date} type="button"
                  onClick={() => setSelectedDate(date)}
                  onDragOver={event => { if (draggedTask) event.preventDefault(); }}
                  onDrop={async event => {
                    event.preventDefault();
                    if (draggedTask && await reschedule(draggedTask, date)) setSelectedDate(date);
                    setDraggedTask(null);
                  }}
                  aria-pressed={date === selectedDate}
                  aria-current={date === todayStr ? 'date' : undefined}
                  aria-label={`${date}, ${open} açık görev`}
                  style={open ? { backgroundColor: density.bgHex, color: '#172033' } : undefined}
                  className={`min-h-11 rounded-lg border px-1 text-xs sm:text-sm ${date === selectedDate ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-slate-200'} ${date.startsWith(month) ? 'text-slate-800' : 'text-slate-500'}`}>
                  <span>{Number(date.slice(-2))}</span>
                  {open > 0 && <span className="ml-0.5 text-[10px] font-bold sm:ml-1">·{open}</span>}
                </button>
              );
            })}
          </div>
          <div className="mt-5 border-t border-slate-200 pt-4">
            <h3 className="mb-2 font-bold">{selectedDate} görevleri</h3>
            {renderTasks(selectedTasks)}
          </div>
        </section>
      )}

      {tab === 'Tekrar kuyruğu' && (
        <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
          <h3 className="mb-2 font-bold">{queue.length} açık görev · {dueCount} vadesi gelen</h3>
          {dueCount > systemParams.dailyUnitCapacity && (
            <p role="status" className="mb-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
              Günlük {systemParams.dailyUnitCapacity} görev kapasitesi aşıldı.
            </p>
          )}
          {renderTasks(queue)}
        </section>
      )}

      {tab === 'Denetim geçmişi' && (
        <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
          <h3 className="mb-3 flex items-center gap-2 font-bold"><History className="size-4" /> Denetim geçmişi</h3>
          {!triageLogs.length && <p className="text-sm text-slate-500">Kayıtlı test sonucu yok.</p>}
          <div className="overflow-x-auto">
            {!!triageLogs.length && (
              <table className="w-full min-w-[40rem] text-left text-sm">
                <thead><tr className="border-b border-slate-200"><th>Tarih</th><th>Ünite</th><th>Aşama</th><th>Doğru / Yanlış / Boş</th><th>Sonuç</th></tr></thead>
                <tbody>
                  {[...triageLogs].sort((a, b) => b.date.localeCompare(a.date)).map(log => (
                    <tr key={log.id} className="border-b border-slate-100">
                      <td className="py-2">{log.date}</td>
                      <td>{log.topicTitle}</td>
                      <td>{stageLabels[log.stage]}</td>
                      <td>{log.correct} / {log.wrong} / {log.empty}</td>
                      <td>{log.recommendedAction || 'Tamamlandı'}{log.notes && <p className="text-xs text-slate-500">{log.notes}</p>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      )}

      {modalTask && modalTopic && <TriageModal task={modalTask} topic={modalTopic} onClose={() => setActiveTask(null)} />}
    </div>
  );
}
