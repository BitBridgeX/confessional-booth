"use client";

import Navigation from "@/components/Navigation";
import ConfessionForm from "@/components/ConfessionForm";
import Link from "next/link";

const RECENT_CONFESSIONS = [
  { text: "I have 47 browser tabs open and I refuse to close any of them.", category: "screen_time", cookie_response: "That's not a confession, that's a cry for help. 47? ROOKIE NUMBERS. 🍪", prayers: 23 },
  { text: "I liked my ex's photo from 2019 at 3am and then unliked it but they already saw.", category: "late_night", cookie_response: "Baby, that's not a sin... that's a CRIME. Go to internet jail. 🚔", prayers: 45 },
  { text: "I've been using my roommate's Netflix password for 4 years. They moved out 2 years ago.", category: "subscription", cookie_response: "Resourceful. Cookie Mami respects the hustle. Say 2 Hail Cookies and carry on. 🍪", prayers: 67 },
  { text: "I pretend to be on mute during Zoom calls but I'm actually eating cereal.", category: "other", cookie_response: "We ALL do that. The real sin is that you're eating cereal and not my cookies. 🍪💅", prayers: 31 },
  { text: "I've been telling everyone I read that book but I only watched the TikTok summary.", category: "guilty_search", cookie_response: "Honey, that's basically a PhD in 2024. You're fine. Now buy a t-shirt. 👕", prayers: 52 },
  { text: "I used my boss's corporate card to buy the premium version of a dating app.", category: "subscription", cookie_response: "CHAOTIC. I love it. Your penance is finding love AND keeping the job. Good luck. 😈🔥", prayers: 89 },
];

export default function ConfessionsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Header */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-hot-pink/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-royal-purple/20 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <div className="text-7xl animate-float">🔥</div>
            <h1 className="font-playfair text-5xl md:text-6xl font-black">
              <span className="gradient-pink">The Confessional</span>
            </h1>
            <p className="text-xl text-blush/80">
              Step into the booth. Confess your digital sins to Cookie Mami.
              She&apos;ll respond with divine sass, questionable wisdom, and maybe a cookie.
            </p>
          </div>
        </section>

        {/* Confession Form */}
        <section className="max-w-2xl mx-auto py-12 px-4">
          <ConfessionForm />
        </section>

        <div className="divider-sin max-w-4xl mx-auto" />

        {/* Recent Confessions (Community Wall) */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="font-playfair text-3xl text-center mb-12">
            <span className="gradient-gold">The Wall of Sin</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {RECENT_CONFESSIONS.map((confession, i) => (
              <div key={i} className="sin-card space-y-4">
                <p className="text-blush/80 italic">&ldquo;{confession.text}&rdquo;</p>
                <div className="cookie-bubble !p-4">
                  <p className="font-handwritten text-lg text-neon-pink">
                    🍪 {confession.cookie_response}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-blush/40">
                  <button className="hover:text-hot-pink transition-colors">
                    🙏 Praying ({confession.prayers})
                  </button>
                  <span>Anonymous Sinner</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="font-handwritten text-3xl text-neon-pink">
              &ldquo;The booth is always open. Cookie Mami never sleeps.&rdquo; 🍪
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/merch" className="btn-sin-gold">
                Buy Penance Merch 🛍️
              </Link>
              <Link href="/podcast" className="btn-sin-secondary">
                Hear Confessions on Air 🎙️
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
