import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Confessional Booth",
  description: "Sacred space for confessions, prayers, and deep spiritual conversations",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%23D4AF37'>†</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sacred-purple-dark text-sacred-cream font-geist antialiased">
        {children}
      </body>
    </html>
  );
}
