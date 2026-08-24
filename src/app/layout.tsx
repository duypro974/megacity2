import type { Metadata } from "next";
import "./globals.css";
import ContactSidebar from "@/components/ContactSidebar";

export const metadata: Metadata = {
  metadataBase: new URL("https://kimoanhdongnai.com.vn"),
  title: {
    default: "Kim Oanh Đồng Nai – Thông tin dự án bất động sản Kim Oanh tại Đồng Nai",
    template: "%s | Kim Oanh Đồng Nai",
  },
  description:
    "Cổng thông tin tổng hợp các dự án bất động sản Kim Oanh tại Đồng Nai. Tìm hiểu thông tin dự án Mega City 2 Nhơn Trạch, K-Home CityView và kết nối tư vấn.",
  authors: [{ name: "Kim Oanh Đồng Nai" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  openGraph: {
    title: "Kim Oanh Đồng Nai – Thông tin dự án bất động sản Kim Oanh tại Đồng Nai",
    description:
      "Cổng thông tin dự án bất động sản Kim Oanh tại Đồng Nai. Mega City 2 Nhơn Trạch, K-Home CityView và các dự án đang được hỗ trợ.",
    type: "website",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [
      {
        url: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/megacity2/overview/1.jpg",
        width: 1280,
        height: 720,
        alt: "Kim Oanh Đồng Nai – Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kim Oanh Đồng Nai – Thông tin dự án bất động sản Kim Oanh",
    description: "Thông tin dự án bất động sản Kim Oanh tại Đồng Nai – Mega City 2, K-Home CityView.",
    images: [
      "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/megacity2/overview/1.jpg",
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://kimoanhdongnai.com.vn" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        {/*
          Font loading strategy — non-render-blocking:
          - preconnect warms up DNS/TCP early
          - preload as="style" tells browser to fetch font CSS at high priority
          - rel="stylesheet" media="print" + inline onLoad script swaps to "all"
            after load → font never blocks first paint
          - Only weights actually used: 400 (body), 500 (medium), 600 (semibold),
            700 (bold), 800 (extrabold). Removed 300/900/italic.
          - display=swap ensures text visible in fallback font while loading
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap"
        />
        {/*
          JSON-LD — Chỉ đặt schema áp dụng cho TOÀN SITE ở đây:
          WebSite + Organization.
          LocalBusiness đặt riêng tại trang chủ (page.tsx) và trang liên hệ
          để tránh noise trên bài tin tức và cluster pages.
          Các schema trang-cụ-thể (FAQPage, Article, RealEstateListing...)
          đặt trong từng page.tsx tương ứng.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Kim Oanh Đồng Nai",
              url: "https://kimoanhdongnai.com.vn",
              description: "Cổng thông tin dự án bất động sản Kim Oanh tại Đồng Nai. Mega City 2 Nhơn Trạch, K-Home CityView.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://kimoanhdongnai.com.vn/#organization",
              name: "Kim Oanh Đồng Nai",
              url: "https://kimoanhdongnai.com.vn",
              logo: {
                "@type": "ImageObject",
                url: "https://kimoanhdongnai.com.vn/KOG_Web_RGB_01.svg",
              },
              sameAs: [
                "https://www.facebook.com/kimoanhhomes",
              ],
            }),
          }}
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Be Vietnam Pro', system-ui, sans-serif" }}
      >
        <ContactSidebar />
        {children}
      </body>
    </html>
  );
}
