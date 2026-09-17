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
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  
  // Output configuration for deployment
  output: 'standalone',
  
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
  
  // Reduce build time
  typescript: {
    // Ignore type checking errors during build (not recommended for production)
    ignoreBuildErrors: false,
  },
  
  // Optimize bundle
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
