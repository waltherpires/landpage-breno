import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const HeroSection = () => (
  <section id="hero" className="w-full py-24 md:py-32 lg:py-40">
    <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
      <div className="relative text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white pb-2 leading-tight">
          <span className="text-blue-400">Automatize</span> seu Negócio,{" "}
          <span className="text-blue-400">Libere</span> seu Tempo.
        </h1>
        <p className="max-w-xl mx-auto md:mx-0 mt-8 text-lg text-gray-300 md:text-xl">
          Crio automações{" "}
          <span className="text-blue-400 font-medium">inteligentes</span> para
          atendimento, vendas e gestão, permitindo que você foque no{" "}
          <span className="text-blue-400 font-medium">crescimento</span> da sua
          empresa.
        </p>
        <div className="mt-8">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white font-bold text-lg px-8 py-6 rounded-full transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Quero uma Consulta Gratuita
            </Button>
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          width={600}
          height={400}
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto-format&fit=crop"
          alt="Dashboard com gráficos de análise de dados"
          className="rounded-2xl shadow-2xl shadow-blue-900/40 transform perspective-1000 rotate-y-15 hover:rotate-y-0 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/600x400/0A0A14/7C3AED?text=Visual+de+Automação";
          }}
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
