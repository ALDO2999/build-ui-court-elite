import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const menuCategories = [
  {
    category: "Beverages",
    emoji: "☕",
    items: [
      { name: "Black Coffee", price: "Rp 15.000" },
      { name: "Milk Coffee", price: "Rp 22.000" },
      { name: "Matcha Latte", price: "Rp 28.000" },
      { name: "Fresh Orange Juice", price: "Rp 20.000" },
      { name: "Mineral Water", price: "Rp 8.000" },
    ],
  },
  {
    category: "Light Bites",
    emoji: "🍟",
    items: [
      { name: "French Fries", price: "Rp 25.000" },
      { name: "Chicken Wings", price: "Rp 35.000" },
      { name: "Nachos & Salsa", price: "Rp 30.000" },
      { name: "Grilled Toast", price: "Rp 20.000" },
      { name: "Mixed Nuts", price: "Rp 15.000" },
      { name: "Energy Bar", price: "Rp 18.000" },
    ],
  },
  {
    category: "Main Dishes",
    emoji: "🍽️",
    items: [
      { name: "Special Fried Rice", price: "Rp 45.000" },
      { name: "Fried Noodles", price: "Rp 40.000" },
      { name: "Pasta Aglio Olio", price: "Rp 55.000" },
      { name: "Grilled Sandwich", price: "Rp 48.000" },
      { name: "Salad Bowl", price: "Rp 42.000" },
      { name: "Chicken Wrap", price: "Rp 45.000" },
    ],
  },
  {
    category: "Healthy Drinks",
    emoji: "🥤",
    items: [
      { name: "Fruit Smoothie", price: "Rp 32.000" },
      { name: "Protein Shake", price: "Rp 38.000" },
      { name: "Electrolyte Drink", price: "Rp 25.000" },
      { name: "Green Juice", price: "Rp 30.000" },
      { name: "Coconut Water", price: "Rp 22.000" },
      { name: "Infused Water", price: "Rp 15.000" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-foreground pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Cafe Menu
          </h1>
          <p className="mt-4 text-white/60 text-lg">
            Enjoy fresh food and drinks before or after your padel session.
          </p>
        </div>
      </div>

      {/* Full Menu Image */}
      <Section background="beige">
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            title="Our Full Menu"
            subtitle="A wide selection of food and beverages to fuel your game and keep you refreshed."
          />
          <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-muted-foreground/10">
            <Image
              src="/images/menu_caffe2.png"
              alt="Cafe Menu — The Next Padel"
              width={1200}
              height={1600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <p className="text-sm text-muted text-center mt-2">
            *Prices are subject to change. Contact us for the latest information.
          </p>
        </div>
      </Section>

      {/* Menu Categories Grid */}
      <Section>
        <SectionHeading
          title="Menu Overview"
          subtitle="Browse our menu categories available at the cafe."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-2xl border border-muted-foreground/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="bg-foreground px-6 py-4 flex items-center gap-3">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="text-white font-semibold text-lg uppercase tracking-wide">
                  {cat.category}
                </h3>
              </div>

              {/* Items */}
              <div className="divide-y divide-muted-foreground/10">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between px-6 py-3 hover:bg-surface transition-colors duration-200"
                  >
                    <span className="text-foreground text-sm font-medium">
                      {item.name}
                    </span>
                    <span className="text-accent font-semibold text-sm">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section background="black">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            Ready to Play & Dine?
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
            Reserve your court now and enjoy a complete padel experience with friends and family.
          </p>
          <a
            href="/booking"
            className="inline-block mt-8 px-8 py-3 bg-accent text-white font-semibold uppercase tracking-wider rounded-full hover:bg-accent-light transition-colors duration-300"
          >
            Book Now
          </a>
        </div>
      </Section>
    </>
  );
}
