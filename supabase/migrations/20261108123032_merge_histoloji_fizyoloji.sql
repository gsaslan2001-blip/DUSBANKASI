-- Histoloji sorularının kimliklerini ve ilişkili kullanıcı kayıtlarını koru.
-- Aynı isimli fizyoloji üniteleriyle karışmamaları için ünite adını koruyucu
-- bir önekle taşı; ortak deneme havuzu ise aynı adı kullanır.
update public.questions
set lesson = 'Fizyoloji',
    unit = case
      when unit = 'Deneme' or unit is null then unit
      else 'Histoloji - ' || unit
    end
where lesson = 'Histoloji';

-- Bir gün için Fizyoloji zaten varsa çakışmayı önleyerek planı birleştir.
insert into public.daily_exam_config (dow, lesson)
select dow, 'Fizyoloji'
from public.daily_exam_config
where lesson = 'Histoloji'
on conflict (dow, lesson) do nothing;

delete from public.daily_exam_config where lesson = 'Histoloji';
