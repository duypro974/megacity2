"use client";

import { type ComponentPropsWithoutRef } from "react";

interface ScrollLinkProps extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  to: string;
  children: React.ReactNode;
}

export default function ScrollLink({
  to,
  children,
  className = "",
  ...props
}: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
