-- Cross-device statistics sync.
-- Adds user-level JSON blobs for activity/streak and a race-safe question_stats RPC.

create table if not exists public.user_data (
  user_id uuid not null references auth.users(id) on delete cascade,
  key text not null,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

alter table public.user_data enable row level security;

drop policy if exists "user_data_own_all" on public.user_data;
create policy "user_data_own_all"
  on public.user_data
  for all
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

grant select, insert, update, delete on public.user_data to authenticated;

-- Collapse authenticated duplicate question_stats rows before adding the user-level index.
with ranked as (
  select
    id,
    user_id,
    question_id,
    row_number() over (
      partition by user_id, question_id
      order by attempts desc nulls last, last_seen desc nulls last, id
    ) as rn
  from public.question_stats
  where user_id is not null
),
rollup as (
  select
    user_id,
    question_id,
    max(attempts) as attempts,
    max(corrects) as corrects,
    max(last_seen) as last_seen
  from public.question_stats
  where user_id is not null
  group by user_id, question_id
),
keepers as (
  select id, user_id, question_id
  from ranked
  where rn = 1
)
update public.question_stats qs
set
  attempts = greatest(coalesce(qs.attempts, 0), coalesce(rollup.attempts, 0)),
  corrects = greatest(coalesce(qs.corrects, 0), coalesce(rollup.corrects, 0)),
  last_seen = greatest(qs.last_seen, rollup.last_seen)
from keepers
join rollup
  on rollup.user_id = keepers.user_id
 and rollup.question_id = keepers.question_id
where qs.id = keepers.id;

with ranked as (
  select
    id,
    row_number() over (
      partition by user_id, question_id
      order by attempts desc nulls last, last_seen desc nulls last, id
    ) as rn
  from public.question_stats
  where user_id is not null
)
delete from public.question_stats qs
using ranked
where qs.id = ranked.id
  and ranked.rn > 1;

do $$
begin
  if not exists (
    select 1
    from pg_indexes
    where schemaname = 'public'
      and tablename = 'question_stats'
      and indexdef ilike '%(user_id, question_id)%'
      and indexdef ilike '%where (user_id is not null)%'
  ) then
    create unique index question_stats_user_question_idx
      on public.question_stats (user_id, question_id)
      where user_id is not null;
  end if;
end;
$$;

create or replace function public.upsert_stats_batch(rows jsonb)
returns void
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null then
    raise exception 'Authentication required'
      using errcode = '28000';
  end if;

  insert into public.question_stats (
    device_id,
    user_id,
    question_id,
    attempts,
    corrects,
    last_seen,
    wrong_choices,
    difficulty
  )
  select
    x.device_id,
    auth.uid(),
    x.question_id,
    greatest(coalesce(x.attempts, 0), 0),
    greatest(coalesce(x.corrects, 0), 0),
    coalesce(x.last_seen, now()),
    coalesce(x.wrong_choices, '[]'::jsonb),
    x.difficulty
  from jsonb_to_recordset(rows) as x(
    device_id text,
    question_id uuid,
    attempts integer,
    corrects integer,
    last_seen timestamptz,
    wrong_choices jsonb,
    difficulty double precision
  )
  where x.device_id is not null
    and x.question_id is not null
  on conflict (user_id, question_id) where user_id is not null
  do update set
    device_id = excluded.device_id,
    attempts = greatest(excluded.attempts, public.question_stats.attempts),
    corrects = greatest(excluded.corrects, public.question_stats.corrects),
    last_seen = greatest(excluded.last_seen, public.question_stats.last_seen),
    wrong_choices = (
      select coalesce(jsonb_agg(distinct choice), '[]'::jsonb)
      from jsonb_array_elements(
        coalesce(public.question_stats.wrong_choices, '[]'::jsonb)
        || coalesce(excluded.wrong_choices, '[]'::jsonb)
      ) as choice
    ),
    difficulty = coalesce(excluded.difficulty, public.question_stats.difficulty);
end;
$$;

revoke all on function public.upsert_stats_batch(jsonb) from public;
grant execute on function public.upsert_stats_batch(jsonb) to authenticated;
