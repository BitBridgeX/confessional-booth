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

const UNHOLY_TEXTS = [
  "are you still up?",
  "thinking about you",
  "what are you wearing",
  "never mind it's fine",
  "can we talk",
  "i miss you",
  "did you see my last message",
  "just checking in",
  "you awake",
];

export default function BookPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black pt-16">

        {/* HERO */}
        <section className="px-4 md:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h1 className="text-4xl md:text-6xl font-thin tracking-widest">
              The Codex
            </h1>
            <p className="text-base md:text-lg font-light text-off-white/70 max-w-2xl mx-auto">
              Sacred texts. Digital scripture. The coffee table book you never knew you needed.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { n: "20", l: "Scriptures" },
                { n: "100+", l: "Pages" },
                { n: "2", l: "Formats" },
                { n: "$24.99", l: "Price" },
              ].map((item) => (
                <div key={item.l} className="sin-card space-y-2">
                  <div className="font-light text-2xl text-gold">{item.n}</div>
                  <div className="text-xs font-light text-off-white/50">{item.l}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
              <Link href="/merch?category=digital-products" className="btn-sin-primary">
                Digital PDF
              </Link>
              <Link href="/merch?category=physical" className="btn-sin-secondary">
                Physical Edition
              </Link>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* UNHOLY TEXTS */}
        <section className="px-4 md:px-8 py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light tracking-wide text-center mb-16">
              The Unholy Texts
            </h2>
            <p className="text-center text-sm font-light text-off-white/60 mb-12 max-w-xl mx-auto">
              Messages we've all sent at 3am. Words we regret. Confessions disguised as questions.
            </p>

            {/* Text message bubbles */}
            <div className="space-y-4 max-w-xl mx-auto">
              {UNHOLY_TEXTS.map((text, i) => (
                <div key={i} className="flex justify-end">
                  <div className="bg-gold/10 border border-gold/30 rounded-3xl px-6 py-3 max-w-xs text-right">
                    <p className="text-sm font-light text-off-white/80">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16 space-y-4">
              <p className="text-sm font-light text-gold tracking-widest">
                BLESSED ARE THE LURKERS
              </p>
              <p className="text-xs font-light text-off-white/50">
                Those who read. Those who watch. Those who never respond but always know.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* THE 20 SCRIPTURES */}
        <section className="px-4 md:px-8 py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light tracking-wide text-center mb-16">
              20 Sacred Scriptures
            </h2>
            <div className="space-y-6">
              {SCRIPTURES.map((scripture) => (
                <div key={scripture.num} className="sin-card">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <span className="text-3xl font-light text-gold">
                        {String(scripture.num).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-light tracking-wide">
                        {scripture.title}
                      </h3>
                      <p className="text-sm font-light text-off-white/60 italic leading-relaxed">
                        "{scripture.verse}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* FORMATS */}
        <section className="px-4 md:px-8 py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light tracking-wide text-center mb-16">
              Two Sacred Formats
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Digital */}
              <div className="sin-card space-y-6">
                <h3 className="text-2xl font-light tracking-wide">
                  Digital Download
                </h3>
                <ul className="space-y-3 text-sm font-light text-off-white/70">
                  <li>— 100+ page PDF</li>
                  <li>— All 20 scriptures</li>
                  <li>— High-resolution images</li>
                  <li>— Searchable text</li>
                  <li>— Instant access</li>
                </ul>
                <p className="text-2xl font-light text-gold">$14.99</p>
                <Link href="/merch?category=digital-products" className="btn-sin-primary">
                  Download Now
                </Link>
              </div>

              {/* Physical */}
              <div className="sin-card space-y-6">
                <h3 className="text-2xl font-light tracking-wide">
                  Coffee Table Edition
                </h3>
                <ul className="space-y-3 text-sm font-light text-off-white/70">
                  <li>— 200+ pages, hardcover</li>
                  <li>— Premium paper stock</li>
                  <li>— Art throughout</li>
                  <li>— Gold foil details</li>
                  <li>— Limited edition (1000 copies)</li>
                </ul>
                <p className="text-2xl font-light text-gold">$49.99</p>
                <Link href="/merch?category=physical" className="btn-sin-primary">
                  Order Print
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* KINKY RITUAL SYSTEM */}
        <section className="px-4 md:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl font-light tracking-wide">
              A Kinky Branded Ritual System
            </h2>
            
            <p className="text-sm font-light text-off-white/60 max-w-2xl mx-auto">
              The Codex is not just a book. It is a ritual object. Use it as instructed. Read daily. Meditate on scripture. Share verses with those who need to confess.
            </p>

            <div className="grid md:grid-cols-3 gap-8 py-8">
              {[
                {
                  title: "Ritual I",
                  desc: "Read one scripture daily. Let it guide your confessions. Speak its truth into your world."
                },
                {
                  title: "Ritual II",
                  desc: "Share verses with friends who need them. The Codex spreads through intimate acts of truth."
                },
                {
                  title: "Ritual III",
                  desc: "Keep the physical edition on your table. Let guests ask questions. Start conversations about sacred pleasure."
                }
              ].map((ritual, i) => (
                <div key={i} className="space-y-3">
                  <p className="text-xs font-light tracking-widest text-gold">
                    {ritual.title}
                  </p>
                  <p className="text-sm font-light text-off-white/60">
                    {ritual.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gold/20 space-y-6">
              <p className="text-lg font-light">
                Ready to join the ritual?
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/merch?category=digital-products" className="btn-sin-primary">
                  Digital Codex
                </Link>
                <Link href="/merch?category=physical" className="btn-sin-secondary">
                  Physical Codex
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
