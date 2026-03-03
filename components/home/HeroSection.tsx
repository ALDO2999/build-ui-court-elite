"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/branding-2.jpg"
        alt="Premium padel court"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tight leading-none">
          {BRAND_NAME}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 font-light tracking-wide">
          {BRAND_TAGLINE}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/booking">
            <Button variant="primary" size="lg">
              Book Now
            </Button>
          </Link>
          <Link href="/#about">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
              Discover More
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
}
