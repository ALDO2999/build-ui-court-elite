import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Promo } from "@/lib/types";

interface PromoCardProps {
  promo: Promo;
}

export function PromoCard({ promo }: PromoCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-muted-foreground/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-[16/9]">
        <Image
          src={promo.image}
          alt={promo.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <Badge>{promo.discount}</Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {promo.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4">
          {promo.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted">
            Valid until {new Date(promo.validUntil).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <Link href="/booking">
            <Button variant="primary" size="default">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
