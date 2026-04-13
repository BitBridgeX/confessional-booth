# 🍪 Confessional Booth × Cookie Mami

> *"Confess your digital sins. Cookie Mami responds."*

A full multimedia platform: podcast, sacred music, 110+ merch products, and an anonymous digital confessional — all in Cookie Mami's voice.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BitBridgeX/confessional-booth)

## Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS + custom sacred/sinful design system
- **Database**: Supabase (Postgres + Realtime + RLS)
- **Video**: Mux Player
- **Payments**: Stripe
- **Podcast**: Buzzsprout ($12/mo)
- **Music Distribution**: DistroKid ($20/yr)

## Pages

| Route | Description |
|---|---|
| `/` | Home hub — Cookie Mami intro + all pillars |
| `/confessions` | Anonymous confession form + Cookie Mami response |
| `/podcast` | Episode feed (Buzzsprout) |
| `/podcast/[id]` | Episode detail + transcript |
| `/music` | Sacred music library + lyrics |
| `/music/[id]` | Track detail with full lyrics |
| `/merch` | 110+ product store (7 categories) |
| `/merch/[id]` | Product detail + size/color picker |
| `/merch/checkout` | 3-step Stripe checkout |
| `/book` | Book of HolyFans — 20 scriptures, 5 sermons |
| `/admin` | Pastor dashboard — moderation + orders |

## Merch Categories

1. **Apparel** (20) — T-shirts, hoodies, crop tops, caps
2. **Stickers & Prints** (20) — Holographic prayer cards, vinyl stickers
3. **Lingerie & Intimates** (15) — Sexy sets, bodysuits, robes
4. **Adult Toys & Pleasure** (20) — Smart toys, bondage, lubricants
5. **Cookie Mami Food** (15) — Signature cookies, snacks, communion kits
6. **Accessories** (10) — Phone cases, totes, pins, bottles
7. **Digital Products** (10) — Book of HolyFans, music, sermons, scripts

## Deploy to Vercel

### One-click
Click the **Deploy with Vercel** button above.

### Manual
```bash
# 1. Clone
git clone https://github.com/BitBridgeX/confessional-booth
cd confessional-booth

# 2. Install
npm install --legacy-peer-deps

# 3. Configure
cp .env.example .env.local
# Fill in your keys

# 4. Dev
npm run dev

# 5. Deploy
vercel deploy --prod
```

### Environment Variables (add in Vercel dashboard)
See `.env.example` for all required variables.

## Connect Services

### Supabase
1. Create project at [supabase.com](https://supabase.com)
2. Run `.kortix/docs/supabase-schema.sql` in SQL editor
3. Copy URL + anon key to env vars

### Stripe
1. Create products in [Stripe dashboard](https://dashboard.stripe.com)
2. Add webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Set `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET`

### Buzzsprout
1. Sign up at [buzzsprout.com](https://www.buzzsprout.com) ($12/mo)
2. Embed player widget in `/app/podcast/[id]/page.tsx`

### DistroKid
1. Sign up at [distrokid.com](https://distrokid.com) ($20/yr)
2. Upload tracks from `/app/music/` for distribution

---

*Built with reverence and a little sin. — Cookie Mami 🍪*
