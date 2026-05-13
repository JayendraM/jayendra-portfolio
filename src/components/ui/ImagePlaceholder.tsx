import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  className?: string;
  aspect?: "16/9" | "1/1" | "3/4" | "4/3";
  caption?: string;
  ringed?: boolean;
  image?: string;
};

export function ImagePlaceholder({
  label = "PHOTO",
  className,
  aspect = "16/9",
  caption,
  ringed = true,
  image,
}: Props) {
  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl",
          !image && "noise bg-surface-2",
          ringed && "ring-1 ring-accent/40",
        )}
        style={{ aspectRatio: aspect.replace("/", " / ") }}
      >
        {image ? (
          <Image
            src={image}
            alt={label}
            fill
            sizes="(max-width: 1280px) 100vw, 1240px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-subtle-foreground">
              {label}
            </span>
          </div>
        )}
        {/* subtle corner ticks — z-10 so they sit on top of the image */}
        <span className="absolute top-3 left-3 w-3 h-px bg-accent/50 z-10" />
        <span className="absolute top-3 left-3 h-3 w-px bg-accent/50 z-10" />
        <span className="absolute top-3 right-3 w-3 h-px bg-accent/50 z-10" />
        <span className="absolute top-3 right-3 h-3 w-px bg-accent/50 z-10" />
        <span className="absolute bottom-3 left-3 w-3 h-px bg-accent/50 z-10" />
        <span className="absolute bottom-3 left-3 h-3 w-px bg-accent/50 z-10" />
        <span className="absolute bottom-3 right-3 w-3 h-px bg-accent/50 z-10" />
        <span className="absolute bottom-3 right-3 h-3 w-px bg-accent/50 z-10" />
      </div>
      {caption && (
        <div className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {caption}
        </div>
      )}
    </div>
  );
}