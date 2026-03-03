"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

export function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <Section id="about">
      <SectionHeading
        title="A New Standard in Padel"
        subtitle="Court Elite was born from a singular vision: to create the most refined padel experience, where every detail is designed to elevate your game and your senses."
      />

      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="space-y-6">
          <p className="text-muted leading-relaxed text-lg">
            We believe padel deserves more than just a court. It deserves an environment
            that inspires — one that blends world-class athletic facilities with the
            sophistication of a private members&apos; club.
          </p>
          <p className="text-muted leading-relaxed text-lg">
            From our meticulously maintained courts to our exclusive lounge areas,
            every element at Court Elite reflects our commitment to uncompromising
            quality and an unforgettable experience.
          </p>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="/images/court-interior.jpg"
            alt="Court Elite interior"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}
