// ─────────────────────────────────────────────────────────────
// ecosystem.ts — Hệ sinh thái Kim Oanh Group
//
// QUY TẮC:
// - Chỉ liệt kê các đơn vị thành viên (công ty/tổ chức)
// - KHÔNG đưa tên dự án/sản phẩm vào đây:
//   K-Home, Mega City 2, CityView, Avenue, Midtown là tên DỰ ÁN
//   không phải công ty thành viên
// ─────────────────────────────────────────────────────────────

export interface EcosystemUnit {
  id: string;
  name: string;
  shortName?: string;
  role: string;
  description: string;
  isHub?: boolean; // Kim Oanh Group là hub trung tâm
}

export const ECOSYSTEM_UNITS: EcosystemUnit[] = [
  {
    id: "kog",
    name: "Kim Oanh Group",
    shortName: "KOG",
    role: "Tập đoàn",
    description: "Trung tâm điều hành và định hướng chiến lược",
    isHub: true,
  },
  {
    id: "ko-land",
    name: "Kim Oanh Land",
    role: "Đầu tư & Phát triển",
    description: "Nghiên cứu thị trường, phát triển quỹ đất và hình thành dự án",
  },
  {
    id: "ko-realty",
    name: "Kim Oanh Realty",
    role: "Kinh doanh & Phân phối",
    description: "Tư vấn, tiếp thị và phân phối sản phẩm bất động sản",
  },
  {
    id: "ko-construction",
    name: "Kim Oanh Construction",
    role: "Xây dựng",
    description: "Thi công hạ tầng, nhà ở và công trình dân dụng",
  },
  {
    id: "ko-foundation",
    name: "Kim Oanh Foundation",
    role: "Phát triển cộng đồng",
    description: "Các chương trình xã hội, hỗ trợ cộng đồng và nâng cao chất lượng sống",
  },
];

// Các đơn vị thành viên (không tính hub)
export const MEMBER_UNITS = ECOSYSTEM_UNITS.filter((u) => !u.isHub);
