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
      {
        protocol: "https",
        hostname: "res.cloudinay.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media2.dev.to",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
