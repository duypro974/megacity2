"use client";

import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-600 flex items-center justify-center
                 transition-colors shadow-sm"
      aria-label="Lên đầu trang"
    >
      <ArrowUp className="w-4 h-4 text-white" />
    </button>
  );
}
