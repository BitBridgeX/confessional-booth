"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/confessions", label: "Confess", icon: "🔥" },
    { href: "/podcast", label: "Podcast", icon: "🎙️" },
    { href: "/music", label: "Music", icon: "🎵" },
    { href: "/merch", label: "Merch", icon: "🛍️" },
    { href: "/book", label: "Book of HolyFans", icon: "📖" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-dark-velvet/80 border-b border-hot-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl">🍪</span>
            <span className="font-playfair text-xl font-bold">
              <span className="gradient-pink">Holy</span>
              <span className="gradient-gold">Fans</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-blush/80 hover:text-hot-pink transition-colors flex items-center space-x-1"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
            <Link href="/confessions" className="btn-sin-primary text-xs py-2 px-5">
              Confess Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-hot-pink text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 border-t border-hot-pink/10 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-blush/80 hover:text-hot-pink hover:bg-hot-pink/10 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-3">{link.icon}</span>
                {link.label}
              </Link>
            ))}
            <Link
              href="/confessions"
              className="block mx-4 mt-4 btn-sin-primary text-center text-xs py-3"
              onClick={() => setIsOpen(false)}
            >
              Confess Now 🔥
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
