import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean; // white text on dark background
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4",
            light ? "text-amber-400" : "text-amber-600"
          )}
        >
          <span
            className={cn(
              "inline-block w-6 h-0.5 rounded-full",
              light ? "bg-amber-400" : "bg-amber-500"
            )}
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-black leading-tight tracking-tight",
          "text-[clamp(1.6rem,3.5vw,2.5rem)]",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-white/60" : "text-slate-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
