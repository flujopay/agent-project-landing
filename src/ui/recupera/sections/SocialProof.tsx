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
    <section className="py-10 md:py-14 bg-slate-50/50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 text-sm font-medium uppercase tracking-wider mb-8"
        >
          Empresas que confían en nosotros
        </motion.p>

        {/* Marquee container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50/50 to-transparent z-10" />

          {/* Scrolling logos */}
          <motion.div
            className="flex items-center gap-16"
            animate={{
              x: [0, -80 * clientLogos.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-10 md:h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={48}
                  className="h-full w-auto object-contain"
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
