"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import AuthModal from "./AuthModal";

const SOCIAL = [
  { name: "Instagram", href: "https://instagram.com/confessionalbooth", icon: "📸" },
  { name: "TikTok", href: "https://tiktok.com/@confessionalbooth", icon: "" },
  { name: "Twitter", href: "https://twitter.com/confessionalbooth", icon: "🐦" },
  { name: "OnlyFans", href: "https://onlyfans.com/cookiemami", icon: "🔞" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, signOut } = useAuth();

  const links = [
    { href: "/live", label: "Live", icon: "🔴", badge: "LIVE" },
    { href: "/confessions", label: "Confess", icon: "" },
    { href: "/podcast", label: "Podcast", icon: "" },
    { href: "/music", label: "Music", icon: "" },
    { href: "/merch", label: "Merch", icon: "" },
    { href: "/book", label: "Book", icon: "" },
  ];

  function openSignIn() { setAuthMode("signin"); setShowAuth(true); setIsOpen(false); }
  function openSignUp() { setAuthMode("signup"); setShowAuth(true); setIsOpen(false); }

  const tierColors = { free: "text-blush/60", member: "text-hot-pink", "inner-circle": "text-sacred-gold" };

  return (
    <>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} defaultMode={authMode} />}

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-dark-velvet/90 border-b border-hot-pink/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl"></span>
              <span className="font-playfair text-xl font-bold hidden sm:block">
                <span className="gradient-pink">Confessional</span>
                <span className="gradient-gold"> Booth</span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center space-x-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm text-blush/80 hover:text-hot-pink transition-colors flex items-center gap-1"
                >
                  {link.badge && (
                    <span className="absolute -top-1 -right-1 bg-hot-pink text-white text-[9px] font-black px-1.5 py-0.5 rounded-full animate-pulse-sin">
                      {link.badge}
                    </span>
                  )}
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 text-blush/60 hover:text-hot-pink transition-colors text-lg"
                title="Search"
              >
                🔍
              </button>

              {/* Auth */}
              {user ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-hot-pink/10 hover:bg-hot-pink/20 transition-colors">
                    <span className="text-lg"></span>
                    <span className={`text-xs font-bold hidden sm:block ${tierColors[user.tier]}`}>
                      {user.name.split(" ")[0]}
                    </span>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute right-0 top-full mt-2 w-48 sin-card !p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all space-y-1">
                    <Link href="/profile" className="block px-3 py-2 text-sm text-blush/80 hover:text-hot-pink hover:bg-hot-pink/10 rounded-lg">
                      👤 Profile
                    </Link>
                    <Link href="/membership" className="block px-3 py-2 text-sm text-blush/80 hover:text-hot-pink hover:bg-hot-pink/10 rounded-lg">
                      👑 Membership
                    </Link>
                    <Link href="/profile#orders" className="block px-3 py-2 text-sm text-blush/80 hover:text-hot-pink hover:bg-hot-pink/10 rounded-lg">
                       Orders
                    </Link>
                    <div className="border-t border-hot-pink/10 my-1" />
                    <button
                      onClick={signOut}
                      className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-red-900/20 rounded-lg"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <button onClick={openSignIn} className="text-sm text-blush/70 hover:text-hot-pink transition-colors hidden sm:block">
                    Sign In
                  </button>
                  <button onClick={openSignUp} className="btn-sin-primary text-xs py-2 px-4">
                    Join Free
                  </button>
                </div>
              )}

              {/* Mobile toggle */}
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-hot-pink text-xl ml-1">
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {showSearch && (
            <div className="pb-3">
              <div className="relative">
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search episodes, merch, scriptures..."
                  className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl pl-10 pr-4 py-2.5 text-blush placeholder-blush/30 focus:border-hot-pink text-sm"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blush/40">🔍</span>
                {searchQuery && (
                  <Link
                    href={`/search?q=${encodeURIComponent(searchQuery)}`}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-hot-pink"
                    onClick={() => setShowSearch(false)}
                  >
                    Search →
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Mobile menu */}
          {isOpen && (
            <div className="lg:hidden pb-6 space-y-1 border-t border-hot-pink/10 pt-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 text-blush/80 hover:text-hot-pink hover:bg-hot-pink/10 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                  {link.badge && <span className="badge badge-pink text-[10px]">{link.badge}</span>}
                </Link>
              ))}

              <div className="border-t border-hot-pink/10 my-2 pt-2 space-y-1">
                {/* Social */}
                <div className="flex gap-3 px-4 py-2">
                  {SOCIAL.map(s => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="text-xl hover:scale-110 transition-transform" title={s.name}>
                      {s.icon}
                    </a>
                  ))}
                </div>

                {!user ? (
                  <>
                    <button onClick={openSignIn} className="w-full text-left px-4 py-3 text-blush/80 hover:text-hot-pink hover:bg-hot-pink/10 rounded-lg">
                      Sign In
                    </button>
                    <button onClick={openSignUp} className="mx-4 btn-sin-primary w-[calc(100%-32px)] text-center">
                      Join Free 
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/profile" className="block px-4 py-3 text-blush/80 hover:text-hot-pink hover:bg-hot-pink/10 rounded-lg" onClick={() => setIsOpen(false)}>
                      👤 {user.name}
                    </Link>
                    <button onClick={signOut} className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-900/20 rounded-lg">
                      Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
