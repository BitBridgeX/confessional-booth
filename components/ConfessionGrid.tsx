"use client";

import { Confession } from "@/lib/supabase";
import { useState } from "react";
import { incrementPrayerCount } from "@/lib/confessions";

interface ConfessionGridProps {
  confessions: Confession[];
}

const CATEGORY_ICONS: Record<Confession["category"], string> = {
  prayer_request: "🙏",
  praise: "",
  confession: "💔",
  testimony: "",
};

export default function ConfessionGrid({ confessions }: ConfessionGridProps) {
  const [prayerCounts, setPrayerCounts] = useState<Record<string, number>>(
    Object.fromEntries(confessions.map((c) => [c.id, c.prayer_count ?? 0]))
  );

  async function handlePray(id: string) {
    await incrementPrayerCount(id);
    setPrayerCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

  if (!confessions.length) {
    return (
      <div className="text-center py-12 text-sacred-cream opacity-60">
        No confessions yet. Be the first to share.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {confessions.map((confession) => (
        <div key={confession.id} className="sacred-card sacred-card-hover group">
          <div className="flex items-start justify-between mb-3">
            <span className="text-2xl">
              {CATEGORY_ICONS[confession.category]}
            </span>
            <span className="text-xs text-sacred-gold opacity-60 capitalize">
              {confession.category.replace("_", " ")}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-sacred-cream mb-4">
            {confession.text}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-sacred-gold border-opacity-20">
            <button
              onClick={() => handlePray(confession.id)}
              className="text-xs text-sacred-gold hover:text-sacred-gold-light transition-colors flex items-center space-x-2"
            >
              <span>🙏</span>
              <span>Praying ({prayerCounts[confession.id] || 0})</span>
            </button>
            <span className="text-xs text-sacred-cream opacity-40">
              {confession.created_at ? new Date(confession.created_at).toLocaleDateString() : ""}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
