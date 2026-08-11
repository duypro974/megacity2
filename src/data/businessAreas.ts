// ─────────────────────────────────────────────────────────────
// businessAreas.ts — Lĩnh vực hoạt động của Kim Oanh Group
//
// QUY TẮC:
// - Đây là lĩnh vực của KIM OANH GROUP, không phải KIM OANH ĐỒNG NAI
// - Không tự thêm lĩnh vực chưa có cơ sở
// - Thêm lĩnh vực mới: chỉ cần thêm object vào array này
// ─────────────────────────────────────────────────────────────

export interface BusinessArea {
  id: string;
  number: string;
  title: string;
  entity?: string; // Đơn vị phụ trách (nếu có)
  description: string;
  // Image placeholder — thay bằng URL thật khi có
  image: string;
  imageAlt: string;
  imageAspect: "4/3" | "3/2" | "16/9" | "1/1";
  cta?: string;
  ctaHref?: string;
}

export const BUSINESS_AREAS: BusinessArea[] = [
  {
    id: "dau-tu-phat-trien",
    number: "01",
    title: "ĐẦU TƯ & PHÁT TRIỂN BẤT ĐỘNG SẢN",
    entity: "Kim Oanh Land",
    description:
      "Đây là một trong những lĩnh vực trọng tâm của Kim Oanh Group, tập trung vào nghiên cứu thị trường, phát triển quỹ đất và hình thành các dự án bất động sản với nhiều loại hình sản phẩm.",
    image: "", // TODO: Thay bằng ảnh thật
    imageAlt: "Đầu tư & Phát triển bất động sản – Kim Oanh Group",
    imageAspect: "4/3",
    cta: "Xem thêm",
    ctaHref: "#",
  },
  {
    id: "kinh-doanh-phan-phoi",
    number: "02",
    title: "KINH DOANH, TIẾP THỊ & PHÂN PHỐI BẤT ĐỘNG SẢN",
    entity: "Kim Oanh Realty",
    description:
      "Thông qua hệ thống kinh doanh và đội ngũ tư vấn, Kim Oanh Realty đóng vai trò kết nối các sản phẩm bất động sản với khách hàng, đồng hành trong quá trình tìm hiểu và lựa chọn sản phẩm.",
    image: "",
    imageAlt: "Kinh doanh, Tiếp thị & Phân phối bất động sản – Kim Oanh Realty",
    imageAspect: "4/3",
    cta: "Xem thêm",
    ctaHref: "#",
  },
  {
    id: "xay-dung-ha-tang",
    number: "03",
    title: "XÂY DỰNG HẠ TẦNG & NHÀ Ở",
    entity: "Kim Oanh Construction",
    description:
      "Kim Oanh Construction cung cấp các giải pháp xây dựng và triển khai hạ tầng, nhà ở theo định hướng chất lượng, hiệu quả và bền vững.",
    image: "",
    imageAlt: "Xây dựng hạ tầng & Nhà ở – Kim Oanh Construction",
    imageAspect: "4/3",
    cta: "Xem thêm",
    ctaHref: "#",
  },
  {
    id: "san-pham-cao-cap",
    number: "04",
    title: "PHÁT TRIỂN SẢN PHẨM BẤT ĐỘNG SẢN CAO CẤP",
    entity: undefined,
    description:
      "Kim Oanh từng bước mở rộng định hướng phát triển sang các sản phẩm bất động sản cao cấp, tiếp cận những tiêu chuẩn và xu hướng quốc tế nhằm gia tăng giá trị trải nghiệm.",
    image: "",
    imageAlt: "Phát triển sản phẩm bất động sản cao cấp – Kim Oanh Group",
    imageAspect: "4/3",
    cta: "Xem thêm",
    ctaHref: "#",
  },
  {
    id: "phat-trien-cong-dong",
    number: "05",
    title: "PHÁT TRIỂN CỘNG ĐỒNG",
    entity: "Kim Oanh Foundation",
    description:
      "Song song với hoạt động kinh doanh, Kim Oanh Group chú trọng các chương trình hướng đến cộng đồng, góp phần nâng cao chất lượng sống và tạo thêm những giá trị xã hội tích cực.",
    image: "",
    imageAlt: "Phát triển cộng đồng – Kim Oanh Foundation",
    imageAspect: "4/3",
    cta: "Xem thêm",
    ctaHref: "#",
  },
];
