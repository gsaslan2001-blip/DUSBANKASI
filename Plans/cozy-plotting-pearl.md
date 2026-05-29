# DUSBANKASI × Stitch Arayüz Geliştirme Planı

## Context

DUSBANKASI'nın mevcut UI'ı (React + Tailwind 4 + Glassmorphism) işlevsel olarak tamam ama görsel etki açısından yükseltilebilir. Stitch MCP ile projenin ana temasını (Ethereal Dark Glass, #6f72f2 accent, Inter font) bozmadan **küçük ama etkili değişiklikler** yaparak görünümü güçlendireceğiz. Hedef: DUS çalışma deneyimini daha premium, daha motive edici hale getirmek.

Stitch'te halihazırda `DUSBANKASI_UI_V2` projesi ve `DUSBANKASI Dark Glass` design system kurulu — tema birebir mevcut projeyle uyumlu.

---

## Aşama Aşama Geliştirme Planı

### Faz 1: Ana Dashboard (Home) — En Kritik Görünüm [~30 dk]

**Mevcut Durum:** 6 Bento kartı (CSS grid) + ders kartları listesi. CSS-only hover efektleri, statik blur orb dekorasyonları.

**Stitch İyileştirmeleri:**
- Bento kartları için **canlı gradient kenarlık animasyonları** (yavaşça dönen gradient border glow)
- Kart hover'da **mikro-parçacık efekti** veya parlayan orb
- Hoş Geldin başlığında **gradient text animasyonu**
- Ders kartlarında ilerleme çubuğunun **canlı renk geçişi** (kırmızı → amber → yeşil smooth transition)
- Sayaç widget'ında **pulse animasyonu** ile gün sayısı vurgusu

**Nasıl:** Mevcut Dashboard ekranını (`a87679b4a1f84daf876527a17c2638e5`) edit'leyerek veya yeni varyant generate ederek.

---

### Faz 2: Quiz/Soru Çözüm Ekranı — Core Etkileşim [~30 dk]

**Mevcut Durum:** Framer Motion ile soru geçişleri + açıklama paneli. İşlevsel ama tekdüze.

**Stitch İyileştirmeleri:**
- **Dairesel ilerleme göstergesi** (radial progress ring) soru sayacı yerine
- Doğru cevapta **confetti/parçacık patlama efekti** gösterimi
- Yanlış cevapta **sallanma (shake) animasyonu** + kırmızı glow
- **Süre sayacı** için animasyonlu radial countdown
- Açıklama panelinde **akademik diyagram/diagram gösterimi** (örn. tedavi akış şeması)

**Nasıl:** Mevcut Soru Çözüm ekranını (`395f231abec24a928edf1ec2885c7a0a`) edit'leyerek.

---

### Faz 3: İstatistik Dashboard — Veri Görselleştirme [~45 dk]

**Mevcut Durum:** D3/Recharts tabanlı çok sayıda grafik (ProgressBar, SegmentChart, AccuracySparkline vb.) var ama hepsi statik.

**Stitch İyileştirmeleri:**
- **Animasyonlu KPI kartları** — sayıların yukarı doğru sayması (animated counter)
- **Dairesel tamamlanma diagramı** — ders bazlı tamamlanma yüzdeleri için donut/pie chart
- **Haftalık aktivite takvimi** — GitHub-style contribution heatmap'i animasyonlu
- **Karşılaştırma diyagramları** — dersler arası performansı gösteren radar/spider chart
- **Zayıf konu ağaç haritası** (treemap) vurgusu

**Nasıl:** Statistics Dashboard ekranını (`8bfac11f03df410eb587e064b9777cde`) edit'leyerek.

---

### Faz 4: Deneme Sonuç Ekranı [~20 dk]

**Mevcut Durum:** SimulationResultView — skor kartı + yanlış/doğru listesi. Düz liste görünümü.

**Stitch İyileştirmeleri:**
- **Skor animasyonu** — puan yavaşça artarak gelsin
- **Performans segment diyagramı** (doğru/yanlış/boş pasta dilimi)
- Ders bazlı dağılım bar chart (hangi dersten kaç doğru/yanlış)
- **Öne çıkan zayıf üniteler için spotlight kartları**

---

### Faz 5: Global Elementler & Boş Durumlar [~15 dk]

- **Empty state illüstrasyonları** — animasyonlu SVG/çizimler
- **Loading skeleton** için daha etkileyici shimmer efekti
- **Hata durumu** için görsel olarak daha net feedback
- Header'daki **senkronizasyon durum göstergesi** animasyonu

---

## Teknik Yaklaşım

1. Her faz için Stitch'in `edit_screens` veya `generate_variants` aracını kullan
2. Tema tutarlılığı için her seferinde aynı Design System'i (`assets/2794633749843992736`) hedefle
3. Üretilen ekranları `DUSBANKASI_UI_V2` projesinde (4696758014033354355) topla
4. Her faz bittikten sonra screenshot'ı incele, gerekirse refine et
5. Tüm fazlar bittikten sonra final ekranları referans alarak kod implementasyonuna geç

## Doğrulama

- Her Stitch ekranının screenshot'ı alınıp mevcut UI ile karşılaştırılacak
- Tema tutarlılığı kontrol edilecek (renkler, font, glass efekti)
- Mobil responsive görünüm de kontrol edilecek
