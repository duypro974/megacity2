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

export const REAL_PARK_CATEGORIES = [
  { id: "all", label: "Tất Cả", count: REAL_PARK_PHOTOS.length },
  { id: "day", label: "Ban Ngày (Thực Tế)", count: REAL_PARK_PHOTOS.filter((p) => p.timeOfDay === "day").length },
  { id: "night", label: "Đêm Lung Linh Ánh Sáng", count: REAL_PARK_PHOTOS.filter((p) => p.timeOfDay === "night").length },
  { id: "ho-boi", label: "Hồ Bơi Resort Ốc Đảo", count: REAL_PARK_PHOTOS.filter((p) => p.category === "ho-boi").length },
  { id: "khu-vui-choi", label: "Khu Vui Chơi One Park", count: REAL_PARK_PHOTOS.filter((p) => p.category === "khu-vui-choi").length },
  { id: "sales-gallery", label: "Sales Gallery & Biểu Tượng", count: REAL_PARK_PHOTOS.filter((p) => p.category === "sales-gallery").length },
  { id: "cong-vien", label: "Cảnh Quan & Lối Dạo Bộ", count: REAL_PARK_PHOTOS.filter((p) => p.category === "cong-vien").length },
];
