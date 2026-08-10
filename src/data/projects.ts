// ─────────────────────────────────────────────────────────────
// Project index — nguồn dữ liệu duy nhất cho tất cả project cards
// trên corporate homepage.
// Khi thêm project mới: chỉ cần thêm object vào array này.
// ─────────────────────────────────────────────────────────────

export type ProjectCategory = "mega-city" | "k-home";

export type ProjectStatus =
  | "dang-mo-ban"
  | "dang-boc-tham"
  | "da-cong-bo"
  | "hoan-thanh"
  | "sap-mo-ban";

export interface ProjectPreview {
  slug: string;
  name: string;
  brand?: string;
  brandFamily?: string; // e.g. "K-Home Đồng Nai"
  location: string;
  category: ProjectCategory;
  type: string; // Loại hình sản phẩm
  description: string;
  image: string; // Cloudinary URL hoặc local path
  href: string; // Link tới landing page thực tế
  status?: ProjectStatus;
  featured?: boolean;
  priceFrom?: string;
  scale?: string;
  year?: number;
}

// ─────────────────────────────────────────────────────────────
// K-Home Cloudinary cloud: dthv0nsq (khác với Mega City 2)
// Mega City 2 Cloudinary cloud: dqy4lfmcf
// ─────────────────────────────────────────────────────────────

const KCLOUD = "https://res.cloudinary.com/dthv0nsq/image/upload";
const KOPT = "w_800,h_600,c_fill,q_auto:good,f_auto";
const MCCLOUD = "https://res.cloudinary.com/dqy4lfmcf/image/upload";
const MCOPT = "f_auto,q_auto:good,w_800,c_limit";

export const PROJECTS: ProjectPreview[] = [
  // ── MEGA CITY ─────────────────────────────────────────────
  {
    slug: "mega-city-2",
    name: "Mega City 2",
    brand: "Mega City",
    location: "Nhơn Trạch, Đồng Nai",
    category: "mega-city",
    type: "Nhà phố · Nhà vườn · Biệt thự",
    description:
      "Khu dân cư theo quy hoạch ~84 ha tại xã Nhơn Trạch, tỉnh Đồng Nai. Hạ tầng hoàn thiện phần lớn, pháp lý rõ ràng từng nền, gần sân bay Long Thành.",
    image: `${MCCLOUD}/${MCOPT}/megacity2/overview/1.jpg`,
    href: "/mega-city-2",
    status: "dang-mo-ban",
    featured: true,
    priceFrom: "Từ 1,15 tỷ",
    scale: "~84 ha · 3.160 sản phẩm",
    year: 2018,
  },

  // ── K-HOME FAMILY ─────────────────────────────────────────
  {
    slug: "k-home-cityview",
    name: "K-Home CityView",
    brand: "K-Home",
    brandFamily: "K-Home Đồng Nai",
    location: "Hố Nai, Biên Hòa, Đồng Nai",
    category: "k-home",
    type: "Căn hộ nhà ở xã hội",
    description:
      "Tọa lạc tại đường Điểu Xiển, phường Hố Nai, TP. Biên Hòa. 1.328 căn hộ NOXH + 39 shophouse, tiêu chuẩn xanh EDGE, thiết kế Singapore.",
    image: `${KCLOUD}/${KOPT}/k-home-cityview/V32_TAN-HOA_EXT_AERIAL_2_FINAL_2`,
    href: "https://k-homedongnai.com.vn/k-home-cityview-ho-nai",
    status: "dang-boc-tham",
    featured: false,
    priceFrom: "Từ 950 triệu",
    scale: "2,85 ha · 1.367 căn",
  },
  {
    slug: "k-home-avenue",
    name: "K-Home Avenue",
    brand: "K-Home",
    brandFamily: "K-Home Đồng Nai",
    location: "Nhơn Trạch, Đồng Nai",
    category: "k-home",
    type: "Căn hộ nhà ở xã hội",
    description:
      "Nằm trên đường 25C (Nguyễn Ái Quốc), xã Nhơn Trạch, gần sân bay Long Thành. 1.022 căn hộ NOXH + 82 shophouse, bàn giao full nội thất.",
    image: `${KCLOUD}/${KOPT}/k-home-avenue/PC02-TT-10K_2-min`,
    href: "https://k-homedongnai.com.vn/k-home-avenue-nhon-trach",
    status: "da-cong-bo",
    featured: false,
    priceFrom: "Từ 750 triệu",
    scale: "5,3 ha · 1.104 căn",
  },
  {
    slug: "k-home-midtown",
    name: "K-Home Midtown",
    brand: "K-Home",
    brandFamily: "K-Home Đồng Nai",
    location: "Trảng Bom, Đồng Nai",
    category: "k-home",
    type: "Căn hộ nhà ở xã hội",
    description:
      "Tọa lạc tại trung tâm huyện Trảng Bom, giao điểm 4 tuyến đường lớn. 542 căn hộ NOXH + 20 shophouse, trả góp từ 3,5 triệu/tháng.",
    image: `${KCLOUD}/${KOPT}/k-home-midtown/Du-an-K-Home-Midtown-3d-birdview-toan-canh-dem-2048x1150`,
    href: "https://k-homedongnai.com.vn/k-home-midtown-trang-bom",
    status: "da-cong-bo",
    featured: false,
    priceFrom: "Từ 750 triệu",
    scale: "13,97 ha · 562 căn",
  },
];

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

export const FEATURED_PROJECT = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];

export const KHOME_PROJECTS = PROJECTS.filter((p) => p.category === "k-home");

export const MEGA_CITY_PROJECTS = PROJECTS.filter(
  (p) => p.category === "mega-city"
);

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  "dang-mo-ban": "Đang mở bán",
  "dang-boc-tham": "Đang bốc thăm",
  "da-cong-bo": "Đã công bố",
  "hoan-thanh": "Đã bàn giao",
  "sap-mo-ban": "Sắp mở bán",
};

export const STATUS_COLOR: Record<ProjectStatus, string> = {
  "dang-mo-ban": "bg-emerald-100 text-emerald-700",
  "dang-boc-tham": "bg-blue-100 text-blue-700",
  "da-cong-bo": "bg-amber-100 text-amber-700",
  "hoan-thanh": "bg-slate-100 text-slate-600",
  "sap-mo-ban": "bg-violet-100 text-violet-700",
};
