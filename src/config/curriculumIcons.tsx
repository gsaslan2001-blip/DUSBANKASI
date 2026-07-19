/**
 * DUS Bankası — Ders İkon Eşlemesi (Faz 4)
 *
 * `App.tsx`'teki ad-hoc if/else ikon eşleme zincirinin taşındığı yer. Kasıtlı
 * olarak `curriculum.ts`'ten AYRI bir dosya — bu dosya React/Phosphor içerir,
 * `curriculum.ts` ise `overview.ts` üzerinden Web Worker kernel'ine import
 * edildiği için React'tan bağımsız kalmalı (bkz. curriculum.ts başlığı).
 */
import type { Icon } from '@phosphor-icons/react';
import {
  Microscope, Heartbeat, Flask, Bug, Skull, Pill,
  Stack, Wrench, Syringe, Link, PaintBrush, Scissors, Baby, Lightning,
  SquaresFour,
} from '@phosphor-icons/react';

const LESSON_ICONS: Record<string, Icon> = {
  'Histoloji': Microscope,
  'Fizyoloji': Heartbeat,
  'Biyokimya': Flask,
  'Mikrobiyoloji': Bug,
  'Patoloji': Skull,
  'Farmakoloji': Pill,
  'Protez': Stack,
  'Restoratif': Wrench,
  'Endodonti': Syringe,
  'Ortodonti': Link,
  'Periodontoloji': PaintBrush,
  'Cerrahi': Scissors,
  'Pedodonti': Baby,
  'Radyoloji': Lightning,
};

/** Dersin ikon bileşenini fuzzy match ile bulur; bilinmeyen ders için genel bir ikon döner. */
export function getLessonIcon(lesson: string): Icon {
  const key = Object.keys(LESSON_ICONS).find(k => lesson.toLowerCase().includes(k.toLowerCase()));
  return key ? LESSON_ICONS[key] : SquaresFour;
}
