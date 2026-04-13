"use client";

import { FormEvent, useState } from "react";
import { submitConfession } from "@/lib/confessions";
import { Confession } from "@/lib/supabase";

const CATEGORIES = [
  { value: "prayer_request", label: "Prayer Request" },
  { value: "praise", label: "Praise & Thanksgiving" },
  { value: "confession", label: "Confession" },
  { value: "testimony", label: "Testimony" },
];

export default function ConfessionForm() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState<Confession["category"]>("prayer_request");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const ip = await fetch("/api/ip").then((r) => r.json()).then((d) => d.ip || "0.0.0.0");

      const result = await submitConfession(text, category, ip);

      if (result) {
        setText("");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="sacred-card border-sacred-gold border-2 text-center space-y-4">
        <div className="text-4xl text-sacred-gold">✓</div>
        <h3 className="font-playfair text-2xl">Thank You</h3>
        <p className="text-sm text-sacred-cream opacity-80">
          Your confession has been received. A pastor will review it shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="sacred-card space-y-6">
      <div>
        <label htmlFor="category" className="block text-sm font-semibold mb-2 text-sacred-gold">
          What would you like to share?
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value as Confession["category"])}
          className="w-full bg-sacred-purple border border-sacred-gold border-opacity-30 rounded px-4 py-2 text-sacred-cream focus:border-opacity-100"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat.value} value={cat.value} className="bg-sacred-purple-dark">
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="text" className="block text-sm font-semibold mb-2 text-sacred-gold">
          Your Message (max 500 characters)
        </label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, 500))}
          placeholder="Share your heart here..."
          rows={6}
          className="w-full bg-sacred-purple border border-sacred-gold border-opacity-30 rounded px-4 py-3 text-sacred-cream placeholder-sacred-cream placeholder-opacity-40 focus:border-opacity-100 resize-none"
        />
        <p className="text-xs text-sacred-cream opacity-60 mt-2">
          {text.length}/500
        </p>
      </div>

      {error && (
        <div className="bg-red-900 bg-opacity-30 border border-red-500 rounded px-4 py-2 text-red-200 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || !text.trim()}
        className="btn-sacred-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit Confession"}
      </button>

      <p className="text-xs text-sacred-cream opacity-60 text-center">
        Your submission is completely anonymous. Your IP is not stored.
      </p>
    </form>
  );
}
