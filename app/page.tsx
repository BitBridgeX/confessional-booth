import Navigation from "@/components/Navigation";
import Link from "next/link";
import CookieMamiAvatar from "@/components/CookieMamiAvatar";
import EmailCapture from "@/components/EmailCapture";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-cream">

        {/* HERO */}
        <section className="relative px-4 md:px-8 py-40 md:py-56">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="flex justify-center mb-8">
              <CookieMamiAvatar size={100} className="opacity-95" />
            </div>

            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-thin tracking-widest">
                Confessional
              </h1>
              
              <p className="text-base md:text-lg font-light text-off-white/70 max-w-2xl mx-auto leading-relaxed">
                A space where desire meets devotion. Confess without shame. Discover ritual as pleasure.
              </p>
            </div>

            {/* Primary actions */}
            <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
              <Link href="/confessions" className="btn-sin-primary">
                Enter
              </Link>
              <Link href="/merch" className="btn-sin-secondary">
                Explore
              </Link>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mt-12" />
          </div>
        </section>

        {/* THE RITUAL */}
        <section className="px-4 md:px-8 py-32 border-t border-gold/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light tracking-widest mb-16 text-center">
              The Ritual
            </h2>

            <div className="grid md:grid-cols-3 gap-16 md:gap-8">
              {[
                {
                  num: "I",
                  title: "Confess",
                  text: "Share your truths in sacred space. Anonymous. No judgment."
                },
                {
                  num: "II",
                  title: "Receive",
                  text: "Wisdom from those who understand. Responses. Absolution."
                },
                {
                  num: "III",
                  title: "Transform",
                  text: "Pleasure becomes prayer. Shame dissolves. You reclaim yourself."
                }
              ].map((item) => (
                <div key={item.num} className="space-y-4 text-center border-b md:border-b-0 md:border-r md:last:border-r-0 border-gold/20 pb-8 md:pb-0">
                  <div className="text-4xl font-thin tracking-widest text-gold">
                    {item.num}
                  </div>
                  <h3 className="text-lg font-light tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-off-white/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <Link href="/confessions" className="btn-sin-primary">
                Confess Now
              </Link>
            </div>
          </div>
        </section>

        {/* OFFERINGS */}
        <section className="px-4 md:px-8 py-32 bg-charcoal border-t border-gold/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light tracking-widest mb-24 text-center">
              Offerings
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Confessions */}
              <div className="sin-card">
                <h3 className="text-2xl font-light tracking-wide mb-6">
                  Confessions
                </h3>
                <p className="text-sm font-light text-off-white/70 leading-relaxed mb-8">
                  A digital sanctuary for your private truths. Share what cannot be said elsewhere.
                </p>
                <Link href="/confessions" className="btn-sin-primary">
                  Enter Confessional
                </Link>
              </div>

              {/* Shop */}
              <div className="sin-card">
                <h3 className="text-2xl font-light tracking-wide mb-6">
                  Shop
                </h3>
                <p className="text-sm font-light text-off-white/70 leading-relaxed mb-8">
                  Curated objects of desire. Apparel, pleasure, nourishment, and art.
                </p>
                <Link href="/merch" className="btn-sin-primary">
                  Browse Collection
                </Link>
              </div>

              {/* Podcast */}
              <div className="sin-card">
                <h3 className="text-2xl font-light tracking-wide mb-6">
                  Podcast
                </h3>
                <p className="text-sm font-light text-off-white/70 leading-relaxed mb-8">
                  Listen to raw conversation. Confessions read aloud. Wisdom shared.
                </p>
                <Link href="/podcast" className="btn-sin-primary">
                  Listen
                </Link>
              </div>

              {/* Music */}
              <div className="sin-card">
                <h3 className="text-2xl font-light tracking-wide mb-6">
                  Music
                </h3>
                <p className="text-sm font-light text-off-white/70 leading-relaxed mb-8">
                  Tracks that heal. Hymns that seduce. Sounds for sacred solitude.
                </p>
                <Link href="/music" className="btn-sin-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="px-4 md:px-8 py-32 border-t border-gold/20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-8">
              Stay Close
            </h2>
            <p className="text-sm font-light text-off-white/60 mb-12">
              Receive invitations to new rituals. Access to exclusive content.
            </p>
            <EmailCapture />
          </div>
        </section>

        {/* Social & Footer */}
        <section className="px-4 md:px-8 py-16 border-t border-gold/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <SocialLinks />
            </div>
            <div className="text-center text-xs font-light text-off-white/40 space-y-2">
              <p>All submissions anonymous. No data sold.</p>
              <p>Sacred space for all seekers.</p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
