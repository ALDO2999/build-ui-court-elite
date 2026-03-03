"use client";

import { Quote } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";
import { testimonials } from "@/lib/placeholder-data";

export function TestimonialsSection() {
  const { ref, inView } = useInView();

  return (
    <Section id="testimonials">
      <SectionHeading
        title="What Our Members Say"
        subtitle="Hear from the players who call Court Elite home."
      />

      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-surface rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
          >
            <Quote className="w-8 h-8 text-accent/30 mb-4" />
            <p className="text-foreground/80 leading-relaxed mb-6 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
