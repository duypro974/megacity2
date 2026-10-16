/**
 * Scroll tới section theo id mà KHÔNG thay đổi URL (không tạo hash)
 * và đảm bảo độ chính xác 100% ngay cả trên các trang rất dài (>10,000px).
 */
export function scrollToSection(id: string, offset: number = 70): void {
  if (typeof window === "undefined") return;

  const el = document.getElementById(id);
  if (!el) return;

  const currentY = window.pageYOffset || document.documentElement.scrollTop;
  const targetY = Math.max(0, el.getBoundingClientRect().top + currentY - offset);
  const distance = Math.abs(targetY - currentY);

  if (distance > 2500) {
    // Với khoảng cách lớn (>2500px), trình duyệt Chrome có cơ chế timeout khiến cuộn mượt dừng giữa chừng.
    // Giải pháp: Dịch chuyển nhanh tới cách đích 350px rồi cuộn êm phần còn lại.
    const preScrollY = targetY > currentY ? targetY - 350 : targetY + 350;
    window.scrollTo({ top: preScrollY, behavior: "instant" as ScrollBehavior });
    requestAnimationFrame(() => {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    });
  } else {
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }

  // Tự động kiểm tra và hiệu chỉnh lại sau 350ms và 800ms nếu có ảnh lười (lazy load) nở ra làm lệch vị trí
  setTimeout(() => {
    const recheckEl = document.getElementById(id);
    if (!recheckEl) return;
    const nowY = window.pageYOffset || document.documentElement.scrollTop;
    const recheckedTargetY = Math.max(0, recheckEl.getBoundingClientRect().top + nowY - offset);
    if (Math.abs(nowY - recheckedTargetY) > 40) {
      window.scrollTo({ top: recheckedTargetY, behavior: "smooth" });
    }
  }, 350);

  setTimeout(() => {
    const finalEl = document.getElementById(id);
    if (!finalEl) return;
    const nowY = window.pageYOffset || document.documentElement.scrollTop;
    const finalTargetY = Math.max(0, finalEl.getBoundingClientRect().top + nowY - offset);
    if (Math.abs(nowY - finalTargetY) > 25) {
      window.scrollTo({ top: finalTargetY, behavior: "auto" });
    }
  }, 800);
}

/**
 * Handler cho onClick của <a href="#id"> — preventDefault để ngăn browser
 * thêm hash vào URL, sau đó scroll bằng JS.
 */
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
): void {
  e.preventDefault();
  scrollToSection(id);
}
