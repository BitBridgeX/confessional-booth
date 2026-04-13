"use client";

import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

const MOCK_MESSAGES = [
  { id: 1, user: "sinner_99", text: "Cookie Mami I have a confession 🔥", time: "just now" },
  { id: 2, user: "holyfan42", text: "this is SO good", time: "1m" },
  { id: 3, user: "repent_daily", text: "first time here and I'm already a changed person", time: "2m" },
  { id: 4, user: "cookie_devotee", text: "COOKIE MAMI WE LOVE YOU 🍪🍪🍪", time: "3m" },
  { id: 5, user: "late_night_scroller", text: "I confessed last week and she read mine on air 😭", time: "4m" },
];

export default function LivePage() {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [newMsg, setNewMsg] = useState("");
  const [viewerCount, setViewerCount] = useState(247);
  const [isLive] = useState(true);

  useEffect(() => {
    // Simulate viewer count fluctuation
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
      <main className="min-h-screen pt-16 bg-dark-velvet">
        {/* Live banner */}
        {isLive && (
          <div className="bg-hot-pink/20 border-b border-hot-pink/30 py-2 px-4 text-center text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-hot-pink animate-pulse-sin inline-block" />
              <span className="text-hot-pink font-bold">LIVE NOW</span>
              <span className="text-blush/60">— Cookie Mami&apos;s Absolution Stream</span>
              <span className="text-blush/40">👁 {viewerCount} watching</span>
            </span>
          </div>
        )}

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row h-[calc(100vh-80px)]">
          {/* Video Player */}
          <div className="flex-1 flex flex-col">
            {/* Player */}
            <div className="relative bg-black aspect-video lg:aspect-auto lg:flex-1">
              {isLive ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-gradient-to-br from-deep-plum via-dark-velvet to-black">
                  {/* Mux player placeholder */}
                  <div className="text-center space-y-4">
                    <div className="text-8xl animate-float">🍪</div>
                    <p className="font-playfair text-2xl gradient-pink">Cookie Mami is LIVE</p>
                    <p className="text-sm text-blush/60 max-w-sm">
                      Connect your Mux stream key to go live. Add <code className="text-hot-pink">MUX_STREAM_KEY</code> to env vars.
                    </p>
                    {/* Mux Player embed point */}
                    <div className="bg-hot-pink/5 border border-hot-pink/20 rounded-xl p-4 text-xs font-mono text-blush/30 text-left max-w-sm mx-auto">
                      {`<MuxPlayer\n  streamType="live"\n  playbackId={process.env.MUX_LIVE_PLAYBACK_ID}\n  autoPlay muted\n/>`}
                    </div>
                  </div>

                  {/* Fake live indicator */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-hot-pink px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse-sin" />
                    <span className="text-white text-xs font-black">LIVE</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-xs text-blush/60">
                    👁 {viewerCount}
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-dark-velvet">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">😴</div>
                    <p className="font-playfair text-2xl text-blush/60">Not Live Right Now</p>
                    <p className="text-sm text-blush/40">Cookie Mami is sleeping. Check back soon.</p>
                    <Link href="/podcast" className="btn-sin-secondary inline-block text-sm">
                      Listen to Podcast Instead
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Stream info */}
            <div className="p-4 border-t border-hot-pink/10 bg-dark-velvet/50 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-playfair text-xl">Cookie Mami&apos;s Absolution Stream</h2>
                  <p className="text-sm text-blush/50">Live confession readings + community prayer</p>
                </div>
                <div className="flex gap-3">
                  <button className="btn-sin-primary text-sm py-2 px-4">🙏 Pray</button>
                  <button className="btn-sin-secondary text-sm py-2 px-4">Share ↗</button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Sidebar */}
          <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-hot-pink/10 flex flex-col bg-dark-velvet/80 h-64 lg:h-auto">
            <div className="p-4 border-b border-hot-pink/10 flex items-center justify-between">
              <h3 className="font-playfair text-lg gradient-pink">Live Chat</h3>
              <span className="badge badge-pink text-xs">{messages.length} messages</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col-reverse">
              {messages.map((msg) => (
                <div key={msg.id} className="group">
                  <div className="flex items-start gap-2">
                    <span className="text-lg flex-shrink-0">
                      {msg.user === "you" ? "🍪" : "😈"}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className={`text-xs font-bold mr-2 ${msg.user === "you" ? "text-sacred-gold" : "text-hot-pink"}`}>
                        {msg.user}
                      </span>
                      <span className="text-sm text-blush/80 break-words">{msg.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat input */}
            <form onSubmit={sendMessage} className="p-4 border-t border-hot-pink/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMsg}
                  onChange={e => setNewMsg(e.target.value)}
                  placeholder="Say something sinful..."
                  className="flex-1 bg-dark-velvet border border-hot-pink/30 rounded-xl px-3 py-2 text-blush placeholder-blush/30 focus:border-hot-pink text-sm"
                />
                <button type="submit" className="btn-sin-primary px-4 py-2 text-sm">
                  →
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
