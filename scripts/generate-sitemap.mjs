#!/usr/bin/env node
/**
 * generate-sitemap.mjs — Tạo sitemap XML tĩnh với image tags + robots.txt
 * Chạy: node scripts/generate-sitemap.mjs
 * Tích hợp vào build: thêm "prebuild": "node scripts/generate-sitemap.mjs" vào package.json
 *
 * Output:
 *   public/sitemap.xml        ← alias sitemap_index (tương thích tools cũ)
 *   public/sitemap_index.xml  ← index chứa 2 sub-sitemap
 *   public/post-sitemap.xml   ← trang dự án + section quan trọng
 *   public/page-sitemap.xml   ← trang tĩnh (home, ve-chung-toi...)
 *   public/robots.txt
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "../public");
const BASE_URL   = "https://kimoanhdongnai.com.vn";
const CDN        = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const TODAY      = new Date().toISOString().split("T")[0];

/** Tạo URL ảnh Cloudinary */
const cimg = (p) => `${CDN}/${p}`;

// ─── Ảnh khai báo cho từng trang ──────────────────────────────────────────────
const PAGE_IMAGES = {
  "/": [
    { loc: cimg("homepage/1.jpg"), title: "Kim Oanh Đồng Nai – Cổng thông tin dự án bất động sản Kim Oanh Group tại Đồng Nai" },
  ],
  "/mega-city-2": [
    { loc: cimg("megacity2/overview/1.jpg"),       title: "Toàn cảnh khu đô thị Mega City 2 Nhơn Trạch Đồng Nai" },
    { loc: cimg("megacity2/overview/2.webp"),      title: "Hạ tầng đường nội khu Mega City 2 Nhơn Trạch" },
    { loc: cimg("megacity2/overview/3.webp"),      title: "Cảnh quan công viên trung tâm Mega City 2 Nhơn Trạch" },
    { loc: cimg("megacity2/amenities/1.jpg"),      title: "Tiện ích nội khu Mega City 2 – Công viên cây xanh" },
    { loc: cimg("megacity2/amenities/2.jpg"),      title: "Tiện ích nội khu Mega City 2 – Khu vui chơi trẻ em" },
    { loc: cimg("megacity2/amenities/3.webp"),     title: "Tiện ích nội khu Mega City 2 – Không gian cộng đồng" },
    { loc: cimg("megacity2/amenities/4.jpg"),      title: "Tiện ích nội khu Mega City 2 – Cảnh quan nội khu" },
    { loc: cimg("megacity2/real/1.png"),           title: "Hình ảnh thực tế nhà phố hoàn thiện Mega City 2 Nhơn Trạch" },
    { loc: cimg("megacity2/real/3.png"),           title: "Góc nhìn từ trên cao Mega City 2 Nhơn Trạch Đồng Nai" },
    { loc: cimg("megacity2/real/9.png"),           title: "Toàn cảnh đường nội khu Mega City 2 Nhơn Trạch" },
    { loc: cimg("megacity2/product/ban-do.jpeg"),  title: "Bản đồ vị trí dự án Mega City 2 Nhơn Trạch Đồng Nai" },
    { loc: cimg("megacity2/product/trang-4.jpeg"), title: "Mặt bằng quy hoạch Mega City 2 Kim Oanh Group" },
    { loc: cimg("megacity2/product/trang-6.jpeg"), title: "Thiết kế sản phẩm nhà phố Mega City 2 Nhơn Trạch" },
    { loc: cimg("megacity2/legal/1.jpeg"),         title: "Pháp lý dự án Mega City 2 – Quyết định 1772/QĐ-UBND" },
    { loc: cimg("megacity2/legal/2.jpeg"),         title: "Hồ sơ pháp lý Mega City 2 Nhơn Trạch Đồng Nai" },
    { loc: cimg("megacity2/regional-link/1.jpg"),  title: "Kết nối vùng Mega City 2 – Đường 25C cao tốc Bến Lức Long Thành" },
    { loc: cimg("megacity2/regional-link/4.jpg"),  title: "Sân bay Long Thành gần Mega City 2 Nhơn Trạch" },
    { loc: cimg("megacity2/plane/1.jpg"),          title: "Công trình sân bay Long Thành gần dự án Mega City 2" },
  ],
  "/ve-chung-toi": [
    { loc: cimg("homepage/2.jpg"), title: "Kim Oanh Group – Tập đoàn Địa ốc Kim Oanh Đồng Nai" },
  ],
};

// ─── URL list ─────────────────────────────────────────────────────────────────
const STATIC_URLS = [
  { loc: "/",              priority: "1.0",  changefreq: "weekly",  lastmod: TODAY },
  { loc: "/mega-city-2",  priority: "0.95", changefreq: "weekly",  lastmod: "2026-08-09" },
  { loc: "/ve-chung-toi", priority: "0.7",  changefreq: "monthly", lastmod: TODAY },
];

const ALL_URLS = [...STATIC_URLS];

// ─── Generate XML helper ───────────────────────────────────────────────────────
function buildUrlset(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(url => {
  const imgs = PAGE_IMAGES[url.loc] || [];
  const imgXml = imgs.map(i =>
    `    <image:image>\n      <image:loc>${i.loc}</image:loc>\n      <image:title>${i.title}</image:title>\n    </image:image>`
  ).join("\n");
  return `  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <xhtml:link rel="alternate" hreflang="vi" href="${BASE_URL}${url.loc}"/>
${imgXml ? imgXml + "\n" : ""}  </url>`;
}).join("\n")}
</urlset>`;
}

// ─── post-sitemap.xml — trang dự án ──────────────────────────────────────────
const postUrls = STATIC_URLS.filter(u => u.loc.startsWith("/mega-city"));
const postSitemap = buildUrlset(postUrls);

// ─── page-sitemap.xml — trang tĩnh ───────────────────────────────────────────
const pageUrls = STATIC_URLS.filter(u => !u.loc.startsWith("/mega-city"));
const pageSitemap = buildUrlset(pageUrls);

// ─── sitemap_index.xml ────────────────────────────────────────────────────────
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/post-sitemap.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/page-sitemap.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
</sitemapindex>`;

// ─── Ghi files ───────────────────────────────────────────────────────────────
fs.writeFileSync(path.join(PUBLIC_DIR, "post-sitemap.xml"),  postSitemap,  "utf-8");
fs.writeFileSync(path.join(PUBLIC_DIR, "page-sitemap.xml"),  pageSitemap,  "utf-8");
fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap_index.xml"), sitemapIndex, "utf-8");
// sitemap.xml = alias của sitemap_index để tương thích các SEO tool cũ
fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemapIndex, "utf-8");

// ─── robots.txt ───────────────────────────────────────────────────────────────
const robotsTxt = `# robots.txt — kimoanhdongnai.com.vn
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/
Sitemap: ${BASE_URL}/sitemap_index.xml
`;

fs.writeFileSync(path.join(PUBLIC_DIR, "robots.txt"), robotsTxt, "utf-8");

// ─── Summary ─────────────────────────────────────────────────────────────────
const totalImages = ALL_URLS.reduce((s, u) => s + (PAGE_IMAGES[u.loc]?.length || 0), 0);
console.log(`✅ sitemap_index.xml — 2 sitemaps`);
console.log(`   post-sitemap.xml  — ${postUrls.length} URLs, ${postUrls.reduce((s,u)=>s+(PAGE_IMAGES[u.loc]?.length||0),0)} images`);
console.log(`   page-sitemap.xml  — ${pageUrls.length} URLs`);
console.log("✅ robots.txt — Sitemap URL: sitemap_index.xml");
console.log(`\n📊 Total: ${ALL_URLS.length} URLs | ${totalImages} images | ${TODAY}`);
