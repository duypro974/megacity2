import type { Metadata } from "next";

// ─────────────────────────────────────────────────────────────
// Admin layout — noindex, nofollow
// Trang nội bộ, không cần Google index.
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
