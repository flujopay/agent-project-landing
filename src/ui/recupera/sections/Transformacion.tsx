"use client";

import { X, Check, ArrowRight } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl text-brand-primary-dark">
            La diferencia es clara
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Sin Sena */}
          <div className="bg-slate-100 rounded-2xl p-6 md:p-8">
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
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Con Sena */}
          <div className="bg-brand-primary-dark rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
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
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
