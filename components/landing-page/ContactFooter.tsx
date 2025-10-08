import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const formSubmitEmail = process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL;
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const ContactFooter = () => (
  <footer
    id="contact"
    className="w-full border-t border-slate-800 py-16 md:py-24"
  >
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold">
            Vamos construir o <span className="text-blue-400">futuro</span> do
            seu negócio.
          </h3>
          <p className="text-gray-400 mt-4 max-w-md">
            A automação não é apenas sobre tecnologia, é sobre{" "}
            <span className="text-blue-400 font-medium">liberdade</span>.
            Preencha o formulário ou envie uma mensagem e descubra como posso
            ajudar.
          </p>
        </div>
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl">
          <h4 className="text-2xl font-bold text-center mb-6">
            Envie uma Mensagem
          </h4>
          <form
            action={`https://formsubmit.co/${formSubmitEmail}`}
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="true" />
            <input
              type="hidden"
              name="_next"
              value={typeof window !== "undefined" ? window.location.href : ""}
            />
            <input
              type="hidden"
              name="_subject"
              value="Nova mensagem pela landpage!"
            />

            <div>
              <Label htmlFor="email" className="text-gray-400">
                Seu E-mail
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="bg-slate-900 border-slate-700 mt-2"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-gray-400">
                Seu Telefone
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                required
                className="bg-slate-900 border-slate-700 mt-2"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-400">
                Mensagem
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                className="bg-slate-900 border-slate-700 mt-2"
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white text-lg py-6"
            >
              Enviar Contato
            </Button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-slate-700"></div>
            <span className="flex-shrink mx-4 text-gray-500">ou</span>
            <div className="flex-grow border-t border-slate-700"></div>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full bg-slate-800/20 backdrop-blur-sm border-blue-500 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-colors text-lg py-6"
            >
              <FaWhatsapp className="w-10 h-10 mr-2" />
              Contato via WhatsApp
            </Button>
          </a>
        </div>
      </div>
      <div className="text-center mt-16 border-t border-slate-800 pt-8">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Breno Guimarães. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default ContactFooter;
