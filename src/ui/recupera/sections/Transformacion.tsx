"use client";

import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

const sinSena = [
  "Persigues pagos manualmente",
  "Tu equipo pierde tiempo cobrando",
  "Sin visibilidad de tu cartera",
  "Clientes molestos por llamadas genéricas",
];

const conSena = [
  "Tus clientes pagan a tiempo",
  "Tu equipo se enfoca en vender",
  "Dashboard en tiempo real",
  "Cobranza personalizada que cuida relaciones",
];

export const Transformacion = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-3">
            La diferencia es clara
          </h2>
          <p className="text-slate-600 text-lg">
            Compara tu situación actual con lo que podrías lograr
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* Sin Sena */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-100 rounded-2xl p-6 md:p-8 border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="font-canaro font-bold text-xl text-slate-700">
                Sin Sena
              </h3>
            </div>
            <ul className="space-y-4">
              {sinSena.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Con Sena */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-brand-primary-dark to-[#2a3f6e] rounded-2xl p-6 md:p-8 relative overflow-hidden"
          >
            {/* Decorations */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-primary/20 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-secondary/20 flex items-center justify-center">
                  <Check className="h-5 w-5 text-brand-secondary" />
                </div>
                <h3 className="font-canaro font-bold text-xl text-white">
                  Con Sena
                </h3>
              </div>
              <ul className="space-y-4">
                {conSena.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="h-5 w-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
