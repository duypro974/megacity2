import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import AmenitiesSection from "@/components/AmenitiesSection";
import { IMG_AMENITIES, IMG_TRADE, IMG_HEARTPULSE, IMG_SCHOOL } from "@/lib/cloudinary";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tiện Ích Mega City 2 Nhơn Trạch – Nội Khu & Ngoại Khu 2026",
  description:
    "Hệ thống tiện ích Mega City 2 Nhơn Trạch: công viên trung tâm, trường học, thương mại, y tế và tiện ích nội khu đồng bộ. Tìm hiểu chi tiết từng tiện ích.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/tien-ich" },
  openGraph: {
    title: "Tiện Ích Mega City 2 Nhơn Trạch – Nội Khu & Ngoại Khu",
    description:
      "Mega City 2 với hệ thống tiện ích đồng bộ: công viên, trường học, y tế, thương mại và kết nối vùng.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: IMG_AMENITIES["1"], width: 1280, height: 720, alt: "Tiện ích nội khu Mega City 2" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiện Ích Mega City 2 – Công viên, Trường học, Y tế",
    description: "Hệ thống tiện ích đồng bộ tại Mega City 2 Nhơn Trạch, Đồng Nai.",
    images: [IMG_AMENITIES["1"]],
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Hệ thống tiện ích Mega City 2 Nhơn Trạch",
  description: "Danh sách các tiện ích nội khu và ngoại khu tại khu dân cư Mega City 2, xã Nhơn Trạch, tỉnh Đồng Nai.",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/tien-ich",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Công viên trung tâm & cây xanh nội khu", url: "https://kimoanhdongnai.com.vn/mega-city-2/tien-ich#cong-vien" },
    { "@type": "ListItem", position: 2, name: "Khu thương mại & dịch vụ nội khu", url: "https://kimoanhdongnai.com.vn/mega-city-2/tien-ich#thuong-mai" },
    { "@type": "ListItem", position: 3, name: "Sân thể thao & vui chơi", url: "https://kimoanhdongnai.com.vn/mega-city-2/tien-ich#the-thao" },
    { "@type": "ListItem", position: 4, name: "Hệ thống trường học (ngoại khu)", url: "https://kimoanhdongnai.com.vn/mega-city-2/tien-ich#truong-hoc" },
    { "@type": "ListItem", position: 5, name: "Y tế & chăm sóc sức khỏe", url: "https://kimoanhdongnai.com.vn/mega-city-2/tien-ich#y-te" },
    { "@type": "ListItem", position: 6, name: "Chợ & siêu thị khu vực", url: "https://kimoanhdongnai.com.vn/mega-city-2/tien-ich#cho-sieu-thi" },
  ],
};

const faqAmenitySchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mega City 2 có những tiện ích nội khu nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 có 6 nhóm tiện ích chính: công viên trung tâm với không gian xanh rộng; trường học trong và lân cận khu vực; y tế với bệnh viện và phòng khám; khu thương mại dịch vụ; cơ sở tôn giáo; và sân thể thao đa năng. Hạ tầng tiện ích nội khu đã hoàn thiện theo quy hoạch.",
      },
    },
    {
      "@type": "Question",
      name: "Công viên trung tâm Mega City 2 có diện tích bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Công viên trung tâm Mega City 2 là không gian xanh lớn nhất trong khu dân cư, nằm ở vị trí trung tâm của dự án. Diện tích cụ thể theo quy hoạch chi tiết 1/500 được phê duyệt. Đây là điểm sinh hoạt cộng đồng chính của cư dân.",
      },
    },
    {
      "@type": "Question",
      name: "Gần Mega City 2 có trường học và bệnh viện không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khu vực Nhơn Trạch có hệ thống trường học từ mầm non đến THPT trong bán kính 2–5 km. Bệnh viện Đồng Nai và các phòng khám lân cận cách dự án khoảng 25–30 km. Khu vực đang phát triển thêm các cơ sở y tế mới.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có khu thương mại dịch vụ không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo quy hoạch, Mega City 2 có dải thương mại dịch vụ dọc các trục đường chính. Các nhà phố T mặt đường lớn (24–32 m) được thiết kế phù hợp kinh doanh thương mại. Chợ và siêu thị hiện có trong bán kính 3–5 km khu vực Nhơn Trạch.",
      },
    },
  ],
};

const amenitySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tiện ích nội khu và ngoại khu tại Mega City 2 Nhơn Trạch",
  description:
    "Chi tiết hệ thống tiện ích tại Mega City 2: công viên trung tâm, trường học, thương mại dịch vụ, y tế và khu vui chơi.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-08-01",
  dateModified: "2026-08-09",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/tien-ich",
};

const amenityHighlights = [
  { emoji: "🌳", title: "Công viên trung tâm", desc: "Không gian xanh nội khu rộng, phù hợp hoạt động thể thao và thư giãn." },
  { emoji: "🏫", title: "Trường học", desc: "Trường học trong và lân cận khu vực đáp ứng nhu cầu giáo dục cho cư dân." },
  { emoji: "🏥", title: "Y tế", desc: "Bệnh viện và phòng khám trong bán kính di chuyển hợp lý." },
  { emoji: "🛒", title: "Thương mại – Dịch vụ", desc: "Trung tâm thương mại, siêu thị và chợ phục vụ nhu cầu hàng ngày." },
  { emoji: "⛪", title: "Tôn giáo", desc: "Nhà thờ, chùa chiền trong khu vực lân cận." },
  { emoji: "🏋️", title: "Thể thao", desc: "Sân thể thao đa năng, khu vực tập thể dục nội khu." },
];

const internalAmenities = [
  {
    icon: "🌿",
    title: "Công viên trung tâm & cây xanh",
    desc: "Công viên trung tâm nằm ở vị trí đắc địa trong khu dân cư, bao quanh bởi hàng cây xanh hai bên đường nội khu. Không gian này phục vụ hoạt động dã ngoại, tập thể dục buổi sáng và sinh hoạt cộng đồng của cư dân Mega City 2.",
    images: [IMG_AMENITIES["1"], IMG_AMENITIES["2"]],
  },
  {
    icon: "🛍️",
    title: "Thương mại & dịch vụ nội khu",
    desc: "Các nhà phố T mặt đường chính 24–32 m được quy hoạch cho kinh doanh thương mại dịch vụ, tạo thành dải phố thương mại sôi động phục vụ nhu cầu mua sắm, ẩm thực và dịch vụ hàng ngày của cư dân.",
    images: [IMG_TRADE["1"], IMG_TRADE["2"]],
  },
  {
    icon: "🏋️",
    title: "Sân thể thao & vui chơi",
    desc: "Khu vực thể thao đa năng trong nội khu với sân chơi trẻ em, khu tập thể dục ngoài trời và các tiện ích sinh hoạt cộng đồng theo quy hoạch chi tiết 1/500.",
    images: [IMG_AMENITIES["3"], IMG_AMENITIES["4"]],
  },
];

const externalAmenities = [
  {
    icon: "🏫",
    title: "Hệ thống giáo dục",
    desc: "Khu vực Nhơn Trạch có nhiều trường học các cấp từ mầm non đến THPT trong bán kính 2–5 km. Cùng với sự phát triển dân cư, hạ tầng giáo dục tiếp tục được đầu tư mở rộng.",
    images: [IMG_SCHOOL["1"], IMG_SCHOOL["2"], IMG_SCHOOL["3"]],
  },
  {
    icon: "🏥",
    title: "Y tế & chăm sóc sức khỏe",
    desc: "Bệnh viện Đồng Nai và các cơ sở y tế lớn cách Mega City 2 khoảng 25–30 km. Trong bán kính gần hơn có các phòng khám đa khoa và nhà thuốc phục vụ nhu cầu khám chữa bệnh thông thường.",
    images: [IMG_HEARTPULSE["1"], IMG_HEARTPULSE["2"]],
  },
  {
    icon: "🛒",
    title: "Chợ & siêu thị",
    desc: "Chợ Nhơn Trạch và các chợ dân sinh trong bán kính 3–5 km đáp ứng nhu cầu mua sắm thực phẩm hàng ngày. Siêu thị và trung tâm thương mại quy mô lớn đang trong quá trình phát triển cùng với đô thị hóa khu vực.",
    images: [IMG_TRADE["3"], IMG_TRADE["4"]],
  },
];

export default function TienIchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(amenitySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqAmenitySchema) }}
      />

      <Header />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Tiện ích"
          title="Tiện ích Mega City 2 Nhơn Trạch"
          subtitle="Hệ thống tiện ích nội khu và ngoại khu đồng bộ phục vụ cư dân tại khu dân cư Mega City 2."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Tiện ích" },
          ]}
          updatedAt="08/2026"
        />

        {/* Tóm tắt tiện ích */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              6 nhóm tiện ích chính
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {amenityHighlights.map((a) => (
                <div key={a.title}
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-5
                             hover:border-primary-200 hover:shadow-sm transition-all">
                  <div className="text-2xl mb-3">{a.emoji}</div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1.5">{a.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-xs text-amber-700 leading-relaxed">
                <span className="font-bold">Lưu ý:</span> Một số tiện ích đang trong quá trình phát triển
                theo quy hoạch. Tình trạng thực tế có thể khác với quy hoạch. Cư dân và nhà đầu tư
                nên xác nhận hiện trạng thực tế trước khi giao dịch.
              </p>
            </div>
          </div>
        </section>

        {/* AmenitiesSection component tái sử dụng */}
        <AmenitiesSection />

        {/* ── Tiện ích nội khu chi tiết ── */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
              Tiện ích nội khu Mega City 2 – Chi tiết từng hạng mục
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Hệ thống tiện ích được quy hoạch đồng bộ theo tiêu chuẩn khu dân cư hiện đại,
              phục vụ nhu cầu sinh hoạt toàn diện của cư dân.
            </p>
            <div className="space-y-10">
              {internalAmenities.map((a) => (
                <div key={a.title} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{a.icon}</span>
                      <h3 className="text-base font-bold text-slate-800">{a.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {a.images.map((src, i) => (
                      <div key={i} className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt={`${a.title} tại Mega City 2`}
                          className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tiện ích ngoại khu ── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
              Tiện ích ngoại khu – Giáo dục, Y tế, Thương mại
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Khu vực Nhơn Trạch đang phát triển mạnh với hạ tầng xã hội ngày càng đầy đủ.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {externalAmenities.map((a) => (
                <div key={a.title} className="rounded-2xl bg-white border border-slate-200 p-5">
                  <span className="text-3xl block mb-3">{a.icon}</span>
                  <h3 className="font-bold text-slate-800 text-sm mb-2">{a.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{a.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {a.images.slice(0, 2).map((src, i) => (
                      <div key={i} className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt={`${a.title} gần Mega City 2 Nhơn Trạch`}
                          className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tầm nhìn phát triển ── */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8">
              <h2 className="text-lg font-bold mb-3">
                Khu vực Nhơn Trạch đang đô thị hóa nhanh
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-2xl">
                Nhơn Trạch được định hướng trở thành đô thị vệ tinh của TP.HCM trong quy
                hoạch tỉnh Đồng Nai. Sân bay quốc tế Long Thành, cầu Nhơn Trạch và các
                tuyến đường kết nối mới đang thúc đẩy hạ tầng xã hội phát triển nhanh,
                trong đó có trường học, bệnh viện và trung tâm thương mại quy mô lớn.
              </p>
              <p className="text-xs text-slate-400">
                * Thông tin quy hoạch mang tính tham khảo, phụ thuộc vào tiến độ triển
                khai của cơ quan có thẩm quyền. Xem chi tiết{" "}
                <Link href="/mega-city-2/vi-tri" className="text-primary-400 hover:underline">
                  vị trí & liên kết vùng →
                </Link>
              </p>
            </div>
          </div>
        </section>

        <PageCTA
          title="Tìm hiểu thêm về tiện ích Mega City 2"
          subtitle="Đặt lịch tham quan thực tế để trải nghiệm trực tiếp hệ thống tiện ích tại dự án."
        />

        <RelatedContent
          items={[
            {
              href: "/mega-city-2",
              title: "Tổng quan Mega City 2",
              description: "Thông tin tổng hợp: quy mô, chủ đầu tư, pháp lý và bảng giá.",
              tag: "Tổng quan",
            },
            {
              href: "/mega-city-2/vi-tri",
              title: "Vị trí & Kết nối vùng",
              description: "Mega City 2 cách TP.HCM 30–35 km, gần sân bay Long Thành.",
              tag: "Vị trí",
            },
            {
              href: "/mega-city-2/hinh-anh",
              title: "Hình ảnh thực tế",
              description: "Ảnh thực tế ghi nhận tại dự án Mega City 2.",
              tag: "Hình ảnh",
            },
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý – QĐ 1772/QĐ-UBND",
              description: "2.421 lô được chấp thuận phân lô bán nền, quy hoạch 1/500 và điều kiện giao dịch.",
              tag: "Pháp lý",
            },
            {
              href: "/mega-city-2/mat-bang",
              title: "Mặt bằng & Sản phẩm",
              description: "Bản vẽ quy hoạch và các loại sản phẩm nhà ở.",
              tag: "Mặt bằng",
            },
            {
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá",
              description: "Giá chuyển nhượng tham khảo cập nhật.",
              tag: "Bảng giá",
            },
            {
              href: "/mega-city-2/faq",
              title: "FAQ – Câu hỏi thường gặp",
              description: "Giải đáp đầy đủ các thắc mắc về Mega City 2.",
              tag: "FAQ",
            },
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
