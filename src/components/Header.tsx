import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          Ita
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <Link to="/sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre Mim
          </Link>
          <Link to="/projetos" className="text-foreground hover:text-primary transition-colors">
            Projetos
          </Link>
          <Link to="/especialidades" className="text-foreground hover:text-primary transition-colors">
            Especialidades
          </Link>
        </nav>

        <Button asChild className="hidden md:block">
          <Link to="/contato">Contato</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;