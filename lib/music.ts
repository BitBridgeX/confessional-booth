import { supabase } from "./supabase";
import type { MusicTrack } from "./database.types";

export async function getTracks(episodeId?: string, limit = 50): Promise<MusicTrack[]> {
  let query = supabase.from("cb_music_tracks").select("*");
  if (episodeId) query = query.eq("episode_id", episodeId);
  const { data, error } = await query.order("created_at", { ascending: false }).limit(limit);
  if (error) { console.error("getTracks:", error.message); return []; }
  return data ?? [];
}

export async function getTrack(id: string): Promise<MusicTrack | null> {
  const { data, error } = await supabase
    .from("cb_music_tracks")
    .select("*")
    .eq("id", id)
    .single();
  if (error) { console.error("getTrack:", error.message); return null; }
  return data;
}

export async function getTracksByGenre(genre: string): Promise<MusicTrack[]> {
  const { data, error } = await supabase
    .from("cb_music_tracks")
    .select("*")
    .eq("genre", genre)
    .order("created_at", { ascending: false });
  if (error) return [];
  return data ?? [];
}
