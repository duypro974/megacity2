"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS11 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/5-ly-do-nen-dau-tu-mega-city-2`;
const PUBLISHED     = "18/08/2026";
const PUBLISHED_ISO = "2026-08-18";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 Lý Do Nên Đầu Tư Mega City 2 Nhơn Trạch Trong Năm 2026",
  description: "Có nên đầu tư Mega City 2 Nhơn Trạch trong năm 2026? Phân tích 5 lý do giúp dự án trở thành điểm đến hấp dẫn của nhiều nhà đầu tư tại Đồng Nai.",
  image: [IMG_NEWS11["1"], IMG_NEWS11["2"], IMG_NEWS11["3"]],
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
  keywords: "đầu tư Mega City 2, có nên đầu tư Mega City 2, tiềm năng Mega City 2, đất nền Mega City 2, Mega City 2 Nhơn Trạch, đầu tư bất động sản Nhơn Trạch",
  about: { "@type": "RealEstateListing", name: "Mega City 2 Nhơn Trạch", url: `${BASE_URL}/mega-city-2` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Có nên đầu tư Mega City 2 trong năm 2026 không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 nhận được sự quan tâm nhờ vị trí thuận lợi trên đường 25C, pháp lý rõ ràng với QĐ 1772/QĐ-UBND, quy hoạch đồng bộ và hưởng lợi từ nhiều dự án hạ tầng lớn. Tuy nhiên, mỗi nhà đầu tư cần đánh giá khả năng tài chính, mục tiêu đầu tư và pháp lý cụ thể từng lô trước khi quyết định.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 nằm ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 tọa lạc trên đường 25C, xã Phú Hội, huyện Nhơn Trạch, tỉnh Đồng Nai. Dự án kết nối thuận lợi với TP. Hồ Chí Minh, sân bay Long Thành và các tuyến cao tốc vùng.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có những tiện ích gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án được quy hoạch theo mô hình khu đô thị hiện đại với nhiều tiện ích nội khu: công viên, trường học, trung tâm thương mại, khu vui chơi, khu thể thao và trung tâm y tế. Xem chi tiết tại kimoanhdongnai.com.vn/mega-city-2/tien-ich.",
      },
    },
    {
      "@type": "Question",
      name: "Giá đất Mega City 2 hiện nay là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá chuyển nhượng tại Mega City 2 phụ thuộc vào vị trí lô, diện tích, loại sản phẩm và thời điểm giao dịch. Tham khảo bảng giá mới nhất tại kimoanhdongnai.com.vn/mega-city-2/bang-gia.",
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
    { "@type": "ListItem", position: 3, name: "5 Lý Do Nên Đầu Tư Mega City 2", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS11["1"], alt: "Phối cảnh tổng thể dự án Mega City 2 Nhơn Trạch",          caption: "Phối cảnh tổng thể dự án Mega City 2 Nhơn Trạch" },
  { src: IMG_NEWS11["2"], alt: "Vị trí dự án Mega City 2 trên trục đường 25C",             caption: "Vị trí dự án Mega City 2 trên trục đường 25C" },
  { src: IMG_NEWS11["3"], alt: "Hạ tầng giao thông kết nối khu vực Nhơn Trạch",            caption: "Hạ tầng giao thông kết nối khu vực Nhơn Trạch" },
  { src: IMG_NEWS11["4"], alt: "Tiện ích nội khu tại dự án Mega City 2",                   caption: "Tiện ích nội khu tại dự án Mega City 2" },
  { src: IMG_NEWS11["5"], alt: "Tiềm năng đầu tư bất động sản tại Nhơn Trạch",             caption: "Tiềm năng đầu tư bất động sản tại Nhơn Trạch" },
];

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-primary-400 scroll-mt-24">
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-8">{children}</h3>;
}
function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed">
          <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 mt-[9px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s = type === "warn"
    ? "bg-amber-50 border-amber-200 text-amber-800"
    : "bg-primary-50 border-primary-200 text-primary-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200
               text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
      {children}
    </a>
  );
}

// Lý do card với số thứ tự nổi bật
function ReasonStep({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 mb-12">
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-600 text-white font-black text-lg flex items-center justify-center shadow-lg shadow-primary-200">
        {num}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-black text-slate-800 mb-3 leading-snug">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default function NamLyDoNenDauTuMegaCity2Page() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}

      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero header ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">5 Lý Do Đầu Tư Mega City 2</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Tin dự án</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 8 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              5 Lý Do Nên Đầu Tư Mega City 2 Nhơn Trạch Trong Năm 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Có nên đầu tư Mega City 2 Nhơn Trạch trong năm 2026? Phân tích 5 lý do giúp dự án
              trở thành điểm đến được nhiều nhà đầu tư tại Đồng Nai quan tâm.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS11["1"]} alt="Phối cảnh tổng thể dự án Mega City 2 Nhơn Trạch"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Phối cảnh tổng thể dự án Mega City 2 Nhơn Trạch, Đồng Nai
            </p>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#ly-do-1", "1. Vị trí chiến lược ngay trung tâm Nhơn Trạch"],
                    ["#ly-do-2", "2. Hưởng lợi từ hệ thống hạ tầng giao thông"],
                    ["#ly-do-3", "3. Quy hoạch bài bản với tiện ích đồng bộ"],
                    ["#ly-do-4", "4. Giá bán còn phù hợp với nhiều nhà đầu tư"],
                    ["#ly-do-5", "5. Tiềm năng tăng giá trong dài hạn"],
                    ["#faq",     "6. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Thị trường bất động sản Đồng Nai đang thu hút sự quan tâm của nhiều nhà đầu tư nhờ
                sự phát triển mạnh mẽ của hệ thống hạ tầng giao thông và quá trình đô thị hóa diễn
                ra nhanh chóng trong những năm gần đây.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Trong đó, Mega City 2 là một trong những dự án nổi bật tại Nhơn Trạch, được nhiều
                khách hàng quan tâm nhờ vị trí thuận lợi, quy hoạch đồng bộ và tiềm năng tăng
                trưởng trong dài hạn. Vậy có nên đầu tư Mega City 2 trong năm 2026 hay không?
                Hãy cùng phân tích 5 lý do quan trọng dưới đây.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin trong bài mang tính tham khảo. Giá trị bất động
                sản phụ thuộc vào nhiều yếu tố. Nhà đầu tư cần đánh giá kỹ pháp lý, khả năng tài
                chính và mục tiêu cá nhân trước khi quyết định.
              </InfoBox>

              {/* 5 reasons */}
              <section className="mb-4">
                <SectionHeading>5 lý do nên cân nhắc đầu tư Mega City 2 năm 2026</SectionHeading>
                <div className="pt-8">

                  <ReasonStep num={1} title="Vị trí chiến lược ngay trung tâm Nhơn Trạch">
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Một trong những yếu tố quan trọng nhất quyết định giá trị bất động sản chính
                      là vị trí. Mega City 2 nằm trên trục đường 25C — khu vực trung tâm huyện Nhơn
                      Trạch — với khả năng kết nối thuận lợi đến nhiều tuyến giao thông huyết mạch:
                    </p>
                    <BulletList items={[
                      "Đường 25C: trục kết nối trực tiếp Nhơn Trạch – Long Thành – sân bay",
                      "Đường 319: kết nối nội huyện và các khu công nghiệp",
                      "Đường Nguyễn Hữu Cảnh và Tôn Đức Thắng: các trục đô thị quan trọng",
                      "Phà Cát Lái (và cầu Cát Lái khi hoàn thành): kết nối TP.HCM trong 15–20 phút",
                    ]} />
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Vị trí ngay trung tâm hành chính huyện giúp cư dân tiếp cận đầy đủ các dịch
                      vụ công cộng, đồng thời tạo nền tảng cho khả năng thanh khoản tốt hơn khi
                      cần chuyển nhượng trong tương lai.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                      <LinkBtn href="/mega-city-2/vi-tri">Vị trí chi tiết →</LinkBtn>
                    </div>
                  </ReasonStep>

                  <ArticleFigure src={IMG_NEWS11["2"]} alt="Vị trí dự án Mega City 2 trên trục đường 25C"
                    caption="Vị trí dự án Mega City 2 trên trục đường 25C, trung tâm huyện Nhơn Trạch"
                    images={images} index={1} onOpen={openLightbox} />

                  <ReasonStep num={2} title="Hưởng lợi trực tiếp từ hệ thống hạ tầng giao thông vùng">
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Nhơn Trạch đang được đầu tư mạnh vào hệ thống giao thông với nhiều công trình
                      lớn đang triển khai đồng thời — điều tạo ra làn sóng quan tâm từ giới đầu tư:
                    </p>
                    <BulletList items={[
                      "Sân bay quốc tế Long Thành (~18 km): dự án hàng không trọng điểm quốc gia đang thi công",
                      "Cầu Cát Lái (dự kiến): rút ngắn kết nối với TP.HCM xuống còn 15–20 phút",
                      "Đường Vành đai 3 TP.HCM: hoàn thiện hệ thống giao thông vùng phía Nam",
                      "Cao tốc Bến Lức – Long Thành: mở rộng kết nối các tỉnh kinh tế trọng điểm",
                      "Cao tốc TP.HCM – Long Thành – Dầu Giây: đang khai thác, kết nối toàn vùng",
                    ]} />
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Mỗi dự án hạ tầng hoàn thành đều đóng góp vào việc nâng cao khả năng kết nối
                      của Nhơn Trạch, từ đó tạo thêm nhu cầu ở thực và đầu tư trong khu vực.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <LinkBtn href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach">Sân bay Long Thành & BĐS Nhơn Trạch →</LinkBtn>
                      <LinkBtn href="/tin-tuc/cao-toc-bien-hoa-vung-tau">Cao tốc Biên Hòa - Vũng Tàu →</LinkBtn>
                    </div>
                  </ReasonStep>

                  <ArticleFigure src={IMG_NEWS11["3"]} alt="Hạ tầng giao thông kết nối khu vực Nhơn Trạch"
                    caption="Hệ thống hạ tầng giao thông đang được đầu tư đồng bộ tại khu vực Nhơn Trạch"
                    images={images} index={2} onOpen={openLightbox} />

                  <ReasonStep num={3} title="Quy hoạch bài bản với hệ thống tiện ích đồng bộ">
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Mega City 2 có quy mô khoảng 84 ha với hơn 2.400 sản phẩm, được quy hoạch
                      theo mô hình khu đô thị hiện đại. Điều này tạo ra sự khác biệt đáng kể so
                      với đất tự phát hoặc đất nông nghiệp chưa chuyển đổi:
                    </p>
                    <BulletList items={[
                      "Công viên và không gian xanh: hành lang xanh nội khu tạo môi trường sống trong lành",
                      "Trường học nội khu theo quy hoạch: tiện ích thiết yếu cho gia đình có con",
                      "Trung tâm thương mại: đáp ứng nhu cầu mua sắm và dịch vụ tại chỗ",
                      "Khu vui chơi và khu thể thao: nâng cao chất lượng sống và giao lưu cộng đồng",
                      "Trung tâm y tế: chăm sóc sức khỏe ngay trong khu đô thị",
                      "Hạ tầng kỹ thuật đồng bộ: đường nội khu, điện, nước, thoát nước hoàn chỉnh",
                    ]} />
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Việc đầu tư bài bản vào hệ thống tiện ích không chỉ nâng cao chất lượng
                      sống mà còn là yếu tố quan trọng duy trì và gia tăng giá trị bất động sản
                      theo thời gian — đặc biệt khi khu vực xung quanh tiếp tục phát triển.
                    </p>
                    <LinkBtn href="/mega-city-2/tien-ich">Xem chi tiết tiện ích →</LinkBtn>
                  </ReasonStep>

                  <ArticleFigure src={IMG_NEWS11["4"]} alt="Tiện ích nội khu tại dự án Mega City 2"
                    caption="Hệ thống tiện ích nội khu được đầu tư đồng bộ tại Mega City 2 Nhơn Trạch"
                    images={images} index={3} onOpen={openLightbox} />

                  <ReasonStep num={4} title="Mức giá còn phù hợp so với mặt bằng thị trường">
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      So với nhiều khu vực có đặc điểm tương đương tại TP. Hồ Chí Minh, giá bất
                      động sản tại Nhơn Trạch vẫn được đánh giá là còn nhiều dư địa tăng trưởng.
                      Mức giá của Mega City 2 phụ thuộc vào nhiều yếu tố:
                    </p>
                    <BulletList items={[
                      "Vị trí lô: mặt tiền đường lớn, góc, hay nằm sâu trong khu",
                      "Diện tích sản phẩm: từ nhà phố nhỏ đến các lô đất lớn hơn",
                      "Loại sản phẩm: nhà phố liền kề, nhà phố thương mại hay biệt thự",
                      "Tiến độ thanh toán: trả thẳng hay trả góp theo giai đoạn",
                      "Thời điểm giao dịch: giá thị trường thay đổi theo cung cầu",
                    ]} />
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Một số nguồn thông tin thị trường cho thấy giá chuyển nhượng tại dự án
                      đang dao động từ khoảng 1,3 tỷ đồng trở lên, tùy từng vị trí và thời điểm
                      giao dịch. Để có mức giá chính xác nhất, cần tham khảo trực tiếp.
                    </p>
                    <LinkBtn href="/mega-city-2/bang-gia">Xem bảng giá tham khảo →</LinkBtn>
                  </ReasonStep>

                  <ReasonStep num={5} title="Tiềm năng tăng giá trong dài hạn theo định hướng đô thị vệ tinh">
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Thị trường bất động sản thường chịu tác động trực tiếp từ quy hoạch, hạ
                      tầng, tốc độ đô thị hóa và nhu cầu dân cư. Nhơn Trạch đang hội tụ đồng
                      thời cả bốn yếu tố này:
                    </p>
                    <BulletList items={[
                      "Quy hoạch: được định hướng trở thành đô thị vệ tinh TP.HCM theo quy hoạch tỉnh Đồng Nai đến 2030",
                      "Hạ tầng: nhiều dự án giao thông lớn đang thi công đồng thời",
                      "Đô thị hóa: dân số và mật độ dân cư tăng nhanh theo sự phát triển của khu công nghiệp",
                      "Nhu cầu: áp lực nhà ở từ TP.HCM đang lan tỏa ra các khu vực lân cận như Nhơn Trạch",
                    ]} />
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Đối với Mega City 2, việc nằm gần nhiều công trình giao thông trọng điểm
                      và có pháp lý rõ ràng (QĐ 1772/QĐ-UBND) được xem là yếu tố quan trọng
                      hỗ trợ giá trị bất động sản trong dài hạn. Tuy nhiên, cần nhấn mạnh rằng
                      tiềm năng dài hạn không đảm bảo tăng giá ngắn hạn.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <LinkBtn href="/tin-tuc/gia-dat-nhon-trach-2026">Giá đất Nhơn Trạch 2026 →</LinkBtn>
                      <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Quy hoạch Nhơn Trạch →</LinkBtn>
                    </div>
                  </ReasonStep>

                  <ArticleFigure src={IMG_NEWS11["5"]} alt="Tiềm năng đầu tư bất động sản tại Nhơn Trạch"
                    caption="Nhơn Trạch đang phát triển nhanh theo định hướng đô thị vệ tinh TP.HCM"
                    images={images} index={4} onOpen={openLightbox} />

                </div>
              </section>

              {/* Tóm tắt */}
              <section className="mb-12">
                <SectionHeading>Tóm tắt: Mega City 2 phù hợp với nhà đầu tư nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dựa trên phân tích 5 lý do trên, Mega City 2 có thể phù hợp với những nhà đầu tư:
                  </p>
                  <BulletList items={[
                    "Muốn sở hữu bất động sản có pháp lý rõ ràng tại Nhơn Trạch với quy hoạch bài bản",
                    "Có kế hoạch đầu tư dài hạn 3–5 năm và không cần thanh khoản ngay",
                    "Quan tâm đến tiềm năng phát triển của khu vực gần sân bay Long Thành",
                    "Muốn đa dạng hóa danh mục bất động sản ngoài TP.HCM với mức giá hợp lý hơn",
                    "Tìm kiếm sản phẩm vừa có thể ở thực vừa có tiềm năng cho thuê hoặc tăng giá",
                  ]} />
                  <H3>Những điều cần lưu ý trước khi quyết định</H3>
                  <BulletList items={[
                    "Kiểm tra pháp lý cụ thể của lô đất bạn quan tâm — không phải tất cả lô đều giống nhau",
                    "Thực địa trực tiếp để đánh giá hiện trạng hạ tầng và khu vực xung quanh",
                    "Đánh giá khả năng tài chính thực tế — tránh dùng đòn bẩy quá mức",
                    "Xem xét phương thức thanh toán và các chính sách hỗ trợ hiện hành",
                    "Đọc kỹ hợp đồng, đặc biệt điều kiện xây dựng và thời hạn theo QĐ 1772",
                  ]} />
                  <InfoBox>
                    Xem đầy đủ thông tin dự án trước khi quyết định:{" "}
                    <a href="/mega-city-2" className="font-bold text-primary-700 underline">Tổng quan Mega City 2 →</a>
                  </InfoBox>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về đầu tư Mega City 2</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    {
                      q: "Có nên đầu tư Mega City 2 trong năm 2026 không?",
                      a: "Mega City 2 nhận được sự quan tâm nhờ vị trí thuận lợi, pháp lý rõ ràng với QĐ 1772/QĐ-UBND và hưởng lợi từ nhiều dự án hạ tầng lớn. Tuy nhiên, mỗi nhà đầu tư cần đánh giá khả năng tài chính, mục tiêu đầu tư và pháp lý cụ thể từng lô trước khi quyết định.",
                    },
                    {
                      q: "Mega City 2 nằm ở đâu?",
                      a: "Mega City 2 tọa lạc trên đường 25C, xã Phú Hội, huyện Nhơn Trạch, tỉnh Đồng Nai. Dự án kết nối thuận lợi với TP. Hồ Chí Minh, sân bay Long Thành (~18 km) và các tuyến cao tốc vùng.",
                    },
                    {
                      q: "Mega City 2 có những tiện ích gì?",
                      a: "Dự án được quy hoạch với nhiều tiện ích nội khu: công viên, trường học, trung tâm thương mại, khu vui chơi, khu thể thao và trung tâm y tế. Xem chi tiết tại trang tiện ích dự án.",
                    },
                    {
                      q: "Giá đất Mega City 2 hiện nay là bao nhiêu?",
                      a: "Giá chuyển nhượng phụ thuộc vào vị trí lô, diện tích, loại sản phẩm và thời điểm giao dịch. Một số nguồn thị trường cho thấy giá dao động từ khoảng 1,3 tỷ đồng trở lên. Tham khảo bảng giá mới nhất tại trang bảng giá dự án.",
                    },
                  ].map(({ q, a }) => (
                    <details key={q} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-200 transition-colors">
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-primary-700 select-none">
                        <span className="leading-snug">{q}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-primary-600 transition-transform group-open:rotate-180 text-xs">▼</span>
                      </summary>
                      <div className="px-6 pb-5 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-[16px] leading-relaxed">{a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài mang tính tham khảo và không phải tư vấn đầu tư tài chính.
                  Giá trị bất động sản có thể thay đổi theo thị trường. Trước khi giao dịch, cần xác
                  nhận pháp lý và thông tin cụ thể từ chủ đầu tư hoặc cơ quan nhà nước có thẩm quyền.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu Mega City 2</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/mega-city-2",           label: "Tổng quan dự án" },
                      { href: "/mega-city-2/vi-tri",     label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",    label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",    label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",   label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",   label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang",   label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/hinh-anh",   label: "Hình ảnh thực tế" },
                      { href: "/mega-city-2/thanh-toan", label: "Phương thức thanh toán" },
                      { href: "/mega-city-2/faq",        label: "FAQ dự án" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600
                                   hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2
                                   rounded-xl hover:bg-white">
                        <span>{l.label}</span>
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Giá đất Nhơn Trạch 2026", href: "/tin-tuc/gia-dat-nhon-trach-2026" },
                      { label: "Kinh nghiệm mua đất nền Nhơn Trạch", href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach" },
                      { label: "Sân bay Long Thành & BĐS Nhơn Trạch", href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" },
                      { label: "Quy hoạch Nhơn Trạch mới nhất", href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-primary-200 text-xs mb-4">Nhận thông tin pháp lý và bảng giá Mega City 2.</p>
                  <a href="tel:0937587438"
                    className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">
                    0937.587.438
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-primary-50 border-t border-primary-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Khám phá dự án Mega City 2</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem đầy đủ thông tin về vị trí, pháp lý, tiện ích và bảng giá dự án Mega City 2
              tại Nhơn Trạch, Đồng Nai.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700
                           text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">
                Xem dự án →
              </a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600
                           text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            { href: "/mega-city-2",                                           title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",            description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá dự án.", tag: "Dự án" },
            { href: "/mega-city-2/phap-ly",                                   title: "Pháp lý Mega City 2 – QĐ 1772/QĐ-UBND",               description: "Chi tiết pháp lý và điều kiện giao dịch tại dự án Mega City 2.", tag: "Pháp lý" },
            { href: "/tin-tuc/gia-dat-nhon-trach-2026",                       title: "Giá đất Nhơn Trạch 2026 mới nhất",                    description: "Bảng giá, thị trường và các khu vực tiềm năng tại Nhơn Trạch.", tag: "Thị trường" },
            { href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach",            title: "Kinh nghiệm mua đất nền Nhơn Trạch từ A-Z",           description: "Hướng dẫn kiểm tra pháp lý, quy hoạch và những lưu ý quan trọng.", tag: "Kinh nghiệm" },
            { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach", title: "Sân bay Long Thành & BĐS Nhơn Trạch",                 description: "Tác động của sân bay Long Thành đến thị trường bất động sản Nhơn Trạch.", tag: "Hạ tầng" },
            { href: "/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach",          title: "Có nên đầu tư Mega City 2 Nhơn Trạch?",               description: "Phân tích chi tiết tiềm năng đầu tư Mega City 2 năm 2026.", tag: "Phân tích" },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
