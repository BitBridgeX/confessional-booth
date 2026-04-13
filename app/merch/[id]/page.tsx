"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { useState } from "react";

// Quick product lookup — in production this comes from Supabase
const PRODUCT_DATA: Record<string, any> = {
  a1: { name: "\"Forgive Me Daddy\" Tee", price: 29.99, icon: "👕", category: "Apparel", description: "Classic fit, sinfully soft 100% cotton. Pre-shrunk. Machine washable. Arrives blessed by Cookie Mami herself (not really, but close).", sizes: ["XS","S","M","L","XL","XXL"], colors: ["Black","White","Deep Plum"], reviews: 47 },
  l1: { name: "\"Holy Night\" Lace Set", price: 49.99, icon: "🖤", category: "Lingerie & Intimates", description: "Delicate black lace bralette + thong set. Adjustable straps, hook-and-eye closure. Because your body is a temple and temples deserve nice things.", sizes: ["XS","S","M","L","XL"], colors: ["Black","Red"], reviews: 89 },
  t1: { name: "\"Holy Vibrations\" Smart Vibe", price: 79.99, icon: "🔥", category: "Adult Toys & Pleasure", description: "App-controlled with 10 vibration patterns. Whisper-quiet motor. USB rechargeable. 100% body-safe silicone. Ships in discreet packaging.", sizes: ["One Size"], colors: ["Pink","Purple"], reviews: 134 },
  f1: { name: "Cookie Mami's Signature Box", price: 29.99, icon: "🍪", category: "Food Products", description: "12 artisan cookies, mixed flavors. Chocolate chip, red velvet, snickerdoodle, and the secret fourth flavor Cookie Mami won't reveal. Ships in 2-3 days.", sizes: ["12-pack","24-pack","48-pack"], colors: [], reviews: 203 },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCT_DATA[params.id] || {
    name: "Sacred Product",
    price: 29.99,
    icon: "🛍️",
    category: "Merch",
    description: "A sinful product from the Confessional Booth collection. Each one blessed (cursed?) by Cookie Mami.",
    sizes: ["S","M","L","XL"],
    colors: ["Black"],
    reviews: 12,
  };

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[2] || "");
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <section className="max-w-6xl mx-auto py-12 px-4">
          <Link href="/merch" className="text-hot-pink text-sm hover:text-neon-pink mb-8 inline-block">
            ← Back to Shop
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-hot-pink/20 via-royal-purple/30 to-sacred-gold/10 flex items-center justify-center text-[120px]">
                {product.icon}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="aspect-square rounded-xl bg-hot-pink/10 flex items-center justify-center text-3xl cursor-pointer hover:bg-hot-pink/20 transition-colors">
                    {product.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="badge badge-pink mb-3">{product.category}</span>
                <h1 className="font-playfair text-4xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-3">
                  <span className="font-playfair text-4xl gradient-gold">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-blush/50">⭐ {product.reviews} reviews</span>
                </div>
              </div>

              <div className="divider-sin" />

              <p className="text-blush/80 leading-relaxed">{product.description}</p>

              {/* Size Selector */}
              {product.sizes?.length > 0 && (
                <div>
                  <p className="text-sm font-bold text-hot-pink uppercase tracking-wider mb-3">
                    Size: <span className="text-blush/60 normal-case font-normal">{selectedSize}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s: string) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                          selectedSize === s
                            ? "bg-hot-pink text-white"
                            : "bg-hot-pink/10 text-blush/70 hover:bg-hot-pink/20"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selector */}
              {product.colors?.length > 0 && (
                <div>
                  <p className="text-sm font-bold text-hot-pink uppercase tracking-wider mb-3">
                    Color: <span className="text-blush/60 normal-case font-normal">{selectedColor}</span>
                  </p>
                  <div className="flex gap-2">
                    {product.colors.map((c: string) => (
                      <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`px-4 py-2 rounded-lg text-sm transition-all ${
                          selectedColor === c
                            ? "bg-hot-pink text-white"
                            : "bg-hot-pink/10 text-blush/70 hover:bg-hot-pink/20"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <p className="text-sm font-bold text-hot-pink uppercase tracking-wider mb-3">Quantity</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-10 rounded-full bg-hot-pink/10 text-hot-pink hover:bg-hot-pink/20 text-lg font-bold"
                  >
                    −
                  </button>
                  <span className="font-playfair text-2xl w-8 text-center">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 rounded-full bg-hot-pink/10 text-hot-pink hover:bg-hot-pink/20 text-lg font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className={`w-full btn-sin-primary text-lg py-5 ${added ? "bg-green-600" : ""}`}
                >
                  {added ? "✓ Added to Cart!" : `Add to Cart — $${(product.price * qty).toFixed(2)}`}
                </button>
                <Link href="/merch/checkout" className="block w-full btn-sin-gold text-center text-lg py-5">
                  Buy Now 🍪
                </Link>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  { icon: "🔒", text: "Secure Checkout" },
                  { icon: "📦", text: "Discreet Shipping" },
                  { icon: "↩️", text: "Easy Returns" },
                ].map(b => (
                  <div key={b.text} className="text-center p-3 bg-hot-pink/5 rounded-xl">
                    <div className="text-2xl mb-1">{b.icon}</div>
                    <p className="text-xs text-blush/50">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cookie Mami's Take */}
          <div className="mt-16 cookie-bubble max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">🍪</span>
              <p className="font-playfair text-lg gradient-pink">Cookie Mami says...</p>
            </div>
            <p className="font-handwritten text-xl text-neon-pink">
              &ldquo;Oh this one? This is my personal favorite. You&apos;re making an excellent life decision.
              Add two. You deserve it.&rdquo;
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
