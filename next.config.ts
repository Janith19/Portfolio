import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // helps catch React bugs
  compiler: {
    styledComponents: false, // if you use Tailwind, can leave false
  },

  images: {
    // allow hosting images from your domain or GitHub/other sources
    domains: ["raw.githubusercontent.com", "avatars.githubusercontent.com"],
    qualities: [75, 50, 25, 10],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // apply to all routes
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
        ],
      },
    ];
  },
};

export default nextConfig;
