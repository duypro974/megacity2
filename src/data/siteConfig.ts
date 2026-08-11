// ─────────────────────────────────────────────────────────────
// siteConfig.ts — nguồn dữ liệu duy nhất cho thông tin doanh nghiệp
// Thay đổi tại đây sẽ apply trên toàn bộ website.
// ─────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  // ── Thương hiệu ──────────────────────────────────────────
  // Website định vị: Cổng thông tin dự án bất động sản Kim Oanh tại Đồng Nai
  // KHÔNG tự nhận là Kim Oanh Group / chủ đầu tư / công ty thành viên
  siteName: "Kim Oanh Đồng Nai",
  siteTagline: "Cổng thông tin dự án bất động sản Kim Oanh tại Đồng Nai.",
  brandName: "Kim Oanh Group",
  brandShort: "Kim Oanh",
  brandTagline: "Kiến tạo cộng đồng – Phát triển bền vững", // marketing headline, chưa verify là slogan chính thức
  legalName: "Công ty Cổ phần Tập đoàn Địa ốc Kim Oanh",   // cần verify MST / ĐKKD chính thức

  // ── Domain ───────────────────────────────────────────────
  siteUrl: "https://kimoanhdongnai.com.vn",
  // Domain cũ đã ngừng sử dụng

  // ── Liên hệ ──────────────────────────────────────────────
  // Đang sử dụng trong toàn bộ project — cần confirm là thông tin chính thức
  phone: "0937587438",
  phoneDisplay: "0937.587.438",
  email: "k.homekog@gmail.com",

  // ── Địa chỉ ──────────────────────────────────────────────
  // TODO: Verify địa chỉ chính thức của Kim Oanh Group
  address: {
    street: "268A Phan Trung",
    ward: "Phường Tam Hiệp",
    province: "Tỉnh Đồng Nai",
    country: "Việt Nam",
    full: "268A Phan Trung, Phường Tam Hiệp, Tỉnh Đồng Nai",
  },

  // ── Giờ làm việc ─────────────────────────────────────────
  workingHours: "8:00 – 18:00, Thứ 2 – Chủ nhật",

  // ── Social ───────────────────────────────────────────────
  social: {
    facebook: "https://www.facebook.com/kimoanhhomes",
    zalo: "https://zalo.me/0937587438",
    // youtube: "",   // TODO: thêm khi có
    // linkedin: "",  // TODO: thêm khi có
  },

  // ── External links ───────────────────────────────────────
  kHomeSite: "https://k-homedongnai.com.vn/",

  // ── Logo ─────────────────────────────────────────────────
  logo: {
    src: "/KOG_Web_RGB_01.svg",
    alt: "Kim Oanh Group",
    width: 160,
    height: 40,
  },
} as const;
