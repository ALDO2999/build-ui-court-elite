"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Padel court ambience", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Court lighting", span: "" },
  { src: "/images/gallery-3.jpg", alt: "Premium facilities", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Player experience", span: "" },
  { src: "/images/gallery-5.jpg", alt: "Lounge area", span: "" },
  { src: "/images/gallery-6.jpg", alt: "Evening session", span: "md:col-span-2" },
];

export function GallerySection() {
  const { ref, inView } = useInView();

  return (
    <Section id="gallery">
      <SectionHeading
        title="The Experience"
        subtitle="Step into a world where sport meets sophistication. Every moment at Court Elite is designed to inspire."
      />

      <div
        ref={ref}
        className={cn(
          "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {galleryImages.map((image) => (
          <div
            key={image.src}
            className={cn(
              "relative aspect-square rounded-xl overflow-hidden group cursor-pointer",
              image.span
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
          </div>
        ))}
      </div>
    </Section>
  );
}
