"use client";

import Navigation from "@/components/Navigation";
import ConfessionForm from "@/components/ConfessionForm";
import Link from "next/link";

const RECENT_CONFESSIONS = [
  { text: "I have 47 browser tabs open and I refuse to close any of them.", category: "screen_time", cookie_response: "That's not a confession. That's a cry for help. Rookie numbers.", prayers: 23 },
  { text: "I liked my ex's photo from 2019 at 3am and then unliked it but they already saw.", category: "late_night", cookie_response: "That's not a sin. That's a crime. Go to internet jail.", prayers: 45 },
  { text: "I've been using my roommate's Netflix password for 4 years. They moved out 2 years ago.", category: "subscription", cookie_response: "Resourceful. Cookie Mami respects the hustle. Say 2 Hail Cookies and carry on.", prayers: 67 },
  { text: "I pretend to be on mute during Zoom calls but I'm actually eating cereal.", category: "other", cookie_response: "We all do that. The real sin is that you're eating cereal and not my cookies.", prayers: 31 },
  { text: "I've been telling everyone I read that book but I only watched the TikTok summary.", category: "guilty_search", cookie_response: "Basically a PhD in 2024. You're fine. Now buy a t-shirt.", prayers: 52 },
  { text: "I used my boss's corporate card to buy the premium version of a dating app.", category: "subscription", cookie_response: "Chaotic energy. Your penance is finding love AND keeping the job.", prayers: 89 },
];

export default function ConfessionsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black pt-16">
        
        {/* Header */}
        <section className="px-4 md:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h1 className="text-4xl md:text-6xl font-thin tracking-widest">
              Confessional
            </h1>
            <p className="text-base md:text-lg font-light text-off-white/70 max-w-2xl mx-auto">
              Step into sacred space. Share your truth without shame. Cookie Mami listens.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="px-4 md:px-8 py-16 border-t border-gold/20">
          <div className="max-w-2xl mx-auto">
            <ConfessionForm />
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-16" />

        {/* Wall of Confessions */}
        <section className="px-4 md:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light tracking-wide text-center mb-16">
              Shared Confessions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {RECENT_CONFESSIONS.map((confession, i) => (
                <div key={i} className="sin-card space-y-6">
                  <p className="text-base font-light text-off-white/70 italic">
                    {confession.text}
                  </p>
                  <div className="pt-4 border-t border-gold/20 space-y-3">
                    <p className="text-sm font-light text-gold">
                      From Cookie Mami:
                    </p>
                    <p className="text-sm font-light text-off-white/60">
                      {confession.cookie_response}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-light text-off-white/40 pt-4">
                    <button className="hover:text-gold transition-colors">
                      Prayer ({confession.prayers})
                    </button>
                    <span>Anonymous</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 md:px-8 py-32 border-t border-gold/20">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-2xl font-light tracking-wide">
              The booth is always open.
            </h2>
            <p className="text-sm font-light text-off-white/60">
              Your voice. Your truth. No judgment.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/merch" className="btn-sin-primary">
                Shop
              </Link>
              <Link href="/podcast" className="btn-sin-secondary">
                Listen on Podcast
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
