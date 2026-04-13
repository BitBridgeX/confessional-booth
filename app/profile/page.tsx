"use client";

import Navigation from "@/components/Navigation";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import CookieMamiAvatar from "@/components/CookieMamiAvatar";

const MOCK_ORDERS = [
  { id: "ORD001", items: "Forgive Me Daddy Tee + Cookie Box", total: 59.98, status: "shipped", date: "Apr 10, 2024" },
  { id: "ORD002", items: "Book of HolyFans (Digital)", total: 14.99, status: "delivered", date: "Apr 5, 2024" },
  { id: "ORD003", items: "Holy Vibrations Smart Vibe", total: 79.99, status: "delivered", date: "Mar 28, 2024" },
];

const MOCK_CONFESSIONS = [
  { id: "c1", preview: "I spent $400 on Cookie Mami merch and told my partner...", status: "approved", date: "Apr 11" },
  { id: "c2", preview: "I've been watching the podcast at work during Zoom calls...", status: "pending", date: "Apr 12" },
];

export default function ProfilePage() {
  const { user, signOut, isAtLeast } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/");
  }, [user, router]);

  if (!user) return null;

  const tierIcon = { free: "🙏", member: "🔥", "inner-circle": "👑" }[user.tier];
  const tierLabel = { free: "Free Sinner", member: "Member", "inner-circle": "Inner Circle" }[user.tier];
  const tierColor = { free: "text-blush/60", member: "text-hot-pink", "inner-circle": "text-sacred-gold" }[user.tier];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Profile header */}
        <section className="relative py-16 px-4 overflow-hidden border-b border-hot-pink/10">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-1/3 w-72 h-72 bg-hot-pink/5 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
            <CookieMamiAvatar size={100} animated className="flex-shrink-0" />
            <div className="text-center sm:text-left space-y-2">
              <h1 className="font-playfair text-4xl font-bold">{user.name}</h1>
              <p className="text-blush/50">{user.email}</p>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <span className={`text-2xl`}>{tierIcon}</span>
                <span className={`font-bold ${tierColor}`}>{tierLabel}</span>
                {user.tier !== "inner-circle" && (
                  <Link href="/membership" className="text-xs text-hot-pink hover:text-neon-pink border border-hot-pink/30 px-2 py-1 rounded-full">
                    Upgrade ↗
                  </Link>
                )}
              </div>
              <p className="text-xs text-blush/30">Member since {user.joinedAt}</p>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto py-12 px-4 space-y-12">
          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Confessions", value: "2", icon: "🔥" },
              { label: "Orders", value: "3", icon: "🛍️" },
              { label: "Prayers Given", value: "47", icon: "🙏" },
            ].map((stat) => (
              <div key={stat.label} className="sin-card text-center space-y-2">
                <div className="text-3xl">{stat.icon}</div>
                <div className="font-playfair text-3xl gradient-gold">{stat.value}</div>
                <div className="text-xs text-blush/50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* My Confessions */}
          <section>
            <h2 className="font-playfair text-2xl mb-6 gradient-pink">My Confessions</h2>
            <div className="space-y-3">
              {MOCK_CONFESSIONS.map((c) => (
                <div key={c.id} className="sin-card flex items-center justify-between gap-4">
                  <p className="text-sm text-blush/70 italic flex-1">&ldquo;{c.preview}&rdquo;</p>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className={`badge text-xs ${c.status === "approved" ? "badge-pink" : "badge-purple"}`}>
                      {c.status}
                    </span>
                    <span className="text-xs text-blush/30">{c.date}</span>
                  </div>
                </div>
              ))}
              <Link href="/confessions" className="text-sm text-hot-pink hover:text-neon-pink">
                + Submit new confession
              </Link>
            </div>
          </section>

          {/* Orders */}
          <section id="orders">
            <h2 className="font-playfair text-2xl mb-6 gradient-gold">Order History</h2>
            <div className="space-y-3">
              {MOCK_ORDERS.map((order) => (
                <div key={order.id} className="sin-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-sm">{order.items}</p>
                    <p className="text-xs text-blush/40 mt-1">{order.id} · {order.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-playfair text-lg gradient-gold">${order.total.toFixed(2)}</span>
                    <span className={`badge text-xs ${
                      order.status === "delivered" ? "badge-gold" :
                      order.status === "shipped" ? "badge-purple" : "badge-pink"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Membership */}
          <section>
            <h2 className="font-playfair text-2xl mb-6">Membership</h2>
            <div className="sin-card flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{tierIcon}</span>
                <div>
                  <p className={`font-bold text-lg ${tierColor}`}>{tierLabel}</p>
                  <p className="text-sm text-blush/50">
                    {user.tier === "free" ? "Free plan" : user.tier === "member" ? "$19/month" : "$49/month"}
                  </p>
                </div>
              </div>
              {user.tier !== "inner-circle" && (
                <Link href="/membership" className="btn-sin-gold text-sm">
                  Upgrade Plan 👑
                </Link>
              )}
            </div>
          </section>

          {/* Sign out */}
          <div className="text-center pt-4">
            <button
              onClick={() => { signOut(); router.push("/"); }}
              className="text-sm text-red-400 hover:text-red-300 border border-red-500/20 px-6 py-2 rounded-full hover:bg-red-900/20 transition-all"
            >
              Sign Out
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
