"use client";

import Image from "next/image";

// Placeholder para logos de clientes - reemplazar con logos reales
const clientLogos = [
  { name: "Cliente 1", src: "/logos/client-1.png" },
  { name: "Cliente 2", src: "/logos/client-2.png" },
  { name: "Cliente 3", src: "/logos/client-3.png" },
  { name: "Cliente 4", src: "/logos/client-4.png" },
  { name: "Cliente 5", src: "/logos/client-5.png" },
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
                {/* Placeholder mientras no hay logos reales */}
                <div className="h-full w-24 md:w-32 bg-slate-200 rounded flex items-center justify-center text-slate-400 text-xs">
                  {logo.name}
                </div>
                {/* Descomentar cuando haya logos reales:
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain"
                />
                */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
