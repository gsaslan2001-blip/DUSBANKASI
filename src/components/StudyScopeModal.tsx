import { useMemo } from 'react';
import { X as XIcon, Brain, Target, Shuffle, CaretRight, Sparkle } from '@phosphor-icons/react';
import { Button } from './ui/Button';
import type { Theme } from '../theme';
import type { QuestionSkeleton } from '../data';
import type { StatsMap } from '../lib/stats';
import { CANONICAL_LESSONS } from '../config/canonicalUnits';

export type StudyScopeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  mode: 'smart-study' | 'weak-questions';
  questions: QuestionSkeleton[];
  stats: StatsMap;
  weakQuestionIds: string[];
  onStartGeneral: () => void;
  onStartLesson: (lesson: string) => void;
  theme: Theme;
};

export function StudyScopeModal({
  isOpen,
  onClose,
  mode,
  questions,
  stats: _stats,
  weakQuestionIds,
  onStartGeneral,
  onStartLesson,
  theme,
}: StudyScopeModalProps) {
  if (!isOpen) return null;

  const isSmartStudy = mode === 'smart-study';

  // Zayıf soruların ders bazında dağılımı
  const weakLessonCounts = useMemo(() => {
    const weakSet = new Set(weakQuestionIds);
    const map = new Map<string, number>();
    for (const q of questions) {
      if (weakSet.has(q.id)) {
        map.set(q.lesson, (map.get(q.lesson) ?? 0) + 1);
      }
    }
    return map;
  }, [questions, weakQuestionIds]);

  // Soru bankasındaki mevcut dersler ve soru adetleri
  const availableLessons = useMemo(() => {
    const map = new Map<string, number>();
    for (const q of questions) {
      if (q.lesson) {
        map.set(q.lesson, (map.get(q.lesson) ?? 0) + 1);
      }
    }
    // Kanonik ders sırasını koru
    const list: { lesson: string; totalCount: number; weakCount: number }[] = [];
    const seen = new Set<string>();

    for (const cl of CANONICAL_LESSONS) {
      if (map.has(cl)) {
        list.push({
          lesson: cl,
          totalCount: map.get(cl) ?? 0,
          weakCount: weakLessonCounts.get(cl) ?? 0,
        });
        seen.add(cl);
      }
    }
    // Kanonik dışı kalanlar varsa ekle
    for (const [l, count] of map.entries()) {
      if (!seen.has(l) && !l.toLowerCase().includes('cikmis') && !l.toLowerCase().includes('çıkmış')) {
        list.push({
          lesson: l,
          totalCount: count,
          weakCount: weakLessonCounts.get(l) ?? 0,
        });
      }
    }

    if (!isSmartStudy) {
      // Zayıf halkada sadece zayıf sorusu olan dersler
      return list.filter(item => item.weakCount > 0);
    }
    return list;
  }, [questions, weakLessonCounts, isSmartStudy]);

  const totalWeakCount = weakQuestionIds.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md anim-fade-in">
      <div
        className={`w-full max-w-xl max-h-[85vh] flex flex-col ${theme.modalBg} border ${theme.cardBorder} rounded-3xl shadow-2xl overflow-hidden anim-scale-up`}
      >
        {/* Header */}
        <div className={`p-6 border-b ${theme.divider} flex items-center justify-between shrink-0`}>
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                isSmartStudy
                  ? 'bg-emerald-500/15 text-emerald-400'
                  : 'bg-rose-500/15 text-rose-400'
              }`}
            >
              {isSmartStudy ? (
                <Brain size={24} weight="fill" />
              ) : (
                <Target size={24} weight="fill" />
              )}
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tight">
                {isSmartStudy ? 'Akıllı Çalışma Modu' : 'Zayıf Halka Modu'}
              </h2>
              <p className={`${theme.subtext} text-xs font-medium`}>
                {isSmartStudy
                  ? 'Favoriler, kronik (%50 altı) ve taze yanlışlar önceliklendirilir'
                  : 'En az 2 kez çözülüp %50 altı başarı sağlanan sorular'}
              </p>
            </div>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="w-9 h-9 p-0 rounded-full"
            aria-label="Kapat"
          >
            <XIcon size={18} />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* Genel Karma Seçeneği */}
          <div>
            <div className={`${theme.subtext} text-[10px] font-black uppercase tracking-widest mb-2 px-1`}>
              Tüm Havuzdan Başlat
            </div>
            <Button
              onClick={onStartGeneral}
              variant="unstyled"
              className={`w-full p-4 rounded-2xl text-left card-hover group border transition-all ${
                isSmartStudy
                  ? 'bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/20'
                  : 'bg-rose-500/10 hover:bg-rose-500/20 border-rose-500/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSmartStudy
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-rose-500/20 text-rose-400'
                    }`}
                  >
                    <Shuffle size={20} weight="fill" />
                  </div>
                  <div>
                    <div className="text-sm font-black flex items-center gap-2">
                      Genel Karma Modu
                      <span className="badge bg-white/10 text-[10px] py-0.5 px-2">Önerilen</span>
                    </div>
                    <div className={`${theme.subtext} text-xs mt-0.5`}>
                      {isSmartStudy
                        ? 'Tüm derslerden eşit ağırlıklı 40 soruluk akıllı oturum'
                        : `Tüm derslerdeki ${totalWeakCount} zayıf soruyu harmanla`}
                    </div>
                  </div>
                </div>
                <CaretRight size={18} className="opacity-60 group-hover:translate-x-1 transition-transform" />
              </div>
            </Button>
          </div>

          {/* Ders Bazlı Seçenekler */}
          <div>
            <div className="flex items-center justify-between mb-2 px-1">
              <span className={`${theme.subtext} text-[10px] font-black uppercase tracking-widest`}>
                Tek Bir Derse Odaklan (Ders Bazlı)
              </span>
              <span className={`${theme.subtext} text-[10px] font-bold`}>
                {availableLessons.length} Ders Hazır
              </span>
            </div>

            {availableLessons.length === 0 ? (
              <div className={`p-4 rounded-2xl ${theme.cardGlass} text-center ${theme.subtext} text-xs`}>
                {isSmartStudy
                  ? 'Henüz soru eklenmiş bir ders bulunmuyor.'
                  : 'Tebrikler! Şu an için kriterlere uyan zayıf soru bulunamadı.'}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableLessons.map(item => (
                  <Button
                    key={item.lesson}
                    onClick={() => onStartLesson(item.lesson)}
                    variant="unstyled"
                    className={`p-3 rounded-2xl flex items-center justify-between text-left card-hover border border-white/5 ${theme.cardGlass} hover:border-white/20 transition-all group`}
                  >
                    <div className="truncate pr-2">
                      <div className="text-xs font-bold truncate group-hover:text-white transition-colors">
                        {item.lesson}
                      </div>
                      <div className={`${theme.subtext} text-[10px]`}>
                        {isSmartStudy ? (
                          <span>
                            {item.weakCount > 0 ? (
                              <span className="text-rose-400 font-semibold">{item.weakCount} zayıf · </span>
                            ) : null}
                            {item.totalCount} soru
                          </span>
                        ) : (
                          <span className="text-rose-400 font-semibold">{item.weakCount} zayıf soru</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {isSmartStudy && item.weakCount > 0 && (
                        <Sparkle size={12} weight="fill" className="text-rose-400" />
                      )}
                      <CaretRight size={14} className="opacity-40 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className={`p-4 border-t ${theme.divider} flex justify-end shrink-0`}>
          <Button onClick={onClose} variant="ghost" size="sm">
            Vazgeç
          </Button>
        </div>
      </div>
    </div>
  );
}
