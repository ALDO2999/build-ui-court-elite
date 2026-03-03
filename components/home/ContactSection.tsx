"use client";

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export function ContactSection() {
  const { ref, inView } = useInView();

  return (
    <Section id="contact" background="black">
      <SectionHeading
        title="Visit Us"
        subtitle="Experience Court Elite in person. We'd love to welcome you."
        light
      />

      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white">Address</p>
                <p className="text-white/60 mt-1">{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white">Phone</p>
                <p className="text-white/60 mt-1">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white">Email</p>
                <p className="text-white/60 mt-1">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-foreground gap-2">
                Instagram
              </Button>
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786248!2d55.2743764!3d25.1972236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzUwLjAiTiA1NcKwMTYnMjcuOCJF!5e0!3m2!1sen!2sae!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Court Elite Location"
            className="absolute inset-0 grayscale"
          />
        </div>
      </div>
    </Section>
  );
}
