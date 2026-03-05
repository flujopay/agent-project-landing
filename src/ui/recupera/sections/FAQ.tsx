"use client";

import { DropDownCard } from "@/ui/shared/DropDownCard";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "¿Por qué Sena y no otra solución?",
    answer:
      "No somos solo software. Somos tecnología + operación + estrategia. Entendemos tu industria, diseñamos tu proyecto completo y ejecutamos. Tú vendes, nosotros cobramos.",
  },
  {
    question: "¿Van a dañar mis relaciones con clientes?",
    answer:
      "Todo lo contrario. 40 años nos enseñaron que preservar relaciones genera más valor. Nuestra cobranza es personalizada y profesional.",
  },
  {
    question: "¿Cuánto tarda en ver resultados?",
    answer:
      "Primeros acuerdos típicamente en 2-3 semanas. Implementación completa en días, no meses.",
  },
  {
    question: "¿Se integra con mis sistemas?",
    answer:
      "Sí. APIs para los ERPs más usados (SAP, Oracle, etc). O trabajamos con archivos si lo prefieres. Nosotros nos encargamos de la integración.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Planes desde $39 USD/mes para la plataforma. Si necesitas equipo de cobranza, trabajamos con comisión por éxito, sin riesgo para ti. El diagnóstico inicial es gratis.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas-frecuentes" className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-semibold text-sm mb-4">
              FAQ
            </span>
            <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              Todo lo que necesitas saber antes de empezar
            </p>
            <div className="hidden lg:block">
              <p className="text-slate-500 text-sm mb-3">¿Tienes otra pregunta?</p>
              <button
                onClick={() => {
                  const element = document.getElementById("contacto");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-primary-dark transition-colors"
              >
                Contáctanos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right: Questions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            {faqs.map((faq, index) => (
              <DropDownCard
                key={index}
                isOpen={openIndex === index}
                customClassName="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                contentHead={
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full px-5 py-5 flex items-center justify-between text-left"
                  >
                    <span className="text-brand-primary-dark font-bold text-base md:text-lg pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-brand-primary transition-transform duration-300 shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                }
                contentDetail={
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-slate-600 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                }
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
