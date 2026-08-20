"use client";

import { AssetImage } from "@/lib/utils/assets/image";
import { trackEvent, trackPixel } from "@/lib/analytics";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Bell, Eye, Handshake, Users, Lightbulb, Cpu } from "lucide-react";
import { FinalCTA } from "@/ui/recupera/sections/FinalCTA";
import { SocialProof } from "@/ui/recupera/sections/SocialProof";
import { Button } from "@/ui/shared/Button";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: "smooth" });
};

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const form = document.getElementById("contacto");
    if (!form) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-border-default shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
      <button
        onClick={() => scrollToId("contacto")}
        className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-3.5 px-6 rounded-xl text-base active:scale-[0.98] transition-transform"
      >
        Cotizar para mi empresa
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export const CampanaPage = () => {
  const scrollToContact = () => {
    trackEvent({ action: "cta_click", category: "hero", label: "cotizar_para_mi_empresa" });
    trackPixel("Contact", { source: "hero_cta" });
    scrollToId("contacto");
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-secondary">
      {/* Header minimal — solo logo + teléfono */}
      <header className="w-full bg-white border-b border-border-default px-4 py-3">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={AssetImage.logoBlack} alt="Sena" className="h-7 w-auto" priority />
          </Link>
          <a
            href="tel:+56944489673"
            className="hidden md:block text-sm font-semibold text-brand-primary-dark hover:text-brand-primary transition-colors"
          >
            +56 9 4448 9673
          </a>
          <button
            onClick={scrollToContact}
            className="md:hidden flex items-center gap-1.5 bg-brand-primary text-white text-sm font-bold px-4 py-2 rounded-lg active:scale-[0.97] transition-transform"
          >
            Cotizar
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-[1280px] mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              Tu equipo de cobranza externo
            </div>

            <h1 className="font-canaro text-brand-primary-dark text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Cobrar es nuestro trabajo. <span className="text-brand-primary">Crecer es el tuyo.</span>
            </h1>

            <p className="text-text-secondary text-base md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Combinamos tecnología, agentes de IA y especialistas humanos para recuperar lo que te deben
              — sin que tengas que dedicarle un minuto.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Button
                text="Cotizar para mi empresa"
                variant="secondaryFilled"
                size="lg"
                onClick={scrollToContact}
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="w-full sm:w-auto min-h-[48px]"
              />
              <Button
                text="Cómo funciona"
                variant="primaryInvertedFilled"
                size="lg"
                onClick={() => scrollToId("como-trabajamos")}
                className="w-full sm:w-auto min-h-[48px] border border-border-default"
              />
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-4 bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">146M</div>
                <div className="text-text-secondary text-xs md:text-sm font-medium leading-tight">
                  Gestiones / mes
                </div>
              </div>
              <div className="text-center border-x border-border-default">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">40+</div>
                <div className="text-text-secondary text-xs md:text-sm font-medium leading-tight">
                  Años de experiencia
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">15</div>
                <div className="text-text-secondary text-xs md:text-sm font-medium leading-tight">
                  Países en LATAM
                </div>
              </div>
            </div>
          </div>
        </section>

        <SocialProof />

        {/* Pain points — agitación */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-4">
            <h2 className="text-brand-primary-dark text-2xl md:text-3xl font-extrabold text-center mb-2">
              ¿Cuántas horas de tu día se van en cobrar?
            </h2>
            <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
              La cobranza es crítica para tu flujo de caja — y también es lo que más te saca del foco.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <Bell className="h-6 w-6 text-brand-primary" />,
                  title: "Recordatorios interminables",
                  desc: "Enviar recordatorios y hacer seguimiento manual te quita horas que deberías invertir en crecer.",
                },
                {
                  icon: <Eye className="h-6 w-6 text-brand-primary" />,
                  title: "Cero visibilidad de quién paga",
                  desc: "No sabes quién pagó, quién prometió pagar y quién simplemente no contesta.",
                },
                {
                  icon: <Handshake className="h-6 w-6 text-brand-primary" />,
                  title: "Riesgo de dañar la relación",
                  desc: "La cobranza agresiva cobra una vez. Necesitas firmeza sin quemar la relación comercial.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-2xl p-6 border border-border-default">
                  <div className="h-10 w-10 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-brand-primary-dark text-base mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section id="como-trabajamos" className="py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-4">
            <h2 className="text-brand-primary-dark text-2xl md:text-3xl font-extrabold text-center mb-10">
              Empieza en días, no en meses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <Lightbulb className="h-6 w-6 text-brand-primary" />,
                  step: "01",
                  title: "Nos cuentas tu negocio",
                  desc: "Tu cartera, tus clientes, tu tono. Lo que necesitamos para representarte bien.",
                },
                {
                  icon: <Users className="h-6 w-6 text-brand-primary" />,
                  step: "02",
                  title: "Diseñamos tu estrategia",
                  desc: "Identificamos qué cuentas necesitan qué tratamiento y construimos el mix que maximiza la recuperación.",
                },
                {
                  icon: <Cpu className="h-6 w-6 text-brand-primary" />,
                  step: "03",
                  title: "Tecnología + personas",
                  desc: "Plataforma de gestión, agentes de IA y especialistas humanos trabajando en conjunto.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-border-default"
                >
                  <div className="text-4xl font-extrabold text-brand-primary/20 mb-3">{item.step}</div>
                  <h3 className="font-bold text-brand-primary-dark text-base mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-white py-10 border-y border-border-default">
          <div className="max-w-[1280px] mx-auto px-4">
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-wrap justify-center gap-5">
                {["Sin compromisos", "Sin setup complejo", "Tú defines el ritmo"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-text-secondary text-sm">
                    <CheckCircle className="h-4 w-4 text-brand-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact form — reusa el form real de Opera (tracking + /api/lead) */}
        <FinalCTA />
      </main>

      {/* Footer minimal */}
      <footer className="bg-white border-t border-border-default py-6 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-disabled">
          <Link href="/">
            <Image src={AssetImage.logoBlack} alt="Sena" className="h-5 w-auto opacity-60" loading="lazy" />
          </Link>
          <div className="flex gap-4">
            <Link href="/term" className="hover:text-text-secondary transition-colors">
              Términos
            </Link>
            <Link href="/privacy" className="hover:text-text-secondary transition-colors">
              Privacidad
            </Link>
            <a href="https://somossena.com" className="hover:text-text-secondary transition-colors">
              somossena.com
            </a>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
    </div>
  );
};
