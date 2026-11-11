import { ArrowLeft, BarChart3, Bell, Calendar, Cpu, Download, HelpCircle, Layers, Sliders, Volume2, VolumeX } from './icons';
import { getDaysDiff } from '../domain/triage';
import { useTriajView } from './TriajViewContext';

const tabs = [
  { id: 'planner', label: 'Komuta Merkezi', icon: Calendar },
  { id: 'subjects', label: 'Müfredat', icon: Layers },
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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/92 text-white backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2">
          <div className="flex min-w-0 items-center gap-3">
            <button type="button" onClick={onBack} aria-label="Soru Bankasına Dön" title="Soru Bankasına Dön"
              className="rounded-lg border border-white/15 p-2 text-zinc-200 hover:bg-white/10"><ArrowLeft className="size-4" /></button>
            <div>
              <h1 className="text-[15px] font-bold tracking-tight text-white">Triyaj <span className="rounded-md border border-white/10 bg-white/8 px-1.5 py-0.5 font-mono text-[10px] text-emerald-400">{daysLeft !== null && daysLeft >= 0 ? `${daysLeft}G · ` : ''}{systemParams.targetTotalNet} Net</span></h1>
              {daysLeft !== null && (
                <p className="text-[10px] text-zinc-400">Bilişsel Kova &amp; Çalışma Sistemi</p>
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
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 p-2 text-xs font-semibold text-zinc-300 hover:bg-white/10 hover:text-white">
                <Icon className="size-4" />
                <span className="hidden lg:inline">{label}</span>
              </button>
            ))}
            <button type="button" onClick={toggleSound} aria-pressed={soundEnabled} aria-label="Ses Ayarı"
              className="rounded-lg border border-white/10 p-2 text-zinc-300 hover:bg-white/10">
              {soundEnabled ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
            </button>
            <button type="button" onClick={onOpenNotifications} aria-label={unread ? `Bildirimler, ${unread} okunmamış` : 'Bildirimler'}
              className="flex items-center gap-1 rounded-lg border border-white/10 p-2 text-zinc-300 hover:bg-white/10">
              <Bell className="size-4" />
              {unread > 0 && <span className="text-xs font-semibold text-rose-700">{unread}</span>}
            </button>
          </div>
        </div>
        <nav aria-label="TRİAJ sekmeleri" className="flex items-center gap-1 overflow-x-auto border-t border-white/10 py-1.5">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" onClick={() => setActiveTab(id)} aria-label={id === 'subjects' ? 'Dersler ve Üniteler' : id === 'planner' ? 'Günlük Plan' : label} aria-current={activeTab === id ? 'page' : undefined}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold ${activeTab === id ? 'bg-white text-zinc-950' : 'text-zinc-300 hover:bg-white/10 hover:text-white'}`}>
              <Icon className="size-4" /> {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
