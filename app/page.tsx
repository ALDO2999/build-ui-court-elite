import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { GallerySection } from "@/components/home/GallerySection";
import { PricingSection } from "@/components/home/PricingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <GallerySection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
