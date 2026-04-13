"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CookieMamiAvatar from "@/components/CookieMamiAvatar";

const LINES = [
  "The booth is open.",
  "Cookie Mami is listening.",
  "Are you ready to confess?",
];

export default function EnterPage() {
  const router = useRouter();
  const [lineIndex, setLineIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (lineIndex >= LINES.length - 1) return;
    const t1 = setTimeout(() => setVisible(false), 1800);
    const t2 = setTimeout(() => {
      setLineIndex(i => i + 1);
      setVisible(true);
    }, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [lineIndex]);

  function handleEnter() {
    setEntered(true);
    setTimeout(() => router.push("/"), 800);
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-dark-velvet overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hot-pink/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-royal-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hot-pink/3 rounded-full blur-3xl" />
      </div>

      {/* Cross pattern background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 10 L25 50 M10 25 L50 25' stroke='%23D4AF37' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px"
      }} />

      {entered && (
        <div className="absolute inset-0 bg-hot-pink/20 animate-pulse-sin" />
      )}

      <div className={`relative text-center space-y-12 transition-all duration-700 ${entered ? "scale-110 opacity-0" : "scale-100 opacity-100"}`}>
        {/* Avatar */}
        <div className="flex justify-center">
          <CookieMamiAvatar size={160} animated className="drop-shadow-2xl" />
        </div>

        {/* Animated text */}
        <div className="h-12 flex items-center justify-center">
          <p
            className={`font-handwritten text-3xl md:text-4xl text-neon-pink transition-all duration-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {LINES[lineIndex]}
          </p>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="font-playfair text-6xl md:text-8xl font-black">
            <span className="gradient-pink neon-text">Confessional</span>
          </h1>
          <h2 className="font-playfair text-4xl md:text-6xl font-black gradient-gold">
            Booth
          </h2>
        </div>

        {/* Enter button */}
        <div className="space-y-4">
          <button
            onClick={handleEnter}
            className="group relative btn-sin-primary text-xl py-6 px-16 animate-glow"
          >
            <span className="relative z-10">Enter the Booth</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-hot-pink via-royal-purple to-hot-pink opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
          </button>
          <p className="text-xs text-blush/30">18+ only. You know why.</p>
        </div>

        {/* Tiers teaser */}
        <div className="flex justify-center gap-6">
          {[
            { name: "Free", icon: "🙏", desc: "Confess & Browse" },
            { name: "Member", icon: "🔥", desc: "$19/mo" },
            { name: "Inner Circle", icon: "👑", desc: "$49/mo" },
          ].map((tier) => (
            <div key={tier.name} className="text-center opacity-60 hover:opacity-100 transition-opacity">
              <div className="text-2xl mb-1">{tier.icon}</div>
              <p className="text-xs text-blush/60">{tier.name}</p>
              <p className="text-xs text-hot-pink">{tier.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
