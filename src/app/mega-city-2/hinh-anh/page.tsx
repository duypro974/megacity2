import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import {
  IMG_REAL,
  IMG_AMENITIES,
  IMG_OVERVIEW,
  IMG_REGIONAL,
  IMG_PLANE,
} from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Hình Ảnh Thực Tế Mega City 2 Nhơn Trạch – Cập Nhật 2025–2026",
  description:
    "Hình ảnh thực tế ghi nhận tại dự án Mega City 2 Nhơn Trạch: đường nội khu, công viên, nhà mẫu, tiện ích và phối cảnh tổng thể. Cập nhật 2025–2026.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/hinh-anh" },
  openGraph: {
    title: "Hình Ảnh Thực Tế Mega City 2 Nhơn Trạch – 2025–2026",
    description:
      "Bộ sưu tập ảnh thực tế Mega City 2: đường nội khu, công viên, nhà mẫu, hạ tầng đã hoàn thiện.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [
      { url: IMG_REAL["1"], width: 1280, height: 720, alt: "Hình ảnh thực tế Mega City 2 Nhơn Trạch" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hình Ảnh Thực Tế Mega City 2 Nhơn Trạch",
    description: "Ảnh thực tế đường nội khu, công viên, nhà mẫu tại Mega City 2.",
    images: [IMG_REAL["1"]],
  },
};

const faqImageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hình ảnh thực tế Mega City 2 trông như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hình ảnh thực tế ghi nhận tại Mega City 2 cho thấy đường nội khu đã trải nhựa rộng 13–32 m, hàng cây xanh hai bên đường, công viên trung tâm hoàn thiện và các dãy nhà phố liên kế đã xây dựng xong. Hạ tầng đạt ~95% theo thông tin công bố 06/2025.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có nhà mẫu để tham quan không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Dự án có các căn nhà phố liên kế đã hoàn thiện có thể tham quan thực tế. Liên hệ 0937.587.438 để đặt lịch tham quan, chuyên viên sẽ đưa đón và hướng dẫn tại dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Hình ảnh phối cảnh Mega City 2 có khác thực tế không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trang này phân biệt rõ ảnh thực tế và phối cảnh. Ảnh thực tế được ghi nhận trực tiếp tại dự án năm 2024–2025. Phối cảnh là hình ảnh minh họa quy hoạch tổng thể. Khách hàng nên tham quan thực tế để tự đánh giá.",
      },
    },
    {
      "@type": "Question",
      name: "Sân bay Long Thành gần Mega City 2 bao nhiêu km?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sân bay quốc tế Long Thành cách Mega City 2 khoảng 15–20 km, di chuyển khoảng 20–25 phút. Đây là sân bay đang trong quá trình xây dựng giai đoạn 1 và được kỳ vọng thúc đẩy phát triển khu vực Nhơn Trạch.",
      },
    },
  ],
};

const imageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Hình ảnh thực tế Mega City 2 Nhơn Trạch",
  description:
    "Bộ sưu tập hình ảnh thực tế ghi nhận tại khu dân cư Mega City 2, xã Nhơn Trạch, tỉnh Đồng Nai.",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/hinh-anh",
  about: {
    "@type": "RealEstateListing",
    name: "Mega City 2 Nhơn Trạch",
    url: "https://kimoanhdongnai.com.vn/mega-city-2",
  },
};

const galleryGroups = [
  {
    title: "Hình ảnh thực tế hạ tầng nội khu",
    subtitle: "Ảnh ghi nhận thực tế tại dự án – không phải phối cảnh",
    description: "Bộ ảnh này được ghi nhận trực tiếp tại khu dân cư Mega City 2, Nhơn Trạch trong giai đoạn 2024–2025. Có thể thấy rõ đường nhựa nội khu rộng 13–32 m, hàng cây xanh đã trưởng thành, các dãy nhà phố liên kế hoàn thiện mặt ngoài và cảnh quan tổng thể khu dân cư khi nhìn từ trên cao.",
    images: [
      { src: IMG_REAL["1"],  alt: "Đường nội khu Mega City 2 Nhơn Trạch nhìn từ trên cao" },
      { src: IMG_REAL["2"],  alt: "Hình ảnh thực tế đường nội khu rộng rãi Mega City 2" },
      { src: IMG_REAL["3"],  alt: "Nhà phố liên kế đã hoàn thiện tại Mega City 2" },
      { src: IMG_REAL["4"],  alt: "Cảnh quan cây xanh nội khu dự án Mega City 2 Nhơn Trạch" },
      { src: IMG_REAL["5"],  alt: "Nhà phố góc view đẹp tại Mega City 2" },
      { src: IMG_REAL["6"],  alt: "Đường trục chính nội khu Mega City 2 đã trải nhựa" },
      { src: IMG_REAL["7"],  alt: "Nhà phố mặt tiền đường lớn Mega City 2" },
      { src: IMG_REAL["8"],  alt: "Khu công viên trung tâm Mega City 2 Nhơn Trạch" },
      { src: IMG_REAL["9"],  alt: "Toàn cảnh khu dân cư Mega City 2 từ trên cao" },
      { src: IMG_REAL["10"], alt: "Đường 25C kết nối dự án Mega City 2 Nhơn Trạch" },
    ],
  },
  {
    title: "Phối cảnh & Tổng quan quy hoạch",
    subtitle: "Hình ảnh phối cảnh tổng thể và quy hoạch dự án",
    description: "Hình ảnh phối cảnh minh họa tổng thể khu đô thị Mega City 2 theo quy hoạch chi tiết 1/500 đã được phê duyệt. Phối cảnh thể hiện bố cục không gian, mật độ xây dựng, hệ thống cây xanh và các khu chức năng trong toàn dự án ~83,94 ha.",
    images: [
      { src: IMG_OVERVIEW["1"],  alt: "Phối cảnh tổng thể khu dân cư Mega City 2 Nhơn Trạch" },
      { src: IMG_OVERVIEW["2"],  alt: "Quy hoạch và phân khu chức năng Mega City 2" },
      { src: IMG_OVERVIEW["3"],  alt: "Phối cảnh không gian sống xanh Mega City 2" },
    ],
  },
  {
    title: "Tiện ích nội khu",
    subtitle: "Hình ảnh các tiện ích đồng bộ trong khu dân cư",
    description: "Hệ thống tiện ích nội khu Mega City 2 gồm công viên trung tâm, khu thể thao đa năng, cảnh quan cây xanh và không gian sinh hoạt cộng đồng. Các tiện ích này được xây dựng đồng bộ theo quy hoạch, phục vụ nhu cầu sinh hoạt hàng ngày của cư dân.",
    images: [
      { src: IMG_AMENITIES["1"], alt: "Công viên trung tâm Mega City 2" },
      { src: IMG_AMENITIES["2"], alt: "Khu vực thể thao và vui chơi nội khu Mega City 2" },
      { src: IMG_AMENITIES["3"], alt: "Cảnh quan cây xanh tiện ích Mega City 2" },
      { src: IMG_AMENITIES["4"], alt: "Không gian sinh hoạt cộng đồng Mega City 2" },
      { src: IMG_AMENITIES["5"], alt: "Khu vực thương mại dịch vụ nội khu" },
      { src: IMG_AMENITIES["6"], alt: "Hạ tầng tiện ích hoàn thiện Mega City 2" },
      { src: IMG_AMENITIES["7"], alt: "Cảnh quan xanh mát tại khu dân cư Mega City 2" },
    ],
  },
  {
    title: "Liên kết vùng & Giao thông",
    subtitle: "Hình ảnh hạ tầng giao thông kết nối dự án",
    description: "Mega City 2 tọa lạc tại vị trí chiến lược với nhiều trục giao thông quan trọng: đường 25C kết nối trực tiếp TP.HCM, sân bay quốc tế Long Thành đang xây dựng cách ~18 km và cầu Nhơn Trạch trong quy hoạch. Các hình ảnh dưới đây ghi nhận hiện trạng hạ tầng giao thông khu vực.",
    images: [
      { src: IMG_REGIONAL["1"], alt: "Bản đồ liên kết vùng Mega City 2 Nhơn Trạch" },
      { src: IMG_REGIONAL["2"], alt: "Đường 25C kết nối TP.HCM và Nhơn Trạch" },
      { src: IMG_REGIONAL["3"], alt: "Hạ tầng giao thông khu vực Nhơn Trạch" },
      { src: IMG_REGIONAL["4"], alt: "Quy hoạch đường vành đai và cao tốc khu vực" },
      { src: IMG_PLANE["1"],    alt: "Sân bay quốc tế Long Thành đang xây dựng" },
      { src: IMG_PLANE["2"],    alt: "Phối cảnh sân bay Long Thành gần Mega City 2" },
    ],
  },
];

export default function HinhAnhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqImageSchema) }}
      />

      <Header />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Hình ảnh"
          title="Hình ảnh thực tế Mega City 2"
          subtitle="Bộ sưu tập ảnh thực tế ghi nhận tại khu dân cư Mega City 2 Nhơn Trạch – hạ tầng, tiện ích và kết nối vùng."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Hình ảnh" },
          ]}
          updatedAt="08/2026"
        />

        {/* Notice */}
        <section className="py-6 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-slate-500 leading-relaxed">
              📷 Hình ảnh được phân chia thành các nhóm: <strong>thực tế tại dự án</strong>,
              phối cảnh quy hoạch, tiện ích và hạ tầng giao thông. Ảnh thực tế ghi nhận
              trong giai đoạn 2024–2025.
            </p>
          </div>
        </section>

        {/* ── Tổng quan hình ảnh ── */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
              Mega City 2 trông như thế nào ngoài thực tế?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Sau nhiều năm xây dựng, khu dân cư Mega City 2 tại xã Nhơn Trạch, Đồng Nai
              đã có diện mạo rõ ràng. Hạ tầng nội khu đạt khoảng <strong>95%</strong>{" "}
              theo thông tin công bố tháng 06/2025 — đường nhựa rộng rãi, cây xanh hai
              bên, công viên trung tâm hoàn thiện và các dãy nhà phố liên kế đã mọc lên
              theo từng block.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Bộ ảnh dưới đây phân loại thành <strong>4 nhóm</strong>: hình ảnh thực tế
              ghi nhận tại công trường, phối cảnh quy hoạch tổng thể, tiện ích nội khu và
              hình ảnh hạ tầng giao thông kết nối vùng (đường 25C, sân bay Long Thành).
              Khách hàng nên đặt lịch{" "}
              <a href="tel:0937587438" className="text-primary-600 hover:underline font-semibold">
                tham quan thực tế
              </a>{" "}
              để tự mình đánh giá hiện trạng các lô đang quan tâm.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { val: "10 ảnh", label: "Thực tế hạ tầng" },
                { val: "3 ảnh", label: "Phối cảnh tổng thể" },
                { val: "7 ảnh", label: "Tiện ích nội khu" },
                { val: "6 ảnh", label: "Liên kết vùng" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-slate-50 border border-slate-200 p-3 text-center">
                  <p className="text-lg font-black text-slate-800">{s.val}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery groups */}
        {galleryGroups.map((group) => (
          <section key={group.title} className="py-14 bg-white border-b border-slate-100 last:border-b-0">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-xl font-bold text-slate-800 mb-1">{group.title}</h2>
              {group.subtitle && (
                <p className="text-xs text-slate-400 mb-3">{group.subtitle}</p>
              )}
              {group.description && (
                <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-3xl">{group.description}</p>
              )}              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {group.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] group"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/20
                                 transition-colors duration-300 flex items-end p-2"
                    >
                      <p
                        className="text-white text-[10px] leading-tight opacity-0
                                   group-hover:opacity-100 transition-opacity duration-300
                                   line-clamp-2 drop-shadow"
                      >
                        {img.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <PageCTA
          title="Đặt lịch tham quan thực tế Mega City 2"
          subtitle="Xem tận mắt hạ tầng và không gian sống tại dự án. Liên hệ để đặt lịch tham quan miễn phí."
        />

        <RelatedContent
          items={[
            {
              href: "/mega-city-2",
              title: "Tổng quan Mega City 2 Nhơn Trạch",
              description: "Thông tin tổng hợp về dự án: quy mô, chủ đầu tư và pháp lý.",
              tag: "Tổng quan",
            },
            {
              href: "/mega-city-2/tien-do",
              title: "Tiến độ thi công hạ tầng",
              description: "Cập nhật tiến độ và hiện trạng hạ tầng khu dân cư.",
              tag: "Tiến độ",
            },
            {
              href: "/mega-city-2/tien-ich",
              title: "Tiện ích nội khu",
              description: "Chi tiết hệ thống tiện ích đồng bộ trong khu dân cư.",
              tag: "Tiện ích",
            },
            {
              href: "/mega-city-2/vi-tri",
              title: "Vị trí & Kết nối vùng",
              description: "Phân tích vị trí và kết nối giao thông dự án.",
              tag: "Vị trí",
            },
            {
              href: "/mega-city-2/mat-bang",
              title: "Mặt bằng & Sản phẩm",
              description: "Bản đồ phân lô và các loại hình sản phẩm nhà ở.",
              tag: "Mặt bằng",
            },
            {
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá tham khảo",
              description: "Giá chuyển nhượng cập nhật các loại sản phẩm.",
              tag: "Bảng giá",
            },
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
