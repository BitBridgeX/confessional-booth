"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/podcast", label: "Podcast" },
    { href: "/confessions", label: "Confessions" },
    { href: "/music", label: "Music" },
    { href: "/merch", label: "Merch" },
  ];

  return (
    <nav className="bg-sacred-gradient border-b border-sacred-gold border-opacity-30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">†</span>
            <span className="font-playfair text-xl font-bold text-sacred-gold">
              Confessional Booth
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sacred-cream hover:text-sacred-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-sacred-cream hover:text-sacred-gold"
          >
            <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sacred-cream hover:text-sacred-gold hover:bg-sacred-gold hover:bg-opacity-10 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
