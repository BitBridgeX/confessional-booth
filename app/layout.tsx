import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";

export const metadata: Metadata = {
  title: "Confessional Booth × Cookie Mami | HolyFans",
  description:
    "Confess your digital sins. Get Cookie Mami's response. Shop 110+ sinful products. Listen to the podcast. The sacred space for sinners. ",
  keywords: ["confessional booth", "cookie mami", "holyfans", "podcast", "merch", "adult", "bdsm", "sinners"],
  authors: [{ name: "Cookie Mami" }],
  creator: "HolyFans",
  publisher: "Confessional Booth",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='80' font-size='80'></text></svg>",
  },
  openGraph: {
    type: "website",
    title: "Confessional Booth × Cookie Mami",
    description: "Confess your digital sins. Get Cookie Mami's sacred roast. Shop 110+ sinful products. The unholy experience you didn't know you needed.",
    siteName: "Confessional Booth",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confessional Booth × Cookie Mami ",
    description: "Confess your digital sins. Cookie Mami responds. Shop the booth. Listen to the podcast.",
    creator: "@confessionalbooth",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
