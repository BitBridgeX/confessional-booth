# HolyFans Confessional Booth — Full Platform

## Status: COMPLETE SCAFFOLD

All core infrastructure, components, and pages built. Ready for:
1. Supabase connection
2. Environment configuration
3. Testing and QA

## The Four Pillars ✅

### 1. 🎙️ **Podcast**
- `/app/podcast/page.tsx` — Episode feed and browse
- `/app/podcast/[id]/page.tsx` — Individual episode player (ready for Mux)
- Mock episode data with speakers, dates, descriptions
- Subscription buttons (Apple Podcasts, Spotify, RSS)

### 2. 🙏 **Community Confessions**
- `/components/ConfessionForm.tsx` — Anonymous submission form
- `/components/ConfessionGrid.tsx` — Public approved confessions display
- `/app/confessions/page.tsx` — Full confessions hub
- Category system (prayer_request, praise, confession, testimony)
- Prayer counter + community engagement
- IP anonymization via hashing

### 3. 🎵 **Sacred Music**
- `/components/MusicPlayer.tsx` — Full audio player with progress, download
- `/app/music/page.tsx` — Music library with genre/mood filtering
- `/app/music/[id]/page.tsx` — Individual track details
- Genre filtering (Worship, Hymn, Ambient, Contemplative)
- Album bundles and download options

### 4. 🛍️ **Merchandise Store**
- `/components/MerchCard.tsx` — Product display card
- `/app/merch/page.tsx` — Full product catalog
- `/app/merch/[id]/page.tsx` — Product detail + checkout
- Bundle offers with savings
- Inventory tracking (physical + digital)
- Stripe integration hooks ready

## File Structure

```
holyfans-confessional-booth/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home hub landing
│   ├── globals.css             # Sacred design system
│   ├── podcast/
│   │   ├── page.tsx            # Episode feed
│   │   └── [id]/page.tsx       # Episode detail (scaffold)
│   ├── confessions/
│   │   ├── page.tsx            # Confessions hub
│   │   └── dashboard/          # Admin dashboard (scaffold)
│   ├── music/
│   │   ├── page.tsx            # Music library
│   │   └── [id]/page.tsx       # Track detail (scaffold)
│   ├── merch/
│   │   ├── page.tsx            # Product store
│   │   ├── [id]/page.tsx       # Product detail (scaffold)
│   │   └── checkout/           # Stripe checkout (scaffold)
│   └── api/
│       └── ip/route.ts         # IP detection for anonymity
├── components/
│   ├── Navigation.tsx          # Main nav with responsive menu
│   ├── EpisodeCard.tsx         # Episode display
│   ├── ConfessionForm.tsx      # Submission form
│   ├── ConfessionGrid.tsx      # Community confessions display
│   ├── MusicPlayer.tsx         # Audio player
│   └── MerchCard.tsx           # Product card
├── lib/
│   ├── config.ts               # Environment config
│   ├── supabase.ts             # Supabase client + types
│   ├── episodes.ts             # Episode queries
│   ├── confessions.ts          # Confession queries + IP hash
│   ├── music.ts                # Music track queries
│   └── merch.ts                # Merch + order queries
├── .kortix/
│   ├── CONTEXT.md              # This file
│   └── docs/
│       └── supabase-schema.sql  # Full DB schema with RLS
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── next.config.ts              # Next.js config
├── tailwind.config.ts          # Tailwind + sacred design tokens
├── postcss.config.js           # PostCSS config
├── .env.local                  # Environment variables (template)
└── .gitignore
```

## Design System ✨

**Colors** (sacred palette):
- `--gold: #D4AF37` (primary accent)
- `--gold-light: #E8D4A8` (hover)
- `--purple: #2D1B4E` (primary bg)
- `--purple-dark: #1a0f2e` (dark bg)
- `--cream: #F5F1E8` (text)
- `--cream-dark: #E8DCC8` (subtle)

**Typography**:
- Headings: `Playfair Display` (serif, elegant)
- Body: `Geist` (sans-serif, clean)

**Components**:
- `.sacred-card` — Gold-bordered cards with hover lift
- `.btn-sacred-primary` — Gold background buttons
- `.btn-sacred-secondary` — Gold border outlined buttons
- `.pulse-sacred` — Live indicator animation
- `.gradient-text` — Gold gradient text effect

## Database Schema ✅

Tables defined in `supabase-schema.sql`:
- `cb_episodes` — Podcast episodes with Mux IDs
- `cb_confessions` — Anonymous submissions (500 char limit)
- `cb_music_tracks` — Sacred music with genre/mood
- `cb_merch_products` — Products (physical + digital)
- `cb_orders` — Order tracking and fulfillment

All tables include:
- RLS (Row Level Security) policies
- Indexes on common queries
- Utility functions (increment_prayer_count, update_inventory)

## Integration Points

### Supabase Connection
1. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. Run `supabase-schema.sql` to create tables
3. Update RLS policies for your auth setup

### Mux Integration
1. Set `NEXT_PUBLIC_MUX_TOKEN_ID` and `MUX_TOKEN_SECRET`
2. Add Mux playback IDs to episodes in dashboard
3. Components ready to accept `mux_playback_id` from DB

### Stripe Integration
1. Set `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` and `STRIPE_SECRET_KEY`
2. Create Stripe products for merch items
3. Add `stripe_product_id` to products
4. Implement checkout in `/app/merch/checkout`

### Suno AI Integration
1. Set `SUNO_API_KEY`
2. Call Suno API to generate music tracks
3. Store `suno_id` + audio_url in `cb_music_tracks`

## Next Steps

### Immediate (30 min)
1. Install dependencies: `bun install`
2. Configure `.env.local` with your API keys
3. Run `next dev` to verify build
4. Test home page + all navigation links

### Phase 1: Supabase (1-2 hours)
1. Create Supabase project
2. Run schema migration
3. Replace mock data with real queries
4. Test anonymous confessions + moderation

### Phase 2: Mux Integration (1 hour)
1. Upload episode video to Mux
2. Add playback ID to episode
3. Implement `@mux/mux-player-react` in episode detail
4. Test video playback + controls

### Phase 3: Stripe (2 hours)
1. Create Stripe products for all merch
2. Implement `/app/api/checkout` route
3. Build order confirmation
4. Test end-to-end purchase flow

### Phase 4: Admin Dashboard (2 hours)
1. Build `/confessions/dashboard` for pastor moderation
2. Add approve/reject interface
3. Connect to Supabase real-time notifications
4. Batch moderation tools

## Tech Stack

- **Frontend**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + custom sacred design tokens
- **Video/Audio**: Mux Player + Suno AI
- **Database**: Supabase (Postgres + Realtime + RLS)
- **E-commerce**: Stripe
- **File Storage**: Supabase Storage

## Notes

- ✅ All pages are server components (Next.js 16) — update to `"use client"` where needed for interactivity
- ✅ Navigation is fully responsive (mobile hamburger menu)
- ✅ Form validation included (500 char limit, category selection)
- ✅ Confession IP hashing implemented
- ✅ Prayer counter with interactivity
- ✅ Music player with progress bar, seek, download
- ✅ Product cards with inventory tracking
- ✅ Bundle pricing logic ready for backend

## Sacred Aesthetic

The entire platform celebrates restraint, reverence, and depth:
- Generous whitespace
- Minimal corporate language
- Soft, contemplative animations
- Gold accents for the holy
- Deep purple/black for reflection
- Serif fonts for liturgical weight

This is not Instagram. This is a confessional.
