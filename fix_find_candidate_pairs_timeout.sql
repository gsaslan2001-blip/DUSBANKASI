-- ============================================================================
-- find_candidate_pairs HTTP 500 düzeltmesi  (Supabase ref: vblndoyjmkgaeuihydyd)
-- ============================================================================
-- KÖK NEDEN (canlıda doğrulandı, 2026-05-28):
--   Ders-geneli / --cross-unit self-join PostgreSQL kodu 57014 ("canceling
--   statement due to statement timeout") ile düşüyor. anon (publishable) rolünün
--   varsayılan statement_timeout'u ~3 sn; Radyoloji 3640 soru = ~6.6M çift,
--   Patoloji 1165 / Histoloji 1392 soru bile 3.4 sn'de kesiliyor.
--   Tek-ünite (p_unit) çağrısı SORUNSUZ (116 soru -> 305 çift, 3.1 sn, HTTP 200).
--   --> Şema önbelleği (PGRST202) DEĞİL, düşürülmüş HNSW DEĞİL, imza uyumsuzluğu
--       DEĞİL. Saf statement-timeout. Bu DDL'i SQL Editor'de service yetkisiyle
--       çalıştır (anon key DDL yapamaz).
-- ============================================================================

-- ----------------------------------------------------------------------------
-- SEÇENEK 1 — ÖNERİLEN: fonksiyona özel statement_timeout (en düşük risk)
-- HNSW'yi geri eklemez (storage / toplu-yazma 500 baskısı yok), recall tam kalır.
-- Mevcut self-join'a sadece tamamlanması için süre tanır.
-- ----------------------------------------------------------------------------
ALTER FUNCTION public.find_candidate_pairs(text, double precision, double precision, text)
  SET statement_timeout = '180s';

NOTIFY pgrst, 'reload schema';

-- DOĞRULAMA (SQL Editor'de; ~saniyeler sürebilir):
--   SELECT count(*) FROM find_candidate_pairs('Radyoloji', 0.65);
-- 57014 hatası gelmeden satır dönerse düzeltme başarılı. Tamamlanma süresini not
-- al: Radyoloji (en büyük ders) 180 sn'yi aşarsa SEÇENEK 2'ye geç.

-- ----------------------------------------------------------------------------
-- SEÇENEK 2 — KALICI/ÖLÇEKLENEBİLİR: HNSW + LATERAL k-NN (opt-in)
-- O(N^2) yerine O(N*k). DİKKAT: HNSW index'lerini geri getirir (v4.6'da
-- bilinçli düşürülmüştü -> storage + toplu-yazma maliyeti geri gelir) ve
-- recall'ı "yakın komşu" yaklaşık değerine çevirir (kopyalar zaten en yakın
-- komşu olduğundan yüksek-eşik recall'ı pratikte korunur). Sadece SEÇENEK 1
-- büyük derslerde yetmezse kullan.
-- ----------------------------------------------------------------------------
-- CREATE INDEX IF NOT EXISTS questions_stem_emb_hnsw
--   ON questions USING hnsw (stem_embedding vector_cosine_ops);
--
-- CREATE OR REPLACE FUNCTION public.find_candidate_pairs(
--   p_lesson text, p_threshold float DEFAULT 0.70,
--   p_exp_threshold float DEFAULT 0.92, p_unit text DEFAULT NULL,
--   p_k int DEFAULT 50)
-- RETURNS TABLE(q1_id uuid, q2_id uuid, hybrid_sim float, stem_sim float, exp_sim float) AS $$
--   SELECT a.id, nn.id,
--          0.7*(1-(a.stem_embedding <=> nn.stem_embedding)) + 0.3*(1-(a.explanation_embedding <=> nn.explanation_embedding)),
--          1-(a.stem_embedding <=> nn.stem_embedding),
--          1-(a.explanation_embedding <=> nn.explanation_embedding)
--   FROM questions a
--   CROSS JOIN LATERAL (
--     SELECT b.id, b.stem_embedding, b.explanation_embedding
--     FROM questions b
--     WHERE b.lesson = p_lesson AND b.id <> a.id
--       AND b.stem_embedding IS NOT NULL AND b.explanation_embedding IS NOT NULL
--       AND (p_unit IS NULL OR b.unit = p_unit)
--     ORDER BY b.stem_embedding <=> a.stem_embedding   -- HNSW index burada devreye girer
--     LIMIT p_k
--   ) nn
--   WHERE a.lesson = p_lesson
--     AND a.stem_embedding IS NOT NULL AND a.explanation_embedding IS NOT NULL
--     AND (p_unit IS NULL OR a.unit = p_unit)
--     AND a.id < nn.id
--     AND ( 0.7*(1-(a.stem_embedding <=> nn.stem_embedding)) + 0.3*(1-(a.explanation_embedding <=> nn.explanation_embedding)) >= p_threshold
--        OR (1-(a.explanation_embedding <=> nn.explanation_embedding)) >= p_exp_threshold )
--   ORDER BY 3 DESC LIMIT 20000;
-- $$ LANGUAGE sql STABLE;
--
-- NOTIFY pgrst, 'reload schema';   -- yeni p_k parametresi REST katmanına yansısın
