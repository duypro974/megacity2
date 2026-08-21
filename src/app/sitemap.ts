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

    // ── Trang dự án Mega City 2 (Pillar Page) ────────────────
    {
      url: `${BASE}/mega-city-2`,
      lastModified: "2026-08-13",
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

    // ── Topic Cluster: Mega City 2 sub-pages ─────────────────

    {
      url: `${BASE}/mega-city-2/vi-tri`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.85,
      images: [
        cimg("megacity2/regional-link/1.jpg"),
        cimg("megacity2/regional-link/2.jpg"),
        cimg("megacity2/regional-link/3.jpg"),
        cimg("megacity2/plane/1.jpg"),
        cimg("megacity2/plane/2.webp"),
      ],
    },

    {
      url: `${BASE}/mega-city-2/phap-ly`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.85,
      images: [
        cimg("megacity2/legal/1.jpeg"),
        cimg("megacity2/legal/2.jpeg"),
        cimg("megacity2/legal/3.jpeg"),
      ],
    },

    {
      url: `${BASE}/mega-city-2/mat-bang`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.82,
      images: [
        cimg("megacity2/product/ban-do.jpeg"),
        cimg("megacity2/product/trang-4.jpeg"),
        cimg("megacity2/product/trang-6.jpeg"),
        cimg("megacity2/product/trang-7.jpeg"),
      ],
    },

    {
      url: `${BASE}/mega-city-2/tien-ich`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.82,
      images: [
        cimg("megacity2/amenities/1.jpg"),
        cimg("megacity2/amenities/2.jpg"),
        cimg("megacity2/amenities/3.webp"),
        cimg("megacity2/amenities/4.jpg"),
      ],
    },

    {
      url: `${BASE}/mega-city-2/tien-do`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.80,
      images: [
        cimg("megacity2/real/1.png"),
        cimg("megacity2/real/2.png"),
        cimg("megacity2/real/3.png"),
        cimg("megacity2/real/8.png"),
      ],
    },

    {
      url: `${BASE}/mega-city-2/hinh-anh`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.78,
      images: [
        cimg("megacity2/real/1.png"),
        cimg("megacity2/real/4.png"),
        cimg("megacity2/real/9.png"),
        cimg("megacity2/overview/1.jpg"),
        cimg("megacity2/amenities/1.jpg"),
        cimg("megacity2/regional-link/1.jpg"),
      ],
    },

    {
      url: `${BASE}/mega-city-2/bang-gia`,
      lastModified: "2026-08-13",
      changeFrequency: "weekly",
      priority: 0.88,
      images: [
        cimg("megacity2/real/9.png"),
        cimg("megacity2/overview/1.jpg"),
      ],
    },

    {
      url: `${BASE}/mega-city-2/thanh-toan`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.80,
    },

    {
      url: `${BASE}/mega-city-2/faq`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.82,
    },

    // ── Keyword gap pages (mới tạo 2026-08-13) ───────────────

    {
      url: `${BASE}/mega-city-2/nha-pho-lien-ke`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.83,
      images: [
        cimg("megacity2/real/3.png"),
        cimg("megacity2/real/5.png"),
        cimg("megacity2/real/7.png"),
        cimg("megacity2/real/1.png"),
      ],
    },

    {
      url: `${BASE}/mega-city-2/quy-hoach-nhan-trach`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.80,
      images: [
        cimg("megacity2/regional-link/1.jpg"),
        cimg("megacity2/regional-link/2.jpg"),
        cimg("megacity2/plane/1.jpg"),
        cimg("megacity2/plane/2.webp"),
      ],
    },

    {
      url: `${BASE}/mega-city-2/san-bay-long-thanh`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.80,
      images: [
        cimg("megacity2/plane/1.jpg"),
        cimg("megacity2/plane/2.webp"),
        cimg("megacity2/plane/3.webp"),
        cimg("megacity2/plane/4.jpg"),
        cimg("megacity2/regional-link/1.jpg"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/duong-25c`,
      lastModified: "2026-08-19",
      changeFrequency: "monthly",
      priority: 0.80,
      images: [
        cimg("megacity2/news14/1"),
        cimg("megacity2/news14/2"),
        cimg("megacity2/news14/3"),
        cimg("megacity2/news14/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/cau-cat-lai`,
      lastModified: "2026-08-19",
      changeFrequency: "monthly",
      priority: 0.80,
      images: [
        cimg("megacity2/news15/1"),
        cimg("megacity2/news15/2"),
        cimg("megacity2/news15/3"),
        cimg("megacity2/news15/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/vanh-dai-3`,
      lastModified: "2026-08-19",
      changeFrequency: "monthly",
      priority: 0.82,
      images: [
        cimg("megacity2/news16/1"),
        cimg("megacity2/news16/2"),
        cimg("megacity2/news16/3"),
        cimg("megacity2/news16/4"),
        cimg("megacity2/news16/5"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/cao-toc-ben-luc-long-thanh`,
      lastModified: "2026-08-20",
      changeFrequency: "monthly",
      priority: 0.82,
      images: [
        cimg("megacity2/news17/1"),
        cimg("megacity2/news17/2"),
        cimg("megacity2/news17/3"),
        cimg("megacity2/news17/4"),
        cimg("megacity2/news17/5"),
      ],
    },

    {
      url: `${BASE}/tin-tuc/cao-toc-bien-hoa-vung-tau`,
      lastModified: "2026-08-20",
      changeFrequency: "monthly",
      priority: 0.80,
      images: [
        cimg("megacity2/news18/1"),
        cimg("megacity2/news18/2"),
        cimg("megacity2/news18/3"),
        cimg("megacity2/news18/4"),
        cimg("megacity2/news18/5"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/cau-nhon-trach`,
      lastModified: "2026-08-21",
      changeFrequency: "monthly",
      priority: 0.84,
      images: [
        cimg("megacity2/news19/1"),
        cimg("megacity2/news19/2"),
        cimg("megacity2/news19/3"),
        cimg("megacity2/news19/4"),
        cimg("megacity2/news19/5"),
        cimg("megacity2/news19/6"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/quy-hoach-1-500-nhon-trach`,
      lastModified: "2026-08-21",
      changeFrequency: "monthly",
      priority: 0.83,
      images: [
        cimg("megacity2/news20/1"),
        cimg("megacity2/news20/2"),
        cimg("megacity2/news20/3"),
        cimg("megacity2/news20/4"),
        cimg("megacity2/news20/5"),
        cimg("megacity2/news20/6"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/nen-mua-dat-nen-nhon-trach-hay-dau-tu-can-ho`,
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.82,
      images: [
        cimg("megacity2/news21/1"),
        cimg("megacity2/news21/2"),
        cimg("megacity2/news21/3"),
        cimg("megacity2/news21/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi`,
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.84,
      images: [
        cimg("megacity2/news22/1"),
        cimg("megacity2/news22/2"),
        cimg("megacity2/news22/3"),
        cimg("megacity2/news22/4"),
        cimg("megacity2/news22/5"),
      ],
    },

    // ── Tin tức ──────────────────────────────────────────────

    {
      url: `${BASE}/tin-tuc/bang-gia-mega-city-2-moi-nhat`,
      lastModified: "2026-08-13",
      changeFrequency: "weekly",
      priority: 0.78,
      images: [
        cimg("megacity2/news2/1"),
        cimg("megacity2/news2/2"),
        cimg("megacity2/news2/3"),
      ],
    },

    {
      url: `${BASE}/tin-tuc/gia-dat-nhon-trach-2026`,
      lastModified: "2026-08-16",
      changeFrequency: "weekly",
      priority: 0.80,
      images: [
        cimg("megacity2/news6/1"),
        cimg("megacity2/news6/2"),
        cimg("megacity2/news6/3"),
        cimg("megacity2/news6/4"),
      ],
    },

    {
      url: `${BASE}/tin-tuc/quy-hoach-nhon-trach-moi-nhat`,
      lastModified: "2026-08-16",
      changeFrequency: "monthly",
      priority: 0.80,
      images: [
        cimg("megacity2/news7/1"),
        cimg("megacity2/news7/2"),
        cimg("megacity2/news7/3"),
        cimg("megacity2/news7/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach`,
      lastModified: "2026-08-17",
      changeFrequency: "monthly",
      priority: 0.82,
      images: [
        cimg("megacity2/news8/1"),
        cimg("megacity2/news8/2"),
        cimg("megacity2/news8/3"),
        cimg("megacity2/news8/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/cao-toc-bien-hoa-vung-tau`,
      lastModified: "2026-08-17",
      changeFrequency: "monthly",
      priority: 0.80,
      images: [
        cimg("megacity2/news9/1"),
        cimg("megacity2/news9/2"),
        cimg("megacity2/news9/3"),
        cimg("megacity2/news9/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach`,
      lastModified: "2026-08-18",
      changeFrequency: "monthly",
      priority: 0.82,
      images: [
        cimg("megacity2/news10/1"),
        cimg("megacity2/news10/2"),
        cimg("megacity2/news10/3"),
        cimg("megacity2/news10/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/5-ly-do-nen-dau-tu-mega-city-2`,
      lastModified: "2026-08-18",
      changeFrequency: "monthly",
      priority: 0.83,
      images: [
        cimg("megacity2/news11/1"),
        cimg("megacity2/news11/2"),
        cimg("megacity2/news11/3"),
        cimg("megacity2/news11/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat`,
      lastModified: "2026-08-19",
      changeFrequency: "monthly",
      priority: 0.82,
      images: [
        cimg("megacity2/news12/1"),
        cimg("megacity2/news12/2"),
        cimg("megacity2/news12/3"),
        cimg("megacity2/news12/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/lich-su-phat-trien-kim-oanh-group`,
      lastModified: "2026-08-19",
      changeFrequency: "monthly",
      priority: 0.78,
      images: [
        cimg("megacity2/news13/1"),
        cimg("megacity2/news13/2"),
        cimg("megacity2/news13/3"),
        cimg("megacity2/news13/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.75,
      images: [
        cimg("megacity2/news1/1"),
        cimg("megacity2/news1/2"),
        cimg("megacity2/news1/3"),
      ],
    },

    // ── Về chúng tôi ─────────────────────────────────────────
    {
      url: `${BASE}/ve-chung-toi`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly",
      priority: 0.75,
      images: [
        cimg("about/kog-1"),
        cimg("about/kog-2"),
      ],
    },

  ];
}
