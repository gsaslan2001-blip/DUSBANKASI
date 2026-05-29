-- User-scoped active sessions for cross-device resume.
-- The app has a single owner/user model: signed-in sessions must converge on
-- one cloud row per user instead of drifting per device.

alter table public.active_sessions
  add column if not exists user_id uuid references auth.users(id) on delete cascade;

grant select, insert, update, delete on table public.active_sessions to authenticated;

-- If several devices already wrote rows for the same user, keep the freshest
-- one and remove stale copies before enforcing uniqueness.
with ranked as (
  select
    device_id,
    row_number() over (
      partition by user_id
      order by updated_at desc nulls last, device_id
    ) as rn
  from public.active_sessions
  where user_id is not null
)
delete from public.active_sessions s
using ranked
where s.device_id = ranked.device_id
  and ranked.rn > 1;

create unique index if not exists active_sessions_user_unique
  on public.active_sessions (user_id)
  where user_id is not null;

create index if not exists active_sessions_user_updated_idx
  on public.active_sessions (user_id, updated_at desc)
  where user_id is not null;

alter table public.active_sessions enable row level security;

drop policy if exists "Public read sessions" on public.active_sessions;
drop policy if exists "Public insert sessions" on public.active_sessions;
drop policy if exists "Public update sessions" on public.active_sessions;
drop policy if exists "Public delete sessions" on public.active_sessions;
drop policy if exists "Read own session" on public.active_sessions;
drop policy if exists "Insert own session" on public.active_sessions;
drop policy if exists "Update own session" on public.active_sessions;
drop policy if exists "Delete own session" on public.active_sessions;

create policy "Read own session"
  on public.active_sessions
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Insert own session"
  on public.active_sessions
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Update own session"
  on public.active_sessions
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Delete own session"
  on public.active_sessions
  for delete
  to authenticated
  using ((select auth.uid()) = user_id);
