"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Mounts the global scroll-reveal observer.
 * Drop anywhere in the tree — runs once on mount.
 */
export default function ScrollRevealInit() {
  useScrollReveal();
  return null;
}
