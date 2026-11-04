import { describe, it, expect } from 'vitest';
import {
  CANONICAL_LESSONS,
  CANONICAL_UNITS,
  isCikmisQuestion,
  getCikmisCanonicalLesson,
  getCikmisCanonicalUnit,
  PEDO_CIKMIS_TO_CANONICAL,
} from '../../config/canonicalUnits';

describe('Çıkmış Modu — Kanonik Müfredat ve Eşleme Testleri', () => {
  it('Kanonik dersler listesi tüm 14 ana dersi içerir', () => {
    const requiredLessons = [
      'Anatomi', 'Biyokimya', 'Cerrahi', 'Endodonti', 'Fizyoloji',
      'Histoloji', 'Mikrobiyoloji', 'Ortodonti', 'Patoloji',
      'Pedodonti', 'Periodontoloji', 'Protez', 'Radyoloji', 'Restoratif'
    ];
    for (const lesson of requiredLessons) {
      expect(CANONICAL_LESSONS).toContain(lesson);
      expect(CANONICAL_UNITS[lesson]).toBeDefined();
      expect(CANONICAL_UNITS[lesson].length).toBeGreaterThan(0);
    }
  });

  it('isCikmisQuestion quality_flag veya ders adına göre doğru filtreler', () => {
    expect(isCikmisQuestion({ lesson: 'Patoloji', quality_flag: 'cikmis' })).toBe(true);
    expect(isCikmisQuestion({ lesson: 'Pedodonti Cikmis', quality_flag: null })).toBe(true);
    expect(isCikmisQuestion({ lesson: 'ÇIKMIŞ SORULAR', quality_flag: null })).toBe(true);
    expect(isCikmisQuestion({ lesson: 'Anatomi', quality_flag: null })).toBe(false);
    expect(isCikmisQuestion({ lesson: 'Biyokimya', quality_flag: 'high_yield' })).toBe(false);
  });

  it('getCikmisCanonicalLesson farklı ders adlarını kanonik derslere eşler', () => {
    expect(getCikmisCanonicalLesson({ lesson: 'ÇIKMIŞ SORULAR', unit: 'Ortodonti' })).toBe('Ortodonti');
    expect(getCikmisCanonicalLesson({ lesson: 'Pedodonti Cikmis', unit: '1 DİŞ' })).toBe('Pedodonti');
    expect(getCikmisCanonicalLesson({ lesson: 'Patoloji', unit: 'Neoplazi' })).toBe('Patoloji');
  });

  it('getCikmisCanonicalUnit Pedodonti çıkmış ünitelerini kanonik ünitelere eşler', () => {
    const rawUnit = 'DISLERIN GELISIM ANOMALILERI';
    const canonical = getCikmisCanonicalUnit({ lesson: 'Pedodonti Cikmis', unit: rawUnit });
    expect(canonical).toBe('3 DİŞLERİN GELİŞİM ANOMALİLERİ');
    expect(CANONICAL_UNITS['Pedodonti']).toContain(canonical);
  });

  it('Tüm PEDO_CIKMIS_TO_CANONICAL üniteleri Pedodonti kanonik kataloğunda bulunur', () => {
    const pedoUnits = new Set(CANONICAL_UNITS['Pedodonti']);
    for (const canonicalTarget of Object.values(PEDO_CIKMIS_TO_CANONICAL)) {
      expect(pedoUnits.has(canonicalTarget)).toBe(true);
    }
  });
});
