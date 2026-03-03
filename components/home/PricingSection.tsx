"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";
import { pricingPlans } from "@/lib/placeholder-data";

export function PricingSection() {
  const { ref, inView } = useInView();

  return (
    <Section id="pricing" background="beige">
      <SectionHeading
        title="Membership Plans"
        subtitle="Choose the plan that matches your game. Flexible options designed for every level of commitment."
      />

      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-8 items-start transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg",
              plan.popular
                ? "border-2 border-accent md:scale-105 shadow-lg"
                : "border border-muted-foreground/20"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge>Popular</Badge>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold uppercase tracking-wider text-foreground">
                {plan.name}
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                <span className="text-muted ml-2">/{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/booking" className="block">
              <Button
                variant={plan.popular ? "primary" : "outline"}
                className="w-full"
              >
                Get Started
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
