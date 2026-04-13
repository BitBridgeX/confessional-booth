"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { useState, useRef } from "react";

const SONGS = [
  {
    id: "1",
    title: "Confess (feat. Cookie Mami)",
    artist: "HolyFans",
    genre: "Dark R&B",
    mood: "Seductive",
    duration: "3:42",
    lyrics: `[Verse 1]
Step into the booth, baby, close the door
Tell me all the things you've been prayin' for
I can hear your heartbeat through the screen
Darkest thoughts you've ever had, filthiest dreams

[Chorus]
Confess, confess, let it all out
Cookie Mami hears you, there's no need to shout
Confess, confess, on your knees tonight
Every sin forgiven in the neon light

[Verse 2]
3AM scrolling, double-tap and lie
Guilty pleasures hidden in your history
Come a little closer, whisper in my ear
The dirtier the secret, the sweeter what you'll hear`,
  },
  {
    id: "2",
    title: "Holy Water",
    artist: "HolyFans ft. Sinner's Choir",
    genre: "Gospel Trap",
    mood: "Hype",
    duration: "4:15",
    lyrics: `[Verse 1]
Baptize me in the bassline, drown me in the beat
Every Sunday service got me moving to the heat
Pastor said be humble, Cookie Mami said be loud
Catching holy spirit in the middle of the crowd

[Chorus]
Pour that holy water on me, let me feel the rain
Wash away my search history, purify the pain
Holy water, holy water, running down my face
Every drop a blessing, every sin erased

[Bridge]
We don't do quiet worship here
We don't do subtle, baby
Turn the bass up to eleven
Cookie Mami's church is READY`,
  },
  {
    id: "3",
    title: "Pray Position",
    artist: "Cookie Mami",
    genre: "Bedroom Pop",
    mood: "Intimate",
    duration: "3:28",
    lyrics: `[Verse 1]
Candles lit, the incense burning slow
Satin sheets like holy robes below
You say grace, I say your name instead
Communion wine is going to my head

[Chorus]
Get in the pray position, baby
On your knees, just like I taught you, maybe
Hands together, eyes wide shut
This confession booth ain't closing up

[Verse 2]
Read me like your scripture, line by line
Every chapter better than the last time
I'm the sermon that you can't resist
Cookie Mami on your reading list`,
  },
];

export default function MusicPage() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [showLyrics, setShowLyrics] = useState<string | null>(null);

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Header */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-sacred-gold/10 rounded-full blur-3xl animate-float" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <div className="text-7xl animate-float">🎵</div>
            <h1 className="font-playfair text-5xl md:text-6xl font-black">
              <span className="gradient-gold">Sacred Music</span>
            </h1>
            <p className="text-xl text-blush/80">
              Original tracks from the Confessional Booth. Dark R&B meets gospel
              trap meets bedroom pop. All in Cookie Mami&apos;s voice.
            </p>
            <div className="inline-flex items-center gap-2 badge badge-gold px-4 py-2">
              Distributed by DistroKid • $20/yr
            </div>
          </div>
        </section>

        {/* Streaming Platforms */}
        <section className="max-w-4xl mx-auto py-8 px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Spotify", icon: "🟢" },
              { name: "Apple Music", icon: "🍎" },
              { name: "YouTube Music", icon: "🔴" },
              { name: "Tidal", icon: "🔵" },
              { name: "Amazon Music", icon: "🟠" },
              { name: "SoundCloud", icon: "🟧" },
            ].map((p) => (
              <a
                key={p.name}
                href="#"
                className="btn-sin-secondary text-xs py-2 px-4"
              >
                {p.icon} {p.name}
              </a>
            ))}
          </div>
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* Songs with Lyrics */}
        <section className="max-w-4xl mx-auto py-12 px-4 space-y-8">
          <h2 className="font-playfair text-3xl text-center">
            <span className="gradient-sinful">3 Complete Songs</span>
          </h2>

          {SONGS.map((song) => (
            <div key={song.id} className="sin-card space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-40 h-40 rounded-xl bg-gradient-to-br from-hot-pink/30 via-royal-purple/40 to-sacred-gold/20 flex-shrink-0 flex items-center justify-center">
                  <span className="text-6xl">🎵</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-2xl mb-1">{song.title}</h3>
                  <p className="text-sm text-hot-pink mb-2">{song.artist}</p>
                  <div className="flex gap-2 mb-4">
                    <span className="badge badge-pink">{song.genre}</span>
                    <span className="badge badge-purple">{song.mood}</span>
                    <span className="badge badge-gold">{song.duration}</span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setPlaying(playing === song.id ? null : song.id)}
                      className="btn-sin-primary text-xs py-2 px-5"
                    >
                      {playing === song.id ? "⏸ Pause" : "▶ Play Preview"}
                    </button>
                    <button
                      onClick={() => setShowLyrics(showLyrics === song.id ? null : song.id)}
                      className="btn-sin-secondary text-xs py-2 px-5"
                    >
                      {showLyrics === song.id ? "Hide Lyrics" : "📜 Lyrics"}
                    </button>
                  </div>
                </div>
              </div>

              {showLyrics === song.id && (
                <div className="bg-dark-velvet/50 rounded-xl p-6 border border-hot-pink/10">
                  <h4 className="font-playfair text-lg gradient-pink mb-4">Lyrics</h4>
                  <pre className="font-handwritten text-lg text-blush/70 whitespace-pre-wrap leading-relaxed">
                    {song.lyrics}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* Physical Music */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="font-playfair text-3xl text-center mb-12">
            <span className="gradient-gold">Physical Releases</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Vinyl LP", price: "$34.99", icon: "💿", desc: "180g vinyl, gold sleeve" },
              { name: "Limited CD", price: "$19.99", icon: "💽", desc: "Jewel case, signed insert" },
              { name: "Digital Album", price: "$9.99", icon: "🎧", desc: "FLAC + MP3, instant download" },
            ].map((item, i) => (
              <div key={i} className="sin-card text-center space-y-4">
                <span className="text-5xl">{item.icon}</span>
                <h3 className="font-playfair text-xl">{item.name}</h3>
                <p className="text-sm text-blush/60">{item.desc}</p>
                <p className="font-playfair text-2xl gradient-gold">{item.price}</p>
                <Link href="/merch?category=digital-products" className="btn-sin-primary inline-block text-xs py-2">
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
