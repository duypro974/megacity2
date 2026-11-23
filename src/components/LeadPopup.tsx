"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";
import { X, Send, CheckCircle, Loader2, Phone, User, Sparkles, Mail } from "lucide-react";
import { PROJECTS, type ProjectPreview } from "@/data/projects";

/* ─────────────────────────────────────────
   Danh sách dự án hỗ trợ
───────────────────────────────────────── */
const POPUP_SCOPE = [
  "one-era",
  "the-link-city",
  "mega-city-2",
  "k-home-cityview",
  "k-home-avenue",
  "k-home-midtown",
];

const POPUP_PROJECTS = PROJECTS.filter((p) => POPUP_SCOPE.includes(p.slug))
  .sort((a, b) => POPUP_SCOPE.indexOf(a.slug) - POPUP_SCOPE.indexOf(b.slug));

/** Helper nhận diện dự án từ URL (hỗ trợ cả cluster / trang con / tin tức) */
function resolveProjectFromPath(pathname: string | null): ProjectPreview | null {
  if (!pathname) return null;

  // 1. Khớp theo URL trang chính hoặc trang con (cluster)
  // Ví dụ: /mega-city-2, /mega-city-2/bang-gia, /the-link-city/mat-bang, /one-era/360...
  const matched = POPUP_PROJECTS.find(
    (p) => p.href.startsWith("/") && (pathname === p.href || pathname.startsWith(p.href + "/"))
  );
  if (matched) return matched;

  // 2. Khớp các bài tin tức / cụm từ có slug dự án
  const slugMatch = POPUP_PROJECTS.find((p) => pathname.includes(p.slug));
  if (slugMatch) return slugMatch;

  return null;
}

/* ─────────────────────────────────────────
   Main Component — Popup + Floating Widget
───────────────────────────────────────── */
export default function LeadPopup({ projectSlug }: { projectSlug?: string }) {
  const pathname = usePathname();

  const [showPopup, setShowPopup]   = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  // Form states
  const [name, setName]         = useState("");
  const [phone, setPhone]       = useState("");
  const [selectedSlug, setSelectedSlug] = useState("");
  const [status, setStatus]     = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isAdmin = pathname?.startsWith("/admin");

  // Nhận diện dự án hiện tại (từ URL trang con/cluster, prop hoặc sessionStorage)
  const currentProject = useMemo(() => {
    // 1. Kiểm tra từ URL hiện tại (ưu tiên cao nhất, đúng theo từng trang con/cluster)
    const fromPath = resolveProjectFromPath(pathname);
    if (fromPath) return fromPath;

    // 2. Nếu có prop projectSlug truyền vào
    if (projectSlug) {
      const fromProp = POPUP_PROJECTS.find((p) => p.slug === projectSlug);
      if (fromProp) return fromProp;
    }

    // 3. Nếu đang chọn trong dropdown
    if (selectedSlug) {
      const fromSelect = POPUP_PROJECTS.find((p) => p.slug === selectedSlug);
      if (fromSelect) return fromSelect;
    }

    // 4. Kiểm tra sessionStorage nếu người dùng vừa bấm xem dự án từ trang chủ
    if (typeof window !== "undefined") {
      try {
        const saved = sessionStorage.getItem("kimoanh_selected_project");
        if (saved) {
          const fromSaved = POPUP_PROJECTS.find((p) => p.slug === saved);
          if (fromSaved) return fromSaved;
        }
      } catch {}
    }

    return null;
  }, [pathname, projectSlug, selectedSlug]);

  // Đồng bộ selectedSlug khi vào trang dự án/trang con
  useEffect(() => {
    if (currentProject) {
      setSelectedSlug(currentProject.slug);
    }
  }, [currentProject]);

  // Hiện popup tự động sau 4 giây khi vào mỗi trang / cluster
  useEffect(() => {
    if (isAdmin) return;

    // Nếu đã đăng ký thành công rồi thì không hiện popup nữa
    try {
      if (sessionStorage.getItem("lead-submitted")) {
        setShowWidget(true);
        return;
      }
    } catch {}

    // Kiểm tra xem trang này đã được người dùng tắt popup trong session chưa
    const closedKey = `popup-closed-${pathname}`;
    try {
      if (sessionStorage.getItem(closedKey)) {
        setShowWidget(true);
        return;
      }
    } catch {}

    // Tự động mở popup sau 4 giây để khách kịp đọc lướt nội dung
    const timer = setTimeout(() => {
      setShowPopup(true);
      setShowWidget(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [pathname, isAdmin]);

  // Lắng nghe sự kiện custom "open-lead-popup"
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ project?: string }>;
      if (customEvent.detail?.project) {
        setSelectedSlug(customEvent.detail.project);
      }
      setShowPopup(true);
      setStatus("idle");
    };

    window.addEventListener("open-lead-popup", handleOpen);
    return () => window.removeEventListener("open-lead-popup", handleOpen);
  }, []);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    // Ghi nhớ trang này đã tắt popup để không làm phiền lại trên cùng trang
    try {
      if (pathname) {
        sessionStorage.setItem(`popup-closed-${pathname}`, "1");
      }
    } catch {}
  }, [pathname]);

  // Đóng khi ấn Escape
  useEffect(() => {
    if (!showPopup) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPopup, closePopup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanPhone = phone.trim().replace(/[\s.-]/g, "");

    if (!cleanName || !cleanPhone) {
      setErrorMsg("Vui lòng nhập họ tên và số điện thoại.");
      setStatus("error");
      return;
    }

    if (cleanPhone.length < 9 || cleanPhone.length > 12) {
      setErrorMsg("Vui lòng nhập số điện thoại hợp lệ (9 - 12 chữ số).");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const projectName = currentProject?.name || "Kim Oanh Group";

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          phone: cleanPhone,
          project: currentProject?.slug || selectedSlug || "general",
          interest: `Dự án: ${projectName}`,
          note: `Khách đăng ký nhận bảng giá & mặt bằng ${projectName} từ trang ${pathname || ""}`,
        }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      try {
        sessionStorage.setItem("lead-submitted", "1");
      } catch {}
    } catch {
      setStatus("error");
      setErrorMsg("Có lỗi xảy ra. Quý khách vui lòng gọi trực tiếp hotline 0937.587.438");
    }
  };

  if (isAdmin) return null;

  return (
    <>
      {/* ── Modal Popup ── */}
      {showPopup && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-fade-in-up"
            style={{ animationDuration: "250ms" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút đóng */}
            <button
              type="button"
              onClick={closePopup}
              aria-label="Đóng popup"
              className="absolute top-3.5 right-3.5 z-10 w-7 h-7 rounded-full bg-white/20 hover:bg-white/35
                         flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {status === "success" ? (
              /* Trạng thái thành công */
              <div className="p-7 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3.5">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">Đăng ký thành công!</h3>
                <p className="text-slate-600 text-xs mb-5 leading-relaxed">
                  Cảm ơn bạn đã quan tâm <strong className="text-emerald-700">{currentProject?.name || "dự án"}</strong>.<br />
                  Chuyên viên sẽ liên hệ gửi bảng giá &amp; ưu đãi trong <strong className="text-emerald-700">5–15 phút</strong>.
                </p>
                <button
                  type="button"
                  onClick={closePopup}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              /* Form nhập cực kỳ tinh giản — CHỈ TÊN & SĐT */
              <>
                {/* Header gọn gàng */}
                <div className="bg-gradient-to-r from-[#16B364] to-emerald-600 px-5 py-4 pr-11 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-base leading-tight truncate">
                      {currentProject
                        ? `Bảng Giá ${currentProject.name}`
                        : "Nhận Bảng Giá Dự Án"}
                    </h3>
                    <p className="text-white/80 text-[11px] mt-0.5">
                      Báo giá gốc CĐT · Phản hồi trong 5–15 phút
                    </p>
                  </div>
                </div>

                {/* Form rút gọn tuyệt đối */}
                <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
                  {/* Trường hợp ở trang chủ chưa ấn dự án nào: Cho chọn dự án */}
                  {!currentProject && (
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1 uppercase tracking-wide">
                        Dự án quan tâm
                      </label>
                      <select
                        value={selectedSlug}
                        onChange={(e) => setSelectedSlug(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs border border-slate-200 rounded-xl
                                   bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-400
                                   focus:border-transparent outline-none transition cursor-pointer"
                      >
                        <option value="">— Chọn dự án quan tâm —</option>
                        {POPUP_PROJECTS.map((p) => (
                          <option key={p.slug} value={p.slug}>
                            {p.name} ({p.location})
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Họ và tên */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1 uppercase tracking-wide">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nguyễn Văn A"
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl
                                   bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-400
                                   focus:border-transparent outline-none transition"
                        required
                      />
                    </div>
                  </div>

                  {/* Số điện thoại */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1 uppercase tracking-wide">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="09xx xxx xxx"
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl
                                   bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-400
                                   focus:border-transparent outline-none transition font-medium"
                        required
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-xs text-center bg-red-50 border border-red-200/60 rounded-xl py-1.5 px-2.5">
                      {errorMsg}
                    </p>
                  )}

                  {/* Nút gửi */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#16B364] hover:bg-emerald-600 text-white py-3 rounded-xl
                               font-bold text-xs uppercase tracking-wide shadow-md shadow-emerald-500/20
                               transition-all duration-200 hover:scale-[1.01]
                               flex items-center justify-center gap-2 disabled:opacity-60 disabled:scale-100 cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin flex-shrink-0" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 flex-shrink-0" />
                        {currentProject ? `Nhận Bảng Giá ${currentProject.name}` : "Gửi Thông Tin Ngay"}
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] text-slate-400 pt-0.5">
                    🔒 Bảo mật thông tin · Phản hồi trong 5–15 phút
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Nút nổi góc dưới trái (Floating Widget) ── */}
      {showWidget && !showPopup && (
        <button
          type="button"
          onClick={() => {
            setShowPopup(true);
            setStatus("idle");
          }}
          aria-label={currentProject ? `Nhận bảng giá ${currentProject.name}` : "Đăng ký tư vấn"}
          className="fixed bottom-20 left-4 z-50 flex items-center gap-0
                     group transition-all duration-300 hover:gap-2 lg:bottom-6 cursor-pointer"
        >
          <div className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30
                          flex items-center justify-center flex-shrink-0 z-10 transition-colors">
            <Mail className="w-4 h-4 text-white" />
          </div>

          <div className="bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold
                          px-3 py-2 rounded-xl shadow-lg whitespace-nowrap
                          max-w-0 overflow-hidden opacity-0
                          group-hover:max-w-[220px] group-hover:opacity-100
                          transition-all duration-300 ease-out -ml-3 pl-5">
            {currentProject ? `Bảng giá ${currentProject.name}` : "Nhận bảng giá"}
          </div>
        </button>
      )}
    </>
  );
}
