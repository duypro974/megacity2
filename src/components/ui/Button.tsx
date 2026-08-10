import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
  external?: boolean;
}

const variantMap = {
  primary:
    "bg-amber-500 hover:bg-amber-400 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30",
  outline:
    "border border-slate-300 text-slate-700 hover:border-amber-500 hover:text-amber-600 bg-white",
  ghost: "text-slate-700 hover:text-amber-600 hover:bg-amber-50",
  dark: "bg-slate-900 hover:bg-slate-800 text-white",
};

const sizeMap = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 font-bold rounded-full transition-all duration-200",
    "hover:-translate-y-0.5 active:translate-y-0",
    variantMap[variant],
    sizeMap[size],
    className
  );

  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
    </>
  );

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
