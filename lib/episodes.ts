import { supabase } from "./supabase";
import type { Episode } from "./database.types";

export async function getEpisodes(limit = 10): Promise<Episode[]> {
  const { data, error } = await supabase
    .from("cb_episodes")
    .select("*")
    .eq("is_published", true)
    .order("release_date", { ascending: false })
    .limit(limit);
  if (error) { console.error("getEpisodes:", error.message); return []; }
  return data ?? [];
}

export async function getEpisode(id: string): Promise<Episode | null> {
  const { data, error } = await supabase
    .from("cb_episodes")
    .select("*")
    .eq("id", id)
    .single();
  if (error) { console.error("getEpisode:", error.message); return null; }
  return data;
}

export async function getEpisodeByNumber(num: number): Promise<Episode | null> {
  const { data, error } = await supabase
    .from("cb_episodes")
    .select("*")
    .eq("episode_number", num)
    .single();
  if (error) return null;
  return data;
}
