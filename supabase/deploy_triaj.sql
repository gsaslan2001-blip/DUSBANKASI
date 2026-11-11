-- DUSBANKASI TRİAJ MODÜLÜ CANLI VERİTABANI KURULUMU
-- Proje Ref: vblndoyjmkgaeuihydyd
-- Tarih: 2026-11-11

-- 1. TRİAJ DURUM TABLOSU (triaj_state)
create table if not exists public.triaj_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  revision bigint not null default 1 check (revision > 0),
  schema_version integer not null default 2 check (schema_version > 0),
  payload jsonb not null check (
    jsonb_typeof(payload) = 'object'
    and jsonb_typeof(payload->'tasks') is not distinct from 'array'
    and jsonb_typeof(payload->'triageHistory') is not distinct from 'array'
  ),
  updated_at timestamptz not null default now()
);

alter table public.triaj_state enable row level security;
revoke all on public.triaj_state from public, anon, authenticated;
grant select, insert on public.triaj_state to authenticated;
grant update (revision, schema_version, payload) on public.triaj_state to authenticated;

drop policy if exists triaj_state_select on public.triaj_state;
create policy triaj_state_select on public.triaj_state for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists triaj_state_insert on public.triaj_state;
create policy triaj_state_insert on public.triaj_state for insert to authenticated
  with check ((select auth.uid()) = user_id and revision = 1);

drop policy if exists triaj_state_update on public.triaj_state;
create policy triaj_state_update on public.triaj_state for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- v2 muhafızı: schema_version düşürmeyi AYRI SQLSTATE ile reddeder (55000).
-- 40001 yalnız revizyon çakışması içindir; aksi hâlde istemci "başka cihaz yazdı"
-- sanıp boşuna yeniden dener. Bu gövde supabase/migrations/20261111143000_triaj_first_review_v2.sql
-- ile birebir aynı tutulmalıdır.
create or replace function public.triaj_check_revision() returns trigger
  language plpgsql set search_path = ''
as $$
begin
  if new.revision <> old.revision + 1 then
    raise exception 'Invalid TRİAJ revision' using errcode = '40001';
  end if;
  if new.schema_version < old.schema_version then
    raise exception 'TRİAJ client version is outdated; reload before saving' using errcode = '55000';
  end if;
  new.updated_at := now();
  return new;
end;
$$;

revoke all on function public.triaj_check_revision() from public, anon, authenticated;

drop trigger if exists triaj_state_revision on public.triaj_state;
create trigger triaj_state_revision before update on public.triaj_state
  for each row execute function public.triaj_check_revision();

-- 2. GÖREV GETİRME RPC FONKSİYONU (get_triaj_tasks)
create or replace function public.get_triaj_tasks(p_today date) returns jsonb
  language sql stable security invoker set search_path = ''
as $$
  select coalesce(jsonb_agg(
    case when task->>'stage' = 'T3_MAIN' and not (task ? 'setId') then
      task || jsonb_build_object('excludedQuestionIds', coalesce((
        select result->'questionIds'
        from jsonb_array_elements(plan.payload->'triageHistory') with ordinality as history(result, pos)
        where result->>'topicId' = task->>'topicId' and result->>'stage' = 'T0_SAMPLING'
        order by pos desc limit 1
      ), '[]'::jsonb))
    else task end order by task->>'dueDate', task->>'id'
  ), '[]'::jsonb)
  from public.triaj_state as plan
  cross join lateral jsonb_array_elements(plan.payload->'tasks') as entries(task)
  where plan.user_id = (select auth.uid())
    and (
      (task->>'status' = 'open' and task->>'dueDate' <= p_today::text)
      or (task->>'status' = 'completed' and task->>'completedDate' = p_today::text)
    );
$$;

revoke all on function public.get_triaj_tasks(date) from public, anon;
grant execute on function public.get_triaj_tasks(date) to authenticated;

-- 3. SORU SETİ HAZIRLAMA RPC FONKSİYONU (prepare_triaj_question_sets)
create or replace function public.prepare_triaj_question_sets(p_today date, p_preparations jsonb) returns jsonb
  language plpgsql security invoker set search_path = ''
as $$
declare
  owner_id uuid := auth.uid();
  current_payload jsonb;
  old_tasks jsonb;
  new_tasks jsonb;
begin
  if jsonb_typeof(p_preparations) is distinct from 'object' or pg_column_size(p_preparations) > 1000000 then
    raise exception 'Invalid TRİAJ preparations' using errcode = '22023';
  end if;
  select payload into current_payload from public.triaj_state where user_id = owner_id for update;
  if not found then return '[]'::jsonb; end if;
  old_tasks := current_payload->'tasks';
  select coalesce(jsonb_agg(
    case
      when task->>'status' <> 'open' or task ? 'setId'
        or task->>'dueDate' > p_today::text
        or (task->>'stage' = 'SATURDAY_REPAIR' and extract(isodow from p_today) <> 6)
        or jsonb_typeof(ids) is distinct from 'array' then task
      when jsonb_array_length(ids) > (task->>'questionCount')::int then task
      when exists (select 1 from jsonb_array_elements(ids) as item where jsonb_typeof(item) <> 'string') then task
      when (select count(distinct item) from jsonb_array_elements_text(ids) as item) <> jsonb_array_length(ids) then task
      when task->>'stage' = 'T3_MAIN' and ((
        select result->'questionIds'
        from jsonb_array_elements(current_payload->'triageHistory') with ordinality as history(result, history_pos)
        where result->>'topicId' = task->>'topicId' and result->>'stage' = 'T0_SAMPLING'
        order by history_pos desc limit 1
      ) ?| array(select jsonb_array_elements_text(ids))) then task
      when jsonb_array_length(ids) = (task->>'questionCount')::int then
        task || jsonb_build_object('availableCount', jsonb_array_length(ids), 'questionIds', ids, 'setId', gen_random_uuid())
      else task || jsonb_build_object('availableCount', jsonb_array_length(ids))
    end order by pos
  ), '[]'::jsonb) into new_tasks
  from jsonb_array_elements(old_tasks) with ordinality as entries(task, pos)
  cross join lateral (select p_preparations->(task->>'id') as ids) as selection;
  if new_tasks is distinct from old_tasks then
    update public.triaj_state
      set revision = revision + 1, payload = jsonb_set(current_payload, '{tasks}', new_tasks)
      where user_id = owner_id;
  end if;
  return public.get_triaj_tasks(p_today);
end;
$$;

revoke all on function public.prepare_triaj_question_sets(date, jsonb) from public, anon;
grant execute on function public.prepare_triaj_question_sets(date, jsonb) to authenticated;

-- 4. DIŞ SERVİS VE ENTEGRASYON TABLOLARI
create table if not exists public.triaj_ticktick_connections (
  user_id uuid primary key references auth.users (id) on delete cascade,
  oauth_generation uuid not null,
  oauth_state_hash text unique,
  oauth_origin text,
  oauth_expires_at timestamptz,
  credential_ciphertext text,
  connection_version uuid,
  credential_expires_at timestamptz
);

alter table public.triaj_ticktick_connections enable row level security;
revoke all on public.triaj_ticktick_connections from public, anon, authenticated;
grant select, insert, update, delete on public.triaj_ticktick_connections to service_role;

create table if not exists public.triaj_integration_quotas (
  user_id uuid not null references auth.users (id) on delete cascade,
  feature text not null check (feature in ('deepseek', 'ticktick-connect')),
  quota_day date not null,
  request_count integer not null check (request_count > 0),
  primary key (user_id, feature)
);

alter table public.triaj_integration_quotas enable row level security;
alter table public.triaj_integration_quotas drop constraint if exists triaj_integration_quotas_feature_check;
alter table public.triaj_integration_quotas add constraint triaj_integration_quotas_feature_check
  check (feature in ('deepseek', 'ticktick-connect', 'ticktick-focus'));
revoke all on public.triaj_integration_quotas from public, anon, authenticated;
grant select, insert, update on public.triaj_integration_quotas to service_role;

create or replace function public.triaj_take_integration_quota(p_user_id uuid, p_feature text)
returns boolean
language sql
security invoker
set search_path = ''
as $$
  with incremented as (
    insert into public.triaj_integration_quotas as quota (user_id, feature, quota_day, request_count)
    select p_user_id, p_feature, (current_timestamp at time zone 'Europe/Istanbul')::date, 1
    where p_feature in ('deepseek', 'ticktick-connect', 'ticktick-focus')
    on conflict (user_id, feature) do update set
      quota_day = excluded.quota_day,
      request_count = case when quota.quota_day = excluded.quota_day
        then quota.request_count + 1 else 1 end
    where quota.quota_day < excluded.quota_day
      or (quota.quota_day = excluded.quota_day
        and quota.request_count < case p_feature when 'deepseek' then 20 when 'ticktick-focus' then 60 else 10 end)
    returning 1
  )
  select exists (select from incremented)
$$;

revoke all on function public.triaj_take_integration_quota(uuid, text) from public, anon, authenticated;
grant execute on function public.triaj_take_integration_quota(uuid, text) to service_role;
