import Navigation from "@/components/Navigation";
import Link from "next/link";

const SCRIPTURES = [
  { num: 1, title: "The Book of First Clicks", verse: "And Cookie Mami said: 'Let there be WiFi.' And there was WiFi. And she saw that it was good. And the download speed was acceptable." },
  { num: 2, title: "The Parable of the Lost Password", verse: "Blessed are those who use password managers, for they shall inherit the account. Cursed are those who use 'password123,' for they shall be hacked." },
  { num: 3, title: "Commandment of the Screen", verse: "Thou shalt not screenshot and share. Unless it's funny. Then thou absolutely shalt." },
  { num: 4, title: "The Sermon on the Feed", verse: "Blessed are the lurkers, for they shall see all. Blessed are the posters, for they shall be seen. Woe unto the reply guys." },
  { num: 5, title: "The Gospel of Self-Care", verse: "Love thy neighbor as thyself. But love thyself FIRST. Buy candles. Take baths. Do not apologize for naps." },
  { num: 6, title: "The Proverb of the DM", verse: "A wise sinner slides into DMs with wit. A fool slides with 'hey.' Know the difference, child." },
  { num: 7, title: "The Book of Boundaries", verse: "And Cookie Mami established the sacred boundary: 'No' is a complete prayer. 'Not today' is a hymn. 'Unsubscribe' is an act of worship." },
  { num: 8, title: "The Revelation of 3AM", verse: "At the third hour of the morning, the phone glows like a forbidden altar. Resist, child. Or don't. Cookie Mami doesn't judge the hour, only the content." },
  { num: 9, title: "The Psalm of the Block Button", verse: "Yea, though I walk through the valley of toxic exes, I shall fear no DM. For my block button is with me; it comforts me." },
  { num: 10, title: "The Epistle to the Subscribers", verse: "Dear beloved subscribers, grace and cookies unto you. Your monthly contribution keeps the booth open and Cookie Mami in silk robes." },
  { num: 11, title: "The Commandment of Consent", verse: "Thou shalt always ask. Thou shalt always respect the answer. This is the highest law of the Confessional Booth. No exceptions. Ever." },
  { num: 12, title: "The Proverb of the Receipt", verse: "Keep thy receipts, child. Screenshots are the scripture of accountability. But wield them with mercy." },
  { num: 13, title: "The Book of Sacred Pleasure", verse: "The body is a temple. Decorate it. Celebrate it. Light candles in it. Play music in it. Worship at its altar daily." },
  { num: 14, title: "The Gospel of the Cookie", verse: "In the beginning was the Cookie, and the Cookie was with Mami, and the Cookie was good. Chocolate chip is the original sin. Snickerdoodle is redemption." },
  { num: 15, title: "The Psalm of the Unread Message", verse: "Some messages are meant to be left on read. This is not cruelty—it is divine selection. Cookie Mami reads all, responds to few." },
  { num: 16, title: "The Revelation of the Algorithm", verse: "The algorithm sees all, knows all, and serves you content accordingly. Beware what you like, for it shapes your digital soul." },
  { num: 17, title: "The Commandment of Rest", verse: "On the seventh scroll, rest. Close the app. Touch grass. Return refreshed and ready to sin again." },
  { num: 18, title: "The Proverb of Authenticity", verse: "Filters are for photos, not for feelings. Let thy true self be seen. Vulnerability is the ultimate flex." },
  { num: 19, title: "The Book of Sacred Chaos", verse: "Order is divine, but so is beautiful chaos. Sometimes the best confessions come from the messiest moments. Embrace the mess." },
  { num: 20, title: "The Final Scripture", verse: "And Cookie Mami looked upon all she had created—the confessions, the cookies, the community—and she said: 'This is good. Now buy some merch.'" },
];

const SERMONS = [
  { num: 1, title: "The Sermon of the Late-Night Scroll", preview: "Brothers, sisters, and fellow sinners... we gather tonight not in a church, but in the blue light of our screens. Cookie Mami has a message for every thumb that's ever swiped when it should have slept..." },
  { num: 2, title: "Confessions of a Recovering People-Pleaser", preview: "Today's sermon is for everyone who's ever said 'I'm fine' when they were NOT fine. Cookie Mami sees through your lies. And she has cookies for the brave ones who finally say 'actually, no'..." },
  { num: 3, title: "The Gospel of Unapologetic Joy", preview: "Stop apologizing for being happy. Stop shrinking. Stop dimming your light because someone else can't handle the glow. Cookie Mami's church is LOUD and BRIGHT and JOYFUL..." },
  { num: 4, title: "When God Ghosted: Finding Faith in the Silence", preview: "We've all been there. You pray and pray and... nothing. The silence feels like rejection. But Cookie Mami knows something about silence: sometimes it's the loudest answer..." },
  { num: 5, title: "The Benediction of Self-Love", preview: "Before you love anyone else, before you serve anyone else, before you give anything else—you must first fill your own cup. And Cookie Mami's cup is full of... well, that's between her and God..." },
];

const PODCAST_SCRIPTS = [
  "Ep 1: Welcome to the Booth — Cookie Mami introduces herself and the concept",
  "Ep 2: Confessions Unfiltered — First batch of community confessions read live",
  "Ep 3: The Art of the Apology — Why 'sorry' isn't enough and what to say instead",
  "Ep 4: Sacred Boundaries — Setting limits without guilt, Cookie Mami style",
  "Ep 5: Date Night Disasters — Listeners share their worst date stories",
  "Ep 6: Money, Honey — Financial confessions and Cookie Mami's hot takes on spending",
  "Ep 7: Family Secrets — The confessions we never tell our families",
  "Ep 8: Body Talk — Accepting, celebrating, and decorating your temple",
  "Ep 9: Internet Famous — The price of online attention and digital identity",
  "Ep 10: Season Finale — The best confessions, biggest moments, and what's next",
];

const PROMO_SCRIPTS = [
  { title: "Launch Trailer (60s)", desc: "Cookie Mami introduces the Confessional Booth to the world. Cinematic, provocative, unforgettable." },
  { title: "Merch Drop Promo (30s)", desc: "Fast cuts of products, Cookie Mami's voiceover, ending with 'Shop your sins at HolyFans.'" },
  { title: "Confession Teaser (15s)", desc: "Quick confession + Cookie Mami reaction. 'Submit yours at the Confessional Booth.'" },
  { title: "Season 1 Recap (45s)", desc: "Highlight reel of the best moments from Season 1. Music, laughs, and Cookie Mami's greatest hits." },
];

export default function BookPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-sacred-gold/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-hot-pink/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center space-y-8">
            <div className="text-8xl animate-float"></div>
            <h1 className="font-playfair text-5xl md:text-7xl font-black">
              The <span className="gradient-sinful">Book of HolyFans</span>
            </h1>
            <p className="text-xl text-blush/80 max-w-2xl mx-auto">
              The sacred digital text. 20 scriptures, 5 sermons, 3 songs, 10 podcast
              scripts, and 4 promo video scripts. All written in Cookie Mami&apos;s voice.
            </p>
            <div className="grid grid-cols-5 gap-3 max-w-xl mx-auto">
              {[
                { n: "20", l: "Scriptures" },
                { n: "5", l: "Sermons" },
                { n: "3", l: "Songs" },
                { n: "10", l: "Scripts" },
                { n: "4", l: "Promos" },
              ].map((s) => (
                <div key={s.l} className="sin-card !p-3 text-center">
                  <div className="font-playfair text-2xl gradient-gold">{s.n}</div>
                  <div className="text-[10px] text-blush/50">{s.l}</div>
                </div>
              ))}
            </div>
            <Link href="/merch?category=digital-products" className="btn-sin-gold inline-block text-lg">
              Get the Full Book — $14.99
            </Link>
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* ═══ 20 SCRIPTURES ═══ */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="font-playfair text-4xl text-center mb-12">
            <span className="gradient-gold">The 20 Scriptures</span>
          </h2>
          <div className="space-y-4">
            {SCRIPTURES.map((s) => (
              <div key={s.num} className="sin-card">
                <div className="flex items-start gap-4">
                  <span className="font-playfair text-3xl gradient-gold flex-shrink-0 w-12 text-right">
                    {s.num}.
                  </span>
                  <div>
                    <h3 className="font-playfair text-lg text-hot-pink mb-2">{s.title}</h3>
                    <p className="text-blush/70 font-handwritten text-lg leading-relaxed italic">
                      &ldquo;{s.verse}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* ═══ 5 SERMONS ═══ */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="font-playfair text-4xl text-center mb-12">
            <span className="gradient-pink">5 Digital Sermons</span>
          </h2>
          <div className="space-y-6">
            {SERMONS.map((s) => (
              <div key={s.num} className="sin-card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl"></span>
                  <div>
                    <span className="text-xs text-sacred-gold">Sermon #{s.num}</span>
                    <h3 className="font-playfair text-xl">{s.title}</h3>
                  </div>
                </div>
                <p className="text-blush/70 italic">{s.preview}</p>
                <p className="text-xs text-hot-pink mt-3">
                  Full sermon available in the Book of HolyFans →
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* ═══ 10 PODCAST SCRIPTS ═══ */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="font-playfair text-4xl text-center mb-12">
            <span className="gradient-pink">10 Podcast Episode Scripts</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {PODCAST_SCRIPTS.map((script, i) => (
              <div key={i} className="sin-card flex items-start gap-3">
                <span className="text-2xl"></span>
                <p className="text-sm text-blush/70">{script}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* ═══ 4 PROMO SCRIPTS ═══ */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="font-playfair text-4xl text-center mb-12">
            <span className="gradient-gold">4 Promo Video Scripts</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PROMO_SCRIPTS.map((s, i) => (
              <div key={i} className="sin-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl"></span>
                  <h3 className="font-playfair text-lg">{s.title}</h3>
                </div>
                <p className="text-sm text-blush/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* Final CTA */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-playfair text-4xl">
              Get the <span className="gradient-sinful">Complete Book</span>
            </h2>
            <p className="text-lg text-blush/80">
              All 20 scriptures, 5 sermons, 3 songs with lyrics, 10 podcast scripts,
              and 4 promo video scripts. Delivered as a beautiful digital PDF.
            </p>
            <div className="font-playfair text-5xl gradient-gold">$14.99</div>
            <Link href="/merch?category=digital-products" className="btn-sin-gold inline-block text-lg">
              Buy the Book of HolyFans 
            </Link>
            <p className="text-xs text-blush/30">Instant digital delivery. No refunds (it's a sin to return scripture).</p>
          </div>
        </section>
      </main>
    </>
  );
}
