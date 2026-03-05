"use client";

import { Button } from "@/ui/shared/Button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToComoTrabajamos = () => {
    const element = document.getElementById("como-trabajamos");
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-primary-dark via-brand-primary-dark to-[#2a3f6e]">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-secondary/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <span className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse" />
              <span className="text-white/90 font-medium text-sm">
                Tecnología + Personalización
              </span>
            </motion.div>

            <h1 className="text-white font-canaro text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              No somos otro software.
              <br />
              <span className="text-brand-secondary">Somos tu equipo</span>
              <br />
              de cobranza.
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Plataforma + estrategia + operación personalizada para tu negocio.
              Diseñamos tu proyecto completo. Tú vendes, nosotros cobramos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                text="Agendar diagnóstico gratis"
                variant="secondaryFilled"
                size="lg"
                onClick={scrollToContact}
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="text-base md:text-lg px-6"
              />
              <button
                onClick={scrollToComoTrabajamos}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
              >
                <Play className="h-4 w-4" />
                Cómo funciona
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Desde $39 USD/mes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Resultados en 2-3 semanas</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Stat Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  +85%
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  Tasa de recuperación
                </div>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-2">
                  15
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  Países en LATAM
                </div>
              </motion.div>

              {/* Stat Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  40+
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  Años de experiencia
                </div>
              </motion.div>

              {/* Stat Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-gradient-to-br from-brand-secondary to-brand-secondary-dark rounded-2xl p-6"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  146M
                </div>
                <div className="text-white/90 text-sm font-medium">
                  Gestiones al mes
                </div>
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-primary-dark border-2 border-brand-secondary/30 rounded-full px-5 py-2 shadow-xl"
            >
              <span className="text-white text-sm font-semibold whitespace-nowrap">
                Powered by Recsa
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
