// ─────────────────────────────────────────────────────────────
// partners.ts — dữ liệu đối tác
//
// QUY TẮC: Chỉ render ra UI khi verified === true.
// KHÔNG tự thêm logo, tên ngân hàng, nhà thầu nếu chưa có
// bằng chứng quan hệ đối tác chính thức và hiện tại.
// ─────────────────────────────────────────────────────────────

export interface Partner {
  id: string;
  name: string;
  category: "finance" | "construction" | "distribution" | "consulting" | "other";
  logo: string;        // Cloudinary URL hoặc local path
  relationship: string; // mô tả quan hệ — không phóng đại
  verified: boolean;
  source?: string;     // nguồn xác minh
}

// TODO: Điền sau khi xác minh quan hệ đối tác chính thức
// Không thêm ngân hàng, nhà thầu, hay đơn vị tư vấn
// chỉ vì họ có tên trên thị trường — cần văn bản / thông cáo xác nhận.
export const PARTNERS: Partner[] = [];

// Chỉ render đối tác đã verified
export const VERIFIED_PARTNERS = PARTNERS.filter((p) => p.verified);
