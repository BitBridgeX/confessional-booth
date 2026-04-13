"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { useState } from "react";

const MOCK_CART = [
  { id: "a1", name: "\"Forgive Me Daddy\" Tee", price: 29.99, qty: 1, icon: "👕", size: "M", color: "Black" },
  { id: "f1", name: "Cookie Mami's Signature Box", price: 29.99, qty: 2, icon: "🍪", size: "12-pack", color: "" },
];

export default function CheckoutPage() {
  const [step, setStep] = useState<"cart" | "details" | "confirm">("cart");
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "", country: "US" });

  const subtotal = MOCK_CART.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = 9.99;
  const total = subtotal + shipping;

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <section className="max-w-5xl mx-auto py-12 px-4">
          <h1 className="font-playfair text-4xl mb-2">
            <span className="gradient-gold">Checkout</span>
          </h1>
          <p className="text-sm text-blush/50 mb-8 font-handwritten text-lg">
            &ldquo;Spend it like a sinner, save it like a saint.&rdquo; — Cookie Mami
          </p>

          {/* Steps */}
          <div className="flex items-center gap-4 mb-12">
            {["cart", "details", "confirm"].map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step === s ? "bg-hot-pink text-white" : "bg-hot-pink/20 text-blush/40"
                }`}>
                  {i + 1}
                </div>
                <span className={`text-sm capitalize ${step === s ? "text-hot-pink" : "text-blush/40"}`}>
                  {s === "cart" ? "Cart" : s === "details" ? "Details" : "Confirm"}
                </span>
                {i < 2 && <span className="text-hot-pink/20">→</span>}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left: Steps */}
            <div className="md:col-span-2">
              {step === "cart" && (
                <div className="space-y-4">
                  <h2 className="font-playfair text-2xl mb-6">Your Cart</h2>
                  {MOCK_CART.map((item) => (
                    <div key={item.id} className="sin-card flex items-center gap-6">
                      <span className="text-4xl">{item.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-xs text-blush/50">
                          {item.size && `Size: ${item.size}`} {item.color && `· ${item.color}`}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-playfair text-lg gradient-gold">${(item.price * item.qty).toFixed(2)}</p>
                        <p className="text-xs text-blush/40">Qty: {item.qty}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-6">
                    <button onClick={() => setStep("details")} className="btn-sin-primary w-full text-lg">
                      Proceed to Details →
                    </button>
                  </div>
                </div>
              )}

              {step === "details" && (
                <div className="space-y-6">
                  <h2 className="font-playfair text-2xl mb-6">Shipping Details</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { key: "name", label: "Full Name", placeholder: "Your Sinful Name", col: 2 },
                      { key: "email", label: "Email", placeholder: "sinner@holyfans.com", col: 2 },
                      { key: "address", label: "Address", placeholder: "666 Cookie Lane", col: 2 },
                      { key: "city", label: "City", placeholder: "Sin City", col: 1 },
                      { key: "zip", label: "ZIP Code", placeholder: "66600", col: 1 },
                    ].map((field) => (
                      <div key={field.key} className={`col-span-${field.col}`}>
                        <label className="block text-xs font-bold text-hot-pink uppercase tracking-wider mb-2">
                          {field.label}
                        </label>
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          value={(form as any)[field.key]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="divider-sin my-6" />
                  <h3 className="font-playfair text-xl mb-4">Payment</h3>
                  <div className="sin-card border-sacred-gold/20 space-y-4">
                    <p className="text-sm text-blush/60">Powered by Stripe — all major cards accepted</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label className="block text-xs font-bold text-hot-pink uppercase tracking-wider mb-2">Card Number</label>
                        <input type="text" placeholder="4242 4242 4242 4242" className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-hot-pink uppercase tracking-wider mb-2">Expiry</label>
                        <input type="text" placeholder="MM/YY" className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-hot-pink uppercase tracking-wider mb-2">CVC</label>
                        <input type="text" placeholder="666" className="w-full bg-dark-velvet border border-hot-pink/30 rounded-xl px-4 py-3 text-blush placeholder-blush/30 focus:border-hot-pink" />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button onClick={() => setStep("cart")} className="btn-sin-secondary flex-1">← Back</button>
                    <button onClick={() => setStep("confirm")} className="btn-sin-primary flex-1 text-lg">
                      Review Order →
                    </button>
                  </div>
                </div>
              )}

              {step === "confirm" && (
                <div className="space-y-6">
                  <h2 className="font-playfair text-2xl mb-6">Confirm Your Order</h2>
                  <div className="sin-card space-y-4">
                    <h3 className="text-hot-pink font-semibold">Order Summary</h3>
                    {MOCK_CART.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-blush/70">{item.name} × {item.qty}</span>
                        <span>${(item.price * item.qty).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="divider-sin" />
                    <div className="flex justify-between text-sm text-blush/50">
                      <span>Shipping</span><span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-playfair text-xl">
                      <span className="gradient-gold">Total</span>
                      <span className="gradient-gold">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="cookie-bubble">
                    <p className="font-handwritten text-xl text-neon-pink">
                      🍪 &ldquo;Are you SURE? Cookie Mami approves of all of these choices. Place that order, baby.&rdquo;
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => setStep("details")} className="btn-sin-secondary flex-1">← Back</button>
                    <button className="btn-sin-gold flex-1 text-lg">
                      Place Order — ${total.toFixed(2)} 🍪
                    </button>
                  </div>
                  <p className="text-xs text-center text-blush/30">
                    By placing this order you agree to our Terms of Sin. No refunds on spiritual purchases.
                  </p>
                </div>
              )}
            </div>

            {/* Right: Order Summary */}
            <div className="sin-card h-fit sticky top-24 space-y-4">
              <h3 className="font-playfair text-lg gradient-pink">Order Summary</h3>
              {MOCK_CART.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-blush/70 flex-1 mr-2">{item.icon} {item.name}</span>
                  <span className="flex-shrink-0">${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
              <div className="divider-sin" />
              <div className="flex justify-between text-sm text-blush/50">
                <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-blush/50">
                <span>Shipping</span><span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-playfair text-xl pt-2 border-t border-hot-pink/10">
                <span className="gradient-gold">Total</span>
                <span className="gradient-gold">${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-blush/30 text-center">
                🔒 Secure Stripe checkout
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
