import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.graphassets.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
