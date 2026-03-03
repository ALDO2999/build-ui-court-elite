import { cn } from "@/lib/cn";
import {
  Dumbbell,
  Car,
  Coffee,
  Lock,
  Sofa,
  Trophy,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  racquet: Trophy,
  sofa: Sofa,
  lock: Lock,
  car: Car,
  dumbbell: Dumbbell,
  coffee: Coffee,
};

interface IconCircleProps {
  icon: string;
  className?: string;
}

export function IconCircle({ icon, className }: IconCircleProps) {
  const Icon = iconMap[icon] || Trophy;

  return (
    <div
      className={cn(
        "w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4",
        className
      )}
    >
      <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
    </div>
  );
}
