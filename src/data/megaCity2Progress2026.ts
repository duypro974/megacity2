// ─────────────────────────────────────────────────────────────
// Cập nhật tiến độ thực địa mới nhất Mega City 2 (23/11/2026)
// Lưu trữ & phân phối tốc độ cao qua Cloudinary CDN
// Bao gồm Video & Bộ ảnh thực tế phân khu NOXH K-Home Avenue
// (trích 20% quỹ đất Mega City 2) và thực địa đất nền hạ tầng
// ─────────────────────────────────────────────────────────────

export const PROGRESS_UPDATE_DATE = "23/11/2026";
export const PROGRESS_UPDATE_ISO = "2026-11-23";

export interface ProgressMediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  title: string;
  caption: string;
  date: string;
  badge?: string;
}

export const LATEST_PROGRESS_VIDEOS: ProgressMediaItem[] = [
  {
    id: "video-dat-nen",
    type: "video",
    src: "https://res.cloudinary.com/dqy4lfmcf/video/upload/v1795401692/megacity2/progress-2026/video-thuc-te-dat-nen-mega-city-2.mp4",
    poster: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1600,c_limit/megacity2/progress-2026/video-thuc-te-dat-nen-mega-city-2-thumb.jpg",
    alt: "Video thực tế tình hình đất nền và hạ tầng nội khu Mega City 2 Nhơn Trạch ngày 23/11/2026",
    title: "Thực địa đất nền & đường nhựa nội khu",
    caption:
      "Ghi nhận thực tế ngày 23/11/2026 tại Đường Số 10: đường trải nhựa hoàn chỉnh, vỉa hè lát gạch, hệ thống trụ đèn chiếu sáng và cây xanh hiện hữu.",
    date: "23/11/2026",
    badge: "VIDEO THỰC ĐỊA",
  },
  {
    id: "video-cong-truong-noxh",
    type: "video",
    src: "https://res.cloudinary.com/dqy4lfmcf/video/upload/v1795401684/megacity2/progress-2026/video-cong-truong-k-home-avenue-landscape.mp4",
    poster: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1600,c_limit/megacity2/progress-2026/video-cong-truong-k-home-avenue-landscape-thumb.jpg",
    alt: "Video công trường thi công Nhà ở xã hội K-Home Avenue trên 20% quỹ đất Mega City 2",
    title: "Toàn cảnh công trường NOXH K-Home Avenue",
    caption:
      "Góc quay ngang toàn cảnh 2 cần cẩu tháp và tổng thầu Handong E&C đang thi công đổ sàn các tầng nổi phân khu NOXH K-Home Avenue.",
    date: "23/11/2026",
    badge: "VIDEO CÔNG TRƯỜNG",
  },
];

export const LATEST_PROGRESS_PHOTOS: ProgressMediaItem[] = [
  {
    id: "cong-chao",
    type: "image",
    src: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1600,c_limit/megacity2/progress-2026/cong-chao-kim-oanh-group-mega-city-2.jpg",
    alt: "Cổng chào và biểu tượng Kim Oanh Group tại dự án Mega City 2 Nhơn Trạch",
    title: "Biểu tượng Kim Oanh Group tại Mega City 2",
    caption: "Cổng chào và tường đá khối chữ thương hiệu Kim Oanh Group cùng hàng dừa cảnh quan, quảng trường lát đá sạch đẹp.",
    date: "23/11/2026",
    badge: "CỔNG DỰ ÁN",
  },
  {
    id: "toan-canh-noxh",
    type: "image",
    src: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1600,c_limit/megacity2/progress-2026/toan-canh-k-home-avenue-mega-city-2-20-phan-tram-quy-dat.jpg",
    alt: "Toàn cảnh khối nhà NOXH K-Home Avenue xây dựng trên 20% quỹ đất Mega City 2",
    title: "NOXH K-Home Avenue (20% quỹ đất Mega City 2)",
    caption: "Phân khu nhà ở xã hội quy mô hơn 1.000 căn hộ vươn cao với 2 cẩu tháp hoạt động liên tục giữa lòng khu đô thị.",
    date: "23/11/2026",
    badge: "20% QUỸ ĐẤT NOXH",
  },
  {
    id: "cau-thap-handong",
    type: "image",
    src: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1600,c_limit/megacity2/progress-2026/cau-thap-handong-noxh-k-home-avenue.jpg",
    alt: "Cần cẩu tháp tổng thầu Handong E&C và Kim Oanh thi công tầng nổi K-Home Avenue",
    title: "Tổng thầu Handong E&C thi công tầng nổi",
    caption: "Cận cảnh cẩu tháp và lưới bao che an toàn, công nhân đang thi công kết cấu bê tông cốt thép các tầng nổi.",
    date: "23/11/2026",
    badge: "THI CÔNG",
  },
  {
    id: "hang-rao-avenue",
    type: "image",
    src: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1600,c_limit/megacity2/progress-2026/hang-rao-du-an-k-home-avenue-nhon-trach.jpg",
    alt: "Hàng rào nhận diện thương hiệu K-Home Avenue mở lối an cư mặt tiền đường nội khu",
    title: "Nhận diện K-Home Avenue mặt tiền đường nội khu",
    caption: "Hàng rào quảng bá chính thức K-Home Avenue bao quanh công trường, cây cọ xanh mát ven tuyến đường trải nhựa.",
    date: "23/11/2026",
    badge: "MẶT TIỀN NỘI KHU",
  },
  {
    id: "thi-cong-1",
    type: "image",
    src: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1600,c_limit/megacity2/progress-2026/k-home-avenue-mega-city-2-construction-1.jpg",
    alt: "Ảnh thực địa Đường Số 10 Nhơn Trạch ghi nhận ngày 23/11/2026 công trường K-Home Avenue",
    title: "Thực địa Đường Số 10 – Cẩu tháp vươn cao",
    caption: "Góc nhìn từ trục Đường Số 10: hạ tầng giao thông kết nối trực tiếp đến chân công trình phân khu nhà ở xã hội.",
    date: "23/11/2026",
    badge: "THỰC ĐỊA",
  },
  {
    id: "thi-cong-tang-noi",
    type: "image",
    src: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1600,c_limit/megacity2/progress-2026/thi-cong-tang-noi-k-home-avenue-mega-city-2.jpg",
    alt: "Kết cấu sàn tầng nổi phân khu NOXH K-Home Avenue Mega City 2",
    title: "Thi công sàn tầng nổi phân khu căn hộ",
    caption: "Hệ giàn giáo và cốp pha thép chắc chắn, công trình đang tăng tốc hoàn thiện từng sàn tầng.",
    date: "23/11/2026",
    badge: "KẾT CẤU",
  },
  {
    id: "thuc-dia-mat-bang",
    type: "image",
    src: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1600,c_limit/megacity2/progress-2026/thuc-dia-mat-bang-mega-city-2-nhon-trach.jpg",
    alt: "Mặt bằng thực tế đất nền Mega City 2 với nền cỏ và cẩu tháp phía xa",
    title: "Nền đất phân lô Mega City 2 phẳng phiu",
    caption: "Mặt bằng toàn khu đã san lấp cao ráo, phân lô rõ ràng, liền kề ngay công trường phân khu nhà ở xã hội đang xây dựng.",
    date: "23/11/2026",
    badge: "ĐẤT NỀN",
  },
  {
    id: "canh-quan-avenue",
    type: "image",
    src: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1600,c_limit/megacity2/progress-2026/canh-quan-dat-nen-k-home-avenue-mega-city-2.jpg",
    alt: "Khoảng lùi cảnh quan và cây xanh tại Mega City 2 hướng về K-Home Avenue",
    title: "Khoảng lùi cảnh quan & mảng xanh",
    caption: "Không gian thoáng đãng giữa các block đất nền và khu căn hộ cao tầng, đón trọn ánh nắng và gió tự nhiên.",
    date: "23/11/2026",
    badge: "CẢNH QUAN",
  },
];

export const NOXH_AVENUE_HIGHLIGHT = {
  title: "Mega City 2 Trích 20% Quỹ Đất Phát Triển NOXH K-Home Avenue",
  tag: "TIẾN ĐỘ ĐỘT PHÁ 23/11/2026",
  description:
    "Theo quy hoạch được phê duyệt và Quyết định giao đất 2979/QĐ-UBND của UBND tỉnh Đồng Nai, dự án Mega City 2 (Phú Hội, ~84 ha) đã trích ra 20% quỹ đất nhà ở để phát triển phân khu Nhà ở xã hội K-Home Avenue quy mô hơn 1.000 căn hộ.",
  keyPoints: [
    {
      title: "Khởi công thần tốc, 2 cẩu tháp vận hành liên tục",
      desc: "Hiện tại, tổng thầu quốc tế Handong E&C cùng Kim Oanh Group đang khẩn trương đổ sàn các tầng nổi, đảm bảo tiến độ bàn giao đúng cam kết.",
    },
    {
      title: "Bảo chứng pháp lý & cam kết thực thi của Chủ đầu tư",
      desc: "Việc rầm rộ xây dựng phân khu NOXH ngay trong lòng dự án khẳng định pháp lý dự án hoàn thiện 100% và tiềm lực triển khai mạnh mẽ của Kim Oanh Group.",
    },
    {
      title: "Đòn bẩy đưa hàng ngàn cư dân về ở thực",
      desc: "Hơn 1.000 căn hộ khi đón cư dân về sinh sống sẽ tạo nên cộng đồng sầm uất, kích hoạt chuỗi thương mại dịch vụ và gia tăng giá trị phi mã cho các lô đất nền xung quanh.",
    },
    {
      title: "Hạ tầng đất nền đã hoàn thiện ~95%",
      desc: "Đường nội khu 13–32 m trải nhựa, vỉa hè lát gạch, hệ thống điện âm, cấp thoát nước và cây xanh đã sẵn sàng chào đón cư dân xây dựng nhà ở.",
    },
  ],
};
