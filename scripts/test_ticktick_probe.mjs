import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { createDecipheriv } from 'node:crypto';

dotenv.config({ path: '.env.local' });

function associatedData(userId, version) {
  return Buffer.from(`ticktick:v1:${userId}:${version}`);
}

function openCredential(ciphertext, key, userId, version) {
  const encoded = Buffer.from(ciphertext, 'base64url');
  const decipher = createDecipheriv('aes-256-gcm', key, encoded.subarray(0, 12));
  decipher.setAAD(associatedData(userId, version));
  decipher.setAuthTag(encoded.subarray(12, 28));
  const plain = Buffer.concat([decipher.update(encoded.subarray(28)), decipher.final()]);
  return JSON.parse(plain.toString('utf8'));
}

const sb = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const key = Buffer.from(process.env.TRIAJ_TOKEN_ENCRYPTION_KEY, 'base64');

async function test() {
  const { data: conn, error } = await sb.from('triaj_ticktick_connections').select('*').single();
  console.log('Error:', error);
  console.log('Conn user_id:', conn?.user_id, 'version:', conn?.connection_version);
  if (!conn) return;

  try {
    const cred = openCredential(conn.credential_ciphertext, key, conn.user_id, conn.connection_version);
    console.log('Decrypted token exists! Token prefix:', cred.access_token.slice(0, 8), 'length:', cred.access_token.length);
    console.log('Matches .env.local TICKTICK_ACCESS_TOKEN?', cred.access_token === process.env.TICKTICK_ACCESS_TOKEN);

    // TickTick focus API çağrısı
    const toDate = '2026-11-11T23:59:59+0300';
    const fromDate = '2026-10-12T00:00:00+0300';
    const url = `https://api.ticktick.com/open/v1/focus?from=${encodeURIComponent(fromDate)}&to=${encodeURIComponent(toDate)}&type=0`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${cred.access_token}`,
        Accept: 'application/json'
      }
    });
    console.log('TickTick API response status:', res.status);
    const data = await res.json();
    console.log('Type 0 records count:', Array.isArray(data) ? data.length : data);
  } catch (e) {
    console.error('Failed decrypt or fetch:', e);
  }
}

test();
