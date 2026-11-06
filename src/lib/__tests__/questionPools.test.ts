import { describe, expect, it } from 'vitest';
import { favoriteGroup } from '../../components/sections/QuestionPoolSelection';
import { loadAvailablePool } from '../poolLoader';

describe('deneme ve favori havuzları', () => {
  it('çıkmış ve deneme favorilerini dersin altında ayrı gruplar', () => {
    expect(favoriteGroup({ lesson: 'Farmakoloji', unit: 'Ünite 1', quality_flag: 'cikmis' })).toEqual({ lesson: 'Farmakoloji', category: 'Çıkmış' });
    expect(favoriteGroup({ lesson: 'Radyoloji', unit: 'Deneme', quality_flag: null })).toEqual({ lesson: 'Radyoloji', category: 'Denemeler' });
    expect(favoriteGroup({ lesson: 'Anatomi', unit: 'Baş ve Boyun', quality_flag: null })).toEqual({ lesson: 'Anatomi', category: 'Baş ve Boyun' });
  });

  it('eksik kayıt varsa aynı havuzdaki başka soruyla seçilen sayıyı tamamlar', async () => {
    const calls: string[][] = [];
    const rows = await loadAvailablePool(['missing', 'a', 'b', 'c'], 2, async ids => {
      calls.push(ids);
      return ids.filter(id => id !== 'missing').map(id => ({ id }));
    });
    expect(rows.map(q => q.id)).toEqual(['a', 'b']);
    expect(calls).toEqual([['missing', 'a'], ['b']]);
  });
});
