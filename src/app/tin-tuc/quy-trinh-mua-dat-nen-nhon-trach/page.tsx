"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS23 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/quy-trinh-mua-dat-nen-nhon-trach`;
const PUBLISHED     = "23/08/2026";
const PUBLISHED_ISO = "2026-08-23";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Quy trình mua đất nền Nhơn Trạch từ A–Z: 8 bước cần biết năm 2026",
  description: "Tìm hiểu quy trình mua đất nền Nhơn Trạch từ A–Z gồm kiểm tra pháp lý, quy hoạch, khảo sát thực tế, thương lượng, đặt cọc, công chứng và sang tên.",
  image: [IMG_NEWS23["1"], IMG_NEWS23["2"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "quy trình mua đất nền nhơn trạch, thủ tục mua đất nhơn trạch, đặt cọc mua đất, công chứng mua bán đất, sang tên sổ đỏ",
  about: { "@type": "Place", name: "Nhơn Trạch, Đồng Nai", address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" } },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Mua đất nền Nhơn Trạch bắt đầu từ đâu?",
      acceptedAnswer: { "@type": "Answer", text: "Nên bắt đầu bằng việc xác định mục đích mua, ngân sách và loại tài sản phù hợp. Sau đó mới tìm kiếm sản phẩm và kiểm tra pháp lý." } },
    { "@type": "Question", name: "Có nên đặt cọc trước khi kiểm tra quy hoạch không?",
      acceptedAnswer: { "@type": "Answer", text: "Không nên vội đặt cọc khi chưa kiểm tra pháp lý và quy hoạch. Một thửa đất có giấy chứng nhận vẫn có thể nằm trong khu vực quy hoạch giao thông hoặc công trình công cộng." } },
    { "@type": "Question", name: "Sau khi đặt cọc thì làm gì?",
      acceptedAnswer: { "@type": "Answer", text: "Các bên thực hiện các bước tiếp theo theo thỏa thuận, thường bao gồm hoàn thiện hợp đồng chuyển nhượng, công chứng/chứng thực và làm thủ tục đăng ký biến động theo quy định." } },
    { "@type": "Question", name: "Mua đất nền có cần sang tên không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Việc chuyển nhượng quyền sử dụng đất cần được đăng ký theo quy định để cập nhật quyền sử dụng đất cho người nhận chuyển nhượng." } },
    { "@type": "Question", name: "Bao lâu thì sang tên xong?",
      acceptedAnswer: { "@type": "Answer", text: "Thời gian xử lý phụ thuộc vào hồ sơ, tình trạng pháp lý, cơ quan tiếp nhận và từng trường hợp cụ thể. Không nên áp dụng một mốc thời gian cố định cho tất cả giao dịch." } },
    { "@type": "Question", name: "Mua đất nền dự án cần kiểm tra gì thêm?",
      acceptedAnswer: { "@type": "Answer", text: "Ngoài thông tin sản phẩm, nên kiểm tra pháp lý dự án, chủ đầu tư, quy hoạch, hạ tầng, hợp đồng và các điều kiện liên quan đến việc chuyển nhượng theo trường hợp cụ thể." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Quy trình mua đất nền Nhơn Trạch", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS23["1"], alt: "Quy trình mua đất nền Nhơn Trạch Đồng Nai năm 2026",          caption: "Người mua nên thực hiện từng bước từ nhu cầu, pháp lý, quy hoạch đến ký kết và hoàn tất giao dịch" },
  { src: IMG_NEWS23["2"], alt: "Bản đồ quy hoạch Nhơn Trạch cần kiểm tra trước khi mua đất",  caption: "Kiểm tra quy hoạch giúp người mua hiểu rõ mục đích sử dụng và các định hướng phát triển liên quan" },
  { src: IMG_NEWS23["3"], alt: "Công chứng và sang tên khi mua đất nền Nhơn Trạch",            caption: "Sau khi thống nhất giao dịch, các bên cần hoàn thiện hợp đồng và thực hiện thủ tục đăng ký" },
  { src: IMG_NEWS23["4"], alt: "Mega City 2 Nhơn Trạch thông tin mua đất nền",                caption: "Người quan tâm Mega City 2 nên tìm hiểu vị trí, pháp lý, bảng giá và tiến độ trước khi giao dịch" },
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
function BuocCard({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
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

export default function QuyTrinhMuaDatPage() {
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
              <span className="text-slate-600 font-medium">Quy trình mua đất nền Nhơn Trạch</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Thị trường</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 12 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Quy trình mua đất nền Nhơn Trạch từ A–Z: 8 bước cần biết năm 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Hướng dẫn 8 bước quy trình mua đất nền Nhơn Trạch từ kiểm tra pháp lý, quy
              hoạch, khảo sát thực tế, thương lượng, đặt cọc đến công chứng và sang tên.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh quy trình mua đất Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS23["1"]} alt="Quy trình mua đất nền Nhơn Trạch năm 2026"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Người mua nên thực hiện từng bước kiểm tra từ nhu cầu, pháp lý, quy hoạch đến ký kết và hoàn tất giao dịch
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
                    ["#8-buoc",        "Tổng quan 8 bước quy trình"],
                    ["#buoc-1",        "Bước 1: Xác định mục đích và ngân sách"],
                    ["#buoc-2",        "Bước 2: Tìm kiếm sản phẩm"],
                    ["#buoc-3",        "Bước 3: Kiểm tra pháp lý"],
                    ["#buoc-4",        "Bước 4: Kiểm tra quy hoạch"],
                    ["#buoc-5",        "Bước 5: Khảo sát thực tế"],
                    ["#buoc-6",        "Bước 6: So sánh giá và thương lượng"],
                    ["#buoc-7",        "Bước 7: Ký hợp đồng đặt cọc"],
                    ["#buoc-8",        "Bước 8: Công chứng và sang tên"],
                    ["#chi-phi",       "Chi phí cần chuẩn bị"],
                    ["#du-an",         "Mua đất dự án khác gì đất cá nhân?"],
                    ["#mega-city-2",   "Tìm hiểu Mega City 2"],
                    ["#sai-lam",       "7 sai lầm thường gặp"],
                    ["#checklist",     "Checklist 17 bước"],
                    ["#faq",           "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Mua đất nền là một quyết định tài chính có giá trị lớn. Người mua không nên chỉ
                quan tâm đến giá bán hoặc vị trí mà cần nắm rõ toàn bộ quy trình giao dịch.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Đối với thị trường Nhơn Trạch, người mua có thể bắt gặp nhiều loại sản phẩm từ
                đất ở trong khu dân cư hiện hữu đến đất nền thuộc các dự án, khu đô thị đang
                phát triển. Mỗi loại có đặc điểm pháp lý và quy trình giao dịch khác nhau.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Bài viết mang tính chất thông tin tham khảo. Hồ sơ,
                nghĩa vụ tài chính và thủ tục cụ thể có thể khác nhau tùy loại đất, chủ thể
                giao dịch và từng trường hợp thực tế.
              </InfoBox>

              {/* 8 bước tổng quan */}
              <section className="mb-12">
                <SectionHeading id="8-buoc">Quy trình mua đất nền Nhơn Trạch gồm những bước nào?</SectionHeading>
                <div className="pt-5">
                  <div className="rounded-2xl bg-primary-50 border border-primary-200 px-6 py-5 mb-6">
                    <p className="font-bold text-primary-800 text-sm mb-4">8 bước tổng quan:</p>
                    <div className="space-y-2">
                      {[
                        "Bước 1 — Xác định mục đích mua và ngân sách",
                        "Bước 2 — Tìm kiếm và lựa chọn sản phẩm",
                        "Bước 3 — Kiểm tra pháp lý",
                        "Bước 4 — Kiểm tra quy hoạch và hạ tầng",
                        "Bước 5 — Khảo sát thực tế khu đất",
                        "Bước 6 — So sánh giá và thương lượng",
                        "Bước 7 — Ký hợp đồng đặt cọc",
                        "Bước 8 — Công chứng, thực hiện nghĩa vụ tài chính và sang tên",
                      ].map((buoc, i) => (
                        <div key={buoc} className="flex items-center gap-3 text-sm text-primary-800">
                          <div className="w-6 h-6 rounded-lg bg-primary-600 text-white font-black text-xs flex items-center justify-center flex-shrink-0">{i + 1}</div>
                          <span>{buoc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <InfoBox type="warn">
                    Không nên bỏ qua các bước kiểm tra chỉ vì muốn mua nhanh hoặc sợ mất cơ hội.
                  </InfoBox>
                </div>
              </section>

              {/* Bước 1 */}
              <section className="mb-8">
                <SectionHeading id="buoc-1">Bước 1 – Xác định mục đích mua và ngân sách</SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { title: "Mua để ở", items: ["Đất phù hợp quy hoạch", "Khu dân cư hiện hữu", "Hạ tầng cơ bản", "Gần trường, chợ, y tế", "Khả năng xây dựng"] },
                      { title: "Đầu tư dài hạn", items: ["Vị trí chiến lược", "Pháp lý rõ ràng", "Quy hoạch ổn định", "Hạ tầng phát triển", "Thanh khoản tốt"] },
                      { title: "Kinh doanh", items: ["Mặt tiền đường", "Lưu lượng giao thông", "Mật độ dân cư", "Khả năng khai thác", "Quy định xây dựng"] },
                    ].map((card) => (
                      <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <p className="font-bold text-primary-700 text-sm mb-3">{card.title}</p>
                        <ul className="space-y-1">
                          {card.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-[13px] text-slate-600">
                              <span className="text-primary-400 flex-shrink-0">•</span>{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Về ngân sách: không nên chỉ tính số tiền trả cho thửa đất. Cần dự trù thêm
                    các khoản chi phí giao dịch, thủ tục, vay vốn và xây dựng nếu có. Nếu dùng
                    đòn bẩy, cần tính dòng tiền và khả năng trả nợ trong kịch bản xấu.
                  </p>
                </div>
              </section>

              {/* Bước 2 */}
              <section className="mb-8">
                <SectionHeading id="buoc-2">Bước 2 – Tìm kiếm và lựa chọn sản phẩm phù hợp</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Có thể tìm kiếm qua website bất động sản, môi giới, chủ sở hữu hoặc người quen
                    giới thiệu. Tuy nhiên, thông tin quảng cáo chỉ nên là bước tham khảo ban đầu.
                  </p>
                  <InfoBox type="warn">
                    Không nên quyết định chỉ vì: <em>"Giá rẻ nhất khu vực", "Đón đầu hạ tầng",
                    "Chắc chắn sinh lời"</em>. Những thông tin này cần được kiểm tra bằng dữ
                    liệu thực tế.
                  </InfoBox>
                </div>
              </section>

              {/* Bước 3 */}
              <section className="mb-8">
                <SectionHeading id="buoc-3">Bước 3 – Kiểm tra pháp lý của thửa đất</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là một trong những bước quan trọng nhất. Người mua không nên chỉ nhìn vào
                    việc "có sổ" mà cần kiểm tra đầy đủ thông tin liên quan.
                  </p>
                  <BulletList items={[
                    "Giấy chứng nhận quyền sử dụng đất và người đứng tên",
                    "Số thửa, số tờ bản đồ, diện tích",
                    "Mục đích sử dụng đất và thời hạn sử dụng",
                    "Tình trạng thế chấp, tranh chấp và hạn chế quyền sử dụng",
                    "Điều kiện chuyển nhượng theo quy định hiện hành",
                  ]} />
                  <InfoBox type="warn">
                    Không nên chỉ xem ảnh chụp giấy tờ qua Zalo rồi vội chuyển tiền. Với giao
                    dịch giá trị lớn, nên xác minh thông tin trực tiếp tại cơ quan có thẩm quyền
                    hoặc tham khảo ý kiến công chứng viên / chuyên gia pháp lý.
                  </InfoBox>
                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-1-500-nhon-trach">Quy hoạch 1/500 Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Bước 4 */}
              <section className="mb-8">
                <SectionHeading id="buoc-4">Bước 4 – Kiểm tra quy hoạch trước khi đặt cọc</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Có giấy chứng nhận không đồng nghĩa với việc bỏ qua kiểm tra quy hoạch.
                    Quy hoạch có thể ảnh hưởng đến mục đích sử dụng, khả năng xây dựng, lộ giới
                    và giá trị thực tế của khu đất.
                  </p>
                  <BulletList items={[
                    "Quy hoạch sử dụng đất và kế hoạch sử dụng đất",
                    "Quy hoạch giao thông, lộ giới và chỉ giới xây dựng",
                    "Quy hoạch khu dân cư và các công trình liên quan",
                    "Các dự án hạ tầng có thể ảnh hưởng đến khu đất",
                  ]} />
                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Quy hoạch Nhơn Trạch 2026 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-1-500-nhon-trach">Quy hoạch 1/500 →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS23["2"]} alt="Bản đồ quy hoạch Nhơn Trạch cần kiểm tra trước khi mua đất"
                caption="Kiểm tra quy hoạch giúp người mua hiểu rõ mục đích sử dụng và các định hướng phát triển liên quan đến khu đất"
                images={images} index={1} onOpen={openLightbox} />

              {/* Bước 5 */}
              <section className="mb-8">
                <SectionHeading id="buoc-5">Bước 5 – Khảo sát thực tế khu đất</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không nên mua chỉ dựa trên bản đồ hoặc hình ảnh. Khi khảo sát thực địa, cần
                    kiểm tra:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Vị trí & đường giao thông", items: ["Khoảng cách đến đường chính", "Đường rộng bao nhiêu mét", "Xe ô tô vào được không", "Chất lượng mặt đường"] },
                      { title: "Môi trường & tiện ích", items: ["Mức độ dân cư xung quanh", "Có ngập nước không", "Tiếng ồn, ô nhiễm", "Trường học, chợ, y tế"] },
                    ].map((group) => (
                      <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <p className="font-bold text-slate-700 text-sm mb-3">{group.title}</p>
                        <ul className="space-y-1.5">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-[13px] text-slate-600">
                              <span className="text-primary-400 flex-shrink-0">•</span>{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Bước 6 */}
              <section className="mb-8">
                <SectionHeading id="buoc-6">Bước 6 – So sánh giá và thương lượng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trước khi thương lượng, hãy khảo sát các sản phẩm tương tự. Không nên so sánh
                    hai thửa đất chỉ dựa vào giá tổng. Cần đối chiếu đồng thời giá/m², diện tích,
                    mặt tiền, pháp lý, đường vào và khả năng xây dựng.
                  </p>
                  <InfoBox>
                    Một thửa 1,5 tỷ chưa chắc rẻ hơn thửa 1,8 tỷ nếu vị trí, pháp lý và khả
                    năng sử dụng hoàn toàn khác nhau. Xem:{" "}
                    <a href="/tin-tuc/gia-dat-nhon-trach-2026" className="font-bold text-primary-700 underline">
                      Giá đất Nhơn Trạch 2026 →
                    </a>
                  </InfoBox>
                </div>
              </section>

              {/* Bước 7 */}
              <section className="mb-8">
                <SectionHeading id="buoc-7">Bước 7 – Ký hợp đồng đặt cọc</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hợp đồng đặt cọc cần ghi rõ đầy đủ:
                  </p>
                  <BulletList items={[
                    "Họ tên, giấy tờ tùy thân các bên",
                    "Thông tin tài sản đầy đủ (số thửa, tờ bản đồ, diện tích)",
                    "Giá chuyển nhượng và số tiền đặt cọc",
                    "Thời hạn đặt cọc và thời điểm ký hợp đồng chính thức",
                    "Phương thức thanh toán các đợt",
                    "Điều kiện hoàn trả tiền cọc và các trường hợp vi phạm",
                    "Bên nào chịu các chi phí liên quan đến giao dịch",
                  ]} />
                  <InfoBox type="warn">
                    Hợp đồng càng rõ ràng thì càng giảm nguy cơ tranh chấp. Không nên chỉ ghi
                    một câu đơn giản như <em>"Đặt cọc mua đất"</em>. Không chuyển khoản lớn chỉ
                    dựa trên giấy viết tay sơ sài.
                  </InfoBox>
                </div>
              </section>

              {/* Bước 8 */}
              <section className="mb-8">
                <SectionHeading id="buoc-8">Bước 8 – Công chứng, nghĩa vụ tài chính và sang tên</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sau khi hoàn tất các điều kiện giao dịch, các bên thực hiện hợp đồng chuyển
                    nhượng và thủ tục đăng ký biến động theo quy định hiện hành.
                  </p>
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5">
                    <p className="font-bold text-slate-700 text-sm mb-3">Trình tự chung:</p>
                    <div className="flex flex-col gap-2">
                      {[
                        "Ký hợp đồng chuyển nhượng",
                        "Hoàn thiện hồ sơ theo yêu cầu",
                        "Thực hiện nghĩa vụ tài chính theo thông báo",
                        "Nộp hồ sơ đăng ký biến động",
                        "Nhận kết quả và kiểm tra thông tin trên giấy chứng nhận",
                      ].map((step, i) => (
                        <div key={step} className="flex items-center gap-3 text-sm text-slate-700">
                          <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 font-black text-xs flex items-center justify-center flex-shrink-0">{i + 1}</div>
                          <span>{step}</span>
                          {i < 4 && <span className="text-slate-300 ml-auto text-xs">→</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                  <InfoBox>
                    Không nên áp dụng máy móc một danh sách hồ sơ từ bài viết cũ. Các quy định
                    về đăng ký biến động đã được cập nhật — nên kiểm tra danh mục hồ sơ thực tế
                    tại cơ quan có thẩm quyền hoặc đơn vị chuyên môn trước khi nộp.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS23["3"]} alt="Công chứng và sang tên khi mua đất nền Nhơn Trạch"
                caption="Sau khi thống nhất giao dịch, các bên cần hoàn thiện hợp đồng và thực hiện thủ tục đăng ký theo quy định"
                images={images} index={2} onOpen={openLightbox} />

              {/* Chi phí */}
              <section className="mb-12">
                <SectionHeading id="chi-phi">Người mua cần chuẩn bị bao nhiêu tiền?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ngoài giá mua, cần dự trù thêm các khoản liên quan đến giao dịch. Tùy từng
                    trường hợp có thể phát sinh: thuế, lệ phí, phí công chứng, phí hồ sơ đăng ký,
                    chi phí vay vốn và các khoản khác theo giao dịch cụ thể.
                  </p>
                  <InfoBox type="warn">
                    Không nên ước tính một con số cố định cho mọi trường hợp vì nghĩa vụ tài
                    chính phụ thuộc vào loại giao dịch, giá trị, chủ thể và quy định tại thời
                    điểm thực hiện. <strong>Trước khi ký hợp đồng, nên thống nhất rõ bên nào
                    chịu khoản chi phí nào.</strong>
                  </InfoBox>
                </div>
              </section>

              {/* Dự án vs cá nhân */}
              <section className="mb-12">
                <SectionHeading id="du-an">Mua đất nền dự án có giống mua đất cá nhân không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không hoàn toàn giống. Đối với đất nền trong dự án, người mua cần quan tâm
                    thêm đến pháp lý dự án, quyết định/chấp thuận liên quan, điều kiện đưa sản
                    phẩm vào kinh doanh, hợp đồng, tiến độ và nghĩa vụ của chủ đầu tư.
                  </p>
                  <InfoBox>
                    Không áp dụng nguyên xi quy trình mua đất cá nhân sang sản phẩm thuộc dự án.
                  </InfoBox>
                </div>
              </section>

              {/* Mega City 2 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Quy trình tìm hiểu Mega City 2 Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu đang quan tâm{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>,
                    hãy chia việc nghiên cứu thành từng nhóm thông tin riêng:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { href: "/mega-city-2",          label: "Tổng quan dự án" },
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí" },
                      { href: "/mega-city-2/phap-ly",   label: "Pháp lý" },
                      { href: "/mega-city-2/bang-gia",  label: "Bảng giá" },
                      { href: "/mega-city-2/tien-do",   label: "Tiến độ" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng" },
                      { href: "/mega-city-2/tien-ich",  label: "Tiện ích" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center gap-2 text-sm font-semibold text-primary-700 px-4 py-3 rounded-xl border border-primary-100 hover:border-primary-300 hover:bg-primary-50 transition-all">
                        <span className="text-primary-400">→</span>{l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS23["4"]} alt="Mega City 2 Nhơn Trạch thông tin mua đất nền"
                caption="Người quan tâm Mega City 2 nên tìm hiểu riêng về vị trí, pháp lý, bảng giá, mặt bằng và tiến độ trước khi giao dịch"
                images={images} index={3} onOpen={openLightbox} />

              {/* Sai lầm */}
              <section className="mb-12">
                <SectionHeading id="sai-lam">7 sai lầm thường gặp khi mua đất nền</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    ["Chỉ xem giá",                          "Giá rẻ không phải lúc nào cũng đồng nghĩa với cơ hội tốt."],
                    ["Không kiểm tra quy hoạch",             "Đây là bước không nên bỏ qua, đặc biệt nếu mua để xây nhà."],
                    ["Tin hoàn toàn vào lời quảng cáo",     "Thông tin quảng cáo cần được kiểm chứng bằng dữ liệu thực tế."],
                    ["Đặt cọc trước khi kiểm tra giấy tờ",  "Không nên đặt cọc khi thông tin cơ bản chưa được xác minh."],
                    ["Không đọc kỹ hợp đồng",               "Các điều khoản về tiền cọc, thời hạn và trách nhiệm cần được hiểu rõ."],
                    ["Vay quá khả năng",                     "Đòn bẩy cao tạo áp lực tài chính nếu kế hoạch không diễn ra như dự kiến."],
                    ["Chỉ dựa vào kỳ vọng tăng giá",        "Hạ tầng hỗ trợ phát triển nhưng không đảm bảo lợi nhuận cho tài sản cụ thể."],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-2xl border-l-4 border-red-400 bg-red-50 px-5 py-4">
                      <p className="font-bold text-red-800 mb-1">{title}</p>
                      <p className="text-red-700 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Checklist */}
              <section className="mb-12">
                <SectionHeading id="checklist">Checklist đầy đủ quy trình mua đất nền Nhơn Trạch</SectionHeading>
                <div className="pt-5">
                  <div className="rounded-2xl border border-slate-200 overflow-hidden">
                    {[
                      "Xác định mục đích mua",
                      "Xác định ngân sách toàn bộ",
                      "Tìm kiếm sản phẩm phù hợp",
                      "Kiểm tra giấy chứng nhận",
                      "Xác minh người có quyền chuyển nhượng",
                      "Kiểm tra mục đích sử dụng đất",
                      "Kiểm tra quy hoạch và lộ giới",
                      "Kiểm tra khả năng xây dựng",
                      "Khảo sát thực tế đường vào và hạ tầng",
                      "So sánh giá với tài sản tương đồng",
                      "Thương lượng điều kiện giao dịch",
                      "Thống nhất điều khoản hợp đồng đặt cọc",
                      "Ký hợp đồng đặt cọc",
                      "Hoàn thiện hợp đồng chuyển nhượng",
                      "Thực hiện nghĩa vụ tài chính",
                      "Nộp hồ sơ đăng ký biến động",
                      "Nhận và kiểm tra giấy chứng nhận mới",
                    ].map((item, i) => (
                      <div key={item} className={`flex items-center gap-4 px-5 py-3.5 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"} border-b border-slate-100 last:border-0`}>
                        <div className="w-7 h-7 rounded-lg bg-primary-100 text-primary-700 font-black text-xs flex items-center justify-center flex-shrink-0">{i + 1}</div>
                        <p className="text-slate-700 text-[15px]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về quy trình mua đất nền Nhơn Trạch</SectionHeading>
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
                <SectionHeading>Tìm hiểu thêm</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi",              label: "Mua đất Nhơn Trạch cần lưu ý gì?" },
                    { href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach",           label: "Kinh nghiệm mua đất nền Nhơn Trạch từ A–Z" },
                    { href: "/tin-tuc/nen-mua-dat-nen-nhon-trach-hay-dau-tu-can-ho", label: "Đất nền hay căn hộ Nhơn Trạch?" },
                    { href: "/tin-tuc/gia-dat-nhon-trach-2026",                      label: "Giá đất Nhơn Trạch 2026" },
                    { href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat",               label: "Quy hoạch Nhơn Trạch mới nhất 2026" },
                    { href: "/tin-tuc/quy-hoach-1-500-nhon-trach",                  label: "Quy hoạch 1/500 Nhơn Trạch" },
                    { href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat",      label: "Hạ tầng giao thông Nhơn Trạch" },
                    { href: "/tin-tuc/duong-25c",                                   label: "Đường 25C Nhơn Trạch" },
                    { href: "/tin-tuc/cau-nhon-trach",                              label: "Cầu Nhơn Trạch" },
                    { href: "/mega-city-2",                                         label: "Mega City 2 Nhơn Trạch" },
                    { href: "/mega-city-2/phap-ly",                                 label: "Pháp lý Mega City 2" },
                    { href: "/mega-city-2/bang-gia",                                label: "Bảng giá Mega City 2" },
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
                  Thông tin trong bài mang tính tham khảo. Hồ sơ, nghĩa vụ tài chính và thủ
                  tục cụ thể có thể khác nhau tùy loại đất và từng trường hợp thực tế. Cần
                  xác nhận thông tin chính thức từ cơ quan có thẩm quyền trước khi giao dịch.
                </p>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5">
                  <p className="font-bold text-primary-800 text-sm mb-3">8 bước quy trình</p>
                  <div className="space-y-1.5">
                    {["Xác định nhu cầu & ngân sách","Tìm kiếm sản phẩm","Kiểm tra pháp lý","Kiểm tra quy hoạch","Khảo sát thực tế","So sánh giá & thương lượng","Ký hợp đồng đặt cọc","Công chứng & sang tên"].map((s, i) => (
                      <div key={s} className="flex items-center gap-2 text-xs text-primary-700">
                        <div className="w-5 h-5 rounded-md bg-primary-600 text-white font-black text-[10px] flex items-center justify-center flex-shrink-0">{i + 1}</div>
                        <span>{s}</span>
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
                      { label: "Mua đất cần lưu ý gì?",         href: "/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi" },
                      { label: "Kinh nghiệm mua đất nền",        href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach" },
                      { label: "Quy hoạch 1/500 Nhơn Trạch",    href: "/tin-tuc/quy-hoach-1-500-nhon-trach" },
                      { label: "Giá đất Nhơn Trạch 2026",       href: "/tin-tuc/gia-dat-nhon-trach-2026" },
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
              Xem thông tin dự án theo từng chuyên mục để có đầy đủ cơ sở trước khi đưa ra quyết định.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">Xem dự án →</a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">Gọi 0937.587.438</a>
            </div>
          </div>
        </section>

        <RelatedContent title="Bài viết liên quan" items={[
          { href: "/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi",              title: "Mua đất Nhơn Trạch cần lưu ý gì? 10 điều quan trọng",    description: "10 yếu tố pháp lý, quy hoạch, vị trí, hạ tầng cần kiểm tra trước khi mua.", tag: "Thị trường" },
          { href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach",           title: "Kinh nghiệm mua đất nền Nhơn Trạch từ A–Z",              description: "Tổng hợp kinh nghiệm kiểm tra pháp lý, quy hoạch và sai lầm cần tránh.", tag: "Thị trường" },
          { href: "/tin-tuc/quy-hoach-1-500-nhon-trach",                   title: "Quy hoạch 1/500 Nhơn Trạch: Cách đọc bản đồ",           description: "Hướng dẫn đọc bản đồ quy hoạch chi tiết trước khi mua đất.", tag: "Quy hoạch" },
          { href: "/mega-city-2",                                           title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",              description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá.", tag: "Dự án" },
        ]} />
        <CorpFooter />
      </div>
    </>
  );
}
