"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { useState } from "react";

const SONGS: Record<string, any> = {
  "1": {
    id: "1", title: "Confess (feat. Cookie Mami)", artist: "HolyFans", genre: "Dark R&B", mood: "Seductive", duration: "3:42",
    lyrics: `[Verse 1]
Step into the booth, baby, close the door
Tell me all the things you've been prayin' for
I can hear your heartbeat through the screen
Darkest thoughts you've ever had, filthiest dreams

[Pre-Chorus]
Don't be shy now, I've heard worse
Every secret, every curse
Lay it at my altar, let it go
Cookie Mami needs to know

[Chorus]
Confess, confess, let it all out
Cookie Mami hears you, there's no need to shout
Confess, confess, on your knees tonight
Every sin forgiven in the neon light

[Verse 2]
3AM scrolling, double-tap and lie
Guilty pleasures hidden in your history
Come a little closer, whisper in my ear
The dirtier the secret, the sweeter what you'll hear

[Bridge]
You think you're the only one?
Baby, everyone's undone
That's why we built this booth
To hold your sacred truth

[Outro]
Confess... confess...
Cookie Mami hears it all
Confess... confess...
Before you rise, you gotta fall`,
  },
  "2": {
    id: "2", title: "Holy Water", artist: "HolyFans ft. Sinner's Choir", genre: "Gospel Trap", mood: "Hype", duration: "4:15",
    lyrics: `[Intro]
Aye, aye, aye... (Cookie Mami's church is in session)
Everybody on your feet

[Verse 1]
Baptize me in the bassline, drown me in the beat
Every Sunday service got me moving to the heat
Pastor said be humble, Cookie Mami said be loud
Catching holy spirit in the middle of the crowd

[Hook]
We don't do quiet worship
We don't do sitting down
We bring the whole congregation
When Cookie Mami comes to town

[Chorus]
Pour that holy water on me, let me feel the rain
Wash away my search history, purify the pain
Holy water, holy water, running down my face
Every drop a blessing, every sin erased

[Verse 2]
Testify, testify, raise your phone up high
Screenshot this moment 'cause we're living divine
The collection plate is digital, Stripe approved
God accepts all cards, your soul has been moved

[Bridge]
We don't do quiet worship here
We don't do subtle, baby
Turn the bass up to eleven
Cookie Mami's church is READY

[Outro]
Holy water... pour it on me
Holy water... wash me clean
Holy water... Cookie Mami said so`,
  },
  "3": {
    id: "3", title: "Pray Position", artist: "Cookie Mami", genre: "Bedroom Pop", mood: "Intimate", duration: "3:28",
    lyrics: `[Verse 1]
Candles lit, the incense burning slow
Satin sheets like holy robes below
You say grace, I say your name instead
Communion wine is going to my head

[Pre-Chorus]
This ain't your grandmother's church
This is something that'll make you search
Every scripture for a loophole, babe
Because I've got you wanting to be saved

[Chorus]
Get in the pray position, baby
On your knees, just like I taught you, maybe
Hands together, eyes wide shut
This confession booth ain't closing up

[Verse 2]
Read me like your scripture, line by line
Every chapter better than the last time
I'm the sermon that you can't resist
Cookie Mami on your reading list

[Bridge]
Some pray at sunrise
Some pray at night
I pray we're still doing this
In the morning light

[Chorus]
Get in the pray position, baby
On your knees, just like I taught you, maybe
Hands together, eyes wide shut
This confession booth ain't closing up

[Outro]
Pray... with me
Pray... for me
Pray... Cookie Mami`,
  },
};

export default function TrackPage({ params }: { params: { id: string } }) {
  const song = SONGS[params.id] || SONGS["1"];
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <section className="relative py-16 px-4">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-1/3 w-72 h-72 bg-sacred-gold/10 rounded-full blur-3xl animate-float" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Link href="/music" className="text-hot-pink text-sm hover:text-neon-pink mb-8 inline-block">
              ← Back to Music
            </Link>
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="w-full md:w-64 h-64 rounded-2xl bg-gradient-to-br from-sacred-gold/30 via-hot-pink/20 to-royal-purple/40 flex-shrink-0 flex items-center justify-center text-8xl">
                
              </div>
              <div className="flex-1 space-y-4">
                <h1 className="font-playfair text-4xl font-bold">{song.title}</h1>
                <p className="text-hot-pink text-lg">{song.artist}</p>
                <div className="flex gap-2">
                  <span className="badge badge-pink">{song.genre}</span>
                  <span className="badge badge-purple">{song.mood}</span>
                  <span className="badge badge-gold">{song.duration}</span>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setPlaying(!playing)}
                    className="btn-sin-primary"
                  >
                    {playing ? "⏸ Pause" : "▶ Play"}
                  </button>
                  <button className="btn-sin-gold">⬇ Download</button>
                  <button className="btn-sin-secondary">Share ↗</button>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["Spotify", "Apple Music", "Tidal", "YouTube"].map(p => (
                    <a key={p} href="#" className="text-xs bg-hot-pink/10 text-hot-pink/80 px-3 py-1.5 rounded-full hover:bg-hot-pink/20">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Lyrics */}
            <div className="sin-card">
              <h2 className="font-playfair text-2xl gradient-gold mb-6">Lyrics</h2>
              <pre className="font-handwritten text-xl text-blush/80 whitespace-pre-wrap leading-relaxed">
                {song.lyrics}
              </pre>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="divider-sin mb-12" />
          <Link href="/merch?category=Digital+Products" className="btn-sin-gold inline-block mr-4">
            Buy This Track 
          </Link>
          <Link href="/music" className="btn-sin-secondary inline-block">
            More Music
          </Link>
        </section>
      </main>
    </>
  );
}
