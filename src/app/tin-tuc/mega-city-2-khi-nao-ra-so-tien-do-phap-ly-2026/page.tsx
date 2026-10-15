"use client";

import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { Calendar, Clock, MapPin, CheckCircle2, ChevronRight, FileCheck, ShieldAlert, ArrowRight, Sparkles } from "lucide-react";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/mega-city-2-khi-nao-ra-so-tien-do-phap-ly-2026`;
const PUBLISHED     = "15/10/2026";
const PUBLISHED_ISO = "2026-10-15";

const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";

const IMAGES = {
  "1": `${CDN}/megacity2/legal/1.jpeg`,
  "2": `${CDN}/megacity2/real/1.png`,
  "3": `${CDN}/megacity2/overview/1.jpg`,
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mega City 2 Khi Nào Ra Sổ? Tiến Độ Pháp Lý & Cấp Sổ Mới Nhất 2026",
  description:
    "Giải đáp chi tiết thắc mắc Mega City 2 khi nào ra sổ: căn cứ Quyết định 2979, tiến độ nghiệm thu hạ tầng, quy trình nộp hồ sơ cấp giấy chứng nhận quyền sử dụng đất năm 2026.",
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
    "mega city 2 khi nào ra sổ, khi nào mega city 2 ra sổ, pháp lý mega city 2, tiến độ cấp sổ mega city 2, quyết định 2979 giao đất mega city 2",
  about: {
    "@type": "RealEstateListing",
    name: "Mega City 2 Nhơn Trạch",
    url: `${BASE_URL}/mega-city-2`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mega City 2 khi nào ra sổ hồng cho khách hàng?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hiện dự án Mega City 2 đã được UBND tỉnh Đồng Nai ban hành Quyết định 2979 về giao đất và cho phép chuyển mục đích sử dụng đất. Chủ đầu tư đang phối hợp cùng các cơ quan chức năng hoàn thành thủ tục định giá đất, hoàn thành nghĩa vụ tài chính và nghiệm thu hạ tầng để tiến hành cấp sổ từng phân khu theo đúng quy định pháp luật.",
      },
    },
    {
      "@type": "Question",
      name: "Dự án Mega City 2 đã có những văn bản pháp lý quan trọng nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án đã có phê duyệt Quy hoạch chi tiết 1/500, Quyết định số 2979/QĐ-UBND của UBND tỉnh Đồng Nai về giao đất, báo cáo đánh giá tác động môi trường (ĐTM) và hồ sơ thiết kế cơ sở hạ tầng kỹ thuật đã được các sở ngành phê duyệt.",
      },
    },
    {
      "@type": "Question",
      name: "Khách hàng mua chuyển nhượng Mega City 2 hiện nay giao dịch dưới hình thức nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Các giao dịch chuyển nhượng đất nền Mega City 2 hiện tại được thực hiện thông qua hợp đồng nguyên tắc hoặc văn bản xác nhận chuyển nhượng theo quy trình của sàn giao dịch và chủ đầu tư, bảo đảm quyền lợi hợp pháp của người nhận chuyển nhượng khi ra sổ.",
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
    { "@type": "ListItem", position: 3, name: "Mega City 2 khi nào ra sổ", item: PAGE_URL },
  ],
};

const articleImages: LightboxImage[] = [
  { src: IMAGES["1"], alt: "Hồ sơ pháp lý dự án Mega City 2 Nhơn Trạch", caption: "Hồ sơ pháp lý và quyết định giao đất dự án Mega City 2" },
  { src: IMAGES["2"], alt: "Hạ tầng thực tế đã hoàn thiện tại Mega City 2", caption: "Hạ tầng đường nội bộ, cây xanh và vỉa hè tại Mega City 2 Nhơn Trạch" },
  { src: IMAGES["3"], alt: "Toàn cảnh khu đô thị Mega City 2", caption: "Toàn cảnh 84ha khu đô thị Mega City 2 tại trung tâm Nhơn Trạch" },
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
            <span className="text-slate-800 font-medium truncate">Mega City 2 khi nào ra sổ</span>
          </div>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-16">
          <header className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-semibold text-blue-700 mb-4">
              <FileCheck className="w-3.5 h-3.5" />
              Giải đáp pháp lý & lộ trình cấp sổ
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              Mega City 2 Khi Nào Ra Sổ? Tiến Độ Pháp Lý & Cấp Sổ Mới Nhất 2026
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-6 border-b border-slate-100">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-slate-400" /> Cập nhật: {PUBLISHED}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> 5 phút đọc</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-400" /> Phú Hội, Nhơn Trạch, Đồng Nai</span>
            </div>
          </header>

          {/* Intro callout */}
          <div className="bg-slate-50 border-l-4 border-blue-600 p-5 rounded-r-2xl mb-8 text-slate-700 text-base leading-relaxed">
            Câu hỏi <strong>"Mega City 2 khi nào ra sổ?"</strong> là nỗi băn khoăn hàng đầu của hàng nghìn khách hàng và nhà đầu tư đang nắm giữ hoặc có ý định mua đất nền tại <Link href="/mega-city-2" className="text-primary-700 font-bold hover:underline">khu đô thị Mega City 2 Nhơn Trạch</Link>. Dưới đây là phân tích khách quan và cập nhật tiến trình pháp lý mới nhất theo các văn bản của cơ quan quản lý tỉnh Đồng Nai.
          </div>

          {/* Figure 1 */}
          <div className="mb-10">
            <ArticleFigure
              src={IMAGES["1"]}
              alt="Hồ sơ pháp lý dự án Mega City 2 Nhơn Trạch"
              caption="Hồ sơ pháp lý dự án Mega City 2 đã có phê duyệt 1/500 và quyết định giao đất số 2979 của UBND tỉnh Đồng Nai."
              index={0}
              onOpen={openLightbox}
            />
          </div>

          {/* Section 1 */}
          <section className="prose prose-slate max-w-none mb-10 text-slate-700 leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-4">
              1. Căn cứ pháp lý then chốt: Quyết định 2979 của UBND tỉnh Đồng Nai
            </h2>
            <p>
              Đối với một dự án khu đô thị quy mô lớn như Mega City 2 (hơn 84 ha), văn bản pháp lý quan trọng nhất khẳng định tính hợp pháp của quỹ đất chính là <strong>Quyết định số 2979/QĐ-UBND</strong> ban hành bởi UBND tỉnh Đồng Nai. Quyết định này chính thức chấp thuận giao đất và cho phép chuyển mục đích sử dụng đất sang đất ở đô thị cho chủ đầu tư.
            </p>
            <p>
              Đây là nền tảng cốt lõi giải tỏa nỗi lo dự án "ảo" hay "chưa được duyệt". Toàn bộ diện tích của Mega City 2 đã nằm trong quy hoạch đô thị mới Nhơn Trạch và có ranh giới cắm mốc chuẩn xác.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 mb-4">
              2. Các bước cần hoàn tất để ra sổ hồng từng nền
            </h2>
            <p>
              Theo Luật Đất đai và các nghị định hướng dẫn, từ khi có quyết định giao đất đến lúc trao sổ hồng riêng cho từng khách hàng cần trải qua 3 giai đoạn chính:
            </p>
            <ol className="space-y-3 my-4 list-decimal pl-5">
              <li>
                <strong>Nghiệm thu hạ tầng kỹ thuật:</strong> Kiểm tra hệ thống đường giao thông trải nhựa, mạng lưới điện âm, cấp thoát nước và công viên cây xanh theo đúng thiết kế 1/500 được duyệt. Hiện hạ tầng Mega City 2 đã cơ bản hoàn thiện tới 90%.
              </li>
              <li>
                <strong>Xác định và nộp tiền sử dụng đất:</strong> Các sở ngành (Sở Tài nguyên & Môi trường, Sở Tài chính) tiến hành thẩm định giá đất cụ thể để chủ đầu tư hoàn thành nghĩa vụ tài chính vào ngân sách nhà nước.
              </li>
              <li>
                <strong>Cấp đổi sổ tổng và tách sổ con:</strong> Sau khi hoàn thành nghĩa vụ thuế, Văn phòng Đăng ký Đất đai tỉnh Đồng Nai sẽ cấp giấy chứng nhận quyền sử dụng đất tổng thể, sau đó tiến hành thủ tục tách thửa, ra sổ hồng riêng từng lô cho cư dân.
              </li>
            </ol>
          </section>

          {/* Figure 2 */}
          <div className="mb-10">
            <ArticleFigure
              src={IMAGES["2"]}
              alt="Hạ tầng thực tế dự án Mega City 2"
              caption="Hiện trạng hạ tầng đường sá nội khu tại Mega City 2 đã được thảm nhựa đồng bộ và trồng cây xanh."
              index={1}
              onOpen={openLightbox}
            />
          </div>

          {/* Section 2 */}
          <section className="prose prose-slate max-w-none mb-10 text-slate-700 leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-4">
              3. Dự báo lộ trình và lời khuyên dành cho nhà đầu tư Mega City 2
            </h2>
            <p>
              Với nỗ lực tháo gỡ khó khăn chung cho các dự án bất động sản trên địa bàn tỉnh Đồng Nai từ Tổ công tác của Thủ tướng Chính phủ, các thủ tục thẩm định giá đất tại Nhơn Trạch đang được đẩy nhanh.
            </p>
            <p>
              <strong>Lời khuyên:</strong> Đối với nhà đầu tư đang nắm giữ nền tại Mega City 2, đây là tài sản dài hạn đón đầu các công trình hạ tầng khủng như <em>Vành đai 3 TP.HCM, cầu Nhơn Trạch, cao tốc Bến Lức – Long Thành</em> và <em>sân bay Long Thành</em>. Khi các đại dự án hạ tầng này về đích cùng thời điểm ra sổ, biên độ lợi nhuận sẽ rất đột biến.
            </p>
          </section>

          {/* SPECIAL CALLOUT CROSS-LINK TO THE LINK CITY */}
          <div className="my-10 p-6 sm:p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border-2 border-amber-300 shadow-sm relative overflow-hidden">
            <div className="flex items-start gap-3 mb-4">
              <span className="p-2 bg-amber-500 text-white rounded-xl shadow-xs">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-700">Lựa chọn an tâm tuyệt đối</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Cần Mua Đất Nền Đã Có Sẵn Sổ Hồng Công Chứng Ngay?
                </h3>
              </div>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed mb-5">
              Nếu bạn không muốn chờ đợi lộ trình làm sổ mà muốn sở hữu đất nền <strong>đã có sẵn sổ hồng thổ cư riêng từng nền, công chứng sang tên ngay trong tuần</strong>: Tham khảo ngay dự án <Link href="/the-link-city" className="text-amber-700 font-bold hover:underline">The Link City Dầu Giây</Link> (Khu dân cư A1-C1 ngã tư QL1A - QL20).
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/the-link-city"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors shadow-sm"
              >
                Khám phá The Link City (Từ 1,85 tỷ)
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/the-link-city/phap-ly"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors border border-slate-200"
              >
                Xem sổ hồng The Link City
              </Link>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Câu hỏi thường gặp về pháp lý Mega City 2</h3>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-100 shadow-xs">
                  <h4 className="font-semibold text-slate-800 text-sm mb-2">{item.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <RelatedContent
            title="Thông tin liên quan đến Mega City 2 và thị trường"
            items={[
              {
                href: "/mega-city-2/phap-ly",
                title: "Pháp lý Mega City 2 chi tiết",
                description: "Tổng hợp quyết định 1/500 và văn bản giao đất 2979.",
                tag: "Pháp lý",
              },
              {
                href: "/tin-tuc/quyet-dinh-2979-giao-dat-mega-city-2",
                title: "Quyết định 2979 giao đất Mega City 2",
                description: "Nội dung chi tiết quyết định của UBND tỉnh Đồng Nai.",
                tag: "Tin tức",
              },
              {
                href: "/mega-city-2/tien-do",
                title: "Tiến độ hạ tầng Mega City 2 mới nhất",
                description: "Hình ảnh và hiện trạng xây dựng tại dự án 2026.",
                tag: "Tiến độ",
              },
              {
                href: "/mega-city-2/bang-gia",
                title: "Bảng giá chuyển nhượng Mega City 2",
                description: "Giá bán tham khảo các phân khu nhà phố và biệt thự.",
                tag: "Bảng giá",
              },
              {
                href: "/the-link-city",
                title: "Dự án mới: The Link City Dầu Giây",
                description: "Đất nền sổ hồng trao tay ngã tư Dầu Giây chỉ từ 1,85 tỷ/nền.",
                tag: "Dự án mới",
              },
              {
                href: "/tin-tuc/tien-do-cao-toc-dau-giay-tan-phu-2026-the-link-city",
                title: "Tiến độ cao tốc Dầu Giây – Tân Phú",
                description: "Cập nhật tiến độ dự án hạ tầng trọng điểm khu Đông Đồng Nai.",
                tag: "Hạ tầng",
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
