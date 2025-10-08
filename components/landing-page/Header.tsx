import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="text-gray-300 hover:text-blue-400 transition-colors"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    {children}
  </a>
);

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
    <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
      <a href="#hero" className="font-bold text-xl text-white">
        BRENO GUIMARÃES
      </a>
      <nav className="hidden md:flex gap-6 items-center">
        <NavLink href="#services">Serviços</NavLink>
        <NavLink href="#benefits">Benefícios</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </nav>
      <Button
        className="hidden md:flex bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white font-semibold"
        onClick={() =>
          document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Fale Conosco
      </Button>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6 text-white" />
      </Button>
    </div>
  </header>
);

export default Header;