"use client";

import { useEffect, useState } from "react";

/** Sticky contents list that highlights the section currently under the top of the viewport. */
export function LegalToc({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const update = () => {
      let current = 0;
      items.forEach((item, i) => {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 120) current = i;
      });
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [items]);

  return (
    <nav className="ltoc" aria-label="Contents">
      <div className="k">Contents</div>
      <ol>
        {items.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={i === active ? "on" : undefined} dangerouslySetInnerHTML={{ __html: item.label }} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
