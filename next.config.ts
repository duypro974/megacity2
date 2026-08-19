import type { NextConfig } from "next";

// ─────────────────────────────────────────────────────────────
// Security headers — Nhiệm vụ 4/5/6
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
      "img-src 'self' data: https://res.cloudinary.com https://maps.googleapis.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "connect-src 'self'",
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Áp dụng cho toàn bộ route
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
      // Cho phép các domain ảnh khác nếu cần (maps embed, etc.)
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
