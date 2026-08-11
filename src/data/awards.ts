// ─────────────────────────────────────────────────────────────
// awards.ts — Giải thưởng & Dấu ấn Kim Oanh Group
//
// QUY TẮC: Chỉ render ra UI khi verified === true.
// Không tự thêm giải thưởng, chứng nhận chưa có nguồn chính thức.
// ─────────────────────────────────────────────────────────────

export interface Award {
  id: string;
  name: string;
  organization: string;
  year: string;
  image?: string;    // Logo/ảnh giải thưởng
  verified: boolean;
  source?: string;
}

// TODO: Điền sau khi xác minh từ nguồn chính thức
export const AWARDS: Award[] = [];

export const VERIFIED_AWARDS = AWARDS.filter((a) => a.verified);
