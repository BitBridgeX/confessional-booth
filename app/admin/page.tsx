"use client";

import Navigation from "@/components/Navigation";
import { useState } from "react";

const PENDING = [
  { id: "c1", text: "I've been sliding into my coworker's DMs while pretending to work from home.", category: "dm_sins", time: "2 min ago" },
  { id: "c2", text: "I accidentally sent my boss a meme meant for my group chat. It was... explicit.", category: "other", time: "8 min ago" },
  { id: "c3", text: "I've been using my church's WiFi to stream OnlyFans content. For three years.", category: "subscription", time: "15 min ago" },
  { id: "c4", text: "I read my partner's texts while they were in the shower and found nothing. I'm still not over the anxiety.", category: "late_night", time: "22 min ago" },
  { id: "c5", text: "I spent $400 on Cookie Mami merch and told my partner it was 'work expenses'.", category: "other", time: "1 hr ago" },
];

const ORDERS = [
  { id: "o1", customer: "anon@holyfans.com", items: "Forgive Me Daddy Tee + Cookie Box", total: 59.98, status: "pending", time: "5 min ago" },
  { id: "o2", customer: "sinner@gmail.com", items: "Lace Set + Silk Robe", total: 114.98, status: "shipped", time: "2 hr ago" },
  { id: "o3", customer: "holy@water.net", items: "Book of HolyFans (Digital)", total: 14.99, status: "delivered", time: "1 day ago" },
];

const STATS = [
  { label: "Confessions Today", value: "247", icon: "", delta: "+12%" },
  { label: "Pending Moderation", value: "5", icon: "⏳", delta: "needs review" },
  { label: "Orders Today", value: "34", icon: "", delta: "+8%" },
  { label: "Revenue Today", value: "$1,284", icon: "💰", delta: "+22%" },
  { label: "Podcast Plays", value: "1,847", icon: "", delta: "+15%" },
  { label: "New Subscribers", value: "89", icon: "📧", delta: "+5%" },
];

export default function AdminPage() {
  const [confessions, setConfessions] = useState(PENDING);
  const [activeTab, setActiveTab] = useState<"confessions" | "orders" | "episodes" | "products">("confessions");

  function approveConfession(id: string) {
    setConfessions(prev => prev.filter(c => c.id !== id));
  }
  function rejectConfession(id: string) {
    setConfessions(prev => prev.filter(c => c.id !== id));
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Header */}
        <section className="bg-gradient-to-r from-dark-velvet via-deep-plum to-dark-velvet border-b border-hot-pink/10 py-8 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="font-playfair text-3xl gradient-pink">Cookie Mami Dashboard</h1>
              <p className="text-sm text-blush/50 mt-1">All your sins in one place.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-hot-pink/20 flex items-center justify-center text-xl"></div>
              <span className="text-sm text-blush/70">Cookie Mami</span>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="sin-card text-center space-y-2">
                <div className="text-3xl">{stat.icon}</div>
                <div className="font-playfair text-2xl gradient-gold">{stat.value}</div>
                <div className="text-xs text-blush/50">{stat.label}</div>
                <div className="text-xs text-hot-pink">{stat.delta}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto">
            {[
              { key: "confessions", label: " Confessions", count: confessions.length },
              { key: "orders", label: " Orders", count: ORDERS.length },
              { key: "episodes", label: " Episodes", count: 10 },
              { key: "products", label: " Products", count: 110 },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.key
                    ? "bg-hot-pink text-white"
                    : "bg-hot-pink/10 text-blush/70 hover:bg-hot-pink/20"
                }`}
              >
                {tab.label} <span className="ml-1 opacity-60">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Confessions Tab */}
          {activeTab === "confessions" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-playfair text-2xl">Pending Confessions</h2>
                <div className="flex gap-2">
                  <button className="btn-sin-secondary text-xs py-2 px-4">Approve All</button>
                  <button className="text-xs bg-red-900/30 text-red-400 border border-red-500/30 px-4 py-2 rounded-full hover:bg-red-900/50">Reject All</button>
                </div>
              </div>
              {confessions.length === 0 ? (
                <div className="text-center py-16 text-blush/40">
                  <div className="text-6xl mb-4"></div>
                  <p className="font-playfair text-xl">All caught up! No pending confessions.</p>
                  <p className="text-sm mt-2">Cookie Mami is proud of you.</p>
                </div>
              ) : (
                confessions.map(c => (
                  <div key={c.id} className="sin-card">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <p className="text-blush/80 italic mb-3">&ldquo;{c.text}&rdquo;</p>
                        <div className="flex gap-3 text-xs text-blush/40">
                          <span className="badge badge-pink capitalize">{c.category.replace("_", " ")}</span>
                          <span>{c.time}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <button
                          onClick={() => approveConfession(c.id)}
                          className="px-4 py-2 bg-green-900/40 text-green-400 border border-green-500/30 rounded-full text-xs font-bold hover:bg-green-900/60"
                        >
                           Approve
                        </button>
                        <button
                          onClick={() => rejectConfession(c.id)}
                          className="px-4 py-2 bg-red-900/30 text-red-400 border border-red-500/30 rounded-full text-xs font-bold hover:bg-red-900/50"
                        >
                          ✕ Reject
                        </button>
                        <button className="px-4 py-2 bg-sacred-gold/20 text-sacred-gold border border-sacred-gold/30 rounded-full text-xs font-bold hover:bg-sacred-gold/30">
                           Feature
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="space-y-4">
              <h2 className="font-playfair text-2xl mb-6">Recent Orders</h2>
              {ORDERS.map(order => (
                <div key={order.id} className="sin-card flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                  <div>
                    <p className="font-semibold text-blush/80">{order.customer}</p>
                    <p className="text-sm text-blush/50 mt-1">{order.items}</p>
                    <p className="text-xs text-blush/30 mt-1">{order.time}</p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="font-playfair text-lg gradient-gold">${order.total.toFixed(2)}</span>
                    <span className={`badge ${
                      order.status === "delivered" ? "badge-gold" :
                      order.status === "shipped" ? "badge-purple" : "badge-pink"
                    }`}>
                      {order.status}
                    </span>
                    <button className="text-xs text-hot-pink hover:text-neon-pink">Update →</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Episodes Tab */}
          {activeTab === "episodes" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-playfair text-2xl">Podcast Episodes</h2>
                <button className="btn-sin-primary text-sm">+ New Episode</button>
              </div>
              <div className="sin-card space-y-6">
                <h3 className="font-playfair text-lg text-hot-pink">Create New Episode</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Episode Title", placeholder: "The Sin of..." },
                    { label: "Guest Name", placeholder: "Cookie Mami solo" },
                    { label: "Buzzsprout Episode ID", placeholder: "12345678" },
                    { label: "Duration", placeholder: "45 min" },
                  ].map(f => (
                    <div key={f.label}>
                      <label className="block text-xs font-bold text-hot-pink uppercase tracking-wider mb-2">{f.label}</label>
                      <input type="text" placeholder={f.placeholder}
                        className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink" />
                    </div>
                  ))}
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-hot-pink uppercase tracking-wider mb-2">Description</label>
                    <textarea rows={3} placeholder="Episode description..."
                      className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink resize-none" />
                  </div>
                </div>
                <button className="btn-sin-primary">Publish Episode </button>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-playfair text-2xl">Products</h2>
                <button className="btn-sin-gold text-sm">+ Add Product</button>
              </div>
              <div className="sin-card space-y-6">
                <h3 className="font-playfair text-lg text-hot-pink">Add New Product</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Product Name", placeholder: "New Sin Item" },
                    { label: "Price ($)", placeholder: "29.99" },
                    { label: "Category", placeholder: "Apparel" },
                    { label: "Inventory", placeholder: "100" },
                    { label: "Stripe Product ID", placeholder: "prod_XXXX" },
                  ].map(f => (
                    <div key={f.label}>
                      <label className="block text-xs font-bold text-hot-pink uppercase tracking-wider mb-2">{f.label}</label>
                      <input type="text" placeholder={f.placeholder}
                        className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink" />
                    </div>
                  ))}
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-hot-pink uppercase tracking-wider mb-2">Description</label>
                    <textarea rows={3}
                      className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink resize-none" />
                  </div>
                </div>
                <button className="btn-sin-gold">Add Product </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
