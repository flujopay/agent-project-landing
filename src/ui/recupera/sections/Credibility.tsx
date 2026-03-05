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
    <section id="credibilidad" className="bg-white py-20 md:py-28">
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
            40 años respaldan cada decisión
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Sena nace de Recsa, referente en gestión de cartera en Latinoamérica
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mb-14">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-50 rounded-3xl p-6 md:p-8 text-center group hover:bg-slate-100 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-primary-dark rounded-2xl mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="h-7 w-7 text-brand-secondary" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-brand-primary-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
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
          <div className="inline-flex items-center gap-4 bg-brand-primary-dark rounded-2xl px-8 py-5">
            <div className="w-12 h-12 bg-brand-secondary/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
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
