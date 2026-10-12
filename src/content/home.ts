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
