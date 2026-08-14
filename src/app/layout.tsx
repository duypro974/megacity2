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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
          rel="stylesheet"
        />
        {/*
          JSON-LD Organization + Website schema — chỉ đặt các schema
          áp dụng cho TOÀN SITE ở đây.
          Các schema trang-cụ-thể (FAQPage, Article, RealEstateListing...)
          đặt trong từng page.tsx tương ứng để tránh duplicate/noise.
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
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://kimoanhdongnai.com.vn/mega-city-2/faq",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://kimoanhdongnai.com.vn/#localbusiness",
              name: "Kim Oanh Đồng Nai – Thông tin dự án Mega City 2 Nhơn Trạch",
              description: "Tư vấn và giới thiệu dự án khu dân cư Mega City 2 tại xã Nhơn Trạch, tỉnh Đồng Nai.",
              url: "https://kimoanhdongnai.com.vn",
              telephone: "+840937587438",
              email: "k.homekog@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "268A Phan Trung",
                addressLocality: "Phường Tam Hiệp",
                addressRegion: "Đồng Nai",
                addressCountry: "VN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 10.7567,
                longitude: 106.9667,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "08:00",
                closes: "21:00",
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
