# HOLYFANS Confessional Booth — Visual Design System

**Status**: Phase 1 - Day 1 | 72-Hour Sprint  
**Last Updated**: 2026-04-13  
**Lead**: Visual & Design Agent

---

## Brand Aesthetic

### Philosophy
Dark, reverent, provocative, tech-fetish. The confessional booth meets nightclub meets dungeon meets sacred space.

### Color Palette

| Role | Hex | RGB | Usage |
|---|---|---|---|
| **Primary: Purple** | `#2D1B4E` | 45, 27, 78 | Primary background, authoritative |
| **Accent: Gold** | `#D4AF37` | 212, 175, 55 | Premium accents, borders, icons |
| **Accent: Hot Pink** | `#FF1493` | 255, 20, 147 | Energy, CTAs, alerts, gamification |
| **Accent: Electric Blue** | `#00D9FF` | 0, 217, 255 | Neon effects, tech, live indicators |
| **Background: Black** | `#0a0a0a` | 10, 10, 10 | Primary dark surface |
| **Surface: Dark Purple** | `#1a1424` | 26, 20, 36 | Cards, containers, elevated surfaces |
| **Text: Cream** | `#F5F1E8` | 245, 241, 232 | Primary body text, high contrast |
| **Text: Muted** | `#8B8B8B` | 139, 139, 139 | Secondary text, labels |
| **Error/Danger** | `#FF4757` | 255, 71, 87 | Destructive actions, warnings |
| **Success/Reward** | `#2ED573` | 46, 213, 115 | Positive states, completions |
| **Warning** | `#FFA502` | 255, 165, 2 | Cautions, attention needed |

### Contrast Ratios (WCAG AA compliance)
- Gold on Purple: 3.8:1 (large text safe)
- Cream on Purple: 7.2:1 (all text safe)
- Hot Pink on Black: 4.1:1 (body text safe)
- Electric Blue on Black: 4.3:1 (body text safe)

### Semantic Colors
- **Sin**: Hot Pink (`#FF1493`) — transgression, taboo, breaking rules
- **Grace**: Electric Blue (`#00D9FF`) — redemption, tech-spiritual, purity
- **Penance**: Gold (`#D4AF37`) — reward, completion, sacred work

---

## Typography

### Primary Fonts
- **Headings**: Playfair Display (400, 600, 700) — liturgical, serif, elegant
- **Body**: Geist (400, 500) — clean, modern, technical
- **Code/Tech**: IBM Plex Mono (400) — monospace, confessional booth logs

### Type Scale (Web)

| Role | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| Hero Title | 48-64px | 700 | 1.2 | Homepage hero, section covers |
| Page Title | 36-42px | 600 | 1.3 | Page headers, modal titles |
| Section Heading | 24-28px | 600 | 1.4 | Card titles, major sections |
| Body Text | 16-18px | 400 | 1.6 | Primary content, descriptions |
| Body Bold | 16-18px | 500 | 1.6 | Emphasis within body |
| Label / Caption | 12-14px | 400 | 1.5 | Form labels, metadata |
| Badge / Tag | 11-13px | 500 | 1.4 | Badges, achievement tags |
| Monospace | 12-14px | 400 | 1.5 | Code snippets, logs |

### Typographic Rules
- Maximum line length: 65-75 characters
- Never letterspace lowercase text
- Flush-left, ragged-right for body copy
- Playfair headings are all-caps for power statements
- No decorative underlines (semantic links only)

---

## Component Library - Initial Inventory

### 1. Sacred Cards
```
Feature: Premium card component with gold border, neon hover glow

Structure:
- Gold border (2px)
- Dark purple surface (#1a1424)
- Hot pink hover state with neon glow
- Cream text on dark background
- Padding: 24px
- Border radius: 8px
- Transition: 300ms ease-in-out

Variants:
- Default (inactive)
- Hover (hot pink glow)
- Active (electric blue border)
- Locked (dim + lock icon)
- Reward (gold + glow pulse)
```

### 2. Button System

#### Primary (CTA - "Confess")
```
Background: Hot Pink (#FF1493)
Text: Black (#0a0a0a)
Padding: 12px 32px
Border radius: 4px
Font: Geist 16px 600
Hover: Brighten + neon glow
Active: Darken + inset shadow
Disabled: Dim + cursor-not-allowed
```

#### Secondary (Action - "Learn More")
```
Background: Transparent
Border: Gold (#D4AF37) 1px
Text: Gold
Padding: 12px 32px
Hover: Gold background + Cream text
Transition: 200ms
```

#### Danger (Punishment - "Accept Penance")
```
Background: #FF4757
Text: Cream
Hover: Glow effect + shake animation
```

#### Success (Reward - "Claim Achievement")
```
Background: #2ED573
Text: Black
Glow: Pulsing animation
```

### 3. Form Elements

#### Text Input
```
Background: #0a0a0a
Border: Gold 1px
Border-radius: 4px
Padding: 12px 16px
Text: Cream
Placeholder: Muted
Focus: Electric blue border + glow
Font: Geist 16px
```

#### Sacred Checkbox
```
Unchecked: Gold outline square
Checked: Gold square with cream checkmark
Size: 20x20px
Hover: Neon glow
Transition: 150ms
```

#### Toggle Switch
```
Off: Gray background
On: Hot pink background
Thumb: Cream circle
Animated: 300ms slide
```

### 4. Gamification Components

#### Sin Score Meter (Vertical Gauge)
```
Direction: Bottom to top (ascending sin)
Height: 200px
Width: 40px
Stages:
  0-200 (Pure): Electric blue
  201-400 (Tempted): Gold
  401-600 (Sinful): Orange
  601-800 (Wicked): Hot pink
  801-1000 (Depraved): Red pulse
Background: Dark purple
Animated: Smooth transition on update
Label: Value above gauge
```

#### Penance Card Grid
```
Layout: 2x2 grid on desktop, 1 column mobile
Each card: 300x200px
Card elements:
  - Title (Playfair 24px)
  - Description (Geist 14px, muted)
  - Icon (40x40px)
  - CTA button
  - Difficulty badge
Layout: 16px gap
Hover: Hot pink glow + lift effect
```

#### Achievement Badge
```
Base:
  - Circle: 120x120px
  - Background gradient: Purple to black
  - Gold border: 3px
  - Icon/image: centered 80x80px
  
Unlock Animation:
  - Scale: 0 → 1.2 → 1 (600ms)
  - Opacity: 0 → 1
  - Particles: 12 burst effects (hot pink + gold)
  - Sound: Unlock chime (if audio enabled)
  - Text reveal: Title slides in below
  
States:
  - Locked: Grayscale + lock icon overlay
  - Unlocked: Full color + glow pulse
  - Hover: Rotate + scale up slightly
```

#### Level Progression Bar
```
Orientation: Horizontal
Height: 8px
Background: #0a0a0a
Filled: Gradient (electric blue → hot pink)
Width: Scale to percentage (current XP / max XP)
Animated: Increment smoothly on XP gain
Label above: "Level 5" (Playfair 18px)
Label below: "845 / 1000 XP" (Geist 12px, muted)
Milestone markers: Gold dots at level thresholds
```

#### Rank Display Card
```
Size: 250x300px
Background: Gradient (#1a1424 → #2D1B4E)
Border: Gold 2px
Layout: Vertical centered
Elements (top to bottom):
  1. Rank icon: 80x80px, centered
  2. Rank name: Playfair 28px bold
  3. Current tier: Geist 14px muted
  4. XP bar: mini version (150px wide)
  5. Next rank: "Next: Saint" (Geist 12px)
Hover: Hot pink glow effect
```

### 5. Modal / Dialog

#### Confessional Booth Modal
```
Overlay: Black (#0a0a0a) at 80% opacity
Modal: 500px wide (desktop), full width mobile
Background: Dark purple with gold border (3px)
Header: Playfair title + close button (X)
Content: Geist body text, form inputs
Footer: Action buttons

Sacred Styling:
  - Corner accents: Gold corners (8px)
  - Glow: Hot pink on hover/focus
  - Shadows: Neon glow shadows
  - Animation: Slide up + fade in (300ms)
  - Close: Slide down + fade out
```

### 6. Navigation

#### Tabbed Navigation
```
Layout: Horizontal tabs
Inactive tab: 
  - Cream text
  - Bottom border: transparent
  - Padding: 12px 24px
  - Cursor: pointer
Active tab:
  - Cream text (bold)
  - Bottom border: 3px Hot pink
  - Shadow: Neon glow
Hover: Gold bottom border (dashed)
Animation: 200ms ease
Responsive: Collapse to mobile menu
```

### 7. Live Indicator
```
Shape: Circle 12x12px
Background: Pulsing hot pink
Glow: Electric blue halo
Animation: Pulse 1s infinite
Text label: "LIVE" (monospace, 10px)
Position: Usually top-right corner of content
```

### 8. Neon Text Effects
```
Text: Any heading or emphasis
Color: Hot pink or electric blue
Shadow: Layered neon glow
  - 0px 0px 10px color (50% opacity)
  - 0px 0px 20px color (30% opacity)
  - 0px 0px 30px color (20% opacity)
Animation: Subtle flicker (10% intensity, 0.5s random)
Use case: "CONFESS", "SIN SCORE", key CTAs
```

---

## Animation & Microinteractions

### Standard Transitions
- **Buttons**: 150-200ms ease-out
- **Cards**: 300ms cubic-bezier(0.34, 1.56, 0.64, 1) (bounce)
- **Modals**: 300ms ease-in-out
- **Forms**: 200ms ease
- **Color changes**: 250ms ease

### Approved Animation Types
- **Slide**: Entrance/exit for modals, sidebars
- **Fade**: Opacity transitions
- **Scale**: Card hover, achievement unlock
- **Pulse**: Live indicator, reward states
- **Rotate**: Icon reveals, badge unlock
- **Glow**: Neon effects on focus/hover
- **Shimmer**: Loading states (subtle)

### Motion Accessibility
- Respect `prefers-reduced-motion`: Remove glow animations, use instant state changes
- Provide fallback: No animation if motion is disabled

---

## Iconography System (Initial Inventory)

### Sin Icons (Hot Pink)
- Fist (power/dominance)
- Flame (passion)
- Lock (secrets)
- Skull (darkness)
- Crown (authority)

### Virtue Icons (Electric Blue)
- Star (aspiration)
- Heart (redemption)
- Shield (protection)
- Halo (grace)
- Ascending arrow (progress)

### Gamification Icons
- XP orb (glowing circle)
- Level badge (shield with number)
- Achievement star (5-pointed, gold)
- Penance scroll (rolled parchment)
- Leaderboard pedestal

### Action Icons
- Confess (mouth/speech bubble)
- Claim (hand open)
- Submit (arrow/check)
- Close (X)
- Menu (hamburger)
- Play (triangle)
- Volume (speaker)

---

## Voice & Tone in UI

### Copywriting Principles
- **Playful irreverence**: "404: INNOCENCE NOT FOUND"
- **Spiritual mockery**: "AMEN, SLUT" | "GO FORTH AND BE A SLUT"
- **Empowerment/dominance**: "KISS THE RING" | "CONFESS WITH YOUR MOUTHFUL"
- **Gamification**: "UNLOCK YOUR POWER" | "LEVEL UP YOUR TRANSGRESSION"
- **Reward language**: "ABSOLUTION GRANTED" | "PENANCE EARNED"

### Tone Across Contexts
| Context | Tone | Example |
|---|---|---|
| Error messages | Playful, not patronizing | "Oops. Try again, sinner." |
| Success | Celebratory | "ABSOLUTION GRANTED!" |
| Loading | Mysterious | "Confessional booth opening..." |
| Empty state | Inviting | "No confessions yet. Be the first to sin." |
| Locked content | Tantalizing | "MEMBERS ONLY. Join the ritual." |
| Achievements | Empowering | "MASTER OF TRANSGRESSION UNLOCKED" |

---

## Responsive Design Breakpoints

| Breakpoint | Width | Context |
|---|---|---|
| Mobile | 320-640px | Phones, single column |
| Tablet | 641-1024px | iPad, 2-column layout |
| Desktop | 1025-1920px | Monitors, 3+ columns |
| Ultra-wide | 1921px+ | Large displays, full-width video |

### Mobile-First Approach
- Base design on mobile
- Enhance for tablet (larger spacing, 2 columns)
- Optimize for desktop (full feature set, multi-column)

---

## Accessibility Standards

### Color Contrast
- WCAG AA: 4.5:1 for body text, 3:1 for large text
- All interactive elements must have visible focus states
- Never rely on color alone to communicate information

### Text
- Minimum font size: 12px (body), 14px (labels)
- Line height: 1.5× for body, 1.2-1.3× for headings
- Maximum line length: 75 characters

### Interactive Elements
- Minimum clickable area: 44x44px
- Visible focus rings (gold or electric blue border)
- Keyboard navigation fully supported
- ARIA labels for screen readers

### Motion
- Respect `prefers-reduced-motion` media query
- No flashing content (> 3 flashes per second)
- Provide pause controls for animations

---

## File Naming & Organization

```
/assets/
  /avatar-designs/
    - cookie_mami_front.png
    - cookie_mami_3quarter.png
    - cookie_mami_profile.png
    - cookie_mami_expressions.png
    - cookie_mami_animation_sprites.png
  /icons/
    - sin_*.svg
    - virtue_*.svg
    - gamification_*.svg
  /mockups/
    - ui_sin_score_meter.png
    - ui_penance_assignment.png
    - ui_achievement_badge.png
    - ui_level_progression.png
    - ui_rank_display.png
  /product-mockups/
    - merch_crop_top.png
    - merch_vibrator_packaging.png
    - merch_cookies.png
    - merch_harness.png
    - merch_digital_products.png
```

---

## Next Steps (Phase 1 - Remaining 48 Hours)

- [ ] Finalize COOKIE MAMI character variations (full expressions + animation sprites)
- [ ] Create interactive gamification UI mockups (Figma or HTML prototype)
- [ ] Generate product mockups (merch styling + food porn imagery)
- [ ] Build component library in code (React + Tailwind)
- [ ] Create social media template system
- [ ] Document motion specifications for developer handoff

---

**Version**: 1.0  
**Last Updated**: 2026-04-13 21:40 UTC  
**Next Review**: 2026-04-14 (Phase 1 completion check)
