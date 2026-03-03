"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CourtSelector } from "@/components/booking/CourtSelector";
import { DateTimePicker } from "@/components/booking/DateTimePicker";
import { BookingForm } from "@/components/booking/BookingForm";
import { courts } from "@/lib/placeholder-data";
import { cn } from "@/lib/cn";

const steps = ["Select Court", "Date & Time", "Your Details"];

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [selectedCourt, setSelectedCourt] = useState<string | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const court = courts.find((c) => c.id === selectedCourt);

  const canNext =
    (step === 0 && selectedCourt) ||
    (step === 1 && date && time) ||
    step === 2;

  if (confirmed) {
    return (
      <Section className="min-h-screen flex items-center pt-32">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-muted mb-8">
            Your court has been reserved. We&apos;ve sent a confirmation to your email.
          </p>
          <Button variant="primary" onClick={() => { setConfirmed(false); setStep(0); setSelectedCourt(null); setDate(""); setTime(null); }}>
            Book Another Court
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="bg-foreground pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Book a Court
          </h1>
          <p className="mt-4 text-white/60 text-lg">
            Reserve your premium padel experience in three simple steps.
          </p>
        </div>
      </div>

      <Section>
        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                    i <= step
                      ? "bg-accent text-white"
                      : "bg-muted-foreground/20 text-muted"
                  )}
                >
                  {i < step ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span
                  className={cn(
                    "text-sm font-medium hidden sm:block",
                    i <= step ? "text-foreground" : "text-muted"
                  )}
                >
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "w-12 h-px",
                    i < step ? "bg-accent" : "bg-muted-foreground/20"
                  )}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {step === 0 && (
            <div>
              <SectionHeading
                title="Choose Your Court"
                subtitle="Select from our premium collection of professional padel courts."
              />
              <CourtSelector
                courts={courts}
                selected={selectedCourt}
                onSelect={setSelectedCourt}
              />
            </div>
          )}

          {step === 1 && (
            <div>
              <SectionHeading
                title="Pick Date & Time"
                subtitle="Choose your preferred session schedule."
              />
              <DateTimePicker
                date={date}
                time={time}
                onDateChange={setDate}
                onTimeChange={setTime}
              />
            </div>
          )}

          {step === 2 && court && time && (
            <div>
              <SectionHeading
                title="Complete Your Booking"
                subtitle="Fill in your details to confirm your reservation."
              />
              <BookingForm
                courtName={court.name}
                date={date}
                time={time}
                onSubmit={() => setConfirmed(true)}
              />
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-12">
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className={cn(step === 0 && "invisible")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            {step < 2 && (
              <Button
                variant="primary"
                onClick={() => setStep(step + 1)}
                disabled={!canNext}
                className={cn(!canNext && "opacity-50 cursor-not-allowed")}
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
