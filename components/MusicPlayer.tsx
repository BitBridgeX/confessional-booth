"use client";

import { MusicTrack } from "@/lib/supabase";
import { useState, useRef } from "react";

interface MusicPlayerProps {
  track: MusicTrack;
  autoPlay?: boolean;
}

export default function MusicPlayer({ track, autoPlay = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  function togglePlay() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  function handleTimeUpdate() {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }

  function handleLoadedMetadata() {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }

  function handleProgressChange(e: React.ChangeEvent<HTMLInputElement>) {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }

  const formatTime = (time: number) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="sacred-card space-y-4">
      <audio
        ref={audioRef}
        src={track.audio_url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        autoPlay={autoPlay}
      />

      <div>
        <h4 className="font-playfair text-lg mb-1">{track.title}</h4>
        <p className="text-sm text-sacred-gold opacity-80">{track.artist}</p>
        <div className="flex space-x-2 text-xs text-sacred-cream opacity-60 mt-2">
          <span className="bg-sacred-purple px-2 py-1 rounded">{track.genre}</span>
          <span className="bg-sacred-purple px-2 py-1 rounded">{track.mood}</span>
        </div>
      </div>

      <div className="space-y-2">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full h-2 bg-sacred-purple rounded cursor-pointer accent-sacred-gold"
        />
        <div className="flex justify-between text-xs text-sacred-cream opacity-60">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="btn-sacred-primary flex items-center space-x-2 flex-1 justify-center"
        >
          <span>{isPlaying ? "⏸" : "▶"}</span>
          <span>{isPlaying ? "Pause" : "Play"}</span>
        </button>
        <a
          href={track.audio_url}
          download
          className="btn-sacred-secondary px-4 py-3"
          title="Download"
        >
          ⬇
        </a>
      </div>
    </div>
  );
}
