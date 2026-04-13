"use client";

import { Episode } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  const date = new Date(episode.release_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/podcast/${episode.id}`}>
      <div className="sacred-card sacred-card-hover group cursor-pointer">
        {episode.artwork_url && (
          <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-sacred-purple">
            <Image
              src={episode.artwork_url}
              alt={episode.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="space-y-2">
          <p className="text-sm text-sacred-gold">{date}</p>
          <h3 className="font-playfair text-xl font-semibold group-hover:text-sacred-gold transition-colors">
            {episode.title}
          </h3>
          <p className="text-sm text-sacred-cream opacity-80">{episode.speaker}</p>
          <p className="text-xs text-sacred-cream opacity-60 line-clamp-2">
            {episode.description}
          </p>
          <div className="pt-2 flex items-center space-x-2 text-xs text-sacred-gold">
            <span>▶</span>
            <span>{episode.duration || "58 min"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
