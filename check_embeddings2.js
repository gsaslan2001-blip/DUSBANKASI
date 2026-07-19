import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data, error } = await supabase
    .from('questions')
    .select('*')
    .eq('lesson', 'Pedodonti')
    .eq('unit', '8. Ünite')
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  
  if (data && data.length > 0) {
    console.log(Object.keys(data[0]));
  } else {
    console.log('No questions found.');
  }
}
main();
