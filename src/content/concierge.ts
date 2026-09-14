export const overviewBlocks = [
  {
    k: "What the research says",
    body: "Children benefit not only from good teaching and access to resources, but from trusted adults who understand them, guide them and help them navigate challenges. Mentoring and personalised support have been associated with stronger engagement, confidence, motivation and educational outcomes.",
  },
  {
    k: "Why it's hard today",
    body: "For many families, education remains fragmented — schools, tutors, assessments, extracurricular activities, examinations and future planning all operating separately, leaving parents to coordinate the journey themselves.",
  },
  {
    k: "What we do about it",
    body: "At the centre of the experience is a dedicated Education Manager who understands the learner, brings together the right people and resources, monitors progress and helps ensure nothing important falls through the cracks. A more connected, human approach — supported by technology, but built around people.",
  },
];

export type BenefitTab = "overview" | "included" | "expect" | "advantage";

export const benefitTabs: { id: BenefitTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "included", label: "What's included" },
  { id: "expect", label: "What to expect" },
  { id: "advantage", label: "Our distinct advantage" },
];

export const benefits: { tab: BenefitTab; q: string; a?: string; list?: string[] }[] = [
  {
    tab: "included",
    q: "Is there really a free option?",
    a: "Yes. Free members can join any scheduled class when a seat is open — up to two hours a month — and get limited access to our worksheets and learning resources. There is no Education Manager, no reporting and no guaranteed place; paid plans hold a seat for your child every week.",
  },
  {
    tab: "included",
    q: "Foundation support, included",
    a: "Scheduled live sessions with subject-expert teachers who keep your child steady at curriculum level through the term — so the burden doesn't pile up near exams.",
  },
  {
    tab: "included",
    q: "All-in-one education management",
    a: "An experienced Education Manager who tracks progress over time rather than grades, watches for stress and burnout signals, as well as fitness and wellbeing, and adjusts the plan weekly and termly — reporting to the parents.",
  },
  {
    tab: "included",
    q: "Learning specialists, on call",
    a: "Pedagogy experts, psychologists and subject specialists pulled in when your child needs a layer beyond the regular session.",
  },
  {
    tab: "included",
    q: "Active follow-up",
    a: "Patterns spotted before they become problems. Nudges when momentum dips. Adjustments to the plan, term by term.",
  },
  {
    tab: "included",
    q: "Regular parent reporting",
    a: "Monthly written summaries and termly review calls. You hear from us before you have to ask.",
  },
  {
    tab: "included",
    q: "The system, watching",
    a: "A platform tracking engagement, pace and recurring stuck-points — surfacing what matters to the team before anyone has to ask.",
  },
  {
    tab: "included",
    q: "Mobile app for parents and students",
    a: "Parents see progress in one place. Students access lessons, materials and their Education Manager. iOS and Android.",
  },
  {
    tab: "expect",
    q: "What to expect",
    list: [
      "Better academic progress",
      "A dedicated Education Manager",
      "All educational support in one place",
      "Centralised progress tracking & reporting",
      "Learning, health & wellbeing monitoring",
      "Regular parent updates",
      "A team of experts when needed",
      "More efficient for parents",
      "More economical than managing services separately",
      "Continuous follow-up — nothing falls through the cracks",
    ],
  },
  {
    tab: "advantage",
    q: "Our own technology & systems",
    a: "We have built our own education systems using the latest technology, developed with input from experienced educators and professionals to better understand, support and track each student.",
  },
  {
    tab: "advantage",
    q: "A dedicated, permanent team",
    a: "Our team members are permanent members of our organisation, carefully selected not only for their qualifications and experience, but also for their attitude, commitment and ability to work with students and families.",
  },
  {
    tab: "advantage",
    q: "Results driven",
    a: "Everything we do is ultimately measured by outcomes. We monitor progress, identify gaps, adapt support and remain focused on helping each student achieve meaningful academic and personal progress.",
  },
  {
    tab: "advantage",
    q: "Guided by independent expertise",
    a: "Our services are guided and continuously reviewed by a diverse panel of experts across education, child development, psychology, technology and other relevant fields, ensuring that what we provide remains aligned with research, evidence and emerging best practice.",
  },
  {
    tab: "advantage",
    q: "One person accountable",
    a: "At the centre of the Education Concierge is a dedicated Education Manager who knows the student, coordinates their support and takes responsibility for ensuring that nothing falls through the cracks.",
  },
  {
    tab: "advantage",
    q: "Personalised, not one-size-fits-all",
    a: "We look beyond grades to understand how each student learns, including their behaviour, motivation, confidence, learning habits, strengths and challenges, and use this understanding to shape their support.",
  },
  {
    tab: "advantage",
    q: "Continuous monitoring & improvement",
    a: "We don't simply assess a student and provide a plan. We continuously observe progress, evaluate what is working, and adjust the approach as the student develops.",
  },
  {
    tab: "advantage",
    q: "Human expertise + technology",
    a: "Technology helps us understand, coordinate and personalise; experienced people provide the judgement, relationships and human support that students and parents need.",
  },
];

export const drivers = [
  {
    n: "01",
    title: "High cost of schooling",
    body: "Fees that compound year after year, with no clear value justification.",
  },
  {
    n: "02",
    title: "Digitally distracted children",
    body: "Phones, games and endless content competing for attention every hour.",
  },
  {
    n: "03",
    title: "Parents short on time",
    body: "You can't sit every parent–teacher call or vet every tutor yourself.",
  },
  {
    n: "04",
    title: "Fragmented learning",
    body: "School, tutor, app, exam prep — none of it coordinated, all of it adding up.",
  },
];

export const costs = [
  { amount: "AED 30K–65K", label: "Primary, per year", note: "Per child, plus AED 1.5K–3K in extras." },
  { amount: "AED 45K–100K", label: "Secondary, per year", note: "Per child, plus AED 3K–12K in extras." },
  { amount: "AED 240K–600K", label: "University", note: "Total programme fee for one degree." },
  { amount: "~AED 1.5M+", label: "Lifetime, per child", note: "Full educational spend, K–12 through university." },
];

export const howWeWork = [
  {
    k: "Who · Your day-to-day contact",
    title: "Education Manager",
    body: "A single point of contact who knows your child and your goals, tracks learning patterns over time rather than single grades, watches for stress and burnout signals, and adjusts the plan weekly and termly.",
  },
  {
    k: "Who · Above them",
    title: "Education Concierge Manager",
    body: "Supervises managers across age groups and curriculums, quality-controls every learning track, and is the escalation point for complex academic or pastoral cases.",
  },
  {
    k: "Who · Behind them",
    title: "Learning specialists",
    body: "Pedagogy experts, psychologists and subject specialists, brought in when your child needs a layer beyond the regular session.",
  },
  {
    k: "How",
    title: "Strict confidentiality",
    body: "Your child's grades, situation and family context stay inside the engagement. We do not share, sell or repurpose it.",
  },
  {
    k: "How",
    title: "Encrypted, owned by you",
    body: "Assessments, progress notes and recordings are encrypted in transit and at rest. Request a full export or deletion at any time.",
  },
  {
    k: "How",
    title: "Vetted staff only",
    body: "Background checks, qualification verification, ongoing review. No freelancer hand-offs — every adult interacting with your child is on our team.",
  },
  {
    k: "How",
    title: "Layered oversight",
    body: "Every manager reports to an ECM. Every interaction is logged. Every plan is peer-reviewed, so no single person is the only safeguard.",
  },
  {
    k: "How",
    title: "Safeguarding first",
    body: "Wellbeing concerns are escalated through a documented, expert-led pathway. Always, immediately.",
  },
  {
    k: "How",
    title: "You stay in the loop",
    body: "You hear from us before you have to ask — and if a pattern shifts, we tell you first.",
  },
];

/** Real, named customers. Do not edit or invent — consent is confirmed before launch. */
export const testimonials = [
  {
    quote:
      "Initially we didn't understand what this service meant. But during our introduction call we understood what they were offering. My view is that this is a GREAT service! We have benefitted from them. I would absolutely recommend this company.",
    initials: "SM",
    name: "Susan M.",
    place: "Dubai",
  },
  {
    quote:
      "We are working parents and they made everything very easy for us. Following up with my son for his education and making sure his homework and schoolwork is on track is very important for us. I highly recommend them.",
    initials: "RD",
    name: "Rakhi Desai",
    place: "Dubai",
  },
  {
    quote:
      "The ECs are young but are quick, knowledgeable experts. They made the entire process to join very easy. The service is first class and relieves us of the added tuitions and management pressures.",
    initials: "V",
    name: "Vidya",
  },
  {
    quote:
      "Every single team member I've dealt with is so competent, responsive and professional. We are very happy.",
    initials: "FH",
    name: "Farrukh Hassan",
    place: "Sharjah",
  },
  {
    quote:
      "Great company, great communication, fast service. Love this service for our children. They are honest, reasonable and attentive.",
    initials: "KQ",
    name: "Khaldoun Q.",
    place: "Saudi Arabia",
  },
  {
    quote:
      "We enrolled our son from high school towards the end of his school year — the exam preparation help we got was really above our expectations. We have asked them to extend this service for university students as well, hope they add it soon. Good luck EDC team.",
    initials: "RS",
    name: "Rahul Shetty",
    place: "Dubai",
  },
];

export type Plan = {
  id: string;
  name: string;
  price: string;
  per: string;
  cta: string;
  /** Highlighted column in the plan table. */
  best?: boolean;
};

export const plans: Plan[] = [
  { id: "free", name: "Free", price: "AED 0", per: "2 hours a month · seat permitting", cta: "Join free" },
  { id: "base", name: "Base", price: "AED 49", per: "per month · 1 student", cta: "Start Base" },
  { id: "plus", name: "Plus", price: "AED 350", per: "per month · 1 student", cta: "Start Plus", best: true },
  { id: "family", name: "Family", price: "AED 575", per: "per month · 2 students", cta: "Start Family" },
];

/** Family pricing is per household and depends on how many children are covered. */
export const familyPricing: Record<2 | 3, { price: string; per: string }> = {
  2: { price: "AED 575", per: "per month · 2 students" },
  3: { price: "AED 750", per: "per month · 3 students" },
};

export type FeatureRow = {
  label: string;
  note?: string;
  values: [string, string, string, string];
  key?: boolean;
};

export const featureGroups: { group: string; rows: FeatureRow[] }[] = [
  {
    group: "The essentials",
    rows: [
      {
        label: "Live classes with subject-expert teachers",
        note: "Free members join scheduled classes when a seat is open",
        values: ["2 hrs/month", "1.5 hrs/week", "3 hrs/week + 1 hr 1:1", "3 hrs/week + 1 hr 1:1 each"],
        key: true,
      },
      { label: "Guaranteed place in your classes", values: ["—", "✓", "✓", "✓"], key: true },
      { label: "All core subjects", values: ["Seat permitting", "✓", "✓", "✓"] },
      { label: "Exam help & revision support", values: ["—", "Limited", "Unlimited", "Unlimited"] },
      {
        label: "Live learning specialists",
        note: "Pedagogy experts, psychologists, subject specialists",
        values: ["—", "—", "✓", "✓"],
      },
      { label: "Assessments & exam preparation", values: ["—", "—", "✓", "✓"] },
      {
        label: "Learning style assessment",
        note: "How your child learns best, and where support will help most",
        values: ["—", "—", "✓", "✓"],
      },
    ],
  },
  {
    group: "Learning resources",
    rows: [
      { label: "Worksheets & learning resources", values: ["Limited", "✓", "✓", "✓"] },
      {
        label: "Homework & assignment help",
        note: "Day-to-day support when your child is stuck",
        values: ["—", "✓", "✓", "✓"],
      },
      {
        label: "Mobile app for parents and students",
        note: "See the schedule, request a seat, open resources",
        values: ["✓", "✓", "✓", "✓"],
      },
    ],
  },
  {
    group: "Management & reporting",
    rows: [
      {
        label: "Dedicated Education Manager",
        note: "Your single point of contact",
        values: ["—", "—", "✓", "✓"],
        key: true,
      },
      {
        label: "Parent progress reporting",
        note: "Monthly summaries, termly review calls",
        values: ["—", "—", "✓", "✓"],
      },
      {
        label: "Wellbeing monitoring",
        note: "Watching for stress and burnout signals, not just grades",
        values: ["—", "—", "✓", "✓"],
      },
      { label: "Live support", values: ["—", "✓", "✓", "✓"] },
      {
        label: "Partner programmes & special offers",
        note: "Discounts on sport, enrichment and wellbeing activities",
        values: ["—", "✓", "✓", "✓"],
      },
    ],
  },
  {
    group: "Siblings",
    rows: [
      { label: "Students covered", values: ["1", "1", "1", "2 or 3"], key: true },
      { label: "Coordinated cross-child planning", values: ["—", "—", "—", "✓"] },
      { label: "One manager and one bill for the family", values: ["—", "—", "—", "✓"] },
    ],
  },
];

export const steps = [
  {
    n: 1,
    title: "Sign up online",
    body: "We match your child to an Education Manager by age, year group, school system and learning needs.",
    who: "We handle it",
    tone: "us" as const,
  },
  {
    n: 2,
    title: "Welcome call",
    body: "A 30-minute call to understand your child, your school, and what success looks like for your family.",
    who: "30 minutes with you",
    tone: "you" as const,
  },
  {
    n: 3,
    title: "Learning style assessment",
    body: "A short assessment showing how your child learns best and where support will help most.",
    who: "Plus & Family",
    tone: "tier" as const,
  },
  {
    n: 4,
    title: "Student welcome session",
    body: "Your child meets their Education Manager and gets set up on the app and live learning tools.",
    who: "We handle it",
    tone: "us" as const,
  },
  {
    n: 5,
    title: "Your learning track",
    body: "A personalised plan with milestones and checkpoints, agreed with you and adjusted each term.",
    who: "We handle it",
    tone: "us" as const,
  },
  {
    n: 6,
    title: "Ongoing management",
    body: "Lessons when needed, regular reporting, exam prep cycles, school liaison and proactive alerts.",
    who: "We handle it",
    tone: "us" as const,
  },
];

export const faqs = [
  {
    q: "How is the programme delivered?",
    a: "Fully online. Live lessons, your Education Manager, the mobile app and parent progress reporting are all accessible from wherever you and your child are.",
  },
  {
    q: "What countries and curriculums do you support?",
    a: "Any student, anywhere, on any curriculum. Because the programme runs fully online, location isn't a constraint. We work across British (IGCSE / A-Level), Cambridge, Edexcel, Oxford AQA, CBSE, ICSE, American, AP, IB and more.",
  },
  {
    q: "Why are your prices so affordable?",
    a: "We believe quality education should be within everyone's reach. By keeping operations efficient, we pass the savings directly to members — not to middlemen, not to advertising.",
  },
  {
    q: "Is foundation support just extra tuition?",
    a: "No. The purpose is to keep students steady at curriculum level throughout the term, so the burden doesn't pile up near exams. Each teacher is paired to a student using their learning profile.",
  },
  {
    q: "Do you have an app?",
    a: "Yes, included with every plan. Parents see progress in one place; students access lessons, materials and their Education Manager. iOS and Android.",
  },
  {
    q: "Are your teachers freelancers?",
    a: "No. All teachers and Education Managers are full-time members of our team. Many have been with us for years.",
  },
];

/**
 * Cost comparison calculator. The tier a family lands on is derived from the
 * hours they set: siblings always fall into Family, a single child stays on
 * Base while the hours fit inside it, and steps up to Plus beyond that.
 */
export type ComparePlan = { name: string; price: number; hours: number; includes: string };

export const compareRate = 150;
export const compareWeeks = 4;

export const comparePlans: Record<"base" | "plus" | "fam2" | "fam3", ComparePlan> = {
  base: { name: "Base", price: 49, hours: 6, includes: "1.5 hrs/week foundation support" },
  plus: {
    name: "Plus",
    price: 350,
    hours: 16,
    includes: "3 hrs/week + 1 hour 1:1, specialists, exam prep",
  },
  fam2: { name: "Family", price: 575, hours: 16, includes: "everything in Plus, for 2 students" },
  fam3: { name: "Family", price: 750, hours: 16, includes: "everything in Plus, for 3 students" },
};

export const beyondRows: { label: string; note?: string; tutor: string }[] = [
  { label: "Teaching hours", tutor: "✓" },
  {
    label: "A dedicated Education Manager",
    note: "One person who knows your child by name, year on year",
    tutor: "—",
  },
  {
    label: "Learning & career assessments",
    note: "Strengths, interests, and the right next move",
    tutor: "—",
  },
  {
    label: "Structured exam preparation",
    note: "Revision cycles planned around the exam calendar",
    tutor: "—",
  },
  {
    label: "Specialists on call",
    note: "Pedagogy experts, psychologists, subject specialists",
    tutor: "—",
  },
  {
    label: "Wellbeing, sport & enrichment",
    note: "Discounts and vouchers through our partner network",
    tutor: "—",
  },
  {
    label: "Monthly reporting & termly review calls",
    note: "You hear from us before you have to ask",
    tutor: "—",
  },
  {
    label: "Vetting, safeguarding & oversight",
    note: "Background checks, logged interactions, peer-reviewed plans",
    tutor: "You arrange",
  },
  {
    label: "The hours you'd spend finding and coordinating tutors",
    note: "Chasing, vetting, comparing, patching feedback together",
    tutor: "Yours",
  },
];
