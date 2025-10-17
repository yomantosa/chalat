import type { NextConfig } from "next";

const nextConfig = {
  images: {
    // ✅ Allow loading images from GitHub + raw.githubusercontent
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/yomantosa/**", // replace with your username if different
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/yomantosa/**",
      },
    ],
  },

  // ✅ Optional (for GitHub Pages)
  // Uncomment these 2 lines only if you deploy to GitHub Pages instead of Vercel:
  // output: "export",
  // assetPrefix: "/chalat-webapp/",
};

export default nextConfig satisfies NextConfig;
