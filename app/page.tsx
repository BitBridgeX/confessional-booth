import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-sacred-gradient py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="text-6xl md:text-7xl">†</div>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold leading-tight">
              The Confessional Booth
            </h1>
            <p className="text-xl text-sacred-cream opacity-90">
              A sacred space for raw confession, deep reflection, and spiritual transformation
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/podcast" className="btn-sacred-primary">
                Listen to Episodes
              </Link>
              <Link href="/confessions" className="btn-sacred-secondary">
                Share Your Heart
              </Link>
            </div>
          </div>
        </section>

        {/* Four Pillars */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="font-playfair text-4xl text-center mb-12">
            Four Sacred Pillars
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎙️",
                title: "Podcast",
                description: "Deep conversations, testimonies, and spiritual wisdom",
              },
              {
                icon: "🙏",
                title: "Confessions",
                description: "Anonymous prayers and requests from our community",
              },
              {
                icon: "🎵",
                title: "Music",
                description: "Original sacred compositions for reflection",
              },
              {
                icon: "🛍️",
                title: "Merch",
                description: "Physical and digital goods to support the ministry",
              },
            ].map((pillar, i) => (
              <div key={i} className="sacred-card text-center space-y-3">
                <div className="text-4xl">{pillar.icon}</div>
                <h3 className="font-playfair text-xl font-semibold">
                  {pillar.title}
                </h3>
                <p className="text-sm text-sacred-cream opacity-80">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Episodes Preview */}
        <section className="bg-sacred-gradient bg-opacity-30 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-4xl mb-12 text-center">
              Latest Episodes
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="sacred-card h-64 animate-pulse">
                  <div className="h-40 bg-sacred-purple rounded mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-sacred-gold bg-opacity-20 rounded w-3/4"></div>
                    <div className="h-3 bg-sacred-gold bg-opacity-10 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/podcast" className="btn-sacred-primary">
                View All Episodes
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-playfair text-4xl">
              Share Your Confession
            </h2>
            <p className="text-lg text-sacred-cream opacity-80">
              Your prayers and confessions matter. Share anonymously and join a
              community of intercessors.
            </p>
            <Link href="/confessions" className="btn-sacred-primary inline-block">
              Submit a Confession
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-sacred-gradient border-t border-sacred-gold border-opacity-30 py-12 px-4">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <p className="text-sacred-cream opacity-80">
              © 2024 Confessional Booth. A ministry of deep truth and sacred space.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="text-sacred-gold hover:text-sacred-gold-light">
                Privacy
              </a>
              <a href="#" className="text-sacred-gold hover:text-sacred-gold-light">
                Terms
              </a>
              <a href="#" className="text-sacred-gold hover:text-sacred-gold-light">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
