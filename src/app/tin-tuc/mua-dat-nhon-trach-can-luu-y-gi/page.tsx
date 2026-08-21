"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS22 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi`;
const PUBLISHED     = "22/08/2026";
const PUBLISHED_ISO = "2026-08-22";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mua đất Nhơn Trạch cần lưu ý gì? 10 điều quan trọng người mua cần biết năm 2026",
  description: "Mua đất Nhơn Trạch cần lưu ý gì? Cùng tìm hiểu 10 yếu tố quan trọng về pháp lý, quy hoạch, vị trí, giá bán, hạ tầng và tài chính trước khi mua đất năm 2026.",
  image: [IMG_NEWS22["1"], IMG_NEWS22["2"], IMG_NEWS22["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "mua đất nhơn trạch, kinh nghiệm mua đất nhơn trạch, lưu ý khi mua đất nhơn trạch, pháp lý đất nhơn trạch, quy hoạch nhơn trạch",
  about: {
    "@type": "Place", name: "Nhơn Trạch, Đồng Nai",
    address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question", name: "Mua đất Nhơn Trạch cần kiểm tra gì đầu tiên?",
      acceptedAnswer: { "@type": "Answer", text: "Nên ưu tiên kiểm tra pháp lý, người có quyền chuyển nhượng, quy hoạch và mục đích sử dụng đất trước khi xem xét sâu hơn về giá." },
    },
    {
      "@type": "Question", name: "Có nên mua đất Nhơn Trạch gần đường lớn không?",
      acceptedAnswer: { "@type": "Answer", text: "Vị trí gần đường lớn có thể có lợi thế về kết nối, nhưng cần kiểm tra thực tế đường, lộ giới, tiếng ồn, khả năng tiếp cận và quy hoạch trước khi quyết định." },
    },
    {
      "@type": "Question", name: "Mua đất Nhơn Trạch có cần kiểm tra quy hoạch không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Quy hoạch có thể ảnh hưởng đến mục đích sử dụng, khả năng xây dựng và giá trị của tài sản. Không nên bỏ qua bước này trước khi giao dịch." },
    },
    {
      "@type": "Question", name: "Giá đất Nhơn Trạch có chắc chắn tăng theo hạ tầng không?",
      acceptedAnswer: { "@type": "Answer", text: "Không. Hạ tầng là một yếu tố có thể tác động đến giá trị bất động sản nhưng không đảm bảo giá tăng. Giá còn phụ thuộc vào pháp lý, quy hoạch, cung cầu và nhiều yếu tố thị trường khác." },
    },
    {
      "@type": "Question", name: "Có nên vay ngân hàng để mua đất Nhơn Trạch?",
      acceptedAnswer: { "@type": "Answer", text: "Điều này phụ thuộc vào khả năng tài chính. Người mua cần tính toán dòng tiền, lãi suất và khả năng trả nợ trong kịch bản thị trường không diễn biến như kỳ vọng." },
    },
    {
      "@type": "Question", name: "Có nên mua đất chỉ vì gần sân bay Long Thành?",
      acceptedAnswer: { "@type": "Answer", text: "Không nên quyết định chỉ dựa trên khoảng cách đến sân bay. Cần đánh giá tổng thể vị trí, pháp lý, quy hoạch, hạ tầng và mức giá." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Mua đất Nhơn Trạch cần lưu ý gì?", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS22["1"], alt: "Mua đất Nhơn Trạch Đồng Nai năm 2026",                              caption: "Thị trường đất Nhơn Trạch được quan tâm trong bối cảnh hạ tầng và đô thị khu vực phát triển" },
  { src: IMG_NEWS22["2"], alt: "Bản đồ quy hoạch Nhơn Trạch Đồng Nai năm 2026",                     caption: "Kiểm tra quy hoạch là bước quan trọng để xác định mục đích sử dụng và các thông tin liên quan" },
  { src: IMG_NEWS22["3"], alt: "Hạ tầng giao thông và đường vào khu đất tại Nhơn Trạch",             caption: "Người mua nên khảo sát trực tiếp đường vào, hạ tầng và khả năng kết nối trước khi mua đất" },
  { src: IMG_NEWS22["4"], alt: "Khu dân cư và hoạt động đô thị tại Nhơn Trạch Đồng Nai",            caption: "Mật độ dân cư và hoạt động kinh tế thực tế là yếu tố nên quan sát khi đánh giá bất động sản" },
  { src: IMG_NEWS22["5"], alt: "Mega City 2 Nhơn Trạch thông tin dành cho người mua đất",           caption: "Người quan tâm Mega City 2 nên kiểm tra vị trí, pháp lý, giá bán và tiến độ trước khi quyết định" },
];

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-primary-400 scroll-mt-24">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-6">{children}</h3>;
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
  const s = type === "warn" ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-primary-50 border-primary-200 text-primary-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">{children}</a>;
}
function LuuY({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-primary-200 transition-colors">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-600 text-white font-black text-sm flex items-center justify-center">{num}</div>
      <div className="flex-1">
        <p className="font-bold text-slate-800 mb-2">{title}</p>
        <div className="text-slate-600 text-[15px] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function MuaDatNhonTrachPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}
      <CorpHeader solid />
      <div className="bg-white min-h-screen">

        {/* Hero */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a><span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a><span>/</span>
              <span className="text-slate-600 font-medium">Mua đất Nhơn Trạch cần lưu ý gì?</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Thị trường</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 12 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Mua đất Nhơn Trạch cần lưu ý gì? 10 điều quan trọng người mua cần biết năm 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              10 yếu tố quan trọng về pháp lý, quy hoạch, vị trí, giá bán, hạ tầng và tài
              chính cần kiểm tra trước khi mua đất Nhơn Trạch năm 2026.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh mua đất Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS22["1"]} alt="Mua đất Nhơn Trạch cần lưu ý gì năm 2026"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Thị trường đất Nhơn Trạch được quan tâm trong bối cảnh hạ tầng và không gian đô thị khu vực tiếp tục phát triển
            </p>
          </div>
        </div>

        {/* Main */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#vi-sao",      "Vì sao Nhơn Trạch được quan tâm?"],
                    ["#10-luu-y",    "10 điều quan trọng cần lưu ý"],
                    ["#ha-tang",     "Gần hạ tầng có chắc tăng giá?"],
                    ["#dau-tu-dai-han","Có nên mua để đầu tư dài hạn?"],
                    ["#mega-city-2", "Nếu đang tìm Mega City 2"],
                    ["#checklist",   "Checklist 12 bước trước khi mua"],
                    ["#sai-lam",     "5 sai lầm thường gặp"],
                    ["#faq",         "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Nhơn Trạch là một trong những khu vực được nhiều người quan tâm khi tìm hiểu
                bất động sản tại Đồng Nai, đặc biệt trong bối cảnh hệ thống hạ tầng giao thông
                tiếp tục được đầu tư và kết nối với TP.HCM, sân bay Long Thành và các địa phương
                lân cận.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Tuy nhiên, việc thị trường nhận được nhiều sự quan tâm không có nghĩa mọi sản
                phẩm đất tại Nhơn Trạch đều phù hợp để mua. Một thửa đất có vị trí đẹp nhưng
                pháp lý chưa rõ ràng, quy hoạch không phù hợp hoặc mức giá quá cao vẫn có thể
                tiềm ẩn rủi ro.
              </p>
              <InfoBox type="warn">
                <strong>Nguyên tắc quan trọng:</strong> Trước khi xuống tiền, hãy kiểm tra đồng
                thời: <strong>Pháp lý → Quy hoạch → Vị trí → Hạ tầng → Giá → Tài chính → Hợp
                đồng → Thanh khoản.</strong>
              </InfoBox>

              {/* Vì sao */}
              <section className="mb-12">
                <SectionHeading id="vi-sao">Vì sao nhiều người quan tâm đến đất Nhơn Trạch?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch có vị trí kết nối giữa Đồng Nai, TP.HCM, Bà Rịa – Vũng Tàu và
                    các khu vực kinh tế lân cận. Thị trường được quan tâm một phần nhờ sự phát
                    triển của hệ thống giao thông với nhiều công trình đang triển khai:
                  </p>
                  <BulletList items={[
                    <><a href="/tin-tuc/cau-nhon-trach" className="text-primary-700 font-semibold hover:underline">Cầu Nhơn Trạch</a> — đã khánh thành 19/8/2025, khai thác từ 20/8/2025</>,
                    <><a href="/tin-tuc/duong-25c" className="text-primary-700 font-semibold hover:underline">Đường 25C</a> — trục giao thông huyết mạch chạy dọc huyện Nhơn Trạch</>,
                    <><a href="/tin-tuc/vanh-dai-3" className="text-primary-700 font-semibold hover:underline">Vành đai 3 TP.HCM</a> — tuyến vành đai liên vùng đang được đẩy nhanh tiến độ</>,
                    <><a href="/tin-tuc/cao-toc-ben-luc-long-thanh" className="text-primary-700 font-semibold hover:underline">Cao tốc Bến Lức – Long Thành</a> — mục tiêu hoàn thành quý III/2026</>,
                    <><a href="/tin-tuc/cau-cat-lai" className="text-primary-700 font-semibold hover:underline">Cầu Cát Lái</a> và{" "}<a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="text-primary-700 font-semibold hover:underline">Sân bay Long Thành</a> — các dự án trọng điểm quốc gia</>,
                  ]} />
                  <InfoBox type="warn">
                    Người mua cần phân biệt giữa hạ tầng đã hiện hữu, công trình đang triển khai
                    và định hướng quy hoạch. Không nên sử dụng thông tin hạ tầng tương lai như
                    yếu tố duy nhất để quyết định mua đất.
                  </InfoBox>
                </div>
              </section>

              {/* 10 lưu ý */}
              <section className="mb-12">
                <SectionHeading id="10-luu-y">10 điều quan trọng khi mua đất Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-4">

                  <LuuY num="1" title="Kiểm tra pháp lý — bước quan trọng nhất">
                    Cần xác định: người đứng tên, số thửa, số tờ bản đồ, diện tích, mục đích
                    sử dụng đất, thời hạn sử dụng, tình trạng thế chấp, tranh chấp và điều
                    kiện chuyển nhượng. Không nên chỉ xem bản photo hay nghe từ người bán.
                    Giao dịch giá trị lớn nên xác minh tại cơ quan có thẩm quyền.
                  </LuuY>

                  <LuuY num="2" title="Kiểm tra quy hoạch khu đất">
                    Một thửa đất có giấy chứng nhận vẫn có thể nằm trong khu vực quy hoạch
                    giao thông, cây xanh hoặc công trình công cộng. Cần tìm hiểu: quy hoạch
                    sử dụng đất, lộ giới, chỉ giới xây dựng và khả năng xây dựng thực tế.
                  </LuuY>

                  <LuuY num="3" title="Xác định chính xác vị trí thửa đất">
                    Hai thửa đất cùng khu vực nhưng có thể khác nhau hoàn toàn về giá trị.
                    Nên mở bản đồ, xác định vị trí thực tế, kiểm tra khoảng cách đến đường
                    lớn, khu dân cư, trường học, chợ và các tuyến giao thông chính.
                  </LuuY>

                  <LuuY num="4" title="Khảo sát đường vào và hạ tầng thực tế">
                    Không nên tin vào mô tả "gần đường lớn" hay "kết nối thuận tiện" mà chưa
                    tự kiểm tra. Cần xác định đường vào rộng bao nhiêu, xe ô tô có tiếp cận
                    được không, chất lượng mặt đường và hạ tầng điện, nước, thoát nước.
                  </LuuY>

                  <LuuY num="5" title="So sánh giá trước khi quyết định">
                    Tìm các tài sản tương đồng để so sánh theo: vị trí, diện tích, mặt tiền,
                    loại đất, pháp lý, đường giao thông và khoảng cách đến tiện ích. Giá thấp
                    hơn không mặc nhiên là lựa chọn tốt hơn nếu pháp lý hoặc vị trí kém hơn.
                  </LuuY>

                  <LuuY num="6" title="Xác định rõ mục đích mua đất">
                    Mua để ở, đầu tư dài hạn hay kinh doanh — mỗi mục đích cần tiêu chí đánh
                    giá khác nhau. Mua để ở ưu tiên hạ tầng, tiện ích và khả năng xây dựng.
                    Đầu tư dài hạn tập trung vào vị trí, pháp lý và thanh khoản.
                  </LuuY>

                  <LuuY num="7" title="Tính toán khả năng tài chính toàn diện">
                    Tổng ngân sách gồm: giá mua, thuế phí, công chứng, chi phí vay, xây dựng
                    nếu có và chi phí phát sinh. Nếu dùng vốn vay, cần tính khả năng trả nợ
                    trong trường hợp thu nhập giảm hoặc lãi suất thay đổi.
                  </LuuY>

                  <LuuY num="8" title="Kiểm tra người bán và tình trạng giao dịch">
                    Cần xác minh người giao dịch có quyền chuyển nhượng hay không. Đặc biệt
                    chú ý khi người bán không phải người đứng tên, giao dịch qua ủy quyền,
                    có đồng sở hữu, liên quan thừa kế hoặc đất đang thế chấp.
                  </LuuY>

                  <LuuY num="9" title="Đọc kỹ hợp đồng đặt cọc">
                    Hợp đồng cần thể hiện rõ: thông tin tài sản, giá chuyển nhượng, số tiền
                    đặt cọc, thời hạn, phương thức thanh toán, trách nhiệm hai bên và điều
                    kiện hoàn trả tiền cọc. Không chuyển khoản lớn chỉ dựa trên giấy viết tay.
                  </LuuY>

                  <LuuY num="10" title="Kiểm tra khả năng thanh khoản">
                    Một tài sản tốt cần có người mua khi cần bán lại. Xem xét: nhu cầu giao
                    dịch trong khu vực, số lượng sản phẩm tương tự, pháp lý và hạ tầng. Thanh
                    khoản đặc biệt quan trọng với người có kế hoạch đầu tư ngắn–trung hạn.
                  </LuuY>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS22["2"]} alt="Bản đồ quy hoạch Nhơn Trạch Đồng Nai năm 2026"
                caption="Kiểm tra quy hoạch là bước quan trọng trước khi mua đất để xác định mục đích sử dụng và các thông tin liên quan"
                images={images} index={1} onOpen={openLightbox} />

              <ArticleFigure src={IMG_NEWS22["3"]} alt="Hạ tầng giao thông và đường vào khu đất tại Nhơn Trạch"
                caption="Người mua nên khảo sát trực tiếp đường vào, hạ tầng và khả năng kết nối trước khi quyết định mua đất"
                images={images} index={2} onOpen={openLightbox} />

              {/* Gần hạ tầng */}
              <section className="mb-12">
                <SectionHeading id="ha-tang">Mua đất gần các tuyến hạ tầng lớn có chắc chắn tăng giá không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Câu trả lời là <strong>không thể khẳng định chắc chắn.</strong> Hạ tầng có
                    thể cải thiện khả năng kết nối và thúc đẩy hoạt động kinh tế khu vực, nhưng
                    giá bất động sản còn chịu ảnh hưởng bởi nhiều yếu tố khác: cung cầu, mức
                    giá ban đầu, pháp lý, quy hoạch, tiện ích, dân cư và chính sách tín dụng.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nên xem hạ tầng là một yếu tố trong tổng thể phân tích, không phải lời đảm
                    bảo về lợi nhuận.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach">Sân bay Long Thành & BĐS Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/tin-tuc/cao-toc-ben-luc-long-thanh">Cao tốc Bến Lức - Long Thành →</LinkBtn>
                    <LinkBtn href="/tin-tuc/cao-toc-bien-hoa-vung-tau">Cao tốc Biên Hòa - Vũng Tàu →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Đầu tư dài hạn */}
              <section className="mb-12">
                <SectionHeading id="dau-tu-dai-han">Có nên mua đất Nhơn Trạch để đầu tư dài hạn?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch có nhiều yếu tố khiến thị trường được quan tâm. Tuy nhiên, việc
                    có nên mua hay không phụ thuộc vào từng tài sản cụ thể.
                  </p>
                  <div className="rounded-2xl bg-primary-50 border border-primary-200 px-6 py-5">
                    <p className="font-bold text-primary-800 mb-3 text-sm">Một sản phẩm có thể đáng cân nhắc khi đáp ứng đồng thời:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {["Pháp lý rõ ràng", "Vị trí phù hợp", "Giá hợp lý", "Quy hoạch phù hợp", "Hạ tầng thực tế", "Khả năng tài chính"].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-primary-700">
                          <span className="text-emerald-500 font-bold">✓</span>{item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/gia-dat-nhon-trach-2026">Giá đất Nhơn Trạch 2026 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/nen-mua-dat-nen-nhon-trach-hay-dau-tu-can-ho">Đất nền hay căn hộ? →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Mega City 2 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Nếu đang tìm hiểu Mega City 2 thì cần kiểm tra gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu mục tiêu là tìm hiểu{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2 Nhơn Trạch</a>,
                    nên tách việc tìm hiểu dự án thành từng nhóm thông tin riêng biệt:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí",    desc: "Kết nối giao thông và vùng" },
                      { href: "/mega-city-2/phap-ly",   label: "Pháp lý",   desc: "QĐ 1772/QĐ-UBND và hồ sơ" },
                      { href: "/mega-city-2/bang-gia",  label: "Bảng giá",  desc: "Sản phẩm và chính sách" },
                      { href: "/mega-city-2/tien-do",   label: "Tiến độ",   desc: "Tình hình thi công thực tế" },
                      { href: "/mega-city-2/tien-ich",  label: "Tiện ích",  desc: "Hạ tầng nội khu" },
                      { href: "/mega-city-2",           label: "Tổng quan", desc: "Quy mô và thông tin chung" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-all">
                        <div>
                          <p className="text-sm font-bold text-primary-700">{l.label} →</p>
                          <p className="text-xs text-slate-500">{l.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS22["4"]} alt="Khu dân cư và hoạt động đô thị tại Nhơn Trạch Đồng Nai"
                caption="Mật độ dân cư và hoạt động kinh tế thực tế là những yếu tố nên quan sát khi đánh giá bất động sản"
                images={images} index={3} onOpen={openLightbox} />

              <ArticleFigure src={IMG_NEWS22["5"]} alt="Mega City 2 Nhơn Trạch thông tin dành cho người mua đất"
                caption="Người quan tâm Mega City 2 nên kiểm tra riêng vị trí, pháp lý, giá bán và tiến độ trước khi quyết định"
                images={images} index={4} onOpen={openLightbox} />

              {/* Checklist */}
              <section className="mb-12">
                <SectionHeading id="checklist">Checklist 12 bước trước khi mua đất Nhơn Trạch</SectionHeading>
                <div className="pt-5">
                  <div className="rounded-2xl border border-slate-200 overflow-hidden">
                    {[
                      "Xác định mục đích mua đất",
                      "Xác định ngân sách toàn bộ (không chỉ giá đất)",
                      "Kiểm tra người đứng tên tài sản",
                      "Kiểm tra giấy chứng nhận",
                      "Kiểm tra mục đích sử dụng đất",
                      "Kiểm tra quy hoạch và lộ giới",
                      "Kiểm tra khả năng xây dựng theo quy định",
                      "Khảo sát đường vào và hạ tầng thực tế",
                      "So sánh giá với tài sản tương đồng",
                      "Kiểm tra tình trạng thế chấp hoặc tranh chấp",
                      "Đọc kỹ và hiểu rõ hợp đồng đặt cọc",
                      "Chuẩn bị phương án tài chính sau khi mua",
                    ].map((item, i) => (
                      <div key={item} className={`flex items-center gap-4 px-5 py-3.5 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"} border-b border-slate-100 last:border-0`}>
                        <div className="w-7 h-7 rounded-lg bg-primary-100 text-primary-700 font-black text-xs flex items-center justify-center flex-shrink-0">{i + 1}</div>
                        <p className="text-slate-700 text-[15px]">{item}</p>
                      </div>
                    ))}
                  </div>
                  <InfoBox type="warn">
                    Nếu chưa kiểm tra được một trong những yếu tố quan trọng trên, không nên
                    vội chuyển khoản chỉ vì lo mất cơ hội.
                  </InfoBox>
                </div>
              </section>

              {/* Sai lầm */}
              <section className="mb-12">
                <SectionHeading id="sai-lam">5 sai lầm người mua đất Nhơn Trạch nên tránh</SectionHeading>
                <div className="pt-5 space-y-4">
                  {[
                    ["Chỉ nghe thông tin từ môi giới",    "Môi giới có thể cung cấp thông tin tham khảo nhưng người mua vẫn cần tự kiểm chứng các thông tin quan trọng."],
                    ["Chỉ quan tâm giá rẻ",               "Giá thấp không đồng nghĩa với tài sản tốt. Một tài sản rẻ hơn nhưng pháp lý chưa rõ hoặc vị trí kém có thể gây rủi ro lớn hơn."],
                    ["Không kiểm tra quy hoạch",           "Đây là lỗi có thể ảnh hưởng trực tiếp đến mục đích sử dụng đất — đặc biệt nếu mua để xây nhà."],
                    ["Đặt cọc quá nhanh",                  "Không nên đặt cọc khi chưa xác minh những thông tin cơ bản về tài sản, dù người bán tạo áp lực thời gian."],
                    ["Sử dụng đòn bẩy quá cao",            "Nếu thị trường không diễn biến như kỳ vọng, áp lực tài chính có thể buộc phải bán tài sản ở thời điểm không thuận lợi."],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-2xl border-l-4 border-red-400 bg-red-50 px-5 py-4">
                      <p className="font-bold text-red-800 mb-1">{title}</p>
                      <p className="text-red-700 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về mua đất Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details key={name} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-200 transition-colors">
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-primary-700 select-none">
                        <span className="leading-snug">{name}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-primary-600 transition-transform group-open:rotate-180 text-xs">▼</span>
                      </summary>
                      <div className="px-6 pb-5 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-[16px] leading-relaxed">{acceptedAnswer.text}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Tìm hiểu thêm về đất nền và Mega City 2 Nhơn Trạch</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach",          label: "Kinh nghiệm mua đất nền Nhơn Trạch từ A–Z" },
                    { href: "/tin-tuc/nen-mua-dat-nen-nhon-trach-hay-dau-tu-can-ho",label: "Nên mua đất nền hay đầu tư căn hộ?" },
                    { href: "/tin-tuc/gia-dat-nhon-trach-2026",                      label: "Giá đất Nhơn Trạch 2026" },
                    { href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat",               label: "Quy hoạch Nhơn Trạch mới nhất 2026" },
                    { href: "/tin-tuc/quy-hoach-1-500-nhon-trach",                  label: "Quy hoạch 1/500 Nhơn Trạch" },
                    { href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat",      label: "Hạ tầng giao thông Nhơn Trạch" },
                    { href: "/mega-city-2",                                          label: "Mega City 2 Nhơn Trạch" },
                    { href: "/mega-city-2/vi-tri",                                   label: "Vị trí Mega City 2" },
                    { href: "/mega-city-2/phap-ly",                                  label: "Pháp lý Mega City 2" },
                    { href: "/mega-city-2/bang-gia",                                 label: "Bảng giá Mega City 2" },
                  ].map((l) => (
                    <a key={l.href} href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50">
                      <span className="text-primary-400 flex-shrink-0">→</span><span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài mang tính tham khảo. Không phải khuyến nghị đầu tư. Trước
                  khi giao dịch, cần kiểm tra pháp lý, quy hoạch và thẩm định tài sản cụ thể
                  từ cơ quan có thẩm quyền.
                </p>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Quick checklist */}
                <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5">
                  <p className="font-bold text-primary-800 text-sm mb-3">Checklist nhanh</p>
                  <div className="space-y-1.5">
                    {["Pháp lý","Quy hoạch","Vị trí","Hạ tầng","Giá","Tài chính","Hợp đồng","Thanh khoản"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-primary-700">
                        <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>{item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu Mega City 2</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/mega-city-2",          label: "Tổng quan dự án" },
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",  label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/hinh-anh",  label: "Hình ảnh thực tế" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white">
                        <span>{l.label}</span><span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Kinh nghiệm mua đất nền",     href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach" },
                      { label: "Đất nền hay căn hộ?",          href: "/tin-tuc/nen-mua-dat-nen-nhon-trach-hay-dau-tu-can-ho" },
                      { label: "Quy hoạch 1/500 Nhơn Trạch",  href: "/tin-tuc/quy-hoach-1-500-nhon-trach" },
                      { label: "Giá đất Nhơn Trạch 2026",     href: "/tin-tuc/gia-dat-nhon-trach-2026" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">→ {l.label}</a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-primary-200 text-xs mb-4">Nhận thông tin pháp lý và bảng giá Mega City 2.</p>
                  <a href="tel:0937587438" className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">0937.587.438</a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-primary-50 border-t border-primary-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Đang tìm hiểu Mega City 2 Nhơn Trạch?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem thông tin dự án theo từng chuyên mục: vị trí, pháp lý, tiến độ và bảng giá để
              có đầy đủ cơ sở trước khi đưa ra quyết định.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">Xem dự án →</a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">Gọi 0937.587.438</a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            { href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach",          title: "Kinh nghiệm mua đất nền Nhơn Trạch từ A–Z",             description: "Tổng hợp kinh nghiệm kiểm tra pháp lý, quy hoạch và những sai lầm cần tránh.", tag: "Thị trường" },
            { href: "/tin-tuc/nen-mua-dat-nen-nhon-trach-hay-dau-tu-can-ho",title: "Nên mua đất nền hay đầu tư căn hộ Nhơn Trạch?",          description: "So sánh ưu nhược điểm, vốn, pháp lý và tiềm năng của từng loại hình.", tag: "Thị trường" },
            { href: "/tin-tuc/quy-hoach-1-500-nhon-trach",                  title: "Quy hoạch 1/500 Nhơn Trạch: Cách đọc bản đồ",           description: "Hướng dẫn đọc bản đồ quy hoạch chi tiết và kiểm tra pháp lý trước khi mua.", tag: "Quy hoạch" },
            { href: "/mega-city-2",                                          title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",              description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá dự án Mega City 2.", tag: "Dự án" },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
