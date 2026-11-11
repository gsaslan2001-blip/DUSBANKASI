create table public.triaj_ticktick_connections (
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

create table public.triaj_integration_quotas (
  user_id uuid not null references auth.users (id) on delete cascade,
  feature text not null check (feature in ('deepseek', 'ticktick-connect')),
  quota_day date not null,
  request_count integer not null check (request_count > 0),
  primary key (user_id, feature)
);

alter table public.triaj_integration_quotas enable row level security;
revoke all on public.triaj_integration_quotas from public, anon, authenticated;
grant select, insert, update on public.triaj_integration_quotas to service_role;

create function public.triaj_take_integration_quota(p_user_id uuid, p_feature text)
returns boolean
language sql
security invoker
set search_path = ''
as $$
  with incremented as (
    insert into public.triaj_integration_quotas as quota (user_id, feature, quota_day, request_count)
    values (p_user_id, p_feature, (current_timestamp at time zone 'Europe/Istanbul')::date, 1)
    on conflict (user_id, feature) do update set
      quota_day = excluded.quota_day,
      request_count = case when quota.quota_day = excluded.quota_day
        then quota.request_count + 1 else 1 end
    where quota.quota_day < excluded.quota_day
      or (quota.quota_day = excluded.quota_day
        and quota.request_count < case p_feature when 'deepseek' then 20 else 10 end)
    returning 1
  )
  select exists (select from incremented)
$$;

revoke all on function public.triaj_take_integration_quota(uuid, text) from public, anon, authenticated;
grant execute on function public.triaj_take_integration_quota(uuid, text) to service_role;
