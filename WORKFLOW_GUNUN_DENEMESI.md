# WORKFLOW: Günün Denemesi — Atlas Oyun Kitabı

> **Kim kullanır:** Atlas (veya Supabase MCP erişimi olan herhangi bir ajan)  
> **Tetikleyici:** Kullanıcı sohbette konularını ve soru sayısını yazar  
> **Çıktı:** `daily_exams` tablosuna kayıtlı hazır sınav + kullanıcıya özet rapor  
> **Referans:** [CLAUDE.md §2 daily_exams](./CLAUDE.md) · [AGENTS.md](./AGENTS.md)

---

## 0. ÖN KONTROL — Oturumun İlk Adımı

Her seferinde şunu yap, atma:

```sql
-- Tablo varlığını doğrula (ilk çalıştırmada oluşturulmamış olabilir)
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'daily_exams'
ORDER BY ordinal_position;
```

Tablo yoksa → `supabase-schema.sql` içindeki `CREATE TABLE daily_exams` bloğunu çalıştır.

---

## 1. KULLANICI MESAJINI PARSE ET

Kullanıcı şu formatta yazar:
```
"Bugün çalışacağım konular, 100 soruluk deneme oluştur:
 Radyoloji - Ünite 13: Diş Anomalileri
 Patoloji - Ünite 4: İMMÜN SİSTEM HASTALIKLARI
 ..."
```

**Çıkarman gerekenler:**
- `ders_ünite_listesi`: `[(lesson, unit), ...]`
- `hedef_soru_sayısı`: integer (default 100)

**⚠️ Kritik:** `lesson` ve `unit` değerlerini asla AI'a ürettirme. Veritabanından doğrula (Adım 2).

---

## 2. VERİTABANI DOĞRULAMASI

```sql
-- Kullanıcının yazdığı ders/ünite çiftlerinin DB'de karşılığını bul
-- (ILIKE ile büyük/küçük harf toleranslı)
SELECT lesson, unit, COUNT(*) AS soru_sayisi
FROM questions
WHERE quality_flag IS NULL OR quality_flag = 'reviewed_keep'
  AND (
    (lesson ILIKE '%Radyoloji%' AND unit ILIKE '%Diş Anomali%')
    OR (lesson ILIKE '%Patoloji%' AND unit ILIKE '%İmmün%')
    -- ... diğer çiftler
  )
GROUP BY lesson, unit
ORDER BY lesson, unit;
```

Bu sorgu iki işi yapar:
1. Exact `lesson` ve `unit` değerlerini öğrenirsin (büyük/küçük harf duyarlı — bunu kopyalayacaksın)
2. Toplam havuz büyüklüğünü görürsün

**Havuz < hedef soru sayısı ise** → hedef sayıyı havuz büyüklüğüne düşür.

---

## 3. KULLANICI VE STATS SORGUSU

```sql
-- Kullanıcı ID (email'e göre)
SELECT id AS user_id FROM auth.users WHERE email = 'dtfurkankurt@gmail.com';

-- Sonraki day_number
SELECT COUNT(*) + 1 AS day_number FROM daily_exams WHERE user_id = '<user_id>';

-- Bu ünitelerdeki daha önce çözülmüş sorular
SELECT qs.question_id, qs.attempts, qs.difficulty
FROM question_stats qs
JOIN questions q ON q.id = qs.question_id
WHERE qs.user_id = '<user_id>'
  AND qs.attempts > 0
  AND q.lesson IN ('Radyoloji', 'Patoloji', ...);
```

**Strateji kararı:**
- `attempts = 0` olan → "Yeni Soru" (%80 hedef)
- `attempts > 0` olan → difficulty'ye göre "Zor/Orta/Kolay" (%20 hedef)
- Eğer hiç görülmemiş soru varsa (0 attempts) → %100 yeni strateji devreye girer

---

## 4. SORU SEÇİMİ — ANA SQL

`buildDailyExam()` algoritmasının SQL karşılığı:

```sql
WITH

-- Hedef ünitelerden tüm geçerli soruları çek
havuz AS (
  SELECT q.id, q.lesson, q.unit
  FROM questions q
  WHERE (q.quality_flag IS NULL OR q.quality_flag = 'reviewed_keep')
    AND (
      (q.lesson = 'Radyoloji' AND q.unit = 'Ünite 13: Diş Anomalileri')
      OR (q.lesson = 'Patoloji'  AND q.unit = '...')
      -- tüm çiftler
    )
),

-- Kullanıcı stats
stats AS (
  SELECT question_id, attempts, difficulty
  FROM question_stats
  WHERE user_id = '<user_id>'
),

-- Yeni vs görülmüş sınıflandırması
sinifli AS (
  SELECT
    h.id,
    h.lesson,
    h.unit,
    CASE
      WHEN s.attempts IS NULL OR s.attempts = 0 THEN 'yeni'
      WHEN s.difficulty >= 7 THEN 'zor'
      WHEN s.difficulty >= 4 THEN 'orta'
      ELSE 'kolay'
    END AS kategori,
    ROW_NUMBER() OVER (
      PARTITION BY h.lesson, kategori
      ORDER BY RANDOM()
    ) AS siralama
  FROM havuz h
  LEFT JOIN stats s ON s.question_id = h.id
),

-- Hedef dağılım: 80 yeni + 20 zor (fallback: orta → kolay)
secim AS (
  SELECT id FROM sinifli
  WHERE (kategori = 'yeni' AND siralama <= 80)
     OR (kategori = 'zor'  AND siralama <= 20)
  LIMIT 100
)

SELECT id FROM secim;
```

**Dağılım yetersizse (fallback):** Zor soru yoksa orta, orta yoksa kolay, yeni soru yoksa hepsi solved.  
Toplam < hedef ise tüm havuzu al.

---

## 5. KAYDETME

**İsimlendirme kuralı:** Denemeye her zaman anlamlı bir `name` ver. Örn: "Endodonti Deneme-1", "Karma Deneme 11 Mayıs".
Eğer kullanıcı bir isim belirtmediyse, içeriğe göre otomatik oluştur (örn. "Radyoloji-Patoloji Karma").

```sql
-- ⚠️ question_ids uuid[] tipinde — MUTLAKA ::uuid[] ile cast et
INSERT INTO daily_exams (user_id, day_number, exam_date, name, question_ids, breakdown, status)
VALUES (
  '<user_id>',
  <day_number>,
  CURRENT_DATE,
  '<deneme_ismi>',           -- Faz 5: anlamlı isim, örn. "Endodonti Deneme-1"
  ARRAY[
    '<uuid1>',
    '<uuid2>'
    -- ...
  ]::uuid[],
  '{
    "totalPool": 684,
    "newCount": 80,
    "hardCount": 15,
    "mediumCount": 5,
    "easyCount": 0,
    "byLesson": {
      "Radyoloji": {"new": 30, "review": 5},
      "Patoloji":  {"new": 10, "review": 2}
    }
  }'::jsonb,
  'pending'
)
RETURNING id, day_number, exam_date, array_length(question_ids, 1) AS soru_sayisi;
```

---

## 6. RAPOR ŞABLONU

Kayıt başarılı olduktan sonra kullanıcıya ver:

```
════ GÜNÜN DENEMESİ HAZIR ═══════════════
📅  Tarih:      2026-05-11 (1. Gün)
📊  Toplam:     100 soru
🆕  Yeni:       80 soru (%80)
🔴  Zor:        15 soru
🟡  Orta:        5 soru
🟢  Kolay:       0 soru

DERS DAĞILIMI:
  Radyoloji (Ünite 13-16)     → 35 soru (28 yeni, 7 tekrar)
  Patoloji (Ünite 4)          → 15 soru (13 yeni, 2 tekrar)
  Protez (Ünite 6)            → 12 soru (12 yeni, 0 tekrar)
  Endodonti (Ünite 2, 16)     → 14 soru (14 yeni, 0 tekrar)
  Fizyoloji (Ünite 8)         → 10 soru ( 8 yeni, 2 tekrar)
  Histoloji (Ünite 2)         →  8 soru ( 3 yeni, 5 tekrar)
  Periodontoloji (Ünite 1)    →  6 soru ( 2 yeni, 4 tekrar)

Uygulama açıldığında Günün Denemesi kartı aktif olacak.
════════════════════════════════════════
```

---

## 7. BİLİNEN HATALAR VE ÇÖZÜMLERİ

| Hata | Sebep | Çözüm |
|------|-------|-------|
| `ERROR 42804` (type mismatch) | `question_ids` `uuid[]` tipinde; `text[]` gönderildi | Array'in sonuna `::uuid[]` ekle |
| Büyük çıktı sorunu | 100 ID listesi context'e sığmıyor | ID'leri dosyaya yaz, `view_file` ile oku |
| Unit bulunamadı | Büyük/küçük harf veya özel karakter farkı | ILIKE + DB'den dönen exact değeri kullan |
| RLS hatası (row-level security) | `auth.uid()` context'i yok | `service_role` key ile bağlan veya anon key ile yapıyorsan policy'yi geçici aç |
| `daily_exams` tablosu yok | Migration çalıştırılmamış | `supabase-schema.sql` §2 CREATE TABLE bloğunu çalıştır |

---

## 8. OPTİMİZASYON — Bir Sonraki Seferinde Daha Hızlı

1. **Şema kontrolü ilk adımda** → `information_schema` ile tablo varlığını doğrula, tip uyuşmazlığını önle
2. **Tek CTE bloğu** → user_id + day_number + stats sorgusunu tek sorgu ile çek
3. **Fuzzy search** → Kullanıcının yazdığı ünite adını ILIKE ile DB'den yakala, kopyala-yapıştır hatası yaşama
4. **Partition by lesson** → `ROW_NUMBER() OVER (PARTITION BY lesson ORDER BY RANDOM())` ile adil dağılım, manuel seçimden hızlı

---

## 9. FAZ 5 — DENEME BAZLI SORU TAKİBİ (exam_answers)

Deneme tamamlandığında, uygulama içindeki `handleComplete()` fonksiyonu otomatik olarak her sorunun cevabını `exam_answers` tablosuna kaydeder.

Bu sayede kullanıcı sonradan şu sorguları yapabilir:

### "Endodonti Deneme-1'de yanlış yaptıklarım neydi?"
```sql
SELECT q.*, ea.selected_answer, ea.correct_answer
FROM exam_answers ea
JOIN questions q ON q.id = ea.question_id
JOIN daily_exams de ON de.id = ea.exam_id
WHERE de.name = 'Endodonti Deneme-1'
  AND ea.user_id = '<user_id>'
  AND ea.is_correct = false;
```

### "Bugünkü denemede yanlış yaptıklarım?"
```sql
SELECT q.*, ea.selected_answer
FROM exam_answers ea
JOIN questions q ON q.id = ea.question_id
JOIN daily_exams de ON de.id = ea.exam_id
WHERE de.exam_date = CURRENT_DATE
  AND ea.user_id = '<user_id>'
  AND ea.is_correct = false;
```

### "Son 7 gündeki tüm yanlışlarım, derse göre gruplanmış"
```sql
SELECT q.lesson, q.unit, COUNT(*) AS hata_sayisi
FROM exam_answers ea
JOIN questions q ON q.id = ea.question_id
JOIN daily_exams de ON de.id = ea.exam_id
WHERE ea.user_id = '<user_id>'
  AND ea.is_correct = false
  AND de.exam_date >= CURRENT_DATE - 7
GROUP BY q.lesson, q.unit
ORDER BY hata_sayisi DESC;
```

---

*Son güncelleme: 2026-05-11 — Faz 5 exam_answers eklendi.*
