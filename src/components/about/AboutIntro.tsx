import Link from "next/link";
import { ArrowRight, MapPin, Building2, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/data/companyInfo";
import { IMG_ABOUT } from "@/lib/cloudinary";

// ─────────────────────────────────────────────────────────────
// AboutIntro — Kim Oanh Group là ai?
//
// Mục tiêu:
// - Tăng E-E-A-T: stats thực tế, nguồn xác minh
// - Internal linking đến cụm Mega City 2
// - Trust signals: pháp lý rõ ràng, số liệu có căn cứ
// ─────────────────────────────────────────────────────────────

const VERIFIED_STATS = [
  {
    value: "2009",
    label: "Năm thành lập",
    note: "Tham khảo từ nguồn công khai",
    verified: true,
  },
  {
    value: "~84 ha",
    label: "Quy mô Mega City 2",
    note: "Theo quy hoạch đã phê duyệt",
    verified: true,
  },
  {
    value: "2.421 lô",
    label: "Được phân lô bán nền",
    note: "QĐ 1772/QĐ-UBND, 30/05/2025",
    verified: true,
  },
  {
    value: "~95%",
    label: "Tiến độ hạ tầng",
    note: "Theo thông tin công bố 06/2025",
    verified: true,
  },
] as const;

const QUICK_LINKS = [
  {
    href: "/mega-city-2",
    label: "Tổng quan dự án",
    desc: "Mega City 2 Nhơn Trạch",
    icon: "🏘️",
  },
  {
    href: "/mega-city-2/phap-ly",
    label: "Pháp lý – QĐ 1772",
    desc: "2.421 lô được chấp thuận",
    icon: "📋",
  },
  {
    href: "/mega-city-2/bang-gia",
    label: "Bảng giá 2026",
    desc: "Từ 1,15 tỷ/nền",
    icon: "💰",
  },
  {
    href: "/mega-city-2/tien-do",
    label: "Tiến độ hạ tầng",
    desc: "Cập nhật 06/2025",
    icon: "🏗️",
  },
] as const;

const TRUST_POINTS = [
  "Quy hoạch chi tiết 1/500 đã được phê duyệt",
  "2.421 lô phân lô bán nền theo QĐ 1772/QĐ-UBND",
  "Hạ tầng nội khu ~95% hoàn thiện (06/2025)",
  "110 Giấy chứng nhận đã cấp",
] as const;

export default function AboutIntro() {
  return (
    <section id="gioi-thieu-kog" className="py-28 bg-white" data-reveal>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ── Cột trái: Text + Trust ── */}
          <div>
            <SectionHeading
              eyebrow="KIM OANH GROUP LÀ AI?"
              title={
                <>
                  Một hệ sinh thái được
                  <br />
                  <span className="text-amber-500">xây dựng từ nền tảng bất động sản</span>
                </>
              }
            />

            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
              <p>{COMPANY_INFO.description}</p>
              <p>{COMPANY_INFO.description2}</p>
            </div>

            {/* Trust points */}
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Dự án Mega City 2 – Điểm xác nhận
                </p>
              </div>
              <ul className="space-y-2">
                {TRUST_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs text-emerald-800 leading-relaxed">
                    <span className="text-emerald-400 font-bold flex-shrink-0 mt-0.5">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/mega-city-2/phap-ly"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold
                           text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                Xem hồ sơ pháp lý đầy đủ
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="font-bold text-slate-500">Lưu ý: </span>
                {COMPANY_INFO.siteDisclaimer}
              </p>
            </div>
          </div>

          {/* ── Cột phải: Stats + Quick links ── */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {VERIFIED_STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-4 hover:border-amber-200 transition-colors"
                >
                  <p className="font-black text-2xl text-slate-900 leading-none mb-1">{s.value}</p>
                  <p className="text-xs font-semibold text-slate-600 mb-1">{s.label}</p>
                  <p className="text-[10px] text-slate-400 leading-snug">{s.note}</p>
                </div>
              ))}
            </div>

            {/* Dự án nổi bật */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 border-b border-slate-200">
                <Building2 className="w-4 h-4 text-slate-400" />
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Dự án đang được hỗ trợ
                </p>
              </div>

              {/* Mega City 2 feature card */}
              <Link
                href="/mega-city-2"
                className="flex items-start gap-4 p-5 hover:bg-amber-50/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 text-sm group-hover:text-amber-700 transition-colors">
                    Mega City 2 Nhơn Trạch
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Khu dân cư ~84 ha · Đường 25C · Nhơn Trạch, Đồng Nai
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200
                                     px-2 py-0.5 rounded-full font-semibold">
                      Pháp lý: QĐ 1772/2025
                    </span>
                    <span className="text-[10px] bg-sky-50 text-sky-700 border border-sky-200
                                     px-2 py-0.5 rounded-full font-semibold">
                      Hạ tầng ~95%
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 transition-colors flex-shrink-0 mt-1" />
              </Link>

              {/* Quick links grid */}
              <div className="grid grid-cols-2 border-t border-slate-100">
                {QUICK_LINKS.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-start gap-3 p-4 hover:bg-slate-50 transition-colors group
                      ${i % 2 === 0 ? "border-r border-slate-100" : ""}
                      ${i < 2 ? "border-b border-slate-100" : ""}`}
                  >
                    <span className="text-lg flex-shrink-0">{link.icon}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-700 group-hover:text-amber-700
                                     transition-colors leading-snug">
                        {link.label}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Ảnh 2 — Kim Oanh Group là ai (1920×904) */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_ABOUT["2"]}
                alt="Kim Oanh Group – tổng quan tập đoàn"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
