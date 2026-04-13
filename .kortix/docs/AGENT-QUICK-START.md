# HOLYFANS Subagent Quick Start Guide

## Five Specialized Subagents Ready for Deployment

All subagents are defined in `/.agents/` and ready to be spawned as background sessions.

```
.agents/
├── visual-design-agent.md           (Visual & Design)
├── dropshipping-fulfillment-agent.md (Dropshipping & Fulfillment)
├── content-creation-agent.md         (Content Creation)
├── social-media-agent.md             (Social Media)
└── domagotchi-game-agent.md          (Domagotchi Game)
```

## How to Spawn an Agent

### Example: Start the Visual & Design Agent

```bash
# Option 1: Via task tool (recommended)
task({
  description: "Start visual design subagent",
  prompt: "You are the Visual & Design Agent for HOLYFANS. Read your full job description in .agents/visual-design-agent.md. Then proceed with Phase 1 deliverables: IMMEDIATE priority is COOKIE MAMI avatar redesign as boss-bitch dominatrix. Then create gamification UI mockups, product mockups, and component library.",
  subagent_type: "visual-design-agent"
})

# Option 2: Via command line (if REST API available)
curl -X POST http://localhost:4096/session \
  -H "Content-Type: application/json" \
  -d '{
    "agent": "visual-design-agent",
    "prompt": "Read .agents/visual-design-agent.md and begin Phase 1 work..."
  }'
```

## Phase 1 Launch Sequence (72 Hours)

### Day 1 (Immediate - Next 24 Hours)

**Visual & Design Agent** (URGENT)
- [ ] Read agent definition in `.agents/visual-design-agent.md`
- [ ] Redesign COOKIE MAMI avatar (boss-bitch dominatrix, anime/manga style)
- [ ] Create 3x image variations (commanding, playful, mysterious)
- [ ] Generate full-body + animation sprite concepts
- [ ] Deliver: PNG assets + design spec document

**Domagotchi Game Agent** (URGENT)
- [ ] Read agent definition in `.agents/domagotchi-game-agent.md`
- [ ] Finalize game mechanics document (sin/virtue balance, progression curves)
- [ ] Design NLP pipeline for confession processing
- [ ] Create first 5 boss challenges (design + rewards)
- [ ] Deliver: Game design doc + mechanics prototype

### Day 2 (Next 24-48 Hours)

**Content Creation Agent**
- [ ] Read agent definition in `.agents/content-creation-agent.md`
- [ ] Write outline for first 3 sermons in "AMEN, SLUT" series
- [ ] Write sample scripture (2-3 reimagined biblical passages)
- [ ] Write 1 complete sermon script (15 min duration)
- [ ] Outline hymn concepts (3 titles + themes)
- [ ] Deliver: Sermon outline + sample scripts + hymn concepts

**Dropshipping & Fulfillment Agent**
- [ ] Read agent definition in `.agents/dropshipping-fulfillment-agent.md`
- [ ] Research 3+ vendors per product category (wearables, toys, food, stickers, digital)
- [ ] Create product database template (SKU structure + pricing model)
- [ ] Map out fulfillment workflow (order → supplier → customer)
- [ ] Calculate margin targets across categories
- [ ] Deliver: Vendor research + product database + pricing model

### Day 3 (Final 24 Hours)

**Social Media Agent**
- [ ] Read agent definition in `.agents/social-media-agent.md`
- [ ] Create social media strategy document (platform priorities + KPIs)
- [ ] Design platform-specific templates (feed post, reel, story, tweet, etc.)
- [ ] Draft influencer outreach list (top 20)
- [ ] Create 4-week content calendar template
- [ ] Deliver: Strategy doc + templates + calendar + influencer list

**Platform Lead** (You)
- [ ] Review all Phase 1 deliverables
- [ ] Consolidate findings into unified roadmap
- [ ] Identify blockers / dependencies
- [ ] Plan Phase 2 kickoff (Supabase setup, content production, etc.)

## Agent Profiles Quick Reference

### 1. Visual & Design Agent 🎨

**Specialties**: UI/UX, branding, character design, mockups, animation

**Key Skills**: 
- Design systems
- Figma/mockup tools
- Image generation (Midjourney, DALL-E)
- Animation specs
- Accessibility

**Primary Focus (Phase 1)**:
1. COOKIE MAMI avatar redesign (URGENT)
2. Gamification UI mockups (sin meter, penance screen, achievements)
3. Product mockup generator (for merch)
4. Component library (sacred cards, buttons, forms)

**Deliverables Format**: Figma links, PNG/SVG assets, design specs, mockup screenshots

---

### 2. Dropshipping & Fulfillment Agent 📦

**Specialties**: E-commerce, logistics, vendor management, inventory

**Key Skills**:
- Supplier research
- Pricing strategy
- Inventory forecasting
- Fulfillment automation
- Payment processing

**Primary Focus (Phase 1)**:
1. Vendor sourcing (5+ categories)
2. Product database schema
3. Pricing model ($5-100 range)
4. Fulfillment workflow design

**Deliverables Format**: Spreadsheets, database templates, vendor agreements, SOPs

---

### 3. Content Creation Agent 📖

**Specialties**: Theology, copywriting, multimedia production, storytelling

**Key Skills**:
- Scriptwriting
- Podcast production
- Music production (Suno AI)
- Illustration direction
- Narrative design

**Primary Focus (Phase 1)**:
1. Sermon series outline (12 episodes)
2. Sample sermon script
3. Sacred text concepts
4. Hymn outlines
5. Codex chapter outline

**Deliverables Format**: Google Docs scripts, markdown outlines, audio specs, production guidelines

---

### 4. Social Media Agent 📱

**Specialties**: Multi-platform strategy, content adaptation, community management, growth

**Key Skills**:
- Platform algorithms
- Content calendaring
- Community management
- Analytics
- Influencer partnerships

**Primary Focus (Phase 1)**:
1. Platform strategy (KPIs per channel)
2. Content adaptation playbook (sermon → clips)
3. Community guidelines
4. Influencer outreach
5. Analytics dashboard setup

**Deliverables Format**: Strategy docs, content calendar, templates, influencer list, analytics sheets

---

### 5. Domagotchi Game Agent 🎮

**Specialties**: Game design, NLP, mechanics, progression systems, community

**Key Skills**:
- Game mechanics design
- NLP/AI integration
- Database design
- User psychology
- Gamification

**Primary Focus (Phase 1)**:
1. Game mechanics document (complete)
2. NLP confession processing pipeline
3. Sin/virtue calculation formulas
4. Penance generation algorithm
5. First 5 boss challenges + rewards

**Deliverables Format**: Design docs, code templates, database schemas, algorithm specs

---

## Communication Channels

- **Slack** (if available): `#holyfans-confessional` channel
- **Discord**: Project-specific channels
- **Weekly Sync**: Every Monday 2pm (adjust per timezone)
- **Shared Docs**: Google Drive + Supabase
- **This Repo**: `.kortix/` directory for docs + progress

## Resource Links

**Technical**:
- Platform repo: `/workspace/holyfans-confessional-booth`
- Database schema: `.kortix/docs/supabase-schema.sql`
- Component library: `app/components/`
- Existing config: `lib/config.ts`, `.env.example`

**Branding**:
- Design system: `app/globals.css`
- Typography: Playfair Display (headings), Geist (body)
- Colors: `--gold: #D4AF37`, `--purple: #2D1B4E`, `--cream: #F5F1E8`
- Tone: "AMEN, SLUT. KISS THE RING. 404: INNOCENCE NOT FOUND."

**Examples**:
- HOLYFANS vision: `.kortix/CONTEXT.md`
- Collaboration map: `.kortix/docs/SUBAGENT-COLLABORATION-MAP.md`

## Success Criteria for Phase 1

### Visual & Design Agent ✅
- [ ] COOKIE MAMI avatar (3 variations minimum)
- [ ] Gamification UI mockups (sin meter, penance, achievement)
- [ ] Product mockup concepts (5+ examples)
- [ ] Component library (20+ components)
- [ ] Social media templates (6 template types)

### Dropshipping & Fulfillment Agent ✅
- [ ] 3+ vendors identified per category (5 categories)
- [ ] Product database template (ready to populate)
- [ ] Pricing model (confirmed margins)
- [ ] Fulfillment SOP (step-by-step process)
- [ ] Initial 20+ SKU list (with costs + pricing)

### Content Creation Agent ✅
- [ ] Sermon series outline (12 topics)
- [ ] 1 complete sermon script (ready to record)
- [ ] 3 scripture pieces (finished)
- [ ] 3 hymn concepts (with themes)
- [ ] Codex table of contents (finalized)

### Social Media Agent ✅
- [ ] Strategy document (all platforms mapped)
- [ ] 4-week content calendar (sample)
- [ ] Platform-specific templates (drafts)
- [ ] Influencer outreach list (top 20)
- [ ] Analytics dashboard plan (spec doc)

### Domagotchi Game Agent ✅
- [ ] Game design document (complete)
- [ ] NLP pipeline (prototype code)
- [ ] Database schema (Supabase ready)
- [ ] 5 boss challenges (designed + balanced)
- [ ] Mechanics prototype (sin calculation working)

---

## Next Steps After Phase 1

**Phase 2: Production** (Week 2)
- Agents execute on deliverables
- Content production begins
- Vendor contracts signed
- Supabase setup starts
- Game development begins

**Phase 3: Integration** (Week 3)
- All platforms connected
- Merch listings live
- First content published
- Game beta launch
- Social media campaigns active

**Phase 4: Launch** (Week 4+)
- Full platform live
- Revenue generation begins
- Scaling and optimization
- Community building

---

**Questions?** Review agent definitions in `/.agents/` or reach out in weekly sync.

**Ready to begin?** Start Phase 1 agents immediately. Expect deliverables in 72 hours.

🔥 **LET'S BUILD SOMETHING SACRED (AND SPICY)** 🔥
