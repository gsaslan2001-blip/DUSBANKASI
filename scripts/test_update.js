import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function testUpdate() {
  const { data, error } = await supabase.from('questions').select('id').limit(1);
  if (!data || data.length === 0) return;
  
  const id = data[0].id;
  console.log("Trying to update question:", id);
  
  const { data: updData, error: updError } = await supabase
    .from('questions')
    .update({ quality_flag: 'auto_deleted' })
    .eq('id', id)
    .select();
    
  if (updError) {
    console.error("Update error:", updError);
  } else {
    console.log("Updated successfully:", updData);
  }
}

testUpdate();
