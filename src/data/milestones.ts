// ─────────────────────────────────────────────────────────────
// milestones.ts — hành trình phát triển Kim Oanh Group
//
// QUY TẮC: Chỉ render ra UI khi verified === true.
// Không tự tạo mốc lịch sử từ assumption.
// Mỗi mốc cần nguồn xác minh cụ thể.
// ─────────────────────────────────────────────────────────────

export interface Milestone {
  year: string;
  event: string;
  detail?: string;
  verified: boolean;
  source?: string; // nguồn xác minh
}

export const MILESTONES: Milestone[] = [
  // ── Đã xác minh hoặc có cơ sở mạnh ──────────────────────
  {
    year: "2009",
    event: "Thành lập Kim Oanh Group",
    detail: "Hoạt động tại tỉnh Đồng Nai",
    // TODO: Verify từ website chính thức hoặc hồ sơ doanh nghiệp
    verified: false,
    source: "",
  },
  {
    year: "2018",
    event: "Đầu tư dự án Mega City 2",
    detail: "Khu dân cư ~84 ha tại xã Nhơn Trạch, tỉnh Đồng Nai",
    // Cơ sở: project data hiện có, cần cross-check nguồn chính thức
    verified: false,
    source: "",
  },
  {
    year: "2025",
    event: "QĐ 1772/QĐ-UBND – 2.421 lô Mega City 2 được chấp thuận phân lô bán nền",
    detail: "UBND tỉnh Đồng Nai, ngày 30/05/2025",
    // Đây là văn bản nhà nước, có thể verify
    verified: true,
    source: "Quyết định số 1772/QĐ-UBND ngày 30/05/2025 – UBND tỉnh Đồng Nai",
  },

  // ── Chưa xác minh — giữ trong data, KHÔNG render ─────────
  {
    year: "2015",
    event: "Khởi công dự án Mega City 1 Nhơn Trạch",
    verified: false,
    source: "",
    // TODO: Cần nguồn báo chí / hồ sơ chính thức
  },
  {
    year: "2021",
    event: "Ra mắt thương hiệu nhà ở xã hội K-Home",
    verified: false,
    source: "",
    // TODO: Verify từ website k-homedongnai.com.vn hoặc thông cáo báo chí
  },
  {
    year: "2023",
    event: "Triển khai K-Home CityView, Avenue, Midtown",
    verified: false,
    source: "",
    // TODO: Verify từ website k-homedongnai.com.vn
  },
];

// Chỉ render những mốc đã verified
export const VERIFIED_MILESTONES = MILESTONES.filter((m) => m.verified);

// Tất cả mốc (cho admin/debug)
export const ALL_MILESTONES = MILESTONES;
