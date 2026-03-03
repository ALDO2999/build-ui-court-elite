import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-accent text-white rounded-full",
        className
      )}
    >
      {children}
    </span>
  );
}
