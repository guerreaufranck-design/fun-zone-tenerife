import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Fun Zone's OWN private database — deliberately separate from the Supabase
 * shared with the axe site. Data here (e.g. outbound referral-click traffic)
 * stays with Fun Zone and is NOT visible to whoever runs/buys the axe business.
 *
 * Configure via env (Vercel, Fun Zone project only):
 *   FUNZONE_PRIVATE_SUPABASE_URL
 *   FUNZONE_PRIVATE_SUPABASE_SERVICE_KEY
 *
 * Everything degrades gracefully to a no-op when unset, so nothing breaks
 * before the private project is provisioned.
 */
const URL = process.env.FUNZONE_PRIVATE_SUPABASE_URL;
const KEY = process.env.FUNZONE_PRIVATE_SUPABASE_SERVICE_KEY;

export function hasPrivateDb(): boolean {
  return Boolean(URL && KEY);
}

export function getPrivateDb(): SupabaseClient | null {
  if (!URL || !KEY) return null;
  return createClient(URL, KEY, { auth: { persistSession: false } });
}
