// ─────────────────────────────────────────────────────────────
// leadership.ts — dữ liệu ban lãnh đạo Kim Oanh Group
//
// QUY TẮC: Chỉ render ra UI khi verified === true.
// Ảnh từ Cloudinary folder: about/kog-8, about/kog-9
// ─────────────────────────────────────────────────────────────

import { IMG_ABOUT } from "@/lib/cloudinary";

export interface Leader {
  id: string;
  name: string;
  position: string;
  positionEn?: string;
  department?: string;
  bio: string;
  image: string;
  initials: string;
  level: 1 | 2 | 3; // 1 = C-suite, 2 = Director, 3 = Manager
  verified: boolean;
  source?: string;
}

export const LEADERS: Leader[] = [
  {
    id: "leader-1",
    name: "Ban lãnh đạo",
    position: "Hội đồng quản trị",
    positionEn: "Board of Directors",
    department: "Lãnh đạo cấp cao",
    bio: "Đội ngũ lãnh đạo cấp cao Kim Oanh Group – định hướng chiến lược phát triển bền vững của tập đoàn.",
    image: IMG_ABOUT["8"],
    initials: "KO",
    level: 1,
    verified: true,
    source: "Ảnh tham khảo từ nguồn công khai",
  },
  {
    id: "leader-2",
    name: "Ban điều hành",
    position: "Ban Giám đốc",
    positionEn: "Executive Management",
    department: "Điều hành",
    bio: "Ban điều hành Kim Oanh Group – phụ trách triển khai hoạt động kinh doanh, phát triển dự án và vận hành hệ sinh thái.",
    image: IMG_ABOUT["9"],
    initials: "KO",
    level: 2,
    verified: true,
    source: "Ảnh tham khảo từ nguồn công khai",
  },
];

export const VERIFIED_LEADERS = LEADERS.filter((l) => l.verified);
