import { IMG_REAL } from "@/lib/cloudinary";

// ─────────────────────────────────────────
// Data source duy nhất cho ảnh thực tế
// ─────────────────────────────────────────

export type ImageCategory =
  | "all"
  | "completed-homes"
  | "internal-roads"
  | "aerial"
  | "connectivity";

export interface RealImage {
  src: string;
  alt: string;
  title: string;
  caption: string;
  categories: Exclude<ImageCategory, "all">[];
}

export const REAL_IMAGES: RealImage[] = [
  {
    src: IMG_REAL["1"],
    alt: "Hình ảnh thực tế nhà phố hoàn thiện tại dự án Mega City 2 Nhơn Trạch",
    title: "Nhà phố hoàn thiện",
    caption: "Dãy nhà phố liên kế đã hoàn thiện mặt tiền, vỉa hè và cây xanh nội khu.",
    categories: ["completed-homes", "internal-roads"],
  },
  {
    src: IMG_REAL["2"],
    alt: "Đường nội khu và khu vực phía trước dự án Mega City 2",
    title: "Đường nội khu & cổng dự án",
    caption: "Đường nội khu trải nhựa và khu vực phía trước dự án.",
    categories: ["internal-roads", "connectivity"],
  },
  {
    src: IMG_REAL["3"],
    alt: "Góc nhìn từ trên cao về dãy nhà phố Mega City 2 Nhơn Trạch",
    title: "Toàn cảnh từ trên cao",
    caption: "Góc nhìn toàn cảnh về dãy nhà phố và hệ thống đường nội khu.",
    categories: ["aerial", "completed-homes"],
  },
  {
    src: IMG_REAL["4"],
    alt: "Nút giao và hệ thống đường kết nối khu vực Nhơn Trạch",
    title: "Nút giao khu vực",
    caption: "Hệ thống đường và nút giao khu vực xung quanh dự án.",
    categories: ["connectivity"],
  },
  {
    src: IMG_REAL["5"],
    alt: "Nhà phố góc đã hoàn thiện tại Mega City 2",
    title: "Nhà phố góc hoàn thiện",
    caption: "Căn nhà phố góc đã hoàn thiện công trình.",
    categories: ["completed-homes"],
  },
  {
    src: IMG_REAL["6"],
    alt: "Đường nội khu, hàng cây và cảnh quan Mega City 2 Nhơn Trạch",
    title: "Đường nội khu & cảnh quan",
    caption: "Đường nội khu với hàng cây xanh và cảnh quan hai bên.",
    categories: ["internal-roads"],
  },
  {
    src: IMG_REAL["7"],
    alt: "Cận cảnh mặt tiền dãy nhà phố Mega City 2",
    title: "Mặt tiền nhà phố",
    caption: "Cận cảnh mặt tiền hoàn thiện của dãy nhà phố liên kế.",
    categories: ["completed-homes"],
  },
  {
    src: IMG_REAL["8"],
    alt: "Bản đồ kết nối giao thông khu vực Nhơn Trạch",
    title: "Bản đồ kết nối giao thông",
    caption: "Sơ đồ kết nối giao thông khu vực Nhơn Trạch và các trục đường chính.",
    categories: ["connectivity"],
  },
  {
    src: IMG_REAL["9"],
    alt: "Góc nhìn từ trên cao về đường nội khu và cảnh quan Mega City 2",
    title: "Toàn cảnh đường nội khu",
    caption: "Nhìn từ trên cao về hệ thống đường nội khu và cảnh quan xung quanh.",
    categories: ["aerial", "internal-roads"],
  },
  {
    src: IMG_REAL["10"],
    alt: "Dãy nhà phố đã xây dựng tại Mega City 2 Nhơn Trạch",
    title: "Dãy nhà phố đã xây dựng",
    caption: "Dãy nhà phố liên kế đã được xây dựng trong khu dự án.",
    categories: ["completed-homes"],
  },
];

export const PROGRESS_IMAGES = REAL_IMAGES.filter((img) =>
  img.categories.includes("internal-roads") || img.categories.includes("completed-homes")
).slice(0, 4);
