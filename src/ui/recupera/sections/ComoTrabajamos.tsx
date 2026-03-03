"use client";

import { Check } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Diagnóstico",
    description: "Analizamos tu cartera y operación. Gratis, sin compromiso.",
    image: "https://somossena.com/_next/static/media/sincroniza.2560a5fc.png",
  },
  {
    number: 2,
    title: "Diseño + Implementación",
    description: "Creamos tu estrategia. Configuramos todo. Tú no tocas nada técnico.",
    image: "https://somossena.com/_next/static/media/autogestion.55341ed8.png",
  },
  {
    number: 3,
    title: "Ejecución + Seguimiento",
    description: "Comenzamos a gestionar. Dashboard en vivo. Ajustes continuos.",
    image: "https://somossena.com/_next/static/media/home3.f4319194.png",
  },
];

const includes = [
  "Plataforma centralizada",
  "Automatización WhatsApp, email, SMS",
  "Equipo de negociadores expertos",
  "Reportes en tiempo real",
];

export const ComoTrabajamos = () => {
  return (
    <section id="como-trabajamos" className="py-16 md:py-24 bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-4">
            Así funciona
          </h2>
        </div>

        {/* Steps with images */}
        <div className="space-y-16 md:space-y-24 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-bold mb-4">
                  PASO {step.number}
                </div>
                <h3 className="font-canaro font-bold text-2xl md:text-3xl text-brand-primary-dark mb-4">
                  {step.title}
                </h3>
                <p className="font-adobe text-slate-600 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full max-w-lg">
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={500}
                    height={300}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="bg-brand-primary-dark rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
          <h4 className="font-canaro font-bold text-white text-lg mb-4 text-center">
            Qué incluye tu proyecto
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
