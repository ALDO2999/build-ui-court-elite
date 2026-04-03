import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const allImages = [
  { src: "/images/gallery-1.jpg", alt: "Padel court ambience" },
  { src: "/images/gallery-2.jpg", alt: "Court lighting" },
  { src: "/images/gallery-3.jpg", alt: "Premium facilities" },
  { src: "/images/gallery-4.jpg", alt: "Player experience" },
  { src: "/images/gallery-5.jpg", alt: "Lounge area" },
  { src: "/images/gallery-6.jpg", alt: "Court interior" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-foreground pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Gallery
          </h1>
          <p className="mt-4 text-white/60 text-lg">
            A glimpse into the world of Court Elite — where sport meets sophistication.
          </p>
        </div>
      </div>

      <Section>
        <SectionHeading
          title="The Experience"
          subtitle="Every corner of Court Elite is designed to inspire excellence."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allImages.map((image) => (
            <div
              key={image.src}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
