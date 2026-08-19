// ─────────────────────────────────────────────────────────────
// Cloudinary config — cloud name: dqy4lfmcf
// ĐẶT use_cloudinary = false khi chưa upload ảnh lên Cloudinary
// ĐẶT use_cloudinary = true sau khi đã upload xong
// ─────────────────────────────────────────────────────────────

const USE_CLOUDINARY = true; // ← đổi thành true sau khi upload xong

const CLOUD_NAME = "dqy4lfmcf";
const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

const T = {
  hero: "f_auto,q_auto:good,w_1920,c_limit",
  lg:   "f_auto,q_auto:good,w_1280,c_limit",
  wide: "f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto",   // 16:9 smart crop
  md:   "f_auto,q_auto:good,w_800,c_limit",
  sm:   "f_auto,q_auto:eco,w_400,c_limit",
  doc:  "f_auto,q_auto:best,w_1600,c_limit",
};

/** Mapping cloudinary path → local fallback path */
const LOCAL: Record<string, string> = {
  "megacity2/hero/all.jpg":               "/all.jpg",
  // Homepage images
  "homepage/1.jpg":                       "/homepage/1.jpg",
  "homepage/2.jpg":                       "/homepage/2.jpg",
  "homepage/3.jpg":                       "/homepage/3.jpg",
  "homepage/4.webp":                      "/homepage/4.webp",
  "homepage/5.webp":                      "/homepage/5.webp",
  "homepage/6.webp":                      "/homepage/6.webp",
  "megacity2/overview/1.jpg":             "/overview/1.jpg",
  "megacity2/overview/2.webp":            "/overview/2.webp",
  "megacity2/overview/3.webp":            "/overview/3.webp",
  "megacity2/amenities/1.jpg":            "/on-site amenities/1.jpg",
  "megacity2/amenities/2.jpg":            "/on-site amenities/2.jpg",
  "megacity2/amenities/3.webp":           "/on-site amenities/3.webp",
  "megacity2/amenities/4.jpg":            "/on-site amenities/4.jpg",
  "megacity2/amenities/5.jpg":            "/on-site amenities/5.jpg",
  "megacity2/amenities/6.jpg":            "/on-site amenities/6.jpg",
  "megacity2/amenities/7.jpg":            "/on-site amenities/7.jpg",
  "megacity2/real/1.png":                 "/real/1.png",
  "megacity2/real/2.png":                 "/real/2.png",
  "megacity2/real/3.png":                 "/real/3.png",
  "megacity2/real/4.png":                 "/real/4.png",
  "megacity2/real/5.png":                 "/real/5.png",
  "megacity2/real/6.png":                 "/real/6.png",
  "megacity2/real/7.png":                 "/real/7.png",
  "megacity2/real/8.png":                 "/real/8.png",
  "megacity2/real/9.png":                 "/real/9.png",
  "megacity2/real/10.jpg":                "/real/10.jpg",
  "megacity2/product/ban-do.jpeg":        "/product/Bản đồ.jpeg",
  "megacity2/product/trang-4.jpeg":       "/product/Trang 4.jpeg",
  "megacity2/product/trang-6.jpeg":       "/product/Trang 6.jpeg",
  "megacity2/product/trang-7.jpeg":       "/product/Trang 7.jpeg",
  "megacity2/product/trang-10.jpeg":      "/product/Trang 10.jpeg",
  "megacity2/product/trang-11.jpeg":      "/product/Trang 11.jpeg",
  "megacity2/product/trang-12.jpeg":      "/product/Trang 12.jpeg",
  "megacity2/legal/1.jpeg":              "/legal/1.jpeg",
  "megacity2/legal/2.jpeg":              "/legal/2.jpeg",
  "megacity2/legal/3.jpeg":              "/legal/3.jpeg",
  "megacity2/regional-link/1.jpg":       "/Regional link/1.jpg",
  "megacity2/regional-link/2.jpg":       "/Regional link/2.jpg",
  "megacity2/regional-link/3.jpg":       "/Regional link/3.jpg",
  "megacity2/regional-link/4.jpg":       "/Regional link/4.jpg",
  "megacity2/regional-link/5.jpg":       "/Regional link/5.jpg",
  "megacity2/regional-link/6.jpg":       "/Regional link/6.jpg",
  "megacity2/regional-link/7.jpg":       "/Regional link/7.jpg",
  "megacity2/regional-link/8.jpeg":      "/Regional link/8.jpeg",
  "megacity2/trade/1.jpg":               "/Trade and Services/1.jpg",
  "megacity2/trade/2.png":               "/Trade and Services/2.png",
  "megacity2/trade/3.jpg":               "/Trade and Services/3.jpg",
  "megacity2/trade/4.jpg":               "/Trade and Services/4.jpg",
  "megacity2/heartpulse/1.jpg":          "/HeartPulse/1.jpg",
  "megacity2/heartpulse/2.jpg":          "/HeartPulse/2.jpg",
  "megacity2/school/1.jpg":              "/school/1.jpg",
  "megacity2/school/2.jpg":              "/school/2.jpg",
  "megacity2/school/3.jpg":              "/school/3.jpg",
  "megacity2/school/4.jpg":              "/school/4.jpg",
  "megacity2/school/5.jpg":              "/school/5.jpg",
  "megacity2/plane/1.jpg":               "/Plane/1.jpg",
  "megacity2/plane/2.webp":              "/Plane/2.webp",
  "megacity2/plane/3.webp":              "/Plane/3.webp",
  "megacity2/plane/4.jpg":               "/Plane/4.jpg",
  "megacity2/news3/1.jpg":               "/news3/1.jpg",
  "megacity2/news3/2.jpg":               "/news3/2.jpg",
  "megacity2/news3/3.jpg":               "/news3/3.jpg",
  "megacity2/news3/4.webp":              "/news3/4.webp",
  "megacity2/news3/5.png":               "/news3/5.png",
  "megacity2/news3/6.png":               "/news3/6.png",
  "megacity2/news3/7.png":               "/news3/7.png",
  "megacity2/news3/8.png":               "/news3/8.png",
  "megacity2/news3/9.png":               "/news3/9.png",
  "megacity2/news3/10.jpg":              "/news3/10.jpg",
  "megacity2/news6/1.png":               "/news6/1.png",
  "megacity2/news6/2.jpg":               "/news6/2.jpg",
  "megacity2/news6/3.jpg":               "/news6/3.jpg",
  "megacity2/news6/4.jpg":               "/news6/4.jpg",
  "megacity2/news6/5.jpg":               "/news6/5.jpg",
  "megacity2/news6/6.jpg":               "/news6/6.jpg",
  "megacity2/news6/7.webp":              "/news6/7.webp",
  "megacity2/news7/1.jpg":               "/news7/1.jpg",
  "megacity2/news7/2.jpg":               "/news7/2.jpg",
  "megacity2/news7/3.jpg":               "/news7/3.jpg",
  "megacity2/news7/4.jpg":               "/news7/4.jpg",
  "megacity2/news7/5.webp":              "/news7/5.webp",
  "megacity2/news7/6.png":               "/news7/6.png",
  "megacity2/news7/7.jpg":               "/news7/7.jpg",
};

export function cld(
  folder: string,
  file: string,
  preset: keyof typeof T = "md"
): string {
  const key = `${folder}/${file}`;
  if (!USE_CLOUDINARY) {
    return LOCAL[key] ?? `/${file}`;
  }
  return `${BASE}/${T[preset]}/${key}`;
}

// ─────────────────────────────────────────────────────────────
// Folder mapping — tên Cloudinary : đường dẫn tương đương trong /public
// ─────────────────────────────────────────────────────────────
// megacity2/hero          ← public/all.jpg
// megacity2/overview      ← public/overview/
// megacity2/amenities     ← public/on-site amenities/
// megacity2/real          ← public/real/
// megacity2/product       ← public/product/
// megacity2/legal         ← public/legal/
// megacity2/regional-link ← public/Regional link/
// megacity2/trade         ← public/Trade and Services/
// megacity2/heartpulse    ← public/HeartPulse/
// megacity2/school        ← public/school/
// megacity2/plane         ← public/Plane/
// megacity2/news3         ← public/news3/
// ─────────────────────────────────────────────────────────────

// Pre-built URL helpers theo từng nhóm

/** Hero background */
export const IMG_HERO = cld("megacity2/hero", "all.jpg", "hero");

/** Overview 1-3 */
export const IMG_OVERVIEW = {
  "1": cld("megacity2/overview", "1.jpg", "lg"),
  "2": cld("megacity2/overview", "2.webp", "lg"),
  "3": cld("megacity2/overview", "3.webp", "lg"),
};

/** Tiện ích nội khu 1-7 */
export const IMG_AMENITIES: Record<string, string> = Object.fromEntries(
  [
    ["1", "1.jpg"],
    ["2", "2.jpg"],
    ["3", "3.webp"],
    ["4", "4.jpg"],
    ["5", "5.jpg"],
    ["6", "6.jpg"],
    ["7", "7.jpg"],
  ].map(([k, v]) => [k, cld("megacity2/amenities", v, "lg")])
);

/** Ảnh thực tế 1-10 */
export const IMG_REAL: Record<string, string> = Object.fromEntries(
  [
    ["1", "1.png"],
    ["2", "2.png"],
    ["3", "3.png"],
    ["4", "4.png"],
    ["5", "5.png"],
    ["6", "6.png"],
    ["7", "7.png"],
    ["8", "8.png"],
    ["9", "9.png"],
    ["10", "10.jpg"],
  ].map(([k, v]) => [k, cld("megacity2/real", v, "lg")])
);

/** Bản vẽ sản phẩm */
export const IMG_PRODUCT: Record<string, string> = {
  "ban-do":   cld("megacity2/product", "ban-do.jpeg", "doc"),
  "trang-4":  cld("megacity2/product", "trang-4.jpeg", "doc"),
  "trang-6":  cld("megacity2/product", "trang-6.jpeg", "doc"),
  "trang-7":  cld("megacity2/product", "trang-7.jpeg", "doc"),
  "trang-10": cld("megacity2/product", "trang-10.jpeg", "doc"),
  "trang-11": cld("megacity2/product", "trang-11.jpeg", "doc"),
  "trang-12": cld("megacity2/product", "trang-12.jpeg", "doc"),
};

/** Pháp lý */
export const IMG_LEGAL = {
  "1": cld("megacity2/legal", "1.jpeg", "doc"),
  "2": cld("megacity2/legal", "2.jpeg", "doc"),
  "3": cld("megacity2/legal", "3.jpeg", "doc"),
};

/** Liên kết vùng */
export const IMG_REGIONAL: Record<string, string> = Object.fromEntries(
  [
    ["1", "1.jpg"],
    ["2", "2.jpg"],
    ["3", "3.jpg"],
    ["4", "4.jpg"],
    ["5", "5.jpg"],
    ["6", "6.jpg"],
    ["7", "7.jpg"],
    ["8", "8.jpeg"],
  ].map(([k, v]) => [k, cld("megacity2/regional-link", v, "md")])
);

/** Thương mại dịch vụ */
export const IMG_TRADE: Record<string, string> = Object.fromEntries(
  [
    ["1", "1.jpg"],
    ["2", "2.png"],
    ["3", "3.jpg"],
    ["4", "4.jpg"],
  ].map(([k, v]) => [k, cld("megacity2/trade", v, "md")])
);

/** Y tế */
export const IMG_HEARTPULSE: Record<string, string> = Object.fromEntries(
  [["1", "1.jpg"], ["2", "2.jpg"]].map(([k, v]) => [k, cld("megacity2/heartpulse", v, "md")])
);

/** Trường học */
export const IMG_SCHOOL: Record<string, string> = Object.fromEntries(
  [["1","1.jpg"],["2","2.jpg"],["3","3.jpg"],["4","4.jpg"],["5","5.jpg"]]
    .map(([k, v]) => [k, cld("megacity2/school", v, "md")])
);

/** Sân bay & giao thông */
export const IMG_PLANE: Record<string, string> = Object.fromEntries(
  [["1","1.jpg"],["2","2.webp"],["3","3.webp"],["4","4.jpg"]]
    .map(([k, v]) => [k, cld("megacity2/plane", v, "md")])
);

/** About — ảnh ban lãnh đạo & dấu ấn Kim Oanh Group */
export const IMG_ABOUT: Record<string, string> = {
  // 1: Hero background (2560×1688, landscape)
  "1":  `${BASE}/f_auto,q_auto:good,w_1920,c_limit/about/kog-1`,
  // 2: AboutIntro section image (1920×904, ultra-wide)
  "2":  `${BASE}/f_auto,q_auto:good,w_1280,c_limit/about/kog-2`,
  // 3–7: Timeline milestones
  "3":  `${BASE}/f_auto,q_auto:good,w_1280,c_limit/about/kog-3`,
  "4":  `${BASE}/f_auto,q_auto:good,w_1280,c_limit/about/kog-4`,
  "5":  `${BASE}/f_auto,q_auto:good,w_1280,c_limit/about/kog-5`,
  "6":  `${BASE}/f_auto,q_auto:good,w_800,c_limit/about/kog-6`,
  "7":  `${BASE}/f_auto,q_auto:good,w_1280,c_limit/about/kog-7`,
  // 8–9: Brochure lãnh đạo (trimmed)
  "8":  `${BASE}/f_auto,q_auto:best,w_1600,c_limit/about/kog-8-trimmed`,
  "9":  `${BASE}/f_auto,q_auto:best,w_1600,c_limit/about/kog-9-trimmed`,
  // 10–13: Dấu ấn được ghi nhận (trimmed)
  "10": `${BASE}/f_auto,q_auto:good,w_1280,c_limit/about/kog-10-trimmed`,
  "11": `${BASE}/f_auto,q_auto:good,w_1280,c_limit/about/kog-11-trimmed`,
  "12": `${BASE}/f_auto,q_auto:good,w_1280,c_limit/about/kog-12-trimmed`,
  "13": `${BASE}/f_auto,q_auto:good,w_1280,c_limit/about/kog-13-trimmed`,
};

/** News3 — Vị trí Mega City 2 (10 ảnh)
 *  1–4: ảnh bản đồ / giao thông / hạ tầng / sân bay
 *  5–10: Toàn cảnh khu vực Mega City 2
 */
export const IMG_NEWS3: Record<string, string> = Object.fromEntries(
  [
    ["1",  "1.jpg"],
    ["2",  "2.jpg"],
    ["3",  "3.jpg"],
    ["4",  "4.webp"],
    ["5",  "5.png"],
    ["6",  "6.png"],
    ["7",  "7.png"],
    ["8",  "8.png"],
    ["9",  "9.png"],
    ["10", "10.jpg"],
  ].map(([k, v]) => [k, cld("megacity2/news3", v, "lg")])
);

/** News6 — Giá đất Nhơn Trạch 2026 (7 ảnh) */
export const IMG_NEWS6: Record<string, string> = Object.fromEntries(
  [
    ["1", "1.png"],
    ["2", "2.jpg"],
    ["3", "3.jpg"],
    ["4", "4.jpg"],
    ["5", "5.jpg"],
    ["6", "6.jpg"],
    ["7", "7.webp"],
  ].map(([k, v]) => [k, cld("megacity2/news6", v, "lg")])
);

/** News7 — Quy hoạch Nhơn Trạch 2026 (7 ảnh) */
export const IMG_NEWS7: Record<string, string> = Object.fromEntries(
  [
    ["1", "1.jpg"],
    ["2", "2.jpg"],
    ["3", "3.jpg"],
    ["4", "4.jpg"],
    ["5", "5.webp"],
    ["6", "6.png"],
    ["7", "7.jpg"],
  ].map(([k, v]) => [k, cld("megacity2/news7", v, "lg")])
);

/** News8 — Sân bay Long Thành và BĐS Nhơn Trạch (5 ảnh) */
export const IMG_NEWS8: Record<string, string> = Object.fromEntries(
  [
    ["1", "1.jpg"],
    ["2", "2.webp"],
    ["3", "3.jpeg"],
    ["4", "4.jpg"],
    ["5", "5.jpg"],
  ].map(([k, v]) => [k, cld("megacity2/news8", v, "lg")])
);

/** News9 — Cao tốc Biên Hòa - Vũng Tàu và BĐS Nhơn Trạch (4 ảnh) */
export const IMG_NEWS9: Record<string, string> = Object.fromEntries(
  [
    ["1", "1.jpg"],
    ["2", "2.jpg"],
    ["3", "3.jpg"],
    ["4", "4.jpg"],
  ].map(([k, v]) => [k, cld("megacity2/news9", v, "lg")])
);

/** News10 — Kinh nghiệm mua đất nền Nhơn Trạch (6 ảnh, 4-6 là phối cảnh Mega City 2) */
export const IMG_NEWS10: Record<string, string> = Object.fromEntries(
  [
    ["1", "1.jpg"],
    ["2", "2.jpg"],
    ["3", "3.webp"],
    ["4", "4.jpg"],
    ["5", "5.jpg"],
    ["6", "6.jpg"],
  ].map(([k, v]) => [k, cld("megacity2/news10", v, "lg")])
);

/** News11 — 5 Lý Do Nên Đầu Tư Mega City 2 (5 ảnh) */
export const IMG_NEWS11: Record<string, string> = Object.fromEntries(
  [
    ["1", "1.jpg"],
    ["2", "2.jpg"],
    ["3", "3.jpg"],
    ["4", "4.webp"],
    ["5", "5.webp"],
  ].map(([k, v]) => [k, cld("megacity2/news11", v, "lg")])
);

/** News12 — Hạ tầng giao thông Nhơn Trạch 2026 (4 ảnh) */
export const IMG_NEWS12: Record<string, string> = Object.fromEntries(
  [
    ["1", "1.png"],
    ["2", "2.jpg"],
    ["3", "3.webp"],
    ["4", "4.jpg"],
  ].map(([k, v]) => [k, cld("megacity2/news12", v, "lg")])
);

/** News13 — Lịch sử Kim Oanh Group (4 ảnh) */
export const IMG_NEWS13: Record<string, string> = Object.fromEntries(
  [
    ["1", "1.jpg"],
    ["2", "2.jpg"],
    ["3", "3.png"],
    ["4", "4.png"],
  ].map(([k, v]) => [k, cld("megacity2/news13", v, "lg")])
);

/** News14 — Đường 25C Nhơn Trạch (4 ảnh) */
export const IMG_NEWS14: Record<string, string> = Object.fromEntries(
  [["1","1.jpg"],["2","2.jpg"],["3","3.jpg"],["4","4.jpg"]]
    .map(([k, v]) => [k, cld("megacity2/news14", v, "lg")])
);

/** News15 — Cầu Cát Lái 2026 (4 ảnh) */
export const IMG_NEWS15: Record<string, string> = Object.fromEntries(
  [["1","1.webp"],["2","2.webp"],["3","3.png"],["4","4.jpg"]]
    .map(([k, v]) => [k, cld("megacity2/news15", v, "lg")])
);

/** Homepage images — dùng trên trang chủ KIM OANH ĐỒNG NAI */
export const IMG_HOMEPAGE: Record<string, string> = {
  "1": cld("homepage", "1.jpg",  "hero"),   // Hero background
  "2": cld("homepage", "2.jpg",  "lg"),     // Logo brand — object-contain
  "3": cld("homepage", "3.jpg",  "lg"),
  "4": cld("homepage", "4.webp", "lg"),
  "5": cld("homepage", "5.webp", "lg"),
  "6": cld("homepage", "6.webp", "lg"),
};
