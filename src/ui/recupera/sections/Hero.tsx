"use client";

import { Button } from "@/ui/shared/Button";
import { ArrowRight } from "lucide-react";

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

  return (
    <div className="relative overflow-hidden transition-all gap-6 bg-[#F9F9F9] p-4 md:p-6">
      <div className="max-w-[1280px] mx-auto px-4 py-8 md:py-16 md:pt-12 md:pb-8 relative z-10">
        <div className="text-center mx-auto">
          {/* Tagline */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-adobe font-medium text-sm mb-4 md:mb-6">
            El arte de cobrar bien
          </span>

          <h1 className="text-brand-primary-dark font-canaro text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
            Deja de perseguir pagos
          </h1>

          <p className="text-slate-700 text-sm md:text-lg lg:text-xl mt-3 md:mt-4 max-w-3xl mx-auto leading-relaxed">
            Analizamos tu cartera. Diseñamos la estrategia. Ejecutamos. Tus clientes pagan.
          </p>

          {/* Diferenciador */}
          <p className="text-brand-primary font-semibold text-base md:text-xl mt-4 mb-6 md:mb-8">
            No es solo software. Es tu operación de cobranza completa.
          </p>

          {/* CTA único con urgencia */}
          <div className="flex flex-col items-center gap-3">
            <Button
              text="Agendar diagnóstico gratis"
              variant="secondaryFilled"
              size="lg"
              onClick={scrollToContact}
              rightIcon={<ArrowRight className="h-5 w-5" />}
              className="text-base md:text-lg px-8"
            />
            <span className="text-xs text-slate-500 font-medium">
              Cupos limitados este mes
            </span>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-[1000px] mx-auto px-4 py-2 pb-8 md:py-4 md:pb-12">
        <div className="flex bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden">
          <div className="flex-1 p-3 md:p-8 text-center">
            <div className="text-lg md:text-4xl font-extrabold text-brand-primary mb-0.5 md:mb-1">
              +85%
            </div>
            <div className="text-slate-600 text-[9px] md:text-sm font-medium leading-tight">
              Recuperación
            </div>
          </div>
          <div className="flex-1 p-3 md:p-8 text-center border-l border-slate-200">
            <div className="text-lg md:text-4xl font-extrabold text-brand-primary mb-0.5 md:mb-1">
              15 países
            </div>
            <div className="text-slate-600 text-[9px] md:text-sm font-medium leading-tight">
              LATAM
            </div>
          </div>
          <div className="flex-1 p-3 md:p-8 text-center border-l border-slate-200">
            <div className="text-lg md:text-4xl font-extrabold text-brand-primary mb-0.5 md:mb-1">
              40+ años
            </div>
            <div className="text-slate-600 text-[9px] md:text-sm font-medium leading-tight">
              de Recsa
            </div>
          </div>
          <div className="flex-1 p-3 md:p-8 text-center border-l border-slate-200">
            <div className="text-lg md:text-4xl font-extrabold text-brand-primary mb-0.5 md:mb-1">
              146M
            </div>
            <div className="text-slate-600 text-[9px] md:text-sm font-medium leading-tight">
              gestiones/mes
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
