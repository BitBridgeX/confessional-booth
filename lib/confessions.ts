import { supabase, Confession } from "./supabase";
import crypto from "crypto";

// Hash IP for anonymity
export function hashIP(ip: string): string {
  return crypto.createHash("sha256").update(ip).digest("hex");
}

export async function submitConfession(
  text: string,
  category: Confession["category"],
  ip: string
): Promise<Confession | null> {
  const ipHash = hashIP(ip);

  const { data, error } = await supabase
    .from("cb_confessions")
    .insert([
      {
        text,
        category,
        ip_hash: ipHash,
        status: "pending",
        attribution: "anon",
        prayer_count: 0,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error submitting confession:", error);
    return null;
  }

  return data;
}

export async function getApprovedConfessions(limit = 20): Promise<Confession[]> {
  const { data, error } = await supabase
    .from("cb_confessions")
    .select("*")
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching confessions:", error);
    return [];
  }

  return data || [];
}

export async function getPendingConfessions(): Promise<Confession[]> {
  const { data, error } = await supabase
    .from("cb_confessions")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching pending:", error);
    return [];
  }

  return data || [];
}

export async function approveConfession(
  id: string,
  approvedBy: string
): Promise<Confession | null> {
  const { data, error } = await supabase
    .from("cb_confessions")
    .update({ status: "approved", approved_by: approvedBy })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error approving confession:", error);
    return null;
  }

  return data;
}

export async function rejectConfession(id: string): Promise<Confession | null> {
  const { data, error } = await supabase
    .from("cb_confessions")
    .update({ status: "rejected" })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error rejecting confession:", error);
    return null;
  }

  return data;
}

export async function incrementPrayerCount(id: string): Promise<void> {
  await supabase.rpc("increment_prayer_count", { confession_id: id });
}
