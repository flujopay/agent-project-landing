"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clientLogos = [
  { name: "Científica Andina", src: "https://somossena.com/_next/static/media/cientifica_logo.1b3f19e5.png" },
  { name: "Proweld", src: "https://somossena.com/_next/static/media/proweld_logo.2df9f015.png" },
  { name: "Aquarius Consulting", src: "https://somossena.com/_next/static/media/aquarius_consulting_logo.b34fbc2a.png" },
  { name: "Top Space", src: "https://somossena.com/_next/static/media/top_space_logo.145e55c9.png" },
  { name: "Maruz", src: "https://somossena.com/_next/static/media/maruz_logo.b330e9ab.png" },
  { name: "AOM", src: "https://somossena.com/_next/static/media/aom_logo.699160f3.png" },
];

// Duplicate for infinite scroll effect
const allLogos = [...clientLogos, ...clientLogos];

export const SocialProof = () => {
  return (
    <section className="py-6 md:py-8 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <span className="text-slate-500 text-sm font-semibold whitespace-nowrap uppercase tracking-wider">
            Confían en nosotros
          </span>

          {/* Marquee container */}
          <div className="relative flex-1 w-full overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Scrolling logos */}
            <motion.div
              className="flex items-center gap-12"
              animate={{
                x: [0, -50 * clientLogos.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {allLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-10 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all"
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
