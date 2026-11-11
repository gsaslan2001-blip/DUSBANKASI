-- v2 introduces first-review-v2 tasks. Old v1 results and open sets stay untouched.
-- Existing RPCs use task.questionCount and exclude actual recorded T0 IDs;
-- they already support variable quotas without a separate T0 sampling task.
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
