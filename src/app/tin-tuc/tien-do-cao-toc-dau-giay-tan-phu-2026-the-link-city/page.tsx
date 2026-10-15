"use client";

import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import PageCTA from "@/components/PageCTA";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { Calendar, Clock, MapPin, CheckCircle2, ChevronRight, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/tien-do-cao-toc-dau-giay-tan-phu-2026-the-link-city`;
const PUBLISHED     = "15/10/2026";
const PUBLISHED_ISO = "2026-10-15";

const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";

const IMAGES = {
  "1": `${CDN}/thelinkcity/maps/1.webp`,
  "2": `${CDN}/thelinkcity/overview/1.jpg`,
  "3": `${CDN}/thelinkcity/progress/1.jpg`,
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tiến Độ Cao Tốc Dầu Giây – Tân Phú 2026: Đòn Bẩy Cho The Link City",
  description:
    "Cập nhật tiến độ dự án cao tốc Dầu Giây – Tân Phú mới nhất năm 2026: quy mô, mốc giải phóng mặt bằng, hướng tuyến và tác động bứt phá đến giá trị đất nền The Link City.",
  image: [IMAGES["1"], IMAGES["2"], IMAGES["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO,
  dateModified: PUBLISHED_ISO,
  url: PAGE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords:
    "tiến độ cao tốc dầu giây - tân phú, cao tốc dầu giây tân phú, dầu giây tân phú, cao tốc dầu giây liên khương, the link city dầu giây, bán đất dầu giây",
  about: {
    "@type": "Place",
    name: "The Link City Dầu Giây",
    address: { "@type": "PostalAddress", addressLocality: "Dầu Giây", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cao tốc Dầu Giây – Tân Phú dài bao nhiêu km và đi qua đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuyến cao tốc Dầu Giây – Tân Phú có tổng chiều dài 60,24 km, đi qua 4 địa phương của tỉnh Đồng Nai gồm huyện Thống Nhất (thị trấn Dầu Giây), huyện Định Quán, huyện Xuân Lộc và huyện Tân Phú. Điểm đầu giao với QL1A và điểm cuối cao tốc TP.HCM – Long Thành – Dầu Giây.",
      },
    },
    {
      "@type": "Question",
      name: "Tiến độ giải phóng mặt bằng cao tốc Dầu Giây – Tân Phú năm 2026 đạt bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tỉnh Đồng Nai đang quyết liệt triển khai công tác đền bù và bàn giao mặt bằng với mục tiêu hoàn thành trên 90% diện tích đất sạch trong năm 2026 để nhà đầu tư triển khai thi công đồng loạt toàn tuyến.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City hưởng lợi thế nào khi cao tốc Dầu Giây – Tân Phú hình thành?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City tọa lạc ngay nút giao trọng điểm QL1A và QL20 (thị trấn Dầu Giây), chỉ cách điểm đầu tuyến cao tốc Dầu Giây – Tân Phú khoảng 3 phút di chuyển. Khi thông xe, khu đô thị sẽ trở thành trạm trung chuyển dịch vụ, thương mại và lưu trú sầm uất nhất khu vực kết nối giữa TP.HCM và Lâm Đồng.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Tiến độ cao tốc Dầu Giây – Tân Phú", item: PAGE_URL },
  ],
};

const articleImages: LightboxImage[] = [
  { src: IMAGES["1"], alt: "Bản đồ hướng tuyến cao tốc Dầu Giây – Tân Phú và vị trí The Link City", caption: "Bản đồ mạng lưới cao tốc kết nối từ nút giao Dầu Giây" },
  { src: IMAGES["2"], alt: "Toàn cảnh dự án The Link City ngã tư Dầu Giây Đồng Nai", caption: "Toàn cảnh quy hoạch The Link City tại tâm điểm ngã tư Dầu Giây" },
  { src: IMAGES["3"], alt: "Hạ tầng thực tế kết nối khu vực Dầu Giây", caption: "Hạ tầng giao thông trục QL1A - QL20 qua địa phận Dầu Giây" },
];

export default function Page() {
  const { openLightbox, LightboxPortal } = useLightbox(articleImages);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <CorpHeader />

      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-100 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-primary-600">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/tin-tuc" className="hover:text-primary-600">Tin tức</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-medium truncate">Tiến độ cao tốc Dầu Giây – Tân Phú</span>
          </div>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-16">
          <header className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-amber-700 mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Quy hoạch hạ tầng trọng điểm 2026
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              Tiến Độ Cao Tốc Dầu Giây – Tân Phú 2026: Đòn Bẩy Bứt Phá Cho The Link City
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-6 border-b border-slate-100">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-slate-400" /> Cập nhật: {PUBLISHED}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> 6 phút đọc</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-400" /> Dầu Giây, Thống Nhất, Đồng Nai</span>
            </div>
          </header>

          {/* Intro callout */}
          <div className="bg-primary-50/60 border-l-4 border-primary-600 p-5 rounded-r-2xl mb-8 text-slate-700 text-base leading-relaxed">
            <strong>Tiến độ cao tốc Dầu Giây – Tân Phú</strong> đang là tâm điểm chú ý lớn nhất của thị trường bất động sản khu Đông Đồng Nai năm 2026. Tuyến đường huyết mạch 60,24 km khởi đầu ngay tại nút giao Dầu Giây không chỉ rút ngắn thời gian di chuyển lên Đà Lạt mà còn mở toang cánh cửa gia tăng giá trị phi mã cho đô thị vệ tinh <Link href="/the-link-city" className="text-primary-700 font-bold hover:underline">The Link City Dầu Giây</Link>.
          </div>

          {/* Figure 1 */}
          <div className="mb-10">
            <ArticleFigure
              src={IMAGES["1"]}
              alt="Bản đồ quy hoạch tiến độ cao tốc Dầu Giây Tân Phú và vị trí The Link City"
              caption="Nút giao Dầu Giây là điểm hội tụ của các trục cao tốc huyết mạch: TP.HCM – Long Thành – Dầu Giây và Dầu Giây – Tân Phú."
              index={0}
              onOpen={openLightbox}
            />
          </div>

          {/* Section 1 */}
          <section className="prose prose-slate max-w-none mb-10 text-slate-700 leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-4">
              1. Tổng quan thông số kỹ thuật dự án cao tốc Dầu Giây – Tân Phú
            </h2>
            <p>
              Tuyến cao tốc Dầu Giây – Tân Phú là dự án thành phần đầu tiên của đại dự án cao tốc Dầu Giây – Liên Khương (Lâm Đồng), được đầu tư theo phương thức đối tác công tư (PPP). Đây là trục giao thông xương sống nối trung tâm kinh tế Đông Nam Bộ với vùng kinh tế Tây Nguyên.
            </p>
            
            {/* Table specs */}
            <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-sm">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Hạng mục</th>
                    <th className="p-3.5">Thông tin chi tiết</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="p-3.5 font-medium text-slate-800">Chiều dài tuyến</td>
                    <td className="p-3.5">Khoảng 60,24 km</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-slate-800">Điểm đầu</td>
                    <td className="p-3.5">Km 0+000 giao QL1A (trùng Km 43+125 cao tốc TP.HCM – Long Thành – Dầu Giây)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-slate-800">Điểm cuối</td>
                    <td className="p-3.5">Km 60+243 giao cắt QL20 (xã Phú Sơn, huyện Tân Phú, Đồng Nai)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-slate-800">Quy mô đầu tư</td>
                    <td className="p-3.5">Giai đoạn 1 gồm 4 làn xe tiêu chuẩn, vận tốc thiết kế 100 km/h</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-slate-800">Tổng mức đầu tư</td>
                    <td className="p-3.5">Gần 9.000 tỷ đồng</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-slate-800">Thời gian triển khai</td>
                    <td className="p-3.5">Tập trung giải phóng mặt bằng và thi công giai đoạn 2025 – 2028</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 mb-4">
              2. Cập nhật tiến độ giải phóng mặt bằng và thi công mới nhất 2026
            </h2>
            <p>
              Theo chỉ đạo quyết liệt từ UBND tỉnh Đồng Nai và Bộ Giao thông Vận tải, dự án cao tốc Dầu Giây – Tân Phú đang được ưu tiên bố trí nguồn vốn đền bù giải tỏa. Các huyện Thống Nhất, Định Quán và Tân Phú đã thành lập ban chỉ đạo bồi thường, đẩy nhanh tiến độ cắm mốc ranh giới giải phóng mặt bằng.
            </p>
            <p>
              Đặc biệt tại khu vực nút giao Dầu Giây (huyện Thống Nhất), mặt bằng bàn giao đạt tỷ lệ rất cao nhờ quỹ đất giao thông sẵn có và quy hoạch đồng bộ từ trước. Điều này đảm bảo khi khởi công công trình, nút giao Dầu Giây sẽ được triển khai thông suốt ngay từ những km đầu tiên.
            </p>
          </section>

          {/* Figure 2 */}
          <div className="mb-10">
            <ArticleFigure
              src={IMAGES["2"]}
              alt="Dự án The Link City Dầu Giây tọa lạc ngay cửa ngõ kết nối cao tốc"
              caption="The Link City hưởng trọn lợi thế từ vị trí tiếp giáp ngã tư Quốc lộ 1A và Quốc lộ 20, cách nút giao cao tốc chỉ vài phút."
              index={1}
              onOpen={openLightbox}
            />
          </div>

          {/* Section 2 */}
          <section className="prose prose-slate max-w-none mb-10 text-slate-700 leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-4">
              3. The Link City Dầu Giây hưởng lợi kép như thế nào?
            </h2>
            <p>
              Đối với thị trường mua <Link href="/the-link-city" className="text-primary-700 font-semibold hover:underline">bán đất Dầu Giây</Link>, hạ tầng luôn là thước đo bảo chứng cho biên độ tăng giá. <Link href="/the-link-city" className="text-primary-700 font-semibold hover:underline">The Link City</Link> (tiền thân được biết đến với tên gọi Khu đô thị A1-C1 Dầu Giây / Dầu Giây Center City) sở hữu vị trí vàng ngay ngã tư giao thoa chiến lược:
            </p>
            <ul className="space-y-3 my-4">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Kết nối TP.HCM trong 45 phút:</strong> Cư dân The Link City chỉ mất 3 phút ra cao tốc Long Thành – Dầu Giây để đi thẳng về trung tâm TP.HCM hoặc sân bay quốc tế Long Thành.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Đón đầu dòng khách du lịch Đà Lạt:</strong> Khi cao tốc Dầu Giây – Tân Phú hoàn thành, The Link City sẽ trở thành trạm dừng chân, phố mua sắm và dịch vụ ẩm thực sầm uất đón hàng triệu lượt khách vãng lai mỗi năm.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Pháp lý vững chắc, sổ hồng từng nền:</strong> Không như các dự án quy hoạch treo, The Link City đã có sổ hồng lâu dài, hạ tầng hoàn thiện có thể công chứng nhận nền ngay trong tuần với mức giá chỉ từ 1,85 tỷ/nền.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 mb-4">
              4. Nhận định chuyên gia: Có nên đầu tư The Link City năm 2026?
            </h2>
            <p>
              Kinh nghiệm đầu tư bất động sản tại các vùng cao tốc như Long Thành hay Phan Thiết cho thấy: <em>giai đoạn giải phóng mặt bằng và chuẩn bị khởi công là thời điểm "chân sóng" tốt nhất để vào tiền</em>. Khi cao tốc chính thức thông xe, mặt bằng giá đất thường đã tăng từ 50% đến 100%. Với mức giá chỉ từ 1,85 tỷ/nền cùng sự hỗ trợ vay 70% từ VietinBank, The Link City đang là cơ hội tích sản hàng đầu khu vực Thống Nhất – Dầu Giây năm 2026.
            </p>
          </section>

          {/* Figure 3 */}
          <div className="mb-10">
            <ArticleFigure
              src={IMAGES["3"]}
              alt="Hạ tầng thực tế dự án The Link City Dầu Giây"
              caption="Hạ tầng nội khu dự án The Link City đã hoàn thiện khang trang, sẵn sàng bàn giao cho khách hàng xây dựng."
              index={2}
              onOpen={openLightbox}
            />
          </div>

          {/* FAQ Accordion Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Câu hỏi thường gặp về cao tốc Dầu Giây – Tân Phú</h3>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-100 shadow-xs">
                  <h4 className="font-semibold text-slate-800 text-sm mb-2">{item.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 text-white text-center shadow-lg my-10">
            <h3 className="text-2xl font-black mb-3">Nhận Trọn Bộ Bảng Giá & Sơ Đồ Phân Lô The Link City</h3>
            <p className="text-amber-100 text-sm max-w-xl mx-auto mb-6">
              Đón đầu tiến độ cao tốc Dầu Giây – Tân Phú với các lô đất nền vị trí đẹp nhất giá gốc chủ đầu tư từ 1,85 tỷ/nền.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/the-link-city/bang-gia"
                className="px-6 py-3 rounded-full bg-white text-amber-700 font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm"
              >
                Xem bảng giá chi tiết
              </Link>
              <Link
                href="/the-link-city"
                className="px-6 py-3 rounded-full bg-amber-700/60 hover:bg-amber-700 text-white font-bold text-sm transition-colors border border-white/20"
              >
                Khám phá tổng quan dự án
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <RelatedContent
            title="Khám phá thêm về The Link City Dầu Giây"
            items={[
              {
                href: "/the-link-city",
                title: "Tổng quan dự án The Link City Dầu Giây",
                description: "Khu đô thị thương mại ngã tư QL1A - QL20 giá từ 1,85 tỷ/nền.",
                tag: "Dự án",
              },
              {
                href: "/the-link-city/bang-gia",
                title: "Bảng giá The Link City mới nhất",
                description: "Chi tiết giá từng lô và bài toán vay VietinBank 70%.",
                tag: "Bảng giá",
              },
              {
                href: "/the-link-city/phap-ly",
                title: "Hồ sơ pháp lý The Link City",
                description: "Công văn phê duyệt và quy trình cấp sổ hồng riêng từng nền.",
                tag: "Pháp lý",
              },
              {
                href: "/the-link-city/vi-tri",
                title: "Vị trí & liên kết vùng The Link City",
                description: "Tâm điểm ngã tư Dầu Giây kết nối cao tốc và sân bay Long Thành.",
                tag: "Vị trí",
              },
              {
                href: "/the-link-city/hinh-anh",
                title: "Bộ sưu tập hình ảnh thực tế",
                description: "Ảnh thực địa hạ tầng đường sá đã hoàn thiện tại dự án.",
                tag: "Hình ảnh",
              },
              {
                href: "/tin-tuc/tien-ich-ngoai-khu-the-link-city-dau-giay",
                title: "Tiện ích ngoại khu The Link City",
                description: "Trường học, bệnh viện, chợ Dầu Giây trong bán kính 3km.",
                tag: "Tin tức",
              },
            ]}
          />
        </article>
      </main>

      <CorpFooter />
      {LightboxPortal}
    </>
  );
}
