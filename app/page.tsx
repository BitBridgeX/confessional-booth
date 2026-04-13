import Navigation from "@/components/Navigation";
import Link from "next/link";

const MERCH_CATEGORIES = [
  {
    name: "Apparel",
    icon: "👕",
    count: 20,
    items: ["T-Shirts", "Hoodies", "Crop Tops", "Caps"],
    vibe: "Wear your sins proudly",
  },
  {
    name: "Stickers & Prints",
    icon: "✨",
    count: 20,
    items: ["Holographic Prayer Cards", "Vinyl Stickers", "Art Prints", "Posters"],
    vibe: "Sacred imagery for sinners",
  },
  {
    name: "Lingerie & Intimates",
    icon: "🖤",
    count: 15,
    items: ["Sexy Sets", "Bodysuits", "Robes", "Underwear"],
    vibe: "Unholy comfort",
  },
  {
    name: "Adult Toys & Pleasure",
    icon: "🔥",
    count: 20,
    items: ["Haptic Smart Toys", "Traditional", "Lubricants", "Bondage"],
    vibe: "Divine pleasure",
  },
  {
    name: "Cookie Mami Treats",
    icon: "🍪",
    count: 15,
    items: ["Signature Cookies", "Snack Boxes", "Communion Kits", "Gourmet Line"],
    vibe: "Taste the temptation",
  },
  {
    name: "Accessories",
    icon: "💎",
    count: 10,
    items: ["Phone Cases", "Tote Bags", "Enamel Pins", "Water Bottles"],
    vibe: "Accessorize your sins",
  },
  {
    name: "Digital Products",
    icon: "📱",
    count: 10,
    items: ["Music", "Sermons", "Podcast Access", "App Access"],
    vibe: "Sins on demand",
  },
];

const COOKIE_MAMI_QUOTES = [
  "Come closer, baby. Cookie Mami's got something sweet for you... 🍪",
  "You've been naughty? Good. That's how we like it here.",
  "Confess your digital sins. I promise I won't judge... much. 😈",
  "Every sinner deserves a cookie. And maybe a spanking.",
  "The Lord works in mysterious ways. Cookie Mami works in obvious ones.",
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">

        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden py-24 md:py-32 px-4">
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hot-pink/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-royal-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sacred-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          </div>

          <div className="relative max-w-5xl mx-auto text-center space-y-8">
            <div className="text-8xl md:text-9xl animate-float">🍪</div>

            <h1 className="font-playfair text-5xl md:text-8xl font-black leading-none">
              <span className="gradient-pink">Confessional</span>
              <br />
              <span className="gradient-gold">Booth</span>
            </h1>

            <p className="text-xl md:text-2xl text-blush/80 max-w-2xl mx-auto leading-relaxed">
              Where sinners come to play. Confess your digital sins to
              <span className="text-hot-pink font-bold"> Cookie Mami</span>,
              listen to unholy sermons, and treat yourself to something...
              <span className="italic text-sacred-gold"> sinful</span>.
            </p>

            {/* Cookie Mami intro bubble */}
            <div className="max-w-lg mx-auto cookie-bubble mt-8">
              <p className="font-handwritten text-2xl text-neon-pink">
                &ldquo;Welcome, baby. You look like you&apos;ve got something to confess...&rdquo;
              </p>
              <p className="text-sm text-blush/60 mt-2">— Cookie Mami 🍪</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/confessions" className="btn-sin-primary text-lg">
                🔥 Confess Your Sins
              </Link>
              <Link href="/merch" className="btn-sin-gold text-lg">
                🍪 Cookie Mami Treats
              </Link>
              <Link href="/podcast" className="btn-sin-secondary text-lg">
                🎙️ Listen Now
              </Link>
            </div>
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* ═══ COOKIE MAMI INTRO ═══ */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl">
                Meet <span className="gradient-pink">Cookie Mami</span>
              </h2>
              <p className="text-lg text-blush/80 leading-relaxed">
                Part dominatrix, part therapist, all cookie. Cookie Mami runs the
                Confessional Booth with a velvet glove and a sharp tongue. She
                hears your sins, serves you treats, and reminds you that being
                naughty is a form of prayer.
              </p>
              <div className="space-y-3">
                {[
                  "Your digital confessions, her divine responses",
                  "Podcast host with the voice of a fallen angel",
                  "Baker of the most sinful cookies you'll ever taste",
                  "Curator of pleasure products for the faithful",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <span className="text-hot-pink">♱</span>
                    <span className="text-blush/80">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/confessions" className="btn-sin-primary inline-block">
                Talk to Cookie Mami
              </Link>
            </div>
            <div className="relative">
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-hot-pink/20 via-royal-purple/30 to-sacred-gold/10 flex items-center justify-center neon-border">
                <div className="text-center space-y-4">
                  <div className="text-9xl animate-float">🍪</div>
                  <p className="font-playfair text-3xl gradient-pink">Cookie Mami</p>
                  <p className="text-sm text-blush/60 font-handwritten text-xl">&ldquo;Be good... or don&apos;t.&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* ═══ THE CONFESSIONAL ═══ */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-playfair text-4xl md:text-5xl">
              The <span className="gradient-sinful">Confessional</span>
            </h2>
            <p className="text-lg text-blush/80">
              Confess your digital sins — your guilty searches, your secret
              subscriptions, your 3AM scrolling habits. Cookie Mami hears all,
              judges none, and responds with divine sass.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Confess",
                  desc: "Type your digital sin. Anonymously. No judgment (okay, maybe a little).",
                  icon: "🔥",
                },
                {
                  step: "02",
                  title: "Cookie Mami Responds",
                  desc: "She'll absolve you, roast you, or send you to horny jail. Her choice.",
                  icon: "🍪",
                },
                {
                  step: "03",
                  title: "Get Your Treat",
                  desc: "Every confession earns a cookie. Good sinners get extra frosting.",
                  icon: "🎁",
                },
              ].map((step) => (
                <div key={step.step} className="sin-card text-center space-y-4">
                  <div className="text-4xl">{step.icon}</div>
                  <span className="font-handwritten text-3xl text-hot-pink">
                    {step.step}
                  </span>
                  <h3 className="font-playfair text-xl">{step.title}</h3>
                  <p className="text-sm text-blush/70">{step.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/confessions" className="btn-sin-primary inline-block text-lg">
              Enter the Confessional 🔥
            </Link>
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* ═══ MERCH CATEGORIES ═══ */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl">
                <span className="gradient-gold">Shop Sin</span>
              </h2>
              <p className="text-lg text-blush/80">
                110+ products across 7 categories. From lingerie to cookies.
                Because sinners deserve nice things.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MERCH_CATEGORIES.map((cat) => (
                <Link
                  key={cat.name}
                  href={`/merch?category=${encodeURIComponent(cat.name.toLowerCase())}`}
                  className="sin-card group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{cat.icon}</span>
                    <span className="badge badge-pink">{cat.count} items</span>
                  </div>
                  <h3 className="font-playfair text-xl mb-2 group-hover:text-hot-pink transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-blush/60 italic mb-4">{cat.vibe}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-hot-pink/10 text-hot-pink/80 px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/merch" className="btn-sin-gold text-lg">
                Browse All 110+ Products
              </Link>
            </div>
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* ═══ PODCAST & MUSIC ═══ */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Podcast */}
            <div className="sin-card space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-5xl">🎙️</span>
                <div>
                  <h3 className="font-playfair text-2xl">The Podcast</h3>
                  <span className="badge badge-purple">via Buzzsprout</span>
                </div>
              </div>
              <p className="text-blush/80">
                Cookie Mami reads your confessions on air, interviews sinners,
                and drops unholy wisdom. Raw, real, and ridiculously entertaining.
              </p>
              <div className="space-y-3">
                {[
                  "Weekly confession readings",
                  "Guest sinner interviews",
                  "Cookie Mami's advice column",
                  "Available on Spotify, Apple, everywhere",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm text-blush/70">
                    <span className="text-hot-pink">♪</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-hot-pink/10">
                <span className="text-xs text-blush/50">Powered by Buzzsprout • $12/mo</span>
                <Link href="/podcast" className="btn-sin-primary text-xs py-2 px-5">
                  Listen
                </Link>
              </div>
            </div>

            {/* Music */}
            <div className="sin-card space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-5xl">🎵</span>
                <div>
                  <h3 className="font-playfair text-2xl">Sacred Music</h3>
                  <span className="badge badge-gold">via DistroKid</span>
                </div>
              </div>
              <p className="text-blush/80">
                Original tracks that slap different. Worship music for the
                congregation that likes bass drops, bedroom beats, and hymns
                that make you feel things.
              </p>
              <div className="space-y-3">
                {[
                  "3 complete songs with lyrics",
                  "Streaming on all platforms",
                  "Exclusive Cookie Mami remixes",
                  "Vinyl & CD available in merch",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm text-blush/70">
                    <span className="text-sacred-gold">♫</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-hot-pink/10">
                <span className="text-xs text-blush/50">Distributed by DistroKid • $20/yr</span>
                <Link href="/music" className="btn-sin-gold text-xs py-2 px-5">
                  Listen
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* ═══ BOOK OF HOLYFANS ═══ */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="text-6xl animate-float">📖</div>
            <h2 className="font-playfair text-4xl md:text-5xl">
              The <span className="gradient-sinful">Book of HolyFans</span>
            </h2>
            <p className="text-lg text-blush/80 max-w-2xl mx-auto">
              The sacred text for the digitally devout. 20 scriptures, 5 sermons,
              10 podcast scripts, 3 songs with lyrics, and 4 promo video scripts.
              All written in the voice of Cookie Mami herself.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { num: "5", label: "Digital Sermons", icon: "⛪" },
                { num: "20", label: "Scriptures", icon: "📜" },
                { num: "3", label: "Songs + Lyrics", icon: "🎵" },
                { num: "10", label: "Podcast Scripts", icon: "🎙️" },
                { num: "4", label: "Promo Scripts", icon: "🎬" },
              ].map((item) => (
                <div key={item.label} className="sin-card text-center py-6">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-playfair text-3xl gradient-gold">{item.num}</div>
                  <div className="text-xs text-blush/60 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <Link href="/book" className="btn-sin-primary inline-block text-lg">
              Read the Scripture 📖
            </Link>
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* ═══ COOKIE MAMI QUOTES ═══ */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl text-center mb-12">
              <span className="gradient-pink">Cookie Mami Says...</span>
            </h2>
            <div className="space-y-6">
              {COOKIE_MAMI_QUOTES.map((quote, i) => (
                <div
                  key={i}
                  className="cookie-bubble"
                  style={{ marginLeft: i % 2 === 0 ? "0" : "auto", maxWidth: "80%" }}
                >
                  <p className="font-handwritten text-xl text-neon-pink">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-playfair text-5xl md:text-6xl">
              Ready to <span className="gradient-sinful">Sin</span>?
            </h2>
            <p className="text-xl text-blush/80">
              Cookie Mami is waiting. The booth is open. Your cookies are warm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/confessions" className="btn-sin-primary text-lg">
                🔥 Confess Now
              </Link>
              <Link href="/merch" className="btn-sin-gold text-lg">
                🛍️ Shop Merch
              </Link>
              <Link href="/podcast" className="btn-sin-secondary text-lg">
                🎙️ Listen
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ FOOTER ═══ */}
        <footer className="border-t border-hot-pink/10 py-12 px-4 bg-dark-velvet/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-playfair text-lg gradient-pink mb-4">Confessional Booth</h4>
                <p className="text-sm text-blush/60">
                  A Cookie Mami production. Where sinners come to play. 🍪
                </p>
              </div>
              <div>
                <h4 className="font-playfair text-lg text-sacred-gold mb-4">Shop</h4>
                <div className="space-y-2 text-sm text-blush/60">
                  <Link href="/merch?category=apparel" className="block hover:text-hot-pink">Apparel</Link>
                  <Link href="/merch?category=lingerie" className="block hover:text-hot-pink">Lingerie</Link>
                  <Link href="/merch?category=adult-toys" className="block hover:text-hot-pink">Adult Toys</Link>
                  <Link href="/merch?category=food" className="block hover:text-hot-pink">Cookie Mami Treats</Link>
                </div>
              </div>
              <div>
                <h4 className="font-playfair text-lg text-sacred-gold mb-4">Content</h4>
                <div className="space-y-2 text-sm text-blush/60">
                  <Link href="/podcast" className="block hover:text-hot-pink">Podcast</Link>
                  <Link href="/music" className="block hover:text-hot-pink">Music</Link>
                  <Link href="/book" className="block hover:text-hot-pink">Book of HolyFans</Link>
                  <Link href="/confessions" className="block hover:text-hot-pink">Confessional</Link>
                </div>
              </div>
              <div>
                <h4 className="font-playfair text-lg text-sacred-gold mb-4">Connect</h4>
                <div className="space-y-2 text-sm text-blush/60">
                  <a href="#" className="block hover:text-hot-pink">Instagram</a>
                  <a href="#" className="block hover:text-hot-pink">TikTok</a>
                  <a href="#" className="block hover:text-hot-pink">Twitter</a>
                  <a href="#" className="block hover:text-hot-pink">OnlyFans</a>
                </div>
              </div>
            </div>
            <div className="divider-sin mb-8" />
            <div className="text-center text-sm text-blush/40">
              <p>© 2024 Confessional Booth × Cookie Mami. All rights reserved. All sins forgiven (maybe).</p>
              <p className="mt-2 font-handwritten text-lg text-hot-pink/40">
                &ldquo;Be good... or be good at being bad.&rdquo; — Cookie Mami
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
