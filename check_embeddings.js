import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.log('No URL or KEY found.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data, error } = await supabase
    .from('questions')
    .select('id, question, embedding, stem_embedding, explanation_embedding')
    .eq('lesson', 'Pedodonti')
    .eq('unit', '8. Ünite')
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  
  if (data && data.length > 0) {
    console.log('ID:', data[0].id);
    console.log('Has embedding:', !!data[0].embedding);
    console.log('Has stem_embedding:', !!data[0].stem_embedding);
    console.log('Has explanation_embedding:', !!data[0].explanation_embedding);
  } else {
    console.log('No questions found.');
  }
}
main();
