"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Newspaper, ChevronLeft, ChevronRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Types & constants
// ─────────────────────────────────────────────────────────────
type Category = "tat-ca" | "tin-du-an" | "tien-do" | "thi-truong" | "kim-oanh";

const CATEGORY_LABELS: Record<Category, string> = {
  "tat-ca":    "Tất cả",
  "tin-du-an": "Tin dự án",
  "tien-do":   "Tiến độ",
  "thi-truong":"Thị trường",
  "kim-oanh":  "Thông tin Kim Oanh",
};

const BADGE_COLORS: Record<string, string> = {
  "tin-du-an":  "bg-blue-100 text-blue-700",
  "tien-do":    "bg-emerald-100 text-emerald-700",
  "thi-truong": "bg-amber-100 text-amber-700",
  "kim-oanh":   "bg-purple-100 text-purple-700",
};

const ITEMS_PER_PAGE = 6;

// ─────────────────────────────────────────────────────────────
// News data
// ─────────────────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_800,c_limit";

interface NewsItem {
  slug:     string;
  title:    string;
  date:     string;
  category: Exclude<Category, "tat-ca">;
  excerpt:  string;
  image:    string;
  href:     string;
}

const ALL_NEWS: NewsItem[] = [
  {
    slug:     "thu-tuc-chuyen-nhuong-mega-city-2",
    title:    "Thủ Tục Sang Tên Hợp Đồng Và Chuyển Nhượng Đất Nền Mega City 2 Mới Nhất",
    date:     "29/08/2026",
    category: "tin-du-an",
    excerpt:  "Hướng dẫn quy trình 4 bước sang tên chuyển nhượng Mega City 2: điều kiện pháp lý, bộ hồ sơ cần chuẩn bị, thuế TNCN 2% và 4 nguyên tắc phòng tránh rủi ro giao dịch thứ cấp.",
    image: `${CDN}/megacity2/news36/1`,
    href:  "/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2",
  },
  {
    slug:     "quy-cach-xay-dung-mega-city-2",
    title:    "Tiêu Chuẩn Và Quy Cách Xây Dựng Tại Dự Án Mega City 2 Nhơn Trạch Mới Nhất",
    date:     "29/08/2026",
    category: "tin-du-an",
    excerpt:  "Hướng dẫn chi tiết tầng cao cho phép, mật độ xây dựng, khoảng lùi trước sau, kiến trúc mặt ngoài và quy trình 5 bước xin phép xây dựng tại Mega City 2 Nhơn Trạch.",
    image: `${CDN}/megacity2/news35/1`,
    href:  "/tin-tuc/quy-cach-xay-dung-mega-city-2",
  },
  {
    slug:     "mat-bang-phan-lo-mega-city-2-nhon-trach",
    title:    "Bản Đồ Mặt Bằng Phân Lô Mega City 2 Nhơn Trạch: Chi Tiết Từng Phân Khu Và Diện Tích",
    date:     "29/08/2026",
    category: "tin-du-an",
    excerpt:  "Phân tích tổng thể mặt bằng 84 ha, sơ đồ phân khu thương mại, nhà phố, biệt thự vườn, cơ cấu lô 90–300m², lộ giới 13–32m và công viên trung tâm 2,1 ha tại Mega City 2.",
    image: `${CDN}/megacity2/news34/1`,
    href:  "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach",
  },
  {
    slug:     "ha-tang-ky-thuat-mega-city-2",
    title:    "Hạ Tầng Kỹ Thuật Mega City 2 Nhơn Trạch: Điện Âm, Nước Máy & Hệ Thống Thoát Nước",
    date:     "27/08/2026",
    category: "tin-du-an",
    excerpt:  "Phân tích chi tiết điện âm 100%, cấp nước Dowaco, thoát nước 2 tuyến riêng biệt, cốt nền chống ngập và đường nội khu lộ giới 13–32m tại Mega City 2 Nhơn Trạch.",
    image: `${CDN}/megacity2/news33/1`,
    href:  "/tin-tuc/ha-tang-ky-thuat-mega-city-2",
  },
  {
    slug:     "mega-city-2-co-nhung-loai-san-pham-nao",
    title:    "Mega City 2 Có Những Loại Sản Phẩm Nào? Đất Nền, Nhà Phố, Nhà Vườn",
    date:     "27/08/2026",
    category: "tin-du-an",
    excerpt:  "Phân tích đặc điểm đất nền, nhà phố liền kề, nhà vườn liên kế và biệt thự tại Mega City 2 Nhơn Trạch, cùng những yếu tố cần xem xét trước khi lựa chọn.",
    image: `${CDN}/megacity2/news32/1`,
    href:  "/tin-tuc/mega-city-2-co-nhung-loai-san-pham-nao",
  },
  {
    slug:     "checklist-nhan-nen-mega-city-2",
    title:    "Checklist Nhận Nền & Kiểm Tra Hiện Trạng Trước Khi Xây Nhà Tại Mega City 2 Nhơn Trạch 2026",
    date:     "26/08/2026",
    category: "tin-du-an",
    excerpt:  "Checklist chi tiết 12 bước kiểm tra khi nhận nền đất Mega City 2: pháp lý, hạ tầng kỹ thuật, chỉ giới xây dựng, địa chất và biên bản bàn giao hiện trạng trước khi khởi công.",
    image: `${CDN}/megacity2/news31/1`,
    href:  "/tin-tuc/checklist-nhan-nen-mega-city-2",
  },
  {
    slug:     "chi-phi-xay-nha-mega-city-2",
    title:    "Chi Phí Xây Nhà Thực Tế Tại Mega City 2 Nhơn Trạch 2026",
    date:     "25/08/2026",
    category: "tin-du-an",
    excerpt:  "Cập nhật đơn giá xây thô 3,5–3,9 triệu/m², trọn gói 5–8,5 triệu/m², ước tính chi phí nền 100–150m², thời gian thi công và so sánh xây mới vs nhà xây sẵn tại Mega City 2.",
    image: `${CDN}/megacity2/news30/1`,
    href:  "/tin-tuc/chi-phi-xay-nha-mega-city-2",
  },
  {
    slug:     "he-sinh-thai-bat-dong-san-kim-oanh-group",
    title:    "Hệ Sinh Thái Bất Động Sản Kim Oanh Group: Mô Hình Phát Triển Đồng Bộ",
    date:     "24/08/2026",
    category: "kim-oanh",
    excerpt:  "Tìm hiểu hệ sinh thái bất động sản Kim Oanh Group, các lĩnh vực hoạt động, vai trò của Kim Oanh Land, phát triển nhà ở xã hội K-Home và định hướng phát triển đô thị.",
    image: `${CDN}/megacity2/news29/1`,
    href:  "/tin-tuc/he-sinh-thai-bat-dong-san-kim-oanh-group",
  },
  {
    slug:     "thi-truong-bat-dong-san-nhon-trach-2026",
    title:    "Thị Trường Bất Động Sản Nhơn Trạch 2026: Giá Đất, Hạ Tầng Và Cơ Hội Đầu Tư",
    date:     "24/08/2026",
    category: "thi-truong",
    excerpt:  "Cập nhật toàn diện thị trường bất động sản Nhơn Trạch 2026: giá đất, hạ tầng giao thông, quy hoạch, sân bay Long Thành và những yếu tố cần đánh giá trước khi mua.",
    image: `${CDN}/megacity2/news28/1`,
    href:  "/tin-tuc/thi-truong-bat-dong-san-nhon-trach-2026",
  },
  {
    slug:     "cach-doc-ban-do-quy-hoach-nhon-trach",
    title:    "Cách Đọc Bản Đồ Quy Hoạch Nhơn Trạch: Hướng Dẫn Cho Người Mua Đất",
    date:     "23/08/2026",
    category: "thi-truong",
    excerpt:  "Hướng dẫn đọc ký hiệu, màu sắc, số tờ, số thửa và cách đối chiếu vị trí thửa đất với bản đồ quy hoạch trước khi mua đất nền Nhơn Trạch.",
    image: `${CDN}/megacity2/news27/1`,
    href:  "/tin-tuc/cach-doc-ban-do-quy-hoach-nhon-trach",
  },
  {
    slug:     "cach-kiem-tra-phap-ly-dat-nen-nhon-trach",
    title:    "Cách Kiểm Tra Pháp Lý Đất Nền Nhơn Trạch Trước Khi Mua",
    date:     "23/08/2026",
    category: "thi-truong",
    excerpt:  "Hướng dẫn kiểm tra sổ đỏ, quy hoạch, mục đích sử dụng đất, thế chấp, tranh chấp và hồ sơ cần xem trước khi giao dịch đất nền tại Nhơn Trạch.",
    image: `${CDN}/megacity2/news26/1`,
    href:  "/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach",
  },
  {
    slug:     "mega-city-2-co-phu-hop-de-o",
    title:    "Mega City 2 Có Phù Hợp Để Ở Không? Phân Tích Nhu Cầu An Cư Tại Nhơn Trạch",
    date:     "23/08/2026",
    category: "tin-du-an",
    excerpt:  "Phân tích vị trí, hạ tầng, tiện ích, loại hình nhà ở và những yếu tố cần cân nhắc trước khi mua Mega City 2 để an cư tại Nhơn Trạch.",
    image: `${CDN}/megacity2/news25/1`,
    href:  "/tin-tuc/mega-city-2-co-phu-hop-de-o",
  },
  {
    slug:     "so-sanh-mega-city-2-va-cac-khu-do-thi-nhon-trach",
    title:    "So Sánh Mega City 2 Và Các Khu Đô Thị Nhơn Trạch: Nên Chọn Dự Án Nào?",
    date:     "23/08/2026",
    category: "thi-truong",
    excerpt:  "So sánh Mega City 2 với Aqua City, Izumi City và SwanBay theo vị trí, quy mô, sản phẩm, hạ tầng, tiện ích và nhu cầu đầu tư tại Nhơn Trạch 2026.",
    image: `${CDN}/megacity2/news24/1`,
    href:  "/tin-tuc/so-sanh-mega-city-2-va-cac-khu-do-thi-nhon-trach",
  },
  {
    slug:     "quy-trinh-mua-dat-nen-nhon-trach",
    title:    "Quy Trình Mua Đất Nền Nhơn Trạch Từ A–Z: 8 Bước Cần Biết Năm 2026",
    date:     "23/08/2026",
    category: "thi-truong",
    excerpt:  "Hướng dẫn 8 bước quy trình mua đất nền Nhơn Trạch từ kiểm tra pháp lý, quy hoạch, khảo sát thực tế đến đặt cọc, công chứng và sang tên.",
    image: `${CDN}/megacity2/news23/1`,
    href:  "/tin-tuc/quy-trinh-mua-dat-nen-nhon-trach",
  },
  {
    slug:     "mua-dat-nhon-trach-can-luu-y-gi",
    title:    "Mua Đất Nhơn Trạch Cần Lưu Ý Gì? 10 Điều Quan Trọng Người Mua Cần Biết Năm 2026",
    date:     "22/08/2026",
    category: "thi-truong",
    excerpt:  "10 yếu tố quan trọng về pháp lý, quy hoạch, vị trí, giá bán, hạ tầng và tài chính cần kiểm tra trước khi mua đất Nhơn Trạch năm 2026.",
    image: `${CDN}/megacity2/news22/1`,
    href:  "/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi",
  },
  {
    slug:     "nen-mua-dat-nen-nhon-trach-hay-dau-tu-can-ho",
    title:    "Nên Mua Đất Nền Nhơn Trạch Hay Đầu Tư Căn Hộ? So Sánh Chi Tiết Cho Người Mới 2026",
    date:     "22/08/2026",
    category: "thi-truong",
    excerpt:  "So sánh ưu nhược điểm, vốn, pháp lý, khả năng sử dụng, thanh khoản và tiềm năng của đất nền và căn hộ tại Nhơn Trạch để có cơ sở lựa chọn phù hợp.",
    image: `${CDN}/megacity2/news21/1`,
    href:  "/tin-tuc/nen-mua-dat-nen-nhon-trach-hay-dau-tu-can-ho",
  },
  {
    slug:     "quy-hoach-1-500-nhon-trach",
    title:    "Quy hoạch 1/500 Nhơn Trạch: Cách Đọc Bản Đồ Và Những Điều Người Mua Đất Cần Biết",
    date:     "21/08/2026",
    category: "thi-truong",
    excerpt:  "Quy hoạch 1/500 Nhơn Trạch là gì? Hướng dẫn cách đọc bản đồ quy hoạch chi tiết, phân biệt các cấp quy hoạch và kiểm tra pháp lý trước khi mua đất.",
    image: `${CDN}/megacity2/news20/1`,
    href:  "/tin-tuc/quy-hoach-1-500-nhon-trach",
  },
  {
    slug:     "cau-nhon-trach",
    title:    "Cầu Nhơn Trạch 2026: Kết Nối Giao Thông & Tác Động Bất Động Sản",
    date:     "21/08/2026",
    category: "thi-truong",
    excerpt:  "Cầu Nhơn Trạch đã khánh thành 19/8/2025, khai thác từ 20/8/2025. Phân tích kết nối Vành đai 3, cao tốc TP.HCM – Long Thành và tác động đến bất động sản Nhơn Trạch.",
    image: `${CDN}/megacity2/news19/1`,
    href:  "/tin-tuc/cau-nhon-trach",
  },
  {
    slug:     "cao-toc-bien-hoa-vung-tau",
    title:    "Cao tốc Biên Hòa - Vũng Tàu 2026: Tiến Độ Và Tác Động Đến Bất Động Sản Nhơn Trạch",
    date:     "20/08/2026",
    category: "thi-truong",
    excerpt:  "Cập nhật cao tốc Biên Hòa - Vũng Tàu năm 2026, hướng tuyến, tiến độ, khả năng kết nối sân bay Long Thành và tác động đến bất động sản Nhơn Trạch.",
    image: `${CDN}/megacity2/news18/1`,
    href:  "/tin-tuc/cao-toc-bien-hoa-vung-tau",
  },
  {
    slug:     "cao-toc-ben-luc-long-thanh",
    title:    "Cao tốc Bến Lức - Long Thành 2026: Tiến Độ Và Tác Động Đến Bất Động Sản Nhơn Trạch",
    date:     "20/08/2026",
    category: "thi-truong",
    excerpt:  "Cập nhật tiến độ cao tốc Bến Lức - Long Thành năm 2026, khả năng kết nối Nhơn Trạch với TP.HCM, Long Thành và các khu vực kinh tế phía Nam.",
    image: `${CDN}/megacity2/news17/1`,
    href:  "/tin-tuc/cao-toc-ben-luc-long-thanh",
  },
  {
    slug:     "vanh-dai-3",
    title:    "Vành đai 3 TP.HCM 2026: Tiến Độ Mới Nhất Và Tác Động Đến Bất Động Sản Nhơn Trạch",
    date:     "19/08/2026",
    category: "thi-truong",
    excerpt:  "Cập nhật tiến độ Vành đai 3 TP.HCM mới nhất năm 2026. Phân tích vị trí, quy hoạch, khả năng kết nối với Nhơn Trạch và tác động đến thị trường bất động sản.",
    image: `${CDN}/megacity2/news16/1`,
    href:  "/tin-tuc/vanh-dai-3",
  },
  {
    slug:     "cau-cat-lai",
    title:    "Cầu Cát Lái 2026: Tiến Độ Mới Nhất Và Tác Động Đến Bất Động Sản Nhơn Trạch",
    date:     "19/08/2026",
    category: "thi-truong",
    excerpt:  "Cập nhật tiến độ cầu Cát Lái mới nhất năm 2026. Phân tích kết nối TP.HCM – Nhơn Trạch và tác động đến thị trường bất động sản khu vực.",
    image: `${CDN}/megacity2/news15/1`,
    href:  "/tin-tuc/cau-cat-lai",
  },
  {
    slug:     "duong-25c",
    title:    "Đường 25C Nhơn Trạch: Tiến Độ Mới Nhất 2026 Và Tác Động Đến Mega City 2",
    date:     "19/08/2026",
    category: "thi-truong",
    excerpt:  "Cập nhật tiến độ đường 25C Nhơn Trạch mới nhất năm 2026. Phân tích kết nối đến sân bay Long Thành và tác động của hạ tầng đến dự án Mega City 2.",
    image: `${CDN}/megacity2/news14/1`,
    href:  "/tin-tuc/duong-25c",
  },
  {
    slug:     "ha-tang-giao-thong-nhon-trach-moi-nhat",
    title:    "Hạ tầng giao thông Nhơn Trạch mới nhất 2026: Những thay đổi tác động đến bất động sản",
    date:     "19/08/2026",
    category: "thi-truong",
    excerpt:  "Cập nhật hạ tầng giao thông Nhơn Trạch mới nhất: sân bay Long Thành, Vành đai 3, cao tốc Bến Lức - Long Thành và tác động đến thị trường bất động sản khu vực.",
    image: `${CDN}/megacity2/news12/1`,
    href:  "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat",
  },
  {
    slug:     "lich-su-phat-trien-kim-oanh-group",
    title:    "Lịch sử hình thành và phát triển của Kim Oanh Group",
    date:     "19/08/2026",
    category: "kim-oanh",
    excerpt:  "Khám phá hành trình phát triển của Kim Oanh Group từ những ngày đầu thành lập đến khi trở thành thương hiệu bất động sản nổi bật tại Việt Nam.",
    image: `${CDN}/megacity2/news13/1`,
    href:  "/tin-tuc/lich-su-phat-trien-kim-oanh-group",
  },
  {
    slug:     "5-ly-do-nen-dau-tu-mega-city-2",
    title:    "5 Lý Do Nên Đầu Tư Mega City 2 Nhơn Trạch Trong Năm 2026",
    date:     "18/08/2026",
    category: "tin-du-an",
    excerpt:  "Phân tích 5 lý do: vị trí chiến lược, hạ tầng vùng, quy hoạch đồng bộ, giá hợp lý và tiềm năng dài hạn giúp Mega City 2 thu hút nhiều nhà đầu tư.",
    image: `${CDN}/megacity2/news11/1`,
    href:  "/tin-tuc/5-ly-do-nen-dau-tu-mega-city-2",
  },
  {
    slug:     "kinh-nghiem-mua-dat-nen-nhon-trach",
    title:    "Kinh Nghiệm Mua Đất Nền Nhơn Trạch Từ A-Z Cho Người Mới Năm 2026",
    date:     "18/08/2026",
    category: "thi-truong",
    excerpt:  "Tổng hợp kinh nghiệm mua đất nền Nhơn Trạch: kiểm tra pháp lý, quy hoạch, vị trí, so sánh giá và những sai lầm cần tránh khi đầu tư.",
    image: `${CDN}/megacity2/news10/1`,
    href:  "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach",
  },
  {
    slug:     "cao-toc-bien-hoa-vung-tau",
    title:    "Cao tốc Biên Hòa - Vũng Tàu tác động như thế nào đến bất động sản Nhơn Trạch?",
    date:     "17/08/2026",
    category: "thi-truong",
    excerpt:  "Tìm hiểu tác động của cao tốc Biên Hòa - Vũng Tàu đến thị trường bất động sản Nhơn Trạch. Phân tích hạ tầng, kết nối giao thông và tiềm năng trong tương lai.",
    image: `${CDN}/megacity2/news9/1`,
    href:  "/tin-tuc/cao-toc-bien-hoa-vung-tau",
  },
  {
    slug:     "san-bay-long-thanh-va-bat-dong-san-nhon-trach",
    title:    "Sân bay Long Thành ảnh hưởng như thế nào đến bất động sản Nhơn Trạch?",
    date:     "17/08/2026",
    category: "thi-truong",
    excerpt:  "Sân bay Long Thành đang tạo ra những tác động đáng kể đến thị trường bất động sản Nhơn Trạch. Tìm hiểu khoảng cách, tiềm năng và những khu vực được hưởng lợi.",
    image: `${CDN}/megacity2/news8/1`,
    href:  "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach",
  },
  {
    slug:     "quy-hoach-nhon-trach-moi-nhat",
    title:    "Quy hoạch Nhơn Trạch mới nhất 2026: Những thay đổi quan trọng cần biết",
    date:     "16/08/2026",
    category: "thi-truong",
    excerpt:  "Phân tích bản đồ quy hoạch, định hướng phát triển đô thị, hạ tầng giao thông và tác động đến thị trường bất động sản Nhơn Trạch 2026.",
    image: `${CDN}/megacity2/news7/1`,
    href:  "/tin-tuc/quy-hoach-nhon-trach-moi-nhat",
  },
  {
    slug:     "gia-dat-nhon-trach-2026",
    title:    "Giá đất Nhơn Trạch 2026: Thị trường đang diễn biến như thế nào?",
    date:     "16/08/2026",
    category: "thi-truong",
    excerpt:  "Cập nhật bảng giá đất Nhơn Trạch theo quy định mới, giá thực tế thị trường, các khu vực tiềm năng và phân tích dự án Mega City 2.",
    image: `${CDN}/megacity2/news6/1`,
    href:  "/tin-tuc/gia-dat-nhon-trach-2026",
  },
  {
    slug:     "tien-do-mega-city-2",
    title:    "Tiến độ Mega City 2 Nhơn Trạch mới nhất năm 2026",
    date:     "16/08/2026",
    category: "tien-do",
    excerpt:  "Cập nhật hình ảnh và tình hình thi công thực tế tháng 08/2026: đường nội khu, hạ tầng kỹ thuật và khu nhà xây sẵn tại Mega City 2.",
    image: `${CDN}/megacity2/news5/1`,
    href:  "/tin-tuc/tien-do-mega-city-2",
  },
  {
    slug:     "phap-ly-mega-city-2",
    title:    "Pháp lý Mega City 2 Nhơn Trạch có gì? Cập nhật mới nhất 2026",
    date:     "15/08/2026",
    category: "tin-du-an",
    excerpt:  "Cập nhật thông tin quy hoạch, quyết định phê duyệt 1772/QĐ-UBND, hồ sơ dự án và những điều nhà đầu tư cần kiểm tra trước khi mua.",
    image: `${CDN}/megacity2/news4/1`,
    href:  "/tin-tuc/phap-ly-mega-city-2",
  },
  {
    slug:     "vi-tri-mega-city-2-o-dau",
    title:    "Vị trí Mega City 2 ở đâu? Phân tích kết nối giao thông và tiềm năng khu vực Nhơn Trạch",
    date:     "14/08/2026",
    category: "tin-du-an",
    excerpt:  "Khám phá vị trí Mega City 2 Nhơn Trạch, khả năng kết nối với TP.HCM, sân bay Long Thành và các tuyến giao thông trọng điểm của khu vực.",
    image: `${CDN}/megacity2/news3/1`,
    href:  "/tin-tuc/vi-tri-mega-city-2-o-dau",
  },
  {
    slug:     "bang-gia-mega-city-2-moi-nhat",
    title:    "Bảng giá Mega City 2 Nhơn Trạch mới nhất năm 2026",
    date:     "13/08/2026",
    category: "tin-du-an",
    excerpt:  "Cập nhật giá tham khảo từng loại sản phẩm, các yếu tố ảnh hưởng và lưu ý quan trọng trước khi đầu tư Mega City 2.",
    image: `${CDN}/megacity2/news2/1`,
    href:  "/tin-tuc/bang-gia-mega-city-2-moi-nhat",
  },
  {
    slug:     "co-nen-dau-tu-mega-city-2-nhon-trach",
    title:    "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026? Phân tích chi tiết",
    date:     "13/08/2026",
    category: "thi-truong",
    excerpt:  "Đánh giá tiềm năng đầu tư Mega City 2 dựa trên vị trí, pháp lý, hạ tầng và bảng giá cập nhật 2026.",
    image: `${CDN}/megacity2/news1/1`,
    href:  "/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach",
  },
];

// ─────────────────────────────────────────────────────────────
// News Card
// ─────────────────────────────────────────────────────────────
function NewsCard({ item }: { item: NewsItem }) {
  const badge = BADGE_COLORS[item.category] ?? "bg-slate-100 text-slate-600";
  return (
    <Link href={item.href}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white
                 border border-slate-200 hover:border-amber-300
                 hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
          loading="lazy"
          decoding="async"
          width={800}
          height={450} />
        <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${badge}`}>
          {CATEGORY_LABELS[item.category]}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
          <Calendar className="w-3 h-3 flex-shrink-0" />{item.date}
        </div>
        <h2 className="font-bold text-slate-900 text-sm leading-snug mb-2
                       group-hover:text-amber-600 transition-colors line-clamp-2">
          {item.title}
        </h2>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4 flex-1">{item.excerpt}</p>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:gap-2 transition-all">
          Đọc bài viết <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────
// Pagination component
// ─────────────────────────────────────────────────────────────
function Pagination({ current, total, onChange }: { current: number; total: number; onChange: (p: number) => void }) {
  if (total <= 1) return null;

  const pages = Array.from({ length: total }, (_, i) => i + 1);
  // Show at most 5 page numbers with ellipsis
  const getVisible = () => {
    if (total <= 5) return pages;
    if (current <= 3) return [...pages.slice(0, 4), -1, total];
    if (current >= total - 2) return [1, -1, ...pages.slice(total - 4)];
    return [1, -1, current - 1, current, current + 1, -1, total];
  };

  return (
    <div className="flex items-center justify-center gap-1.5 pt-10">
      {/* Prev */}
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="Trang trước"
        className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200
                   text-slate-500 hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50
                   disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Pages */}
      {getVisible().map((p, i) =>
        p === -1 ? (
          <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center text-slate-400 text-sm select-none">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p)}
            aria-label={`Trang ${p}`}
            aria-current={p === current ? "page" : undefined}
            className={`w-9 h-9 rounded-xl text-sm font-bold transition-all
              ${p === current
                ? "bg-amber-500 text-white shadow-md shadow-amber-200 border border-amber-500"
                : "border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50"
              }`}
          >
            {p}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        aria-label="Trang kế"
        className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200
                   text-slate-500 hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50
                   disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────
export default function TinTucClient() {
  const [active, setActive] = useState<Category>("tat-ca");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() =>
    active === "tat-ca" ? ALL_NEWS : ALL_NEWS.filter((n) => n.category === active),
    [active]
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const safePage   = Math.min(page, totalPages || 1);
  const start      = (safePage - 1) * ITEMS_PER_PAGE;
  const pageItems  = filtered.slice(start, start + ITEMS_PER_PAGE);

  const handleCategory = (cat: Category) => { setActive(cat); setPage(1); };
  const handlePage     = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const count = (cat: Category) =>
    cat === "tat-ca" ? ALL_NEWS.length : ALL_NEWS.filter((n) => n.category === cat).length;

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ── Page header ── */}
      <div className="bg-white border-b border-slate-100 pt-28 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-amber-600 transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">Tin tức</span>
          </nav>
          <p className="text-amber-500 text-[11px] font-black uppercase tracking-widest mb-1.5">
            Kim Oanh Đồng Nai · Tin tức &amp; Thị trường
          </p>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
            Cập nhật mới nhất về dự án
          </h1>

          {/* Category tabs */}
          <div className="flex items-center gap-1 flex-wrap border-b border-slate-200 -mb-px">
            {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => {
              const n = count(cat);
              const isActive = active === cat;
              return (
                <button key={cat} onClick={() => handleCategory(cat)}
                  className={`relative px-4 py-2.5 text-xs font-bold transition-colors whitespace-nowrap border-b-2 -mb-px
                    ${isActive ? "border-amber-500 text-amber-600" : "border-transparent text-slate-500 hover:text-slate-800"}`}>
                  {CATEGORY_LABELS[cat]}
                  {n > 0 && (
                    <span className={`ml-1.5 text-[10px] font-black px-1.5 py-0.5 rounded-full
                      ${isActive ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                      {n}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-4 py-8">



        {pageItems.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white py-20 px-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mx-auto mb-4">
              <Newspaper className="w-6 h-6 text-slate-300" />
            </div>
            <p className="font-bold text-slate-400 text-sm mb-1">Chưa có bài viết trong mục này.</p>
            <p className="text-slate-400 text-xs max-w-xs mx-auto">Nội dung sẽ được cập nhật sớm.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pageItems.map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>

            <Pagination current={safePage} total={totalPages} onChange={handlePage} />
          </>
        )}
      </div>
    </main>
  );
}
