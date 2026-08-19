"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS13 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/lich-su-phat-trien-kim-oanh-group`;
const PUBLISHED     = "19/08/2026";
const PUBLISHED_ISO = "2026-08-19";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lịch sử hình thành và phát triển của Kim Oanh Group",
  description: "Khám phá hành trình phát triển của Kim Oanh Group từ những ngày đầu thành lập đến khi trở thành một trong những thương hiệu bất động sản nổi bật tại Việt Nam.",
  image: [IMG_NEWS13["1"], IMG_NEWS13["2"], IMG_NEWS13["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "Kim Oanh Group, lịch sử Kim Oanh Group, quá trình phát triển Kim Oanh Group, tập đoàn Kim Oanh",
  about: { "@type": "Organization", name: "Kim Oanh Group", url: BASE_URL },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Lịch sử Kim Oanh Group", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS13["1"], alt: "Logo Kim Oanh Group",                                    caption: "Logo thương hiệu Kim Oanh Group" },
  { src: IMG_NEWS13["2"], alt: "Hành trình phát triển của Kim Oanh Group",               caption: "Hành trình phát triển của Kim Oanh Group" },
  { src: IMG_NEWS13["3"], alt: "Các dự án bất động sản do Kim Oanh Group phát triển",    caption: "Các dự án bất động sản của Kim Oanh Group" },
  { src: IMG_NEWS13["4"], alt: "Hệ sinh thái bất động sản của Kim Oanh Group",           caption: "Hệ sinh thái bất động sản Kim Oanh Group" },
];

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-primary-400 scroll-mt-24">{children}</h2>;
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
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">{children}</a>;
}

export default function LichSuKimOanhGroupPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
              <span className="text-slate-600 font-medium">Lịch sử Kim Oanh Group</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Thông tin Kim Oanh</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 8 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Lịch sử hình thành và phát triển của Kim Oanh Group
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Khám phá hành trình phát triển của Kim Oanh Group từ những ngày đầu thành lập đến
              khi trở thành một trong những thương hiệu bất động sản nổi bật tại Việt Nam.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh Kim Oanh Group"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS13["1"]} alt="Logo Kim Oanh Group" className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">Thương hiệu Kim Oanh Group — hành trình hơn 20 năm phát triển</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#dau-moc",    "1. Những dấu mốc quan trọng"],
                    ["#mo-rong",   "2. Quá trình mở rộng hệ sinh thái"],
                    ["#thanh-tuu", "3. Những thành tựu nổi bật"],
                    ["#dinh-huong","4. Định hướng phát triển tương lai"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Kim Oanh Group là một trong những thương hiệu bất động sản có hành trình phát triển
                lâu dài tại thị trường Việt Nam. Từ những bước đi đầu tiên trong lĩnh vực bất động
                sản, Kim Oanh Group đã từng bước khẳng định vị thế và xây dựng danh tiếng thông qua
                các dự án được triển khai bài bản, có pháp lý rõ ràng.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-8">
                Bài viết này tổng hợp những thông tin về lịch sử hình thành, các dấu mốc phát triển
                và định hướng của Kim Oanh Group trong giai đoạn hiện tại.
              </p>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="dau-moc">Những dấu mốc quan trọng của Kim Oanh Group</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hành trình phát triển của Kim Oanh Group gắn liền với sự phát triển của thị
                    trường bất động sản tại vùng kinh tế trọng điểm phía Nam, đặc biệt là khu vực
                    Đồng Nai và TP. Hồ Chí Minh.
                  </p>
                  <BulletList items={[
                    "Thành lập và bước đầu xây dựng nền tảng kinh doanh bất động sản tại miền Nam",
                    "Triển khai các dự án khu dân cư đầu tiên tại khu vực Đồng Nai, tạo dấu ấn về chất lượng",
                    "Mở rộng quy mô hoạt động, phát triển thêm các phân khúc sản phẩm đa dạng",
                    "Xây dựng thương hiệu Kim Oanh Group với định hướng minh bạch và bền vững",
                    "Phát triển hệ sinh thái bất động sản toàn diện tại nhiều tỉnh thành",
                  ]} />
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS13["2"]} alt="Hành trình phát triển của Kim Oanh Group"
                caption="Hành trình phát triển của Kim Oanh Group qua nhiều năm"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="mo-rong">Quá trình mở rộng hệ sinh thái bất động sản</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Từ những dự án khu dân cư ban đầu, Kim Oanh Group dần mở rộng sang nhiều phân
                    khúc và khu vực khác nhau, xây dựng hệ sinh thái bất động sản đa dạng phục vụ
                    nhiều nhóm khách hàng:
                  </p>
                  <BulletList items={[
                    "Đất nền và nhà phố liền kề tại các khu đô thị mới quy hoạch đồng bộ",
                    "Biệt thự và nhà ở cao cấp đáp ứng nhu cầu khách hàng có thu nhập cao",
                    "Khu công nghiệp và bất động sản thương mại phục vụ doanh nghiệp",
                    "Các dịch vụ hỗ trợ: tư vấn pháp lý, thiết kế, xây dựng và quản lý vận hành",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 tại Nhơn Trạch, Đồng Nai là một trong những dự án tiêu biểu của
                    Kim Oanh Group — với quy mô ~83,94 ha, hơn 2.400 sản phẩm và pháp lý được
                    công nhận qua QĐ 1772/QĐ-UBND của UBND tỉnh Đồng Nai.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tìm hiểu Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý dự án →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS13["3"]} alt="Các dự án bất động sản do Kim Oanh Group phát triển"
                caption="Các dự án bất động sản tiêu biểu do Kim Oanh Group phát triển"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="thanh-tuu">Những thành tựu nổi bật của Kim Oanh Group</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Qua nhiều năm hoạt động, Kim Oanh Group đã ghi dấu ấn thông qua nhiều thành
                    tựu đáng chú ý trong lĩnh vực bất động sản:
                  </p>
                  <BulletList items={[
                    "Hàng nghìn sản phẩm đã bàn giao đúng tiến độ, đảm bảo chất lượng cho khách hàng",
                    "Xây dựng được uy tín trong lĩnh vực pháp lý minh bạch và hồ sơ rõ ràng",
                    "Được nhiều khách hàng tín nhiệm và giới thiệu qua kênh truyền miệng",
                    "Phát triển thành công nhiều khu dân cư đang hoạt động sôi động tại Đồng Nai",
                    "Đóng góp vào quá trình đô thị hóa và phát triển kinh tế khu vực phía Nam",
                  ]} />
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="dinh-huong">Định hướng phát triển trong tương lai</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Kim Oanh Group tiếp tục định hướng phát triển theo hướng bền vững, tập trung
                    vào chất lượng sản phẩm và trải nghiệm khách hàng. Một số định hướng chiến
                    lược trong giai đoạn tới:
                  </p>
                  <BulletList items={[
                    "Tiếp tục phát triển các dự án đô thị quy mô lớn tại Đồng Nai và các tỉnh lân cận",
                    "Nâng cao chất lượng hạ tầng và tiện ích nội khu tại các dự án đang triển khai",
                    "Tăng cường minh bạch pháp lý và thông tin dự án đến khách hàng",
                    "Phát triển các dự án K-Home và Mega City theo hướng đô thị thông minh, hiện đại",
                    "Mở rộng hệ sinh thái dịch vụ đi kèm bất động sản",
                  ]} />
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/">Trang chủ Kim Oanh Đồng Nai →</LinkBtn>
                    <LinkBtn href="/mega-city-2">Mega City 2 Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS13["4"]} alt="Hệ sinh thái bất động sản của Kim Oanh Group"
                caption="Hệ sinh thái bất động sản đa dạng của Kim Oanh Group"
                images={images} index={3} onOpen={openLightbox} />

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Lưu ý</p>
                <p className="text-xs text-slate-500 leading-relaxed">Thông tin trong bài được tổng hợp từ nguồn công khai. Để biết thêm thông tin chính thức về Kim Oanh Group, vui lòng liên hệ trực tiếp hoặc truy cập website chính thức.</p>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Dự án nổi bật</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/mega-city-2",           label: "Mega City 2 Nhơn Trạch" },
                      { href: "/mega-city-2/vi-tri",     label: "Vị trí & Kết nối vùng" },
                      { href: "/mega-city-2/phap-ly",    label: "Pháp lý dự án" },
                      { href: "/mega-city-2/bang-gia",   label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",   label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/tien-do",    label: "Tiến độ xây dựng" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white">
                        <span>{l.label}</span><span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-primary-200 text-xs mb-4">Nhận thông tin về dự án Kim Oanh tại Đồng Nai.</p>
                  <a href="tel:0937587438" className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">0937.587.438</a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-primary-50 border-t border-primary-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Khám phá các dự án mới nhất</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">Khám phá thêm các dự án mới nhất của Kim Oanh Đồng Nai ngay hôm nay.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">Mega City 2 Nhơn Trạch →</a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">Gọi 0937.587.438</a>
            </div>
          </div>
        </section>

        <RelatedContent title="Bài viết liên quan" items={[
          { href: "/mega-city-2",                          title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",    description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá dự án.", tag: "Dự án" },
          { href: "/tin-tuc/5-ly-do-nen-dau-tu-mega-city-2", title: "5 Lý Do Nên Đầu Tư Mega City 2 2026",       description: "Phân tích vị trí, hạ tầng, tiện ích và tiềm năng dài hạn.", tag: "Phân tích" },
          { href: "/tin-tuc/phap-ly-mega-city-2",          title: "Pháp lý Mega City 2 – QĐ 1772/QĐ-UBND",      description: "Chi tiết pháp lý và điều kiện giao dịch tại dự án Mega City 2.", tag: "Pháp lý" },
          { href: "/tin-tuc/gia-dat-nhon-trach-2026",       title: "Giá đất Nhơn Trạch 2026 mới nhất",           description: "Bảng giá, thị trường và các khu vực tiềm năng tại Nhơn Trạch.", tag: "Thị trường" },
        ]} />
      </div>
      <CorpFooter />
    </>
  );
}
