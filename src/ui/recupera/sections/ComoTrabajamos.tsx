"use client";

import {
  Search,
  Settings,
  Rocket,
  Check,
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Diagnóstico",
    description: "Analizamos tu cartera y operación. Gratis, sin compromiso.",
    icon: Search,
  },
  {
    number: 2,
    title: "Diseño + Implementación",
    description: "Creamos tu estrategia. Configuramos todo. Tú no tocas nada técnico.",
    icon: Settings,
  },
  {
    number: 3,
    title: "Ejecución + Seguimiento",
    description: "Comenzamos a gestionar. Dashboard en vivo. Ajustes continuos.",
    icon: Rocket,
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
    <section id="como-trabajamos" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-4">
            Así funciona
          </h2>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8 text-center hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-secondary/10 rounded-xl mb-4">
                  <Icon className="h-7 w-7 text-brand-secondary" />
                </div>
                <div className="text-xs font-bold text-brand-primary mb-2">
                  PASO {step.number}
                </div>
                <h3 className="font-canaro font-bold text-xl text-brand-primary-dark mb-3">
                  {step.title}
                </h3>
                <p className="font-adobe text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
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
