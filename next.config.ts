import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["s3-alpha-sig.figma.com"], // 책사진 도메인 허용
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
