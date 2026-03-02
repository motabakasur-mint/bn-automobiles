interface MetricPillProps {
  label: string;
  value: string;
}

export function MetricPill({ label, value }: MetricPillProps) {
  return (
    <div className="flex flex-col rounded-full border border-white/15 bg-white/5 px-6 py-4 text-white shadow-[0_0_40px_rgba(255,255,255,0.08)] backdrop-blur">
      <span className="text-sm uppercase tracking-[0.3em] text-white/60">
        {label}
      </span>
      <span className="text-2xl font-semibold text-white">{value}</span>
    </div>
  );
}
