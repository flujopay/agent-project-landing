"use client";

import { Check, Zap, Settings, BarChart3 } from "lucide-react";
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
    icon: Zap,
    color: "brand-secondary",
  },
  {
    number: 2,
    title: "Diseño + Implementación",
    subtitle: "Nosotros hacemos todo",
    description: "Creamos tu estrategia de cobranza. Configuramos la plataforma. Integramos tus sistemas. Tú no tocas nada técnico.",
    image: "https://somossena.com/_next/static/media/autogestion.55341ed8.png",
    icon: Settings,
    color: "brand-primary",
  },
  {
    number: 3,
    title: "Ejecución + Seguimiento",
    subtitle: "Resultados medibles",
    description: "Comenzamos a gestionar tu cartera. Dashboard en vivo para que veas todo. Ajustes continuos para maximizar resultados.",
    image: "https://somossena.com/_next/static/media/home3.f4319194.png",
    icon: BarChart3,
    color: "brand-secondary",
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
    <section id="como-trabajamos" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-semibold text-sm mb-4">
            Proceso simple
          </span>
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-4">
            Así funciona
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            En 3 pasos pasas de perseguir pagos a enfocarte en tu negocio
          </p>
        </motion.div>

        {/* Steps - Tab Style */}
        <div className="mb-16">
          {/* Tab Headers */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-8">
            {steps.map((step, index) => (
              <motion.button
                key={step.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`flex-1 p-4 md:p-5 rounded-xl text-left transition-all ${
                  activeStep === index
                    ? "bg-brand-primary-dark text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                      activeStep === index
                        ? "bg-brand-secondary text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className="font-bold text-lg">{step.title}</span>
                </div>
                <p
                  className={`text-sm ${
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
            className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="bg-gradient-to-br from-slate-100 to-slate-50 p-6 md:p-10 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <Image
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    width={500}
                    height={350}
                    className="w-full h-auto rounded-xl shadow-md"
                    unoptimized
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-semibold mb-4 w-fit">
                  <span>Paso {steps[activeStep].number}</span>
                </div>
                <h3 className="font-canaro font-bold text-2xl md:text-3xl text-brand-primary-dark mb-3">
                  {steps[activeStep].title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {steps[activeStep].description}
                </p>
                {activeStep === 2 && (
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
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
          className="bg-gradient-to-r from-brand-primary-dark to-[#2a3f6e] rounded-2xl p-6 md:p-10"
        >
          <h4 className="font-canaro font-bold text-white text-xl md:text-2xl mb-6 text-center">
            Todo incluido en tu proyecto
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {includes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
              >
                <Check className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                <span className="text-white text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
