import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Olá, eu sou
              <span className="block text-primary">Itauanny Rafaelle</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Criadora de Conteúdo Visual apaixonada por filmagens, faço vídeos com significado, não só com efeitos.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/projetos">Ver Meus Projetos</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/sobre">Sobre Mim</Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://www.instagram.com/itaframes"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5588291196863&text=Oi%2C+gostaria+de+saber+mais%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Phone size={20} />
            </a>
            <a
              href="mailto:seu@email.com"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="/lovable-uploads/e39b15bf-2708-4721-9d98-82c086000d8b.png"
                alt="Itauanny Rafaelle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;