"use client";

import { Button } from "@/ui/shared/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const feedItems = [
  {
    color: "bg-green-500",
    label: "8 facturas gestionadas",
    sub: "Email corporativo · seguimiento B2B",
    time: "09:03",
    processing: "Analizando cartera vencida...",
  },
  {
    color: "bg-brand-primary",
    label: "Pago confirmado · $2.1M",
    sub: "Fac. 4489 · conciliado automáticamente",
    time: "09:11",
    processing: "Verificando pagos recibidos...",
  },
  {
    color: "bg-brand-secondary",
    label: "Criterio requerido",
    sub: "Fac. 4471–4475 · $4.2M · 45 días",
    time: "09:14",
    processing: "Evaluando riesgo de mora...",
    isAlert: true,
  },
  {
    color: "bg-green-500",
    label: "3 conciliaciones completadas",
    sub: "Matching automático · sin diferencias",
    time: "09:18",
    processing: "Conciliando con registros...",
  },
];

const AgentFeed = () => {
  const [visibleItems, setVisibleItems] = useState(0);
  const [processingIndex, setProcessingIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    if (processingIndex >= feedItems.length) return;

    // Show "processing" state first
    const processingDelay = processingIndex === 0 ? 1500 : 2200;
    const processingTimer = setTimeout(() => {
      setIsProcessing(false);
      // Then reveal the resolved item
      const resolveTimer = setTimeout(() => {
        setVisibleItems((prev) => prev + 1);
        setProcessingIndex((prev) => prev + 1);
        setIsProcessing(true);
      }, 600);
      return () => clearTimeout(resolveTimer);
    }, processingDelay);

    return () => clearTimeout(processingTimer);
  }, [processingIndex]);

  return (
    <div className="p-3 overflow-hidden">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] font-bold text-brand-primary-dark uppercase tracking-wide">
          Actividad del agente
        </span>
        <span className="flex items-center gap-1 text-[9px] text-green-500 font-semibold">
          <span className="w-[5px] h-[5px] rounded-full bg-green-500 animate-pulse" />
          En vivo
        </span>
      </div>
      <div className="space-y-0">
        {feedItems.map((item, index) => {
          // Show processing indicator for current item
          if (index === processingIndex && isProcessing && index < feedItems.length) {
            return (
              <motion.div
                key={`processing-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 py-2 border-b border-slate-100"
              >
                <div className="flex gap-[3px] mt-0.5 shrink-0">
                  <span className="w-1 h-1 rounded-full bg-brand-primary/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1 h-1 rounded-full bg-brand-primary/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1 h-1 rounded-full bg-brand-primary/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
                <span className="text-[10px] text-slate-400 italic">
                  {item.processing}
                </span>
              </motion.div>
            );
          }

          // Show resolved items
          if (index < visibleItems) {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className={`flex items-start gap-2 py-2 border-b border-slate-100 ${
                  item.isAlert ? "-mx-3 px-3 bg-brand-secondary/[0.03]" : ""
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${item.color} mt-1 shrink-0`} />
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-semibold text-brand-primary-dark leading-tight">
                    {item.label}
                  </div>
                  <div className="text-[9px] text-slate-400">{item.sub}</div>
                </div>
                <span className="text-[9px] text-slate-400 shrink-0">
                  {item.time}
                </span>
              </motion.div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToComoTrabajamos = () => {
    const element = document.getElementById("como-trabajamos");
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero: 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-72px)]">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-20 lg:border-r border-slate-100"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-secondary/[0.08] border border-brand-secondary/20 mb-8 w-fit">
            <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-pulse" />
            <span className="text-brand-secondary font-semibold text-xs uppercase tracking-wider">
              Agente activo 24/7
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-canaro text-brand-primary-dark text-4xl md:text-5xl lg:text-[3.2rem] xl:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
            Tu cartera
            <br />
            cobra{" "}
            <span className="text-brand-primary">
              sola<span className="text-brand-secondary font-serif">.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-10 max-w-md border-l-2 border-slate-200 pl-4">
            Sena no es otro software que tendrás que operar. Es una plataforma que{" "}
            <strong className="text-brand-primary-dark">
              gestiona tu cartera de cuentas por cobrar
            </strong>{" "}
            — seguimiento, gestión con clientes y alertas tempranas — y solo te
            interrumpe cuando necesita tu decisión.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
            <Button
              text="Ver demo en vivo"
              variant="secondaryFilled"
              size="lg"
              onClick={scrollToContact}
              rightIcon={<ArrowRight className="h-5 w-5" />}
              className="text-base px-7"
            />
            <button
              onClick={scrollToComoTrabajamos}
              className="inline-flex items-center gap-2 px-4 py-3 text-slate-500 font-medium text-sm hover:text-brand-primary-dark transition-colors"
            >
              Cómo funciona
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Proof bar */}
          <div className="flex rounded-xl border border-slate-200 overflow-hidden divide-x divide-slate-200">
            <div className="flex-1 py-4 px-5">
              <div className="font-canaro font-extrabold text-xl text-brand-primary-dark leading-none">
                146M
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                gestiones / mes
              </div>
            </div>
            <div className="flex-1 py-4 px-5">
              <div className="font-canaro font-extrabold text-xl text-brand-primary-dark leading-none">
                40+
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                años de experiencia
              </div>
            </div>
            <div className="flex-1 py-4 px-5">
              <div className="font-canaro font-extrabold text-xl text-brand-primary-dark leading-none">
                15
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                países en LATAM
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center p-8 xl:p-12 bg-brand-primary/[0.03]"
        >
          <div className="w-full max-w-[580px] bg-white rounded-xl border border-slate-200 shadow-[0_20px_60px_rgba(30,44,80,0.15)] overflow-hidden text-[11px]">
            {/* Dashboard Topbar */}
            <div className="flex items-center justify-between px-3.5 h-9 bg-brand-primary-dark">
              <div className="flex items-center gap-3">
                <span className="font-canaro font-extrabold text-[13px] text-white">
                  Sena<span className="text-brand-secondary font-serif">.</span>
                </span>
                <div className="w-px h-4 bg-white/15" />
                <div className="flex gap-0.5">
                  <span className="text-white bg-white/10 px-2.5 py-1 rounded text-[11px] font-medium">
                    Cartera
                  </span>
                  <span className="text-white/40 px-2.5 py-1 text-[11px] font-medium">
                    Clientes
                  </span>
                  <span className="text-white/40 px-2.5 py-1 text-[11px] font-medium">
                    Gestiones
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5 bg-green-500/15 border border-green-500/25 text-green-400 text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                  <span className="w-[5px] h-[5px] rounded-full bg-green-400 animate-pulse" />
                  Agente activo
                </div>
                <div className="w-[22px] h-[22px] rounded-full bg-brand-primary text-white text-[9px] font-bold flex items-center justify-center">
                  CF
                </div>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="flex h-[340px]">
              {/* Sidebar */}
              <div className="w-[120px] shrink-0 border-r border-slate-100 bg-slate-50/80 py-3 hidden xl:block">
                <div className="text-[8px] font-bold uppercase tracking-wider text-slate-400/50 px-3 mb-1.5">
                  Resumen
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-brand-primary-dark bg-white border-l-2 border-brand-primary">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="2" y="2" width="5" height="5" rx="1" />
                    <rect x="9" y="2" width="5" height="5" rx="1" opacity=".5" />
                    <rect x="2" y="9" width="5" height="5" rx="1" opacity=".5" />
                    <rect x="9" y="9" width="5" height="5" rx="1" opacity=".3" />
                  </svg>
                  Dashboard
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-slate-400 font-medium">
                  Facturas
                  <span className="ml-auto text-[9px] font-bold bg-brand-primary/10 text-brand-primary px-1.5 py-0.5 rounded-full">
                    47
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-slate-400 font-medium">
                  Clientes
                </div>
                <div className="text-[8px] font-bold uppercase tracking-wider text-slate-400/50 px-3 mt-3 mb-1.5">
                  Agente
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-slate-400 font-medium">
                  Actividad
                  <span className="ml-auto text-[9px] font-bold bg-brand-secondary/10 text-brand-secondary px-1.5 py-0.5 rounded-full">
                    3
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-slate-400 font-medium">
                  Historial
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* KPI Strip */}
                <div className="grid grid-cols-4 border-b border-slate-100">
                  <div className="p-3 border-r border-slate-100">
                    <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wide mb-1">
                      Cartera total
                    </div>
                    <div className="font-canaro font-extrabold text-[15px] text-brand-primary-dark leading-none">
                      $28.4M
                    </div>
                    <div className="text-[9px] text-green-500 font-medium mt-1">
                      ↑ 12% vs sem. ant.
                    </div>
                  </div>
                  <div className="p-3 border-r border-slate-100">
                    <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wide mb-1">
                      Recuperado
                    </div>
                    <div className="font-canaro font-extrabold text-[15px] text-green-600 leading-none">
                      $8.1M
                    </div>
                    <div className="text-[9px] text-green-500 font-medium mt-1">
                      ↑ 23% vs sem. ant.
                    </div>
                  </div>
                  <div className="p-3 border-r border-slate-100">
                    <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wide mb-1">
                      DSO promedio
                    </div>
                    <div className="font-canaro font-extrabold text-[15px] text-brand-primary-dark leading-none">
                      34 días
                    </div>
                    <div className="text-[9px] text-brand-primary font-medium mt-1">
                      ↓ 8 días vs mes ant.
                    </div>
                  </div>
                  <div className="p-3 bg-brand-secondary/[0.03]">
                    <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wide mb-1">
                      Requieren acción
                    </div>
                    <div className="font-canaro font-extrabold text-[15px] text-brand-secondary leading-none">
                      3
                    </div>
                    <div className="text-[9px] text-slate-400 font-medium mt-1">
                      Esperan tu criterio
                    </div>
                  </div>
                </div>

                {/* Two columns: Aging + Activity */}
                <div className="grid grid-cols-2 flex-1 overflow-hidden">
                  {/* Aging */}
                  <div className="p-3 border-r border-slate-100">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold text-brand-primary-dark uppercase tracking-wide">
                        Aging de cartera
                      </span>
                      <span className="text-[9px] text-slate-400">
                        47 facturas
                      </span>
                    </div>
                    <div className="space-y-3">
                      {/* 0-30 */}
                      <div className="flex items-center gap-2">
                        <div className="w-[65px] shrink-0">
                          <div className="text-[9px] text-slate-400">
                            0–30 días
                          </div>
                          <div className="text-[10px] font-semibold text-brand-primary-dark">
                            $19.3M
                          </div>
                        </div>
                        <div className="flex-1 h-[5px] bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="h-full bg-green-500 rounded-full origin-left"
                            style={{ width: "68%" }}
                          />
                        </div>
                        <span className="text-[10px] font-bold text-brand-primary-dark w-7 text-right">
                          68%
                        </span>
                      </div>
                      {/* 31-60 */}
                      <div className="flex items-center gap-2">
                        <div className="w-[65px] shrink-0">
                          <div className="text-[9px] text-slate-400">
                            31–60 días
                          </div>
                          <div className="text-[10px] font-semibold text-brand-primary-dark">
                            $5.4M
                          </div>
                        </div>
                        <div className="flex-1 h-[5px] bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            className="h-full bg-brand-secondary rounded-full origin-left"
                            style={{ width: "19%" }}
                          />
                        </div>
                        <span className="text-[10px] font-bold text-brand-primary-dark w-7 text-right">
                          19%
                        </span>
                      </div>
                      {/* +60 */}
                      <div className="flex items-center gap-2">
                        <div className="w-[65px] shrink-0">
                          <div className="text-[9px] text-slate-400">
                            +60 días
                          </div>
                          <div className="text-[10px] font-semibold text-brand-primary-dark">
                            $3.7M
                          </div>
                        </div>
                        <div className="flex-1 h-[5px] bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.7, delay: 0.9 }}
                            className="h-full bg-red-500 rounded-full origin-left"
                            style={{ width: "13%" }}
                          />
                        </div>
                        <span className="text-[10px] font-bold text-brand-primary-dark w-7 text-right">
                          13%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Agent Activity */}
                  <AgentFeed />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="border-t border-slate-100"
      >
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            <div className="py-8 md:py-10 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-primary-dark mb-1">
                +85%
              </div>
              <div className="text-slate-500 text-sm">
                Tasa de recuperación
              </div>
            </div>
            <div className="py-8 md:py-10 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-primary-dark mb-1">
                15
              </div>
              <div className="text-slate-500 text-sm">Países en LATAM</div>
            </div>
            <div className="py-8 md:py-10 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-primary-dark mb-1">
                40+
              </div>
              <div className="text-slate-500 text-sm">
                Años de experiencia
              </div>
            </div>
            <div className="py-8 md:py-10 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-secondary mb-1">
                146M
              </div>
              <div className="text-slate-500 text-sm">Gestiones al mes</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
