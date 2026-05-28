# DUSBANKASI — Devir Teslim Raporu (v4.7)

**Tarih:** 2026-05-28 · **Kapsam:** Cross-device istatistik senkronizasyonu — tam yeniden mimari.

---

## 1. Başlangıç Problemi

Kullanıcı telefonda çözdüğü soruların (26 soruluk deneme) bilgisayardaki istatistik ekranına yansımadığını bildirdi.  
Denemeye bilgisayardan devam edebiliyordu (session sync çalışıyordu) ancak:
- **Günlük Çözüm Aktivitesi** tamamen boş görünüyordu
- Diğer istatistiklerin (toplam çözüm, doğruluk) güncellenip güncellenmediği belirsizdi

---

## 2. Tespit Edilen Kök Nedenler

| # | Sorun | Etki |
|---|---|---|
| **1** | `dus_activity_log` (günlük çözüm sayıları) **yalnızca localStorage**'da — hiç cloud'a gitmiyordu | Cihaz değişiminde aktivite geçmişi sıfırlanıyor |
| **2** | `dus_study_streak` (seri bilgisi) **yalnızca localStorage**'da — hiç cloud'a gitmiyordu | Streak cihazlar arasında kopuyor |
| **3** | `question_stats` upsert `(device_id, question_id)` çakışması üzerinden yapılıyordu | Aynı kullanıcı farklı cihazlarda aynı soru için **ayrı satırlar** oluşturuyordu; merge client-side'da karmaşık ve kırılgandı |
| **4** | Upsert çakışmada sadece overwrite yapıyordu (`GREATEST` yoktu) | Cihaz A `attempts=5` push ettikten sonra cihaz B `attempts=3` push ederse 5 kayboluyordu |
| **5** | `StatisticsView` içindeki `useMemo(() => loadAllStats(), [])` boş deps ile tanımlandı | Sync sonrası yenileme `key={statsVersion}` ile sağlanıyordu — teknik olarak çalışıyor ama darboğaz oluşturuyordu |

---

## 3. Uygulanan Düzeltmeler

### DB (Supabase — proje: DUSBANK)

#### Migration 1: `user_data_and_question_stats_user_level`
```sql
-- user_data: activity_log, streak ve gelecekteki JSON blob'lar için
CREATE TABLE user_data (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  key     TEXT NOT NULL,
  value   JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, key)
);
-- RLS: kullanıcı sadece kendi verisini okur/yazar
ALTER TABLE user_data ENABLE ROW LEVEL SECURITY;
CREATE POLICY "user_data_own_all" ON user_data USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- question_stats: aynı kullanıcının farklı cihazlarında oluşan duplicate satırları temizle
DELETE FROM question_stats WHERE id IN (
  SELECT id FROM (
    SELECT id, ROW_NUMBER() OVER (PARTITION BY user_id, question_id ORDER BY attempts DESC) AS rn
    FROM question_stats WHERE user_id IS NOT NULL
  ) ranked WHERE rn > 1
);

-- Giriş yapılmış kullanıcı için cihazdan bağımsız unique index
CREATE UNIQUE INDEX question_stats_user_question_idx
  ON question_stats (user_id, question_id) WHERE user_id IS NOT NULL;
```

#### Migration 2: `upsert_stats_batch_rpc`
```sql
-- Server-side GREATEST() merge — race condition'da data kaybı sıfır
CREATE OR REPLACE FUNCTION upsert_stats_batch(rows JSONB) RETURNS void
LANGUAGE plpgsql SECURITY DEFINER AS $$
...
ON CONFLICT (user_id, question_id) WHERE user_id IS NOT NULL
DO UPDATE SET
  attempts  = GREATEST(EXCLUDED.attempts,  question_stats.attempts),
  corrects  = GREATEST(EXCLUDED.corrects,  question_stats.corrects),
  last_seen = GREATEST(EXCLUDED.last_seen, question_stats.last_seen)
$$;
```

### Kod

#### `src/lib/supabase.ts`
- **`pushStatsToCloud()`**: Giriş yapılmışsa `upsert_stats_batch` RPC kullanıyor (server-side GREATEST merge). Anonim fallback: eski `device_id,question_id` yolu korunuyor.
- **`pushUserData(userId, key, value)`** *(YENİ)*: `user_data` tablosuna JSON upsert.
- **`pullUserData(userId, key)`** *(YENİ)*: `user_data`'dan JSON pull.

#### `src/lib/stats.ts`
- **`syncStatsUp()`**: Soru istatistiklerine ek olarak `activity_log` + `streak`'i `user_data` tablosuna push ediyor (debounced, her soru çözümünde).
- **`syncStatsDown()`**: Tüm kaynakları **paralel** çekiyor:
  - `question_stats` → MAX merge (en yüksek attempts/corrects/lastSeen)
  - `activity_log` → tarih bazlı MAX merge (her gün büyük değer kalır)
  - `streak` → en güncel `lastStudyDate`, `longestStreak` max
  - Fallback: `activity_log` cloud'da yoksa `lastSeen` zaman damgalarından tahmin edilir
- **`_mergeActivityFromStats()`** *(YENİ, fallback)*: Cloud'da `activity_log` henüz yokken question_stats'ın `lastSeen` değerlerinden günlük aktivite tahmini üretir.

---

## 4. Yeni Sync Akışı

```
Telefon → Soru çöz
  → saveQuestionStat() → localStorage güncelle
  → debouncedSyncUp() (5sn) → syncStatsUp():
      ├─ upsert_stats_batch RPC (GREATEST merge)
      ├─ pushUserData('activity_log', ...)
      └─ pushUserData('streak', ...)

PC → Uygulama aç → Giriş yap
  → syncStatsDown() [paralel]:
      ├─ pullAllDeviceStats() → MAX merge → localStorage
      ├─ pullUserData('activity_log') → tarih MAX merge → localStorage
      └─ pullUserData('streak') → MAX merge → localStorage
  → statsVersion++ → <main key={statsVersion}> yeniden mount
  → StatisticsView güncel veriyi okur ✓
```

---

## 5. Güvenlik Notu

`unit_thresholds` tablosunda RLS devre dışı — bu tablo henüz kullanımda değil ancak:
```sql
ALTER TABLE public.unit_thresholds ENABLE ROW LEVEL SECURITY;
```
komutunu çalıştırmadan önce uygun policy eklenmeli (aksi halde tüm erişim bloklanır).

---

## 6. Test Edilmesi Gerekenler

- [ ] Telefonda birkaç soru çöz → bilgisayarda istatistik ekranını aç → Günlük Aktivite güncel mi?
- [ ] Streak telefonda artıyor mu → bilgisayarda senkron mu?
- [ ] Çevrimdışı çöz → online ol → pending sync tetiklenip cloud'a gidiyor mu?
- [ ] Realtime: telefon açıkken bilgisayarda soru çöz → telefon statları anlık güncelleniyor mu?

---

**Commit:** `feat: cross-device full sync — user_data table, GREATEST merge RPC, activity+streak cloud sync`
