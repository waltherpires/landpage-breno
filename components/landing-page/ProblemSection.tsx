import React from "react";

const ProblemSection = () => (
  <section id="problem" className="w-full py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Sua rotina é dominada por{" "}
        <span className="text-blue-400">tarefas manuais</span>?
      </h2>
      <p className="max-w-3xl mx-auto mt-4 text-gray-400">
        Tempo gasto respondendo as mesmas perguntas, leads perdidos por
        falta de acompanhamento rápido, processos manuais que geram
        erros... Se isso soa familiar, existe uma{" "}
        <span className="text-blue-400 font-medium">
          solução mais inteligente
        </span>
        .
      </p>
    </div>
  </section>
);

export default ProblemSection;