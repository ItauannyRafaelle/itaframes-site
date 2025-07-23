import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock } from "lucide-react";

const Projetos = () => {
  const projects = [
    {
      id: 1,
      title: "Correio Elegante - SESI",
      description: "Edição leve e divertida para fazer a divulgação do Correio Elegante do terceirão.",
      thumbnail: "https://i.ibb.co/932Lcwq2/correio-elegante-1920x1080-blurred-background.png",
      duration: "1:15",
      tools: ["iPhone 13", "Capcut"],
      type: "video",
      link: "https://www.youtube.com/watch?v=GuQFR0QF0SQ"
    },
    {
      id: 2,
      title: "Robot Reveal - Robótica",
      description: "Vídeo dinâmico de apresentação e revelação do robô, com cortes rápidos e clima de revelação e mistério.",
      thumbnail: "https://i.ibb.co/hxmVpJvr/image.png",
      duration: "0:58",
      tools: ["iPhone 12", "Capcut"],
      type: "video",
      link: "https://www.youtube.com/watch?v=lGtkY-m6cjk"
    },
    {
      id: 3,
      title: "Vídeo da sala de avaliação - Robótica",
      description: "Vídeo com os momentos da equipe para ser mostrado na sala de avaliação com foco na emoção e na preparação da equipe durante a temporada.",
      thumbnail: "https://i.ibb.co/MkkvDjSr/image.png",
      duration: "1:23",
      tools: ["iPhone 12", "Capcut"],
      type: "video",
      link: "https://www.youtube.com/watch?v=_etmbuYwZYA"
    },
    {
      id: 4,
      title: "Peça A falência - Feira SESI",
      description: "Vídeo da apresentação rápida e visual do elenco, com clima dramático e teatral.",
      thumbnail: "https://i.ibb.co/rRY4vLNg/casal-1920x1080-blurred-background.png",
      duration: "0:12",
      tools: ["iPhone 12", "Capcut", "Prequel"],
      type: "video",
      link: "https://www.youtube.com/watch?v=e81YjK-HI5k"
    },
    {
      id: 5,
      title: "Aula de ciências - prática",
      description: "Registros da aula prática de natureza",
      thumbnail: "https://i.ibb.co/gZG2TRh8/image.png",
      duration: "0:27",
      tools: ["iPhone 11", "Capcut"],
      type: "video",
      link: "https://www.youtube.com/watch?v=Iiy0FrYrCt8"
    },
    {
      id: 6,
      title: "Divulgação da Recanttos Burguer",
      description: "Divulgação simples dos suculentos hambúrgueres da Recanttos Burguer.",
      thumbnail: "https://img.youtube.com/vi/lj0NFuRhByY/hqdefault.jpg",
      duration: "0:16",
      tools: ["iPhone 12","Capcut"],
      type: "video",
      link: "https://www.youtube.com/shorts/lj0NFuRhByY"
    },
    {
      id: 7,
      title: "Cobertura São João Massayo - Ávila Produções",
      description: "Cobertura dos equipamentos do A2 BackLine - 26/06 no São João Massayo - Léo Santana",
      thumbnail: "https://img.youtube.com/vi/wWT-3YHvMW4/maxresdefault.jpg",
      duration: "0:23",
      tools: ["Capcut"],
      type: "video",
      link: "https://youtube.com/shorts/wWT-3YHvMW4?si=arifBXIHoPn6_HNJ"
    },
    {
      id: 8,
      title: "Cobertura São João Massayo - Ávila Produções - Simone Mendes",
      description: "Cobertura dos equipamentos do A2 BackLine - 26/06 no São João Massayo - Simone Mendes",
      thumbnail: "https://img.youtube.com/vi/sClHo3lN1Ns/maxresdefault.jpg",
      duration: "0:33",
      tools: ["Capcut"],
      type: "video",
      link: "https://youtube.com/shorts/sClHo3lN1Ns?si=sw-3_pxHW-zWTgBJ"
    },
    {
      id: 9,
      title: "Aula de Taekwondo - Melhores momentos",
      description: "Cobertura da aula de Taekwondo do Mestre Adriano.",
      thumbnail: "https://img.youtube.com/vi/8Wqdku24kG4/maxresdefault.jpg",
      duration: "0:11",
      tools: ["iPhone 12","Capcut"],
      type: "video",
      link: "https://youtube.com/shorts/8Wqdku24kG4?si=rF4BQVPmhqzv8qmS"
    },
    {
      id: 10,
      title: "Cobertura São João Massayo - Ávila Produções - Calcinha Preta",
      description: "Cobertura dos equipamentos do A2 BackLine - 26/06 no São João Massayo - Calcinha Preta",
      thumbnail: "https://img.youtube.com/vi/8avC8R0vFio/maxresdefault.jpg",
      duration: "0:19",
      tools: ["Capcut"],
      type: "video",
      link: "https://youtube.com/shorts/8avC8R0vFio?si=PlvjE5F0g0YvVNpB"
    }
  ];

  const [activeFilter, setActiveFilter] = useState("videos");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Meu <span className="text-primary">Portfólio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Produções audiovisuais e fotográficas que contam histórias e conectam pessoas
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="flex bg-muted rounded-lg p-1">
                <button
                  onClick={() => setActiveFilter("videos")}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    activeFilter === "videos"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Vídeos ({projects.length})
                </button>
                <button
                  onClick={() => setActiveFilter("fotos")}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    activeFilter === "fotos"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Fotos (0)
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {project.link && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 rounded flex items-center text-sm"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Assistir
                        </a>
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {project.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium border rounded-md transition-colors hover:bg-accent"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Assistir
                      </a>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full" disabled>
                        <Play className="w-4 h-4 mr-2" />
                        Sem link
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projetos;
