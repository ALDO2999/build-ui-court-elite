"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2 } from "lucide-react";
import type { Facility } from "@/lib/types";

interface FacilityModalProps {
  facility: Facility | null;
  onClose: () => void;
}

export function FacilityModal({ facility, onClose }: FacilityModalProps) {
  useEffect(() => {
    if (!facility) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [facility]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!facility) return null;

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
        {facility.image ? (
          <div className="relative h-56 shrink-0">
            <Image
              src={facility.image}
              alt={facility.title}
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

            {/* Title overlay */}
            <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white">
              {facility.title}
            </h2>
          </div>
        ) : (
          <div className="flex items-center justify-between px-6 pt-6 pb-2 shrink-0">
            <h2 className="text-xl font-bold text-foreground">{facility.title}</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 text-foreground flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto p-6 flex flex-col gap-4">
          <p className="text-sm text-muted leading-relaxed">{facility.description}</p>

          {facility.details && facility.details.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                Detail Fasilitas
              </h3>
              <ul className="flex flex-col gap-2.5">
                {facility.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
