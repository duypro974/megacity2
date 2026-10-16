"use client";

import { type ComponentPropsWithoutRef } from "react";
import { scrollToSection } from "@/lib/scrollTo";

interface ScrollLinkProps extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  to: string;
  children: React.ReactNode;
}

export default function ScrollLink({
  to,
  children,
  className = "",
  onClick,
  ...props
}: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
    scrollToSection(to);
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
