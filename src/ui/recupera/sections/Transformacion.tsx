"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const propuesta = [
  "Personalizado a tu cartera — analizamos antes de ejecutar",
  "Tu tono, tus reglas — cobramos como lo haría alguien de tu empresa",
  "Sin romper relaciones — cobranza firme, sin quemar puentes",
  "Respaldo de 40+ años y presencia en 15 países de LATAM",
];

export const Transformacion = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        {/* El Problema */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-6">
            ¿Cuántas horas de tu día se van en cobrar?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Enviar recordatorios. Hacer seguimiento. Preguntarte quién pagó,
            quién prometió y quién simplemente no contesta. La cobranza es
            crítica para tu flujo de caja — y también es lo que más te saca del
            foco.
          </p>
        </motion.div>

        {/* La Propuesta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-brand-primary-dark rounded-3xl p-8 md:p-12 lg:p-14"
        >
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h3 className="font-canaro font-extrabold text-2xl md:text-3xl lg:text-4xl text-white mb-4">
              Nosotros nos encargamos.
            </h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Sena es un servicio completo de cobranza B2B. Analizamos tu
              cartera y te asignamos la combinación correcta de herramientas y
              personas para cobrar según tus lineamientos.
            </p>
            <p className="text-brand-secondary font-bold text-lg mt-4">
              Tú defines las reglas. Nosotros ejecutamos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {propuesta.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-brand-secondary" />
                </div>
                <span className="text-white/90 text-[15px]">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
