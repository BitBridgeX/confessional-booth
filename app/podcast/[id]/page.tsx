import Navigation from "@/components/Navigation";
import Link from "next/link";

const EPISODES: Record<string, any> = {
  "1": { id: 1, title: "Confessions of a Serial Liker", description: "Cookie Mami reads your thirstiest digital confessions and drops unholy wisdom about late-night scrolling, accidental likes, and the art of the DM slide.", duration: "45 min", date: "Apr 12, 2024", guests: "Cookie Mami solo", transcript: `[00:00] Cookie Mami: Welcome, sinners. Pull up a pew. I got your confessions right here and honey... some of you need HELP.\n\n[02:14] First confession: "I liked my ex's photo from 2019 at 3am and then unliked it. They saw." Baby. BABY. This is not a confession, this is a crime scene.\n\n[08:45] Cookie Mami's wisdom: The DM slide is a spiritual practice. Do it with intention or don't do it at all. You can't half-commit to sin.\n\n[15:30] Second confession reads...\n\n[Full transcript available in the Book of HolyFans]` },
  "2": { id: 2, title: "Holy Ghosted: When God Left You on Read", description: "Why does prayer sometimes feel like texting someone who turned off read receipts?", duration: "52 min", date: "Apr 5, 2024", guests: "Pastor Jerome" },
};

export default async function EpisodePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const episode = EPISODES[id] || EPISODES["1"];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <section className="relative py-16 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-royal-purple/20 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Link href="/podcast" className="text-hot-pink text-sm hover:text-neon-pink mb-8 inline-block">
              ← Back to Episodes
            </Link>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-48 h-48 rounded-2xl bg-gradient-to-br from-hot-pink/30 via-royal-purple/40 to-sacred-gold/20 flex-shrink-0 flex items-center justify-center text-6xl">
                
              </div>
              <div className="flex-1 space-y-4">
                <span className="badge badge-pink">Episode #{episode.id}</span>
                <h1 className="font-playfair text-4xl font-bold">{episode.title}</h1>
                <p className="text-blush/70">{episode.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-blush/50">
                  <span>📅 {episode.date}</span>
                  <span>⏱️ {episode.duration}</span>
                  <span> {episode.guests}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Player */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="sin-card space-y-4">
            <h3 className="font-playfair text-xl gradient-pink">Now Playing</h3>
            <div className="bg-dark-velvet rounded-xl p-6 text-center space-y-4">
              <div className="text-6xl animate-float"></div>
              <p className="text-sm text-blush/50">Connect Buzzsprout to enable audio playback</p>
              <div className="flex justify-center gap-4">
                <button className="btn-sin-primary text-sm py-2">▶ Play</button>
                <button className="btn-sin-secondary text-sm py-2">⬇ Download</button>
              </div>
              {/* Buzzsprout embed placeholder */}
              <div className="text-xs text-blush/30 font-mono mt-4">
                &lt;!-- Buzzsprout Player for Episode {episode.id} --&gt;
              </div>
            </div>
          </div>
        </section>

        {/* Transcript */}
        {episode.transcript && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            <div className="sin-card space-y-4">
              <h3 className="font-playfair text-xl gradient-gold">Transcript</h3>
              <pre className="font-handwritten text-lg text-blush/70 whitespace-pre-wrap leading-relaxed">
                {episode.transcript}
              </pre>
            </div>
          </section>
        )}

        {/* Related + CTA */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
          <div className="divider-sin mb-8" />
          <p className="font-handwritten text-2xl text-neon-pink">
            &ldquo;Got something to confess? I might read it on the next episode...&rdquo; 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/confessions" className="btn-sin-primary">Submit a Confession </Link>
            <Link href="/podcast" className="btn-sin-secondary">More Episodes</Link>
          </div>
        </section>
      </main>
    </>
  );
}
