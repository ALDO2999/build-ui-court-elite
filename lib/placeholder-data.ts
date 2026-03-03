import type { Court, PricingPlan, Testimonial, Promo, Booking, Facility } from "./types";

export const courts: Court[] = [
  {
    id: "court-1",
    name: "Court Alpha",
    type: "Indoor",
    surface: "Artificial Turf",
    image: "/images/court-interior.jpg",
    hourlyRate: 40,
    description: "Our flagship indoor court featuring premium artificial turf, professional-grade lighting, and climate control for optimal playing conditions year-round.",
    amenities: ["Climate Control", "LED Lighting", "Spectator Area", "Ball Machine"],
  },
  {
    id: "court-2",
    name: "Court Beta",
    type: "Indoor",
    surface: "Artificial Turf",
    image: "/images/court-aerial.jpg",
    hourlyRate: 40,
    description: "A state-of-the-art indoor court designed for competitive play, with high ceilings and acoustic treatment for the perfect padel experience.",
    amenities: ["Climate Control", "LED Lighting", "Acoustic Panels", "Video Recording"],
  },
  {
    id: "court-3",
    name: "Court Gamma",
    type: "Outdoor",
    surface: "Artificial Turf",
    image: "/images/court-exterior.jpg",
    hourlyRate: 35,
    description: "An open-air court surrounded by landscape gardens, perfect for evening sessions under our professional floodlight system.",
    amenities: ["Floodlights", "Garden View", "Night Play", "Fresh Air"],
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Casual",
    price: 35,
    period: "per hour",
    features: [
      "Single court booking",
      "Equipment rental available",
      "Locker room access",
      "Free parking",
    ],
  },
  {
    name: "Member",
    price: 99,
    period: "per month",
    popular: true,
    features: [
      "8 hours of court time",
      "Priority booking access",
      "Free equipment rental",
      "Lounge & locker access",
      "Guest passes (2/month)",
    ],
  },
  {
    name: "Premium",
    price: 199,
    period: "per month",
    features: [
      "Unlimited court time",
      "24/7 booking priority",
      "Personal locker",
      "Private coaching sessions",
      "VIP lounge access",
      "Unlimited guest passes",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Alexander Chen",
    role: "Club Member",
    quote: "Court Elite has redefined what a padel facility can be. The courts are immaculate, the ambiance is unmatched, and the service is truly world-class.",
  },
  {
    name: "Sofia Martinez",
    role: "Professional Player",
    quote: "As a competitive player, I need the best facilities. Court Elite delivers on every front — from court quality to the premium amenities.",
  },
  {
    name: "James Robertson",
    role: "Premium Member",
    quote: "The attention to detail is extraordinary. From the moment you walk in, you know this is a place designed for excellence.",
  },
];

export const facilities: Facility[] = [
  { icon: "racquet", title: "Professional Courts", description: "World-class courts with premium surfaces and professional lighting" },
  { icon: "sofa", title: "VIP Lounge", description: "Exclusive lounge area with refreshments and panoramic court views" },
  { icon: "lock", title: "Private Lockers", description: "Secure locker rooms with premium amenities and shower facilities" },
  { icon: "car", title: "Valet Parking", description: "Complimentary parking with valet service for all members" },
  { icon: "dumbbell", title: "Fitness Zone", description: "Dedicated warm-up and fitness area for pre-game preparation" },
  { icon: "coffee", title: "Pro Shop & Cafe", description: "Curated equipment shop and artisan cafe on premises" },
];

export const promos: Promo[] = [
  {
    id: "promo-1",
    title: "Grand Opening Special",
    description: "Get 50% off your first month of membership. Experience premium padel at an exclusive introductory rate.",
    validUntil: "2026-04-30",
    discount: "50% OFF",
    image: "/images/branding-1.jpg",
  },
  {
    id: "promo-2",
    title: "Bring a Friend",
    description: "Refer a friend and both receive a complimentary session. The more you share, the more you play.",
    validUntil: "2026-05-31",
    discount: "FREE SESSION",
    image: "/images/branding-2.jpg",
  },
  {
    id: "promo-3",
    title: "Weekend Warriors",
    description: "Book any court on weekends before 9 AM and enjoy a 30% discount. Early birds get the best courts.",
    validUntil: "2026-06-30",
    discount: "30% OFF",
    image: "/images/gallery-1.jpg",
  },
];

export const bookings: Booking[] = [
  { id: "b-1", courtName: "Court Alpha", date: "2026-03-05", time: "10:00", duration: "1.5 hours", status: "upcoming" },
  { id: "b-2", courtName: "Court Beta", date: "2026-03-08", time: "18:00", duration: "1 hour", status: "upcoming" },
  { id: "b-3", courtName: "Court Gamma", date: "2026-02-28", time: "14:00", duration: "2 hours", status: "completed" },
  { id: "b-4", courtName: "Court Alpha", date: "2026-02-20", time: "09:00", duration: "1 hour", status: "completed" },
  { id: "b-5", courtName: "Court Beta", date: "2026-02-15", time: "17:00", duration: "1.5 hours", status: "cancelled" },
];

export const timeSlots = [
  "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
  "19:00", "20:00", "21:00", "22:00",
];
