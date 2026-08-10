"use client";

import { Phone, MapPin, Mail, ChevronRight, X, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { scrollToSection } from "@/lib/scrollTo";

const NAV_LINKS = [
  { label: "Tổng quan dự án",   id: "tong-quan" },
  { label: "Vị trí chiến lược", id: "vi-tri" },
  { label: "Tiện ích nội khu",  id: "tien-ich" },
  { label: "Hình ảnh thực tế",  id: "hinh-anh-thuc-te" },
  { label: "Sản phẩm",          id: "san-pham" },
  { label: "Bảng giá 05/2026",  id: "bang-gia" },
  { label: "Thanh toán",        id: "thanh-toan" },
  { label: "Pháp lý",           id: "phap-ly" },
  { label: "Liên hệ tư vấn",    id: "lien-he" },
];

const PROJECT_INFO = [
  { label: "Chủ đầu tư",  value: "Công ty TNHH Khu Đô Thị Phú Hội" },
  { label: "Phát triển",  value: "Kim Oanh Group" },
  { label: "Quy mô",      value: "~84 ha - 3.160 sản phẩm thấp tầng" },
  { label: "Loại hình",   value: "Nhà phố · Nhà vườn liên kế · Biệt thự" },
  { label: "Tiến độ HT",  value: "~95% (cập nhật 06/2025)" },
  { label: "Pháp lý",     value: "QH 1/500 · QĐ 1772/QĐ-UBND" },
];

function LegalModal({ type, onClose }: { type: "terms" | "privacy"; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return createPortal(
    /* Overlay — z cao hơn floating buttons (z-50) */
    <div
      className="fixed inset-0 z-[10000] flex items-end sm:items-center justify-center"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(2px)" }}
      onClick={onClose}
    >
      {/* Sheet — full height trên mobile như ảnh mẫu */}
      <div
        className="bg-white w-full sm:max-w-lg sm:mx-4
                   rounded-t-3xl sm:rounded-2xl flex flex-col
                   h-[92dvh] sm:h-auto sm:max-h-[85vh]
                   shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header sticky */}
        <div className="flex items-start justify-between px-5 pt-5 pb-4 border-b border-slate-100 flex-shrink-0">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {type === "terms" ? "Điều Khoản Sử Dụng" : "Chính Sách Bảo Mật"}
            </h2>
            <p className="text-xs text-amber-500 font-medium mt-1">Cập nhật lần cuối: 10/08/2026</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200
                       flex items-center justify-center text-slate-500
                       transition-colors flex-shrink-0 ml-3"
            aria-label="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-5 py-5 text-sm text-slate-600 leading-relaxed space-y-5">
          {type === "terms" ? <TermsContent /> : <PrivacyContent />}
        </div>

        {/* Footer sticky — luôn hiển thị, không bị floating buttons che */}
        <div className="flex items-center justify-between px-5 py-4
                        border-t border-slate-100 flex-shrink-0 bg-white
                        rounded-b-3xl sm:rounded-b-2xl">
          <p className="text-[11px] text-slate-400 leading-tight">
            © 2026 Kim Oanh Group.<br className="sm:hidden" /> Tất cả quyền được bảo lưu.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600
                       text-white text-sm font-bold px-6 py-2.5 rounded-2xl
                       transition-colors shadow-md shadow-amber-200"
          >
            Đã hiểu
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function TermsContent() {
  return (
    <>
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 text-slate-700 text-sm leading-relaxed">
        Việc truy cập và sử dụng website megacity2nhontach.com đồng nghĩa với việc bạn đã đọc, hiểu và đồng ý bị ràng buộc bởi các Điều khoản sử dụng dưới đây.
      </div>
      <div><h3 className="font-bold text-slate-800 mb-2">1. Thông tin đơn vị quản lý Website</h3><p>Đơn vị quản lý: Công ty Cổ phần Tập đoàn Địa ốc Kim Oanh (Kim Oanh Group)</p><p>Địa chỉ trụ sở: 268A Phan Trung, phường Tam Hiệp, tỉnh Đồng Nai, Việt Nam</p><p>Hotline hỗ trợ: 0937.587.438</p><p>Email: k.homekog@gmail.com</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">2. Mục đích của Website</h3><p>Website được xây dựng nhằm cung cấp thông tin về dự án khu dân cư Mega City 2 tại xã Nhơn Trạch, tỉnh Đồng Nai (do Công ty TNHH Khu đô thị Phú Hội làm chủ đầu tư, Kim Oanh Group phát triển và phân phối) và hỗ trợ khách hàng đăng ký tư vấn.</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">3. Chấp nhận Điều khoản</h3><p>Bằng việc truy cập, duyệt hoặc sử dụng bất kỳ nội dung nào trên Website, bạn xác nhận đã đọc và đồng ý với toàn bộ Điều khoản này.</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">4. Quyền sở hữu trí tuệ</h3><p>Toàn bộ nội dung trên Website thuộc quyền sở hữu của Kim Oanh Group hoặc được cấp phép sử dụng hợp pháp. Nghiêm cấm sao chép, phân phối, chỉnh sửa hoặc sử dụng cho mục đích thương mại khi chưa có sự đồng ý bằng văn bản.</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">5. Trách nhiệm của Người sử dụng</h3><p className="mb-2">Người sử dụng cam kết:</p><ul className="space-y-1"><li>• Cung cấp thông tin chính xác, trung thực khi đăng ký tư vấn hoặc gửi form liên hệ.</li><li>• Không sử dụng Website vào mục đích vi phạm pháp luật, gian lận, phát tán virus, spam.</li><li>• Không giả mạo danh tính hoặc thu thập thông tin của người khác một cách trái phép.</li></ul></div>
      <div><h3 className="font-bold text-slate-800 mb-2">6. Thông tin dự án và miễn trừ trách nhiệm</h3><p className="mb-2">Các thông tin về dự án Mega City 2 mang tính chất tham khảo. Kim Oanh Group có quyền thay đổi thông tin mà không cần thông báo trước.</p><p>Website không phải là kênh nhận đặt cọc hoặc giao kết hợp đồng mua bán. Mọi giao dịch chính thức chỉ được thực hiện tại văn phòng kinh doanh được ủy quyền.</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">7. Liên kết bên thứ ba</h3><p>Website có thể chứa liên kết đến website hoặc dịch vụ của bên thứ ba. Chúng tôi không chịu trách nhiệm về nội dung, chính sách bảo mật hoặc hoạt động của các website đó.</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">8. Giới hạn trách nhiệm</h3><p className="mb-2">Kim Oanh Group không chịu trách nhiệm đối với:</p><ul className="space-y-1"><li>• Thiệt hại phát sinh do việc sử dụng hoặc không thể sử dụng Website.</li><li>• Lỗi kỹ thuật, gián đoạn dịch vụ ngoài tầm kiểm soát.</li><li>• Quyết định mua bán của khách hàng dựa trên thông tin tham khảo.</li></ul></div>
      <div><h3 className="font-bold text-slate-800 mb-2">9. Thay đổi Điều khoản</h3><p>Chúng tôi có quyền cập nhật, sửa đổi Điều khoản này bất cứ lúc nào. Phiên bản mới sẽ được đăng tải trên Website và có hiệu lực ngay khi công bố.</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">10. Luật áp dụng và giải quyết tranh chấp</h3><p>Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Tranh chấp được ưu tiên giải quyết thông qua thương lượng. Trường hợp không thương lượng được, tranh chấp sẽ được đưa ra Tòa án có thẩm quyền tại tỉnh Đồng Nai.</p></div>
    </>
  );
}

function PrivacyContent() {
  return (
    <>
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 text-slate-700 text-sm leading-relaxed">
        Chính sách này giải thích cách Công ty Cổ phần Tập đoàn Địa ốc Kim Oanh (Kim Oanh Group) thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu cá nhân của bạn khi sử dụng Website megacity2nhontach.com, phù hợp với Nghị định 13/2023/NĐ-CP.
      </div>
      <div><h3 className="font-bold text-slate-800 mb-2">1. Đơn vị xử lý dữ liệu</h3><p>Tên đơn vị: Công ty Cổ phần Tập đoàn Địa ốc Kim Oanh</p><p>Địa chỉ: 268A Phan Trung, phường Tam Hiệp, tỉnh Đồng Nai, Việt Nam</p><p>Hotline: 0937.587.438</p><p>Email: k.homekog@gmail.com</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">2. Dữ liệu cá nhân chúng tôi thu thập</h3><p className="mb-2">Chúng tôi có thể thu thập các thông tin sau khi bạn điền form đăng ký tư vấn, gọi điện/nhắn tin qua Zalo/Messenger, hoặc truy cập Website:</p><ul className="space-y-1"><li>• Họ tên, số điện thoại, email</li><li>• Nhu cầu quan tâm dự án, loại sản phẩm</li><li>• Địa chỉ IP, loại trình duyệt, thời gian truy cập</li><li>• Các thông tin khác bạn chủ động cung cấp</li></ul></div>
      <div><h3 className="font-bold text-slate-800 mb-2">3. Mục đích xử lý dữ liệu</h3><ul className="space-y-1"><li>• Liên hệ tư vấn, ho tro ho so du an Mega City 2</li><li>• Gửi thông tin dự án, chính sách bán hàng, tiến độ</li><li>• Hỗ trợ khách hàng hoàn thiện thủ tục mua nhà</li><li>• Cải thiện chất lượng Website và dịch vụ</li><li>• Tuân thủ yêu cầu của cơ quan nhà nước có thẩm quyền (khi có)</li></ul></div>
      <div><h3 className="font-bold text-slate-800 mb-2">4. Cơ sở pháp lý xử lý dữ liệu</h3><ul className="space-y-1"><li>• Sự đồng ý của bạn (khi gửi form hoặc chấp nhận cookie)</li><li>• Thực hiện hợp đồng / giao dịch tiềm năng</li><li>• Lợi ích hợp pháp của đơn vị</li><li>• Nghĩa vụ pháp lý theo quy định của pháp luật Việt Nam</li></ul></div>
      <div><h3 className="font-bold text-slate-800 mb-2">5. Thời gian lưu trữ</h3><p>Dữ liệu được lưu trữ tối đa 36 tháng kể từ lần tương tác cuối cùng, trừ khi pháp luật yêu cầu lưu trữ lâu hơn hoặc bạn yêu cầu xóa sớm hơn.</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">6. Chia sẻ dữ liệu với bên thứ ba</h3><p className="mb-2">Chúng tôi không bán dữ liệu cá nhân. Dữ liệu chỉ được chia sẻ trong các trường hợp:</p><ul className="space-y-1"><li>• Với nhân viên / bộ phận kinh doanh của Kim Oanh Group để tư vấn</li><li>• Với đối tác kỹ thuật (hosting, hệ thống CRM) có cam kết bảo mật</li><li>• Khi có yêu cầu hợp pháp từ cơ quan nhà nước có thẩm quyền</li><li>• Khi bạn đồng ý rõ ràng</li></ul></div>
      <div><h3 className="font-bold text-slate-800 mb-2">7. Quyền của Chủ thể dữ liệu</h3><p className="mb-2">Theo Nghị định 13/2023/NĐ-CP, bạn có các quyền: được biết, đồng ý hoặc rút lại sự đồng ý, truy cập/chỉnh sửa/xóa dữ liệu, hạn chế xử lý, phản đối việc xử lý, khiếu nại/tố cáo/khởi kiện.</p><p>Liên hệ thực hiện quyền qua email k.homekog@gmail.com hoặc hotline 0937.587.438.</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">8. Bảo mật dữ liệu</h3><p>Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức phù hợp (mã hóa, phân quyền truy cập, tường lửa...) nhằm bảo vệ dữ liệu cá nhân khỏi truy cập trái phép, mất mát hoặc tiết lộ.</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">9. Cookie và công nghệ theo dõi</h3><p>Website có thể sử dụng cookie để ghi nhận phiên truy cập, phân tích lưu lượng và cải thiện trải nghiệm. Bạn có thể tắt cookie trên trình duyệt, tuy nhiên một số chức năng của Website có thể bị ảnh hưởng.</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">10. Thay đổi Chính sách</h3><p>Chúng tôi có thể cập nhật Chính sách này theo thời gian. Phiên bản mới sẽ được đăng tải trên Website kèm ngày cập nhật.</p></div>
      <div><h3 className="font-bold text-slate-800 mb-2">11. Liên hệ</h3><p>Công ty Cổ phần Tập đoàn Địa ốc Kim Oanh</p><p>Địa chỉ: 268A Phan Trung, phường Tam Hiệp, tỉnh Đồng Nai</p><p>Hotline: 0937.587.438</p><p>Email: k.homekog@gmail.com</p></div>
    </>
  );
}

export default function Footer() {
  const [modal, setModal] = useState<"terms" | "privacy" | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 pt-10 pb-28 md:pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="lg:col-span-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/KOG_Web_RGB_01.svg" alt="Kim Oanh Group" className="h-10 w-auto object-contain mb-4" />
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Khu dân cư Mega City 2 Nhơn Trạch. Chủ đầu tư: Cong ty TNHH Khu do thi Phu Hoi. Đơn vị phát triển &amp; phân phối: Kim Oanh Group.
              </p>
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-amber-700">Thành viên của Tập đoàn Kim Oanh</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 mb-4 flex items-center gap-2"><span className="w-0.5 h-4 bg-amber-500 rounded-full" />Thông tin liên hệ</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-600"><MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /><span>Đường 25C, Xã Nhơn Trạch, Tỉnh Đồng Nai</span></li>
                <li><a href="tel:0937587438" className="flex items-center gap-3 text-sm font-semibold text-slate-800 hover:text-amber-600 transition-colors"><Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />0937.587.438</a></li>
                <li><a href="mailto:k.homekog@gmail.com" className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber-600 transition-colors"><Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />k.homekog@gmail.com</a></li>
                <li className="flex items-center gap-3 text-sm text-slate-500"><span className="w-4 h-4 flex items-center justify-center flex-shrink-0"><svg viewBox="0 0 24 24" className="w-4 h-4 fill-amber-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 14.5h-1v-6h1v6zm0-8h-1V7h1v1.5z"/></svg></span>Giờ làm việc: 8:00 – 18:00 (Hàng ngày)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 mb-4 flex items-center gap-2"><span className="w-0.5 h-4 bg-amber-500 rounded-full" />Hỗ Trợ Khách Hàng</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((item) => (
                  <li key={item.id}><a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-amber-600 transition-colors group"><ChevronRight className="w-3 h-3 text-amber-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />{item.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 mb-4 flex items-center gap-2"><span className="w-0.5 h-4 bg-amber-500 rounded-full" />Thông số dự án</h4>
              <ul className="space-y-2.5">
                {PROJECT_INFO.map((item) => (
                  <li key={item.label} className="text-sm"><span className="text-slate-400 text-xs font-medium">{item.label}:</span><span className="text-slate-700 font-medium block mt-0.5">{item.value}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-5">
            <div className="hidden md:flex items-center justify-between gap-3">
              <p className="text-xs text-slate-400">© 2026 Mega City 2 Nhơn Trạch – Thông tin tham khảo, không phải website chính thức của chủ đầu tư.</p>
              <div className="flex items-center gap-4">
                <Link href="/admin" className="text-xs text-slate-400 hover:text-amber-600 transition">Admin</Link>
                <button type="button" onClick={() => setModal("terms")} className="text-xs text-slate-400 hover:text-amber-600 transition">Điều khoản sử dụng</button>
                <button type="button" onClick={() => setModal("privacy")} className="text-xs text-slate-400 hover:text-amber-600 transition">Chính sách bảo mật</button>
                <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-600 flex items-center justify-center transition-colors shadow-sm" aria-label="Lên đầu trang"><ArrowUp className="w-4 h-4 text-white" /></button>
              </div>
            </div>
            <div className="md:hidden">
              <p className="text-xs text-slate-400 text-center mb-3 leading-relaxed">© 2026 Mega City 2 Nhơn Trạch<br />Thông tin tham khảo, không phải website chính thức.</p>
              <div className="flex items-center justify-center gap-4 pb-2">
                <button type="button" onClick={() => setModal("terms")} className="text-xs text-slate-500 hover:text-amber-600 transition font-medium">Điều khoản sử dụng</button>
                <span className="text-slate-300 text-xs">|</span>
                <button type="button" onClick={() => setModal("privacy")} className="text-xs text-slate-500 hover:text-amber-600 transition font-medium">Chính sách bảo mật</button>
                <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-600 flex items-center justify-center transition-colors shadow-sm ml-1" aria-label="Lên đầu trang"><ArrowUp className="w-4 h-4 text-white" /></button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {mounted && modal && (<LegalModal type={modal} onClose={() => setModal(null)} />)}
    </>
  );
}