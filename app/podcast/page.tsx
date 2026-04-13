import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function PodcastPage() {
  // Mock episodes - replace with real Supabase data
  const episodes = [
    {
      id: "1",
      title: "Finding Grace in Brokenness",
      speaker: "Pastor John",
      date: "2024-04-12",
      duration: "58 min",
      description:
        "A deep conversation about redemption and second chances in the Christian faith.",
    },
    {
      id: "2",
      title: "The Cost of Honesty",
      speaker: "Pastor Sarah",
      date: "2024-04-05",
      duration: "45 min",
      description:
        "Exploring vulnerability and why vulnerability in faith matters.",
    },
    {
      id: "3",
      title: "Confessions of a Doubter",
      speaker: "Guest Speaker",
      date: "2024-03-29",
      duration: "52 min",
      description:
        "A testimonial about wrestling with faith and finding answers.",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-sacred-gradient py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-4xl">🎙️</span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold">
                The Podcast
              </h1>
            </div>
            <p className="text-lg text-sacred-cream opacity-90">
              Listen to powerful testimonies and deep spiritual conversations.
              New episodes every week.
            </p>
          </div>
        </section>

        {/* Episodes */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <div className="space-y-6">
            {episodes.map((episode) => (
              <Link
                key={episode.id}
                href={`/podcast/${episode.id}`}
                className="sacred-card sacred-card-hover group cursor-pointer flex flex-col sm:flex-row gap-6"
              >
                <div className="w-full sm:w-32 h-32 rounded-lg bg-gradient-to-br from-sacred-gold to-sacred-purple flex-shrink-0 flex items-center justify-center text-3xl">
                  🎙️
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-sacred-gold mb-2">{episode.date}</p>
                    <h3 className="font-playfair text-2xl font-semibold group-hover:text-sacred-gold transition-colors mb-2">
                      {episode.title}
                    </h3>
                    <p className="text-sm text-sacred-cream opacity-80 mb-2">
                      {episode.speaker}
                    </p>
                    <p className="text-sm text-sacred-cream opacity-70">
                      {episode.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 text-sacred-gold text-sm">
                    <span>▶ Play</span>
                    <span>•</span>
                    <span>{episode.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-sacred-secondary">Load More Episodes</button>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="bg-sacred-gradient bg-opacity-30 py-16 px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-playfair text-3xl">Subscribe to the Podcast</h2>
            <p className="text-sacred-cream opacity-80">
              Available on your favorite podcast platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Apple Podcasts", "Spotify", "Google Podcasts", "RSS Feed"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="btn-sacred-secondary text-sm"
                  >
                    {platform}
                  </a>
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
