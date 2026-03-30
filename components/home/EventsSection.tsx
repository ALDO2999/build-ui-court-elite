"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/events/EventCard";
import { EventModal } from "@/components/events/EventModal";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";
import { events } from "@/lib/placeholder-data";
import type { Event } from "@/lib/types";

export function EventsSection() {
  const { ref, inView } = useInView();
  const [selected, setSelected] = useState<Event | null>(null);

  // Show only the first 3 upcoming events on the homepage
  const preview = events.slice(0, 3);

  return (
    <Section id="events" background="white">
      <SectionHeading
        title="Upcoming Events"
        subtitle="Tournaments, clinics, and social sessions — join the action and be part of the Court Elite community."
      />

      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {preview.map((event) => (
          <EventCard key={event.id} event={event} onClick={setSelected} />
        ))}
      </div>

      {events.length > 3 && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground text-sm font-semibold text-foreground hover:bg-foreground hover:text-white transition-colors duration-300"
          >
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
