import type { Metadata } from "next";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import {
  IMG_REGIONAL,
  IMG_PLANE,
} from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Vị Trí Mega City 2 Nhơn Trạch – Liên Kết Vùng & Giao Thông 2026",
  description:
    "Vị trí dự án Mega City 2 tại xã Nhơn Trạch, tỉnh Đồng Nai. Cách TP.HCM 30–35 km, tiếp giáp đường 25C, gần sân bay Long Thành và cầu Nhơn Trạch. Phân tích chi tiết kết nối vùng.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/vi-tri" },
  openGraph: {
    title: "Vị Trí Mega City 2 Nhơn Trạch – Liên Kết Vùng & Giao Thông 2026",
    description:
      "Phân tích vị trí chiến lược của Mega City 2 Nhơn Trạch – Đồng Nai: cách TP.HCM 30–35 km, đường 25C, sân bay Long Thành, cầu Nhơn Trạch.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [
      {
        url: IMG_REGIONAL["1"],
        width: 1280,
        height: 720,
        alt: "Vị trí Mega City 2 Nhơn Trạch – Liên kết vùng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vị Trí Mega City 2 Nhơn Trạch – Liên Kết Vùng",
    description:
      "Mega City 2 cách TP.HCM 30–35 km, tiếp giáp đường 25C, gần sân bay Long Thành.",
    images: [IMG_REGIONAL["1"]],
  },
};

const faqLocationSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mega City 2 Nhơn Trạch nằm ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 tọa lạc tại Đường 25C, xã Nhơn Trạch, tỉnh Đồng Nai. Dự án nằm trong tam giác phát triển TP.HCM – Long Thành – Nhơn Trạch, cách trung tâm TP.HCM khoảng 30–35 km.",
      },
    },
    {
      "@type": "Question",
      name: "Từ Mega City 2 đến TP.HCM đi bằng đường nào và mất bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có hai tuyến chính: (1) Đường 25C – cao tốc Bến Lức Long Thành, mất khoảng 45–60 phút đến trung tâm Q1. (2) Phà Cát Lái sang Quận 2 – Thủ Đức, mất khoảng 25–35 phút. Khi cầu Nhơn Trạch hoàn thành, thời gian rút ngắn còn 20–25 phút.",
      },
    },
    {
      "@type": "Question",
      name: "Sân bay Long Thành cách Mega City 2 bao xa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sân bay quốc tế Long Thành cách dự án Mega City 2 khoảng 15–20 km, di chuyển khoảng 20–25 phút theo đường hiện hữu. Đây là sân bay đang xây dựng giai đoạn 1, dự kiến vận hành giai đoạn đầu trong những năm tới.",
      },
    },
    {
      "@type": "Question",
      name: "Cầu Nhơn Trạch khi nào hoàn thành và ảnh hưởng thế nào đến Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cầu Nhơn Trạch bắc qua sông Đồng Nai nối Nhơn Trạch với TP.HCM đang trong quy hoạch và triển khai. Khi hoàn thành, thời gian di chuyển từ Mega City 2 đến Quận 2 rút ngắn còn 20–25 phút, tăng đáng kể giá trị bất động sản khu vực.",
      },
    },
    {
      "@type": "Question",
      name: "Khu công nghiệp Nhơn Trạch có ảnh hưởng gì đến dự án Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hệ thống 6 khu công nghiệp Nhơn Trạch (KCN 1–6) trong bán kính 5–10 km tạo nhu cầu nhà ở bền vững từ hàng chục nghìn công nhân, kỹ sư và chuyên gia. Đây là yếu tố giúp thị trường bất động sản Nhơn Trạch có thanh khoản ổn định.",
      },
    },
  ],
};

const locationSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Mega City 2 Nhơn Trạch – Vị trí dự án",
  description:
    "Khu dân cư Mega City 2 tọa lạc tại xã Nhơn Trạch, tỉnh Đồng Nai. Cách TP.HCM 30–35 km theo đường 25C.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Đường 25C",
    addressLocality: "Xã Nhơn Trạch",
    addressRegion: "Đồng Nai",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.7567,
    longitude: 106.9667,
  },
  url: "https://kimoanhdongnai.com.vn/mega-city-2/vi-tri",
};

const articleLocationSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vị trí Mega City 2 Nhơn Trạch – Phân tích kết nối vùng và giao thông 2026",
  description:
    "Phân tích chi tiết vị trí chiến lược của Mega City 2 tại xã Nhơn Trạch, tỉnh Đồng Nai: khoảng cách đến TP.HCM, sân bay Long Thành, cao tốc và tiềm năng tăng giá.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-08-01",
  dateModified: "2026-08-13",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/vi-tri",
  about: {
    "@type": "RealEstateListing",
    name: "Mega City 2 Nhơn Trạch",
    url: "https://kimoanhdongnai.com.vn/mega-city-2",
  },
};

const connections = [
  {
    icon: "🛣️",
    title: "Đường 25C",
    desc: "Trục kết nối trực tiếp TP.HCM – Nhơn Trạch – Long Thành. Mega City 2 nằm ngay mặt tiền đường 25C.",
    highlight: true,
  },
  {
    icon: "✈️",
    title: "Sân bay Long Thành",
    desc: "Cách dự án khoảng 15–20 km. Sân bay quốc tế Long Thành đang trong quá trình xây dựng giai đoạn 1.",
    highlight: false,
  },
  {
    icon: "🌉",
    title: "Cầu Nhơn Trạch",
    desc: "Cầu bắc qua sông Đồng Nai nối Nhơn Trạch – TP.HCM. Khi hoàn thành rút ngắn thời gian di chuyển còn 20–25 phút.",
    highlight: false,
  },
  {
    icon: "🚢",
    title: "Phà Cát Lái",
    desc: "Kết nối nhanh Nhơn Trạch – Quận 2 TP.HCM. Phương án di chuyển phổ biến hiện tại.",
    highlight: false,
  },
  {
    icon: "🚘",
    title: "Cao tốc Bến Lức – Long Thành",
    desc: "Kết nối vùng kinh tế trọng điểm phía Nam. Hành trình đến các tỉnh lân cận được rút ngắn đáng kể.",
    highlight: false,
  },
  {
    icon: "🏭",
    title: "KCN Nhơn Trạch 1–6",
    desc: "Hệ thống 6 khu công nghiệp lớn trong bán kính 5–10 km, tạo nhu cầu nhà ở bền vững cho khu vực.",
    highlight: false,
  },
];

const distances = [
  { to: "Trung tâm TP.HCM (Q1)", km: "~32 km", time: "45–60 phút" },
  { to: "Quận 2 – Thủ Đức", km: "~18 km", time: "25–35 phút" },
  { to: "Sân bay Long Thành", km: "~18 km", time: "20–25 phút" },
  { to: "Sân bay Tân Sơn Nhất", km: "~38 km", time: "50–65 phút" },
  { to: "KCN Nhơn Trạch 1", km: "~5 km", time: "8–12 phút" },
  { to: "Bệnh viện Đồng Nai", km: "~25 km", time: "30–40 phút" },
];

export default function ViTriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLocationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLocationSchema) }}
      />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Vị trí"
          title="Vị trí Mega City 2 Nhơn Trạch"
          subtitle="Phân tích chi tiết vị trí địa lý và liên kết giao thông của dự án tại xã Nhơn Trạch, tỉnh Đồng Nai."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Vị trí" },
          ]}
          updatedAt="08/2026"
        />

        {/* Tổng quan vị trí */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="anim-left">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  Tọa lạc tại cửa ngõ Đông Nam Bộ
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Mega City 2 nằm tại xã Nhơn Trạch, tỉnh Đồng Nai – khu vực tiếp giáp
                  trực tiếp với TP.HCM qua đường 25C và phà Cát Lái. Đây là vị trí chiến lược
                  trong tam giác phát triển TP.HCM – Long Thành – Nhơn Trạch.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Với sân bay quốc tế Long Thành đang được xây dựng và cầu Nhơn Trạch
                  trong quy hoạch, khu vực này được kỳ vọng có sự phát triển hạ tầng
                  đáng kể trong những năm tới.
                </p>

                {/* Distance table */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
                    <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Khoảng cách từ Mega City 2
                    </p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {distances.map((d) => (
                      <div key={d.to} className="flex items-center justify-between px-4 py-3 text-sm">
                        <span className="text-slate-600">{d.to}</span>
                        <div className="text-right flex-shrink-0 ml-4">
                          <p className="font-semibold text-slate-800">{d.km}</p>
                          <p className="text-xs text-slate-400">{d.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100">
                    <p className="text-[11px] text-slate-400">
                      * Thời gian di chuyển ước tính, không kể kẹt xe. Nguồn: Google Maps 2026.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm anim-right anim-delay-100">
                <iframe
                  title="Vị trí Mega City 2 Nhơn Trạch trên bản đồ"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31362.776564104588!2d106.8598273743164!3d10.707690599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317523006254ef57%3A0xc66fe772724b7d3!2sMega%20City%202%20-%20Kim%20Oanh%20Land!5e0!3m2!1svi!2s!4v1787137712216!5m2!1svi!2s"
                  width="100%"
                  height="420"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="px-4 py-3 bg-slate-50 border-t border-slate-100">
                  <p className="text-xs text-slate-500">
                    📍 Đường 25C, Xã Nhơn Trạch, Tỉnh Đồng Nai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Liên kết vùng */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                6 trục kết nối vùng quan trọng
              </h2>
              <p className="text-slate-500 text-sm mb-8">
                Mega City 2 được hưởng lợi từ hệ thống giao thông đang và sẽ được phát triển
                trong khu vực Đông Nam Bộ.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 anim-stagger">
              {connections.map((c) => (
                <div
                  key={c.title}
                  className={`rounded-2xl p-5 border transition-all duration-300 hover:shadow-md hover:-translate-y-1
                    ${c.highlight
                      ? "bg-primary-50 border-primary-200"
                      : "bg-white border-slate-200"}`}
                >
                  <div className="text-2xl mb-3">{c.icon}</div>
                  <h3 className={`font-bold text-sm mb-1.5
                    ${c.highlight ? "text-primary-800" : "text-slate-800"}`}>
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Hình ảnh liên kết vùng */}
            <h3 className="text-base font-semibold text-slate-700 mb-4 anim-up">
              Hình ảnh hạ tầng và liên kết vùng
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 anim-stagger">
              {[IMG_REGIONAL["1"], IMG_REGIONAL["2"], IMG_REGIONAL["3"], IMG_REGIONAL["4"],
                IMG_PLANE["1"], IMG_PLANE["2"], IMG_REGIONAL["5"], IMG_REGIONAL["6"]].map((src, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl bg-slate-100 h-36 group anim-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Hình ảnh liên kết vùng Mega City 2 Nhơn Trạch ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lưu ý quan trọng */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 anim-up">
              <p className="text-sm font-bold text-amber-800 mb-2">⚠️ Lưu ý quan trọng</p>
              <p className="text-xs text-amber-700 leading-relaxed">
                Thông tin về tiến độ hạ tầng giao thông (cầu Nhơn Trạch, cao tốc, sân bay)
                được tổng hợp từ nguồn công khai và có thể thay đổi theo quyết định của cơ
                quan có thẩm quyền. Đây không phải cam kết về thời hạn hoàn thành.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <PageCTA
          title="Tìm hiểu thêm về vị trí Mega City 2"
          subtitle="Liên hệ để được tư vấn và đặt lịch tham quan thực tế dự án tại Nhơn Trạch, Đồng Nai."
        />

        {/* Related content */}
        <RelatedContent
          items={[
            {
              href: "/mega-city-2",
              title: "Tổng quan Mega City 2 Nhơn Trạch",
              description: "Thông tin tổng hợp về dự án: quy mô, chủ đầu tư, pháp lý và bảng giá tham khảo.",
              tag: "Tổng quan",
            },
            {
              href: "/mega-city-2/tien-ich",
              title: "Tiện ích nội khu Mega City 2",
              description: "Hệ thống tiện ích đồng bộ bên trong khu dân cư: công viên, trường học, thương mại.",
              tag: "Tiện ích",
            },
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý Mega City 2 – QĐ 1772",
              description: "Tình trạng pháp lý, quyết định phân lô bán nền và các văn bản pháp lý chính thức.",
              tag: "Pháp lý",
            },
            {
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá Mega City 2 cập nhật",
              description: "Giá chuyển nhượng tham khảo các loại sản phẩm TH, T và Biệt thự V.",
              tag: "Bảng giá",
            },
            {
              href: "/mega-city-2/mat-bang",
              title: "Mặt bằng & Sản phẩm Mega City 2",
              description: "Bản vẽ quy hoạch, mặt bằng phân lô và các loại sản phẩm nhà ở.",
              tag: "Mặt bằng",
            },
            {
              href: "/mega-city-2/faq",
              title: "Câu hỏi thường gặp về Mega City 2",
              description: "Giải đáp các câu hỏi phổ biến về pháp lý, giá, tiến độ và thủ tục mua bán.",
              tag: "FAQ",
            },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
