"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import Whatsapp from "../shared/WhatsApp";
import { ComoTrabajamos } from "./sections/ComoTrabajamos";
import { Credibility } from "./sections/Credibility";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Hero } from "./sections/Hero";
import { SocialProof } from "./sections/SocialProof";

export const RecuperaPage = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (!section) return;

    const tryScroll = (attempts = 0) => {
      const element = document.getElementById(section);
      if (element) {
        const offset = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 100);
      }
    };

    tryScroll();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <Hero />
        <SocialProof />
        <ComoTrabajamos />
        <Credibility />
        <FAQ />
        <FinalCTA />
      </div>
      <Footer />
      <Whatsapp
        message="Hola, quiero información sobre Sena para gestionar mi operación financiera."
        animated
      />
    </div>
  );
};
