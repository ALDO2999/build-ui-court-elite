export interface Court {
  id: string;
  name: string;
  type: "Indoor" | "Outdoor";
  surface: string;
  image: string;
  hourlyRate: number;
  description: string;
  amenities: string[];
}

export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  validUntil: string;
  discount: string;
  image: string;
}

export interface Booking {
  id: string;
  courtName: string;
  date: string;
  time: string;
  duration: string;
  status: "upcoming" | "completed" | "cancelled";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Facility {
  icon: string;
  title: string;
  description: string;
}
