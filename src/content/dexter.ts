export type Tier = {
  name: string;
  amount: string;
  per: string;
  blurb: string;
  features: string[];
  cta: string;
  href: string;
  hot?: boolean;
  free?: boolean;
};

export type Audience = {
  id: string;
  tab: string;
  heading: string;
  learners: string;
  content: string;
  today: string;
  withDexter: string;
  steps: { title: string; body: string }[];
  tiers: Tier[];
  /** Single-tier panes put the tier beside the steps rather than under them. */
  tiersBeside: boolean;
};

export const audiences: Audience[] = [
  {
    id: "tutor",
    tab: "Tutor",
    heading: "For the tutor",
    learners:
      "Individual students seeking targeted help — exam preparation, subject mastery, language coaching, supplementary tuition. You know each one by name.",
    content:
      "Personalised lessons. Focused practice sets. One-to-one or small-group sessions. Content you build for each learner, reusable across all of them.",
    today: "Zoom, screen-share, maybe a Google Doc.",
    withDexter:
      "A real classroom — live class with shared whiteboard and recording, structured assignments with submission tracking, parent-visible progress, all in one place.",
    steps: [
      {
        title: "Sign up in two minutes",
        body: "Create your account with an email. No school code, no admin approval, no IT department.",
      },
      {
        title: "Add your students",
        body: "Invite up to ten students by email or phone. Each gets a Dexter login and the mobile app.",
      },
      {
        title: "Run your classes",
        body: "Lesson templates, live class tools, assignments and quizzes — the same surface a 2,000-student school gets.",
      },
      {
        title: "Grow when you grow",
        body: "Cross ten students and upgrade to Tuition. Account, students and history carry over — no migration.",
      },
    ],
    tiersBeside: true,
    tiers: [
      {
        name: "Tutor",
        amount: "Free",
        per: "forever · no card",
        blurb: "Individual tutors with up to 10 students.",
        features: [
          "Both portals, full features",
          "Up to 10 students",
          "Community support",
          "Upgrade anytime",
        ],
        cta: "Start free",
        href: "mailto:hello@chrysalis.education?subject=Dexter%20Tutor",
        free: true,
      },
    ],
  },
  {
    id: "school",
    tab: "School",
    heading: "For the school",
    learners:
      "Cohorts moving through a structured curriculum, primary to sixth form. Age-adaptive interface — calmer for Year 3, denser for Year 12.",
    content:
      "Full curriculum delivery. Schemes of work, weighted assessments, lesson sequences, parent reports pre-formatted for KHDA, ADEK and MoE.",
    today:
      "Zoom for class, Google Classroom for work, WhatsApp for parents, spreadsheets for grades, paper for attendance.",
    withDexter:
      "Live classes, assignments, gradebook, parent comms, attendance and analytics in one platform — no app-switching for teachers or families.",
    steps: [
      {
        title: "Discovery & scoping call",
        body: "A 30-minute conversation — your size, curriculum, current systems and goals. We tell you which tier fits.",
      },
      {
        title: "Data migration & SIS integration",
        body: "We import students, classes and timetables, and connect to your SIS via bi-directional APIs. No double entry.",
      },
      {
        title: "Phased rollout in 14 days",
        body: "Two training sessions for teachers, one for admins. Start with one year group, expand school-wide by day 14.",
      },
      {
        title: "Live with priority support",
        body: "Dedicated onboarding lead for the first term. Priority SLA support after, with quarterly reviews from Institution up.",
      },
    ],
    tiersBeside: false,
    tiers: [
      {
        name: "Tuition",
        amount: "$250",
        per: "per month · annual",
        blurb: "Tuition centres & small institutes.",
        features: [
          "Both portals, full features",
          "Live support · 24h SLA",
          "Free teacher AI-certification",
          "Onboarding & training",
        ],
        cta: "Get Tuition",
        href: "mailto:hello@chrysalis.education?subject=Dexter%20Tuition",
      },
      {
        name: "School",
        amount: "$500",
        per: "per month · annual",
        blurb: "Schools with under 1,000 students.",
        features: [
          "Up to 1,000 students",
          "White-label branding",
          "SIS integrations",
          "Live support · 8h SLA",
        ],
        cta: "Get School",
        href: "mailto:hello@chrysalis.education?subject=Dexter%20School",
        hot: true,
      },
      {
        name: "Institution",
        amount: "$700",
        per: "per month · annual",
        blurb: "Schools with 1,000 to 2,000 students.",
        features: [
          "Up to 2,000 students",
          "Custom domain & SSO",
          "Live support · 4h SLA",
          "Quarterly reviews",
        ],
        cta: "Get Institution",
        href: "mailto:hello@chrysalis.education?subject=Dexter%20Institution",
      },
    ],
  },
  {
    id: "university",
    tab: "University",
    heading: "For the university",
    learners:
      "Adult learners with high autonomy — part-time, full-time, remote, blended. Multiple programmes running in parallel, students choosing their own track.",
    content:
      "Modular courses. Lectures with embedded discussion. Research-driven materials. Project-based assessment with peer review. Multi-campus content libraries.",
    today:
      "Recorded lectures dumped onto an LMS, separate webinar tools, fragmented forums, email-based assessment.",
    withDexter:
      "Modular course delivery, embedded video-with-questions, peer collaboration, automated assessment workflows and multi-campus governance — built for cohort scale.",
    steps: [
      {
        title: "Solution architecture session",
        body: "A working session with our engineering and product leads. You leave with a written architecture proposal.",
      },
      {
        title: "Procurement & contracting",
        body: "Custom multi-year terms, DPAs, security questionnaires, vendor onboarding. We move at your speed.",
      },
      {
        title: "Deployment, your model",
        body: "Standard cloud, private cloud or on-premise, with central governance and per-campus autonomy.",
      },
      {
        title: "Dedicated success management",
        body: "A named success manager, quarterly business reviews, and engineering on standby for custom integrations.",
      },
    ],
    tiersBeside: true,
    tiers: [
      {
        name: "Enterprise",
        amount: "Custom",
        per: "contact for pricing",
        blurb: "3,000+ students · universities · ministry programmes.",
        features: [
          "Unlimited students",
          "Dedicated support desk",
          "Custom features & API",
          "Private cloud / on-prem",
        ],
        cta: "Talk to us",
        href: "mailto:hello@chrysalis.education?subject=Dexter%20Enterprise",
      },
    ],
  },
];

export const whyPoints = [
  {
    lead: "This generation doesn't just learn online — they learn digitally.",
    body: "They ask ChatGPT before they ask their teacher. They watch YouTube explainers at 2× speed. They toggle between five apps in one study session. The world they're learning in is different from the one schools were designed for, and the gap widens every term.",
  },
  {
    lead: "The tools schools use were never built for any of this.",
    body: "Zoom was built for corporate meetings. Google Classroom for distribution, not pedagogy. WhatsApp for friends. Schools have stitched consumer apps together and called it transformation, while the actual quality of learning has barely moved.",
  },
  {
    lead: "Acquiring knowledge is not learning.",
    body: "Information access is a solved problem. What hasn't been solved is learning itself — which needs motivation, cognitive engagement, scaffolding, feedback and social context. Real learning happens between the information and the student, and that work is the work schools have always done.",
  },
];

export const surfaces = [
  {
    k: "Surface 01",
    title: "Teacher portal",
    blurb: "The working surface, loaded with content and teaching tools.",
    items: [
      "Pre-loaded content library & lesson templates",
      "Online class delivery — whiteboard, recording, breakouts",
      "Assignments & auto-marked quizzes",
      "Lesson planning & scheme of work",
      "Student management & gradebook",
      "Attendance, behaviour & pastoral notes",
      "KHDA / ADEK / MoE reports in one click",
      "Analytics & at-risk flagging",
    ],
  },
  {
    k: "Surface 02",
    title: "Student portal",
    blurb: "A calm web home for learning — laptops, desktops and tablets.",
    items: [
      "Personal timetable & today's lessons",
      "One-click live class access",
      "Submit work in any format — text, file, video, voice",
      "Personal progress dashboard",
      "Library, past papers & revision packs",
      "Quizzes & interactive exercises",
      "Moderated, parent-visible teacher messaging",
      "Age-adaptive interface — primary to sixth form",
    ],
  },
  {
    k: "Surface 03",
    title: "Student mobile app",
    blurb: "Learning that travels — iOS and Android, fully offline-capable.",
    items: [
      "Native iOS & Android apps",
      "Push notifications for lessons & assignments",
      "Offline mode — read & submit without signal",
      "Join live class from your phone",
      "Submit photo or voice work directly",
      "Calendar sync to phone calendar",
      "Biometric login",
      "Free with every plan — no extra licence",
    ],
  },
];

export const valueColumns = [
  {
    title: "One system, not a stack of apps",
    items: [
      "Lessons, content, assignments, messaging and progress in one place — students stop toggling between five apps.",
      "Teachers stop reconciling data from three systems; parents see one source of truth.",
      "Built for students who already use ChatGPT and YouTube — mobile-first, multimedia-native, AI-aware.",
      "Every feature exists to improve motivation, engagement or feedback quality — not just delivery.",
    ],
  },
  {
    title: "A teacher's day, rebuilt",
    items: [
      "Attendance captured automatically, without taking a register.",
      "Marking that runs while you are teaching another class.",
      "Parent communications that route themselves.",
      "At-risk signals surfaced before you have to go looking for them.",
    ],
  },
  {
    title: "What Dexter sees",
    items: [
      "Per-student progress trajectories across subjects, terms and behaviours.",
      "Learning-difficulty patterns — dyslexia, attention, comprehension gaps — flagged weeks before formal assessment.",
      "Live class pulse: who is following, who is stuck, who is coasting.",
      "Outcome projections — likely grades, exam readiness, students at risk.",
    ],
  },
];

export const readMore = [
  {
    href: "/dexter/vs",
    image: "/img/dexter-reasons.jpg",
    alt: "The Dexter mark rendered in colour on a grid",
    title: "10 reasons you can't avoid Dexter",
    tag: "Comparison",
  },
  {
    href: "/dexter/a-day",
    image: "/img/dexter-day.jpg",
    alt: "A teacher leaving school at the end of the day",
    title: "A day with vs. without Dexter",
    tag: "Teacher's day",
  },
  {
    href: "/dexter/behind",
    image: "/img/dexter-team.jpg",
    alt: "The Dexter team around a table",
    title: "Who is behind Dexter",
    tag: "The team",
  },
];
