import REAL_PARK_PHOTOS_RAW from "./oneEraRealParkPhotos.json";

export interface RealParkPhoto {
  id: string;
  title: string;
  description: string;
  timeOfDay: "day" | "night";
  category: "toan-canh" | "ho-boi" | "khu-vui-choi" | "sales-gallery" | "cong-vien";
  url: string;
  width: number;
  height: number;
  aspect: "horizontal" | "vertical";
  sizeBytes: number;
}

export const REAL_PARK_PHOTOS: RealParkPhoto[] = REAL_PARK_PHOTOS_RAW as RealParkPhoto[];

export interface RealParkFilterItem {
  id: string;
  label: string;
  count: number;
  type: "all" | "time" | "category";
}

export const REAL_PARK_FILTERS: RealParkFilterItem[] = [
  { id: "all", label: "Tất Cả 32 Góc Nhìn", count: REAL_PARK_PHOTOS.length, type: "all" },
  { id: "day", label: "Ban Ngày Sinh Thái", count: REAL_PARK_PHOTOS.filter((p) => p.timeOfDay === "day").length, type: "time" },
  { id: "night", label: "Vũ Điệu Ánh Sáng Đêm", count: REAL_PARK_PHOTOS.filter((p) => p.timeOfDay === "night").length, type: "time" },
  { id: "ho-boi", label: "Hồ Bơi Resort Lagoon", count: REAL_PARK_PHOTOS.filter((p) => p.category === "ho-boi").length, type: "category" },
  { id: "sales-gallery", label: "Sales Gallery Biểu Tượng", count: REAL_PARK_PHOTOS.filter((p) => p.category === "sales-gallery").length, type: "category" },
  { id: "cong-vien", label: "Cảnh Quan & Thác Nước", count: REAL_PARK_PHOTOS.filter((p) => p.category === "cong-vien").length, type: "category" },
  { id: "khu-vui-choi", label: "Khu Vui Chơi Trẻ Em", count: REAL_PARK_PHOTOS.filter((p) => p.category === "khu-vui-choi").length, type: "category" },
  { id: "toan-canh", label: "Flycam Toàn Cảnh", count: REAL_PARK_PHOTOS.filter((p) => p.category === "toan-canh").length, type: "category" },
];

export function filterRealParkPhotos(filterId: string): RealParkPhoto[] {
  if (filterId === "all") return REAL_PARK_PHOTOS;
  if (filterId === "day") return REAL_PARK_PHOTOS.filter((p) => p.timeOfDay === "day");
  if (filterId === "night") return REAL_PARK_PHOTOS.filter((p) => p.timeOfDay === "night");
  return REAL_PARK_PHOTOS.filter((p) => p.category === filterId);
}

export function getCategoryBadgeLabel(category: string): string {
  switch (category) {
    case "toan-canh":
      return "TOÀN CẢNH FLYCAM";
    case "sales-gallery":
      return "SALES GALLERY BIỂU TƯỢNG";
    case "ho-boi":
      return "HỒ BƠI RESORT LAGOON";
    case "khu-vui-choi":
      return "KHU VUI CHƠI TRẺ EM";
    case "cong-vien":
      return "CẢNH QUAN & THÁC NƯỚC";
    default:
      return "ONE PARK THỰC TẾ";
  }
}

/**
 * Cloudinary CDN Direct Image URL helpers to completely bypass Vercel serverless image proxy.
 * Transforms are performed at Cloudinary Akamai edge cache with near-zero latency (<40ms).
 */
export function getLightboxImageUrl(rawUrl: string): string {
  if (!rawUrl.includes("res.cloudinary.com")) return rawUrl;
  return rawUrl.replace("/upload/", "/upload/f_auto,q_auto:good,w_1600/");
}

export function getThumbnailImageUrl(rawUrl: string): string {
  if (!rawUrl.includes("res.cloudinary.com")) return rawUrl;
  return rawUrl.replace("/upload/", "/upload/f_auto,q_auto:eco,w_160,h_100,c_fill/");
}

export function getCardImageUrl(rawUrl: string): string {
  if (!rawUrl.includes("res.cloudinary.com")) return rawUrl;
  return rawUrl.replace("/upload/", "/upload/f_auto,q_auto:good,w_800,c_fill,ar_16:10/");
}
