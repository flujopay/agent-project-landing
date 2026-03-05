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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-4">
            La diferencia es clara
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Compara tu situación actual con lo que podrías lograr
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Sin Sena */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-50 rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                <X className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="font-canaro font-bold text-2xl text-slate-700">
                Sin Sena
              </h3>
            </div>
            <ul className="space-y-5">
              {sinSena.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5 text-red-400" />
                  </div>
                  <span className="text-slate-600 text-lg">{item}</span>
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
            className="bg-brand-primary-dark rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-secondary/20 flex items-center justify-center">
                <Check className="h-6 w-6 text-brand-secondary" />
              </div>
              <h3 className="font-canaro font-bold text-2xl text-white">
                Con Sena
              </h3>
            </div>
            <ul className="space-y-5">
              {conSena.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-brand-secondary" />
                  </div>
                  <span className="text-white/90 text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
