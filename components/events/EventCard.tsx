"use client";

import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import type { Event } from "@/lib/types";

interface EventCardProps {
  event: Event;
  onClick: (event: Event) => void;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  Tournament: "bg-blue-100 text-blue-700",
  Clinic: "bg-green-100 text-green-700",
  Social: "bg-purple-100 text-purple-700",
};

export function EventCard({ event, onClick }: EventCardProps) {
  return (
    <button
      onClick={() => onClick(event)}
      className="group text-left w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
            categoryColors[event.category] ?? "bg-gray-100 text-gray-700"
          }`}
        >
          {event.category}
        </span>
        {event.prize && (
          <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full bg-yellow-400 text-yellow-900">
            {event.prize}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-1">
          {event.title}
        </h3>
        <p className="text-sm text-muted line-clamp-2 mb-4">
          {event.shortDescription}
        </p>

        <div className="flex flex-col gap-1.5 text-xs text-muted">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
