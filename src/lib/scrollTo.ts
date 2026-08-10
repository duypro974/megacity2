/**
 * Scroll tới section theo id mà KHÔNG thay đổi URL (không tạo hash).
 * Dùng chung cho tất cả navigation trong app.
 */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
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
