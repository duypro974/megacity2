import type { Metadata } from "next";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import Link from "next/link";
import { IMG_NEWS14 } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Đường 25C Nhơn Trạch: Tiến Độ Mới Nhất 2026 Và Tác Động Đến Mega City 2",
  description:
    "Cập nhật tiến độ đường 25C Nhơn Trạch mới nhất năm 2026. Phân tích khả năng kết nối đến sân bay Long Thành và tác động của hạ tầng đến dự án Mega City 2.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/duong-25c" },
  keywords: ["đường 25c nhơn trạch", "đường 25c đồng nai", "tiến độ đường 25c", "đường 25c sân bay long thành", "hạ tầng nhơn trạch", "mega city 2 nhơn trạch"],
  openGraph: {
    title: "Đường 25C Nhơn Trạch: Tiến Độ 2026 Và Tác Động Đến Mega City 2",
    description: "Tiến độ đường 25C, kết nối sân bay Long Thành và tác động đến BĐS Nhơn Trạch — phân tích đầy đủ 2026.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: IMG_NEWS14["1"], width: 1280, height: 720, alt: "Toàn cảnh tuyến đường 25C kết nối trung tâm Nhơn Trạch với sân bay Long Thành" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đường 25C Nhơn Trạch Mới Nhất 2026",
    description: "Tiến độ và tác động của đường 25C đến bất động sản Nhơn Trạch và dự án Mega City 2.",
    images: [IMG_NEWS14["1"]],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Đường 25C Nhơn Trạch: Tiến độ mới nhất năm 2026 và tác động đến Mega City 2",
  description: "Cập nhật tiến độ đường 25C Nhơn Trạch mới nhất năm 2026 và phân tích tác động đến dự án Mega City 2.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/duong-25c",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Đường 25C nằm ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đường 25C là tuyến đường quan trọng kết nối nhiều khu vực tại huyện Nhơn Trạch, tỉnh Đồng Nai. Tuyến đường đi qua trung tâm hành chính huyện, kết nối với các khu công nghiệp, khu đô thị mới và hướng đến sân bay Long Thành.",
      },
    },
    {
      "@type": "Question",
      name: "Đường 25C có kết nối với sân bay Long Thành không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo quy hoạch, đường 25C là một trong những trục giao thông quan trọng giúp tăng cường khả năng kết nối giữa Nhơn Trạch và khu vực Long Thành, nơi sân bay quốc tế Long Thành đang được xây dựng.",
      },
    },
    {
      "@type": "Question",
      name: "Đường 25C có ảnh hưởng đến giá bất động sản không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hạ tầng giao thông là một trong những yếu tố quan trọng tác động đến giá trị bất động sản. Những khu vực nằm gần tuyến đường lớn như đường 25C thường có lợi thế kết nối, khả năng thương mại và tiềm năng phát triển tốt hơn trong dài hạn.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có được hưởng lợi từ đường 25C không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 tọa lạc trực tiếp trên đường 25C tại xã Phú Hội, Nhơn Trạch. Vị trí này mang lại khả năng kết nối trực tiếp đến sân bay Long Thành (~18 km), TP.HCM qua phà Cát Lái và hệ thống cao tốc vùng.",
      },
    },
  ],
};

const roadFacts = [
  { label: "Vị trí",             val: "Nhơn Trạch, Đồng Nai" },
  { label: "Kết nối sân bay",    val: "~18 km" },
  { label: "Đến TP.HCM",         val: "Qua phà Cát Lái" },
  { label: "Loại đường",         val: "Trục giao thông liên vùng" },
];

export default function Duong25CPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Hạ tầng giao thông"
          title="Đường 25C Nhơn Trạch 2026"
          subtitle="Tiến độ mới nhất, khả năng kết nối đến sân bay Long Thành và tác động của đường 25C đến dự án Mega City 2 Nhơn Trạch."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Đường 25C" },
          ]}
          updatedAt="08/2026"
        />

        {/* Disclaimer */}
        <section className="py-6 bg-amber-50 border-b border-amber-200">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-amber-700 leading-relaxed anim-up">
              <strong>Lưu ý:</strong> Thông tin về tiến độ đường 25C tổng hợp từ nguồn công khai.
              Tiến độ thực tế phụ thuộc quyết định của cơ quan có thẩm quyền. Phân tích tác động
              BĐS mang tính tham khảo, không phải cam kết tăng giá.
            </p>
          </div>
        </section>

        {/* ── Section 1: Đường 25C là gì? ── */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 anim-up">
              Đường 25C Nhơn Trạch là gì?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 anim-up anim-delay-100">
              Việc phát triển hạ tầng giao thông đang trở thành động lực quan trọng thúc đẩy
              thị trường bất động sản tại Nhơn Trạch, Đồng Nai. Trong đó, đường 25C được xem
              là một trong những tuyến giao thông chiến lược, đóng vai trò kết nối giữa trung
              tâm hành chính Nhơn Trạch với sân bay Long Thành và nhiều khu vực trọng điểm.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 anim-up anim-delay-150">
              Theo quy hoạch, tuyến đường này góp phần hoàn thiện mạng lưới giao thông của khu
              vực, tạo điều kiện thuận lợi cho việc di chuyển giữa Nhơn Trạch và TP. Hồ Chí
              Minh, đồng thời kết nối các khu công nghiệp và đô thị mới trong vùng.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 anim-stagger">
              {roadFacts.map((f) => (
                <div key={f.label} className="rounded-2xl bg-primary-50 border border-primary-100 p-4 text-center anim-card">
                  <p className="text-base font-black text-primary-700">{f.val}</p>
                  <p className="text-[11px] text-slate-500 mt-1">{f.label}</p>
                </div>
              ))}
            </div>

            {/* Hero image */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[16/7] anim-up anim-delay-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS14["1"]}
                alt="Toàn cảnh tuyến đường 25C kết nối trung tâm Nhơn Trạch với sân bay Long Thành"
                className="w-full h-full object-cover" loading="eager" />
            </div>
            <p className="text-xs text-slate-400 italic text-center mt-2 anim-up">
              Toàn cảnh tuyến đường 25C kết nối trung tâm Nhơn Trạch với sân bay Long Thành
            </p>
          </div>
        </section>

        {/* ── Section 2: Vị trí ── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-4 anim-up">
              Vị trí của đường 25C trong mạng lưới giao thông Nhơn Trạch
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5 anim-up anim-delay-100">
              Đường 25C là tuyến đường quan trọng trong quy hoạch phát triển hạ tầng của Nhơn
              Trạch. Tuyến đường kết nối nhiều khu vực chiến lược:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 anim-stagger">
              {[
                { icon: "🏛️", title: "Trung tâm hành chính Nhơn Trạch", desc: "Trục đường đi qua khu vực trung tâm hành chính huyện, thuận tiện tiếp cận các cơ quan nhà nước và dịch vụ công cộng." },
                { icon: "🏘️", title: "Khu đô thị mới", desc: "Kết nối các khu dân cư và đô thị mới đang phát triển dọc hành lang, trong đó có dự án Mega City 2." },
                { icon: "🏭", title: "Các khu công nghiệp", desc: "Tiếp cận hệ thống 6 khu công nghiệp Nhơn Trạch đang hoạt động với hàng chục nghìn lao động." },
                { icon: "✈️", title: "Sân bay Long Thành", desc: "Trục kết nối trực tiếp đến sân bay quốc tế Long Thành, cách khoảng 18 km." },
                { icon: "🛣️", title: "Hệ thống cao tốc", desc: "Kết nối với cao tốc TP.HCM – Long Thành – Dầu Giây và mạng lưới giao thông liên vùng." },
                { icon: "🌉", title: "TP. Hồ Chí Minh", desc: "Thông qua phà Cát Lái và tuyến đường ven sông, kết nối Nhơn Trạch với Quận 2, TP.Thủ Đức." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5 anim-card">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Bản đồ / ảnh 2 */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[16/7] anim-up">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS14["2"]}
                alt="Bản đồ quy hoạch tuyến đường 25C tại huyện Nhơn Trạch, tỉnh Đồng Nai"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="text-xs text-slate-400 italic text-center mt-2 anim-up">
              Bản đồ quy hoạch tuyến đường 25C tại huyện Nhơn Trạch, tỉnh Đồng Nai
            </p>

            <div className="mt-6 flex flex-wrap gap-3 anim-up">
              <Link href="/mega-city-2"
                className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
                Mega City 2 Nhơn Trạch →
              </Link>
              <Link href="/mega-city-2/vi-tri"
                className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
                Vị trí dự án →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 3: Tiến độ ── */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-4 anim-up">
              Tiến độ đường 25C mới nhất năm 2026
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 anim-up anim-delay-100">
              Tiến độ xây dựng và nâng cấp đường 25C đang được nhiều nhà đầu tư quan tâm theo
              dõi. Việc triển khai các hạng mục hạ tầng quan trọng không chỉ góp phần cải
              thiện khả năng kết nối mà còn tạo động lực phát triển cho thị trường bất động
              sản trong khu vực.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 anim-up anim-delay-150">
              Nhà đầu tư nên thường xuyên cập nhật thông tin từ các cơ quan chức năng để theo
              dõi những thay đổi mới nhất liên quan đến quy hoạch và tiến độ thi công. Thông
              tin chính thức được công bố bởi UBND huyện Nhơn Trạch và Sở Giao thông Vận tải
              tỉnh Đồng Nai.
            </p>

            {/* Ảnh tiến độ */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[16/7] anim-up">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS14["3"]}
                alt="Hình ảnh thực tế tiến độ thi công tuyến đường 25C tại Nhơn Trạch năm 2026"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="text-xs text-slate-400 italic text-center mt-2 anim-up">
              Hình ảnh thực tế tiến độ thi công tuyến đường 25C tại Nhơn Trạch năm 2026
            </p>
          </div>
        </section>

        {/* ── Section 4: Kết nối sân bay ── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-4 anim-up">
              Đường 25C kết nối với sân bay Long Thành như thế nào?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 anim-up anim-delay-100">
              Sân bay Long Thành được xem là một trong những dự án hạ tầng trọng điểm của khu
              vực phía Nam. Nhờ vị trí thuận lợi, đường 25C là trục giao thông quan trọng giúp
              kết nối Nhơn Trạch với khu vực sân bay Long Thành.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 anim-stagger">
              {[
                { icon: "📍", title: "Khoảng cách", desc: "Từ trung tâm Nhơn Trạch đến sân bay Long Thành khoảng 15–20 km theo đường 25C, ước tính 20–25 phút di chuyển." },
                { icon: "🚗", title: "Tuyến đường", desc: "Đường 25C là trục trực tiếp nhất kết nối Nhơn Trạch với Long Thành, bổ sung bởi hệ thống cao tốc TP.HCM – Long Thành." },
                { icon: "🔮", title: "Triển vọng", desc: "Khi các tuyến giao thông vùng hoàn thiện, thời gian di chuyển từ Nhơn Trạch đến sân bay sẽ tiếp tục được rút ngắn." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5 anim-card">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="anim-up">
              <Link href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach"
                className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
                Sân bay Long Thành và BĐS Nhơn Trạch →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 5: Ảnh hưởng giá BĐS ── */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-4 anim-up">
              Đường 25C ảnh hưởng đến giá bất động sản như thế nào?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5 anim-up anim-delay-100">
              Trong thị trường bất động sản, hạ tầng luôn là yếu tố có tác động trực tiếp đến
              giá trị của một dự án. Những khu vực nằm gần các tuyến giao thông lớn thường có
              khả năng tăng giá tốt hơn nhờ:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 anim-stagger">
              {[
                { title: "Khả năng kết nối thuận tiện",  desc: "Rút ngắn thời gian di chuyển đến TP.HCM, sân bay và các trung tâm kinh tế." },
                { title: "Hạ tầng đồng bộ",              desc: "Đường lớn kéo theo đầu tư hạ tầng điện, nước, viễn thông và các dịch vụ đô thị." },
                { title: "Tốc độ đô thị hóa cao",        desc: "Khu vực dọc trục đường lớn thường phát triển nhanh hơn nhờ dân cư tập trung." },
                { title: "Thu hút dân cư và doanh nghiệp", desc: "Hạ tầng tốt là yếu tố hàng đầu doanh nghiệp và người dân lựa chọn định cư." },
                { title: "Tiềm năng thương mại",          desc: "Mặt tiền đường lớn có giá trị kinh doanh, cho thuê cao hơn đất sâu trong nội khu." },
                { title: "Thanh khoản tốt hơn",           desc: "Bất động sản gần trục đường lớn thường dễ mua bán, chuyển nhượng hơn." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-primary-50 border border-primary-100 p-4 anim-card">
                  <p className="font-bold text-primary-800 text-sm mb-1.5">{item.title}</p>
                  <p className="text-xs text-primary-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed anim-up">
              Đây cũng là lý do nhiều nhà đầu tư quan tâm đến các dự án nằm trực tiếp trên
              đường 25C như Mega City 2. Tuy nhiên, giá trị bất động sản còn phụ thuộc vào
              nhiều yếu tố khác — pháp lý, quy hoạch và thời điểm thị trường.
            </p>
          </div>
        </section>

        {/* ── Section 6: Mega City 2 ── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-4 anim-up">
              Mega City 2 hưởng lợi như thế nào từ đường 25C?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5 anim-up anim-delay-100">
              Mega City 2 tọa lạc trực tiếp trên đường 25C tại xã Phú Hội, huyện Nhơn Trạch —
              một trong những vị trí có lợi thế kết nối tốt nhất trong khu vực. Dự án được
              hưởng lợi toàn diện từ sự phát triển của tuyến đường này:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 anim-stagger">
              {[
                { icon: "✈️", title: "Tiếp cận nhanh sân bay Long Thành", desc: "Khoảng cách ~18 km, ước tính 20–25 phút di chuyển theo đường 25C. Khi hạ tầng vùng hoàn thiện, thời gian sẽ tiếp tục rút ngắn." },
                { icon: "🔗", title: "Khả năng kết nối thuận tiện",       desc: "Kết nối trực tiếp TP.HCM qua phà Cát Lái, tiếp cận cao tốc TP.HCM – Long Thành và hệ thống đường liên vùng." },
                { icon: "🏗️", title: "Hạ tầng đồng bộ",                  desc: "Mặt tiền đường 25C mang lại hạ tầng hoàn chỉnh, khả năng kinh doanh thương mại và giá trị dài hạn." },
                { icon: "📈", title: "Tiềm năng gia tăng giá trị",        desc: "Khu vực đường 25C đang trong quá trình đô thị hóa mạnh — một trong những yếu tố hỗ trợ giá trị BĐS dài hạn." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5 anim-card">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Ảnh 4 — Mega City 2 */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[16/7] anim-up">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS14["4"]}
                alt="Dự án Mega City 2 được hưởng lợi từ hệ thống hạ tầng giao thông tại Nhơn Trạch"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="text-xs text-slate-400 italic text-center mt-2 mb-6 anim-up">
              Dự án Mega City 2 được hưởng lợi từ hệ thống hạ tầng giao thông tại Nhơn Trạch
            </p>

            <div className="flex flex-wrap gap-3 anim-up">
              <Link href="/mega-city-2"
                className="inline-flex items-center gap-1.5 bg-primary-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-primary-700 transition-all shadow-sm">
                Tổng quan Mega City 2 →
              </Link>
              <Link href="/mega-city-2/bang-gia"
                className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
                Bảng giá mới nhất →
              </Link>
              <Link href="/mega-city-2/vi-tri"
                className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
                Vị trí dự án →
              </Link>
              <Link href="/mega-city-2/phap-ly"
                className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
                Pháp lý dự án →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6 anim-up">
              Câu hỏi thường gặp về đường 25C Nhơn Trạch
            </h2>
            <div className="space-y-3 anim-stagger-slow">
              {faqSchema.mainEntity.map((faq, i) => (
                <details key={i}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-200 transition-colors anim-up">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer px-5 py-4 font-semibold text-slate-800 text-sm list-none group-open:text-primary-700 select-none">
                    <span className="leading-snug">{faq.name}</span>
                    <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-primary-600 transition-transform group-open:rotate-180 text-xs">▼</span>
                  </summary>
                  <div className="px-5 pb-5 border-t border-slate-100 pt-3">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <PageCTA
          title="Bạn muốn tìm hiểu thêm về Mega City 2?"
          subtitle="Liên hệ để được tư vấn về vị trí, pháp lý và bảng giá dự án Mega City 2 trên đường 25C Nhơn Trạch."
        />

        <RelatedContent
          items={[
            { href: "/mega-city-2",                   title: "Tổng quan Mega City 2",          description: "Thông tin đầy đủ về quy mô, pháp lý và bảng giá.", tag: "Tổng quan" },
            { href: "/mega-city-2/vi-tri",             title: "Vị trí & Liên kết vùng",         description: "Phân tích vị trí chiến lược trên đường 25C.", tag: "Vị trí" },
            { href: "/mega-city-2/bang-gia",           title: "Bảng giá 2026",                  description: "Giá chuyển nhượng tham khảo đất nền Mega City 2.", tag: "Bảng giá" },
            { href: "/mega-city-2/phap-ly",            title: "Pháp lý – QĐ 1772",              description: "Tình trạng pháp lý và điều kiện giao dịch.", tag: "Pháp lý" },
            { href: "/mega-city-2/san-bay-long-thanh", title: "Sân bay Long Thành",             description: "Khoảng cách và tác động đến BĐS Nhơn Trạch.", tag: "Hạ tầng" },
            { href: "/mega-city-2/faq",                title: "FAQ – Câu hỏi thường gặp",       description: "Giải đáp về pháp lý, giá, tiến độ Mega City 2.", tag: "FAQ" },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
