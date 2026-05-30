/**
 * Ders adından (Supabase'deki `lesson` alanı) Pinecone `myppdfs` namespace'ine eşleme.
 * Türkçe karakter normalize edilir; eşleşme yoksa `null` dönerse RAG atlanır,
 * model genel bilgisinden yanıtlar.
 */

function normalize(lesson: string): string {
  return lesson
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ö/g, 'o')
    .trim();
}

const MAP: Record<string, string> = {
  patoloji: 'patoloji',
  'oral patoloji': 'patoloji',
  endodonti: 'endodonti',
  radyoloji: 'radyoloji',
  'oral diagnoz ve radyoloji': 'radyoloji',
  protez: 'protez',
  'protetik dis tedavisi': 'protez',
  histoloji: 'histoloji',
  'histoloji-embriyoloji': 'histoloji',
  fizyoloji: 'fizyoloji',
  periodontoloji: 'periodontoloji',
  cerrahi: 'cerrahi',
  'agiz dis ve cene cerrahisi': 'cerrahi',
  'agiz, dis ve cene cerrahisi': 'cerrahi',
  farmakoloji: 'farmakoloji',
  pedodonti: 'pedodonti',
};

export function lessonToNamespace(lesson: string | undefined): string | null {
  if (!lesson) return null;
  return MAP[normalize(lesson)] ?? null;
}
