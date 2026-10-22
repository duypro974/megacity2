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
        image: "/images/one-era/products/townhouse-ground-floor-living.webp",
        floorPlanImages: ["/images/one-era/products/townhouse-ground-floor-living.webp", "/images/one-era/products/townhouse-level2-master-bedroom.webp"],
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
        image: "/images/one-era/products/townhouse-architecture-mizuhiki.webp",
        floorPlanImages: ["/images/one-era/products/townhouse-ground-floor-kitchen.webp", "/images/one-era/products/townhouse-level3-japanese-tea-room.webp"],
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
        image: "/images/one-era/products/shophouse-ground-floor-cafe.webp",
        floorPlanImages: ["/images/one-era/products/shophouse-ground-floor-cafe.webp", "/images/one-era/products/shophouse-mezzanine-coworking.webp"],
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
        image: "/images/one-era/products/shophouse-facade-commercial.webp",
        floorPlanImages: ["/images/one-era/products/shophouse-level2-living-room.webp", "/images/one-era/products/shophouse-level3-master-suite.webp"],
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
        image: "/images/one-era/hero/one-era-grand-boulevard.webp",
        floorPlanImages: ["/images/one-era/products/shophouse-facade-commercial.webp"],
        priceEst: "Liên hệ Hotline nhận bảng giá căn góc VIP",
      },
    ] as OneEraProduct[],
  },

  amenities: [
    {
      id: "aeon-mall",
      title: "Đại Siêu Thị & TTTM AEON Mall",
      category: "commercial",
      tagline: "Thiên đường mua sắm, ẩm thực và giải trí chuẩn Nhật",
      description: "Hợp tác chiến lược cùng AEON Việt Nam mang đến trung tâm mua sắm quy mô hàng đầu khu vực, đáp ứng trọn vẹn nhu cầu cư dân trong và ngoài đô thị.",
      stats: "Quy mô lớn hàng đầu Bình Dương",
      image: "/images/one-era/hero/one-era-night-kinera-towers.webp",
      highlight: true,
    },
    {
      id: "cau-ken-vang",
      title: "Cầu Đi Bộ Biểu Tượng Cầu Kén Vàng",
      category: "entertainment",
      tagline: "Kiến trúc ánh sáng kết nối các phân khu trên cao",
      description: "Cầu đi bộ trên cao với kết cấu vòm kén vàng độc đáo, bắc qua đại lộ chính kết nối cư dân từ căn hộ cao tầng đến trung tâm thương mại và ga Metro an toàn tuyệt đối.",
      stats: "Kiến trúc cảnh quan biểu tượng",
      image: "/images/one-era/hero/one-era-grand-boulevard.webp",
      highlight: true,
    },
    {
      id: "vas-saigon",
      title: "Trường Liên Cấp Quốc Tế VAS Saigon",
      category: "education",
      tagline: "Nền tảng giáo dục ưu việt Cambridge cho thế hệ tương lai",
      description: "Hệ thống trường liên cấp từ tiểu học đến THPT với cơ sở vật chất hiện đại, sân bóng đá tiêu chuẩn, hồ bơi và đội ngũ giáo viên quốc tế ngay cạnh nhà.",
      stats: "Hệ Cambridge Quốc Tế",
      image: "/images/one-era/amenities/vas-saigon-school.webp",
      highlight: true,
    },
    {
      id: "meret-clinic",
      title: "Phòng Khám Đa Khoa Quốc Tế Meret",
      category: "health",
      tagline: "Chăm sóc sức khỏe gia đình chủ động ứng dụng công nghệ AI",
      description: "Từ xét nghiệm chuyên sâu, chẩn đoán hình ảnh AI đến mô hình bác sĩ gia đình. Đồng hành bảo vệ sức khỏe phòng ngừa và khám định kỳ cho cả 3 thế hệ.",
      stats: "Phòng khám AI 24/7",
      image: "/images/one-era/amenities/meret-international-clinic.webp",
      highlight: true,
    },
    {
      id: "hyde-park-42ha",
      title: "Đại Công Viên Trung Tâm Kế Cận 42 Hécta",
      category: "green",
      tagline: "Lá phổi xanh điều hòa khí hậu cho toàn Thượng Đỉnh",
      description: "Khoảng thở thiên nhiên quý giá với thảm thực vật đa tầng, hồ nước điều hòa mát lành, lối dạo bộ rợp bóng mát nâng niu sức khỏe người cao tuổi.",
      stats: "42 Hécta Mảng Xanh",
      image: "/images/one-era/amenities/hyde-park-42ha-green.webp",
      highlight: true,
    },
    {
      id: "smart-playground",
      title: "Tổ Hợp Sân Chơi Trẻ Em Sáng Tạo",
      category: "entertainment",
      tagline: "Vui chơi rèn luyện thể chất an toàn trong môi trường trong lành",
      description: "Sân vận động bán cầu, khu leo núi an toàn, đường trượt sắc màu và thảm hoa anh đào giúp trẻ phát triển toàn diện cả thể lực lẫn trí tuệ.",
      stats: "Sàn cao su EPDM an toàn",
      image: "/images/one-era/amenities/smart-playground-park.webp",
    },
    {
      id: "sports-complex",
      title: "Công Viên Thể Thao Đa Năng Nội Khu",
      category: "green",
      tagline: "Duy trì phong cách sống năng động khỏe khoắn mỗi ngày",
      description: "Cụm sân bóng rổ, cầu lông, pickleball, bàn bóng bàn tròn ngoài trời và khán đài giật cấp phục vụ cư dân rèn luyện sức khỏe mỗi buổi sớm mai.",
      stats: "Đa dạng môn thể thao",
      image: "/images/one-era/amenities/sports-fitness-park.webp",
    },
    {
      id: "picnic-lawn",
      title: "Bãi Cỏ Picnic & Weekend Chill",
      category: "green",
      tagline: "Gắn kết khoảnh khắc gia đình cuối tuần không cần đi xa",
      description: "Đồi cỏ picnic phẳng phiu sạch sẽ, bóng mát cây xanh, nơi cả gia đình cùng dựng lều, thưởng thức trà bánh và ngắm hoàng hôn thanh bình.",
      stats: "Không gian mở sinh thái",
      image: "/images/one-era/amenities/picnic-lawn-chill.webp",
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
      a: "Quý khách có thể tải trọn bộ Leaflet mặt trước, mặt sau và Brochure chi tiết 30 trang tại website hoặc để lại thông tin tại Form đăng ký bên dưới để nhận bảng giá căn đẹp trực tiếp từ phòng kinh doanh.",
    },
  ],
};
