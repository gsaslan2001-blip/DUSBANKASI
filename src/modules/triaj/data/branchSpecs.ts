import type { CanonicalBranchSpec, TopicTaxonomyItem } from '../types';

export const CANONICAL_16_BRANCHES: CanonicalBranchSpec[] = [
  { code: 'B01', name: 'Anatomi', shortName: 'Anatomi', category: 'TEMEL_BILIMLER', questionCount: 6, targetAccuracyPercent: 88, targetNet: 5.3 },
  { code: 'B02', name: 'Histoloji ve Embriyoloji', shortName: 'Histoloji', category: 'TEMEL_BILIMLER', questionCount: 4, targetAccuracyPercent: 90, targetNet: 3.6 },
  { code: 'B03', name: 'Fizyoloji', shortName: 'Fizyoloji', category: 'TEMEL_BILIMLER', questionCount: 4, targetAccuracyPercent: 90, targetNet: 3.6 },
  { code: 'B04', name: 'Tıbbi Biyokimya', shortName: 'Biyokimya', category: 'TEMEL_BILIMLER', questionCount: 6, targetAccuracyPercent: 86, targetNet: 5.2 },
  { code: 'B05', name: 'Tıbbi Mikrobiyoloji', shortName: 'Mikrobiyoloji', category: 'TEMEL_BILIMLER', questionCount: 6, targetAccuracyPercent: 88, targetNet: 5.3 },
  { code: 'B06', name: 'Tıbbi Patoloji', shortName: 'Patoloji', category: 'TEMEL_BILIMLER', questionCount: 4, targetAccuracyPercent: 90, targetNet: 3.6 },
  { code: 'B07', name: 'Tıbbi Farmakoloji', shortName: 'Farmakoloji', category: 'TEMEL_BILIMLER', questionCount: 6, targetAccuracyPercent: 88, targetNet: 5.3 },
  { code: 'B08', name: 'Tıbbi Biyoloji ve Genetik', shortName: 'Biyoloji', category: 'TEMEL_BILIMLER', questionCount: 4, targetAccuracyPercent: 92, targetNet: 3.7 },
  { code: 'B09', name: 'Ağız, Diş ve Çene Cerrahisi', shortName: 'Çene Cerrahisi', category: 'KLINIK_BILIMLER', questionCount: 10, targetAccuracyPercent: 95, targetNet: 9.5 },
  { code: 'B10', name: 'Ağız, Diş ve Çene Radyolojisi', shortName: 'Radyoloji', category: 'KLINIK_BILIMLER', questionCount: 10, targetAccuracyPercent: 92, targetNet: 9.2 },
  { code: 'B11', name: 'Periodontoloji', shortName: 'Periodontoloji', category: 'KLINIK_BILIMLER', questionCount: 10, targetAccuracyPercent: 90, targetNet: 9.0 },
  { code: 'B12', name: 'Ortodonti', shortName: 'Ortodonti', category: 'KLINIK_BILIMLER', questionCount: 10, targetAccuracyPercent: 88, targetNet: 8.8 },
  { code: 'B13', name: 'Çocuk Diş Hekimliği (Pedodonti)', shortName: 'Pedodonti', category: 'KLINIK_BILIMLER', questionCount: 10, targetAccuracyPercent: 90, targetNet: 9.0 },
  { code: 'B14', name: 'Endodonti', shortName: 'Endodonti', category: 'KLINIK_BILIMLER', questionCount: 10, targetAccuracyPercent: 92, targetNet: 9.2 },
  { code: 'B15', name: 'Restoratif Diş Tedavisi', shortName: 'Restoratif', category: 'KLINIK_BILIMLER', questionCount: 10, targetAccuracyPercent: 90, targetNet: 9.0 },
  { code: 'B16', name: 'Protetik Diş Tedavisi', shortName: 'Protetik', category: 'KLINIK_BILIMLER', questionCount: 10, targetAccuracyPercent: 88, targetNet: 8.8 }
];

export const INITIAL_TOPIC_TAXONOMY: TopicTaxonomyItem[] = [
  { id: 'KM-01', branchCode: 'B09', branchName: 'Ağız, Diş ve Çene Cerrahisi', mainTopic: 'Gömülü Diş Cerrahisi', subtopic: 'Pell-Gregory & Winter Sınıflaması, İnferior Alveolar Sinir Komşuluğu', semanticCode: 'ADCC_IMPACT_01', dusWeight: 2.0, fsrsStabilityS: 0, fsrsDifficultyD: 7.8 },
  { id: 'KM-02', branchCode: 'B09', branchName: 'Ağız, Diş ve Çene Cerrahisi', mainTopic: 'Odontojenik Kistler ve Tümörler', subtopic: 'Ameloblastoma, OKK (PTCH1) ve Marsüpyalizasyon Kriterleri', semanticCode: 'ADCC_CYST_02', dusWeight: 1.9, fsrsStabilityS: 0, fsrsDifficultyD: 8.4 },
  { id: 'KM-03', branchCode: 'B14', branchName: 'Endodonti', mainTopic: 'Kök Kanal Anatomisi ve İrrigasyon', subtopic: 'NaOCl + EDTA Etkileşimi, Klorheksidin PCA Çökeltisi', semanticCode: 'ENDO_IRRIG_01', dusWeight: 1.8, fsrsStabilityS: 0, fsrsDifficultyD: 6.2 },
  { id: 'KM-04', branchCode: 'B11', branchName: 'Periodontoloji', mainTopic: '2017 Yeni Periodontal Sınıflama', subtopic: 'Evreleme (Stage I-IV) ve Derecelendirme (Grade A-C) HbA1c Eşiği', semanticCode: 'PERIO_CLASS_17', dusWeight: 2.0, fsrsStabilityS: 0, fsrsDifficultyD: 7.5 },
  { id: 'KM-05', branchCode: 'B16', branchName: 'Protetik Diş Tedavisi', mainTopic: 'Hareketli Bölümlü Protez Planlaması', subtopic: 'Kennedy Sınıflaması, Kroşe Biyomekaniği ve İndirekt Tutucular', semanticCode: 'PROT_KENNEDY_01', dusWeight: 1.9, fsrsStabilityS: 0, fsrsDifficultyD: 8.8 },
  { id: 'KM-06', branchCode: 'B15', branchName: 'Restoratif Diş Tedavisi', mainTopic: 'Adeziv Sistemler ve Bağlanma', subtopic: '10-MDP Kimyasal Bağlanma, HEMA Faz Ayrılması ve C-Faktörü', semanticCode: 'REST_ADHES_01', dusWeight: 1.8, fsrsStabilityS: 0, fsrsDifficultyD: 6.9 },
  { id: 'KM-07', branchCode: 'B12', branchName: 'Ortodonti', mainTopic: 'Sefalometrik Analiz ve Biyomekanik', subtopic: 'SNA, SNB, ANB Açıları, Moment/Kuvvet Oranı ve Devrilme Hareketi', semanticCode: 'ORTO_CEPH_01', dusWeight: 1.7, fsrsStabilityS: 0, fsrsDifficultyD: 8.9 },
  { id: 'KM-08', branchCode: 'B13', branchName: 'Çocuk Diş Hekimliği (Pedodonti)', mainTopic: 'Dental Travmatoloji ve Vital Pulpa', subtopic: 'Avülsiyon Splint Süreleri (2 Hafta vs 4 Hafta) ve MTA Apeksifikasyon', semanticCode: 'PEDO_TRAUMA_01', dusWeight: 1.9, fsrsStabilityS: 0, fsrsDifficultyD: 7.6 },
  { id: 'KM-09', branchCode: 'B10', branchName: 'Ağız, Diş ve Çene Radyolojisi', mainTopic: 'Çene Lezyonları Radyomorfolojisi', subtopic: 'Sabun Köpüğü, Tenis Raketi, Güneş Işını Periost Reaksiyonları', semanticCode: 'RAD_LESION_01', dusWeight: 1.8, fsrsStabilityS: 0, fsrsDifficultyD: 7.1 },
  { id: 'KM-10', branchCode: 'B01', branchName: 'Anatomi', mainTopic: 'Kafa Çiftleri ve Foramenler', subtopic: 'N. Trigeminus Dalları, Fossa Pterygopalatina Geçişleri', semanticCode: 'ANAT_CRANIAL_05', dusWeight: 1.7, fsrsStabilityS: 0, fsrsDifficultyD: 8.3 },
  { id: 'KM-11', branchCode: 'B07', branchName: 'Tıbbi Farmakoloji', mainTopic: 'Lokal Anestezikler ve Antibiyotik Profilaksisi', subtopic: 'Artikain Tiyofen Halkası, Methemoglobinemi (Prilokain) ve AHA Rejimi', semanticCode: 'FARM_LOCAL_01', dusWeight: 1.8, fsrsStabilityS: 0, fsrsDifficultyD: 6.5 },
  { id: 'KM-12', branchCode: 'B05', branchName: 'Tıbbi Mikrobiyoloji', mainTopic: 'Oral Mikrobiyoloji ve Biyofilm', subtopic: 'Socransky Kırmızı Kompleks (P. gingivalis, T. forsythia, T. denticola)', semanticCode: 'MIKRO_RED_01', dusWeight: 1.6, fsrsStabilityS: 0, fsrsDifficultyD: 6.0 },
  { id: 'KM-13', branchCode: 'B04', branchName: 'Tıbbi Biyokimya', mainTopic: 'Bağ Dokusu ve Kollajen Biyosentezi', subtopic: 'C Vitamini Hidroksilasyonu, Ehlers-Danlos ve Osteogenesis Imperfecta', semanticCode: 'BIYO_COLLAGEN_01', dusWeight: 1.5, fsrsStabilityS: 0, fsrsDifficultyD: 7.7 },
  { id: 'KM-14', branchCode: 'B06', branchName: 'Tıbbi Patoloji', mainTopic: 'Tükürük Bezi Tümörleri', subtopic: 'Pleomorfik Adenom (PLAG1), Mukoepidermoid Karsinom (CRTC1-MAML2)', semanticCode: 'PAT_SALIVARY_01', dusWeight: 1.7, fsrsStabilityS: 0, fsrsDifficultyD: 8.5 },
  { id: 'KM-15', branchCode: 'B02', branchName: 'Histoloji ve Embriyoloji', mainTopic: 'Odontogenez ve Faringeal Arkuslar', subtopic: 'Tomurcuk-Takke-Çan Evresi, 1. Faringeal Arkus (Meckel Kıkırdağı)', semanticCode: 'HISTO_ODONTO_01', dusWeight: 1.5, fsrsStabilityS: 0, fsrsDifficultyD: 6.8 },
  { id: 'KM-16', branchCode: 'B03', branchName: 'Fizyoloji', mainTopic: 'Nörofizyoloji ve Kas Kasılması', subtopic: 'Ağrı Kapı Kontrol Teorisi (A-delta vs C Lifleri), Sarkomer Kalsiyum Döngüsü', semanticCode: 'FIZYO_PAIN_01', dusWeight: 1.4, fsrsStabilityS: 0, fsrsDifficultyD: 6.4 }
];
