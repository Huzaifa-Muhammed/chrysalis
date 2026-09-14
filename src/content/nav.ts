export type NavItem = { href: string; label: string };

/** Drawer navigation. Pages not yet ported point at their source route names
 *  so the information architecture stays intact as the rest is built out. */
export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/concierge", label: "EDU Concierge" },
  { href: "/dexter", label: "Dexter" },
  { href: "/spark", label: "Spark" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const footerColumns: { heading: string; links: NavItem[] }[] = [
  {
    heading: "Programmes",
    links: [
      { href: "/concierge", label: "Edu Concierge" },
      { href: "/spark", label: "Spark" },
      { href: "/dexter", label: "Dexter" },
      { href: "/#our-products-and-services", label: "All programmes" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/why", label: "Our approach" },
      {
        href: "mailto:partnerships@chrysalis.education?subject=Partnership%20enquiry",
        label: "Partners",
      },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    heading: "Support",
    links: [
      {
        href: "mailto:concierge@chrysalis.education?subject=Book%20a%20free%20consultation",
        label: "Book a consultation",
      },
      { href: "/contact", label: "Speak to us" },
      { href: "/support", label: "FAQs" },
      { href: "/support", label: "Help centre" },
    ],
  },
];

export const legalNav: NavItem[] = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/cookies", label: "Cookie settings" },
];
