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

export const REAL_PARK_TIME_TABS = [
  { id: "all", label: "Tất Cả 32 Góc Nhìn", count: REAL_PARK_PHOTOS.length },
  { id: "day", label: "Ban Ngày Sinh Thái", count: REAL_PARK_PHOTOS.filter((p) => p.timeOfDay === "day").length },
  { id: "night", label: "Vũ Điệu Ánh Sáng Đêm", count: REAL_PARK_PHOTOS.filter((p) => p.timeOfDay === "night").length },
];

export const REAL_PARK_THEMATIC_FILTERS = [
  { id: "all", label: "Tất Cả Phân Khu" },
  { id: "toan-canh", label: "Flycam & Toàn Cảnh" },
  { id: "sales-gallery", label: "Sales Gallery Biểu Tượng" },
  { id: "ho-boi", label: "Hồ Bơi Resort Lagoon" },
  { id: "khu-vui-choi", label: "Khu Vui Chơi Trẻ Em" },
  { id: "cong-vien", label: "Cảnh Quan & Lối Dạo Bộ" },
];

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
      return "CẢNH QUAN & LỐI DẠO";
    default:
      return "ONE PARK THỰC TẾ";
  }
}
