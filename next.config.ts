import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "*.mux.com" },
      { hostname: "*.supabase.co" },
    ],
  },
};

export default nextConfig;
