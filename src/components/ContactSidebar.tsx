"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone } from "lucide-react";

const CONTACTS = [
  {
    label: "Hotline",
    href: "tel:0907839986",
    title: "Gọi ngay: 0937.587.438",
    bg: "bg-primary-600 hover:bg-primary-700",
    icon: (
      <Phone className="w-5 h-5 text-white" />
    ),
  },
  {
    label: "Zalo",
    href: "https://zalo.me/0907839986",
    title: "Chat Zalo",
    bg: "bg-blue-500 hover:bg-blue-600",
    icon: (
      /* Zalo SVG icon */
      <svg viewBox="0 0 48 48" className="w-5 h-5 fill-white">
        <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm9.4 28.1c-.3.8-1.7 1.4-2.5 1.5-.6.1-1.4.1-2.2-.2-.5-.2-1.1-.4-1.9-.7-3.3-1.4-5.5-4.7-5.7-4.9-.1-.2-1.3-1.7-1.3-3.3 0-1.6.8-2.3 1.1-2.7.3-.3.7-.4.9-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.9.1.1.1.3 0 .5-.1.2-.2.3-.3.5-.1.1-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.2 1.7 2 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1.3.1 1.8.8 2.1 1 .3.2.5.3.6.4.1.3.1 1.1-.2 1.9z"/>
      </svg>
    ),
  },
  {
    label: "Messenger",
    href: "https://m.me/kimoanhgroup",
    title: "Chat Messenger",
    bg: "bg-[#0084ff] hover:bg-blue-600",
    icon: (
      /* Messenger SVG icon */
      <svg viewBox="0 0 48 48" className="w-5 h-5 fill-white">
        <path d="M24 4C12.95 4 4 12.95 4 24c0 5.9 2.4 11.2 6.2 15.1L10 44l5.1-.2C18.2 45.3 21 46 24 46c11.05 0 20-8.95 20-20S35.05 4 24 4zm2 27l-5-5.3-9.7 5.3 10.7-11.4 5.1 5.3 9.6-5.3L26 31z"/>
      </svg>
    ),
  },
];

export default function ContactSidebar() {
  // Mount scroll-reveal observer for the whole page
  useScrollReveal();
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5">
      {CONTACTS.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target={c.href.startsWith("http") ? "_blank" : undefined}
          rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
          title={c.title}
          className={`group relative flex items-center justify-center
                      w-11 h-11 rounded-full shadow-lg
                      transition-all duration-200 hover:scale-110
                      ${c.bg}`}
        >
          {c.icon}
          {/* Tooltip */}
          <span className="absolute right-14 whitespace-nowrap
                           bg-slate-900 text-white text-xs font-medium
                           px-2 py-1 rounded-md shadow
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-150 pointer-events-none">
            {c.title}
          </span>
        </a>
      ))}
    </div>
  );
}
