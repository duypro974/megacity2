import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kimoanh.com"),
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Kim Oanh Đồng Nai – Thông tin dự án bất động sản Kim Oanh",
    description: "Thông tin dự án bất động sản Kim Oanh tại Đồng Nai – Mega City 2, K-Home CityView.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://kimoanh.com" },
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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              name: "Mega City 2 Nhơn Trạch",
              description:
                "Khu dân cư theo quy hoạch ~83,94 ha tại xã Nhơn Trạch, tỉnh Đồng Nai. Chủ đầu tư: Công ty TNHH Khu đô thị Phú Hội. Phát triển: Kim Oanh Group. 2.421 lô phân lô bán nền theo QĐ 1772/QĐ-UBND ngày 30/05/2025.",
              url: "https://megacity2nhontach.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Đường 25C",
                addressLocality: "Xã Nhơn Trạch",
                addressRegion: "Đồng Nai",
                addressCountry: "VN",
              },
              brand: { "@type": "Organization", name: "Kim Oanh Group" },
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "1150000000",
                highPrice: "4000000000",
                priceCurrency: "VND",
                description: "Giá chuyển nhượng tham khảo, tùy vị trí và thời điểm giao dịch.",
              },
              disclaimer: "Thông tin mang tính tham khảo, không phải tài liệu chính thức của chủ đầu tư.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mega City 2 Nhơn Trạch – Kim Oanh Group",
              description: "Tư vấn và giới thiệu dự án khu dân cư Mega City 2 tại xã Nhơn Trạch, tỉnh Đồng Nai.",
              url: "https://megacity2nhontach.com",
              telephone: "+840937587438",
              email: "k.homekog@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Đường 25C",
                addressLocality: "Xã Nhơn Trạch",
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
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Dự án Mega City 2 nằm ở đâu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mega City 2 tọa lạc tại Đường 25C, xã Nhơn Trạch, tỉnh Đồng Nai. Dự án nằm tại khu vực Long Tân – Phú Hội trước đây, tiếp giáp TP.HCM qua đường 25C.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Mega City 2 đã được phép phân lô bán nền chưa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Có. UBND tỉnh Đồng Nai đã ban hành Quyết định số 1772/QĐ-UBND ngày 30/5/2025 chấp thuận 2.421 lô được chuyển nhượng quyền sử dụng đất theo hình thức phân lô bán nền.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Giá đất nền Mega City 2 hiện nay bao nhiêu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Giá chuyển nhượng tham khảo từ khoảng 1,15 tỷ đồng/nền tùy vị trí, diện tích và thời điểm giao dịch. Liên hệ 0937.587.438 để nhận báo giá cập nhật.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Chủ đầu tư Mega City 2 là ai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Chủ đầu tư chính thức là Công ty TNHH Khu đô thị Phú Hội. Đơn vị phát triển và phân phối là Kim Oanh Group.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Thời hạn xây dựng nhà ở tại Mega City 2 là bao lâu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Theo Quyết định 1772/QĐ-UBND, cá nhân nhận chuyển nhượng phải hoàn thành xây dựng nhà ở trước ngày 31/12/2029.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Be Vietnam Pro', system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
