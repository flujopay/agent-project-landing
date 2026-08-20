import type { Metadata } from "next";
import { CampanaPage } from "@/ui/campana/CampanaPage";

export const metadata: Metadata = {
  title: "Tu equipo de cobranza externo | Sena",
  description:
    "Sena combina tecnología, agentes de IA y especialistas humanos para recuperar lo que te deben, sin que tengas que dedicarle un minuto.",
  robots: { index: false, follow: false },
};

export default function Campana() {
  return (
    <div className="w-full">
      <CampanaPage />
    </div>
  );
}
