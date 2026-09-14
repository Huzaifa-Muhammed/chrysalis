"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/content/home";
import { TourModal } from "./tour-modal";

export function ProductCards() {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <>
      <div className="mt-[34px] grid grid-cols-3 gap-[26px] max-[1000px]:grid-cols-1 max-[1000px]:gap-5">
        {products.map((product) => (
          <div
            key={product.title}
            className="group relative flex flex-col overflow-hidden bg-plum transition-[transform,box-shadow] duration-[240ms] hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(68,42,114,.22)]"
          >
            <div className="aspect-[4/2.5] overflow-hidden bg-panel">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                width={product.image.width}
                height={product.image.height}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col px-[26px] pt-[26px] pb-7 text-white">
              <span className="mb-[11px] block text-[12.5px] font-semibold tracking-[.06em] text-amber uppercase">
                {product.kicker}
              </span>
              <h3 className="max-w-[18ch] font-display text-[19px] leading-[1.26] font-medium tracking-[.02em] uppercase">
                {product.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.72] text-white/[.88]">{product.lead}</p>
              <p className="mt-[11px] text-[12.5px] leading-[1.75] text-white/[.62]">
                {product.chips}
              </p>
              <div className="mt-auto flex flex-wrap items-baseline justify-between gap-4 pt-[26px]">
                {"tour" in product && product.tour ? (
                  <button
                    type="button"
                    onClick={() => setTourOpen(true)}
                    className="relative z-[2] cursor-pointer border-0 bg-transparent p-0 text-[13px] text-white/[.86] underline underline-offset-4 transition-colors hover:text-amber"
                  >
                    Take a 30 sec tour
                  </button>
                ) : (
                  <span className="text-[13px] text-white/[.72]">
                    {"price" in product ? product.price : null}
                  </span>
                )}
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 text-sm text-white underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
                >
                  Read more{" "}
                  <span className="transition-transform duration-[240ms] group-hover:translate-x-1">
                    ›
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {tourOpen ? <TourModal onClose={() => setTourOpen(false)} /> : null}
    </>
  );
}
