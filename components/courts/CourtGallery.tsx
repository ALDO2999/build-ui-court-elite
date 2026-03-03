"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

interface CourtGalleryProps {
  mainImage: string;
  name: string;
}

const additionalImages = [
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
];

export function CourtGallery({ mainImage, name }: CourtGalleryProps) {
  const allImages = [mainImage, ...additionalImages];
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
        <Image
          src={allImages[active]}
          alt={`${name} - view ${active + 1}`}
          fill
          className="object-cover transition-all duration-500"
          sizes="100vw"
          priority
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {allImages.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all cursor-pointer",
              active === i ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
            )}
          >
            <Image
              src={src}
              alt={`${name} thumbnail ${i + 1}`}
              fill
              className="object-cover"
              sizes="25vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
