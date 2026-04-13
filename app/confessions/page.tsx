"use client";

import Navigation from "@/components/Navigation";
import ConfessionForm from "@/components/ConfessionForm";
import ConfessionGrid from "@/components/ConfessionGrid";
import { useState, useEffect } from "react";

export default function ConfessionsPage() {
  const [confessions, setConfessions] = useState([
    {
      id: "1",
      text: "Please pray for my family as we navigate a difficult season. Thank you.",
      category: "prayer_request" as const,
      status: "approved" as const,
      ip_hash: "",
      created_at: new Date().toISOString(),
      attribution: "anon" as const,
      prayer_count: 12,
    },
    {
      id: "2",
      text: "Grateful for the strength God gave me to forgive today.",
      category: "praise" as const,
      status: "approved" as const,
      ip_hash: "",
      created_at: new Date().toISOString(),
      attribution: "anon" as const,
      prayer_count: 8,
    },
    {
      id: "3",
      text: "I've been struggling with jealousy and pride. Help me surrender these to God.",
      category: "confession" as const,
      status: "approved" as const,
      ip_hash: "",
      created_at: new Date().toISOString(),
      attribution: "anon" as const,
      prayer_count: 15,
    },
  ]);

  useEffect(() => {
    // Load confessions from Supabase when component mounts
    // For now, using mock data
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-sacred-gradient py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-4xl">🙏</span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold">
                Confessions
              </h1>
            </div>
            <p className="text-lg text-sacred-cream opacity-90">
              A sacred space for anonymous prayers, confessions, and praise.
              Share your heart. Lift up your community.
            </p>
          </div>
        </section>

        {/* Submit Form */}
        <section className="max-w-2xl mx-auto py-16 px-4">
          <ConfessionForm />
        </section>

        {/* Community Confessions */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="font-playfair text-3xl mb-12">
            Pray Together: Community Confessions
          </h2>
          <ConfessionGrid confessions={confessions} />
        </section>

        {/* How It Works */}
        <section className="bg-sacred-gradient bg-opacity-30 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl mb-12 text-center">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: "1",
                  title: "Submit",
                  desc: "Share your prayer, confession, or praise anonymously.",
                },
                {
                  num: "2",
                  title: "Review",
                  desc: "Our pastoral team reviews submissions for appropriateness.",
                },
                {
                  num: "3",
                  title: "Pray",
                  desc: "Approved requests appear here for community intercession.",
                },
              ].map((step) => (
                <div key={step.num} className="sacred-card text-center space-y-3">
                  <div className="text-4xl font-playfair text-sacred-gold">
                    {step.num}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-sm text-sacred-cream opacity-80">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
