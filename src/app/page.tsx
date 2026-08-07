import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import AmenitiesSection from "@/components/AmenitiesSection";
import ConnectivitySection from "@/components/ConnectivitySection";
import SectionNav from "@/components/SectionNav";
import FadeSection from "@/components/FadeSection";
import ContactSidebar from "@/components/ContactSidebar";
import {
  CheckCircle2, Shield, Award, Camera,
  Phone, Mail, MapPin, ChevronRight,
} from "lucide-react";

/* ─────────────────────────────────────────
   Helper micro-components
───────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">
      {children}
    </span>
  );
}

function SectionHeader({
  children,
  sub,
}: {
  children: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
        {children}
      </h2>
      {sub && <p className="mt-2 text-slate-500 text-sm md:text-base">{sub}</p>}
    </div>
  );
}

function ImgSlot({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
        <Camera className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */

const projectFacts = [
  { label: "Tên dự án", value: "Mega City Nhơn Trạch" },
  { label: "Vị trí", value: "Huyện Nhơn Trạch, Đồng Nai" },
  { label: "Chủ đầu tư", value: "Kim Oanh Group" },
  { label: "Đơn vị phát triển", value: "Kim Oanh Real Estate" },
  { label: "Quy mô", value: "84 ha – 3.100 sản phẩm" },
  { label: "Loại hình", value: "Nhà phố, Shophouse, Biệt thự" },
  { label: "Diện tích", value: "90 – 200 m²" },
  { label: "Mật độ xây dựng", value: "40%" },
  { label: "Hạ tầng", value: "Đường nội khu 13–32 m" },
  { label: "Khởi công / Hoàn thành", value: "2018 / 2021" },
  { label: "Tiến độ", value: "95% hoàn thiện hạ tầng" },
  { label: "Pháp lý", value: "Sổ hồng từng nền, đã cấp 110 GCN" },
];

const productTypes = [
  {
    code: "TH",
    name: "Nhà phố TH",
    desc: "Các lô liền kề mặt đường nội khu 13–17 m.",
    lots: "1.580 lô",
    area: "90–120 m²",
  },
  {
    code: "T",
    name: "Nhà phố T",
    desc: "Lô mặt đường trục chính 15–32 m, vị trí đắc địa.",
    lots: "1.478 lô",
    area: "90–160 m²",
  },
  {
    code: "SH",
    name: "Shophouse",
    desc: "Nhà phố thương mại mặt tiền đường lớn.",
    lots: "Hạn chế",
    area: "100–200 m²",
  },
  {
    code: "V",
    name: "Biệt thự V",
    desc: "Biệt thự đơn lập, song lập, khuôn viên rộng.",
    lots: "102 lô",
    area: "150–200 m²",
  },
];


const hotListings = [
  { code: "T9/T10/T11/T20", area: "90 m²", price: "1,15 tỷ", note: "" },
  { code: "TH24–TH27", area: "90 m²", price: "1,35 tỷ", note: "" },
  { code: "TH14–TH34", area: "90 m²", price: "1,2 tỷ", note: "" },
  { code: "T28-8", area: "90 m²", price: "1,4 tỷ", note: "" },
  { code: "T28-67", area: "90 m²", price: "1,55 tỷ", note: "Mặt đường 24 m" },
  { code: "TH3-5", area: "90 m²", price: "1,4 tỷ", note: "Đường 15 m, view công viên" },
];

const legalItems = [
  "Dự án đã được phê duyệt quy hoạch 1/500",
  "Đã hoàn thành nghĩa vụ tài chính với nhà nước",
  "Đã được cấp 110 Giấy Chứng Nhận (GCN)",
  "Hạ tầng kỹ thuật hoàn thiện theo quy hoạch",
  "Đủ điều kiện bàn giao và sang tên theo quy định",
  "Sổ hồng riêng từng nền không ràng buộc xây dựng (Block TH + T đường 13–17 m)",
  "Sổ hồng riêng có điều kiện xây trong 5 năm (T đường 24–32 m)",
];

const progressItems = [
  { label: "Đường nội khu", pct: 100 },
  { label: "Điện – Nước", pct: 100 },
  { label: "Công viên trung tâm", pct: 100 },
  { label: "Cây xanh & tiểu cảnh", pct: 95 },
  { label: "Viễn thông", pct: 95 },
  { label: "Tổng tiến độ", pct: 95 },
];

const investReasons = [
  {
    no: "01",
    title: "Vị trí chiến lược",
    desc: "Tiếp giáp TP.HCM, cửa ngõ sân bay Long Thành, trung tâm vùng kinh tế Đông Nam Bộ.",
  },
  {
    no: "02",
    title: "Hạ tầng đồng bộ",
    desc: "Đường nội khu 13–32 m, điện nước viễn thông hoàn chỉnh, sẵn sàng xây dựng ngay.",
  },
  {
    no: "03",
    title: "Nhận nền ngay",
    desc: "Hạ tầng hoàn thiện 95%, khách hàng nhận nền và khởi công xây dựng ngay sau ký hợp đồng.",
  },
  {
    no: "04",
    title: "Pháp lý minh bạch",
    desc: "Đã cấp 110 GCN, sổ hồng riêng từng nền, không vướng tranh chấp.",
  },
  {
    no: "05",
    title: "Giá tốt – tiềm năng cao",
    desc: "Giá từ 1,15 tỷ/nền, thấp hơn 30–40% so với khu vực lân cận, dư địa tăng giá lớn.",
  },
  {
    no: "06",
    title: "Nhơn Trạch lên thành phố",
    desc: "Nghị quyết nâng cấp Nhơn Trạch lên đô thị loại III – động lực tăng giá mạnh trong 2–3 năm tới.",
  },
];

const faqs = [
  {
    q: "Dự án cách TP.HCM bao xa và đi bằng đường nào?",
    a: "Mega City Nhơn Trạch cách trung tâm TP.HCM khoảng 30–35 km. Khách hàng có thể đi theo đường 25C (cao tốc Bến Lức – Long Thành) hoặc phà Cát Lái – Nhơn Trạch. Khi cầu Nhơn Trạch hoàn thành (dự kiến 2025) thời gian di chuyển rút ngắn còn 20–25 phút.",
  },
  {
    q: "Tiến độ thực tế và tình trạng sổ hồng ra sao?",
    a: "Hạ tầng đã hoàn thiện 95%. Dự án đã được cấp 110 GCN (sổ hồng). Các lô Block TH và T đường 13–17 m có sổ hồng riêng không ràng buộc xây dựng. Các lô T đường 24–32 m có sổ hồng với điều kiện xây dựng trong 5 năm.",
  },
  {
    q: "Quy mô dự án như thế nào?",
    a: "Mega City Nhơn Trạch rộng 84 ha với tổng cộng 3.100 sản phẩm gồm nhà phố TH (1.580 lô), nhà phố T (1.478 lô), shophouse thương mại và biệt thự V (102 lô). Đây là một trong những khu dân cư lớn nhất Nhơn Trạch.",
  },
  {
    q: "Có những loại sản phẩm nào? Giá khởi điểm bao nhiêu?",
    a: "Dự án có 4 loại: Nhà phố TH (90–120 m², từ 1,2 tỷ), Nhà phố T (90–160 m², từ 1,15 tỷ), Shophouse mặt tiền đường lớn và Biệt thự V (150–200 m², từ 2,1 tỷ). Nhà xây sẵn T6–T13 có giá trên 4 tỷ.",
  },
  {
    q: "Khách hàng phản ánh gì về dự án?",
    a: "Đa số khách hàng đánh giá cao vị trí, hạ tầng hoàn thiện và tính pháp lý rõ ràng. Một số khách lưu ý khu vực chưa có nhiều tiện ích thương mại lân cận, tuy nhiên điều này đang được cải thiện nhanh khi dân cư và hạ tầng xã hội phát triển.",
  },
];

/* ─────────────────────────────────────────
   Main Page Component
───────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionNav />
      <ContactSidebar />

      <main className="pb-16 lg:pb-0">
        {/* ── Hero ── */}
        <Hero />

        {/* ── Tổng Quan ── */}
        <FadeSection
          id="tong-quan"
          className="py-20 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4">
            <SectionLabel>Tổng quan dự án</SectionLabel>
            <SectionHeader
              sub="Khu đô thị quy mô lớn với hạ tầng hoàn thiện tại cửa ngõ sân bay Long Thành"
            >
              Mega City Nhơn Trạch – Tổng quan
            </SectionHeader>

            {/* 12-item key facts grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {projectFacts.map((f) => (
                <div
                  key={f.label}
                  className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                >
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {f.label}
                  </p>
                  <p className="text-sm font-bold text-slate-700">{f.value}</p>
                </div>
              ))}
            </div>

            {/* 3 ImgSlots */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ImgSlot
                src="/overview/1.jpg"
                alt="Tổng quan dự án 1"
                className="h-56"
              />
              <ImgSlot
                src="/overview/2.webp"
                alt="Tổng quan dự án 2"
                className="h-56"
              />
              <ImgSlot
                src="/overview/3.webp"
                alt="Tổng quan dự án 3"
                className="h-56"
              />
            </div>
          </div>
        </FadeSection>

        {/* ── Liên kết vùng ── */}
        <ConnectivitySection />

        {/* ── Tiện ích nội khu ── */}
        <AmenitiesSection />

        {/* ── Sản Phẩm ── */}
        <FadeSection
          id="san-pham"
          className="py-20 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4">
            <SectionLabel>Sản phẩm</SectionLabel>
            <SectionHeader sub="Đa dạng loại hình, đáp ứng mọi nhu cầu ở thực và đầu tư">
              Các loại hình sản phẩm
            </SectionHeader>

            {/* 4 product type cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {productTypes.map((p) => (
                <div
                  key={p.code}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col gap-2 hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl font-black text-primary-600">
                    {p.code}
                  </span>
                  <h3 className="font-bold text-slate-800 text-lg">{p.name}</h3>
                  <p className="text-slate-500 text-sm flex-1">{p.desc}</p>
                  <div className="pt-2 border-t border-slate-200 mt-auto">
                    <p className="text-xs text-slate-500">
                      Số lượng:{" "}
                      <span className="font-semibold text-slate-700">
                        {p.lots}
                      </span>
                    </p>
                    <p className="text-xs text-slate-500">
                      Diện tích:{" "}
                      <span className="font-semibold text-slate-700">
                        {p.area}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Floor plan images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <ImgSlot
                src="/overview/1.jpg"
                alt="Mặt bằng tổng thể"
                className="h-64"
              />
              <ImgSlot
                src="/overview/2.webp"
                alt="Mặt bằng chi tiết"
                className="h-64"
              />
            </div>

            {/* CCC banner */}
            <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm font-semibold opacity-80 uppercase tracking-wide mb-1">
                  Sắp ra mắt
                </p>
                <h3 className="text-xl font-bold">
                  Phân khu CCC – Khu thương mại tương lai
                </h3>
                <p className="text-sm opacity-90 mt-1">
                  Trung tâm thương mại, văn phòng và căn hộ cao tầng trong lòng
                  khu đô thị.
                </p>
              </div>
              <ChevronRight className="w-8 h-8 opacity-70 flex-shrink-0" />
            </div>
          </div>
        </FadeSection>

        {/* ── Bảng Giá ── */}
        <FadeSection
          id="bang-gia"
          className="py-20 bg-slate-50"
        >
          <div className="max-w-6xl mx-auto px-4">
            <SectionLabel>Bảng giá</SectionLabel>
            <SectionHeader sub="Cập nhật tháng 6/2025 – Liên hệ để nhận báo giá chi tiết">
              Bảng giá tham khảo
            </SectionHeader>

            {/* 3 price cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="font-bold text-slate-700 mb-4 text-base">
                  Nhà phố TH
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-slate-500">TH24–TH28</span>
                    <span className="font-semibold text-slate-800">
                      1,2 – 1,5 tỷ
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-500">TH16–TH22</span>
                    <span className="font-semibold text-slate-800">
                      1,3 – 1,6 tỷ
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-500">TH1–TH8</span>
                    <span className="font-semibold text-slate-800">
                      1,4 – 1,5 tỷ
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-500">T9–T12</span>
                    <span className="font-semibold text-slate-800">
                      1,15 – 1,4 tỷ
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="font-bold text-slate-700 mb-4 text-base">
                  Nhà phố T (theo mặt đường)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-slate-500">Đường 15–17 m</span>
                    <span className="font-semibold text-slate-800">
                      1,5 – 1,8 tỷ
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-500">Đường 21–24 m</span>
                    <span className="font-semibold text-slate-800">
                      1,8 – 2,2 tỷ
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-500">Đường 32 m</span>
                    <span className="font-semibold text-slate-800">
                      2,0 – 2,5 tỷ
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="font-bold text-slate-700 mb-4 text-base">
                  Biệt thự &amp; Nhà xây sẵn
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-slate-500">Biệt thự V</span>
                    <span className="font-semibold text-slate-800">
                      Từ 2,1 tỷ
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-500">Nhà xây sẵn T6–T13</span>
                    <span className="font-semibold text-slate-800">
                      Trên 4 tỷ
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hot listings */}
            <div className="mb-8">
              <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Nền đang quan tâm nhiều
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {hotListings.map((item) => (
                  <div
                    key={item.code}
                    className="flex items-center justify-between rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm"
                  >
                    <div>
                      <p className="font-bold text-slate-800">{item.code}</p>
                      <p className="text-slate-500 text-xs">
                        {item.area}
                        {item.note ? ` · ${item.note}` : ""}
                      </p>
                    </div>
                    <span className="text-primary-600 font-bold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <p className="text-xs text-slate-400 border-t border-slate-200 pt-4">
              * Giá tham khảo, có thể thay đổi theo thời điểm. Liên hệ hotline
              để nhận báo giá chính xác và hỗ trợ chọn nền phù hợp.
            </p>
          </div>
        </FadeSection>

        {/* ── Pháp Lý ── */}
        <FadeSection
          id="phap-ly"
          className="py-20 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4">
            <SectionLabel>Pháp lý</SectionLabel>
            <SectionHeader sub="Minh bạch, rõ ràng – Đã cấp 110 Giấy Chứng Nhận">
              Tình trạng pháp lý dự án
            </SectionHeader>

            {/* Legal checklist */}
            <ul className="space-y-3 mb-10">
              {legalItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* ImgSlots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ImgSlot
                src="/overview/1.jpg"
                alt="Giấy chứng nhận sổ hồng"
                className="h-56"
              />
              <ImgSlot
                src="/overview/2.webp"
                alt="Tài liệu pháp lý"
                className="h-56"
              />
            </div>

            {/* 2 note boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-green-50 border border-green-200 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <h4 className="font-bold text-green-800 text-sm">
                    Sổ hồng trực tiếp (không điều kiện)
                  </h4>
                </div>
                <p className="text-sm text-green-700">
                  Block TH và T mặt đường 13–17 m: sổ hồng riêng từng nền, không
                  ràng buộc tiến độ xây dựng. Có thể giao dịch và sang tên ngay
                  sau khi nhận nền.
                </p>
              </div>
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  <h4 className="font-bold text-amber-800 text-sm">
                    Sổ hồng có điều kiện xây dựng
                  </h4>
                </div>
                <p className="text-sm text-amber-700">
                  T mặt đường 24–32 m: sổ hồng riêng kèm điều kiện xây dựng
                  trong vòng 5 năm. Phù hợp khách hàng có kế hoạch xây dựng
                  trung hạn.
                </p>
              </div>
            </div>
          </div>
        </FadeSection>

        {/* ── Kim Oanh Group ── */}
        <section className="py-20 bg-white" data-reveal>
          <div className="max-w-6xl mx-auto px-4">
            <SectionLabel>Chủ đầu tư</SectionLabel>
            <SectionHeader sub="Thành lập 2009 – Hơn 15 năm phát triển bất động sản tại Đông Nam Bộ">
              Kim Oanh Group
            </SectionHeader>

            {/* 3 member cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  code: "KI",
                  name: "Kim Oanh Invest",
                  desc: "Đầu tư và phát triển dự án bất động sản quy mô lớn.",
                },
                {
                  code: "KC",
                  name: "Kim Oanh Construction",
                  desc: "Thi công hạ tầng và xây dựng nhà ở dân dụng.",
                },
                {
                  code: "KR",
                  name: "Kim Oanh Realty",
                  desc: "Phân phối và môi giới bất động sản toàn quốc.",
                },
              ].map((m) => (
                <div
                  key={m.code}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="text-4xl font-black text-primary-600">
                    {m.code}
                  </span>
                  <h3 className="font-bold text-slate-800 mt-2 mb-1">
                    {m.name}
                  </h3>
                  <p className="text-slate-500 text-sm">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-primary-800 p-8 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-black">2009</p>
                  <p className="text-sm opacity-80 mt-1">Năm thành lập</p>
                </div>
                <div>
                  <p className="text-3xl font-black">15+</p>
                  <p className="text-sm opacity-80 mt-1">Năm kinh nghiệm</p>
                </div>
                <div>
                  <p className="text-3xl font-black">3.100</p>
                  <p className="text-sm opacity-80 mt-1">Sản phẩm tại Mega City</p>
                </div>
                <div>
                  <p className="text-3xl font-black">3.000+</p>
                  <p className="text-sm opacity-80 mt-1">
                    Khách hàng trong 1 ngày (kỷ lục 2018)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tiến Độ ── */}
        <section className="py-20 bg-slate-50" data-reveal>
          <div className="max-w-6xl mx-auto px-4">
            <SectionLabel>Tiến độ</SectionLabel>
            <SectionHeader sub="Cập nhật tháng 6/2025">
              Tiến độ thi công hạ tầng
            </SectionHeader>

            {/* 6 progress bars */}
            <div className="space-y-5 mb-10">
              {progressItems.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-slate-700">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-primary-600">
                      {item.pct}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-600 rounded-full"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* 4 progress photos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ImgSlot
                src="/overview/1.jpg"
                alt="Tiến độ 1"
                className="h-40"
              />
              <ImgSlot
                src="/overview/2.webp"
                alt="Tiến độ 2"
                className="h-40"
              />
              <ImgSlot
                src="/overview/3.webp"
                alt="Tiến độ 3"
                className="h-40"
              />
              <ImgSlot
                src="/on-site advantage/1.jpg"
                alt="Tiến độ 4"
                className="h-40"
              />
            </div>
          </div>
        </section>

        {/* ── 6 lý do đầu tư ── */}
        <section className="py-20 bg-white" data-reveal>
          <div className="max-w-6xl mx-auto px-4">
            <SectionLabel>Tại sao nên đầu tư</SectionLabel>
            <SectionHeader sub="6 lý do khiến Mega City Nhơn Trạch là lựa chọn đầu tư thông minh">
              6 lý do nên đầu tư ngay hôm nay
            </SectionHeader>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {investReasons.map((r) => (
                <div
                  key={r.no}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition-shadow"
                >
                  <span className="text-4xl font-black text-slate-200 leading-none">
                    {r.no}
                  </span>
                  <h3 className="font-bold text-slate-800 text-lg mt-1 mb-2">
                    {r.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-slate-50" data-reveal>
          <div className="max-w-3xl mx-auto px-4">
            <SectionLabel>FAQ</SectionLabel>
            <SectionHeader sub="Những câu hỏi thường gặp về Mega City Nhơn Trạch">
              Câu hỏi thường gặp
            </SectionHeader>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-slate-200 bg-white overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 py-4 font-semibold text-slate-800 text-sm list-none">
                    {faq.q}
                    <ChevronRight className="w-4 h-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Liên Hệ ── */}
        <section id="lien-he" className="py-20 bg-white" data-reveal>
          <div className="max-w-6xl mx-auto px-4">
            <SectionLabel>Liên hệ</SectionLabel>
            <SectionHeader sub="Để lại thông tin – chuyên viên tư vấn sẽ liên hệ trong 30 phút">
              Đăng ký tư vấn miễn phí
            </SectionHeader>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* LeadForm */}
              <LeadForm />

              {/* Contact info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      Hotline
                    </p>
                    <a
                      href="tel:0907839986"
                      className="text-xl font-bold text-slate-800 hover:text-primary-600 transition-colors"
                    >
                      0937.587.438
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      Email
                    </p>
                    <a
                      href="mailto:info@kimoanhgroup.org"
                      className="text-base font-semibold text-slate-800 hover:text-primary-600 transition-colors"
                    >
                      info@kimoanhgroup.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      Địa chỉ
                    </p>
                    <p className="text-base font-semibold text-slate-800">
                      Đường 25C, Xã Phú Hội, Huyện Nhơn Trạch, Đồng Nai
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 bg-slate-100 flex items-center justify-center">
                  <p className="text-slate-400 text-sm">Bản đồ dự án</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
