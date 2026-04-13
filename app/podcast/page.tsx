import Navigation from "@/components/Navigation";
import Link from "next/link";

const EPISODES = [
  { id: 1, title: "Confessions of a Serial Liker", description: "Real voices sharing digital desires. Late-night scrolling. The art of intention.", duration: "45 min", date: "Apr 12, 2024", guests: "Cookie Mami" },
  { id: 2, title: "Holy Ghosted: When God Left You on Read", description: "Spiritual silence. Prayer that echoes back. Understanding faith when faith is quiet.", duration: "52 min", date: "Apr 5, 2024", guests: "Pastor Jerome" },
  { id: 3, title: "Sinners Anonymous", description: "Listeners call in. Confessions shared. No judgment. Only understanding.", duration: "58 min", date: "Mar 29, 2024", guests: "Anonymous voices" },
  { id: 4, title: "The Body is a Temple", description: "Tattoos, piercings, desire made visible. Is vanity sacred or sacred defiance?", duration: "41 min", date: "Mar 22, 2024", guests: "Mercy" },
  { id: 5, title: "Sacred Self-Care", description: "Bath rituals. Meditation. Touching yourself with reverence. The holiest devotion.", duration: "38 min", date: "Mar 15, 2024", guests: "Cookie Mami" },
  { id: 6, title: "Forbidden Fruit: A Taste Test", description: "Everything we make. Tested. Tasted. Discussed in real time.", duration: "62 min", date: "Mar 8, 2024", guests: "The collective" },
  { id: 7, title: "Love Languages of the Damned", description: "How do you receive love? How do you give it? Five ways to speak desire.", duration: "47 min", date: "Mar 1, 2024", guests: "Dr. Pleasure" },
  { id: 8, title: "Confessional After Dark", description: "Unfiltered. Uncensored. The conversations that would make priests blush.", duration: "71 min", date: "Feb 23, 2024", guests: "Cookie Mami", badge: "EXPLICIT" },
  { id: 9, title: "From Pew to Pleasure", description: "One person's journey from rigid faith to embodied freedom. Real. Raw. Moving.", duration: "55 min", date: "Feb 16, 2024", guests: "Anonymous" },
  { id: 10, title: "The Beginning", description: "Where it started. Cookie Mami introduces herself. The first confessions read aloud.", duration: "39 min", date: "Feb 9, 2024", guests: "Cookie Mami" },
];

export default function PodcastPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black pt-16">
        
        {/* Header */}
        <section className="px-4 md:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h1 className="text-4xl md:text-6xl font-thin tracking-widest">
              Podcast
            </h1>
            <p className="text-base md:text-lg font-light text-off-white/70 max-w-2xl mx-auto">
              Real voices. Real confessions. Conversations that dissolve shame and kindle truth.
            </p>
          </div>
        </section>

        {/* Subscribe */}
        <section className="px-4 md:px-8 py-16 border-t border-gold/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-lg font-light tracking-wide mb-4">
                Listen Everywhere
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["Spotify", "Apple Podcasts", "Google Podcasts", "Buzzsprout", "RSS"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="btn-sin-primary text-xs py-2 px-4"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-16" />

        {/* Episodes */}
        <section className="px-4 md:px-8 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {EPISODES.map((ep) => (
              <div key={ep.id} className="sin-card cursor-pointer hover:border-gold/50 transition-colors">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-32 h-32 bg-charcoal flex-shrink-0 flex items-center justify-center border border-gold/30">
                    <span className="text-3xl font-light text-gold">
                      {String(ep.id).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <h3 className="text-lg font-light tracking-wide">
                        {ep.title}
                      </h3>
                      {ep.badge && (
                        <span className="text-xs font-light tracking-widest text-rose-gold px-2 py-1 border border-rose-gold/50">
                          {ep.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-light text-off-white/60 leading-relaxed">
                      {ep.description}
                    </p>
                    <div className="flex flex-wrap gap-6 text-xs font-light text-off-white/40">
                      <span>{ep.date}</span>
                      <span>{ep.duration}</span>
                      <span>{ep.guests}</span>
                    </div>
                    <button className="mt-4 text-gold text-sm font-light hover:text-off-white transition-colors">
                      Play Episode
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 md:px-8 py-32 border-t border-gold/20">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-2xl font-light tracking-wide">
              Your voice matters.
            </h2>
            <p className="text-sm font-light text-off-white/60">
              Share your truth. It may be read on air.
            </p>
            <Link href="/confessions" className="btn-sin-primary inline-block">
              Submit Confession
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
