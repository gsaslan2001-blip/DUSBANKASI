import { CANONICAL_UNITS } from '../../../config/canonicalUnits';
import type { DUSSubject } from '../types';

export const CANONICAL_DUS_SUBJECTS: DUSSubject[] = ([
  // ==================== TEMEL BİLİMLER (6 DERS BLOĞU / 72 ÜNİTE / 40 SORU / %33.33) ====================
  {
    id: 'B01',
    code: 'B01',
    name: 'Anatomi',
    category: 'TEMEL_BILIMLER',
    cognitiveGroup: 'GRUP_A',
    questionCount: 6,
    weightPercentage: 5.0,
    excelColumn: 'K',
    ankiDeckPattern: 'DUS::*Anatomi*',
    description: 'Kemikler, eklemler, kaslar, pleksuslar, dolaşım, sinir sistemi, kraniyal sinirler ve duyu organları.',
    colorTheme: 'sky',
    iconName: 'Skull',
    protocol: {
      cognitiveCharacteristics: 'Düşük kavramsal hikaye, çok yüksek izole terim ve komşuluk yükü. Çok hızlı unutulur.',
      t0Method: 'İkili Kodlama + Ayıklama. Ana kitaptan çalış, saf ezberleri Image Occlusion olarak Anki Öncelikli Desteye at, 10 dk Boş Kağıt anlatımı yap.',
      t3Method: 'T+3 gününde kalan 40 soruyu çöz. Doğru sayısına göre Kova Triyajına ata.',
      questionBankUsage: '1. Soru Bankası %100 tüketilir. 4. Soru Bankası kesinlikle çözülmez (zaman israfı).',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Anatomi* (1-2 kutuluk Image Occlusion tabloları).'
    }
  },
  {
    id: 'B02+B03',
    code: 'B02+B03',
    name: 'Fizyoloji',
    category: 'TEMEL_BILIMLER',
    cognitiveGroup: 'GRUP_B',
    questionCount: 8,
    weightPercentage: 6.67,
    excelColumn: 'L-M',
    ankiDeckPattern: 'DUS::*Histoloji* & DUS::*Fizyoloji*',
    description: 'Hücre ve sistem fizyolojisi (12 ünite, 4 soru) ile genel/özel histoloji ve embriyoloji (16 ünite, 4 soru) konsolide bloğu.',
    colorTheme: 'emerald',
    iconName: 'Activity',
    protocol: {
      cognitiveCharacteristics: 'Fizyolojide yüksek mantıksal mekanizma zinciri (4 soru) + Histoloji/Embriyolojide görsel doku ve gelişim evreleri (4 soru).',
      t0Method: 'Fizyoloji için Detaylandırıcı Sorgulama ("Neden?") + Feynman Tekniği; Histoloji için embriyolojik safhaları Boş Kağıda çiz + T+0 10 soru çöz.',
      t3Method: 'T+3 gününde kalan 40 soruyu çöz. ≥%85 (34+ doğru) ise Yeşil Kovaya ayırıp taburcu et.',
      questionBankUsage: '1. Soru Bankası + Çıkmış DUS soruları + DUSBANKASI karma blokları.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Histoloji* & DUS::*Fizyoloji*.'
    }
  },
  {
    id: 'B04',
    code: 'B04',
    name: 'Biyokimya',
    category: 'TEMEL_BILIMLER',
    cognitiveGroup: 'GRUP_A',
    questionCount: 6,
    weightPercentage: 5.0,
    excelColumn: 'N',
    ankiDeckPattern: 'DUS::*Biyokimya*',
    description: 'Karbonhidratlar, lipidler, metabolizma, aminoasitler, proteinler, enzimler, vitaminler, hormonlar, hücre/organeller ve genetik.',
    colorTheme: 'indigo',
    iconName: 'Dna',
    protocol: {
      cognitiveCharacteristics: 'Yoğun enzim regülatörleri (aktivatör/inhibitör), kofaktörler ve allosterik moleküller.',
      t0Method: 'Hikayeleştirilmiş mekanizma kancaları (Mnemonic) kur, metabolizma yolağını boş kağıda çiz, T+0 10 soru çöz.',
      t3Method: 'T+3 gününde kalan 40 soruyu sınav ciddiyetiyle çöz.',
      questionBankUsage: '1. Soru Bankası + Çıkmış soruların 3 kez taranması.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Biyokimya* (Allosterik enzim ve vitamin tabloları).'
    }
  },
  {
    id: 'B05',
    code: 'B05',
    name: 'Mikrobiyoloji',
    category: 'TEMEL_BILIMLER',
    cognitiveGroup: 'GRUP_A',
    questionCount: 6,
    weightPercentage: 5.0,
    excelColumn: 'O',
    ankiDeckPattern: 'DUS::*Mikrobiyoloji*',
    description: 'Temel mikrobiyoloji, immünoloji, bakteriler, virüsler, mantarlar, parazitoloji ve HEDEF70 özet taraması.',
    colorTheme: 'violet',
    iconName: 'Bug',
    protocol: {
      cognitiveCharacteristics: 'Çok yüksek volatiliteli saf ezber (virüs reseptörleri, toksinler, boyanma özellikleri).',
      t0Method: 'Fonolojik ve absürt hafıza kancaları (örn. EBV -> CD21, Rino -> ICAM-1) kur ve T+0 10 soru çöz.',
      t3Method: 'T+3 testi sonrası zayıf kalan mikroorganizmaları 15 dk oku ve yıldızla.',
      questionBankUsage: '1. Soru Bankası + DUSBANKASI ünite modu.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Mikrobiyoloji* (Virüs-Reseptör ve Bakteri Toksin tabloları).'
    }
  },
  {
    id: 'B06',
    code: 'B06',
    name: 'Patoloji',
    category: 'TEMEL_BILIMLER',
    cognitiveGroup: 'GRUP_B',
    questionCount: 4,
    weightPercentage: 3.33,
    excelColumn: 'P',
    ankiDeckPattern: 'DUS::*Patoloji*',
    description: 'Hücresel adaptasyonlar, hemodinamik hastalıklar, inflamasyon, immün sistem, neoplazi, damar/deri/kemik patolojisi ve oral patoloji.',
    colorTheme: 'rose',
    iconName: 'Flame',
    protocol: {
      cognitiveCharacteristics: 'Neden-sonuç zinciri ve histopatolojik ayırıcı tanı kontrastı (özellikle Oral Patoloji ve Odontojenik Kistler/Tümörler).',
      t0Method: 'Detaylandırıcı sorgulama. Benzer kist ve tümörleri yan yana kıyasla, T+0 10 soru çöz.',
      t3Method: 'T+3 vaka soruları + DUSBANKASI karma tarama.',
      questionBankUsage: '1. ve 2. Soru Bankası entegrasyonu.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Patoloji* (İmmünohistokimyasal belirteçler ve tümör gen mutasyonları).'
    }
  },
  {
    id: 'B07',
    code: 'B07',
    name: 'Farmakoloji',
    category: 'TEMEL_BILIMLER',
    cognitiveGroup: 'GRUP_B',
    questionCount: 6,
    weightPercentage: 5.0,
    excelColumn: 'Q',
    ankiDeckPattern: 'DUS::*Farmakoloji*',
    description: 'Genel farmakoloji, kemoterapötikler, otonom sinir sistemi, kardiyovasküler, santral SS, otakoidler/NSAİİ, hormonlar ve diğer ilaçlar.',
    colorTheme: 'amber',
    iconName: 'Pill',
    protocol: {
      cognitiveCharacteristics: 'Yüksek mantıksal reseptör mekanizmaları + izole yan etki ve kontrendikasyon ezberleri.',
      t0Method: 'Reseptör üzerinden fizyolojik etkiyi türet ("Neden taşikardi yapar?"). Yan etkileri kancala ve T+0 10 soru çöz.',
      t3Method: 'T+3 gecikmeli vaka soruları çözümü.',
      questionBankUsage: '1. Soru Bankası + Çıkmış sorular.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Farmakoloji* (Kontrendikasyon ve spesifik yan etki listeleri).'
    }
  },

  // ==================== KLİNİK BİLİMLER (8 DERS BLOĞU / 155 ÜNİTE / 80 SORU / %66.67) ====================
  {
    id: 'B09',
    code: 'B09',
    name: 'Cerrahi',
    category: 'KLINIK_BILIMLER',
    cognitiveGroup: 'GRUP_C',
    questionCount: 10,
    weightPercentage: 8.33,
    excelColumn: 'S',
    ankiDeckPattern: 'DUS::*Cerrahi*',
    description: 'Cerrahiye giriş, anestezi, diş çekimi, gömülü dişler, periapikal/kist/tümör cerrahisi, enfeksiyon, travma, ortognatik cerrahi ve TME.',
    colorTheme: 'red',
    iconName: 'Crosshair',
    protocol: {
      cognitiveCharacteristics: 'Cerrahi anatomi, komplikasyonlar, acil yaklaşımlar, Pell-Gregory ve Le Fort sınıflamaları.',
      t0Method: 'Cerrahi adımları ve sinir hasarı risk haritasını boş kağıda çiz, T+0 10 soru çöz.',
      t3Method: 'T+3 40 Soru. Sarı kova çıkarsa T+14 doğrulama, kırmızı çıkarsa Cumartesi onarım.',
      questionBankUsage: '1. Banka %100, 2. Banka sadece kova onarımlarında, 3. ve 4. Banka vaka hızında.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Cerrahi* (Antibiyotik profilaksi rejimleri, flep endikasyonları ve cerrahi aciller).'
    }
  },
  {
    id: 'B10',
    code: 'B10',
    name: 'Radyoloji',
    category: 'KLINIK_BILIMLER',
    cognitiveGroup: 'GRUP_C',
    questionCount: 10,
    weightPercentage: 8.33,
    excelColumn: 'T',
    ankiDeckPattern: 'DUS::*Radyoloji*',
    description: 'Radyasyon fiziği, projeksiyon geometrisi, intraoral/panoramik/KIBT görüntüleme, kistler, tümörler, sistemik hastalıklar ve kalsifikasyonlar.',
    colorTheme: 'slate',
    iconName: 'Radio',
    protocol: {
      cognitiveCharacteristics: 'Radyolusent/radyoopak lezyon ayırıcı tanısı, KIBT ve projeksiyon artefakt analizi.',
      t0Method: 'Görsel radyografi ve lezyon sınırlarını analiz et ("Sabun köpüğü", "Güneş ışını", "Soğan zarı" vb.), T+0 10 soru çöz.',
      t3Method: 'T+3 40 soru çözümü ve Kova Triyajı.',
      questionBankUsage: '4 Soru Bankası ve DUSBANKASI Favoriler.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Radyoloji* (Görsel kartlar ve radyografik patognomonik bulgular).'
    }
  },
  {
    id: 'B11',
    code: 'B11',
    name: 'Pedodonti',
    category: 'KLINIK_BILIMLER',
    cognitiveGroup: 'GRUP_C',
    questionCount: 10,
    weightPercentage: 8.33,
    excelColumn: 'U',
    ankiDeckPattern: 'DUS::*Pedodonti*',
    description: 'Diş gelişimi ve anomalileri, süt dişi pulpa tedavileri, floridler, fissür örtücüler, travma, davranış yönlendirmesi ve restorasyonlar.',
    colorTheme: 'pink',
    iconName: 'Smile',
    protocol: {
      cognitiveCharacteristics: 'Kalsifikasyon/sürme yaşları, IADT luksasyon-avülsiyon tedavi algoritmaları ve süt dişi kavite prensipleri.',
      t0Method: 'IADT kılavuzu travma karar ağacını çiz. Süt dişi ampütasyon ve kuafaj endikasyonlarını karşılaştır, T+0 10 soru çöz.',
      t3Method: 'T+3 40 soru ile test et.',
      questionBankUsage: '1. Banka + Çıkmışlar + Klinik vaka bankaları.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Pedodonti* (Yer tutucu endikasyon tablosu ve travma splint süreleri).'
    }
  },
  {
    id: 'B12',
    code: 'B12',
    name: 'Endodonti',
    category: 'KLINIK_BILIMLER',
    cognitiveGroup: 'GRUP_C',
    questionCount: 10,
    weightPercentage: 8.33,
    excelColumn: 'V',
    ankiDeckPattern: 'DUS::*Endodonti*',
    description: 'Kök kanal anatomisi, pulpa ve periapikal doku, teşhis, mekanik preparasyon, irrigasyon, medikamentler, vital/rejeneratif endodonti ve travma.',
    colorTheme: 'purple',
    iconName: 'Zap',
    protocol: {
      cognitiveCharacteristics: 'Ayırıcı tanı klinik semptomları (soğuk/sıcak testi, perküsyon), Ni-Ti alaşım fazları ve irrigasyon kimyası.',
      t0Method: 'AAE pulpa-apikal sınıflamasını yan yana vaka tablosu olarak yaz, T+0 10 soru çöz.',
      t3Method: 'T+3 40 soru geri çağırma.',
      questionBankUsage: '4 Soru Bankası tam teşekküllü uygulanır.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Endodonti* (NiTi fazları, NaOCl/EDTA etkileşimleri ve rezorpsiyon tipleri).'
    }
  },
  {
    id: 'B13',
    code: 'B13',
    name: 'Ortodonti',
    category: 'KLINIK_BILIMLER',
    cognitiveGroup: 'GRUP_C',
    questionCount: 10,
    weightPercentage: 8.33,
    excelColumn: 'W',
    ankiDeckPattern: 'DUS::*Ortodonti*',
    description: 'Büyüme ve gelişme, dentisyon, diş hareketi biyomekaniği, sefalometrik teşhis, ankraj, minivida, apareyler, maloklüzyonlar ve retansiyon.',
    colorTheme: 'lime',
    iconName: 'Compass',
    protocol: {
      cognitiveCharacteristics: 'SNA/SNB/ANB açısal değerleri, büyüme teorileri, servikal vertebra maturasyonu ve ortodontik kuvvet biyolojisi.',
      t0Method: 'Sefalometrik referans noktalarını kafa şeması üzerinde işaretle. İskeletsel vs Dişsel ayrımı yap, T+0 10 soru çöz.',
      t3Method: 'T+3 40 soru çözümü ve Kova Triyajı.',
      questionBankUsage: '1. Banka + 3. Banka karma modları.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Ortodonti* (Sefalometrik norm değerleri ve fonksiyonel aparey endikasyonları).'
    }
  },
  {
    id: 'B14',
    code: 'B14',
    name: 'Periodontoloji',
    category: 'KLINIK_BILIMLER',
    cognitiveGroup: 'GRUP_C',
    questionCount: 10,
    weightPercentage: 8.33,
    excelColumn: 'X',
    ankiDeckPattern: 'DUS::*Periodontoloji*',
    description: 'Periodonsiyum anatomisi, etiyoloji, patogenez, gingival patolojiler, periodontitis (2017 sınıflaması), cerrahi/cerrahi olmayan tedavi ve implant.',
    colorTheme: 'green',
    iconName: 'HeartPulse',
    protocol: {
      cognitiveCharacteristics: '2017 AAP/EFP Sınıflaması milimetrik klinik ataşman/kemik kaybı eşikleri, Gracey küret numaraları ve flep teknikleri.',
      t0Method: 'Boş A4 kağıdına 4 sütun aç (Sağlıklı, Periodontitis, Mukogingival, Peri-implant) ve kendi zihninden dök, T+0 10 soru çöz.',
      t3Method: 'T+3 vaka soruları (Evre I-IV, Derece A-C ayrımı).',
      questionBankUsage: '1., 2., 3., 4. Soru Bankası klinik derinlikte kullanılır.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Periodontoloji* (2017 sınıflama matrisi ve kemik içi defekt tipleri).'
    }
  },
  {
    id: 'B15',
    code: 'B15',
    name: 'Protez',
    category: 'KLINIK_BILIMLER',
    cognitiveGroup: 'GRUP_C',
    questionCount: 10,
    weightPercentage: 8.33,
    excelColumn: 'Y',
    ankiDeckPattern: 'DUS::*Protetik*',
    description: 'Diş anatomisi, oklüzyon, sabit protezler, implantoloji, hareketli bölümlü protezler, tam protezler, maddeler bilgisi, TME ve çene yüz protezleri.',
    colorTheme: 'blue',
    iconName: 'Shield',
    protocol: {
      cognitiveCharacteristics: 'Kennedy sınıflamaları, biyomekanik prensipler, kroşe tipleri, ölçü maddeleri ve milimetrik preparasyon eşikleri.',
      t0Method: 'Karşılaştırmalı Tablo + Kitabı Kapat Anlat + T+0 10 Soru (Kennedy sınıflamaları ve kroşeler).',
      t3Method: 'T+3 Kalan 40 Soru + DUSBANKASI Karma Denemeleri.',
      questionBankUsage: 'Klinik ağırlıklı ders: 4 Soru Bankası da Faz 2 ve 3 boyunca aktif tüketilir.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Protetik* (Kroşe endikasyonları, alaşımlar ve preparasyon açıları).'
    }
  },
  {
    id: 'B16',
    code: 'B16',
    name: 'Restoratif',
    category: 'KLINIK_BILIMLER',
    cognitiveGroup: 'GRUP_C',
    questionCount: 10,
    weightPercentage: 8.33,
    excelColumn: 'Z',
    ankiDeckPattern: 'DUS::*Restoratif*',
    description: 'Diş sert dokuları, çürüksüz lezyonlar, dentin hassasiyeti, çürük oluşumu, tükürük, preparasyonlar, adeziv sistemler, kompozitler ve amalgam.',
    colorTheme: 'orange',
    iconName: 'Sparkles',
    protocol: {
      cognitiveCharacteristics: 'Adeziv jenerasyonları (monomer-dentin bağı), kompozit doldurucular, amalgam fazları ve beyazlatma kimyası.',
      t0Method: 'Çapraz Kıyas Tablolarını (Mine vs Dentin, 4-8. Jen Adezivler, Gama-1 vs Gama-2) incele ve T+0 10 soru çöz.',
      t3Method: 'T+3 kalan 40 soru. Yanlışları ana kitaptan 15 dk yama yap.',
      questionBankUsage: '1. Banka + DUSBANKASI ünite taramaları + Klinik 4. Banka.',
      ankiProtocol: 'Anki Filtreli Deste: DUS::*Restoratif* (Florür PPM merdiveni, pin çapları ve adeziv pH değerleri).'
    }
  }
] satisfies DUSSubject[]).map((subject: DUSSubject) => ({ ...subject, unitCount: CANONICAL_UNITS[subject.name]?.length ?? 0 }));
