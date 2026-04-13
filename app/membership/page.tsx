"use client";

import Navigation from "@/components/Navigation";
import { useAuth } from "@/lib/auth-context";
import { useState } from "react";
import CookieMamiAvatar from "@/components/CookieMamiAvatar";
import Link from "next/link";

const TIERS = [
  {
    id: "free",
    name: "Free Sinner",
    price: "$0",
    period: "forever",
    icon: "🙏",
    color: "border-blush/20",
    badge: "badge-purple",
    features: [
      "Submit anonymous confessions",
      "Browse public confession wall",
      "Free podcast episodes",
      "Browse merch store",
      "Access Cookie Mami quotes",
    ],
    locked: [
      "Member-only podcast episodes",
      "Full music library download",
      "Inner sanctum content",
      "Live stream chat",
    ],
    cta: "Start Free",
    ctaStyle: "btn-sin-secondary",
  },
  {
    id: "member",
    name: "Member",
    price: "$19",
    period: "/month",
    icon: "🔥",
    color: "border-hot-pink/60",
    badge: "badge-pink",
    featured: true,
    features: [
      "Everything in Free",
      "Member-only podcast episodes",
      "Full music library + downloads",
      "10% merch discount",
      "Live stream chat access",
      "Priority confession review",
      "Monthly cookie box discount",
    ],
    locked: [
      "Inner sanctum access",
      "Private 1-on-1 with Cookie Mami",
    ],
    cta: "Become a Member",
    ctaStyle: "btn-sin-primary",
  },
  {
    id: "inner-circle",
    name: "Inner Circle",
    price: "$49",
    period: "/month",
    icon: "👑",
    color: "border-sacred-gold/60",
    badge: "badge-gold",
    features: [
      "Everything in Member",
      "Inner Sanctum access",
      "Private confession readings by Cookie Mami",
      "20% merch discount",
      "Exclusive unreleased tracks",
      "Monthly signed merch drop",
      "Direct DM with Cookie Mami",
      "First access to new content",
      "Invitation to secret events",
    ],
    locked: [],
    cta: "Join Inner Circle",
    ctaStyle: "btn-sin-gold",
  },
];

export default function MembershipPage() {
  const { user } = useAuth();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Header */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sacred-gold/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-hot-pink/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <CookieMamiAvatar size={100} animated className="mx-auto" />
            <h1 className="font-playfair text-5xl md:text-6xl font-black">
              Join the <span className="gradient-sinful">Congregation</span>
            </h1>
            <p className="text-xl text-blush/80">
              Three tiers of sin. Cookie Mami for every budget.
            </p>

            {/* Billing toggle */}
            <div className="inline-flex items-center gap-4 bg-hot-pink/10 rounded-full p-1">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${billingPeriod === "monthly" ? "bg-hot-pink text-white" : "text-blush/60"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${billingPeriod === "annual" ? "bg-hot-pink text-white" : "text-blush/60"}`}
              >
                Annual <span className="text-sacred-gold text-xs">Save 20%</span>
              </button>
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {TIERS.map((tier) => {
              const isCurrentTier = user?.tier === tier.id;
              const annualPrice = tier.price === "$0" ? "$0" : `$${Math.round(parseInt(tier.price.replace("$", "")) * 0.8 * 12)}`;
              const displayPrice = billingPeriod === "annual" ? annualPrice : tier.price;
              const displayPeriod = billingPeriod === "annual" ? "/year" : tier.period;

              return (
                <div
                  key={tier.id}
                  className={`sin-card border-2 ${tier.color} ${tier.featured ? "ring-2 ring-hot-pink ring-offset-4 ring-offset-dark-velvet relative" : ""} space-y-6`}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-hot-pink text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  {isCurrentTier && (
                    <div className="absolute -top-4 right-4 bg-sacred-gold text-dark-velvet text-xs font-black px-3 py-1 rounded-full">
                      Current Plan
                    </div>
                  )}

                  <div className="text-center space-y-3">
                    <div className="text-5xl">{tier.icon}</div>
                    <h3 className="font-playfair text-2xl">{tier.name}</h3>
                    <div className="flex items-end justify-center gap-1">
                      <span className="font-playfair text-5xl gradient-gold">{displayPrice}</span>
                      <span className="text-blush/50 pb-2">{displayPeriod}</span>
                    </div>
                  </div>

                  <div className="divider-sin" />

                  <div className="space-y-3">
                    {tier.features.map((f) => (
                      <div key={f} className="flex items-start gap-3 text-sm">
                        <span className="text-hot-pink flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-blush/80">{f}</span>
                      </div>
                    ))}
                    {tier.locked.map((f) => (
                      <div key={f} className="flex items-start gap-3 text-sm opacity-40">
                        <span className="flex-shrink-0 mt-0.5">✗</span>
                        <span className="line-through">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`${tier.ctaStyle} w-full text-center ${isCurrentTier ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={isCurrentTier}
                  >
                    {isCurrentTier ? "Current Plan" : tier.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cookie Mami guarantee */}
        <section className="max-w-3xl mx-auto py-16 px-4 text-center space-y-6">
          <div className="cookie-bubble">
            <p className="font-handwritten text-2xl text-neon-pink">
              &ldquo;Cancel anytime. But honestly, why would you?
              Cookie Mami doesn&apos;t hold grudges... she holds receipts.&rdquo;
            </p>
            <p className="text-sm text-blush/50 mt-3">— Cookie Mami, on refunds</p>
          </div>
          <p className="text-xs text-blush/30">
            Cancel anytime. No questions asked. 30-day money-back guarantee. Powered by Stripe.
          </p>
        </section>
      </main>
    </>
  );
}
