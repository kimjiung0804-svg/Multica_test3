import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Allow LAN access to Next.js HMR /dev resources from this host
  allowedDevOrigins: ["192.168.0.108", "localhost:3000"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
