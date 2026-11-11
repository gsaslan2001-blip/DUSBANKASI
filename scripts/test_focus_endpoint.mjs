import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

import { handler } from '../api/triaj/ticktick/focus.ts';

async function testEndpoint() {
  console.log('--- TEST 1: Unauthenticated Request (DusTriaj Direct Mode) ---');
  const req1 = new Request('http://localhost:5173/api/triaj/ticktick/focus', {
    method: 'GET',
    headers: {}
  });

  const res1 = await handler(req1);
  console.log('Status:', res1.status);
  const data1 = await res1.json();
  console.log('Connected:', data1.connected);
  console.log('Active Day Stats:', data1.activeDayStats?.date, data1.activeDayStats?.totalHours, 'hours');
  console.log('Total Tracked Days:', data1.totalTrackedDays);
  console.log('Total All Time Hours:', data1.totalAllTimeHours);
  console.log('Daily logs count:', data1.dailyLogs?.length);
  if (data1.dailyLogs?.length > 0) {
    console.log('Latest log:', data1.dailyLogs[0]);
  }
}

testEndpoint().catch(console.error);
