import { Palette, Zap, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Design Criativo",
      description: "Soluções visuais inovadoras que capturam a essência da sua marca"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Desenvolvimento otimizado para máxima velocidade e eficiência"
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Foco em entregar projetos que geram impacto real no seu negócio"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que trabalhar comigo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Combinando criatividade e tecnologia para entregar resultados excepcionais
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;