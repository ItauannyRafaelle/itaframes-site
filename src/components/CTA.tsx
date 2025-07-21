import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para trabalhar juntos?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <a
              href="https://api.whatsapp.com/send/?phone=5588291196863&text=Oi%2C+gostaria+de+saber+mais%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entrar em Contato
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/projetos">Ver Projetos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;