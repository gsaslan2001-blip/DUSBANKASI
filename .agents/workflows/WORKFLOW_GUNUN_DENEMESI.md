# WORKFLOW: Günün Denemesi (v3) — Atlas & Ajan Kılavuzu

> **Kim kullanır:** Atlas, Gemini, Antigravity veya CLI (`scripts/generate_daily_exam.py`)
> **Tetikleyici:** 
>   1. Otomatik Cron (Her gece TR 00:01 / UTC 21:01)
>   2. Terminal Komutu: `python scripts/generate_daily_exam.py [--date YYYY-MM-DD] [--force]`
>   3. Kullanıcı sohbette "günün denemesini oluştur/hazırla" dediğinde
> **Çıktı:** `daily_exams` tablosuna kayıtlı hazır sınav + kullanıcıya özet rapor  
> **Referans:** [GEMINI.md §2 daily_exams](./GEMINI.md) · [GEMINI.md §0 Tetikleyici→Araç](./GEMINI.md)

---

## 1. KURALLAR VE MİMARİ (v3)

### A. Referans Alınacak 14 Ana Ders
Yalnızca aşağıdaki 14 ana ders referans alınır:
1. `Anatomi`
2. `Biyokimya`
3. `Cerrahi`
4. `Endodonti`
5. `Fizyoloji`
6. `Histoloji`
7. `Mikrobiyoloji`
8. `Ortodonti`
9. `Patoloji`
10. `Pedodonti`
11. `Periodontoloji`
12. `Protez`
13. `Radyoloji`
14. `Restoratif`

### B. Hariç Tutulacak Yan Dersler (MUTLAK KURAL)
Aşağıdaki yan veya yapay dersler denemelere **ASLA DAHİL EDİLMEZ**:
- `ÇIKMIŞ SORULAR`
- `Pedodonti Cikmis` (ve genel olarak 'cikmis' / 'çıkmış' içeren yan dersler)
- `Yanlışlarım`
- Quality flag olarak `quality_flag IS NULL OR quality_flag IN ('reviewed_keep', 'high_yield')` şartını sağlamayanlar.

---

## 2. GÜNLÜK VE HAFTALIK AKIŞ PLANI

### Pazartesi – Cumartesi (Hafta İçi & Cumartesi — 6 Gün):
- **Günde 4 Ana Ders** seçilir.
- **Her dersten 25 Soru** (20 yeni hiç çözülmemiş + 5 zor/tekrar, eksikse havuzdan tamamlanır).
- **Günlük Toplam: 100 Soru**.
- Dersler arası **serpiştirme (interleaving / round-robin)** uygulanır (aynı ders art arda blok oluşturmaz).

**Dengeli 6 Günlük Ders Dağılımı:**
- **Pazartesi (1):** `Periodontoloji`, `Fizyoloji`, `Endodonti`, `Anatomi` (100 soru)
- **Salı (2):** `Protez`, `Histoloji`, `Biyokimya`, `Ortodonti` (100 soru)
- **Çarşamba (3):** `Patoloji`, `Radyoloji`, `Cerrahi`, `Pedodonti` (100 soru)
- **Perşembe (4):** `Mikrobiyoloji`, `Restoratif`, `Endodonti`, `Periodontoloji` (100 soru)
- **Cuma (5):** `Protez`, `Pedodonti`, `Ortodonti`, `Fizyoloji` (100 soru)
- **Cumartesi (6):** `Radyoloji`, `Patoloji`, `Histoloji`, `Anatomi` (100 soru)

### Pazar Günü (DOW 7):
- **Deneme Adı:** `Haftanın Yanlışları — DD.MM.YYYY`
- **Soru Sayısı:** **SINIRSIZ** (Kullanıcı o hafta boyunca `exam_answers` veya `question_stats`'ta kaç soru yanlış yaptıysa HEPSİ gelir).
- **Kapsam:** Kullanıcının son 7 gündeki tüm hatalı soruları (benzersiz `question_id` listesi).

---

## 3. DOĞRUDAN ÇALIŞTIRMA / CLI ARACI

Günün denemesini tek komutla oluşturmak için:

```bash
# Bugünün denemesini oluştur (idempotent, zaten varsa uyarır)
python scripts/generate_daily_exam.py

# Zorla yeniden oluştur
python scripts/generate_daily_exam.py --force

# Belirli bir tarih için önizleme (dry-run)
python scripts/generate_daily_exam.py --date 2026-08-16 --dry-run
```

---

## 4. RAPOR FORMATI

Deneme üretildikten sonra kullanıcıya sunulacak standart rapor:

### Hafta İçi Örnek Raporu (Pzt - Cmt):
```
════ GÜNÜN DENEMESİ HAZIR ═══════════════════════
📅  Tarih:      2026-08-15 (1. Gün — Cumartesi)
📝  İsim:       Karma Deneme — 15.08.2026
📊  Toplam:     100 soru (4 Ders x 25 Soru)
🆕  Yeni:       80 soru (%80)
🔄  Tekrar/Zor: 20 soru (%20)

DERS DAĞILIMI:
  • Radyoloji: 25 soru (20 yeni, 5 tekrar)
  • Patoloji: 25 soru (20 yeni, 5 tekrar)
  • Histoloji: 25 soru (20 yeni, 5 tekrar)
  • Anatomi: 25 soru (20 yeni, 5 tekrar)

Uygulama açıldığında Günün Denemesi kartı aktif olacaktır.
═════════════════════════════════════════════════
```

### Pazar Günü Örnek Raporu (Haftanın Yanlışları):
```
════ GÜNÜN DENEMESİ HAZIR (PAZAR) ═══════════════
📅  Tarih:      2026-08-16 (Pazar)
📝  İsim:       Haftanın Yanlışları — 16.08.2026
📊  Toplam:     99 soru (SINIRSIZ HAFTALIK YANLIŞLAR)

DERS DAĞILIMI:
  • Restoratif: 18 soru
  • Radyoloji: 17 soru
  • Histoloji: 15 soru
  • Pedodonti: 10 soru
  • Mikrobiyoloji: 7 soru
  • Endodonti: 6 soru
  • Ortodonti: 5 soru
  • Fizyoloji: 5 soru
  • Patoloji: 5 soru
  • Periodontoloji: 4 soru
  • Protez: 4 soru
  • Cerrahi: 3 soru

Uygulama açıldığında Haftanın Yanlışları denemesi çözülmeye hazır olacaktır.
═════════════════════════════════════════════════
```
