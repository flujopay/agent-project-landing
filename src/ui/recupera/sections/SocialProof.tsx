"use client";

import Image from "next/image";

const clientLogos = [
  { name: "Científica Andina", src: "https://somossena.com/_next/static/media/cientifica_logo.1b3f19e5.png" },
  { name: "Proweld", src: "https://somossena.com/_next/static/media/proweld_logo.2df9f015.png" },
  { name: "Aquarius Consulting", src: "https://somossena.com/_next/static/media/aquarius_consulting_logo.b34fbc2a.png" },
  { name: "Top Space", src: "https://somossena.com/_next/static/media/top_space_logo.145e55c9.png" },
  { name: "Maruz", src: "https://somossena.com/_next/static/media/maruz_logo.b330e9ab.png" },
  { name: "AOM", src: "https://somossena.com/_next/static/media/aom_logo.699160f3.png" },
];

export const SocialProof = () => {
  return (
    <section className="py-8 md:py-12 bg-white border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <span className="text-slate-500 text-sm font-medium whitespace-nowrap">
            Confían en nosotros:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
