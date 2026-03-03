import { cn } from "@/lib/cn";
import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full h-12 px-4 border border-muted-foreground/30 rounded-lg bg-white text-foreground",
          "placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent",
          "transition-all duration-200",
          className
        )}
        {...props}
      />
    </div>
  );
}
