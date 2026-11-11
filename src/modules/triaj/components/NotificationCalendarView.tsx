import { useMemo, useState, useEffect } from 'react';
import { CANONICAL_UNITS } from '../../../config/canonicalUnits';
import { getCalendarHeatmapStyle } from '../domain/analytics';
import { currentTaskDate } from '../domain/state';
import { addDays, getDaysDiff } from '../domain/triage';
import type { TriajTask } from '../types';
import { Calendar, ChevronLeft, ChevronRight, GripVertical, History, Plus, Volume2, VolumeX } from './icons';
import { TriageModal } from './TriageModal';
import { stageLabels, useTriajView } from './TriajViewContext';

const weekDays = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
const monthFormat = new Intl.DateTimeFormat('tr-TR', { month: 'long', year: 'numeric', timeZone: 'UTC' });
const tabs = ['Takvim', 'Tekrar kuyruğu', 'Denetim geçmişi'] as const;
type CalendarTab = typeof tabs[number];

export function NotificationCalendarView({ initialTaskId }: { initialTaskId?: string }) {
  const {
    topics, tasks, subjects, triageLogs, todayStr, systemParams, reschedule, addTopic, saving,
    soundEnabled, toggleSound, browserNotificationsEnabled, requestBrowserNotificationPermission, error,
  } = useTriajView();
  const [month, setMonth] = useState(todayStr.slice(0, 7));
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [tab, setTab] = useState<CalendarTab>('Takvim');
  const [activeTask, setActiveTask] = useState<TriajTask | null>(() =>
    tasks.find(task => task.id === initialTaskId) ?? null);
  const [draggedTask, setDraggedTask] = useState<string | null>(null);

  // Takvimden hızlı ders / ünite planlama formu state'i
  const [showAddForm, setShowAddForm] = useState(false);
  const [planSubjectId, setPlanSubjectId] = useState<string>('B01');
  const [planUnitTitle, setPlanUnitTitle] = useState<string>('');
  const [planNotes, setPlanNotes] = useState<string>('');
  const [planTargetDate, setPlanTargetDate] = useState<string>(todayStr);

  useEffect(() => {
    setPlanTargetDate(selectedDate);
  }, [selectedDate]);

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
          const cancelled = task.status === 'cancelled';
          const date = displayDate(task);
          return (
            <li
              key={task.id}
              draggable={!completed && !cancelled}
              onDragStart={event => {
                event.dataTransfer.setData('text/plain', task.id);
                setDraggedTask(task.id);
              }}
              onDragEnd={() => setDraggedTask(null)}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3"
            >
              <div className="flex items-start gap-2">
                {!completed && !cancelled && <GripVertical className="mt-1 size-4 text-slate-500" aria-hidden="true" />}
                <div>
                  <p className="text-sm font-semibold text-slate-900">{task.unit}</p>
                  <p className="text-xs text-slate-600">{task.lesson} · {stageLabels[task.stage]} · {task.questionCount} soru</p>
                  <p className="mt-1 text-xs text-slate-600">
                    {date}{date < todayStr && !completed ? ` · ${getDaysDiff(date, todayStr)} gün gecikti` : ''}{completed ? ' · Tamamlandı' : ''}
                  </p>
                  {completed && <p className="mt-1 text-xs font-semibold text-emerald-700">Tamamlandı</p>}
                  {cancelled && <p className="mt-1 text-xs font-semibold">İptal edildi · Geçmiş korunuyor</p>}
                  {!!task.previousDueDates?.length && (
                    <p className="text-xs text-slate-500">Önceki tarihler {task.previousDueDates.join(', ')}</p>
                  )}
                </div>
              </div>
              {!completed && !cancelled && (
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
            <button type="button" onClick={() => { setMonth(todayStr.slice(0, 7)); setSelectedDate(todayStr); }} className="rounded-lg border border-slate-200 px-2 py-1 text-xs">Bugün</button>
            <button type="button" onClick={() => stepMonth(1)} aria-label="Sonraki ay" className="rounded-lg border border-slate-200 p-2"><ChevronRight className="size-4" /></button>
          </div>
          <div className="grid grid-cols-7 mb-2">
            {weekDays.map(day => <span key={day} className="text-center text-xs text-slate-500">{day}</span>)}
          </div>
          <div className="triaj-calendar-grid">
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
                  className={`triaj-calendar-day p-2 text-xs sm:text-sm ${date === selectedDate ? 'ring-2 ring-inset ring-indigo-500' : ''} ${date.startsWith(month) ? 'text-slate-800' : 'text-slate-500'}`}>
                  <span className="block font-semibold">{Number(date.slice(-2))}</span>
                  {open > 0 && <span className="mt-2 block text-[10px] font-bold">{open} görev</span>}
                  {(tasksByDate.get(date) ?? []).filter(task => task.status === 'open').slice(0, 2).map(task =>
                    <span key={task.id} className="mt-1 hidden truncate text-[10px] sm:block" title={`${task.lesson} · ${task.unit} · ${stageLabels[task.stage]}`}>
                      {stageLabels[task.stage]} · {task.unit}
                    </span>)}
                  {open > 2 && <span className="block text-[10px]">+{open - 2}</span>}
                </button>
              );
            })}
          </div>
          <div className="mt-5 border-t border-slate-200 pt-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="font-bold">{selectedDate} görevleri ({selectedTasks.filter(task => task.status === 'open').length} açık · {selectedTasks.length} toplam)</h3>
              <button
                type="button"
                onClick={() => setShowAddForm(prev => !prev)}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{showAddForm ? 'Formu Kapat' : 'Bu Güne İlk Tekrar Planla'}</span>
              </button>
            </div>

            {showAddForm && (
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  if (!planUnitTitle || !planSubjectId || !planTargetDate) return;
                  const ok = await addTopic(planSubjectId, planUnitTitle, [], planTargetDate, planNotes);
                  if (ok) {
                    setPlanUnitTitle('');
                    setPlanNotes('');
                    setShowAddForm(false);
                    setSelectedDate(planTargetDate);
                  }
                }}
                className="mb-4 p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 space-y-3"
              >
                <div className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-indigo-600" />
                  <span>{planTargetDate} Tarihine Ders / Ünite Planla (T+0 Başlangıcı)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Ders Bloğu</label>
                    <select
                      value={planSubjectId}
                      aria-label="Ders seçin"
                      onChange={e => {
                        setPlanSubjectId(e.target.value);
                        setPlanUnitTitle('');
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-medium text-slate-800"
                    >
                      {subjects.map(s => (
                        <option key={s.id} value={s.id}>
                          [{s.code}] {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Kanonik Ünite</label>
                    <select
                      value={planUnitTitle}
                      aria-label="Kanonik ünite seçin"
                      required
                      onChange={e => setPlanUnitTitle(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-800"
                    >
                      <option value="">Ünite seçin...</option>
                      {(CANONICAL_UNITS[subjects.find(s => s.id === planSubjectId)?.name ?? ''] ?? []).map(title => (
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
                      value={planTargetDate}
                      onChange={e => setPlanTargetDate(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-mono text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    aria-label="Çalışma / yama notu"
                    value={planNotes}
                    onChange={e => setPlanNotes(e.target.value)}
                    placeholder="Opsiyonel çalışma / yama notu..."
                    className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-800"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-3 py-1.5 border border-slate-300 rounded-lg text-xs text-slate-700 hover:bg-slate-100"
                  >
                    Vazgeç
                  </button>
                  <button
                    type="submit"
                    disabled={saving || !planUnitTitle}
                    className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-lg text-xs font-semibold"
                  >
                    {saving ? 'Kaydediliyor...' : 'Takvime Ekle (T+0 Planla)'}
                  </button>
                </div>
                {error && <p role="alert" className="text-sm text-rose-700">{error}</p>}
              </form>
            )}
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
