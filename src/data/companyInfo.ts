// ─────────────────────────────────────────────────────────────
// companyInfo.ts — thông tin Kim Oanh Group
//
// QUY TẮC:
// - Chỉ render ra UI khi verified === true
// - Không tự thêm số liệu, doanh thu, nhân sự, dự án chưa xác thực
// - Paraphrase từ nguồn chính thức, không copy nguyên văn
// ─────────────────────────────────────────────────────────────

export const COMPANY_INFO = {
  name: "Kim Oanh Group",
  fullName: "Tập đoàn Kim Oanh",
  description:
    "Kim Oanh Group là tập đoàn hoạt động trong lĩnh vực bất động sản, phát triển hệ sinh thái với nhiều đơn vị chuyên môn trong đầu tư, phát triển dự án, xây dựng, kinh doanh – phân phối và các hoạt động hướng đến cộng đồng.",
  description2:
    "Qua quá trình phát triển, Kim Oanh từng bước mở rộng năng lực, hoàn thiện hệ sinh thái và theo đuổi định hướng phát triển chuyên nghiệp, nhân văn và bền vững.",
  vision:
    "Trở thành tập đoàn đầu tư, phát triển bất động sản chuyên nghiệp, uy tín, nhân văn và bền vững tại Việt Nam, từng bước hướng đến thị trường quốc tế.",
  mission: "Kiến tạo những giá trị sống bền vững.",
  heroHeading: "Hành trình kiến tạo\nnhững giá trị bền vững",
  heroDescription:
    "Từ nền tảng bất động sản, Kim Oanh từng bước xây dựng một hệ sinh thái hoạt động đa dạng, hướng đến sự hài hòa giữa hiệu quả kinh doanh, trải nghiệm khách hàng và những giá trị tích cực cho cộng đồng.",
  // Website disclaimer — KIM OANH ĐỒNG NAI không phải website chính thức KOG
  siteDisclaimer:
    "Thông tin về Kim Oanh Group trên trang này mang tính tham khảo, tổng hợp từ nguồn công khai. Để biết thông tin chính thức, vui lòng truy cập website của Kim Oanh Group.",
};

export const BUSINESS_PHILOSOPHY = {
  heading: "UY TÍN – NHÂN VĂN – BỀN VỮNG",
  pillars: [
    {
      id: "uy-tin",
      title: "UY TÍN",
      quote: "Làm và sống bằng uy tín.",
      desc: "Xây dựng niềm tin từ những cam kết được thực hiện đúng hạn, minh bạch và trách nhiệm trong từng sản phẩm, từng giao dịch.",
    },
    {
      id: "nhan-van",
      title: "NHÂN VĂN",
      quote: "Đặt con người, khách hàng và cộng đồng vào trung tâm của quá trình phát triển.",
      desc: "Mỗi dự án không chỉ là sản phẩm kinh doanh mà còn là không gian sống, là cộng đồng được kiến tạo với sự quan tâm đến con người.",
    },
    {
      id: "ben-vung",
      title: "BỀN VỮNG",
      quote: "Xây dựng hệ sinh thái và hoạt động kinh doanh theo hướng lâu dài.",
      desc: "Phát triển bền vững không chỉ về kinh tế mà còn về môi trường, xã hội và chất lượng cuộc sống của các thế hệ tiếp nối.",
    },
  ],
} as const;

export const CORE_VALUES = [
  {
    id: "cong-hien",
    number: "01",
    title: "CỐNG HIẾN",
    desc: "Không ngừng nỗ lực tạo ra những sản phẩm có giá trị thực, đóng góp vào sự phát triển của ngành và cộng đồng.",
  },
  {
    id: "trach-nhiem",
    number: "02",
    title: "TRÁCH NHIỆM",
    desc: "Chịu trách nhiệm với khách hàng, đối tác, cộng đồng và môi trường trong mọi quyết định và hành động.",
  },
  {
    id: "sang-tao",
    number: "03",
    title: "SÁNG TẠO & ĐỔI MỚI",
    desc: "Liên tục tìm kiếm những cách tiếp cận mới, cải tiến sản phẩm và quy trình để đáp ứng nhu cầu ngày càng cao của thị trường.",
  },
  {
    id: "se-chia",
    number: "04",
    title: "SẺ CHIA",
    desc: "Chia sẻ giá trị với cộng đồng, hỗ trợ những hoàn cảnh khó khăn và xây dựng môi trường làm việc tích cực, gắn kết.",
  },
] as const;
