import { MetadataRoute } from "next";

// ─────────────────────────────────────────────────────────────
// robots.ts — Kim Oanh Đồng Nai
// Domain chính thức: https://kimoanhdongnai.com.vn
// ─────────────────────────────────────────────────────────────

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"],
      },
    ],
    sitemap: "https://kimoanhdongnai.com.vn/sitemap_index.xml",
    host: "https://kimoanhdongnai.com.vn",
  };
}
