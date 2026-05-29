import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'YOUR_URL_HERE';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'YOUR_KEY_HERE';

// We can read env vars from .env
const env = fs.readFileSync('.env', 'utf-8');
let url = '', key = '';
for(const line of env.split('\n')) {
  if (line.startsWith('VITE_SUPABASE_URL=')) url = line.split('=')[1].trim();
  if (line.startsWith('VITE_SUPABASE_ANON_KEY=')) key = line.split('=')[1].trim();
}

const supabase = createClient(url, key);

async function main() {
  const { data, error } = await supabase.rpc('get_schema_info'); // Just testing
  // Actually, let's just use PostgREST
  const { data: d, error: e } = await supabase.from('active_sessions').select('*').limit(1);
  console.log(d, e);
}
main();
