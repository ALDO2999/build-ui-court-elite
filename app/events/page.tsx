"use client";

import { useState } from "react";
import { EventCard } from "@/components/events/EventCard";
import { EventModal } from "@/components/events/EventModal";
import { events } from "@/lib/placeholder-data";
import type { Event } from "@/lib/types";

const categories = ["Semua", "Tournament", "Clinic", "Social"];

export default function EventsPage() {
  const [selected, setSelected] = useState<Event | null>(null);
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? events
      : events.filter((e) => e.category === activeCategory);

  return (
    <main className="min-h-screen bg-background pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Jadwal & Kegiatan
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Events
          </h1>
          <p className="mt-3 text-muted max-w-lg">
            Ikuti turnamen, klinik, dan sesi sosial yang kami adakan. Daftarkan dirimu dan jadilah bagian dari komunitas.
          </p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-foreground text-white"
                  : "bg-gray-100 text-muted hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-muted text-center py-20">Tidak ada event untuk kategori ini.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} onClick={setSelected} />
            ))}
          </div>
        )}
      </div>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
