-- ═══════════════════════════════════════════════════════════════════════════
-- GÜNÜN DENEMESİ OTOMASYONU (v2 — ünite rotasyonu + serpiştirme)
-- Her gün TR saati 00:01'de (pg_cron: 21:01 UTC) o güne ait karma deneme üretir.
-- Ders başına 25 soru = 20 yeni (hiç çözülmemiş) + 5 çözülmüş & hard (difficulty>=7).
--
-- SEÇİM MANTIĞI (v2):
--   1. Ünite yayılımı: her üniteden 1 soru alınmadan aynı üniteden 2. soru alınmaz
--      (row_number over partition by unit). Ünite sayısı kotadan azsa 2. tura sarkar.
--   2. Ünite rotasyonu (sürekli LRU): geçmiş denemelerde en uzun süredir servis
--      edilmeyen (veya hiç edilmeyen) üniteler önce gelir. Ayrı takip tablosu yok —
--      daily_exams geçmişinin kendisi recency kaynağıdır.
--   3. Tekrar önleme: daha önce herhangi bir denemede çıkmış soru, havuzda
--      çıkmamış soru varken seçilmez.
--   4. Serpiştirme: final dizi dersler arası round-robin'dir (pos 1'ler karışık
--      ders sırasıyla, sonra pos 2'ler...). Aynı ders art arda blok oluşturmaz.
--
-- Haftalık plan (ISO dow, 1=Pzt..7=Paz), sadece DB'de mevcut dersler üretilir:
--   Pzt: Periodontoloji + Fizyoloji
--   Sal: Protez + Histoloji  (+ Biyokimya — henüz yok)
--   Çar: Ortodonti + Patoloji + Endodonti
--   Per: Radyoloji  (+ Mikrobiyoloji — henüz yok)
--   Cum: Pedodonti  (+ Farmakoloji, Restoratif — henüz yok)
--   Cmt: (Cerrahi, Mikrobiyoloji — henüz yok → deneme yok)
--   Paz: hariç
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. HAFTALIK PLAN KONFİGÜRASYONU ────────────────────────────────────────
create table if not exists daily_exam_config (
  dow    smallint not null check (dow between 1 and 7),
  lesson text     not null,
  primary key (dow, lesson)
);

insert into daily_exam_config (dow, lesson) values
  (1, 'Periodontoloji'), (1, 'Fizyoloji'),
  (2, 'Protez'), (2, 'Histoloji'), (2, 'Biyokimya'),
  (3, 'Ortodonti'), (3, 'Patoloji'), (3, 'Endodonti'),
  (4, 'Radyoloji'), (4, 'Mikrobiyoloji'),
  (5, 'Pedodonti'), (5, 'Farmakoloji'), (5, 'Restoratif'),
  (6, 'Cerrahi'), (6, 'Mikrobiyoloji')
on conflict do nothing;

-- ── 2. ÜRETİM FONKSİYONU ───────────────────────────────────────────────────
-- Eski 4-parametreli imza düşürülür; kalırsa generate_daily_exam() çağrısı
-- iki overload arasında belirsizleşir ve cron kırılır.
drop function if exists generate_daily_exam(uuid, int, int, boolean);

-- p_dow / p_date: test override'ları (null = gerçek TR zamanı).
create or replace function generate_daily_exam(
  p_user_id         uuid default 'cb5a05b8-a353-4701-b987-5df0404c7b0f',
  p_new_per_lesson  int  default 20,
  p_hard_per_lesson int  default 5,
  p_force           boolean default false,
  p_dow             int  default null,
  p_date            date default null
)
returns table (out_exam_id uuid, out_exam_date date, out_total int)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_date         date := coalesce(p_date, (now() at time zone 'Europe/Istanbul')::date);
  v_dow          int  := coalesce(p_dow, extract(isodow from (now() at time zone 'Europe/Istanbul'))::int);
  v_lesson       text;
  v_new_ids      uuid[];
  v_hard_ids     uuid[];
  v_fill         uuid[];
  v_all_ids      uuid[];
  v_by_lesson    jsonb := '{}'::jsonb;
  v_new_total    int := 0;
  v_review_total int := 0;
  v_l_new        int;
  v_l_review     int;
  v_l_units      int;
  v_day_number   int;
  v_exam_id      uuid;
begin
  if v_dow = 7 then
    return;  -- Pazar: deneme yok
  end if;

  if not p_force and exists (
    select 1 from daily_exams d where d.user_id = p_user_id and d.exam_date = v_date
  ) then
    return;  -- idempotent: bugün zaten deneme varsa dokunma
  end if;

  -- Ders başına seçilen sorular; pos = ders içi sıra (round-robin anahtarı)
  drop table if exists _daily_picks;
  create temp table _daily_picks (lesson text, pos int, qid uuid) on commit drop;

  for v_lesson in
    select c.lesson from daily_exam_config c where c.dow = v_dow order by c.lesson
  loop
    -- Ders mevcut değilse (aktif soru yoksa) atla
    if not exists (
      select 1 from questions q
      where q.lesson = v_lesson
        and (q.quality_flag is null or q.quality_flag = 'reviewed_keep')
    ) then
      continue;
    end if;

    -- YENİ (20): hiç çözülmemiş.
    -- Sıra: ünite başına 1 soru (unit_rn) → en uzun süredir servis edilmeyen
    -- ünite (nulls first = hiç servis edilmemiş) → denemede hiç çıkmamış soru → random.
    with used as (
      select pu.qid, max(d.exam_date) as last_used
      from daily_exams d
      cross join lateral unnest(d.question_ids) as pu(qid)
      where d.user_id = p_user_id
      group by pu.qid
    ),
    unit_recency as (
      select q2.unit, max(u.last_used) as last_used
      from used u
      join questions q2 on q2.id = u.qid
      where q2.lesson = v_lesson
      group by q2.unit
    ),
    pool as (
      select q.id, q.unit,
             (u.qid is not null) as used_before,
             row_number() over (
               partition by q.unit
               order by (u.qid is not null), random()
             ) as unit_rn
      from questions q
      left join used u on u.qid = q.id
      where q.lesson = v_lesson
        and (q.quality_flag is null or q.quality_flag = 'reviewed_keep')
        and not exists (select 1 from question_stats s where s.question_id = q.id and s.attempts > 0)
    )
    select coalesce(array_agg(id), '{}') into v_new_ids from (
      select pool.id
      from pool
      left join unit_recency ur on ur.unit = pool.unit
      order by pool.unit_rn,
               ur.last_used asc nulls first,
               pool.used_before,
               random()
      limit p_new_per_lesson
    ) t;

    -- HARD (5): çözülmüş; difficulty>=7 önce (is_hard desc), yetmezse çözülmüş
    -- herhangi soruyla aynı sorguda tamamlanır. Ünite yayılımı + rotasyon aynı.
    with used as (
      select pu.qid, max(d.exam_date) as last_used
      from daily_exams d
      cross join lateral unnest(d.question_ids) as pu(qid)
      where d.user_id = p_user_id
      group by pu.qid
    ),
    unit_recency as (
      select q2.unit, max(u.last_used) as last_used
      from used u
      join questions q2 on q2.id = u.qid
      where q2.lesson = v_lesson
      group by q2.unit
    ),
    pool as (
      select q.id, q.unit,
             (u.qid is not null) as used_before,
             exists (
               select 1 from question_stats s
               where s.question_id = q.id and s.attempts > 0 and s.difficulty >= 7
             ) as is_hard,
             row_number() over (
               partition by q.unit
               order by (u.qid is not null), random()
             ) as unit_rn
      from questions q
      left join used u on u.qid = q.id
      where q.lesson = v_lesson
        and (q.quality_flag is null or q.quality_flag = 'reviewed_keep')
        and exists (select 1 from question_stats s where s.question_id = q.id and s.attempts > 0)
        and not (q.id = any(v_new_ids))
    )
    select coalesce(array_agg(id), '{}') into v_hard_ids from (
      select pool.id
      from pool
      left join unit_recency ur on ur.unit = pool.unit
      order by pool.is_hard desc,
               pool.unit_rn,
               ur.last_used asc nulls first,
               pool.used_before,
               random()
      limit p_hard_per_lesson
    ) t;

    -- FALLBACK: yeni havuz kotayı dolduramadıysa kalan sorularla tamamla
    if coalesce(array_length(v_new_ids, 1), 0) < p_new_per_lesson then
      select coalesce(array_agg(id), '{}') into v_fill from (
        select q.id from questions q
        where q.lesson = v_lesson
          and (q.quality_flag is null or q.quality_flag = 'reviewed_keep')
          and not (q.id = any(v_new_ids))
          and not (q.id = any(v_hard_ids))
        order by random()
        limit p_new_per_lesson - coalesce(array_length(v_new_ids, 1), 0)
      ) t;
      v_new_ids := v_new_ids || v_fill;
    end if;

    -- Ders içi sırayı karıştırıp pos ata (round-robin için)
    insert into _daily_picks (lesson, pos, qid)
    select v_lesson, row_number() over (order by random()), u.qid
    from unnest(v_new_ids || v_hard_ids) as u(qid);

    v_l_new    := coalesce(array_length(v_new_ids, 1), 0);
    v_l_review := coalesce(array_length(v_hard_ids, 1), 0);
    select count(distinct q.unit) into v_l_units
    from questions q where q.id = any(v_new_ids || v_hard_ids);

    v_new_total    := v_new_total + v_l_new;
    v_review_total := v_review_total + v_l_review;
    v_by_lesson := v_by_lesson || jsonb_build_object(
      v_lesson, jsonb_build_object('new', v_l_new, 'review', v_l_review, 'units', v_l_units)
    );
  end loop;

  -- SERPİŞTİRME: pos 1'ler (her dersten 1, random ders sırası), sonra pos 2'ler...
  select coalesce(array_agg(qid order by pos, rnd), '{}') into v_all_ids
  from (select qid, pos, random() as rnd from _daily_picks) s;

  if coalesce(array_length(v_all_ids, 1), 0) = 0 then
    return;  -- hiç soru yoksa (ör. tüm dersler eksik) çık
  end if;

  select count(*) + 1 into v_day_number from daily_exams where user_id = p_user_id;

  insert into daily_exams (user_id, day_number, exam_date, name, question_ids, breakdown, status)
  values (
    p_user_id, v_day_number, v_date,
    'Karma Deneme — ' || to_char(v_date, 'DD.MM.YYYY'),
    v_all_ids,
    jsonb_build_object(
      'total',       array_length(v_all_ids, 1),
      'newCount',    v_new_total,
      'reviewCount', v_review_total,
      'byLesson',    v_by_lesson,
      'generatedBy', 'pg_cron',
      'dow',         v_dow,
      'interleaved', true
    ),
    'pending'
  )
  returning id into v_exam_id;

  return query select v_exam_id, v_date, array_length(v_all_ids, 1);
end;
$$;

-- ── 3. PG_CRON ZAMANLAMASI ─────────────────────────────────────────────────
-- pg_cron UTC çalışır. TR (UTC+3, DST yok) 00:01 = UTC 21:01 (bir önceki gün).
select cron.unschedule('gunun-denemesi-daily')
  where exists (select 1 from cron.job where jobname = 'gunun-denemesi-daily');

select cron.schedule(
  'gunun-denemesi-daily',
  '1 21 * * *',
  $cron$ select generate_daily_exam(); $cron$
);
