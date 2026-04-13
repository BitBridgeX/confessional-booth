import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-lg">
          <div className="text-8xl animate-float"></div>
          <h1 className="font-playfair text-6xl font-black gradient-pink">404</h1>
          <p className="font-playfair text-2xl">Page Not Found</p>
          <div className="cookie-bubble">
            <p className="font-handwritten text-2xl text-neon-pink">
              &ldquo;Baby, I don&apos;t know where you were trying to go, but Cookie Mami
              didn&apos;t build that page. That&apos;s YOUR sin, not mine.&rdquo;
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/" className="btn-sin-primary">Go Home 🏠</Link>
            <Link href="/confessions" className="btn-sin-secondary">Confess Instead </Link>
          </div>
        </div>
      </main>
    </>
  );
}
