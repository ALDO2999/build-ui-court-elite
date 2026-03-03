import { cn } from "@/lib/cn";
import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
}

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold uppercase tracking-wide transition-all duration-300 cursor-pointer",
        size === "default" && "h-12 px-8 text-sm",
        size === "lg" && "h-14 px-10 text-base",
        variant === "primary" &&
          "bg-accent text-white hover:bg-accent-light",
        variant === "secondary" &&
          "bg-foreground text-background hover:opacity-90",
        variant === "outline" &&
          "border border-foreground text-foreground hover:bg-foreground hover:text-background",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
