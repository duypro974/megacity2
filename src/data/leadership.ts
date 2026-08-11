// ─────────────────────────────────────────────────────────────
// leadership.ts — dữ liệu ban lãnh đạo
//
// QUY TẮC: Chỉ render ra UI khi verified === true.
// Nếu chưa có nguồn chính thức: để verified: false.
// Không tự tạo tên, chức danh, bio, ảnh.
// ─────────────────────────────────────────────────────────────

export interface Leader {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;       // Cloudinary URL hoặc local path
  initials: string;    // fallback khi chưa có ảnh
  verified: boolean;
  source?: string;     // nguồn xác minh
}

// TODO: Điền thông tin thực sau khi xác minh từ nguồn chính thức
// của Kim Oanh Group (website chính thức, hồ sơ doanh nghiệp,
// báo chí uy tín).
export const LEADERS: Leader[] = [
  // {
  //   id: "founder",
  //   name: "",          // TODO: verify
  //   position: "",      // TODO: verify
  //   bio: "",           // TODO: verify
  //   image: "",         // TODO: upload Cloudinary
  //   initials: "",
  //   verified: false,
  //   source: "",
  // },
];

// Chỉ render những người đã verified
export const VERIFIED_LEADERS = LEADERS.filter((l) => l.verified);
