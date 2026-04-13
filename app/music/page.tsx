import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function MusicPage() {
  // Mock tracks - replace with real Supabase data
  const tracks = [
    {
      id: "1",
      title: "Grace Abounds",
      artist: "Sacred Choir",
      genre: "Worship",
      mood: "Uplifting",
      duration: "4:32",
    },
    {
      id: "2",
      title: "Kyrie Eleison",
      artist: "Contemplative Ensemble",
      genre: "Hymn",
      mood: "Meditative",
      duration: "3:45",
    },
    {
      id: "3",
      title: "Forgive and Rise",
      artist: "Gospel Soul",
      genre: "Worship",
      mood: "Hopeful",
      duration: "5:12",
    },
    {
      id: "4",
      title: "Still Small Voice",
      artist: "Ambient Hymn",
      genre: "Ambient",
      mood: "Peaceful",
      duration: "6:18",
    },
    {
      id: "5",
      title: "Resurrection Song",
      artist: "Sacred Choir",
      genre: "Worship",
      mood: "Joyful",
      duration: "4:55",
    },
    {
      id: "6",
      title: "Lament and Prayer",
      artist: "Reflective Strings",
      genre: "Contemplative",
      mood: "Introspective",
      duration: "5:32",
    },
  ];

  const genres = [
    { name: "All", icon: "🎵" },
    { name: "Worship", icon: "🙏" },
    { name: "Hymn", icon: "✨" },
    { name: "Ambient", icon: "🌙" },
    { name: "Contemplative", icon: "💭" },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-sacred-gradient py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-4xl">🎵</span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold">
                Sacred Music
              </h1>
            </div>
            <p className="text-lg text-sacred-cream opacity-90">
              Original compositions for worship, reflection, and spiritual renewal.
            </p>
          </div>
        </section>

        {/* Genre Filter */}
        <section className="max-w-6xl mx-auto py-8 px-4">
          <div className="flex overflow-x-auto gap-3 pb-2">
            {genres.map((genre) => (
              <button
                key={genre.name}
                className="flex-shrink-0 btn-sacred-secondary text-sm"
              >
                <span className="mr-2">{genre.icon}</span>
                {genre.name}
              </button>
            ))}
          </div>
        </section>

        {/* Tracks Grid */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <Link
                key={track.id}
                href={`/music/${track.id}`}
                className="sacred-card sacred-card-hover group cursor-pointer"
              >
                <div className="w-full h-40 rounded-lg bg-gradient-to-br from-sacred-gold to-sacred-purple flex items-center justify-center text-5xl mb-4">
                  🎵
                </div>
                <h3 className="font-playfair text-lg font-semibold group-hover:text-sacred-gold transition-colors mb-1">
                  {track.title}
                </h3>
                <p className="text-sm text-sacred-gold opacity-80 mb-3">
                  {track.artist}
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-sacred-purple px-2 py-1 rounded">
                    {track.genre}
                  </span>
                  <span className="text-xs bg-sacred-purple px-2 py-1 rounded">
                    {track.mood}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-sacred-gold border-opacity-20">
                  <span className="text-xs text-sacred-cream opacity-60">
                    {track.duration}
                  </span>
                  <span className="text-sacred-gold">▶</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Download Section */}
        <section className="bg-sacred-gradient bg-opacity-30 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-playfair text-3xl">Download Full Albums</h2>
            <p className="text-sacred-cream opacity-80">
              Get all tracks for offline listening. Support the artists.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Complete Collection", price: "$19.99", format: "MP3" },
                { name: "Worship Anthology", price: "$14.99", format: "FLAC" },
                { name: "Vinyl Edition", price: "$34.99", format: "Physical" },
              ].map((album, i) => (
                <div key={i} className="sacred-card">
                  <h3 className="font-playfair text-lg mb-2">{album.name}</h3>
                  <p className="text-xs text-sacred-gold opacity-80 mb-4">
                    {album.format}
                  </p>
                  <p className="font-playfair text-2xl text-sacred-gold mb-4">
                    {album.price}
                  </p>
                  <button className="btn-sacred-primary w-full text-sm">
                    Purchase
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
