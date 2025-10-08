import { Button } from "@/components/ui/button";
import React from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const CTASection = () => (
  <section id="cta" className="w-full py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <div className="bg-gradient-to-r from-blue-900/50 via-slate-950 to-slate-950 border border-slate-700 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Pronto para levar sua empresa para o{" "}
            <span className="text-blue-400">futuro</span>?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-300">
            Vamos conversar sobre como a automação pode revolucionar o seu
            negócio. A primeira consulta é por minha conta.
          </p>
          <div className="mt-8">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-xs mx-auto"
            >
              <Button
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white font-bold text-xs md:text-lg px-8 py-6 rounded-full transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                Sim, Quero Automatizar Meu Negócio!
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
