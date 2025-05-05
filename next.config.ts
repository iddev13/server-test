import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["cobalt.kh.ua", "localhost:3000"],
    },
  },
};

export default nextConfig;
