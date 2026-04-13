"use client";

import Navigation from "@/components/Navigation";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

const SEARCH_INDEX = [
  // Episodes
  { type: "episode", title: "Confessions of a Serial Liker", desc: "Cookie Mami reads your thirstiest digital confessions", href: "/podcast/1", icon: "🎙️" },
  { type: "episode", title: "Holy Ghosted: When God Left You on Read", desc: "Why prayer feels like texting someone with read receipts off", href: "/podcast/2", icon: "🎙️" },
  { type: "episode", title: "Confessions of a Doubter", desc: "Testimonial about wrestling with faith", href: "/podcast/3", icon: "🎙️" },
  // Merch
  { type: "merch", title: "Forgive Me Daddy Tee", desc: "Classic fit, sinfully soft cotton — $29.99", href: "/merch/a1", icon: "👕" },
  { type: "merch", title: "Cookie Mami Hoodie", desc: "Oversized, cozy, sinful — $54.99", href: "/merch/a7", icon: "🧥" },
  { type: "merch", title: "Cookie Mami's Signature Cookie Box", desc: "12 artisan cookies — $29.99", href: "/merch/f1", icon: "🍪" },
  { type: "merch", title: "Holy Night Lace Set", desc: "Bralette + thong, black lace — $49.99", href: "/merch/l1", icon: "🖤" },
  { type: "merch", title: "Holy Vibrations Smart Vibe", desc: "App-controlled, 10 patterns — $79.99", href: "/merch/t1", icon: "🔥" },
  { type: "merch", title: "Repent Paddle", desc: "Leather paddle, leaves REPENT — $29.99", href: "/merch/t5", icon: "⛓️" },
  // Music
  { type: "music", title: "Confess (feat. Cookie Mami)", desc: "Dark R&B — 3:42", href: "/music/1", icon: "🎵" },
  { type: "music", title: "Holy Water", desc: "Gospel Trap — 4:15", href: "/music/2", icon: "🎵" },
  { type: "music", title: "Pray Position", desc: "Bedroom Pop — 3:28", href: "/music/3", icon: "🎵" },
  // Scriptures
  { type: "scripture", title: "The Book of First Clicks", desc: "And Cookie Mami said: Let there be WiFi", href: "/book#scripture-1", icon: "📜" },
  { type: "scripture", title: "Commandment of the Screen", desc: "Thou shalt not screenshot and share. Unless it's funny.", href: "/book#scripture-3", icon: "📜" },
  { type: "scripture", title: "The Gospel of Self-Care", desc: "Love thyself FIRST. Buy candles. Take baths.", href: "/book#scripture-5", icon: "📜" },
  { type: "scripture", title: "The Psalm of the Block Button", desc: "I shall fear no DM. For my block button is with me.", href: "/book#scripture-9", icon: "📜" },
];

const TYPE_LABELS: Record<string, string> = {
  episode: "Episode",
  merch: "Merch",
  music: "Track",
  scripture: "Scripture",
};

const TYPE_COLORS: Record<string, string> = {
  episode: "badge-purple",
  merch: "badge-gold",
  music: "badge-pink",
  scripture: "badge-pink",
};

function SearchResults() {
  const params = useSearchParams();
  const query = params.get("q") || "";

  const results = query.trim().length < 2
    ? []
    : SEARCH_INDEX.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="font-playfair text-4xl mb-2">
            Search <span className="gradient-pink">Results</span>
          </h1>
          <p className="text-blush/50 mb-10">
            {query ? (
              <>
                {results.length} result{results.length !== 1 ? "s" : ""} for{" "}
                <span className="text-hot-pink">&ldquo;{query}&rdquo;</span>
              </>
            ) : "Enter a search term above"}
          </p>

          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((item, i) => (
                <Link key={i} href={item.href} className="sin-card sin-card-hover block group">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-playfair text-lg group-hover:text-hot-pink transition-colors">
                          {item.title}
                        </h3>
                        <span className={`badge ${TYPE_COLORS[item.type]} text-xs`}>
                          {TYPE_LABELS[item.type]}
                        </span>
                      </div>
                      <p className="text-sm text-blush/60">{item.desc}</p>
                    </div>
                    <span className="text-hot-pink opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.trim().length >= 2 ? (
            <div className="text-center py-16 space-y-4">
              <div className="text-6xl">🍪</div>
              <p className="font-playfair text-2xl text-blush/60">No results found</p>
              <p className="font-handwritten text-xl text-neon-pink">
                &ldquo;Cookie Mami hasn&apos;t made that yet. But give it time.&rdquo;
              </p>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-velvet flex items-center justify-center text-blush/40">Searching...</div>}>
      <SearchResults />
    </Suspense>
  );
}
