import { MetadataRoute } from "next";

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// sitemap.ts â€” Kim Oanh Äá»“ng Nai
// Domain chÃ­nh thá»©c: https://kimoanhdongnai.com.vn
//
// QUY Táº®C:
// - Chá»‰ Ä‘Æ°a vÃ o URL page thá»±c táº¿ (Ä‘Ã£ cÃ³ route trong src/app/)
// - KHÃ”NG dÃ¹ng fragment #anchor â€” khÃ´ng pháº£i route riÃªng
// - KHÃ”NG dÃ¹ng domain cÅ© (kimoanhdongnai.com.vn lÃ  domain duy nháº¥t)
// - Admin vÃ  API khÃ´ng Ä‘Æ°a vÃ o sitemap
// - images[] khai bÃ¡o áº£nh tiÃªu biá»ƒu cá»§a tá»«ng trang (chuáº©n Google Image Sitemap)
// - KHÃ”NG Ä‘Æ°a URL Ä‘Ã£ bá»‹ 301 redirect vÃ o sitemap:
//     /tin-tuc/phap-ly-mega-city-2        â†’ /mega-city-2/phap-ly
//     /tin-tuc/bang-gia-mega-city-2-moi-nhat â†’ /mega-city-2/bang-gia
//   (deployed 2026-09-22, xem next.config.ts)
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const BASE = "https://kimoanhdongnai.com.vn";
const CDN  = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";

/** Táº¡o Cloudinary URL cho sitemap (khÃ´ng cáº§n transform náº·ng) */
const cimg = (path: string) => `${CDN}/${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    // â”€â”€ Homepage â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
      url: BASE,
      lastModified: "2026-09-18",
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        cimg("homepage/1.jpg"),
      ],
    },

    // â”€â”€ Trang dá»± Ã¡n Mega City 2 (Pillar Page) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
      url: `${BASE}/mega-city-2`,
      lastModified: "2026-09-22",
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

    // â”€â”€ Topic Cluster: Mega City 2 sub-pages â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

    {
      url: `${BASE}/mega-city-2/vi-tri`,
      lastModified: "2026-09-22",
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
      // Canonical page: há»£p nháº¥t tá»« /tin-tuc/phap-ly-mega-city-2 (301 redirect 2026-09-22)
      url: `${BASE}/mega-city-2/phap-ly`,
      lastModified: "2026-09-22",
      changeFrequency: "monthly",
      priority: 0.88,
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
      lastModified: "2026-09-22",
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
      // Canonical page: há»£p nháº¥t tá»« /tin-tuc/bang-gia-mega-city-2-moi-nhat (301 redirect 2026-09-22)
      url: `${BASE}/mega-city-2/bang-gia`,
      lastModified: "2026-09-22",
      changeFrequency: "weekly",
      priority: 0.92,
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

    // â”€â”€ Keyword gap pages (má»›i táº¡o 2026-08-13) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
      images: [cimg("megacity2/news22/1"),cimg("megacity2/news22/2"),cimg("megacity2/news22/3"),cimg("megacity2/news22/4"),cimg("megacity2/news22/5")],
    },
    {
      url: `${BASE}/tin-tuc/quy-trinh-mua-dat-nen-nhon-trach`,
      lastModified: "2026-08-23",
      changeFrequency: "monthly",
      priority: 0.84,
      images: [cimg("megacity2/news23/1"),cimg("megacity2/news23/2"),cimg("megacity2/news23/3"),cimg("megacity2/news23/4")],
    },
    {
      url: `${BASE}/tin-tuc/so-sanh-mega-city-2-va-cac-khu-do-thi-nhon-trach`,
      lastModified: "2026-08-23",
      changeFrequency: "monthly",
      priority: 0.83,
      images: [cimg("megacity2/news24/1"),cimg("megacity2/news24/2"),cimg("megacity2/news24/3"),cimg("megacity2/news24/4"),cimg("megacity2/news24/5"),cimg("megacity2/news24/6")],
    },

    // â”€â”€ Tin tá»©c â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

    // /tin-tuc/bang-gia-mega-city-2-moi-nhat â†’ REMOVED (301 redirect to /mega-city-2/bang-gia, 2026-09-22)

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
      lastModified: "2026-09-22",
      changeFrequency: "monthly",
      priority: 0.75,
      images: [
        cimg("megacity2/news1/1"),
        cimg("megacity2/news1/2"),
        cimg("megacity2/news1/3"),
      ],
    },

    // â”€â”€ Tin tá»©c Mega City 2 (article pages) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
      url: `${BASE}/tin-tuc/vi-tri-mega-city-2-o-dau`,
      lastModified: "2026-09-22",
      changeFrequency: "monthly",
      priority: 0.80,
      images: [
        cimg("megacity2/news3/1"),
        cimg("megacity2/news3/2"),
        cimg("megacity2/news3/3"),
      ],
    },
    // /tin-tuc/phap-ly-mega-city-2 â†’ REMOVED (301 redirect to /mega-city-2/phap-ly, 2026-09-22)
    {
      url: `${BASE}/tin-tuc/tien-do-mega-city-2`,
      lastModified: "2026-09-22",
      changeFrequency: "monthly",
      priority: 0.80,
      images: [
        cimg("megacity2/news5/1"),
      ],
    },

    // â”€â”€ Tin tá»©c NhÆ¡n Tráº¡ch (má»›i 08/2026) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
      url: `${BASE}/tin-tuc/mega-city-2-co-phu-hop-de-o`,
      lastModified: "2026-09-22",
      changeFrequency: "monthly",
      priority: 0.80,
      images: [
        cimg("megacity2/news25/1"),
        cimg("megacity2/news25/2"),
        cimg("megacity2/news25/3"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/cach-doc-ban-do-quy-hoach-nhon-trach`,
      lastModified: "2026-08-23",
      changeFrequency: "monthly",
      priority: 0.78,
      images: [
        cimg("megacity2/news27/1"),
        cimg("megacity2/news27/2"),
        cimg("megacity2/news27/3"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach`,
      lastModified: "2026-08-24",
      changeFrequency: "monthly",
      priority: 0.78,
      images: [
        cimg("megacity2/news26/1"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/thi-truong-bat-dong-san-nhon-trach-2026`,
      lastModified: "2026-08-24",
      changeFrequency: "monthly",
      priority: 0.80,
      images: [
        cimg("megacity2/news28/1"),
        cimg("megacity2/news28/2"),
        cimg("megacity2/news28/3"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/checklist-nhan-nen-mega-city-2`,
      lastModified: "2026-08-26",
      changeFrequency: "monthly",
      priority: 0.82,
      images: [
        cimg("megacity2/news31/1"),
        cimg("megacity2/news31/2"),
        cimg("megacity2/news31/3"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/chi-phi-xay-nha-mega-city-2`,
      lastModified: "2026-08-25",
      changeFrequency: "monthly",
      priority: 0.82,
      images: [
        cimg("megacity2/news30/1"),
        cimg("megacity2/news30/2"),
        cimg("megacity2/news30/3"),
        cimg("megacity2/news30/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/he-sinh-thai-bat-dong-san-kim-oanh-group`,
      lastModified: "2026-08-24",
      changeFrequency: "monthly",
      priority: 0.76,
      images: [
        cimg("megacity2/news29/1"),
        cimg("megacity2/news29/2"),
        cimg("megacity2/news29/3"),
      ],
    },

    // â”€â”€ Vá» chÃºng tÃ´i â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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


    // â”€â”€ The Link City (Pillar Page) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
      url: `${BASE}/the-link-city`,
      lastModified: "2026-09-08",
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        cimg("thelinkcity/overview/1.jpg"),
        cimg("thelinkcity/overview/2.jpg"),
        cimg("thelinkcity/overview/3.jpg"),
        cimg("thelinkcity/real/1.jpg"),
        cimg("thelinkcity/amenities/1.jpg"),
        cimg("thelinkcity/diagram/so-do-tong-the.jpeg"),
        cimg("thelinkcity/cross-section/a01-01.jpeg"),
      ],
    },
    // â”€â”€ Topic Cluster: The Link City â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
      url: `${BASE}/the-link-city/vi-tri`,
      lastModified: "2026-09-08",
      changeFrequency: "weekly",
      priority: 0.85,
      images: [cimg("thelinkcity/location/1.jpg"), cimg("thelinkcity/location/2.jpg")],
    },
    {
      url: `${BASE}/the-link-city/mat-bang`,
      lastModified: "2026-09-08",
      changeFrequency: "weekly",
      priority: 0.88,
      images: [
        cimg("thelinkcity/diagram/so-do-tong-the.jpeg"),
        cimg("thelinkcity/cross-section/a01-01.jpeg"),
        cimg("thelinkcity/cross-section/a01-02.jpeg"),
        cimg("thelinkcity/cross-section/a02-01.jpeg"),
        cimg("thelinkcity/cross-section/a02-02.jpeg"),
        cimg("thelinkcity/cross-section/a03-01.jpeg"),
        cimg("thelinkcity/cross-section/a03-02.jpeg"),
        cimg("thelinkcity/cross-section/a04-01.jpeg"),
        cimg("thelinkcity/cross-section/a04-02.jpeg"),
      ],
    },
    {
      url: `${BASE}/the-link-city/tien-ich`,
      lastModified: "2026-09-08",
      changeFrequency: "weekly",
      priority: 0.82,
      images: [cimg("thelinkcity/amenities/1.jpg"), cimg("thelinkcity/amenities/2.jpg"), cimg("thelinkcity/amenities/3.jpg")],
    },
    {
      url: `${BASE}/the-link-city/phap-ly`,
      lastModified: "2026-09-08",
      changeFrequency: "weekly",
      priority: 0.88,
      images: [cimg("thelinkcity/legal/1.jpg"), cimg("thelinkcity/legal/2.jpg")],
    },
    {
      url: `${BASE}/the-link-city/tien-do`,
      lastModified: "2026-09-08",
      changeFrequency: "weekly",
      priority: 0.85,
      images: [cimg("thelinkcity/infrastructure/1.jpg"), cimg("thelinkcity/infrastructure/2.jpg"), cimg("thelinkcity/real/1.jpg")],
    },
    {
      url: `${BASE}/the-link-city/hinh-anh`,
      lastModified: "2026-09-08",
      changeFrequency: "weekly",
      priority: 0.85,
      images: [
        cimg("thelinkcity/real/1.jpg"), cimg("thelinkcity/real/2.jpg"),
        cimg("thelinkcity/real/3.jpg"), cimg("thelinkcity/real/4.jpg"),
        cimg("thelinkcity/infrastructure/1.jpg"), cimg("thelinkcity/overview/1.jpg"),
      ],
    },
    {
      url: `${BASE}/the-link-city/bang-gia`,
      lastModified: "2026-09-08",
      changeFrequency: "daily",
      priority: 0.90,
    },
    {
      url: `${BASE}/the-link-city/thanh-toan`,
      lastModified: "2026-09-08",
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE}/the-link-city/faq`,
      lastModified: "2026-09-08",
      changeFrequency: "weekly",
      priority: 0.78,
    },

    // â”€â”€ Tin tá»©c Mega City 2 â€” nhÃ³m bÃ i má»›i (08â€“09/2026) â”€â”€â”€â”€â”€â”€â”€â”€
    {
      url: `${BASE}/tin-tuc/so-sanh-mega-city-2-va-dat-tho-cu-dan-nhon-trach`,
      lastModified: "2026-09-02",
      changeFrequency: "monthly" as const,
      priority: 0.82,
      images: [cimg("megacity2/news42/1"), cimg("megacity2/news42/2"), cimg("megacity2/news42/3")],
    },
    {
      url: `${BASE}/tin-tuc/shophouse-mega-city-2-khai-thac-kinh-doanh`,
      lastModified: "2026-09-01",
      changeFrequency: "monthly" as const,
      priority: 0.82,
      images: [cimg("megacity2/news41/1"), cimg("megacity2/news41/2"), cimg("megacity2/news41/3")],
    },
    {
      url: `${BASE}/tin-tuc/dat-nen-nha-vuon-biet-thu-mega-city-2`,
      lastModified: "2026-08-30",
      changeFrequency: "monthly" as const,
      priority: 0.81,
      images: [cimg("megacity2/news40/1"), cimg("megacity2/news40/2"), cimg("megacity2/news40/3")],
    },
    {
      url: `${BASE}/tin-tuc/tien-ich-ngoai-khu-mega-city-2`,
      lastModified: "2026-08-30",
      changeFrequency: "monthly" as const,
      priority: 0.81,
      images: [cimg("megacity2/news39/1"), cimg("megacity2/news39/2"), cimg("megacity2/news39/3")],
    },
    {
      url: `${BASE}/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach`,
      lastModified: "2026-08-30",
      changeFrequency: "monthly" as const,
      priority: 0.81,
      images: [cimg("megacity2/news38/1"), cimg("megacity2/news38/2"), cimg("megacity2/news38/3")],
    },
    {
      url: `${BASE}/tin-tuc/duong-di-tu-tphcm-den-mega-city-2`,
      lastModified: "2026-08-29",
      changeFrequency: "monthly" as const,
      priority: 0.81,
      images: [cimg("megacity2/news37/1"), cimg("megacity2/news37/2"), cimg("megacity2/news37/3")],
    },
    {
      url: `${BASE}/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2`,
      lastModified: "2026-08-27",
      changeFrequency: "monthly" as const,
      priority: 0.82,
      images: [cimg("megacity2/news36/1"), cimg("megacity2/news36/2"), cimg("megacity2/news36/3")],
    },
    {
      url: `${BASE}/tin-tuc/quy-cach-xay-dung-mega-city-2`,
      lastModified: "2026-08-26",
      changeFrequency: "monthly" as const,
      priority: 0.81,
      images: [cimg("megacity2/news35/1"), cimg("megacity2/news35/2"), cimg("megacity2/news35/3")],
    },
    {
      url: `${BASE}/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach`,
      lastModified: "2026-08-25",
      changeFrequency: "monthly" as const,
      priority: 0.83,
      images: [cimg("megacity2/news34/1"), cimg("megacity2/news34/2"), cimg("megacity2/news34/3")],
    },
    {
      url: `${BASE}/tin-tuc/ha-tang-ky-thuat-mega-city-2`,
      lastModified: "2026-08-25",
      changeFrequency: "monthly" as const,
      priority: 0.82,
      images: [cimg("megacity2/news33/1"), cimg("megacity2/news33/2"), cimg("megacity2/news33/3")],
    },
    {
      url: `${BASE}/tin-tuc/mega-city-2-co-nhung-loai-san-pham-nao`,
      lastModified: "2026-08-25",
      changeFrequency: "monthly" as const,
      priority: 0.82,
      images: [cimg("megacity2/news32/1"), cimg("megacity2/news32/2"), cimg("megacity2/news32/3")],
    },

    // â”€â”€ Tin tá»©c Mega City 2 má»›i (09/2026) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
      url: `${BASE}/tin-tuc/dat-nen-mega-city-2-co-duoc-xay-nha-ngay-khong`,
      lastModified: "2026-09-20",
      changeFrequency: "monthly" as const,
      priority: 0.85,
      images: [
        cimg("megacity2/news58/1"),
        cimg("megacity2/news58/2"),
        cimg("megacity2/news58/3"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/lo-dat-mega-city-2-mat-tien-bao-nhieu`,
      lastModified: "2026-09-20",
      changeFrequency: "monthly" as const,
      priority: 0.83,
      images: [
        cimg("megacity2/news57/1"),
        cimg("megacity2/news57/2"),
        cimg("megacity2/news57/3"),
        cimg("megacity2/news57/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/dien-tich-dat-nen-mega-city-2`,
      lastModified: "2026-09-19",
      changeFrequency: "monthly" as const,
      priority: 0.84,
      images: [
        cimg("megacity2/news56/1"),
        cimg("megacity2/news56/2"),
        cimg("megacity2/news56/3"),
        cimg("megacity2/news56/4"),
      ],
    },

    // â”€â”€ Tin tá»©c The Link City â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
      url: `${BASE}/tin-tuc/cam-2-ty-nen-mua-chung-cu-bien-hoa-dat-long-thanh-the-link-city-2026`,
      lastModified: "2026-09-17",
      changeFrequency: "monthly" as const,
      priority: 0.87,
      images: [
        cimg("thelinkcity/news55/1"),
        cimg("thelinkcity/news55/3"),
        cimg("thelinkcity/news55/4"),
        cimg("thelinkcity/news55/5"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/tiem-nang-bat-dong-san-thong-nhat-nga-tu-dau-giay-2026`,
      lastModified: "2026-09-18",
      changeFrequency: "monthly" as const,
      priority: 0.86,
      images: [
        cimg("thelinkcity/news54/1"),
        cimg("thelinkcity/news54/2"),
        cimg("thelinkcity/news54/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026`,
      lastModified: "2026-09-17",
      changeFrequency: "monthly" as const,
      priority: 0.87,
      images: [
        cimg("thelinkcity/news53/1"),
        cimg("thelinkcity/news53/3"),
        cimg("thelinkcity/news53/5"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026`,
      lastModified: "2026-09-16",
      changeFrequency: "monthly" as const,
      priority: 0.86,
      images: [
        cimg("thelinkcity/news52/1"),
        cimg("thelinkcity/news52/2"),
        cimg("thelinkcity/news52/3"),
        cimg("thelinkcity/news52/5"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city`,
      lastModified: "2026-09-15",
      changeFrequency: "monthly" as const,
      priority: 0.86,
      images: [
        cimg("thelinkcity/news51/1"),
        cimg("thelinkcity/news51/2"),
        cimg("thelinkcity/news51/4"),
        cimg("thelinkcity/news51/5"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/cam-nang-chon-lo-dat-nen-the-link-city-dau-giay-2026`,
      lastModified: "2026-09-14",
      changeFrequency: "monthly" as const,
      priority: 0.85,
      images: [
        cimg("thelinkcity/news50/1"),
        cimg("thelinkcity/news50/2"),
        cimg("thelinkcity/news50/4"),
        cimg("thelinkcity/news50/5"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026`,
      lastModified: "2026-09-13",
      changeFrequency: "monthly" as const,
      priority: 0.84,
      images: [
        cimg("thelinkcity/news49/1"),
        cimg("thelinkcity/news49/2"),
        cimg("thelinkcity/news49/3"),
        cimg("thelinkcity/news49/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026`,
      lastModified: "2026-09-12",
      changeFrequency: "monthly" as const,
      priority: 0.85,
      images: [
        cimg("thelinkcity/news48/1"),
        cimg("thelinkcity/news48/3"),
        cimg("thelinkcity/news48/4"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026`,
      lastModified: "2026-09-11",
      changeFrequency: "monthly",
      priority: 0.84,
      images: [
        cimg("thelinkcity/news47/1"),
        cimg("thelinkcity/news47/2"),
        cimg("thelinkcity/news47/3"),
        cimg("thelinkcity/news47/4"),
        cimg("thelinkcity/news47/5"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026`,
      lastModified: "2026-09-11",
      changeFrequency: "monthly",
      priority: 0.84,
      images: [
        cimg("thelinkcity/news46/1"),
        cimg("thelinkcity/news46/3"),
        cimg("thelinkcity/news46/4"),
        cimg("thelinkcity/news46/5"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026`,
      lastModified: "2026-09-10",
      changeFrequency: "monthly",
      priority: 0.85,
      images: [
        cimg("thelinkcity/news45/1"),
        cimg("thelinkcity/news45/2"),
        cimg("thelinkcity/news45/4"),
        cimg("thelinkcity/news45/5"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026`,
      lastModified: "2026-09-10",
      changeFrequency: "weekly",
      priority: 0.87,
      images: [
        cimg("thelinkcity/news44/1"),
        cimg("thelinkcity/news44/2"),
        cimg("thelinkcity/news44/4"),
        cimg("thelinkcity/news44/5"),
      ],
    },
    {
      url: `${BASE}/tin-tuc/tong-quan-the-link-city-dau-giay`,
      lastModified: "2026-09-09",
      changeFrequency: "monthly",
      priority: 0.85,
      images: [
        cimg("thelinkcity/news43/1"),
        cimg("thelinkcity/news43/2"),
        cimg("thelinkcity/news43/3"),
        cimg("thelinkcity/news43/4"),
        cimg("thelinkcity/news43/5"),
      ],
    },
  ];
}