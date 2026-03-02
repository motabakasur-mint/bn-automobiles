import { ReactNode } from "react";
import clsx from "clsx";

interface AuroraProps {
  children: ReactNode;
  className?: string;
}

export function Aurora({ children, className }: AuroraProps) {
  return (
    <div className={clsx("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-[-40%] top-[-30%] h-[60%] rounded-full bg-gradient-to-r from-[#6f52ff]/30 via-[#8ef6ff]/30 to-[#f5cf52]/30 blur-3xl" />
        <div className="absolute inset-x-[-10%] bottom-[-20%] h-[50%] rounded-full bg-gradient-to-r from-[#111827] via-transparent to-[#111827] opacity-40" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
