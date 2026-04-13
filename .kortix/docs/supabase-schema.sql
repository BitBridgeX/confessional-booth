-- Confessional Booth Supabase Schema

-- Episodes Table
CREATE TABLE cb_episodes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  speaker TEXT,
  episode_number INTEGER UNIQUE,
  release_date TIMESTAMP DEFAULT now(),
  duration INTERVAL,
  mux_playback_id TEXT,
  audio_url TEXT,
  transcript TEXT,
  artwork_url TEXT,
  theme TEXT,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Confessions Table
CREATE TABLE cb_confessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  text TEXT NOT NULL CHECK (char_length(text) <= 500),
  category TEXT NOT NULL CHECK (category IN ('prayer_request', 'praise', 'confession', 'testimony')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'featured_in_episode')),
  ip_hash TEXT,
  created_at TIMESTAMP DEFAULT now(),
  approved_by UUID REFERENCES auth.users(id),
  featured_in_episode UUID REFERENCES cb_episodes(id),
  attribution TEXT DEFAULT 'anon' CHECK (attribution IN ('anon', 'first_name', 'full_name')),
  prayer_count INTEGER DEFAULT 0
);

-- Music Tracks Table
CREATE TABLE cb_music_tracks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  artist TEXT,
  episode_id UUID REFERENCES cb_episodes(id),
  audio_url TEXT NOT NULL,
  duration INTERVAL,
  genre TEXT CHECK (genre IN ('worship', 'contemplative', 'hymn', 'ambient', 'other')),
  mood TEXT,
  suno_id TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Merchandise Products Table
CREATE TABLE cb_merch_products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT CHECK (category IN ('physical', 'digital', 'nft')),
  type TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  inventory INTEGER DEFAULT 0,
  stripe_product_id TEXT,
  episode_association UUID REFERENCES cb_episodes(id),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Orders Table
CREATE TABLE cb_orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  product_id UUID REFERENCES cb_merch_products(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  stripe_order_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'shipped', 'delivered', 'digital_delivered')),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Indexes
CREATE INDEX idx_cb_episodes_published ON cb_episodes(is_published, release_date DESC);
CREATE INDEX idx_cb_confessions_status ON cb_confessions(status);
CREATE INDEX idx_cb_confessions_featured ON cb_confessions(featured_in_episode);
CREATE INDEX idx_cb_music_tracks_episode ON cb_music_tracks(episode_id);
CREATE INDEX idx_cb_merch_products_inventory ON cb_merch_products(inventory);
CREATE INDEX idx_cb_orders_user ON cb_orders(user_id);
CREATE INDEX idx_cb_orders_status ON cb_orders(status);

-- Row Level Security (RLS) Policies

-- Episodes: Public read, admin write
ALTER TABLE cb_episodes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "episodes_read_public" ON cb_episodes FOR SELECT USING (is_published = true);
CREATE POLICY "episodes_write_admin" ON cb_episodes FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Confessions: Public approved only, admin all
ALTER TABLE cb_confessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "confessions_read_approved" ON cb_confessions FOR SELECT USING (status = 'approved');
CREATE POLICY "confessions_insert_public" ON cb_confessions FOR INSERT WITH CHECK (true);
CREATE POLICY "confessions_manage_admin" ON cb_confessions FOR UPDATE USING (auth.role() = 'authenticated');

-- Music: Public read
ALTER TABLE cb_music_tracks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "music_read_public" ON cb_music_tracks FOR SELECT USING (true);
CREATE POLICY "music_write_admin" ON cb_music_tracks FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Merch: Public read
ALTER TABLE cb_merch_products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "merch_read_public" ON cb_merch_products FOR SELECT USING (true);
CREATE POLICY "merch_write_admin" ON cb_merch_products FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Orders: Users see own, admin sees all
ALTER TABLE cb_orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "orders_read_own" ON cb_orders FOR SELECT USING (auth.uid() = user_id OR auth.role() = 'authenticated');
CREATE POLICY "orders_insert_own" ON cb_orders FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Utility Functions

-- Increment prayer count
CREATE OR REPLACE FUNCTION increment_prayer_count(confession_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE cb_confessions SET prayer_count = prayer_count + 1 WHERE id = confession_id;
END;
$$ LANGUAGE plpgsql;

-- Update inventory
CREATE OR REPLACE FUNCTION update_inventory(product_id UUID, qty INTEGER)
RETURNS VOID AS $$
BEGIN
  UPDATE cb_merch_products SET inventory = inventory + qty WHERE id = product_id;
END;
$$ LANGUAGE plpgsql;
