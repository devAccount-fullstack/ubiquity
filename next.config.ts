import { createNextRedirect } from "./src/utils/createNextRedirect";
import type { NextConfig } from "next";
import { fetchAllNoCache } from "./src/data/fetchAllNoCache";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://* https://*.plausible.io blob: data:;
  style-src 'self' 'unsafe-inline' https://*;
  img-src 'self' data: blob: https://* https://*.plausible.io;
  font-src 'self' data: https://*;
  frame-src https://*;
  connect-src 'self' https://* https://*.plausible.io wss://ws.hotjar.com blob: data:;
  media-src https://*;
  object-src 'none';
  frame-ancestors 'self' https://*;
`;


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  async headers() {
    return [
      {
        // apply to allroutes 
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
          {
            key: "Permissions-Policy",
            value: "encrypted-media=*",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
  async redirects() {
    return (await fetchAllNoCache("url-redirects")).map((redirect) =>
      createNextRedirect(redirect),
    );
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule: { test?: RegExp }) =>
      rule.test?.test?.(".svg"),
    ) as {
      test: RegExp;
      issuer?: { and?: RegExp[] };
      resourceQuery?: { not?: RegExp[] };
      exclude?: RegExp;
    };

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...(fileLoaderRule.resourceQuery?.not ?? []), /url/],
        }, // exclude if *.svg?url
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        // disable a default plugin
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
