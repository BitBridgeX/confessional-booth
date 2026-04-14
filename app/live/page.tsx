"use client";

import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

const MOCK_MESSAGES = [
  { id: 1, user: "sinner_99", text: "Cookie Mami I have a confession", time: "just now" },
  { id: 2, user: "holyfan42", text: "this is SO good", time: "1m" },
  { id: 3, user: "repent_daily", text: "first time here and I'm already a changed person", time: "2m" },
  { id: 4, user: "cookie_devotee", text: "COOKIE MAMI WE LOVE YOU", time: "3m" },
  { id: 5, user: "late_night_scroller", text: "I confessed last week and she read mine on air", time: "4m" },
];

// Next livestream: 48 hours from now
const NEXT_STREAM = new Date(Date.now() + 48 * 60 * 60 * 1000);

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = NEXT_STREAM.getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="bg-charcoal border border-gold/30 rounded p-4 mb-2">
            <p className="text-3xl font-light text-gold">
              {String(item.value).padStart(2, "0")}
            </p>
          </div>
          <p className="text-xs font-light text-off-white/50 tracking-widest">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function LivePage() {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [newMsg, setNewMsg] = useState("");
  const [viewerCount, setViewerCount] = useState(247);
  const [isLive] = useState(false); // Set to false for countdown demo

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(v => v + Math.floor(Math.random() * 5) - 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setMessages(prev => [{
      id: Date.now(),
      user: "you",
      text: newMsg,
      time: "just now",
    }, ...prev.slice(0, 49)]);
    setNewMsg("");
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black pt-16">
        
        {/* HEADER */}
        <section className="px-4 md:px-8 py-16 border-b border-gold/20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-light tracking-widest">
              Live
            </h1>
            <p className="text-sm font-light text-off-white/60">
              Cookie Mami's Confessional Stream
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        {isLive ? (
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row h-[calc(100vh-200px)] gap-8 px-4 md:px-8 py-8">
            {/* PLAYER */}
            <div className="flex-1 flex flex-col space-y-4">
              <div className="relative bg-charcoal aspect-video lg:flex-1 rounded flex items-center justify-center border border-gold/20">
                <div className="text-center space-y-4">
                  <p className="text-2xl font-light text-gold">Live Stream</p>
                  <p className="text-sm font-light text-off-white/50">
                    Mux player integration coming soon
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gold">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs font-light">LIVE NOW</span>
                  </div>
                </div>
              </div>

              {/* Stream Info */}
              <div className="sin-card">
                <h2 className="text-lg font-light tracking-wide mb-2">
                  Confessional Stream
                </h2>
                <p className="text-sm font-light text-off-white/60">
                  Live confession readings, community prayer, and Cookie Mami's divine wisdom.
                </p>
              </div>
            </div>

            {/* CHAT */}
            <div className="w-full lg:w-80 flex flex-col border-l border-gold/20">
              <div className="p-4 border-b border-gold/20">
                <h3 className="text-lg font-light tracking-wide">
                  Live Chat
                </h3>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg) => (
                  <div key={msg.id} className="space-y-1">
                    <p className="text-xs font-light text-gold">
                      {msg.user}
                    </p>
                    <p className="text-sm font-light text-off-white/70">
                      {msg.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={sendMessage} className="p-4 border-t border-gold/20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMsg}
                    onChange={e => setNewMsg(e.target.value)}
                    placeholder="Say something..."
                    className="flex-1 bg-charcoal border border-gold/30 rounded px-3 py-2 text-sm font-light text-cream placeholder-off-white/30 focus:border-gold"
                  />
                  <button type="submit" className="btn-sin-primary text-xs py-2 px-4">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          /* NOT LIVE - COUNTDOWN */
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-24 space-y-16">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-light tracking-wide">
                Next Stream Coming Soon
              </h2>
              <p className="text-base font-light text-off-white/60 max-w-2xl mx-auto">
                Cookie Mami is resting. The booth will open soon. Prepare your confessions.
              </p>
            </div>

            {/* COUNTDOWN TIMER */}
            <div className="sin-card space-y-8">
              <div className="text-center space-y-4">
                <p className="text-sm font-light text-gold tracking-widest">
                  Time Until Live
                </p>
              </div>
              <Countdown />
              <div className="text-center text-xs font-light text-off-white/40">
                {NEXT_STREAM.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="text-center space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-light text-off-white/60">
                  Get notified when we go live
                </p>
                <div className="flex flex-col md:flex-row gap-3 justify-center">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="px-4 py-2 bg-charcoal border border-gold/30 rounded text-sm font-light text-cream placeholder-off-white/30 focus:border-gold"
                  />
                  <button className="btn-sin-primary text-sm py-2 px-6">
                    Notify Me
                  </button>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                <Link href="/podcast" className="btn-sin-secondary text-sm">
                  Listen to Podcast
                </Link>
                <Link href="/confessions" className="btn-sin-secondary text-sm">
                  Confess Now
                </Link>
              </div>
            </div>

            {/* SCHEDULE */}
            <div className="text-center space-y-6 pt-12 border-t border-gold/20">
              <h3 className="text-lg font-light tracking-wide">
                Stream Schedule
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { day: "Tuesday", time: "8pm EST", desc: "Confession Stream" },
                  { day: "Thursday", time: "10pm EST", desc: "Music Session" },
                  { day: "Sunday", time: "6pm EST", desc: "Ritual Circle" },
                ].map((slot, i) => (
                  <div key={i} className="sin-card space-y-2">
                    <p className="text-xs font-light text-gold tracking-widest">
                      {slot.day}
                    </p>
                    <p className="text-lg font-light">
                      {slot.time}
                    </p>
                    <p className="text-xs font-light text-off-white/50">
                      {slot.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
