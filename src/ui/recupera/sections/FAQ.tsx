"use client";

import { DropDownCard } from "@/ui/shared/DropDownCard";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "¿Sena es un software o un servicio de cobranza?",
    answer:
      "Es un servicio completo. Somos tu equipo externo de cobranza: combinamos plataforma tecnológica, agentes de IA y especialistas humanos. Tú vendes, nosotros cobramos.",
  },
  {
    question: "¿Es como tener un equipo de cobranza propio?",
    answer:
      "Sí, pero sin los costos fijos. Piensa en Sena como tu área de cobranza on-demand: un equipo dedicado que conoce tu cartera, gestiona tus cuentas y te reporta resultados. Sin contratar, sin capacitar, sin rotación.",
  },
  {
    question: "¿Van a dañar mis relaciones con clientes?",
    answer:
      "Todo lo contrario. La cobranza agresiva cobra una vez. La cobranza bien hecha fideliza. Cobramos como lo haría alguien de tu empresa: profesional, cuidado y alineado a tu relación con cada cliente.",
  },
  {
    question: "¿Cuánto tarda en ver resultados?",
    answer:
      "Primeros acuerdos de pago típicamente en 2-3 semanas. La implementación toma días, no meses.",
  },
  {
    question: "¿Se integra con mis sistemas?",
    answer:
      "Sí. APIs para los ERPs más usados (SAP, Oracle, etc). O trabajamos con archivos si lo prefieres. Nos adaptamos a cómo operas hoy.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Depende de tu cartera. Si necesitas el servicio completo de cobranza, trabajamos con comisión por éxito — solo pagas cuando recuperamos. Sin setup complejo. El diagnóstico inicial es gratis.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas-frecuentes" className="bg-slate-50/50 py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              Todo lo que necesitas saber antes de empezar
            </p>
            <div className="hidden lg:block">
              <p className="text-slate-400 text-sm mb-4">¿Tienes otra pregunta?</p>
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
                customClassName="bg-white border border-slate-200 rounded-2xl"
                contentHead={
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="text-brand-primary-dark font-bold text-base md:text-lg pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                }
                contentDetail={
                  <div className="px-6 pb-6 pt-0">
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
