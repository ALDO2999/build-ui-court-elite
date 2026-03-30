"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Calendar, Clock, MapPin, Users, Trophy, MessageCircle } from "lucide-react";
import type { Event } from "@/lib/types";
import { SOCIAL_LINKS } from "@/lib/constants";

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    weekday: "long",
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

export function EventModal({ event, onClose }: EventModalProps) {
  useEffect(() => {
    if (!event) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [event]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!event) return null;

  const waMessage = encodeURIComponent(`Halo, saya ingin mendaftar event: ${event.title} (${formatDate(event.date)})`);
  const waUrl = `${SOCIAL_LINKS.whatsapp}?text=${waMessage}`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Image */}
        <div className="relative h-52 shrink-0">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Category badge */}
          <span
            className={`absolute bottom-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full ${
              categoryColors[event.category] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {event.category}
          </span>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 flex flex-col gap-5">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{event.title}</h2>
          </div>

          {/* Meta info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-2 text-sm text-muted">
              <Calendar className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Clock className="w-4 h-4 shrink-0 text-accent" />
              <span>{event.time} WIB</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="w-4 h-4 shrink-0 text-accent" />
              <span>{event.location}</span>
            </div>
            {event.prize && (
              <div className="flex items-center gap-2 text-sm text-muted">
                <Trophy className="w-4 h-4 shrink-0 text-accent" />
                <span>{event.prize}</span>
              </div>
            )}
          </div>

          {/* Slots */}
          {event.spots !== undefined && event.spotsLeft !== undefined && (
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Users className="w-4 h-4 text-accent" />
                  <span>Slot Tersedia</span>
                </div>
                <span className="text-sm font-bold text-accent">
                  {event.spotsLeft} / {event.spots}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all"
                  style={{
                    width: `${((event.spots - event.spotsLeft) / event.spots) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-sm text-muted leading-relaxed">{event.description}</p>

          {/* CTA */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            Daftar via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
