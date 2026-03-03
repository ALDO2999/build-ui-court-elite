import { cn } from "@/lib/cn";
import { type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className, id, ...props }: TextareaProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "w-full px-4 py-3 border border-muted-foreground/30 rounded-lg bg-white text-foreground",
          "placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent",
          "transition-all duration-200 resize-none",
          className
        )}
        rows={4}
        {...props}
      />
    </div>
  );
}
