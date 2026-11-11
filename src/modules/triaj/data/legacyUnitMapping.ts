import { CANONICAL_UNITS } from '../../../config/canonicalUnits';
import { LEGACY_UNIT_LABELS } from './legacyUnitLabels';

export interface CanonicalUnitTarget {
  lesson: string;
  unit: string;
}

export interface LegacyUnitMapping {
  sourceId: string;
  sourceTitle: string;
  sourceSubjectId: string;
  relation: 'exact' | 'renamed' | 'merged' | 'split' | 'unresolved';
  targets: CanonicalUnitTarget[];
  reason: string;
}

// These codes are DusTriaj planner subjects. Excel exam branch codes have a different order.
export const LEGACY_PLANNER_LESSONS: Readonly<Record<string, string>> = {
  B01: 'Anatomi', 'B02+B03': 'Fizyoloji', B04: 'Biyokimya', B05: 'Mikrobiyoloji',
  B06: 'Patoloji', B07: 'Farmakoloji', B09: 'Cerrahi', B10: 'Radyoloji',
  B11: 'Pedodonti', B12: 'Endodonti', B13: 'Ortodonti', B14: 'Periodontoloji',
  B15: 'Protez', B16: 'Restoratif',
};

export function normalizeLegacyLabel(value: string): string {
  return value.normalize('NFC').trim().toLocaleLowerCase('tr-TR');
}

function looseLabel(value: string): string {
  return normalizeLegacyLabel(value).normalize('NFD').replace(/\p{Diacritic}/gu, '').replaceAll('ı', 'i');
}

const workbookLessons: Record<string, string> = {
  'fizyoloji ve histoloji': 'Fizyoloji', 'histoloji ve fizyoloji': 'Fizyoloji',
  'tibbi biyokimya': 'Biyokimya', 'tibbi mikrobiyoloji': 'Mikrobiyoloji',
  'tibbi patoloji': 'Patoloji', 'tibbi farmakoloji': 'Farmakoloji',
  'agiz, dis ve cene cerrahisi': 'Cerrahi', 'agiz, dis ve cene radyolojisi': 'Radyoloji',
  'cocuk dis hekimligi': 'Pedodonti', 'protetik dis tedavisi': 'Protez',
  'restoratif dis tedavisi': 'Restoratif',
};

export function legacyLesson(subject: string): string | undefined {
  const label = looseLabel(subject.replace(/\s*\(\d+\s+ünite\)$/iu, ''));
  if (Object.hasOwn(LEGACY_PLANNER_LESSONS, subject)) return LEGACY_PLANNER_LESSONS[subject];
  if (Object.hasOwn(workbookLessons, label)) return workbookLessons[label];
  return Object.keys(CANONICAL_UNITS).find((lesson) => looseLabel(lesson) === label);
}

// Targets below were compared by scope. Titles without a sufficiently narrow
// equivalent are archived. Numbers in the keys identify source records only.
const reviewed: Record<string, Pick<LegacyUnitMapping, 'relation' | 'reason'> & { units: string[] }> = {};

function addReviewed(
  sourceCode: string,
  entries: ReadonlyArray<readonly [number, LegacyUnitMapping['relation'], string, ...string[]]>,
) {
  for (const [index, relation, reason, ...units] of entries) {
    reviewed[sourceId(sourceCode, index)] = { relation, reason, units };
  }
}

function sourceId(code: string, index: number): string {
  return `unit-${code.toLowerCase().replace(/[^a-z0-9]/g, '')}-${String(index).padStart(2, '0')}`;
}

addReviewed('B10', [
  [1, 'renamed', 'Temel dental radyoloji kapsamı.', 'Ünite 1 - Diş Hekimliğinde Radyoloji'],
  [2, 'renamed', 'Radyasyonun biyolojik etkileri radyobiyoloji başlığında.', 'Ünite 3 - Radyobiyoloji'],
  [3, 'unresolved', 'Korunma için bağımsız bir arayüz ünitesi bulunamadı.'],
  [4, 'renamed', 'Dijital radyografik görüntüleme.', 'Ünite 4 - Dijital Görüntüleme'],
  [5, 'renamed', 'Film ile görüntüleme aynı kapsamda.', 'Ünite 5 - Film İle Görüntüleme'],
  [6, 'renamed', 'Radyografide projeksiyon geometrisi.', 'Ünite 2 - Radyolojide Projeksiyon Kuralları'],
  [7, 'merged', 'İntraoral teknikler genel radyografi tekniklerinde.', 'Ünite 8 - Dişhekimliğinde Radyografi Teknikleri'],
  [8, 'merged', 'Ekstraoral teknikler genel radyografi tekniklerinde.', 'Ünite 8 - Dişhekimliğinde Radyografi Teknikleri'],
  [9, 'merged', 'Panoramik teknik genel radyografi tekniklerinde.', 'Ünite 8 - Dişhekimliğinde Radyografi Teknikleri'],
  [10, 'renamed', 'Radyografik anatominin anatomik referans noktaları.', 'Ünite 11 - Anatomik Landmarklar'],
  [11, 'renamed', 'Konik ışınlı BT aynı teknik.', 'Ünite 9 - Konik Işınılı Bilgisayarlı Tomografi'],
  [12, 'renamed', 'Diğer dental görüntüleme teknikleri.', 'Ünite 10 - Diş Hekimliğinde Diğer Görüntüleme Teknikleri'],
  [13, 'renamed', 'Radyografik tanı ve yorumlama ilkeleri.', 'Ünite 15 - Radyografik Yorumlama İlkeleri'],
  [14, 'renamed', 'Çene ve yüzün inflamatuar radyografik bulguları.', 'Ünite 16 - Çeneler Ve Yüzün İltihabi Hastalıkları'],
  [15, 'renamed', 'Kist radyolojisi.', 'Ünite 17 - Kistler'],
  [16, 'renamed', 'Benign tümör radyolojisi.', 'Ünite 18 - Benign Tümörler'],
  [17, 'unresolved', 'Karsinom, tüm malign tümörleri kapsamaz.', 'Ünite 20 - Karsinomlar'],
  [18, 'split', 'Genel sistemik hastalıklar tek başına hedef belirlemez.', 'Ünite 21 - Sistemik Hastalıkların Çene Bulguları', 'Ünite 30 - Diş Hekimliğinde Sistemik Hastalıklar ve Diş Hekimli Yaklaşımı'],
  [19, 'renamed', 'Diş çürüğünün radyografik değerlendirmesi.', 'Ünite 12 - Diş Çürükleri ve Çürük Radyolojisi'],
  [20, 'renamed', 'Periodontal radyoloji aynı kapsamda.', 'Ünite 14 - Periodontal Radyoloji'],
  [21, 'renamed', 'İmplant planlamasının radyolojik kapsamı.', 'Ünite 26 - Diş Hekimliğinde İmplant Planlaması'],
  [22, 'renamed', 'Dental anomaliler aynı kapsamda.', 'Ünite 13 - Diş Anomalileri'],
  [23, 'renamed', 'Paranazal sinüs görüntülemesi.', 'Ünite 22 - Paranazal Sinüsler'],
  [24, 'renamed', 'Temporomandibular eklemin tanısal görüntülemesi.', 'Ünite 23 - Temporomandibular Eklem (Tme) Diagnostik Görüntüleme'],
  [25, 'renamed', 'Tükürük bezi hastalıklarının radyolojik kapsamı.', 'Ünite 25 - Tükürük Bezi Hastalıkları'],
  [26, 'renamed', 'Yumuşak doku kalsifikasyonları.', 'Ünite 24 - Yumuşak Doku Kalsifikasyonları'],
]);

addReviewed('B13', [
  [1, 'renamed', 'Büyüme ve gelişim başlık varyasyonu.', 'Ünite 1 - BÜYÜME ve GELİŞİM'],
  [2, 'renamed', 'Dentisyon gelişimi.', 'Ünite 2 - DENTAL YAPILARIN GELİŞİMİ'],
  [3, 'merged', 'Ortodontik diş hareketi tedavinin biyolojisinin parçası.', 'Ünite 3 - ORTODONTİK TEDAVİNİN BİYOLOJİSİ'],
  [4, 'renamed', 'Ortodontik teşhis.', 'Ünite 5 - ORTODONTİK TEŞHİS'],
  [5, 'renamed', 'Ankraj aynı kapsamda.', 'Ünite 4 - ANKRAJ'],
  [6, 'merged', 'Minivida ve miniplak iskeletsel ankraj araçları.', 'Ünite 4 - ANKRAJ'],
  [7, 'renamed', 'Maturasyon ve maturasyon analizi.', 'Ünite 6 - MATURASYON ANALİZİ'],
  [8, 'split', 'Genel apareyler kaydı ekstraoral kapsamı ayırmaz.', 'Ünite 10 - ORTODONTİK TEDAVİ APAREYLERİ', 'Ünite 11 - EKSTRAORAL APAREYLER'],
  [9, 'renamed', 'Dental maloklüzyonlar.', 'Ünite 7 - DENTAL MALOKLÜZYONLAR'],
  [10, 'unresolved', 'Alışkanlıklar için bağımsız ünite bulunamadı.'],
  [11, 'unresolved', 'Yer darlığı farklı tedavi ve planlama başlıklarında ele alınabilir.', 'Ünite 12 - ORTODONTİK TEDAVİ PLANLAMASI'],
  [12, 'unresolved', 'Lokal sorunlar tek başına hedef üniteyi belirlemez.'],
  [13, 'renamed', 'Gömülü dişlerin ortodontik tedavisi.', 'Ünite 13 - GÖMÜLÜ DİŞLERİN ORTODONTİK TEDAVİSİ'],
  [14, 'renamed', 'Seri çekim sürme rehberliğinin parçası.', 'Ünite 9 - SÜRME REHBERLİĞİ (GUIDANCE ERUPTION)'],
  [15, 'merged', 'Sabit tedavi teknikleri genel ortodontik tedaviler kapsamında.', 'Ünite 8 - ORTODONTİK TEDAVİLER'],
  [16, 'renamed', 'Ortodontik materyaller.', 'Ünite 19 - ORTODONTİK MATERYALLER'],
  [17, 'split', 'Yetişkin tedavisi ve ortognatik cerrahi iki ayrı hedef.', 'Ünite 14 - YETİŞKİN HASTALARDA ORTODONTİK TEDAVİ', 'Ünite 17 - ORTOGNATİK CERRAHİ ILE ORTODONTİK TEDAVİ'],
  [18, 'renamed', 'Dudak ve damak yarıkları.', 'Ünite 16 - DUDAK VE DAMAK YARIKLARI'],
  [19, 'renamed', 'Sendromlar aynı kapsamda.', 'Ünite 15 - SENDROMLAR'],
  [20, 'renamed', 'Ortodontik tedavi komplikasyonları.', 'Ünite 18 - ORTODONTİK TEDAVİ KOMPLİKASYONLARI'],
  [21, 'renamed', 'Retansiyon ve relaps sırası değişmiş.', 'Ünite 20 - RETANSİYON – RELAPS'],
]);

addReviewed('B14', [
  [1, 'renamed', 'Periodonsiyumun anatomisi.', 'Periodontal Anatomi'],
  [2, 'renamed', 'Periodontal etiyoloji.', 'Etiyoloji'],
  [3, 'merged', 'Patogenez periodontal patoloji kapsamında.', 'Periodontal Patoloji ve Mikrobiyoloji'],
  [4, 'renamed', 'Gingival patolojiler ve gingival hastalıklar aynı kapsamda.', 'Gingival Hastalıklar'],
  [5, 'renamed', 'Periodontitis ve formları.', 'Periodontitis ve Formları'],
  [6, 'unresolved', 'Epidemiyoloji adaydır, özel durumlar da kaynak kapsamındadır.', 'Periodontal Epidemiyoloji'],
  [7, 'unresolved', 'Muayene ve teşhis için bağımsız eşdeğer başlık bulunamadı.', 'Periodontal Tedavi Planlaması', 'Periodontal Hastalıkların Sınıflandırılması'],
  [8, 'split', 'Cerrahi dışı tedavi planlama ve destekleyici tedaviyle kesişir.', 'Periodontal Tedavi Planlaması', 'Destekleyici Periodontal Tedavi'],
  [9, 'renamed', 'Periodontal cerrahi teknikleri.', 'Cerrahi Teknikler'],
  [10, 'unresolved', 'İmplant periodontoloji arayüzünde bağımsız ünite değil.'],
  [11, 'unresolved', 'Sistemik hastalıklar için bağımsız arayüz ünitesi bulunamadı.'],
]);

addReviewed('B15', [
  [1, 'renamed', 'Diş anatomisi aynı kapsamda.', '01-Diş Anatomisi'],
  [2, 'split', 'Genel oklüzyon ve tam protez oklüzyonu ayrılıyor.', '02-Oklüzyonun Temelleri', '37-Tam Protezlerde Oklüzyon'],
  [3, 'split', 'Sabit protezler hazırlık, geçici ve ölçü gibi ayrı bölümlere ayrılıyor.', '05-Eksik Diş Varlığında Tedavi Planlaması', '06-Diş Preparasyon Prensipleri', '07-Yaygın Hasarlı Dişlerin Preparasyonu', '08-Periodontal Olarak Zayıf Dişlerin Preparasyonu', '09-Geçici Restorasyonlar', '10-Sıvı ve Yumuşak Doku Kontrolü', '11-Ölçü', '12-Çalışma Modelleri ve Day', '17-Laminate Veneerler'],
  [4, 'unresolved', 'İmplantoloji Protez arayüzünde bağımsız ünite değil.'],
  [5, 'unresolved', 'Biyomekanik, hareketli bölümlü protezlerin yalnızca bir alt başlığı.', '22-Hareketli Bölümlü Protezlerde Biyomekanik'],
  [6, 'split', 'Tam protezler birden fazla bağımsız üniteye ayrılıyor.', '33-Çene İlişkilerinin Kaydı', '34-Tam Protezlerde Diş Seçimi ve Diş Dizimi', '37-Tam Protezlerde Oklüzyon', '38-Yumuşak Astar Materyalleri', '41-Protez Stomatit'],
  [7, 'renamed', 'Diş hekimliğinde kullanılan maddeler bilgisi.', '44-Diş Hekimliğinde Maddeler Bilgisi'],
  [8, 'unresolved', 'Temporomandibular eklemin Protez arayüzünde bağımsız karşılığı yok.'],
  [9, 'renamed', 'Çene yüz protezleri aynı kapsamda.', '47-Çene Yüz Protezleri'],
]);

addReviewed('B16', [
  [2, 'renamed', 'Çürüksüz diş lezyonları.', '2 DİŞLERİN ÇÜRÜKSÜZ LEZYONLARI'],
  [4, 'renamed', 'Restoratif diş hekimliğinde çürük oluşumu.', '4 ÇÜRÜK'],
]);

export const LEGACY_UNIT_MAPPING: readonly LegacyUnitMapping[] = Object.entries(LEGACY_UNIT_LABELS)
  .flatMap(([sourceSubjectId, titles]) => {
    const lesson = LEGACY_PLANNER_LESSONS[sourceSubjectId];
    const units = CANONICAL_UNITS[lesson];
    return titles.map((sourceTitle, index) => {
      const id = sourceId(sourceSubjectId, index + 1);
      const exact = units.find((unit) => normalizeLegacyLabel(unit) === normalizeLegacyLabel(sourceTitle));
      const anatomy = sourceSubjectId === 'B01' && units.find((unit) =>
        normalizeLegacyLabel(unit).replace(/^\d+\. ünite - /u, '') ===
          normalizeLegacyLabel(sourceTitle).replace(/^ünite \d+ - /u, ''));
      const entry = reviewed[id] ?? (
        exact ? { relation: 'exact', reason: 'Normalize edilmiş ünite etiketi birebir aynı.', units: [exact] }
          : anatomy ? { relation: 'renamed', reason: 'Ünite öneki farklı, konu başlığı aynı.', units: [anatomy] }
            : { relation: 'unresolved', reason: 'Güvenilir kanonik karşılık bulunamadı.', units: [] }
      );
      return {
        sourceId: id, sourceTitle, sourceSubjectId, relation: entry.relation,
        reason: entry.reason, targets: entry.units.filter((unit) => units.includes(unit)).map((unit) => ({ lesson, unit })),
      };
    });
  });

export function legacyUnitMapping(subject: string, title: string, id?: string): LegacyUnitMapping | undefined {
  const lesson = legacyLesson(subject);
  if (!lesson) return undefined;
  const normalizedTitle = normalizeLegacyLabel(title);
  const byTitle = LEGACY_UNIT_MAPPING.filter((entry) => LEGACY_PLANNER_LESSONS[entry.sourceSubjectId] === lesson
    && normalizeLegacyLabel(entry.sourceTitle) === normalizedTitle);
  const entry = byTitle.find((item) => item.sourceId === id) ?? (byTitle.length === 1 ? byTitle[0] : undefined);
  if (entry) return entry;

  const unit = CANONICAL_UNITS[lesson]?.find((candidate) => normalizeLegacyLabel(candidate) === normalizedTitle);
  if (!unit) return undefined;
  return {
    sourceId: id ?? '', sourceTitle: title, sourceSubjectId: subject,
    relation: 'exact', targets: [{ lesson, unit }], reason: 'Kanonik ders ve ünite adı birebir eşleşiyor.',
  };
}

export function selectLegacyUnit(
  mapping: LegacyUnitMapping | undefined,
  subtopics: readonly string[] = [],
): CanonicalUnitTarget | undefined {
  if (!mapping || mapping.relation === 'unresolved') return undefined;
  if (mapping.relation !== 'split') return mapping.targets[0];

  const labels = new Set(subtopics.map(normalizeLegacyLabel));
  const choices = mapping.targets.filter(({ unit }) => labels.has(normalizeLegacyLabel(unit)));
  return choices.length === 1 ? choices[0] : undefined;
}
