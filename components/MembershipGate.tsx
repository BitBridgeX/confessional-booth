"use client";

import { useAuth, MembershipTier } from "@/lib/auth-context";
import { useState } from "react";
import AuthModal from "./AuthModal";
import Link from "next/link";
import CookieMamiAvatar from "./CookieMamiAvatar";

interface MembershipGateProps {
  tier: MembershipTier;
  children: React.ReactNode;
  preview?: React.ReactNode;
}

const TIER_NAMES: Record<MembershipTier, string> = {
  free: "Free",
  member: "Member",
  "inner-circle": "Inner Circle",
};

const TIER_PRICES: Record<MembershipTier, string> = {
  free: "Free",
  member: "$19/mo",
  "inner-circle": "$49/mo",
};

const TIER_COLORS: Record<MembershipTier, string> = {
  free: "badge-purple",
  member: "badge-pink",
  "inner-circle": "badge-gold",
};

const COOKIE_MAMI_TAUNTS: Record<MembershipTier, string> = {
  free: "This one's on the house, baby.",
  member: "Ooh, this is the good stuff. Members only, honey.",
  "inner-circle": "Deep in the inner sanctum now. This ain't for everyone.",
};

export default function MembershipGate({ tier, children, preview }: MembershipGateProps) {
  const { user, isAtLeast } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  if (isAtLeast(tier)) return <>{children}</>;

  return (
    <>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

      {/* Blurred preview */}
      {preview && (
        <div className="relative overflow-hidden rounded-2xl">
          <div className="blur-sm pointer-events-none select-none opacity-40">
            {preview}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-velvet via-dark-velvet/80 to-transparent" />
        </div>
      )}

      {/* Gate card */}
      <div className="sin-card border-hot-pink/40 text-center space-y-6 py-12">
        <CookieMamiAvatar size={80} animated className="mx-auto" />

        <div className="space-y-2">
          <span className={`badge ${TIER_COLORS[tier]} text-sm px-4 py-1.5`}>
            {TIER_NAMES[tier]} — {TIER_PRICES[tier]}
          </span>
          <h3 className="font-playfair text-2xl">Members Only Content</h3>
          <p className="font-handwritten text-xl text-neon-pink max-w-sm mx-auto">
            &ldquo;{COOKIE_MAMI_TAUNTS[tier]}&rdquo;
          </p>
        </div>

        <div className="space-y-3 max-w-xs mx-auto">
          {!user ? (
            <>
              <button onClick={() => setShowAuth(true)} className="btn-sin-primary w-full">
                Sign In to Access
              </button>
              <button onClick={() => setShowAuth(true)} className="btn-sin-secondary w-full">
                Join Free
              </button>
            </>
          ) : (
            <>
              <p className="text-sm text-blush/60">
                You&apos;re on the <span className="text-hot-pink capitalize">{user.tier}</span> tier.
                Upgrade to unlock this.
              </p>
              <Link href="/membership" className="btn-sin-gold w-full inline-block text-center">
                Upgrade to {TIER_NAMES[tier]} — {TIER_PRICES[tier]}
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
