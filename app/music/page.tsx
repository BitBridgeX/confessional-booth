"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { useState } from "react";

const SONGS = [
  {
    id: "1",
    title: "Confess",
    artist: "HolyFans",
    genre: "Dark R&B",
    mood: "Seductive",
    duration: "3:42",
    lyrics: `[Verse 1]
Step into the booth, baby, close the door
Tell me all the things you've been praying for
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
Every drop a blessing, every sin erased`,
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
This confession booth ain't closing up`,
  },
];

export default function MusicPage() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [showLyrics, setShowLyrics] = useState<string | null>(null);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black pt-16">
        
        {/* Header */}
        <section className="px-4 md:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h1 className="text-4xl md:text-6xl font-thin tracking-widest">
              Music
            </h1>
            <p className="text-base md:text-lg font-light text-off-white/70 max-w-2xl mx-auto">
              Hymns for the sacred body. Beats for the bedroom. Sounds for solitude.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Tracks */}
        <section className="px-4 md:px-8 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {SONGS.map((song) => (
              <div key={song.id} className="sin-card">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Cover */}
                  <div className="w-full md:w-40 h-40 bg-charcoal flex-shrink-0 flex items-center justify-center border border-gold/30">
                    <span className="text-4xl font-light text-gold">
                      {song.id}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-light tracking-wide">
                        {song.title}
                      </h3>
                      <p className="text-sm font-light text-off-white/60">
                        {song.artist}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-6 text-xs font-light text-off-white/50">
                      <span>{song.genre}</span>
                      <span>{song.mood}</span>
                      <span>{song.duration}</span>
                    </div>

                    {/* Controls */}
                    <div className="flex gap-4 pt-4">
                      <button
                        onClick={() => setPlaying(playing === song.id ? null : song.id)}
                        className="btn-sin-primary text-xs"
                      >
                        {playing === song.id ? "Pause" : "Play"}
                      </button>
                      <button
                        onClick={() => setShowLyrics(showLyrics === song.id ? null : song.id)}
                        className="btn-sin-secondary text-xs"
                      >
                        {showLyrics === song.id ? "Hide" : "Lyrics"}
                      </button>
                    </div>

                    {/* Lyrics */}
                    {showLyrics === song.id && (
                      <div className="mt-6 pt-6 border-t border-gold/20">
                        <pre className="font-mono text-xs font-light text-off-white/60 leading-relaxed whitespace-pre-wrap">
                          {song.lyrics}
                        </pre>
                      </div>
                    )}
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
              Stream everywhere.
            </h2>
            <p className="text-sm font-light text-off-white/60">
              Spotify, Apple Music, YouTube Music, and all major platforms.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
