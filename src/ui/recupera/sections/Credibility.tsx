import {
  Award,
  Globe,
  PhoneCall,
  Zap,
  Building2,
} from "lucide-react";

const stats = [
  {
    value: "146M",
    label: "gestiones/mes",
    icon: Zap,
  },
  {
    value: "70M",
    label: "llamadas de agentes",
    icon: PhoneCall,
  },
  {
    value: "15",
    label: "países LATAM",
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
    <section id="credibilidad" className="bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-primary-dark mb-4">
            40 años respaldan cada decisión
          </h2>
          <p className="font-adobe text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            Sena nace de Recsa, referente en gestión de cartera en Latinoamérica.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8 text-center hover:shadow-md transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-brand-secondary/10 rounded-xl mb-4 group-hover:bg-brand-secondary/20 transition-colors">
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-brand-secondary" />
                </div>
                <div className="text-2xl md:text-4xl font-extrabold text-brand-primary-dark mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-xs md:text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Powered by Recsa Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-brand-primary-dark rounded-full px-6 py-3 shadow-lg">
            <Award className="h-5 w-5 text-brand-secondary" />
            <span className="text-white font-adobe font-semibold">
              Powered by Recsa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
