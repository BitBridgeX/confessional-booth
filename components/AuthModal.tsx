"use client";

import { useState, FormEvent } from "react";
import { useAuth } from "@/lib/auth-context";
import CookieMamiAvatar from "./CookieMamiAvatar";

interface AuthModalProps {
  onClose: () => void;
  defaultMode?: "signin" | "signup";
}

export default function AuthModal({ onClose, defaultMode = "signin" }: AuthModalProps) {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">(defaultMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = mode === "signin"
      ? await signIn(email, password)
      : await signUp(email, password, name);

    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark-velvet/90 backdrop-blur-xl" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md sin-card border-hot-pink/30 space-y-6">
        <button onClick={onClose} className="absolute top-4 right-4 text-blush/40 hover:text-hot-pink text-xl">✕</button>

        {/* Avatar */}
        <div className="flex justify-center">
          <CookieMamiAvatar size={80} className="" />
        </div>

        <div className="text-center space-y-1">
          <h2 className="font-playfair text-2xl">
            {mode === "signin" ? (
              <>Welcome back, <span className="gradient-pink">Sinner</span></>
            ) : (
              <>Join the <span className="gradient-pink">Congregation</span></>
            )}
          </h2>
          <p className="font-handwritten text-lg text-neon-pink">
            {mode === "signin"
              ? '"Cookie Mami missed you. Don\'t lie."'
              : '"Every sinner deserves a cookie. Sign up."'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label className="block text-xs font-bold text-hot-pink uppercase tracking-wider mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Sinner McSinface"
                required
                className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-hot-pink uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="sinner@holyfans.com"
              required
              className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-hot-pink uppercase tracking-wider mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink"
            />
          </div>

          {error && (
            <div className="bg-red-900/30 border border-red-500/40 rounded-xl px-4 py-3 text-red-300 text-sm">
              {error}
            </div>
          )}

          <button type="submit" disabled={loading} className="btn-sin-primary w-full text-lg py-4 disabled:opacity-50">
            {loading ? " Checking your sins..." : mode === "signin" ? "Enter the Booth" : "Join the Congregation"}
          </button>
        </form>

        <div className="text-center text-sm text-blush/50">
          {mode === "signin" ? (
            <>New sinner?{" "}
              <button onClick={() => setMode("signup")} className="text-hot-pink hover:text-neon-pink">
                Create an account
              </button>
            </>
          ) : (
            <>Already confessing?{" "}
              <button onClick={() => setMode("signin")} className="text-hot-pink hover:text-neon-pink">
                Sign in
              </button>
            </>
          )}
        </div>

        {/* Demo hint */}
        <div className="bg-hot-pink/5 border border-hot-pink/10 rounded-xl p-3 text-xs text-blush/40 text-center">
          Demo: use <span className="text-hot-pink">sinner@holyfans.com</span> / <span className="text-hot-pink">password</span>
        </div>
      </div>
    </div>
  );
}
