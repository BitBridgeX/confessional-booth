import { createClient } from "@supabase/supabase-js";
import { config } from "./config";

export const supabase = createClient(config.supabase.url, config.supabase.anonKey);

// Type definitions for Confessional Booth tables
export interface Episode {
  id: string;
  title: string;
  description: string;
  speaker: string;
  episode_number: number;
  release_date: string;
  duration: string;
  mux_playback_id: string;
  audio_url: string;
  transcript: string;
  artwork_url: string;
  theme: string;
  is_published: boolean;
  created_at: string;
}

export interface Confession {
  id: string;
  text: string;
  category: "prayer_request" | "praise" | "confession" | "testimony";
  status: "pending" | "approved" | "rejected" | "featured_in_episode";
  ip_hash: string;
  created_at: string;
  approved_by?: string;
  featured_in_episode?: string;
  attribution: "anon" | "first_name" | "full_name";
  prayer_count: number;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  episode_id: string;
  audio_url: string;
  duration: string;
  genre: string;
  mood: string;
  suno_id?: string;
  created_at: string;
}

export interface MerchProduct {
  id: string;
  name: string;
  description: string;
  category: "physical" | "digital" | "nft";
  type: string;
  price: number;
  image_url: string;
  inventory: number;
  stripe_product_id: string;
  episode_association?: string;
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  stripe_order_id: string;
  status: "pending" | "shipped" | "delivered" | "digital_delivered";
  created_at: string;
}
