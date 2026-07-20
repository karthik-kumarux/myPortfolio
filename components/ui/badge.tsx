import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "cta" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
        variant === "default" && "bg-surface-elevated text-text-secondary border border-border",
        variant === "accent" && "bg-accent-muted text-accent border border-accent/20",
        variant === "cta" && "bg-cta/15 text-cta border border-cta/20",
        variant === "outline" && "border border-border text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
