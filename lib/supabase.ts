import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Public client — uses anon key, respects RLS
export const supabase = createClient<Database>(supabaseUrl, supabaseAnon);

// Admin client — uses service role, bypasses RLS (server-side only)
export function getAdminClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY not set");
  return createClient<Database>(supabaseUrl, serviceKey, {
    auth: { persistSession: false },
  });
}

// Re-export types for convenience
export type {
  Episode, Confession, MusicTrack,
  MerchProduct, Order, EmailSub, LiveChatMsg,
} from "./database.types";
