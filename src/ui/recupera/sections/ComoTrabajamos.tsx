"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { RotateCcw, Check } from "lucide-react";

const STEP_MS = 4500;
const TOTAL_STEPS = 3;

// ── Robot positions aligned with track dots ───────────────────────────────────
// Track: 320px, margin-left: 20px, inside a 360px container
// 4 dots × 32px + 3 lines × 64px = 320px
// Dot centers from container left: 36, 132, 228, 324
// Robot (60px wide) left = dot_center - 30
const ROBOT_X = [6, 102, 198, 294];

// ── SVG Illustrations ─────────────────────────────────────────────────────────

function IllusStep1() {
  return (
    <svg width="160" height="155" viewBox="0 0 160 155" fill="none" className="w-36 h-auto shrink-0">
      <ellipse cx="52" cy="36" rx="30" ry="10" fill="rgba(55,113,209,0.10)" stroke="#3771d1" strokeWidth="1.8" />
      <rect x="22" y="36" width="60" height="44" fill="rgba(55,113,209,0.05)" stroke="#3771d1" strokeWidth="1.8" />
      <ellipse cx="52" cy="80" rx="30" ry="10" fill="rgba(55,113,209,0.09)" stroke="#3771d1" strokeWidth="1.8" />
      <ellipse cx="52" cy="57" rx="30" ry="10" fill="none" stroke="#3771d1" strokeWidth="1" strokeDasharray="4 3" opacity="0.35" />
      <text x="52" y="62" textAnchor="middle" fill="#3771d1" fontSize={9} fontFamily="Montserrat,sans-serif" fontWeight="700">DATA</text>
      <line x1="86" y1="58" x2="118" y2="78" stroke="#f6793a" strokeWidth="1.8" strokeDasharray="5 4" strokeLinecap="round">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="0.8s" repeatCount="indefinite" />
      </line>
      <circle r="5" fill="#f6793a">
        <animateMotion dur="1.3s" repeatCount="indefinite" path="M86,58 L118,78" />
      </circle>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
        <rect x="118" y="60" width="36" height="34" rx="9" fill="rgba(55,113,209,0.10)" stroke="#3771d1" strokeWidth="1.8" />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.4 }}>
        <text x="136" y="79" textAnchor="middle" fill="#111111" fontSize={8} fontFamily="Montserrat,sans-serif" fontWeight="900">sena</text>
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.4 }}>
        <circle cx="136" cy="88" r="5" fill="#3771d1" />
        <path d="M133,88 L135,90.5 L139,85" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </motion.g>
    </svg>
  );
}

function IllusStep2() {
  const bars = [
    { x: 16,  to: 104, h: 36,  fill: "rgba(55,113,209,0.18)", stroke: "#3771d1", begin: "0.35s" },
    { x: 46,  to: 74,  h: 66,  fill: "rgba(246,121,58,0.28)", stroke: "#f6793a", begin: "0.5s"  },
    { x: 76,  to: 88,  h: 52,  fill: "rgba(55,113,209,0.28)", stroke: "#3771d1", begin: "0.65s" },
    { x: 106, to: 50,  h: 90,  fill: "rgba(246,121,58,0.38)", stroke: "#f6793a", begin: "0.8s"  },
    { x: 136, to: 76,  h: 64,  fill: "rgba(55,113,209,0.18)", stroke: "#3771d1", begin: "0.95s" },
  ];
  return (
    <svg width="160" height="155" viewBox="0 0 160 155" fill="none" className="w-36 h-auto shrink-0">
      <line x1="8" y1="140" x2="155" y2="140" stroke="#e0e5f0" strokeWidth="1.5" />
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={140} width="20" height="0" rx="5" fill={b.fill} stroke={b.stroke} strokeWidth="1.5">
          <animate attributeName="height" from="0" to={b.h}   dur="0.45s" begin={b.begin} fill="freeze" />
          <animate attributeName="y"      from="140" to={b.to} dur="0.45s" begin={b.begin} fill="freeze" />
        </rect>
      ))}
      <polyline points="26,104 56,74 86,88 116,50 146,76" fill="none" stroke="rgba(246,121,58,0.55)" strokeWidth="2" strokeDasharray="180" strokeDashoffset="180">
        <animate attributeName="stroke-dashoffset" from="180" to="0" dur="1s" begin="1.1s" fill="freeze" />
      </polyline>
    </svg>
  );
}

function IllusStep3() {
  const tags = [
    { delay: 0.30, x: 6,  y: 8,  w: 68, fill: "rgba(246,121,58,0.12)", stroke: "#f6793a", label: "Prioritario",  lx: 40,  lc: "#f6793a", fw: "700" },
    { delay: 0.50, x: 84, y: 8,  w: 70, fill: "rgba(55,113,209,0.12)", stroke: "#3771d1", label: "Seguimiento",  lx: 119, lc: "#3771d1", fw: "700" },
    { delay: 0.70, x: 6,  y: 44, w: 54, fill: "rgba(30,44,80,0.05)",   stroke: "#c8cfdd", label: "Normal",        lx: 33,  lc: "#8a94ad", fw: "600" },
    { delay: 0.88, x: 70, y: 44, w: 84, fill: "rgba(246,121,58,0.07)", stroke: "#f6793a", label: "Riesgo alto",   lx: 112, lc: "#f6793a", fw: "600", dashed: true },
  ];
  return (
    <svg width="160" height="155" viewBox="0 0 160 155" fill="none" className="w-36 h-auto shrink-0">
      {tags.map((t, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: t.delay, duration: 0.4 }}>
          <rect x={t.x} y={t.y} width={t.w} height="24" rx="12" fill={t.fill} stroke={t.stroke} strokeWidth={t.dashed ? 1 : 1.5} strokeDasharray={t.dashed ? "4 3" : undefined} />
          <text x={t.lx} y={t.y + 17} textAnchor="middle" fill={t.lc} fontSize={9.5} fontFamily="Montserrat,sans-serif" fontWeight={t.fw}>{t.label}</text>
        </motion.g>
      ))}
      <line x1="6" y1="86" x2="154" y2="86" stroke="#e8eaf2" strokeWidth="1" />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.5 }}>
        <circle cx="16" cy="104" r="5" fill="rgba(246,121,58,0.5)" />
        <rect x="28" y="99"  width="80" height="10" rx="5" fill="#f0f2f8" />
        <rect x="116" y="99" width="32" height="10" rx="5" fill="rgba(55,113,209,0.13)" />
        <circle cx="16" cy="126" r="5" fill="rgba(55,113,209,0.5)" />
        <rect x="28" y="121"  width="96" height="10" rx="5" fill="#f0f2f8" />
        <rect x="132" y="121" width="20" height="10" rx="5" fill="rgba(246,121,58,0.13)" />
      </motion.g>
    </svg>
  );
}

// ── Robot SVG ─────────────────────────────────────────────────────────────────

function RobotSVG({ showThink, current }: { showThink: boolean; current: number }) {
  return (
    <svg width="60" height="70" viewBox="0 0 60 70" overflow="visible">
      {/* Think bubbles */}
      <AnimatePresence>
        {showThink && (
          <motion.g key="think" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.circle
              cx="50" cy="32" r="3.5" fill="#f6793a"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              transition={{ type: "spring", delay: 0.05 }}
            />
            <motion.circle
              cx="57" cy="22" r="5" fill="#f6793a" opacity={0.8}
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              transition={{ type: "spring", delay: 0.18 }}
            />
            <motion.g
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }}
              style={{ transformBox: "fill-box", transformOrigin: "62px 11px" }}
              transition={{ type: "spring", delay: 0.32 }}
            >
              <circle cx="62" cy="11" r="7.5" fill="#f6793a" />
              <text x="62" y="15" textAnchor="middle" fontSize={7} fontFamily="Montserrat,sans-serif" fontWeight="800" fill="white">AI</text>
            </motion.g>
          </motion.g>
        )}
      </AnimatePresence>

      {/* Body — bobbing */}
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Antenna */}
        <line x1="30" y1="5" x2="30" y2="13" stroke="#3771d1" strokeWidth="2" strokeLinecap="round" />
        <motion.circle
          cx="30" cy="3.5" r="3.5" fill="#f6793a"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Head */}
        <rect x="12" y="13" width="36" height="26" rx="8" fill="white" stroke="#3771d1" strokeWidth="2" />
        <rect x="16" y="17" width="28" height="18" rx="4" fill="rgba(55,113,209,0.07)" stroke="#3771d1" strokeWidth="1" />

        {/* Left eye */}
        <motion.rect
          x="18" y="21" width="9" height="9" rx="4.5" fill="#3771d1"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.88, 0.93, 0.96, 1] }}
        />
        <circle cx="21.5" cy="25" r="2.5" fill="white" opacity={0.6} />

        {/* Right eye (delayed) */}
        <motion.rect
          x="33" y="21" width="9" height="9" rx="4.5" fill="#3771d1"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.88, 0.93, 0.96, 1], delay: 0.25 }}
        />
        <circle cx="36.5" cy="25" r="2.5" fill="white" opacity={0.6} />

        {/* Smile */}
        <path d="M22 33 Q30 38 38 33" stroke="#3771d1" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Body */}
        <rect x="14" y="41" width="32" height="18" rx="6" fill="white" stroke="#3771d1" strokeWidth="2" />

        {/* Chest glow */}
        <motion.circle
          cx="30" cy="50" r="4" fill="rgba(246,121,58,0.25)" stroke="#f6793a" strokeWidth="1.5"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="17" y="45" width="6" height="3" rx="1.5" fill="rgba(55,113,209,0.18)" />
        <rect x="37" y="45" width="6" height="3" rx="1.5" fill="rgba(55,113,209,0.18)" />
      </motion.g>

      {/* Wheels — spin on move */}
      <motion.g
        style={{ transformOrigin: "21px 65px" }}
        animate={{ rotate: current * 540 }}
        transition={{ duration: 1.3, ease: "linear" }}
      >
        <circle cx="21" cy="65" r="6" fill="white" stroke="#3771d1" strokeWidth="2" />
        <line x1="21" y1="59" x2="21" y2="71" stroke="#3771d1" strokeWidth="1.2" opacity={0.35} />
        <line x1="15" y1="65" x2="27" y2="65" stroke="#3771d1" strokeWidth="1.2" opacity={0.35} />
      </motion.g>
      <motion.g
        style={{ transformOrigin: "39px 65px" }}
        animate={{ rotate: current * 540 }}
        transition={{ duration: 1.3, ease: "linear" }}
      >
        <circle cx="39" cy="65" r="6" fill="white" stroke="#3771d1" strokeWidth="2" />
        <line x1="39" y1="59" x2="39" y2="71" stroke="#3771d1" strokeWidth="1.2" opacity={0.35} />
        <line x1="33" y1="65" x2="45" y2="65" stroke="#3771d1" strokeWidth="1.2" opacity={0.35} />
      </motion.g>
    </svg>
  );
}

// ── Track + Robot ─────────────────────────────────────────────────────────────

function TrackWithRobot({ current }: { current: number }) {
  const [showThink, setShowThink] = useState(false);

  useEffect(() => {
    setShowThink(false);
    const t = setTimeout(() => setShowThink(true), 1200);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <div className="relative mt-8" style={{ width: 360 }}>
      {/* Robot — absolutely positioned above track */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ bottom: "100%", marginBottom: 10 }}
        initial={{ left: ROBOT_X[0] }}
        animate={{ left: ROBOT_X[current] }}
        transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
      >
        <RobotSVG showThink={showThink} current={current} />
      </motion.div>

      {/* Track dots */}
      <div className="flex items-center" style={{ marginLeft: 20 }}>
        {[0, 1, 2, 3].map((i) => {
          const isActive = i === current;
          const isDone = i < current;
          return (
            <div key={i} className="flex items-center">
              {i > 0 && (
                <div
                  className="transition-colors duration-500"
                  style={{ width: 64, height: 1, background: isDone ? "#3771d1" : "#dde2ee" }}
                />
              )}
              <div
                className="relative flex items-center justify-center rounded-full text-[11px] font-extrabold transition-all duration-300"
                style={{
                  width: 32,
                  height: 32,
                  border: isActive ? "2.5px solid #f6793a" : isDone ? "2px solid #3771d1" : "2px solid #dde2ee",
                  background: isDone ? "#3771d1" : "white",
                  color: isActive ? "#f6793a" : isDone ? "white" : "#c0c8db",
                  boxShadow: isActive ? "0 0 0 6px rgba(246,121,58,0.12)" : "none",
                }}
              >
                {isDone ? (
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                ) : (
                  <span>{i === 3 ? "✓" : `0${i + 1}`}</span>
                )}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ border: "2px solid #f6793a" }}
                    animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Step data ─────────────────────────────────────────────────────────────────

type StepData = {
  number: string;
  label: string;
  titleParts: [string, string, string];
  description: string;
  Illus: () => React.ReactElement;
};

const STEPS: StepData[] = [
  {
    number: "01",
    label: "Paso 1 de 3",
    titleParts: ["Nos cuentas ", "tu negocio", ""],
    description: "Tu cartera, tus clientes, tu tono. Lo que necesitamos para representarte bien.",
    Illus: IllusStep1,
  },
  {
    number: "02",
    label: "Paso 2 de 3",
    titleParts: ["Diseñamos tu ", "estrategia", ""],
    description: "No todos los clientes con atraso son iguales. Identificamos qué cuentas necesitan qué tratamiento y construimos el mix que maximiza la recuperación.",
    Illus: IllusStep2,
  },
  {
    number: "03",
    label: "Paso 3 de 3",
    titleParts: ["Tecnología + ", "personas", ""],
    description: "Plataforma de gestión, agentes de IA y especialistas humanos trabajando en conjunto. La combinación correcta para tu caso.",
    Illus: IllusStep3,
  },
];

// ── Main Component ────────────────────────────────────────────────────────────

export const ComoTrabajamos = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (current < TOTAL_STEPS) {
      timerRef.current = setTimeout(() => setCurrent((c) => c + 1), STEP_MS);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  const restart = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrent(0);
  };

  const step = current < TOTAL_STEPS ? STEPS[current] : null;

  return (
    <section
      id="como-trabajamos"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "#f4f6fb" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(55,113,209,0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Blobs */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: 380, height: 380, top: -80, right: -40, background: "rgba(55,113,209,0.07)", filter: "blur(90px)" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 280, height: 280, bottom: -60, left: "8%", background: "rgba(246,121,58,0.06)", filter: "blur(90px)" }} />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-4">
            Empieza en días, no en meses
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Así funciona nuestro servicio de cobranza
          </p>
        </motion.div>

        {/* Animation area */}
        <div className="flex flex-col items-center">
          {/* Step card */}
          <div className="w-full max-w-[800px]" style={{ minHeight: 280 }}>
            <AnimatePresence mode="wait">
              {step ? (
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.38 }}
                  className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-10 items-center relative overflow-hidden"
                  style={{
                    boxShadow: "0 2px 4px rgba(30,44,80,0.04), 0 12px 40px rgba(30,44,80,0.10), 0 0 0 1px rgba(55,113,209,0.08)",
                  }}
                >
                  <div className="absolute top-0 left-10 right-10 h-[3px] rounded-b" style={{ background: "linear-gradient(90deg,#3771d1,#f6793a)" }} />

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white text-lg font-extrabold shrink-0"
                        style={{ background: "#f6793a", boxShadow: "0 4px 14px rgba(246,121,58,0.35)" }}
                      >
                        {step.number}
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="text-xs font-bold text-slate-400 uppercase tracking-widest"
                      >
                        {step.label}
                      </motion.span>
                    </div>

                    <motion.h3
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15, duration: 0.45 }}
                      className="font-canaro font-extrabold text-3xl md:text-4xl text-brand-primary-dark leading-tight mb-4"
                    >
                      {step.titleParts[0]}
                      <em className="not-italic" style={{ color: "#3771d1" }}>{step.titleParts[1]}</em>
                      {step.titleParts[2]}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.45 }}
                      className="text-slate-500 text-base md:text-lg leading-relaxed"
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="shrink-0 flex items-center justify-center"
                  >
                    <step.Illus />
                  </motion.div>
                </motion.div>
              ) : (
                /* Final screen */
                <motion.div
                  key="final"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="bg-white rounded-3xl p-10 md:p-14 flex flex-col items-center text-center relative overflow-hidden"
                  style={{ boxShadow: "0 2px 4px rgba(30,44,80,0.04), 0 20px 56px rgba(30,44,80,0.12)" }}
                >
                  <div className="absolute top-0 left-16 right-16 h-[3px] rounded-b" style={{ background: "linear-gradient(90deg,#3771d1,#f6793a)" }} />

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ border: "2.5px solid #f6793a", background: "rgba(246,121,58,0.07)" }}
                  >
                    <Check className="w-10 h-10" style={{ color: "#f6793a" }} strokeWidth={2.5} />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.55 }}
                    className="font-canaro font-extrabold text-3xl md:text-4xl text-brand-primary-dark mb-3 leading-tight"
                  >
                    Tú monitoreas.{" "}
                    <em className="not-italic" style={{ color: "#f6793a" }}>Nosotros cobramos.</em>
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs font-bold tracking-[2px] text-slate-400 uppercase mb-8"
                  >
                    Panel en tiempo real · Sin sorpresas · Sin microgestión
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    className="flex flex-wrap justify-center items-center gap-2"
                  >
                    {STEPS.map((s) => (
                      <div key={s.number} className="flex items-center gap-2">
                        <div
                          className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-50 border"
                          style={{ borderColor: "rgba(55,113,209,0.14)" }}
                        >
                          <div className="w-5 h-5 rounded-full text-white text-[9px] font-extrabold flex items-center justify-center shrink-0" style={{ background: "#f6793a" }}>
                            {s.number}
                          </div>
                          <span className="text-xs font-bold text-brand-primary-dark leading-tight" style={{ maxWidth: 80 }}>
                            {s.titleParts[0]}{s.titleParts[1]}{s.titleParts[2]}
                          </span>
                        </div>
                        <span className="font-black text-lg" style={{ color: "#3771d1" }}>›</span>
                      </div>
                    ))}
                    <div
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border"
                      style={{ borderColor: "rgba(246,121,58,0.4)", background: "rgba(246,121,58,0.05)" }}
                    >
                      <div className="w-5 h-5 rounded-full text-white text-[9px] font-extrabold flex items-center justify-center shrink-0" style={{ background: "#3771d1" }}>04</div>
                      <span className="text-xs font-bold leading-tight" style={{ color: "#f6793a", maxWidth: 80 }}>¡A cobrar!</span>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Track + Robot */}
          <TrackWithRobot current={current} />

          {/* Restart button */}
          <button
            onClick={restart}
            className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[rgba(55,113,209,0.2)] text-brand-primary-dark text-xs font-bold hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-200 cursor-pointer shadow-sm"
            style={{ opacity: current === TOTAL_STEPS ? 1 : 0.4 }}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Repetir
          </button>
        </div>
      </div>
    </section>
  );
};
