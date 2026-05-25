-- DUS BANKASI — Supabase Schema
-- Supabase SQL Editor'e bu kodu yapıştır ve çalıştır

create table if not exists questions (
  id uuid default gen_random_uuid() primary key,
  lesson text not null,
  unit text not null,
  question text not null,
  option_a text not null,
  option_b text not null,
  option_c text not null,
  option_d text not null,
  option_e text not null,
  correct_answer text not null check (correct_answer in ('A','B','C','D','E')),
  explanation text not null default '',
  flagged boolean default false,
  flag_reason text default '',
  quality_flag text default null, -- NULL | 'kavramsal_kopya' | 'auto_deleted' | 'reviewed_keep'
  created_at timestamptz default now() not null
);

-- Row Level Security: Public read + insert (tek kullanıcı, auth yok)
alter table questions enable row level security;

create policy "Public read" on questions for select using (true);
create policy "Public insert" on questions for insert with check (true);
create policy "Public delete" on questions for delete using (true);
create policy "Public update" on questions for update using (true) with check (true);

-- is_favorite kolonu
alter table questions add column if not exists is_favorite boolean default false;

-- Kalite Flag Migrasyonu: Post-production deduplication sonuçları
-- Değerler: NULL (işlenmedi) | 'kavramsal_kopya' (pipeline flagged) | 'auto_deleted' (silinecek) | 'reviewed_keep' (manuel onay)
alter table questions add column if not exists quality_flag text default null;

-- ─── İSTATİSTİK SENKRON TABLOSU ────────────────────────────────────────────
create table if not exists question_stats (
  id uuid default gen_random_uuid() primary key,
  device_id text not null,
  question_id uuid references questions(id) on delete cascade,
  attempts integer not null default 0,
  corrects integer not null default 0,
  last_seen timestamptz default now(),
  updated_at timestamptz default now(),
  unique(device_id, question_id)
);

-- Faz 1 Migrasyon: Hata Pattern Analizi için yanlış cevap geçmişi
-- Format: [{"selected": "B", "timestamp": "2026-04-15T14:22:00Z"}, ...]
alter table question_stats add column if not exists wrong_choices jsonb default '[]'::jsonb;

-- Faz 2 Migrasyon: FSRS-5 scheduling state (SM-2 → FSRS geçişi)
-- Her cihazın kendi FSRS state'i — merge sırasında en yüksek attempts kazanır
alter table question_stats add column if not exists stability double precision;
alter table question_stats add column if not exists difficulty double precision;
alter table question_stats add column if not exists last_review date;
alter table question_stats add column if not exists scheduled_days integer;
alter table question_stats add column if not exists fsrs_reps integer;

alter table question_stats enable row level security;

create policy "Public read stats" on question_stats for select using (true);
create policy "Public insert stats" on question_stats for insert with check (true);
create policy "Public update stats" on question_stats for update using (true) with check (true);
create policy "Public delete stats" on question_stats for delete using (true);

-- ─── AKTİF OTURUM TABLOSU ────────────────────────────────────────────────────
create table if not exists active_sessions (
  device_id text primary key,
  session_data jsonb not null,
  updated_at timestamptz default now()
);

alter table active_sessions enable row level security;
create policy "Public read sessions" on active_sessions for select using (true);
create policy "Public insert sessions" on active_sessions for insert with check (true);
create policy "Public update sessions" on active_sessions for update using (true) with check (true);
create policy "Public delete sessions" on active_sessions for delete using (true);

-- ─── GÜNÜN DENEMESİ TABLOSU ──────────────────────────────────────────────────
-- Atlas (LLM) tarafından oluşturulan günlük sınav planları.
-- status: 'pending' (bekliyor) | 'completed' (tamamlandı) | 'archived' (arşivlendi)
create table if not exists daily_exams (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid references auth.users(id) on delete cascade,
  day_number    int not null,
  exam_date     date not null default current_date,
  question_ids  uuid[] not null default '{}',
  breakdown     jsonb not null default '{}',
  status        text not null default 'pending'
                  check (status in ('pending','completed','archived')),
  created_at    timestamptz default now(),
  completed_at  timestamptz
);

create index if not exists daily_exams_user_date_idx
  on daily_exams(user_id, exam_date);

alter table daily_exams enable row level security;
create policy "User reads own daily exams"   on daily_exams for select using (auth.uid() = user_id);
create policy "User inserts own daily exams" on daily_exams for insert with check (auth.uid() = user_id);
create policy "User updates own daily exams" on daily_exams for update using (auth.uid() = user_id);

-- ─── MIGRATIONS ──────────────────────────────────────────────────────────────
-- Mevcut tabloya quality_flag eklemek için (bir kez çalıştırın):
-- alter table questions add column if not exists quality_flag text default null;

-- ─── FAZ 5: DENEME BAZLI SORU TAKİBİ ─────────────────────────────────────────
-- daily_exams tablosuna name sütunu (Atlas tarafından doldurulur, örn. "Endodonti Deneme-1")
alter table daily_exams add column if not exists name text default '';

-- exam_answers: Her denemedeki her soru için cevap kaydı
create table if not exists exam_answers (
  id uuid default gen_random_uuid() primary key,
  exam_id uuid references daily_exams(id) on delete cascade,
  question_id uuid references questions(id) on delete cascade,
  user_id uuid references auth.users(id),
  selected_answer text,       -- 'A'-'E' veya null (boş)
  correct_answer text not null, -- 'A'-'E'
  is_correct boolean not null,
  time_spent integer,         -- saniye
  question_order integer not null, -- sınavdaki sırası
  created_at timestamptz default now()
);

create index if not exists idx_exam_answers_exam_user
  on exam_answers(exam_id, user_id);
create index if not exists idx_exam_answers_user_wrong
  on exam_answers(user_id, is_correct) where is_correct = false;

alter table exam_answers enable row level security;
create policy "Users read own exam answers" on exam_answers
  for select using (auth.uid() = user_id);
create policy "Users insert own exam answers" on exam_answers
  for insert with check (auth.uid() = user_id);
create policy "Users update own exam answers" on exam_answers
  for update using (auth.uid() = user_id);

-- Merge fonksiyonu: device_id bazlı kayıtları kullanıcıya bağlar
-- FIX: INSERT + ON CONFLICT yerine UPDATE kullanır (device_id,question_id unique çakışmasını önler)
create or replace function merge_device_stats_to_user(p_device_id text, p_user_id uuid)
returns integer
language plpgsql
as $$
declare
  merged_count integer := 0;
begin
  update question_stats
  set user_id = p_user_id
  where device_id = p_device_id
    and user_id is null;
  get diagnostics merged_count = row_count;
  return merged_count;
end;
$$;

-- ─── FAZ 4: SEMANTİK KOPYA KONTROLÜ (OpenAI pgvector) ───────────────────────
-- 1. pgvector uzantısını aktifleştir
create extension if not exists vector;

-- 2. questions tablosuna 1536 boyutlu embedding kolonu ekle (OpenAI text-embedding-3-small)
alter table questions add column if not exists embedding vector(1536);

-- 3. Semantik aramalar için indeks (HNSW) ekle
-- m=16, ef_construction=64: 9600 soru için optimal (hız/doğruluk dengesi)
create index if not exists questions_embedding_idx on questions
  using hnsw (embedding vector_cosine_ops)
  with (m = 16, ef_construction = 64);

-- Ders/ünite sorgularını hızlandıran composite index
create index if not exists idx_questions_lesson_unit
  on questions (lesson, unit);

-- Aktif (quality_flag IS NULL) sorguları hızlandıran partial index
create index if not exists idx_questions_active
  on questions (lesson, created_at)
  where quality_flag is null;

-- 4. Vektör Araması (RPC) Fonksiyonu Tanımla
create or replace function match_questions_semantic (
  query_embedding vector(1536),
  match_threshold float,
  match_count int,
  p_lesson text
)
returns table (
  id uuid,
  question text,
  unit text,
  similarity float
)
language sql
as $$
  select
    q.id,
    q.question,
    q.unit,
    1 - (q.embedding <=> query_embedding) as similarity
  from questions q
  where q.lesson = p_lesson
    and 1 - (q.embedding <=> query_embedding) > match_threshold
  order by q.embedding <=> query_embedding
  limit match_count;
$$;

-- 5. Dashboard İçin Vektör Araması (ID ile)
create or replace function match_questions_semantic_by_id (
  v_id uuid,
  match_threshold float,
  match_count int
)
returns table (
  id uuid,
  question text,
  unit text,
  lesson text,
  similarity float
)
language plpgsql
as $$
declare
  query_embedding vector(1536);
begin
  select embedding into query_embedding from questions where questions.id = v_id;
  
  if not found then
    return;
  end if;

  return query
    select
      q.id,
      q.question,
      q.unit,
      q.lesson,
      1 - (q.embedding <=> query_embedding) as similarity
    from questions q
    where q.id != v_id
      and 1 - (q.embedding <=> query_embedding) > match_threshold
    order by q.embedding <=> query_embedding
    limit match_count;
end;
$$;
