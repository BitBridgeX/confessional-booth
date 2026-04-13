import { MusicTrack } from "./supabase";

function getSupabase() {
  const { createClient } = require("@supabase/supabase-js");
  const { config } = require("./config");
  return createClient(config.supabase.url, config.supabase.anonKey);
}

export async function getTracks(episodeId?: string, limit = 50): Promise<MusicTrack[]> {
  const supabase = getSupabase();
  let query = supabase.from("cb_music_tracks").select("*");

  if (episodeId) {
    query = query.eq("episode_id", episodeId);
  }

  const { data, error } = await query
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching tracks:", error);
    return [];
  }

  return data || [];
}

export async function getTrack(id: string): Promise<MusicTrack | null> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("cb_music_tracks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching track:", error);
    return null;
  }

  return data;
}

export async function createTrack(track: Omit<MusicTrack, "id" | "created_at">): Promise<MusicTrack | null> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("cb_music_tracks")
    .insert([track])
    .select()
    .single();

  if (error) {
    console.error("Error creating track:", error);
    return null;
  }

  return data;
}

export async function getTracksByGenre(genre: string): Promise<MusicTrack[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("cb_music_tracks")
    .select("*")
    .eq("genre", genre)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching by genre:", error);
    return [];
  }

  return data || [];
}

export async function getTracksByMood(mood: string): Promise<MusicTrack[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("cb_music_tracks")
    .select("*")
    .eq("mood", mood)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching by mood:", error);
    return [];
  }

  return data || [];
}
