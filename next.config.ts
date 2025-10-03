import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //output: 'export',
  // ath: '/portofolio',
  //assetPrefix: '/portofolio/',
  reactStrictMode: true,
  experimental: {
    esmExternals: "loose", // Allow loose ESM handling
  },

  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
