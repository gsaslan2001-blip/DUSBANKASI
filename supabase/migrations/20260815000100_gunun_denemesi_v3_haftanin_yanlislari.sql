-- ═══════════════════════════════════════════════════════════════════════════
-- GÜNÜN DENEMESİ OTOMASYONU (v3 — 4 Ders x 25 Soru + Pazar Haftanın Yanlışları)
-- 
-- 1. Pazartesi - Cumartesi (DOW 1..6):
--    - Günde 4 ana ders, her dersten 25 soru (20 yeni + 5 zor/tekrar) = Günlük 100 Soru.
--    - Sadece 14 Ana Ders dahil edilir (Çıkmış ve Yanlışlarım gibi yan dersler HARİÇ).
--    - Ünite yayılımı + LRU rotasyonu + serpiştirme (interleaving) uygulanır.
--
-- 2. Pazar (DOW 7):
--    - "Haftanın Yanlışları" denemesi.
--    - Son 7 günde kullanıcının yanlış yaptığı sorular (exam_answers / question_stats).
--    - Soru sayısı: SINIRSIZ (tüm yanlışlar eksiksiz gelir).
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. HAFTALIK DERS KONFİGÜRASYONU (Günde 4 Ana Ders) ─────────────────────
create table if not exists daily_exam_config (
  dow    smallint not null check (dow between 1 and 7),
  lesson text     not null,
  primary key (dow, lesson)
);

-- Eski kayıtları temizle ve 14 ana dersi 6 güne dengeli dağıt (her gün 4 ders):
delete from daily_exam_config;

insert into daily_exam_config (dow, lesson) values
  -- Pazartesi (1): 4 Ders
  (1, 'Periodontoloji'), (1, 'Fizyoloji'), (1, 'Endodonti'), (1, 'Anatomi'),
  -- Salı (2): 4 Ders
  (2, 'Protez'), (2, 'Histoloji'), (2, 'Biyokimya'), (2, 'Ortodonti'),
  -- Çarşamba (3): 4 Ders
  (3, 'Patoloji'), (3, 'Radyoloji'), (3, 'Cerrahi'), (3, 'Pedodonti'),
  -- Perşembe (4): 4 Ders
  (4, 'Mikrobiyoloji'), (4, 'Restoratif'), (4, 'Endodonti'), (4, 'Periodontoloji'),
  -- Cuma (5): 4 Ders
  (5, 'Protez'), (5, 'Pedodonti'), (5, 'Ortodonti'), (5, 'Fizyoloji'),
  -- Cumartesi (6): 4 Ders
  (6, 'Radyoloji'), (6, 'Patoloji'), (6, 'Histoloji'), (6, 'Anatomi')
on conflict (dow, lesson) do nothing;


-- ── 2. ÜRETİM FONKSİYONU ───────────────────────────────────────────────────
drop function if exists generate_daily_exam(uuid, int, int, boolean, int, date);
drop function if exists generate_daily_exam(uuid, int, int, boolean);

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
  v_exam_name    text;
begin
  if not p_force and exists (
    select 1 from daily_exams d where d.user_id = p_user_id and d.exam_date = v_date
  ) then
    return;  -- idempotent: bugün zaten deneme varsa dokunma
  end if;

  select count(*) + 1 into v_day_number from daily_exams where user_id = p_user_id;

  -- ═════════════════════════════════════════════════════════════════════════
  -- PAZAR GÜNÜ (DOW = 7): HAFTANIN YANLIŞLARI (SINIRSIZ SORU)
  -- ═════════════════════════════════════════════════════════════════════════
  if v_dow = 7 then
    -- Son 7 günde kullanıcının çözüp yanlış yaptığı tüm soruları topla
    select coalesce(array_agg(distinct ea.question_id), '{}') into v_all_ids
    from exam_answers ea
    join questions q on q.id = ea.question_id
    where ea.user_id = p_user_id
      and ea.is_correct = false
      and ea.created_at >= (v_date - interval '7 days')
      and q.lesson not in ('ÇIKMIŞ SORULAR', 'Pedodonti Cikmis', 'Yanlışlarım')
      and q.lesson not ilike '%cikmis%'
      and q.lesson not ilike '%çıkmış%'
      and (q.quality_flag is null or q.quality_flag in ('reviewed_keep', 'high_yield'));

    -- Fallback: Eğer son 7 günün exam_answers tablosunda kayıt az/yoksa, question_stats'taki hatalı/zayıf soruları al
    if coalesce(array_length(v_all_ids, 1), 0) = 0 then
      select coalesce(array_agg(distinct qs.question_id), '{}') into v_all_ids
      from question_stats qs
      join questions q on q.id = qs.question_id
      where qs.user_id = p_user_id
        and qs.attempts > 0
        and (qs.difficulty >= 7 or qs.success_streak = 0)
        and q.lesson not in ('ÇIKMIŞ SORULAR', 'Pedodonti Cikmis', 'Yanlışlarım')
        and q.lesson not ilike '%cikmis%'
        and q.lesson not ilike '%çıkmış%'
        and (q.quality_flag is null or q.quality_flag in ('reviewed_keep', 'high_yield'));
    end if;

    if coalesce(array_length(v_all_ids, 1), 0) = 0 then
      return;  -- Hiç yanlış soru yoksa deneme oluşturulmaz
    end if;

    v_exam_name := 'Haftanın Yanlışları — ' || to_char(v_date, 'DD.MM.YYYY');

    -- Ders bazında dağılımı hesapla
    select jsonb_object_agg(t.lesson, t.cnt) into v_by_lesson
    from (
      select q.lesson, count(*) as cnt
      from unnest(v_all_ids) as u(qid)
      join questions q on q.id = u.qid
      group by q.lesson
    ) t;

    insert into daily_exams (user_id, day_number, exam_date, name, question_ids, breakdown, status)
    values (
      p_user_id, v_day_number, v_date,
      v_exam_name,
      v_all_ids,
      jsonb_build_object(
        'type',        'weekly_mistakes',
        'total',       array_length(v_all_ids, 1),
        'wrongCount',  array_length(v_all_ids, 1),
        'byLesson',    coalesce(v_by_lesson, '{}'::jsonb),
        'generatedBy', 'pg_cron',
        'dow',         7
      ),
      'pending'
    )
    returning id into v_exam_id;

    return query select v_exam_id, v_date, array_length(v_all_ids, 1);
    return;
  end if;

  -- ═════════════════════════════════════════════════════════════════════════
  -- PAZARTESİ - CUMARTESİ (DOW 1..6): 4 DERS x 25 SORU = 100 SORU
  -- ═════════════════════════════════════════════════════════════════════════
  drop table if exists _daily_picks;
  create temp table _daily_picks (lesson text, pos int, qid uuid) on commit drop;

  for v_lesson in
    select c.lesson from daily_exam_config c where c.dow = v_dow order by c.lesson
  loop
    -- Ana ders dışındaki veya pasif soruları atla
    if not exists (
      select 1 from questions q
      where q.lesson = v_lesson
        and q.lesson not in ('ÇIKMIŞ SORULAR', 'Pedodonti Cikmis', 'Yanlışlarım')
        and q.lesson not ilike '%cikmis%'
        and q.lesson not ilike '%çıkmış%'
        and (q.quality_flag is null or q.quality_flag in ('reviewed_keep', 'high_yield'))
    ) then
      continue;
    end if;

    -- YENİ (20 soru): hiç çözülmemiş sorular
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
        and q.lesson not in ('ÇIKMIŞ SORULAR', 'Pedodonti Cikmis', 'Yanlışlarım')
        and q.lesson not ilike '%cikmis%'
        and q.lesson not ilike '%çıkmış%'
        and (q.quality_flag is null or q.quality_flag in ('reviewed_keep', 'high_yield'))
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

    -- HARD / TEKRAR (5 soru): çözülmüş sorular (difficulty >= 7 öncelikli)
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
        and q.lesson not in ('ÇIKMIŞ SORULAR', 'Pedodonti Cikmis', 'Yanlışlarım')
        and q.lesson not ilike '%cikmis%'
        and q.lesson not ilike '%çıkmış%'
        and (q.quality_flag is null or q.quality_flag in ('reviewed_keep', 'high_yield'))
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

    -- FALLBACK: 25'i tamamlayamazsa kalan aktif sorulardan doldur
    if coalesce(array_length(v_new_ids, 1), 0) + coalesce(array_length(v_hard_ids, 1), 0) < (p_new_per_lesson + p_hard_per_lesson) then
      select coalesce(array_agg(id), '{}') into v_fill from (
        select q.id from questions q
        where q.lesson = v_lesson
          and q.lesson not in ('ÇIKMIŞ SORULAR', 'Pedodonti Cikmis', 'Yanlışlarım')
          and q.lesson not ilike '%cikmis%'
          and q.lesson not ilike '%çıkmış%'
          and (q.quality_flag is null or q.quality_flag in ('reviewed_keep', 'high_yield'))
          and not (q.id = any(v_new_ids))
          and not (q.id = any(v_hard_ids))
        order by random()
        limit (p_new_per_lesson + p_hard_per_lesson) - (coalesce(array_length(v_new_ids, 1), 0) + coalesce(array_length(v_hard_ids, 1), 0))
      ) t;
      v_new_ids := v_new_ids || v_fill;
    end if;

    -- Ders içi sırayı karıştırıp pos ata (round-robin serpiştirme için)
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

  -- SERPİŞTİRME (Interleaving): Dersler arası pos 1'ler, pos 2'ler...
  select coalesce(array_agg(qid order by pos, rnd), '{}') into v_all_ids
  from (select qid, pos, random() as rnd from _daily_picks) s;

  if coalesce(array_length(v_all_ids, 1), 0) = 0 then
    return;
  end if;

  v_exam_name := 'Karma Deneme — ' || to_char(v_date, 'DD.MM.YYYY');

  insert into daily_exams (user_id, day_number, exam_date, name, question_ids, breakdown, status)
  values (
    p_user_id, v_day_number, v_date,
    v_exam_name,
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
-- TR 00:01 = UTC 21:01 (bir önceki gün)
select cron.unschedule('gunun-denemesi-daily')
  where exists (select 1 from cron.job where jobname = 'gunun-denemesi-daily');

select cron.schedule(
  'gunun-denemesi-daily',
  '1 21 * * *',
  $cron$ select generate_daily_exam(); $cron$
);
