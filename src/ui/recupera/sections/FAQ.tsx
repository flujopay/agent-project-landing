"use client";

import { DropDownCard } from "@/ui/shared/DropDownCard";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Van a dañar mis relaciones con clientes?",
    answer:
      "Todo lo contrario. 40 años nos enseñaron que preservar relaciones genera más valor.",
  },
  {
    question: "¿Cuánto tarda en ver resultados?",
    answer:
      "Primeros acuerdos típicamente en 2-3 semanas.",
  },
  {
    question: "¿Se integra con mis sistemas?",
    answer:
      "Sí. APIs para los ERPs más usados. O trabajamos con archivos.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Depende de tu volumen y necesidades. El diagnóstico inicial es gratis.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="preguntas-frecuentes" className="bg-[#F9F9F9] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <DropDownCard
              key={index}
              isOpen={openIndex === index}
              customClassName="bg-white border-2 border-slate-200 rounded-2xl shadow-sm"
              contentHead={
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-all duration-300"
                >
                  <span className="text-brand-primary-dark font-bold text-xl pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 text-brand-primary transition-transform duration-300 shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              }
              contentDetail={
                <div className="px-6 mb-6 pt-2">
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
