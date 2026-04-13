import { Episode } from "./supabase";

function getSupabase() {
  const { createClient } = require("@supabase/supabase-js");
  const { config } = require("./config");
  return createClient(config.supabase.url, config.supabase.anonKey);
}

export async function getEpisodes(limit = 10): Promise<Episode[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("cb_episodes")
    .select("*")
    .eq("is_published", true)
    .order("release_date", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching episodes:", error);
    return [];
  }

  return data || [];
}

export async function getEpisode(id: string): Promise<Episode | null> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("cb_episodes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching episode:", error);
    return null;
  }

  return data;
}

export async function createEpisode(episode: Omit<Episode, "id" | "created_at">): Promise<Episode | null> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("cb_episodes")
    .insert([episode])
    .select()
    .single();

  if (error) {
    console.error("Error creating episode:", error);
    return null;
  }

  return data;
}

export async function updateEpisode(id: string, updates: Partial<Episode>): Promise<Episode | null> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("cb_episodes")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating episode:", error);
    return null;
  }

  return data;
}
