import type { NextConfig } from "next";

// ─────────────────────────────────────────────────────────────
// Security headers
//   • X-Content-Type-Options  → ngăn MIME sniffing
//   • X-Frame-Options         → chống clickjacking
//   • Referrer-Policy         → kiểm soát referrer leak
//   • Content-Security-Policy → giới hạn nguồn tài nguyên
// ─────────────────────────────────────────────────────────────
const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "img-src 'self' data: blob: https://res.cloudinary.com https://maps.googleapis.com https://maps.gstatic.com https://www.google.com https://www.facebook.com https://www.youtube.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.youtube.com https://www.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://www.google.com https://www.gstatic.com https://connect.facebook.net https://www.youtube.com",
      "frame-src 'self' https://www.google.com https://www.youtube.com https://www.facebook.com",
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // ─────────────────────────────────────────────────────────────
  // 301 Redirects — SEO keyword cannibalization fix
  //   Deployed: 2026-09-22
  //   Review after 4–8 weeks in GSC (check /mega-city-2/phap-ly
  //   and /mega-city-2/bang-gia for ranking improvement).
  //
  //   Hướng A: redirect tin-tuc duplicate → canonical sub-page
  //   • phap-ly: sub-page ranks 3.05 vs blog 10.00 → redirect blog
  //   • bang-gia: sub-page is primary conversion page; blog (pos 31)
  //     traffic + link equity merged into sub-page after on-page upgrade
  // ─────────────────────────────────────────────────────────────
  async redirects() {
    return [
      {
        source: "/tin-tuc/phap-ly-mega-city-2",
        destination: "/mega-city-2/phap-ly",
        permanent: true, // 301
      },
      {
        source: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",
        destination: "/mega-city-2/bang-gia",
        permanent: true, // 301
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dqy4lfmcf/**",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
