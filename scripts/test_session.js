const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  // First, we need a user token. I can't easily get it without auth.
  // Wait, I can query with service_role key if available, or just anon.
  // Since active_sessions is authenticated only, anon won't work for user_id.
  console.log("Supabase URL:", supabaseUrl);
}

test();
