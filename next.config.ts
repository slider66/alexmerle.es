import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 60,
  },
};

export default nextConfig;
