import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(15,18,25,0.45)] backdrop-blur-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
