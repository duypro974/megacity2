"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

import OneEraQuickNav from "@/components/one-era/OneEraQuickNav";
import OneEraHero from "@/components/one-era/OneEraHero";
import OneEraInteractive3D from "@/components/one-era/OneEraInteractive3D";
import OneEraInteractiveMap3D from "@/components/one-era/OneEraInteractiveMap3D";
import OneEraOverview from "@/components/one-era/OneEraOverview";
import OneEraLocation from "@/components/one-era/OneEraLocation";
import OneEraPartners from "@/components/one-era/OneEraPartners";
import OneEraCentralDistrict from "@/components/one-era/OneEraCentralDistrict";
import OneEraProducts from "@/components/one-era/OneEraProducts";
import OneEraInteriorShowcase from "@/components/one-era/OneEraInteriorShowcase";
import OneEraAmenities from "@/components/one-era/OneEraAmenities";
import OneEraGreenSmart from "@/components/one-era/OneEraGreenSmart";
import OneEraPricingPolicy from "@/components/one-era/OneEraPricingPolicy";
import OneEraBrochureGallery from "@/components/one-era/OneEraBrochureGallery";
import OneEraLeafletDownload from "@/components/one-era/OneEraLeafletDownload";
import OneEraFaqSection from "@/components/one-era/OneEraFaqSection";
import OneEraTopicClusterSection from "@/components/one-era/OneEraTopicClusterSection";
import OneEraLeadForm from "@/components/one-era/OneEraLeadForm";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";

export default function OneEraClient() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const handleOpenImage = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const handleCloseImage = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-[#06080e] text-[#f5f2eb] selection:bg-[#dfb552] selection:text-[#06080e] font-sans antialiased">
      {/* Floating Header & Quick Navigation */}
      <CorpHeader hideOnScroll />
      <OneEraQuickNav />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section with 3D Flythrough Video & Carousel */}
        <OneEraHero />

        {/* 2. Official Virtual Tour 360° Interactive Experience */}
        <OneEraInteractive3D />

        {/* 3. Interactive 3D Master Plan 50ha with 7 Hotspots */}
        <OneEraInteractiveMap3D />

        {/* 4. Overview & Master Plan 50ha */}
        <OneEraOverview onOpenImage={handleOpenImage} />

        {/* 3. Strategic Location & Connectivity Tam Giao */}
        <OneEraLocation onOpenImage={handleOpenImage} />

        {/* 4. Global Consortium: Kinera & 3 Japanese Partners */}
        <OneEraPartners />

        {/* 5. Central District Subdivision & Master Map */}
        <OneEraCentralDistrict onOpenImage={handleOpenImage} />

        {/* 6. Typical Products: Townhouse & Shophouse */}
        <OneEraProducts onOpenImage={handleOpenImage} />

        {/* 7. Japanese Interior 3D Showcase */}
        <OneEraInteriorShowcase onOpenImage={handleOpenImage} />

        {/* 8. All-In-One Amenities System */}
        <OneEraAmenities onOpenImage={handleOpenImage} />

        {/* 9. Green & Smart Standards: Fitwel 3-Star & EDGE & AI */}
        <OneEraGreenSmart />

        {/* 10. Pricing & Payment Policy Q4/2028 */}
        <OneEraPricingPolicy />

        {/* 11. Official Brochure & Perspective 3D Gallery (28 Spreads + 24 Renders) */}
        <OneEraBrochureGallery onOpenImage={handleOpenImage} />

        {/* 12. Download Official Leaflet & Brochure PDF */}
        <OneEraLeafletDownload onOpenImage={handleOpenImage} />

        {/* 12. Frequently Asked Questions (FAQ) */}
        <OneEraFaqSection />

        {/* 13. Topic Cluster Deep-Dive Hub */}
        <OneEraTopicClusterSection />

        {/* 14. VIP Registration Lead Form */}
        <OneEraLeadForm />
      </main>

      {/* Shared Footer */}
      <CorpFooter />

      {/* Interactive Lightbox Modal */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={handleCloseImage}
        >
          {/* Close button */}
          <button
            onClick={handleCloseImage}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110 z-10"
            aria-label="Đóng ảnh"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={modalImage.src}
                alt={modalImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="mt-3 text-center text-xs sm:text-sm text-[#f5f2eb] font-medium bg-[#0c121e]/90 px-5 py-2.5 rounded-full border border-[#dfb552]/30 shadow-xl backdrop-blur-md">
              {modalImage.alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
