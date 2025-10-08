"use client";

import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import ServicesCarousel from "./ServicesCarousel";
import BenefitsSection from "./BenefitsSection";
import CTASection from "./CTASection";
import ContactFooter from "./ContactFooter";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-gray-100 font-sans overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-900/50 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-purple-900/50 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <main className="mt-16">
          <HeroSection />
          <ProblemSection />
          <ServicesCarousel />
          <BenefitsSection />
          <CTASection />
          <ContactFooter />
        </main>
      </div>
    </div>
  );
}
