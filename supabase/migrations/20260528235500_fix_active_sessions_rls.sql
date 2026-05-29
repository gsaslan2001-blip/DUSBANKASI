-- Allow authenticated users to claim or overwrite anonymous sessions
-- This fixes the bug where a device_id is locked by an anonymous session,
-- preventing the user from saving their session after logging in.

-- Allow UPDATE on rows where user_id IS NULL (anonymous)
create policy "Claim anonymous session update"
  on public.active_sessions
  for update
  to authenticated
  using (user_id is null)
  with check (auth.uid() = user_id);

-- Allow DELETE on rows where user_id IS NULL (anonymous)
create policy "Claim anonymous session delete"
  on public.active_sessions
  for delete
  to authenticated
  using (user_id is null);

-- Allow SELECT on rows where user_id IS NULL (so they can load their anon session right after login if needed)
-- Actually, the client uses `loadSessionFromCloud` with `eq('user_id', userId)` so it doesn't need to read anon.
