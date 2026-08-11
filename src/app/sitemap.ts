import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Cập nhật base URL khi có domain corporate chính thức
  const base = "https://kimoanh.com";
  const mc2 = "https://megacity2nhontach.com";
  const now = new Date().toISOString();

  return [
    // ── Corporate homepage ──────────────────────────────────
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/ve-chung-toi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/#ve-kim-oanh`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/#du-an`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/#k-home`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/#lien-he`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ── Mega City 2 landing page ────────────────────────────
    {
      url: `${mc2}/mega-city-2`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${mc2}/mega-city-2#tong-quan`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${mc2}/mega-city-2#bang-gia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${mc2}/mega-city-2#phap-ly`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
