import type {
  AvailabilityCard,
  Facility,
  FaqItem,
  GalleryItem,
  HeroMosaicCard,
  HeroText,
  MapCard,
  Mode,
  Room,
  Testimonial,
  WhyFeature,
  WhyPoint,
} from "@/components/unoloft/types";

export const HERO_TEXT: Record<Mode, HeroText> = {
  all: {
    h1: "Your PG Hunt",
    h2: "is finally over.",
    ey: "Premium Co-Living · Ahmedabad",
  },
  boys: {
    h1: "Built for the",
    h2: "Modern Man.",
    ey: "Aster Homes · Boys PG · Ahmedabad",
  },
  girls: {
    h1: "Designed for",
    h2: "Her Comfort.",
    ey: "Iris Homes · Girls PG · Ahmedabad",
  },
};

export const HERO_MOSAIC_CARDS: HeroMosaicCard[] = [
  {
    id: "img-mc1",
    cardClass: "mc1",
    alt: "Room",
    sources: {
      all: "/rooms/IMG-20260201-WA0025.jpg",
      boys: "/rooms/IMG-20260201-WA0025.jpg",
      girls: "/rooms/IMG-20260201-WA0025.jpg",
    },
  },
  {
    id: "img-mc2",
    cardClass: "mc2",
    alt: "Reception",
    sources: {
      all: "/facilities/IMG-20260201-WA0004.jpg",
      boys: "/facilities/IMG-20260201-WA0004.jpg",
      girls: "/facilities/IMG-20260201-WA0004.jpg",
    },
  },
  {
    id: "img-mc3",
    cardClass: "mc3",
    alt: "Study Room",
    sources: {
      all: "/facilities/IMG-20260201-WA0003.jpg",
      boys: "/facilities/IMG-20260201-WA0003.jpg",
      girls: "/facilities/IMG-20260201-WA0003.jpg",
    },
  },
  {
    id: "img-mc4",
    cardClass: "mc4",
    alt: "Building",
    sources: {
      all: "/gallery/IMG-20260201-WA0028.jpg",
      boys: "/gallery/IMG-20260201-WA0028.jpg",
      girls: "/gallery/IMG-20260201-WA0028.jpg",
    },
  },
];

export const FACILITIES: Facility[] = [
  {
    icon: "fa-solid fa-wifi",
    name: "High-Speed WiFi",
    description:
      "Gigabit fiber internet throughout — perfect for work, classes & streaming.",
    delay: ".0s",
  },
  {
    icon: "fa-solid fa-bowl-food",
    name: "Home-Cooked Meals",
    description:
      "Fresh breakfast, lunch & dinner prepared daily by our in-house cooks.",
    delay: ".06s",
  },
  {
    icon: "fa-solid fa-dumbbell",
    name: "Gym",
    description: "Fitness equipment access available for all residents.",
    delay: ".12s",
  },
  {
    icon: "fa-solid fa-snowflake",
    name: "Air Conditioning",
    description: "All rooms are fully air-conditioned for year-round comfort.",
    delay: ".18s",
  },
  {
    icon: "fa-solid fa-shield-halved",
    name: "24/7 Security & CCTV",
    description:
      "Trained guards and cameras across all entry points and common areas.",
    delay: ".24s",
  },
  {
    icon: "fa-solid fa-shirt",
    name: "Washing Machine",
    description: "In-house washing machines available for regular use.",
    delay: ".30s",
  },
  {
    icon: "fa-solid fa-droplet",
    name: "Mineral Water",
    description: "Safe mineral drinking water available throughout the day.",
    delay: ".36s",
  },
  {
    icon: "fa-solid fa-temperature-low",
    name: "Fridge Facility",
    description: "Shared refrigerator facility available for residents.",
    delay: ".42s",
  },
  {
    icon: "fa-solid fa-broom",
    name: "Daily Housekeeping",
    description: "Regular room cleaning and common area maintenance every day.",
    delay: ".48s",
  },
  {
    icon: "fa-solid fa-car",
    name: "Free Parking",
    description: "Secure covered parking for bikes and cars at no extra cost.",
    delay: ".54s",
  },
  {
    icon: "fa-solid fa-book-open",
    name: "Study Area",
    description:
      "Quiet, well-lit study rooms — ideal for focused work and exam prep.",
    delay: ".60s",
  },
  {
    icon: "fa-solid fa-bolt",
    name: "Power Backup",
    description:
      "24/7 backup ensures lights, fans & WiFi stay on without interruption.",
    delay: ".66s",
  },
  {
    icon: "fa-solid fa-droplet",
    name: "Hot Water Supply",
    description:
      "Round-the-clock hot water for a refreshing start every single day.",
    delay: ".72s",
  },
  {
    icon: "fa-solid fa-couch",
    name: "Common Lounge",
    description:
      "Spacious social areas with TV, games & space to unwind and connect.",
    delay: ".78s",
  },
];

export const ROOMS: Room[] = [
  {
    image: "/rooms/IMG-20260201-WA0020.jpg",
    alt: "Single Room",
    badge: "Most Private",
    label: "Single Occupancy",
    name: "Private Single Sharing",
    description:
      "Your personal sanctuary — fully furnished private room with attached or shared bath.",
    chips: ["AC", "Fan", "Study Table", "Wardrobe"],
    price: "₹16,500",
  },
  {
    image: "/rooms/IMG-20260201-WA0025.jpg",
    alt: "Double Room",
    badge: "Popular",
    label: "Double Sharing",
    name: "Two Sharing",
    description:
      "Spacious room with a friendly roommate — perfect blend of privacy and community.",
    chips: ["AC", "Fan", "Study Table", "Wardrobe"],
    price: "₹14,500",
    delay: ".1s",
  },
  {
    image: "/rooms/IMG-20260201-WA0002.jpg",
    alt: "Triple Room",
    badge: "Best Value",
    label: "Triple Sharing",
    name: "Triple Share Room",
    description:
      "Budget-friendly with a great community vibe — ideal for students on a budget.",
    chips: ["AC", "Fan", "Study Table", "Wardrobe"],
    price: "₹11,000",
    delay: ".2s",
  },
];

export const AVAILABILITY_CARDS: AvailabilityCard[] = [
  {
    sharing: "1 Sharing",
    name: "Private Single Sharing",
    price: "₹16,500",
    slots: ["free", "free", "taken", "taken", "taken", "taken"],
    statusType: "avail",
    statusIcon: "fa-solid fa-bed",
    statusText: "2 Beds Available",
    ctaType: "book",
    ctaHref:
      "https://wa.me/91XXXXXXXXXX?text=Hi!%20I%20want%20to%20book%20a%20Single%20Sharing%20Room%20at%20Unoloft.",
    ctaText: "Book Now",
  },
  {
    sharing: "2 Sharing",
    name: "Two Sharing",
    price: "₹14,500",
    slots: [
      "free",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
    ],
    statusType: "almost",
    statusIcon: "fa-solid fa-triangle-exclamation",
    statusText: "Only 1 Bed Left!",
    ctaType: "book",
    ctaHref:
      "https://wa.me/91XXXXXXXXXX?text=Hi!%20I%20want%20to%20book%20a%20Two%20Sharing%20Room%20at%20Unoloft.",
    ctaText: "Book Now",
    delay: ".1s",
  },
  {
    sharing: "3 Sharing",
    name: "Triple Share Room",
    price: "₹11,000",
    slots: [
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
    ],
    statusType: "full",
    statusIcon: "fa-solid fa-circle-xmark",
    statusText: "Fully Occupied",
    ctaType: "waitlist",
    ctaText: "Join Waitlist",
    delay: ".2s",
  },
];

export const WHY_POINTS: WhyPoint[] = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Prime Location",
    description:
      "Near Nirma University, Silver Oak University, SG Highway & Gota Circle — effortless daily commuting.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Responsive Management",
    description: "Any issue resolved in under 2 hours — warden available 24/7.",
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Community & Events",
    description:
      "Festivals, movie nights & outings — friendships that last a lifetime.",
  },
  {
    icon: "fa-solid fa-indian-rupee-sign",
    title: "Transparent Pricing",
    description: "No hidden charges. What you see is exactly what you pay.",
  },
];

export const WHY_FEATURES: WhyFeature[] = [
  {
    emoji: "🏠",
    title: "Fully Furnished",
    description: "Move in with just your bag — everything ready for you.",
  },
  {
    emoji: "🔒",
    title: "Total Safety",
    description: "Biometric entry, CCTV, security guards round the clock.",
  },
  {
    emoji: "🍽️",
    title: "Fresh Daily Meals",
    description: "Healthy, hygienic, home-style food cooked fresh every day.",
  },
  {
    emoji: "💪",
    title: "Wellness First",
    description: "Gym, yoga space & mental wellness initiatives included.",
  },
  {
    emoji: "📶",
    title: "Always Connected",
    description: "Gigabit fiber WiFi with zero downtime for work & study.",
  },
  {
    emoji: "🌿",
    title: "Eco Friendly",
    description: "Solar power, water harvesting & sustainable practices.",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    category: "boys-room",
    image: "/rooms/IMG-20260201-WA0023.jpg",
    lightboxImage: "/rooms/IMG-20260201-WA0023.jpg",
    alt: "Boys Room",
  },
  {
    category: "girls-room",
    image: "/rooms/IMG-20260201-WA0022.jpg",
    lightboxImage: "/rooms/IMG-20260201-WA0022.jpg",
    alt: "Girls Room",
  },
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0005.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0005.jpg",
    alt: "Gym",
  },
  {
    category: "common",
    image: "/facilities/IMG-20260201-WA0011.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0011.jpg",
    alt: "Common Area",
  },
  {
    category: "boys-room",
    image: "/rooms/IMG-20260201-WA0024.jpg",
    lightboxImage: "/rooms/IMG-20260201-WA0024.jpg",
    alt: "Boys Room 2",
  },
  {
    category: "girls-room",
    image: "/rooms/IMG-20260201-WA0018.jpg",
    lightboxImage: "/rooms/IMG-20260201-WA0018.jpg",
    alt: "Girls Room 2",
  },
  {
    category: "common",
    image: "/facilities/IMG-20260201-WA0003.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0003.jpg",
    alt: "Lounge",
  },
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0007.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0007.jpg",
    alt: "Study Area",
  },
  {
    category: "common",
    image: "/facilities/IMG-20260201-WA0009.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0009.jpg",
    alt: "Dining",
  },
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0010.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0010.jpg",
    alt: "Equipment",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    stars: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
    ],
    quote: '"',
    text: "Aster Homes has been my home for 2 years. The food is fantastic, gym is a lifesaver, and management is incredibly responsive. Couldn't ask for more!",
    avatar: "R",
    avatarBg: "#1e3a7a",
    name: "Rahul Mehta",
    role: "Software Engineer · Aster Homes",
    mode: "boys",
  },
  {
    stars: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
    ],
    quote: '"',
    text: "As a girl in a new city, safety was everything. Iris Homes gave me exactly that — plus a wonderful community. I feel totally at home here.",
    avatar: "P",
    avatarBg: "#6d28d9",
    name: "Priya Sharma",
    role: "MBA Student · Iris Homes",
    delay: ".1s",
    mode: "girls",
  },
  {
    stars: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star-half-stroke",
    ],
    quote: '"',
    text: "The study area is a game-changer during exams. WiFi is blazing fast and staff always make you feel at home. Worth every rupee!",
    avatar: "A",
    avatarBg: "var(--brand)",
    name: "Arjun Kapoor",
    role: "Engineering Student · Aster Homes",
    delay: ".2s",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is included in the monthly rent?",
    answer:
      "Monthly rent includes fully furnished accommodation, three meals daily, high-speed WiFi, electricity (fair usage), housekeeping, water, and access to all amenities including gym and study area.",
  },
  {
    question: "Is the security deposit refundable?",
    answer:
      "Yes, a refundable security deposit of 1-2 months rent is collected at joining. Fully refunded within 7-14 working days after vacating, subject to no damage deductions.",
  },
  {
    question: "What are the gate timings and visiting hours?",
    answer:
      "Aster Homes (Boys): 24/7 access with log after 10 PM. Iris Homes (Girls): entry until 10 PM; prior notice required for late returns. Visitors in common areas 9 AM to 8 PM only.",
  },

  {
    question: "What is the minimum lock-in period?",
    answer:
      "Minimum stay is 3 months with a 30-day notice period before vacating. Short stays of 1-2 months can be arranged at a slightly higher rate on request.",
  },
  {
    question: "How do I book a room or schedule a visit?",
    answer:
      "Simply WhatsApp or call us. You can schedule an in-person tour (recommended) or request a virtual walkthrough. We respond within 30 minutes during working hours.",
  },
  {
    question: "How is safety managed at Unoloft?",
    answer:
      "24/7 security guards, CCTV on all entry/exit points, biometric access, and a resident warden round the clock. Iris Homes has a dedicated lady warden on-site.",
  },
];

export const MAP_CARDS: MapCard[] = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Address",
    value:
      "Royal Lakend Gota - Jagatpur Road, Sarkhej - Gandhinagar Hwy, behind Gota Lake, opposite Royal Heights, Ahmedabad, Gujarat 382481.",
  },
  {
    icon: "fa-solid fa-phone",
    title: "Aster Homes (Boys)",
    value: "+91 XXXXX XXXXX",
    mode: "boys",
  },
  {
    icon: "fa-solid fa-phone",
    title: "Iris Homes (Girls)",
    value: "+91 XXXXX XXXXX",
    mode: "girls",
  },
  {
    icon: "fa-solid fa-clock",
    title: "Office Hours",
    value: "Mon–Sat: 9 AM – 8 PM · Sun: 10 AM – 5 PM",
  },
];
