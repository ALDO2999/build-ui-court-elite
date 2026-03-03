import { Check } from "lucide-react";
import type { Court } from "@/lib/types";

interface CourtInfoProps {
  court: Court;
}

export function CourtInfo({ court }: CourtInfoProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          {court.name}
        </h1>
        <div className="mt-2 flex items-center gap-3 text-muted">
          <span>{court.type}</span>
          <span>&middot;</span>
          <span>{court.surface}</span>
        </div>
      </div>

      <p className="text-muted text-lg leading-relaxed">
        {court.description}
      </p>

      <div>
        <h3 className="font-semibold text-foreground mb-4">Amenities</h3>
        <div className="grid grid-cols-2 gap-3">
          {court.amenities.map((amenity) => (
            <div key={amenity} className="flex items-center gap-2 text-sm text-muted">
              <Check className="w-4 h-4 text-accent shrink-0" />
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface rounded-2xl p-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">
            ${court.hourlyRate}
          </span>
          <span className="text-muted">/hour</span>
        </div>
      </div>
    </div>
  );
}
