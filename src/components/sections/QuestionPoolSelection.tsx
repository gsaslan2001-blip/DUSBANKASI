import { useMemo, useState } from 'react';
import type { Question } from '../../data';
import type { Theme } from '../../theme';
import { CANONICAL_LESSONS, getCikmisCanonicalLesson, isCikmisQuestion, isDenemeBankQuestion } from '../../config/canonicalUnits';
import { Button } from '../ui/Button';

export type PoolRequest = { lesson: string; ids: string[]; count: number };

export function favoriteGroup(q: Pick<Question, 'lesson' | 'unit' | 'quality_flag'>): { lesson: string; category: string } {
  if (isCikmisQuestion(q)) return { lesson: getCikmisCanonicalLesson(q), category: 'Çıkmış' };
  if (isDenemeBankQuestion(q)) return { lesson: q.lesson, category: 'Denemeler' };
  return { lesson: q.lesson, category: q.unit };
}

export function QuestionPoolSelection({ questions, theme, mode, loading, onBack, onStart }: {
  questions: Question[]; theme: Theme; mode: 'deneme' | 'favorites'; loading: boolean;
  onBack: () => void; onStart: (requests: PoolRequest[]) => void;
}) {
  const [amounts, setAmounts] = useState<Record<string, number>>({});
  const groups = useMemo(() => {
    const result = new Map<string, { lesson: string; category: string; ids: string[] }>();
    for (const q of questions) {
      if (mode === 'deneme' && !isDenemeBankQuestion(q)) continue;
      if (mode === 'favorites' && !q.is_favorite) continue;
      const { lesson, category } = mode === 'deneme' ? { lesson: q.lesson, category: '' } : favoriteGroup(q);
      const key = JSON.stringify([lesson, category]);
      if (!result.has(key)) result.set(key, { lesson, category, ids: [] });
      result.get(key)!.ids.push(q.id);
    }
    return [...result.entries()].sort((a, b) => {
      const ai = CANONICAL_LESSONS.indexOf(a[1].lesson), bi = CANONICAL_LESSONS.indexOf(b[1].lesson);
      return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi) || a[1].lesson.localeCompare(b[1].lesson, 'tr') || a[1].category.localeCompare(b[1].category, 'tr');
    });
  }, [questions, mode]);
  const total = groups.reduce((sum, [key, group]) => sum + Math.min(amounts[key] || 0, group.ids.length), 0);
  const lessons = [...new Set(groups.map(([, group]) => group.lesson))];
  return <div className="anim-slide-up w-full max-w-3xl mx-auto pb-12">
    <Button onClick={onBack} variant="secondary" size="sm">Ana Menü</Button>
    <h2 className="text-3xl font-black mt-6 mb-2">{mode === 'deneme' ? 'Denemeler' : 'Favoriler'}</h2>
    <p className={`${theme.subtext} mb-5`}>{mode === 'deneme' ? 'Her dersten kaç soru istediğini belirle; birden fazla ders seçerek karma deneme oluştur.' : 'Ders ve soru türüne göre favorilerini seç.'}</p>
    {groups.length > 0 && <div className="flex gap-2 mb-4"><Button variant="secondary" size="sm" onClick={() => setAmounts(Object.fromEntries(groups.map(([key, group]) => [key, group.ids.length])))}>Tümünü seç</Button><Button variant="secondary" size="sm" onClick={() => setAmounts({})}>Temizle</Button></div>}
    {groups.length === 0 && <p className={theme.subtext}>Henüz gösterilecek soru yok.</p>}
    <div className="space-y-3">
      {lessons.map(lesson => <section key={lesson} className={`${theme.cardGlass} rounded-2xl p-4`}>
        <h3 className="font-bold mb-2">{lesson}</h3>
        {groups.filter(([, group]) => group.lesson === lesson).map(([key, group]) => <div key={key} className="py-2 flex flex-wrap items-center gap-3">
        <div className="flex-1 min-w-36">{group.category && <div className="text-sm font-medium">{group.category}</div>}<div className={`${theme.subtext} text-xs`}>{group.ids.length} soru</div></div>
        <label className="text-xs">Soru sayısı <input aria-label={`${group.lesson} ${group.category || 'Denemeler'} soru sayısı`} type="number" min={0} max={group.ids.length} value={amounts[key] || ''} placeholder="0" className={`${theme.inputBg} border ${theme.border} rounded-lg px-2 py-2 w-20 ml-2`} onChange={e => setAmounts(prev => ({ ...prev, [key]: Math.max(0, Math.min(group.ids.length, Math.floor(Number(e.target.value) || 0))) }))} /></label>
        <Button variant="secondary" size="sm" onClick={() => setAmounts(prev => ({ ...prev, [key]: prev[key] === group.ids.length ? 0 : group.ids.length }))}>Tümü</Button>
      </div>)}
      </section>)}
    </div>
    <div className="flex items-center justify-between mt-6"><span className={theme.subtext}>Seçilen: {total} soru</span><Button disabled={!total || loading} onClick={() => onStart(groups.map(([key, group]) => ({ lesson: group.lesson, ids: group.ids, count: Math.min(amounts[key] || 0, group.ids.length) })).filter(group => group.count > 0))}>{loading ? 'Yükleniyor…' : 'Başla'}</Button></div>
  </div>;
}
