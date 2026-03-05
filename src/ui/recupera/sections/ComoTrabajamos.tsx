"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Diagnóstico",
    subtitle: "Gratis, sin compromiso",
    description: "Analizamos tu cartera, tu operación actual y tus objetivos. Te entregamos un plan personalizado.",
    image: "https://somossena.com/_next/static/media/sincroniza.2560a5fc.png",
  },
  {
    number: 2,
    title: "Diseño + Implementación",
    subtitle: "Nosotros hacemos todo",
    description: "Creamos tu estrategia de cobranza. Configuramos la plataforma. Integramos tus sistemas. Tú no tocas nada técnico.",
    image: "https://somossena.com/_next/static/media/autogestion.55341ed8.png",
  },
  {
    number: 3,
    title: "Ejecución + Seguimiento",
    subtitle: "Resultados medibles",
    description: "Comenzamos a gestionar tu cartera. Dashboard en vivo para que veas todo. Ajustes continuos para maximizar resultados.",
    image: "https://somossena.com/_next/static/media/home3.f4319194.png",
  },
];

const includes = [
  "Plataforma centralizada",
  "WhatsApp, email, SMS automatizado",
  "Equipo de negociadores expertos",
  "Reportes en tiempo real",
  "Integración con tu ERP",
  "Estrategia personalizada",
];

export const ComoTrabajamos = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="como-trabajamos" className="py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-4">
            Así funciona
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            En 3 pasos pasas de perseguir pagos a enfocarte en tu negocio
          </p>
        </motion.div>

        {/* Steps - Tab Style */}
        <div className="mb-20">
          {/* Tab Headers */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-10">
            {steps.map((step, index) => (
              <motion.button
                key={step.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`flex-1 p-5 md:p-6 rounded-2xl text-left transition-all duration-300 ${
                  activeStep === index
                    ? "bg-brand-primary-dark text-white shadow-lg shadow-brand-primary-dark/20"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold transition-colors ${
                      activeStep === index
                        ? "bg-brand-secondary text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className="font-bold text-lg">{step.title}</span>
                </div>
                <p
                  className={`text-sm transition-colors ${
                    activeStep === index ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {step.subtitle}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Active Step Content */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="bg-slate-50 p-8 md:p-12 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <Image
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    width={500}
                    height={350}
                    className="w-full h-auto rounded-2xl"
                    unoptimized
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-semibold mb-5 w-fit">
                  <span>Paso {steps[activeStep].number}</span>
                </div>
                <h3 className="font-canaro font-bold text-2xl md:text-3xl text-brand-primary-dark mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {steps[activeStep].description}
                </p>
                {activeStep === 2 && (
                  <div className="flex items-center gap-2 text-green-600 font-medium">
                    <Check className="h-5 w-5" />
                    <span>Primeros resultados en 2-3 semanas</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-primary-dark rounded-3xl p-8 md:p-12"
        >
          <h4 className="font-canaro font-bold text-white text-xl md:text-2xl mb-8 text-center">
            Todo incluido en tu proyecto
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {includes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-4"
              >
                <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3.5 w-3.5 text-brand-secondary" />
                </div>
                <span className="text-white text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
