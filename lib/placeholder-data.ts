import type { Court, PricingPlan, Testimonial, Promo, Booking, Facility, Event } from "./types";

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
  {
    icon: "racquet",
    title: "Professional Courts",
    description: "World-class courts with premium surfaces and professional lighting",
    image: "/images/court-interior.jpg",
    details: [
      "Lantai padel berstandar internasional (FIP certified)",
      "Pencahayaan LED profesional 1000+ lux untuk malam hari",
      "Kaca tempered anti-pecah di sekeliling lapangan",
      "Sistem ventilasi udara yang optimal untuk kenyamanan bermain",
      "Tersedia 6 lapangan indoor & 2 lapangan outdoor",
    ],
  },
  {
    icon: "sofa",
    title: "VIP Lounge",
    description: "Exclusive lounge area with refreshments and panoramic court views",
    image: "/images/vip_lounge.jpg",
    details: [
      "Area lounge eksklusif dengan pemandangan langsung ke lapangan",
      "Sofa premium dan meja privat untuk anggota VIP",
      "Free welcome drink setiap kunjungan",
      "TV layar besar untuk menonton pertandingan live",
      "Koneksi Wi-Fi ultra-cepat di seluruh area lounge",
    ],
  },
  {
    icon: "lock",
    title: "Private Lockers",
    description: "Secure locker rooms with premium amenities and shower facilities",
    image: "/images/private_lockers.jpg",
    details: [
      "Loker pribadi berukuran besar dengan kunci digital",
      "Ruang ganti terpisah pria & wanita yang luas",
      "Shower room dengan air panas 24 jam",
      "Tersedia amenities lengkap (sabun, shampoo, handuk)",
      "Ruang khusus penyimpanan raket dan peralatan",
    ],
  },
  {
    icon: "car",
    title: "Valet Parking",
    description: "Complimentary parking with valet service for all members",
    image: "/images/parking.jpg",
    details: [
      "Layanan valet gratis untuk semua anggota aktif",
      "Area parkir berkapasitas 100+ kendaraan",
      "CCTV 24 jam di seluruh area parkir",
      "Parkir khusus difabel tersedia",
      "Tersedia stasiun pengisian daya kendaraan listrik (EV)",
    ],
  },
  {
    icon: "dumbbell",
    title: "Fitness Zone",
    description: "Dedicated warm-up and fitness area for pre-game preparation",
    image: "/images/Fitness Zone.jpg",
    details: [
      "Area pemanasan seluas 200 m² dengan peralatan lengkap",
      "Peralatan kardio dan beban bermerek internasional",
      "Matras yoga dan stretching corner",
      "Tersedia personal trainer bersertifikat (on request)",
      "Program latihan khusus untuk pemain padel",
    ],
  },
  {
    icon: "coffee",
    title: "Pro Shop & Cafe",
    description: "Curated equipment shop and artisan cafe on premises",
    image: "/images/pro-shop-cafe.jpg",
    details: [
      "Koleksi lengkap raket dari brand premium dunia",
      "Apparel dan aksesoris padel eksklusif",
      "Layanan restring & perbaikan raket on-site",
      "Cafe artisan dengan menu sehat dan minuman energi",
      "Diskon khusus 15% untuk anggota aktif",
    ],
  },
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

export const events: Event[] = [
  {
    id: "event-1",
    title: "The Next Padel Open 2026",
    category: "Tournament",
    date: "2026-04-12",
    time: "08:00",
    location: "Court Alpha & Beta",
    image: "/images/court-interior.jpg",
    shortDescription: "Open padel tournament with a 32-player bracket format. Total prize pool up for grabs.",
    description: "The Next Padel Open is a prestigious annual tournament bringing together the best players from across the city. Single elimination bracket format, split into Men's, Women's, and Mixed Doubles categories. All skill levels are welcome to register. Professional referees, digital scoreboards, and a dedicated spectator area will be provided. Participants receive an exclusive jersey and goodie bag.",
    prize: "Rp 5.000.000",
    spots: 32,
    spotsLeft: 8,
  },
  {
    id: "event-2",
    title: "Beginner Padel Clinic",
    category: "Clinic",
    date: "2026-04-19",
    time: "09:00",
    location: "Court Gamma",
    image: "/images/court-exterior.jpg",
    shortDescription: "A hands-on clinic for beginners, guided by certified coaches.",
    description: "This clinic is designed specifically for beginners who want to learn padel from the ground up. Topics include grip technique, basic footwork, serve, and short rallies. The 3-hour session runs at a 1:4 coach-to-player ratio. Rackets and balls are provided — just bring your sportswear and shoes.",
    spots: 12,
    spotsLeft: 5,
  },
  {
    id: "event-3",
    title: "Night Padel Social",
    category: "Social",
    date: "2026-04-26",
    time: "19:00",
    location: "All Courts",
    image: "/images/branding-1.jpg",
    shortDescription: "A relaxed evening of padel, meeting fellow players, and enjoying free drinks.",
    description: "Night Padel Social is a casual networking event for the local padel community. Random round-robin format — every participant will play alongside new people each round. No competition, just fun and expanding your network. Free light refreshments, music, and a photo session included. Suitable for all skill levels.",
    spots: 24,
    spotsLeft: 11,
  },
  {
    id: "event-4",
    title: "Corporate Padel Cup",
    category: "Tournament",
    date: "2026-05-10",
    time: "07:30",
    location: "Court Alpha, Beta & Gamma",
    image: "/images/court-aerial.jpg",
    shortDescription: "An inter-company tournament — register your team and compete for the prestigious trophy.",
    description: "The Corporate Padel Cup invites teams from various companies to compete in a spirit of sportsmanship and team building. Each team consists of 4 players (2 doubles pairs). Group stage format followed by a knockout round. Trophies, medals, and professional team photography are provided. Perfect as a corporate team outing activity.",
    prize: "Trophy & Merchandise",
    spots: 16,
    spotsLeft: 6,
  },
];

export const timeSlots = [
  "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
  "19:00", "20:00", "21:00", "22:00",
];
