import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://megacity2nhontach.com"),
  title: {
    default: "Mega City 2 Nhơn Trạch | Đất Vàng Cửa Ngõ Sân Bay Long Thành – Kim Oanh Group",
    template: "%s | Mega City 2 Nhơn Trạch",
  },
  description:
    "Mega City 2 Nhơn Trạch – Khu đô thị 84ha, 3.100 sản phẩm đất nền, nhà phố, biệt thự tại mặt tiền đường 25C, Phú Hội. Vị trí vàng giữa 4 trục huyết mạch, gần sân bay Long Thành. Hạ tầng hoàn thiện 95%. Giá từ 1,15 tỷ. Pháp lý đầy đủ – Sổ hồng. Liên hệ ngay!",
  keywords:
    "Mega City 2, Mega City 2 Nhơn Trạch, đất nền Nhơn Trạch, Kim Oanh Group, đất gần sân bay Long Thành, nhà phố Nhơn Trạch, biệt thự Nhơn Trạch, đất nền Phú Hội, khu đô thị Nhơn Trạch, mua đất Nhơn Trạch, đất nền Kim Oanh",
  authors: [{ name: "Kim Oanh Group" }],
  openGraph: {
    title: "Mega City 2 Nhơn Trạch | Kim Oanh Group – Đất Vàng Sân Bay Long Thành",
    description:
      "Khu đô thị hạt nhân 84ha, 3.100 sản phẩm, hạ tầng hoàn thiện 95%, giá từ 1,15 tỷ. Cơ hội đầu tư sinh lời đột phá.",
    type: "website",
    locale: "vi_VN",
    siteName: "Mega City 2 Nhơn Trạch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega City 2 Nhơn Trạch | Kim Oanh Group",
    description: "Khu đô thị hạt nhân 84ha tại cửa ngõ sân bay Long Thành. Giá từ 1,15 tỷ.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://megacity2nhontach.com" },
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
                "Khu đô thị 84ha tại Phú Hội, Nhơn Trạch, Đồng Nai. 3.100 sản phẩm đất nền, nhà phố, biệt thự.",
              url: "https://megacity2nhontach.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Đường 25C",
                addressLocality: "Phú Hội, Nhơn Trạch",
                addressRegion: "Đồng Nai",
                addressCountry: "VN",
              },
              brand: { "@type": "Organization", name: "Kim Oanh Group" },
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "1150000000",
                highPrice: "4000000000",
                priceCurrency: "VND",
              },
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
