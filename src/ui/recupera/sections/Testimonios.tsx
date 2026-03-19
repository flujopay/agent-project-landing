"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonios = [
  {
    name: "Carolina Mendoza",
    role: "Gerente General",
    company: "Distribuidora Austral",
    text: "Antes dedicábamos 3 personas solo a perseguir pagos. Con Sena dejé de pensar en cobranza. Ellos se encargan de todo y solo me avisan cuando necesitan una decisión. Recuperamos un 40% más el primer mes.",
    stars: 5,
    initials: "CM",
  },
  {
    name: "Roberto Fuentes",
    role: "Dueño",
    company: "Importadora Andes SpA",
    text: "Es como tener un equipo de cobranza propio pero sin los costos fijos. Cobran con nuestro tono, respetan nuestras relaciones comerciales y me reportan todo en tiempo real. No volvería atrás.",
    stars: 5,
    initials: "RF",
  },
  {
    name: "Marcela Vásquez",
    role: "Gerente de Finanzas",
    company: "Proweld Chile",
    text: "Lo que más me sorprendió fue la velocidad. En una semana ya estaban gestionando nuestra cartera. Y la combinación de tecnología con personas reales hace la diferencia — no es un bot genérico.",
    stars: 5,
    initials: "MV",
  },
];

export const Testimonios = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Empresas que ya transformaron su cobranza con Sena
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-7 md:p-8 border border-slate-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-brand-secondary fill-brand-secondary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-brand-primary-dark text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-primary-dark">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
