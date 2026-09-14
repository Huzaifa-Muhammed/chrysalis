export const products = [
  {
    kicker: "For families",
    title: "Education Concierge",
    lead: "Everything your child needs in one place, one plan — with one dedicated expert who knows the journey.",
    chips:
      "Tutoring. Homework support. Assessments. Exam preparation. Learning support. Career guidance. Wellbeing. And more.",
    image: { src: "/img/what-is-ec.jpg", alt: "An Education Manager at her desk", width: 1100, height: 632 },
    href: "/concierge",
    tour: true,
  },
  {
    kicker: "For students",
    title: "Spark Upskill Programs",
    lead: "Education doesn't stop at the school curriculum.",
    chips:
      "Short, focused learning experiences designed around the skills, technologies and emerging areas that are shaping tomorrow.",
    image: { src: "/img/student-hero.jpg", alt: "A student working at a laptop", width: 730, height: 850 },
    href: "/spark",
    price: "Free intro class",
  },
  {
    kicker: "For educators",
    title: "Dexter LMS",
    lead: "A suite of online learning solutions built around the needs of students and educators.",
    chips:
      "Digital environments designed for teaching, learning, assessment, engagement and progress — rather than simply putting a classroom on a video call.",
    image: { src: "/img/dexter-day.jpg", alt: "A teacher leaving school", width: 1100, height: 618 },
    href: "/dexter",
    price: "Free for tutors & small schools",
  },
] as const;

export type TourCard = {
  cover?: boolean;
  closing?: boolean;
  emoji?: string;
  heading: string;
  sub?: string;
  bg: string;
  /** Photo slots are still unfilled in the source build — coloured panels stand in. */
  slot?: string;
  chip?: string;
};

export const tourCards: TourCard[] = [
  {
    cover: true,
    heading: "Everything your child needs.\nOne simple package.",
    sub: "Swipe to see what’s included →",
    bg: "#442a72",
  },
  {
    heading: "What is Edu. Concierge?",
    sub: "Think of it as an education relationship manager who makes sure your children have all the support and follow-up needed to achieve top grades — and a healthy life.",
    bg: "#442a72",
    slot: "Manager photo",
  },
  {
    emoji: "💰",
    heading: "Save money on education",
    sub: "One affordable monthly package with everything your child needs.",
    bg: "#2f5fb4",
    slot: "Parent photo",
    chip: "Included",
  },
  {
    emoji: "📚",
    heading: "No more extra tuition",
    sub: "Expert tuition for all major subjects — fully included.",
    bg: "#d8402f",
    slot: "Tutor photo",
    chip: "Included",
  },
  {
    emoji: "📊",
    heading: "Track progress with confidence",
    sub: "Regular learning assessments and easy-to-understand progress reports.",
    bg: "#a8630c",
    slot: "Report photo",
    chip: "Included",
  },
  {
    emoji: "🧠",
    heading: "Intelligent learning insights",
    sub: "Advanced tracking and personalised recommendations that help parents, students and educators make better decisions.",
    bg: "#3a2a68",
    slot: "Study photo",
    chip: "Included",
  },
  {
    emoji: "🧭",
    heading: "Discover the right path",
    sub: "Learning and career assessments to identify strengths, interests and future opportunities.",
    bg: "#1f6f3a",
    slot: "Careers photo",
    chip: "Included",
  },
  {
    emoji: "🎯",
    heading: "Achieve better grades",
    sub: "Structured exam preparation and academic support.",
    bg: "#c8302c",
    slot: "Revision photo",
    chip: "Included",
  },
  {
    emoji: "🎓",
    heading: "Expert guidance",
    sub: "Personalised school, university and career planning.",
    bg: "#2b57a8",
    slot: "Guidance photo",
    chip: "Included",
  },
  {
    emoji: "🌱",
    heading: "Support your child’s wellbeing",
    sub: "Exclusive discounts and vouchers for sports, enrichment and wellbeing activities through our partner network.",
    bg: "#1f6f3a",
    slot: "Activity photo",
    chip: "Included",
  },
  {
    emoji: "🤝",
    heading: "Your dedicated education manager",
    sub: "A trusted expert to guide and support your family every step of the way.",
    bg: "#442a72",
    slot: "Manager photo",
    chip: "Included",
  },
  {
    closing: true,
    heading: "Find out why more than 1000 families have subscribed to EC.",
    bg: "#442a72",
    slot: "Family photo",
  },
];
