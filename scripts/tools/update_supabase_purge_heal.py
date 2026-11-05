from pathlib import Path

file_path = Path('src/lib/supabase.ts')
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Add clearAllSkeletonsCache to import
old_import = """import {
  getCachedSkeletons, saveSkeletonsToCache, deleteSkeletonsFromCache,
  getQuestionsFromContentCache, saveQuestionsToContentCache,
  getCachedQuestions, saveQuestionsToCache, deleteQuestionsFromCache,
} from './idb';"""

new_import = """import {
  getCachedSkeletons, saveSkeletonsToCache, deleteSkeletonsFromCache, clearAllSkeletonsCache,
  getQuestionsFromContentCache, saveQuestionsToContentCache,
  getCachedQuestions, saveQuestionsToCache, deleteQuestionsFromCache,
} from './idb';"""

text_norm = text.replace('\r\n', '\n')
old_import_norm = old_import.replace('\r\n', '\n')
new_import_norm = new_import.replace('\r\n', '\n')

assert old_import_norm in text_norm, "old_import not found"
text_norm = text_norm.replace(old_import_norm, new_import_norm, 1)

# 2. Update fetchSkeletons
old_fetch = """export async function fetchSkeletons(): Promise<SkeletonRow[]> {
  const cached = await getCachedSkeletons();
  const lastSyncStr = localStorage.getItem('skeletons_last_sync');

  // Cache boşsa tam çekimi yap
  if (cached.length === 0) {
    const all = await fetchAllSkeletons();
    await saveSkeletonsToCache(all);
    localStorage.setItem('skeletons_last_sync', new Date().toISOString());
    return all;
  }

  // Delta Sync: sadece değişen/eklenen/silinen iskeletleri güncelle
  try {
    const lastSync = lastSyncStr || new Date(0).toISOString();

    const { data: updatedData, error: updateError } = await supabase
      .from('questions')
      .select(SELECT_SKELETON_COLS)
      .gt('updated_at', lastSync)
      .or('quality_flag.is.null,quality_flag.eq.reviewed_keep,quality_flag.eq.high_yield,quality_flag.eq.cikmis');

    if (updateError) throw new Error(updateError.message);

    const updatedRows = ((updatedData ?? []) as SkeletonRow[]).filter(
      r => !EXCLUDED_FLAGS.has(r.quality_flag ?? '')
    );

    const { data: deletedData, error: delError } = await supabase
      .from('deleted_records')
      .select('record_id')
      .eq('table_name', 'questions')
      .gt('deleted_at', lastSync);

    if (delError) throw new Error(delError.message);
    const deletedIds = (deletedData ?? []).map((r: { record_id: string }) => r.record_id);

    const finalSkeletons = cached.filter(s => !deletedIds.includes(s.id));
    for (const row of updatedRows) {
      const idx = finalSkeletons.findIndex(s => s.id === row.id);
      if (idx >= 0) finalSkeletons[idx] = row;
      else finalSkeletons.push(row);
    }

    if (updatedRows.length > 0 || deletedIds.length > 0) {
      if (deletedIds.length > 0) await deleteSkeletonsFromCache(deletedIds);
      if (updatedRows.length > 0) await saveSkeletonsToCache(updatedRows);
      localStorage.setItem('skeletons_last_sync', new Date().toISOString());
    }

    return finalSkeletons.sort((a, b) => a.id.localeCompare(b.id));
  } catch (err) {
    console.error('[fetchSkeletons] Delta sync failed, returning cache:', err);
    return cached;
  }
}"""

new_fetch = """export async function fetchSkeletons(): Promise<SkeletonRow[]> {
  const PURGE_HEAL_KEY = 'dus_purge_heal_v458_1';
  if (!localStorage.getItem(PURGE_HEAL_KEY)) {
    // 19.780 soruluk büyük temizlik sonrası istemci IndexedDB önbelleğini tamamen sıfırla
    await clearAllSkeletonsCache().catch(() => {});
    localStorage.removeItem('skeletons_last_sync');
    localStorage.setItem(PURGE_HEAL_KEY, 'true');
  }

  const cached = await getCachedSkeletons();
  const lastSyncStr = localStorage.getItem('skeletons_last_sync');

  // Cache boşsa tam çekimi yap
  if (cached.length === 0) {
    const all = await fetchAllSkeletons();
    await saveSkeletonsToCache(all);
    localStorage.setItem('skeletons_last_sync', new Date().toISOString());
    return all;
  }

  // Delta Sync: sadece değişen/eklenen/silinen iskeletleri güncelle
  try {
    const lastSync = lastSyncStr || new Date(0).toISOString();

    const { data: updatedData, error: updateError } = await supabase
      .from('questions')
      .select(SELECT_SKELETON_COLS)
      .gt('updated_at', lastSync)
      .or('quality_flag.is.null,quality_flag.eq.reviewed_keep,quality_flag.eq.high_yield,quality_flag.eq.cikmis');

    if (updateError) throw new Error(updateError.message);

    const updatedRows = ((updatedData ?? []) as SkeletonRow[]).filter(
      r => !EXCLUDED_FLAGS.has(r.quality_flag ?? '')
    );

    // Silinen kayıtları 1000 limitine takılmadan sayfalayarak topla
    const deletedIds: string[] = [];
    let delFrom = 0;
    while (true) {
      const { data: delPage, error: delError } = await supabase
        .from('deleted_records')
        .select('record_id')
        .eq('table_name', 'questions')
        .gt('deleted_at', lastSync)
        .range(delFrom, delFrom + PAGE_SIZE - 1);

      if (delError) throw new Error(delError.message);
      if (!delPage || delPage.length === 0) break;
      deletedIds.push(...delPage.map((r: { record_id: string }) => r.record_id));
      if (delPage.length < PAGE_SIZE) break;
      delFrom += PAGE_SIZE;
    }

    const finalSkeletons = cached.filter(s => !deletedIds.includes(s.id));
    for (const row of updatedRows) {
      const idx = finalSkeletons.findIndex(s => s.id === row.id);
      if (idx >= 0) finalSkeletons[idx] = row;
      else finalSkeletons.push(row);
    }

    if (updatedRows.length > 0 || deletedIds.length > 0) {
      if (deletedIds.length > 0) await deleteSkeletonsFromCache(deletedIds);
      if (updatedRows.length > 0) await saveSkeletonsToCache(updatedRows);
      localStorage.setItem('skeletons_last_sync', new Date().toISOString());
    }

    return finalSkeletons.sort((a, b) => a.id.localeCompare(b.id));
  } catch (err) {
    console.error('[fetchSkeletons] Delta sync failed, returning cache:', err);
    return cached;
  }
}"""

old_fetch_norm = old_fetch.replace('\r\n', '\n')
new_fetch_norm = new_fetch.replace('\r\n', '\n')

assert old_fetch_norm in text_norm, "old_fetch not found"
text_norm = text_norm.replace(old_fetch_norm, new_fetch_norm, 1)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text_norm)

print("supabase.ts updated successfully with purge heal and paginated deleted_records!")
