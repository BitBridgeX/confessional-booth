"use client";

import { FormEvent, useState } from "react";

const CATEGORIES = [
  { value: "screen_time", label: " Excessive Screen Time" },
  { value: "guilty_search", label: "🔍 Guilty Search History" },
  { value: "subscription", label: " Secret Subscriptions" },
  { value: "dm_sins", label: "💬 DM Sins" },
  { value: "late_night", label: "🌙 3AM Scrolling" },
  { value: "catfish", label: "🐱 Catfishing" },
  { value: "other", label: "😈 Other Digital Sin" },
];

const COOKIE_MAMI_RESPONSES = [
  {
    text: "Oh baby, that's not even your worst sin and we both know it. But Cookie Mami forgives you... this time. ",
    severity: "mild",
  },
  {
    text: "Mmm, now THAT'S a confession. You've been very, very naughty. I'm gonna need you to buy some merch as penance. 💋",
    severity: "spicy",
  },
  {
    text: "Honey... I've heard worse. Actually, no I haven't. Report to my office immediately. Bring cookies. 😈",
    severity: "wild",
  },
  {
    text: "The devil works hard, but you work harder. I'm impressed AND concerned. Here's your cookie of shame. ",
    severity: "nuclear",
  },
  {
    text: "That's kinda sweet, actually. In a twisted, deeply concerning way. Cookie Mami approves. Now go say 3 Hail Cookies. 🙏",
    severity: "wholesome",
  },
  {
    text: "You typed that with your whole chest, huh? Bold. I respect it. Your penance is 10 minutes of my podcast. ",
    severity: "sassy",
  },
  {
    text: "Oh you thought you could shock ME? Sweetheart, I invented that sin. Amateur hour is OVER. Level up. 👑",
    severity: "iconic",
  },
];

export default function ConfessionForm() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("other");
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState<(typeof COOKIE_MAMI_RESPONSES)[0] | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Simulate Cookie Mami "reading" the confession
    setTimeout(() => {
      const randomResponse =
        COOKIE_MAMI_RESPONSES[Math.floor(Math.random() * COOKIE_MAMI_RESPONSES.length)];
      setResponse(randomResponse);
      setSubmitted(true);
      setLoading(false);
    }, 2000);
  }

  function reset() {
    setText("");
    setCategory("other");
    setSubmitted(false);
    setResponse(null);
  }

  if (submitted && response) {
    return (
      <div className="space-y-6">
        {/* The confession */}
        <div className="sin-card border-hot-pink/30">
          <p className="text-xs text-blush/40 mb-2 uppercase tracking-wider">Your Confession</p>
          <p className="text-blush/80 italic">&ldquo;{text}&rdquo;</p>
        </div>

        {/* Cookie Mami's response */}
        <div className="cookie-bubble animate-glow">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl animate-float"></span>
            <div>
              <p className="font-playfair text-lg gradient-pink">Cookie Mami</p>
              <span className="badge badge-pink text-[10px]">{response.severity}</span>
            </div>
          </div>
          <p className="font-handwritten text-2xl text-neon-pink leading-relaxed">
            {response.text}
          </p>
        </div>

        <div className="flex gap-4">
          <button onClick={reset} className="btn-sin-primary flex-1">
            Confess Again 
          </button>
          <a href="/merch" className="btn-sin-gold flex-1 text-center">
            Buy Penance 
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="sin-card space-y-6">
      <div className="text-center mb-4">
        <span className="text-5xl animate-float inline-block"></span>
        <h3 className="font-playfair text-2xl mt-2">
          <span className="gradient-pink">Cookie Mami</span> is listening...
        </h3>
      </div>

      <div>
        <label className="block text-sm font-bold mb-2 text-hot-pink uppercase tracking-wider">
          Type of Sin
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush focus:border-hot-pink"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat.value} value={cat.value} className="bg-dark-velvet">
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold mb-2 text-hot-pink uppercase tracking-wider">
          Confess (max 500 characters)
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, 500))}
          placeholder="Tell Cookie Mami everything... she's heard worse, trust. 😈"
          rows={5}
          className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink resize-none"
        />
        <div className="flex justify-between text-xs text-blush/40 mt-2">
          <span>{text.length}/500</span>
          <span>100% anonymous</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading || !text.trim()}
        className="btn-sin-primary w-full text-lg disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="animate-pulse-sin inline-block">
             Cookie Mami is reading your sins...
          </span>
        ) : (
          "Submit Confession "
        )}
      </button>

      <p className="text-center text-xs text-blush/30">
        Your confession is anonymous. Cookie Mami may read it on the podcast. 
      </p>
    </form>
  );
}
