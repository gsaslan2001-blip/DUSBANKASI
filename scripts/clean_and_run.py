import sys
sys.path.insert(0, r'c:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts')
from config import SUPABASE_URL, SUPABASE_KEY
from supabase import create_client
import parse_unite_2

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
supabase.table('questions').delete().eq('unit', '2. ünite').execute()
print('Deleted old entries')

parse_unite_2.parse()
