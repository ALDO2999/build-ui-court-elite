import { cn } from "@/lib/cn";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "beige" | "black";
}

export function Section({
  children,
  id,
  className,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32 px-6",
        background === "white" && "bg-background",
        background === "beige" && "bg-surface",
        background === "black" && "bg-foreground text-background",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
