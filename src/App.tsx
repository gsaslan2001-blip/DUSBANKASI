import { useState, useEffect, useCallback } from 'react';
import { importQuestions, fetchQuestionsByIds, deleteQuestionsInLesson, deleteQuestionsInUnit, renameLesson, renameUnit, loadTodaysDailyExam, markDailyExamCompleted, saveExamAnswers, uploadQuestionImage, deleteQuestionImage, rowToQuestion, type DailyExamRow } from './lib/supabase';
import { useQuestions } from './hooks/useQuestions';
import { motion } from 'framer-motion';
import { useResumableSession } from './hooks/useResumableSession';
import { useAuth } from './hooks/useAuth';
import { useRealtimeStats } from './hooks/useRealtimeStats';
import { AuthModal } from './components/AuthModal';
import type { Question, QuestionSkeleton } from './data';
import { getWeakQuestionIds, getUnitProgress, syncStatsUp, syncStatsDown, loadAllStats, getDeviceId, resetAllStats, setSyncUserId, mergeWrongChoices, SyncManager, getRecentActivity, setupSyncHandlers } from './lib/stats';
import ErrorAnalyticsView from './components/ErrorAnalyticsView';
import SimulationResultView from './components/SimulationResultView';
import StatisticsView from './components/StatisticsView';
import type { AnswerDetail as SimAnswerDetail } from './components/SimulationResultView';
import DailyPlanView from './components/DailyPlanView';
import { SourceBooksView } from './components/SourceBooksView';
import { AddQuestionView } from './components/admin/AddQuestionView';
import { buildSmartQueue, buildUnitQueue, buildExamPool, buildSimulationPool } from './lib/adaptive';
import {
  CheckCircle, XCircle, ArrowRight, ArrowLeft, ArrowCounterClockwise, BookOpen,
  CaretRight, CaretLeft, ArrowsClockwise, SquaresFour,
  Upload, Download, WarningCircle, CircleNotch, Trash, PencilSimple, Star, Plus,
  Warning, FileText, Gear, ChartBar, Lightning, Brain, Target, Calendar,
  UserCircle, Skull, Microscope, Heartbeat, PaintBrush, Syringe, Hourglass, Stack, ClipboardText,
  Image, X as XIcon, Link
} from '@phosphor-icons/react';
import { fisherYates } from './lib/shuffle';
import { todayStr } from './lib/dateUtils';
import { themeColors, type Theme } from './theme';
import type { AppState, AnswerDetail, QuizStatsType, ActiveSessionInfo, UserSettings } from './types/app';
import { QuizView } from './components/quiz/QuizView';
import { useSettingsStore } from './lib/settingsStore';

const errMsg = (e: unknown): string => {
  if (e instanceof Error) return e.message;
  if (typeof e === 'object' && e !== null) return JSON.stringify(e);
  return String(e);
};

function Logo() {
  return (
    <motion.img
      src="/logo.png"
      alt="DUSBANKASI Logo"
      className="w-9 h-9 rounded-2xl object-cover drop-shadow-[0_0_12px_rgba(130,90,240,0.6)] cursor-pointer"
      whileHover={{ scale: 1.05, rotateZ: [0, -5, 5, 0], filter: "brightness(1.2)" }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    />
  );
}

function CountdownWidget() {
  const [daysLeft, setDaysLeft] = useState(0);
  useEffect(() => {
    const calc = () => {
      const TARGET_DATE = new Date('2026-11-01T00:00:00').getTime();
      setDaysLeft(Math.max(0, Math.floor((TARGET_DATE - Date.now()) / (1000 * 60 * 60 * 24))));
    };
    calc();
    const interval = setInterval(calc, 60000); // 1 dk
    return () => clearInterval(interval);
  }, []);
  
  if (daysLeft === 0) {
    return (
      <div className="flex items-center gap-3 pr-5 pl-2.5 py-1.5 rounded-[1.25rem] bg-emerald-500/[0.08] border border-emerald-500/15 mx-4 lg:mx-8 hidden sm:flex shadow-[0_0_20px_rgba(16,185,129,0.05)] backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent blur-xl pointer-events-none" />
        <div className="w-9 h-9 rounded-xl bg-emerald-500/[0.15] flex items-center justify-center border border-emerald-400/20 shadow-lg shadow-emerald-500/20 relative z-10">
          <span className="text-emerald-500 dark:text-emerald-400 font-black text-xs">✓</span>
        </div>
        <div className="flex flex-col relative z-10">
          <span className="text-[10px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 uppercase leading-[1.2] opacity-90 drop-shadow-[0_1px_10px_rgba(255,255,255,0.8)] dark:drop-shadow-none">TEBRİKLER</span>
          <span className="text-sm font-black text-slate-800 dark:text-zinc-100 leading-none drop-shadow-[0_2px_12px_rgba(255,255,255,1)] dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Sınav Tamamlandı</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 pr-5 pl-2.5 py-1.5 rounded-[1.25rem] bg-indigo-500/[0.08] border border-indigo-500/15 mx-4 lg:mx-8 hidden sm:flex shadow-[0_0_20px_rgba(99,102,241,0.05)] backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent blur-xl pointer-events-none" />
      <div className="w-9 h-9 rounded-xl bg-indigo-500/[0.15] flex items-center justify-center border border-indigo-400/20 shadow-lg shadow-indigo-500/20 relative z-10">
        <Hourglass size={18} weight="thin" className="text-indigo-500 dark:text-indigo-400 countdown-spin filter drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
      </div>
      <div className="flex flex-col relative z-10">
        <span className="text-[10px] font-black tracking-widest text-indigo-600 dark:text-indigo-400 uppercase leading-[1.2] opacity-90 drop-shadow-[0_1px_10px_rgba(255,255,255,0.8)] dark:drop-shadow-none">DUS 2026/2</span>
        <span className="text-sm font-black text-slate-800 dark:text-zinc-100 leading-none drop-shadow-[0_2px_12px_rgba(255,255,255,1)] dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{daysLeft} Gün Kaldı</span>
      </div>
    </div>
  );
}

/* --- MAIN APP --- */
export default function App() {
  const isPreviewMode = typeof window !== 'undefined' && window.location.search.includes('preview=sim');

  const [appState, setAppState] = useState<AppState>(isPreviewMode ? 'simulation-result' : 'select-lesson');
  const [mode, setMode] = useState<'quiz' | 'exam'>('quiz');
  const [selectedLesson, setSelectedLesson] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [examUnits, setExamUnits] = useState<{ lesson: string; unit: string }[]>([]);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [unitQuestions, setUnitQuestions] = useState<Question[]>([]);
  const [isFavoritesExam, setIsFavoritesExam] = useState(false);
  const [isHighYieldMode, setIsHighYieldMode] = useState(false);
  const [hyLoading, setHyLoading] = useState(false);
  const [examLoading, setExamLoading] = useState(false);
  const [quizStats, setQuizStats] = useState<QuizStatsType>({ correct: 0, incorrect: 0, blank: 0, total: 0, details: [] });
  const {
    questions: rawQuestions,
    setQuestions,
    loading,
    loadError,
    reload: loadQuestions,
    loadHighYield,
    updateQuestion: updateQuestionInHook,
    deleteQuestion: deleteQuestionInHook,
    toggleFavorite: toggleFavoriteInHook,
    flagQuestion: flagQuestionInHook,
  } = useQuestions();

  // `questions` — ders kartı, istatistik ve adaptif motor için kullanılan QuestionSkeleton dizisi.
  // Bileşen prop tipleriyle uyum için Question[] olarak cast edilir; kullanılan alanlar
  // (id, lesson, unit, quality_flag, is_favorite) her iki tipte de mevcut.
  const questions = rawQuestions as unknown as Question[];

  // Sınav soruları on-demand yüklenirken gösterilecek loading state
  const [contentLoading, setContentLoading] = useState(false);

  // useAuth önce — useResumableSession'a userId geçmek için
  const { user, signOut } = useAuth();

  const {
    resumeSessionData,
    isSessionLoading,
    clearResumableSession,
    saveResumableSession,
    sessionSaveError,
  } = useResumableSession(user?.id, questions as unknown as any[]);
  const [simTotalSeconds, setSimTotalSeconds] = useState<number | null>(null);

  // High fidelity mock data for ?preview=sim
  const getMockDetails = (): SimAnswerDetail[] => {
    const mockQs: { lesson: string; unit: string }[] = [
      { lesson: 'Radyoloji', unit: 'Radyasyon Fiziği ve Biyolojisi' },
      { lesson: 'Radyoloji', unit: 'Radyasyon Fiziği ve Biyolojisi' },
      { lesson: 'Radyoloji', unit: 'Radyasyon Fiziği ve Biyolojisi' },
      { lesson: 'Radyoloji', unit: 'Kistler' },
      { lesson: 'Radyoloji', unit: 'Kistler' },
      { lesson: 'Radyoloji', unit: 'Kistler' },
      { lesson: 'Periodontoloji', unit: 'Periodontal Hastalık Sınıflandırması' },
      { lesson: 'Periodontoloji', unit: 'Periodontal Hastalık Sınıflandırması' },
      { lesson: 'Periodontoloji', unit: 'Periodontal Hastalık Sınıflandırması' },
      { lesson: 'Patoloji', unit: 'Hücre Hasarı ve Uyum Reaksiyonları' },
      { lesson: 'Patoloji', unit: 'Hücre Hasarı ve Uyum Reaksiyonları' },
      { lesson: 'Patoloji', unit: 'Hücre Hasarı ve Uyum Reaksiyonları' },
      { lesson: 'Fizyoloji', unit: 'Sinir-Kas Fizyolojisi' },
      { lesson: 'Fizyoloji', unit: 'Sinir-Kas Fizyolojisi' },
      { lesson: 'Fizyoloji', unit: 'Sinir-Kas Fizyolojisi' },
      { lesson: 'Histoloji', unit: 'Epitel Dokusu' },
      { lesson: 'Histoloji', unit: 'Epitel Dokusu' },
      { lesson: 'Histoloji', unit: 'Epitel Dokusu' },
    ];

    const states: ('correct' | 'incorrect' | 'blank')[] = [
      'correct', 'correct', 'incorrect', // Radyasyon Fiziği (66% - Geliştirilmeli)
      'correct', 'incorrect', 'blank',    // Kistler (33% - Kritik Eksik)
      'correct', 'correct', 'correct',    // Periodontal Hastalık (100%)
      'correct', 'incorrect', 'incorrect', // Hücre Hasarı (33% - Kritik Eksik)
      'correct', 'correct', 'correct',    // Sinir-Kas Fizyolojisi (100%)
      'correct', 'correct', 'incorrect'   // Epitel Dokusu (66% - Geliştirilmeli)
    ];

    return mockQs.map((q, idx) => ({
      question: {
        id: `mock-q-${idx}`,
        question: `Bu bir simülasyon önizleme sorusudur #${idx + 1}`,
        options: { A: 'Seçenek A', B: 'Seçenek B', C: 'Seçenek C', D: 'Seçenek D', E: 'Seçenek E' },
        correctAnswer: 'A',
        explanation: 'Detaylı klinik açıklama buraya gelecektir.',
        lesson: q.lesson,
        unit: q.unit,
        is_favorite: false
      },
      state: states[idx],
      selectedOptionKey: states[idx] === 'correct' ? 'A' : states[idx] === 'incorrect' ? 'B' : null,
      timeSpent: 15
    }));
  };

  const [simResult, setSimResult] = useState<{ details: SimAnswerDetail[]; totalSeconds: number; usedSeconds: number } | null>(() => {
    if (isPreviewMode) {
      return {
        details: getMockDetails(),
        totalSeconds: 7200,
        usedSeconds: 4320
      };
    }
    return null;
  });
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [reportingQuestion, setReportingQuestion] = useState<Question | null>(null);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'done' | 'error'>('idle');
  const [statsVersion, setStatsVersion] = useState(0); // Sync sonrası UI refresh için
  const [showSettings, setShowSettings] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [todaysDailyExam, setTodaysDailyExam] = useState<DailyExamRow | null | 'loading'>('loading');
  const [isDailyExamSession, setIsDailyExamSession] = useState(false);
  const [activeDailyExamId, setActiveDailyExamId] = useState<string | undefined>(undefined);
  // Merkezi Dialog State
  const [dialog, setDialog] = useState<{
    type: 'alert' | 'confirm' | 'prompt';
    title?: string;
    message: string;
    defaultValue?: string;
    onConfirm: (val?: string) => void;
    onCancel?: () => void;
  } | null>(null);

  const showAlert = useCallback((message: string, title?: string) => {
    setDialog({ type: 'alert', message, title, onConfirm: () => setDialog(null) });
  }, []);

  const showConfirm = useCallback((message: string, onConfirm: () => void, title?: string) => {
    setDialog({ type: 'confirm', message, title, onConfirm: () => { onConfirm(); setDialog(null); }, onCancel: () => setDialog(null) });
  }, []);

  const showPrompt = useCallback((message: string, defaultValue: string, onConfirm: (val: string) => void, title?: string) => {
    setDialog({ type: 'prompt', message, defaultValue, title, onConfirm: (val) => { if (val && val.trim()) onConfirm(val.trim()); setDialog(null); }, onCancel: () => setDialog(null) });
  }, []);

  useRealtimeStats({
    userId: user?.id ?? null,
    deviceId: getDeviceId(),
    onStatUpdate: useCallback((questionId: string, stat) => {
      // Başka cihazdan gelen güncellemeyi localStorage'a merge et
      const stats = loadAllStats();
      const local = stats[questionId];
      const localSeen = local?.lastSeen ?? '';
      const cloudSeen = stat.lastSeen ?? '';
      if (!local || cloudSeen > localSeen) {
        stats[questionId] = {
          attempts: Math.max(stat.attempts, local?.attempts ?? 0),
          corrects: Math.max(stat.corrects, local?.corrects ?? 0),
          lastSeen: stat.lastSeen || local?.lastSeen || '',
          difficulty: stat.difficulty ?? local?.difficulty,
          wrongChoices: mergeWrongChoices(local?.wrongChoices ?? [], stat.wrongChoices ?? []),
        };
        localStorage.setItem('dus_question_stats', JSON.stringify(stats));
      }
    }, []),
  });

  const settings = useSettingsStore(s => s.settings);
  const setSettings = useSettingsStore(s => s.setSettings);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  // B1: visibilitychange (sekme kapanınca anında flush) ve online (ağ geri gelince retry)
  // dinleyicilerini kurar. Cleanup React unmount'ta otomatik çalışır.
  useEffect(() => setupSyncHandlers(), []);

  // userId değişiminde sync sistemine bildir (tüm push/pull işlemleri user bazlı olur)
  useEffect(() => {
    setSyncUserId(user?.id ?? null);
    if (user) {
      // B4: Anonim oturumda çözülen sorular user_id'siz cloud'a yazılır.
      // Giriş anında ÖNCE local'i user_id'li olarak push edip sahiplen,
      // SONRA cloud'dan çek — böylece anonim dönem verisi kaybolmaz.
      syncStatsUp()
        .catch(() => {})
        .finally(() => {
          syncStatsDown()
            .then(() => setStatsVersion(v => v + 1))
            .catch(() => {});
        });
    }
  }, [user]);

  useEffect(() => {
    if (!user) { setTodaysDailyExam(null); return; }
    let cancelled = false;
    loadTodaysDailyExam(user.id)
      .then(exam => { if (!cancelled) setTodaysDailyExam(exam); })
      .catch(() => { if (!cancelled) setTodaysDailyExam(null); });
    return () => { cancelled = true; };
  }, [user]);



  useEffect(() => {
    if (sessionSaveError) {
      showAlert('Oturum kaydedilemedi: ' + sessionSaveError + '\nLütfen internet bağlantınızı kontrol edin ve Sync butonuna basın.', 'Kaydetme Hatası');
    }
  }, [sessionSaveError, showAlert]);

  const handleToggleFavorite = async (id: string) => {
    const q = questions.find(x => x.id === id) || examQuestions.find(x => x.id === id) || unitQuestions.find(x => x.id === id);
    if (!q) return;
    const newStatus = !q.is_favorite;
    try {
      await toggleFavoriteInHook(id, newStatus);
      // Also update unitQuestions (quiz mode uses this as activeQuestions)
      setUnitQuestions(prev => prev.map(x => x.id === id ? { ...x, is_favorite: newStatus } : x));
      setExamQuestions(prev => {
        const updated = prev.map(x => x.id === id ? { ...x, is_favorite: newStatus } : x);
        if (!newStatus && isFavoritesExam) return updated.filter(x => x.id !== id);
        return updated;
      });
    } catch (e) { console.error("Buluta kaydedilemedi", e); }
  };

  const handleClearSession = async () => {
    await clearResumableSession();
  };

  const handleResumeSession = () => {
    if (resumeSessionData) {
      setExamQuestions(resumeSessionData.questions);
      // Her zaman 'exam' moduna geç: activeQuestions examQuestions'ı kullanır
      // ve initialSession={mode === 'exam' ? resumeSessionData : null} çalışır
      setMode('exam');
      if (resumeSessionData.simTotalSeconds) {
        setSimTotalSeconds(resumeSessionData.simTotalSeconds);
      }
      if (resumeSessionData.dailyExamId) {
        setIsDailyExamSession(true);
        setActiveDailyExamId(resumeSessionData.dailyExamId);
      }
      setAppState('quiz');
    }
  };

  const handleDeleteLesson = async (lesson: string, e: React.MouseEvent) => {
    e.stopPropagation();
    showConfirm(`${lesson} dersini ve tüm sorularını silmek istediğinize emin misiniz?`, async () => {
      try { 
        await deleteQuestionsInLesson(lesson); 
        setQuestions(p => p.filter(q => q.lesson !== lesson)); 
      } catch (err: unknown) { 
        showAlert(errMsg(err), 'Hata'); 
      }
    }, 'Dersi Sil');
  };

  const handleDeleteUnit = async (unit: string, e: React.MouseEvent) => {
    e.stopPropagation();
    showConfirm(`${unit} ünitesini silmek istediğinize emin misiniz?`, async () => {
      try { 
        await deleteQuestionsInUnit(selectedLesson, unit); 
        setQuestions(p => p.filter(q => !(q.lesson === selectedLesson && q.unit === unit))); 
      } catch (err: unknown) { 
        showAlert(errMsg(err), 'Hata'); 
      }
    }, 'Üniteyi Sil');
  };

  const handleDeleteQuestion = async (id: string) => {
    showConfirm('Bu soruyu silmek istediğinize emin misiniz?', async () => {
      try { await deleteQuestionInHook(id); } catch (err: unknown) { showAlert(errMsg(err), 'Hata'); }
    }, 'Soruyu Sil');
  };

  const handleRenameLesson = async (oldLesson: string, e: React.MouseEvent) => {
    e.stopPropagation();
    showPrompt(`${oldLesson} dersi için yeni bir isim girin:`, oldLesson, async (newLesson) => {
      if (newLesson.trim() === '' || newLesson === oldLesson) return;
      try {
        await renameLesson(oldLesson, newLesson.trim());
        setQuestions(p => p.map(q => q.lesson === oldLesson ? { ...q, lesson: newLesson.trim() } : q));
      } catch (err: unknown) { showAlert(errMsg(err), 'Hata'); }
    }, 'Dersi Yeniden Adlandır');
  };

  const handleRenameUnit = async (unit: string, e: React.MouseEvent) => {
    e.stopPropagation();
    showPrompt(`${unit} ünitesi için yeni bir isim girin:`, unit, async (newUnit) => {
      if (newUnit.trim() === '' || newUnit === unit) return;
      try {
        await renameUnit(selectedLesson, unit, newUnit.trim());
        setQuestions(p => p.map(q => q.lesson === selectedLesson && q.unit === unit ? { ...q, unit: newUnit.trim() } : q));
      } catch (err: unknown) { showAlert(errMsg(err), 'Hata'); }
    }, 'Üniteyi Yeniden Adlandır');
  };

  const handleSaveEdit = async (edited: Question) => {
    try {
      await updateQuestionInHook(edited);
      setExamQuestions(prev => prev.map(q => q.id === edited.id ? edited : q));
      setUnitQuestions(prev => prev.map(q => q.id === edited.id ? edited : q));
      setEditingQuestion(null);
    } catch (err: unknown) { showAlert("Güncellenemedi: " + errMsg(err), 'Hata'); }
  };

  const handleSaveReport = async (id: string, reason: string) => {
    try {
      await flagQuestionInHook(id, reason);
      setReportingQuestion(null);
      showAlert("Soru başarıyla raporlandı. Teşekkürler!", 'Başarılı');
    } catch (err: unknown) { showAlert("Raporlanamadı: " + errMsg(err), 'Hata'); }
  };


  const handleSyncStats = async () => {
    setSyncStatus('syncing');
    try {
      // Aktif session varsa önce onu kaydet
      if (resumeSessionData) {
        await saveResumableSession(resumeSessionData);
      }
      const pushResult = await syncStatsUp();
      if (pushResult.errors.length > 0) {
        console.error('[Sync] Push hataları:', pushResult.errors);
      }
      await syncStatsDown();
      // Soru havuzunu da tazele — yeni eklenen/silinen sorular UI'a yansısın
      await loadQuestions(true);
      setStatsVersion(v => v + 1);
      setSyncStatus('done');
      setTimeout(() => setSyncStatus('idle'), 2500);
      if (pushResult.errors.length > 0) {
        showAlert(
          `${pushResult.pushed}/${pushResult.total} kayıt sync edildi.\n${pushResult.errors.length} batch hatası oluştu.`,
          'Kısmi Sync'
        );
      }
    } catch (err) {
      setSyncStatus('error');
      setTimeout(() => setSyncStatus('idle'), 3000);
      showAlert('Sync başarısız: ' + errMsg(err), 'Hata');
    }
  };

  const handleSimulationClick = () => {
    setAppState('simulation-setup');
  };

  const handleDailyExamStart = async () => {
    if (isSessionLoading) {
      showAlert('Oturum bilgisi yükleniyor, lütfen bekleyin...', 'Bilgi');
      return;
    }
    if (!todaysDailyExam || todaysDailyExam === 'loading') return;
    const exam = todaysDailyExam as DailyExamRow;

    // Eğer bu sınav için kaydedilmiş yarım oturum varsa, kaldığı yerden devam et
    if (
      resumeSessionData &&
      resumeSessionData.dailyExamId === exam.id &&
      resumeSessionData.answers.length > 0
    ) {
      handleResumeSession();
      return;
    }

    const idSet = new Set(exam.question_ids);
    // Sınav sorularını on-demand çek (contentCache veya Supabase)
    try {
      setContentLoading(true);
      const dailyRows = await fetchQuestionsByIds(exam.question_ids);
      const dailyQs = dailyRows.map(rowToQuestion).filter(q => idSet.has(q.id));
      if (dailyQs.length === 0) {
        showAlert('Bugüne ait günlük deneme sınavı soruları henüz yüklenemedi. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.', 'Bilgi');
        return;
      }
      setExamQuestions(dailyQs);
      setMode('exam');
      setIsDailyExamSession(true);
      setActiveDailyExamId(exam.id);
      setAppState('quiz');
    } catch (e) {
      showAlert('Sorular yüklenemedi: ' + errMsg(e), 'Hata');
    } finally {
      setContentLoading(false);
    }
  };

  const handleResetStats = async () => {
    showConfirm('Tüm istatistikler (doğruluk, streak, aktivite) kalıcı olarak silinecek. Emin misiniz?', async () => {
      try {
        await resetAllStats();
        showAlert('Tüm istatistikler sıfırlandı.', 'Başarılı');
      } catch (e) {
        showAlert('Sıfırlama hatası: ' + errMsg(e), 'Hata');
      }
    }, 'İstatistikleri Sıfırla');
  };

  const availableLessons = Array.from(new Set(questions.map((q) => q.lesson)));
  const unitsForLesson = Array.from(new Set(questions.filter((q) => q.lesson === selectedLesson).map((q) => q.unit)));

  const handleLessonSelect = (lesson: string) => { setSelectedLesson(lesson); setAppState('select-unit'); };
  const handleUnitSelect = async (unit: string) => {
    setSelectedUnit(unit);
    // Skeleton'dan ID'leri al, tam metni on-demand çek
    const unitSkeletons = questions.filter(q => q.unit === unit && q.lesson === selectedLesson);
    try {
      setContentLoading(true);
      const ids = unitSkeletons.map(s => s.id);
      const rows = await fetchQuestionsByIds(ids);
      const fullQs = rows.map(rowToQuestion);
      const allStats = loadAllStats();
      const unseen = fisherYates(fullQs.filter(q => !allStats[q.id] || allStats[q.id].attempts === 0));
      const seen   = fisherYates(fullQs.filter(q => allStats[q.id] && allStats[q.id].attempts > 0));
      setUnitQuestions([...unseen, ...seen]);
      setMode('quiz');
      setAppState('quiz');
    } catch (e) {
      showAlert('Sorular yüklenemedi: ' + errMsg(e), 'Hata');
    } finally {
      setContentLoading(false);
    }
  };

  const handleComplete = (answers: AnswerDetail[]) => {
    const correct = answers.filter(a => a.state === 'correct').length;
    const incorrect = answers.filter(a => a.state === 'incorrect').length;
    const blank = answers.filter(a => a.state === 'blank').length;
    setQuizStats({ correct, incorrect, blank, total: answers.length, details: answers });
    setAppState('result');
    clearResumableSession().catch(() => { });
    SyncManager.flush().catch(() => {});
    if (isDailyExamSession && activeDailyExamId) {
      if (user) {
        saveExamAnswers(activeDailyExamId, user.id, answers).catch(() => {});
      }
      markDailyExamCompleted(activeDailyExamId).catch(() => {});
      setTodaysDailyExam(null);
      setIsDailyExamSession(false);
      setActiveDailyExamId(undefined);
    }
  };
  const handleReturnToHome = () => {
    SyncManager.flush().catch(() => {});
    setIsDailyExamSession(false);
    setActiveDailyExamId(undefined);
    setAppState('select-lesson');
    setSelectedLesson('');
    setSelectedUnit('');
    setMode('quiz');
    setUnitQuestions([]);
    setIsHighYieldMode(false);
  };


  const handleExportPDF = (selection: Question[], title: string) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) { showAlert('Popup engellendi. Tarayıcı ayarlarından popup izni verin.', 'Hata'); return; }
    const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const date = new Date().toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' });
    const PER_PAGE = 6;

    const chunks: Question[][] = [];
    for (let i = 0; i < selection.length; i += PER_PAGE) chunks.push(selection.slice(i, i + PER_PAGE));

    const renderQuestionPage = (chunk: Question[], chunkIndex: number) => {
      const offset = chunkIndex * PER_PAGE;
      return `
<div class="page questions-page">
  <div class="page-header">
    <span class="page-title">📚 ${esc(title)}</span>
    <span class="page-meta">SORULAR ${offset + 1}–${offset + chunk.length} · ${selection.length} Soru · ${date}</span>
  </div>
  <div class="q-grid">
    ${chunk.map((q, i) => `
    <div class="qblock">
      <div class="qnum">SORU ${offset + i + 1}</div>
      <div class="qtext">${esc(q.question)}</div>
      <div class="opts">
        ${(['A','B','C','D','E'] as const).map(k => q.options[k] ? `
        <div class="opt"><span class="opt-key">${k}</span><span class="opt-text">${esc(q.options[k] || '')}</span></div>` : '').join('')}
      </div>
    </div>`).join('')}
  </div>
  <div class="page-footer">DUSBANKASI — ${date} · ${offset + 1}–${offset + chunk.length} / ${selection.length}</div>
</div>`;
    };

    const renderAnswerPage = (chunk: Question[], chunkIndex: number) => {
      const offset = chunkIndex * PER_PAGE;
      return `
<div class="page answer-page">
  <div class="page-header">
    <span class="page-title">✅ Cevap Anahtarı &amp; Açıklamalar</span>
    <span class="page-meta">${esc(title)} · ${offset + 1}–${offset + chunk.length}</span>
  </div>
  <div class="answer-key-grid">
    ${chunk.map((q, i) => `
    <div class="answer-badge">
      <span class="ans-num">${offset + i + 1}</span>
      <span class="ans-val">${q.correctAnswer}</span>
    </div>`).join('')}
  </div>
  <div class="exp-list">
    ${chunk.map((q, i) => `
    <div class="exp-block">
      <div class="exp-header">
        <span class="exp-num">${offset + i + 1}</span>
        <span class="exp-correct">Cevap: ${q.correctAnswer}</span>
      </div>
      ${q.explanation ? `<div class="exp-text">${esc(q.explanation).replace(/\n/g, '<br>')}</div>` : '<div class="exp-text exp-empty">Açıklama bulunmuyor.</div>'}
    </div>`).join('')}
  </div>
  <div class="page-footer">DUSBANKASI — ${date} · Sayfa ${chunkIndex + 1}</div>
</div>`;
    };

    const html = `<!DOCTYPE html>
<html lang="tr"><head><meta charset="UTF-8"><title>${esc(title)} — DUSBANKASI</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Segoe UI',system-ui,Arial,sans-serif;color:#1a1a2e;font-size:11px;line-height:1.55;background:#fff}
.page{width:100%;padding:16px 20px;page-break-after:always}
.page:last-child{page-break-after:auto}
.page-header{display:flex;justify-content:space-between;align-items:center;padding-bottom:8px;margin-bottom:12px;border-bottom:2px solid #6366f1}
.page-title{font-size:12px;font-weight:900;color:#4f46e5}
.page-meta{font-size:9px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em}
.page-footer{margin-top:10px;padding-top:6px;border-top:1px solid #e5e7eb;font-size:8.5px;color:#9ca3af;text-align:center;letter-spacing:.05em}
.questions-page{background:#fff}
.q-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px 14px}
.qblock{border:1px solid #e8e8f0;border-radius:10px;padding:10px 11px;break-inside:avoid;background:#fcfcff}
.qblock:nth-child(odd){border-left:3px solid #6366f1}
.qblock:nth-child(even){border-left:3px solid #a855f7}
.qnum{font-size:8.5px;font-weight:900;letter-spacing:.15em;color:#6366f1;text-transform:uppercase;margin-bottom:5px}
.qtext{font-weight:600;font-size:10.5px;margin-bottom:7px;color:#111827;line-height:1.5}
.opts{display:flex;flex-direction:column;gap:2.5px}
.opt{display:flex;align-items:flex-start;gap:6px;font-size:10px;padding:2px 0;line-height:1.4}
.opt-key{font-weight:900;color:#4f46e5;min-width:14px;flex-shrink:0;background:#eef2ff;border-radius:3px;text-align:center;padding:0 3px}
.opt-text{color:#374151}
.answer-page{background:#f8f8ff}
.answer-key-grid{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:14px;padding:12px 14px;background:#fff;border:1px solid #e0e0f0;border-radius:10px}
.answer-badge{display:flex;flex-direction:column;align-items:center;gap:2px;min-width:36px}
.ans-num{font-size:8px;font-weight:900;color:#9ca3af;letter-spacing:.05em}
.ans-val{font-size:14px;font-weight:900;color:#fff;background:linear-gradient(135deg,#059669,#10b981);border-radius:7px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(16,185,129,.25)}
.exp-list{display:grid;grid-template-columns:1fr 1fr;gap:7px 12px}
.exp-block{background:#fff;border:1px solid #e0e0f0;border-radius:9px;padding:9px 11px;break-inside:avoid}
.exp-header{display:flex;align-items:center;gap:7px;margin-bottom:5px}
.exp-num{font-size:10px;font-weight:900;color:#fff;background:#6366f1;border-radius:5px;width:22px;height:22px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.exp-correct{font-size:9.5px;font-weight:900;color:#059669;background:#d1fae5;border-radius:4px;padding:2px 7px}
.exp-text{font-size:9.5px;color:#374151;line-height:1.55}
.exp-empty{color:#9ca3af;font-style:italic}
@media print{
  body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .page{padding:10px 14px}
  @page{margin:6mm;size:A4}
}
</style></head><body>
${chunks.map((chunk, ci) => renderQuestionPage(chunk, ci) + renderAnswerPage(chunk, ci)).join('')}
</body></html>`;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 700);
  };


  const handleWeakQuestionsClick = async () => {
    const weakIds = getWeakQuestionIds();
    if (weakIds.length === 0) {
      showAlert('Henüz zayıf soru bulunamadı. En az 2 kez çözülmüş ve %50 altı doğru oranlı sorular burada görünecek.', 'Bilgi');
      return;
    }
    // Skeleton'da mevcut olanlarla kesiştir (deleted olabilir)
    const validIds = weakIds.filter(id => questions.some(s => s.id === id));
    if (validIds.length === 0) {
      showAlert('Zayıf soru bulunamadı.', 'Bilgi');
      return;
    }
    try {
      setContentLoading(true);
      const rows = await fetchQuestionsByIds(validIds);
      const weakQs = rows.map(rowToQuestion);
      setExamQuestions(fisherYates(weakQs));
      setMode('exam');
      setAppState('quiz');
    } catch (e) {
      showAlert('Sorular yüklenemedi: ' + errMsg(e), 'Hata');
    } finally {
      setContentLoading(false);
    }
  };

  const handleRetryIncorrect = (incorrectDetails: AnswerDetail[]) => {
    const retryQs = incorrectDetails.map(d => d.question);
    setExamQuestions(fisherYates(retryQs));
    setMode('exam');
    setAppState('quiz');
  };

  const handleGoBack = useCallback(() => {
    switch (appState) {
      case 'quiz': {
        SyncManager.flush().catch(() => {});  // quiz ortasında çıkışta pending sync'i gönder
        setUnitQuestions([]);
        setIsDailyExamSession(false);
        setActiveDailyExamId(undefined);
        const backTarget = isHighYieldMode ? 'select-highyield-unit' : mode === 'exam' ? 'select-lesson' : 'select-unit';
        setIsHighYieldMode(false);
        setAppState(backTarget);
        break;
      }
      case 'select-unit':
      case 'select-highyield-unit':
      case 'select-deneme':
      case 'select-favorites':
      case 'weak-questions':
      case 'analytics':
      case 'import':
      case 'result':
      case 'error-analysis':
      case 'simulation-setup':
      case 'simulation-result':
      case 'smart-study':
      case 'daily-plan':
        setIsHighYieldMode(false);
        setAppState('select-lesson');
        break;
      case 'select-deneme-amount':
        setAppState(isFavoritesExam ? 'select-favorites' : 'select-deneme');
        break;
      default:
        setAppState('select-lesson');
    }
  }, [appState, mode, isFavoritesExam]);

  useEffect(() => {
    if (appState !== 'select-lesson') {
      window.history.pushState({ appState }, '');
    }
    const onPopState = () => {
      handleGoBack();
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [appState, handleGoBack]);

  const handleImportDone = () => { loadQuestions(); setAppState('select-lesson'); setMode('quiz'); };

  const handleExport = () => {
    const dataStr = JSON.stringify(questions, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dus_bankasi_yedek_${todayStr()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleStartExam = async (amount: number) => {
    setExamLoading(true);
    try {
      // buildExamPool skeleton (QuestionSkeleton[]) ile çalışır — sadece id/lesson/unit kullanır
      const skeletonPool = buildExamPool(
        questions as any, // QuestionSkeleton[] → Question[] (id/lesson/unit alanları uyumlu)
        examUnits,
        loadAllStats(),
        amount,
        isFavoritesExam ? (q: QuestionSkeleton) => !!q.is_favorite : undefined,
      );
      // Sadece seçilen N sorunun tam metni on-demand çekiliyor
      const ids = skeletonPool.map((s: QuestionSkeleton) => s.id);
      const rows = await fetchQuestionsByIds(ids);
      const pool = ids.map(id => rows.find(r => r.id === id)).filter(Boolean).map(r => rowToQuestion(r!));
      setExamQuestions(pool);
      setMode('exam');
      setAppState('quiz');
      clearResumableSession().catch(() => { });
    } catch (e) {
      showAlert('Sınav havuzu oluşturulamadı: ' + errMsg(e), 'Hata');
    } finally {
      setExamLoading(false);
    }
  };

  const activeQuestions = mode === 'exam'
    ? examQuestions
    : (unitQuestions.length > 0 ? unitQuestions : questions.filter(q => q.unit === selectedUnit && q.lesson === selectedLesson));

  const theme = themeColors[settings.theme];

  return (
    <div className={`h-screen ${theme.bg} ${theme.text} selection:bg-indigo-500/20 font-sans overflow-hidden flex flex-col relative`}>
      {loading && (
        <div className="fixed top-14 inset-x-0 bottom-0 z-[9999] bg-[#0c061a]/80 backdrop-blur-2xl flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full max-w-lg px-6 flex flex-col items-center gap-6">
            <video
              src="/logo-animation.mp4"
              autoPlay
              muted
              playsInline
              className="w-64 h-64 rounded-3xl object-cover shadow-[0_0_50px_rgba(130,90,240,0.25)] border border-white/5"
            />
            <div className="flex flex-col items-center gap-1.5 animate-pulse mt-4">
              <span className="text-white text-lg font-black tracking-widest uppercase">DUSBANKASI</span>
              <span className="text-zinc-400 text-xs font-semibold font-medium">Sistem ve sorular hazırlanıyor...</span>
            </div>
          </div>
        </div>
      )}
      {/* On-demand soru yüklenirken mini overlay */}
      {contentLoading && (
        <div className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className={`${theme.card} rounded-2xl px-8 py-6 flex flex-col items-center gap-4 shadow-2xl border border-indigo-500/20`}>
            <CircleNotch size={36} weight="thin" className="animate-spin text-indigo-400" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-bold">Sorular hazırlanıyor</span>
              <span className={`${theme.subtext} text-xs`}>İçerik önbellekten veya ağdan yükleniyor…</span>
            </div>
          </div>
        </div>
      )}
      <header className={`${theme.headerBg} backdrop-blur-2xl border-b ${theme.border} z-50 shrink-0`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer group" onClick={handleGoBack}>
            {appState !== 'select-lesson' && (
              <ArrowLeft size={20} strokeWidth={2} className="text-indigo-400 group-hover:-translate-x-0.5 transition-transform" />
            )}
            <Logo />
            <h1 className="text-xl font-black tracking-tighter hidden lg:block text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">DUSBANKASI<sup className="text-[10px] font-bold text-zinc-300 ml-0.5">®</sup></h1>
          </div>
          
          <CountdownWidget />
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleSyncStats}
              className={`p-2 rounded-xl transition-all ${syncStatus === 'syncing' ? 'text-indigo-400 bg-indigo-500/10 animate-pulse' : `${theme.subtext} hover:bg-white/[0.06]`}`}
              title="Bulut Sync (Veri Yedekle)"
              disabled={syncStatus === 'syncing'}
            >
              <ArrowsClockwise size={18} weight="thin" className={syncStatus === 'syncing' ? 'animate-spin' : ''} />
            </button>
            <button
              onClick={() => setAppState('analytics')}
              className={`p-2 rounded-xl transition-all ${appState === 'analytics' ? 'text-indigo-400 bg-indigo-500/10' : `${theme.subtext} hover:bg-white/[0.06]`}`}
              title="İstatistikler"
            >
              <ChartBar size={18} weight="thin" />
            </button>
            <button
              onClick={() => setAppState('error-analysis')}
              className={`p-2 rounded-xl transition-all ${appState === 'error-analysis' ? 'text-red-400 bg-red-500/10' : `${theme.subtext} hover:bg-white/[0.06]`}`}
              title="Hata Analizi"
            >
              <Warning size={18} weight="thin" />
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className={`p-2 rounded-xl transition-all ${theme.subtext} hover:bg-white/[0.06]`}
              title="Ayarlar"
            >
              <Gear size={18} weight="thin" />
            </button>
            <button
              onClick={() => setShowAuth(true)}
              className={`p-2 rounded-xl transition-all ${user ? 'text-indigo-400 hover:bg-indigo-500/10' : `${theme.subtext} hover:bg-white/[0.06]`}`}
              title={user ? (user.email ?? 'Hesabım') : 'Giriş Yap'}
            >
              {user && user.user_metadata?.avatar_url ? (
                <img
                  src={user.user_metadata.avatar_url as string}
                  className="w-5 h-5 rounded-full object-cover"
                  alt="Profil"
                />
              ) : (
                <UserCircle size={18} />
              )}
            </button>
            {appState === 'select-unit' && (
              <button onClick={() => setAppState('select-lesson')} className="btn btn-secondary btn-sm ml-1">
                <CaretLeft size={14} weight="thin" /> Dersler
              </button>
            )}
            {appState === 'select-highyield-unit' && (
              <button onClick={() => { setIsHighYieldMode(false); setAppState('select-lesson'); }} className="btn btn-secondary btn-sm ml-1">
                <CaretLeft size={14} weight="thin" /> Ana Menü
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto w-full max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="min-h-full py-5 flex flex-col">
          {appState === 'import' ? (
            <ImportView onDone={handleImportDone} theme={theme} />
          ) : appState === 'add-question' ? (
            <AddQuestionView questions={questions} onDone={handleImportDone} theme={theme} />
          ) : loading ? (
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                  <CircleNotch size={24} weight="thin" className="animate-spin text-indigo-400" />
                </div>
              </div>
              <p className={`${theme.subtext} text-sm font-medium`}>Sorular yükleniyor…</p>
            </div>
          ) : loadError ? (
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                <WarningCircle size={24} weight="thin" className="text-red-400" />
              </div>
              <p className="text-red-400 text-sm font-bold">Bağlantı Hatası</p>
              <p className={`${theme.subtext} text-xs max-w-sm text-center`}>{loadError}</p>
              <button onClick={() => loadQuestions()} className="btn btn-secondary btn-sm mt-2">Tekrar Dene</button>
            </div>
          ) : appState === 'analytics' ? (
            // A1: high-yield sorular ayrı on-demand modunda — normal bankTotal hesabını
            // bozmamak için istatistik ekranlarına high-yield dışı soru listesi gönderilir.
            <StatisticsView key={statsVersion} questions={questions.filter(q => q.quality_flag !== 'high_yield')} theme={theme} />
          ) : appState === 'error-analysis' ? (
          <ErrorAnalyticsView
            key={statsVersion}
            questions={questions.filter(q => q.quality_flag !== 'high_yield')}
            stats={loadAllStats()}
            onStartWeakUnit={async (lesson, unit) => {
              const unitSkeletons = questions.filter(q => q.unit === unit && q.lesson === lesson);
              try {
                setContentLoading(true);
                const rows = await fetchQuestionsByIds(unitSkeletons.map(s => s.id));
                setSelectedLesson(lesson);
                setSelectedUnit(unit);
                setUnitQuestions(rows.map(rowToQuestion));
                setMode('quiz');
                setAppState('quiz');
              } catch (e) {
                showAlert('Sorular yüklenemedi: ' + errMsg(e), 'Hata');
              } finally {
                setContentLoading(false);
              }
            }}
            theme={theme}
          />
          ) : appState === 'simulation-setup' ? (
            <SimulationSetup
              questions={questions}
              onStart={async (qs, totalSecs) => {
                // qs: buildSimulationPool'un döndürdüğü Question[] (skeleton cast ile geldi)
                // On-demand: sadece seçilen soruların tam metnini çek
                try {
                  setContentLoading(true);
                  const ids = qs.map(q => q.id);
                  const rows = await fetchQuestionsByIds(ids);
                  const fullQs = ids.map(id => rows.find(r => r.id === id)).filter(Boolean).map(r => rowToQuestion(r!));
                  setExamQuestions(fullQs);
                  setMode('exam');
                  setSimResult(null);
                  setSimTotalSeconds(totalSecs);
                  setAppState('quiz');
                } catch (e) {
                  showAlert('Simülasyon soruları yüklenemedi: ' + errMsg(e), 'Hata');
                } finally {
                  setContentLoading(false);
                }
              }}
              onCancel={() => setAppState('select-lesson')}
              theme={theme}
            />
          ) : appState === 'simulation-result' && simResult ? (
            <SimulationResultView
              details={simResult.details}
              totalSeconds={simResult.totalSeconds}
              usedSeconds={simResult.usedSeconds}
              onRestart={() => { setSimResult(null); setAppState('select-lesson'); }}
              onRetryIncorrect={() => {
                const incorrectQs = simResult.details
                  .filter(d => d.state === 'incorrect')
                  .map(d => d.question);
                setExamQuestions(incorrectQs);
                setMode('exam');
                setSimResult(null);
                setAppState('quiz');
              }}
              theme={theme}
            />
          ) : appState === 'select-lesson' ? (
            <LessonSelection
              questions={questions}
              lessons={availableLessons}
              onSelect={handleLessonSelect}
              totalQuestions={questions.length}
              onDelete={handleDeleteLesson}
              onRename={handleRenameLesson}
              onDenemeClick={() => setAppState('select-deneme')}
              onFavoritesClick={() => setAppState('select-favorites')}
              hasResume={!!resumeSessionData}
              resumeInfo={resumeSessionData ? {
                answeredCount: resumeSessionData.answers.length,
                totalCount: resumeSessionData.questions.length,
                remaining: resumeSessionData.questions.length - resumeSessionData.answers.length
              } : null}
              onResumeClick={handleResumeSession}
              onResumeClear={handleClearSession}
              favoritesCount={questions.filter(q => q.is_favorite).length}
              weakCount={getWeakQuestionIds().length}
              onWeakClick={handleWeakQuestionsClick}
              onSimulationClick={handleSimulationClick}
              onDailyPlanClick={() => setAppState('daily-plan')}
              onDailyExamClick={handleDailyExamStart}
              dailyExamStatus={
                !user ? 'no-user' :
                (todaysDailyExam === 'loading' || isSessionLoading) ? 'loading' :
                todaysDailyExam === null ? 'not-ready' :
                {
                  dayNumber: (todaysDailyExam as DailyExamRow).day_number,
                  questionCount: (todaysDailyExam as DailyExamRow).question_ids.length,
                  resumeAt: (resumeSessionData?.dailyExamId === (todaysDailyExam as DailyExamRow).id && (resumeSessionData?.answers.length ?? 0) > 0)
                    ? resumeSessionData!.answers.length
                    : undefined,
                }
              }
              onSmartStudyClick={async () => {
                try {
                  setContentLoading(true);
                  const queue = buildSmartQueue(questions as any, loadAllStats(), { limit: 40 });
                  const ids = queue.questions.map((s: QuestionSkeleton) => s.id);
                  const rows = await fetchQuestionsByIds(ids);
                  const fullQs = ids.map(id => rows.find(r => r.id === id)).filter(Boolean).map(r => rowToQuestion(r!));
                  setExamQuestions(fullQs);
                  setMode('exam');
                  setAppState('smart-study');
                } catch (e) {
                  showAlert('Akıllı çalışma soruları yüklenemedi: ' + errMsg(e), 'Hata');
                } finally {
                  setContentLoading(false);
                }
              }}
              onHighYieldClick={async () => {
                if (hyLoading) return;
                const existing = questions.filter(q => q.quality_flag === 'high_yield');
                if (existing.length > 0) {
                  setIsHighYieldMode(true);
                  setAppState('select-highyield-unit');
                  return;
                }
                setHyLoading(true);
                try {
                  await loadHighYield();
                  setIsHighYieldMode(true);
                  setAppState('select-highyield-unit');
                } catch {
                  showAlert('High-yield sorular yüklenemedi. İnternet bağlantınızı kontrol edin.', 'Hata');
                } finally {
                  setHyLoading(false);
                }
              }}
              highYieldCount={questions.filter(q => q.quality_flag === 'high_yield').length}
              hyLoading={hyLoading}
              theme={theme}
            />
          ) : appState === 'select-highyield-unit' ? (
            <HighYieldUnitSelection
              questions={questions}
              theme={theme}
              onSelect={async (lesson, unit) => {
                const hySkeletons = questions.filter(q => q.quality_flag === 'high_yield' && q.lesson === lesson && q.unit === unit);
                try {
                  setContentLoading(true);
                  const rows = await fetchQuestionsByIds(hySkeletons.map(s => s.id));
                  setSelectedUnit(unit);
                  setExamQuestions(fisherYates(rows.map(rowToQuestion)));
                  setMode('exam');
                  setAppState('quiz');
                } catch (e) {
                  showAlert('High-yield sorular yüklenemedi: ' + errMsg(e), 'Hata');
                } finally {
                  setContentLoading(false);
                }
              }}
              onSelectAll={async () => {
                const hySkeletons = questions.filter(q => q.quality_flag === 'high_yield');
                try {
                  setContentLoading(true);
                  const rows = await fetchQuestionsByIds(hySkeletons.map(s => s.id));
                  setSelectedUnit('Tümü');
                  setExamQuestions(fisherYates(rows.map(rowToQuestion)));
                  setMode('exam');
                  setAppState('quiz');
                } catch (e) {
                  showAlert('High-yield sorular yüklenemedi: ' + errMsg(e), 'Hata');
                } finally {
                  setContentLoading(false);
                }
              }}
            />
          ) : appState === 'source-books' ? (
            <SourceBooksView questions={questions} onBack={() => setAppState('select-lesson')} theme={theme} />
          ) : appState === 'select-deneme' ? (
            <DenemeSelection questions={questions} onNext={(units) => { setExamUnits(units); setIsFavoritesExam(false); setAppState('select-deneme-amount'); }} onCancel={() => setAppState('select-lesson')} isFavoritesMode={false} theme={theme} />
          ) : appState === 'select-favorites' ? (
            <DenemeSelection questions={questions.filter(q => q.is_favorite)} onNext={(units) => { setExamUnits(units); setIsFavoritesExam(true); setAppState('select-deneme-amount'); }} onCancel={() => setAppState('select-lesson')} isFavoritesMode={true} theme={theme} />
          ) : appState === 'select-deneme-amount' ? (
            <DenemeAmountSelection selectedUnits={examUnits} questions={isFavoritesExam ? questions.filter(q => q.is_favorite) : questions} loading={examLoading} onStart={handleStartExam} onCancel={() => setAppState('select-deneme')} theme={theme} />
          ) : appState === 'select-unit' ? (
            <UnitSelection 
              lesson={selectedLesson} 
              units={unitsForLesson} 
              questions={questions}
              onSelect={handleUnitSelect} 
              onDelete={handleDeleteUnit} 
              onRename={handleRenameUnit} 
              onExportPDF={handleExportPDF} 
              theme={theme} 
            />
          ) : appState === 'quiz' ? (
            <QuizView
              mode={mode}
              unit={isHighYieldMode ? `High-Yield — ${selectedUnit}` : mode === 'exam' ? (simTotalSeconds ? 'DUS Simülasyonu' : 'Deneme Sınavı') : selectedUnit}
              questions={activeQuestions}
              initialSession={mode === 'exam' ? resumeSessionData : null}
              onComplete={handleComplete}
              onDeleteQuestion={handleDeleteQuestion}
              onFinishEarly={handleComplete}
              onToggleFavorite={handleToggleFavorite}
              onEditQuestion={setEditingQuestion}
              onReportQuestion={setReportingQuestion}
              onSaveSession={(session: ActiveSessionInfo) => {
                saveResumableSession(session);
              }}
              timedSeconds={simTotalSeconds ?? undefined}
              onSimulationComplete={(details, usedSecs) => {
                if (simTotalSeconds == null) {
                  console.error('Simülasyon süresi alınamadı');
                  return;
                }
                const total = simTotalSeconds;
                setSimTotalSeconds(null);
                setSimResult({ details: details as SimAnswerDetail[], totalSeconds: total, usedSeconds: usedSecs });
                setAppState('simulation-result');
              }}
              onExportPDF={handleExportPDF}
              theme={theme}
              settings={settings}
              dailyExamId={isDailyExamSession ? activeDailyExamId : undefined}
            />
          ) : appState === 'result' ? (
            <ResultView stats={quizStats} onRestart={handleReturnToHome} onRetryIncorrect={handleRetryIncorrect} onExportPDF={handleExportPDF} theme={theme} />
          ) : appState === 'daily-plan' ? (
            <DailyPlanView
              questions={questions}
              stats={loadAllStats()}
              weakCount={getWeakQuestionIds().length}
              activity={getRecentActivity(90)}
              onStartWeakUnit={(lesson, unit) => {
                setSelectedLesson(lesson);
                setSelectedUnit(unit);
                setUnitQuestions(buildUnitQueue(questions, lesson, unit, loadAllStats()));
                setMode('quiz');
                setAppState('quiz');
              }}
              onStartSmartStudy={() => {
                const queue = buildSmartQueue(questions, loadAllStats(), { limit: 40 });
                setExamQuestions(queue.questions);
                setMode('exam');
                setAppState('smart-study');
              }}
              theme={theme}
            />
          ) : appState === 'smart-study' ? (
            <QuizView
              mode="exam"
              unit="Akıllı Çalışma"
              questions={examQuestions}
              initialSession={resumeSessionData}
              onComplete={handleComplete}
              onDeleteQuestion={handleDeleteQuestion}
              onFinishEarly={handleComplete}
              onToggleFavorite={handleToggleFavorite}
              onEditQuestion={setEditingQuestion}
              onReportQuestion={setReportingQuestion}
              onSaveSession={(session: ActiveSessionInfo) => {
                saveResumableSession(session);
              }}
              onExportPDF={handleExportPDF}
              theme={theme}
              settings={settings}
            />
          ) : null}
        </div>
      </main>

      {editingQuestion && <EditModal question={editingQuestion} onSave={handleSaveEdit} onClose={() => setEditingQuestion(null)} theme={theme} />}
      {reportingQuestion && <ReportModal questionId={reportingQuestion.id} onSave={handleSaveReport} onClose={() => setReportingQuestion(null)} theme={theme} />}
      {showSettings && <SettingsModal settings={settings} setSettings={setSettings} onClose={() => setShowSettings(false)} theme={theme} onExport={handleExport} onImport={() => { setAppState('import'); setShowSettings(false); }} onAddQuestion={() => { setAppState('add-question'); setShowSettings(false); }} onSourceBooks={() => { setAppState('source-books'); setShowSettings(false); }} onResetStats={handleResetStats} />}
      {showAuth && <AuthModal user={user} onClose={() => setShowAuth(false)} onSignOut={signOut} theme={theme} />}
      
      {dialog && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm anim-fade-in">
          <div className={`${theme.cardSolid} border ${theme.border} w-full max-w-sm rounded-[1.5rem] shadow-2xl overflow-hidden flex flex-col`}>
            <div className="p-6">
              <h3 className={`text-lg font-bold mb-2 ${theme.text}`}>{dialog.title || 'Uyarı'}</h3>
              <p className={`text-sm ${theme.subtext} leading-relaxed`}>{dialog.message}</p>
              {dialog.type === 'prompt' && (
                <input
                  type="text"
                  autoFocus
                  defaultValue={dialog.defaultValue}
                  className={`mt-4 w-full ${theme.inputBg} border ${theme.border} rounded-xl px-4 py-2.5 text-sm ${theme.text} focus:outline-none focus:border-indigo-500`}
                  onKeyDown={e => {
                    if (e.key === 'Enter') dialog.onConfirm((e.target as HTMLInputElement).value);
                    if (e.key === 'Escape' && dialog.onCancel) dialog.onCancel();
                  }}
                  id="dialog-prompt-input"
                />
              )}
            </div>
            <div className={`p-2 bg-black/10 border-t ${theme.border} flex gap-2 justify-end`}>
              {dialog.type !== 'alert' && (
                <button
                  onClick={dialog.onCancel}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors hover:${theme.inputBg} ${theme.text}`}
                >
                  İptal
                </button>
              )}
              <button
                onClick={() => {
                  const val = dialog.type === 'prompt' ? (document.getElementById('dialog-prompt-input') as HTMLInputElement).value : undefined;
                  dialog.onConfirm(val);
                }}
                className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold shadow-md transition-colors"
              >
                {dialog.type === 'alert' ? 'Tamam' : 'Onayla'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type DailyExamStatus = 'loading' | 'no-user' | 'not-ready' | { dayNumber: number; questionCount: number; resumeAt?: number };

function LessonSelection({ lessons, questions, onSelect, totalQuestions, onDelete, onRename, onDenemeClick, onFavoritesClick, hasResume, resumeInfo, onResumeClick, onResumeClear, favoritesCount, weakCount, onWeakClick, onSimulationClick, onDailyPlanClick, onDailyExamClick, dailyExamStatus, onSmartStudyClick, onHighYieldClick, highYieldCount, hyLoading, theme }: { lessons: string[]; questions: Question[]; onSelect: (l: string) => void; totalQuestions: number; onDelete: (l: string, e: React.MouseEvent) => void; onRename: (l: string, e: React.MouseEvent) => void; onDenemeClick: () => void; onFavoritesClick: () => void; hasResume: boolean; resumeInfo: { answeredCount: number; totalCount: number; remaining: number } | null; onResumeClick: () => void; onResumeClear: () => void; favoritesCount: number; weakCount: number; onWeakClick: () => void; onSimulationClick: () => void; onDailyPlanClick: () => void; onDailyExamClick: () => void; dailyExamStatus: DailyExamStatus; onSmartStudyClick: () => void; onHighYieldClick: () => void; highYieldCount: number; hyLoading?: boolean; theme: Theme }) {
  return (
    <div className="anim-slide-up w-full">
      <div className="mb-10 pl-2">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-2">
          Hoş Geldin<span className="text-[color:var(--color-accent)]">.</span>
        </h2>
        <p className={`${theme.subtext} text-sm font-medium tracking-wide`}>
          {totalQuestions === 0 ? 'Henüz soru yok — Ayarlar > Import ile başla.' : `${totalQuestions} soru hazır. Seçim yapın ve odaklanın.`}
        </p>
      </div>

      {hasResume && resumeInfo && (
        <div className={`mb-6 p-4 ${theme.cardGlass} rounded-2xl flex items-center justify-between gap-4 anim-fade-in border-l-2 border-indigo-400`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400">
              <ArrowCounterClockwise size={18} weight="thin" className="anim-spin-slow" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Yarım Kalan Deneme</h3>
              <p className={`${theme.subtext} text-xs`}>
                {resumeInfo.answeredCount} / {resumeInfo.totalCount} — {resumeInfo.remaining} soru kaldı
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button onClick={onResumeClear} className="btn btn-ghost btn-sm opacity-50 hover:opacity-100" title="Sil"><Trash size={14} weight="thin" /></button>
            <button onClick={onResumeClick} className="btn btn-primary btn-sm">DEVAM ET</button>
          </div>
        </div>
      )}

      {totalQuestions > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-10 stagger-children bento-grid">
          
          <button onClick={onDailyPlanClick} className={`stagger-item col-span-2 md:col-span-2 lg:col-span-3 row-span-2 ${theme.cardGlass} rounded-[2rem] p-6 sm:p-8 text-left card-hover group border border-orange-500/10 hover:border-orange-500/30 overflow-hidden relative`}>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full"></div>
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 lg:mb-10 group-hover:scale-110 transition-transform">
              <Calendar size={24} className="text-orange-400" />
            </div>
            <div className="text-sm font-bold opacity-60 mb-1 uppercase tracking-wider">Bugün</div>
            <div className="text-3xl sm:text-4xl font-black text-orange-400 mb-1 tracking-tight">Günlük Plan</div>
            <div className={`${theme.subtext} text-xs mt-1`}>Zayıf konularınız ve müfredat ilerlemesi</div>
          </button>

          <button onClick={onDenemeClick} className={`stagger-item col-span-2 md:col-span-2 lg:col-span-3 row-span-2 ${theme.cardGlass} rounded-[2rem] p-6 sm:p-8 text-left card-hover group border border-rose-500/10 hover:border-rose-500/30 overflow-hidden relative`}>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-rose-500/20 blur-3xl rounded-full"></div>
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6 lg:mb-10 group-hover:scale-110 transition-transform">
              <Target size={24} className="text-rose-400" />
            </div>
            <div className="text-sm font-bold opacity-60 mb-1 uppercase tracking-wider">Odaklan</div>
            <div className="text-3xl sm:text-4xl font-black text-rose-400 mb-1 tracking-tight">Deneme Modu</div>
            <div className={`${theme.subtext} text-xs mt-1`}>Karışık sorular ile kendini sına</div>
          </button>

          <button
            onClick={typeof dailyExamStatus === 'object' ? onDailyExamClick : undefined}
            disabled={dailyExamStatus === 'loading' || dailyExamStatus === 'no-user' || dailyExamStatus === 'not-ready'}
            className={`stagger-item col-span-2 md:col-span-2 lg:col-span-3 row-span-2 ${theme.cardGlass} rounded-[2rem] p-6 sm:p-8 text-left group border overflow-hidden relative transition-all
              ${typeof dailyExamStatus === 'object' ? 'card-hover border-cyan-500/20 hover:border-cyan-500/40 cursor-pointer' : 'border-cyan-500/10 opacity-70 cursor-default'}`}
          >
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <div className={`w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 lg:mb-10 transition-transform ${typeof dailyExamStatus === 'object' ? 'group-hover:scale-110' : ''}`}>
              {dailyExamStatus === 'loading'
                ? <CircleNotch size={24} weight="thin" className="text-cyan-400 animate-spin" />
                : <BookOpen size={24} className="text-cyan-400" />
              }
            </div>
            <div className="text-sm font-bold opacity-60 mb-1 uppercase tracking-wider">Bugünün Konusu</div>
            {dailyExamStatus === 'loading' && (
              <>
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-1 tracking-tight">Günün Denemesi</div>
                <div className={`${theme.subtext} text-xs mt-1`}>Yükleniyor…</div>
              </>
            )}
            {dailyExamStatus === 'no-user' && (
              <>
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-1 tracking-tight">Günün Denemesi</div>
                <div className={`${theme.subtext} text-xs mt-1`}>Kullanmak için giriş yapın</div>
              </>
            )}
            {dailyExamStatus === 'not-ready' && (
              <>
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-1 tracking-tight">Günün Denemesi</div>
                <div className={`${theme.subtext} text-xs mt-1`}>Henüz hazırlanmadı — Atlas'a konularını söyle</div>
              </>
            )}
            {typeof dailyExamStatus === 'object' && (
              <>
                <div className="text-lg font-black text-cyan-300 mb-0.5">{dailyExamStatus.dayNumber}. Günün Denemesi</div>
                {dailyExamStatus.resumeAt !== undefined ? (
                  <>
                    <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-1 tracking-tight">
                      {dailyExamStatus.resumeAt} / {dailyExamStatus.questionCount}
                    </div>
                    <div className={`${theme.subtext} text-xs mt-1`}>
                      {dailyExamStatus.questionCount - dailyExamStatus.resumeAt} soru kaldı · Devam et
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-1 tracking-tight">{dailyExamStatus.questionCount} Soru</div>
                    <div className={`${theme.subtext} text-xs mt-1`}>Hazır · Başlatmak için tıkla</div>
                  </>
                )}
              </>
            )}
          </button>

          {weakCount > 0 && (
            <button onClick={onWeakClick} className={`stagger-item col-span-1 md:col-span-2 lg:col-span-2 ${theme.cardGlass} rounded-[1.5rem] p-5 text-left card-hover group border border-red-500/10 hover:border-red-500/30 transition-all`}>
              <div className="flex justify-between items-center mb-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Warning size={20} weight="thin" className="text-red-400" />
                </div>
                <span className="text-2xl font-black text-red-400">{weakCount}</span>
              </div>
              <div className="text-sm font-bold mb-0.5">Zayıf Halka</div>
              <div className={`${theme.subtext} text-[10px]`}>%50 altı başarı oranı</div>
            </button>
          )}

          <button onClick={onSmartStudyClick} className={`stagger-item col-span-1 md:col-span-2 lg:col-span-2 ${theme.cardGlass} rounded-[1.5rem] p-5 text-left card-hover group border border-emerald-500/10 hover:border-emerald-500/30 transition-all`}>
             <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
               <Brain size={20} className="text-emerald-400" />
             </div>
             <div className="text-sm font-bold mb-0.5">Akıllı Çalışma</div>
             <div className={`${theme.subtext} text-[10px]`}>Motor destekli seçim</div>
          </button>

          <button onClick={onHighYieldClick} disabled={hyLoading} className={`stagger-item col-span-1 md:col-span-2 lg:col-span-2 ${theme.cardGlass} rounded-[1.5rem] p-5 text-left card-hover group border border-fuchsia-500/10 hover:border-fuchsia-500/30 transition-all disabled:opacity-70 disabled:cursor-wait`}>
             <div className="flex justify-between items-center mb-3">
               <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                 {hyLoading
                   ? <CircleNotch size={20} className="text-fuchsia-400 animate-spin" />
                   : <Lightning size={20} weight="fill" className="text-fuchsia-400" />
                 }
               </div>
               {highYieldCount > 0 && (
                 <span className="text-2xl font-black text-fuchsia-400">{highYieldCount}</span>
               )}
             </div>
             <div className="text-sm font-bold mb-0.5">High-Yield</div>
             <div className={`${theme.subtext} text-[10px]`}>{hyLoading ? 'Sorular yükleniyor…' : 'En iyi sorularla çalış'}</div>
          </button>

          <button onClick={onSimulationClick} className={`stagger-item col-span-1 md:col-span-2 lg:col-span-2 ${theme.cardGlass} rounded-[1.5rem] p-5 text-left card-hover group border border-sky-500/10 hover:border-sky-500/30 transition-all`}>
            <div className="flex justify-between items-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ClipboardText size={20} weight="thin" className="text-sky-400" />
              </div>
            </div>
            <div className="text-sm font-bold mb-0.5">DUS Simülasyon</div>
            <div className={`${theme.subtext} text-[10px]`}>Optik form ile deneme</div>
          </button>

          <button onClick={onFavoritesClick} className={`stagger-item col-span-1 md:col-span-2 lg:col-span-2 ${theme.cardGlass} rounded-[1.5rem] p-5 text-left card-hover group border border-amber-500/10 hover:border-amber-500/30 transition-all`}>
            <div className="flex justify-between items-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star size={20} className="text-amber-400" />
              </div>
              <span className="text-2xl font-black text-amber-400">{favoritesCount}</span>
            </div>
            <div className="text-sm font-bold mb-0.5">Favoriler</div>
            <div className={`${theme.subtext} text-[10px]`}>Yıldızlanan sorular</div>
          </button>

          <button
            onClick={() => {
              const el = document.querySelector('button[title="İstatistikler"]');
              if (el) (el as HTMLElement).click();
            }}
            className={`stagger-item col-span-2 md:col-span-2 lg:col-span-2 ${theme.cardGlass} rounded-[1.5rem] p-5 text-left card-hover group border border-indigo-500/10 hover:border-indigo-500/30 transition-all`}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ChartBar size={20} weight="thin" className="text-indigo-400" />
              </div>
            </div>
            <div className="text-sm font-bold mb-0.5">İstatistikler</div>
            <div className={`${theme.subtext} text-[10px]`}>Gelişim analizi</div>
          </button>
        </div>
      )}

      {lessons.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
          <div className={`w-16 h-16 rounded-2xl ${theme.cardGlass} flex items-center justify-center`}>
            <Upload size={24} className={theme.subtext} />
          </div>
          <div>
            <p className="font-bold text-sm mb-1">Henüz soru yüklenmedi</p>
            <p className={`${theme.subtext} text-xs`}>Ayarlar → Import ile başlayın</p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-30">Dersler</h3>
            <div className={`flex-1 h-px ${theme.divider} border-t`} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {lessons.map((lesson) => {
              const l_qs = questions.filter(q => q.lesson === lesson);
              const { total, solved } = getUnitProgress(l_qs.map(q => q.id));
              const pct = total > 0 ? Math.round((solved / total) * 100) : 0;
              
              const isRad = lesson.toLowerCase().includes('radyoloji');
              const isPat = lesson.toLowerCase().includes('patoloji');
              const isPro = lesson.toLowerCase().includes('protez');
              const isHis = lesson.toLowerCase().includes('histoloji');
              const isFiz = lesson.toLowerCase().includes('fizyoloji');
              const isPer = lesson.toLowerCase().includes('periodontoloji');
              const isEnd = lesson.toLowerCase().includes('endodonti');
              const isOrt = lesson.toLowerCase().includes('ortodonti');
              const IconComp = isRad ? Lightning : isPat ? Skull : isPro ? Stack : isHis ? Microscope : isFiz ? Heartbeat : isPer ? PaintBrush : isEnd ? Syringe : isOrt ? Link : SquaresFour;

              return (
                <div key={lesson} onClick={() => onSelect(lesson)} className={`stagger-item cursor-pointer group relative flex flex-col items-start p-6 ${theme.cardSolid} ${theme.cardHover} rounded-[1.5rem] transition-all overflow-hidden text-left border border-transparent hover:border-indigo-500/30`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex justify-between items-start w-full relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <IconComp size={20} className="text-indigo-400" />
                    </div>
                    <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                      <div onClick={(e) => onRename(lesson, e)} className="p-2 rounded-xl hover:bg-white/10 text-white/40 hover:text-white transition-colors backdrop-blur-md shadow-sm bg-black/20"><PencilSimple size={14} weight="thin" /></div>
                      <div onClick={(e) => onDelete(lesson, e)} className="p-2 rounded-xl hover:bg-red-500/20 text-white/40 hover:text-red-400 transition-colors backdrop-blur-md shadow-sm bg-black/20"><Trash size={14} weight="thin" /></div>
                    </div>
                  </div>
                  <h3 className="text-lg font-black tracking-tight mb-3 max-w-full truncate pr-2 relative z-10">{lesson}</h3>
                  <div className="w-full mt-auto relative z-10 space-y-1.5">
                    <div className="flex justify-between items-end">
                      <span className={`${theme.subtext} text-[10px] font-bold tracking-widest uppercase`}>Çözülmüş / Toplam</span>
                      <span className="text-xs font-bold font-mono">{solved} / {total}</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/20 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${Math.max(1, pct)}%`, backgroundColor: `hsl(${pct * 1.2}, 90%, 50%)` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

function HighYieldUnitSelection({ questions, theme, onSelect, onSelectAll }: {
  questions: Question[];
  theme: Theme;
  onSelect: (lesson: string, unit: string) => void;
  onSelectAll: () => void;
}) {
  const hyQs = questions.filter(q => q.quality_flag === 'high_yield');

  const lessonMap = new Map<string, Map<string, number>>();
  for (const q of hyQs) {
    if (!lessonMap.has(q.lesson)) lessonMap.set(q.lesson, new Map());
    const unitMap = lessonMap.get(q.lesson)!;
    unitMap.set(q.unit, (unitMap.get(q.unit) || 0) + 1);
  }
  const lessons = Array.from(lessonMap.entries()).sort((a, b) => a[0].localeCompare(b[0], 'tr'));

  return (
    <div className="anim-slide-up max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-fuchsia-500/15 flex items-center justify-center">
            <Star size={18} className="text-fuchsia-400" weight="fill" />
          </div>
          <div>
            <h2 className="text-xl font-black tracking-tight">High-Yield Çalış</h2>
            <p className={`${theme.subtext} text-xs font-medium`}>{hyQs.length} soru · {lessons.length} ders</p>
          </div>
        </div>
        <button
          onClick={onSelectAll}
          className="btn btn-sm bg-fuchsia-500/15 text-fuchsia-400 border border-fuchsia-500/20 hover:bg-fuchsia-500/25 transition-colors"
        >
          <Star size={13} weight="fill" /> Tümünü Başlat
        </button>
      </div>

      <div className="space-y-5 stagger-children">
        {lessons.map(([lesson, unitMap]) => (
          <div key={lesson} className="stagger-item">
            <p className={`${theme.subtext} text-[10px] font-black uppercase tracking-widest mb-2 px-1`}>{lesson}</p>
            <div className="space-y-1.5">
              {Array.from(unitMap.entries())
                .sort((a, b) => a[0].localeCompare(b[0], 'tr'))
                .map(([unit, count]) => (
                  <button
                    key={unit}
                    onClick={() => onSelect(lesson, unit)}
                    className={`w-full flex items-center justify-between p-3.5 ${theme.card} ${theme.cardHover} rounded-2xl transition-all text-left group card-hover`}
                  >
                    <span className="text-sm font-bold group-hover:translate-x-0.5 transition-transform truncate pr-4">{unit}</span>
                    <span className="badge bg-fuchsia-500/15 text-fuchsia-400 border border-fuchsia-500/20 shrink-0">{count} soru</span>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UnitSelection({ lesson, units, questions, onSelect, onDelete, onRename, onExportPDF, theme }: { lesson: string; units: string[]; questions: Question[]; onSelect: (u: string) => void; onDelete: (u: string, e: React.MouseEvent) => void; onRename: (u: string, e: React.MouseEvent) => void; onExportPDF: (selection: any[], title: string) => void; theme: Theme }) {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'progress' | 'count'>('name');

  const unitData = units.map(unit => {
    const unitQs = questions.filter(q => q.lesson === lesson && q.unit === unit);
    const progress = getUnitProgress(unitQs.map(q => q.id));
    const pct = progress.total > 0 ? Math.round((progress.solved / progress.total) * 100) : 0;
    const acc = progress.solved > 0 ? progress.correct / progress.solved : 0;
    const barColor = acc >= 0.7 ? 'bg-emerald-400' : acc >= 0.3 ? 'bg-amber-400' : pct > 0 ? 'bg-red-400' : 'bg-white/10';
    return { unit, unitQs, progress, pct, barColor };
  });

  const filtered = unitData
    .filter(d => d.unit.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'name') return a.unit.localeCompare(b.unit, 'tr');
      if (sortBy === 'progress') return b.pct - a.pct;
      if (sortBy === 'count') return b.unitQs.length - a.unitQs.length;
      return 0;
    });

  return (
    <div className="anim-slide-up max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center">
            <BookOpen size={18} className="text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xl font-black tracking-tight max-w-md truncate">{lesson}</h2>
            <p className={`${theme.subtext} text-xs font-medium`}>{units.length} ünite</p>
          </div>
        </div>
        <button onClick={() => onExportPDF(questions.filter(q => q.lesson === lesson), `${lesson} Soruları`)} className="btn btn-ghost btn-sm">
          <FileText size={14} /> PDF
        </button>
      </div>

      <div className="flex items-center gap-2.5 mb-4">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Ünite ara..."
          className={`flex-1 ${theme.inputBg} border ${theme.border} rounded-xl px-4 py-2.5 text-sm input-ring placeholder:opacity-30 transition-all`}
        />
        <div className="flex gap-1 shrink-0">
          {(['name', 'progress', 'count'] as const).map(s => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className={`badge transition-all cursor-pointer ${sortBy === s ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/20' : `${theme.inputBg} ${theme.subtext} border border-transparent hover:border-white/10`}`}
            >
              {s === 'name' ? 'İSİM' : s === 'progress' ? 'İLERLEME' : 'SORU'}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2 stagger-children">
        {filtered.length === 0 && (
          <p className={`${theme.subtext} text-sm text-center py-8`}>"{search}" için sonuç bulunamadı.</p>
        )}
        {filtered.map(({ unit, unitQs, pct, barColor }) => (
          <div key={unit} onClick={() => onSelect(unit)} className={`stagger-item cursor-pointer w-full flex items-center justify-between p-4 ${theme.card} ${theme.cardHover} rounded-2xl transition-all text-left group card-hover`}>
            <div className="overflow-hidden pr-4 flex-1">
              <span className="text-sm font-bold group-hover:translate-x-0.5 transition-transform block truncate">{unit}</span>
              <div className="flex items-center gap-3 mt-1.5 w-full">
                <span className={`${theme.subtext} text-[10px] font-bold shrink-0`}>{unitQs.length} soru</span>
                <div className="flex-1 h-1 bg-white/[0.04] rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-1000 ${barColor}`} style={{ width: `${pct}%` }} />
                </div>
                {pct > 0 && <span className={`${theme.subtext} text-[10px] font-bold shrink-0`}>%{pct}</span>}
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div onClick={(e) => { e.stopPropagation(); onExportPDF(unitQs, `${lesson} — ${unit}`); }} className="p-1.5 rounded-lg hover:bg-white/10 text-white/30 hover:text-white transition-colors" title="Ünite PDF İndir"><FileText size={13} /></div>
              <div onClick={(e) => onRename(unit, e)} className="p-1.5 rounded-lg hover:bg-white/10 text-white/30 hover:text-white transition-colors"><PencilSimple size={13} weight="thin" /></div>
              <div onClick={(e) => onDelete(unit, e)} className="p-1.5 rounded-lg hover:bg-red-500/15 text-white/30 hover:text-red-400 transition-colors"><Trash size={13} weight="thin" /></div>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/[0.04] group-hover:bg-indigo-500 transition-all shrink-0 ml-1">
                <CaretRight size={14} weight="thin" className="group-hover:text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DenemeSelection({ questions, onNext, onCancel, isFavoritesMode, theme }: {
  questions: Question[];
  onNext: (units: { lesson: string; unit: string }[]) => void;
  onCancel: () => void;
  isFavoritesMode: boolean;
  theme: Theme;
}) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState('');

  const grouped = questions.reduce((acc, q) => {
    if (!acc[q.lesson]) acc[q.lesson] = new Set<string>();
    acc[q.lesson].add(q.unit);
    return acc;
  }, {} as Record<string, Set<string>>);

  const filteredLessons = Object.entries(grouped).filter(([lesson, unitsSet]) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return lesson.toLowerCase().includes(s) || Array.from(unitsSet).some(u => u.toLowerCase().includes(s));
  });

  const toggleUnit = (l: string, u: string) => {
    const key = `${l}|-|${u}`;
    setSelected(prev => { const n = new Set(prev); if (n.has(key)) n.delete(key); else n.add(key); return n; });
  };
  const toggleLesson = (l: string, us: string[]) => {
    setSelected(prev => {
      const n = new Set(prev);
      const all = us.every(u => n.has(`${l}|-|${u}`));
      us.forEach(u => { if (all) n.delete(`${l}|-|${u}`); else n.add(`${l}|-|${u}`); });
      return n;
    });
  };
  const selectAll = () => {
    const all = new Set<string>();
    filteredLessons.forEach(([lesson, unitsSet]) => Array.from(unitsSet).forEach(u => all.add(`${lesson}|-|${u}`)));
    setSelected(all);
  };
  const clearAll = () => setSelected(new Set());

  const totalSelected = Array.from(selected).reduce((sum, key) => {
    const [lesson, unit] = key.split('|-|');
    return sum + questions.filter(q => q.lesson === lesson && q.unit === unit).length;
  }, 0);

  return (
    <div className="anim-slide-up w-full max-w-2xl mx-auto flex flex-col pb-4" style={{ maxHeight: 'calc(100vh - 120px)' }}>
      <div className="flex items-center justify-between mb-4 shrink-0">
        <div>
          <h2 className="text-xl font-black">{isFavoritesMode ? 'Favoriler — Ünite Seç' : 'Deneme — Ünite Seç'}</h2>
          <p className={`${theme.subtext} text-xs mt-0.5`}>İstediğin ders ve üniteleri seç</p>
        </div>
        <button onClick={onCancel} className="btn btn-ghost btn-sm">İptal</button>
      </div>

      <div className="flex items-center gap-2 mb-3 shrink-0">
        <input
          type="text" value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Ders veya ünite ara…"
          className={`flex-1 ${theme.inputBg} border ${theme.border} rounded-xl px-3 py-2 text-sm input-ring placeholder:opacity-30`}
        />
        <button onClick={selectAll} className="btn btn-ghost btn-sm text-emerald-400 border border-emerald-500/20 shrink-0">Tümü</button>
        <button onClick={clearAll} className="btn btn-ghost btn-sm text-red-400 border border-red-500/20 shrink-0">Temizle</button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
        {filteredLessons.length === 0 && (
          <p className={`${theme.subtext} text-sm text-center py-10`}>Sonuç bulunamadı.</p>
        )}
        {filteredLessons.map(([lesson, unitsSet]) => {
          const units = Array.from(unitsSet).sort((a, b) => a.localeCompare(b, 'tr'));
          const allS = units.every(u => selected.has(`${lesson}|-|${u}`));
          const someS = units.some(u => selected.has(`${lesson}|-|${u}`));
          const lessonCount = questions.filter(q => q.lesson === lesson).length;
          return (
            <div key={lesson} className={`${theme.card} rounded-2xl overflow-hidden`}>
              <div className="p-3.5 flex items-center gap-3 cursor-pointer hover:bg-white/[0.03] transition-all" onClick={() => toggleLesson(lesson, units)}>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border-2 transition-all shrink-0 ${allS ? 'bg-indigo-500 border-indigo-500' : someS ? 'bg-indigo-500/50 border-indigo-500/50' : theme.border}`}>
                  {(allS || someS) && <CheckCircle size={13} weight="thin" />}
                </div>
                <span className="font-bold text-sm flex-1 truncate">{lesson}</span>
                <span className={`${theme.subtext} text-[10px] shrink-0`}>{lessonCount} soru</span>
              </div>
              <div className={`border-t ${theme.divider} bg-black/10 px-1.5 pb-1.5`}>
                {units.map(unit => {
                  const s = selected.has(`${lesson}|-|${unit}`);
                  const unitCount = questions.filter(q => q.lesson === lesson && q.unit === unit).length;
                  return (
                    <div key={unit} onClick={() => toggleUnit(lesson, unit)}
                      className={`p-2.5 pl-9 flex items-center gap-3 cursor-pointer hover:bg-white/[0.03] rounded-xl transition-all ${s ? 'bg-emerald-500/5' : ''}`}>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-all shrink-0 ${s ? 'bg-emerald-500 border-emerald-500' : theme.border}`}>
                        {s && <CheckCircle size={11} weight="thin" className="text-black" />}
                      </div>
                      <span className={`text-xs flex-1 truncate ${s ? 'font-medium' : theme.subtext}`}>{unit}</span>
                      <span className={`${theme.subtext} text-[10px] shrink-0`}>{unitCount}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="shrink-0 mt-4">
        {selected.size > 0 && (
          <p className={`${theme.subtext} text-xs text-center mb-2`}>{selected.size} ünite · {totalSelected} soru seçildi</p>
        )}
        <button
          onClick={() => onNext(Array.from(selected).map(k => ({ lesson: k.split('|-|')[0], unit: k.split('|-|')[1] })))}
          disabled={selected.size === 0}
          className="btn btn-primary btn-lg w-full"
        >
          Soru Sayısına Geç ({selected.size} ünite) <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}


function SimulationSetup({ questions, onStart, onCancel, theme }: {
  questions: Question[];
  onStart: (questions: Question[], totalSeconds: number) => void;
  onCancel: () => void;
  theme: Theme;
}) {
  const [questionCount, setQuestionCount] = useState(Math.min(200, questions.length));
  const [minutes, setMinutes] = useState(150);
  const totalSeconds = minutes * 60;
  const perQuestion = questions.length > 0 ? Math.round(totalSeconds / questionCount) : 0;

  const handleStart = () => {
    const stats = loadAllStats();
    const pool = buildSimulationPool(questions, stats, questionCount);
    onStart(pool, totalSeconds);
  };

  return (
    <div className="anim-scale-in flex-1 flex flex-col items-center justify-center">
      <div className={`${theme.card} w-full max-w-lg p-8 sm:p-10 rounded-2xl ${theme.shadow} relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500 opacity-60" />
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-rose-500/15 flex items-center justify-center">
            <Target size={20} className="text-rose-400" />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight">DUS Simülasyon</h2>
            <p className={`${theme.subtext} text-xs`}>Gerçek sınav koşullarında antrenman</p>
          </div>
        </div>

        <div className="space-y-8 mb-8">
          <div>
            <div className={`${theme.subtext} text-[10px] font-bold uppercase tracking-widest mb-3 text-center`}>SORU SAYISI</div>
            <input 
              type="number"
              min="10"
              max={questions.length}
              value={questionCount || ''}
              onChange={(e) => {
                const val = parseInt(e.target.value) || 0;
                setQuestionCount(Math.min(val, questions.length));
              }}
              onBlur={() => setQuestionCount(c => Math.max(10, c))}
              className="w-full bg-transparent text-5xl font-black mb-4 text-center focus:outline-none focus:text-rose-400 transition-colors"
            />
            <input type="range" min="10" max={Math.min(200, questions.length)} value={questionCount}
              onChange={e => setQuestionCount(Number(e.target.value))} />
            <div className={`flex justify-between text-[10px] font-medium ${theme.subtext} mt-2`}>
              <span>10</span><span>{Math.min(200, questions.length)}</span>
            </div>
          </div>

          <div>
            <div className={`${theme.subtext} text-[10px] font-bold uppercase tracking-widest mb-3`}>SÜRE (DAKİKA)</div>
            <div className="text-4xl font-black mb-4 text-center">{minutes}</div>
            <input type="range" min="30" max="180" step="5" value={minutes}
              onChange={e => setMinutes(Number(e.target.value))} />
            <div className={`flex justify-between text-[10px] font-medium ${theme.subtext} mt-2`}>
              <span>30dk</span><span>180dk (DUS)</span>
            </div>
          </div>

          <div className={`${theme.cardGlass} rounded-xl p-4 text-center`}>
            <div className="text-xl font-black">{perQuestion}s/soru</div>
            <div className={`${theme.subtext} text-[10px] mt-1`}>Soru başına ortalama süre · DUS hedef: &lt;45s</div>
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={onCancel} className="btn btn-secondary btn-lg flex-1">Geri</button>
          <button onClick={handleStart} className="btn btn-primary btn-lg flex-[2]">BAŞLAT</button>
        </div>
      </div>
    </div>
  );
}

function DenemeAmountSelection({ selectedUnits, questions, loading, onStart, onCancel, theme }: {
  selectedUnits: { lesson: string; unit: string }[];
  questions: Question[];
  loading: boolean;
  onStart: (a: number) => void;
  onCancel: () => void;
  theme: Theme;
}) {
  const max = questions.filter(q => selectedUnits.some(su => su.lesson === q.lesson && su.unit === q.unit)).length;
  const [amount, setAmount] = useState(Math.min(20, max));
  useEffect(() => setAmount(prev => Math.min(prev, max)), [max]);

  const perUnit = selectedUnits.length > 0 ? Math.floor(amount / selectedUnits.length) : 0;

  return (
    <div className="anim-scale-in flex-1 flex flex-col items-center justify-center">
      <div className={`${theme.card} w-full max-w-lg p-8 sm:p-10 rounded-2xl ${theme.shadow} relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-emerald-400 opacity-60" />
        <h2 className="text-2xl font-black mb-2 tracking-tight text-center">Soru Sayısı</h2>
        <p className={`${theme.subtext} text-xs text-center mb-8`}>{selectedUnits.length} ünite · {max} soru havuzu</p>
        <div className="mb-8 text-center">
          <input 
            type="number"
            min="1"
            max={max}
            value={amount || ''}
            onChange={(e) => {
              const val = parseInt(e.target.value) || 0;
              setAmount(Math.min(val, max));
            }}
            onBlur={() => setAmount(a => Math.max(1, a))}
            className="w-full bg-transparent text-6xl font-black mb-6 text-center focus:outline-none focus:text-indigo-400 transition-colors"
          />
          <input type="range" min="1" max={max} value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
          <div className={`flex justify-between text-xs font-medium ${theme.subtext} mt-3`}><span>1</span><span>{max}</span></div>
          {selectedUnits.length > 1 && (
            <p className={`${theme.subtext} text-[10px] mt-3`}>Ünite başına ≈ {perUnit} soru (random dağılım)</p>
          )}
        </div>
        <div className="flex gap-3">
          <button onClick={onCancel} className="btn btn-secondary btn-lg flex-1">Geri</button>
          <button onClick={() => onStart(amount)} disabled={loading || max === 0} className="btn btn-primary btn-lg flex-[2]">
            {loading ? <><CircleNotch size={16} weight="thin" className="animate-spin" /> Yükleniyor…</> : 'BAŞLAT'}</button>
        </div>
      </div>
    </div>
  );
}








function ResultView({ stats, onRestart, onRetryIncorrect, onExportPDF, theme }: { stats: QuizStatsType; onRestart: () => void; onRetryIncorrect: (d: AnswerDetail[]) => void; onExportPDF: (questions: Question[], title: string) => void; theme: Theme }) {
  const incorrect = stats.details.filter(d => d.state === 'incorrect');
  const avgTime = Math.round(stats.details.reduce((a, b) => a + (b.timeSpent || 0), 0) / Math.max(1, stats.total));
  return (
    <div className="flex-1 flex flex-col items-center justify-center anim-scale-in max-w-2xl mx-auto w-full">
      <div className={`${theme.card} w-full p-8 rounded-2xl ${theme.shadow} relative`}>
        <h2 className="text-2xl font-black mb-6 text-center">Sınav Analiz Panosu</h2>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className={`p-4 ${theme.cardGlass} rounded-xl text-center`}>
            <div className="text-2xl font-black text-emerald-400">{stats.correct}</div>
            <div className={`${theme.subtext} text-[10px] font-bold uppercase`}>DOĞRU</div>
          </div>
          <div className={`p-4 ${theme.cardGlass} rounded-xl text-center`}>
            <div className="text-2xl font-black text-red-400">{stats.incorrect}</div>
            <div className={`${theme.subtext} text-[10px] font-bold uppercase`}>YANLIŞ</div>
          </div>
          <div className={`p-4 ${theme.cardGlass} rounded-xl text-center`}>
            <div className="text-2xl font-black text-indigo-400">{avgTime}s</div>
            <div className={`${theme.subtext} text-[10px] font-bold uppercase`}>ORT.SÜRE</div>
          </div>
        </div>
        <div className={`space-y-3 mb-8 text-left ${theme.cardGlass} p-5 rounded-xl max-h-56 overflow-y-auto custom-scrollbar`}>
          {stats.details.slice(0, 20).map((d, i) => (
            <div key={i} className={`flex items-center gap-3 py-1 border-b ${theme.divider} last:border-0`}>
              <div className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black ${d.state === 'correct' ? 'bg-emerald-500 text-black' : 'bg-red-500 text-white'}`}>{i + 1}</div>
              <div className="flex-1 text-xs truncate opacity-60">{d.question.question.slice(0, 60)}…</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2.5">
          {incorrect.length > 0 && (
            <button onClick={() => onRetryIncorrect(incorrect)} className="btn btn-danger btn-lg w-full">
              <ArrowCounterClockwise size={16} weight="thin" /> HATALARI TEKRAR ÇÖZ ({incorrect.length})
            </button>
          )}
          <div className="flex gap-2.5">
            <button onClick={onRestart} className="btn btn-primary btn-lg flex-1">ANA SAYFA</button>
            <button onClick={() => onExportPDF(stats.details.map(d => d.question), "Sınav Sonuçları")} className="btn btn-secondary btn-lg"><FileText size={18} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MODALS & IMPORT
   ═══════════════════════════════════════════════════════════ */
function ImportView({ onDone, theme }: { onDone: () => void; theme: Theme }) {
  const [jsonText, setJsonText] = useState('');
  const [loading, setLoading] = useState(false);
  const handleImport = async () => {
    try {
      const parsed = JSON.parse(jsonText);
      setLoading(true);
      await importQuestions(parsed);
      onDone();
    } catch (e: unknown) { alert(errMsg(e)); } finally { setLoading(false); }
  };
  return (
    <div className="max-w-2xl mx-auto w-full anim-slide-up">
      <h2 className="text-xl font-black mb-5">Soru Bankası Import</h2>
      <textarea value={jsonText} onChange={(e) => setJsonText(e.target.value)} placeholder="JSON yapıştırın..." className={`w-full h-72 ${theme.inputBg} p-5 rounded-2xl font-mono text-sm resize-none border ${theme.border} input-ring mb-5`} />
      <button onClick={handleImport} disabled={loading} className="btn btn-primary btn-lg w-full">{loading ? 'Kaydediliyor...' : 'YÜKLE VE BAŞLA'}</button>
    </div>
  );
}

function SettingsModal({ settings, setSettings, onClose, theme, onExport, onImport, onSourceBooks, onResetStats, onAddQuestion }: { settings: UserSettings; setSettings: (next: UserSettings) => void; onClose: () => void; theme: Theme; onExport: () => void; onImport: () => void; onSourceBooks: () => void; onResetStats: () => void; onAddQuestion: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl anim-fade-in">
      {/* AUDIT-02: max-h + overflow-y-auto — küçük ekranlarda modal içeriği scroll edilebilir */}
      <div className={`w-full max-w-md ${theme.cardSolid} rounded-2xl p-7 ${theme.shadowLg} relative max-h-[90vh] overflow-y-auto custom-scrollbar anim-scale-in`}>
        <div className="flex justify-between items-center mb-7">
          <h3 className="text-lg font-black">Ayarlar</h3>
          <button onClick={onClose} className="p-1.5 hover:bg-white/[0.06] rounded-xl transition-colors"><XCircle size={20} className="opacity-50" /></button>
        </div>
        <div className="space-y-7">
          <div>
            <label className={`${theme.subtext} text-[10px] font-bold tracking-widest uppercase block mb-3`}>GÖRÜNÜM TEMASI</label>
            <div className="grid grid-cols-3 gap-2">
              {(['dark', 'oled', 'light'] as const).map(t => (
                <button key={t} onClick={() => setSettings({ ...settings, theme: t })}
                  className={`py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${settings.theme === t ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20' : `${theme.inputBg} ${theme.subtext} hover:bg-white/[0.08]`}`}>
                  {t === 'dark' ? 'KOYU' : t === 'oled' ? 'OLED' : 'AÇIK'}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className={`${theme.subtext} text-[10px] font-bold tracking-widest uppercase block mb-3`}>TEXT BOYUTU</label>
            <div className="grid grid-cols-3 gap-2">
              {(['small', 'normal', 'large'] as const).map(s => (
                <button key={s} onClick={() => setSettings({ ...settings, fontSize: s })}
                  className={`py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${settings.fontSize === s ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20' : `${theme.inputBg} ${theme.subtext} hover:bg-white/[0.08]`}`}>
                  {s === 'small' ? 'KÜÇÜK' : s === 'normal' ? 'ORTA' : 'BÜYÜK'}
                </button>
              ))}
            </div>
          </div>
          <div className={`pt-6 border-t ${theme.divider}`}>
            <label className={`${theme.subtext} text-[10px] font-bold tracking-widest uppercase block mb-3`}>VERİ YÖNETİMİ</label>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button onClick={onExport} className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-colors ${theme.inputBg} hover:bg-white/10 ${theme.text}`}><Download size={14} />Yedekle</button>
              <button onClick={onImport} className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-colors ${theme.inputBg} hover:bg-white/10 ${theme.text}`}><Upload size={14} />İçe Aktar</button>
            </div>
            <button onClick={onAddQuestion} className="flex w-full items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold mb-2 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors border border-emerald-500/20"><Plus size={14} />Soru Ekle</button>
            <button onClick={onSourceBooks} className="flex w-full items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold mb-2 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors border border-indigo-500/20"><BookOpen size={14} />AI Kaynak Kitaplar</button>
            <div className="mt-2">
              <button onClick={onResetStats} className="flex w-full items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors border border-red-500/20"><ArrowCounterClockwise size={14} weight="thin" />İstatistik Sıfırla</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditModal({ question, onSave, onClose, theme }: { question: Question; onSave: (q: Question) => void; onClose: () => void; theme: Theme }) {
  const [q, setQ] = useState(question.question);
  const [options, setOptions] = useState(question.options);
  const [correct, setCorrect] = useState(question.correctAnswer);
  const [exp, setExp] = useState(question.explanation);
  const [imageUrl, setImageUrl] = useState<string | null>(question.imageUrl ?? null);
  const [imageUploading, setImageUploading] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);

  const handleImagePick = async (file: File | null) => {
    if (!file) return;
    setImageError(null);
    setImageUploading(true);
    try {
      const { publicUrl } = await uploadQuestionImage(file, question.id);
      // Eski görsel varsa best-effort sil
      if (imageUrl) { try { await deleteQuestionImage(imageUrl); } catch { /* ignore */ } }
      setImageUrl(publicUrl);
    } catch (err) {
      setImageError(err instanceof Error ? err.message : String(err));
    } finally {
      setImageUploading(false);
    }
  };

  const handleImageRemove = async () => {
    if (!imageUrl) return;
    const url = imageUrl;
    setImageUrl(null);
    try { await deleteQuestionImage(url); } catch { /* ignore */ }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl anim-fade-in">
      <div className={`w-full max-w-2xl ${theme.cardSolid} rounded-2xl p-7 max-h-[90vh] overflow-y-auto custom-scrollbar ${theme.shadowLg} anim-scale-in`}>
        <h3 className="text-lg font-black mb-5">Soruyu Düzenle</h3>
        <div className="space-y-3">
          <textarea value={q} onChange={e => setQ(e.target.value)} className={`w-full h-28 ${theme.inputBg} p-4 rounded-xl text-sm border ${theme.border} input-ring resize-none`} />
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(options).map(k => (
              <div key={k}>
                <label className={`${theme.subtext} text-[10px] font-bold tracking-wider mb-1 block`}>ŞIK {k}</label>
                <input value={options[k as keyof typeof options]} onChange={e => setOptions({ ...options, [k]: e.target.value })} className={`w-full ${theme.inputBg} p-3 rounded-xl text-sm border ${theme.border} input-ring`} />
              </div>
            ))}
            <div>
              <label className={`${theme.subtext} text-[10px] font-bold tracking-wider mb-1 block`}>DOĞRU</label>
              <select value={correct} onChange={e => setCorrect(e.target.value as 'A' | 'B' | 'C' | 'D' | 'E')} className={`w-full ${theme.inputBg} p-3 rounded-xl text-sm border ${theme.border}`}>
                {(['A', 'B', 'C', 'D', 'E']).map(k => <option key={k} value={k}>{k}</option>)}
              </select>
            </div>
          </div>
          <textarea value={exp} onChange={e => setExp(e.target.value)} className={`w-full h-28 ${theme.inputBg} p-4 rounded-xl text-sm border ${theme.border} input-ring resize-none`} />

          <div>
            <label className={`${theme.subtext} text-[10px] font-bold tracking-wider mb-1 block`}>GÖRSEL (PNG · JPEG · WEBP · AVIF · MAKS 8 MB)</label>
            {imageUrl ? (
              <div className={`relative rounded-xl overflow-hidden border ${theme.border}`}>
                <img src={imageUrl} alt="Soru görseli" className="w-full max-h-72 object-contain bg-black/30" />
                <button
                  type="button"
                  onClick={handleImageRemove}
                  className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-red-500/80 hover:bg-red-500 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                  title="Görseli kaldır"
                >
                  <XIcon size={16} weight="thin" />
                </button>
              </div>
            ) : (
              <label className={`flex items-center justify-center gap-2 ${theme.inputBg} border-2 border-dashed ${theme.border} rounded-xl py-6 cursor-pointer hover:opacity-80 transition-opacity`}>
                {imageUploading ? <CircleNotch size={18} weight="thin" className="animate-spin" /> : <Image size={18} weight="thin" />}
                <span className="text-xs font-bold tracking-wider">{imageUploading ? 'YÜKLENİYOR…' : 'GÖRSEL EKLE'}</span>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/avif"
                  className="hidden"
                  disabled={imageUploading}
                  onChange={e => { handleImagePick(e.target.files?.[0] ?? null); e.target.value = ''; }}
                />
              </label>
            )}
            {imageError && <p className="mt-1.5 text-[11px] text-red-400">{imageError}</p>}
          </div>
        </div>
        <div className="flex gap-2.5 mt-6">
          <button onClick={onClose} className="btn btn-secondary btn-lg flex-1">İPTAL</button>
          <button
            disabled={imageUploading}
            onClick={() => onSave({ ...question, question: q, options, correctAnswer: correct, explanation: exp, imageUrl })}
            className="btn btn-primary btn-lg flex-1"
          >
            KAYDET
          </button>
        </div>
      </div>
    </div>
  );
}

function ReportModal({ questionId, onSave, onClose, theme }: { questionId: string; onSave: (id: string, reason: string) => void; onClose: () => void; theme: Theme }) {
  const [r, setR] = useState('Hatalı Bilgi');
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl anim-fade-in">
      <div className={`w-full max-w-sm ${theme.cardSolid} rounded-2xl p-7 ${theme.shadowLg} anim-scale-in`}>
        <h3 className="text-lg font-black mb-5">Raporla</h3>
        <select value={r} onChange={e => setR(e.target.value)} className={`w-full ${theme.inputBg} p-3.5 rounded-xl text-sm mb-5 border ${theme.border}`}>
          {(['Hatalı Bilgi', 'Yazım Yanlışı', 'Eksik Seçenek', 'Resim Hatası']).map(k => <option key={k} value={k}>{k}</option>)}
        </select>
        <div className="flex gap-2.5">
          <button onClick={onClose} className="btn btn-secondary btn-lg flex-1">İPTAL</button>
          <button onClick={() => onSave(questionId, r)} className="btn btn-danger btn-lg flex-1">GÖNDER</button>
        </div>
      </div>
    </div>
  );
}