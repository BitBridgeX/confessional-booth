"use client";

import Navigation from "@/components/Navigation";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  icon: string;
  badge?: string;
  description: string;
}

const ALL_PRODUCTS: Product[] = [
  // ═══ APPAREL (20) ═══
  { id: "a1", name: "\"Forgive Me Daddy\" Tee", price: 29.99, category: "Apparel", subcategory: "T-Shirts", icon: "", badge: "BESTSELLER", description: "Classic fit, sinfully soft cotton" },
  { id: "a2", name: "Cookie Mami Logo Tee", price: 29.99, category: "Apparel", subcategory: "T-Shirts", icon: "", description: "The iconic cookie cross design" },
  { id: "a3", name: "\"Confess Your Sins\" Tee", price: 34.99, category: "Apparel", subcategory: "T-Shirts", icon: "", description: "Bold neon print on black" },
  { id: "a4", name: "\"Holy Water\" Crop Top", price: 27.99, category: "Apparel", subcategory: "Crop Tops", icon: "", description: "Show some skin, show some faith" },
  { id: "a5", name: "Sinners Club Crop Top", price: 27.99, category: "Apparel", subcategory: "Crop Tops", icon: "", badge: "NEW", description: "Members-only vibes" },
  { id: "a6", name: "Neon Cross Crop Top", price: 32.99, category: "Apparel", subcategory: "Crop Tops", icon: "", description: "Glow-in-the-dark print" },
  { id: "a7", name: "Cookie Mami Hoodie", price: 54.99, category: "Apparel", subcategory: "Hoodies", icon: "", badge: "BESTSELLER", description: "Oversized, cozy, sinful" },
  { id: "a8", name: "\"Pray Harder\" Hoodie", price: 54.99, category: "Apparel", subcategory: "Hoodies", icon: "", description: "Back print with dripping cross" },
  { id: "a9", name: "Confessional Booth Zip-Up", price: 59.99, category: "Apparel", subcategory: "Hoodies", icon: "", description: "Premium heavyweight fleece" },
  { id: "a10", name: "Velvet Sin Hoodie", price: 64.99, category: "Apparel", subcategory: "Hoodies", icon: "", badge: "LIMITED", description: "Velvet touch, devilish comfort" },
  { id: "a11", name: "\"Bad & Blessed\" Dad Cap", price: 24.99, category: "Apparel", subcategory: "Caps", icon: "", description: "Embroidered cross + cookie" },
  { id: "a12", name: "Cookie Mami Snapback", price: 29.99, category: "Apparel", subcategory: "Caps", icon: "", description: "Flat brim, full sinner" },
  { id: "a13", name: "Neon Halo Beanie", price: 22.99, category: "Apparel", subcategory: "Caps", icon: "", description: "Pink neon halo embroidery" },
  { id: "a14", name: "\"Not A Saint\" Tank Top", price: 24.99, category: "Apparel", subcategory: "T-Shirts", icon: "", description: "Perfect for the gym or the club" },
  { id: "a15", name: "HolyFans Jersey", price: 44.99, category: "Apparel", subcategory: "T-Shirts", icon: "", badge: "LIMITED", description: "Athletic fit, divine number" },
  { id: "a16", name: "Mesh \"Pray\" Top", price: 34.99, category: "Apparel", subcategory: "Crop Tops", icon: "", description: "See-through sass" },
  { id: "a17", name: "Cookie Mami Sweatpants", price: 44.99, category: "Apparel", subcategory: "T-Shirts", icon: "", description: "Lounge in luxury sin" },
  { id: "a18", name: "\"Heaven Sent\" Shorts", price: 29.99, category: "Apparel", subcategory: "T-Shirts", icon: "", description: "Booty shorts with halo print" },
  { id: "a19", name: "Satin Bomber Jacket", price: 79.99, category: "Apparel", subcategory: "Hoodies", icon: "", badge: "PREMIUM", description: "Cross embroidery on back" },
  { id: "a20", name: "Fishnet Sleeve Long Tee", price: 39.99, category: "Apparel", subcategory: "T-Shirts", icon: "", description: "Long body, fishnet sleeves" },

  // ═══ STICKERS & PRINTS (20) ═══
  { id: "s1", name: "Holographic Prayer Card Set", price: 12.99, category: "Stickers & Prints", subcategory: "Prayer Cards", icon: "", badge: "BESTSELLER", description: "Set of 10 holographic cards" },
  { id: "s2", name: "\"Forgive Me\" Holo Sticker", price: 4.99, category: "Stickers & Prints", subcategory: "Stickers", icon: "", description: "Holographic vinyl, waterproof" },
  { id: "s3", name: "Cookie Mami Portrait Print", price: 19.99, category: "Stickers & Prints", subcategory: "Prints", icon: "", description: "8x10 premium matte finish" },
  { id: "s4", name: "Neon Cross Sticker Pack", price: 8.99, category: "Stickers & Prints", subcategory: "Stickers", icon: "", description: "5 vinyl stickers, neon designs" },
  { id: "s5", name: "\"Sin City\" Poster", price: 24.99, category: "Stickers & Prints", subcategory: "Prints", icon: "", description: "24x36 glossy concert poster" },
  { id: "s6", name: "Confessional Booth Art Print", price: 29.99, category: "Stickers & Prints", subcategory: "Prints", icon: "", badge: "LIMITED", description: "Signed & numbered, 100 edition" },
  { id: "s7", name: "\"Bad & Blessed\" Sticker", price: 3.99, category: "Stickers & Prints", subcategory: "Stickers", icon: "", description: "Die-cut, laptop-ready" },
  { id: "s8", name: "Cookie Cross Sticker", price: 3.99, category: "Stickers & Prints", subcategory: "Stickers", icon: "", description: "The iconic logo sticker" },
  { id: "s9", name: "HolyFans Bumper Sticker", price: 5.99, category: "Stickers & Prints", subcategory: "Stickers", icon: "", description: "For the bold commuter" },
  { id: "s10", name: "Tarot-Style Prayer Cards", price: 16.99, category: "Stickers & Prints", subcategory: "Prayer Cards", icon: "", badge: "NEW", description: "22 card set, custom artwork" },
  { id: "s11", name: "\"Repent\" Neon Sign Print", price: 34.99, category: "Stickers & Prints", subcategory: "Prints", icon: "", description: "LED neon effect, 16x20" },
  { id: "s12", name: "Cookie Mami Sticker Sheet", price: 9.99, category: "Stickers & Prints", subcategory: "Stickers", icon: "", description: "12 mini stickers, various poses" },
  { id: "s13", name: "\"Pray Harder\" Vinyl", price: 4.99, category: "Stickers & Prints", subcategory: "Stickers", icon: "", description: "Clear vinyl, white text" },
  { id: "s14", name: "Gothic Cross Art Print", price: 22.99, category: "Stickers & Prints", subcategory: "Prints", icon: "", description: "Dark gothic aesthetic, 11x14" },
  { id: "s15", name: "Emoji Sin Sticker Pack", price: 7.99, category: "Stickers & Prints", subcategory: "Stickers", icon: "", description: "10 custom sin emojis" },
  { id: "s16", name: "\"Holy Water\" Holo Sticker", price: 4.99, category: "Stickers & Prints", subcategory: "Stickers", icon: "", description: "Flask shape, holographic" },
  { id: "s17", name: "Confessional Photo Set", price: 14.99, category: "Stickers & Prints", subcategory: "Prints", icon: "", description: "Set of 5 polaroid-style prints" },
  { id: "s18", name: "\"Sinners Welcome\" Door Sign", price: 12.99, category: "Stickers & Prints", subcategory: "Prints", icon: "", description: "Acrylic hanging sign" },
  { id: "s19", name: "Scripture Verse Cards", price: 11.99, category: "Stickers & Prints", subcategory: "Prayer Cards", icon: "", description: "Book of HolyFans excerpts" },
  { id: "s20", name: "Cookie Mami Calendar", price: 19.99, category: "Stickers & Prints", subcategory: "Prints", icon: "", badge: "NEW", description: "12 months of sin & sass" },

  // ═══ LINGERIE & INTIMATES (15) ═══
  { id: "l1", name: "\"Holy Night\" Lace Set", price: 49.99, category: "Lingerie & Intimates", subcategory: "Sets", icon: "", badge: "BESTSELLER", description: "Bralette + thong, black lace" },
  { id: "l2", name: "Cookie Mami Silk Robe", price: 64.99, category: "Lingerie & Intimates", subcategory: "Robes", icon: "", badge: "PREMIUM", description: "Satin robe with embroidered logo" },
  { id: "l3", name: "\"Confess\" Bodysuit", price: 44.99, category: "Lingerie & Intimates", subcategory: "Bodysuits", icon: "", description: "Mesh bodysuit, text detail" },
  { id: "l4", name: "Velvet Cross Bralette", price: 34.99, category: "Lingerie & Intimates", subcategory: "Sets", icon: "", description: "Deep plum velvet, cross straps" },
  { id: "l5", name: "\"Sinner\" Thong Set (3-pack)", price: 29.99, category: "Lingerie & Intimates", subcategory: "Underwear", icon: "", description: "Lace thongs, custom waistband" },
  { id: "l6", name: "Harness Bodysuit", price: 54.99, category: "Lingerie & Intimates", subcategory: "Bodysuits", icon: "", badge: "HOT", description: "Adjustable straps, O-ring detail" },
  { id: "l7", name: "Fishnet Bodystocking", price: 24.99, category: "Lingerie & Intimates", subcategory: "Bodysuits", icon: "", description: "Full body, open crotch" },
  { id: "l8", name: "\"Pray For Me\" Boyshorts", price: 18.99, category: "Lingerie & Intimates", subcategory: "Underwear", icon: "", description: "Comfy cotton, cheeky text" },
  { id: "l9", name: "Latex-Look Corset", price: 59.99, category: "Lingerie & Intimates", subcategory: "Sets", icon: "", badge: "LIMITED", description: "Faux latex, steel boned" },
  { id: "l10", name: "Sheer Prayer Chemise", price: 39.99, category: "Lingerie & Intimates", subcategory: "Robes", icon: "", description: "See-through with lace trim" },
  { id: "l11", name: "Garter Belt Set", price: 34.99, category: "Lingerie & Intimates", subcategory: "Sets", icon: "", description: "Belt + stockings, cross clips" },
  { id: "l12", name: "\"Bad Angel\" Wings Set", price: 69.99, category: "Lingerie & Intimates", subcategory: "Sets", icon: "", badge: "PREMIUM", description: "Bra + thong + detachable wings" },
  { id: "l13", name: "Lace Kimono Robe", price: 44.99, category: "Lingerie & Intimates", subcategory: "Robes", icon: "", description: "Floral lace, floor length" },
  { id: "l14", name: "\"HolyFans\" Boxer Briefs", price: 22.99, category: "Lingerie & Intimates", subcategory: "Underwear", icon: "", description: "Unisex, premium cotton" },
  { id: "l15", name: "Cage Bra Harness", price: 29.99, category: "Lingerie & Intimates", subcategory: "Sets", icon: "", description: "Over-clothes or under, you decide" },

  // ═══ ADULT TOYS & PLEASURE (20) ═══
  { id: "t1", name: "\"Holy Vibrations\" Smart Vibe", price: 79.99, category: "Adult Toys & Pleasure", subcategory: "Smart Toys", icon: "", badge: "BESTSELLER", description: "App-controlled, 10 patterns" },
  { id: "t2", name: "Cookie Mami's Wand", price: 59.99, category: "Adult Toys & Pleasure", subcategory: "Traditional", icon: "", description: "Powerful, rechargeable wand" },
  { id: "t3", name: "\"Confessional\" Couples Set", price: 99.99, category: "Adult Toys & Pleasure", subcategory: "Smart Toys", icon: "", badge: "HOT", description: "His + hers + app sync" },
  { id: "t4", name: "Velvet Restraint Set", price: 44.99, category: "Adult Toys & Pleasure", subcategory: "Bondage", icon: "", description: "Wrist + ankle cuffs, velvet" },
  { id: "t5", name: "\"Repent\" Paddle", price: 29.99, category: "Adult Toys & Pleasure", subcategory: "Bondage", icon: "", badge: "ICONIC", description: "Leather paddle, leaves 'REPENT' imprint" },
  { id: "t6", name: "Satin Blindfold", price: 14.99, category: "Adult Toys & Pleasure", subcategory: "Bondage", icon: "", description: "Black satin, adjustable" },
  { id: "t7", name: "Holy Water Lube (Set of 3)", price: 24.99, category: "Adult Toys & Pleasure", subcategory: "Lubricants", icon: "", description: "Water-based, 3 flavors" },
  { id: "t8", name: "\"Blessed\" Massage Oil", price: 19.99, category: "Adult Toys & Pleasure", subcategory: "Lubricants", icon: "", description: "Warming oil, vanilla cookie scent" },
  { id: "t9", name: "Bondage Rope Set (3 colors)", price: 22.99, category: "Adult Toys & Pleasure", subcategory: "Bondage", icon: "", description: "Soft cotton, 30ft each" },
  { id: "t10", name: "\"Pray Position\" Kneeling Pad", price: 34.99, category: "Adult Toys & Pleasure", subcategory: "Bondage", icon: "", description: "Memory foam, washable cover" },
  { id: "t11", name: "Remote Control Panty Vibe", price: 49.99, category: "Adult Toys & Pleasure", subcategory: "Smart Toys", icon: "", badge: "DISCREET", description: "Whisper quiet, date night ready" },
  { id: "t12", name: "\"Cardinal Sin\" Bullet", price: 24.99, category: "Adult Toys & Pleasure", subcategory: "Traditional", icon: "", description: "Mini powerhouse, USB rechargeable" },
  { id: "t13", name: "Feather Tickler", price: 12.99, category: "Adult Toys & Pleasure", subcategory: "Bondage", icon: "", description: "Ostrich feather, long handle" },
  { id: "t14", name: "\"Absolution\" Massage Candle", price: 19.99, category: "Adult Toys & Pleasure", subcategory: "Lubricants", icon: "", description: "Soy wax, becomes massage oil" },
  { id: "t15", name: "Collar & Leash Set", price: 34.99, category: "Adult Toys & Pleasure", subcategory: "Bondage", icon: "", description: "Faux leather, gold hardware" },
  { id: "t16", name: "\"Hail Mary\" Suction Toy", price: 64.99, category: "Adult Toys & Pleasure", subcategory: "Traditional", icon: "", badge: "NEW", description: "Air pulse technology, 8 modes" },
  { id: "t17", name: "Dice Game: Sacred or Sinful", price: 14.99, category: "Adult Toys & Pleasure", subcategory: "Traditional", icon: "", description: "Couples dice game, 36 combos" },
  { id: "t18", name: "Body-Safe Silicone Set", price: 89.99, category: "Adult Toys & Pleasure", subcategory: "Traditional", icon: "", badge: "PREMIUM", description: "3-piece graduated set" },
  { id: "t19", name: "\"Confession\" Warming Lube", price: 16.99, category: "Adult Toys & Pleasure", subcategory: "Lubricants", icon: "", description: "Warming sensation, water-based" },
  { id: "t20", name: "Under-Bed Restraint System", price: 39.99, category: "Adult Toys & Pleasure", subcategory: "Bondage", icon: "", description: "4-point, adjustable straps" },

  // ═══ FOOD PRODUCTS (15) ═══
  { id: "f1", name: "Cookie Mami's Signature Box", price: 29.99, category: "Food Products", subcategory: "Cookies", icon: "", badge: "BESTSELLER", description: "12 artisan cookies, mixed flavors" },
  { id: "f2", name: "\"Sin\" Chocolate Chip Cookies", price: 19.99, category: "Food Products", subcategory: "Cookies", icon: "", description: "Double chocolate, sinfully rich" },
  { id: "f3", name: "Red Velvet Temptation Box", price: 24.99, category: "Food Products", subcategory: "Cookies", icon: "", description: "6 giant red velvet cookies" },
  { id: "f4", name: "\"Holy Communion\" Cookie Kit", price: 34.99, category: "Food Products", subcategory: "Communion Kits", icon: "", badge: "ICONIC", description: "Cookie wafers + grape juice shots" },
  { id: "f5", name: "Snack Box: Sinner's Delight", price: 39.99, category: "Food Products", subcategory: "Snack Boxes", icon: "", description: "Assorted sinful snacks, monthly" },
  { id: "f6", name: "Cookie Mami Hot Sauce", price: 14.99, category: "Food Products", subcategory: "Gourmet", icon: "", description: "\"Hellfire\" blend, limited batch" },
  { id: "f7", name: "Blessed Brownie Box", price: 22.99, category: "Food Products", subcategory: "Cookies", icon: "", description: "6 fudge brownies, cross-shaped" },
  { id: "f8", name: "\"Holy Water\" Drink Mix (6pk)", price: 18.99, category: "Food Products", subcategory: "Gourmet", icon: "", description: "Electrolyte mix, grape flavor" },
  { id: "f9", name: "Cookie Mami's Gummy Crosses", price: 12.99, category: "Food Products", subcategory: "Snack Boxes", icon: "", description: "Gummy candy, cross-shaped" },
  { id: "f10", name: "Artisan Jam: \"Forbidden Fruit\"", price: 16.99, category: "Food Products", subcategory: "Gourmet", icon: "", description: "Apple + pomegranate preserves" },
  { id: "f11", name: "Communion Wine Gummies", price: 14.99, category: "Food Products", subcategory: "Communion Kits", icon: "", description: "Wine-flavored gummies, 21+" },
  { id: "f12", name: "Cookie Mami Cake Pops (12)", price: 26.99, category: "Food Products", subcategory: "Cookies", icon: "", description: "Cross-shaped, assorted coatings" },
  { id: "f13", name: "\"Temptation\" Trail Mix", price: 11.99, category: "Food Products", subcategory: "Snack Boxes", icon: "", description: "Dark chocolate + dried fruit + nuts" },
  { id: "f14", name: "Matcha \"Meditation\" Powder", price: 24.99, category: "Food Products", subcategory: "Gourmet", icon: "", description: "Ceremonial grade, Cookie Mami blend" },
  { id: "f15", name: "Monthly Snack Subscription", price: 34.99, category: "Food Products", subcategory: "Snack Boxes", icon: "", badge: "SUBSCRIBE", description: "New treats every month" },

  // ═══ ACCESSORIES (10) ═══
  { id: "ac1", name: "\"Pray\" Phone Case", price: 24.99, category: "Accessories", subcategory: "Phone Cases", icon: "", description: "Fits iPhone & Samsung, matte" },
  { id: "ac2", name: "Cookie Mami Tote Bag", price: 22.99, category: "Accessories", subcategory: "Tote Bags", icon: "", badge: "BESTSELLER", description: "Canvas, double handle, roomy" },
  { id: "ac3", name: "Enamel Pin: Neon Cross", price: 9.99, category: "Accessories", subcategory: "Pins", icon: "", description: "1.5 inch, gold plated" },
  { id: "ac4", name: "Enamel Pin: Cookie Mami", price: 9.99, category: "Accessories", subcategory: "Pins", icon: "", description: "Cookie with halo design" },
  { id: "ac5", name: "\"Holy Water\" Bottle", price: 29.99, category: "Accessories", subcategory: "Bottles", icon: "", description: "Stainless steel, 20oz, insulated" },
  { id: "ac6", name: "Sinners Club Keychain", price: 7.99, category: "Accessories", subcategory: "Pins", icon: "", description: "Metal, double-sided" },
  { id: "ac7", name: "\"Confess\" LED Phone Case", price: 34.99, category: "Accessories", subcategory: "Phone Cases", icon: "", badge: "NEW", description: "Light-up edges when calls come in" },
  { id: "ac8", name: "Cookie Mami Laptop Sleeve", price: 29.99, category: "Accessories", subcategory: "Tote Bags", icon: "", description: "Neoprene, fits 13-15 inch" },
  { id: "ac9", name: "Pin Collector Set (5 pins)", price: 34.99, category: "Accessories", subcategory: "Pins", icon: "", badge: "DEAL", description: "All 5 designs, save $15" },
  { id: "ac10", name: "\"Blessed\" Fanny Pack", price: 24.99, category: "Accessories", subcategory: "Tote Bags", icon: "", description: "Faux leather, gold hardware" },

  // ═══ DIGITAL PRODUCTS (10) ═══
  { id: "d1", name: "Book of HolyFans (Digital)", price: 14.99, category: "Digital Products", subcategory: "Books", icon: "", badge: "ESSENTIAL", description: "20 scriptures + 5 sermons" },
  { id: "d2", name: "Complete Song Collection", price: 9.99, category: "Digital Products", subcategory: "Music", icon: "", description: "3 songs with lyrics, high-quality" },
  { id: "d3", name: "Podcast Script Bundle", price: 19.99, category: "Digital Products", subcategory: "Scripts", icon: "", description: "10 episode scripts, Cookie Mami voice" },
  { id: "d4", name: "Promo Video Scripts (4)", price: 14.99, category: "Digital Products", subcategory: "Scripts", icon: "", description: "4 video scripts, ready to film" },
  { id: "d5", name: "Digital Sermon Collection", price: 12.99, category: "Digital Products", subcategory: "Sermons", icon: "", description: "5 complete digital sermons" },
  { id: "d6", name: "HolyFans App Access (Annual)", price: 49.99, category: "Digital Products", subcategory: "App", icon: "", badge: "PREMIUM", description: "Full access, exclusive content" },
  { id: "d7", name: "Cookie Mami Voice Pack", price: 7.99, category: "Digital Products", subcategory: "Music", icon: "", description: "Ringtones + notification sounds" },
  { id: "d8", name: "Confession Journal (PDF)", price: 4.99, category: "Digital Products", subcategory: "Books", icon: "", description: "Printable guided journal, 52 weeks" },
  { id: "d9", name: "Scripture Wallpaper Pack", price: 3.99, category: "Digital Products", subcategory: "Books", icon: "", description: "20 phone/desktop wallpapers" },
  { id: "d10", name: "Creator Starter Kit", price: 29.99, category: "Digital Products", subcategory: "Scripts", icon: "", badge: "BUNDLE", description: "Everything to start your own ministry" },
];

const CATEGORIES = [
  "All",
  "Apparel",
  "Stickers & Prints",
  "Lingerie & Intimates",
  "Adult Toys & Pleasure",
  "Food Products",
  "Accessories",
  "Digital Products",
];

export default function MerchPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<string[]>([]);

  const filtered =
    activeCategory === "All"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === activeCategory);

  function addToCart(id: string) {
    setCart((prev) => [...prev, id]);
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Header */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sacred-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-hot-pink/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-playfair text-5xl md:text-6xl font-black">
              <span className="gradient-gold">Shop Sin</span>
            </h1>
            <p className="text-xl text-blush/80">
              {ALL_PRODUCTS.length}+ products. From cookies to handcuffs. Cookie Mami curates only the finest.
            </p>
            {cart.length > 0 && (
              <div className="inline-flex items-center gap-2 badge badge-pink text-base px-6 py-2">
                🛒 Cart: {cart.length} item{cart.length > 1 ? "s" : ""}
              </div>
            )}
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-16 z-40 bg-dark-velvet/90 backdrop-blur-xl border-b border-hot-pink/10 py-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-hot-pink text-white shadow-lg shadow-hot-pink/30"
                      : "bg-hot-pink/10 text-blush/70 hover:bg-hot-pink/20"
                  }`}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className="ml-1 opacity-60">
                      ({ALL_PRODUCTS.filter((p) => p.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto py-12 px-4">
          <p className="text-sm text-blush/40 mb-8">
            Showing {filtered.length} product{filtered.length > 1 ? "s" : ""}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <div key={product.id} className="merch-card group flex flex-col">
                <div className="relative h-40 md:h-48 bg-gradient-to-br from-hot-pink/20 via-royal-purple/30 to-sacred-gold/10 flex items-center justify-center">
                  <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform">
                    {product.icon}
                  </span>
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-hot-pink text-white text-[10px] font-black uppercase px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-sm group-hover:text-hot-pink transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-blush/50 mb-3 flex-1">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-playfair text-lg text-sacred-gold">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="text-xs bg-hot-pink/20 hover:bg-hot-pink text-hot-pink hover:text-white px-3 py-1.5 rounded-full transition-all font-bold"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
