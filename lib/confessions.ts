// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { createClient } from "@supabase/supabase-js";
import type { Confession } from "./database.types";
import { createHash } from "crypto";

// Use untyped client for confessions — the `text` column name conflicts with
// Supabase's generated types. All other tables use the typed client.
function getSB() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export function hashIP(ip: string): string {
  return createHash("sha256").update(ip).digest("hex");
}

export async function submitConfession(
  confessionText: string,
  category: string,
  ip: string
): Promise<Confession | null> {
  const sb = getSB();
  const { data, error } = await sb
    .from("cb_confessions")
    .insert({ text: confessionText, category, ip_hash: hashIP(ip), status: "pending", prayer_count: 0 })
    .select()
    .single();
  if (error) { console.error("submitConfession:", error.message); return null; }
  return data as Confession;
}

export async function getApprovedConfessions(limit = 20): Promise<Confession[]> {
  const sb = getSB();
  const { data, error } = await sb
    .from("cb_confessions")
    .select("*")
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) { console.error("getApprovedConfessions:", error.message); return []; }
  return (data ?? []) as Confession[];
}

export async function getPendingConfessions(): Promise<Confession[]> {
  const sb = getSB();
  const { data, error } = await sb
    .from("cb_confessions")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: true });
  if (error) { console.error("getPendingConfessions:", error.message); return []; }
  return (data ?? []) as Confession[];
}

export async function approveConfession(id: string, approvedBy?: string): Promise<Confession | null> {
  const sb = getSB();
  const { data, error } = await sb
    .from("cb_confessions")
    .update({ status: "approved", ...(approvedBy ? { approved_by: approvedBy } : {}) })
    .eq("id", id)
    .select()
    .single();
  if (error) { console.error("approveConfession:", error.message); return null; }
  return data as Confession;
}

export async function rejectConfession(id: string): Promise<Confession | null> {
  const sb = getSB();
  const { data, error } = await sb
    .from("cb_confessions")
    .update({ status: "rejected" })
    .eq("id", id)
    .select()
    .single();
  if (error) { console.error("rejectConfession:", error.message); return null; }
  return data as Confession;
}

export async function incrementPrayerCount(id: string): Promise<void> {
  const sb = getSB();
  await sb.rpc("increment_prayer_count", { confession_id: id });
}
