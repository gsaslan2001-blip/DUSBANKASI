-- DUSBANKASI Delete Trigger Fix (SECURITY DEFINER)
-- Bu betik, silme işlemlerinde 'deleted_records' tablosuna kayıt atarken
-- oluşan RLS (Row-Level Security) yetki hatasını (42501) çözer.

CREATE OR REPLACE FUNCTION log_deleted_record()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO deleted_records (table_name, record_id, deleted_at)
    VALUES (TG_TABLE_NAME, OLD.id, now());
    RETURN OLD;
END;
$$ language 'plpgsql' SECURITY DEFINER;
