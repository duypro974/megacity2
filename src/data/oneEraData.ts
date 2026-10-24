// ============================================================================
// Dữ liệu toàn diện Siêu Dự Án ONE ERA Bình Dương (1 Tỷ USD)
// Đối soát chuẩn xác từ CĐT (oneera.com.vn), Kinera, Kim Oanh Group & Leaflet gốc
// ============================================================================

export interface OneEraProduct {
  id: string;
  name: string;
  type: "townhouse" | "shophouse";
  dimension: string;
  floors: string;
  landArea: string;
  builtArea: string;
  lots: string[];
  tagline: string;
  description: string;
  features: string[];
  image: string;
  floorPlanImages: string[];
  priceEst?: string;
}

export interface OneEraAmenity {
  id: string;
  title: string;
  category: "all" | "commercial" | "education" | "health" | "green" | "entertainment";
  tagline: string;
  description: string;
  stats?: string;
  image: string;
  highlight?: boolean;
}

export interface OneEraPartner {
  name: string;
  role: string;
  country: string;
  description: string;
  logoPlaceholder?: string;
}

export const ONE_ERA_DATA = {
  project: {
    name: "ONE ERA",
    fullName: "Khu Đô Thị ONE ERA Bình Dương",
    formerName: "Một Thế Giới (The One World)",
    slogan: "Thành phố đáng sống – Định hình Đông Bắc Sài Gòn",
    tagline: "Khu đô thị kiểu mẫu thế hệ mới đầu tiên tại Thượng Đỉnh TP. Hồ Chí Minh",
    investment: "Hơn 1 Tỷ USD (~25.000 Tỷ VNĐ)",
    scale: "Gần 50 Hécta (~49.5 ha)",
    density: "25% – 30% (Hơn 70% dành cho mảng xanh, mặt nước & tiện ích)",
    handoverDate: "Quý 4/2028 (Dự kiến)",
    location: "Mặt tiền Đại lộ Bình Dương (Quốc lộ 13) & Nguyễn Thị Minh Khai, Phường Thuận Giao, TP. Thuận An, Tỉnh Bình Dương",
    greenCertificates: [
      { name: "Fitwel Community Site 3 Sao", desc: "Chứng nhận cao nhất của Trung tâm Thiết kế Chủ động Hoa Kỳ về sức khỏe cư dân" },
      { name: "Chứng nhận EDGE", desc: "Tiêu chuẩn thiết kế công trình xanh tiết kiệm năng lượng, nước và vật liệu quốc tế" },
      { name: "AI Smart Urban", desc: "Hệ thống quản lý vận hành đô thị thông minh tích hợp trí tuệ nhân tạo và camera AI 24/7" },
    ],
  },

  developers: {
    developerName: "Công ty Cổ phần Tập đoàn Kinera (KINERA)",
    developerDescription: "Liên doanh chiến lược giữa Kim Oanh Group (51% vốn) và 3 tập đoàn hàng đầu Nhật Bản (49% vốn) mang triết lý 'Sống Trân Quý' kiến tạo tổ ấm đa thế hệ.",
    investor: "Công ty Cổ phần Đầu tư và Phát triển Kim Oanh (Kim Oanh Group)",
    japanesePartners: [
      {
        name: "Sumitomo Forestry",
        established: "1691 (Hơn 330 năm lịch sử)",
        role: "Tập đoàn phát triển đô thị sinh thái, vật liệu gỗ và kiến trúc bền vững danh tiếng toàn cầu của Nhật Bản.",
      },
      {
        name: "Kumagai Gumi",
        established: "1898 (Hơn 125 năm lịch sử)",
        role: "Tập đoàn xây dựng và kỹ thuật công trình quy mô hàng đầu Nhật Bản, sở hữu hàng loạt công trình ngầm và cao ốc biểu tượng.",
      },
      {
        name: "NTT Urban Development",
        established: "Thành viên NTT Group",
        role: "Thành viên tập đoàn viễn thông lớn nhất Nhật Bản NTT Group, chuyên gia phát triển đô thị thông minh và cao ốc văn phòng hạng sang.",
      },
    ],
    generalContractor: {
      name: "Coteccons",
      role: "Tổng thầu thi công xây dựng số 1 Việt Nam, bảo chứng chất lượng và tiến độ cam kết.",
    },
    partners: [
      { name: "AEON Mall Việt Nam", role: "Đại siêu thị & Trung tâm thương mại bán lẻ Nhật Bản lớn nhất khu vực", country: "Nhật Bản" },
      { name: "VAS Saigon", role: "Hệ thống Trường Quốc tế Việt Úc – Đào tạo liên cấp từ tiểu học đến THPT chuẩn Cambridge", country: "Việt Nam / Anh Quốc" },
      { name: "KindUp Preschool", role: "Hệ thống trường Mầm non song ngữ tiêu chuẩn quốc tế", country: "Quốc tế" },
      { name: "Phòng khám Quốc tế Meret", role: "Hệ sinh thái y tế ứng dụng AI chẩn đoán sớm và bác sĩ gia đình", country: "Quốc tế" },
      { name: "Surbana Jurong", role: "Tư vấn quy hoạch tổng thể & chiến lược đô thị sinh thái", country: "Singapore" },
      { name: "Land Sculptor Studio", role: "Thiết kế cảnh quan công viên xanh và mặt nước chuẩn resort", country: "Thái Lan" },
      { name: "DP Architects & Kume Design Asia", role: "Thiết kế kiến trúc cao ốc & nhà ở kết hợp phong cách Nhật", country: "Singapore & Nhật Bản" },
      { name: "TERAO & GreenViet", role: "Tư vấn chứng chỉ công trình xanh EDGE & Fitwel 3 sao", country: "Pháp & Việt Nam" },
    ] as OneEraPartner[],
  },

  locationConnectivity: {
    headline: "Tam Giao Chiến Lược Bậc Nhất Thượng Đỉnh",
    description: "Tọa lạc tại giao điểm của các trục giao thông đối ngoại lớn nhất Đông Nam Bộ, sở hữu lợi thế độc tôn khi vừa kề cận tuyến Vành đai 3, vừa kết nối trực tiếp 2 tuyến Metro trong tương lai.",
    highways: [
      { name: "Quốc Lộ 13 (Đại lộ Bình Dương)", desc: "Mở rộng lên 8 làn xe (lộ giới 64m), trục thương mại nối thẳng vào TP. Thủ Đức và trung tâm TP.HCM." },
      { name: "Đường Vành Đai 3 TP.HCM", desc: "Tuyến đường huyết mạch liên vùng kết nối TP.HCM – Bình Dương – Đồng Nai – Long An, rút ngắn đường đến Sân bay Long Thành." },
      { name: "Đường Mỹ Phước – Tân Vạn", desc: "Hành lang kinh tế công nghiệp kết nối các trung tâm logistic lớn nhất miền Nam." },
      { name: "Đại lộ One Era (25m)", desc: "Trục đại lộ trung tâm dự án kết nối giao thương nội khu sầm uất ra đường Nguyễn Thị Minh Khai." },
    ],
    metroLines: [
      { line: "Metro Tuyến 1B", desc: "Kéo dài từ Ga Suối Tiên (Bến xe Miền Đông mới) về trung tâm Bình Dương, có ga Metro quy hoạch kết nối trực tiếp đại đô thị." },
      { line: "Metro Tuyến 2B", desc: "Tuyến Metro Thủ Dầu Một – Tao Đàn (TP.HCM), mở ra kỷ nguyên di chuyển siêu tốc không khói bụi." },
    ],
    times: [
      { minutes: "3 - 5", title: "Phút", dest: "AEON Mall Canary, Sân Golf Sông Bé, BVQT Becamex, BV Columbia Asia, KCN VSIP 1" },
      { minutes: "10 - 15", title: "Phút", dest: "TP. Thủ Đức, Lotte Mart Bình Dương, Mega Market, Trung tâm TP. Thủ Dầu Một" },
      { minutes: "25 - 30", title: "Phút", dest: "Quận 1 - Trung tâm TP. Hồ Chí Minh, Sân bay Quốc tế Tân Sơn Nhất" },
      { minutes: "45", title: "Phút", dest: "Sân bay Quốc tế Long Thành qua tuyến đường Vành Đai 3" },
    ],
  },

  centralDistrict: {
    title: "CENTRAL DISTRICT – BỘ SƯU TẬP THẤP TẦNG GIỚI HẠN",
    subtitle: "Một không gian sống riêng tư dành cho những giá trị bền lâu, nơi mỗi thế hệ cùng lớn lên và gìn giữ một tổ ấm đáng tự hào.",
    totalUnits: 357,
    townhouseCount: 208,
    shophouseCount: 149,
    handoverYear: "Quý 4/2028 (Dự kiến)",
    exclusiveAmenities: [
      "Hồ bơi chuẩn Resort riêng tư dành riêng cho cư dân Central District",
      "Dòng kênh sinh thái Suối Cát xanh mát ôm trọn phong thủy thịnh vượng",
      "Khu compound an ninh đa lớp 24/7 khép kín an tâm tuyệt đối",
      "Công viên One Park & Era Park kề bên thềm nhà",
      "Trường liên cấp VAS Saigon và Phòng khám Meret chỉ vài bước chân",
    ],
    products: [
      {
        id: "townhouse-5x16",
        name: "Townhouse 5x16m",
        type: "townhouse",
        dimension: "5m x 16m",
        floors: "1 trệt + 2 lầu (3 tầng)",
        landArea: "80 m²",
        builtArea: "178.6 m²",
        lots: ["TH12", "TH13", "TH16", "TH18"],
        tagline: "Một mái ấm, vạn bước trưởng thành kề bên",
        description: "Thiết kế tối ưu từng mét vuông vuông vắn, phòng khách rộng mở kết nối phòng ăn và sân sau thoáng đãng, mang đến tổ ấm đa thế hệ ấm cúng chan hòa yêu thương.",
        features: ["3-4 Phòng ngủ tiện nghi", "Sân trước đậu ô tô + sân sau thoáng khí", "Ban công kính view cây xanh mát lành", "Thiết kế phong cách tối giản Japandi"],
        image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/townhouse-ground-floor-living.webp",
        floorPlanImages: ["https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/townhouse-ground-floor-living.webp", "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/townhouse-level2-master-bedroom.webp"],
        priceEst: "Liên hệ Hotline nhận bảng giá đợt 1",
      },
      {
        id: "townhouse-6x18",
        name: "Townhouse 6x18m (và 6x16m)",
        type: "townhouse",
        dimension: "6m x 18m (và 6m x 16m)",
        floors: "1 trệt + 1 lửng + 2 lầu (4 tầng)",
        landArea: "108 m²",
        builtArea: "249.6 m²",
        lots: ["TH9", "TH10", "TH11"],
        tagline: "An cư bên dòng xanh Suối Cát",
        description: "Bề ngang 6m lý tưởng với tầng lửng thông thoáng, nhìn trực diện ra dòng kênh sinh thái Suối Cát. Tầng 3 bố trí phòng trà đạo ngắm cảnh sân thượng đẳng cấp.",
        features: ["Bề ngang 6m rộng rãi thông thoáng", "Tầng lửng cao cấp tạo chiều sâu không gian", "Phòng trà đạo ngắm cảnh phong cách Nhật", "Sân thượng ban công vườn xanh mát"],
        image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/townhouse-architecture-mizuhiki.webp",
        floorPlanImages: ["https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/townhouse-ground-floor-kitchen.webp", "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/townhouse-level3-japanese-tea-room.webp"],
        priceEst: "Liên hệ Hotline nhận bảng giá đợt 1",
      },
      {
        id: "shophouse-5x18",
        name: "Shophouse 5x18m",
        type: "shophouse",
        dimension: "5m x 18m",
        floors: "1 trệt + 1 lửng + 2 lầu (4 tầng)",
        landArea: "90 m²",
        builtArea: "238.5 m²",
        lots: ["SH13", "SH17"],
        tagline: "Thuận việc con học, tiện lối kinh doanh",
        description: "Tọa lạc ngay mặt tiền đường nối liền cụm trường quốc tế VAS Saigon và trường mầm non KindUp. Tầng trệt kinh doanh văn phòng phẩm, cafe, hiệu sách, tầng trên để ở riêng tư.",
        features: ["Vỉa hè rộng rãi dừng đỗ xe", "Tầng trệt kinh doanh trần cao thông thoáng", "Tầng lửng linh hoạt làm văn phòng/lounge", "Lối đi tách biệt đảm bảo sinh hoạt riêng"],
        image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/shophouse-ground-floor-cafe.webp",
        floorPlanImages: ["https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/shophouse-ground-floor-cafe.webp", "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/shophouse-mezzanine-coworking.webp"],
        priceEst: "Liên hệ Hotline nhận bảng giá đợt 1",
      },
      {
        id: "shophouse-6x18",
        name: "Shophouse 6x18m",
        type: "shophouse",
        dimension: "6m x 18m",
        floors: "1 trệt + 1 lửng + 2 lầu (4 tầng)",
        landArea: "108 m²",
        builtArea: "285.5 m²",
        lots: ["SH8", "SH11"],
        tagline: "Mặt tiền cạnh bên One Park đón vận phồn hoa",
        description: "Vị trí kim cương đối diện công viên One Park và trục đại lộ 20m. Mặt tiền 6m bề thế với diện tích sàn gần 300m2, lý tưởng cho showroom, ngân hàng, nhà hàng cao cấp.",
        features: ["Mặt tiền 6m đẳng cấp", "View trực diện công viên One Park đón khách tấp nập", "Tầng lửng thương mại & 2 tầng ở chuẩn 5 sao", "Cầu thang máy và thang bộ bố trí khoa học"],
        image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/shophouse-facade-commercial.webp",
        floorPlanImages: ["https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/shophouse-level2-living-room.webp", "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/shophouse-level3-master-suite.webp"],
        priceEst: "Liên hệ Hotline nhận bảng giá đợt 1",
      },
      {
        id: "shophouse-6x23-corner",
        name: "Shophouse 6x23m (Hai Mặt Tiền)",
        type: "shophouse",
        dimension: "6m x 23m",
        floors: "1 trệt + 1 lửng + 2 lầu (4 tầng)",
        landArea: "138 m²",
        builtArea: "Hơn 340 m²",
        lots: ["SH7", "SH9"],
        tagline: "Tuyệt phẩm góc hai mặt tiền – Đỉnh cao nhận diện thương hiệu",
        description: "Số lượng cực kỳ giới hạn tại góc các giao lộ huyết mạch nội khu. Thiết kế kính tràn góc panoramic, tăng tối đa diện tích tiếp xúc kinh doanh và giá trị gia tăng vô hạn.",
        features: ["2 Mặt tiền đường lớn kinh doanh không góc chết", "Sân trước và vỉa hè đôi cực rộng", "Không gian thông tầng đẳng cấp biểu tượng", "Tiềm năng khai thác cho thuê cao nhất dự án"],
        image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/hero/one-era-grand-boulevard.webp",
        floorPlanImages: ["https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/products/shophouse-facade-commercial.webp"],
        priceEst: "Liên hệ Hotline nhận bảng giá căn góc VIP",
      },
    ] as OneEraProduct[],
  },

  amenities: [
    {
      id: "aeon-mall",
      title: "Đại Siêu Thị & TTTM AEON Mall Canary",
      category: "commercial",
      tagline: "Thiên đường mua sắm, ẩm thực và giải trí chuẩn Nhật",
      description: "Hợp tác chiến lược cùng AEON Việt Nam mang đến trung tâm mua sắm quy mô hàng đầu khu vực, kết nối trực tiếp với quần thể tháp đôi Kinera Tower.",
      stats: "Quy mô lớn hàng đầu Bình Dương",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-kinera-towers-aeon-mall.webp",
      highlight: true,
    },
    {
      id: "cau-ken-vang",
      title: "Cầu Đi Bộ Xoắn Ốc Mizuhiki & Quảng Trường Ánh Sáng",
      category: "entertainment",
      tagline: "Biểu tượng kết nối đa chiều thắt chặt tình thân",
      description: "Cầu đi bộ xoắn ốc tuyệt mỹ lấy cảm hứng từ nút thắt dây truyền thống Mizuhiki Nhật Bản, bắc qua đại lộ chính kết nối cư dân an toàn đến trung tâm mua sắm và ga Metro.",
      stats: "Kiến trúc biểu tượng Mizuhiki",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-mizuhiki-pedestrian-bridge.webp",
      highlight: true,
    },
    {
      id: "vas-saigon",
      title: "Trường Liên Cấp Quốc Tế VAS Saigon",
      category: "education",
      tagline: "Nền tảng giáo dục ưu việt Cambridge cho thế hệ tương lai",
      description: "Cụm trường quốc tế liên cấp từ tiểu học đến THPT với cơ sở vật chất hiện đại, sân vận động, hồ bơi và môi trường học tập song ngữ toàn cầu ngay cạnh thềm nhà.",
      stats: "Chuẩn Cambridge Anh Quốc",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-international-school-sports.webp",
      highlight: true,
    },
    {
      id: "vas-saigon-field",
      title: "Sân Bóng Đá Cỏ Nhân Tạo & Cụm Thể Thao Học Đường",
      category: "education",
      tagline: "Không gian rèn luyện thể chất chuẩn học viện thể thao",
      description: "Sân bóng đá cỏ nhân tạo tiêu chuẩn quốc tế, đường pitch chạy bộ và khán đài thể thao phục vụ hoạt động ngoại khóa năng động cho con trẻ.",
      stats: "Tiêu chuẩn thi đấu học đường",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-international-school-soccer-field.webp",
    },
    {
      id: "kindup-preschool",
      title: "Trường Mầm Non Song Ngữ Quốc Tế KindUp",
      category: "education",
      tagline: "Ươm mầm những bước đi đầu đời vững chắc cho con yêu",
      description: "Mô hình mầm non quốc tế ứng dụng phương pháp giáo dục sớm từ Nhật Bản, tối ưu phát triển cảm xúc, thể chất và tư duy sáng tạo trong môi trường an toàn tuyệt đối.",
      stats: "Mầm non song ngữ Nhật Bản",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-kindergarten-preschool.webp",
    },
    {
      id: "meret-clinic",
      title: "Phòng Khám Đa Khoa Quốc Tế Meret (EMC Health)",
      category: "health",
      tagline: "Hệ sinh thái y tế thông minh ứng dụng trí tuệ nhân tạo AI",
      description: "Chăm sóc sức khỏe gia đình toàn diện với công nghệ chẩn đoán hình ảnh AI sớm, bác sĩ gia đình và hệ thống quản lý hồ sơ y tế số hóa 24/7.",
      stats: "Hệ thống Y tế AI 24/7",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-meret-health-clinic.webp",
      highlight: true,
    },
    {
      id: "resort-pool",
      title: "Hồ Bơi Ốc Đảo Resort & Cabana Nghỉ Dưỡng",
      category: "entertainment",
      tagline: "Kỳ nghỉ nhiệt đới sang trọng ngay giữa lòng đô thị",
      description: "Mặt nước hồ bơi uốn lượn phong cách lagoon resort, bao quanh bởi rặng cọ xanh mướt, sàn gỗ tắm nắng và chòi cabana thư giãn đẳng cấp 5 sao.",
      stats: "Chuẩn Resort 5 Sao",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-resort-lagoon-pool.webp",
      highlight: true,
    },
    {
      id: "clubhouse-pool-lawn",
      title: "Clubhouse Thượng Lưu & Thảm Cỏ Sự Kiện",
      category: "entertainment",
      tagline: "Trung tâm kết nối cộng đồng tinh hoa và gắn kết gia đình",
      description: "Tổ hợp nhà sinh hoạt cộng đồng sang trọng, sảnh đón tiếp thượng khách, hồ bơi vô cực và bãi cỏ tiệc nướng BBQ ngoài trời dành riêng cho cư dân.",
      stats: "Đặc quyền cư dân tinh hoa",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-clubhouse-pool-lawn.webp",
    },
    {
      id: "multi-sports-park",
      title: "Công Viên Thể Thao Đa Thế Hệ",
      category: "green",
      tagline: "Sân chơi thể lực liên hoàn nâng cao sức khỏe cho mọi lứa tuổi",
      description: "Quảng trường bậc thang thể thao, khu vực bóng bàn ngoài trời, sân dưỡng sinh người cao tuổi và đường dạo bộ rợp bóng mát khuyến khích lối sống Fitwel tích cực.",
      stats: "Chuẩn sống Fitwel 3 Sao",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-multi-generational-sports-park.webp",
    },
    {
      id: "outdoor-basketball",
      title: "Sân Bóng Rổ & Tổ Hợp Vận Động Ngoài Trời",
      category: "green",
      tagline: "Rèn luyện thể lực bền bỉ và tinh thần đồng đội trẻ trung",
      description: "Cụm sân bóng rổ ngoài trời mặt sân giảm chấn tiêu chuẩn, máy tập gym công viên thông minh kích thích lối sống vận động hàng ngày.",
      stats: "Mặt sân tiêu chuẩn EPDM",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-outdoor-basketball-sports-park.webp",
    },
    {
      id: "riverside-walkway",
      title: "Đường Dạo Bộ Hoàng Hôn Ven Kênh Suối Cát",
      category: "green",
      tagline: "Thanh âm thiên nhiên êm đềm tái tạo năng lượng mỗi ngày",
      description: "Dải công viên ven dòng kênh sinh thái Suối Cát xanh ngát với hàng cây lọc bụi, ghế đá nghỉ chân ngắm hoàng hôn thanh bình cùng gia đình.",
      stats: "Kênh sinh thái tự nhiên",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-riverside-walkway-sunset.webp",
    },
    {
      id: "riverside-boulevard",
      title: "Đại Lộ Ven Sông Hướng Tầm Nhìn Tháp Kinera",
      category: "commercial",
      tagline: "Trục cảnh quan phồn vinh biểu tượng Đông Bắc Sài Gòn",
      description: "Tuyến đường ven sông thoáng đãng với tầm nhìn ngoạn mục hướng về các tòa tháp chọc trời Kinera và ánh hoàng hôn rực rỡ buổi chiều muộn.",
      stats: "Tầm nhìn Landmark triệu đô",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-riverside-boulevard-towers.webp",
    },
    {
      id: "metro-skyline",
      title: "Tuyến Metro Trên Cao & Đường Chân Trời Đô Thị",
      category: "commercial",
      tagline: "Định hình kỷ nguyên giao thông xanh siêu tốc không khói bụi",
      description: "Kết nối trực tiếp 2 tuyến Metro Line 1B và Line 2B kéo dài về trung tâm TP.HCM, mang đến giá trị gia tăng vượt trội và diện mạo thành phố tương lai.",
      stats: "2 Tuyến Metro đón đầu",
      image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-metro-line-skyline.webp",
    },
  ] as OneEraAmenity[],

  futureZones: [
    {
      name: "Phân Khu NIZI (Cầu Vồng)",
      concept: "Gắn Kết Đa Thế Hệ",
      desc: "Hiện thân cho sự ấm êm, đa sắc màu và tình thân trọn vẹn của gia đình nhiều thế hệ.",
    },
    {
      name: "Phân Khu HOSHI (Ngôi Sao)",
      concept: "Đẳng Cấp Thượng Lưu & Khoáng Nóng Onsen",
      desc: "Khu biệt thự và dinh thự siêu sang với tổ hợp trị liệu Onsen phong cách Nhật Bản.",
    },
    {
      name: "Phân Khu HARU (Mùa Xuân)",
      concept: "Sôi Động & Trẻ Trung",
      desc: "Trái tim giải trí và nghệ thuật với Haru Clubhouse, phố đi bộ và lễ hội bốn mùa.",
    },
    {
      name: "Phân Khu NAGI (Mặt Nước Yên Bình)",
      concept: "Sinh Thái & Thư Giãn Ven Suối",
      desc: "Không gian sống tĩnh tại nép mình bên dòng kênh Suối Cát với đường dạo bộ xanh mát.",
    },
  ],

  faqs: [
    {
      q: "Dự án ONE ERA Bình Dương nằm ở vị trí nào?",
      a: "Dự án tọa lạc ngay ngã ba giao thương chiến lược giữa Đại lộ Bình Dương (Quốc lộ 13) và đường Nguyễn Thị Minh Khai, thuộc phường Thuận Giao, TP. Thuận An, Bình Dương. Dự án nằm cạnh Vành Đai 3 TP.HCM và kết nối trực tiếp với 2 tuyến Metro tương lai (Line 1B & Line 2B).",
    },
    {
      q: "Chủ đầu tư và các đối tác phát triển của dự án là ai?",
      a: "Dự án do Tập đoàn Địa ốc Kim Oanh làm chủ đầu tư và phát triển bởi KINERA – liên danh chiến lược giữa Kim Oanh Group (51%) cùng 3 tập đoàn hàng đầu Nhật Bản (49% gồm Sumitomo Forestry, Kumagai Gumi, NTT Urban Development). Tổng thầu xây dựng là Coteccons và đối tác thương mại là AEON Mall Việt Nam.",
    },
    {
      q: "Phân khu Central District mở bán những loại hình sản phẩm nào?",
      a: "Đợt 1 phân khu Central District mở bán giới hạn 357 căn thấp tầng gồm 208 căn nhà phố (Townhouse 5x16m, 6x18m từ 3-4 tầng) và 149 căn nhà phố thương mại (Shophouse 5x18m, 6x18m, 6x23m hai mặt tiền 4 tầng).",
    },
    {
      q: "Khi nào dự án bàn giao và pháp lý hiện tại ra sao?",
      a: "Thời gian bàn giao nhà dự kiến vào Quý 4/2028. Dự án sở hữu pháp lý quy hoạch hoàn chỉnh, được cấp chứng nhận công trình xanh quốc tế EDGE và chứng chỉ sức khỏe cộng đồng Fitwel Community Site 3 sao của Hoa Kỳ.",
    },
    {
      q: "Tôi có thể xem trực tiếp brochure và tải tài liệu chi tiết ở đâu?",
      a: "Quý khách có thể tải trọn bộ Leaflet mặt trước, mặt sau và xem trực tiếp toàn bộ 28 trang Brochure gốc chất lượng cao ngay trên website hoặc liên hệ hotline kinh doanh.",
    },
  ],
};

// ============================================================================
// BỘ SƯU TẬP 4 PANORAMA SIÊU PHÂN GIẢI (10K - 12K GIGAPIXEL)
// ============================================================================
export interface OneEraPanorama {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  resolution: string;
  fileSize: string;
  image: string;
  badge: string;
}

export const ONE_ERA_PANORAMAS: OneEraPanorama[] = [
  {
    id: "topview-night",
    title: "Toàn Cảnh Master Plan 50ha Về Đêm",
    subtitle: "Khu Đô Thị Sáng Rực Rỡ Thượng Đỉnh Đông Bắc Sài Gòn",
    description: "Phối cảnh quy hoạch tổng thể 50 Hécta góc nhìn thẳng từ trên cao, thể hiện trọn vẹn 4 phân khu chức năng, đại siêu thị AEON Mall, tháp đôi Kinera và dải xanh Suối Cát ôm quanh dự án.",
    resolution: "10,000 × 5,565 px (Gốc 31.7 MB)",
    fileSize: "1.47 MB WebP Siêu Nét",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-top-view-night-masterplan.webp",
    badge: "Master Plan 50ha",
  },
  {
    id: "panoramic-sunset",
    title: "Skyline Hoàng Hôn Tuyệt Mỹ Hướng Về TP.HCM",
    subtitle: "Tầm Nhìn Biểu Tượng Triệu Đô Đón Trọn Vượng Khí",
    description: "Bức tranh panorama toàn cảnh trải dài từ Thuận An hướng thẳng về trung tâm TP. Hồ Chí Minh trong ráng chiều hoàng hôn rực rỡ, phản chiếu sức sống căng tràn của vùng đô thị phát triển nhất cả nước.",
    resolution: "11,055 × 4,540 px (Gốc 43.5 MB)",
    fileSize: "856 KB WebP Tối Ưu",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-panoramic-sunset.webp",
    badge: "Gigapixel Panorama",
  },
  {
    id: "kinera-towers-aeon",
    title: "Tháp Đôi Kinera Tower & Đại Siêu Thị AEON Mall",
    subtitle: "Trung Tâm Thương Mại & Biểu Tượng Kiến Trúc Chuẩn Nhật",
    description: "Góc nhìn cận cảnh quần thể cao ốc tháp đôi Kinera Tower tích hợp đại siêu thị AEON Mall Canary, kết nối trực tiếp với cầu đi bộ biểu tượng ánh sáng và nhà ga Metro trên cao.",
    resolution: "12,331 × 7,112 px (Gốc 49.8 MB)",
    fileSize: "910 KB WebP Tối Ưu",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-kinera-towers-aeon-mall.webp",
    badge: "AEON Mall & Tháp Đôi",
  },
  {
    id: "grand-boulevard",
    title: "Đại Lộ Thương Mại Phồn Hoa One Era (25m)",
    subtitle: "Trục Giao Thương Sầm Uất Với Cầu Kén Vàng Mizuhiki",
    description: "Góc nhìn phối cảnh trên cao trục đại lộ trung tâm 25m với dải shophouse thương mại sáng đèn, vỉa hè thênh thang kết hợp cầu đi bộ xoắn ốc tuyệt mỹ bắc qua đại lộ.",
    resolution: "11,399 × 6,580 px (Gốc 44.7 MB)",
    fileSize: "779 KB WebP Tối Ưu",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-grand-boulevard-towers.webp",
    badge: "Đại Lộ Trung Tâm 25m",
  },
];

// ============================================================================
// BỘ PHỐI CẢNH CHI TIẾT CENTRAL DISTRICT & TIỆN ÍCH DỰ ÁN
// ============================================================================
export interface OneEraPerspective {
  id: string;
  title: string;
  tag: string;
  category: "central-district" | "education-health" | "sports-nature";
  description: string;
  image: string;
}

export const ONE_ERA_PERSPECTIVES: OneEraPerspective[] = [
  {
    id: "central-rooftop-aerial",
    title: "Mặt Bằng Mái Pin Mặt Trời 357 Căn Central District",
    tag: "Central District",
    category: "central-district",
    description: "Góc nhìn không gian trên cao bóc tách toàn cảnh 357 căn nhà phố và shophouse Central District với thiết kế mái lắp pin mặt trời chuẩn công trình xanh quốc tế EDGE.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-central-district-rooftop-aerial.webp",
  },
  {
    id: "central-lake-aerial",
    title: "Central District Kề Bên Hồ Cảnh Quan & Khinh Khí Cầu",
    tag: "Cảnh Quan Hồ",
    category: "central-district",
    description: "Tầm nhìn khoáng đạt từ hồ cảnh quan trung tâm lộng gió, điểm hẹn tổ chức các lễ hội khinh khí cầu và sự kiện văn hóa nghệ thuật quy mô lớn.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-central-district-lake-aerial.webp",
  },
  {
    id: "central-sunset-aerial",
    title: "Hoàng Hôn Central District Nép Mình Giữa Hyde Park 42ha",
    tag: "Sinh Thái Xanh",
    category: "central-district",
    description: "Phân khu Central District được bảo bọc bởi thảm thực vật đa tầng của công viên 42ha và kênh Suối Cát mát lành, cách ly hoàn toàn với khói bụi đô thị.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-central-district-sunset-aerial.webp",
  },
  {
    id: "shophouse-corner-view",
    title: "Căn Góc Shophouse Thương Mại Hai Mặt Tiền",
    tag: "Kiến Trúc",
    category: "central-district",
    description: "Góc bo kính panoramic sang trọng, vỉa hè đôi rộng rãi dừng đỗ xe hơi thoải mái, mang đến giá trị nhận diện thương hiệu đỉnh cao.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-shophouse-corner-commercial.webp",
  },
  {
    id: "shophouse-school-street",
    title: "Tuyến Phố Thương Mại Trực Diện Trường Liên Cấp VAS",
    tag: "Phố Kinh Doanh",
    category: "central-district",
    description: "Vị trí vàng kinh doanh nhà sách, cafe học tập và chuỗi ẩm thực; tích hợp hệ thống cột đèn chiếu sáng thông minh tích hợp camera AI giám sát an ninh 24/7.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-school-shophouse-street.webp",
  },
  {
    id: "commercial-intersection",
    title: "Nút Giao Thương Mại Sầm Uất Liền Kề Trường Học",
    tag: "Giao Thương",
    category: "central-district",
    description: "Giao lộ nội khu thông thoáng kết nối trực tiếp dãy shophouse Central District với cụm tiện ích trường học quốc tế và khu thể thao ngoài trời.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-commercial-intersection-school.webp",
  },
  {
    id: "shophouse-facade-street",
    title: "Mặt Đứng Kiến Trúc Shophouse Phong Cách Nhật Bản",
    tag: "Mặt Đứng",
    category: "central-district",
    description: "Ngôn ngữ thiết kế tối giản, hệ lam che nắng thẩm mỹ và các mảng kính lớn tối ưu công năng kép vừa ở vừa khai thác thương mại sinh lời bền vững.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-shophouse-facade-commercial-street.webp",
  },
  {
    id: "mizuhiki-pedestrian-bridge",
    title: "Cầu Đi Bộ Xoắn Ốc Mizuhiki & Quảng Trường Ánh Sáng",
    tag: "Biểu Tượng",
    category: "sports-nature",
    description: "Tuyệt tác cảnh quan lấy cảm hứng từ nút thắt dây truyền thống Nhật Bản, bắc qua đại lộ chính kết nối cư dân đến siêu thị AEON Mall và ga Metro an toàn tuyệt đối.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-mizuhiki-pedestrian-bridge.webp",
  },
  {
    id: "meret-health-clinic",
    title: "Phòng Khám Đa Khoa Quốc Tế Meret (EMC Health)",
    tag: "Y Tế AI",
    category: "education-health",
    description: "Tổ hợp y tế gia đình ứng dụng trí tuệ nhân tạo AI chẩn đoán sớm, hỗ trợ thăm khám định kỳ và đồng hành chăm sóc sức khỏe cho cả 3 thế hệ cư dân.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-meret-health-clinic.webp",
  },
  {
    id: "kindergarten-preschool",
    title: "Trường Mầm Non Song Ngữ Quốc Tế KindUp",
    tag: "Mầm Non",
    category: "education-health",
    description: "Trường mầm non quốc tế phương pháp giáo dục sớm Nhật Bản với sân chơi ngoài trời trải thảm an toàn, khơi dậy tiềm năng sáng tạo của trẻ nhỏ.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-kindergarten-preschool.webp",
  },
  {
    id: "vas-sports-ground",
    title: "Khu Vận Động Thể Chất Trường Quốc Tế VAS",
    tag: "Giáo Dục",
    category: "education-health",
    description: "Cơ sở vật chất học đường đạt chuẩn quốc tế với sân bóng đá mini, cụm tập thể lực và khuôn viên cây xanh mát mắt kích thích tinh thần vận động.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-international-school-sports.webp",
  },
  {
    id: "vas-soccer-pitch",
    title: "Sân Bóng Đá Cỏ Nhân Tạo & Khán Đài Trường Học",
    tag: "Thể Thao",
    category: "education-health",
    description: "Mặt sân cỏ nhân tạo cao cấp chống trơn trượt cùng hệ thống đèn chiếu sáng tiêu chuẩn phục vụ các giải bóng đá học đường sôi nổi.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-international-school-soccer-field.webp",
  },
  {
    id: "clubhouse-infinity-pool",
    title: "Clubhouse Thượng Lưu & Hồ Bơi Vô Cực Riêng Tư",
    tag: "Nghỉ Dưỡng",
    category: "sports-nature",
    description: "Không gian sinh hoạt cộng đồng tinh tế với hồ bơi vô cực view công viên, quầy bar lounge và thảm cỏ xanh phẳng lặng tổ chức tiệc ngoài trời.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-clubhouse-pool-lawn.webp",
  },
  {
    id: "resort-lagoon-pool",
    title: "Hồ Bơi Nhiệt Đới Ốc Đảo Resort & Chòi Nghỉ Cabana",
    tag: "Resort 5 Sao",
    category: "sports-nature",
    description: "Bể bơi phong cách ốc đảo uốn lượn mềm mại, sàn gỗ tắm nắng bao quanh bởi rặng dừa nhiệt đới mang lại kỳ nghỉ dưỡng bất tận ngay tại nhà.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-resort-lagoon-pool.webp",
  },
  {
    id: "multigen-sports-park",
    title: "Công Viên Thể Thao Đa Thế Hệ & Khán Đài Bậc Thang",
    tag: "Fitwel 3 Sao",
    category: "sports-nature",
    description: "Khu tập thể dục ngoài trời, bàn bóng bàn tròn, sân cầu lông và khán đài bậc thang dốc cỏ cho cả ông bà và con cháu cùng rèn luyện sức khỏe.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-multi-generational-sports-park.webp",
  },
  {
    id: "basketball-outdoor-gym",
    title: "Sân Bóng Rổ Tiêu Chuẩn & Cụm Máy Tập Công Viên",
    tag: "Thể Lực",
    category: "sports-nature",
    description: "Sân bóng rổ mặt sàn giảm chấn cao cấp, bố trí đèn chiếu sáng ban đêm tạo không gian giao lưu thể thao tràn đầy năng lượng cho giới trẻ.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-outdoor-basketball-sports-park.webp",
  },
  {
    id: "riverside-jogging-path",
    title: "Đường Dạo Bộ Ven Dòng Kênh Sinh Thái Suối Cát",
    tag: "Thiên Nhiên",
    category: "sports-nature",
    description: "Con đường ven dòng nước tự nhiên êm ả rợp bóng cây, nơi cư dân tận hưởng những làn gió mát lành và ngắm hoàng hôn buông xuống thanh bình.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-riverside-walkway-sunset.webp",
  },
  {
    id: "riverside-boulevard-kinera",
    title: "Đại Lộ Bờ Sông Hướng Tầm Nhìn Tháp Kinera",
    tag: "Tầm Nhìn Đẹp",
    category: "sports-nature",
    description: "Tuyến đường cảnh quan ngắm trọn vẹn vẻ tráng lệ của các tòa tháp cao tầng Kinera soi bóng xuống mặt nước trong ánh chiều tà thơ mộng.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-riverside-boulevard-towers.webp",
  },
  {
    id: "metro-skyline-view",
    title: "Tuyến Metro Trên Cao & Đường Chân Trời Hiện Đại",
    tag: "Giao Thông Xanh",
    category: "sports-nature",
    description: "Phối cảnh kết nối 2 tuyến đường sắt đô thị Metro Line 1B & Line 2B mở ra khả năng di chuyển siêu tốc về trung tâm Quận 1 không lo tắc đường.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-metro-line-skyline.webp",
  },
  {
    id: "regional-map-official",
    title: "Sơ Đồ Bản Đồ Kết Nối Giao Thông Liên Vùng Chính Thức",
    tag: "Quy Hoạch",
    category: "sports-nature",
    description: "Bản vẽ phân tích mạng lưới giao thông liên vùng chiến lược: QL13 mở rộng 8 làn, Vành đai 3, Mỹ Phước Tân Vạn và 2 tuyến Metro bao quanh dự án.",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/one-era-regional-connectivity-map.webp",
  },
];

// ============================================================================
// TRỌN BỘ 28 TRANG BROCHURE BÁN HÀNG CHÍNH THỨC DỰ ÁN ONE ERA
// ============================================================================
export interface OneEraBrochureSpread {
  spreadNumber: number;
  title: string;
  subtitle: string;
  pageRange: string;
  image: string;
  category: "tong-quan" | "vi-tri" | "tien-ich" | "san-pham" | "chinh-sach";
}

export const ONE_ERA_BROCHURE_SPREADS: OneEraBrochureSpread[] = [
  {
    spreadNumber: 1,
    title: "Trang Bìa Chính Thức: ONE ERA",
    subtitle: "Thành Phố Đáng Sống – Định Hình Đông Bắc Sài Gòn",
    pageRange: "Trang 01 - 02",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-01.webp",
    category: "tong-quan",
  },
  {
    spreadNumber: 2,
    title: "Liên Danh KINERA & Đối Tác Chiến Lược Nhật Bản",
    subtitle: "Kim Oanh Group kết hợp cùng Sumitomo Forestry, Kumagai Gumi, NTT Urban Development",
    pageRange: "Trang 03 - 04",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-02.webp",
    category: "tong-quan",
  },
  {
    spreadNumber: 3,
    title: "Triết Lý Sống Trân Quý & Nút Thắt Mizuhiki",
    subtitle: "Biểu tượng gắn kết các thế hệ trong một gia đình bền vững",
    pageRange: "Trang 05 - 06",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-03.webp",
    category: "tong-quan",
  },
  {
    spreadNumber: 4,
    title: "Tọa Độ Tam Giao Thượng Đỉnh Đông Bắc Sài Gòn",
    subtitle: "Mặt tiền Quốc Lộ 13 & Nguyễn Thị Minh Khai, Thuận An",
    pageRange: "Trang 07 - 08",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-04.webp",
    category: "vi-tri",
  },
  {
    spreadNumber: 5,
    title: "Mạng Lưới Hạ Tầng Siêu Kết Nối Vùng & 2 Ga Metro",
    subtitle: "Quốc lộ 13 (8 làn), Vành đai 3 và Metro Line 1B & 2B đón đầu tương lai",
    pageRange: "Trang 09 - 10",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-05.webp",
    category: "vi-tri",
  },
  {
    spreadNumber: 6,
    title: "Mặt Bằng Quy Hoạch Tổng Thể 50 Hécta",
    subtitle: "Mật độ xây dựng chỉ 25% – 30%, hơn 70% dành cho công viên và tiện ích",
    pageRange: "Trang 11 - 12",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-06.webp",
    category: "tong-quan",
  },
  {
    spreadNumber: 7,
    title: "Bộ Tứ Phân Khu Đa Phong Cách: Nizi – Hoshi – Haru – Nagi",
    subtitle: "Mỗi phân khu là một phong cách sống trọn vẹn cho từng sở thích",
    pageRange: "Trang 13 - 14",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-07.webp",
    category: "tong-quan",
  },
  {
    spreadNumber: 8,
    title: "Hệ Sinh Thái Tiện Ích Đỉnh Cao All-In-One Chuẩn Nhật",
    subtitle: "Đại siêu thị, trường học, bệnh viện, công viên trong vài bước chân",
    pageRange: "Trang 15 - 16",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-08.webp",
    category: "tien-ich",
  },
  {
    spreadNumber: 9,
    title: "Đại Siêu Thị & TTTM AEON Mall Canary",
    subtitle: "Trung tâm mua sắm bán lẻ Nhật Bản quy mô hàng đầu khu vực",
    pageRange: "Trang 17 - 18",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-09.webp",
    category: "tien-ich",
  },
  {
    spreadNumber: 10,
    title: "Trường Liên Cấp Quốc Tế VAS Saigon Chuẩn Cambridge",
    subtitle: "Nền tảng giáo dục ưu việt cho con em phát triển toàn diện toàn cầu",
    pageRange: "Trang 19 - 20",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-10.webp",
    category: "tien-ich",
  },
  {
    spreadNumber: 11,
    title: "Phòng Khám Đa Khoa Quốc Tế Meret (EMC Health)",
    subtitle: "Y tế thông minh ứng dụng AI và mô hình bác sĩ gia đình chu đáo",
    pageRange: "Trang 21 - 22",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-11.webp",
    category: "tien-ich",
  },
  {
    spreadNumber: 12,
    title: "Đại Công Viên Trung Tâm Kế Cận 42 Hécta",
    subtitle: "Lá phổi xanh mát lành điều hòa không khí cho toàn đô thị",
    pageRange: "Trang 23 - 24",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-12.webp",
    category: "tien-ich",
  },
  {
    spreadNumber: 13,
    title: "Tổ Hợp Vận Động & Thể Thao Đa Lứa Tuổi",
    subtitle: "Chuẩn sống Fitwel khuyến khích lối sống vận động ngoài trời",
    pageRange: "Trang 25 - 26",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-13.webp",
    category: "tien-ich",
  },
  {
    spreadNumber: 14,
    title: "Clubhouse Thượng Lưu & Hồ Bơi Ốc Đảo Resort",
    subtitle: "Không gian nghỉ dưỡng và kết nối cộng đồng tinh hoa đẳng cấp",
    pageRange: "Trang 27 - 28",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-14.webp",
    category: "tien-ich",
  },
  {
    spreadNumber: 15,
    title: "Phân Khu Central District – Mở Bán Giới Hạn Đợt 1",
    subtitle: "Bộ sưu tập 357 căn thấp tầng riêng tư cho những giá trị bền lâu",
    pageRange: "Trang 29 - 30",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-15.webp",
    category: "san-pham",
  },
  {
    spreadNumber: 16,
    title: "Mặt Bằng Phân Lô Chi Tiết Phân Khu Central District",
    subtitle: "Bóc tách từng lô Townhouse và Shophouse trên nền lộ giới 13m - 25m",
    pageRange: "Trang 31 - 32",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-16.webp",
    category: "san-pham",
  },
  {
    spreadNumber: 17,
    title: "Townhouse 5x16m – Bản Vẽ Mặt Bằng & Phối Cảnh Tầng Trệt",
    subtitle: "Mặt bằng 3 tầng tối ưu diện tích cho gia đình đa thế hệ",
    pageRange: "Trang 33 - 34",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-17.webp",
    category: "san-pham",
  },
  {
    spreadNumber: 18,
    title: "Townhouse 5x16m – Phòng Ngủ Master & Không Gian Ấm Cúng",
    subtitle: "Thiết kế nội thất Japandi tối giản, ngập tràn ánh sáng tự nhiên",
    pageRange: "Trang 35 - 36",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-18.webp",
    category: "san-pham",
  },
  {
    spreadNumber: 19,
    title: "Townhouse 6x18m – Mặt Tiền Rộng Mở View Dòng Kênh Suối Cát",
    subtitle: "Kết cấu 4 tầng với tầng lửng sang trọng tạo chiều sâu không gian",
    pageRange: "Trang 37 - 38",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-19.webp",
    category: "san-pham",
  },
  {
    spreadNumber: 20,
    title: "Townhouse 6x18m – Phòng Trà Đạo & Sân Thượng Ngắm Cảnh",
    subtitle: "Góc thiền định thư thái ngắm nhìn hoàng hôn bên tách trà thơm",
    pageRange: "Trang 39 - 40",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-20.webp",
    category: "san-pham",
  },
  {
    spreadNumber: 21,
    title: "Shophouse 5x18m – Trục Đường Kế Cận Cụm Trường Quốc Tế",
    subtitle: "Tầng trệt kinh doanh văn phòng phẩm, cafe, tầng trên an cư riêng biệt",
    pageRange: "Trang 41 - 42",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-21.webp",
    category: "san-pham",
  },
  {
    spreadNumber: 22,
    title: "Shophouse 5x18m – Tầng Lửng Co-working & Phòng Sinh Hoạt",
    subtitle: "Linh hoạt biến đổi công năng làm văn phòng đại diện hoặc lounge tiếp khách",
    pageRange: "Trang 43 - 44",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-22.webp",
    category: "san-pham",
  },
  {
    spreadNumber: 23,
    title: "Shophouse 6x18m – Mặt Tiền Đại Lộ Đối Diện Công Viên One Park",
    subtitle: "Vị trí kim cương tiếp cận hàng ngàn lượt khách ghé thăm mỗi ngày",
    pageRange: "Trang 45 - 46",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-23.webp",
    category: "san-pham",
  },
  {
    spreadNumber: 24,
    title: "Shophouse 6x18m – Không Gian Sống Chuẩn 5 Sao Trên Tầng Cao",
    subtitle: "Tách bạch hoàn toàn lối đi kinh doanh bên dưới và nơi nghỉ ngơi bên trên",
    pageRange: "Trang 47 - 48",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-24.webp",
    category: "san-pham",
  },
  {
    spreadNumber: 25,
    title: "Shophouse 6x23m – Căn Góc Hai Mặt Tiền Biểu Tượng Giao Thương",
    subtitle: "Số lượng cực kỳ giới hạn tại các ngã tư đắc địa nhất đô thị",
    pageRange: "Trang 49 - 50",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-25.webp",
    category: "san-pham",
  },
  {
    spreadNumber: 26,
    title: "Tiêu Chuẩn Xanh Fitwel 3 Sao Hoa Kỳ & Chứng Nhận EDGE",
    subtitle: "Bảo chứng chuẩn sống vì sức khỏe hô hấp và tiết kiệm năng lượng",
    pageRange: "Trang 51 - 52",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-26.webp",
    category: "chinh-sach",
  },
  {
    spreadNumber: 27,
    title: "Phương Thức Thanh Toán Linh Hoạt & Bàn Giao Q4/2028",
    subtitle: "Hỗ trợ ân hạn nợ gốc và lãi suất 0% từ các ngân hàng bảo trợ",
    pageRange: "Trang 53 - 54",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-27.webp",
    category: "chinh-sach",
  },
  {
    spreadNumber: 28,
    title: "Thông Điệp Khát Vọng KINERA: Kiến Tạo Di Sản Tương Lai",
    subtitle: "Đồng hành dựng xây tổ ấm bền vững cho nhiều thế hệ người Việt",
    pageRange: "Trang 55 - 56",
    image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1920,c_limit/oneera/brochure/brochure-spread-28.webp",
    category: "chinh-sach",
  },
];
