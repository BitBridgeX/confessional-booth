"use client";

import { useState, FormEvent } from "react";
import CookieMamiAvatar from "./CookieMamiAvatar";

interface EmailCaptureProps {
  variant?: "inline" | "modal" | "banner";
  className?: string;
}

const COOKIE_MAMI_PROMPTS = [
  "Want Cookie Mami in your inbox? Of course you do.",
  "New episodes. New drops. New sins. Subscribe.",
  "Don't miss the next confession reading. Sign up.",
  "Cookie Mami only emails when she has something good. That's always.",
];

export default function EmailCapture({ variant = "inline", className = "" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const prompt = COOKIE_MAMI_PROMPTS[Math.floor(Math.random() * COOKIE_MAMI_PROMPTS.length)];

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: connect to email service (Mailchimp, Resend, etc.)
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className={`sin-card text-center space-y-4 ${className}`}>
        <CookieMamiAvatar size={60} className="mx-auto" />
        <p className="font-playfair text-xl gradient-pink">You&apos;re in, sinner.</p>
        <p className="font-handwritten text-lg text-neon-pink">
          &ldquo;Cookie Mami will be in touch. Check your spam folder — she ends up there sometimes.&rdquo;
        </p>
      </div>
    );
  }

  return (
    <div className={`sin-card space-y-4 ${className}`}>
      <div className="flex items-center gap-4">
        <CookieMamiAvatar size={60} className="flex-shrink-0" />
        <div>
          <h3 className="font-playfair text-xl">Get the Newsletter</h3>
          <p className="text-sm text-blush/60">{prompt}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="sinner@holyfans.com"
          required
          className="flex-1 bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink text-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-sin-primary px-5 py-3 disabled:opacity-50 flex-shrink-0"
        >
          {loading ? "🍪" : "Subscribe"}
        </button>
      </form>

      <p className="text-xs text-blush/30 text-center">
        No spam. Only sins. Unsubscribe anytime.
      </p>
    </div>
  );
}
