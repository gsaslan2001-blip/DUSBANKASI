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
      request_count = case when quota.quota_day = excluded.quota_day then quota.request_count + 1 else 1 end
    where quota.quota_day < excluded.quota_day
      or (quota.quota_day = excluded.quota_day and quota.request_count < case p_feature
        when 'deepseek' then 20 when 'ticktick-focus' then 60 else 10 end)
    returning 1
  )
  select exists (select from incremented);
$$;

revoke all on function public.triaj_take_integration_quota(uuid, text) from public, anon, authenticated;
grant execute on function public.triaj_take_integration_quota(uuid, text) to service_role;
alter table public.triaj_integration_quotas drop constraint if exists triaj_integration_quotas_feature_check;
alter table public.triaj_integration_quotas add constraint triaj_integration_quotas_feature_check
  check (feature in ('deepseek', 'ticktick-connect', 'ticktick-focus'));

