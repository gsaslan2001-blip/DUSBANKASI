import { ArrowLeft, BarChart3, Bell, Calendar, Cpu, Download, HelpCircle, Layers, Sliders, Volume2, VolumeX } from './icons';
import { getDaysDiff } from '../domain/triage';
import { useTriajView } from './TriajViewContext';

const tabs = [
  { id: 'planner', label: 'Günlük Plan', icon: Calendar },
  { id: 'subjects', label: 'Dersler ve Üniteler', icon: Layers },
  { id: 'notifications', label: 'Takvim', icon: Calendar },
  { id: 'analytics', label: 'Deneme ve Hata Analizi', icon: BarChart3 },
  { id: 'report', label: 'Kova Raporu', icon: Layers },
] as const;
export type ActiveTab = typeof tabs[number]['id'];

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onBack: () => void;
  onOpenNotifications: () => void;
  onOpenDeepSeek: () => void;
  onOpenSystemParams: () => void;
  onOpenGuide: () => void;
  onOpenBackup: () => void;
}

export function TriajHeader({
  activeTab, setActiveTab, onBack, onOpenNotifications, onOpenDeepSeek, onOpenSystemParams, onOpenGuide, onOpenBackup,
}: HeaderProps) {
  const { notifications, soundEnabled, toggleSound, report, systemParams, todayStr } = useTriajView();
  const unread = notifications.filter(item => !item.isRead).length;
  const daysLeft = systemParams.examDate ? getDaysDiff(todayStr, systemParams.examDate) : null;
  const actions = [
    { label: 'Yapay Zekâ', icon: Cpu, action: onOpenDeepSeek },
    { label: 'Parametreler', icon: Sliders, action: onOpenSystemParams },
    { label: 'Giriş Rehberi', icon: HelpCircle, action: onOpenGuide },
    { label: 'Veri ve Yedek', icon: Download, action: onOpenBackup },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-xs">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <button type="button" onClick={onBack} aria-label="Soru Bankasına Dön" title="Soru Bankasına Dön"
              className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100"><ArrowLeft className="size-4" /></button>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900">TRİAJ</h1>
              {daysLeft !== null && (
                <p className="text-xs text-slate-600">{daysLeft < 0 ? 'Sınav tarihi geçti' : daysLeft === 0 ? 'Sınav günü' : `Sınava ${daysLeft} gün kaldı`}</p>
              )}
            </div>
            {report.redBucket >= 3 && (
              <p className="hidden rounded-md bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-800 sm:block">
                {report.redBucket} kırmızı ünite · {report.redBucket >= 4 ? 'Kapasite aşıldı' : 'Kapasite sınırında'}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {actions.map(({ label, icon: Icon, action }) => (
              <button key={label} type="button" onClick={action} aria-label={label} title={label}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 p-2 text-xs font-semibold text-slate-700 hover:bg-slate-100">
                <Icon className="size-4" />
                <span className="hidden lg:inline">{label}</span>
              </button>
            ))}
            <button type="button" onClick={toggleSound} aria-pressed={soundEnabled} aria-label="Ses Ayarı"
              className="rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-100">
              {soundEnabled ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
            </button>
            <button type="button" onClick={onOpenNotifications} aria-label={unread ? `Bildirimler, ${unread} okunmamış` : 'Bildirimler'}
              className="flex items-center gap-1 rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-100">
              <Bell className="size-4" />
              {unread > 0 && <span className="text-xs font-semibold text-rose-700">{unread}</span>}
            </button>
          </div>
        </div>
        <nav aria-label="TRİAJ sekmeleri" className="flex items-center gap-1 overflow-x-auto border-t border-slate-100 py-2">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" onClick={() => setActiveTab(id)} aria-current={activeTab === id ? 'page' : undefined}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold ${activeTab === id ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
              <Icon className="size-4" /> {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
