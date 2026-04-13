// Untyped Supabase client for insert/update operations
// The typed client has overly strict inference that breaks on complex schemas
import { createClient } from "@supabase/supabase-js";

export function getDB() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
