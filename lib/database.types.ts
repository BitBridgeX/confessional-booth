// Auto-generated from live Supabase schema — project: bxgjmyfkfiimcfbdcbsv
// Tables: cb_episodes, cb_confessions, cb_music_tracks, cb_merch_products, cb_orders, cb_email_subscribers, cb_live_chat

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      cb_episodes: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          speaker: string | null;
          episode_number: number | null;
          release_date: string | null;
          duration: string | null;
          mux_playback_id: string | null;
          audio_url: string | null;
          transcript: string | null;
          artwork_url: string | null;
          theme: string | null;
          is_published: boolean | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["cb_episodes"]["Row"], "id" | "created_at" | "updated_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["cb_episodes"]["Row"]>;
      };
      cb_confessions: {
        Row: {
          id: string;
          text: string;
          category: string;
          status: "pending" | "approved" | "rejected" | "featured_in_episode" | null;
          ip_hash: string | null;
          created_at: string | null;
          approved_by: string | null;
          featured_in_episode: string | null;
          attribution: "anon" | "first_name" | "full_name" | null;
          prayer_count: number | null;
        };
        Insert: Omit<Database["public"]["Tables"]["cb_confessions"]["Row"], "id" | "created_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["cb_confessions"]["Row"]>;
      };
      cb_music_tracks: {
        Row: {
          id: string;
          title: string;
          artist: string | null;
          episode_id: string | null;
          audio_url: string | null;
          duration: string | null;
          genre: string | null;
          mood: string | null;
          suno_id: string | null;
          lyrics: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["cb_music_tracks"]["Row"], "id" | "created_at" | "updated_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["cb_music_tracks"]["Row"]>;
      };
      cb_merch_products: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          category: "physical" | "digital" | "nft" | null;
          type: string | null;
          price: number;
          image_url: string | null;
          inventory: number | null;
          stripe_product_id: string | null;
          sizes: string[] | null;
          colors: string[] | null;
          badge: string | null;
          is_featured: boolean | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["cb_merch_products"]["Row"], "id" | "created_at" | "updated_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["cb_merch_products"]["Row"]>;
      };
      cb_orders: {
        Row: {
          id: string;
          user_id: string | null;
          product_id: string | null;
          quantity: number;
          stripe_order_id: string | null;
          stripe_session_id: string | null;
          status: "pending" | "shipped" | "delivered" | "digital_delivered" | "cancelled" | null;
          shipping_address: Json | null;
          total_amount: number | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["cb_orders"]["Row"], "id" | "created_at" | "updated_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["cb_orders"]["Row"]>;
      };
      cb_email_subscribers: {
        Row: {
          id: string;
          email: string;
          subscribed_at: string | null;
          is_active: boolean | null;
          source: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["cb_email_subscribers"]["Row"], "id" | "subscribed_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["cb_email_subscribers"]["Row"]>;
      };
      cb_live_chat: {
        Row: {
          id: string;
          user_handle: string;
          message: string;
          created_at: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["cb_live_chat"]["Row"], "id" | "created_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["cb_live_chat"]["Row"]>;
      };
    };
    Functions: {
      increment_prayer_count: { Args: { confession_id: string }; Returns: void };
      update_inventory: { Args: { product_id: string; qty: number }; Returns: void };
    };
  };
}

// Convenience row types
export type Episode       = Database["public"]["Tables"]["cb_episodes"]["Row"];
export type Confession    = Database["public"]["Tables"]["cb_confessions"]["Row"];
export type MusicTrack    = Database["public"]["Tables"]["cb_music_tracks"]["Row"];
export type MerchProduct  = Database["public"]["Tables"]["cb_merch_products"]["Row"];
export type Order         = Database["public"]["Tables"]["cb_orders"]["Row"];
export type EmailSub      = Database["public"]["Tables"]["cb_email_subscribers"]["Row"];
export type LiveChatMsg   = Database["public"]["Tables"]["cb_live_chat"]["Row"];
