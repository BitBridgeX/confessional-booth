import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function MerchPage() {
  // Mock products - replace with real Supabase data
  const products = [
    {
      id: "1",
      name: "Confessional Booth Vinyl",
      price: 29.99,
      type: "vinyl",
      icon: "💿",
      category: "physical",
    },
    {
      id: "2",
      name: "Sacred Reflections Journal",
      price: 24.99,
      type: "journal",
      icon: "📓",
      category: "physical",
    },
    {
      id: "3",
      name: "Limited Edition T-Shirt",
      price: 34.99,
      type: "tshirt",
      icon: "👕",
      category: "physical",
    },
    {
      id: "4",
      name: "Meditation Candle Collection",
      price: 44.99,
      type: "candle",
      icon: "🕯️",
      category: "physical",
    },
    {
      id: "5",
      name: "Episode Transcript Collection",
      price: 9.99,
      type: "pdf",
      icon: "📄",
      category: "digital",
    },
    {
      id: "6",
      name: "Confessional Booth Art Print",
      price: 19.99,
      type: "print",
      icon: "🖼️",
      category: "physical",
    },
  ];

  const categories = [
    { name: "All", icon: "🛍️" },
    { name: "Physical", icon: "📦" },
    { name: "Digital", icon: "💻" },
    { name: "Music", icon: "💿" },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-sacred-gradient py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-4xl">🛍️</span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold">
                Merchandise
              </h1>
            </div>
            <p className="text-lg text-sacred-cream opacity-90">
              Support the ministry with beautiful, thoughtful goods.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="max-w-6xl mx-auto py-8 px-4">
          <div className="flex overflow-x-auto gap-3 pb-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="flex-shrink-0 btn-sacred-secondary text-sm"
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/merch/${product.id}`}
                className="sacred-card sacred-card-hover group cursor-pointer flex flex-col h-full"
              >
                <div className="w-full h-48 rounded-lg bg-gradient-to-br from-sacred-gold to-sacred-purple flex items-center justify-center text-6xl mb-4">
                  {product.icon}
                </div>
                <h3 className="font-playfair text-lg font-semibold group-hover:text-sacred-gold transition-colors mb-2">
                  {product.name}
                </h3>
                <div className="flex-1"></div>
                <div className="flex items-center justify-between pt-4 border-t border-sacred-gold border-opacity-20">
                  <span className="font-playfair text-xl text-sacred-gold">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-sacred-cream opacity-60 capitalize">
                    {product.category}
                  </span>
                </div>
                <button className="btn-sacred-primary w-full mt-4 text-sm">
                  Add to Cart
                </button>
              </Link>
            ))}
          </div>
        </section>

        {/* Bundle Offers */}
        <section className="bg-sacred-gradient bg-opacity-30 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl mb-12 text-center">
              Special Bundles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Starter Pack",
                  items: "Journal + T-Shirt + Digital Transcripts",
                  price: "$59.99",
                  savings: "Save $19",
                },
                {
                  name: "Sacred Collector",
                  items: "Vinyl + Candle + Art Print + Journal",
                  price: "$129.99",
                  savings: "Save $39",
                  featured: true,
                },
                {
                  name: "Full Experience",
                  items: "Everything Bundle",
                  price: "$199.99",
                  savings: "Save $69",
                },
              ].map((bundle, i) => (
                <div
                  key={i}
                  className={`sacred-card text-center space-y-4 ${
                    bundle.featured
                      ? "ring-2 ring-sacred-gold transform scale-105"
                      : ""
                  }`}
                >
                  {bundle.featured && (
                    <div className="bg-sacred-gold text-sacred-purple px-3 py-1 text-xs font-bold rounded inline-block">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="font-playfair text-lg font-semibold">
                    {bundle.name}
                  </h3>
                  <p className="text-sm text-sacred-cream opacity-80">
                    {bundle.items}
                  </p>
                  <p className="font-playfair text-2xl text-sacred-gold">
                    {bundle.price}
                  </p>
                  <p className="text-xs text-sacred-gold font-semibold">
                    {bundle.savings}
                  </p>
                  <button className="btn-sacred-primary w-full">
                    Get Bundle
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cart Section */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <div className="text-center space-y-6">
            <h2 className="font-playfair text-3xl">Ready to Checkout?</h2>
            <button className="btn-sacred-primary">
              View Cart (0 items)
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
