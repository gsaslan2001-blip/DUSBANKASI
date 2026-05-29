-- This migration creates a robust save_active_session RPC
-- to completely bypass RLS and Primary Key / Unique constraint conflict issues
-- that occur when logging in on a device that already has an anonymous session,
-- or when multiple devices compete for user_id.

create or replace function public.save_active_session(p_device_id text, p_user_id uuid, p_session_data jsonb)
returns void
language plpgsql
security definer
as $$
begin
  if p_user_id is not null then
    -- 1) If the user already has a session on ANY device, just update it.
    -- This maintains the unique user_id constraint safely.
    update public.active_sessions
    set session_data = p_session_data, updated_at = now()
    where user_id = p_user_id;

    if found then
      return;
    end if;

    -- 2) The user does not have a session anywhere.
    -- We can safely insert or overwrite the current device's row.
    -- If this device already has an anonymous session, or left-over session from another user,
    -- it will be overwritten and claimed by p_user_id.
    insert into public.active_sessions (device_id, user_id, session_data, updated_at)
    values (p_device_id, p_user_id, p_session_data, now())
    on conflict (device_id) do update
    set user_id = excluded.user_id,
        session_data = excluded.session_data,
        updated_at = excluded.updated_at;
  else
    -- Anonymous session
    -- Only update if it doesn't already belong to an authenticated user!
    -- Wait, if it belongs to an authenticated user, an anonymous user shouldn't overwrite it.
    -- But if they logged out, they are anonymous now.
    -- Actually, if they logged out, we shouldn't destroy their cloud session just because they play anonymously on the same device.
    -- Let's check if the device row belongs to a user.
    if exists (select 1 from public.active_sessions where device_id = p_device_id and user_id is not null) then
      -- Device row belongs to a logged-in user. But current user is anonymous.
      -- This means they logged out and are playing anonymously.
      -- We CANNOT update the device row because it would break the user's cloud session.
      -- So we just do nothing (or we could change the app to generate a new device_id upon logout).
      -- For now, do nothing.
      return;
    end if;

    insert into public.active_sessions (device_id, user_id, session_data, updated_at)
    values (p_device_id, null, p_session_data, now())
    on conflict (device_id) do update
    set session_data = excluded.session_data,
        updated_at = excluded.updated_at;
  end if;
end;
$$;
