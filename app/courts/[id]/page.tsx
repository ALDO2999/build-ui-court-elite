import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { CourtGallery } from "@/components/courts/CourtGallery";
import { CourtInfo } from "@/components/courts/CourtInfo";
import { AvailabilityCalendar } from "@/components/courts/AvailabilityCalendar";
import { courts } from "@/lib/placeholder-data";

interface CourtDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function CourtDetailPage({ params }: CourtDetailPageProps) {
  const { id } = await params;
  const court = courts.find((c) => c.id === id);

  if (!court) {
    notFound();
  }

  return (
    <>
      <div className="bg-foreground pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            {court.name}
          </h1>
          <p className="mt-4 text-white/60 text-lg">
            {court.type} &middot; {court.surface}
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CourtGallery mainImage={court.image} name={court.name} />
          <div className="space-y-8">
            <CourtInfo court={court} />
            <AvailabilityCalendar />
            <Link href="/booking">
              <Button variant="primary" size="lg" className="w-full">
                Book This Court
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

export function generateStaticParams() {
  return courts.map((court) => ({ id: court.id }));
}
