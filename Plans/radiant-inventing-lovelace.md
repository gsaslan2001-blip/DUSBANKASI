# Plan: Stitch Statistics Dashboard → DUSBANKASI_UI_V2

## Context
`Untitled-1.html` (Stitch çıktısı) referans alınarak `StatisticsView.tsx`'in layout, KPI kartları ve Ünite Isı Haritası bölümleri yeniden yazılacak. Mevcut D3 chart bileşenleri (DailyActivityChart, LessonProgressChart, SegmentChart, CountSparkline, ContributionHeatMap, WeeklyComparison, AnimatedCounter) ve `stats.ts` veri akışı korunacak.

## Değişecek Tek Dosya
`src/components/StatisticsView.tsx` — full rewrite (sadece bu dosya)

## Bölüm Bölüm Değişiklikler

### 1. Sayfa Başlığı (YENİ)
- "İstatistikler" — 56px font-black + alt başlık "Detaylı performans analizi ve gelişim verileri."

### 2. KPI Grid (4×2) — StatCard rewrite
- `rounded-xl`, `w-1.5` sol akcent çubuğu (tam yükseklik)
- 8 kart: Soru Bankası (SVG donut), Toplam Cevaplama, Genel Doğruluk, Doğru Cevap, Yanlış Cevap, Ustalaşılan, Çalışma Serisi, Günlük Rekor
- İkonlar: lucide-react (BookOpen, TrendingUp, Gauge, CheckCircle2, XCircle, Crown, Flame, Trophy)
- Veri: `computeOverviewStats()`, `loadStreak()`, `getActivitySummary()`

### 3. Günlük Aktivite — D3 DailyActivityChart korunacak
- Kart konteyneri `rounded-xl` restyle
- Range seçici (14/30/90G) + gün detay popup aynen kalacak

### 4. En İyi Ders & Ünite (2 sütun) — glow orb ekle
- Arkada blur orb div'leri
- Büyük ikon kutuları (96×96), yan yana istatistikler

### 5. Dağılım (2 sütun) — D3 korunacak
- Sol: LessonProgressChart, Sağ: SegmentChart (zorluk + ustalık)

### 6. Trend & Weekly (2 sütun) — D3 korunacak
- Sol: CountSparkline, Sağ: WeeklyComparison

### 7. Heatmap & Özet (3 sütun) — D3 korunacak
- Sol (span 2): ContributionHeatMap, Sağ: 5 satırlık seri özeti

### 8. Ünite Isı Haritası (tam genişlik) — REWRITE
- **Mevcut** iyi: ünite isimleri, kapsama %'si, tıklayınca detay
- **Stitch'ten alınan**: ders bazlı gruplama (başlık + divider çizgisi), renk legend'ı
- **Birleşim**: Gruplandırılmış layout + gerçek isimler + kapsama renkleri + tıklanabilir detay

## Korunacaklar
- Tüm `src/components/charts/*` D3 bileşenleri
- `src/lib/stats.ts` veri akışı
- `src/theme/index.ts` tema sistemi
- `src/App.tsx`'teki `<StatisticsView>` kullanımı
- Mevcut `AnimatedCounter`, `SegmentBar` yardımcıları

## Verification
1. `npm run dev` ile uygulamayı başlat
2. İstatistikler sayfasına git
3. Tüm KPI kartlarının doğru veri gösterdiğini kontrol et
4. Grafiklerin (D3) çalıştığını doğrula
5. Ünite Isı Haritası'nda gerçek ünite isimleri ve kapsama %'lerini kontrol et
6. Karanlık/açık tema geçişinde kart stillerinin düzgün olduğunu doğrula
