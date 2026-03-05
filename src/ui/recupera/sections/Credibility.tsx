"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Globe,
  PhoneCall,
  Building2,
} from "lucide-react";

const stats = [
  {
    value: "146M",
    label: "gestiones al mes",
    icon: Zap,
  },
  {
    value: "70M",
    label: "llamadas de agentes",
    icon: PhoneCall,
  },
  {
    value: "15",
    label: "países en LATAM",
    icon: Globe,
  },
  {
    value: "+500",
    label: "empresas confían",
    icon: Building2,
  },
];

export const Credibility = () => {
  return (
    <section id="credibilidad" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary font-semibold text-sm mb-4">
            Respaldo sólido
          </span>
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-4">
            40 años respaldan cada decisión
          </h2>
          <p className="font-adobe text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            Sena nace de Recsa, referente en gestión de cartera en Latinoamérica
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-5 md:p-7 text-center border border-slate-100 hover:border-brand-primary/20 hover:shadow-lg transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-brand-primary-dark rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-brand-secondary" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-brand-primary-dark mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Powered by Recsa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-brand-primary-dark rounded-2xl px-8 py-5 shadow-xl">
            <div className="w-12 h-12 bg-brand-secondary/20 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-lg">Powered by Recsa</div>
              <div className="text-slate-400 text-sm">Líder en gestión de cartera desde 1984</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
