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
// - images[] khai báo ảnh tiêu biểu của từng trang (chuẩn Google Image Sitemap)
// ─────────────────────────────────────────────────────────────

const BASE = "https://kimoanhdongnai.com.vn";
const CDN  = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";

/** Tạo Cloudinary URL cho sitemap (không cần transform nặng) */
const cimg = (path: string) => `${CDN}/${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    // ── Homepage ─────────────────────────────────────────────
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        cimg("homepage/1.jpg"),
      ],
    },

    // ── Trang dự án Mega City 2 ───────────────────────────────
    {
      url: `${BASE}/mega-city-2`,
      lastModified: "2026-08-09",
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        cimg("megacity2/overview/1.jpg"),
        cimg("megacity2/overview/2.webp"),
        cimg("megacity2/overview/3.webp"),
        cimg("megacity2/amenities/1.jpg"),
        cimg("megacity2/amenities/2.jpg"),
        cimg("megacity2/amenities/3.webp"),
        cimg("megacity2/real/1.png"),
        cimg("megacity2/real/3.png"),
        cimg("megacity2/real/9.png"),
        cimg("megacity2/product/ban-do.jpeg"),
        cimg("megacity2/product/trang-4.jpeg"),
        cimg("megacity2/legal/1.jpeg"),
        cimg("megacity2/legal/2.jpeg"),
        cimg("megacity2/regional-link/1.jpg"),
        cimg("megacity2/plane/1.jpg"),
      ],
    },

  ];
}
