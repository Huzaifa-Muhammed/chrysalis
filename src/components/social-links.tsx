const icons = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  LinkedIn: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5v6" />
      <circle cx="7.5" cy="7.6" r=".9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-3.2a2.3 2.3 0 0 1 4.6 0v3.2" />
      <path d="M11.5 13.3v-2.8" />
    </>
  ),
  YouTube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </>
  ),
  WhatsApp: (
    <>
      <path d="M20.5 12a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.2-4.2A8.5 8.5 0 1 1 20.5 12z" />
      <path
        d="M8.8 9.2c0 3 2.2 5.2 5 5.4.6 0 1.3-.5 1.4-1.1l-1.8-.9-.8.8a5 5 0 0 1-1.9-1.9l.8-.8-.9-1.8c-.7.1-1.2.7-1.2 1.4z"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
};

/** Social accounts are unannounced — every href is a placeholder in the source. */
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {(Object.keys(icons) as (keyof typeof icons)[]).map((name) => (
        <a
          key={name}
          href="#"
          aria-label={name}
          className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-line text-ink transition-colors hover:border-ink"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {icons[name]}
          </svg>
        </a>
      ))}
    </div>
  );
}
