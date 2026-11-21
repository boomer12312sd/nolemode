// Temporary: sends a test notification to every subscribed phone. Delete after testing.
import { vapid, getSubs, send, json } from '../../lib/push.mjs';
export default async () => {
  await vapid();
  const subs = await getSubs();
  let sent = 0;
  for (const s of subs) if (await send(s, { title: '🎾 Test from Claude', body: 'If you see this, reminders work. Game, set, match.', tab: 'day', tag: 'train' })) sent++;
  return json({ subscribers: subs.length, sent });
};
export const config = { path: '/api/ping' };
