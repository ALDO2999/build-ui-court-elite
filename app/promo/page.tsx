import { Section } from "@/components/layout/Section";
import { PromoCard } from "@/components/promo/PromoCard";
import { promos } from "@/lib/placeholder-data";

export default function PromoPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-foreground pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Promotions
          </h1>
          <p className="mt-4 text-white/60 text-lg">
            Exclusive offers for an exceptional padel experience.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promos.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
      </Section>
    </>
  );
}
