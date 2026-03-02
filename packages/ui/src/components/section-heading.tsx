import { ReactNode } from "react";
import clsx from "clsx";

interface SectionHeadingProps {
  label?: string;
  title: string;
  eyebrow?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  eyebrow,
  children,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "space-y-4",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">{eyebrow}</p>
      )}
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        {label && (
          <p className="text-base text-white/70 sm:text-lg">
            {label}
          </p>
        )}
      </div>
      {children && <div className="text-white/70">{children}</div>}
    </div>
  );
}
