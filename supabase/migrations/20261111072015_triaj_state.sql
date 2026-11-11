create table public.triaj_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  revision bigint not null default 1 check (revision > 0),
  schema_version integer not null default 1 check (schema_version > 0),
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

create policy triaj_state_select on public.triaj_state for select to authenticated
  using ((select auth.uid()) = user_id);
create policy triaj_state_insert on public.triaj_state for insert to authenticated
  with check ((select auth.uid()) = user_id and revision = 1);
create policy triaj_state_update on public.triaj_state for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create function public.triaj_check_revision() returns trigger
  language plpgsql set search_path = ''
as $$
begin
  if new.revision <> old.revision + 1 then
    raise exception 'Invalid TRİAJ revision' using errcode = '40001';
  end if;
  new.updated_at := now();
  return new;
end;
$$;

revoke all on function public.triaj_check_revision() from public, anon, authenticated;
create trigger triaj_state_revision before update on public.triaj_state
  for each row execute function public.triaj_check_revision();

create function public.get_triaj_tasks(p_today date) returns jsonb
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

create function public.prepare_triaj_question_sets(p_today date, p_preparations jsonb) returns jsonb
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
