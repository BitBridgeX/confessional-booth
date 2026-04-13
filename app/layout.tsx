import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Confessional Booth × Cookie Mami | HolyFans",
  description:
    "Confess your digital sins. Get Cookie Mami's response. Buy merch. Listen to the podcast. The sacred space for sinners.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='80' font-size='80'>🍪</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
