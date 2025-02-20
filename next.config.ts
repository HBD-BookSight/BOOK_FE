import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";
import { RuleSetRule } from "webpack";

const withSerwist = withSerwistInit({
  swSrc: "sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  images: {
    domains: ["s3-alpha-sig.figma.com"], // 책사진 도메인 허용
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule: RuleSetRule) => rule.test instanceof RegExp && rule.test.test(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      } as RuleSetRule,
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule?.issuer,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      } as RuleSetRule
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default withSerwist(nextConfig);
