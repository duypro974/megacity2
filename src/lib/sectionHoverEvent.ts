/**
 * Dispatch hover label event to SectionNav.
 * Call with a string when hovering, null when leaving.
 */
export function emitSectionHover(label: string | null) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<{ label: string | null }>("section-item-hover", {
      detail: { label },
    })
  );
}
