import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Rocket, Cog } from "lucide-react";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const services = [
  {
    icon: <Bot className="w-10 h-10 text-blue-400" />,
    title: "Automação de Atendimento ao Cliente",
    description:
      "Respostas instantâneas para seus clientes no WhatsApp e outras plataformas, 24/7.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-blue-400" />,
    title: "Disparos e Funis de Venda",
    description:
      "Envie mensagens personalizadas para nutrir leads, recuperar carrinhos e aumentar suas vendas.",
  },
  {
    icon: <Cog className="w-10 h-10 text-blue-400" />,
    title: "Integração com CRMs e Sistemas",
    description:
      "Conecto suas ferramentas ao seu CRM, garantindo que nenhum dado seja perdido.",
  },
];

const ServicesCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="services" className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Soluções de Automação{" "}
            <span className="text-blue-400">Sob Medida</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-gray-400">
            Desde o primeiro contato com o cliente até a gestão interna,
            eu crio o fluxo perfeito para o seu negócio.
          </p>
        </div>
        <Carousel
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
          opts={{ loop: true }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 p-4"
              >
                <Card className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 text-center flex flex-col items-center justify-around h-full hover:border-blue-500 transition-all duration-300 group">
                  <CardHeader className="flex flex-col items-center">
                    {service.icon}
                    <CardTitle className="mt-4 text-xl font-semibold text-white text-center min-w-60">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-6 pt-0">
                    <p className="text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesCarousel;