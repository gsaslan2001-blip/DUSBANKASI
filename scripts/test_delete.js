import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function testDelete() {
  const { data, error } = await supabase.from('questions').select('id').limit(1);
  if (error) {
    console.error("Select error:", error);
    return;
  }
  if (!data || data.length === 0) {
    console.log("No questions found.");
    return;
  }
  
  const id = data[0].id;
  console.log("Trying to delete question:", id);
  
  const { data: delData, error: delError } = await supabase.from('questions').delete().eq('id', id).select();
  if (delError) {
    console.error("Delete error:", delError);
  } else {
    console.log("Deleted successfully:", delData);
  }
}

testDelete();
