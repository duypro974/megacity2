"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SITE_CONFIG } from "@/data/siteConfig";

/* ── Phone với animation rung ── */
function PhoneButton() {
  return (
    <a
      href={`tel:${SITE_CONFIG.phone}`}
      title={`Gọi ngay: ${SITE_CONFIG.phoneDisplay}`}
      aria-label={`Gọi ngay: ${SITE_CONFIG.phoneDisplay}`}
      className="group relative flex items-center justify-center w-12 h-12 rounded-full
                 bg-green-500 hover:bg-green-600 shadow-lg transition-colors duration-200"
      style={{ animation: "phonePulse 1.2s ease-in-out infinite" }}
    >
      {/* Ripple rings */}
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-60"
        style={{ animation: "ripple 1.2s ease-out infinite" }} />
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-40"
        style={{ animation: "ripple 1.2s ease-out 0.35s infinite" }} />

      {/* Phone icon SVG */}
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white relative z-10"
        style={{ animation: "shake 1.2s ease-in-out infinite" }}>
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>

      {/* Tooltip */}
      <span className="absolute right-14 whitespace-nowrap bg-white text-slate-800 text-sm font-bold
                       px-3.5 py-2 rounded-xl shadow-xl border border-slate-100
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-150 pointer-events-none
                       flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-green-500 flex-shrink-0">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        {SITE_CONFIG.phoneDisplay}
      </span>
    </a>
  );
}

/* ── Zalo button ── */
function ZaloButton() {
  return (
    <a
      href={SITE_CONFIG.social.zalo}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat Zalo"
      aria-label="Chat Zalo"
      className="group relative flex items-center justify-center w-12 h-12 rounded-full
                 bg-blue-500 shadow-lg hover:scale-110 transition-transform duration-200"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/z.png" alt="Zalo" className="w-8 h-8 object-contain" />
      <span className="absolute right-14 whitespace-nowrap bg-slate-900 text-white text-xs font-medium
                       px-2 py-1 rounded-md shadow opacity-0 group-hover:opacity-100
                       transition-opacity duration-150 pointer-events-none">
        Chat Zalo
      </span>
    </a>
  );
}

/* ── Messenger button ── */
function MessengerButton() {
  return (
    <a
      href="https://m.me/61592416756280"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat Messenger"
      aria-label="Chat Messenger"
      className="group relative flex items-center justify-center w-12 h-12 rounded-full
                 shadow-lg hover:scale-110 transition-transform duration-200"
      style={{ background: "linear-gradient(135deg, #0099FF 0%, #A033FF 60%, #FF5C87 100%)" }}
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.83 1.323 5.357 3.405 7.09V22l3.116-1.71A10.56 10.56 0 0 0 12 20.52c5.523 0 10-4.145 10-9.261C22 6.145 17.523 2 12 2zm1.008 12.462-2.548-2.718-4.973 2.718 5.47-5.806 2.611 2.718 4.91-2.718-5.47 5.806z"/>
      </svg>
      <span className="absolute right-14 whitespace-nowrap bg-slate-900 text-white text-xs font-medium
                       px-2 py-1 rounded-md shadow opacity-0 group-hover:opacity-100
                       transition-opacity duration-150 pointer-events-none">
        Chat Messenger
      </span>
    </a>
  );
}

export default function ContactSidebar() {
  useScrollReveal();

  return (
    <>
      {/* Keyframe styles */}
      <style>{`
        @keyframes ripple {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes shake {
          0%,100% { transform: rotate(0deg); }
          15%      { transform: rotate(-18deg); }
          30%      { transform: rotate(18deg); }
          45%      { transform: rotate(-12deg); }
          60%      { transform: rotate(12deg); }
          75%      { transform: rotate(-6deg); }
          90%      { transform: rotate(6deg); }
        }
        @keyframes phonePulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50%     { box-shadow: 0 0 0 10px rgba(34,197,94,0); }
        }
      `}</style>

      {/* Desktop — sidebar phải */}
      <div className="fixed right-4 bottom-4 z-50 flex-col gap-3 hidden md:flex">
        <PhoneButton />
        <ZaloButton />
        <MessengerButton />
      </div>

      {/* Mobile — bottom right floating */}
      <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-2.5 md:hidden">
        <ZaloButton />
        <MessengerButton />
      </div>
    </>
  );
}
