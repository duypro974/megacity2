import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";

const NAV_LINKS = [
  { label: "Tổng quan dự án",   href: "#tong-quan" },
  { label: "Vị trí chiến lược", href: "#vi-tri" },
  { label: "Tiện ích nội khu",  href: "#tien-ich" },
  { label: "Hình ảnh thực tế",  href: "#hinh-anh-thuc-te" },
  { label: "Sản phẩm",          href: "#san-pham" },
  { label: "Bảng giá 05/2026",  href: "#bang-gia" },
  { label: "Thanh toán",        href: "#thanh-toan" },
  { label: "Pháp lý",          href: "#phap-ly" },
  { label: "Liên hệ tư vấn",   href: "#lien-he" },
];

const PROJECT_INFO = [
  { label: "Chủ đầu tư",  value: "Công ty TNHH Khu Đô Thị Phú Hội" },
  { label: "Phát triển",  value: "Kim Oanh Group" },
  { label: "Quy mô",      value: "~84 ha · 3.160 sản phẩm thấp tầng" },
  { label: "Loại hình",   value: "Nhà phố · Nhà vườn liên kế · Biệt thự" },
  { label: "Tiến độ HT",  value: "~95% (cập nhật 06/2025)" },
  { label: "Pháp lý",     value: "QH 1/500 · QĐ 1772/QĐ-UBND" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">

      {/* ── Main footer ── */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo SVG */}
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/KOG_Web_RGB_01.svg"
                alt="Kim Oanh Group"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Kim Oanh Group — Nhà phát triển bất động sản uy tín tại Đồng Nai.
              Mega City 2 do Công ty TNHH Khu đô thị Phú Hội làm chủ đầu tư,
              Kim Oanh Group phát triển và phân phối.
            </p>
            <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200
                            rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              <span className="text-xs font-semibold text-amber-700">
                Thành viên của Tập đoàn Kim Oanh
              </span>
            </div>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h4 className="font-bold text-sm text-slate-800 mb-5 flex items-center gap-2">
              <span className="w-0.5 h-4 bg-amber-500 rounded-full" />
              Thông tin liên hệ
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Đường 25C, Xã Nhơn Trạch, Tỉnh Đồng Nai</span>
              </li>
              <li>
                <a href="tel:0937587438"
                  className="flex items-center gap-3 text-sm font-semibold text-slate-800
                             hover:text-amber-600 transition-colors">
                  <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  0937.587.438
                </a>
              </li>
              <li>
                <a href="mailto:k.homekog@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber-600 transition-colors">
                  <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  k.homekog@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-amber-500">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 14.5h-1v-6h1v6zm0-8h-1V7h1v1.5z"/>
                  </svg>
                </span>
                Giờ làm việc: 8:00 – 18:00 (Hàng ngày)
              </li>
            </ul>
          </div>

          {/* Danh mục dự án */}
          <div>
            <h4 className="font-bold text-sm text-slate-800 mb-5 flex items-center gap-2">
              <span className="w-0.5 h-4 bg-amber-500 rounded-full" />
              Thông tin dự án
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}
                    className="flex items-center gap-1.5 text-sm text-slate-500
                               hover:text-amber-600 transition-colors group">
                    <ChevronRight className="w-3 h-3 text-amber-400 flex-shrink-0
                                            opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Thông số dự án */}
          <div>
            <h4 className="font-bold text-sm text-slate-800 mb-5 flex items-center gap-2">
              <span className="w-0.5 h-4 bg-amber-500 rounded-full" />
              Thông số dự án
            </h4>
            <ul className="space-y-2.5">
              {PROJECT_INFO.map((item) => (
                <li key={item.label} className="text-sm">
                  <span className="text-slate-400 text-xs font-medium">{item.label}:</span>
                  <span className="text-slate-700 font-medium block mt-0.5">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row
                        justify-between items-center gap-3">
          <p className="text-xs text-slate-400 text-center md:text-left">
            © 2026 Mega City 2 – Thông tin tham khảo, không phải website chính thức của chủ đầu tư.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/admin" className="text-xs text-slate-400 hover:text-amber-600 transition">Admin</Link>
            <a href="#" className="text-xs text-slate-400 hover:text-amber-600 transition">Chính sách bảo mật</a>
            <a href="#" className="text-xs text-slate-400 hover:text-amber-600 transition">Điều khoản</a>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}
