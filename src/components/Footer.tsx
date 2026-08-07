import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Tổng quan dự án",  href: "#tong-quan" },
  { label: "Vị trí chiến lược",href: "#vi-tri" },
  { label: "Tiện ích nội khu", href: "#tien-ich" },
  { label: "Sản phẩm",         href: "#san-pham" },
  { label: "Bảng giá 05/2026", href: "#bang-gia" },
  { label: "Pháp lý",          href: "#phap-ly" },
  { label: "Liên hệ tư vấn",   href: "#lien-he" },
];

const PROJECT_INFO = [
  { label: "Chủ đầu tư",      value: "Công ty TNHH Khu Đô Thị Phú Hội" },
  { label: "Phát triển",       value: "Kim Oanh Group" },
  { label: "Quy mô",           value: "84 ha – 3.100 sản phẩm" },
  { label: "Loại hình",        value: "Đất nền · Nhà phố · Biệt thự" },
  { label: "Tiến độ",          value: "Hạ tầng ~95% · Bàn giao từ 2020" },
  { label: "Pháp lý",          value: "QH 1/500 · GCNĐKĐT · Sổ hồng" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Top CTA banner */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-600">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-extrabold text-lg">🎁 Đăng ký hôm nay – Nhận ưu đãi độc quyền</p>
            <p className="text-white/80 text-sm">Bảng giá mới nhất · Hỗ trợ pháp lý · Xem đất miễn phí</p>
          </div>
          <a
            href="#lien-he"
            className="shrink-0 bg-white text-primary-700 font-extrabold px-7 py-3 rounded-full text-sm
                       hover:bg-primary-50 transition-all hover:scale-105 shadow-lg"
          >
            Đăng ký ngay →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-gold-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xs">MC2</span>
              </div>
              <div>
                <p className="font-extrabold text-base leading-none">Mega City 2</p>
                <p className="text-xs text-slate-400 mt-0.5">Kim Oanh Group</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Khu đô thị hạt nhân Nhơn Trạch – 84ha, 3.100 sản phẩm. Đất vàng cửa ngõ sân bay Quốc tế Long Thành.
            </p>
            {/* Keywords for SEO */}
            <div className="flex flex-wrap gap-1.5">
              {["Đất nền Nhơn Trạch","Nhà phố Kim Oanh","Sân bay Long Thành"].map((t) => (
                <span key={t} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider mb-5 text-white">Thông tin dự án</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="flex items-center gap-1.5 text-slate-400 hover:text-primary-400 transition text-sm group">
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project info */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider mb-5 text-white">Thông số dự án</h4>
            <ul className="space-y-2.5">
              {PROJECT_INFO.map((item) => (
                <li key={item.label} className="text-sm">
                  <span className="text-slate-500">{item.label}: </span>
                  <span className="text-slate-300 font-medium">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider mb-5 text-white">Liên hệ tư vấn</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:0907839986" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-primary-600/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="font-extrabold text-white group-hover:text-primary-400 transition">0937.587.438</p>
                    <p className="text-xs text-slate-500">Hotline tư vấn 24/7</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm font-medium">Đường 25C, Phú Hội</p>
                  <p className="text-xs text-slate-500">Nhơn Trạch, Đồng Nai</p>
                </div>
              </li>
              <li>
                <a href="mailto:info@kimoanhgroup.org" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm group-hover:text-primary-400 transition">info@kimoanhgroup.org</p>
                    <p className="text-xs text-slate-500">Phản hồi trong 24h</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© 2026 Mega City 2 Nhơn Trạch · Kim Oanh Group. Thông tin mang tính tham khảo.</p>
          <div className="flex items-center gap-5">
            <Link href="/admin" className="hover:text-primary-400 transition">Admin</Link>
            <a href="#" className="hover:text-primary-400 transition">Chính sách bảo mật</a>
            <a href="#" className="hover:text-primary-400 transition">Điều khoản</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
