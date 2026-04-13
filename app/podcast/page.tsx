import Navigation from "@/components/Navigation";
import Link from "next/link";

const EPISODES = [
  { id: 1, title: "Confessions of a Serial Liker", description: "Cookie Mami reads your thirstiest digital confessions and drops unholy wisdom about late-night scrolling, accidental likes, and the art of the DM slide.", duration: "45 min", date: "Apr 12, 2024", guests: "Cookie Mami solo" },
  { id: 2, title: "Holy Ghosted: When God Left You on Read", description: "Why does prayer sometimes feel like sending a text to someone who turned off read receipts? Cookie Mami gets real about spiritual dry spells.", duration: "52 min", date: "Apr 5, 2024", guests: "Pastor Jerome" },
  { id: 3, title: "Sinners Anonymous (Ep. 3)", description: "Listeners call in anonymously to confess their wildest digital sins. Cookie Mami absolves, roasts, and occasionally sends people to horny jail.", duration: "58 min", date: "Mar 29, 2024", guests: "Anonymous callers" },
  { id: 4, title: "The Body is a Temple (So Decorate It)", description: "Tattoos, piercings, lingerie, and the theology of looking good. Is vanity a sin or an act of worship?", duration: "41 min", date: "Mar 22, 2024", guests: "Tattoo artist Mercy" },
  { id: 5, title: "Cookie Mami's Guide to Sacred Self-Care", description: "Bath rituals, meditation, edging (the spiritual kind), and why taking care of yourself is the holiest thing you can do.", duration: "38 min", date: "Mar 15, 2024", guests: "Cookie Mami solo" },
  { id: 6, title: "Forbidden Fruit: A Taste Test", description: "Cookie Mami tests every product in the HolyFans store live on air. Cookies, hot sauce, and things we can't mention in the description.", duration: "62 min", date: "Mar 8, 2024", guests: "The whole team" },
  { id: 7, title: "Love Languages of the Damned", description: "What's YOUR love language? Cookie Mami breaks down the 5 love languages through the lens of sin, pleasure, and divine connection.", duration: "47 min", date: "Mar 1, 2024", guests: "Dr. Pleasure" },
  { id: 8, title: "Confessional After Dark", description: "The episode we almost didn't release. Unfiltered confessions, Cookie Mami at her most savage, and conversations that would make a priest blush.", duration: "71 min", date: "Feb 23, 2024", guests: "Cookie Mami solo", badge: "EXPLICIT" },
  { id: 9, title: "From Pew to Pleasure: A Testimony", description: "A real listener shares their journey from strict religious upbringing to sexual liberation. Raw, emotional, and deeply moving.", duration: "55 min", date: "Feb 16, 2024", guests: "Anonymous guest" },
  { id: 10, title: "The Pilot: Cookie Mami Has Entered the Chat", description: "Where it all began. Cookie Mami introduces herself, explains the Confessional Booth concept, and reads the first-ever batch of confessions.", duration: "39 min", date: "Feb 9, 2024", guests: "Cookie Mami solo" },
];

export default function PodcastPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Header */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-royal-purple/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-hot-pink/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <div className="text-7xl animate-float">🎙️</div>
            <h1 className="font-playfair text-5xl md:text-6xl font-black">
              <span className="gradient-pink">The Podcast</span>
            </h1>
            <p className="text-xl text-blush/80">
              Cookie Mami reads your confessions, interviews sinners, and drops
              unholy wisdom. New episodes weekly.
            </p>
            <div className="inline-flex items-center gap-2 badge badge-purple px-4 py-2">
              Powered by Buzzsprout • $12/mo
            </div>
          </div>
        </section>

        {/* Subscribe Platforms */}
        <section className="max-w-4xl mx-auto py-8 px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Spotify", icon: "🟢" },
              { name: "Apple Podcasts", icon: "🍎" },
              { name: "Google Podcasts", icon: "🔵" },
              { name: "Buzzsprout", icon: "🐝" },
              { name: "RSS Feed", icon: "📡" },
            ].map((platform) => (
              <a
                key={platform.name}
                href="#"
                className="btn-sin-secondary text-xs py-2 px-4"
              >
                {platform.icon} {platform.name}
              </a>
            ))}
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* Episodes */}
        <section className="max-w-4xl mx-auto py-12 px-4 space-y-4">
          {EPISODES.map((ep) => (
            <div
              key={ep.id}
              className="sin-card group cursor-pointer flex flex-col sm:flex-row gap-6"
            >
              <div className="w-full sm:w-28 h-28 rounded-xl bg-gradient-to-br from-hot-pink/30 via-royal-purple/40 to-sacred-gold/20 flex-shrink-0 flex items-center justify-center relative">
                <span className="text-4xl">🎙️</span>
                <span className="absolute bottom-2 right-2 text-xs font-bold text-blush/40">
                  #{ep.id}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="font-playfair text-xl group-hover:text-hot-pink transition-colors">
                    {ep.title}
                  </h3>
                  {(ep as any).badge && (
                    <span className="badge badge-red text-[10px] flex-shrink-0">
                      {(ep as any).badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-blush/60 mb-3">{ep.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-blush/40">
                  <span>📅 {ep.date}</span>
                  <span>⏱️ {ep.duration}</span>
                  <span>🎤 {ep.guests}</span>
                </div>
                <button className="mt-3 text-hot-pink text-sm font-bold hover:text-neon-pink transition-colors">
                  ▶ Play Episode
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Buzzsprout embed placeholder */}
        <section className="max-w-4xl mx-auto py-12 px-4">
          <div className="sin-card text-center space-y-4">
            <h3 className="font-playfair text-2xl gradient-gold">
              Embedded Player Coming Soon
            </h3>
            <p className="text-sm text-blush/60">
              Buzzsprout player widget will be embedded here. Connect your Buzzsprout
              account to enable direct playback.
            </p>
            <div className="bg-dark-velvet rounded-xl p-4 text-xs text-blush/30 font-mono">
              {`<!-- Buzzsprout embed -->`}<br />
              {`<div id="buzzsprout-large-player"></div>`}<br />
              {`<script src="https://www.buzzsprout.com/YOUR_ID.js?player=large" ...></script>`}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="font-handwritten text-2xl text-neon-pink">
              &ldquo;Got a confession? Submit it and I might read it on air...&rdquo; 🍪
            </p>
            <Link href="/confessions" className="btn-sin-primary inline-block">
              Submit a Confession 🔥
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
