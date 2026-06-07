-- 1. `questions` tablosuna `updated_at` ekle (varsa hata vermemesi için)
ALTER TABLE questions ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL;

-- 2. `questions` güncellemelerinde `updated_at` sütununu otomatikleştirecek fonksiyon
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 3. Trigger oluştur
DROP TRIGGER IF EXISTS update_questions_modtime ON questions;
CREATE TRIGGER update_questions_modtime
BEFORE UPDATE ON questions
FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

-- 4. Silinen kayıtların ID'lerini takip etmek için tablo oluştur
CREATE TABLE IF NOT EXISTS deleted_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    table_name TEXT NOT NULL,
    record_id UUID NOT NULL,
    deleted_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Silinme işleminde `deleted_records` tablosuna kayıt atacak fonksiyon
CREATE OR REPLACE FUNCTION log_deleted_record()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO deleted_records (table_name, record_id, deleted_at)
    VALUES (TG_TABLE_NAME, OLD.id, now());
    RETURN OLD;
END;
$$ language 'plpgsql';

-- 6. Silinme trigger'ı oluştur
DROP TRIGGER IF EXISTS log_deleted_questions ON questions;
CREATE TRIGGER log_deleted_questions
AFTER DELETE ON questions
FOR EACH ROW EXECUTE PROCEDURE log_deleted_record();

-- 7. `deleted_records` için RLS kuralları (sadece okuma izni yeterli, yazmayı trigger yapar)
ALTER TABLE deleted_records ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Enable read access for all users on deleted_records" ON deleted_records;
CREATE POLICY "Enable read access for all users on deleted_records" 
ON deleted_records FOR SELECT 
TO public 
USING (true);
