import { cn } from "@/lib/utils";

export function MetricCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 font-mono text-[11px] md:text-xs uppercase tracking-[0.16em] text-accent",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function MetricPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent-soft px-3 py-1 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-accent">
      {children}
    </span>
  );
}
