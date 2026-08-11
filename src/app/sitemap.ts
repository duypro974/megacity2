import { MetadataRoute } from "next";

// ─────────────────────────────────────────────────────────────
// sitemap.ts — Kim Oanh Đồng Nai
// Domain chính thức: https://kimoanhdongnai.com.vn
//
// QUY TẮC:
// - Chỉ đưa vào URL page thực tế (đã có route trong src/app/)
// - KHÔNG dùng fragment #anchor — không phải route riêng
// - KHÔNG dùng domain cũ (kimoanhdongnai.com.vn là domain duy nhất)
// - Admin và API không đưa vào sitemap
// ─────────────────────────────────────────────────────────────

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kimoanhdongnai.com.vn";
  const now = new Date().toISOString();

  return [
    // ── Homepage ─────────────────────────────────────────────
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Giới thiệu ───────────────────────────────────────────
    {
      url: `${base}/ve-chung-toi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Mega City 2 landing page ──────────────────────────────
    {
      url: `${base}/mega-city-2`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
