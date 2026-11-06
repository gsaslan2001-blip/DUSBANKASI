export async function loadAvailablePool<T extends { id: string }>(
  candidateIds: string[], count: number, load: (ids: string[]) => Promise<T[]>,
): Promise<T[]> {
  const candidates = [...new Set(candidateIds)];
  const picked: T[] = [];
  const seen = new Set<string>();
  while (picked.length < count && candidates.length > 0) {
    const ids = candidates.splice(0, count - picked.length);
    const requested = new Set(ids);
    const rows = await load(ids);
    for (const row of rows) {
      if (requested.has(row.id) && !seen.has(row.id)) {
        seen.add(row.id);
        picked.push(row);
      }
    }
  }
  return picked;
}
