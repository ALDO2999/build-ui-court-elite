"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCircle } from "@/components/ui/IconCircle";
import { FacilityModal } from "@/components/home/FacilityModal";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";
import { facilities } from "@/lib/placeholder-data";
import type { Facility } from "@/lib/types";
import { ArrowRight } from "lucide-react";

export function FacilitiesSection() {
  const { ref, inView } = useInView();
  const [selected, setSelected] = useState<Facility | null>(null);

  return (
    <Section id="facilities" background="beige">
      <SectionHeading
        title="Premium Facilities"
        subtitle="Every aspect of Court Elite is designed to deliver an exceptional experience, from the moment you arrive."
      />

      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {facilities.map((facility) => (
          <button
            key={facility.title}
            onClick={() => setSelected(facility)}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left group cursor-pointer w-full"
          >
            <IconCircle icon={facility.icon} />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {facility.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              {facility.description}
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:gap-2.5 transition-all duration-200">
              Lihat Detail
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        ))}
      </div>

      <FacilityModal facility={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
