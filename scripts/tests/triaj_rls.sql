-- Run with psql -v ON_ERROR_STOP=1 -f scripts/tests/triaj_rls.sql against a local Supabase database.
begin;

insert into auth.users (id) values
  ('e1a2f780-5673-4bac-a74e-080e8177196d'),
  ('e1a2f780-5673-4bac-a74e-080e8177196e');

set local role anon;
do $$
begin
  begin
    perform * from public.triaj_state;
    raise exception 'Anonymous user read TRİAJ state';
  exception when insufficient_privilege then null;
  end;
  begin
    perform public.get_triaj_tasks('2026-11-11');
    raise exception 'Anonymous user read TRİAJ task summary';
  exception when insufficient_privilege then null;
  end;
  begin
    perform public.prepare_triaj_question_sets('2026-11-11', '{}'::jsonb);
    raise exception 'Anonymous user prepared a TRİAJ question set';
  exception when insufficient_privilege then null;
  end;
end
$$;

set local role authenticated;
set local "request.jwt.claim.sub" = 'e1a2f780-5673-4bac-a74e-080e8177196d';
insert into public.triaj_state (user_id, payload)
values (
  auth.uid(),
  '{
    "tasks":[
      {"id":"due","status":"open","stage":"T3_MAIN","topicId":"topic-a","dueDate":"2026-11-10","questionCount":2},
      {"id":"later","status":"open","dueDate":"2026-11-12"},
      {"id":"done","status":"completed","dueDate":"2026-11-10","completedDate":"2026-11-11"}
    ],
    "triageHistory":[
      {"topicId":"topic-a","stage":"T0_SAMPLING","date":"2026-11-01","questionIds":["q1"]},
      {"topicId":"topic-a","stage":"T0_SAMPLING","date":"2026-11-07","questionIds":["sampled"]}
    ]
  }'::jsonb
);

do $$
declare
  affected integer;
  task_ids text[];
  task jsonb;
  prepared_set_id text;
begin
  select array_agg(item->>'id' order by item->>'id') into task_ids
  from jsonb_array_elements(public.get_triaj_tasks('2026-11-11')) as entries(item);
  if task_ids is distinct from array['done', 'due'] then
    raise exception 'Task summary omitted a due/completed task or included a future task';
  end if;

  select item into task
  from jsonb_array_elements(public.get_triaj_tasks('2026-11-11')) as entries(item)
  where item->>'id' = 'due';
  if task->'excludedQuestionIds' is distinct from '["sampled"]'::jsonb then
    raise exception 'T+3 summary did not exclude T+0 question IDs';
  end if;

  begin
    perform public.prepare_triaj_question_sets('2026-11-11', null);
    raise exception 'Invalid question preparation input succeeded';
  exception when invalid_parameter_value then null;
  end;

  perform public.prepare_triaj_question_sets('2026-11-11', '{"due":["sampled","q1"]}'::jsonb);
  if (select revision from public.triaj_state) <> 1 then
    raise exception 'T+3 preparation accepted T+0 question IDs';
  end if;

  select item into task
  from jsonb_array_elements(public.prepare_triaj_question_sets('2026-11-11', '{"due":["q1","q2"]}'::jsonb))
    as entries(item)
  where item->>'id' = 'due';
  prepared_set_id := task->>'setId';
  if prepared_set_id is null or task->'questionIds' is distinct from '["q1","q2"]'::jsonb
      or (select revision from public.triaj_state) <> 2 then
    raise exception 'Question set and revision did not update together';
  end if;

  select item into task
  from jsonb_array_elements(public.prepare_triaj_question_sets('2026-11-11', '{"due":["q3","q4"]}'::jsonb))
    as entries(item)
  where item->>'id' = 'due';
  if task->>'setId' is distinct from prepared_set_id or task->'questionIds' is distinct from '["q1","q2"]'::jsonb
      or (select revision from public.triaj_state) <> 2 then
    raise exception 'Retry replaced a prepared question set';
  end if;

  update public.triaj_state set revision = 3 where user_id = auth.uid() and revision = 2;
  get diagnostics affected = row_count;
  if affected <> 1 then raise exception 'Owner compare-and-swap failed'; end if;

  update public.triaj_state set revision = 3 where user_id = auth.uid() and revision = 2;
  get diagnostics affected = row_count;
  if affected <> 0 then raise exception 'Stale compare-and-swap overwrote state'; end if;

  begin
    update public.triaj_state set revision = 5 where user_id = auth.uid();
    raise exception 'Invalid revision update succeeded';
  exception when serialization_failure then null;
  end;

  begin
    perform * from public.triaj_ticktick_connections;
    raise exception 'Authenticated user read server credential table';
  exception when insufficient_privilege then null;
  end;

  begin
    perform public.triaj_take_integration_quota(auth.uid(), 'deepseek');
    raise exception 'Authenticated user accessed server quota';
  exception when insufficient_privilege then null;
  end;
end
$$;

set local "request.jwt.claim.sub" = 'e1a2f780-5673-4bac-a74e-080e8177196e';
do $$
begin
  if exists (select from public.triaj_state) or public.get_triaj_tasks('2026-11-11') <> '[]'::jsonb then
    raise exception 'User B accessed user A state';
  end if;

  update public.triaj_state set revision = 3 where user_id = 'e1a2f780-5673-4bac-a74e-080e8177196d';
  if found then raise exception 'User B updated user A state'; end if;

  begin
    insert into public.triaj_state (user_id, payload) values (auth.uid(), '{"tasks":[]}'::jsonb);
    raise exception 'A malformed state payload passed validation';
  exception when check_violation then null;
  end;

  begin
    insert into public.triaj_state (user_id, payload)
    values ('e1a2f780-5673-4bac-a74e-080e8177196d', '{"tasks":[],"triageHistory":[]}'::jsonb);
    raise exception 'User B wrote as user A';
  exception when insufficient_privilege then null;
  end;
end
$$;

set local role service_role;
do $$
declare
  user_a constant uuid := 'e1a2f780-5673-4bac-a74e-080e8177196d';
  user_b constant uuid := 'e1a2f780-5673-4bac-a74e-080e8177196e';
  version constant uuid := 'e1a2f780-5673-4bac-a74e-080e8177196f';
begin
  for attempt in 1..20 loop
    if not public.triaj_take_integration_quota(user_a, 'deepseek') then
      raise exception 'Quota rejected user A early';
    end if;
  end loop;
  if public.triaj_take_integration_quota(user_a, 'deepseek')
      or not public.triaj_take_integration_quota(user_b, 'deepseek') then
    raise exception 'Quota was bypassed or shared between users';
  end if;

  insert into public.triaj_ticktick_connections
    (user_id, oauth_generation, oauth_state_hash, oauth_origin, oauth_expires_at)
  values (user_a, version, 'synthetic-state', 'https://triaj.example', now() + interval '10 minutes');

  update public.triaj_ticktick_connections set oauth_state_hash = null
  where oauth_state_hash = 'synthetic-state' and oauth_origin = 'https://triaj.example' and oauth_expires_at > now();
  if not found then raise exception 'Initial OAuth state consumption failed'; end if;

  update public.triaj_ticktick_connections set oauth_state_hash = null
  where oauth_state_hash = 'synthetic-state' and oauth_origin = 'https://triaj.example' and oauth_expires_at > now();
  if found then raise exception 'OAuth state could be replayed'; end if;

  delete from public.triaj_ticktick_connections where user_id = user_a;
  update public.triaj_ticktick_connections set credential_ciphertext = 'synthetic-credential'
  where user_id = user_a and oauth_generation = version;
  if found then raise exception 'Callback revived disconnected credentials'; end if;
end
$$;

rollback;
