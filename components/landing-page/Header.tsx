import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

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
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-slate-950/80 backdrop-blur-lg border-l border-slate-800 text-white w-3/4 p-6">
            <nav className="flex flex-col items-start gap-8 pt-16 text-2xl font-medium">
              <SheetClose asChild>
                <NavLink href="#services">Serviços</NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink href="#benefits">Benefícios</NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink href="#contact">Contato</NavLink>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
);

export default Header;
