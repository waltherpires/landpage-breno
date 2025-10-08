import { Clock, TrendingDown, UserCheck, TrendingUp } from "lucide-react";
import React from "react";

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-blue-400" />,
    title: "Mais Tempo para Estratégia",
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-blue-400" />,
    title: "Redução de Custos",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-blue-400" />,
    title: "Nunca Perca um Cliente",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
    title: "Escale sem Limites",
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="w-full py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Transforme sua Operação e Colha os{" "}
          <span className="text-blue-400">Resultados</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-slate-900/50 transition-colors"
          >
            {benefit.icon}
            <h3 className="mt-3 text-lg font-semibold text-white">
              {benefit.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;