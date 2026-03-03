"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Court } from "@/lib/types";

interface CourtSelectorProps {
  courts: Court[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export function CourtSelector({ courts, selected, onSelect }: CourtSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courts.map((court) => (
        <button
          key={court.id}
          onClick={() => onSelect(court.id)}
          className={cn(
            "text-left rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer",
            selected === court.id
              ? "border-accent shadow-lg"
              : "border-transparent hover:border-muted-foreground/30"
          )}
        >
          <div className="relative aspect-[16/10]">
            <Image
              src={court.image}
              alt={court.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="p-5 bg-white">
            <h3 className="font-semibold text-foreground">{court.name}</h3>
            <p className="text-sm text-muted mt-1">
              {court.type} &middot; {court.surface}
            </p>
            <p className="text-accent font-semibold mt-2">
              ${court.hourlyRate}/hour
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
