import { cn } from "@/lib/utils";

export function SectionLabel({
  number,
  label,
  className,
}: {
  number: string;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-sm uppercase tracking-[0.18em] text-subtle-foreground",
        className,
      )}
    >
      {number} / {label}
    </span>
  );
}
