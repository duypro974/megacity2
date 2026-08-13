// ─────────────────────────────────────────────────────────────
// awards.ts — Giải thưởng & Dấu ấn Kim Oanh Group
//
// Ảnh từ Cloudinary folder: about/kog-10 → kog-13
// ─────────────────────────────────────────────────────────────

import { IMG_ABOUT } from "@/lib/cloudinary";

export interface Award {
  id: string;
  name: string;
  organization: string;
  year: string;
  image?: string;
  imageAlt?: string;
  verified: boolean;
  source?: string;
}

export const AWARDS: Award[] = [
  {
    id: "award-1",
    name: "Dấu ấn phát triển Kim Oanh Group",
    organization: "Kim Oanh Group",
    year: "2025",
    image: IMG_ABOUT["10"],
    imageAlt: "Dấu ấn phát triển Kim Oanh Group",
    verified: true,
    source: "Nguồn tham khảo nội bộ",
  },
  {
    id: "award-2",
    name: "Ghi nhận hành trình bất động sản",
    organization: "Kim Oanh Group",
    year: "2025",
    image: IMG_ABOUT["11"],
    imageAlt: "Ghi nhận hành trình bất động sản Kim Oanh",
    verified: true,
    source: "Nguồn tham khảo nội bộ",
  },
  {
    id: "award-3",
    name: "Chứng nhận phát triển dự án",
    organization: "Kim Oanh Group",
    year: "2025",
    image: IMG_ABOUT["12"],
    imageAlt: "Chứng nhận phát triển dự án Kim Oanh",
    verified: true,
    source: "Nguồn tham khảo nội bộ",
  },
  {
    id: "award-4",
    name: "Dấu mốc hạ tầng Mega City 2",
    organization: "Kim Oanh Group – Nhơn Trạch, Đồng Nai",
    year: "2025",
    image: IMG_ABOUT["13"],
    imageAlt: "Dấu mốc hạ tầng Mega City 2 Nhơn Trạch",
    verified: true,
    source: "Nguồn tham khảo nội bộ",
  },
];

export const VERIFIED_AWARDS = AWARDS.filter((a) => a.verified);
