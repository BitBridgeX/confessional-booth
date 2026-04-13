# HOLYFANS Design Assets

**Status**: Phase 1 In Progress  
**Last Updated**: April 13, 2026  
**Purpose**: Centralized repository for all visual assets (website, streams, merch, overlays, filters)

---

## Structure

```
assets/
├── README.md (this file)
│
├── avatars/
│   ├── README.md (character designs + specifications)
│   ├── cookie-mami/ (TO BE REPLACED: chocolate chip cookie in milk)
│   └── nano-banana-pro/ (product avatar variations)
│
├── website/
│   ├── README.md (website UI components + pages)
│   ├── components/ (buttons, cards, forms, modals, icons)
│   ├── pages/ (homepage, confessions, merch, podcast, etc.)
│   ├── layouts/ (responsive templates)
│   └── generated/ (Midjourney output + variations)
│
├── stream-overlays/
│   ├── README.md (Twitch/YouTube Live overlay specifications)
│   ├── twitch/ (panel templates, alerts, graphics)
│   ├── youtube/ (channel art, lower thirds, watermarks)
│   └── obs/ (scene collections, source files)
│
├── filters/
│   ├── README.md (OBS, Streamlabs, Instagram, TikTok filters)
│   ├── obs/ (native OBS filters + scene files)
│   ├── streamlabs/ (Streamlabs effect packs)
│   ├── instagram/ (filter effects + AR)
│   └── tiktok/ (lens effects + overlays)
│
├── merch/
│   ├── README.md (merchandise product specifications)
│   ├── wearables/ (hoodies, crop tops, accessories, mockups)
│   ├── adult-toys/ (toys, harnesses, packaging concepts)
│   ├── lingerie/ (apparel, packaging, styling)
│   ├── food/ (cookie packaging, branding, lifestyle)
│   ├── stickers/ (designs, print specifications)
│   └── digital/ (e-books, wallpapers, templates)
│
└── generated/
    ├── README.md (output from prompt generation)
    ├── midjourney/ (image outputs + generation logs)
    ├── dall-e/ (alternative AI generations)
    └── video/ (15-sec clips, stream content, cinematic)
```

---

## Asset Categories

### Avatars (`avatars/`)

**COOKIE MAMI** → Replaced with **Chocolate Chip Cookie in Milk**
- Main avatar: Cookie dipping into milk (photorealistic)
- Detail shot: Macro close-up of submerged cookie
- Pour sequence: Dynamic milk pouring action
- Status: **To generate** (prompts ready in `prompts/midjourney/`)

**NANO BANANA PRO**
- Close-up portrait (hero shot)
- Lifestyle shot (in-use scenario)
- Wondermilk pairing (banana + milk)
- Sensual serving (food-porn action)
- Brand moment (attitude + packaging)
- Status: **Prompts ready**, awaiting generation

### Website (`website/`)

**Components**
- Sacred cards (borders, hover states, neon accents)
- Buttons (primary, secondary, danger, reward states)
- Forms (inputs, badges, counters, gamification UI)
- Modals (confession submission, penance assign, achievement unlock)
- Icons (sin/virtue, game badges, platform logos)
- Status: **Component library complete** (CSS/React specs in `../COMPONENT-LIBRARY.md`)

**Pages**
- Homepage (hero, content tabs, navigation)
- Confessions Hub (submission form, community grid, moderation)
- Sermon Player (Mux video integration, transcript, notes)
- Merch Store (product grid, detail pages, checkout)
- Domagotchi Game (sin meter, penance cards, progression, leaderboard)
- Status: **HTML scaffold complete**, awaiting visual asset integration

**Generated**
- Midjourney outputs for UI inspiration
- Component variation mockups
- Light/dark mode variants
- Mobile/tablet/desktop responsive states

### Stream Overlays (`stream-overlays/`)

**Twitch**
- Chat panels (confessional theme + customization)
- Alert graphics (follows, subs, donations, raids)
- Intermediate screens (branding, music)
- Status: **Prompts ready** (`prompts/video/stream-overlays.md`)

**YouTube Live**
- Channel art + banners
- Lower thirds (speaker name, topic)
- Watermarks + branding
- End screen cards
- Status: **Specifications ready**

**OBS/Streamlabs**
- Scene collections (templates)
- Source files (editable)
- Automation scripts
- Status: **Framework ready**, awaiting visual assets

### Filters (`filters/`)

**OBS Native**
- Color correction (purple/neon grading)
- Blur/glow effects (sacred aesthetic)
- Scene transitions (liturgical timing)
- Status: **Specifications ready** (`prompts/design/stream-filters.md`)

**Streamlabs**
- Custom effect packs (downloadable)
- Alert animations
- Status: **Ready for creation**

**Instagram/TikTok**
- AR lens effects (cat filter → COOKIE MAMI vibes)
- Color grading filters
- Sticker packs
- Status: **Design specs ready**

### Merchandise (`merch/`)

**Wearables**
- "AMEN, SLUT" hoodie (design file, mockup)
- Crop tops (design variations)
- Fishnet accessories (collar, wristbands)
- Hats (bucket, beanie designs)
- Mockups: on-model photography concepts
- Status: **Prompts + mockups ready** (`prompts/midjourney/merch-products.md`)

**Adult Toys & Lingerie**
- Luxury vibrator packaging (brand integration)
- Leather harness mockups
- Lingerie set styling (lifestyle photography)
- Couples product concepts
- Status: **Prompts ready**, vendor research in progress

**Food & Beverage**
- "COOKIE MAMI" branded cookies (packaging design)
- "Wondermilk" branding (label mockups)
- Chocolate syrup, whipped cream custom packaging
- Drinkware (cups, chalices) design concepts
- Status: **Lifestyle photography prompts ready**

**Stickers & Decals**
- Vinyl sticker designs ("GO FORTH, AND BE A SLUT", logos)
- Bumper sticker variations
- Laptop sticker mockups
- Status: **Design specs ready**

**Digital Products**
- E-book cover (Codex of HOLYFANS)
- Wallpaper collection (desktop + mobile)
- Screensaver animations
- Social media templates
- Status: **Specifications ready**

### Generated Assets (`generated/`)

**Midjourney Outputs**
- Image files organized by prompt category
- Generation logs + settings used
- Variations + iterations
- QA notes (what worked, refinements needed)
- Status: **Directory structure ready**, awaiting outputs

**DALL-E Outputs**
- Alternative generation experiments
- Style exploration
- Backup options

**Video Outputs**
- 15-second TikTok/Reels clips
- Stream overlays (animated)
- Cinematic long-form content
- Status: **Prompts ready** (`prompts/video/`)

---

## Prompt Integration

All assets link to prompt library:

- **Website components** → `prompts/midjourney/website-design.md`
- **Merch products** → `prompts/midjourney/merch-products.md`
- **Avatars** → `prompts/midjourney/nano-banana-pro.md`
- **Stream overlays** → `prompts/video/stream-overlays.md`
- **Filters** → `prompts/design/stream-filters.md`

---

## Generation Workflow

```
Prompt (markdown)
    ↓
Generation Tool (Midjourney/DALL-E/Runway)
    ↓
Output (image/video file)
    ↓
Assets Directory (organized by category)
    ↓
GitHub (committed + versioned)
    ↓
Website/Social/Merch (deployed)
```

---

## Status Tracking

- [ ] **Avatars**: Cookie milk (to generate), Nano Banana Pro (to generate)
- [ ] **Website**: Component assets needed, page mockups needed
- [ ] **Stream Overlays**: Generate Twitch/YouTube graphics
- [ ] **Filters**: Create OBS/Streamlabs effects
- [ ] **Merch**: Product mockups generated
- [ ] **Generated**: Output files organized + committed to GitHub

---

## Contributing

1. **Generate new assets** using prompts in `prompts/` directory
2. **Save to appropriate category** (website, merch, overlays, etc.)
3. **Update status** in category README
4. **Commit to GitHub** with descriptive messages
5. **Link to source prompt** (for reproducibility)

---

## Quick Links

- **Prompts**: `../prompts/README.md`
- **Design System**: `../DESIGN-SYSTEM.md`
- **Component Library**: `../COMPONENT-LIBRARY.md`
- **Social Templates**: `../SOCIAL-MEDIA-TEMPLATES.md`

---

**Status**: Asset scaffold complete | Ready for generation  
**Next Phase**: Generate all Midjourney outputs  
**Repository**: https://github.com/BitBridgeX/confessional-booth

AMEN, SLUT. KISS THE RING.
