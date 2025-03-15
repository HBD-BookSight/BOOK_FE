import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
      },
      {
        protocol: "https",
        hostname: "image.aladin.co.kr",
        pathname: "/product/**", // 경로 패턴 설정
      },
      {
        protocol: "http",
        hostname: "image.aladin.co.kr",
        pathname: "/product/**", // 경로 패턴 설정
      },
      {
        protocol: "https",
        hostname: "search1.kakaocdn.net",
        pathname: "/thumb/**", // 경로 패턴 설정
      },
    ], // 책사진 도메인 허용
  },
  webpack: (config) => {
    // SVG 파일에 대한 규칙 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
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

export default withSerwist(nextConfig);
