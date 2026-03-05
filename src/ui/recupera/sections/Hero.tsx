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
    <div className="relative bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/[0.03] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/[0.03] rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-20 md:py-28 lg:py-36 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10 mb-8"
          >
            <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full" />
            <span className="text-brand-primary-dark font-medium text-sm">
              Tecnología + Personalización
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-canaro text-brand-primary-dark text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6"
          >
            No somos otro software.
            <br />
            <span className="text-brand-secondary">Somos tu equipo.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Plataforma + estrategia + operación personalizada.
            <br className="hidden md:block" />
            Diseñamos tu proyecto completo. Tú vendes, nosotros cobramos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              text="Agendar diagnóstico gratis"
              variant="secondaryFilled"
              size="lg"
              onClick={scrollToContact}
              rightIcon={<ArrowRight className="h-5 w-5" />}
              className="text-base md:text-lg px-8"
            />
            <button
              onClick={scrollToComoTrabajamos}
              className="inline-flex items-center gap-2 px-6 py-3 text-brand-primary-dark font-semibold hover:text-brand-primary transition-colors"
            >
              <div className="w-10 h-10 rounded-full border-2 border-brand-primary/20 flex items-center justify-center">
                <Play className="h-4 w-4 text-brand-primary ml-0.5" />
              </div>
              Ver cómo funciona
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Desde $39 USD/mes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Resultados en 2-3 semanas</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar - Clean style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="border-t border-slate-100"
      >
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            <div className="py-8 md:py-10 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-primary-dark mb-1">
                +85%
              </div>
              <div className="text-slate-500 text-sm">
                Tasa de recuperación
              </div>
            </div>
            <div className="py-8 md:py-10 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-primary-dark mb-1">
                15
              </div>
              <div className="text-slate-500 text-sm">
                Países en LATAM
              </div>
            </div>
            <div className="py-8 md:py-10 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-primary-dark mb-1">
                40+
              </div>
              <div className="text-slate-500 text-sm">
                Años de experiencia
              </div>
            </div>
            <div className="py-8 md:py-10 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-secondary mb-1">
                146M
              </div>
              <div className="text-slate-500 text-sm">
                Gestiones al mes
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
